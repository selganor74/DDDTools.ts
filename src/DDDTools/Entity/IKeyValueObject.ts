import {IValueObject} from "../ValueObject/IValueObject";

// namespace DDDTools.Entity {

//    import IValueObject = ValueObject.IValueObject;

export interface IKeyValueObject<T> extends IValueObject<T> {
    toString(): string;
}
// }