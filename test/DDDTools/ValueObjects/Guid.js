var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Utils/SimpleGuid", "../ValueObject/BaseValueObject"], function (require, exports, SimpleGuid_1, BaseValueObject_1) {
    "use strict";
    var Guid = (function (_super) {
        __extends(Guid, _super);
        function Guid(guid) {
            _super.call(this);
            this.__typeName = "DDDTools.ValueObjects.Guid";
            this.__typeVersion = "v1";
            if (guid) {
                this.guid = guid;
            }
            else {
                this.guid = SimpleGuid_1.SimpleGuid.generate();
            }
        }
        Guid.generate = function () {
            return new Guid(SimpleGuid_1.SimpleGuid.generate());
        };
        Guid.prototype.toString = function () {
            return this.guid;
        };
        return Guid;
    }(BaseValueObject_1.BaseValueObject));
    exports.Guid = Guid;
});
//# sourceMappingURL=Guid.js.map