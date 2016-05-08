/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Entity/BaseEntity.ts" />
/// <reference path="IAggregateRoot.ts" />
/// <reference path="../DomainEvents/IDispatcher.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />

/**
 * Implements the Aggregate Pattern by defining interfaces and base behavior for an AggregateRoot.
 */
namespace DDDTools.Aggregate {
    
    import DomainDispatcher = DomainEvents.DomainDispatcher;
    import IEventHandler = DomainEvents.IEventHandler;
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import IDomainEvent = DomainEvents.IDomainEvent;

    /**
     * Base behavior of an AggregateRoot, which is basically an entity...
     */
    export abstract class BaseAggregateRoot<
        T extends IAggregateRoot<T, TKey>,
        TKey extends IKeyValueObject<TKey>
        >
        extends BaseEntity<T, TKey>
        implements IAggregateRoot<T, TKey>
    {   

    }
}