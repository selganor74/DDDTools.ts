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
//# sourceMappingURL=ObjectSavedEvent.js.map