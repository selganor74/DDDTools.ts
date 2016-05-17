/// <reference path="IDomainEvent.d.ts" />
/// <reference path="IDispatcher.d.ts" />
/// <reference path="IEventHandler.d.ts" />
declare namespace DDDTools.DomainEvents {
    class DomainDispatcher {
        private static dispatcherImplementation;
        static setDispatcherImplementation(dispatcher: IDispatcher): void;
        static registerHandler(eventTypeName: string, handler: IEventHandler): void;
        static unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
        static dispatch(event: IDomainEvent): void;
    }
}
