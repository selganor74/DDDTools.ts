/// <reference path="../../../typings/browser.d.ts" />
import { IPersistable } from "./IPersistable";
import { TypeRegistry } from "./TypeRegistry";
export declare class Factory {
    private static typeRegistry;
    static setTypeRegistry(tr: TypeRegistry): void;
    static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
    static createObjectsFromState(state: any): any;
    private static isPersistableObject(objectToTest);
    private static isTypeInstantiable(typeName);
    private static computeFullyQualifiedTypeName(typeName, typeVersion);
}
