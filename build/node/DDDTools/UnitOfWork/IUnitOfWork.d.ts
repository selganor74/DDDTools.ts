/// <reference path="../Aggregate/IAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="../DomainEvents/IEventHandler.d.ts" />
declare namespace DDDTools.UnitOfWork {
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IEventHandler = DomainEvents.IEventHandler;
    interface IUnitOfWork<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById(key: TKey): T;
        deleteById(key: TKey): void;
        saveAll(): void;
        registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;
    }
}
