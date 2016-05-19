/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
/// <reference path="Errors.d.ts" />
/// <reference path="../PersistableObject/Factory.d.ts" />
/// <reference path="../PersistableObject/IPersistable.d.ts" />
/// <reference path="BaseRepositoryAsync.d.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="IRepositoryAsync.d.ts" />
declare namespace DDDTools.Repository {
    import BaseRepositoryAsync = Repository.BaseRepositoryAsync;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    import IPromise = Q.IPromise;
    class InMemoryRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepositoryAsync<T, TKey> implements IRepositoryAsync<T, TKey> {
        private storage;
        constructor(managedType: string);
        private getByIdSync(id);
        protected getByIdImplementation(id: TKey): IPromise<ITypeTracking>;
        private saveSync(item);
        protected saveImplementation(item: T): IPromise<{}>;
        private deleteSync(id);
        protected deleteImplementation(id: TKey): IPromise<{}>;
    }
}
