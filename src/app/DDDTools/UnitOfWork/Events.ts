/// <reference path="../DomainEvents/IDomainEvent.ts" />

namespace DDDTools.UnitOfWork {

    import IDomainEvent = DomainEvents.IDomainEvent;

    export class Events {
        private static __nameSpace = "DDDTools.UnitOfWork";
        public static ObjectSavedEvent = Events.__nameSpace + ".ObjectSavedEvent";
        public static ObjectDeletedEvent = Events.__nameSpace + ".ObjectDeletedEvent";
        public static ObjectRetrievedEvent = Events.__nameSpace + ".ObjectRetrievedEvent";
    }
}
