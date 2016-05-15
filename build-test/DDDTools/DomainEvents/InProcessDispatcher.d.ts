import { IDomainEvent } from "./IDomainEvent";
import { IEventHandler } from "./IEventHandler";
export declare class InProcessDispatcher {
    private delegatesRegistry;
    clear(): void;
    registerHandler(eventTypeName: string, handler: IEventHandler): void;
    unregisterHandler(eventTypeName: string, handler: IEventHandler): void;
    dispatch(event: IDomainEvent): void;
    private buildErrorMessage(Errors);
}
