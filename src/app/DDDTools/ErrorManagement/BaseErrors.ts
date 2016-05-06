namespace DDDTools.ErrorManagement {
    export abstract class BaseErrors {
        
        static Throw(name: string, message?: string) {
            var err = BaseErrors.getErrorInstance(name, message);
            throw err;
        }
        
        static getErrorInstance(name: string, message?: string) : Error {
            var err = new Error(message || name);
            err.name = name;
            return err;
        }
    }
}
