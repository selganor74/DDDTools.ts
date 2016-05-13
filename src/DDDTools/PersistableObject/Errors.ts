// namespace DDDTools.PersistableObject {

import {BaseErrors} from "../ErrorManagement/BaseErrors";

export class Errors extends BaseErrors {

    // Thrown by persistable objects
    static StateIsNotAnObject = "State is not an Object";
    static TypeNameNotSet = "TypeName not set";
    static TypeVersionNotSet = "TypeVersion not set";
    static UnableToInstantiateType = "Unable to Instantiate Type";
    static TypeRegistryNotSet = "TypeRegistry not set";

    // Thrown by the Factory/TypeRegistry
    static TypeNotRegistered = "Type has not been registered with the TypeRegistry";
    
    // Thrown by the Upgrader
    static TypeNotInstatiable = "Type is not instantiable";
    static UpgradePathNotFound = "Upgrade Path not Found";
    static IncorrectVersionFormat = "Incorrect Version Format";
    static WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
}
// }