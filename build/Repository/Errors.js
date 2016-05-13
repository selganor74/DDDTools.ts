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
        return Errors;
    }(BaseErrors_1.BaseErrors));
    exports.Errors = Errors;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFJQTtRQUE0QiwwQkFBVTtRQUF0QztZQUE0Qiw4QkFBVTtRQUd0QyxDQUFDO1FBRmlCLGdCQUFTLEdBQUcsYUFBYSxDQUFDO1FBQzFCLG1CQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEQsYUFBQztJQUFELENBQUMsQUFIRCxDQUE0Qix1QkFBVSxHQUdyQztJQUhZLGNBQU0sU0FHbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEtleU5vdFNldCA9IFwiS2V5IG5vdCBzZXRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSXRlbU5vdEZvdW5kID0gXCJJdGVtIE5vdCBGb3VuZFwiO1xyXG59XHJcblxyXG4vLyB9Il19