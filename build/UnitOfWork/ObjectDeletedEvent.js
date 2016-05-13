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
//# sourceMappingURL=ObjectDeletedEvent.js.map