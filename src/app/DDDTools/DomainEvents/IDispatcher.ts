/// <reference path="IDomainEvent.ts" />

namespace DDDTools.DomainEvents {
    export interface IDispatcher {
        registerHandler(eventTypeName: string, handler: IEventHandler);
        unregisterHandler(eventTypeName: string, handler: IEventHandler);
        dispatch(event: IDomainEvent);        
    }
}