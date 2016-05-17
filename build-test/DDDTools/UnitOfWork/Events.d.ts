/// <reference path="../DomainEvents/IDomainEvent.d.ts" />
declare namespace DDDTools.UnitOfWork {
    class Events {
        private static __nameSpace;
        static ObjectSavedEvent: string;
        static ObjectDeletedEvent: string;
        static ObjectRetrievedEvent: string;
    }
}
