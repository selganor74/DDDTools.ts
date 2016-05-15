import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
export declare class SerializableRegExp implements ITypeTracking {
    __typeName: string;
    __typeVersion: string;
    __regularExpression: string;
    constructor(regExp: RegExp);
    getRegExp(): RegExp;
}
