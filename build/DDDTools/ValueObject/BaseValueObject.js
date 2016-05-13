var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../PersistableObject/BasePersistableObject"], function (require, exports, BasePersistableObject_1) {
    "use strict";
    var BaseValueObject = (function (_super) {
        __extends(BaseValueObject, _super);
        function BaseValueObject() {
            _super.call(this);
        }
        BaseValueObject.prototype.equals = function (item) {
            var foreign = JSON.stringify(item);
            var local = JSON.stringify(this);
            return foreign === local;
        };
        return BaseValueObject;
    }(BasePersistableObject_1.BasePersistableObject));
    exports.BaseValueObject = BaseValueObject;
});
//# sourceMappingURL=BaseValueObject.js.map