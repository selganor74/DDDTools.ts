define(["require", "exports"], function (require, exports) {
    "use strict";
    var SerializableDate = (function () {
        function SerializableDate(date) {
            this.__typeName = "Date";
            this.__typeVersion = "v1";
            this.__dateAsString = date.toISOString();
        }
        SerializableDate.prototype.getDate = function () {
            return new Date(this.__dateAsString);
        };
        return SerializableDate;
    }());
    exports.SerializableDate = SerializableDate;
});
//# sourceMappingURL=SerializableDate.js.map