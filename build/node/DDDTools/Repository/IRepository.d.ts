/// <reference path="../Aggregate/IAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
declare namespace DDDTools.Repository {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    interface IRepository<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(id: TKey): T;
        save(item: T): void;
        delete(id: TKey): void;
    }
}
