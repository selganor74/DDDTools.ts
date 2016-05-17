/// <reference path="../ValueObject/BaseValueObject.d.ts" />
/// <reference path="IKeyValueObject.d.ts" />
/// <reference path="../PersistableObject/IPersistable.d.ts" />
declare namespace DDDTools.Entity {
    import BaseValueObject = ValueObject.BaseValueObject;
    import IPersistable = PersistableObject.IPersistable;
    abstract class BaseKeyValueObject<T> extends BaseValueObject<T> implements IKeyValueObject<T>, IPersistable {
        constructor();
        abstract toString(): string;
    }
}
