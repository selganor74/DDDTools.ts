/// <reference path="../../typings/browser.d.ts" />
import NeDBDataStore = require("nedb");
import { BaseAggregateRoot } from "../DDDTools/Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../DDDTools/Entity/IKeyValueObject";
import { IRepositoryAsync } from "../DDDTools/Repository/IRepositoryAsync";
import { BaseRepositoryAsync } from "../DDDTools/Repository/BaseRepositoryAsync";
import IPromise = Q.IPromise;
export declare abstract class BaseNeDBRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepositoryAsync<T, TKey> implements IRepositoryAsync<T, TKey> {
    private datastore;
    constructor(managedType: string, nedbDatastore: NeDBDataStore);
    protected getByIdImplementation(id: TKey): IPromise<T>;
    private doAnInsert(toSave, deferred);
    private doAnUpdate(toSave, deferred);
    protected saveImplementation(item: T): IPromise<{}>;
    protected deleteImplementation(id: TKey): IPromise<{}>;
}
