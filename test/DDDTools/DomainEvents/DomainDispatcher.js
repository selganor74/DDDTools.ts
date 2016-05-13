define(["require", "exports"], function (require, exports) {
    "use strict";
    var DomainDispatcher = (function () {
        function DomainDispatcher() {
        }
        DomainDispatcher.setDispatcherImplementation = function (dispatcher) {
            var sThis = DomainDispatcher;
            sThis.dispatcherImplementation = dispatcher;
        };
        DomainDispatcher.registerHandler = function (eventTypeName, handler) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.registerHandler(eventTypeName, handler);
            }
        };
        DomainDispatcher.unregisterHandler = function (eventTypeName, handler) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.unregisterHandler(eventTypeName, handler);
            }
        };
        DomainDispatcher.dispatch = function (event) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.dispatch(event);
            }
        };
        return DomainDispatcher;
    }());
    exports.DomainDispatcher = DomainDispatcher;
});
//# sourceMappingURL=DomainDispatcher.js.map