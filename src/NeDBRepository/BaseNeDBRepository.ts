/// <reference path="../../typings/browser.d.ts" />

import NeDBDataStore = require( "nedb" );

import {BaseAggregateRoot} from "../../src/DDDTools/Aggregate/BaseAggregateRoot";
import {IKeyValueObject} from "../../src/DDDTools/Entity/IKeyValueObject";
import {IRepository} from "../../src/DDDTools/Repository/IRepository";

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
    
    export abstract class BaseNeDBRepository
        <
            T extends BaseAggregateRoot<T, TKey>,
            TKey extends IKeyValueObject<TKey>
        > implements IRepository<T, TKey> { 
                
            private datastore: NeDBDataStore;
            
            constructor(
                private options?: NeDB.DataStoreOptions
            ) {
                this.datastore = new Nedb(options);
            }
            
            public getById(id:TKey): T {
                var toReturn: T;
                var done;
                var error;
                
                this.datastore.findOne<DbItem<T,TKey>>({key: id.toString()}, function(err, document) {
                    error = err;
                    toReturn = document.item;
                    done = true;    
                });
                
                while (done === undefined) {};
                if (error) {
                    // TODO Create Exception Here.
                }
                return toReturn;
            }
            
            public save(item: T): void {
                var done;
                var error;
                
                var toSave = new DbItem<T, TKey>(item);
                this.datastore.insert<DbItem<T, TKey>>(toSave, function(err, document) {
                    error = err;
                    done=true;
                });
                
                while (done === undefined) {};
                if (error) {
                    // TODO Create Exception Here.
                }
            }
            
            public delete(id: TKey): void {
                var done;
                var error;
                
                this.datastore.remove({key: id.toString()}, function(err, n) {
                    error = err;
                    done = true;
                });

                while (done === undefined) {};
                if (error) {
                    // TODO Create Exception Here.
                }
            }
        }
// }