"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseErrors_1 = require("../ErrorManagement/BaseErrors");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJCQUF5QiwrQkFBK0IsQ0FBQyxDQUFBO0FBRXpEO0lBQTRCLDBCQUFVO0lBQXRDO1FBQTRCLDhCQUFVO0lBUXRDLENBQUM7SUFQaUIsZ0JBQVMsR0FBRyxhQUFhLENBQUM7SUFDMUIsbUJBQVksR0FBRyxnQkFBZ0IsQ0FBQztJQUNoQyxzQkFBZSxHQUFHLG1CQUFtQixDQUFDO0lBQ3RDLHVCQUFnQixHQUFHLG9CQUFvQixDQUFDO0lBQ3hDLHdCQUFpQixHQUFHLHFCQUFxQixDQUFDO0lBQzFDLGtDQUEyQixHQUFHLGdDQUFnQyxDQUFDO0lBQy9ELDZCQUFzQixHQUFHLGtEQUFrRCxDQUFDO0lBQzlGLGFBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBNEIsdUJBQVUsR0FRckM7QUFSWSxjQUFNLFNBUWxCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBLZXlOb3RTZXQgPSBcIktleSBub3Qgc2V0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEl0ZW1Ob3RGb3VuZCA9IFwiSXRlbSBOb3QgRm91bmRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JTYXZpbmdJdGVtID0gXCJFcnJvciBTYXZpbmcgSXRlbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvclJlYWRpbmdJdGVtID0gXCJFcnJvciBSZWFkaW5nIEl0ZW1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JEZWxldGluZ0l0ZW0gPSBcIkVycm9yIERlbGV0aW5nIEl0ZW1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uID0gXCJXcm9uZyB0eXBlIGZyb20gSW1wbGVtZW50YXRpb25cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgTWFuYWdlZFR5cGVOb3RTdXBwbGllZCA9IFwiUmVwb3NpdG9yeSBuZWVkcyB0byBrbm93IHdoYXQgdHlwZSBpdCBjYW4gbWFuYWdlXCI7XHJcbn0iXX0=