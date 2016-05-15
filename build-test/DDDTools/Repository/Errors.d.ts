import { BaseErrors } from "../ErrorManagement/BaseErrors";
export declare class Errors extends BaseErrors {
    static KeyNotSet: string;
    static ItemNotFound: string;
    static ErrorSavingItem: string;
    static ErrorReadingItem: string;
    static ErrorDeletingItem: string;
    static WrongTypeFromImplementation: string;
    static ManagedTypeNotSupplied: string;
}
