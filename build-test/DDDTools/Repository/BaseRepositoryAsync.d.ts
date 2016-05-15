import { IRepositoryAsync } from "./IRepositoryAsync";
import { BaseAggregateRoot } from "../Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
import IPromise = Q.IPromise;
export declare abstract class BaseRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepositoryAsync<T, TKey> {
    private managedType;
    constructor(managedType: string);
    protected abstract getByIdImplementation(id: TKey): IPromise<ITypeTracking>;
    getById(id: TKey): IPromise<T>;
    protected abstract saveImplementation(item: T): IPromise<{}>;
    private doSave(item, deferred);
    save(item: T): IPromise<{}>;
    protected abstract deleteImplementation(id: TKey): IPromise<{}>;
    delete(id: TKey): IPromise<{}>;
}
