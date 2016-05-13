var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Entity/BaseEntity"], function (require, exports, BaseEntity_1) {
    "use strict";
    var BaseAggregateRoot = (function (_super) {
        __extends(BaseAggregateRoot, _super);
        function BaseAggregateRoot() {
            _super.apply(this, arguments);
            this.__revisionId = 0;
        }
        BaseAggregateRoot.prototype.getRevisionId = function () {
            return this.__revisionId;
        };
        BaseAggregateRoot.prototype.incrementRevisionId = function () {
            this.__revisionId++;
        };
        BaseAggregateRoot.prototype.perfectlyMatch = function (other) {
            if (!other) {
                return false;
            }
            var thisOne = this.getState();
            var theOther = other.getState();
            var thisOneAsString = JSON.stringify(thisOne);
            var theOtherAsString = JSON.stringify(theOther);
            return thisOneAsString === theOtherAsString;
        };
        return BaseAggregateRoot;
    }(BaseEntity_1.BaseEntity));
    exports.BaseAggregateRoot = BaseAggregateRoot;
});
//# sourceMappingURL=BaseAggregateRoot.js.map