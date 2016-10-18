/// <reference path="../Promises/PromiseHandler.ts" />

namespace DDDTools.ReadModel {

    import IPromise = Promises.IPromise;

    /**
        Identifies a readmodel in the system.
        A Readmodel will be probably persisted to some kind of database,
        either in memory or disk or ...
        It is somehow similar to a repository, but it can store any kind of status,
        not necessarily an aggregate root.
        Objects stored in the ReadModel will probably have all public members.
     */
    export interface IReadModelAsync<T> {
        /**
            Will insert a new object in the readmodel.
            It will throw an error if an object with the same key already exist.
         */
        insert(value: T, key: string): IPromise<void>;

        /**
            Will update an existing onject in the readmodel
            It will throw an error if the object doesn't exist.
         */
        update(value: T, key: string): IPromise<void>;

        /**
        Will insert or update an object with a specified key
        */
        insertOrUpdate(value: T, key: string): IPromise<void>;

        /**
        Will delete an element of the ReadModel collection.
        */
        deleteByKey(key: string): IPromise<void>;

        /**
        Will delete a set of elements of the ReadModel collection identified by a query.
        */
        deleteByQuery(query: any): IPromise<void>;

        /**
        Will clear the collection deleting all of the content.
        */
        clear(): IPromise<void>;

        /**
        By now the query object is left to the implementation.
        */
        select(query: any): IPromise<T[]>;
    }
}