/// <reference path="../ErrorManagement/BaseErrors.ts" />

// import {BaseErrors} from "../ErrorManagement/BaseErrors";

namespace DDDTools.Repository {
 
    import BaseErrors = ErrorManagement.BaseErrors;
 
    export class Errors extends BaseErrors {
        public static KeyNotSet = "Key not set";
        public static ItemNotFound = "Item Not Found";
        public static ErrorSavingItem = "Error Saving Item";
        public static ErrorReadingItem = "Error Reading Item";
        public static ErrorDeletingItem = "Error Deleting Item";
        public static WrongTypeFromImplementation = "Wrong type from Implementation";
        public static ManagedTypeNotSupplied = "Repository needs to know what type it can manage";
        public static InvalidKey = "Invalid Key";
    }
}