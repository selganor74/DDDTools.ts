/// <reference path="../../../typings/browser.d.ts" />

/// <reference path="../Promises/PromiseHandler.ts" />
/// <reference path="./IRepositoryAsync.ts" />
/// <reference path="./SaveActionEnum.ts" />
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

    import IPersistable = PersistableObject.IPersistable;
    import Factory = PersistableObject.Factory;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    import DomainDispatcher = DomainEvents.DomainDispatcher;

    import PromiseHandler = Promises.PromiseHandler;
    import IPromise = Promises.IPromise;

    /**
     * Captures common behavior of repository, using theTemplate Method Pattern.
     */
    export abstract class BaseRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
        implements IRepositoryAsync<T, TKey> {

        constructor(
            /**
             * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
             */
            private managedType: string,
            /**
             * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations. 
             * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
             */
            private repositoryId?: string
        ) {
            if (managedType === "" || managedType == undefined) {
                Errors.throw(Errors.ManagedTypeNotSupplied);
            }

            if (!repositoryId) this.repositoryId = "";
        }

        /**
         * You MUST override this method to provide functionality to access the repository and get a "stateObject" to use for object "reconstruction".
         */
        protected abstract getByIdImplementation(id: TKey): IPromise<ITypeTracking>;

        getById(id: TKey): IPromise<T> {
            var deferred = PromiseHandler.defer<T>();

            if (!id) {
                deferred.reject(Errors.getErrorInstance(Errors.KeyNotSet, "id cannot be null or undefined"));
                return deferred.promise;
            }

            this.getByIdImplementation(id).then(
                (value: T) => {
                    if (value.__typeName != this.managedType && !(this.managedType == undefined)) {
                        var reason = Errors.getErrorInstance(Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtained " + value.__typeName + " from database.");
                        deferred.reject(reason);
                        return;
                    }
                    try {
                        var toReturn: T = <T>(Factory.createObjectsFromState(value));
                    } catch (e) {
                        deferred.reject(e);
                        return;
                    }

                    var event = new ItemRetrievedEvent(toReturn, this.repositoryId);
                    return DomainDispatcher.dispatch(event).then(
                        () => {
                            deferred.resolve(toReturn);
                        }
                    );
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
        protected abstract saveImplementation(item: T, saveAction: SaveActionEnum): IPromise<{}>;

        private doSave(item: T, saveAction: SaveActionEnum): IPromise<{}> {
            var deferred = PromiseHandler.defer();
            // Creates a new instance of the object that will be saved;
            this.saveImplementation(item, saveAction).then(
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
            return this.saveOrReplace(item, false);
        }

        replace(item: T): IPromise<{}> {
            return this.saveOrReplace(item, true);
        }

        private saveOrReplace(item: T, replaceOnly: boolean = false): IPromise<{}> {
            var deferred = PromiseHandler.defer<{}>();
            var event: ItemUpdatedEvent<T> | ItemAddedEvent<T>;

            if (!item.getKey()) {
                var reason = Errors.getErrorInstance(Errors.KeyNotSet);
                deferred.reject(reason);
                return deferred.promise;
            }

            this.getById(item.getKey()).then(
                (readValue: T) => {
                    // the item already exist so we have to compare it with what we are saving.
                    if (!item.perfectlyMatch(readValue)) {
                        // Increment revision only if we are not replacing an item
                        if (!replaceOnly) {
                            // Interesting case when revisionId of the item to save is less than the revisionId of the already saved item. 
                            // Two choices: Throw an exception or use the "greatest" revisionId and increment that... I'll go for for the first choice...
                            if (item.getRevisionId() < readValue.getRevisionId()) {
                                var error = Errors.getErrorInstance(Errors.SavingOldObject);
                                error.message = "Error saving item of type " + this.managedType + " with key " + item.getKey().toString() + " because item's __revisionId (" + item.getRevisionId() + ") is less than saved item's __revisionId (" + readValue.getRevisionId() + ").";
                                deferred.reject(error);
                                return;
                            }
                            item.incrementRevisionId();
                            event = event || new ItemUpdatedEvent(item, this.repositoryId);
                        }
                        this.doSave(item, SaveActionEnum.Update).then(() => {
                            event = event || new ItemReplacedEvent(item, this.repositoryId);
                            return DomainDispatcher.dispatch(event).then(() => {
                                deferred.resolve();
                            });

                        }, (error) => {
                            var reason = this.buildError(error, Errors.ErrorReadingItem);
                            deferred.reject(reason);
                        });
                    } else {
                        // What is in the database perfectly match what we are saving, so nothing to do!
                        deferred.resolve();
                    }
                },
                (error: any) => {
                    if (error instanceof Error && error.name == Errors.ItemNotFound) {
                        // This is expected, the item is not in the repo, so we have to add it!
                        if (!replaceOnly) {
                            item.incrementRevisionId();
                        }
                        this.doSave(item, SaveActionEnum.Add).then(
                            () => {
                                event = event || new ItemAddedEvent(item, this.repositoryId);
                                return DomainDispatcher.dispatch(event).then(() => {
                                    deferred.resolve();
                                });
                            },
                            (error) => {
                                var reason = this.buildError(error, Errors.ErrorReadingItem);
                                deferred.reject(reason);
                            }
                        );
                    } else {
                        // Other errors must be treated as ... "Errors"
                        var reason = this.buildError(error, Errors.ErrorReadingItem);
                        deferred.reject(reason);
                    }
                }
            );
            return deferred.promise;

        }

        /**
         * You MUST override this method to provide "delete" functionality in your implementation.
         */
        protected abstract deleteImplementation(id: TKey): IPromise<{}>;

        delete(id: TKey): IPromise<{}> {
            var deferred = PromiseHandler.defer<{}>();
            var event: ItemDeletedEvent<T>;
            this.getById(id).then(
                (item) => {
                    var event = new ItemDeletedEvent(item, this.repositoryId);
                    this.deleteImplementation(id).then(
                        () => {
                            return DomainDispatcher.dispatch(event).then(() => {
                                deferred.resolve();
                            });
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