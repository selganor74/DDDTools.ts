/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// namespace DDDTools.Serialization {

import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

export class SerializableRegExp implements ITypeTracking {
    __typeName: string = "RegExp";
    __typeVersion: string = "v1";
    __regularExpression: string;

    constructor(regExp: RegExp) {
        this.__regularExpression = regExp.toString();
    }

    getRegExp(): RegExp {
        return new RegExp(this.__regularExpression);
    }
}
// }