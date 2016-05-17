"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasePersistableObject_1 = require("../PersistableObject/BasePersistableObject");
var DomainDispatcher_1 = require("../DomainEvents/DomainDispatcher");
var BaseEntity = (function (_super) {
    __extends(BaseEntity, _super);
    function BaseEntity() {
        _super.apply(this, arguments);
    }
    BaseEntity.prototype.raiseEvent = function (event) {
        DomainDispatcher_1.DomainDispatcher.dispatch(event);
    };
    ;
    BaseEntity.prototype.getKey = function () {
        return this.key;
    };
    ;
    BaseEntity.prototype.setKey = function (key) {
        this.key = key;
    };
    ;
    BaseEntity.prototype.equals = function (item) {
        if (!item) {
            return false;
        }
        return item.getKey().equals(this.getKey());
    };
    return BaseEntity;
}(BasePersistableObject_1.BasePersistableObject));
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBb0MsNENBQTRDLENBQUMsQ0FBQTtBQUVqRixpQ0FBK0Isa0NBQWtDLENBQUMsQ0FBQTtBQVVsRTtJQUNTLDhCQUFxQjtJQUQ5QjtRQUNTLDhCQUFxQjtJQXVCOUIsQ0FBQztJQWxCUSwrQkFBVSxHQUFsQixVQUFtQixLQUFtQjtRQUNyQyxtQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7SUFFTSwyQkFBTSxHQUFiO1FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7SUFFTSwyQkFBTSxHQUFiLFVBQWMsR0FBUztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNoQixDQUFDOztJQUVNLDJCQUFNLEdBQWIsVUFBYyxJQUFPO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUNTLDZDQUFxQixHQXVCN0I7QUF4QnFCLGtCQUFVLGFBd0IvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyXCI7XHJcbmltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4vSUVudGl0eVwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzZXMgYW5kIGludGVyZmFjZXMgdG8gaW1wbGVtZW50IGFuIEVudGl0eSwgYSBwZXJzaXN0YWJsZSBvYmplY3QuIFxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVudGl0eTxUIGV4dGVuZHMgSUVudGl0eTxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuXHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdGltcGxlbWVudHMgSUVudGl0eTxULCBUS2V5PiB7XHJcblxyXG5cdHByaXZhdGUga2V5OiBUS2V5O1xyXG5cdFxyXG5cdHByaXZhdGUgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcblx0XHREb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG5cdFx0cmV0dXJuIHRoaXMua2V5O1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZXRLZXkoa2V5OiBUS2V5KTogdm9pZCB7XHJcblx0XHR0aGlzLmtleSA9IGtleTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdGlmICghaXRlbSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXRlbS5nZXRLZXkoKS5lcXVhbHModGhpcy5nZXRLZXkoKSk7XHJcblx0fVxyXG59XHJcbi8vIH0iXX0=