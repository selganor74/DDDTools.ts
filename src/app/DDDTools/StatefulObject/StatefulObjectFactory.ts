/// <reference path="IStateful.ts" />
/// <reference path="StatefulObjectUpgrader.ts" />

namespace DDDTools.StatefulObject {

    import Errors = DDDTools.StatefulObject.StatefulObjectErrors;

    export class StatefulObjectFactory {
        /**
         * Creates an instance of the specified type. If typeVersion is not supplied, latest available version is returned.
         * Latest available version is the one whose FQTN matches the one specified by typeName.
         */
        public static createTypeInstance(typeName: string, typeVersion?: string): IStateful {

            var toReturn: IStateful;

            if (typeVersion) {

            }

            try {
                toReturn = <IStateful>eval("new " + typeName + "()");
            } catch (e) {
                Errors.Throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
            }
            return toReturn;
        }

        /**
         * Creates an object instance from its state. Will always return the latest version possible of the object
         */
        public static createObjectsFromState(state: any): any {
            if (state === undefined) {
                Errors.Throw(Errors.UnableToInstantiateType, "state cannot be 'undefined'");
            }

            if (state === null) {
                Errors.Throw(Errors.UnableToInstantiateType, "state cannot be 'null'");
            }

            if (typeof state === 'object') {
                if (StatefulObjectFactory.isStatefulObject(state)) {

                    var stateful: IStateful;

                    stateful = StatefulObjectFactory.createTypeInstance(state.__typeName);
                    stateful.setState(state);
                    // This warranties that a type is always returned at its latest version.
                    var upgradedStateful = StatefulObjectUpgrader.upgrade(stateful);
                    return upgradedStateful;
                }
                // If it is not a statefulObject can be an Array or an Object and must be reconstituted
                var toReturn: any = Array.isArray(state) ? [] : {};
                for (var currentElement in state) {
                    var thisElement = state[currentElement];
                    toReturn[currentElement] = StatefulObjectFactory.createObjectsFromState(thisElement);
                }
                return toReturn;
            }
            // "Primitive"" types are returned as they are
            return state;
        }

        /**
         * Checks if typeVersion is the latest available fro typeName.
         */
        private static needsUpgrade(typeName: string, typeVersion: string) {
            var fqtn = StatefulObjectFactory.computeFullyQualifiedTypeName(typeName, typeVersion);
            // se il tipo è instanziabile a partire dal namespace di "versione", allora ha biesogno di essere upgradato 
            if (StatefulObjectFactory.isTypeInstantiable(fqtn)) {
                return true;
            }
            return false;
        }

        /**
         * Checks if an object implements the "IStateful" interface.
         */
        private static isStatefulObject(objectToTest: any): boolean {

            if (typeof objectToTest !== 'object') {
                return false;
            }

            var casted = <IStateful>objectToTest;
            if (!casted.__typeName || casted.__typeName === "") {
                return false;
            }

            if (!casted.__typeVersion || casted.__typeVersion === "") {
                return false;
            }

            return true;
        }

        /**
         * Checks if a type can be instatiated (at its latest version). 
         */
        private static isTypeInstantiable(fullyQualifiedTypeName: string): boolean {
            try {
                var tmpType = StatefulObjectFactory.createTypeInstance(fullyQualifiedTypeName);
            } catch (e) {
                return false;
            }
            return true;
        }

        /**
         * Returns the "Fully Qualified TypeName" of type "typeName" for the supplied "version".
         * FQTN is computed from typeName adding the version string in the right place.
         * versione prima del nome della classe.
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