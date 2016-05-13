define(["require", "exports"], function (require, exports) {
    "use strict";
    var SimpleGuid = (function () {
        function SimpleGuid() {
        }
        SimpleGuid.isValid = function (guid) {
            var guidRegexp = new RegExp("^[{(]?[0-9A-Fa-f]{8}[-]?([0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$");
            return guidRegexp.test(guid);
        };
        SimpleGuid.s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        SimpleGuid.generate = function () {
            var newSimpleGuid = "{" + SimpleGuid.s4() + SimpleGuid.s4() + "-" + SimpleGuid.s4() + "-" + SimpleGuid.s4() + "-" +
                SimpleGuid.s4() + "-" + SimpleGuid.s4() + SimpleGuid.s4() + SimpleGuid.s4() + "}";
            if (SimpleGuid.isValid(newSimpleGuid)) {
                return newSimpleGuid;
            }
            throw new Error("Should Never Happen! The generated guid is not valid!");
        };
        return SimpleGuid;
    }());
    exports.SimpleGuid = SimpleGuid;
});
//# sourceMappingURL=SimpleGuid.js.map