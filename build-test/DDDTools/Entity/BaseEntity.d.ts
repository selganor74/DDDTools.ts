/// <reference path="../PersistableObject/BasePersistableObject.d.ts" />
/// <reference path="../DomainEvents/IDomainEvent.d.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.d.ts" />
/// <reference path="IEntity.d.ts" />
/// <reference path="IKeyValueObject.d.ts" />
declare namespace DDDTools.Entity {
    import BasePersistableObject = PersistableObject.BasePersistableObject;
    abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BasePersistableObject implements IEntity<T, TKey> {
        private key;
        private raiseEvent(event);
        getKey(): TKey;
        setKey(key: TKey): void;
        equals(item: T): boolean;
    }
}
