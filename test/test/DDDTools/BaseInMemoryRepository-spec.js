var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/ValueObjects/Guid", "../../DDDTools/Entity/BaseEntity", "../../DDDTools/ValueObject/BaseValueObject", "../../DDDTools/Aggregate/BaseAggregateRoot", "../../DDDTools/Repository/Errors", "../../DDDTools/Repository/BaseInMemoryRepository"], function (require, exports, Guid_1, BaseEntity_1, BaseValueObject_1, BaseAggregateRoot_1, Errors_1, BaseInMemoryRepository_1) {
    "use strict";
    var CdC;
    (function (CdC) {
        var Tests;
        (function (Tests) {
            var Key = (function (_super) {
                __extends(Key, _super);
                function Key() {
                    _super.call(this);
                    this.__typeName = "CdC.Tests.Key";
                    this.__typeVersion = "v1";
                    this.id = Guid_1.Guid.generate();
                }
                Key.prototype.toString = function () {
                    return this.id.toString();
                };
                return Key;
            }(BaseValueObject_1.BaseValueObject));
            Tests.Key = Key;
            var ChildEntity = (function (_super) {
                __extends(ChildEntity, _super);
                function ChildEntity() {
                    _super.call(this);
                    this.arrayOfKeys = [];
                    this.__typeName = "CdC.Tests.ChildEntity";
                    this.__typeVersion = "v1";
                }
                return ChildEntity;
            }(BaseEntity_1.BaseEntity));
            Tests.ChildEntity = ChildEntity;
            var TestAggregate = (function (_super) {
                __extends(TestAggregate, _super);
                function TestAggregate() {
                    _super.call(this);
                    this.arrayOfEntities = [];
                    this.anonymousObject = {};
                    this.anObjectReference = {};
                    this.anotherObjectReference = {};
                    this.__typeName = "CdC.Tests.TestAggregate";
                    this.__typeVersion = "v1";
                    this.aTestProperty = "a test value !";
                }
                return TestAggregate;
            }(BaseAggregateRoot_1.BaseAggregateRoot));
            Tests.TestAggregate = TestAggregate;
            var TestRepository = (function (_super) {
                __extends(TestRepository, _super);
                function TestRepository() {
                    _super.call(this, TestRepository.managedTypeName);
                }
                TestRepository.managedTypeName = "CdC.Tests.TestAggregate";
                return TestRepository;
            }(BaseInMemoryRepository_1.BaseInMemoryRepository));
            describe("BaseInMemoryRepository", function () {
                it("It must be possible to instantiate a Repository class", function () {
                    var repo = new TestRepository();
                    expect(repo instanceof TestRepository).toEqual(true);
                });
                it("It must throw 'KeyNotSet' when saving an entity without key set", function () {
                    var repo = new TestRepository();
                    var item = new TestAggregate();
                    try {
                        repo.save(item);
                        expect(false).toBeTruthy();
                    }
                    catch (e) {
                        expect(e.name).toEqual(Errors_1.Errors.KeyNotSet);
                    }
                });
                it("It must be possible to save an entity with the key set", function () {
                    var repo = new TestRepository();
                    var item = new TestAggregate();
                    try {
                        repo.save(item);
                        expect(false).toBeTruthy();
                    }
                    catch (e) {
                        expect(e.name).toEqual(Errors_1.Errors.KeyNotSet);
                    }
                });
                it("it should throw ItemNotFound if a key is not present in the repository", function () {
                    var repo = new TestRepository();
                    var item = new TestAggregate();
                    var key = new Key();
                    var key2 = new Key();
                    item.setKey(key);
                    repo.save(item);
                    expect(function () { repo.getById(key2); }).toThrow(new Error(Errors_1.Errors.ItemNotFound));
                });
                it("It must correctly reconstitute an array", function () {
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
                        var reloaded = repo.getById(key);
                    }
                    catch (e) {
                        expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
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
                it("It must correctly reconstitute 'anonymous' objects.", function () {
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
                    }
                    catch (e) {
                        expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                    }
                    expect(reloaded.anonymousObject.anotherEntity instanceof TestAggregate).toBeTruthy("Reconstituted object is not an instance of the original type.");
                    expect(reloaded.anonymousObject.aNumberType).toEqual(42, "Property aNumberType was not correctly reconstituted.");
                });
                it("It must correctly reconstitute references to the same instance.", function () {
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
                    }
                    catch (e) {
                        expect(false).toBeTruthy("Exception while saving or retrieving the item. " + e.message);
                    }
                    expect(reloaded.anObjectReference).toEqual(reloaded.anotherObjectReference);
                });
                it("RevisionId must be incremented only if object to be saved differs from object saved", function () {
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
        })(Tests = CdC.Tests || (CdC.Tests = {}));
    })(CdC || (CdC = {}));
});
//# sourceMappingURL=BaseInMemoryRepository-spec.js.map