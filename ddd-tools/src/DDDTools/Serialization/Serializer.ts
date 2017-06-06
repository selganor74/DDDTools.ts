/// <reference path="./SerializableDate.ts" />
/// <reference path="./SerializableRegExp.ts" />
/// <reference path="./SerializableNull.ts" />
/// <reference path="./SerializableArray.ts" />
/// <reference path="./Touch.ts" />

// import {SerializableDate} from "./SerializableDate";
// import {SerializableRegExp} from "./SerializableRegExp";
// import {Touch} from "./Touch";

namespace DDDTools.Serialization {

    export class Serializer {
        /**
         * Serializes an object to a JSON string, keepeing track of the instances of the objects serialized
         */
        public static serialize(toSerialize: any): string {
            var toReturn;
            Touch.resetTouchIndex();
            Serializer.touchSourceObject(toSerialize);
            Serializer.preprocessForSerializablesSubstitution(toSerialize);
            try {
                toReturn = JSON.stringify(toSerialize, undefined, 0);
            } finally {
                Serializer.postprocessForSerializableSubstitution(toSerialize);
                Serializer.untouchSourceObject(toSerialize);
            }
            return toReturn;
        }

        /**
         * Serializes an object to ... a new object. The serialized object will have Serializable version of Dates, null and RegExp value, instead of the original types.
         * The serialized object will have only data and no methods for non native objects.
         */
        public static serializeToObject(toSerialize: any): any {
            var sThis = Serializer;
            var sourceAsString = sThis.serialize(toSerialize);
            var toReturn = JSON.parse(sourceAsString);

            return toReturn;
        }

        /**
         * Preprocess the object tree to be serialized to find and replace Date, null, RegExp, ... objects with something different...
         */
        private static preprocessForSerializablesSubstitution(sourceObject: any) {
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (current instanceof Date) {
                    var newFakeDate = new SerializableDate(current);
                    sourceObject[idx] = newFakeDate;
                    continue;
                }
                if (current === null) {
                    var newFakeNull = new SerializableNull();
                    sourceObject[idx] = newFakeNull;
                    continue;
                }
                if (current instanceof RegExp) {
                    var newFakeRegExp = new SerializableRegExp(current);
                    sourceObject[idx] = newFakeRegExp;
                    continue;
                }
                if (Array.isArray(current)) {
                    let tmpArray = Serializer.preprocessForSerializablesSubstitution(current);
                    sourceObject[idx] = new SerializableArray(tmpArray);
                    continue;
                }
                if (typeof current === 'object') {
                    sourceObject[idx] = Serializer.preprocessForSerializablesSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        }

        private static touchSourceObject(sourceObject: any) {
            var sThis = Serializer;

            if (sourceObject === null) return;

            if (!Touch.hasBeenTouched(sourceObject)) {
                Touch.touch(sourceObject);
            }
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (typeof current === 'object' || Array.isArray(current)) {
                    sThis.touchSourceObject(current);
                    sourceObject[idx] = current;
                    // sourceObject[idx] = sThis.preprocessForSerializablesSubstitution(current);
                    continue;
                }
            }

        }

        private static untouchSourceObject(sourceObject: any) {
            var sThis = Serializer;

            if (sourceObject === null) return;

            if (Touch.hasBeenTouched(sourceObject)) {
                Touch.untouch(sourceObject);
            }
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (typeof current === 'object' || Array.isArray(current)) {
                    sThis.untouchSourceObject(current);
                    sourceObject[idx] = current;
                    // sourceObject[idx] = sThis.preprocessForSerializablesSubstitution(current);
                    continue;
                }
            }
        }

        /**
         * Postprocess the object tree to be serialized to find and replace SerializableDate/RegExp objects with Original types again...
         */
        private static postprocessForSerializableSubstitution(sourceObject: any) {
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (current instanceof SerializableDate) {
                    sourceObject[idx] = current.getOriginalValue();
                    continue;
                }
                if (current instanceof SerializableNull) {
                    sourceObject[idx] = current.getOriginalValue();
                    continue;
                }
                if (current instanceof SerializableRegExp) {
                    sourceObject[idx] = current.getOriginalValue();
                    continue;
                }
                if (current instanceof SerializableArray) {
                    let tmpArray = current.getOriginalValue();
                    sourceObject[idx] = Serializer.postprocessForSerializableSubstitution(tmpArray);
                    continue;
                }
                if (typeof current === 'object') {
                    sourceObject[idx] = Serializer.postprocessForSerializableSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        }

    }
}