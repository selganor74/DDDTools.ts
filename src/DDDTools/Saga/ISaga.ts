namespace DDDTools.Saga {

    export interface ISaga {
        start(): void;
        stop(): void;
        recover(): void;
    }
} 