"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SimpleGuid_1 = require("../Utils/SimpleGuid");
var BaseValueObject_1 = require("../ValueObject/BaseValueObject");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSwyQkFBeUIscUJBQXFCLENBQUMsQ0FBQTtBQUUvQyxnQ0FBOEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUcvRDtJQUEwQix3QkFBcUI7SUFPM0MsY0FBWSxJQUFhO1FBQ3JCLGlCQUFPLENBQUM7UUFOTCxlQUFVLEdBQUcsNEJBQTRCLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFPeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztJQUVhLGFBQVEsR0FBdEI7UUFDSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHTSx1QkFBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBekJELENBQTBCLGlDQUFlLEdBeUJ4QztBQXpCWSxZQUFJLE9BeUJoQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgZ2VuZXJhbCBhbmQgY29tbW9ubHkgdXNlZCBWYWx1ZU9iamVjdHMuIFxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0cyB7XHJcblxyXG5pbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHdWlkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEd1aWQ+IGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PEd1aWQ+IHtcclxuXHJcbiAgICBwdWJsaWMgX190eXBlTmFtZSA9IFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIjtcclxuICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIHByaXZhdGUgZ3VpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGd1aWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAoZ3VpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWQgPSBndWlkXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkID0gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IEd1aWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3VpZChTaW1wbGVHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbHVlT2JqZWN0cyB1c2VkIGFzIGtleSBNVVNUIGltcGxlbWVudCBhIHRvU3RyaW5nIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGtleSBhcyBzdHJpbmcuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3VpZDtcclxuICAgIH1cclxufVxyXG4iXX0=