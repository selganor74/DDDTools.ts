import {IRepositoryAsync} from "./IRepositoryAsync";
import {Errors} from "./Errors";
import {IPersistable} from "../PersistableObject/IPersistable";
import {Factory as Factory} from "../PersistableObject/Factory";
import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
import {IKeyValueObject} from "../Entity/IKeyValueObject";
import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

import IPromise = Q.IPromise;

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
        if (managedType === "") {
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
                if (value.__typeName != this.managedType) {
                    var reason = Errors.getErrorInstance(Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtained " + value.__typeName + " from database.");
                    deferred.reject(reason);
                    return;
                }
                var toReturn: T = <T>(Factory.createObjectsFromState(value));
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
        this.getById(item.getKey()).then(
            (readValue: T) => {
                // the item already exist so we have to compare it with what we are saving.
                if (!item.perfectlyMatch(readValue)) {
                    item.incrementRevisionId();
                    this.doSave(item, deferred);
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
        this.deleteImplementation(id).then(
            () => { deferred.resolve(); },
            (error: any) => {
                var reason = this.buildError(error, Errors.ErrorDeletingItem) 
                deferred.reject(reason);
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