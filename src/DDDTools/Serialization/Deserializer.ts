/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../Utils/SimpleIdentityMap.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./SerializableDate.ts" />
/// <reference path="./SerializableRegExp.ts" />
/// <reference path="./Touch.ts" />

// import {SimpleGuid} from "../Utils/SimpleGuid";
// import {SimpleIdentityMap} from "../Utils/SimpleIdentityMap";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
// import {SerializableDate} from "./SerializableDate";
// import {SerializableRegExp} from "./SerializableRegExp";
// import {Touch} from "./Touch";

/**
 * Implements JSON string serialization. It extends the functionalities of JSON.stringify to allow serialization and deserialization of date and regular expression objects, and object reference.
 */
namespace DDDTools.Serialization {

    import SimpleGuid = Utils.SimpleGuid;
    import SimpleIdentityMap = Utils.SimpleIdentityMap;
    import IPersistable = PersistableObject.IPersistable;
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

            if (typeof value === "object" && value !== null) {
                if (sThis.hasBeenTouched(value)) {
                    if (idMap.isTracked(value.__objectInstanceId)) {
                        return idMap.getById(value.__objectInstanceId)
                    } else {
                        value = sThis.FakeRegExpDeserializer(value);
                        value = sThis.FakeDateDeserializer(value);
                        value = sThis.FakeNullDeserializer(value);
                        if (value !== null) {
                            idMap.add(value.__objectInstanceId, value);
                        }
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
         * TODO: Find a way to move this responsibility to the SerializableRegExp
         */
        private static FakeRegExpDeserializer(value: any): any {
            if (value.__typeName) {
                if (value.__typeName === "SerializableRegExp") {
                    value = SerializableRegExp.getRegExpFromRegExpAndFlags(value.__regularExpression, value.__flags);
                }
            }
            return value;
        }

        /**
         * Manages Date Deserialization
         * TODO: Find a way to move this responsibility to the SerializableRegExp
         */
        private static FakeDateDeserializer(value: any): any {
            if (value.__typeName) {
                if (value.__typeName === "SerializableDate") {
                    value = SerializableDate.getDateFromString(value.__dateAsString);
                }
            }
            return value;
        }

        /**
         * Manages Null Deserialization
         * TODO: Find a way to move this responsibility to the SerializableNull
         */
        private static FakeNullDeserializer(value: any): any {
            if (value.__typeName) {
                if (value.__typeName === "SerializableNull") {
                    value = null;
                }
            }
            return value;
        }
    }
}