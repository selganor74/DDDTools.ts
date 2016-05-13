import { BaseErrors } from "../ErrorManagement/BaseErrors";
export declare class Errors extends BaseErrors {
    static StateIsNotAnObject: string;
    static TypeNameNotSet: string;
    static TypeVersionNotSet: string;
    static UnableToInstantiateType: string;
    static TypeRegistryNotSet: string;
    static TypeNotRegistered: string;
    static TypeNotInstatiable: string;
    static UpgradePathNotFound: string;
    static IncorrectVersionFormat: string;
    static WrongVersionInUpgradedInstance: string;
}
