/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../DomainEvents/IEventHandler.ts" />

/**
 * Interfaces and classes to implement a UnitOfWork. A UnitOfWork keeps track of changes on the Aggregates loaded from the underlying repository and allows to save them all in a single call.
 */
namespace DDDTools.UnitOfWork {

    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IEventHandler = DomainEvents.IEventHandler;

    /**
     * Simple UnitOfWork for a single Repository.
     */
    export interface IUnitOfWork<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {

        /**
         * Retrieves an item from the Repository or from the UnitOfWork, given its Id.
         */
        getById(key: TKey): T;

        /**
         * Marks an item as deleted from the UnitOfWork (and from the Repository when the UoW will be saved)
         */
        deleteById(key: TKey): void;

        /**
         * Saves all the modified items in the UnitOfWork.
         */
        saveAll(): void;

        /**
         * Allows to register an handler for events generated by the UnitOfWork
         */
        registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;

        /**
         * Allows to unregister an handler for events generated by the UnitOfWork
         */
        unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;

    }
}