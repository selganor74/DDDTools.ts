import { IValueObject } from "../ValueObject/IValueObject";
export interface IKeyValueObject<T> extends IValueObject<T> {
    toString(): string;
}
