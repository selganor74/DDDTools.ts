/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Repository {

    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class ItemRetrievedEvent extends BaseValueObject<ItemRetrievedEvent> implements IDomainEvent {
        __typeName = Events.ItemRetrievedEvent;
        __typeVersion = "v1";

        constructor(
            public typeName: string,
            public typeVersion: string,
            public id: string,
            public objectState: ITypeTracking,
            public repositoryId: string
        ) {
            super();
        }
    }
}
