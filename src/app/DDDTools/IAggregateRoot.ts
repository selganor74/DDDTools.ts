/// <reference path="IEntity.ts"/>

namespace DDDTools {
	export interface IAggregateRoot {
        raise(event: IDomainEvent);
        registerEvents();
        unregisterEvents();
	}
}