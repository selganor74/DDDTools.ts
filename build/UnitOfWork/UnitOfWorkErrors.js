var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_1) {
    "use strict";
    var UnitOfWorkErrors = (function (_super) {
        __extends(UnitOfWorkErrors, _super);
        function UnitOfWorkErrors() {
            _super.apply(this, arguments);
        }
        UnitOfWorkErrors.ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
        return UnitOfWorkErrors;
    }(BaseErrors_1.BaseErrors));
    exports.UnitOfWorkErrors = UnitOfWorkErrors;
});
//# sourceMappingURL=UnitOfWorkErrors.js.map