var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../PersistableObject/BasePersistableObject", "../DomainEvents/DomainDispatcher"], function (require, exports, BasePersistableObject_1, DomainDispatcher_1) {
    "use strict";
    var BaseEntity = (function (_super) {
        __extends(BaseEntity, _super);
        function BaseEntity() {
            _super.apply(this, arguments);
        }
        BaseEntity.prototype.raiseEvent = function (event) {
            DomainDispatcher_1.DomainDispatcher.dispatch(event);
        };
        ;
        BaseEntity.prototype.getKey = function () {
            return this.key;
        };
        ;
        BaseEntity.prototype.setKey = function (key) {
            this.key = key;
        };
        ;
        BaseEntity.prototype.equals = function (item) {
            if (!item) {
                return false;
            }
            return item.getKey().equals(this.getKey());
        };
        return BaseEntity;
    }(BasePersistableObject_1.BasePersistableObject));
    exports.BaseEntity = BaseEntity;
});
//# sourceMappingURL=BaseEntity.js.map