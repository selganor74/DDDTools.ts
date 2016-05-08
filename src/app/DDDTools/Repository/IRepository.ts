/// <reference path="../Aggregate/IAggregateRoot.ts"/>
/// <reference path="../Entity/IKeyValueObject.ts"/>

/**
 * Interfaces and classes to implement a Repository to persist Aggregates. Contains a reference in memory repository.
 */
namespace DDDTools.Repository {
    
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    
    export interface IRepository<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById( id: TKey ): T;
        save( item: T ): void;
        delete( id: TKey ): void;
    }
}