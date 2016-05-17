/// <reference path="./IPersistable.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../ValueObjects/Guid.ts" />

// import {IPersistable} from "./IPersistable";
// import {Errors} from "./Errors";

namespace DDDTools.PersistableObject {

    export class TypeRegistry {

        private static registry: { [typeName: string]: { [typeVersion: string]: new () => IPersistable } } = {};
        private static latestVersions: { [typeName: string]: string } = {}


        public static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void {
            var sThis = TypeRegistry;
            if (!typePrototype) {
                Errors.throw(Errors.CannotRegisterUndefined, "typePrototype supplied for " + typeName + " " + typeVersion + " is null or undefined!");
            }

            if (!sThis.versionIsInCorrectFormat(typeVersion)) {
                Errors.throw(Errors.IncorrectVersionFormat);
            }
            sThis.registry[typeName] = this.registry[typeName] || {};
            sThis.registry[typeName][typeVersion] = typePrototype;

            sThis.updateLatestVersions(typeName, typeVersion);
        }

        private static updateLatestVersions(typeName: string, typeVersion: string): void {
            var sThis = TypeRegistry;
            if (!sThis.latestVersions[typeName]) {
                sThis.latestVersions[typeName] = typeVersion;
                return;
            }
            var reference = sThis.latestVersions[typeName];
            if (sThis.isVersionGreater(typeVersion, reference)) {
                sThis.latestVersions[typeName] = typeVersion;
            }
        }

        private static isVersionGreater(vSubject: string, vReference: string): boolean {
            var sThis = TypeRegistry;
            var vS: number = sThis.extractVersionNumber(vSubject);
            var vR: number = sThis.extractVersionNumber(vReference);
            return vS > vR;
        }

        private static extractVersionNumber(typeVersion: string): number {
            var sThis = TypeRegistry;
            var version: string = typeVersion.replace("v", "");
            var asNumber = Number(version);
            return asNumber;
        }

        public static getTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string) {
            var sThis = TypeRegistry;
            if (!typeVersion) {
                typeVersion = sThis.getLatestVersionForType(typeName);
            }
            if (!sThis.registry[typeName]) {
                Errors.throw(Errors.TypeNotRegistered, "Type " + typeName + " does not exist in the TypeRegistry.")
            }

            if (!sThis.registry[typeName][typeVersion]) {
                Errors.throw(Errors.TypeNotRegistered, "Version " + typeVersion + " of Type " + typeName + " does not exist in the TypeRegistry.")
            }

            var toInstantiate = sThis.registry[typeName][typeVersion];
            var toReturn;

            try {
                toReturn = <T>(new (<any>toInstantiate)());
                //toReturn.__typeName = typeName;
                //toReturn.__typeVersion = typeVersion;
            } catch (e) {
                Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
            }
            return toReturn;
        }

        /**
         * True if specified version is the latest for type.
         */
        public static isLatestVersionForType(typeName: string, typeVersion: string) {
            var sThis = TypeRegistry;
            return sThis.getLatestVersionForType(typeName) === typeVersion;
        }

        /**
         * Will return undefined if the no version type is defined
         */
        public static getLatestVersionForType(typeName: string): string {
            var sThis = TypeRegistry;

            return sThis.latestVersions[typeName] || undefined;
        }

        private static versionIsInCorrectFormat(typeVersion: string): boolean {
            var sThis = TypeRegistry;
            var versionRe = new RegExp("^v[0-9]+");
            if (!versionRe.test(typeVersion)) {
                return false;
            }
            return true;
        }

        public static computeNextVersion(typeVersion: string): string {
            var sThis = TypeRegistry;
            // Version must be in the form vN where v is a constant and N is an integer.
            var versionRe = new RegExp("^v[0-9]+");
            if (!sThis.versionIsInCorrectFormat(typeVersion)) {
                // TODO Throw the correct exception;
                throw new Error();
                // Errors.throw(Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
            }
            var version = Number(typeVersion.substr(1));
            version = version + 1;
            var nextVersion = "v" + version;
            return nextVersion;
        }
    }
}