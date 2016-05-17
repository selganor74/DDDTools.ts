/// <reference path="../PersistableObject/IPersistable.d.ts" />
declare namespace DDDTools.ValueObject {
    import IPersistable = PersistableObject.IPersistable;
    import IEquatable = CommonInterfaces.IEquatable;
    interface IValueObject<T> extends IEquatable<T>, IPersistable {
    }
}
