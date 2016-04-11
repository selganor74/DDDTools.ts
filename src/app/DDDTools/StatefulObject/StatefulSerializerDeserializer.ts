/// <reference path="SimpleGuid.ts" />

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
        private static idToObjectMap: { [id: string]: any } = {};

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
            var toReturn = JSON.parse(toDeserialize, StatefulSerializerDeserializer.customReviver);
            StatefulSerializerDeserializer.cleanup();
            return toReturn;
        }

        /**
         * Preprocess the object tree to be serialized to find and replace Date objects with something different...
         */
        public static preprocessForFakeSubstitution(sourceObject: any) {
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
        public static postprocessForFakeSubstitution(sourceObject: any) {
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
            for (var item in StatefulSerializerDeserializer.idToObjectMap) {
                if (StatefulSerializerDeserializer.idToObjectMap[item].__objectInstanceId) {
                    delete StatefulSerializerDeserializer.idToObjectMap[item].__objectInstanceId;
                }
                // This should leave the instances "garbageable"... how to test ?    
                delete StatefulSerializerDeserializer.idToObjectMap[item];
            }
            // Reinitialezes the IdentityMap
            StatefulSerializerDeserializer.idToObjectMap = {};
        }

        private static customSerializer(key: string, value: any) {
            if (typeof value === "object") {
                if (!StatefulSerializerDeserializer.hasBeenTouched(value)) {
                    StatefulSerializerDeserializer.touch(value);
                }
            }
            return value;
        }

        private static customReviver(key: string, value: any) {
            if (typeof value === "object") {
                if (StatefulSerializerDeserializer.hasBeenTouched(value)) {
                    if (StatefulSerializerDeserializer.isInIdentityMapById(value.__objectInstanceId)) {
                        return StatefulSerializerDeserializer.getFromIdentityMapById(value.__objectInstanceId)
                    } else {
                        value = StatefulSerializerDeserializer.FakeRegExpDeserializer(value);
                        value = StatefulSerializerDeserializer.FakeDateDeserializer(value);
                        StatefulSerializerDeserializer.addToIdentityMapById(value.__objectInstanceId, value);
                    }
                }
            }
            return value;
        }

        private static hasBeenTouched(object: any): boolean {
            var casted = <IStateful>object;
            if (casted.__objectInstanceId) {
                return true;
            }
            return false;
        }

        private static touch(object: any): void {
            if (typeof object === "object") {
                var newId = SimpleGuid.generate();
                object.__objectInstanceId = newId;
            }
        }

        private static isInIdentityMapById(id: string): boolean {
            if (StatefulSerializerDeserializer.idToObjectMap[id]) {
                return true;
            }
            return false;
        }

        private static getFromIdentityMapById(id: string): any {
            if (StatefulSerializerDeserializer.isInIdentityMapById(id)) {
                return StatefulSerializerDeserializer.idToObjectMap[id];
            }
            return null;
        }

        private static addToIdentityMapById(id: string, object: any): any {
            StatefulSerializerDeserializer.idToObjectMap[id] = object;
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