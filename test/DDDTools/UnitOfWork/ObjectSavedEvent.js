define(["require", "exports", "./Events"], function (require, exports, Events_1) {
    "use strict";
    var ObjectSavedEvent = (function () {
        function ObjectSavedEvent(typeName, typeVersion, id) {
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_1.Events.ObjectSavedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectSavedEvent;
    }());
    exports.ObjectSavedEvent = ObjectSavedEvent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0U2F2ZWRFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFLQTtRQUlJLDBCQUNXLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLEVBQVU7WUFGVixhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1lBQ25CLE9BQUUsR0FBRixFQUFFLENBQVE7WUFOckIsZUFBVSxHQUFHLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNyQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQU1qQixDQUFDO1FBQ1QsdUJBQUM7SUFBRCxDQUFDLEFBVEQsSUFTQztJQVRZLHdCQUFnQixtQkFTNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0U2F2ZWRFdmVudCBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICApIHsgfVxyXG59XHJcblxyXG4vLyB9XHJcbiJdfQ==