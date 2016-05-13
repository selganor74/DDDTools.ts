import { IDomainEvent } from "./IDomainEvent";
import { IDispatcher } from "./IDispatcher";
import { IEventHandler } from "./IEventHandler";
export declare class DomainDispatcher {
    private static dispatcherImplementation;
    static setDispatcherImplementation(dispatcher: IDispatcher): void;
    static registerHandler(eventTypeName: string, handler: IEventHandler): void;
    static unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
    static dispatch(event: IDomainEvent): void;
}
