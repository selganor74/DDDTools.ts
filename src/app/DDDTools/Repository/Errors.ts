/// <reference path="../ErrorManagement/BaseErrors.ts"/>

namespace DDDTools.Repository {
    
    import BaseErrors = ErrorManagement.BaseErrors;
    
    export class Errors extends BaseErrors {
        public static KeyNotSet = "Key not set";
        public static ItemNotFound = "Item Not Found";
    }
}