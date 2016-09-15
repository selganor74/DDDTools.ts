/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Serialization {

    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class Touch {

        private static touchIndex = 1;

        /**
         * Prepares the id generator for a new run
         */
        public static resetTouchIndex() {
            var sThis = Touch;
            sThis.touchIndex = 1;
        }

        private static getNewIndex(): string {
            // return SimpleGuid.generate()
            var sThis = Touch;
            sThis.touchIndex++;
            return (sThis.touchIndex++ - 1).toString();
        }

        /**
         * adds an __objectInstanceId property to an object
         */
        public static touch(object: any): void {
            var sThis = Touch
            if (typeof object === "object") {
                var newId = sThis.getNewIndex();
                object.__objectInstanceId = newId;
            }
        }

        /**
         * removes the __objectInstanceId property from an object
         */
        public static untouch(object: any): void {
            if (object.__objectInstanceId) {
                delete object.__objectInstanceId;
            }
        }

        /**
         * checks for the presence of an __objectInstanceId property
         */
        public static hasBeenTouched(object: any): boolean {
            var casted = <ITypeTracking>object;
            if (casted.__objectInstanceId) {
                return true;
            }
            return false;
        }

    }

}