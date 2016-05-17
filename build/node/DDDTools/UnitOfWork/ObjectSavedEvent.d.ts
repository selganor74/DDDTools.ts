/// <reference path="../DomainEvents/IDomainEvent.d.ts" />
/// <reference path="../ValueObject/BaseValueObject.d.ts" />
/// <reference path="Events.d.ts" />
declare namespace DDDTools.UnitOfWork {
    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    class ObjectSavedEvent extends BaseValueObject<ObjectSavedEvent> implements IDomainEvent {
        typeName: string;
        typeVersion: string;
        id: string;
        __typeName: string;
        __typeVersion: string;
        constructor(typeName: string, typeVersion: string, id: string);
    }
}
