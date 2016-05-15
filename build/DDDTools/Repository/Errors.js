var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_1) {
    "use strict";
    var Errors = (function (_super) {
        __extends(Errors, _super);
        function Errors() {
            _super.apply(this, arguments);
        }
        Errors.KeyNotSet = "Key not set";
        Errors.ItemNotFound = "Item Not Found";
        Errors.ErrorSavingItem = "Error Saving Item";
        Errors.ErrorReadingItem = "Error Reading Item";
        Errors.ErrorDeletingItem = "Error Deleting Item";
        Errors.WrongTypeFromImplementation = "Wrong type from Implementation";
        Errors.ManagedTypeNotSupplied = "Repository needs to know what type it can manage";
        return Errors;
    }(BaseErrors_1.BaseErrors));
    exports.Errors = Errors;
});
//# sourceMappingURL=Errors.js.map