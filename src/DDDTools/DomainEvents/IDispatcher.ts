/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IEventHandler.ts" />

// import {IDomainEvent} from "./IDomainEvent";
// import {IEventHandler} from "./IEventHandler";

namespace DDDTools.DomainEvents {

    import IPromise = Repository.IPromise;

    export interface IDispatcher {
        registerHandler(eventTypeName: string, handler: IEventHandler, scope?: any);
        unregisterHandler(eventTypeName: string, handler: IEventHandler);
        dispatch(event: IDomainEvent): IPromise<any>;
    }
}