/// <reference path="IQuery.d.ts" />
declare namespace DDDTools.Query {
    abstract class BaseRepositoryQuery<T> implements IQuery<T> {
        abstract execute(): T[];
    }
}
