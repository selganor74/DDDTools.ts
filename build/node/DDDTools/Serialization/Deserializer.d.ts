/// <reference path="../Utils/SimpleGuid.d.ts" />
/// <reference path="../Utils/SimpleIdentityMap.d.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
/// <reference path="SerializableDate.d.ts" />
/// <reference path="SerializableRegExp.d.ts" />
/// <reference path="Touch.d.ts" />
declare namespace DDDTools.Serialization {
    class Deserializer {
        private static identityMap;
        static deserialize(toDeserialize: string): any;
        private static cleanup();
        private static customReviver(key, value);
        private static hasBeenTouched(object);
        private static FakeRegExpDeserializer(value);
        private static FakeDateDeserializer(value);
    }
}
