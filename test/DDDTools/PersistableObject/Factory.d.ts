import { IPersistable } from "./IPersistable";
export declare class Factory {
    static createTypeInstance<T extends IPersistable>(typeName: string, typeVersion?: string): T;
    static createObjectsFromState(state: any): any;
    private static isPersistableObject(objectToTest);
    private static isTypeInstantiable(fullyQualifiedTypeName);
    private static computeFullyQualifiedTypeName(typeName, typeVersion);
}
