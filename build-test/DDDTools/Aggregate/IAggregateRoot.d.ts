/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="../Entity/IEntity.d.ts" />
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import IEntity = Entity.IEntity;
    interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends IEntity<T, TKey> {
        getRevisionId(): number;
        incrementRevisionId(): void;
        perfectlyMatch(another: IAggregateRoot<T, TKey>): boolean;
    }
}
