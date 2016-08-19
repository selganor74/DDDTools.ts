/**
 * Minimal Error handling base behaviors for the domain model.
 */
declare namespace DDDTools.ErrorManagement {
    abstract class BaseErrors {
        static throw(name: string, message?: string): void;
        static getErrorInstance(name: string, message?: string): Error;
    }
}
declare namespace DDDTools.Promises {
    var PromiseHandler: ng.IQService;
    export import IPromise = ng.IPromise;
    export import Deferred = ng.IDeferred;
}
declare namespace DDDTools.Query {
    /**
     * Identifies a query to be executed against a Datastore
     */
    interface IQuery<T> {
        setQuery(queryObject: any): any;
        execute(): T[];
    }
}
declare namespace DDDTools.Query {
    import IPromise = Promises.IPromise;
    /**
     * Identifies a query to be executed against a Datastore in an async fashion
     */
    interface IQueryAsync<T> {
        setQuery(queryObject: any): any;
        execute(): IPromise<T[]>;
    }
}
/**
 * Some simple classes used in different modules.
 */
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
        /**
         * Returns all the ids in the map
         */
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
        /**
         * Get back a Regular Expression from the SerializableRegExp instance
         */
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
        /**
         * Prepares the id generator for a new run
         */
        static resetTouchIndex(): void;
        private static getNewIndex();
        /**
         * adds an __objectInstanceId property to an object
         */
        static touch(object: any): void;
        /**
         * removes the __objectInstanceId property from an object
         */
        static untouch(object: any): void;
        /**
         * checks for the presence of an __objectInstanceId property
         */
        static hasBeenTouched(object: any): boolean;
    }
}
/**
 * Implements JSON string serialization. It extends the functionalities of JSON.stringify to allow serialization and deserialization of date and regular expression objects, and object reference.
 */
declare namespace DDDTools.Serialization {
    class Deserializer {
        /**
         * This is needed to track object instances to achieve correct reconstruction of the object tree.
         */
        private static identityMap;
        /**
         * Deserializes an object from a JSON string.
         */
        static deserialize(toDeserialize: string): any;
        /**
         * Deserializes an object previously serialized with "SerializeToObject"
         */
        static deserializeFromObject(toDeserialize: any): any;
        /**
         * Cleans the reconsituted instances from the __objectInstanceId property,
         * and empties the IdentityMap.
         */
        private static cleanup();
        /**
         * It handles Fake* instances uses __objectInstanceId to rebuild a correct object tree.
         * This function will be called by JSON.parse
         */
        private static customReviver(key, value);
        /**
         * checks for the presence of an __objectInstanceId property
         */
        private static hasBeenTouched(object);
        /**
         * Manages RegExp Deserialization
         * TODO: Find a way to move this responsibility to the SerializableRegExp
         */
        private static FakeRegExpDeserializer(value);
        /**
         * Manages Date Deserialization
         * TODO: Find a way to move this responsibility to the SerializableRegExp
         */
        private static FakeDateDeserializer(value);
        /**
         * Manages Null Deserialization
         * TODO: Find a way to move this responsibility to the SerializableNull
         */
        private static FakeNullDeserializer(value);
    }
}
declare namespace DDDTools.Serialization {
    class Serializer {
        /**
         * Serializes an object to a JSON string, keepeing track of the instances of the objects serialized
         */
        static serialize(toSerialize: any): string;
        /**
         * Serializes an object to ... a new object. The serialized object will have Serializable version of Dates, null and RegExp value, instead of the original types.
         * The serialized object will have only data and no methods for non native objects.
         */
        static serializeToObject(toSerialize: any): any;
        /**
         * Preprocess the object tree to be serialized to find and replace Date, null, RegExp, ... objects with something different...
         */
        private static preprocessForSerializablesSubstitution(sourceObject);
        private static touchSourceObject(sourceObject);
        private static untouchSourceObject(sourceObject);
        /**
         * Postprocess the object tree to be serialized to find and replace SerializableDate/RegExp objects with Original types again...
         */
        private static postprocessForSerializableSubstitution(sourceObject);
    }
}
/**
 * Defines default behavior and interfaces for a Persistable Object, an object that has a state that will probably be persisted. It gives support to "upgrade" persisted objects.
 */
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
/**
 * Implementation of the ValueObject pattern.
 */
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
        /**
         * Finds this value object in an array. Will return an array of indexes matching the searched object.
         */
        findInArray(collection: T[]): string[];
    }
}
/**
 * Collection of general and commonly used ValueObjects.
 */
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
    /**
     * PersistableObjectFactory is an helper class to create and reconstitute statfeul objects.
     * It gurantees that a statful object is always created or reconstituted to its latest version.
     */
    class Factory {
        private static typeRegistry;
        /**
         * Registers a new IPersistable type with the Factory
         */
        static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void;
        /**
         * Creates an instance of the specified type. If typeVersion is not supplied, latest available version is returned.
         */
        static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
        /**
         * Creates an object instance from its state. Will always return the latest version possible of the object
         */
        static createObjectsFromState(state: any): any;
        /**
         * Checks if an object implements the "IPersistable" interface.
         */
        private static isPersistableObject(objectToTest);
        /**
         * Checks if a type can be instatiated (at its latest version).
         */
        private static isTypeInstantiable(typeName);
    }
    /**
     * The Upgrader is an helper class to automate the "upgrade process" of an object's state.
     * The Upgrader is found on these principles:
     *  * The latest version FQTN must match the one specified by the property __typeName, which is in the form namespace.objectName.
     *  * Older versions of a PersistableObject MUST have a FQTN in the form namespace.<version>.objectName.
     *  * __typeVersion MUST be specified as v<versionNumber> where version is an integer.
     *  * All object's versions (excluding v1) MUST provide an getUpgradedInstance method that knows how to modify state to go from
     *    version v<n - 1> to v<n>, where n is the version of the object containing the getUpgradedInstance method.
     */
    class Upgrader {
        private static latestTypeVersionMap;
        private static isVersionMapBuilt;
        private static buildVersionMapForType(typeName);
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static upgrade(instanceFrom: IPersistable): IPersistable;
        static computeNextVersion(typeVersion: string): string;
    }
}
declare namespace DDDTools.StateMachine {
    interface IStateMachine<
        /**
         * An enum or string literal representing the possible statuses of the machine
         */
    TStatuses, 
        /**
         * An enum or string literal representing the possible events
         */
    TEvents> {
        /**
         * Will throw an exception if isEventValid returns false, otherwise it will advance the machine to the next status.
         */
        processEvent(event: TEvents): void;
        /**
         * Returns true if the event is valid for the current status.
         */
        isEventValidForCurrentStatus(event: TEvents): boolean;
        /**
         * Returns the current status of the machine
         */
        getCurrentStatus(): TStatuses;
        /**
         * Returns the previous status of the machine
         */
        getPreviousStatus(): TStatuses;
    }
}
declare namespace DDDTools.DomainEvents {
    import IPersistable = PersistableObject.IPersistable;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    /**
     * Role interface to identify a Domain Event
     */
    interface IDomainEvent extends IPersistable, ITypeTracking {
    }
}
declare namespace DDDTools.DomainEvents {
    import IPromise = Promises.IPromise;
    /**
     * Form of an Event Handler.
     * When asyncronous processing occour within an Handler, it is good practice to return a promise, so the dispatcher (and the event raiser)
     */
    interface IEventHandler {
        (domainEvent: IDomainEvent): IPromise<any> | void;
    }
}
declare namespace DDDTools.DomainEvents {
    import IPromise = Promises.IPromise;
    interface IDispatcher {
        /**
         * register an handler for an event type.
         * the scope parameter is the context (this) in which the handler will be executed
         */
        registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any): any;
        /**
         * unregister a previoulsy registered handler for an event type.
         */
        unregisterHandler(eventTypeName: string, handler: IEventHandler): any;
        /**
         * dispatches an event to the registered handlers.
         * it will return a promise that will be resolved when all promises will be resolved, and rejected if any will be rejected.
         */
        dispatch(event: IDomainEvent): IPromise<any>;
    }
}
declare namespace DDDTools.StateMachine {
    import BasePersistableObject = DDDTools.PersistableObject.BasePersistableObject;
    import IDomainEvent = DDDTools.DomainEvents.IDomainEvent;
    import IPromise = DDDTools.Promises.IPromise;
    class HandlerResult {
        okToChange: boolean;
        reason: string;
        constructor(okToChange?: boolean, reason?: string);
    }
    class StateMachineEvent<TStatuses, TEvents> extends BasePersistableObject implements IDomainEvent {
        __typeName: string;
        __typeVersion: string;
        currentStatus: TStatuses;
        previousStatus: TStatuses;
        destinationStatus: TStatuses;
        processingEvent: TEvents;
    }
    type EventHandler<TStatuses, TEvents> = (event: StateMachineEvent<TStatuses, TEvents>) => IPromise<HandlerResult>;
    enum KindsOfEventHandler {
        beforeEnterStatus = 0,
        afterEnterStatus = 1,
        beforeExitStatus = 2,
        afterExitStatus = 3,
        onSuccesfulEventProcessed = 4,
    }
    class BaseStateMachine<TStatuses, TEvents> extends BasePersistableObject implements IStateMachine<TStatuses, TEvents> {
        protected stateMachineDefinition: {
            [event: string]: {
                [fromStatus: string]: TStatuses;
            };
        };
        /**
         * Please, remember to set this value in your derived types !
         */
        __typeName: string;
        /**
         * Please, remember to set this value in your derived types !
         */
        __typeVersion: string;
        private currentStatus;
        private previousStatus;
        private beforeEnterStatusHandlers;
        private afterEnterStatusHandlers;
        private beforeExitStatusHandlers;
        private afterExitStatusHandlers;
        private onSuccesfulEventProcessedHandlers;
        constructor(initialStatus: TStatuses, stateMachineDefinition: {
            [event: string]: {
                [fromStatus: string]: TStatuses;
            };
        });
        registerHandler(handler: EventHandler<TStatuses, TEvents>, kindOfHandler: KindsOfEventHandler): void;
        /**
         * Gets the current status of the State Machine
         */
        getCurrentStatus(): TStatuses;
        /**
         * Gets the previous status of the Machine
         */
        getPreviousStatus(): TStatuses;
        /**
         * Tells if an event is allowed to be processed in the current state
         */
        isEventValidForCurrentStatus(event: TEvents): boolean;
        /**
         * Will cause the state machine to advance to the next status... or throw an exception.
         */
        processEvent(event: TEvents): IPromise<HandlerResult>;
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
        /**
         * Derived classes must reimplement this method.
         */
        abstract toString(): string;
    }
}
declare namespace DDDTools.DomainEvents {
    import IPromise = Promises.IPromise;
    class DomainDispatcher {
        private static dispatcherImplementation;
        static setDispatcherImplementation(dispatcher: IDispatcher): void;
        static registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any): void;
        static unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        static dispatch(event: IDomainEvent): IPromise<any>;
    }
}
/**
 * Classes and interfaces to implement an Entity, a persistable object.
 */
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
/**
 * Implements the Aggregate Pattern by defining interfaces and base behavior for an AggregateRoot.
 */
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import IEntity = Entity.IEntity;
    /**
     * Base behavior of an AggregateRoot, which is basically an entity...
     */
    abstract class BaseAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseEntity<T, TKey> implements IAggregateRoot<T, TKey>, IEntity<T, TKey> {
        private __revisionId;
        getRevisionId(): number;
        incrementRevisionId(): void;
        /**
         * Compares an aggregate with another. Returns true if aggregate's data are exactly equal.
         */
        perfectlyMatch(other: BaseAggregateRoot<T, TKey>): boolean;
    }
}
/**
 * Interfaces and classes to implement a Repository to persist Aggregates. Contains a reference in memory repository.
 */
declare namespace DDDTools.Repository {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    interface IRepository<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        /**
         * Retrieves an item from the repository given its id. It gives back a fully rconstituted Aggregate Root, so that  will be possible to call any public method.
         * fires ItemRetrieved event
         */
        getById(id: TKey): T;
        /**
         * Saves an item.
         */
        save(item: T): void;
        /**
         * Replaces an item. Just like save, but it doesn't increment the revisionId and keep the one stored in the AggregateRoot
         */
        replace(item: T): void;
        /**
         * Deletes an item.
         */
        delete(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    /**
     * SaveAction will be passed to repositories' saveImplementation so that client can take decisions on what to do when adding or replacing an item if needed.
     */
    enum SaveActionEnum {
        Add = 0,
        Update = 1,
    }
}
/**
 * Interfaces and classes to implement a Repository to persist Aggregates. Contains a reference in memory repository.
 */
declare namespace DDDTools.Repository {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IPromise = Promises.IPromise;
    interface IRepositoryAsync<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        /**
         * Retrieves an item from the repository given its id. It gives back a fully rconstituted Aggregate Root, so that  will be possible to call any public method.
         * fires ItemRetrieved event
         */
        getById(id: TKey): IPromise<T>;
        /**
         * Saves an item.
         */
        save(item: T): IPromise<{}>;
        /**
         * Replaces an item. Just like save, but it doesn't increment the revisionId and keep the one stored in the AggregateRoot
         */
        replace(item: T): IPromise<{}>;
        /**
         * Deletes an item.
         */
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
    /**
     * A static container of event "__typeName"s
     */
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
        /**
         * The aggregate instance after the action has been performed.
         */
        item: TAggregate;
        /**
         * The Id of the repository performing the operation
         */
        repositoryId: string;
        constructor(
            /**
             * The aggregate instance after the action has been performed.
             */
            item: TAggregate, 
            /**
             * The Id of the repository performing the operation
             */
            repositoryId: string);
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
    /**
     * Captures common behavior of repository, using theTemplate Method Pattern.
     */
    abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        /**
         * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
         */
        private managedType;
        /**
         * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations.
         * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
         */
        private repositoryId;
        constructor(
            /**
             * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
             */
            managedType: string, 
            /**
             * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations.
             * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
             */
            repositoryId?: string);
        /**
         * You MUST override this method to provide functionality to access to the repository and get an "stateObject" to use for object "reconstruction".
         * This method should throw "ItemNotFound" if no element matching the id was found.
         */
        protected abstract getByIdImplementation(id: TKey): ITypeTracking;
        getById(id: TKey): T;
        /**
         * You MUST override this method to provide "save" functionality in your implementation. The template method "save" will manage the revisionId logic.
         */
        protected abstract saveImplementation(item: T, saveAction: SaveActionEnum): void;
        save(item: T): void;
        /**
         * Works just like save, but it never increments RevisionId, it trusts the one already present in the aggregate.
         */
        replace(item: T): void;
        private saveOrReplace(item, replaceOnly?);
        /**
         * You MUST override this method to provide "delete" functionality in your implementation.
         */
        protected abstract deleteImplementation(id: TKey): void;
        delete(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    import IPromise = Promises.IPromise;
    /**
     * Captures common behavior of repository, using theTemplate Method Pattern.
     */
    abstract class BaseRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepositoryAsync<T, TKey> {
        /**
         * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
         */
        private managedType;
        /**
         * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations.
         * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
         */
        private repositoryId;
        constructor(
            /**
             * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
             */
            managedType: string, 
            /**
             * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations.
             * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
             */
            repositoryId?: string);
        /**
         * You MUST override this method to provide functionality to access the repository and get a "stateObject" to use for object "reconstruction".
         */
        protected abstract getByIdImplementation(id: TKey): IPromise<ITypeTracking>;
        getById(id: TKey): IPromise<T>;
        /**
         * You MUST override this method to provide "save" functionality in your implementation. The template method "save" will manage the revisionId logic.
         */
        protected abstract saveImplementation(item: T, saveAction: SaveActionEnum): IPromise<{}>;
        private doSave(item, saveAction);
        save(item: T): IPromise<{}>;
        replace(item: T): IPromise<{}>;
        private saveOrReplace(item, replaceOnly?);
        /**
         * You MUST override this method to provide "delete" functionality in your implementation.
         */
        protected abstract deleteImplementation(id: TKey): IPromise<{}>;
        delete(id: TKey): IPromise<{}>;
        /**
         * Helper method to build an error from a return value of the Async Implementations.
         */
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
    import IPromise = Promises.IPromise;
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
    import IPromise = Promises.IPromise;
    class InProcessDispatcher {
        private delegatesRegistry;
        clear(): void;
        /**
         * the scope parameter can be passed in to warranty that callback will be called in the original context [this]!!!
         */
        registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any): void;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        dispatch(event: IDomainEvent): IPromise<any>;
        private isAPromise(valueToTest);
        private buildErrorMessage(Errors);
    }
}
declare namespace DDDTools.Saga {
    interface ISaga {
        start(): void;
        stop(): void;
        recover(): void;
    }
}
declare namespace DDDTools.Saga {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IRepositoryAsync = Repository.IRepositoryAsync;
    abstract class BaseSaga<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>, 
        /**
         * TStatuses must be an enum or a string literal
         */
    TStatuses, 
        /**
         * TEvents must be an enum or a string literal
         */
    TEvents> extends BaseAggregateRoot<T, TKey> {
        private repository;
        private initialStatus;
        private finalStatuses;
        constructor(repository: IRepositoryAsync<T, TKey>, initialStatus: TStatuses, finalStatuses: TStatuses[]);
        /**
         * You must override this function to handle events and saga status
         */
        abstract triggerEvent(event: TEvents): void;
        abstract registerEvents(): void;
        abstract unregisterEvents(): void;
        start(): void;
        stop(): void;
    }
}
/**
 * Interfaces and classes to implement a UnitOfWork. A UnitOfWork keeps track of changes on the Aggregates loaded from the underlying repository and allows to save them all in a single call.
 */
declare namespace DDDTools.UnitOfWork {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IEventHandler = DomainEvents.IEventHandler;
    /**
     * Simple UnitOfWork for a single Repository.
     */
    interface IUnitOfWork<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        /**
         * Retrieves an item from the Repository or from the UnitOfWork, given its Id.
         */
        getById(key: TKey): T;
        /**
         * Marks an item as deleted from the UnitOfWork (and from the Repository when the UoW will be saved)
         */
        deleteById(key: TKey): void;
        /**
         * Saves all the modified items in the UnitOfWork.
         */
        saveAll(): void;
        /**
         * Allows to register an handler for events generated by the UnitOfWork
         */
        registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        /**
         * Allows to unregister an handler for events generated by the UnitOfWork
         */
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
    /**
     * A static container of event "__typeName"s
     */
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
        /**
         * Returns true if key is already stored in the IdentityMap
         */
        isTracked(key: TKey): boolean;
        /**
         * Retrieves an item from the IdentityMap.
         */
        getById(key: TKey): T;
        /**
         * Adds or replaces an item to the IdentityMap.
         */
        add(key: TKey, item: T): void;
        /**
         * Completely removes an item from the IdentityMap
         */
        remove(key: TKey): void;
        getIds(): TKey[];
        markAsDeletedById(key: TKey): void;
        markAsSavedById(key: TKey): void;
        markAsModifiedById(key: TKey): void;
        getItemStatus(key: TKey): ItemStatus;
        /**
         * Computes the correct status for an item in "Saved" status, as it may have been modified since now (here we don't have property tracking).
         */
        updateSavedItemStatus(key: TKey): void;
        private getTrackedItem(key);
    }
}
declare namespace DDDTools.UnitOfWork {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IRepository = Repository.IRepository;
    import IEventHandler = DomainEvents.IEventHandler;
    /**
     * Simple UnitOfWork for a single Repository.
     */
    class UnitOfWork<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        private idMap;
        private repository;
        private dispatcher;
        constructor(repository: IRepository<T, TKey>);
        /**
         * Retrieves an item from the Repository or from the UnitOfWork, given its Id.
         */
        getById(key: TKey): T;
        /**
         * Marks an item as deleted from the UnitOfWork (and from the Repository when the UoW will be saved)
         */
        deleteById(key: TKey): void;
        /**
         * Saves all the modified items in the UnitOfWork.
         */
        saveAll(): void;
        registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        private processDeletedItem(key);
        private processNewOrModifiedItem(key);
        private raiseEvent(event);
        /**
         * Completely removes an object from the IdentityMap
         */
        private removeById(key);
    }
}
