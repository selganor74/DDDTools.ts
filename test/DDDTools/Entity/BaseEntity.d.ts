import { BasePersistableObject } from "../PersistableObject/BasePersistableObject";
import { IEntity } from "./IEntity";
import { IKeyValueObject } from "./IKeyValueObject";
export declare abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BasePersistableObject implements IEntity<T, TKey> {
    private key;
    private raiseEvent(event);
    getKey(): TKey;
    setKey(key: TKey): void;
    equals(item: T): boolean;
}
