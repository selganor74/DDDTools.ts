import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

// namespace DDDTools.Serialization {

export class SerializableDate implements ITypeTracking {
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
// }