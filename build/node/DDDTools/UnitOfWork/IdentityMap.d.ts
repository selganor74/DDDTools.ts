import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { BaseAggregateRoot } from "../Aggregate/BaseAggregateRoot";
export declare enum ItemStatus {
    New = 0,
    Modified = 1,
    Saved = 2,
    Deleted = 3,
}
export declare class IdentityMap<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
    private idToObjectMap;
    constructor();
    isTracked(key: TKey): boolean;
    getById(key: TKey): T;
    add(key: TKey, item: T): void;
    remove(key: TKey): void;
    getIds(): TKey[];
    markAsDeletedById(key: TKey): void;
    markAsSavedById(key: TKey): void;
    markAsModifiedById(key: TKey): void;
    getItemStatus(key: TKey): ItemStatus;
    updateSavedItemStatus(key: TKey): void;
    private getTrackedItem(key);
}
