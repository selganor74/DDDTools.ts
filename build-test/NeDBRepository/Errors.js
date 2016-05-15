var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../DDDTools/ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_1) {
    "use strict";
    var Errors = (function (_super) {
        __extends(Errors, _super);
        function Errors() {
            _super.apply(this, arguments);
        }
        Errors.DatabaseAlreadyRegistered = "Database already registered with the Factory";
        Errors.DatabaseNotRegistered = "Database is not registered with the Factory";
        return Errors;
    }(BaseErrors_1.BaseErrors));
    exports.Errors = Errors;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05lREJSZXBvc2l0b3J5L0Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBRUE7UUFBNEIsMEJBQVU7UUFBdEM7WUFBNEIsOEJBQVU7UUFHdEMsQ0FBQztRQUZpQixnQ0FBeUIsR0FBRyw4Q0FBOEMsQ0FBQztRQUMzRSw0QkFBcUIsR0FBRyw2Q0FBNkMsQ0FBQztRQUN4RixhQUFDO0lBQUQsQ0FBQyxBQUhELENBQTRCLHVCQUFVLEdBR3JDO0lBSFksY0FBTSxTQUdsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vREREVG9vbHMvRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgRGF0YWJhc2VBbHJlYWR5UmVnaXN0ZXJlZCA9IFwiRGF0YWJhc2UgYWxyZWFkeSByZWdpc3RlcmVkIHdpdGggdGhlIEZhY3RvcnlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRGF0YWJhc2VOb3RSZWdpc3RlcmVkID0gXCJEYXRhYmFzZSBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIHRoZSBGYWN0b3J5XCI7XHJcbn0iXX0=