/// <reference path="../../typings/browser.d.ts" />
import { BaseAggregateRoot } from "../DDDTools/Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../DDDTools/Entity/IKeyValueObject";
import { IRepository } from "../DDDTools/Repository/IRepository";
export declare abstract class BaseNeDBRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
    private options;
    private datastore;
    constructor(options?: NeDB.DataStoreOptions);
    getById(id: TKey): T;
    private sleepUntil(whatToWait);
    save(item: T): void;
    delete(id: TKey): void;
}
