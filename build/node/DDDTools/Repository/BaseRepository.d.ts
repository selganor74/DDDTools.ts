/// <reference path="IRepository.d.ts" />
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
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        private managedType;
        constructor(managedType: string);
        protected abstract getByIdImplementation(id: TKey): ITypeTracking;
        getById(id: TKey): T;
        protected abstract saveImplementation(item: T): void;
        save(item: T): void;
        protected abstract deleteImplementation(id: TKey): void;
        delete(id: TKey): void;
    }
}
