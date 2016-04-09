/// <reference path="IStateful.ts" />
/// <reference path="UpgraderErrors.ts" />

namespace DDDTools.StatefulObject {

    import Errors = StatefulObject.UpgraderErrors;

    export interface IUpgraderMethod {
        /**
         * Un "ConverterMethod" prende un oggetto del tipo "x", in una versione "y" e lo trasforma in un altro del tipo "x" ma versione "z" 
         */
        (from: any): any
    }

    export interface IUpgradePath {
        /**
         * Aggiunge un metodo "converter" all'upgrade path
         */
        addUpgraderMethod(typeVersionFrom: string, upgraderMethod: IUpgraderMethod);

        /**
         * Aggiorna un'istanza da un tipo di una versione "vecchia" all'ultimo sgaggio chiamando tutti i converter registrati
         */
        upgrade<T>(instance: IStateful): T;
        
    }

    /**
     * Pseudo factory per l'aggiornamento di un oggetto stateful, all'ultimo sgaggio.
     */
    export class StatefulObjectUpgrader {

        private static pathRepository: { [typeName: string]: IUpgradePath }

        public static registerUpgradePath(typeName: string, upgrader: IUpgradePath) {
            // verifica che il tipo sia registrato
            if (StatefulObjectFactory.isTypeInstantiable(typeName)) {
                StatefulObjectUpgrader.pathRepository[typeName] = upgrader;
            }
            Errors.Throw(Errors.TypeNotInstatiable, "Il tipo " + typeName + " non risulta instanziabile. Verificare che il namespace ed il nome del tipo siano corretti. I tipi 'Upgradabili' devono essere 'export' dei loro moduli/namespace.");

        }

        public static getUpgradePathForType(typeName: string): IUpgradePath {
            if (StatefulObjectUpgrader.pathRepository[typeName]) {
                return StatefulObjectUpgrader.pathRepository[typeName];
            }
            Errors.Throw(Errors.UpgradePathNotFound, "Impossibile trovare un upgrade path for type " + typeName);
        }
    }
    
    export abstract class BaseUpgradePath implements IUpgradePath {

        private convertersRepository: { [typeVersionFrom: string] : any }

        constructor(
            /**
             * Rappresenta "l'ultima" versione del tipo gestito da questo Upgrade Path
             */
            private managedFullyQualifiedTypeName: string
        ) {}
        
        addUpgraderMethod(typeFrom: string, upgraderMethod: IUpgraderMethod) {
            this.convertersRepository[typeFrom] = upgraderMethod;
        };

        
        public upgrade<T>(instance: IStateful): T {
            return null;
        };
    }
}