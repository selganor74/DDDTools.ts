define(["require", "exports", "../Utils/SimpleGuid"], function (require, exports, SimpleGuid_1) {
    "use strict";
    var InProcessDispatcher = (function () {
        function InProcessDispatcher() {
            this.delegatesRegistry = {};
        }
        InProcessDispatcher.prototype.clear = function () {
            this.delegatesRegistry = {};
        };
        InProcessDispatcher.prototype.registerHandler = function (eventTypeName, handler) {
            if (!this.delegatesRegistry[eventTypeName]) {
                this.delegatesRegistry[eventTypeName] = [];
            }
            if (!handler.__handlerId) {
                handler.__handlerId = SimpleGuid_1.SimpleGuid.generate();
                this.delegatesRegistry[eventTypeName].push(handler);
            }
        };
        InProcessDispatcher.prototype.unregisterHandler = function (eventTypeName, handler) {
            if (handler.__handlerId) {
                for (var element in this.delegatesRegistry[eventTypeName]) {
                    var currentElement = this.delegatesRegistry[eventTypeName][element];
                    if (currentElement.__handlerId === handler.__handlerId) {
                        this.delegatesRegistry[eventTypeName].splice(Number(element), 1);
                        break;
                    }
                }
            }
        };
        InProcessDispatcher.prototype.dispatch = function (event) {
            if (!this.delegatesRegistry[event.__typeName]) {
                return;
            }
            var Errors = [];
            for (var _i = 0, _a = this.delegatesRegistry[event.__typeName]; _i < _a.length; _i++) {
                var element = _a[_i];
                try {
                    element(event);
                }
                catch (e) {
                    Errors.push(e);
                }
            }
            if (Errors.length != 0) {
                var message = this.buildErrorMessage(Errors);
                var e = new Error(message);
                e.name = "Dispatcher Error";
                console.log(e);
            }
        };
        InProcessDispatcher.prototype.buildErrorMessage = function (Errors) {
            var message = "";
            for (var _i = 0, Errors_1 = Errors; _i < Errors_1.length; _i++) {
                var element = Errors_1[_i];
                message += element.name + ":" + element.message + "\n";
            }
            return message;
        };
        return InProcessDispatcher;
    }());
    exports.InProcessDispatcher = InProcessDispatcher;
});
//# sourceMappingURL=InProcessDispatcher.js.map