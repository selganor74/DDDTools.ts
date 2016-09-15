/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Serialization {

    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class SerializableNull implements ITypeTracking {
        __typeName: string = "SerializableNull";
        __typeVersion: string = "v1";
        
    }
}