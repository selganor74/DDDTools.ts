/// <reference path="./SerializableDate.ts" />
/// <reference path="./SerializableRegExp.ts" />
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
            toSerialize = Serializer.preprocessForSerializablesSubstitution(toSerialize);
            try {
                toReturn = JSON.stringify(toSerialize, Serializer.customSerializer);
            } finally {
                Serializer.postprocessForSerializableSubstitution(toSerialize);
                Serializer.untouchSourceObject(toSerialize);
            }
            return toReturn;
        }

        /**
         * Preprocess the object tree to be serialized to find and replace Date objects with something different...
         */
        private static preprocessForSerializablesSubstitution(sourceObject: any) {
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (current instanceof Date) {
                    var newFakeDate = new SerializableDate(current);
                    sourceObject[idx] = newFakeDate;
                    continue;
                }
                if (current instanceof RegExp) {
                    var newFakeRegExp = new SerializableRegExp(current);
                    sourceObject[idx] = newFakeRegExp;
                    continue;
                }
                if (typeof current === 'object' || Array.isArray(current)) {
                    sourceObject[idx] = Serializer.preprocessForSerializablesSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        }

        private static untouchSourceObject(sourceObject: any) {
            var sThis = Serializer;
            if (Touch.hasBeenTouched(sourceObject)) {
                Touch.untouch(sourceObject);
            }
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (typeof current === 'object' || Array.isArray(current)) {
                    sThis.untouchSourceObject(current);
                    sourceObject[idx] = Serializer.preprocessForSerializablesSubstitution(current);
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
                    sourceObject[idx] = (<SerializableDate>current).getDate();
                    continue;
                }
                if (current instanceof SerializableRegExp) {
                    sourceObject[idx] = (<SerializableRegExp>current).getRegExp();
                    continue;
                }
                if (typeof current === 'object' || Array.isArray(current)) {
                    sourceObject[idx] = Serializer.postprocessForSerializableSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        }

        /**
         * It's duty is to "touch" every object processe to add an __objectInstanceId property.
         * This function will be called by JSON.stringify
         */
        private static customSerializer(key: string, value: any) {
            var sThis = Serializer;

            if (typeof value === "object") {
                if (!Touch.hasBeenTouched(value)) {
                    Touch.touch(value);
                }
            }
            return value;
        }
    }
}