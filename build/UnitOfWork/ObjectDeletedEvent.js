define(["require", "exports", "./Events"], function (require, exports, Events_1) {
    "use strict";
    var ObjectDeletedEvent = (function () {
        function ObjectDeletedEvent(typeName, typeVersion, id) {
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_1.Events.ObjectDeletedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectDeletedEvent;
    }());
    exports.ObjectDeletedEvent = ObjectDeletedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0RGVsZXRlZEV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBS0E7UUFJSSw0QkFDVyxRQUFnQixFQUNoQixXQUFtQixFQUNuQixFQUFVO1lBRlYsYUFBUSxHQUFSLFFBQVEsQ0FBUTtZQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtZQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFRO1lBTnJCLGVBQVUsR0FBRyxlQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDdkMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFNakIsQ0FBQztRQUNULHlCQUFDO0lBQUQsQ0FBQyxBQVRELElBU0M7SUFUWSwwQkFBa0IscUJBUzlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdERlbGV0ZWRFdmVudCBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICkgeyB9XHJcbn1cclxuXHJcbi8vIH1cclxuIl19