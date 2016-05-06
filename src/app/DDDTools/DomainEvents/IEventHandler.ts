/// <reference path="IDomainEvent.ts" />

namespace DDDTools.DomainEvents {

    export interface IEventHandler {
        (domainEvent: IDomainEvent): void;
    }

}