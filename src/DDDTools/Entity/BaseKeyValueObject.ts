import {BaseValueObject} from "../ValueObject/BaseValueObject";
import {IKeyValueObject} from "./IKeyValueObject";
import {IPersistable} from "./PersistableObject/IPersistable";

// namespace DDDTools.Entity {

export abstract class BaseKeyValueObject<T>
    extends BaseValueObject<T>
    implements IKeyValueObject<T>, IPersistable {

    constructor() {
        super();
    }

    /**
     * Derived classes must reimplement this method. 
     */
    public abstract toString(): string;
}
// }