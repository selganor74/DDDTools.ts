import { IValueObject } from "./IValueObject";
import { BasePersistableObject } from "../PersistableObject/BasePersistableObject";
export declare abstract class BaseValueObject<T> extends BasePersistableObject implements IValueObject<T> {
    constructor();
    equals(item: T): boolean;
}
