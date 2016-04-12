/// <reference path="SimpleGuid.ts" />
/// <reference path="SimpleIdentityMap.ts" />

namespace DDDTools.StatefulObject {

    import Guid = DDDTools.ValueObjects.Guid;

    class FakeDate {
        __typeName: string = "Date";
        __typeVersion: string = "v1";
        __dateAsString: string;

        constructor(date: Date) {
            this.__dateAsString = date.toISOString();
        }

        getDate(): Date {
            return new Date(this.__dateAsString);
        }
    }

    class FakeRegExp {
        __typeName: string = "RegExp";
        __typeVersion: string = "v1";
        __regularExpression: string;

        constructor(regExp: RegExp) {
            this.__regularExpression = regExp.toString();
        }

        getRegExp(): RegExp {
            return new RegExp(this.__regularExpression);
        }
    }

    export class StatefulSerializerDeserializer {
        /**
         * This is needed to track object instances to achieve correct reconstruction of the object tree.
         */
        private static identityMap: SimpleIdentityMap;

        /**
         * Serializes an object to a JSON string, keepeing track of the instances of the objects serialized
         */
        public static serialize(toSerialize: any): string {
            var toReturn;
            toSerialize = StatefulSerializerDeserializer.preprocessForFakeSubstitution(toSerialize);
            try {
                toReturn = JSON.stringify(toSerialize, StatefulSerializerDeserializer.customSerializer);
            } finally {
                StatefulSerializerDeserializer.postprocessForFakeSubstitution(toSerialize);
            }
            return toReturn;
        }

        /**
         * Desesializes an object from a JSON string.
         */
        public static deserialize(toDeserialize: string): any {
            StatefulSerializerDeserializer.identityMap = new SimpleIdentityMap();
            var toReturn = JSON.parse(toDeserialize, StatefulSerializerDeserializer.customReviver);
            StatefulSerializerDeserializer.cleanup();
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
                    sourceObject[idx] = StatefulSerializerDeserializer.preprocessForFakeSubstitution(current);
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
                    sourceObject[idx] = StatefulSerializerDeserializer.postprocessForFakeSubstitution(current);
                    continue;
                }
            }
            return sourceObject;
        }

        /**
         * Cleans the reconsituted instances from the __objectInstanceId property,
         * and empties the IdentityMap.
         */
        private static cleanup() {
            var sThis = StatefulSerializerDeserializer;
            var idMap = sThis.identityMap;
            var untouch = sThis.untouch;
            
            for (var item of idMap.getIds()) {
                var currentItem = idMap.getById(item);
                untouch(currentItem);
                // This should leave the instances "garbageable"... how to test ?    
                idMap.deleteById(item);
            }
        }

        /**
         * It's duty is to "touch" every object processe to add an __objectInstanceId property.
         * This function will be called by JSON.stringify
         */
        private static customSerializer(key: string, value: any) {
            var sThis = StatefulSerializerDeserializer;
            
            if (typeof value === "object") {
                if (!sThis.hasBeenTouched(value)) {
                    sThis.touch(value);
                }
            }
            return value;
        }

        /**
         * It handles Fake* instances uses __objectInstanceId to rebuild a correct object tree. 
         * This function will be called by JSON.parse
         */
        private static customReviver(key: string, value: any) {
            var sThis = StatefulSerializerDeserializer;
            var idMap = sThis.identityMap;

            if (typeof value === "object") {
                if (sThis.hasBeenTouched(value)) {
                    if (idMap.isTracked(value.__objectInstanceId)) {
                        return idMap.getById(value.__objectInstanceId)
                    } else {
                        value = sThis.FakeRegExpDeserializer(value);
                        value = sThis.FakeDateDeserializer(value);
                        idMap.add(value.__objectInstanceId, value);
                    }
                }
            }
            return value;
        }

        /**
         * checks for the presence of an __objectInstanceId property
         */
        private static hasBeenTouched(object: any): boolean {
            var casted = <IStateful>object;
            if (casted.__objectInstanceId) {
                return true;
            }
            return false;
        }

        /**
         * adds an __objectInstanceId property to an object
         */
        private static touch(object: any): void {
            if (typeof object === "object") {
                var newId = SimpleGuid.generate();
                object.__objectInstanceId = newId;
            }
        }

        /**
         * removes the __objectInstanceId property from an object
         */
        private static untouch(object: any): void {
            if (object.__objectInstanceId) {
                delete object.__objectInstanceId;
            }
        }

        /**
         * Manages RegExp Deserialization
         */
        private static FakeRegExpDeserializer(value: any): any {
            if (value.__typeName) {
                if (value.__typeName === "RegExp") {
                    value = new RegExp(value.__regularExpression || "");
                }
            }
            return value;
        }

        /**
         * Manages Date Deserialization
         */
        private static FakeDateDeserializer(value: any): any {
            if (value.__typeName) {
                if (value.__typeName === "Date") {
                    value = new Date((<FakeDate>value).__dateAsString);
                }
            }
            return value;
        }
    }
}