declare namespace DDDTools.ErrorManagement {
    abstract class BaseErrors {
        static throw(name: string, message?: string): void;
        static getErrorInstance(name: string, message?: string): Error;
    }
}
declare namespace DDDTools.Query {
    interface IQuery<T> {
        setQuery(queryObject: any): any;
        execute(): T[];
    }
}
declare namespace DDDTools.Query {
    import IPromise = Repository.IPromise;
    interface IQueryAsync<T> {
        setQuery(queryObject: any): any;
        execute(): IPromise<T[]>;
    }
}
declare namespace DDDTools.Utils {
    class SimpleGuid {
        private static isValid(guid);
        private static s4();
        static generate(): string;
    }
}
declare namespace DDDTools.Utils {
    class SimpleIdentityMap {
        private idToObjectMap;
        constructor();
        isTracked(id: string): boolean;
        getById(id: string): any;
        add(id: string, object: any): any;
        getIds(): string[];
        deleteById(id: string): void;
    }
}
declare namespace DDDTools.CommonInterfaces {
    interface IEquatable<T> {
        equals(item: T): boolean;
    }
}
declare namespace DDDTools.CommonInterfaces {
    interface ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __objectInstanceId?: string;
    }
}
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class SerializableDate implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __dateAsString: string;
        constructor(date: Date);
        static getDateFromString(dateAsString: string): Date;
        getDate(): Date;
    }
}
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class SerializableRegExp implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __regularExpression: string;
        __flags: string;
        constructor(regExp: RegExp);
        private splitRegExpAndFlags(regExp);
        static getRegExpFromRegExpAndFlags(regularExpression: string, flags: string): RegExp;
        getRegExp(): RegExp;
    }
}
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class SerializableNull implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace DDDTools.Serialization {
    class Touch {
        private static touchIndex;
        static resetTouchIndex(): void;
        private static getNewIndex();
        static touch(object: any): void;
        static untouch(object: any): void;
        static hasBeenTouched(object: any): boolean;
    }
}
declare namespace DDDTools.Serialization {
    class Deserializer {
        private static identityMap;
        static deserialize(toDeserialize: string): any;
        private static cleanup();
        private static customReviver(key, value);
        private static hasBeenTouched(object);
        private static FakeRegExpDeserializer(value);
        private static FakeDateDeserializer(value);
        private static FakeNullDeserializer(value);
    }
}
declare namespace DDDTools.Serialization {
    class Serializer {
        static serialize(toSerialize: any): string;
        private static preprocessForSerializablesSubstitution(sourceObject);
        private static untouchSourceObject(sourceObject);
        private static postprocessForSerializableSubstitution(sourceObject);
        private static customSerializer(key, value);
    }
}
declare namespace DDDTools.PersistableObject {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IPersistable extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IPersistable): IPersistable;
        getState(): ITypeTracking;
        setState(state: ITypeTracking): any;
    }
}
declare namespace DDDTools.PersistableObject {
    import BaseErrors = ErrorManagement.BaseErrors;
    class Errors extends BaseErrors {
        static StateIsNotAnObject: string;
        static TypeNameNotSet: string;
        static TypeVersionNotSet: string;
        static UnableToInstantiateType: string;
        static TypeRegistryNotSet: string;
        static TypeNotRegistered: string;
        static CannotRegisterUndefined: string;
        static TypeNotInstatiable: string;
        static UpgradePathNotFound: string;
        static IncorrectVersionFormat: string;
        static WrongVersionInUpgradedInstance: string;
    }
}
declare namespace DDDTools.ValueObject {
    import IPersistable = PersistableObject.IPersistable;
    import IEquatable = CommonInterfaces.IEquatable;
    interface IValueObject<T> extends IEquatable<T>, IPersistable {
    }
}
declare namespace DDDTools.Entity {
    import IValueObject = ValueObject.IValueObject;
    interface IKeyValueObject<T> extends IValueObject<T> {
        toString(): string;
    }
}
declare namespace DDDTools.PersistableObject {
    abstract class BasePersistableObject implements IPersistable {
        __typeName: string;
        __typeVersion: string;
        getState(): any;
        setState<TState>(state: TState): void;
    }
}
declare namespace DDDTools.ValueObject {
    import BasePersistableObject = PersistableObject.BasePersistableObject;
    abstract class BaseValueObject<T> extends BasePersistableObject implements IValueObject<T> {
        constructor();
        equals(item: T): boolean;
        findInArray(collection: T[]): string[];
    }
}
declare namespace DDDTools.ValueObjects {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseValueObject = ValueObject.BaseValueObject;
    class Guid extends BaseValueObject<Guid> implements IKeyValueObject<Guid> {
        __typeName: string;
        __typeVersion: string;
        private guid;
        constructor(guid?: string);
        static generate(): Guid;
        toString(): string;
    }
}
declare namespace DDDTools.PersistableObject {
    class Factory {
        private static typeRegistry;
        static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void;
        static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
        static createObjectsFromState(state: any): any;
        private static isPersistableObject(objectToTest);
        private static isTypeInstantiable(typeName);
    }
    class Upgrader {
        private static latestTypeVersionMap;
        private static isVersionMapBuilt;
        private static buildVersionMapForType(typeName);
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static upgrade(instanceFrom: IPersistable): IPersistable;
        static computeNextVersion(typeVersion: string): string;
    }
}
declare namespace DDDTools.Entity {
    import IEquatable = CommonInterfaces.IEquatable;
    import IPersistable = PersistableObject.IPersistable;
    interface IEntity<T, TKey extends IKeyValueObject<TKey>> extends IEquatable<T>, IPersistable {
        getKey(): TKey;
        setKey(key: TKey): void;
    }
}
declare namespace DDDTools.Entity {
    import BaseValueObject = ValueObject.BaseValueObject;
    import IPersistable = PersistableObject.IPersistable;
    abstract class BaseKeyValueObject<T> extends BaseValueObject<T> implements IKeyValueObject<T>, IPersistable {
        constructor();
        abstract toString(): string;
    }
}
declare namespace DDDTools.DomainEvents {
    import IPersistable = PersistableObject.IPersistable;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IDomainEvent extends IPersistable, ITypeTracking {
    }
}
declare namespace DDDTools.DomainEvents {
    interface IEventHandler {
        (domainEvent: IDomainEvent): any;
    }
}
declare namespace DDDTools.DomainEvents {
    import IPromise = Repository.IPromise;
    interface IDispatcher {
        registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any): any;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): any;
        dispatch(event: IDomainEvent): IPromise<any>;
    }
}
declare namespace DDDTools.DomainEvents {
    import IPromise = Repository.IPromise;
    class DomainDispatcher {
        private static dispatcherImplementation;
        static setDispatcherImplementation(dispatcher: IDispatcher): void;
        static registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any): void;
        static unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        static dispatch(event: IDomainEvent): IPromise<any>;
    }
}
declare namespace DDDTools.Entity {
    import BasePersistableObject = PersistableObject.BasePersistableObject;
    import IDomainEvent = DomainEvents.IDomainEvent;
    abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BasePersistableObject implements IEntity<T, TKey> {
        private key;
        protected raiseEvent(event: IDomainEvent): void;
        getKey(): TKey;
        setKey(key: TKey): void;
        equals(item: T): boolean;
    }
}
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import IEntity = Entity.IEntity;
    interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends IEntity<T, TKey> {
        getRevisionId(): number;
        incrementRevisionId(): void;
        perfectlyMatch(another: IAggregateRoot<T, TKey>): boolean;
    }
}
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import IEntity = Entity.IEntity;
    abstract class BaseAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseEntity<T, TKey> implements IAggregateRoot<T, TKey>, IEntity<T, TKey> {
        private __revisionId;
        getRevisionId(): number;
        incrementRevisionId(): void;
        perfectlyMatch(other: BaseAggregateRoot<T, TKey>): boolean;
    }
}
declare namespace DDDTools.Repository {
    var PromiseHandler: ng.IQService;
    export import IPromise = ng.IPromise;
    export import Deferred = ng.IDeferred;
}
declare namespace DDDTools.Repository {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    interface IRepository<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(id: TKey): T;
        save(item: T): void;
        replace(item: T): void;
        delete(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    enum SaveActionEnum {
        Add = 0,
        Update = 1,
    }
}
declare namespace DDDTools.Repository {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    interface IRepositoryAsync<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(id: TKey): IPromise<T>;
        save(item: T): IPromise<{}>;
        replace(item: T): IPromise<{}>;
        delete(id: TKey): IPromise<{}>;
    }
}
declare namespace DDDTools.Repository {
    import BaseErrors = ErrorManagement.BaseErrors;
    class Errors extends BaseErrors {
        static KeyNotSet: string;
        static ItemNotFound: string;
        static ErrorSavingItem: string;
        static ErrorReadingItem: string;
        static ErrorDeletingItem: string;
        static WrongTypeFromImplementation: string;
        static ManagedTypeNotSupplied: string;
        static InvalidKey: string;
    }
}
declare namespace DDDTools.Repository {
    class Events {
        private static __nameSpace;
        static ItemAddedEvent: string;
        static ItemUpdatedEvent: string;
        static ItemDeletedEvent: string;
        static ItemReplacedEvent: string;
        static ItemRetrievedEvent: string;
    }
}
declare namespace DDDTools.Repository {
    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    abstract class BaseRepositoryEvent<TEvent, TAggregate> extends BaseValueObject<TEvent> implements IDomainEvent {
        item: TAggregate;
        repositoryId: string;
        constructor(item: TAggregate, repositoryId: string);
    }
}
declare namespace DDDTools.Repository {
    import IDomainEvent = DomainEvents.IDomainEvent;
    class ItemAddedEvent<TAggregate> extends BaseRepositoryEvent<ItemAddedEvent<TAggregate>, TAggregate> implements IDomainEvent {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace DDDTools.Repository {
    import IDomainEvent = DomainEvents.IDomainEvent;
    class ItemDeletedEvent<TAggregate> extends BaseRepositoryEvent<ItemDeletedEvent<TAggregate>, TAggregate> implements IDomainEvent {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace DDDTools.Repository {
    import IDomainEvent = DomainEvents.IDomainEvent;
    class ItemRetrievedEvent<TAggregate> extends BaseRepositoryEvent<ItemRetrievedEvent<TAggregate>, TAggregate> implements IDomainEvent {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace DDDTools.Repository {
    import IDomainEvent = DomainEvents.IDomainEvent;
    class ItemUpdatedEvent<TAggregate> extends BaseRepositoryEvent<ItemUpdatedEvent<TAggregate>, TAggregate> implements IDomainEvent {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace DDDTools.Repository {
    import IDomainEvent = DomainEvents.IDomainEvent;
    class ItemReplacedEvent<TAggregate> extends BaseRepositoryEvent<ItemReplacedEvent<TAggregate>, TAggregate> implements IDomainEvent {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace DDDTools.Repository {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        private managedType;
        private repositoryId;
        constructor(managedType: string, repositoryId?: string);
        protected abstract getByIdImplementation(id: TKey): ITypeTracking;
        getById(id: TKey): T;
        protected abstract saveImplementation(item: T, saveAction: SaveActionEnum): void;
        save(item: T): void;
        replace(item: T): void;
        private saveOrReplace(item, replaceOnly?);
        protected abstract deleteImplementation(id: TKey): void;
        delete(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    abstract class BaseRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepositoryAsync<T, TKey> {
        private managedType;
        private repositoryId;
        constructor(managedType: string, repositoryId?: string);
        protected abstract getByIdImplementation(id: TKey): IPromise<ITypeTracking>;
        getById(id: TKey): IPromise<T>;
        protected abstract saveImplementation(item: T, saveAction: SaveActionEnum): IPromise<{}>;
        private doSave(item, saveAction);
        save(item: T): IPromise<{}>;
        replace(item: T): IPromise<{}>;
        private saveOrReplace(item, replaceOnly?);
        protected abstract deleteImplementation(id: TKey): IPromise<{}>;
        delete(id: TKey): IPromise<{}>;
        private buildError(errorFromCall, errorIfErrorFromCallIsNotError);
    }
}
declare namespace DDDTools.Repository {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    class InMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepository<T, TKey> implements IRepository<T, TKey> {
        private storage;
        constructor(managedTypeName: string);
        protected getByIdImplementation(id: TKey): T;
        protected saveImplementation(item: T): void;
        protected deleteImplementation(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    import BaseRepositoryAsync = Repository.BaseRepositoryAsync;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class InMemoryRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepositoryAsync<T, TKey> implements IRepositoryAsync<T, TKey> {
        private storage;
        constructor(managedType: string, repositoryId?: string);
        private getByIdSync(id);
        protected getByIdImplementation(id: TKey): IPromise<ITypeTracking>;
        private saveSync(item);
        protected saveImplementation(item: T): IPromise<{}>;
        private deleteSync(id);
        protected deleteImplementation(id: TKey): IPromise<{}>;
    }
}
declare namespace DDDTools.DomainEvents {
    import IPromise = Repository.IPromise;
    class InProcessDispatcher {
        private delegatesRegistry;
        clear(): void;
        registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any): void;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        dispatch(event: IDomainEvent): IPromise<any>;
        private buildErrorMessage(Errors);
    }
}
declare namespace DDDTools.UnitOfWork {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IEventHandler = DomainEvents.IEventHandler;
    interface IUnitOfWork<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(key: TKey): T;
        deleteById(key: TKey): void;
        saveAll(): void;
        registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;
    }
}
declare namespace DDDTools.UnitOfWork {
    import BaseErrors = ErrorManagement.BaseErrors;
    class UnitOfWorkErrors extends BaseErrors {
        static ItemMarkedAsDeleted: string;
    }
}
declare namespace DDDTools.UnitOfWork {
    class Events {
        private static __nameSpace;
        static ObjectSavedEvent: string;
        static ObjectDeletedEvent: string;
        static ObjectRetrievedEvent: string;
    }
}
declare namespace DDDTools.UnitOfWork {
    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    class ObjectDeletedEvent extends BaseValueObject<ObjectDeletedEvent> implements IDomainEvent {
        typeName: string;
        typeVersion: string;
        id: string;
        __typeName: string;
        __typeVersion: string;
        constructor(typeName: string, typeVersion: string, id: string);
    }
}
declare namespace DDDTools.UnitOfWork {
    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    class ObjectRetrievedEvent extends BaseValueObject<ObjectRetrievedEvent> implements IDomainEvent {
        typeName: string;
        typeVersion: string;
        id: string;
        __typeName: string;
        __typeVersion: string;
        constructor(typeName: string, typeVersion: string, id: string);
    }
}
declare namespace DDDTools.UnitOfWork {
    import IDomainEvent = DomainEvents.IDomainEvent;
    import BaseValueObject = ValueObject.BaseValueObject;
    class ObjectSavedEvent extends BaseValueObject<ObjectSavedEvent> implements IDomainEvent {
        typeName: string;
        typeVersion: string;
        id: string;
        __typeName: string;
        __typeVersion: string;
        constructor(typeName: string, typeVersion: string, id: string);
    }
}
declare namespace DDDTools.UnitOfWork {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    enum ItemStatus {
        New = 0,
        Modified = 1,
        Saved = 2,
        Deleted = 3,
    }
    class IdentityMap<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        private idToObjectMap;
        constructor();
        isTracked(key: TKey): boolean;
        getById(key: TKey): T;
        add(key: TKey, item: T): void;
        remove(key: TKey): void;
        getIds(): TKey[];
        markAsDeletedById(key: TKey): void;
        markAsSavedById(key: TKey): void;
        markAsModifiedById(key: TKey): void;
        getItemStatus(key: TKey): ItemStatus;
        updateSavedItemStatus(key: TKey): void;
        private getTrackedItem(key);
    }
}
declare namespace DDDTools.UnitOfWork {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IRepository = Repository.IRepository;
    import IEventHandler = DomainEvents.IEventHandler;
    class UnitOfWork<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        private idMap;
        private repository;
        private dispatcher;
        constructor(repository: IRepository<T, TKey>);
        getById(key: TKey): T;
        deleteById(key: TKey): void;
        saveAll(): void;
        registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        private processDeletedItem(key);
        private processNewOrModifiedItem(key);
        private raiseEvent(event);
        private removeById(key);
    }
}
