/// <reference path="../../../typings/main.d.ts"/>

namespace CdC.Tests.UnitOfWork {

    import BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import IAggregateRoot = DDDTools.Aggregate.IAggregateRoot;
    import Guid = DDDTools.ValueObjects.Guid;
    import UnitOfWork = DDDTools.UnitOfWork.UnitOfWork;
    import IRepository = DDDTools.Repository.IRepository;
    import IDomainEvent = DDDTools.DomainEvents.IDomainEvent;
    import IEventHandler = DDDTools.DomainEvents.IEventHandler;
    import ObjectSavedEvent = DDDTools.UnitOfWork.ObjectSavedEvent;

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
            for( var i = 0; i < numberOfAggregates; i++) {
                keys.push(Guid.generate());
            }
        }
        
        var initAggregates = (keys: TestKey[]) => {
            aggregates = [];
            for( var i = 0; i < numberOfAggregates; i++) {
                var aggr = new TestAggregate();
                aggr.setKey( keys[i] );
                aggregates.push(aggr);
            }
        }
        
        var fillRepo = (repo: IRepository<TestAggregate,TestKey>) => {
            for (var i = 0; i < numberOfAggregates; i++) {
                repo.save(aggregates[i]);
            }
        }
        
        beforeEach(() => {
            repo = new TestRepository("CdC.Tests.UnitOfWork.TestAggregate");
            initKeys();
            initAggregates(keys);
            fillRepo(repo);
            
            uow = new TestUoW(repo);            
        });

        it("It must be possible to instantiate a UnitOfWork for a Repository.", () => {
            expect( uow instanceof TestUoW).toBeTruthy();
        });

        it("It must be possible to get an item as if it came directly from the repo.", () => {
            var fromUoW = uow.getById(keys[0]);
            var fromRepo = repo.getById(keys[0]);
            
            var uowAsString = JSON.stringify( fromUoW );
            var repoAsString = JSON.stringify( fromRepo );
            
            expect(uowAsString).toEqual(uowAsString);
        });
        
        it("UnitOfWork must save only effectively changed objects.", () => {
            
            pending("UoW still saves everything... but this will change !");
            
            // loading 2 objects from the UoW ...
            var fromUoW1 = uow.getById(keys[0]);
            var fromUoW2 = uow.getById(keys[1]);
            var counter = 0;
            
            // ... but editing only one...
            fromUoW2.setATestProperty("BBello");

            /// ... we expect to get only 1 notification from the UoW
            uow.registerHandler("DDDTools.UnitOfWork.ObjectSavedEvent", (event: ObjectSavedEvent) => {
                counter ++;
                expect(event.id).toEqual(keys[1].toString());
            });
            
            uow.saveAll();
            
            expect(counter).toEqual(1, "The UoW has not saved exactly 1 object.");            
            
        });
    });

}