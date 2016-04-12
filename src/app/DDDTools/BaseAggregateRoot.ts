/// <reference path="IKeyValueObject.ts" />
/// <reference path="IAggregateRoot.ts" />
/// <reference path="DomainEvents/Dispatcher.ts" />
/// <reference path="BaseEntity.ts" />

namespace DDDTools {

    import Dispatcher = DomainEvents.Dispatcher;
    import IEventHandler = DomainEvents.IEventHandler;

    export abstract class BaseAggregateRoot<
        T extends IEntity<T, TKey>,
        TKey extends IKeyValueObject<TKey>
        >
        extends BaseEntity<T, TKey>
        implements IAggregateRoot
    {
        public raiseEvent(event: IDomainEvent) {
            Dispatcher.dispatch(event);
        };

        public registerEventHandler(eventTypeName: string, eventHandler: IEventHandler) {
            Dispatcher.registerHandler(eventTypeName, eventHandler);
        }
        
        public unregisterEventHandler(eventTypeName: string, eventHandler: IEventHandler) {
            Dispatcher.unregisterHandler(eventTypeName, eventHandler);
        }

        public abstract registerEventHandlers();

        public abstract unregisterEventHandlers();

    }
}