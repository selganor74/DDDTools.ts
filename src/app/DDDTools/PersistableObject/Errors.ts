/// <reference path="../ErrorManagement/BaseErrors.ts"/>

namespace DDDTools.PersistableObject {
    
    import BaseErrors = ErrorManagement.BaseErrors;
    
    export class Errors extends BaseErrors {
        // Thrown by persistable objects
        static StateIsNotAnObject = "State is not an Object";
        static TypeNameNotSet = "TypeName not set";
        static TypeVersionNotSet = "TypeVersion not set";
        static UnableToInstantiateType = "Unable to Instantiate Type";
        
        // Thrown by the Upgrader
        static TypeNotInstatiable = "Type is not instantiable";
        static UpgradePathNotFound = "Upgrade Path not Found";
        static IncorrectVersionFormat = "Incorrect Version Format";
        static WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
    }
}