/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDispatcher.ts" />
/// <reference path="./IEventHandler.ts" />

// import {IDomainEvent} from "./IDomainEvent";
// import {IDispatcher} from "./IDispatcher";
// import {IEventHandler} from "./IEventHandler";

namespace DDDTools.DomainEvents {

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

        public static dispatch(event: IDomainEvent) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.dispatch(event);
            }
        }
    }
}