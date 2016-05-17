/// <reference path="../DomainEvents/IDomainEvent.d.ts" />
/// <reference path="../ValueObject/BaseValueObject.d.ts" />
/// <reference path="Events.d.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
declare namespace DDDTools.Repository {
    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class ItemDeletedEvent extends BaseValueObject<ItemDeletedEvent> implements IDomainEvent {
        typeName: string;
        typeVersion: string;
        id: string;
        objectState: ITypeTracking;
        __typeName: string;
        __typeVersion: string;
        constructor(typeName: string, typeVersion: string, id: string, objectState: ITypeTracking);
    }
}
