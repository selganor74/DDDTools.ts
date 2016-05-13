import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { BaseEntity } from "../Entity/BaseEntity";
import { IAggregateRoot } from "./IAggregateRoot";
export declare abstract class BaseAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseEntity<T, TKey> implements IAggregateRoot<T, TKey> {
    private __revisionId;
    getRevisionId(): number;
    incrementRevisionId(): void;
    perfectlyMatch(other: BaseAggregateRoot<T, TKey>): boolean;
}
