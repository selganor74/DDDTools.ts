/// <reference path="../../../typings/browser.d.ts"/>

/// <reference path="../../../build/browser/ddd-tools.d.ts" />

namespace CdC.Tests.RepAsync {

    import Guid = DDDTools.ValueObjects.Guid;
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import Errors = DDDTools.Repository.Errors;
    import InMemoryRepositoryAsync = DDDTools.Repository.InMemoryRepositoryAsync;
    import Factory = DDDTools.PersistableObject.Factory;

    import FactoryErrors = DDDTools.PersistableObject.Errors;


    // Defines a class that will not be registered wit the types factory
    export class NotRegistered extends BaseValueObject<NotRegistered> {
        __typeName = "NotRegistered";
        __typeVersion = "v1";
    }

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

        public anotherDate = new Date();

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

        // Used to test exceptions in object reconstitution.
        public aNotRegisteredInstance: NotRegistered = undefined;

        public aNullReference = null;
        public anUndefinedReference = undefined;
        public aDate = new Date();

        __typeName = "CdC.Tests.TestAggregate";
        __typeVersion = "v1";

        aTestProperty: string = "a test value !";
        constructor() {
            super();
        }
    }

    class TestRepository extends InMemoryRepositoryAsync<TestAggregate, Key> {

        private static managedTypeName = "CdC.Tests.TestAggregate";

        constructor() {
            super(TestRepository.managedTypeName);
        }
    }

    beforeEach(() => {

        Factory.registerType("CdC.Tests.Key", "v1", Key);
        Factory.registerType("CdC.Tests.ChildEntity", "v1", ChildEntity);
        Factory.registerType("CdC.Tests.TestAggregate", "v1", TestAggregate);

    });

    describe("InMemoryRepositoryAsync", () => {

        it("It must be possible to instantiate a Repository class", () => {
            var repo = new TestRepository();
            expect(repo instanceof TestRepository).toEqual(true);
        });

        it("It must throw 'KeyNotSet' when saving an entity without key set", (done) => {
            var repo = new TestRepository();

            var item = new TestAggregate();
            repo.save(item).then(
                () => {
                    expect(false).toBeTruthy();
                    done();
                },
                (e) => {
                    expect(e.name).toEqual(Errors.KeyNotSet)
                    done();
                }
            );
        });

        it("It must be possible to save an entity with the key set", (done) => {
            var repo = new TestRepository();

            var item = new TestAggregate();
            repo.save(item).then(
                () => {
                    expect(false).toBeTruthy();
                    done();
                },
                (e) => {
                    expect(e.name).toEqual(Errors.KeyNotSet)
                    done();
                }
            );
        });

        it("it should throw ItemNotFound if a key is not present in the repository", (done) => {
            var repo = new TestRepository();

            var item = new TestAggregate();
            var key = new Key();
            var key2 = new Key();
            item.setKey(key);

            repo.save(item).then(
                () => {
                    return repo.getById(key2)
                }
            ).then(
                (returned) => {
                    expect(false).toBeTruthy("We should not be here");
                    done();
                },
                (err) => {
                    expect(err.name).toEqual(Errors.ItemNotFound);
                    done();
                });
        });

        it("It must correctly reconstitute a Date", (done) => {
            var repo = new TestRepository();

            var item = new TestAggregate();
            var key = new Key();
            item.setKey(key);

            var testDate = new Date();
            item.aDate = testDate;

            repo.save(item).then(
                () => {
                    return repo.getById(key);
                }
            ).then(
                (reloaded) => {
                    expect(reloaded.aDate instanceof Date).toBeTruthy("aDate is not an instance of Date.");
                    expect(reloaded.aDate).toEqual(testDate, "aDate is not evaluated as the pre save value.");
                    done();
                },
                (err) => {
                    expect(false).toBeTruthy("Exception while saving or retrieving an item. " + JSON.stringify(err));
                    done();
                })
        });

        it("It must correctly reconstitute an array", (done) => {
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
            repo.save(item).then(
                () => {
                    // console.log("Salvato");
                    repo.getById(key).then(
                        (reloaded) => {
                            // TODO The following test started to fail after getting back to namespaces...
                            // expect(reloaded instanceof TestAggregate).toBeTruthy("Reconstituted object is not an instance of the original type.");
                            expect(Array.isArray(reloaded.arrayOfEntities)).toBeTruthy("Property arrayOfEntities is not an Array");
                            expect(reloaded.arrayOfEntities.length).toEqual(numberOfElementsToAdd, "Property arrayOfEntities does not contain " + numberOfElementsToAdd + " elements");
                            for (var t = 0; t < numberOfElementsToAdd; t++) {
                                var ce = reloaded.arrayOfEntities[t];
                                expect(Array.isArray(ce.arrayOfKeys)).toBeTruthy("Property arrayOfKeys is not an Array");
                                expect(ce.arrayOfKeys.length).toEqual(numberOfElementsToAdd, "Property arrayOfKeys does not contain " + numberOfElementsToAdd + " elements");
                            }
                            done();
                        },
                        (e) => {
                            expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                            done();
                        }
                    );
                },
                (e) => {
                    expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                    done();
                }
            );
        });

        it("It must correctly reconstitute 'anonymous' objects.", (done) => {
            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;
            var item = new TestAggregate();
            var key = new Key();
            item.setKey(key);

            var anotherEntity = new TestAggregate();
            anotherEntity.setKey(new Key());

            item.anonymousObject.anotherEntity = anotherEntity;
            item.anonymousObject.aNumberType = 42;

            repo.save(item).then(
                () => {
                    repo.getById(key).then(
                        (reloaded) => {
                            // TODO The following test started to fail after getting back to namespaces.    
                            // expect(reloaded.anonymousObject.anotherEntity instanceof TestAggregate).toBeTruthy("Reconstituted object is not an instance of the original type.");
                            expect(reloaded.anonymousObject.aNumberType).toEqual(42, "Property aNumberType was not correctly reconstituted.");
                            done();
                        },
                        (e) => {
                            expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message)
                            done();
                        }
                    );
                },
                (e) => {
                    expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message)
                    done();
                }
            );
        });

        it("It must correctly reconstitute references to the same instance.", (done) => {

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

            repo.save(item).then(
                () => {
                    repo.getById(key).then(
                        (reloaded) => {
                            expect(reloaded.anObjectReference).toEqual(reloaded.anotherObjectReference);
                            done();
                        },
                        (e) => {
                            expect(false).toBeTruthy("Exception while saving or retrieving the item. " + e.message)
                            done();
                        }
                    );
                },
                (e) => {
                    expect(false).toBeTruthy("Exception while saving or retrieving the item. " + e.message)
                    done();
                }
            );
        });

        it("RevisionId must be incremented only if object to be saved differs from object saved", (done) => {

            var repo = new TestRepository();
            var e = new TestAggregate();
            e.setKey(new Key());
            e.aTestProperty = "Before saving...";

            expect(e.getRevisionId()).toEqual(0);

            repo.save(e).then(() => {
                // RevisionId should not be incremented if item was new!
                expect(e.getRevisionId()).toEqual(1);
                return repo.save(e);
            }).then(() => {
                expect(e.getRevisionId()).toEqual(1);
                e.aTestProperty = "... after saving";
                return repo.save(e);
            }).then(() => {
                expect(e.getRevisionId()).toEqual(2);
                done();
            }, (err) => {
                expect(false).toBeTruthy("Exception while saving or retrieving the item. " + err.message)
                done();
            });
        });

        it("RevisionId must NOT be incremented if using 'replace' method.", (done) => {
            // pending("Need to refactor IPErsistable to add functions for State Comparison.");

            var repo = new TestRepository();
            var e = new TestAggregate();
            e.setKey(new Key());
            e.aTestProperty = "Before saving...";

            expect(e.getRevisionId()).toEqual(0);

            repo.save(e).then(() => {
                // RevisionId should not be incremented if item was new!
                expect(e.getRevisionId()).toEqual(1);
                return repo.save(e);
            }).then(() => {
                expect(e.getRevisionId()).toEqual(1);
                e.aTestProperty = "... after saving";
                return repo.replace(e);
            }).then(() => {
                expect(e.getRevisionId()).toEqual(1);
                done();
            }, (err) => {
                expect(false).toBeTruthy("Exception while saving or retrieving the item. " + err.message)
                done();
            });
        });

        it("Exception thrown by item reconstitution, must be catched in the error function of the returned promise", (done) => {

            var repo = new TestRepository();
            var e = new TestAggregate();
            var key = new Key();
            e.setKey(key);
            e.aTestProperty = "Before saving...";
            e.aNotRegisteredInstance = new NotRegistered();

            repo.save(e).then(
                () => {
                    repo.getById(key).then(
                        (value) => {
                            expect(false).toBeTruthy("We should not have been here!");
                            done();
                        },
                        (err) => {
                            // console.log(JSON.stringify(err));
                            expect(err.name).toEqual(FactoryErrors.TypeNotRegistered);
                            expect(true).toBeTruthy();
                            done();
                        }
                    );
                },
                (err) => {
                    expect(false).toBeTruthy("We should not have been here!");
                    done();
                }
            );
        });

        it("When saving a 'stale' item (__revisionId lower than saved version's __revisionId) an Exception must be thrown.", (done) => {

            var repo = new TestRepository();
            var e = new TestAggregate();
            var key = new Key();
            e.setKey(key);
            e.aTestProperty = "Before saving...";

            repo.save(e).then(
                () => {
                    var f = new TestAggregate();
                    f.setKey(key);
                    f.aTestProperty = "Before saving...";
                    return repo.save(f);
                }
            ).then(
                () => {
                    expect(false).toBeTruthy("This save should not be succesful!");
                    done();
                },
                (err) => {
                    expect(err instanceof Error).toBeTruthy("Should have been returned an error.");
                    expect(err.name).toEqual(Errors.SavingOldObject);
                    done();
                });
        });
    });
}