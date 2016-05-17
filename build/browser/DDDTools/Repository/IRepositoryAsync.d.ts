import { IAggregateRoot } from "../Aggregate/IAggregateRoot";
import { IKeyValueObject } from "../Entity/IKeyValueObject";
import IPromise = Q.IPromise;
export interface IRepositoryAsync<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
    getById(id: TKey): IPromise<T>;
    save(item: T): IPromise<{}>;
    delete(id: TKey): IPromise<{}>;
}
