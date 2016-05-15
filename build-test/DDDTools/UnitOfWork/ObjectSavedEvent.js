var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ValueObject/BaseValueObject", "./Events"], function (require, exports, BaseValueObject_1, Events_1) {
    "use strict";
    var ObjectSavedEvent = (function (_super) {
        __extends(ObjectSavedEvent, _super);
        function ObjectSavedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_1.Events.ObjectSavedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectSavedEvent;
    }(BaseValueObject_1.BaseValueObject));
    exports.ObjectSavedEvent = ObjectSavedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0U2F2ZWRFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQU1BO1FBQXNDLG9DQUFpQztRQUluRSwwQkFDVyxRQUFnQixFQUNoQixXQUFtQixFQUNuQixFQUFVO1lBRWpCLGlCQUFPLENBQUM7WUFKRCxhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1lBQ25CLE9BQUUsR0FBRixFQUFFLENBQVE7WUFOckIsZUFBVSxHQUFHLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNyQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQVFyQixDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQUFDLEFBWEQsQ0FBc0MsaUNBQWUsR0FXcEQ7SUFYWSx3QkFBZ0IsbUJBVzVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFNhdmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0U2F2ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgKSB7IFxyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIH1cclxuIl19