var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var BasePersistableObject;
        (function (BasePersistableObject) {
            var v2;
            (function (v2) {
                var BaseEntity = DDDTools.Entity.BaseEntity;
                var A3StepUpgradableItem = (function (_super) {
                    __extends(A3StepUpgradableItem, _super);
                    function A3StepUpgradableItem() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BasePersistableObject.A3StepUpgradableItem";
                        this.__typeVersion = "v2";
                    }
                    A3StepUpgradableItem.prototype.getUpgradedInstance = function (fromInstance) {
                        var state = fromInstance.getState();
                        state.aNewProperty = "upgrader was here";
                        state.__typeVersion = "v2";
                        this.setState(state);
                        return this;
                    };
                    return A3StepUpgradableItem;
                }(BaseEntity));
                v2.A3StepUpgradableItem = A3StepUpgradableItem;
            })(v2 = BasePersistableObject.v2 || (BasePersistableObject.v2 = {}));
        })(BasePersistableObject = Tests.BasePersistableObject || (Tests.BasePersistableObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var BasePersistableObject;
        (function (BasePersistableObject) {
            var v1;
            (function (v1) {
                var BaseEntity = DDDTools.Entity.BaseEntity;
                var TestEntity = (function (_super) {
                    __extends(TestEntity, _super);
                    function TestEntity() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BasePersistableObject.TestEntity";
                        this.__typeVersion = "v1";
                    }
                    return TestEntity;
                }(BaseEntity));
                v1.TestEntity = TestEntity;
                var A3StepUpgradableItem = (function (_super) {
                    __extends(A3StepUpgradableItem, _super);
                    function A3StepUpgradableItem() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BasePersistableObject.A3StepUpgradableItem";
                        this.__typeVersion = "v1";
                    }
                    return A3StepUpgradableItem;
                }(BaseEntity));
                v1.A3StepUpgradableItem = A3StepUpgradableItem;
            })(v1 = BasePersistableObject.v1 || (BasePersistableObject.v1 = {}));
        })(BasePersistableObject = Tests.BasePersistableObject || (Tests.BasePersistableObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var BasePersistableObject;
        (function (BasePersistableObject) {
            var BaseEntity = DDDTools.Entity.BaseEntity;
            var Factory = DDDTools.PersistableObject.Factory;
            var Upgrader = DDDTools.PersistableObject.Upgrader;
            var Errors = DDDTools.PersistableObject.Errors;
            var A3StepUpgradableItem = (function (_super) {
                __extends(A3StepUpgradableItem, _super);
                function A3StepUpgradableItem() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BasePersistableObject.A3StepUpgradableItem";
                    this.__typeVersion = "v3";
                }
                A3StepUpgradableItem.prototype.getUpgradedInstance = function (fromInstance) {
                    var state = fromInstance.getState();
                    state.aNewNewProperty = "upgrader was here";
                    state.__typeVersion = "v3";
                    this.setState(state);
                    return this;
                };
                return A3StepUpgradableItem;
            }(BaseEntity));
            BasePersistableObject.A3StepUpgradableItem = A3StepUpgradableItem;
            var TestEntity = (function (_super) {
                __extends(TestEntity, _super);
                function TestEntity() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BasePersistableObject.TestEntity";
                    this.__typeVersion = "v2";
                }
                TestEntity.prototype.getUpgradedInstance = function (fromInstance) {
                    var state = fromInstance.getState();
                    state.aNewProperty = "upgrader was here";
                    state.__typeVersion = "v2";
                    this.setState(state);
                    return this;
                };
                return TestEntity;
            }(BaseEntity));
            BasePersistableObject.TestEntity = TestEntity;
            var TestEntityNonUpgradable = (function (_super) {
                __extends(TestEntityNonUpgradable, _super);
                function TestEntityNonUpgradable() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BasePersistableObject.TestEntityNonUpgradable";
                    this.__typeVersion = "v1";
                }
                return TestEntityNonUpgradable;
            }(BaseEntity));
            BasePersistableObject.TestEntityNonUpgradable = TestEntityNonUpgradable;
            var AClassWithManyTypes = (function (_super) {
                __extends(AClassWithManyTypes, _super);
                function AClassWithManyTypes() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BasePersistableObject.AClassWithManyTypes";
                    this.__typeVersion = "v1";
                }
                return AClassWithManyTypes;
            }(BaseEntity));
            BasePersistableObject.AClassWithManyTypes = AClassWithManyTypes;
            describe("BaseUpgrader", function () {
                beforeEach(function () {
                    Factory.registerType("CdC.Tests.BasePersistableObject.A3StepUpgradableItem", "v1", CdC.Tests.BasePersistableObject.v1.A3StepUpgradableItem);
                    Factory.registerType("CdC.Tests.BasePersistableObject.A3StepUpgradableItem", "v2", CdC.Tests.BasePersistableObject.v2.A3StepUpgradableItem);
                    Factory.registerType("CdC.Tests.BasePersistableObject.A3StepUpgradableItem", "v3", A3StepUpgradableItem);
                    Factory.registerType("CdC.Tests.BasePersistableObject.TestEntity", "v1", CdC.Tests.BasePersistableObject.v1.TestEntity);
                    Factory.registerType("CdC.Tests.BasePersistableObject.TestEntity", "v2", TestEntity);
                    Factory.registerType("CdC.Tests.BasePersistableObject.TestEntityNonUpgradable", "v1", TestEntityNonUpgradable);
                    Factory.registerType("CdC.Tests.BasePersistableObject.AClassWithManyTypes", "v1", AClassWithManyTypes);
                });
                it("computeNextVersion deve restituire il valore corretto della versione successiva", function () {
                    var computed = Upgrader.computeNextVersion("v1");
                    expect(computed).toEqual("v2");
                });
                it("computeNextVersion deve restituire un errore se la versione non è corretta.", function () {
                    var expectedError = new Error(Errors.IncorrectVersionFormat);
                    expectedError.message = "Specified version m15 is in incorrect format. Must be in the form v<n> where n is an integer.";
                    expect(function () { var computed = Upgrader.computeNextVersion("m15"); }).toThrow(expectedError);
                });
                it("isLatestVersionForType deve restituire false per gli oggetti che non hanno versioni oltre alla prima", function () {
                    var te = new TestEntityNonUpgradable();
                    var needsUpgrade = Upgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);
                    expect(needsUpgrade).toBeFalsy("isLatestVersionForType should have returned false!");
                });
                it("isLatestVersionForType deve restituire true per gli oggetti che hanno versioni oltre alla prima", function () {
                    var te = new CdC.Tests.BasePersistableObject.v1.TestEntity();
                    var needsUpgrade = Upgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);
                    expect(needsUpgrade).toBeTruthy("isLatestVersionForType should have returned true!");
                });
                it("upgrade must be able to upgrade a PersistableObject to its latest version [2 steps]", function () {
                    var te = new CdC.Tests.BasePersistableObject.v1.TestEntity();
                    expect(te.__typeVersion).toEqual("v1");
                    var upgraded = Upgrader.upgrade(te);
                    expect(upgraded.__typeVersion).toEqual("v2");
                    expect(upgraded.aNewProperty).toEqual("upgrader was here");
                });
                it("upgrade must be able to upgrade a PersistableObject to its latest version [3 steps]", function () {
                    var te = new CdC.Tests.BasePersistableObject.v1.A3StepUpgradableItem();
                    expect(te.__typeVersion).toEqual("v1");
                    var upgraded = Upgrader.upgrade(te);
                    expect(upgraded.__typeVersion).toEqual("v3");
                    expect(upgraded.aNewProperty).toEqual("upgrader was here");
                    expect(upgraded.aNewNewProperty).toEqual("upgrader was here");
                });
                it("getState must be able to copy RegExp types", function () {
                    var te = new CdC.Tests.BasePersistableObject.AClassWithManyTypes();
                    var testRegExp = "/^v[0-9]+";
                    var testString = "v123";
                    te.aRegExp = new RegExp(testRegExp);
                    var regExpResult = te.aRegExp.test(testString);
                    var state = te.getState();
                    expect(state.aRegExp instanceof RegExp).toBeTruthy("aRegExp is not a RegExp instance");
                    expect(state.aRegExp.test("v123")).toEqual(regExpResult, "aRegExp non si comporta come la RegularExpression originale");
                });
                it("getState must be able to copy Date types", function () {
                    var te = new CdC.Tests.BasePersistableObject.AClassWithManyTypes();
                    var testDate = new Date();
                    te.aDate = testDate;
                    var state = te.getState();
                    expect(state.aDate instanceof Date).toBeTruthy("aDate is not a Date instance");
                    expect(state.aDate.toString()).toEqual(testDate.toString(), "aDate non è stata ripristinata come Date");
                });
            });
        })(BasePersistableObject = Tests.BasePersistableObject || (Tests.BasePersistableObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var ForBaseValueObject;
        (function (ForBaseValueObject) {
            var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
            var Factory = DDDTools.PersistableObject.Factory;
            var TestValueObject = (function (_super) {
                __extends(TestValueObject, _super);
                function TestValueObject(via, numero, citta, cap) {
                    _super.call(this);
                    this.via = via;
                    this.numero = numero;
                    this.citta = citta;
                    this.cap = cap;
                    this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject";
                    this.__typeVersion = "v1";
                }
                return TestValueObject;
            }(BaseValueObject));
            ForBaseValueObject.TestValueObject = TestValueObject;
            var TestValueObject_Array = (function (_super) {
                __extends(TestValueObject_Array, _super);
                function TestValueObject_Array(arrayOfSomething) {
                    _super.call(this);
                    this.arrayOfSomething = arrayOfSomething;
                    this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
                    this.__typeVersion = "v1";
                }
                return TestValueObject_Array;
            }(BaseValueObject));
            ForBaseValueObject.TestValueObject_Array = TestValueObject_Array;
            var TestValueObject_Object = (function (_super) {
                __extends(TestValueObject_Object, _super);
                function TestValueObject_Object(someObject) {
                    _super.call(this);
                    this.someObject = someObject;
                    this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Object";
                    this.__typeVersion = "v1";
                }
                return TestValueObject_Object;
            }(BaseValueObject));
            ForBaseValueObject.TestValueObject_Object = TestValueObject_Object;
            describe("BaseValueObject", function () {
                beforeEach(function () {
                    Factory.registerType("CdC.Tests.BaseValueObject.TestValueObject", "v1", CdC.Tests.ForBaseValueObject.TestValueObject);
                    Factory.registerType("CdC.Tests.BaseValueObject.TestValueObject_Array", "v1", CdC.Tests.ForBaseValueObject.TestValueObject_Array);
                    Factory.registerType("CdC.Tests.BaseValueObject.TestValueObject_Object", "v1", CdC.Tests.ForBaseValueObject.TestValueObject_Object);
                });
                it("ValueObjects must be compared against their content. - Base types", function () {
                    var vo1 = new TestValueObject("via F.Mestica", 3, "Apiro", "62021");
                    var vo2 = new TestValueObject("via F.Mestica", 3, "Apiro", "62021");
                    var vo3 = new TestValueObject("via del campo", 69, "Genova", "xxxxx");
                    expect(vo1.equals(vo2)).toBeTruthy("vo1 is reported to be not equal to vo2, while it is!");
                    expect(vo1.equals(vo3)).toBeFalsy("vo1 is reportede to be equal to vo3, while it is not!");
                });
                it("ValueObjects must be compared against their content. - Array", function () {
                    var vo1 = new TestValueObject_Array([{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]);
                    var vo2 = new TestValueObject_Array([{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]);
                    var vo3 = new TestValueObject_Array([{ p1: 6, p3: 96 }, { p1: 3, p2: 42 }]);
                    expect(vo1.equals(vo2)).toBeTruthy("vo1 is reported to be not equal to vo2, while it is!");
                    expect(vo1.equals(vo3)).toBeFalsy("vo1 is reportede to be equal to vo3, while it is not!");
                });
                it("ValueObjects must be compared against their content. - Object", function () {
                    var vo1 = new TestValueObject_Object({ p1: 3, p2: 42 });
                    var vo2 = new TestValueObject_Object({ p1: 3, p2: 42 });
                    var vo3 = new TestValueObject_Object({ p1: 6, p3: 96 });
                    expect(vo1.equals(vo2)).toBeTruthy("vo1 is reported to be not equal to vo2, while it is!");
                    expect(vo1.equals(vo3)).toBeFalsy("vo1 is reportede to be equal to vo3, while it is not!");
                });
            });
        })(ForBaseValueObject = Tests.ForBaseValueObject || (Tests.ForBaseValueObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var Guid = DDDTools.ValueObjects.Guid;
        var BaseEntity = DDDTools.Entity.BaseEntity;
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
        var Errors = DDDTools.Repository.Errors;
        var InMemoryRepository = DDDTools.Repository.InMemoryRepository;
        var Factory = DDDTools.PersistableObject.Factory;
        var Key = (function (_super) {
            __extends(Key, _super);
            function Key() {
                _super.call(this);
                this.__typeName = "CdC.Tests.Key";
                this.__typeVersion = "v1";
                this.id = Guid.generate();
            }
            Key.prototype.toString = function () {
                return this.id.toString();
            };
            return Key;
        }(BaseValueObject));
        Tests.Key = Key;
        var ChildEntity = (function (_super) {
            __extends(ChildEntity, _super);
            function ChildEntity() {
                _super.call(this);
                this.arrayOfKeys = [];
                this.__typeName = "CdC.Tests.ChildEntity";
                this.__typeVersion = "v1";
                this.anotherDate = new Date();
            }
            return ChildEntity;
        }(BaseEntity));
        Tests.ChildEntity = ChildEntity;
        var TestAggregate = (function (_super) {
            __extends(TestAggregate, _super);
            function TestAggregate() {
                _super.call(this);
                this.arrayOfEntities = [];
                this.anonymousObject = {};
                this.anObjectReference = {};
                this.anotherObjectReference = {};
                this.aNullReference = null;
                this.anUndefinedItem = undefined;
                this.aDate = new Date();
                this.__typeName = "CdC.Tests.TestAggregate";
                this.__typeVersion = "v1";
                this.aTestProperty = "a test value !";
            }
            return TestAggregate;
        }(BaseAggregateRoot));
        Tests.TestAggregate = TestAggregate;
        var TestRepository = (function (_super) {
            __extends(TestRepository, _super);
            function TestRepository() {
                _super.call(this, TestRepository.managedTypeName);
            }
            TestRepository.managedTypeName = "CdC.Tests.TestAggregate";
            return TestRepository;
        }(InMemoryRepository));
        Factory.registerType("CdC.Tests.Key", "v1", Key);
        Factory.registerType("CdC.Tests.ChildEntity", "v1", ChildEntity);
        Factory.registerType("CdC.Tests.TestAggregate", "v1", TestAggregate);
        describe("InMemoryRepository", function () {
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
                    expect(e.name).toEqual(Errors.KeyNotSet);
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
                    expect(e.name).toEqual(Errors.KeyNotSet);
                }
            });
            it("it should throw ItemNotFound if a key is not present in the repository", function () {
                var repo = new TestRepository();
                var item = new TestAggregate();
                var key = new Key();
                var key2 = new Key();
                item.setKey(key);
                repo.save(item);
                expect(function () { repo.getById(key2); }).toThrow(new Error(Errors.ItemNotFound));
            });
            it("It must correctly manage null and undefined data", function () {
                var repo = new TestRepository();
                var item = new TestAggregate();
                var key = new Key();
                item.setKey(key);
                var aTestDate = new Date();
                item.aDate = aTestDate;
                try {
                    repo.save(item);
                    var reloaded = repo.getById(key);
                    expect(reloaded.aNullReference).toBeNull("aNullReference is not null, while it should");
                    expect(reloaded.anUndefinedItem).toBeUndefined("anUndefinedItem is not undefined, while it should");
                }
                catch (e) {
                    expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                }
            });
            it("It must correctly reconstitute a date", function () {
                var repo = new TestRepository();
                var item = new TestAggregate();
                var key = new Key();
                item.setKey(key);
                var aTestDate = new Date();
                item.aDate = aTestDate;
                try {
                    repo.save(item);
                    var reloaded = repo.getById(key);
                    expect(reloaded.aDate instanceof Date).toBeTruthy("aDate is not an instance of Date, while it should");
                }
                catch (e) {
                    expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                }
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
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var RepAsync;
        (function (RepAsync) {
            var Guid = DDDTools.ValueObjects.Guid;
            var BaseEntity = DDDTools.Entity.BaseEntity;
            var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
            var BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
            var Errors = DDDTools.Repository.Errors;
            var InMemoryRepositoryAsync = DDDTools.Repository.InMemoryRepositoryAsync;
            var Factory = DDDTools.PersistableObject.Factory;
            var FactoryErrors = DDDTools.PersistableObject.Errors;
            var NotRegistered = (function (_super) {
                __extends(NotRegistered, _super);
                function NotRegistered() {
                    _super.apply(this, arguments);
                    this.__typeName = "NotRegistered";
                    this.__typeVersion = "v1";
                }
                return NotRegistered;
            }(BaseValueObject));
            RepAsync.NotRegistered = NotRegistered;
            var Key = (function (_super) {
                __extends(Key, _super);
                function Key() {
                    _super.call(this);
                    this.__typeName = "CdC.Tests.Key";
                    this.__typeVersion = "v1";
                    this.id = Guid.generate();
                }
                Key.prototype.toString = function () {
                    return this.id.toString();
                };
                return Key;
            }(BaseValueObject));
            RepAsync.Key = Key;
            var ChildEntity = (function (_super) {
                __extends(ChildEntity, _super);
                function ChildEntity() {
                    _super.call(this);
                    this.arrayOfKeys = [];
                    this.__typeName = "CdC.Tests.ChildEntity";
                    this.__typeVersion = "v1";
                    this.anotherDate = new Date();
                }
                return ChildEntity;
            }(BaseEntity));
            RepAsync.ChildEntity = ChildEntity;
            var TestAggregate = (function (_super) {
                __extends(TestAggregate, _super);
                function TestAggregate() {
                    _super.call(this);
                    this.arrayOfEntities = [];
                    this.anonymousObject = {};
                    this.anObjectReference = {};
                    this.anotherObjectReference = {};
                    this.aNotRegisteredInstance = undefined;
                    this.aNullReference = null;
                    this.anUndefinedReference = undefined;
                    this.aDate = new Date();
                    this.__typeName = "CdC.Tests.TestAggregate";
                    this.__typeVersion = "v1";
                    this.aTestProperty = "a test value !";
                }
                return TestAggregate;
            }(BaseAggregateRoot));
            RepAsync.TestAggregate = TestAggregate;
            var TestRepository = (function (_super) {
                __extends(TestRepository, _super);
                function TestRepository() {
                    _super.call(this, TestRepository.managedTypeName);
                }
                TestRepository.managedTypeName = "CdC.Tests.TestAggregate";
                return TestRepository;
            }(InMemoryRepositoryAsync));
            beforeEach(function () {
                Factory.registerType("CdC.Tests.Key", "v1", Key);
                Factory.registerType("CdC.Tests.ChildEntity", "v1", ChildEntity);
                Factory.registerType("CdC.Tests.TestAggregate", "v1", TestAggregate);
            });
            describe("InMemoryRepositoryAsync", function () {
                it("It must be possible to instantiate a Repository class", function () {
                    var repo = new TestRepository();
                    expect(repo instanceof TestRepository).toEqual(true);
                });
                it("It must throw 'KeyNotSet' when saving an entity without key set", function (done) {
                    var repo = new TestRepository();
                    var item = new TestAggregate();
                    repo.save(item).then(function () {
                        expect(false).toBeTruthy();
                        done();
                    }, function (e) {
                        expect(e.name).toEqual(Errors.KeyNotSet);
                        done();
                    });
                });
                it("It must be possible to save an entity with the key set", function (done) {
                    var repo = new TestRepository();
                    var item = new TestAggregate();
                    repo.save(item).then(function () {
                        expect(false).toBeTruthy();
                        done();
                    }, function (e) {
                        expect(e.name).toEqual(Errors.KeyNotSet);
                        done();
                    });
                });
                it("it should throw ItemNotFound if a key is not present in the repository", function (done) {
                    var repo = new TestRepository();
                    var item = new TestAggregate();
                    var key = new Key();
                    var key2 = new Key();
                    item.setKey(key);
                    repo.save(item).then(function () {
                        return repo.getById(key2);
                    }).then(function (returned) {
                        expect(false).toBeTruthy("We should not be here");
                        done();
                    }, function (err) {
                        expect(err.name).toEqual(Errors.ItemNotFound);
                        done();
                    });
                });
                it("It must correctly reconstitute a Date", function (done) {
                    var repo = new TestRepository();
                    var item = new TestAggregate();
                    var key = new Key();
                    item.setKey(key);
                    var testDate = new Date();
                    item.aDate = testDate;
                    repo.save(item).then(function () {
                        return repo.getById(key);
                    }).then(function (reloaded) {
                        expect(reloaded.aDate instanceof Date).toBeTruthy("aDate is not an instance of Date.");
                        expect(reloaded.aDate).toEqual(testDate, "aDate is not evaluated as the pre save value.");
                        done();
                    }, function (err) {
                        expect(false).toBeTruthy("Exception while saving or retrieving an item. " + JSON.stringify(err));
                        done();
                    });
                });
                it("It must correctly reconstitute an array", function (done) {
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
                    repo.save(item).then(function () {
                        repo.getById(key).then(function (reloaded) {
                            expect(Array.isArray(reloaded.arrayOfEntities)).toBeTruthy("Property arrayOfEntities is not an Array");
                            expect(reloaded.arrayOfEntities.length).toEqual(numberOfElementsToAdd, "Property arrayOfEntities does not contain " + numberOfElementsToAdd + " elements");
                            for (var t = 0; t < numberOfElementsToAdd; t++) {
                                var ce = reloaded.arrayOfEntities[t];
                                expect(Array.isArray(ce.arrayOfKeys)).toBeTruthy("Property arrayOfKeys is not an Array");
                                expect(ce.arrayOfKeys.length).toEqual(numberOfElementsToAdd, "Property arrayOfKeys does not contain " + numberOfElementsToAdd + " elements");
                            }
                            done();
                        }, function (e) {
                            expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                            done();
                        });
                    }, function (e) {
                        expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                        done();
                    });
                });
                it("It must correctly reconstitute 'anonymous' objects.", function (done) {
                    var repo = new TestRepository();
                    var numberOfElementsToAdd = 10;
                    var item = new TestAggregate();
                    var key = new Key();
                    item.setKey(key);
                    var anotherEntity = new TestAggregate();
                    anotherEntity.setKey(new Key());
                    item.anonymousObject.anotherEntity = anotherEntity;
                    item.anonymousObject.aNumberType = 42;
                    repo.save(item).then(function () {
                        repo.getById(key).then(function (reloaded) {
                            expect(reloaded.anonymousObject.aNumberType).toEqual(42, "Property aNumberType was not correctly reconstituted.");
                            done();
                        }, function (e) {
                            expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                            done();
                        });
                    }, function (e) {
                        expect(false).toBeTruthy("Exception while saving or retrieving an item. " + e.message);
                        done();
                    });
                });
                it("It must correctly reconstitute references to the same instance.", function (done) {
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
                    repo.save(item).then(function () {
                        repo.getById(key).then(function (reloaded) {
                            expect(reloaded.anObjectReference).toEqual(reloaded.anotherObjectReference);
                            done();
                        }, function (e) {
                            expect(false).toBeTruthy("Exception while saving or retrieving the item. " + e.message);
                            done();
                        });
                    }, function (e) {
                        expect(false).toBeTruthy("Exception while saving or retrieving the item. " + e.message);
                        done();
                    });
                });
                it("RevisionId must be incremented only if object to be saved differs from object saved", function (done) {
                    var repo = new TestRepository();
                    var e = new TestAggregate();
                    e.setKey(new Key());
                    e.aTestProperty = "Before saving...";
                    expect(e.getRevisionId()).toEqual(0);
                    repo.save(e).then(function () {
                        expect(e.getRevisionId()).toEqual(1);
                        return repo.save(e);
                    }).then(function () {
                        expect(e.getRevisionId()).toEqual(1);
                        e.aTestProperty = "... after saving";
                        return repo.save(e);
                    }).then(function () {
                        expect(e.getRevisionId()).toEqual(2);
                        done();
                    }, function (err) {
                        expect(false).toBeTruthy("Exception while saving or retrieving the item. " + err.message);
                        done();
                    });
                });
                it("Exception thrown by item reconstitution, must be catche in the error function of the returned promise", function (done) {
                    var repo = new TestRepository();
                    var e = new TestAggregate();
                    var key = new Key();
                    e.setKey(key);
                    e.aTestProperty = "Before saving...";
                    e.aNotRegisteredInstance = new NotRegistered();
                    repo.save(e).then(function () {
                        repo.getById(key).then(function (value) {
                            expect(false).toBeTruthy("We should not have been here!");
                            done();
                        }, function (err) {
                            expect(err.name).toEqual(FactoryErrors.TypeNotRegistered);
                            expect(true).toBeTruthy();
                            done();
                        });
                    }, function (err) {
                        expect(false).toBeTruthy("We should not have been here!");
                        done();
                    });
                });
            });
        })(RepAsync = Tests.RepAsync || (Tests.RepAsync = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var ForDispatcher;
        (function (ForDispatcher) {
            var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
            var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
            var InProcessDispatcher = DDDTools.DomainEvents.InProcessDispatcher;
            var aDomainEvent = (function (_super) {
                __extends(aDomainEvent, _super);
                function aDomainEvent() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.Dispatcher.aDomainEvent";
                    this.__typeVersion = "v1";
                }
                return aDomainEvent;
            }(BaseValueObject));
            describe("InProcessDispatcher", function () {
                it("Multiple registration of the same eventhandler, must be treated as one.", function () {
                    var eventHandler;
                    var counter = 0;
                    eventHandler = function (event) {
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(1);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                });
                it("After deregistering an handler, dispatch must not call it anymore", function () {
                    var eventHandler;
                    var counter = 0;
                    eventHandler = function (event) {
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(1);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    counter = 0;
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(0);
                });
                it("All handlers will be called by dispatch, even if handlers throw.", function () {
                    var eventHandler;
                    var aThrowingHandler;
                    var counter = 0;
                    aThrowingHandler = function (event) {
                        throw new Error("Error thrown by the handler");
                    };
                    eventHandler = function (event) {
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    try {
                        DomainDispatcher.dispatch(event);
                    }
                    catch (e) {
                        expect(e.message).toEqual("Error:Error thrown by the handler\n");
                    }
                    expect(counter).toEqual(1);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
                });
                it("Handlers must be called in the same order they are registered.", function () {
                    var eventHandler;
                    var secondEventHandler;
                    var counter = 0;
                    eventHandler = function (event) {
                        expect(counter).toEqual(0);
                        counter++;
                    };
                    secondEventHandler = function (event) {
                        expect(counter).toEqual(1);
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(2);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);
                });
            });
        })(ForDispatcher = Tests.ForDispatcher || (Tests.ForDispatcher = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var Serializer = DDDTools.Serialization.Serializer;
var Deserializer = DDDTools.Serialization.Deserializer;
describe("Serialization", function () {
    it("should be able to serialize/deserialize every type of object", function () {
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1", "3", { property1: "Echo" }],
            aDate: new Date(),
            aRegExp: new RegExp("^123"),
            aNullValue: null,
            anUndefinedValue: undefined
        };
        var serialized = Serializer.serialize(anObject);
        var deserialized = Deserializer.deserialize(serialized);
        expect(anObject.property1).toEqual(deserialized.property1);
        expect(anObject.property2).toEqual(deserialized.property2);
        for (var e in anObject.anArray) {
            expect(anObject.anArray[e]).toEqual(deserialized.anArray[e]);
        }
        expect(deserialized.aDate instanceof Date).toBeTruthy("aDate is not a date");
        expect(anObject.aDate).toEqual(deserialized.aDate, "aDate is not the same aDate it was before serialization");
        expect(deserialized.aRegExp instanceof RegExp).toBeTruthy("aRegExp is not an instance of RegExp");
        expect(anObject.aRegExp).toEqual(deserialized.aRegExp, "aRegExp is not the same aRegExp it was before serialization");
        expect(deserialized.aNullValue).toBeNull("aNullValue is not null");
        expect(deserialized.anUndefinedValue).toBeUndefined("anUndefinedValue is not undefined");
    });
    it("Two serializations of the same object must be exactly match", function () {
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1", "3", { property1: "Echo" }],
            aNullValue: null,
            aDate: new Date(),
            aRegexp: /abc/i,
            anUndefinedValue: undefined
        };
        var serialized1 = Serializer.serialize(anObject);
        var serialized2 = Serializer.serialize(anObject);
        expect(serialized1).toEqual(serialized2);
    });
    it("Serialization + Deserialization must recreate the very same starting object", function () {
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1", "3", { property1: "Echo" }],
            aNullValue: null,
            aDate: new Date(),
            aRegexp: /abc/i,
            anUndefinedValue: undefined
        };
        var serialized1 = Serializer.serialize(anObject);
        var step1 = Serializer.serialize(anObject);
        var step2 = Deserializer.deserialize(step1);
        var serialized2 = Serializer.serialize(step2);
        expect(serialized1).toEqual(serialized2);
    });
});
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var ForUnitOfWork;
        (function (ForUnitOfWork) {
            var InMemoryRepository = DDDTools.Repository.InMemoryRepository;
            var BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
            var Guid = DDDTools.ValueObjects.Guid;
            var UnitOfWork = DDDTools.UnitOfWork.UnitOfWork;
            var Events = DDDTools.UnitOfWork.Events;
            var UnitOfWorkErrors = DDDTools.UnitOfWork.UnitOfWorkErrors;
            var Errors = DDDTools.Repository.Errors;
            var Factory = DDDTools.PersistableObject.Factory;
            var TestKey = (function (_super) {
                __extends(TestKey, _super);
                function TestKey() {
                    _super.call(this);
                    this.__typeName = "CdC.Tests.UnitOfWork.TestKey";
                    this.__typeVersion = "v1";
                }
                return TestKey;
            }(Guid));
            ForUnitOfWork.TestKey = TestKey;
            var TestAggregate = (function (_super) {
                __extends(TestAggregate, _super);
                function TestAggregate() {
                    _super.call(this);
                    this.aTestProperty = "Ciao";
                    this.__typeName = "CdC.Tests.UnitOfWork.TestAggregate";
                    this.__typeVersion = "v1";
                }
                TestAggregate.prototype.setATestProperty = function (value) {
                    this.aTestProperty = value;
                };
                TestAggregate.prototype.getATestProperty = function () {
                    return this.aTestProperty;
                };
                return TestAggregate;
            }(BaseAggregateRoot));
            ForUnitOfWork.TestAggregate = TestAggregate;
            var TestRepository = (function (_super) {
                __extends(TestRepository, _super);
                function TestRepository() {
                    _super.apply(this, arguments);
                }
                return TestRepository;
            }(InMemoryRepository));
            ForUnitOfWork.TestRepository = TestRepository;
            var TestUoW = (function (_super) {
                __extends(TestUoW, _super);
                function TestUoW(repo) {
                    _super.call(this, repo);
                }
                return TestUoW;
            }(UnitOfWork));
            ForUnitOfWork.TestUoW = TestUoW;
            describe("UnitOfWork", function () {
                var repo;
                var keys;
                var aggregates;
                var numberOfAggregates = 10;
                var uow;
                var initKeys = function () {
                    keys = [];
                    for (var i = 0; i < numberOfAggregates; i++) {
                        keys.push(Guid.generate());
                    }
                };
                var initAggregates = function (keys) {
                    aggregates = [];
                    for (var i = 0; i < numberOfAggregates; i++) {
                        var aggr = new TestAggregate();
                        aggr.setKey(keys[i]);
                        aggregates.push(aggr);
                    }
                };
                var fillRepo = function (repo) {
                    for (var i = 0; i < numberOfAggregates; i++) {
                        repo.save(aggregates[i]);
                    }
                };
                beforeEach(function () {
                    Factory.registerType("CdC.Tests.UnitOfWork.TestAggregate", "v1", TestAggregate);
                    repo = new TestRepository("CdC.Tests.UnitOfWork.TestAggregate");
                    initKeys();
                    initAggregates(keys);
                    fillRepo(repo);
                    uow = new TestUoW(repo);
                });
                it("It must be possible to instantiate a UnitOfWork for a Repository.", function () {
                    expect(uow instanceof TestUoW).toBeTruthy();
                });
                it("It must be possible to get an item as if it came directly from the repo.", function () {
                    var fromUoW = uow.getById(keys[0]);
                    var fromRepo = repo.getById(keys[0]);
                    var uowAsString = JSON.stringify(fromUoW);
                    var repoAsString = JSON.stringify(fromRepo);
                    expect(uowAsString).toEqual(uowAsString);
                });
                it("When retrieving objects, events of type ObjectRetrieveEvent must be raised.", function () {
                    var counter = 0;
                    uow.registerHandler(Events.ObjectRetrievedEvent, function () {
                        counter++;
                    });
                    var fromUoW0 = uow.getById(keys[0]);
                    var fromUoW1 = uow.getById(keys[1]);
                    expect(counter).toEqual(2);
                });
                it("After calling saveAll all Modified objects must be saved into the repository", function () {
                    var fromUoW0 = uow.getById(keys[0]);
                    var fromUoW1 = uow.getById(keys[1]);
                    var counter = 0;
                    fromUoW0.setATestProperty("Brutto!");
                    fromUoW1.setATestProperty("BBello");
                    uow.registerHandler(Events.ObjectSavedEvent, function (event) {
                        counter++;
                    });
                    uow.saveAll();
                    expect(counter).toEqual(2, "The UoW has not saved exactly 2 object.");
                    var fromRepo0 = repo.getById(keys[0]);
                    var fromRepo1 = repo.getById(keys[1]);
                    expect(fromRepo0.getATestProperty()).toEqual("Brutto!");
                    expect(fromRepo1.getATestProperty()).toEqual("BBello");
                });
                it("UnitOfWork must save only effectively changed objects.", function () {
                    var fromUoW0 = uow.getById(keys[0]);
                    var fromUoW1 = uow.getById(keys[1]);
                    var counter = 0;
                    fromUoW1.setATestProperty("BBello");
                    uow.registerHandler(Events.ObjectSavedEvent, function (event) {
                        counter++;
                        expect(event.id).toEqual(keys[1].toString());
                    });
                    uow.saveAll();
                    expect(counter).toEqual(1, "The UoW has not saved exactly 1 object.");
                });
                it("UnitOfWork must delete completely an object only after calling saveAll.", function () {
                    var fromUoW0 = uow.getById(keys[0]);
                    var fromUoW1 = uow.getById(keys[1]);
                    var counter = 0;
                    uow.registerHandler(Events.ObjectDeletedEvent, function (event) {
                        counter++;
                    });
                    uow.deleteById(keys[0]);
                    uow.deleteById(keys[1]);
                    expect(counter).toEqual(0, "Handler triggered before saveAll was called!");
                    var fromRepo0 = repo.getById(keys[0]);
                    var fromRepo1 = repo.getById(keys[1]);
                    expect(fromRepo0).not.toBeNull("Element 0 deleted before saveAll");
                    expect(fromRepo1).not.toBeNull("Element 1 deleted before saveAll");
                    uow.saveAll();
                    expect(counter).toEqual(2, "The UoW has not deleted exactly 2 object.");
                    try {
                        var fromRepo0 = repo.getById(keys[0]);
                        expect(false).toBeTruthy("Item 0 should be no more in the repository");
                    }
                    catch (e) {
                    }
                    try {
                        var fromRepo1 = repo.getById(keys[1]);
                        expect(false).toBeTruthy("Item 1 should be no more in the repository");
                    }
                    catch (e) {
                    }
                });
                it("A deleted item must not be 'retrievable' from the UnitOfWork, even if saveAll was not called", function () {
                    var fromUoW = uow.getById(keys[0]);
                    uow.deleteById(keys[0]);
                    try {
                        fromUoW = uow.getById(keys[0]);
                        expect(false).toBeTruthy("The element has been marked as deleted, but it is still returned by the UoW.");
                    }
                    catch (e) {
                        expect(e instanceof Error).toBeTruthy();
                        expect(e.name).toEqual(UnitOfWorkErrors.ItemMarkedAsDeleted);
                    }
                    uow.saveAll();
                    try {
                        fromUoW = uow.getById(keys[0]);
                        expect(false).toBeTruthy("The element has been marked as deleted and deleted, but it is still returned by the UoW.");
                    }
                    catch (e) {
                        expect(e instanceof Error).toBeTruthy();
                        expect(e.name).toEqual(Errors.ItemNotFound);
                    }
                });
            });
        })(ForUnitOfWork = Tests.ForUnitOfWork || (Tests.ForUnitOfWork = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLXRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QvREREVG9vbHMvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlVmFsdWVPYmplY3Qtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luTWVtb3J5UmVwb3NpdG9yeS1zcGVjLnRzIiwiLi4vc3JjL3Rlc3QvREREVG9vbHMvSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luUHJvY2Vzc0Rpc3BhdGNoZXItc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL1NlcmlhbGl6YXRpb24tc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL1VuaXRPZldvcmstc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWVBLElBQVUsR0FBRyxDQXFCWjtBQXJCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLEtBQUssQ0FxQmxCO0lBckJhLFdBQUEsS0FBSztRQUFDLElBQUEscUJBQXFCLENBcUJ4QztRQXJCbUIsV0FBQSxxQkFBcUI7WUFBQyxJQUFBLEVBQUUsQ0FxQjNDO1lBckJ5QyxXQUFBLEVBQUUsRUFBQyxDQUFDO2dCQUkxQyxJQUFPLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFHL0M7b0JBQTBDLHdDQUFzQztvQkFBaEY7d0JBQTBDLDhCQUFzQzt3QkFDNUUsZUFBVSxHQUFHLHNEQUFzRCxDQUFDO3dCQUNwRSxrQkFBYSxHQUFHLElBQUksQ0FBQztvQkFXekIsQ0FBQztvQkFQRyxrREFBbUIsR0FBbkIsVUFBb0IsWUFBcUU7d0JBQ3JGLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDcEMsS0FBSyxDQUFDLFlBQVksR0FBRyxtQkFBbUIsQ0FBQzt3QkFDekMsS0FBSyxD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Q0FBQztvQkFDekgsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULE1BQU0sQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDaEQsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQWhQbUIsYUFBYSxHQUFiLG1CQUFhLEtBQWIsbUJBQWEsUUFnUGhDO0lBQUQsQ0FBQyxFQWhQYSxLQUFLLEdBQUwsU0FBSyxLQUFMLFNBQUssUUFnUGxCO0FBQUQsQ0FBQyxFQWhQUyxHQUFHLEtBQUgsR0FBRyxRQWdQWiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5LCBVcGdyYWRlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYyIHtcclxuXHJcbiAgICBpbXBvcnQgVGVzdEVudGl0eSA9IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eTtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYyXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEge1xyXG5cclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuICAgIGltcG9ydCBVcGdyYWRlciA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LlVwZ3JhZGVyO1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkVycm9ycztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjNcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGFOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBhTmV3TmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3TmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYzXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MlwiO1xyXG5cclxuICAgICAgICBnZXRVcGdyYWRlZEluc3RhbmNlKGZyb21JbnN0YW5jZTogQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KTogVGVzdEVudGl0eSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSB3YXMgbm90IGluIFwidjFcIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYU5ld1Byb3BlcnR5OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlIGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5Tm9uVXBncmFkYWJsZSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eU5vblVwZ3JhZGFibGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQUNsYXNzV2l0aE1hbnlUeXBlcyBleHRlbmRzIEJhc2VFbnRpdHk8QUNsYXNzV2l0aE1hbnlUeXBlcywgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlc1wiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIC8vIFByaW1pdGl2ZSBEYXRhdHlwZXNcclxuICAgICAgICBwdWJsaWMgYU51bWJlcjogTnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBhU3RyaW5nOiBTdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGFCb29sZWFuOiBCb29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdDogT2JqZWN0O1xyXG5cclxuICAgICAgICAvLyBFeHRlbmRlZCB0eXBlc1xyXG4gICAgICAgIHB1YmxpYyBhUmVnRXhwOiBSZWdFeHA7XHJcbiAgICAgICAgcHVibGljIGFEYXRlOiBEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZVVwZ3JhZGVyXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MlwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2M1wiLCA8YW55PkEzU3RlcFVwZ3JhZGFibGVJdGVtKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCIsIFwidjJcIiwgPGFueT5UZXN0RW50aXR5KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlXCIsIFwidjFcIiwgPGFueT5UZXN0RW50aXR5Tm9uVXBncmFkYWJsZSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzXCIsIFwidjFcIiwgPGFueT5BQ2xhc3NXaXRoTWFueVR5cGVzKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiY29tcHV0ZU5leHRWZXJzaW9uIGRldmUgcmVzdGl0dWlyZSBpbCB2YWxvcmUgY29ycmV0dG8gZGVsbGEgdmVyc2lvbmUgc3VjY2Vzc2l2YVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29tcHV0ZWQgPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oXCJ2MVwiKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb21wdXRlZCkudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImNvbXB1dGVOZXh0VmVyc2lvbiBkZXZlIHJlc3RpdHVpcmUgdW4gZXJyb3JlIHNlIGxhIHZlcnNpb25lIG5vbiDDqCBjb3JyZXR0YS5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4cGVjdGVkRXJyb3IgPSBuZXcgRXJyb3IoRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQpO1xyXG4gICAgICAgICAgICBleHBlY3RlZEVycm9yLm1lc3NhZ2UgPSBcIlNwZWNpZmllZCB2ZXJzaW9uIG0xNSBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KCgpID0+IHsgdmFyIGNvbXB1dGVkID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKFwibTE1XCIpOyB9KS50b1Rocm93KGV4cGVjdGVkRXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIGRldmUgcmVzdGl0dWlyZSBmYWxzZSBwZXIgZ2xpIG9nZ2V0dGkgY2hlIG5vbiBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmVlZHNVcGdyYWRlID0gVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0ZS5fX3R5cGVOYW1lLCB0ZS5fX3R5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChuZWVkc1VwZ3JhZGUpLnRvQmVGYWxzeShcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgc2hvdWxkIGhhdmUgcmV0dXJuZWQgZmFsc2UhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgZGV2ZSByZXN0aXR1aXJlIHRydWUgcGVyIGdsaSBvZ2dldHRpIGNoZSBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5lZWRzVXBncmFkZSA9IFVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodGUuX190eXBlTmFtZSwgdGUuX190eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QobmVlZHNVcGdyYWRlKS50b0JlVHJ1dGh5KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBzaG91bGQgaGF2ZSByZXR1cm5lZCB0cnVlIVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJ1cGdyYWRlIG11c3QgYmUgYWJsZSB0byB1cGdyYWRlIGEgUGVyc2lzdGFibGVPYmplY3QgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uIFsyIHN0ZXBzXVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodGUuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYxXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gPFRlc3RFbnRpdHk+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwidXBncmFkZSBtdXN0IGJlIGFibGUgdG8gdXBncmFkZSBhIFBlcnNpc3RhYmxlT2JqZWN0IHRvIGl0cyBsYXRlc3QgdmVyc2lvbiBbMyBzdGVwc11cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh0ZS5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSA8QTNTdGVwVXBncmFkYWJsZUl0ZW0+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYzXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3TmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBSZWdFeHAgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdFJlZ0V4cCA9IFwiL152WzAtOV0rXCI7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gXCJ2MTIzXCI7XHJcbiAgICAgICAgICAgIHRlLmFSZWdFeHAgPSBuZXcgUmVnRXhwKHRlc3RSZWdFeHApO1xyXG4gICAgICAgICAgICB2YXIgcmVnRXhwUmVzdWx0ID0gdGUuYVJlZ0V4cC50ZXN0KHRlc3RTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gPEFDbGFzc1dpdGhNYW55VHlwZXM+dGUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwKS50b0JlVHJ1dGh5KFwiYVJlZ0V4cCBpcyBub3QgYSBSZWdFeHAgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwLnRlc3QoXCJ2MTIzXCIpKS50b0VxdWFsKHJlZ0V4cFJlc3VsdCwgXCJhUmVnRXhwIG5vbiBzaSBjb21wb3J0YSBjb21lIGxhIFJlZ3VsYXJFeHByZXNzaW9uIG9yaWdpbmFsZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBEYXRlIHR5cGVzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlcygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRlLmFEYXRlID0gdGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSA8QUNsYXNzV2l0aE1hbnlUeXBlcz50ZS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhIERhdGUgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hRGF0ZS50b1N0cmluZygpICkudG9FcXVhbCh0ZXN0RGF0ZS50b1N0cmluZygpLCBcImFEYXRlIG5vbiDDqCBzdGF0YSByaXByaXN0aW5hdGEgY29tZSBEYXRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdCB7XHJcblxyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgdmlhOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgbnVtZXJvOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2l0dGE6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBjYXA6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0X0FycmF5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdF9BcnJheT4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgYXJyYXlPZlNvbWV0aGluZzogYW55W11cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RWYWx1ZU9iamVjdF9PYmplY3QgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VGVzdFZhbHVlT2JqZWN0X09iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X09iamVjdFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHNvbWVPYmplY3Q6IGFueVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VWYWx1ZU9iamVjdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdFwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3QpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9BcnJheSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfT2JqZWN0XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9PYmplY3QpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJWYWx1ZU9iamVjdHMgbXVzdCBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZWlyIGNvbnRlbnQuIC0gQmFzZSB0eXBlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzIgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBcInZpYSBkZWwgY2FtcG9cIixcclxuICAgICAgICAgICAgICAgIDY5LFxyXG4gICAgICAgICAgICAgICAgXCJHZW5vdmFcIixcclxuICAgICAgICAgICAgICAgIFwieHh4eHhcIlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVmFsdWVPYmplY3RzIG11c3QgYmUgY29tcGFyZWQgYWdhaW5zdCB0aGVpciBjb250ZW50LiAtIEFycmF5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbeyBwMTogMywgcDI6IDQyIH0sIHsgcDE6IDYsIHAzOiA5NiB9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9BcnJheShcclxuICAgICAgICAgICAgICAgIFt7IHAxOiAzLCBwMjogNDIgfSwgeyBwMTogNiwgcDM6IDk2IH1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X0FycmF5KFxyXG4gICAgICAgICAgICAgICAgW3sgcDE6IDYsIHAzOiA5NiB9LCB7IHAxOiAzLCBwMjogNDIgfV1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlZhbHVlT2JqZWN0cyBtdXN0IGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlaXIgY29udGVudC4gLSBPYmplY3RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiA2LCBwMzogOTYgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9Jbk1lbW9yeVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L1R5cGVSZWdpc3RyeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQgREREVG9vbHMgPSByZXF1aXJlKFwiLi9ERERUb29sc1wiKVxyXG5cclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0Vycm9ycyBhcyBSZXBvRXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJbk1lbW9yeVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge1R5cGVSZWdpc3RyeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L1R5cGVSZWdpc3RyeVwiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzIHtcclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBERERUb29scy5BZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgRXJyb3JzID0gREREVG9vbHMuUmVwb3NpdG9yeS5FcnJvcnM7XHJcbiAgICBpbXBvcnQgSW5NZW1vcnlSZXBvc2l0b3J5ID0gREREVG9vbHMuUmVwb3NpdG9yeS5Jbk1lbW9yeVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8S2V5PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBpZDogR3VpZDtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuS2V5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hpbGRFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PENoaWxkRW50aXR5LCBLZXk+IHtcclxuICAgICAgICBwdWJsaWMgYXJyYXlPZktleXM6IEtleVtdID0gW107XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgYW5vdGhlckRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mRW50aXRpZXM6IENoaWxkRW50aXR5W10gPSBbXTtcclxuICAgICAgICBwdWJsaWMgYW5vbnltb3VzT2JqZWN0OiBhbnkgPSB7fTtcclxuICAgICAgICAvLyBVc2VkIHRvIHRlc3Qgb2JqZWN0cyByZWZlcmVuY2VzIHJlY29uc3RpdHV0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcbiAgICAgICAgcHVibGljIGFub3RoZXJPYmplY3RSZWZlcmVuY2U6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICBwdWJsaWMgYU51bGxSZWZlcmVuY2UgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBhblVuZGVmaW5lZEl0ZW0gPSB1bmRlZmluZWQ7IFxyXG4gICAgICAgIHB1YmxpYyBhRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBhVGVzdFByb3BlcnR5OiBzdHJpbmcgPSBcImEgdGVzdCB2YWx1ZSAhXCI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUZXN0UmVwb3NpdG9yeSBleHRlbmRzIEluTWVtb3J5UmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBLZXk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbWFuYWdlZFR5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoVGVzdFJlcG9zaXRvcnkubWFuYWdlZFR5cGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuS2V5XCIsIFwidjFcIiwgS2V5KTtcclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCIsIFwidjFcIiwgQ2hpbGRFbnRpdHkpO1xyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiLCBcInYxXCIsIFRlc3RBZ2dyZWdhdGUpO1xyXG5cclxuICAgIGRlc2NyaWJlKFwiSW5NZW1vcnlSZXBvc2l0b3J5XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIGEgUmVwb3NpdG9yeSBjbGFzc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZXBvIGluc3RhbmNlb2YgVGVzdFJlcG9zaXRvcnkpLnRvRXF1YWwodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCB0aHJvdyAnS2V5Tm90U2V0JyB3aGVuIHNhdmluZyBhbiBlbnRpdHkgd2l0aG91dCBrZXkgc2V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5LZXlOb3RTZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIHNhdmUgYW4gZW50aXR5IHdpdGggdGhlIGtleSBzZXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIml0IHNob3VsZCB0aHJvdyBJdGVtTm90Rm91bmQgaWYgYSBrZXkgaXMgbm90IHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5MiA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuXHJcblxyXG4gICAgICAgICAgICBleHBlY3QoKCkgPT4geyByZXBvLmdldEJ5SWQoa2V5MikgfSkudG9UaHJvdyhuZXcgRXJyb3IoRXJyb3JzLkl0ZW1Ob3RGb3VuZCkpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IG1hbmFnZSBudWxsIGFuZCB1bmRlZmluZWQgZGF0YVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcbiAgICAgICAgICAgIHZhciBhVGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmFEYXRlID0gYVRlc3REYXRlO1xyXG5cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hTnVsbFJlZmVyZW5jZSkudG9CZU51bGwoXCJhTnVsbFJlZmVyZW5jZSBpcyBub3QgbnVsbCwgd2hpbGUgaXQgc2hvdWxkXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFuVW5kZWZpbmVkSXRlbSkudG9CZVVuZGVmaW5lZChcImFuVW5kZWZpbmVkSXRlbSBpcyBub3QgdW5kZWZpbmVkLCB3aGlsZSBpdCBzaG91bGRcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIGEgZGF0ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcbiAgICAgICAgICAgIHZhciBhVGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmFEYXRlID0gYVRlc3REYXRlO1xyXG5cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hRGF0ZSBpbnN0YW5jZW9mIERhdGUpLnRvQmVUcnV0aHkoXCJhRGF0ZSBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgd2hpbGUgaXQgc2hvdWxkXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSBhbiBhcnJheVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ldyBDaGlsZEVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFycmF5T2ZFbnRpdGllcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcnJheU9mS2V5cy5wdXNoKG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2FsdmF0b1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJSZWN1cGVyYXRvXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVE9ETyBUaGUgZm9sbG93aW5nIHRlc3Qgc3RhcnRlZCB0byBmYWlsIGFmdGVyIGdldHRpbmcgYmFjayB0byBuYW1lc3BhY2VzLi4uXHJcbiAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZCBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoQXJyYXkuaXNBcnJheShyZWxvYWRlZC5hcnJheU9mRW50aXRpZXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyB0KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjZSA9IHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllc1t0XTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KGNlLmFycmF5T2ZLZXlzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjZS5hcnJheU9mS2V5cy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSAnYW5vbnltb3VzJyBvYmplY3RzLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFub3RoZXJFbnRpdHkgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhbm90aGVyRW50aXR5LnNldEtleShuZXcgS2V5KCkpO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSA9IGFub3RoZXJFbnRpdHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlID0gNDI7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuICAgIFxyXG4gICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFub255bW91c09iamVjdC5hTnVtYmVyVHlwZSkudG9FcXVhbCg0MiwgXCJQcm9wZXJ0eSBhTnVtYmVyVHlwZSB3YXMgbm90IGNvcnJlY3RseSByZWNvbnN0aXR1dGVkLlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgcmVmZXJlbmNlcyB0byB0aGUgc2FtZSBpbnN0YW5jZS5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIkZlYXR1cmUgbm9uIGFuY29yYSBzdmlsdXBwYXRhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5ID0ge1xyXG4gICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkEgdGVzdCB2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgYUNvbXBvc2l0ZVByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkFub3RoZXIgdGVzdCB2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFuT2JqZWN0UmVmZXJlbmNlID0gYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5O1xyXG4gICAgICAgICAgICBpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoaXRlbS5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgdGhlIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5PYmplY3RSZWZlcmVuY2UpLnRvRXF1YWwocmVsb2FkZWQuYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlJldmlzaW9uSWQgbXVzdCBiZSBpbmNyZW1lbnRlZCBvbmx5IGlmIG9iamVjdCB0byBiZSBzYXZlZCBkaWZmZXJzIGZyb20gb2JqZWN0IHNhdmVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuUmVwQXN5bmMge1xyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IERERFRvb2xzLlZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5SZXBvc2l0b3J5LkVycm9ycztcclxuICAgIGltcG9ydCBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYyA9IERERFRvb2xzLlJlcG9zaXRvcnkuSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcblxyXG4gICAgaW1wb3J0IEZhY3RvcnlFcnJvcnMgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5FcnJvcnM7XHJcblxyXG5cclxuICAgIC8vIERlZmluZXMgYSBjbGFzcyB0aGF0IHdpbGwgbm90IGJlIHJlZ2lzdGVyZWQgd2l0IHRoZSB0eXBlcyBmYWN0b3J5XHJcbiAgICBleHBvcnQgY2xhc3MgTm90UmVnaXN0ZXJlZCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxOb3RSZWdpc3RlcmVkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiTm90UmVnaXN0ZXJlZFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEtleSBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxLZXk+IHtcclxuICAgICAgICBwcml2YXRlIGlkOiBHdWlkO1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5LZXlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IEd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDaGlsZEVudGl0eSBleHRlbmRzIEJhc2VFbnRpdHk8Q2hpbGRFbnRpdHksIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mS2V5czogS2V5W10gPSBbXTtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQ2hpbGRFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgYW5vdGhlckRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBLZXk+IHtcclxuICAgICAgICBwdWJsaWMgYXJyYXlPZkVudGl0aWVzOiBDaGlsZEVudGl0eVtdID0gW107XHJcbiAgICAgICAgcHVibGljIGFub255bW91c09iamVjdDogYW55ID0ge307XHJcbiAgICAgICAgLy8gVXNlZCB0byB0ZXN0IG9iamVjdHMgcmVmZXJlbmNlcyByZWNvbnN0aXR1dGlvbi5cclxuICAgICAgICBwdWJsaWMgYW5PYmplY3RSZWZlcmVuY2U6IGFueSA9IHt9O1xyXG4gICAgICAgIHB1YmxpYyBhbm90aGVyT2JqZWN0UmVmZXJlbmNlOiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gVXNlZCB0byB0ZXN0IGV4Y2VwdGlvbnMgaW4gb2JqZWN0IHJlY29uc3RpdHV0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBhTm90UmVnaXN0ZXJlZEluc3RhbmNlOiBOb3RSZWdpc3RlcmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYU51bGxSZWZlcmVuY2UgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBhblVuZGVmaW5lZFJlZmVyZW5jZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBwdWJsaWMgYURhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiYSB0ZXN0IHZhbHVlICFcIjtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgVGVzdFJlcG9zaXRvcnkgZXh0ZW5kcyBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYzxUZXN0QWdncmVnYXRlLCBLZXk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbWFuYWdlZFR5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoVGVzdFJlcG9zaXRvcnkubWFuYWdlZFR5cGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLktleVwiLCBcInYxXCIsIEtleSk7XHJcbiAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQ2hpbGRFbnRpdHlcIiwgXCJ2MVwiLCBDaGlsZEVudGl0eSk7XHJcbiAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiLCBcInYxXCIsIFRlc3RBZ2dyZWdhdGUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2NyaWJlKFwiSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmNcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBSZXBvc2l0b3J5IGNsYXNzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlcG8gaW5zdGFuY2VvZiBUZXN0UmVwb3NpdG9yeSkudG9FcXVhbCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IHRocm93ICdLZXlOb3RTZXQnIHdoZW4gc2F2aW5nIGFuIGVudGl0eSB3aXRob3V0IGtleSBzZXRcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuS2V5Tm90U2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIHNhdmUgYW4gZW50aXR5IHdpdGggdGhlIGtleSBzZXRcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuS2V5Tm90U2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJpdCBzaG91bGQgdGhyb3cgSXRlbU5vdEZvdW5kIGlmIGEga2V5IGlzIG5vdCBwcmVzZW50IGluIHRoZSByZXBvc2l0b3J5XCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkyID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcG8uZ2V0QnlJZChrZXkyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmV0dXJuZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJXZSBzaG91bGQgbm90IGJlIGhlcmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZXJyLm5hbWUpLnRvRXF1YWwoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIGEgRGF0ZVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgaXRlbS5hRGF0ZSA9IHRlc3REYXRlO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVsb2FkZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYURhdGUgaW5zdGFuY2VvZiBEYXRlKS50b0JlVHJ1dGh5KFwiYURhdGUgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hRGF0ZSkudG9FcXVhbCh0ZXN0RGF0ZSwgXCJhRGF0ZSBpcyBub3QgZXZhbHVhdGVkIGFzIHRoZSBwcmUgc2F2ZSB2YWx1ZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSBhbiBhcnJheVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mRWxlbWVudHNUb0FkZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBuZXcgQ2hpbGRFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hcnJheU9mRW50aXRpZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBxID0gMDsgcSA8IG51bWJlck9mRWxlbWVudHNUb0FkZDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXJyYXlPZktleXMucHVzaChuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2FsdmF0b1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVsb2FkZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gVGhlIGZvbGxvd2luZyB0ZXN0IHN0YXJ0ZWQgdG8gZmFpbCBhZnRlciBnZXR0aW5nIGJhY2sgdG8gbmFtZXNwYWNlcy4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwZWN0KHJlbG9hZGVkIGluc3RhbmNlb2YgVGVzdEFnZ3JlZ2F0ZSkudG9CZVRydXRoeShcIlJlY29uc3RpdHV0ZWQgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgb3JpZ2luYWwgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoQXJyYXkuaXNBcnJheShyZWxvYWRlZC5hcnJheU9mRW50aXRpZXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hcnJheU9mRW50aXRpZXMubGVuZ3RoKS50b0VxdWFsKG51bWJlck9mRWxlbWVudHNUb0FkZCwgXCJQcm9wZXJ0eSBhcnJheU9mRW50aXRpZXMgZG9lcyBub3QgY29udGFpbiBcIiArIG51bWJlck9mRWxlbWVudHNUb0FkZCArIFwiIGVsZW1lbnRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IHQrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjZSA9IHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllc1t0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoQXJyYXkuaXNBcnJheShjZS5hcnJheU9mS2V5cykpLnRvQmVUcnV0aHkoXCJQcm9wZXJ0eSBhcnJheU9mS2V5cyBpcyBub3QgYW4gQXJyYXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGNlLmFycmF5T2ZLZXlzLmxlbmd0aCkudG9FcXVhbChudW1iZXJPZkVsZW1lbnRzVG9BZGQsIFwiUHJvcGVydHkgYXJyYXlPZktleXMgZG9lcyBub3QgY29udGFpbiBcIiArIG51bWJlck9mRWxlbWVudHNUb0FkZCArIFwiIGVsZW1lbnRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgJ2Fub255bW91cycgb2JqZWN0cy5cIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5vdGhlckVudGl0eSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGFub3RoZXJFbnRpdHkuc2V0S2V5KG5ldyBLZXkoKSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFub255bW91c09iamVjdC5hbm90aGVyRW50aXR5ID0gYW5vdGhlckVudGl0eTtcclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYU51bWJlclR5cGUgPSA0MjtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG8uZ2V0QnlJZChrZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBUaGUgZm9sbG93aW5nIHRlc3Qgc3RhcnRlZCB0byBmYWlsIGFmdGVyIGdldHRpbmcgYmFjayB0byBuYW1lc3BhY2VzLiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZC5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFub255bW91c09iamVjdC5hTnVtYmVyVHlwZSkudG9FcXVhbCg0MiwgXCJQcm9wZXJ0eSBhTnVtYmVyVHlwZSB3YXMgbm90IGNvcnJlY3RseSByZWNvbnN0aXR1dGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSByZWZlcmVuY2VzIHRvIHRoZSBzYW1lIGluc3RhbmNlLlwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIkZlYXR1cmUgbm9uIGFuY29yYSBzdmlsdXBwYXRhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5ID0ge1xyXG4gICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkEgdGVzdCB2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgYUNvbXBvc2l0ZVByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkFub3RoZXIgdGVzdCB2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFuT2JqZWN0UmVmZXJlbmNlID0gYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5O1xyXG4gICAgICAgICAgICBpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoaXRlbS5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwby5nZXRCeUlkKGtleSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5PYmplY3RSZWZlcmVuY2UpLnRvRXF1YWwocmVsb2FkZWQuYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgdGhlIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlJldmlzaW9uSWQgbXVzdCBiZSBpbmNyZW1lbnRlZCBvbmx5IGlmIG9iamVjdCB0byBiZSBzYXZlZCBkaWZmZXJzIGZyb20gb2JqZWN0IHNhdmVkXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHBlbmRpbmcoXCJOZWVkIHRvIHJlZmFjdG9yIElQRXJzaXN0YWJsZSB0byBhZGQgZnVuY3Rpb25zIGZvciBTdGF0ZSBDb21wYXJpc29uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5zYXZlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG8uc2F2ZShlKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiRXhjZXB0aW9uIHRocm93biBieSBpdGVtIHJlY29uc3RpdHV0aW9uLCBtdXN0IGJlIGNhdGNoZSBpbiB0aGUgZXJyb3IgZnVuY3Rpb24gb2YgdGhlIHJldHVybmVkIHByb21pc2VcIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcbiAgICAgICAgICAgIGUuYU5vdFJlZ2lzdGVyZWRJbnN0YW5jZSA9IG5ldyBOb3RSZWdpc3RlcmVkKCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZCBub3QgaGF2ZSBiZWVuIGhlcmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIubmFtZSkudG9FcXVhbChGYWN0b3J5RXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJXZSBzaG91bGQgbm90IGhhdmUgYmVlbiBoZXJlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yRGlzcGF0Y2hlciB7XHJcblxyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSW5Qcm9jZXNzRGlzcGF0Y2hlciA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JblByb2Nlc3NEaXNwYXRjaGVyO1xyXG5cclxuXHJcbiAgICBjbGFzcyBhRG9tYWluRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8YURvbWFpbkV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZShcIkluUHJvY2Vzc0Rpc3BhdGNoZXJcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcIk11bHRpcGxlIHJlZ2lzdHJhdGlvbiBvZiB0aGUgc2FtZSBldmVudGhhbmRsZXIsIG11c3QgYmUgdHJlYXRlZCBhcyBvbmUuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZCB0d2ljZSwgYnV0IGRpc3BhdGNoZXIgc2hvdWxkIGNhbGwgaXQgb25jZS5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiQWZ0ZXIgZGVyZWdpc3RlcmluZyBhbiBoYW5kbGVyLCBkaXNwYXRjaCBtdXN0IG5vdCBjYWxsIGl0IGFueW1vcmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gSnVzdCB0byB2ZXJpZnkgdGhhdCBIYW5kbGVyIGhhcyBiZWVuIGNvcnJlY3RseSByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiQWxsIGhhbmRsZXJzIHdpbGwgYmUgY2FsbGVkIGJ5IGRpc3BhdGNoLCBldmVuIGlmIGhhbmRsZXJzIHRocm93LlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBhVGhyb3dpbmdIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBhVGhyb3dpbmdIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHRocm93biBieSB0aGUgaGFuZGxlclwiKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBhVGhyb3dpbmdIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubWVzc2FnZSkudG9FcXVhbChcIkVycm9yOkVycm9yIHRocm93biBieSB0aGUgaGFuZGxlclxcblwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmVyaWZpZXMgdGhhdCB0aGUgbm9uIFRocm93aW5nIEhhbmRsZXIgaGFzIG5vdCBiZWVuIHRocm93bi5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYVRocm93aW5nSGFuZGxlcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkhhbmRsZXJzIG11c3QgYmUgY2FsbGVkIGluIHRoZSBzYW1lIG9yZGVyIHRoZXkgYXJlIHJlZ2lzdGVyZWQuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIHNlY29uZEV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDApO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2Vjb25kRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgc2Vjb25kRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgc2Vjb25kRXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbi8vIGltcG9ydCB7RGVzZXJpYWxpemVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXJcIjtcclxuXHJcbmltcG9ydCBTZXJpYWxpemVyID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG5pbXBvcnQgRGVzZXJpYWxpemVyID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG5kZXNjcmliZShcIlNlcmlhbGl6YXRpb25cIiwoKSA9PiB7XHJcbiAgICBcclxuICAgIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gc2VyaWFsaXplL2Rlc2VyaWFsaXplIGV2ZXJ5IHR5cGUgb2Ygb2JqZWN0XCIsKCkgPT4ge1xyXG4gICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHkxOiBcIkEgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgcHJvcGVydHkyOiBcIkFub3RoZXIgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLFwiM1wiLHtwcm9wZXJ0eTE6IFwiRWNob1wifV0sXHJcbiAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBhUmVnRXhwOiBuZXcgUmVnRXhwKFwiXjEyM1wiKSxcclxuICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzZXJpYWxpemVkID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgIHZhciBkZXNlcmlhbGl6ZWQgPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUoc2VyaWFsaXplZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXhwZWN0KGFuT2JqZWN0LnByb3BlcnR5MSkudG9FcXVhbChkZXNlcmlhbGl6ZWQucHJvcGVydHkxKTtcclxuICAgICAgICBleHBlY3QoYW5PYmplY3QucHJvcGVydHkyKS50b0VxdWFsKGRlc2VyaWFsaXplZC5wcm9wZXJ0eTIpO1xyXG4gICAgICAgIGZvcih2YXIgZSBpbiBhbk9iamVjdC5hbkFycmF5KSB7XHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5hbkFycmF5W2VdKS50b0VxdWFsKGRlc2VyaWFsaXplZC5hbkFycmF5W2VdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hRGF0ZSBpbnN0YW5jZW9mIERhdGUpLnRvQmVUcnV0aHkoXCJhRGF0ZSBpcyBub3QgYSBkYXRlXCIpO1xyXG4gICAgICAgIGV4cGVjdChhbk9iamVjdC5hRGF0ZSkudG9FcXVhbChkZXNlcmlhbGl6ZWQuYURhdGUsIFwiYURhdGUgaXMgbm90IHRoZSBzYW1lIGFEYXRlIGl0IHdhcyBiZWZvcmUgc2VyaWFsaXphdGlvblwiKTtcclxuICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkLmFSZWdFeHAgaW5zdGFuY2VvZiBSZWdFeHApLnRvQmVUcnV0aHkoXCJhUmVnRXhwIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBSZWdFeHBcIik7XHJcbiAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFSZWdFeHApLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFSZWdFeHAsIFwiYVJlZ0V4cCBpcyBub3QgdGhlIHNhbWUgYVJlZ0V4cCBpdCB3YXMgYmVmb3JlIHNlcmlhbGl6YXRpb25cIik7XHJcbiAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hTnVsbFZhbHVlKS50b0JlTnVsbChcImFOdWxsVmFsdWUgaXMgbm90IG51bGxcIik7XHJcbiAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hblVuZGVmaW5lZFZhbHVlKS50b0JlVW5kZWZpbmVkKFwiYW5VbmRlZmluZWRWYWx1ZSBpcyBub3QgdW5kZWZpbmVkXCIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KFwiVHdvIHNlcmlhbGl6YXRpb25zIG9mIHRoZSBzYW1lIG9iamVjdCBtdXN0IGJlIGV4YWN0bHkgbWF0Y2hcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHkxOiBcIkEgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgcHJvcGVydHkyOiBcIkFub3RoZXIgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLFwiM1wiLHtwcm9wZXJ0eTE6IFwiRWNob1wifV0sXHJcbiAgICAgICAgICAgIGFOdWxsVmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBhUmVnZXhwOiAvYWJjL2ksXHJcbiAgICAgICAgICAgIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgIHZhciBzZXJpYWxpemVkMiA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQxKS50b0VxdWFsKHNlcmlhbGl6ZWQyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiU2VyaWFsaXphdGlvbiArIERlc2VyaWFsaXphdGlvbiBtdXN0IHJlY3JlYXRlIHRoZSB2ZXJ5IHNhbWUgc3RhcnRpbmcgb2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIixcIjNcIix7cHJvcGVydHkxOiBcIkVjaG9cIn1dLFxyXG4gICAgICAgICAgICBhTnVsbFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgYVJlZ2V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICBhblVuZGVmaW5lZFZhbHVlOiB1bmRlZmluZWRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZXJpYWxpemVkMSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICB2YXIgc3RlcDEgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGVwMTogXCIgKyBzdGVwMSk7XHJcbiAgICAgICAgdmFyIHN0ZXAyID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKCBzdGVwMSApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RlcDI6IFwiICsgc3RlcDIuYVJlZ2V4cC50b1N0cmluZygpICk7XHJcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQyID0gU2VyaWFsaXplci5zZXJpYWxpemUoIHN0ZXAyICk7XHJcblxyXG4gICAgICAgIGV4cGVjdChzZXJpYWxpemVkMSkudG9FcXVhbChzZXJpYWxpemVkMik7XHJcbiAgICB9KTtcclxuXHJcbn0pOyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuXHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9Jbk1lbW9yeVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdERlbGV0ZWRFdmVudC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9FdmVudHMudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnMudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJbk1lbW9yeVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrXCI7XHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge09iamVjdFNhdmVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtPYmplY3REZWxldGVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7VW5pdE9mV29ya0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yVW5pdE9mV29yayB7XHJcblxyXG5cclxuICAgIGltcG9ydCBJbk1lbW9yeVJlcG9zaXRvcnkgPSBERERUb29scy5SZXBvc2l0b3J5LkluTWVtb3J5UmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgVW5pdE9mV29yayA9IERERFRvb2xzLlVuaXRPZldvcmsuVW5pdE9mV29yaztcclxuICAgIGltcG9ydCBJUmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuSVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcbiAgICBpbXBvcnQgT2JqZWN0U2F2ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0U2F2ZWRFdmVudDtcclxuICAgIGltcG9ydCBPYmplY3REZWxldGVkRXZlbnQgPSBERERUb29scy5Vbml0T2ZXb3JrLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgIGltcG9ydCBPYmplY3RSZXRyaWV2ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0UmV0cmlldmVkRXZlbnQ7XHJcbiAgICBpbXBvcnQgRXZlbnRzID0gREREVG9vbHMuVW5pdE9mV29yay5FdmVudHM7XHJcbiAgICBpbXBvcnQgVW5pdE9mV29ya0Vycm9ycyA9IERERFRvb2xzLlVuaXRPZldvcmsuVW5pdE9mV29ya0Vycm9ycztcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5SZXBvc2l0b3J5LkVycm9ycztcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RLZXkgZXh0ZW5kcyBHdWlkIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0S2V5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiQ2lhb1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc2V0QVRlc3RQcm9wZXJ0eSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYVRlc3RQcm9wZXJ0eSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEFUZXN0UHJvcGVydHkoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYVRlc3RQcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgSW5NZW1vcnlSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RVb1cgZXh0ZW5kcyBVbml0T2ZXb3JrPFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihyZXBvOiBJUmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5Pikge1xyXG4gICAgICAgICAgICBzdXBlcihyZXBvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2NyaWJlKFwiVW5pdE9mV29ya1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciByZXBvOiBUZXN0UmVwb3NpdG9yeTtcclxuICAgICAgICB2YXIga2V5czogVGVzdEtleVtdO1xyXG4gICAgICAgIHZhciBhZ2dyZWdhdGVzOiBUZXN0QWdncmVnYXRlW107XHJcbiAgICAgICAgdmFyIG51bWJlck9mQWdncmVnYXRlczogbnVtYmVyID0gMTA7XHJcbiAgICAgICAgdmFyIHVvdzogVGVzdFVvVztcclxuXHJcbiAgICAgICAgdmFyIGluaXRLZXlzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBrZXlzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaW5pdEFnZ3JlZ2F0ZXMgPSAoa2V5czogVGVzdEtleVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFnZ3IgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYWdnci5zZXRLZXkoa2V5c1tpXSk7XHJcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVzLnB1c2goYWdncik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmaWxsUmVwbyA9IChyZXBvOiBJUmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoYWdncmVnYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgPGFueT5UZXN0QWdncmVnYXRlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCIpO1xyXG4gICAgICAgICAgICBpbml0S2V5cygpO1xyXG4gICAgICAgICAgICBpbml0QWdncmVnYXRlcyhrZXlzKTtcclxuICAgICAgICAgICAgZmlsbFJlcG8ocmVwbyk7XHJcblxyXG4gICAgICAgICAgICB1b3cgPSBuZXcgVGVzdFVvVyhyZXBvKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIGEgVW5pdE9mV29yayBmb3IgYSBSZXBvc2l0b3J5LlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1b3cgaW5zdGFuY2VvZiBUZXN0VW9XKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBnZXQgYW4gaXRlbSBhcyBpZiBpdCBjYW1lIGRpcmVjdGx5IGZyb20gdGhlIHJlcG8uXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVvd0FzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZnJvbVVvVyk7XHJcbiAgICAgICAgICAgIHZhciByZXBvQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShmcm9tUmVwbyk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodW93QXNTdHJpbmcpLnRvRXF1YWwodW93QXNTdHJpbmcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIldoZW4gcmV0cmlldmluZyBvYmplY3RzLCBldmVudHMgb2YgdHlwZSBPYmplY3RSZXRyaWV2ZUV2ZW50IG11c3QgYmUgcmFpc2VkLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdFJldHJpZXZlZEV2ZW50LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFmdGVyIGNhbGxpbmcgc2F2ZUFsbCBhbGwgTW9kaWZpZWQgb2JqZWN0cyBtdXN0IGJlIHNhdmVkIGludG8gdGhlIHJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBmcm9tVW9XMC5zZXRBVGVzdFByb3BlcnR5KFwiQnJ1dHRvIVwiKTtcclxuICAgICAgICAgICAgZnJvbVVvVzEuc2V0QVRlc3RQcm9wZXJ0eShcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQsIChldmVudDogT2JqZWN0U2F2ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyLCBcIlRoZSBVb1cgaGFzIG5vdCBzYXZlZCBleGFjdGx5IDIgb2JqZWN0LlwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzEgPSByZXBvLmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8wLmdldEFUZXN0UHJvcGVydHkoKSkudG9FcXVhbChcIkJydXR0byFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzEuZ2V0QVRlc3RQcm9wZXJ0eSgpKS50b0VxdWFsKFwiQkJlbGxvXCIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJVbml0T2ZXb3JrIG11c3Qgc2F2ZSBvbmx5IGVmZmVjdGl2ZWx5IGNoYW5nZWQgb2JqZWN0cy5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gbG9hZGluZyAyIG9iamVjdHMgZnJvbSB0aGUgVW9XIC4uLlxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIC4uLiBidXQgZWRpdGluZyBvbmx5IG9uZS4uLlxyXG4gICAgICAgICAgICBmcm9tVW9XMS5zZXRBVGVzdFByb3BlcnR5KFwiQkJlbGxvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8vIC4uLiB3ZSBleHBlY3QgdG8gZ2V0IG9ubHkgMSBub3RpZmljYXRpb24gZnJvbSB0aGUgVW9XXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQsIChldmVudDogT2JqZWN0U2F2ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGV2ZW50LmlkKS50b0VxdWFsKGtleXNbMV0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEsIFwiVGhlIFVvVyBoYXMgbm90IHNhdmVkIGV4YWN0bHkgMSBvYmplY3QuXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlVuaXRPZldvcmsgbXVzdCBkZWxldGUgY29tcGxldGVseSBhbiBvYmplY3Qgb25seSBhZnRlciBjYWxsaW5nIHNhdmVBbGwuXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0RGVsZXRlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdERlbGV0ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDAsIFwiSGFuZGxlciB0cmlnZ2VyZWQgYmVmb3JlIHNhdmVBbGwgd2FzIGNhbGxlZCFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8wID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgLy8gV2UgZG8gZXhwZWN0IHRvIHN0aWxsIGZpbmRzIHRoZSBkZWxldGVkIGl0ZW1zIGluIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8wKS5ub3QudG9CZU51bGwoXCJFbGVtZW50IDAgZGVsZXRlZCBiZWZvcmUgc2F2ZUFsbFwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMSkubm90LnRvQmVOdWxsKFwiRWxlbWVudCAxIGRlbGV0ZWQgYmVmb3JlIHNhdmVBbGxcIik7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMiwgXCJUaGUgVW9XIGhhcyBub3QgZGVsZXRlZCBleGFjdGx5IDIgb2JqZWN0LlwiKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVJlcG8wID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiSXRlbSAwIHNob3VsZCBiZSBubyBtb3JlIGluIHRoZSByZXBvc2l0b3J5XCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBhcyB0aGUgaXRlbSBzaG91bGQgbm90IGJlIG5vbW9yZSBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tUmVwbzEgPSByZXBvLmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJJdGVtIDEgc2hvdWxkIGJlIG5vIG1vcmUgaW4gdGhlIHJlcG9zaXRvcnlcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIGFzIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgbm9tb3JlIGluIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiQSBkZWxldGVkIGl0ZW0gbXVzdCBub3QgYmUgJ3JldHJpZXZhYmxlJyBmcm9tIHRoZSBVbml0T2ZXb3JrLCBldmVuIGlmIHNhdmVBbGwgd2FzIG5vdCBjYWxsZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBCZWZvcmUgdGhlIHNhdmVBbGwgd2UgZXhwZWN0IHRvIGdldCBhbiBFeGNlcHRpb24gZnJvbSB0aGUgVW5pdE9mV29yayAuLi5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIlRoZSBlbGVtZW50IGhhcyBiZWVuIG1hcmtlZCBhcyBkZWxldGVkLCBidXQgaXQgaXMgc3RpbGwgcmV0dXJuZWQgYnkgdGhlIFVvVy5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlIGluc3RhbmNlb2YgRXJyb3IpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoVW5pdE9mV29ya0Vycm9ycy5JdGVtTWFya2VkQXNEZWxldGVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC4uLiB3aGlsZSBhZnRlciB0aGUgc2F2ZUFsbCB3ZSBleHBlY3QgdG8gZ2V0IGFuIEV4Y2VwdGlvbiBmcm9tIHRoZSB1bmRlcmx5aW5nIFJlcG9zaXRvcnkgLi4uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGUgZWxlbWVudCBoYXMgYmVlbiBtYXJrZWQgYXMgZGVsZXRlZCBhbmQgZGVsZXRlZCwgYnV0IGl0IGlzIHN0aWxsIHJldHVybmVkIGJ5IHRoZSBVb1cuXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZSBpbnN0YW5jZW9mIEVycm9yKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSJdfQ==