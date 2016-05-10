/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../Utils/SimpleIdentityMap.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="Touch.ts" />

/**
 * Implements JSON string serialization. It extends the functionalities of JSON.stringify to allow serialization and deserialization of date and regular expression objects, and object reference.
 */
namespace DDDTools.Serialization {

    import SimpleGuid = Utils.SimpleGuid;
    import SimpleIdentityMap = Utils.SimpleIdentityMap;
    import IPersistable =  PersistableObject.IPersistable;
    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class Deserializer {
        /**
         * This is needed to track object instances to achieve correct reconstruction of the object tree.
         */
        private static identityMap: SimpleIdentityMap;


        /**
         * Desesializes an object from a JSON string.
         */
        public static deserialize(toDeserialize: string): any {
            Deserializer.identityMap = new SimpleIdentityMap();
            var toReturn = JSON.parse(toDeserialize, Deserializer.customReviver);
            Deserializer.cleanup();
            return toReturn;
        }

        /**
         * Cleans the reconsituted instances from the __objectInstanceId property,
         * and empties the IdentityMap.
         */
        private static cleanup() {
            var sThis = Deserializer;
            var idMap = sThis.identityMap;
            var untouch = Touch.untouch;
            
            for (var item of idMap.getIds()) {
                var currentItem = idMap.getById(item);
                untouch(currentItem);
                // This should leave the instances "garbageable"... how to test ?    
                idMap.deleteById(item);
            }
        }

        /**
         * It handles Fake* instances uses __objectInstanceId to rebuild a correct object tree. 
         * This function will be called by JSON.parse
         */
        private static customReviver(key: string, value: any) {
            var sThis = Deserializer;
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
            var casted = <ITypeTracking>object;
            if (casted.__objectInstanceId) {
                return true;
            }
            return false;
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
                    value = new Date((<SerializableDate>value).__dateAsString);
                }
            }
            return value;
        }
    }
}