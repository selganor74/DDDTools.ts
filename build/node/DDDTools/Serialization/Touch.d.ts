export declare class Touch {
    private static touchIndex;
    static resetTouchIndex(): void;
    private static getNewIndex();
    static touch(object: any): void;
    static untouch(object: any): void;
    static hasBeenTouched(object: any): boolean;
}
