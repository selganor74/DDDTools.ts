define(["require", "exports", "./SerializableDate", "./SerializableRegExp", "./Touch"], function (require, exports, SerializableDate_1, SerializableRegExp_1, Touch_1) {
    "use strict";
    var Serializer = (function () {
        function Serializer() {
        }
        Serializer.serialize = function (toSerialize) {
            var toReturn;
            toSerialize = Serializer.preprocessForSerializablesSubstitution(toSerialize);
            try {
                toReturn = JSON.stringify(toSerialize, Serializer.customSerializer);
            }
            finally {
                Serializer.postprocessForSerializableSubstitution(toSerialize);
            }
            return toReturn;
        };
        Serializer.preprocessForSerializablesSubstitution = function (sourceObject) {
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (current instanceof Date) {
                    var newFakeDate = new SerializableDate_1.SerializableDate(current);
                    sourceObject[idx] = newFakeDate;
                    continue;
                }
                if (current instanceof RegExp) {
                    var newFakeRegExp = new SerializableRegExp_1.SerializableRegExp(current);
                    sourceObject[idx] = newFakeRegExp;
                    continue;
                }
                if (typeof current === 'object' || Array.isArray(current)) {
                    sourceObject[idx] = Serializer.preprocessForSerializablesSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        };
        Serializer.postprocessForSerializableSubstitution = function (sourceObject) {
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (current instanceof SerializableDate_1.SerializableDate) {
                    sourceObject[idx] = current.getDate();
                    continue;
                }
                if (current instanceof SerializableRegExp_1.SerializableRegExp) {
                    sourceObject[idx] = current.getRegExp();
                    continue;
                }
                if (typeof current === 'object' || Array.isArray(current)) {
                    sourceObject[idx] = Serializer.postprocessForSerializableSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        };
        Serializer.customSerializer = function (key, value) {
            var sThis = Serializer;
            if (typeof value === "object") {
                if (!Touch_1.Touch.hasBeenTouched(value)) {
                    Touch_1.Touch.touch(value);
                }
            }
            return value;
        };
        return Serializer;
    }());
    exports.Serializer = Serializer;
});
//# sourceMappingURL=Serializer.js.map