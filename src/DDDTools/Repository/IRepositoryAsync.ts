/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />

// import {IAggregateRoot} from "../Aggregate/IAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
/**
 * Interfaces and classes to implement a Repository to persist Aggregates. Contains a reference in memory repository.
 */

namespace DDDTools.Repository {
    import IPromise = Q.IPromise;

    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;

    export interface IRepositoryAsync<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(id: TKey): IPromise<T>;
        save(item: T): IPromise<{}>;
        delete(id: TKey): IPromise<{}>;
    }
}