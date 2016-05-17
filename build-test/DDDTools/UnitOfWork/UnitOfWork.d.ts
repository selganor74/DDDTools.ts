/// <reference path="../Aggregate/BaseAggregateRoot.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="../Repository/IRepository.d.ts" />
/// <reference path="../Serialization/Serializer.d.ts" />
/// <reference path="../DomainEvents/InProcessDispatcher.d.ts" />
/// <reference path="../DomainEvents/IDomainEvent.d.ts" />
/// <reference path="../DomainEvents/IEventHandler.d.ts" />
/// <reference path="IdentityMap.d.ts" />
/// <reference path="ObjectDeletedEvent.d.ts" />
/// <reference path="ObjectRetrievedEvent.d.ts" />
/// <reference path="ObjectSavedEvent.d.ts" />
/// <reference path="UnitOfWorkErrors.d.ts" />
declare namespace DDDTools.UnitOfWork {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IRepository = Repository.IRepository;
    import IEventHandler = DomainEvents.IEventHandler;
    class UnitOfWork<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        private idMap;
        private repository;
        private dispatcher;
        constructor(repository: IRepository<T, TKey>);
        getById(key: TKey): T;
        deleteById(key: TKey): void;
        saveAll(): void;
        registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;
        private processDeletedItem(key);
        private processNewOrModifiedItem(key);
        private raiseEvent(event);
        private removeById(key);
    }
}
