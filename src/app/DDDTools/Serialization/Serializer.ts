/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../Utils/SimpleIdentityMap.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="Touch.ts" />

namespace DDDTools.Serialization {

    import SimpleGuid = DDDTools.Utils.SimpleGuid;

    export class Serializer {
        /**
         * Serializes an object to a JSON string, keepeing track of the instances of the objects serialized
         */
        public static serialize(toSerialize: any): string {
            var toReturn;
            toSerialize = Serializer.preprocessForFakeSubstitution(toSerialize);
            try {
                toReturn = JSON.stringify(toSerialize, Serializer.customSerializer);
            } finally {
                Serializer.postprocessForFakeSubstitution(toSerialize);
            }
            return toReturn;
        }

        /**
         * Preprocess the object tree to be serialized to find and replace Date objects with something different...
         */
        private static preprocessForFakeSubstitution(sourceObject: any) {
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (current instanceof Date) {
                    var newFakeDate = new FakeDate(current);
                    sourceObject[idx] = newFakeDate;
                    continue;
                }
                if (current instanceof RegExp) {
                    var newFakeRegExp = new FakeRegExp(current);
                    sourceObject[idx] = newFakeRegExp;
                    continue;
                }
                if (typeof current === 'object' || Array.isArray(current)) {
                    sourceObject[idx] = Serializer.preprocessForFakeSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        }

        /**
         * Postprocess the object tree to be serialized to find and replace FakeDate objects with Dates again...
         */
        private static postprocessForFakeSubstitution(sourceObject: any) {
            for (var idx in sourceObject) {
                var current = sourceObject[idx];
                if (current instanceof FakeDate) {
                    sourceObject[idx] = (<FakeDate>current).getDate();
                    continue;
                }
                if (current instanceof FakeRegExp) {
                    sourceObject[idx] = (<FakeRegExp>current).getRegExp();
                    continue;
                }
                if (typeof current === 'object' || Array.isArray(current)) {
                    sourceObject[idx] = Serializer.postprocessForFakeSubstitution(current);
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