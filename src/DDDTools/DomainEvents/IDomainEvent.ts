import {IPersistable} from "../PersistableObject/IPersistable";
import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

// namespace DDDTools.DomainEvents {
export interface IDomainEvent extends IPersistable, ITypeTracking {

}
// }