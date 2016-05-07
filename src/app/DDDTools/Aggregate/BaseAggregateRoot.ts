/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Entity/BaseEntity.ts" />
/// <reference path="IAggregateRoot.ts" />
/// <reference path="../DomainEvents/IDispatcher.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />

namespace DDDTools.Aggregate {

    import DomainDispatcher = DomainEvents.DomainDispatcher;
    import IEventHandler = DomainEvents.IEventHandler;
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import IDomainEvent = DomainEvents.IDomainEvent;

    export abstract class BaseAggregateRoot<
        T extends IAggregateRoot<T, TKey>,
        TKey extends IKeyValueObject<TKey>
        >
        extends BaseEntity<T, TKey>
        implements IAggregateRoot<T, TKey>
    {   
        private raiseEvent(event: IDomainEvent) {
            DomainDispatcher.dispatch(event);
        };
    }
}