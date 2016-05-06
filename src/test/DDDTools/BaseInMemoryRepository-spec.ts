/// <reference path="../../../typings/main.d.ts"/>

namespace CdC.Tests {

    import Guid = DDDTools.ValueObjects.Guid;
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import RepoErrors = DDDTools.Repository.RepositoryErrors;
    import BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;

    export class Key extends BaseValueObject<Key> {
        private id: Guid;
        __typeName = "CdC.Tests.Key";
        __typeVersion = "v1";

        constructor() {
            super();
            this.id = Guid.generate();
        }
        toString() {
            return this.id.toString();
        }
    }

    export class ChildEntity extends BaseEntity<ChildEntity, Key> {
        public arrayOfKeys: Key[] = [];
        __typeName = "CdC.Tests.ChildEntity";
        __typeVersion = "v1";

        constructor() {
            super();
        }
    }

    export class TestEntity extends BaseAggregateRoot<TestEntity, Key> {
        public arrayOfEntities: ChildEntity[] = [];
        public anonymousObject: any = {};
        // Used to test objects references reconstitution.
        public anObjectReference: any = {};
        public anotherObjectReference: any = {};

        __typeName = "CdC.Tests.TestEntity";
        __typeVersion = "v1";

        constructor() {
            super();
        }

    }

    class TestRepository extends BaseInMemoryRepository<TestEntity, Key> {

        private static managedTypeName = "CdC.Tests.TestEntity";

        constructor() {
            super(TestRepository.managedTypeName);
        }
    }

    describe("BaseInMemoryRepository", () => {

        it("It must be possible to instantiate a Repository class", () => {
            var repo = new TestRepository();
            expect(repo instanceof TestRepository).toEqual(true);
        });

        it("It must throw 'KeyNotSet' when saving an entity without key set", () => {
            var repo = new TestRepository();

            var item = new TestEntity();
            try {
                repo.save(item);
                expect(false).toBeTruthy();
            } catch (e) {
                expect(e.name).toEqual(RepoErrors.KeyNotSet)
            }
        });

        it("It must be possible to save an entity with the key set", () => {
            var repo = new TestRepository();

            var item = new TestEntity();
            try {
                repo.save(item);
                expect(false).toBeTruthy();
            } catch (e) {
                expect(e.name).toEqual(RepoErrors.KeyNotSet)
            }
        });

        it("it should throw ItemNotFound if a key is not present in the repository", () => {
            var repo = new TestRepository();

            var item = new TestEntity();
            var key = new Key();
            var key2 = new Key();
            item.setKey(key);

            repo.save(item);


            expect(() => { repo.getById(key2) }).toThrow(new Error(RepoErrors.ItemNotFound));

        });

        it("It must correctly reconstitute an array", () => {
            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;

            var item = new TestEntity();
            var key = new Key();
            item.setKey(key);

            for (var i = 0; i < numberOfElementsToAdd; i++) {
                var child = new ChildEntity();
                child.setKey(new Key());
                item.arrayOfEntities.push(child);
                for (var q = 0; q < numberOfElementsToAdd; q++) {
                    child.arrayOfKeys.push(new Key());
                }
            }
            try {
                repo.save(item);
                // console.log("Salvato");
                var reloaded = repo.getById(key);
                // console.log("Recuperato");
            } catch (e) {
                expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message)
            }
            expect(reloaded instanceof TestEntity).toBeTruthy("Reconstituted object is not an instance of the original type.");
            expect(Array.isArray(reloaded.arrayOfEntities)).toBeTruthy("Property arrayOfEntities is not an Array");
            expect(reloaded.arrayOfEntities.length).toEqual(numberOfElementsToAdd, "Property arrayOfEntities does not contain " + numberOfElementsToAdd + " elements");
            for (var t = 0; t < numberOfElementsToAdd; t++) {
                var ce = reloaded.arrayOfEntities[t];
                expect(Array.isArray(ce.arrayOfKeys)).toBeTruthy("Property arrayOfKeys is not an Array");
                expect(ce.arrayOfKeys.length).toEqual(numberOfElementsToAdd, "Property arrayOfKeys does not contain " + numberOfElementsToAdd + " elements");
            }
        });

        it("It must correctly reconstitute 'anonymous' objects.", () => {
            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;
            var item = new TestEntity();
            var key = new Key();
            item.setKey(key);

            var anotherEntity = new TestEntity();
            anotherEntity.setKey(new Key());
            item.anonymousObject.anotherEntity = anotherEntity;
            item.anonymousObject.aNumberType = 42;
            try {
                repo.save(item);
                var reloaded = repo.getById(key);
            } catch (e) {
                expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message)
            }

            expect(reloaded.anonymousObject.anotherEntity instanceof TestEntity).toBeTruthy("Reconstituted object is not an instance of the original type.");
            expect(reloaded.anonymousObject.aNumberType).toEqual(42, "Property aNumberType was not correctly reconstituted.");
        });

        it("It must correctly reconstitute references to the same instance.", () => {

            // pending("Feature non ancora sviluppata");

            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;
            var item = new TestEntity();
            var key = new Key();
            item.setKey(key);

            var anObjectReferencedInMoreThanOneProperty = {
                aProperty: "A test value",
                aCompositeProperty: {
                    aProperty: "Another test value"
                }
            };

            item.anObjectReference      = anObjectReferencedInMoreThanOneProperty;
            item.anotherObjectReference = anObjectReferencedInMoreThanOneProperty;

            expect(item.anObjectReference).toEqual(item.anotherObjectReference);

            try {
                repo.save(item);
                var reloaded = repo.getById(key);
            } catch (e) {
                expect(false).toBeTruthy("Exception while saving or retrieving the item. " + e.message)
            }

            expect(reloaded.anObjectReference).toEqual(reloaded.anotherObjectReference);
            
        });
    })
} 