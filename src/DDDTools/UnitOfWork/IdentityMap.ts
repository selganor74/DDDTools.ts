// namespace DDDTools.UnitOfWork {

import {IAggregateRoot} from "../Aggregate/IAggregateRoot";
import {IKeyValueObject} from "../Entity/IKeyValueObject";
import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
import {IPersistable} from "../PersistableObject/IPersistable";

export enum ItemStatus {
    New,
    Modified,
    Saved,
    Deleted
}

/**
 * Internal class to store item status info
 */
class TrackedItem<
    T extends BaseAggregateRoot<T, TKey>,
    TKey extends IKeyValueObject<TKey>
    > {
    // Will contain a serialized version of the object as it was when it was loaded from the repository.

    private asLoaded: IPersistable // Will contain the state of the object when first added or updated

    constructor(
        private status: ItemStatus,
        private item: T,
        private key: TKey
    ) {
        this.asLoaded = item.getState();
    }

    public markAsNew() {
        this.status = ItemStatus.New;
        this.asLoaded = this.item.getState();
    }

    public markAsSaved() {
        this.status = ItemStatus.Saved;
        this.asLoaded = this.item.getState();
    }

    public markAsModified() {
        this.status = ItemStatus.Modified;
    }

    public markAsDeleted() {
        this.status = ItemStatus.Deleted;
    }

    public getStatus(): ItemStatus {
        return this.status;
    }

    public getItem(): T {
        return this.item;
    }

    public getKey(): TKey {
        return this.key;
    }

    public hasChanged(): boolean {
        var currentState = this.item.getState();
        var currentStateAsString = JSON.stringify(currentState);
        var asLoadedAsString = JSON.stringify(this.asLoaded);

        return currentStateAsString !== asLoadedAsString;
    }

    /**
     * Checks if an item in "Saved" status has been modified, and changes the status accordingly.
     */
    public updateSavedItemStatus() {
        if (this.status === ItemStatus.Saved) {
            if (this.hasChanged()) {
                this.markAsModified();
            }
        }
    }

}

export class IdentityMap
    <
    T extends BaseAggregateRoot<T, TKey>,
    TKey extends IKeyValueObject<TKey>
    >
{

    private idToObjectMap: { [id: string]: TrackedItem<T, TKey> }

    constructor() {
        this.idToObjectMap = {};
    }

    /**
     * Returns true if key is already stored in the IdentityMap
     */
    public isTracked(key: TKey): boolean {
        var idAsString = key.toString();
        if (this.idToObjectMap[idAsString]) {
            return true;
        }
        return false;
    }

    /**
     * Retrieves an item from the IdentityMap.
     */
    public getById(key: TKey): T {
        var idAsString = key.toString();
        if (this.isTracked(key)) {
            return this.idToObjectMap[idAsString].getItem();
        }
        return null;
    }

    /**
     * Adds or replaces an item to the IdentityMap.
     */
    public add(key: TKey, item: T): void {
        var idAsString = key.toString();
        var newItem = new TrackedItem(ItemStatus.New, item, key);
        this.idToObjectMap[idAsString] = newItem;
    }

    /**
     * Completely removes an item from the IdentityMap
     */
    public remove(key: TKey): void {
        if (this.isTracked(key)) {
            delete this.idToObjectMap[key.toString()];
        }
    }

    public getIds(): TKey[] {
        var toReturn: TKey[] = [];
        for (var element in this.idToObjectMap) {
            toReturn.push(this.idToObjectMap[element].getKey());
        }
        return toReturn;
    }

    public markAsDeletedById(key: TKey) {
        var trackedItem = this.getTrackedItem(key);
        trackedItem.markAsDeleted();
    }

    public markAsSavedById(key: TKey) {
        var trackedItem = this.getTrackedItem(key);
        trackedItem.markAsSaved();
    }

    public markAsModifiedById(key: TKey) {
        var trackedItem = this.getTrackedItem(key);
        trackedItem.markAsModified();
    }

    public getItemStatus(key: TKey): ItemStatus {
        if (this.isTracked(key)) {
            var trackedItem = this.getTrackedItem(key);
            return trackedItem.getStatus();
        }
        return null;
    }

    /**
     * Computes the correct status for an item in "Saved" status, as it may have been modified since now (here we don't have property tracking).
     */
    public updateSavedItemStatus(key: TKey) {
        var item = this.getTrackedItem(key);
        item.updateSavedItemStatus();
    }

    private getTrackedItem(key: TKey): TrackedItem<T, TKey> {
        var toReturn = this.idToObjectMap[key.toString()];
        if (!toReturn) {
            return null;
        }
        return toReturn;
    }
}
// }