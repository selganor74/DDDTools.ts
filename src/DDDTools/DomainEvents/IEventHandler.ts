import {IDomainEvent} from "./IDomainEvent";

// namespace DDDTools.DomainEvents {

export interface IEventHandler {
    (domainEvent: IDomainEvent): void;
}

// }