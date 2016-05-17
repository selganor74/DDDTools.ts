/// <reference path="Errors.d.ts" />
/// <reference path="../PersistableObject/Factory.d.ts" />
/// <reference path="../PersistableObject/IPersistable.d.ts" />
/// <reference path="BaseRepository.d.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="IRepository.d.ts" />
declare namespace DDDTools.Repository {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    abstract class BaseInMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepository<T, TKey> implements IRepository<T, TKey> {
        private storage;
        constructor(managedTypeName: string);
        protected getByIdImplementation(id: TKey): T;
        protected saveImplementation(item: T): void;
        protected deleteImplementation(id: TKey): void;
    }
}
