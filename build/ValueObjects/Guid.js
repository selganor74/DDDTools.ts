var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Utils/SimpleGuid", "../ValueObject/BaseValueObject"], function (require, exports, SimpleGuid_1, BaseValueObject_1) {
    "use strict";
    var Guid = (function (_super) {
        __extends(Guid, _super);
        function Guid(guid) {
            _super.call(this);
            this.__typeName = "DDDTools.ValueObjects.Guid";
            this.__typeVersion = "v1";
            if (guid) {
                this.guid = guid;
            }
            else {
                this.guid = SimpleGuid_1.SimpleGuid.generate();
            }
        }
        Guid.generate = function () {
            return new Guid(SimpleGuid_1.SimpleGuid.generate());
        };
        Guid.prototype.toString = function () {
            return this.guid;
        };
        return Guid;
    }(BaseValueObject_1.BaseValueObject));
    exports.Guid = Guid;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBVUE7UUFBMEIsd0JBQXFCO1FBTzNDLGNBQVksSUFBYTtZQUNyQixpQkFBTyxDQUFDO1lBTkwsZUFBVSxHQUFHLDRCQUE0QixDQUFDO1lBQzFDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1lBT3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7WUFDcEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QyxDQUFDO1FBQ0wsQ0FBQztRQUVhLGFBQVEsR0FBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFHTSx1QkFBUSxHQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQztRQUNMLFdBQUM7SUFBRCxDQUFDLEFBekJELENBQTBCLGlDQUFlLEdBeUJ4QztJQXpCWSxZQUFJLE9BeUJoQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgZ2VuZXJhbCBhbmQgY29tbW9ubHkgdXNlZCBWYWx1ZU9iamVjdHMuIFxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0cyB7XHJcblxyXG5pbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHdWlkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEd1aWQ+IGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PEd1aWQ+IHtcclxuXHJcbiAgICBwdWJsaWMgX190eXBlTmFtZSA9IFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIjtcclxuICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIHByaXZhdGUgZ3VpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGd1aWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAoZ3VpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWQgPSBndWlkXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkID0gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IEd1aWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3VpZChTaW1wbGVHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbHVlT2JqZWN0cyB1c2VkIGFzIGtleSBNVVNUIGltcGxlbWVudCBhIHRvU3RyaW5nIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGtleSBhcyBzdHJpbmcuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3VpZDtcclxuICAgIH1cclxufVxyXG4iXX0=