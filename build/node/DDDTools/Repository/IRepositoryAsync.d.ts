/// <reference path="../Aggregate/IAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
declare namespace DDDTools.Repository {
    import IPromise = Q.IPromise;
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    interface IRepositoryAsync<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(id: TKey): IPromise<T>;
        save(item: T): IPromise<{}>;
        delete(id: TKey): IPromise<{}>;
    }
}
