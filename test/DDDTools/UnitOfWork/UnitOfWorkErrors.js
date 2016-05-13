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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pdE9mV29ya0Vycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtFcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUlBO1FBQXNDLG9DQUFVO1FBQWhEO1lBQXNDLDhCQUFVO1FBRWhELENBQUM7UUFEaUIsb0NBQW1CLEdBQUcsOEVBQThFLENBQUM7UUFDdkgsdUJBQUM7SUFBRCxDQUFDLEFBRkQsQ0FBc0MsdUJBQVUsR0FFL0M7SUFGWSx3QkFBZ0IsbUJBRTVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIFVuaXRPZldvcmtFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSXRlbU1hcmtlZEFzRGVsZXRlZCA9IFwiVGhpcyBpdGVtIHdhcyBtYXJrZWQgYXMgZGVsZXRlZCBpbiB0aGlzIFVuaXRPZldvcmssIGFuZCBjYW5ub3QgYmUgcmV0cmlldmVkLlwiO1xyXG59XHJcblxyXG4vLyB9Il19