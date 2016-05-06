/// <reference path="../typings/main.d.ts" />
declare namespace DDDTools.CommonInterfaces {
    interface IEquatable<T> {
        equals(item: T): boolean;
    }
}
declare namespace DDDTools.ValueObject {
    import IEquatable = CommonInterfaces.IEquatable;
    interface IValueObject<T> extends IEquatable<T> {
    }
}
declare namespace DDDTools.Entity {
    import IValueObject = ValueObject.IValueObject;
    interface IKeyValueObject<T> extends IValueObject<T> {
        toString(): string;
    }
}
declare namespace DDDTools.Entity {
    import IEquatable = DDDTools.CommonInterfaces.IEquatable;
    interface IEntity<T, TKey extends IEquatable<TKey>> extends IEquatable<T> {
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
declare namespace DDDTools.StatefulObject {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IStateful extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
        getState(): any;
        setState(state: any): any;
    }
}
declare namespace DDDTools.ErrorManagement {
    abstract class BaseErrors {
        static Throw(name: string, message?: string): void;
        static getErrorInstance(name: string, message?: string): Error;
    }
}
declare namespace DDDTools.StatefulObject {
    import BaseErrors = ErrorManagement.BaseErrors;
    class StatefulObjectErrors extends BaseErrors {
        static StateIsNotAnObject: string;
        static TypeNameNotSet: string;
        static TypeVersionNotSet: string;
        static UnableToInstantiateType: string;
    }
}
declare namespace DDDTools.StatefulObject {
    import BaseErrors = ErrorManagement.BaseErrors;
    class UpgraderErrors extends BaseErrors {
        static TypeNotInstatiable: string;
        static UpgradePathNotFound: string;
        static IncorrectVersionFormat: string;
        static WrongVersionInUpgradedInstance: string;
    }
}
declare namespace DDDTools.StatefulObject {
    class StatefulObjectUpgrader {
        private static latestTypeVersionMap;
        private static isVersionMapBuilt;
        private static buildVersionMapForType(typeName);
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static upgrade(instanceFrom: IStateful): IStateful;
        static computeNextVersion(typeVersion: string): string;
    }
}
declare namespace DDDTools.StatefulObject {
    class StatefulObjectFactory {
        static createTypeInstance(typeName: string, typeVersion?: string): IStateful;
        static createObjectsFromState(state: any): any;
        private static isStatefulObject(objectToTest);
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
declare namespace DDDTools.StatefulObject {
    import IStateful = StatefulObject.IStateful;
    abstract class BaseStatefulObject implements IStateful {
        __typeName: string;
        __typeVersion: string;
        getState(): any;
        setState(state: any): void;
    }
}
declare namespace DDDTools.Entity {
    import BaseStatefulObject = StatefulObject.BaseStatefulObject;
    abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseStatefulObject {
        private key;
        getKey(): TKey;
        setKey(key: TKey): void;
        equals(item: T): boolean;
    }
}
declare namespace DDDTools.DomainEvents {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IDomainEvent extends ITypeTracking {
    }
}
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import IEntity = Entity.IEntity;
    import IDomainEvent = DomainEvents.IDomainEvent;
    interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends IEntity<T, TKey> {
        raiseEvent(event: IDomainEvent): any;
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
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import IDomainEvent = DomainEvents.IDomainEvent;
    abstract class BaseAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseEntity<T, TKey> implements IAggregateRoot<T, TKey> {
        raiseEvent(event: IDomainEvent): void;
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
    import BaseStatefulObject = StatefulObject.BaseStatefulObject;
    abstract class BaseValueObject<T> extends BaseStatefulObject implements IValueObject<T> {
        constructor();
        equals(item: T): boolean;
    }
}
declare namespace DDDTools.Entity {
    import BaseValueObject = ValueObject.BaseValueObject;
    abstract class BaseKeyValueObject<T> extends BaseValueObject<T> implements IKeyValueObject<T> {
        constructor();
        toString(): string;
    }
}
declare namespace DDDTools.Locking {
    import BaseValueObject = ValueObject.BaseValueObject;
    interface ILock<TLockKey extends BaseValueObject<TLockKey>> {
        canBeUnlockedByKey(key: TLockKey): boolean;
        isLockedByTheSameKey(otherLock: ILock<TLockKey>): boolean;
    }
}
declare namespace DDDTools.Locking {
    import BaseValueObject = ValueObject.BaseValueObject;
    interface ILockManager<TLockKey extends BaseValueObject<TLockKey>, TLock extends ILock<TLockKey>> {
        lock(locker: TLock): any;
        releaseLock(): any;
        getLock(): TLock;
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
declare namespace DDDTools.Locking {
    import Guid = ValueObjects.Guid;
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import BaseValueObject = ValueObject.BaseValueObject;
    class SimpleLock extends BaseValueObject<SimpleLock> implements ILock<SimpleLockKey> {
        private keyCreatedWith;
        __typeName: string;
        constructor(keyCreatedWith: SimpleLockKey);
        canBeUnlockedByKey(key: SimpleLockKey): boolean;
        isLockedByTheSameKey(otherLock: SimpleLock): boolean;
    }
    class SimpleLockKey extends BaseValueObject<SimpleLockKey> implements IKeyValueObject<SimpleLockKey> {
        __typeName: string;
        private key;
        constructor(key?: Guid);
        toString(): string;
    }
    class InMemoryEntityLockManager<TLockableEntity extends BaseEntity<TLockableEntity, TUniqueId>, TUniqueId extends BaseValueObject<TUniqueId>, TLockKey extends BaseValueObject<TLockKey>, TLock extends ILock<TLockKey>> implements ILockManager<TLockKey, TLock> {
        private item;
        private clientKey;
        private static keyring;
        constructor(item: TLockableEntity, clientKey: TLockKey);
        private getKeyAsString();
        getLock(): TLock;
        hasLock(): boolean;
        lock(locker: TLock): void;
        releaseLock(): void;
    }
}
declare namespace DDDTools.Locking {
    import BaseErrors = ErrorManagement.BaseErrors;
    class LockingErrors extends BaseErrors {
        static EntityLockedBySomeoneElse: string;
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
    abstract class BaseInMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        private _managedTypeName;
        private storage;
        constructor(_managedTypeName: string);
        getById(id: TKey): T;
        save(item: T): void;
        delete(id: TKey): void;
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
    class TestEntity extends BaseAggregateRoot<TestEntity, Key> {
        arrayOfEntities: ChildEntity[];
        anonymousObject: any;
        anObjectReference: any;
        anotherObjectReference: any;
        __typeName: string;
        __typeVersion: string;
        constructor();
    }
}
declare namespace CdC.Tests.BaseStatefulObject.v2 {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v1.A3StepUpgradableItem): A3StepUpgradableItem;
    }
}
declare namespace CdC.Tests.BaseStatefulObject.v1 {
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
declare namespace CdC.Tests.BaseStatefulObject {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        aNewNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v2.A3StepUpgradableItem): A3StepUpgradableItem;
    }
    class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v1.TestEntity): TestEntity;
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
declare namespace CdC.Tests.InMemoryItemLocker {
    import DDD = DDDTools;
    import BaseValueObject = DDD.ValueObject.BaseValueObject;
    class Key extends BaseValueObject<Key> {
        private id;
        __typeName: string;
        __typeVersion: string;
        constructor();
    }
}
