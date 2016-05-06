/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

namespace DDDTools.Serialization {
    
    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class FakeDate implements ITypeTracking {
        __typeName: string = "Date";
        __typeVersion: string = "v1";
        __dateAsString: string;

        constructor(date: Date) {
            this.__dateAsString = date.toISOString();
        }

        getDate(): Date {
            return new Date(this.__dateAsString);
        }
    }
}