/// <reference path="IEntity.ts"/>

namespace DDDTools {
	export interface IAggregateRoot {
        raiseEvent(event: IDomainEvent);
        
        registerEventHandlers();
        unregisterEventHandlers();
	}
}