namespace DDDTools.StateMachine {
    
    export interface IStateMachine<
        /**
         * An enum or string literal representing the possible statuses of the machine
         */
        TStatuses, 
        /**
         * An enum or string literal representing the possible events
         */
        TEvents
    > {
        /**
         * Will throw an exception if isEventValid returns false, otherwise it will advance the machine to the next status.
         */
        processEvent(event: TEvents): void;

        /**
         * Returns true if the event is valid for the current status.
         */
        isEventValidForCurrentStatus(event: TEvents): boolean;

        /**
         * Returns the current status of the machine
         */
        getCurrentStatus(): TStatuses;

        /**
         * Returns the previous status of the machine
         */
        getPreviousStatus(): TStatuses;
    }
}