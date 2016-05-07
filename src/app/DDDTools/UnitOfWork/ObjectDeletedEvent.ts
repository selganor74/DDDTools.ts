/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="Events.ts" />

namespace DDDTools.UnitOfWork {

    import IDomainEvent = DomainEvents.IDomainEvent;

    export class ObjectDeletedEvent implements IDomainEvent {
        __typeName = Events.ObjectDeletedEvent;
        __typeVersion = "v1";
        
        constructor(
            public typeName: string,
            public typeVersion: string,
            public id: string
        ) {}
    }

}
