/// <reference path="./IPersistable.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="./TypeRegistry.ts" />

// import {IPersistable} from "./IPersistable";
// import {Errors} from "./Errors";
// import {TypeRegistry} from "./TypeRegistry";

namespace DDDTools.PersistableObject {

    /**
     * PersistableObjectFactory is an helper class to create and reconstitute statfeul objects.
     * It gurantees that a statful object is always created or reconstituted to its latest version.  
     */
    export class Factory {

        private static typeRegistry: TypeRegistry;

        /**
         * Registers a new IPersistable type with the Factory
         */
        public static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable) {
            var sThis = Factory;
            if (!sThis.typeRegistry) {
                sThis.typeRegistry = new TypeRegistry()
            }
            TypeRegistry.registerType(typeName, typeVersion, typePrototype);
        }

        /**
         * Creates an instance of the specified type. If typeVersion is not supplied, latest available version is returned.
         */
        public static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T {

            if (!Factory.typeRegistry) {
                Errors.throw(Errors.TypeRegistryNotSet, "Please register at least a type with the Factory.");
            }

            return TypeRegistry.getTypeInstance<T>(typeName, typeVersion);

            // if (typeVersion) {
            //     var typeToInstatiate = Factory.computeFullyQualifiedTypeName(typeName, typeVersion);
            //     try {
            //         toReturn = <T>eval("new " + typeToInstatiate + "()");
            //         return toReturn;
            //     } catch (e) {
            //         // This failure is expected if we are asking for the latest version available
            //     }
            //     toReturn = Factory.createTypeInstance<T>(typeName);
            //     if (toReturn.__typeVersion != typeVersion) {
            //         Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + typeVersion);
            //     }
            //     return toReturn;
            // }

            // try {
            //     toReturn = <T>eval("new " + typeName + "()");
            // } catch (e) {
            //     Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
            // }
            // return toReturn;
        }

        /**
         * Creates an object instance from its state. Will always return the latest version possible of the object
         */
        public static createObjectsFromState(state: any): any {
            if (state === undefined) {
                Errors.throw(Errors.UnableToInstantiateType, "state cannot be 'undefined'");
            }

            if (state === null) {
                Errors.throw(Errors.UnableToInstantiateType, "state cannot be 'null'");
            }

            if (typeof state === 'object') {
                if (Factory.isPersistableObject(state)) {

                    var persistable: IPersistable;

                    persistable = Factory.createTypeInstance(state.__typeName);
                    persistable.setState(state);
                    // This warranties that a type is always returned at its latest version.
                    var upgradedPersistable = Upgrader.upgrade(persistable);
                    return upgradedPersistable;
                }
                // If it is not a persistableObject can be an Array or an Object and must be reconstituted
                var toReturn: any = Array.isArray(state) ? [] : {};
                for (var currentElement in state) {
                    var thisElement = state[currentElement];
                    toReturn[currentElement] = Factory.createObjectsFromState(thisElement);
                }
                return toReturn;
            }
            // "Primitive"" types are returned as they are
            return state;
        }

        /**
         * Checks if an object implements the "IPersistable" interface.
         */
        private static isPersistableObject(objectToTest: any): boolean {

            if (typeof objectToTest !== 'object') {
                return false;
            }

            var persistable = <IPersistable>objectToTest;
            if (!persistable.__typeName || persistable.__typeName === "") {
                return false;
            }

            if (!persistable.__typeVersion || persistable.__typeVersion === "") {
                return false;
            }

            return true;
        }

        /**
         * Checks if a type can be instatiated (at its latest version). 
         */
        private static isTypeInstantiable(typeName: string): boolean {
            try {
                var tmpType = Factory.createTypeInstance(typeName);
            } catch (e) {
                return false;
            }
            return true;
        }

        /**
         * Returns the "Fully Qualified TypeName" of type "typeName" for the supplied "version".
         * FQTN is computed from typeName adding the version string in the right place.
         * Example
         * typeName: Application.Model.Offerta
         * version: v2
         * return: Application.Model.v2.Offerta
         */
        // private static computeFullyQualifiedTypeName(typeName: string, typeVersion: string): string {
        //     var fqtnPartsArray = typeName.split(".");
        //     var className = fqtnPartsArray.pop();
        //     fqtnPartsArray.push(typeVersion);
        //     fqtnPartsArray.push(className);
        //     var newFqtn = fqtnPartsArray.join(".");
        //     return newFqtn;
        // };

    }
    // }

    /**
     * The Upgrader is an helper class to automate the "upgrade process" of an object's state.
     * The Upgrader is found on these principles:
     *  * The latest version FQTN must match the one specified by the property __typeName, which is in the form namespace.objectName.
     *  * Older versions of a PersistableObject MUST have a FQTN in the form namespace.<version>.objectName.
     *  * __typeVersion MUST be specified as v<versionNumber> where version is an integer.
     *  * All object's versions (excluding v1) MUST provide an getUpgradedInstance method that knows how to modify state to go from 
     *    version v<n - 1> to v<n>, where n is the version of the object containing the getUpgradedInstance method.   
     */
    export class Upgrader {

        // Contains the latest version possible for each type. 
        private static latestTypeVersionMap: { [typeName: string]: string } = {};
        // Contains flags to determine if latstTypeVersionMap for a specific type has been calculated
        private static isVersionMapBuilt: { [typeName: string]: boolean } = {};

        private static buildVersionMapForType(typeName: string): void {
            if (Upgrader.isVersionMapBuilt[typeName]) {
                return;
            }
            try {
                var tmpInstance = Factory.createTypeInstance(typeName);
                Upgrader.latestTypeVersionMap[typeName] = tmpInstance.__typeVersion;
                // console.log("Latest possible version for " + typeName + " is " + tmpInstance.__typeVersion);
            } catch (e) {
                Errors.throw(Errors.TypeNotInstatiable, "The type " + typeName + " cannot be instantiated, so it is impossible to identify the latest possible version.");
            }
            Upgrader.isVersionMapBuilt[typeName] = true;
        }

        public static isLatestVersionForType(typeName: string, typeVersion: string): boolean {
            // Looks for the latest version, if not already done.
            if (!Upgrader.isVersionMapBuilt[typeName]) {
                Upgrader.buildVersionMapForType(typeName);
            }
            // If the version supplied doesn't match the latest version in the map, the instance must be upgraded.
            if (Upgrader.latestTypeVersionMap[typeName] !== typeVersion) {
                return true;
            }
            return false;
        }

        public static upgrade(instanceFrom: IPersistable): IPersistable {
            // If object doesn't need to upgrade, then we are done!
            if (!Upgrader.isLatestVersionForType(instanceFrom.__typeName, instanceFrom.__typeVersion)) {
                return instanceFrom;
            }
            var nextVersion = Upgrader.computeNextVersion(instanceFrom.__typeVersion);
            var upgraderInstance = Factory.createTypeInstance(instanceFrom.__typeName, nextVersion);
            var upgraded = upgraderInstance.getUpgradedInstance(instanceFrom);
            // Verifies that version is effectively upgraded
            if (upgraded.__typeVersion != nextVersion) {
                Errors.throw(Errors.WrongVersionInUpgradedInstance, "The expected version of the upgraded instance was " + nextVersion + " while was found to be " + upgraderInstance.__typeVersion);
            }
            return Upgrader.upgrade(upgraded);
        }

        public static computeNextVersion(typeVersion: string): string {
            // Version must be in the form vN where v is a constant and N is an integer.
            var versionRe = new RegExp("^v[0-9]+");
            if (!versionRe.test(typeVersion)) {
                Errors.throw(Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
            }
            var version = Number(typeVersion.substr(1));
            version = version + 1;
            var nextVersion = "v" + version;
            return nextVersion;
        }
    }
}