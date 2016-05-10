/// <reference path="../ErrorManagement/BaseErrors.ts"/>

namespace DDDTools.PersistableObject {
    
    import BaseErrors = ErrorManagement.BaseErrors;
    
    export class PersistableErrors extends BaseErrors {
        static StateIsNotAnObject = "State is not an Object";
        static TypeNameNotSet = "TypeName not set";
        static TypeVersionNotSet = "TypeVersion not set";
        static UnableToInstantiateType = "Unable to Instantiate Type";
    }
}