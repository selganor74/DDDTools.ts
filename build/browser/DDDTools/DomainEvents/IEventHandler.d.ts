import { IDomainEvent } from "./IDomainEvent";
export interface IEventHandler {
    (domainEvent: IDomainEvent): void;
}
