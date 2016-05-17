/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="../Entity/BaseEntity.d.ts" />
/// <reference path="IAggregateRoot.d.ts" />
/// <reference path="../Entity/IEntity.d.ts" />
declare namespace DDDTools.Aggregate {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import IEntity = Entity.IEntity;
    abstract class BaseAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseEntity<T, TKey> implements IAggregateRoot<T, TKey>, IEntity<T, TKey> {
        private __revisionId;
        getRevisionId(): number;
        incrementRevisionId(): void;
        perfectlyMatch(other: BaseAggregateRoot<T, TKey>): boolean;
    }
}
