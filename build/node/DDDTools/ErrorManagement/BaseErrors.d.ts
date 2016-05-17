declare namespace DDDTools.ErrorManagement {
    abstract class BaseErrors {
        static throw(name: string, message?: string): void;
        static getErrorInstance(name: string, message?: string): Error;
    }
}