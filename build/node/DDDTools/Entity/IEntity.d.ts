/// <reference path="../CommonInterfaces/IEquatable.d.ts" />
/// <reference path="../PersistableObject/IPersistable.d.ts" />
/// <reference path="IKeyValueObject.d.ts" />
declare namespace DDDTools.Entity {
    import IEquatable = CommonInterfaces.IEquatable;
    import IPersistable = PersistableObject.IPersistable;
    interface IEntity<T, TKey extends IKeyValueObject<TKey>> extends IEquatable<T>, IPersistable {
        getKey(): TKey;
        setKey(key: TKey): void;
    }
}
