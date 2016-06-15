/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />

// import {IAggregateRoot} from "../Aggregate/IAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";

/**
 * Interfaces and classes to implement a Repository to persist Aggregates. Contains a reference in memory repository.
 */
namespace DDDTools.Repository {

    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;

    export interface IRepository<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        
        /**
         * Retrieves an item from the repository given its id. It gives back a fully rconstituted Aggregate Root, so that  will be possible to call any public method.
         * fires ItemRetrieved event
         */
        getById(id: TKey): T;
        
        /**
         * Saves an item.
         */
        save(item: T): void;
        
        /**
         * Replaces an item. Just like save, but it doesn't increment the revisionId and keep the one stored in the AggregateRoot
         */
        replace(item: T): void;
        
        /**
         * Deletes an item.
         */
        delete(id: TKey): void;
    }
}