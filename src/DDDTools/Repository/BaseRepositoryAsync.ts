/// <reference path="../../../typings/browser.d.ts" />

/// <reference path="./IRepositoryAsync.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./ItemRetrievedEvent.ts" />
/// <reference path="./ItemAddedEvent.ts" />
/// <reference path="./ItemUpdatedEvent.ts" />
/// <reference path="./ItemDeletedEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />

// import {IRepositoryAsync} from "./IRepositoryAsync";
// import {Errors} from "./Errors";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {Factory as Factory} from "../PersistableObject/Factory";
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
// import {ItemRetrievedEvent} from "./ItemRetrievedEvent";
// import {ItemAddedEvent} from "./ItemAddedEvent";
// import {ItemUpdatedEvent} from "./ItemUpdatedEvent";
// import {ItemDeletedEvent} from "./ItemDeletedEvent";
// import {DomainDispatcher} from "../DomainEvents/DomainDispatcher";

namespace DDDTools.Repository {

    import IPromise = Q.IPromise;

    import IPersistable = PersistableObject.IPersistable;
    import Factory = PersistableObject.Factory;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    import DomainDispatcher = DomainEvents.DomainDispatcher;

    /**
     * Captures common behavior of repository, using theTemplate Method Pattern.
     */
    export abstract class BaseRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
        implements IRepositoryAsync<T, TKey> {

        constructor(
            /**
             * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
             */
            private managedType: string
        ) {
            if (managedType === "" || managedType == undefined) {
                Errors.throw(Errors.ManagedTypeNotSupplied);
            }
        }

        /**
         * You MUST override this method to provide functionality to access to the repository and get a "stateObject" to use for object "reconstruction".
         */
        protected abstract getByIdImplementation(id: TKey): IPromise<ITypeTracking>;

        getById(id: TKey): IPromise<T> {
            var deferred = Q.defer<T>();
            this.getByIdImplementation(id).then(
                (value: T) => {
                    if (value.__typeName != this.managedType && !(this.managedType == undefined) ) {
                        var reason = Errors.getErrorInstance(Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtained " + value.__typeName + " from database.");
                        deferred.reject(reason);
                        return;
                    }
                    var toReturn: T = <T>(Factory.createObjectsFromState(value));

                    var event = new ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), value);
                    DomainDispatcher.dispatch(event);

                    deferred.resolve(toReturn);
                },
                (error: any) => {
                    var reason = this.buildError(error, Errors.ItemNotFound);
                    deferred.reject(reason);
                });
            return deferred.promise;
        }

        /**
         * You MUST override this method to provide "save" functionality in your implementation. The template method "save" will manage the revisionId logic.
         */
        protected abstract saveImplementation(item: T): IPromise<{}>;

        private doSave(item: T, deferred: Q.Deferred<{}>): IPromise<{}> {
            this.saveImplementation(item).then(
                () => {
                    deferred.resolve()
                },
                (error: any) => {
                    var reason = this.buildError(error, Errors.ErrorSavingItem);
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        }

        save(item: T): IPromise<{}> {
            var deferred = Q.defer<{}>();
            var event: ItemUpdatedEvent | ItemAddedEvent;

            this.getById(item.getKey()).then(
                (readValue: T) => {
                    // the item already exist so we have to compare it with what we are saving.
                    if (!item.perfectlyMatch(readValue)) {
                        item.incrementRevisionId();
                        this.doSave(item, deferred);
                        event = event || new ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                        DomainDispatcher.dispatch(event);
                        return;
                    } else {
                        // What is in the database perfectly match what we are saving, so nothing to do!
                        deferred.resolve();
                        return;
                    }
                },
                (error: any) => {
                    if (error instanceof Error && error.name == Errors.ItemNotFound) {
                        // This is expected, the item is not in the repo, so we have to add it!
                        item.incrementRevisionId();

                        this.doSave(item, deferred);

                        event = event || new ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                        DomainDispatcher.dispatch(event);

                        return;
                    }
                    // Other errors must be treated as ... "Errors"
                    var reason = this.buildError(error, Errors.ErrorReadingItem);
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        }

        /**
         * You MUST override this method to provide "delete" functionality in your implementation.
         */
        protected abstract deleteImplementation(id: TKey): IPromise<{}>;

        delete(id: TKey): IPromise<{}> {
            var deferred = Q.defer<{}>();
            var event: ItemDeletedEvent;
            this.getById(id).then(
                (item) => {
                    var event = new ItemDeletedEvent(item.__typeName, item.__typeVersion, id.toString(), item.getState());
                    this.deleteImplementation(id).then(
                        () => {
                            deferred.resolve();
                            DomainDispatcher.dispatch(event);
                        },
                        (error: any) => {
                            var reason = this.buildError(error, Errors.ErrorDeletingItem)
                            deferred.reject(reason);
                        }
                    );
                },
                (error) => {
                    if (error instanceof Error && error.name === Errors.ItemNotFound) {
                        deferred.resolve();
                        return;
                    }
                }
            );
            return deferred.promise;
        }

        /**
         * Helper method to build an error from a return value of the Async Implementations.
         */
        private buildError(errorFromCall: any, errorIfErrorFromCallIsNotError: string): Error {
            var reason: Error;
            if (errorFromCall instanceof Error) {
                reason = errorFromCall;
            } else {
                reason = Errors.getErrorInstance(errorIfErrorFromCallIsNotError, JSON.stringify(errorFromCall));
            }
            return reason;
        }
    }
}