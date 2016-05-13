var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ValueObject/BaseValueObject", "./Events"], function (require, exports, BaseValueObject_1, Events_1) {
    "use strict";
    var ObjectDeletedEvent = (function (_super) {
        __extends(ObjectDeletedEvent, _super);
        function ObjectDeletedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_1.Events.ObjectDeletedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectDeletedEvent;
    }(BaseValueObject_1.BaseValueObject));
    exports.ObjectDeletedEvent = ObjectDeletedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0RGVsZXRlZEV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFNQTtRQUF3QyxzQ0FBbUM7UUFJdkUsNEJBQ1csUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsRUFBVTtZQUVqQixpQkFBTyxDQUFDO1lBSkQsYUFBUSxHQUFSLFFBQVEsQ0FBUTtZQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtZQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFRO1lBTnJCLGVBQVUsR0FBRyxlQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDdkMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFRckIsQ0FBQztRQUNMLHlCQUFDO0lBQUQsQ0FBQyxBQVhELENBQXdDLGlDQUFlLEdBV3REO0lBWFksMEJBQWtCLHFCQVc5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3REZWxldGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0RGVsZXRlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIH1cclxuIl19