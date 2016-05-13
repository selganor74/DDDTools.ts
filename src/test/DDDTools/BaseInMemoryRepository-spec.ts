/// <reference path="../../../typings/browser.d.ts"/>

// import DDDTools = require("./DDDTools")

import {Guid} from "../../DDDTools/ValueObjects/Guid";
import {BaseEntity} from "../../DDDTools/Entity/BaseEntity";
import {BaseValueObject} from "../../DDDTools/ValueObject/BaseValueObject";
import {BaseAggregateRoot} from "../../DDDTools/Aggregate/BaseAggregateRoot";
import {Errors as RepoErrors} from "../../DDDTools/Repository/Errors";
import {BaseInMemoryRepository} from "../../DDDTools/Repository/BaseInMemoryRepository";
import {TypeRegistry} from "../../DDDTools/PersistableObject/TypeRegistry";
import {Factory} from "../../DDDTools/PersistableObject/Factory";

namespace CdC.Tests {


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

    export class TestAggregate extends BaseAggregateRoot<TestAggregate, Key> {
        public arrayOfEntities: ChildEntity[] = [];
        public anonymousObject: any = {};
        // Used to test objects references reconstitution.
        public anObjectReference: any = {};
        public anotherObjectReference: any = {};

        __typeName = "CdC.Tests.TestAggregate";
        __typeVersion = "v1";

        aTestProperty: string = "a test value !";
        constructor() {
            super();
        }

    }

    class TestRepository extends BaseInMemoryRepository<TestAggregate, Key> {

        private static managedTypeName = "CdC.Tests.TestAggregate";

        constructor() {
            super(TestRepository.managedTypeName);
        }
    }

    beforeEach(() => {
        
        Factory.registerType("CdC.Tests.Key","v1",<any>Key);
        Factory.registerType("CdC.Tests.ChildEntity","v1",<any>ChildEntity);
        Factory.registerType("CdC.Tests.TestAggregate","v1",<any>TestAggregate);
        
    });

    describe("BaseInMemoryRepository", () => {

        it("It must be possible to instantiate a Repository class", () => {
            var repo = new TestRepository();
            expect(repo instanceof TestRepository).toEqual(true);
        });

        it("It must throw 'KeyNotSet' when saving an entity without key set", () => {
            var repo = new TestRepository();

            var item = new TestAggregate();
            try {
                repo.save(item);
                expect(false).toBeTruthy();
            } catch (e) {
                expect(e.name).toEqual(RepoErrors.KeyNotSet)
            }
        });

        it("It must be possible to save an entity with the key set", () => {
            var repo = new TestRepository();

            var item = new TestAggregate();
            try {
                repo.save(item);
                expect(false).toBeTruthy();
            } catch (e) {
                expect(e.name).toEqual(RepoErrors.KeyNotSet)
            }
        });

        it("it should throw ItemNotFound if a key is not present in the repository", () => {
            var repo = new TestRepository();

            var item = new TestAggregate();
            var key = new Key();
            var key2 = new Key();
            item.setKey(key);

            repo.save(item);


            expect(() => { repo.getById(key2) }).toThrow(new Error(RepoErrors.ItemNotFound));

        });

        it("It must correctly reconstitute an array", () => {
            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;

            var item = new TestAggregate();
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
            expect(reloaded instanceof TestAggregate).toBeTruthy("Reconstituted object is not an instance of the original type.");
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
            var item = new TestAggregate();
            var key = new Key();
            item.setKey(key);

            var anotherEntity = new TestAggregate();
            anotherEntity.setKey(new Key());
            item.anonymousObject.anotherEntity = anotherEntity;
            item.anonymousObject.aNumberType = 42;
            try {
                repo.save(item);
                var reloaded = repo.getById(key);
            } catch (e) {
                expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message)
            }

            expect(reloaded.anonymousObject.anotherEntity instanceof TestAggregate).toBeTruthy("Reconstituted object is not an instance of the original type.");
            expect(reloaded.anonymousObject.aNumberType).toEqual(42, "Property aNumberType was not correctly reconstituted.");
        });

        it("It must correctly reconstitute references to the same instance.", () => {

            // pending("Feature non ancora sviluppata");

            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;
            var item = new TestAggregate();
            var key = new Key();
            item.setKey(key);

            var anObjectReferencedInMoreThanOneProperty = {
                aProperty: "A test value",
                aCompositeProperty: {
                    aProperty: "Another test value"
                }
            };

            item.anObjectReference = anObjectReferencedInMoreThanOneProperty;
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

        it("RevisionId must be incremented only if object to be saved differs from object saved", () => {
            // pending("Need to refactor IPErsistable to add functions for State Comparison.");

            var repo = new TestRepository();
            var e = new TestAggregate();
            e.setKey(new Key());
            e.aTestProperty = "Before saving...";

            expect(e.getRevisionId()).toEqual(0);

            repo.save(e);

            expect(e.getRevisionId()).toEqual(1);

            repo.save(e);

            expect(e.getRevisionId()).toEqual(1);

            e.aTestProperty = "... after saving";
            repo.save(e);

            expect(e.getRevisionId()).toEqual(2);
        });
    });
} 