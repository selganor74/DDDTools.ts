/// <reference path="IStateful.ts" />

namespace DDDTools.StatefulObject {
    
    import Errors = DDDTools.StatefulObject.StatefulObjectErrors;
    
    export class StatefulObjectFactory {
        public static instantiateType(typeName: string, typeVersion?: string): IStateful {

            var toReturn: IStateful;

            if (typeVersion) {
                
            }
            
            try {
                toReturn = <IStateful>eval("new " + typeName + "()");
            } catch (e) {
                Errors.Throw(Errors.UnableToInstantiateType, "Impossibile istanziare il tipo " + typeName + " " + e.message );
            }
            return toReturn;
        }
        
        public static createObjectsFromState(state: any): any {
            if (state === undefined ) {
                Errors.Throw(Errors.UnableToInstantiateType, "state non può essere 'undefined'");
            }

            if (state === null ) {
                Errors.Throw(Errors.UnableToInstantiateType, "state non può essere 'null'");
            }
            
            if (typeof state === 'object') {
                if (StatefulObjectFactory.isStatefulObject(state)) {
                    
                    var stateful: IStateful;

                    // Verifica se il tipo ha bisogno di upgrade
                    if (StatefulObjectFactory.needsUpgrade(state.__typeName, state.__typeVersion)) {
                        
                    } else {
                        stateful = StatefulObjectFactory.instantiateType( state.__typeName );
                        stateful.setState( state );
                        return stateful;                        
                    }                    
                    
                }
                // Se non è un oggetto "stateful" può essere un oggetto o un array, e va ricostruito.
                var toReturn: any = Array.isArray(state) ? [] : {};
                for (var currentElement in state) {
                    var thisElement = state[currentElement];
                    toReturn[currentElement] = StatefulObjectFactory.createObjectsFromState(thisElement);
                }
                return toReturn;
            }   
            // se è un tipo primitivo lo si ritorna così com'è.
            return state;
        }

        public static needsUpgrade( typeName: string, typeVersion: string) {
            var fqtn = StatefulObjectFactory.computeFullyQualifiedTypeNameFromVersion( typeName, typeVersion);
            // se il tipo è instanziabile a partire dal namespace di "versione", allora ha biesogno di essere upgradato 
            if ( StatefulObjectFactory.isTypeInstantiable(fqtn) ) {
                return true;
            }
            return false;
        }

        public static isStatefulObject(objectToTest: any): boolean {

            if (typeof objectToTest !== 'object') {
                return false;
            }

            var casted = <IStateful>objectToTest;
            if (!casted.__typeName || casted.__typeName === "") {
                return false;
            }

            if (!casted.__typeVersion || casted.__typeVersion) {
                return false;
            }

            return true;
        }
        
        /**
         * Verifica che un tipo sia effettiviamente istanziabile. 
         */
        public static isTypeInstantiable(fullyQualifiedTypeName: string): boolean {
            try {
                var tmpType = StatefulObjectFactory.instantiateType(fullyQualifiedTypeName);
            } catch (e) {
                return false;
            }
            return true;
        }
        
        /**
         * Restituisce il "Fully Qualified TypeName" del tipo typeName a partire dalla sua versione.
         * Nell'implementazione standard, il FQTN viene costruito prendendo il managedTypeName ed aggiungendo la stringa di
         * versione prima del nome della classe.
         * Ad esempio 
         * typeName: Application.Model.Offerta
         * version: v2
         * FQTN: Application.Model.v2.Offerta
         */
        public static computeFullyQualifiedTypeNameFromVersion(typeName: string, typeVersion: string) : string {
            var fqtnPartsArray = typeName.split(".");
            var className = fqtnPartsArray.pop();
            fqtnPartsArray.push(typeVersion);
            fqtnPartsArray.push(className);
            var newFqtn = fqtnPartsArray.join(".");
            return newFqtn;
        };

    }
}