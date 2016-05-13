import { IPersistable } from "../PersistableObject/IPersistable";
import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
export interface IDomainEvent extends IPersistable, ITypeTracking {
}
