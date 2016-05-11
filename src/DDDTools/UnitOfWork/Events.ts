import {IDomainEvent} from "../DomainEvents/IDomainEvent";

// namespace DDDTools.UnitOfWork {

export class Events {
    private static __nameSpace = "DDDTools.UnitOfWork";
    public static ObjectSavedEvent = Events.__nameSpace + ".ObjectSavedEvent";
    public static ObjectDeletedEvent = Events.__nameSpace + ".ObjectDeletedEvent";
    public static ObjectRetrievedEvent = Events.__nameSpace + ".ObjectRetrievedEvent";
}
// }
