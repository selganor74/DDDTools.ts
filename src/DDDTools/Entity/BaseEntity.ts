import {BasePersistableObject} from "../PersistableObject/BasePersistableObject";
import {IDomainEvent} from "../DomainEvents/IDomainEvent";
import {DomainDispatcher} from "../DomainEvents/DomainDispatcher";
import {IEntity} from "./IEntity";
import {IKeyValueObject} from "./IKeyValueObject";


/**
 * Classes and interfaces to implement an Entity, a persistable object. 
 */
// namespace DDDTools.Entity {

export abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>>
	extends BasePersistableObject
	implements IEntity<T, TKey> {

	private key: TKey;

	private raiseEvent(event: IDomainEvent) {
		DomainDispatcher.dispatch(event);
	};

	public getKey(): TKey {
		return this.key;
	};

	public setKey(key: TKey): void {
		this.key = key;
	};

	public equals(item: T): boolean {
		if (!item) {
			return false;
		}
		return item.getKey().equals(this.getKey());
	}
}
// }