/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="Events.ts" />

namespace DDDTools.UnitOfWork {

    import IDomainEvent = DomainEvents.IDomainEvent;

    export class ObjectSavedEvent implements IDomainEvent {
        __typeName = Events.ObjectSavedEvent;
        __typeVersion = "v1";
        
        constructor(
            public typeName: string,
            public typeVersion: string,
            public id: string
        ) {}
    }

}
