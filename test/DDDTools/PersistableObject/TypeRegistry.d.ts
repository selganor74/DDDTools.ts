/// <reference path="../../../typings/browser.d.ts" />
import { IPersistable } from "../PersistableObject/IPersistable";
export declare class TypeRegistry {
    private registry;
    private latestVersions;
    constructor();
    private registerLibraryValueObjects();
    registerType(typeName: string, typeVersion: string, typePrototype: IPersistable): void;
    private updateLatestVersions(typeName, typeVersion);
    private isVersionGreater(vSubject, vReference);
    private extractVersionNumber(typeVersion);
    getTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): any;
    isLatestVersionForType(typeName: string, typeVersion: string): boolean;
    getLatestVersionForType(typeName: string): string;
    private versionIsInCorrectFormat(typeVersion);
    computeNextVersion(typeVersion: string): string;
}
