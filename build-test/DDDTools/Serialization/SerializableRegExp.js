var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
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
        Serialization.SerializableRegExp = SerializableRegExp;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphYmxlUmVnRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlUmVnRXhwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLElBQVUsUUFBUSxDQWlCakI7QUFqQkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxhQUFhLENBaUIvQjtJQWpCa0IsV0FBQSxhQUFhLEVBQUMsQ0FBQztRQUk5QjtZQUtJLDRCQUFZLE1BQWM7Z0JBSjFCLGVBQVUsR0FBVyxRQUFRLENBQUM7Z0JBQzlCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO2dCQUl6QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pELENBQUM7WUFFRCxzQ0FBUyxHQUFUO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQ0wseUJBQUM7UUFBRCxDQUFDLEFBWkQsSUFZQztRQVpZLGdDQUFrQixxQkFZOUIsQ0FBQTtJQUNMLENBQUMsRUFqQmtCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBaUIvQjtBQUFELENBQUMsRUFqQlMsUUFBUSxLQUFSLFFBQVEsUUFpQmpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlUmVnRXhwIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJSZWdFeHBcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgX19yZWd1bGFyRXhwcmVzc2lvbjogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihyZWdFeHA6IFJlZ0V4cCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlZ0V4cCgpOiBSZWdFeHAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh0aGlzLl9fcmVndWxhckV4cHJlc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==