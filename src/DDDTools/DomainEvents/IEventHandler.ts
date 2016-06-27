/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDomainEvent.ts" />
// import {IDomainEvent} from "./IDomainEvent";

namespace DDDTools.DomainEvents {

    export interface IEventHandler {
        (domainEvent: IDomainEvent): any;
    }

}