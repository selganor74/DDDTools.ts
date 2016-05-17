"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseErrors_1 = require("../ErrorManagement/BaseErrors");
var UnitOfWorkErrors = (function (_super) {
    __extends(UnitOfWorkErrors, _super);
    function UnitOfWorkErrors() {
        _super.apply(this, arguments);
    }
    UnitOfWorkErrors.ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
    return UnitOfWorkErrors;
}(BaseErrors_1.BaseErrors));
exports.UnitOfWorkErrors = UnitOfWorkErrors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pdE9mV29ya0Vycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtFcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkJBQXlCLCtCQUErQixDQUFDLENBQUE7QUFJekQ7SUFBc0Msb0NBQVU7SUFBaEQ7UUFBc0MsOEJBQVU7SUFFaEQsQ0FBQztJQURpQixvQ0FBbUIsR0FBRyw4RUFBOEUsQ0FBQztJQUN2SCx1QkFBQztBQUFELENBQUMsQUFGRCxDQUFzQyx1QkFBVSxHQUUvQztBQUZZLHdCQUFnQixtQkFFNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pdE9mV29ya0Vycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtTWFya2VkQXNEZWxldGVkID0gXCJUaGlzIGl0ZW0gd2FzIG1hcmtlZCBhcyBkZWxldGVkIGluIHRoaXMgVW5pdE9mV29yaywgYW5kIGNhbm5vdCBiZSByZXRyaWV2ZWQuXCI7XHJcbn1cclxuXHJcbi8vIH0iXX0=