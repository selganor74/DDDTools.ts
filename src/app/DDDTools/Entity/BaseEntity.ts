/// <reference path="../ValueObject/IValueObject.ts"/>
/// <reference path="IEntity.ts"/>
/// <reference path="../PersistableObject/BasePersistableObject.ts"/>
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />

/**
 * Classes and interfaces to implement an Entity, a persistable object. 
 */
namespace DDDTools.Entity {
	
	import BasePersistableObject = PersistableObject.BasePersistableObject;
	import IDomainEvent = DomainEvents.IDomainEvent;
	import DomainDispatcher = DomainEvents.DomainDispatcher;
	
	export abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> 
			extends BasePersistableObject {
				
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
		
		public equals(item: T) : boolean {
			if (!item) {
				return false;
			}
			return item.getKey().equals( this.getKey() );
		}		
	}
}