/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="./BaseRepositoryEvent.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Repository {

    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class ItemDeletedEvent<TAggregate> extends BaseRepositoryEvent<ItemDeletedEvent<TAggregate>, TAggregate> implements IDomainEvent {
        __typeName = Events.ItemDeletedEvent;
        __typeVersion = "v1";
    }
}