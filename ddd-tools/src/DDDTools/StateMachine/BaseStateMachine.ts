/// <reference path="IStateMachine.ts" />
/// <reference path="../PersistableObject/BasePersistableObject.ts" />
/// <reference path="../Promises/PromiseHandler.ts" />
/// <reference path="../DomainEvents/IDispatcher.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />

namespace DDDTools.StateMachine {

    import BasePersistableObject = DDDTools.PersistableObject.BasePersistableObject;
    import IDomainEvent = DDDTools.DomainEvents.IDomainEvent;
    import IPromise = DDDTools.Promises.IPromise;
    import PromiseHandler = DDDTools.Promises.PromiseHandler;
    import Factory = DDDTools.PersistableObject.Factory;

    export class HandlerResult {

        constructor(
            public okToChange?: boolean,
            public reason?: string
        ) { }
    }

    export class StateMachineEvent<TStatuses, TEvents> extends BasePersistableObject implements IDomainEvent {
        __typeName = "StateMachineEvent";
        __typeVersion = "v1";

        currentStatus: TStatuses;
        previousStatus: TStatuses;
        destinationStatus: TStatuses;
        processingEvent: TEvents;
    }

    export type EventHandler<TStatuses, TEvents> = (event: StateMachineEvent<TStatuses, TEvents>) => IPromise<HandlerResult>;

    export enum KindsOfEventHandler {
        beforeEnterStatus,
        afterEnterStatus,
        beforeExitStatus,
        afterExitStatus,
        onSuccessfulEventProcessed
    }

    interface ITouchableEventHandler {
        ___handlesEvent: KindsOfEventHandler[];
    }

    export class HandlerCollection<TStatuses, TEvents> extends BasePersistableObject {

        __typeName = "HandlerCollection";
        __typeVersion = "v1";

        private handlers: EventHandler<TStatuses, TEvents>[] = [];

        public registerHandler(handler: EventHandler<TStatuses, TEvents>, eventType: KindsOfEventHandler) {
            if (!this.hasAlreadyBeenRegistered(handler, eventType)) {
                this.touchHandler(handler, eventType);
                this.handlers.push(handler);
            }
        }

        public runHandlers(event: StateMachineEvent<TStatuses, TEvents>): IPromise<HandlerResult> {
            var promises: IPromise<any>[] = [];

            for (var handler of this.handlers) {
                var promise: IPromise<any> = null;
                try {
                    promise = handler(event);
                } catch (e) {
                    var res = new HandlerResult();
                    res.okToChange = false;
                    res.reason = JSON.stringify(e);
                    promise = PromiseHandler.resolve(res);
                }
                promises.push(promise);
            }
            return PromiseHandler.all(promises)
                .then((results) => {
                    var toReturn = new HandlerResult;
                    toReturn.okToChange = true;
                    toReturn.reason = "";

                    for (var p of results) {
                        if (!p.okToChange) {
                            toReturn.okToChange = false;
                            toReturn.reason += p.reason;
                        }
                    }

                    return toReturn;
                });
        }

        private hasAlreadyBeenRegistered(handler: EventHandler<TStatuses, TEvents>, eventType: KindsOfEventHandler) {

            var asTouchable: ITouchableEventHandler = <ITouchableEventHandler>(<any>handler);

            if (!asTouchable.___handlesEvent) {
                return false;
            }

            var alreadyRegisteredForThisEvent = false;

            for (var idx in asTouchable.___handlesEvent) {
                var currentElement = asTouchable.___handlesEvent[idx];
                if (currentElement === eventType) {
                    alreadyRegisteredForThisEvent = true;
                    break;
                }
            }

            return alreadyRegisteredForThisEvent;
        }

        private touchHandler(handler: EventHandler<TStatuses, TEvents>, eventType: KindsOfEventHandler) {
            var asTouchable: ITouchableEventHandler = <ITouchableEventHandler>(<any>handler);

            if (!asTouchable.___handlesEvent) {
                asTouchable.___handlesEvent = [];
            }


            if (!this.hasAlreadyBeenRegistered(handler, eventType)) {
                asTouchable.___handlesEvent.push(eventType);
            }
        }

    }

    export type StateMachineDefinition<TStatuses, TEvents> = { [event: string]: { [fromStatus: string]: TStatuses } };


    /**
     * Please, remember to set __typeName and __typeVersion in your derived types !
     * __typeName and __typeVersion should be set on the constructor too, but this mean changing a lot of things.
     */
    export class BaseStateMachine<TStatuses, TEvents> extends BasePersistableObject implements IStateMachine<TStatuses, TEvents> {

        private currentStatus: TStatuses = null;
        private previousStatus: TStatuses = null;
        private beforeEnterStatusHandlers = new HandlerCollection();
        private afterEnterStatusHandlers = new HandlerCollection();
        private beforeExitStatusHandlers = new HandlerCollection();
        private afterExitStatusHandlers = new HandlerCollection();
        private onSuccessfulEventProcessedHandlers = new HandlerCollection();

        constructor(initialStatus: TStatuses,
            protected stateMachineDefinition?: StateMachineDefinition<TStatuses, TEvents>
        ) {
            super();

            if (!stateMachineDefinition) {
                var smd = StateMachineDefinitionRegistry.getStateMachine(this.__typeName, this.__typeVersion);
                if (smd) {
                    this.stateMachineDefinition = smd;
                }
            }

            this.currentStatus = initialStatus;

            // TODO: The components registration should be kept somewhere else... or make the component's type registration in the constructor become a rule.
            try {
                Factory.registerType("HandlerCollection", "v1", HandlerCollection);
            } catch(e) {
                // The type has already registered, so nothing to do.
            }     
        }

        /**
         * Overrides the PersistableObject's setState to avoid restoring a collection of "fake handlers"'
         */
        public setState(state: any) {
            super.setState(state);

            // Allows to use the state machines definition put on the registry.
            // Doing this way it is possible to change a state machine without having to 
            // Setup an upgrade process. T
            // At this moment the registrydefinition is optional, so this version of the 
            // state machine is fully compatible with the previous version.
            var smd = StateMachineDefinitionRegistry.getStateMachine(this.__typeName, this.__typeVersion);
            if (smd) {
                this.stateMachineDefinition = smd;
            }

            // We need to reinitialize the handlers collection. as if they were 
            this.onSuccessfulEventProcessedHandlers = new HandlerCollection();
            this.beforeEnterStatusHandlers = new HandlerCollection();
            this.afterEnterStatusHandlers = new HandlerCollection();
            this.beforeExitStatusHandlers = new HandlerCollection();
            this.afterExitStatusHandlers = new HandlerCollection();
        }

        public registerHandler(handler: EventHandler<TStatuses, TEvents>, kindOfHandler: KindsOfEventHandler) {
            switch (kindOfHandler) {
                case KindsOfEventHandler.afterEnterStatus: {
                    this.afterEnterStatusHandlers.registerHandler(handler, kindOfHandler);
                    break;
                }
                case KindsOfEventHandler.beforeEnterStatus: {
                    this.beforeEnterStatusHandlers.registerHandler(handler, kindOfHandler);
                    break;
                }
                case KindsOfEventHandler.afterExitStatus: {
                    this.afterExitStatusHandlers.registerHandler(handler, kindOfHandler);
                    break;
                }
                case KindsOfEventHandler.beforeExitStatus: {
                    this.beforeExitStatusHandlers.registerHandler(handler, kindOfHandler);
                    break;
                }

            }
        }

        /**
         * Gets the current status of the State Machine
         */
        public getCurrentStatus() {
            return this.currentStatus;
        }

        /**
         * Gets the previous status of the Machine
         */
        public getPreviousStatus() {
            return this.previousStatus;
        }

        /**
         * Tells if an event is allowed to be processed in the current state
         */
        public isEventValidForCurrentStatus(event: TEvents): boolean {

            if (this.stateMachineDefinition[<any>event][<any>this.currentStatus]) {
                return true;
            }
            return false;
        }

        /**
         * Will cause the state machine to advance to the next status... or throw an exception.
         */
        public processEvent(event: TEvents): IPromise<HandlerResult> {
            if (!this.isEventValidForCurrentStatus(event)) {
                var result = new HandlerResult;
                result.okToChange = false;
                result.reason = "Event '" + event + "' not valid in status " + this.currentStatus + ". If this is not expected, please, check the state machine definition: " + JSON.stringify(this.stateMachineDefinition)
                return PromiseHandler.when(result);
            }

            var nextStatus = this.stateMachineDefinition[<any>event][<any>this.currentStatus];

            var smEvent = new StateMachineEvent<TStatuses, TEvents>();

            smEvent.currentStatus = this.currentStatus;
            smEvent.destinationStatus = nextStatus;
            smEvent.previousStatus = this.previousStatus;
            smEvent.processingEvent = event;

            return this.beforeExitStatusHandlers.runHandlers(smEvent)
                .then((result) => {
                    if (!result.okToChange) {
                        var res = new HandlerResult;
                        res.okToChange = false;
                        res.reason = "State Change interrupted by beforeExitStatusHandler(s) with reason: " + result.reason
                        return PromiseHandler.reject(result);
                    }
                    return this.beforeEnterStatusHandlers.runHandlers(smEvent);
                })
                .then((result) => {
                    if (!result.okToChange) {
                        var res = new HandlerResult;
                        res.okToChange = false;
                        res.reason = "State Change interrupted by beforeEnterStatusHandler(s) with reason: " + result.reason
                        return PromiseHandler.reject(result);
                    }

                    this.previousStatus = this.currentStatus;
                    this.currentStatus = nextStatus;

                    return this.afterExitStatusHandlers.runHandlers(smEvent);
                }).then(() => {
                    return this.afterEnterStatusHandlers.runHandlers(smEvent);
                }).then(() => {
                    return this.onSuccessfulEventProcessedHandlers.runHandlers(smEvent);
                }).catch((reason: HandlerResult) => {
                    // Some Handler decided not to allow the state change, so we simply return why!
                    return PromiseHandler.when(reason);
                });

        }
    }
}