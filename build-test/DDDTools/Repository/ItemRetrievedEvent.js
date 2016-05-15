var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ValueObject/BaseValueObject", "./Events"], function (require, exports, BaseValueObject_1, Events_1) {
    "use strict";
    var ItemRetrievedEvent = (function (_super) {
        __extends(ItemRetrievedEvent, _super);
        function ItemRetrievedEvent(typeName, typeVersion, id, objectState) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.objectState = objectState;
            this.__typeName = Events_1.Events.ItemRetrievedEvent;
            this.__typeVersion = "v1";
        }
        return ItemRetrievedEvent;
    }(BaseValueObject_1.BaseValueObject));
    exports.ItemRetrievedEvent = ItemRetrievedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbVJldHJpZXZlZEV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbVJldHJpZXZlZEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFPQTtRQUF3QyxzQ0FBbUM7UUFJdkUsNEJBQ1csUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsRUFBVSxFQUNWLFdBQTBCO1lBRWpDLGlCQUFPLENBQUM7WUFMRCxhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1lBQ25CLE9BQUUsR0FBRixFQUFFLENBQVE7WUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtZQVByQyxlQUFVLEdBQUcsZUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBU3JCLENBQUM7UUFDTCx5QkFBQztJQUFELENBQUMsQUFaRCxDQUF3QyxpQ0FBZSxHQVl0RDtJQVpZLDBCQUFrQixxQkFZOUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1SZXRyaWV2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtUmV0cmlldmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVJldHJpZXZlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgb2JqZWN0U3RhdGU6IElUeXBlVHJhY2tpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIH1cclxuIl19