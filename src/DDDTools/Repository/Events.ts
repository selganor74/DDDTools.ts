import {IDomainEvent} from "../DomainEvents/IDomainEvent";

// namespace DDDTools.UnitOfWork {

export class Events {
    private static __nameSpace = "DDDTools.Repository";
    public static ItemAddedEvent = Events.__nameSpace + ".ItemAddedEvent";
    public static ItemUpdatedEvent = Events.__nameSpace + ".ItemUpdatedEvent";
    public static ItemDeletedEvent = Events.__nameSpace + ".ItemDeletedEvent";
    public static ItemRetrievedEvent = Events.__nameSpace + ".ItemRetrievedEvent";
}
// }