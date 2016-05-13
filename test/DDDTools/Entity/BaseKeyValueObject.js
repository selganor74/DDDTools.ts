var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ValueObject/BaseValueObject"], function (require, exports, BaseValueObject_1) {
    "use strict";
    var BaseKeyValueObject = (function (_super) {
        __extends(BaseKeyValueObject, _super);
        function BaseKeyValueObject() {
            _super.call(this);
        }
        return BaseKeyValueObject;
    }(BaseValueObject_1.BaseValueObject));
    exports.BaseKeyValueObject = BaseKeyValueObject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUtleVZhbHVlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlS2V5VmFsdWVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQU1BO1FBQ1ksc0NBQWtCO1FBRzFCO1lBQ0ksaUJBQU8sQ0FBQztRQUNaLENBQUM7UUFNTCx5QkFBQztJQUFELENBQUMsQUFaRCxDQUNZLGlDQUFlLEdBVzFCO0lBWnFCLDBCQUFrQixxQkFZdkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUtleVZhbHVlT2JqZWN0PFQ+XHJcbiAgICBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG4gICAgaW1wbGVtZW50cyBJS2V5VmFsdWVPYmplY3Q8VD4sIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlcml2ZWQgY2xhc3NlcyBtdXN0IHJlaW1wbGVtZW50IHRoaXMgbWV0aG9kLiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG4vLyB9Il19