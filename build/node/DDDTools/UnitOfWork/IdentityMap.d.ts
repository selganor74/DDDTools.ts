/// <reference path="../Aggregate/IAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.d.ts" />
/// <reference path="../PersistableObject/IPersistable.d.ts" />
declare namespace DDDTools.UnitOfWork {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    enum ItemStatus {
        New = 0,
        Modified = 1,
        Saved = 2,
        Deleted = 3,
    }
    class IdentityMap<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
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
}
