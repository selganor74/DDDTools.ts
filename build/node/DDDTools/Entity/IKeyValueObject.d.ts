/// <reference path="../ValueObject/IValueObject.d.ts" />
declare namespace DDDTools.Entity {
    import IValueObject = ValueObject.IValueObject;
    interface IKeyValueObject<T> extends IValueObject<T> {
        toString(): string;
    }
}
