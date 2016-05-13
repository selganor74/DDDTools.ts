define(["require", "exports", "../Utils/SimpleIdentityMap", "./Touch"], function (require, exports, SimpleIdentityMap_1, Touch_1) {
    "use strict";
    var Deserializer = (function () {
        function Deserializer() {
        }
        Deserializer.deserialize = function (toDeserialize) {
            Deserializer.identityMap = new SimpleIdentityMap_1.SimpleIdentityMap();
            var toReturn = JSON.parse(toDeserialize, Deserializer.customReviver);
            Deserializer.cleanup();
            return toReturn;
        };
        Deserializer.cleanup = function () {
            var sThis = Deserializer;
            var idMap = sThis.identityMap;
            var untouch = Touch_1.Touch.untouch;
            for (var _i = 0, _a = idMap.getIds(); _i < _a.length; _i++) {
                var item = _a[_i];
                var currentItem = idMap.getById(item);
                untouch(currentItem);
                idMap.deleteById(item);
            }
        };
        Deserializer.customReviver = function (key, value) {
            var sThis = Deserializer;
            var idMap = sThis.identityMap;
            if (typeof value === "object") {
                if (sThis.hasBeenTouched(value)) {
                    if (idMap.isTracked(value.__objectInstanceId)) {
                        return idMap.getById(value.__objectInstanceId);
                    }
                    else {
                        value = sThis.FakeRegExpDeserializer(value);
                        value = sThis.FakeDateDeserializer(value);
                        idMap.add(value.__objectInstanceId, value);
                    }
                }
            }
            return value;
        };
        Deserializer.hasBeenTouched = function (object) {
            var casted = object;
            if (casted.__objectInstanceId) {
                return true;
            }
            return false;
        };
        Deserializer.FakeRegExpDeserializer = function (value) {
            if (value.__typeName) {
                if (value.__typeName === "RegExp") {
                    value = new RegExp(value.__regularExpression || "");
                }
            }
            return value;
        };
        Deserializer.FakeDateDeserializer = function (value) {
            if (value.__typeName) {
                if (value.__typeName === "Date") {
                    value = new Date(value.__dateAsString);
                }
            }
            return value;
        };
        return Deserializer;
    }());
    exports.Deserializer = Deserializer;
});
//# sourceMappingURL=Deserializer.js.map