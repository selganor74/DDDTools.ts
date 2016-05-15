/// <reference path="../../typings/browser.d.ts" />
import { BaseAggregateRoot } from "../DDDTools/Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../DDDTools/Entity/IKeyValueObject";
import { IRepositoryAsync } from "../DDDTools/Repository/IRepositoryAsync";
import { BaseRepositoryAsync } from "../DDDTools/Repository/BaseRepositoryAsync";
import IPromise = Q.IPromise;
export declare abstract class BaseNeDBRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepositoryAsync<T, TKey> implements IRepositoryAsync<T, TKey> {
    private options;
    private datastore;
    constructor(managedType: string, options?: NeDB.DataStoreOptions);
    abstract setupIndexes(): any;
    getByIdImplementation(id: TKey): IPromise<T>;
    private doAnInsert(toSave, deferred);
    private doAnUpdate(toSave, deferred);
    saveImplementation(item: T): IPromise<{}>;
    deleteImplementation(id: TKey): IPromise<{}>;
}