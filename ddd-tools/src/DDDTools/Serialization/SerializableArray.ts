/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="IBaseTypeWrapper.ts" />

// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Serialization {

    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class SerializableArray implements ITypeTracking, IBaseTypeWrapper {
        __typeName: string = "SerializableArray";
        __typeVersion: string = "v1";
        __objectInstanceId: string;
        __originalArray: Array<any>;

        constructor(srcArray: Array<any>) {
            this.__objectInstanceId = (<any>srcArray).__objectInstanceId;
            this.__originalArray = srcArray;
        }

        public getOriginalValue() {
            return SerializableArray.getOriginalArrayFromSerializableArray(this);
        }

        public static getOriginalArrayFromSerializableArray(src: SerializableArray) {
            (<any>src.__originalArray).__objectInstanceId = src.__objectInstanceId;
            return src.__originalArray;
        }

    }
}