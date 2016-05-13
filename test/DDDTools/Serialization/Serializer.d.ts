export declare class Serializer {
    static serialize(toSerialize: any): string;
    private static preprocessForSerializablesSubstitution(sourceObject);
    private static postprocessForSerializableSubstitution(sourceObject);
    private static customSerializer(key, value);
}
