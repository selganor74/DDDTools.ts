define(["require", "exports"], function (require, exports) {
    "use strict";
    var SerializableRegExp = (function () {
        function SerializableRegExp(regExp) {
            this.__typeName = "RegExp";
            this.__typeVersion = "v1";
            this.__regularExpression = regExp.toString();
        }
        SerializableRegExp.prototype.getRegExp = function () {
            return new RegExp(this.__regularExpression);
        };
        return SerializableRegExp;
    }());
    exports.SerializableRegExp = SerializableRegExp;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphYmxlUmVnRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlUmVnRXhwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBS0E7UUFLSSw0QkFBWSxNQUFjO1lBSjFCLGVBQVUsR0FBVyxRQUFRLENBQUM7WUFDOUIsa0JBQWEsR0FBVyxJQUFJLENBQUM7WUFJekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqRCxDQUFDO1FBRUQsc0NBQVMsR0FBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ0wseUJBQUM7SUFBRCxDQUFDLEFBWkQsSUFZQztJQVpZLDBCQUFrQixxQkFZOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVSZWdFeHAgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiUmVnRXhwXCI7XHJcbiAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICBfX3JlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVnRXhwOiBSZWdFeHApIHtcclxuICAgICAgICB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWdFeHAoKTogUmVnRXhwIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh0aGlzLl9fcmVndWxhckV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iXX0=