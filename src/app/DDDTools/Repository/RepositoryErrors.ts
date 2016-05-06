/// <reference path="../ErrorManagement/BaseErrors.ts"/>

namespace DDDTools.Repository {
    
    import BaseErrors = ErrorManagement.BaseErrors;
    
    export class RepositoryErrors extends BaseErrors {
        public static KeyNotSet = "Key not set";
        public static ItemNotFound = "Item Not Found";
    }
}