/// <reference path="SerializableDate.d.ts" />
/// <reference path="SerializableRegExp.d.ts" />
/// <reference path="Touch.d.ts" />
declare namespace DDDTools.Serialization {
    class Serializer {
        static serialize(toSerialize: any): string;
        private static preprocessForSerializablesSubstitution(sourceObject);
        private static untouchSourceObject(sourceObject);
        private static postprocessForSerializableSubstitution(sourceObject);
        private static customSerializer(key, value);
    }
}
