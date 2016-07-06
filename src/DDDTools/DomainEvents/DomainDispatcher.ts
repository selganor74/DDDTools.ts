/// <reference path="../Promises/PromiseHandler.ts" />

/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDispatcher.ts" />
/// <reference path="./IEventHandler.ts" />

// import {IDomainEvent} from "./IDomainEvent";
// import {IDispatcher} from "./IDispatcher";
// import {IEventHandler} from "./IEventHandler";

namespace DDDTools.DomainEvents {

    import IPromise = Promises.IPromise;

    export class DomainDispatcher {
        private static dispatcherImplementation: IDispatcher;

        public static setDispatcherImplementation(dispatcher: IDispatcher) {
            var sThis = DomainDispatcher;
            sThis.dispatcherImplementation = dispatcher;
        }

        public static registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.registerHandler(eventTypeName, handler, scope);
            }
        }

        public static unregisterHandler(eventTypeName: string, handler: IEventHandler) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.unregisterHandler(eventTypeName, handler);
            }
        }

        public static dispatch(event: IDomainEvent): IPromise<any> {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                return sThis.dispatcherImplementation.dispatch(event);
            }
        }
    }
}