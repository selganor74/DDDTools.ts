import {IKeyValueObject} from "../Entity/IKeyValueObject";
import {IEntity} from "../Entity/IEntity";

// namespace DDDTools.Aggregate {

export interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
        extends IEntity<T, TKey> {

        getRevisionId(): number
        incrementRevisionId();

        perfectlyMatch(another: IAggregateRoot<T, TKey>): boolean;
}
// }