/// <reference path="../../typings/browser.d.ts" />

import NeDBDataStore = require( "nedb" );

import {BaseAggregateRoot} from "../DDDTools/Aggregate/BaseAggregateRoot";
import {IKeyValueObject} from "../DDDTools/Entity/IKeyValueObject";
import {IRepositoryAsync} from "../DDDTools/Repository/IRepositoryAsync";
import {BaseRepositoryAsync} from "../DDDTools/Repository/BaseRepositoryAsync";
import {Errors} from "../DDDTools/Repository/Errors";

import IPromise = Q.IPromise;

/**
 * Repository implementation for the NeDB database.
 */
// namespace Repository.NeDBImplementation {
    declare var Nedb : typeof NeDBDataStore;
    
    class DbItem<
        T extends BaseAggregateRoot<T, TKey>, 
        TKey extends IKeyValueObject<TKey>
        > {
            key: string;
            item: T;
            
            constructor( item: T) {
                this.key = item.getKey().toString();
                this.item = item;
            }
        }
    
    export abstract class BaseNeDBRepositoryAsync
        <
            T extends BaseAggregateRoot<T, TKey>,
            TKey extends IKeyValueObject<TKey>
        > 
        extends BaseRepositoryAsync<T,TKey>
        implements IRepositoryAsync<T,TKey> { 
                
            private datastore: NeDBDataStore;
            
            constructor(
                managedType: string,
                private options?: NeDB.DataStoreOptions
            ) {
                super(managedType);
                this.datastore = new Nedb(options);
            }
            
            /**
             * Override this method to create the indexes needed by the repository
             */
            protected abstract setupIndexes();
            
            protected getByIdImplementation(id:TKey): IPromise<T> {
                var deferred = Q.defer<T>();
                
                this.datastore.findOne<DbItem<T,TKey>>({key: id.toString()}, function(err, document) {
                    if (err) {
                        deferred.reject(err);
                        return;
                    }
                    if(!document) {
                        var reason = Errors.getErrorInstance(Errors.ItemNotFound, "Item with id " + id.toString() + " was not found.");
                        deferred.reject(reason);
                        return;
                    }
                    deferred.resolve(document.item);
                });
                
                return deferred.promise;
            }
                        
            private doAnInsert(toSave: DbItem<T, TKey>, deferred: Q.Deferred<{}>) {
                
                this.datastore.insert<DbItem<T, TKey>>(toSave, function(err, document) {
                    if (err) {
                        deferred.reject(err);
                        return;
                    }
                    deferred.resolve();
                });
                
            }

            private doAnUpdate(toSave: DbItem<T, TKey>, deferred: Q.Deferred<{}>) {

                this.datastore.update<DbItem<T, TKey>>(toSave, function(err, document) {
                    if (err) {
                        deferred.reject(err);
                        return;
                    }
                    deferred.resolve();
                });
            }

            protected saveImplementation(item: T): IPromise<{}> {
                var deferred = Q.defer<{}>();

                this.datastore.findOne({id: item.getKey()},(err, document) => {
                    if (err) {
                        deferred.reject(err);
                        return;
                    }
                    var toSave = new DbItem<T, TKey>(item);
                    if(!document) {
                        // Document does not exist in collection
                        this.doAnInsert(toSave, deferred);
                        return;
                    }
                    this.doAnUpdate(toSave, deferred);                    
                });
                
                return deferred.promise;
            }
            
            protected deleteImplementation(id: TKey): IPromise<{}> {
                var deferred = Q.defer<{}>();

                this.datastore.remove({id: id.toString()},(err, document) => {
                    if (err) {
                        deferred.reject(err);
                        return;
                    }
                    deferred.resolve();                    
                });
                
                return deferred.promise;
            }
        }
// }