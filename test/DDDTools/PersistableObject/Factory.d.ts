/// <reference path="../../../typings/browser.d.ts" />
import { IPersistable } from "./IPersistable";
export declare class Factory {
    private static typeRegistry;
    static registerType(typeName: string, typeVersion: string, typePrototype: new () => IPersistable): void;
    static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
    static createObjectsFromState(state: any): any;
    private static isPersistableObject(objectToTest);
    private static isTypeInstantiable(typeName);
}
