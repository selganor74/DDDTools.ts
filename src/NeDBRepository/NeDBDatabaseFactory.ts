import NeDBDataStore = require("nedb");

import {Errors} from "./Errors";

declare var Nedb: typeof NeDBDataStore;

/**
 * Act as a Factory and Registry for all the NeDBs used by the application.
 */
export class NeDBDatabaseFactory {
 
    private static datastoreRegistry: { [id: string]: NeDBDataStore } = {};
    
    public static registerDatabase( dbname: string, database: NeDBDataStore): void {
        var sThis = NeDBDatabaseFactory;
        if (sThis.isDatabaseRegistered(dbname)) {
            Errors.throw(Errors.DatabaseAlreadyRegistered, "Database " + database + " has already been registered");            
        }
        sThis.datastoreRegistry[dbname] = database;
    }
    
    public static isDatabaseRegistered( dbname: string ) {
        var sThis = NeDBDatabaseFactory;
        if(sThis.datastoreRegistry[dbname]) {
            return true;
        }
        return false;
    }
    
    public static getDatabase(dbname: string): NeDBDataStore {
        var sThis = NeDBDatabaseFactory;
        if(!sThis.isDatabaseRegistered(dbname)) {
            Errors.throw(Errors.DatabaseNotRegistered, "Database " + dbname + " does not exist in the Factory");
        }
        return sThis.datastoreRegistry[dbname];
    }
    
    public static unregisterDatabase(dbname: string): void {
        var sThis = NeDBDatabaseFactory;
        if (sThis.isDatabaseRegistered) {
            delete sThis.datastoreRegistry[dbname];
        }
    }
    
    /**
     * Helper to register and obtain a persistent datastore instance 
     */
    public static getAndRegisterPersistentDb(dbname: string): NeDBDataStore {
        var sThis = NeDBDatabaseFactory;
        if (sThis.isDatabaseRegistered(dbname)) {
            Errors.throw(Errors.DatabaseAlreadyRegistered, "Database " + dbname + " is already registered");
        }
        var ds = new Nedb({filename: dbname, autoload: true});
        sThis.registerDatabase(dbname, ds);
        return sThis.getDatabase(dbname);
    } 
    
    /**
     * Helper to register and obtain a datastore instance for in Memory Storage Only
     */
    public static getAndRegisterInMemoryDb(dbname: string): NeDBDataStore {
        var sThis = NeDBDatabaseFactory;
        if (sThis.isDatabaseRegistered(dbname)) {
            Errors.throw(Errors.DatabaseAlreadyRegistered, "Database " + dbname + " is already registered");
        }
        var ds = new Nedb({inMemoryOnly: true});
        sThis.registerDatabase(dbname, ds);
        return sThis.getDatabase(dbname);
    } 
}