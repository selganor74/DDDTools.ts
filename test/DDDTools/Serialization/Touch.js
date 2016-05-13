define(["require", "exports", "../Utils/SimpleGuid"], function (require, exports, SimpleGuid_1) {
    "use strict";
    var Touch = (function () {
        function Touch() {
        }
        Touch.touch = function (object) {
            if (typeof object === "object") {
                var newId = SimpleGuid_1.SimpleGuid.generate();
                object.__objectInstanceId = newId;
            }
        };
        Touch.untouch = function (object) {
            if (object.__objectInstanceId) {
                delete object.__objectInstanceId;
            }
        };
        Touch.hasBeenTouched = function (object) {
            var casted = object;
            if (casted.__objectInstanceId) {
                return true;
            }
            return false;
        };
        return Touch;
    }());
    exports.Touch = Touch;
});
//# sourceMappingURL=Touch.js.map