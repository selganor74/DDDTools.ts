define(["require", "exports"], function (require, exports) {
    "use strict";
    var SerializableDate = (function () {
        function SerializableDate(date) {
            this.__typeName = "Date";
            this.__typeVersion = "v1";
            this.__dateAsString = date.toISOString();
        }
        SerializableDate.prototype.getDate = function () {
            return new Date(this.__dateAsString);
        };
        return SerializableDate;
    }());
    exports.SerializableDate = SerializableDate;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphYmxlRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFJQTtRQUtJLDBCQUFZLElBQVU7WUFKdEIsZUFBVSxHQUFXLE1BQU0sQ0FBQztZQUM1QixrQkFBYSxHQUFXLElBQUksQ0FBQztZQUl6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxDQUFDO1FBRUQsa0NBQU8sR0FBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FBQyxBQVpELElBWUM7SUFaWSx3QkFBZ0IsbUJBWTVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVEYXRlIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIkRhdGVcIjtcclxuICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgIF9fZGF0ZUFzU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX19kYXRlQXNTdHJpbmcgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICB9XHJcbn1cclxuLy8gfSJdfQ==