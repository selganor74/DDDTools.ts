/// <reference path="IValueObject.d.ts" />
/// <reference path="../PersistableObject/BasePersistableObject.d.ts" />
/// <reference path="../Serialization/Serializer.d.ts" />
declare namespace DDDTools.ValueObject {
    import BasePersistableObject = PersistableObject.BasePersistableObject;
    abstract class BaseValueObject<T> extends BasePersistableObject implements IValueObject<T> {
        constructor();
        equals(item: T): boolean;
    }
}
