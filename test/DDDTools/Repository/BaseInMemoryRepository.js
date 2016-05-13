var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Errors", "../PersistableObject/Factory", "./BaseRepository"], function (require, exports, Errors_1, Factory_1, BaseRepository_1) {
    "use strict";
    var BaseInMemoryRepository = (function (_super) {
        __extends(BaseInMemoryRepository, _super);
        function BaseInMemoryRepository(_managedTypeName) {
            _super.call(this);
            this._managedTypeName = _managedTypeName;
            this.storage = {};
        }
        BaseInMemoryRepository.prototype.getByIdImplementation = function (id) {
            var key = id.toString();
            if (this.storage[key]) {
                var toReturn = Factory_1.Factory.createObjectsFromState(this.storage[key]);
                return toReturn;
            }
            Errors_1.Errors.throw(Errors_1.Errors.ItemNotFound);
        };
        BaseInMemoryRepository.prototype.saveImplementation = function (item) {
            var key = item.getKey().toString();
            this.storage[key] = item.getState();
        };
        BaseInMemoryRepository.prototype.deleteImplementation = function (id) {
            var key = id.toString();
            this.storage[key] = undefined;
        };
        return BaseInMemoryRepository;
    }(BaseRepository_1.BaseRepository));
    exports.BaseInMemoryRepository = BaseInMemoryRepository;
});
//# sourceMappingURL=BaseInMemoryRepository.js.map