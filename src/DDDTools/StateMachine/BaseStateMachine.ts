/// <reference path="IStateMachine.ts" />
/// <reference path="../PersistableObject/BasePersistableObject.ts" />

namespace DDDTools.StateMachine {

    import BasePersistableObject = DDDTools.PersistableObject.BasePersistableObject;

    export class BaseStateMachine<TStatuses, TEvents> extends BasePersistableObject implements IStateMachine<TStatuses, TEvents> {
        /**
         * Please, remember to set these values in your derived types !
         */
        __typeName = "";
        __typeVersion = "";

        protected currentStatus: TStatuses = null;
        protected previousStatus: TStatuses = null;

        constructor( initialStatus: TStatuses,
                     protected stateMachineDefinition: {[event: string]: {[fromStatus: string]: TStatuses}}             
        ) {
            super();
            this.currentStatus = initialStatus;
        }

        public getCurrentStatus() {
            return this.currentStatus;
        }

        public getPreviousStatus() {
            return this.previousStatus;
        }

        public isEventValidForCurrentStatus(event: TEvents): boolean {

            if (this.stateMachineDefinition[<any>event][<any>this.currentStatus]) {
                return true;
            }
            return false;
        }

        /**
         * Will cause the state machine to advance to the next status... or throw an axception.
         */
        public processEvent(event: TEvents) {
            if (!this.isEventValidForCurrentStatus(event)) {
                throw new Error("Event '" + event + "' not valid in status " + this.currentStatus + ". If this is not expected, please, check the state machine definition: " + JSON.stringify(this.stateMachineDefinition) );
            }

            this.previousStatus = this.currentStatus;
            var nextStatus = this.stateMachineDefinition[<any>event][<any>this.currentStatus];
            this.currentStatus = nextStatus;
        }
    } 
}