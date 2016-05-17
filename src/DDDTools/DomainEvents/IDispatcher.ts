/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IEventHandler.ts" />

// import {IDomainEvent} from "./IDomainEvent";
// import {IEventHandler} from "./IEventHandler";

namespace DDDTools.DomainEvents {
    export interface IDispatcher {
        registerHandler(eventTypeName: string, handler: IEventHandler);
        unregisterHandler(eventTypeName: string, handler: IEventHandler);
        dispatch(event: IDomainEvent);
    }
}