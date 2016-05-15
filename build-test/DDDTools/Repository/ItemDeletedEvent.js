var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ValueObject/BaseValueObject", "./Events"], function (require, exports, BaseValueObject_1, Events_1) {
    "use strict";
    var ItemDeletedEvent = (function (_super) {
        __extends(ItemDeletedEvent, _super);
        function ItemDeletedEvent(typeName, typeVersion, id, objectState) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.objectState = objectState;
            this.__typeName = Events_1.Events.ItemDeletedEvent;
            this.__typeVersion = "v1";
        }
        return ItemDeletedEvent;
    }(BaseValueObject_1.BaseValueObject));
    exports.ItemDeletedEvent = ItemDeletedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbURlbGV0ZWRFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1EZWxldGVkRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQU9BO1FBQXNDLG9DQUFpQztRQUluRSwwQkFDVyxRQUFnQixFQUNoQixXQUFtQixFQUNuQixFQUFVLEVBQ1YsV0FBMEI7WUFFakMsaUJBQU8sQ0FBQztZQUxELGFBQVEsR0FBUixRQUFRLENBQVE7WUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7WUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtZQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1lBUHJDLGVBQVUsR0FBRyxlQUFNLENBQUMsZ0JBQWdCLENBQUM7WUFDckMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFTckIsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FBQyxBQVpELENBQXNDLGlDQUFlLEdBWXBEO0lBWlksd0JBQWdCLG1CQVk1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbURlbGV0ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtRGVsZXRlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1EZWxldGVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gfVxyXG4iXX0=