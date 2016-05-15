import { IPersistable } from "../PersistableObject/IPersistable";
import { IEquatable } from "../CommonInterfaces/IEquatable";
export interface IValueObject<T> extends IEquatable<T>, IPersistable {
}
