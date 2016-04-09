/// <reference path="../BaseErrors.ts"/>

namespace DDDTools.StatefulObject {
    
    import BaseErrors = DDDTools.BaseErrors;
    
    export class StatefulObjectErrors extends BaseErrors {
        static StateIsNotAnObject = "State is not an Object";
        static TypeNameNotSet = "TypeName not set";
        static TypeVersionNotSet = "TypeVersion not set";
        static UnableToInstantiateType = "Unable to Instantiate Type";     
    }
}