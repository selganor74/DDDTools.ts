define(["require", "exports"], function (require, exports) {
    "use strict";
    var Events = (function () {
        function Events() {
        }
        Events.__nameSpace = "DDDTools.UnitOfWork";
        Events.ObjectSavedEvent = Events.__nameSpace + ".ObjectSavedEvent";
        Events.ObjectDeletedEvent = Events.__nameSpace + ".ObjectDeletedEvent";
        Events.ObjectRetrievedEvent = Events.__nameSpace + ".ObjectRetrievedEvent";
        return Events;
    }());
    exports.Events = Events;
});
//# sourceMappingURL=Events.js.map