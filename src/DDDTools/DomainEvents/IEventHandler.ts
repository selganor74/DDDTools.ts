/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDomainEvent.ts" />
// import {IDomainEvent} from "./IDomainEvent";

namespace DDDTools.DomainEvents {

    import IPromise = Promises.IPromise;

    export interface IEventHandler {
        (domainEvent: IDomainEvent): void | IPromise<any> | any;
    }

}