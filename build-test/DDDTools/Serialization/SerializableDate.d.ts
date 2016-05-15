import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
export declare class SerializableDate implements ITypeTracking {
    __typeName: string;
    __typeVersion: string;
    __dateAsString: string;
    constructor(date: Date);
    getDate(): Date;
}
