/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class SerializableRegExp implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __regularExpression: string;
        __flags: string;
        constructor(regExp: RegExp);
        private splitRegExpAndFlags(regExp);
        static getRegExpFromRegExpAndFlags(regularExpression: string, flags: string): RegExp;
        getRegExp(): RegExp;
    }
}
