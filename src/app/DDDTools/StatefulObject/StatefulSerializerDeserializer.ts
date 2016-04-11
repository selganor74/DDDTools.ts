/// <reference path="SimpleGuid.ts" />

namespace DDDTools.StatefulObject {

    import Guid = DDDTools.ValueObjects.Guid;

    export class StatefulSerializerDeserializer {

        private static idToObjectMap: { [id: string]: any } = {};

        /**
         * Serializes an object to a JSON string, keepeing track of the instances of the objects serialized
         */
        public static serialize(toSerialize: any): string {
            return JSON.stringify(toSerialize, StatefulSerializerDeserializer.customSerializer);
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
                value = StatefulSerializerDeserializer.RegExpSerializer(value);
            }
            // Dates are treated like strings by JSON.stringify!
            value = StatefulSerializerDeserializer.DateSerializer(value);
            return value;
        }

        private static customReviver(key: string, value: any) {
            if (typeof value === "object") {
                if (StatefulSerializerDeserializer.hasBeenTouched(value)) {
                    if (StatefulSerializerDeserializer.isInIdentityMapById(value.__objectInstanceId)) {
                        return StatefulSerializerDeserializer.getFromIdentityMapById(value.__objectInstanceId)
                    } else {
                        value = StatefulSerializerDeserializer.RegExpDeserializer(value);
                        StatefulSerializerDeserializer.addToIdentityMapById(value.__objectInstanceId, value);
                    }
                }
            }
            value = StatefulSerializerDeserializer.DateDeserializer(value);
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

        private static RegExpSerializer(value: any): any {
            if (value instanceof RegExp) {
                value.__typeName = "RegExp";
                value.__typeVersion = "v1";
                value.__regularExpression = value.toString();
            }
            return value;
        }

        private static RegExpDeserializer(value: any): any {
            if (value.__typeName) {
                if (value.__typeName === "RegExp") {
                    value = new RegExp(value.__regularExpression || "");
                }
            }
            return value;
        }

        private static DateSerializer(value: any): any {
            if (typeof value === "string") {
                var dateTimeRegExp = new RegExp("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}[T][0-9]{2}[:][0-9]{2}[:][0-9]{2}[.][0-9]{3}[Z]$");
                if (dateTimeRegExp.test(value)) {
                    var tmpValue = {
                        __typeName: "Date",
                        __typeVersion: "v1",
                        __date: value + "_dummy_to_avoid_loops"
                    };
                    value = tmpValue;
                }
            }
            return value;
        }

        private static DateDeserializer(value: any): any {
            if (value.__typeName) {
                if (value.__typeName === "Date") {
                    value = new Date((<string>value.__date).replace("_dummy_to_avoid_loops", ""));
                }
            }
            return value;
        }
    }
}