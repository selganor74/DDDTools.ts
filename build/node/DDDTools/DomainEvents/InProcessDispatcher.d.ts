/// <reference path="IDomainEvent.d.ts" />
/// <reference path="IEventHandler.d.ts" />
/// <reference path="../Utils/SimpleGuid.d.ts" />
declare namespace DDDTools.DomainEvents {
    class InProcessDispatcher {
        private delegatesRegistry;
        clear(): void;
        registerHandler(eventTypeName: string, handler: IEventHandler): void;
        unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        dispatch(event: IDomainEvent): void;
        private buildErrorMessage(Errors);
    }
}
