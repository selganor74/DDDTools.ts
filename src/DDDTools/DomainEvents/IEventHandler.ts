/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDomainEvent.ts" />
// import {IDomainEvent} from "./IDomainEvent";

namespace DDDTools.DomainEvents {

    import IPromise = Promises.IPromise;

    /**
     * Form of an Event Handler.
     * When asyncronous processing occour within an Handler, it is good practice to return a promise, so the dispatcher (and the event raiser)
     */
    export interface IEventHandler {
        (domainEvent: IDomainEvent): IPromise<any> | void;
    }

}