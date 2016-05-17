export declare class Deserializer {
    private static identityMap;
    static deserialize(toDeserialize: string): any;
    private static cleanup();
    private static customReviver(key, value);
    private static hasBeenTouched(object);
    private static FakeRegExpDeserializer(value);
    private static FakeDateDeserializer(value);
}
