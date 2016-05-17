/// <reference path="IPersistable.d.ts" />
/// <reference path="Errors.d.ts" />
/// <reference path="../ValueObjects/Guid.d.ts" />
declare namespace DDDTools.PersistableObject {
    class TypeRegistry {
        private static registry;
        private static latestVersions;
        private static libraryRegistered;
        private static registerValueObjectsLibrary();
        static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void;
        private static updateLatestVersions(typeName, typeVersion);
        private static isVersionGreater(vSubject, vReference);
        private static extractVersionNumber(typeVersion);
        static getTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): any;
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static getLatestVersionForType(typeName: string): string;
        private static versionIsInCorrectFormat(typeVersion);
        static computeNextVersion(typeVersion: string): string;
    }
}
