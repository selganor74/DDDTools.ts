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

    export abstract class BaseRepositoryEvent<TEvent,TAggregate> extends BaseValueObject<TEvent> implements IDomainEvent {

        constructor(
            /**
             * The aggregate instance after the action has been performed.
             */
            public item: TAggregate,
            /**
             * The Id of the repository performing the operation
             */
            public repositoryId: string
        ) {
            super();
        }
    }
}