var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ValueObject/BaseValueObject", "./Events"], function (require, exports, BaseValueObject_1, Events_1) {
    "use strict";
    var ObjectRetrievedEvent = (function (_super) {
        __extends(ObjectRetrievedEvent, _super);
        function ObjectRetrievedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_1.Events.ObjectRetrievedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectRetrievedEvent;
    }(BaseValueObject_1.BaseValueObject));
    exports.ObjectRetrievedEvent = ObjectRetrievedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0UmV0cmlldmVkRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBTUE7UUFBMEMsd0NBQXFDO1FBSTNFLDhCQUNXLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLEVBQVU7WUFFakIsaUJBQU8sQ0FBQztZQUpELGFBQVEsR0FBUixRQUFRLENBQVE7WUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7WUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtZQU5yQixlQUFVLEdBQUcsZUFBTSxDQUFDLG9CQUFvQixDQUFDO1lBQ3pDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBUXJCLENBQUM7UUFDTCwyQkFBQztJQUFELENBQUMsQUFYRCxDQUEwQyxpQ0FBZSxHQVd4RDtJQVhZLDRCQUFvQix1QkFXaEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0UmV0cmlldmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0UmV0cmlldmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0UmV0cmlldmVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcbi8vIH1cclxuIl19