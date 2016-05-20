/// <reference path="../../../../typings/browser.d.ts" />
declare namespace DDDTools.Query {
    import IPromise = Q.IPromise;
    interface IQueryAsync<T> {
        execute(): IPromise<T[]>;
    }
}
