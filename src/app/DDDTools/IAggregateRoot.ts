/// <reference path="IEntity.ts"/>

namespace DDDTools {
	export interface IAggregateRoot<T, TKey extends IKeyValueObject<TKey>> extends IEntity<T,TKey> {
        raise(event: IDomainEvent);
        registerEvents();
        unregisterEvents();
	}
}