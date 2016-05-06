/// <reference path="../Entity/IEntity.ts"/>
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />

namespace DDDTools.Aggregate {
        
        import IKeyValueObject = Entity.IKeyValueObject;
        import IEntity = Entity.IEntity;
        import IDomainEvent = DomainEvents.IDomainEvent;
        
	export interface IAggregateRoot<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> 
                 extends IEntity<T, TKey> {
        raiseEvent(event: IDomainEvent);
	}
}