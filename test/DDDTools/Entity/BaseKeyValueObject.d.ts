import { BaseValueObject } from "../ValueObject/BaseValueObject";
import { IKeyValueObject } from "./IKeyValueObject";
export declare abstract class BaseKeyValueObject<T> extends BaseValueObject<T> implements IKeyValueObject<T> {
    constructor();
    abstract toString(): string;
}
