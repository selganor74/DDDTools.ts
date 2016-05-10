/// <reference path="IPersistable.ts" />
/// <reference path="Upgrader.ts" />
/// <reference path="Errors.ts" />

namespace DDDTools.PersistableObject {

    /**
     * PersistableObjectFactory is an helper class to create and reconstitute statfeul objects.
     * It gurantees that a statful object is always created or reconstituted to its latest version.  
     */
    export class Factory {
        /**
         * Creates an instance of the specified type. If typeVersion is not supplied, latest available version is returned.
         * Latest available version is the one whose FQTN matches the one specified by typeName.
         */
        public static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T {

            var toReturn: T;

            if (typeVersion) {
                var typeToInstatiate = Factory.computeFullyQualifiedTypeName(typeName, typeVersion);
                try {
                    toReturn = <T>eval("new " + typeToInstatiate + "()");
                    return toReturn;
                } catch (e) {
                    // This failure is expected if we are asking for the latest version available
                }
                toReturn = Factory.createTypeInstance<T>(typeName);
                if (toReturn.__typeVersion != typeVersion) {
                    Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + typeVersion);    
                }                   
                return toReturn;
            }

            try {
                toReturn = <T>eval("new " + typeName + "()");
            } catch (e) {
                Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
            }
            return toReturn;
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
        private static isTypeInstantiable(fullyQualifiedTypeName: string): boolean {
            try {
                var tmpType = Factory.createTypeInstance(fullyQualifiedTypeName);
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
        private static computeFullyQualifiedTypeName(typeName: string, typeVersion: string): string {
            var fqtnPartsArray = typeName.split(".");
            var className = fqtnPartsArray.pop();
            fqtnPartsArray.push(typeVersion);
            fqtnPartsArray.push(className);
            var newFqtn = fqtnPartsArray.join(".");
            return newFqtn;
        };

    }
}