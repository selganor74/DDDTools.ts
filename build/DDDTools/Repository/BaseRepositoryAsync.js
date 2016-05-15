define(["require", "exports", "./Errors", "../PersistableObject/Factory"], function (require, exports, Errors_1, Factory_1) {
    "use strict";
    var BaseRepositoryAsync = (function () {
        function BaseRepositoryAsync(managedType) {
            this.managedType = managedType;
            if (managedType === "") {
                Errors_1.Errors.throw(Errors_1.Errors.ManagedTypeNotSupplied);
            }
        }
        BaseRepositoryAsync.prototype.getById = function (id) {
            var _this = this;
            var deferred = Q.defer();
            this.getByIdImplementation(id).then(function (value) {
                if (value.__typeName != _this.managedType) {
                    var reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtaine " + value.__typeName + " from database.");
                    deferred.reject(reason);
                    return;
                }
                var toReturn = (Factory_1.Factory.createObjectsFromState(value));
                deferred.resolve(toReturn);
            }, function (error) {
                var reason;
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ItemNotFound, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.doSave = function (item, deferred) {
            this.saveImplementation(item).then(function () {
                deferred.resolve();
            }, function (error) {
                var reason;
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ErrorSavingItem, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.save = function (item) {
            var _this = this;
            var deferred = Q.defer();
            this.getById(item.getKey()).then(function (readValue) {
                if (!item.perfectlyMatch(readValue)) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    return;
                }
                else {
                    deferred.resolve();
                }
            }, function (error) {
                var reason;
                if (error instanceof Error && error.name == Errors_1.Errors.ItemNotFound) {
                    _this.doSave(item, deferred);
                    return;
                }
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ErrorReadingItem, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.delete = function (id) {
            var deferred = Q.defer();
            this.deleteImplementation(id).then(function () { deferred.resolve(); }, function (error) {
                var reason;
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ErrorDeletingItem, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        return BaseRepositoryAsync;
    }());
    exports.BaseRepositoryAsync = BaseRepositoryAsync;
});
//# sourceMappingURL=BaseRepositoryAsync.js.map