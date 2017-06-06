/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="IBaseTypeWrapper.ts" />

// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Serialization {

    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class SerializableDate implements ITypeTracking, IBaseTypeWrapper {
        __typeName: string = "SerializableDate";
        __typeVersion: string = "v1";
        __dateAsString: string;
        __objectInstanceId: string;

        constructor(date: Date) {
            this.__dateAsString = date.toISOString();
            this.__objectInstanceId = (<any>date).__objectInstanceId;
        }

        public static getDateFromString(dateAsString: string) {
            return new Date(dateAsString);            
        }

        getOriginalValue(): Date {
            return SerializableDate.getDateFromString(this.__dateAsString);
        }
    }
}