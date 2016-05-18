/// <reference path="../../../../typings/browser.d.ts" />
/// <reference path="IRepositoryAsync.d.ts" />
/// <reference path="Errors.d.ts" />
/// <reference path="../PersistableObject/IPersistable.d.ts" />
/// <reference path="../PersistableObject/Factory.d.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
/// <reference path="ItemRetrievedEvent.d.ts" />
/// <reference path="ItemAddedEvent.d.ts" />
/// <reference path="ItemUpdatedEvent.d.ts" />
/// <reference path="ItemDeletedEvent.d.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.d.ts" />
declare namespace DDDTools.Repository {
    import IPromise = Q.IPromise;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    abstract class BaseRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepositoryAsync<T, TKey> {
        private managedType;
        constructor(managedType: string);
        protected abstract getByIdImplementation(id: TKey): IPromise<ITypeTracking>;
        getById(id: TKey): IPromise<T>;
        protected abstract saveImplementation(item: T): IPromise<{}>;
        private doSave(item, deferred);
        save(item: T): IPromise<{}>;
        protected abstract deleteImplementation(id: TKey): IPromise<{}>;
        delete(id: TKey): IPromise<{}>;
        private buildError(errorFromCall, errorIfErrorFromCallIsNotError);
    }
}
