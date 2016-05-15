var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../DDDTools/Repository/BaseRepositoryAsync", "../DDDTools/Repository/Errors"], function (require, exports, BaseRepositoryAsync_1, Errors_1) {
    "use strict";
    var DbItem = (function () {
        function DbItem(item) {
            this.key = item.getKey().toString();
            this.item = item;
        }
        return DbItem;
    }());
    var BaseNeDBRepositoryAsync = (function (_super) {
        __extends(BaseNeDBRepositoryAsync, _super);
        function BaseNeDBRepositoryAsync(managedType, options) {
            _super.call(this, managedType);
            this.options = options;
            this.datastore = new Nedb(options);
        }
        BaseNeDBRepositoryAsync.prototype.getByIdImplementation = function (id) {
            var deferred = Q.defer();
            this.datastore.findOne({ key: id.toString() }, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                if (!document) {
                    var reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ItemNotFound, "Item with id " + id.toString() + " was not found.");
                    deferred.reject(reason);
                    return;
                }
                deferred.resolve(document.item);
            });
            return deferred.promise;
        };
        BaseNeDBRepositoryAsync.prototype.doAnInsert = function (toSave, deferred) {
            this.datastore.insert(toSave, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve();
            });
        };
        BaseNeDBRepositoryAsync.prototype.doAnUpdate = function (toSave, deferred) {
            this.datastore.update(toSave, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve();
            });
        };
        BaseNeDBRepositoryAsync.prototype.saveImplementation = function (item) {
            var _this = this;
            var deferred = Q.defer();
            this.datastore.findOne({ id: item.getKey() }, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                var toSave = new DbItem(item);
                if (!document) {
                    _this.doAnInsert(toSave, deferred);
                    return;
                }
                _this.doAnUpdate(toSave, deferred);
            });
            return deferred.promise;
        };
        BaseNeDBRepositoryAsync.prototype.deleteImplementation = function (id) {
            var deferred = Q.defer();
            this.datastore.remove({ id: id.toString() }, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve();
            });
            return deferred.promise;
        };
        return BaseNeDBRepositoryAsync;
    }(BaseRepositoryAsync_1.BaseRepositoryAsync));
    exports.BaseNeDBRepositoryAsync = BaseNeDBRepositoryAsync;
});
//# sourceMappingURL=BaseNeDBRepositoryAsync.js.map