/// <reference path="../Utils/SimpleGuid.d.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
declare namespace DDDTools.Serialization {
    class Touch {
        private static touchIndex;
        static resetTouchIndex(): void;
        private static getNewIndex();
        static touch(object: any): void;
        static untouch(object: any): void;
        static hasBeenTouched(object: any): boolean;
    }
}
