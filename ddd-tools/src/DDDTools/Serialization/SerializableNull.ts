/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="IBaseTypeWrapper.ts" />

// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Serialization {

    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class SerializableNull implements ITypeTracking, IBaseTypeWrapper {
        __typeName: string = "SerializableNull";
        __typeVersion: string = "v1";
        __objectInstanceId: string;

        constructor() {
            Touch.touch(this);
        }

        public getOriginalValue() {
            return null;
        }
        
    }
}