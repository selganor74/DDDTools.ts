/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IEventHandler.ts" />

// import {IDomainEvent} from "./IDomainEvent";
// import {IEventHandler} from "./IEventHandler";

namespace DDDTools.DomainEvents {

    import IPromise = Promises.IPromise;

    export interface IDispatcher {

        /**
         * register an handler for an event type.
         * the scope parameter is the context (this) in which the handler will be executed
         */
        registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any);

        /**
         * unregister a previoulsy registered handler for an event type.
         */
        unregisterHandler(eventTypeName: string, handler: IEventHandler);

        /**
         * dispatches an event to the registered handlers.
         * it will return a promise that will be resolved when all promises will be resolved, and rejected if any will be rejected.
         */
        dispatch(event: IDomainEvent): IPromise<any>;
    }
}