/// <reference path="../typings/browser.d.ts" />
declare module "DDDTools/CommonInterfaces/ITypeTracking" {
    export interface ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __objectInstanceId?: string;
    }
}
declare module "DDDTools/PersistableObject/IPersistable" {
    import { ITypeTracking } from "DDDTools/CommonInterfaces/ITypeTracking";
    export interface IPersistable extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IPersistable): IPersistable;
        getState(): any;
        setState(state: any): any;
    }
}
declare module "DDDTools/CommonInterfaces/IEquatable" {
    export interface IEquatable<T> {
        equals(item: T): boolean;
    }
}
declare module "DDDTools/ValueObject/IValueObject" {
    import { IPersistable } from "DDDTools/PersistableObject/IPersistable";
    import { IEquatable } from "DDDTools/CommonInterfaces/IEquatable";
    export interface IValueObject<T> extends IEquatable<T>, IPersistable {
    }
}
declare module "DDDTools/Entity/IKeyValueObject" {
    import { IValueObject } from "DDDTools/ValueObject/IValueObject";
    export interface IKeyValueObject<T> extends IValueObject<T> {
        toString(): string;
    }
}
declare module "DDDTools/ErrorManagement/BaseErrors" {
    export abstract class BaseErrors {
        static throw(name: string, message?: string): void;
        static getErrorInstance(name: string, message?: string): Error;
    }
}
declare module "DDDTools/PersistableObject/Errors" {
    import { BaseErrors } from "DDDTools/ErrorManagement/BaseErrors";
    export class Errors extends BaseErrors {
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
declare module "DDDTools/Utils/SimpleGuid" {
    export class SimpleGuid {
        private static isValid(guid);
        private static s4();
        static generate(): string;
    }
}
declare module "DDDTools/ValueObject/BaseValueObject" {
    import { IValueObject } from "DDDTools/ValueObject/IValueObject";
    import { BasePersistableObject } from "DDDTools/PersistableObject/BasePersistableObject";
    export abstract class BaseValueObject<T> extends BasePersistableObject implements IValueObject<T> {
        constructor();
        equals(item: T): boolean;
    }
}
declare module "DDDTools/ValueObjects/Guid" {
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    import { BaseValueObject } from "DDDTools/ValueObject/BaseValueObject";
    export class Guid extends BaseValueObject<Guid> implements IKeyValueObject<Guid> {
        __typeName: string;
        __typeVersion: string;
        private guid;
        constructor(guid?: string);
        static generate(): Guid;
        toString(): string;
    }
}
declare module "DDDTools/PersistableObject/TypeRegistry" {
    import { IPersistable } from "DDDTools/PersistableObject/IPersistable";
    export class TypeRegistry {
        private static registry;
        private static latestVersions;
        private static libraryRegistered;
        private static registerValueObjectsLibrary();
        static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void;
        private static updateLatestVersions(typeName, typeVersion);
        private static isVersionGreater(vSubject, vReference);
        private static extractVersionNumber(typeVersion);
        static getTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): any;
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static getLatestVersionForType(typeName: string): string;
        private static versionIsInCorrectFormat(typeVersion);
        static computeNextVersion(typeVersion: string): string;
    }
}
declare module "DDDTools/PersistableObject/Factory" {
    import { IPersistable } from "DDDTools/PersistableObject/IPersistable";
    export class Factory {
        private static typeRegistry;
        static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void;
        static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
        static createObjectsFromState(state: any): any;
        private static isPersistableObject(objectToTest);
        private static isTypeInstantiable(typeName);
    }
    export class Upgrader {
        private static latestTypeVersionMap;
        private static isVersionMapBuilt;
        private static buildVersionMapForType(typeName);
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static upgrade(instanceFrom: IPersistable): IPersistable;
        static computeNextVersion(typeVersion: string): string;
    }
}
declare module "DDDTools/Serialization/SerializableDate" {
    import { ITypeTracking } from "DDDTools/CommonInterfaces/ITypeTracking";
    export class SerializableDate implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __dateAsString: string;
        constructor(date: Date);
        getDate(): Date;
    }
}
declare module "DDDTools/Serialization/SerializableRegExp" {
    import { ITypeTracking } from "DDDTools/CommonInterfaces/ITypeTracking";
    export class SerializableRegExp implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __regularExpression: string;
        constructor(regExp: RegExp);
        getRegExp(): RegExp;
    }
}
declare module "DDDTools/Serialization/Touch" {
    export class Touch {
        private static touchIndex;
        static resetTouchIndex(): void;
        private static getNewIndex();
        static touch(object: any): void;
        static untouch(object: any): void;
        static hasBeenTouched(object: any): boolean;
    }
}
declare module "DDDTools/Serialization/Serializer" {
    export class Serializer {
        static serialize(toSerialize: any): string;
        private static preprocessForSerializablesSubstitution(sourceObject);
        private static untouchSourceObject(sourceObject);
        private static postprocessForSerializableSubstitution(sourceObject);
        private static customSerializer(key, value);
    }
}
declare module "DDDTools/Utils/SimpleIdentityMap" {
    export class SimpleIdentityMap {
        private idToObjectMap;
        constructor();
        isTracked(id: string): boolean;
        getById(id: string): any;
        add(id: string, object: any): any;
        getIds(): string[];
        deleteById(id: string): void;
    }
}
declare module "DDDTools/Serialization/Deserializer" {
    export class Deserializer {
        private static identityMap;
        static deserialize(toDeserialize: string): any;
        private static cleanup();
        private static customReviver(key, value);
        private static hasBeenTouched(object);
        private static FakeRegExpDeserializer(value);
        private static FakeDateDeserializer(value);
    }
}
declare module "DDDTools/PersistableObject/BasePersistableObject" {
    import { IPersistable } from "DDDTools/PersistableObject/IPersistable";
    export abstract class BasePersistableObject implements IPersistable {
        __typeName: string;
        __typeVersion: string;
        getState(): any;
        setState<TState>(state: TState): void;
    }
}
declare module "DDDTools/DomainEvents/IDomainEvent" {
    import { IPersistable } from "DDDTools/PersistableObject/IPersistable";
    import { ITypeTracking } from "DDDTools/CommonInterfaces/ITypeTracking";
    export interface IDomainEvent extends IPersistable, ITypeTracking {
    }
}
declare module "DDDTools/DomainEvents/IEventHandler" {
    import { IDomainEvent } from "DDDTools/DomainEvents/IDomainEvent";
    export interface IEventHandler {
        (domainEvent: IDomainEvent): void;
    }
}
declare module "DDDTools/DomainEvents/IDispatcher" {
    import { IDomainEvent } from "DDDTools/DomainEvents/IDomainEvent";
    import { IEventHandler } from "DDDTools/DomainEvents/IEventHandler";
    export interface IDispatcher {
        registerHandler(eventTypeName: string, handler: IEventHandler): any;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): any;
        dispatch(event: IDomainEvent): any;
    }
}
declare module "DDDTools/DomainEvents/DomainDispatcher" {
    import { IDomainEvent } from "DDDTools/DomainEvents/IDomainEvent";
    import { IDispatcher } from "DDDTools/DomainEvents/IDispatcher";
    import { IEventHandler } from "DDDTools/DomainEvents/IEventHandler";
    export class DomainDispatcher {
        private static dispatcherImplementation;
        static setDispatcherImplementation(dispatcher: IDispatcher): void;
        static registerHandler(eventTypeName: string, handler: IEventHandler): void;
        static unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        static dispatch(event: IDomainEvent): void;
    }
}
declare module "DDDTools/Entity/IEntity" {
    import { IEquatable } from "DDDTools/CommonInterfaces/IEquatable";
    import { IPersistable } from "DDDTools/PersistableObject/IPersistable";
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    export interface IEntity<T, TKey extends IKeyValueObject<TKey>> extends IEquatable<T>, IPersistable {
        getKey(): TKey;
        setKey(key: TKey): void;
    }
}
declare module "DDDTools/Entity/BaseEntity" {
    import { BasePersistableObject } from "DDDTools/PersistableObject/BasePersistableObject";
    import { IEntity } from "DDDTools/Entity/IEntity";
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    export abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BasePersistableObject implements IEntity<T, TKey> {
        private key;
        private raiseEvent(event);
        getKey(): TKey;
        setKey(key: TKey): void;
        equals(item: T): boolean;
    }
}
declare module "DDDTools/Aggregate/IAggregateRoot" {
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    import { IEntity } from "DDDTools/Entity/IEntity";
    export interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends IEntity<T, TKey> {
        getRevisionId(): number;
        incrementRevisionId(): any;
        perfectlyMatch(another: IAggregateRoot<T, TKey>): boolean;
    }
}
declare module "DDDTools/Aggregate/BaseAggregateRoot" {
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    import { BaseEntity } from "DDDTools/Entity/BaseEntity";
    import { IAggregateRoot } from "DDDTools/Aggregate/IAggregateRoot";
    import { IEntity } from "DDDTools/Entity/IEntity";
    export abstract class BaseAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseEntity<T, TKey> implements IAggregateRoot<T, TKey>, IEntity<T, TKey> {
        private __revisionId;
        getRevisionId(): number;
        incrementRevisionId(): void;
        perfectlyMatch(other: BaseAggregateRoot<T, TKey>): boolean;
    }
}
declare module "DDDTools/Repository/IRepositoryAsync" {
    import { IAggregateRoot } from "DDDTools/Aggregate/IAggregateRoot";
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    import IPromise = Q.IPromise;
    export interface IRepositoryAsync<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(id: TKey): IPromise<T>;
        save(item: T): IPromise<{}>;
        delete(id: TKey): IPromise<{}>;
    }
}
declare module "DDDTools/Repository/Errors" {
    import { BaseErrors } from "DDDTools/ErrorManagement/BaseErrors";
    export class Errors extends BaseErrors {
        static KeyNotSet: string;
        static ItemNotFound: string;
        static ErrorSavingItem: string;
        static ErrorReadingItem: string;
        static ErrorDeletingItem: string;
        static WrongTypeFromImplementation: string;
        static ManagedTypeNotSupplied: string;
    }
}
declare module "DDDTools/Repository/BaseRepositoryAsync" {
    import { IRepositoryAsync } from "DDDTools/Repository/IRepositoryAsync";
    import { BaseAggregateRoot } from "DDDTools/Aggregate/BaseAggregateRoot";
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    import { ITypeTracking } from "DDDTools/CommonInterfaces/ITypeTracking";
    import IPromise = Q.IPromise;
    export abstract class BaseRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepositoryAsync<T, TKey> {
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
declare module "NeDBRepository/BaseNeDBRepositoryAsync" {
    import NeDBDataStore = require("nedb");
    import { BaseAggregateRoot } from "DDDTools/Aggregate/BaseAggregateRoot";
    import { IKeyValueObject } from "DDDTools/Entity/IKeyValueObject";
    import { IRepositoryAsync } from "DDDTools/Repository/IRepositoryAsync";
    import { BaseRepositoryAsync } from "DDDTools/Repository/BaseRepositoryAsync";
    import IPromise = Q.IPromise;
    export abstract class BaseNeDBRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepositoryAsync<T, TKey> implements IRepositoryAsync<T, TKey> {
        private datastore;
        constructor(managedType: string, nedbDatastore: NeDBDataStore);
        protected abstract setupIndexes(): any;
        protected getByIdImplementation(id: TKey): IPromise<T>;
        private doAnInsert(toSave, deferred);
        private doAnUpdate(toSave, deferred);
        protected saveImplementation(item: T): IPromise<{}>;
        protected deleteImplementation(id: TKey): IPromise<{}>;
    }
}
declare module "NeDBRepository/Errors" {
    import { BaseErrors } from "DDDTools/ErrorManagement/BaseErrors";
    export class Errors extends BaseErrors {
        static DatabaseAlreadyRegistered: string;
        static DatabaseNotRegistered: string;
    }
}
declare module "NeDBRepository/NeDBDatabaseFactory" {
    import NeDBDataStore = require("nedb");
    export class NeDBDatabaseFactory {
        private static datastoreRegistry;
        static registerDatabase(dbname: string, database: NeDBDataStore): void;
        static isDatabaseRegistered(dbname: string): boolean;
        static getDatabase(dbname: string): NeDBDataStore;
        static unregisterDatabase(dbname: string): void;
        static getAndRegisterPersistentDb(dbname: string): NeDBDataStore;
        static getAndRegisterInMemoryDb(dbname: string): NeDBDataStore;
    }
}
