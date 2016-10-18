/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDispatcher.ts" />
/// <reference path="../Promises/PromiseHandler.ts" />

namespace DDDTools.DomainEvents {

    import IPromise = Promises.IPromise;

    /**
     * Identifies a class that handles a particular event type.
     */
    export interface IEventConsumer<T extends IDomainEvent> {
        consumeEvent(domainEvent: T): IPromise<any> | void;
        registerHandlers(dispatcher: IDispatcher): void;
        unregisterHandlers(dispatcher: IDispatcher): void;
    }
}