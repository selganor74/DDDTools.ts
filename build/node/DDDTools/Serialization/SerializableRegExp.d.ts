/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class SerializableRegExp implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __regularExpression: string;
        constructor(regExp: RegExp);
        getRegExp(): RegExp;
    }
}
