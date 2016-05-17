import { IPersistable } from "./IPersistable";
export declare class Factory {
    private static typeRegistry;
    static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void;
    static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
    static createObjectsFromState(state: any): any;
    private static isPersistableObject(objectToTest);
    private static isTypeInstantiable(typeName);
}
export declare class Upgrader {
    private static latestTypeVersionMap;
    private static isVersionMapBuilt;
    private static buildVersionMapForType(typeName);
    static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
    static upgrade(instanceFrom: IPersistable): IPersistable;
    static computeNextVersion(typeVersion: string): string;
}
