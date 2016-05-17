import { IRepository } from "./IRepository";
import { BaseAggregateRoot } from "../Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
export declare abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
    private managedType;
    constructor(managedType: string);
    protected abstract getByIdImplementation(id: TKey): ITypeTracking;
    getById(id: TKey): T;
    protected abstract saveImplementation(item: T): void;
    save(item: T): void;
    protected abstract deleteImplementation(id: TKey): void;
    delete(id: TKey): void;
}
