var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../PersistableObject/BasePersistableObject", "../DomainEvents/DomainDispatcher"], function (require, exports, BasePersistableObject_1, DomainDispatcher_1) {
    "use strict";
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBWUE7UUFDUyw4QkFBcUI7UUFEOUI7WUFDUyw4QkFBcUI7UUF1QjlCLENBQUM7UUFsQlEsK0JBQVUsR0FBbEIsVUFBbUIsS0FBbUI7WUFDckMsbUNBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7O1FBRU0sMkJBQU0sR0FBYjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2pCLENBQUM7O1FBRU0sMkJBQU0sR0FBYixVQUFjLEdBQVM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDaEIsQ0FBQzs7UUFFTSwyQkFBTSxHQUFiLFVBQWMsSUFBTztZQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNkLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0YsaUJBQUM7SUFBRCxDQUFDLEFBeEJELENBQ1MsNkNBQXFCLEdBdUI3QjtJQXhCcUIsa0JBQVUsYUF3Qi9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG5pbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi9JRW50aXR5XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcblxyXG4vKipcclxuICogQ2xhc3NlcyBhbmQgaW50ZXJmYWNlcyB0byBpbXBsZW1lbnQgYW4gRW50aXR5LCBhIHBlcnNpc3RhYmxlIG9iamVjdC4gXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRW50aXR5PFQgZXh0ZW5kcyBJRW50aXR5PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG5cdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0aW1wbGVtZW50cyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcblx0cHJpdmF0ZSBrZXk6IFRLZXk7XHJcblxyXG5cdHByaXZhdGUgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcblx0XHREb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG5cdFx0cmV0dXJuIHRoaXMua2V5O1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZXRLZXkoa2V5OiBUS2V5KTogdm9pZCB7XHJcblx0XHR0aGlzLmtleSA9IGtleTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdGlmICghaXRlbSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXRlbS5nZXRLZXkoKS5lcXVhbHModGhpcy5nZXRLZXkoKSk7XHJcblx0fVxyXG59XHJcbi8vIH0iXX0=