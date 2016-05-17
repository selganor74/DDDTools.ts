/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Entity/IEntity.ts" />

// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {IEntity} from "../Entity/IEntity";

namespace DDDTools.Aggregate {

        import IKeyValueObject = Entity.IKeyValueObject;
        import IEntity = Entity.IEntity;

        export interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
                extends IEntity<T, TKey> {

                getRevisionId(): number
                incrementRevisionId(): void;

                perfectlyMatch(another: IAggregateRoot<T, TKey>): boolean;
        }
}