"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseValueObject_1 = require("../ValueObject/BaseValueObject");
var Events_1 = require("./Events");
var ItemAddedEvent = (function (_super) {
    __extends(ItemAddedEvent, _super);
    function ItemAddedEvent(typeName, typeVersion, id, objectState) {
        _super.call(this);
        this.typeName = typeName;
        this.typeVersion = typeVersion;
        this.id = id;
        this.objectState = objectState;
        this.__typeName = Events_1.Events.ItemAddedEvent;
        this.__typeVersion = "v1";
    }
    return ItemAddedEvent;
}(BaseValueObject_1.BaseValueObject));
exports.ItemAddedEvent = ItemAddedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbUFkZGVkRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtQWRkZWRFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxnQ0FBOEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMvRCx1QkFBcUIsVUFBVSxDQUFDLENBQUE7QUFLaEM7SUFBb0Msa0NBQStCO0lBSS9ELHdCQUNXLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLEVBQVUsRUFDVixXQUEwQjtRQUVqQyxpQkFBTyxDQUFDO1FBTEQsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFQckMsZUFBVSxHQUFHLGVBQU0sQ0FBQyxjQUFjLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFTckIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVpELENBQW9DLGlDQUFlLEdBWWxEO0FBWlksc0JBQWMsaUJBWTFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQWRkZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtQWRkZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtQWRkZWRFdmVudDtcclxuICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIG9iamVjdFN0YXRlOiBJVHlwZVRyYWNraW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyB9XHJcbiJdfQ==