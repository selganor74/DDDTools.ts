define(["require", "exports", "../DomainEvents/InProcessDispatcher", "./IdentityMap", "./ObjectDeletedEvent", "./ObjectRetrievedEvent", "./ObjectSavedEvent", "./UnitOfWorkErrors"], function (require, exports, InProcessDispatcher_1, IdentityMap_1, ObjectDeletedEvent_1, ObjectRetrievedEvent_1, ObjectSavedEvent_1, UnitOfWorkErrors_1) {
    "use strict";
    var UnitOfWork = (function () {
        function UnitOfWork(repository) {
            this.repository = repository;
            this.idMap = new IdentityMap_1.IdentityMap();
            this.dispatcher = new InProcessDispatcher_1.InProcessDispatcher();
        }
        UnitOfWork.prototype.getById = function (key) {
            if (this.idMap.isTracked(key)) {
                if (this.idMap.getItemStatus(key) === IdentityMap_1.ItemStatus.Deleted) {
                    UnitOfWorkErrors_1.UnitOfWorkErrors.throw(UnitOfWorkErrors_1.UnitOfWorkErrors.ItemMarkedAsDeleted);
                }
                return this.idMap.getById(key);
            }
            var toReturn = this.repository.getById(key);
            this.idMap.add(key, toReturn);
            this.idMap.markAsSavedById(key);
            var retrievedEvent = new ObjectRetrievedEvent_1.ObjectRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString());
            this.raiseEvent(retrievedEvent);
            return toReturn;
        };
        UnitOfWork.prototype.deleteById = function (key) {
            this.idMap.markAsDeletedById(key);
        };
        UnitOfWork.prototype.saveAll = function () {
            var keys = this.idMap.getIds();
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                this.idMap.updateSavedItemStatus(key);
                var status = this.idMap.getItemStatus(key);
                switch (status) {
                    case IdentityMap_1.ItemStatus.Deleted:
                        this.processDeletedItem(key);
                        break;
                    case IdentityMap_1.ItemStatus.Modified:
                    case IdentityMap_1.ItemStatus.New:
                        this.processNewOrModifiedItem(key);
                        break;
                    case IdentityMap_1.ItemStatus.Saved:
                        break;
                }
            }
        };
        UnitOfWork.prototype.registerHandler = function (eventTypeName, eventHandler) {
            this.dispatcher.registerHandler(eventTypeName, eventHandler);
        };
        UnitOfWork.prototype.unregisterHandler = function (eventTypeName, eventHandler) {
            this.dispatcher.unregisterHandler(eventTypeName, eventHandler);
        };
        UnitOfWork.prototype.processDeletedItem = function (key) {
            var item = this.idMap.getById(key);
            var deletedEvent = new ObjectDeletedEvent_1.ObjectDeletedEvent(item.__typeName, item.__typeVersion, key.toString());
            this.repository.delete(key);
            this.removeById(key);
            this.raiseEvent(deletedEvent);
        };
        UnitOfWork.prototype.processNewOrModifiedItem = function (key) {
            var item = this.idMap.getById(key);
            this.repository.save(item);
            this.idMap.markAsSavedById(key);
            var savedEvent = new ObjectSavedEvent_1.ObjectSavedEvent(item.__typeName, item.__typeVersion, key.toString());
            this.raiseEvent(savedEvent);
        };
        UnitOfWork.prototype.raiseEvent = function (event) {
            this.dispatcher.dispatch(event);
        };
        UnitOfWork.prototype.removeById = function (key) {
            if (this.idMap.isTracked(key)) {
                this.idMap.remove(key);
            }
        };
        return UnitOfWork;
    }());
    exports.UnitOfWork = UnitOfWork;
});
//# sourceMappingURL=UnitOfWork.js.map