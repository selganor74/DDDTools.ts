/// <reference path="../BaseErrors.ts"/>

namespace DDDTools.Repository {
    
    import DDD = DDDTools;
    
    export class RepositoryErrors extends DDD.BaseErrors {
        public static KeyNotSet = "Key not set";
        public static ItemNotFound = "Item Not Found";
    }
}