import {BaseErrors} from "../DDDTools/ErrorManagement/BaseErrors";

export class Errors extends BaseErrors {
    public static DatabaseAlreadyRegistered = "Database already registered with the Factory";
    public static DatabaseNotRegistered = "Database is not registered with the Factory";
}