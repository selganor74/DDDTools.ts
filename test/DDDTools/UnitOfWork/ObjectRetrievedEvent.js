define(["require", "exports", "./Events"], function (require, exports, Events_1) {
    "use strict";
    var ObjectRetrievedEvent = (function () {
        function ObjectRetrievedEvent(typeName, typeVersion, id) {
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_1.Events.ObjectRetrievedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectRetrievedEvent;
    }());
    exports.ObjectRetrievedEvent = ObjectRetrievedEvent;
});
//# sourceMappingURL=ObjectRetrievedEvent.js.map