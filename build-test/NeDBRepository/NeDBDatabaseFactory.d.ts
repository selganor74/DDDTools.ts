import NeDBDataStore = require("nedb");
export declare class NeDBDatabaseFactory {
    private static datastoreRegistry;
    static registerDatabase(dbname: string, database: NeDBDataStore): void;
    static isDatabaseRegistered(dbname: string): boolean;
    static getDatabase(dbname: string): NeDBDataStore;
    static unregisterDatabase(dbname: string): void;
    static getAndRegisterPersistentDb(dbname: string): NeDBDataStore;
    static getAndRegisterInMemoryDb(dbname: string): NeDBDataStore;
}
