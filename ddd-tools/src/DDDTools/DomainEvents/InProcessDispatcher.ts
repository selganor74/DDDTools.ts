/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IEventHandler.ts" />
/// <reference path="../Utils/SimpleGuid.ts" />

// import {IDomainEvent} from "./IDomainEvent";
// import {IEventHandler} from "./IEventHandler";
// import {SimpleGuid} from "../Utils/SimpleGuid";

namespace DDDTools.DomainEvents {

    import SimpleGuid = Utils.SimpleGuid;
    import PromiseHandler = Promises.PromiseHandler;
    import IPromise = Promises.IPromise;

    type HandlerAndScopeContainer = { handler: IEventHandler, originalScope: any }

    export class InProcessDispatcher {
        private delegatesRegistry: { [eventTypeName: string]: { [handlerId: string]: HandlerAndScopeContainer } } = {};

        public clear() {
            this.delegatesRegistry = {};
        }

        /**
         * the scope parameter can be passed in to warranty that callback will be called in the original context [this]!!!
         */
        public registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any) {
            if (!this.delegatesRegistry[eventTypeName]) {
                this.delegatesRegistry[eventTypeName] = {};
            }

            var handlerId: string;

            // "Stamps" the handler if not already "stamped"
            if (!(<any>handler).__handlerId) {
                (<any>handler).__handlerId = SimpleGuid.generate();
            }

            handlerId = (<any>handler).__handlerId;

            if (!this.delegatesRegistry[eventTypeName][handlerId]) {
                this.delegatesRegistry[eventTypeName][handlerId] = {
                    handler: handler,
                    originalScope: scope
                }
            }
        }

        public unregisterHandler(eventTypeName: string, handler: IEventHandler) {
            // Act only id handler has been registered.
            if ((<any>handler).__handlerId) {
                var handlerId = (<any>handler).__handlerId;
                delete this.delegatesRegistry[eventTypeName][handlerId];
            }
        }

        public dispatch(event: IDomainEvent): IPromise<any> {
            if (!this.delegatesRegistry[event.__typeName]) {
                return PromiseHandler.when();
            }
            var errors: Error[] = [];
            var promiseArray: IPromise<any>[] = [];
            for (var element in this.delegatesRegistry[event.__typeName]) {
                try {
                    var handler = this.delegatesRegistry[event.__typeName][element].handler;
                    var scope = this.delegatesRegistry[event.__typeName][element].originalScope;
                    
                    var returnValue: any;
                    if (scope) {
                        returnValue = handler.call(scope, event);
                    } else {
                        returnValue = handler(event);
                    }
                    // if we get a promise, we add it to the list of promises
                    if (returnValue) {
                        if (this.isAPromise(returnValue)) {
                            var promise;
                            promise = (<IPromise<any>>returnValue).catch(
                                (error) => {
                                    errors.push(error);
                                }
                            );
                            promiseArray.push(promise);
                        }
                    }
                } catch (e) {
                    errors.push(e);
                }
            }
            // the promise returned will be resolved when all of the promises in the array will be resolved.
            return PromiseHandler.all(promiseArray).then(
                () => {
                    if (errors.length != 0) {
                        var message = this.buildErrorMessage(errors);
                        var e = new Error(message);
                        e.name = "Errors while processing event " + event.__typeName;
                        console.log(e);
                        console.log(event);
                    }
                },(error) => {
                    console.log(error);                    
                });
        }

        private isAPromise(valueToTest: any) {
            return ( valueToTest.then && typeof valueToTest.then === 'function') && (valueToTest.catch && typeof valueToTest.catch === 'function')
        }

        private buildErrorMessage(Errors: Error[]): string {
            var message: string = "";
            for (var element of Errors) {
                message += element.name + ":" + element.message + "\n";
            }
            return message;
        }
    }
}