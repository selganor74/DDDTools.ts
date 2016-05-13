import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { IEntity } from "../Entity/IEntity";
export interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends IEntity<T, TKey> {
    getRevisionId(): number;
    incrementRevisionId(): any;
    perfectlyMatch(another: IAggregateRoot<T, TKey>): boolean;
}
