/// <reference path="IDomainEvent.d.ts" />
/// <reference path="IEventHandler.d.ts" />
declare namespace DDDTools.DomainEvents {
    interface IDispatcher {
        registerHandler(eventTypeName: string, handler: IEventHandler): any;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): any;
        dispatch(event: IDomainEvent): any;
    }
}
