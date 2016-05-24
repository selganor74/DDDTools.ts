/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
declare namespace DDDTools.Serialization {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    class SerializableDate implements ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __dateAsString: string;
        constructor(date: Date);
        static getDateFromString(dateAsString: string): Date;
        getDate(): Date;
    }
}
