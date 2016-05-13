define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (ItemStatus) {
        ItemStatus[ItemStatus["New"] = 0] = "New";
        ItemStatus[ItemStatus["Modified"] = 1] = "Modified";
        ItemStatus[ItemStatus["Saved"] = 2] = "Saved";
        ItemStatus[ItemStatus["Deleted"] = 3] = "Deleted";
    })(exports.ItemStatus || (exports.ItemStatus = {}));
    var ItemStatus = exports.ItemStatus;
    var TrackedItem = (function () {
        function TrackedItem(status, item, key) {
            this.status = status;
            this.item = item;
            this.key = key;
            this.asLoaded = item.getState();
        }
        TrackedItem.prototype.markAsNew = function () {
            this.status = ItemStatus.New;
            this.asLoaded = this.item.getState();
        };
        TrackedItem.prototype.markAsSaved = function () {
            this.status = ItemStatus.Saved;
            this.asLoaded = this.item.getState();
        };
        TrackedItem.prototype.markAsModified = function () {
            this.status = ItemStatus.Modified;
        };
        TrackedItem.prototype.markAsDeleted = function () {
            this.status = ItemStatus.Deleted;
        };
        TrackedItem.prototype.getStatus = function () {
            return this.status;
        };
        TrackedItem.prototype.getItem = function () {
            return this.item;
        };
        TrackedItem.prototype.getKey = function () {
            return this.key;
        };
        TrackedItem.prototype.hasChanged = function () {
            var currentState = this.item.getState();
            var currentStateAsString = JSON.stringify(currentState);
            var asLoadedAsString = JSON.stringify(this.asLoaded);
            return currentStateAsString !== asLoadedAsString;
        };
        TrackedItem.prototype.updateSavedItemStatus = function () {
            if (this.status === ItemStatus.Saved) {
                if (this.hasChanged()) {
                    this.markAsModified();
                }
            }
        };
        return TrackedItem;
    }());
    var IdentityMap = (function () {
        function IdentityMap() {
            this.idToObjectMap = {};
        }
        IdentityMap.prototype.isTracked = function (key) {
            var idAsString = key.toString();
            if (this.idToObjectMap[idAsString]) {
                return true;
            }
            return false;
        };
        IdentityMap.prototype.getById = function (key) {
            var idAsString = key.toString();
            if (this.isTracked(key)) {
                return this.idToObjectMap[idAsString].getItem();
            }
            return null;
        };
        IdentityMap.prototype.add = function (key, item) {
            var idAsString = key.toString();
            var newItem = new TrackedItem(ItemStatus.New, item, key);
            this.idToObjectMap[idAsString] = newItem;
        };
        IdentityMap.prototype.remove = function (key) {
            if (this.isTracked(key)) {
                delete this.idToObjectMap[key.toString()];
            }
        };
        IdentityMap.prototype.getIds = function () {
            var toReturn = [];
            for (var element in this.idToObjectMap) {
                toReturn.push(this.idToObjectMap[element].getKey());
            }
            return toReturn;
        };
        IdentityMap.prototype.markAsDeletedById = function (key) {
            var trackedItem = this.getTrackedItem(key);
            trackedItem.markAsDeleted();
        };
        IdentityMap.prototype.markAsSavedById = function (key) {
            var trackedItem = this.getTrackedItem(key);
            trackedItem.markAsSaved();
        };
        IdentityMap.prototype.markAsModifiedById = function (key) {
            var trackedItem = this.getTrackedItem(key);
            trackedItem.markAsModified();
        };
        IdentityMap.prototype.getItemStatus = function (key) {
            if (this.isTracked(key)) {
                var trackedItem = this.getTrackedItem(key);
                return trackedItem.getStatus();
            }
            return null;
        };
        IdentityMap.prototype.updateSavedItemStatus = function (key) {
            var item = this.getTrackedItem(key);
            item.updateSavedItemStatus();
        };
        IdentityMap.prototype.getTrackedItem = function (key) {
            var toReturn = this.idToObjectMap[key.toString()];
            if (!toReturn) {
                return null;
            }
            return toReturn;
        };
        return IdentityMap;
    }());
    exports.IdentityMap = IdentityMap;
});
//# sourceMappingURL=IdentityMap.js.map