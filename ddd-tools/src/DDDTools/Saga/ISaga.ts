namespace DDDTools.Saga {

    export interface ISaga {
        /**
         * setup the saga's event handlers.
         */
        start(): void;

        /**
         * deregisters all of the event handlers registered by the saga
         */
        stop(): void;

        /**
         * recovers all the "still running sagas"
         */
        recover(): void;
    }
} 