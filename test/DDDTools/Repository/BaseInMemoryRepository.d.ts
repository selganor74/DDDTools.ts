import { BaseRepository } from "./BaseRepository";
import { BaseAggregateRoot } from "../Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { IRepository } from "../Repository/IRepository";
export declare abstract class BaseInMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepository<T, TKey> implements IRepository<T, TKey> {
    private _managedTypeName;
    private storage;
    constructor(_managedTypeName: string);
    protected getByIdImplementation(id: TKey): T;
    protected saveImplementation(item: T): void;
    protected deleteImplementation(id: TKey): void;
}
