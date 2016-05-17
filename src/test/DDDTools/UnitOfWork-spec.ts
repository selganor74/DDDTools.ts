/// <reference path="../../../typings/browser.d.ts"/>

/// <reference path="../../DDDTools/Repository/BaseInMemoryRepository.ts" />
/// <reference path="../../DDDTools/Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../../DDDTools/Aggregate/IAggregateRoot.ts" />
/// <reference path="../../DDDTools/ValueObjects/Guid.ts" />
/// <reference path="../../DDDTools/UnitOfWork/UnitOfWork.ts" />
/// <reference path="../../DDDTools/Repository/IRepository.ts" />
/// <reference path="../../DDDTools/DomainEvents/IDomainEvent.ts" />
/// <reference path="../../DDDTools/DomainEvents/IEventHandler.ts" />
/// <reference path="../../DDDTools/UnitOfWork/ObjectSavedEvent.ts" />
/// <reference path="../../DDDTools/UnitOfWork/ObjectDeletedEvent.ts" />
/// <reference path="../../DDDTools/UnitOfWork/ObjectRetrievedEvent.ts" />
/// <reference path="../../DDDTools/UnitOfWork/Events.ts" />
/// <reference path="../../DDDTools/UnitOfWork/UnitOfWorkErrors.ts" />
/// <reference path="../../DDDTools/Repository/Errors.ts" />
/// <reference path="../../DDDTools/PersistableObject/Factory.ts" />

// import {BaseInMemoryRepository} from "../../DDDTools/Repository/BaseInMemoryRepository";
// import {BaseAggregateRoot} from "../../DDDTools/Aggregate/BaseAggregateRoot";
// import {IAggregateRoot} from "../../DDDTools/Aggregate/IAggregateRoot";
// import {Guid} from "../../DDDTools/ValueObjects/Guid";
// import {UnitOfWork} from "../../DDDTools/UnitOfWork/UnitOfWork";
// import {IRepository} from "../../DDDTools/Repository/IRepository";
// import {IDomainEvent} from "../../DDDTools/DomainEvents/IDomainEvent";
// import {IEventHandler} from "../../DDDTools/DomainEvents/IEventHandler";
// import {ObjectSavedEvent} from "../../DDDTools/UnitOfWork/ObjectSavedEvent";
// import {ObjectDeletedEvent} from "../../DDDTools/UnitOfWork/ObjectDeletedEvent";
// import {ObjectRetrievedEvent} from "../../DDDTools/UnitOfWork/ObjectRetrievedEvent";
// import {Events} from "../../DDDTools/UnitOfWork/Events";
// import {UnitOfWorkErrors} from "../../DDDTools/UnitOfWork/UnitOfWorkErrors";
// import {Errors} from "../../DDDTools/Repository/Errors";
// import {Factory} from "../../DDDTools/PersistableObject/Factory";

namespace CdC.Tests.ForUnitOfWork {


    import BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import IAggregateRoot = DDDTools.Aggregate.IAggregateRoot;
    import Guid = DDDTools.ValueObjects.Guid;
    import UnitOfWork = DDDTools.UnitOfWork.UnitOfWork;
    import IRepository = DDDTools.Repository.IRepository;
    import IDomainEvent = DDDTools.DomainEvents.IDomainEvent;
    import IEventHandler = DDDTools.DomainEvents.IEventHandler;
    import ObjectSavedEvent = DDDTools.UnitOfWork.ObjectSavedEvent;
    import ObjectDeletedEvent = DDDTools.UnitOfWork.ObjectDeletedEvent;
    import ObjectRetrievedEvent = DDDTools.UnitOfWork.ObjectRetrievedEvent;
    import Events = DDDTools.UnitOfWork.Events;
    import UnitOfWorkErrors = DDDTools.UnitOfWork.UnitOfWorkErrors;
    import Errors = DDDTools.Repository.Errors;
    import Factory = DDDTools.PersistableObject.Factory;


    export class TestKey extends Guid {
        constructor() {
            super();
            this.__typeName = "CdC.Tests.UnitOfWork.TestKey";
            this.__typeVersion = "v1";
        }
    }

    export class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {
        constructor() {
            super();
            this.__typeName = "CdC.Tests.UnitOfWork.TestAggregate";
            this.__typeVersion = "v1";
        }

        private aTestProperty: string = "Ciao";

        public setATestProperty(value: string) {
            this.aTestProperty = value;
        }

        public getATestProperty(): string {
            return this.aTestProperty;
        }
    }

    export class TestRepository extends BaseInMemoryRepository<TestAggregate, TestKey> {

    }

    export class TestUoW extends UnitOfWork<TestAggregate, TestKey> {
        constructor(repo: IRepository<TestAggregate, TestKey>) {
            super(repo);
        }
    }


    describe("UnitOfWork", () => {

        var repo: TestRepository;
        var keys: TestKey[];
        var aggregates: TestAggregate[];
        var numberOfAggregates: number = 10;
        var uow: TestUoW;

        var initKeys = () => {
            keys = [];
            for (var i = 0; i < numberOfAggregates; i++) {
                keys.push(Guid.generate());
            }
        }

        var initAggregates = (keys: TestKey[]) => {
            aggregates = [];
            for (var i = 0; i < numberOfAggregates; i++) {
                var aggr = new TestAggregate();
                aggr.setKey(keys[i]);
                aggregates.push(aggr);
            }
        }

        var fillRepo = (repo: IRepository<TestAggregate, TestKey>) => {
            for (var i = 0; i < numberOfAggregates; i++) {
                repo.save(aggregates[i]);
            }
        }

        beforeEach(() => {
            
            Factory.registerType("CdC.Tests.UnitOfWork.TestAggregate", "v1", <any>TestAggregate);
            
            repo = new TestRepository("CdC.Tests.UnitOfWork.TestAggregate");
            initKeys();
            initAggregates(keys);
            fillRepo(repo);

            uow = new TestUoW(repo);
        });

        it("It must be possible to instantiate a UnitOfWork for a Repository.", () => {
            expect(uow instanceof TestUoW).toBeTruthy();
        });

        it("It must be possible to get an item as if it came directly from the repo.", () => {
            var fromUoW = uow.getById(keys[0]);
            var fromRepo = repo.getById(keys[0]);

            var uowAsString = JSON.stringify(fromUoW);
            var repoAsString = JSON.stringify(fromRepo);

            expect(uowAsString).toEqual(uowAsString);
        });

        it("When retrieving objects, events of type ObjectRetrieveEvent must be raised.", () => {
            var counter = 0;

            uow.registerHandler(Events.ObjectRetrievedEvent, () => {
                counter++;
            });

            var fromUoW0 = uow.getById(keys[0]);

            var fromUoW1 = uow.getById(keys[1]);

            expect(counter).toEqual(2);
        });

        it("After calling saveAll all Modified objects must be saved into the repository", () => {

            var fromUoW0 = uow.getById(keys[0]);
            var fromUoW1 = uow.getById(keys[1]);
            var counter = 0;

            fromUoW0.setATestProperty("Brutto!");
            fromUoW1.setATestProperty("BBello");

            uow.registerHandler(Events.ObjectSavedEvent, (event: ObjectSavedEvent) => {
                counter++;
            });

            uow.saveAll();

            expect(counter).toEqual(2, "The UoW has not saved exactly 2 object.");

            var fromRepo0 = repo.getById(keys[0]);
            var fromRepo1 = repo.getById(keys[1]);

            expect(fromRepo0.getATestProperty()).toEqual("Brutto!");
            expect(fromRepo1.getATestProperty()).toEqual("BBello");

        });

        it("UnitOfWork must save only effectively changed objects.", () => {

            // loading 2 objects from the UoW ...
            var fromUoW0 = uow.getById(keys[0]);
            var fromUoW1 = uow.getById(keys[1]);
            var counter = 0;

            // ... but editing only one...
            fromUoW1.setATestProperty("BBello");

            /// ... we expect to get only 1 notification from the UoW
            uow.registerHandler(Events.ObjectSavedEvent, (event: ObjectSavedEvent) => {
                counter++;
                expect(event.id).toEqual(keys[1].toString());
            });

            uow.saveAll();

            expect(counter).toEqual(1, "The UoW has not saved exactly 1 object.");
        });

        it("UnitOfWork must delete completely an object only after calling saveAll.", () => {

            var fromUoW0 = uow.getById(keys[0]);
            var fromUoW1 = uow.getById(keys[1]);
            var counter = 0;

            uow.registerHandler(Events.ObjectDeletedEvent, (event: ObjectDeletedEvent) => {
                counter++;
            });

            uow.deleteById(keys[0]);
            uow.deleteById(keys[1]);

            expect(counter).toEqual(0, "Handler triggered before saveAll was called!");

            var fromRepo0 = repo.getById(keys[0]);
            var fromRepo1 = repo.getById(keys[1]);

            // We do expect to still finds the deleted items in the repository.
            expect(fromRepo0).not.toBeNull("Element 0 deleted before saveAll");
            expect(fromRepo1).not.toBeNull("Element 1 deleted before saveAll");

            uow.saveAll();

            expect(counter).toEqual(2, "The UoW has not deleted exactly 2 object.");

            try {
                var fromRepo0 = repo.getById(keys[0]);
                expect(false).toBeTruthy("Item 0 should be no more in the repository");
            } catch (e) {
                // Expected as the item should not be nomore in the repository.
            }

            try {
                var fromRepo1 = repo.getById(keys[1]);
                expect(false).toBeTruthy("Item 1 should be no more in the repository");
            } catch (e) {
                // Expected as the item should not be nomore in the repository.
            }
        });

        it("A deleted item must not be 'retrievable' from the UnitOfWork, even if saveAll was not called", () => {
            var fromUoW = uow.getById(keys[0]);

            uow.deleteById(keys[0]);

            // Before the saveAll we expect to get an Exception from the UnitOfWork ...
            try {
                fromUoW = uow.getById(keys[0]);
                expect(false).toBeTruthy("The element has been marked as deleted, but it is still returned by the UoW.");
            } catch (e) {
                expect(e instanceof Error).toBeTruthy();
                expect(e.name).toEqual(UnitOfWorkErrors.ItemMarkedAsDeleted);
            }

            uow.saveAll();

            // ... while after the saveAll we expect to get an Exception from the underlying Repository ...
            try {
                fromUoW = uow.getById(keys[0]);
                expect(false).toBeTruthy("The element has been marked as deleted and deleted, but it is still returned by the UoW.");
            } catch (e) {
                expect(e instanceof Error).toBeTruthy();
                expect(e.name).toEqual(Errors.ItemNotFound);
            }
        });
    });
}