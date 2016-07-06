/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Repository/IRepositoryAsync.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />


namespace DDDTools.Saga {

    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;

    import IRepositoryAsync = Repository.IRepositoryAsync;

    export abstract class BaseSaga<
        T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>,
        /**
         * TStatuses must be an enum or a string literal
         */
        TStatuses, 
        /**
         * TEvents must be an enum or a string literal
         */
        TEvents
    > extends BaseAggregateRoot<T,TKey> {
        constructor(
            private repository: IRepositoryAsync<T, TKey>,
            private initialStatus: TStatuses,
            private finalStatuses: TStatuses[]

        ) {
            super();
        }

        /**
         * You must override this function to handle events and saga status
         */
        public abstract triggerEvent(event: TEvents): void;

        public abstract registerEvents(): void;

        public abstract unregisterEvents(): void;

        public start() {
            this.registerEvents();
        }

        public stop() {
            this.unregisterEvents();
        }
    }
}