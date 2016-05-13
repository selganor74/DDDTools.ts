/**
 * Minimal Error handling base behaviors for the domain model.
 */
export abstract class BaseErrors {

    static throw(name: string, message?: string) {
        var err = BaseErrors.getErrorInstance(name, message);
        throw err;
    }

    static getErrorInstance(name: string, message?: string): Error {
        var err = new Error(message || name);
        err.name = name;
        return err;
    }
}