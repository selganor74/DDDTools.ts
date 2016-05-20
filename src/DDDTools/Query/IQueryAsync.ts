/// <reference path="../../../typings/browser.d.ts" />

namespace DDDTools.Query {
    
    import IPromise = Q.IPromise;
    
    /**
     * Identifies a query to be executed against a Datastore in an async fashion
     */
    export interface IQueryAsync<T> {
        execute(): IPromise<T[]>;
    }
}