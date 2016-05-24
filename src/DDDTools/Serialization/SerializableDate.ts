/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Serialization {

    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class SerializableDate implements ITypeTracking {
        __typeName: string = "SerializableDate";
        __typeVersion: string = "v1";
        __dateAsString: string;

        constructor(date: Date) {
            this.__dateAsString = date.toISOString();
        }

        public static getDateFromString(dateAsString: string) {
            return new Date(dateAsString);            
        }

        getDate(): Date {
            return SerializableDate.getDateFromString(this.__dateAsString);
        }
    }
}