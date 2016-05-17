/// <reference path="../ErrorManagement/BaseErrors.d.ts" />
declare namespace DDDTools.Repository {
    import BaseErrors = ErrorManagement.BaseErrors;
    class Errors extends BaseErrors {
        static KeyNotSet: string;
        static ItemNotFound: string;
        static ErrorSavingItem: string;
        static ErrorReadingItem: string;
        static ErrorDeletingItem: string;
        static WrongTypeFromImplementation: string;
        static ManagedTypeNotSupplied: string;
    }
}
