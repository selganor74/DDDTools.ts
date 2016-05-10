/// <reference path="../typings/main.d.ts" />
declare namespace DDDTools.CommonInterfaces {
    interface IEquatable<T> {
        equals(item: T): boolean;
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
declare namespace DDDTools.Entity {
    import IPersistable = PersistableObject.IPersistable;
    import IEquatable = CommonInterfaces.IEquatable;
    interface IEntity<T, TKey extends IEquatable<TKey>> extends IEquatable<T>, IPersistable {
        getKey(): TKey;
        setKey(key: TKey): void;
    }
}
declare namespace DDDTools.CommonInterfaces {
    interface ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __objectInstanceId?: string;
    }
}
declare namespace DDDTools.PersistableObject {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IPersistable extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IPersistable): IPersistable;
        getState(): any;
        setState(state: any): any;
    }
}
declare namespace DDDTools.ErrorManagement {
    abstract class BaseErrors {
        static throw(name: string, message?: string): void;
        static getErrorInstance(name: string, message?: string): Error;
    }
}
declare namespace DDDTools.PersistableObject {
    import BaseErrors = ErrorManagement.BaseErrors;
    class PersistableErrors extends BaseErrors {
        static StateIsNotAnObject: string;
        static TypeNameNotSet: string;
        static TypeVersionNotSet: string;
        static UnableToInstantiateType: string;
    }
}
declare namespace DDDTools.PersistableObject {
    import BaseErrors = ErrorManagement.BaseErrors;
    class UpgraderErrors extends BaseErrors {
        static TypeNotInstatiable: string;
        static UpgradePathNotFound: string;
        static IncorrectVersionFormat: string;
        static WrongVersionInUpgradedInstance: string;
    }
}
declare namespace DDDTools.PersistableObject {
    class PersistableObjectUpgrader {
        private static latestTypeVersionMap;
        private static isVersionMapBuilt;
        private static buildVersionMapForType(typeName);
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static upgrade(instanceFrom: IPersistable): IPersistable;
        static computeNextVersion(typeVersion: string): string;
    }
}
declare namespace DDDTools.PersistableObject {
    class PersistableObjectFactory {
        static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
        static createObjectsFromState(state: any): any;
        private static isPersistableObject(objectToTest);
        private static isTypeInstantiable(fullyQualifiedTypeName);
        private static computeFullyQualifiedTypeName(typeName, typeVersion);
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
declare namespace DDDTools.Serialization {
    class Touch {
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
    }
}
declare namespace DDDTools.Serialization {
    class Serializer {
        static serialize(toSerialize: any): string;
        private static preprocessForFakeSubstitution(sourceObject);
        private static postprocessForFakeSubstitution(sourceObject);
        private static customSerializer(key, value);
    }
}
declare namespace DDDTools.PersistableObject {
    import IPersistable = PersistableObject.IPersistable;
    abstract class BasePersistableObject implements IPersistable {
        __typeName: string;
        __typeVersion: string;
        getState(): any;
        setState<TState>(state: TState): void;
    }
}
declare namespace DDDTools.DomainEvents {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IDomainEvent extends ITypeTracking {
    }
}
declare namespace DDDTools.DomainEvents {
    interface IDispatcher {
        registerHandler(eventTypeName: string, handler: IEventHandler): any;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): any;
        dispatch(event: IDomainEvent): any;
    }
}
declare namespace DDDTools.DomainEvents {
    interface IEventHandler {
        (domainEvent: IDomainEvent): void;
    }
}
declare namespace DDDTools.DomainEvents {
    class DomainDispatcher {
        private static dispatcherImplementation;
        static setDispatcherImplementation(dispatcher: IDispatcher): void;
        static registerHandler(eventTypeName: string, handler: IEventHandler): void;
        static unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        static dispatch(event: IDomainEvent): void;
    }
}
declare namespace DDDTools.Entity {
    import BasePersistableObject = PersistableObject.BasePersistableObject;
    abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BasePersistableObject {
        private key;
        private raiseEvent(event);
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
        incrementRevisionId(): any;
        perfectlyMatch(another: IAggregateRoot<T, TKey>): boolean;
    }
}
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    abstract class BaseAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseEntity<T, TKey> implements IAggregateRoot<T, TKey> {
        private __revisionId;
        getRevisionId(): number;
        incrementRevisionId(): void;
        perfectlyMatch(other: BaseAggregateRoot<T, TKey>): boolean;
    }
}
declare namespace DDDTools.DomainEvents {
    class InProcessDispatcher {
        private delegatesRegistry;
        clear(): void;
        registerHandler(eventTypeName: string, handler: IEventHandler): void;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        dispatch(event: IDomainEvent): void;
        private buildErrorMessage(Errors);
    }
}
declare namespace DDDTools.ValueObject {
    import BasePersistableObject = PersistableObject.BasePersistableObject;
    abstract class BaseValueObject<T> extends BasePersistableObject implements IValueObject<T> {
        constructor();
        equals(item: T): boolean;
    }
}
declare namespace DDDTools.Entity {
    import BaseValueObject = ValueObject.BaseValueObject;
    abstract class BaseKeyValueObject<T> extends BaseValueObject<T> implements IKeyValueObject<T> {
        constructor();
        abstract toString(): string;
    }
}
declare namespace DDDTools.Repository {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    interface IRepository<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(id: TKey): T;
        save(item: T): void;
        delete(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    import BaseErrors = ErrorManagement.BaseErrors;
    class RepositoryErrors extends BaseErrors {
        static KeyNotSet: string;
        static ItemNotFound: string;
    }
}
declare namespace DDDTools.Repository {
    import IRepository = Repository.IRepository;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        protected abstract getByIdImplementation(id: TKey): T;
        getById(id: TKey): T;
        protected abstract saveImplementation(item: T): void;
        save(item: T): void;
        protected abstract deleteImplementation(id: TKey): void;
        delete(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    abstract class BaseInMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepository<T, TKey> {
        private _managedTypeName;
        private storage;
        constructor(_managedTypeName: string);
        protected getByIdImplementation(id: TKey): T;
        protected saveImplementation(item: T): void;
        protected deleteImplementation(id: TKey): void;
    }
}
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class FakeDate implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __dateAsString: string;
        constructor(date: Date);
        getDate(): Date;
    }
}
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class FakeRegExp implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __regularExpression: string;
        constructor(regExp: RegExp);
        getRegExp(): RegExp;
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
    import IDomainEvent = DomainEvents.IDomainEvent;
    class ObjectDeletedEvent implements IDomainEvent {
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
    class ObjectRetrievedEvent implements IDomainEvent {
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
    class ObjectSavedEvent implements IDomainEvent {
        typeName: string;
        typeVersion: string;
        id: string;
        __typeName: string;
        __typeVersion: string;
        constructor(typeName: string, typeVersion: string, id: string);
    }
}
declare namespace DDDTools.UnitOfWork {
    import BaseErrors = ErrorManagement.BaseErrors;
    class UnitOfWorkErrors extends BaseErrors {
        static ItemMarkedAsDeleted: string;
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
declare module "app/NeDBRepository/BaseNeDBRepository" {
}
declare namespace CdC.Tests {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    class Key extends BaseValueObject<Key> {
        private id;
        __typeName: string;
        __typeVersion: string;
        constructor();
        toString(): string;
    }
    class ChildEntity extends BaseEntity<ChildEntity, Key> {
        arrayOfKeys: Key[];
        __typeName: string;
        __typeVersion: string;
        constructor();
    }
    class TestAggregate extends BaseAggregateRoot<TestAggregate, Key> {
        arrayOfEntities: ChildEntity[];
        anonymousObject: any;
        anObjectReference: any;
        anotherObjectReference: any;
        __typeName: string;
        __typeVersion: string;
        aTestProperty: string;
        constructor();
    }
}
declare namespace CdC.Tests.BasePersistableObject.v2 {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BasePersistableObject.v1.A3StepUpgradableItem): A3StepUpgradableItem;
    }
}
declare namespace CdC.Tests.BasePersistableObject.v1 {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace CdC.Tests.BasePersistableObject {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        aNewNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BasePersistableObject.v2.A3StepUpgradableItem): A3StepUpgradableItem;
    }
    class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BasePersistableObject.v1.TestEntity): TestEntity;
        aNewProperty: string;
    }
    class TestEntityNonUpgradable extends BaseEntity<TestEntityNonUpgradable, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
    class AClassWithManyTypes extends BaseEntity<AClassWithManyTypes, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNumber: Number;
        aString: String;
        aBoolean: Boolean;
        anObject: Object;
        aRegExp: RegExp;
        aDate: Date;
    }
}
declare namespace CdC.Tests.BaseValueObject {
}
declare namespace CdC.Tests.Dispatcher {
}
declare namespace CdC.Tests.UnitOfWork {
    import BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import Guid = DDDTools.ValueObjects.Guid;
    import UnitOfWork = DDDTools.UnitOfWork.UnitOfWork;
    import IRepository = DDDTools.Repository.IRepository;
    class TestKey extends Guid {
        constructor();
    }
    class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {
        constructor();
        private aTestProperty;
        setATestProperty(value: string): void;
        getATestProperty(): string;
    }
    class TestRepository extends BaseInMemoryRepository<TestAggregate, TestKey> {
    }
    class TestUoW extends UnitOfWork<TestAggregate, TestKey> {
        constructor(repo: IRepository<TestAggregate, TestKey>);
    }
}
declare namespace CdC.Tests.NeDBRepository {
}
