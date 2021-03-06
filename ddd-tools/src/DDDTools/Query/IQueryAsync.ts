/// <reference path="../../../typings/browser.d.ts" />

namespace DDDTools.Query {
    
    import IPromise = Promises.IPromise;
    
    /**
     * Identifies a query to be executed against a Datastore in an async fashion
     */
    export interface IQueryAsync<T> {
        setQuery(queryObject: any);
        execute(): IPromise<T[]>;
    }
}