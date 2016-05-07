/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />

namespace DDDTools.UnitOfWork {

    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject

    export enum ItemStatus {
        New,
        Modified,
        Saved,
        Deleted
    }

    /**
     * Internal class to store item status info
     */
    class TrackedItem<T, TKey> {
        constructor(
            private status: ItemStatus,
            private item: T,
            private key: TKey
        ) { }

        public setStatus(status: ItemStatus) {
            this.status = status;
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
    }

    export class IdentityMap
        <
        T extends IAggregateRoot<T, TKey>,
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
            this.setItemStatus(key, ItemStatus.Deleted);
        }

        public markAsSavedById(key: TKey) {
            this.setItemStatus(key, ItemStatus.Saved);
        }

        public markAsModifiedById(key: TKey) {
            this.setItemStatus(key, ItemStatus.Modified);
        }

        public getItemStatus(key: TKey): ItemStatus {
            if (this.isTracked(key)) {
                var trackedItem = this.getTrackedItem(key);
                return trackedItem.getStatus();
            }
            return null;
        }

        private getTrackedItem(key: TKey): TrackedItem<T, TKey> {
            return this.idToObjectMap[key.toString()];
        }

        private setItemStatus(key: TKey, status: ItemStatus): void {
            var trackedItem = this.getTrackedItem(key);
            trackedItem.setStatus(status);
        }
    }
}