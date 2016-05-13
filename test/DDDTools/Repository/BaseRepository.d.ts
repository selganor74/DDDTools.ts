import { IRepository } from "./IRepository";
import { BaseAggregateRoot } from "../Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../Entity/IKeyValueObject";
export declare abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
    protected abstract getByIdImplementation(id: TKey): T;
    getById(id: TKey): T;
    protected abstract saveImplementation(item: T): void;
    save(item: T): void;
    protected abstract deleteImplementation(id: TKey): void;
    delete(id: TKey): void;
}
