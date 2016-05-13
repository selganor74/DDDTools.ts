import { IPersistable } from "../PersistableObject/IPersistable";
export declare class Upgrader {
    private static latestTypeVersionMap;
    private static isVersionMapBuilt;
    private static buildVersionMapForType(typeName);
    static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
    static upgrade(instanceFrom: IPersistable): IPersistable;
    static computeNextVersion(typeVersion: string): string;
}
