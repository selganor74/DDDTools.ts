define(["require", "exports"], function (require, exports) {
    "use strict";
    var Touch = (function () {
        function Touch() {
        }
        Touch.resetTouchIndex = function () {
            var sThis = Touch;
            sThis.touchIndex = 1;
        };
        Touch.getNewIndex = function () {
            var sThis = Touch;
            sThis.touchIndex++;
            return (sThis.touchIndex++ - 1).toString();
        };
        Touch.touch = function (object) {
            var sThis = Touch;
            if (typeof object === "object") {
                var newId = sThis.getNewIndex();
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
        Touch.touchIndex = 1;
        return Touch;
    }());
    exports.Touch = Touch;
});
//# sourceMappingURL=Touch.js.map