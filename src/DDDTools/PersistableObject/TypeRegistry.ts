/// <reference path="../../../typings/browser.d.ts" />

import {IPersistable} from "../PersistableObject/IPersistable";
import {Errors} from "./Errors";
import {Guid} from "../ValueObjects/Guid";

export class TypeRegistry {
    
    private registry: { [typeName: string]: { [typeVersion: string] : IPersistable } };
    private latestVersions: { [typeName: string]: string }
    
    constructor() {
        this.registry = {};
        this.latestVersions = {};
        
        this.registerLibraryValueObjects();
    }
    
    /**
     * Always Register Library Value Objects.
     */
    private registerLibraryValueObjects() {
        this.registerType("DDDTools.ValueObjects.Guid", "v1", <any>Guid);
    }
    

    public registerType(typeName: string, typeVersion: string, typePrototype: IPersistable): void {
        if(!this.versionIsInCorrectFormat(typeVersion)) {
            Errors.throw(Errors.IncorrectVersionFormat);
        }
        this.registry[typeName] = this.registry[typeName] || {};
        this.registry[typeName][typeVersion] = typePrototype;
        
        this.updateLatestVersions(typeName, typeVersion);
    }
    
    private updateLatestVersions(typeName: string, typeVersion: string): void {
        if(!this.latestVersions[typeName]) {
            this.latestVersions[typeName] = typeVersion;
            return;
        }
        var reference = this.latestVersions[typeName];
        if (this.isVersionGreater(typeVersion,reference)) {
            this.latestVersions[typeName] = typeVersion;
        }
    }
        
    private isVersionGreater(vSubject: string, vReference: string): boolean {
        var vS: number = this.extractVersionNumber(vSubject);
        var vR: number = this.extractVersionNumber(vReference);
        return vS > vR;
    }   
     
    private extractVersionNumber(typeVersion: string): number {
        var version: string = typeVersion.replace("v","");
        var asNumber = Number(version);
        return asNumber;
    }
    
    public getTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string) {
        if(!typeVersion) {
            typeVersion = this.getLatestVersionForType(typeName);
        }
        if (!this.registry[typeName]) {
            Errors.throw(Errors.TypeNotRegistered, "Type " + typeName + " does not exist in the TypeRegistry.")
        }

        if (!this.registry[typeName][typeVersion]) {
            Errors.throw(Errors.TypeNotRegistered, "Version " + typeVersion + " of Type " + typeName + " does not exist in the TypeRegistry.")
        }

        var toInstantiate = this.registry[typeName][typeVersion];
        var toReturn;
        
        try {
            toReturn = <T>(new (<any>toInstantiate)());
        } catch (e) {
            Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
        }
        return toReturn;
    }
    
    /**
     * True if specified version is the latest for type.
     */
    public isLatestVersionForType(typeName: string, typeVersion: string) {
        return this.getLatestVersionForType(typeName) === typeVersion;
    }
    
    /**
     * Will return undefined if the no version type is defined
     */
    public getLatestVersionForType(typeName: string): string {
        return this.latestVersions[typeName] || undefined;
    }
    
    private versionIsInCorrectFormat(typeVersion: string) : boolean {
        var versionRe = new RegExp("^v[0-9]+");
        if (!versionRe.test(typeVersion)) {
            return false;
        }        
        return true;
    }

    public computeNextVersion(typeVersion: string): string {
        // Version must be in the form vN where v is a constant and N is an integer.
        var versionRe = new RegExp("^v[0-9]+");
        if (!this.versionIsInCorrectFormat(typeVersion)) {
            // TODO Throw the correct exception;
            throw new Error();
            // Errors.throw(Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
        }
        var version = Number(typeVersion.substr(1));
        version = version + 1;
        var nextVersion = "v" + version;
        return nextVersion;
    }
        
}