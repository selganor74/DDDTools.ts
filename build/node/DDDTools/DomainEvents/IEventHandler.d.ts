/// <reference path="IDomainEvent.d.ts" />
declare namespace DDDTools.DomainEvents {
    interface IEventHandler {
        (domainEvent: IDomainEvent): void;
    }
}
