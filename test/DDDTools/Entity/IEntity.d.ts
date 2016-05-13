import { IEquatable } from "../CommonInterfaces/IEquatable";
import { IPersistable } from "../PersistableObject/IPersistable";
import { IKeyValueObject } from "./IKeyValueObject";
export interface IEntity<T, TKey extends IKeyValueObject<TKey>> extends IEquatable<T>, IPersistable {
    getKey(): TKey;
    setKey(key: TKey): void;
}
