/// <reference path="IKeyValueObject.ts" />
/// <reference path="IAggregateRoot.ts" />
/// <reference path="DomainEvents/Dispatcher.ts" />

namespace DDDTools {

    import Dispatcher = DomainEvents.Dispatcher;

    export abstract class BaseAggregateRoot<
        T extends IEntity<T, TKey>,
        TKey extends IKeyValueObject<TKey>
        >
        extends BaseEntity<T, TKey>
        implements IAggregateRoot<T, TKey>
    {
        public raise(event: IDomainEvent) {
            Dispatcher.dispatch(event);
        };

        public abstract registerEvents();

        public abstract unregisterEvents();

    }
}