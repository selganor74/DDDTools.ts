/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../../DDDTools/Repository/BaseInMemoryRepository.d.ts" />
/// <reference path="../../DDDTools/Aggregate/BaseAggregateRoot.d.ts" />
/// <reference path="../../DDDTools/Aggregate/IAggregateRoot.d.ts" />
/// <reference path="../../DDDTools/ValueObjects/Guid.d.ts" />
/// <reference path="../../DDDTools/UnitOfWork/UnitOfWork.d.ts" />
/// <reference path="../../DDDTools/Repository/IRepository.d.ts" />
/// <reference path="../../DDDTools/DomainEvents/IDomainEvent.d.ts" />
/// <reference path="../../DDDTools/DomainEvents/IEventHandler.d.ts" />
/// <reference path="../../DDDTools/UnitOfWork/ObjectSavedEvent.d.ts" />
/// <reference path="../../DDDTools/UnitOfWork/ObjectDeletedEvent.d.ts" />
/// <reference path="../../DDDTools/UnitOfWork/ObjectRetrievedEvent.d.ts" />
/// <reference path="../../DDDTools/UnitOfWork/Events.d.ts" />
/// <reference path="../../DDDTools/UnitOfWork/UnitOfWorkErrors.d.ts" />
/// <reference path="../../DDDTools/Repository/Errors.d.ts" />
/// <reference path="../../DDDTools/PersistableObject/Factory.d.ts" />
declare namespace CdC.Tests.ForUnitOfWork {
    import BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import Guid = DDDTools.ValueObjects.Guid;
    import UnitOfWork = DDDTools.UnitOfWork.UnitOfWork;
    import IRepository = DDDTools.Repository.IRepository;
    class TestKey extends Guid {
        constructor();
    }
    class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {
        constructor();
        private aTestProperty;
        setATestProperty(value: string): void;
        getATestProperty(): string;
    }
    class TestRepository extends BaseInMemoryRepository<TestAggregate, TestKey> {
    }
    class TestUoW extends UnitOfWork<TestAggregate, TestKey> {
        constructor(repo: IRepository<TestAggregate, TestKey>);
    }
}
