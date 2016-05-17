import { IDomainEvent } from "./IDomainEvent";
import { IEventHandler } from "./IEventHandler";
export interface IDispatcher {
    registerHandler(eventTypeName: string, handler: IEventHandler): any;
    unregisterHandler(eventTypeName: string, handler: IEventHandler): any;
    dispatch(event: IDomainEvent): any;
}
