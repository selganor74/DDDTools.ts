import { BaseValueObject } from "../ValueObject/BaseValueObject";
import { IKeyValueObject } from "./IKeyValueObject";
import { IPersistable } from "./PersistableObject/IPersistable";
export declare abstract class BaseKeyValueObject<T> extends BaseValueObject<T> implements IKeyValueObject<T>, IPersistable {
    constructor();
    abstract toString(): string;
}
