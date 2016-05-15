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
                    var reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtained " + value.__typeName + " from database.");
                    deferred.reject(reason);
                    return;
                }
                var toReturn = (Factory_1.Factory.createObjectsFromState(value));
                deferred.resolve(toReturn);
            }, function (error) {
                var reason = _this.buildError(error, Errors_1.Errors.ItemNotFound);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.doSave = function (item, deferred) {
            var _this = this;
            this.saveImplementation(item).then(function () {
                deferred.resolve();
            }, function (error) {
                var reason = _this.buildError(error, Errors_1.Errors.ErrorSavingItem);
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
                    return;
                }
            }, function (error) {
                if (error instanceof Error && error.name == Errors_1.Errors.ItemNotFound) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    return;
                }
                var reason = _this.buildError(error, Errors_1.Errors.ErrorReadingItem);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.delete = function (id) {
            var _this = this;
            var deferred = Q.defer();
            this.deleteImplementation(id).then(function () { deferred.resolve(); }, function (error) {
                var reason = _this.buildError(error, Errors_1.Errors.ErrorDeletingItem);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.buildError = function (errorFromCall, errorIfErrorFromCallIsNotError) {
            var reason;
            if (errorFromCall instanceof Error) {
                reason = errorFromCall;
            }
            else {
                reason = Errors_1.Errors.getErrorInstance(errorIfErrorFromCallIsNotError, JSON.stringify(errorFromCall));
            }
            return reason;
        };
        return BaseRepositoryAsync;
    }());
    exports.BaseRepositoryAsync = BaseRepositoryAsync;
});
//# sourceMappingURL=BaseRepositoryAsync.js.map