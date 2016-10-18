/// <reference path="./IDomainEvent.ts" />
/// <reference path="../Promises/PromiseHandler.ts" />

namespace DDDTools.DomainEvents {

    import IPromise = Promises.IPromise;

    /**
     * Form of an Event Handler.
     * When asyncronous processing occour within an Handler, it is good practice to return a promise, so the dispatcher (and the event raiser)
     */
    export interface ITypedEventHandler<T extends IDomainEvent> {
        (domainEvent: T): IPromise<any> | void;
    }

}