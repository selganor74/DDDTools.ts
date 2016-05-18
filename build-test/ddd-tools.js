var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var Guid = DDDTools.ValueObjects.Guid;
        var BaseEntity = DDDTools.Entity.BaseEntity;
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
        var Errors = DDDTools.Repository.Errors;
        var BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;
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
        }(BaseInMemoryRepository));
        beforeEach(function () {
            Factory.registerType("CdC.Tests.Key", "v1", Key);
            Factory.registerType("CdC.Tests.ChildEntity", "v1", ChildEntity);
            Factory.registerType("CdC.Tests.TestAggregate", "v1", TestAggregate);
        });
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
            aRegExp: new RegExp("^123")
        };
        var serialized = Serializer.serialize(anObject);
        var deserialized = Deserializer.deserialize(serialized);
        expect(anObject.property1).toEqual(deserialized.property1);
        expect(anObject.property2).toEqual(deserialized.property2);
        for (var e in anObject.anArray) {
            expect(anObject.anArray[e]).toEqual(deserialized.anArray[e]);
        }
        expect(anObject.aDate).toEqual(deserialized.aDate);
        expect(anObject.aRegExp).toEqual(deserialized.aRegExp);
    });
    it("Two serializations of the same object must be exactly match", function () {
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1", "3", { property1: "Echo" }]
        };
        var serialized1 = Serializer.serialize(anObject);
        var serialized2 = Serializer.serialize(anObject);
        expect(serialized1).toEqual(serialized2);
    });
});
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var ForUnitOfWork;
        (function (ForUnitOfWork) {
            var BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;
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
            }(BaseInMemoryRepository));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QvREREVG9vbHMvQmFzZUluTWVtb3J5UmVwb3NpdG9yeS1zcGVjLnRzIiwiLi4vc3JjL3Rlc3QvREREVG9vbHMvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlVmFsdWVPYmplY3Qtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luUHJvY2Vzc0Rpc3BhdGNoZXItc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL1NlcmlhbGl6YXRpb24tc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL1VuaXRPZldvcmstc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQXVCQSxJQUFVLEdBQUcsQ0F3T1o7QUF4T0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxLQUFLLENBd09sQjtJQXhPYSxXQUFBLEtBQUssRUFBQyxDQUFDO1FBRWpCLElBQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQU8sVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQU8sZUFBZSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBQzlELElBQU8saUJBQWlCLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRSxJQUFPLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFPLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7UUFFM0UsSUFBTyxPQUFPLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUdwRDtZQUF5Qix1QkFBb0I7WUFLekM7Z0JBQ0ksaUJBQU8sQ0FBQztnQkFKWixlQUFVLEdBQUcsZUFBZSxD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LENBQUMsQ0FBQzt3QkFDVCxNQUFNLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN4QyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFoUG1CLGFBQWEsR0FBYixtQkFBYSxLQUFiLG1CQUFhLFFBZ1BoQztJQUFELENBQUMsRUFoUGEsS0FBSyxHQUFMLFNBQUssS0FBTCxTQUFLLFFBZ1BsQjtBQUFELENBQUMsRUFoUFMsR0FBRyxLQUFILEdBQUcsUUFnUFoiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnMudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZUluTWVtb3J5UmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvVHlwZVJlZ2lzdHJ5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCBERERUb29scyA9IHJlcXVpcmUoXCIuL0RERFRvb2xzXCIpXHJcblxyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzIGFzIFJlcG9FcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtUeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnlcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cyB7XHJcblxyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlJlcG9zaXRvcnkuRXJyb3JzO1xyXG4gICAgaW1wb3J0IEJhc2VJbk1lbW9yeVJlcG9zaXRvcnkgPSBERERUb29scy5SZXBvc2l0b3J5LkJhc2VJbk1lbW9yeVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgVHlwZVJlZ2lzdHJ5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuVHlwZVJlZ2lzdHJ5O1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgS2V5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEtleT4ge1xyXG4gICAgICAgIHByaXZhdGUgaWQ6IEd1aWQ7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLktleVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoaWxkRW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxDaGlsZEVudGl0eSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZLZXlzOiBLZXlbXSA9IFtdO1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mRW50aXRpZXM6IENoaWxkRW50aXR5W10gPSBbXTtcclxuICAgICAgICBwdWJsaWMgYW5vbnltb3VzT2JqZWN0OiBhbnkgPSB7fTtcclxuICAgICAgICAvLyBVc2VkIHRvIHRlc3Qgb2JqZWN0cyByZWZlcmVuY2VzIHJlY29uc3RpdHV0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcbiAgICAgICAgcHVibGljIGFub3RoZXJPYmplY3RSZWZlcmVuY2U6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiYSB0ZXN0IHZhbHVlICFcIjtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZUluTWVtb3J5UmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBLZXk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbWFuYWdlZFR5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoVGVzdFJlcG9zaXRvcnkubWFuYWdlZFR5cGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuS2V5XCIsIFwidjFcIiwgS2V5KTtcclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiLCBcInYxXCIsIENoaWxkRW50aXR5KTtcclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgVGVzdEFnZ3JlZ2F0ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VJbk1lbW9yeVJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBSZXBvc2l0b3J5IGNsYXNzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlcG8gaW5zdGFuY2VvZiBUZXN0UmVwb3NpdG9yeSkudG9FcXVhbCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IHRocm93ICdLZXlOb3RTZXQnIHdoZW4gc2F2aW5nIGFuIGVudGl0eSB3aXRob3V0IGtleSBzZXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gc2F2ZSBhbiBlbnRpdHkgd2l0aCB0aGUga2V5IHNldFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuS2V5Tm90U2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXQgc2hvdWxkIHRocm93IEl0ZW1Ob3RGb3VuZCBpZiBhIGtleSBpcyBub3QgcHJlc2VudCBpbiB0aGUgcmVwb3NpdG9yeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkyID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCgoKSA9PiB7IHJlcG8uZ2V0QnlJZChrZXkyKSB9KS50b1Rocm93KG5ldyBFcnJvcihFcnJvcnMuSXRlbU5vdEZvdW5kKSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSBhbiBhcnJheVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ldyBDaGlsZEVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFycmF5T2ZFbnRpdGllcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcnJheU9mS2V5cy5wdXNoKG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2FsdmF0b1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJSZWN1cGVyYXRvXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVE9ETyBUaGUgZm9sbG93aW5nIHRlc3Qgc3RhcnRlZCB0byBmYWlsIGFmdGVyIGdldHRpbmcgYmFjayB0byBuYW1lc3BhY2VzLi4uXHJcbiAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZCBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoQXJyYXkuaXNBcnJheShyZWxvYWRlZC5hcnJheU9mRW50aXRpZXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyB0KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjZSA9IHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllc1t0XTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KGNlLmFycmF5T2ZLZXlzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjZS5hcnJheU9mS2V5cy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSAnYW5vbnltb3VzJyBvYmplY3RzLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFub3RoZXJFbnRpdHkgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhbm90aGVyRW50aXR5LnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSA9IGFub3RoZXJFbnRpdHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlID0gNDI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuICAgIFxyXG4gICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFub255bW91c09iamVjdC5hTnVtYmVyVHlwZSkudG9FcXVhbCg0MiwgXCJQcm9wZXJ0eSBhTnVtYmVyVHlwZSB3YXMgbm90IGNvcnJlY3RseSByZWNvbnN0aXR1dGVkLlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgcmVmZXJlbmNlcyB0byB0aGUgc2FtZSBpbnN0YW5jZS5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIkZlYXR1cmUgbm9uIGFuY29yYSBzdmlsdXBwYXRhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5ID0ge1xyXG4gICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkEgdGVzdCB2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgYUNvbXBvc2l0ZVByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkFub3RoZXIgdGVzdCB2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFuT2JqZWN0UmVmZXJlbmNlID0gYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5O1xyXG4gICAgICAgICAgICBpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoaXRlbS5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgdGhlIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5PYmplY3RSZWZlcmVuY2UpLnRvRXF1YWwocmVsb2FkZWQuYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlJldmlzaW9uSWQgbXVzdCBiZSBpbmNyZW1lbnRlZCBvbmx5IGlmIG9iamVjdCB0byBiZSBzYXZlZCBkaWZmZXJzIGZyb20gb2JqZWN0IHNhdmVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5LCBVcGdyYWRlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYyIHtcclxuXHJcbiAgICBpbXBvcnQgVGVzdEVudGl0eSA9IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eTtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYyXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEge1xyXG5cclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuICAgIGltcG9ydCBVcGdyYWRlciA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LlVwZ3JhZGVyO1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkVycm9ycztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjNcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGFOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBhTmV3TmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3TmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYzXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MlwiO1xyXG5cclxuICAgICAgICBnZXRVcGdyYWRlZEluc3RhbmNlKGZyb21JbnN0YW5jZTogQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KTogVGVzdEVudGl0eSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSB3YXMgbm90IGluIFwidjFcIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYU5ld1Byb3BlcnR5OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlIGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5Tm9uVXBncmFkYWJsZSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eU5vblVwZ3JhZGFibGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQUNsYXNzV2l0aE1hbnlUeXBlcyBleHRlbmRzIEJhc2VFbnRpdHk8QUNsYXNzV2l0aE1hbnlUeXBlcywgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlc1wiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIC8vIFByaW1pdGl2ZSBEYXRhdHlwZXNcclxuICAgICAgICBwdWJsaWMgYU51bWJlcjogTnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBhU3RyaW5nOiBTdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGFCb29sZWFuOiBCb29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdDogT2JqZWN0O1xyXG5cclxuICAgICAgICAvLyBFeHRlbmRlZCB0eXBlc1xyXG4gICAgICAgIHB1YmxpYyBhUmVnRXhwOiBSZWdFeHA7XHJcbiAgICAgICAgcHVibGljIGFEYXRlOiBEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZVVwZ3JhZGVyXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MlwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2M1wiLCA8YW55PkEzU3RlcFVwZ3JhZGFibGVJdGVtKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCIsIFwidjJcIiwgPGFueT5UZXN0RW50aXR5KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlXCIsIFwidjFcIiwgPGFueT5UZXN0RW50aXR5Tm9uVXBncmFkYWJsZSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzXCIsIFwidjFcIiwgPGFueT5BQ2xhc3NXaXRoTWFueVR5cGVzKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiY29tcHV0ZU5leHRWZXJzaW9uIGRldmUgcmVzdGl0dWlyZSBpbCB2YWxvcmUgY29ycmV0dG8gZGVsbGEgdmVyc2lvbmUgc3VjY2Vzc2l2YVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29tcHV0ZWQgPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oXCJ2MVwiKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb21wdXRlZCkudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImNvbXB1dGVOZXh0VmVyc2lvbiBkZXZlIHJlc3RpdHVpcmUgdW4gZXJyb3JlIHNlIGxhIHZlcnNpb25lIG5vbiDDqCBjb3JyZXR0YS5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4cGVjdGVkRXJyb3IgPSBuZXcgRXJyb3IoRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQpO1xyXG4gICAgICAgICAgICBleHBlY3RlZEVycm9yLm1lc3NhZ2UgPSBcIlNwZWNpZmllZCB2ZXJzaW9uIG0xNSBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KCgpID0+IHsgdmFyIGNvbXB1dGVkID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKFwibTE1XCIpOyB9KS50b1Rocm93KGV4cGVjdGVkRXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIGRldmUgcmVzdGl0dWlyZSBmYWxzZSBwZXIgZ2xpIG9nZ2V0dGkgY2hlIG5vbiBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmVlZHNVcGdyYWRlID0gVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0ZS5fX3R5cGVOYW1lLCB0ZS5fX3R5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChuZWVkc1VwZ3JhZGUpLnRvQmVGYWxzeShcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgc2hvdWxkIGhhdmUgcmV0dXJuZWQgZmFsc2UhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgZGV2ZSByZXN0aXR1aXJlIHRydWUgcGVyIGdsaSBvZ2dldHRpIGNoZSBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5lZWRzVXBncmFkZSA9IFVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodGUuX190eXBlTmFtZSwgdGUuX190eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QobmVlZHNVcGdyYWRlKS50b0JlVHJ1dGh5KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBzaG91bGQgaGF2ZSByZXR1cm5lZCB0cnVlIVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJ1cGdyYWRlIG11c3QgYmUgYWJsZSB0byB1cGdyYWRlIGEgUGVyc2lzdGFibGVPYmplY3QgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uIFsyIHN0ZXBzXVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodGUuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYxXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gPFRlc3RFbnRpdHk+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwidXBncmFkZSBtdXN0IGJlIGFibGUgdG8gdXBncmFkZSBhIFBlcnNpc3RhYmxlT2JqZWN0IHRvIGl0cyBsYXRlc3QgdmVyc2lvbiBbMyBzdGVwc11cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh0ZS5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSA8QTNTdGVwVXBncmFkYWJsZUl0ZW0+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYzXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3TmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBSZWdFeHAgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdFJlZ0V4cCA9IFwiL152WzAtOV0rXCI7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gXCJ2MTIzXCI7XHJcbiAgICAgICAgICAgIHRlLmFSZWdFeHAgPSBuZXcgUmVnRXhwKHRlc3RSZWdFeHApO1xyXG4gICAgICAgICAgICB2YXIgcmVnRXhwUmVzdWx0ID0gdGUuYVJlZ0V4cC50ZXN0KHRlc3RTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gPEFDbGFzc1dpdGhNYW55VHlwZXM+dGUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwKS50b0JlVHJ1dGh5KFwiYVJlZ0V4cCBpcyBub3QgYSBSZWdFeHAgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwLnRlc3QoXCJ2MTIzXCIpKS50b0VxdWFsKHJlZ0V4cFJlc3VsdCwgXCJhUmVnRXhwIG5vbiBzaSBjb21wb3J0YSBjb21lIGxhIFJlZ3VsYXJFeHByZXNzaW9uIG9yaWdpbmFsZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBEYXRlIHR5cGVzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlcygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRlLmFEYXRlID0gdGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSA8QUNsYXNzV2l0aE1hbnlUeXBlcz50ZS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhIERhdGUgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hRGF0ZS50b1N0cmluZygpICkudG9FcXVhbCh0ZXN0RGF0ZS50b1N0cmluZygpLCBcImFEYXRlIG5vbiDDqCBzdGF0YSByaXByaXN0aW5hdGEgY29tZSBEYXRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdCB7XHJcblxyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgdmlhOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgbnVtZXJvOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2l0dGE6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBjYXA6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0X0FycmF5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdF9BcnJheT4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgYXJyYXlPZlNvbWV0aGluZzogYW55W11cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RWYWx1ZU9iamVjdF9PYmplY3QgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VGVzdFZhbHVlT2JqZWN0X09iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X09iamVjdFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHNvbWVPYmplY3Q6IGFueVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VWYWx1ZU9iamVjdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdFwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3QpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9BcnJheSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfT2JqZWN0XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9PYmplY3QpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJWYWx1ZU9iamVjdHMgbXVzdCBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZWlyIGNvbnRlbnQuIC0gQmFzZSB0eXBlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzIgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBcInZpYSBkZWwgY2FtcG9cIixcclxuICAgICAgICAgICAgICAgIDY5LFxyXG4gICAgICAgICAgICAgICAgXCJHZW5vdmFcIixcclxuICAgICAgICAgICAgICAgIFwieHh4eHhcIlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVmFsdWVPYmplY3RzIG11c3QgYmUgY29tcGFyZWQgYWdhaW5zdCB0aGVpciBjb250ZW50LiAtIEFycmF5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbeyBwMTogMywgcDI6IDQyIH0sIHsgcDE6IDYsIHAzOiA5NiB9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9BcnJheShcclxuICAgICAgICAgICAgICAgIFt7IHAxOiAzLCBwMjogNDIgfSwgeyBwMTogNiwgcDM6IDk2IH1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X0FycmF5KFxyXG4gICAgICAgICAgICAgICAgW3sgcDE6IDYsIHAzOiA5NiB9LCB7IHAxOiAzLCBwMjogNDIgfV1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlZhbHVlT2JqZWN0cyBtdXN0IGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlaXIgY29udGVudC4gLSBPYmplY3RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiA2LCBwMzogOTYgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SW5Qcm9jZXNzRGlzcGF0Y2hlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyXCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckRpc3BhdGNoZXIge1xyXG5cclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICBpbXBvcnQgSUV2ZW50SGFuZGxlciA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRXZlbnRIYW5kbGVyO1xyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEluUHJvY2Vzc0Rpc3BhdGNoZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuSW5Qcm9jZXNzRGlzcGF0Y2hlcjtcclxuXHJcblxyXG4gICAgY2xhc3MgYURvbWFpbkV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PGFEb21haW5FdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJblByb2Nlc3NEaXNwYXRjaGVyXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJNdWx0aXBsZSByZWdpc3RyYXRpb24gb2YgdGhlIHNhbWUgZXZlbnRoYW5kbGVyLCBtdXN0IGJlIHRyZWF0ZWQgYXMgb25lLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdHdpY2UsIGJ1dCBkaXNwYXRjaGVyIHNob3VsZCBjYWxsIGl0IG9uY2UuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFmdGVyIGRlcmVnaXN0ZXJpbmcgYW4gaGFuZGxlciwgZGlzcGF0Y2ggbXVzdCBub3QgY2FsbCBpdCBhbnltb3JlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEp1c3QgdG8gdmVyaWZ5IHRoYXQgSGFuZGxlciBoYXMgYmVlbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFsbCBoYW5kbGVycyB3aWxsIGJlIGNhbGxlZCBieSBkaXNwYXRjaCwgZXZlbiBpZiBoYW5kbGVycyB0aHJvdy5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgYVRocm93aW5nSGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgYVRocm93aW5nSGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYVRocm93aW5nSGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm1lc3NhZ2UpLnRvRXF1YWwoXCJFcnJvcjpFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcXG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWVzIHRoYXQgdGhlIG5vbiBUaHJvd2luZyBIYW5kbGVyIGhhcyBub3QgYmVlbiB0aHJvd24uXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFUaHJvd2luZ0hhbmRsZXIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJIYW5kbGVycyBtdXN0IGJlIGNhbGxlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGV5IGFyZSByZWdpc3RlcmVkLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRFdmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNlY29uZEV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG4vLyBpbXBvcnQge0Rlc2VyaWFsaXplcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyXCI7XHJcblxyXG5pbXBvcnQgU2VyaWFsaXplciA9IERERFRvb2xzLlNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuaW1wb3J0IERlc2VyaWFsaXplciA9IERERFRvb2xzLlNlcmlhbGl6YXRpb24uRGVzZXJpYWxpemVyO1xyXG5cclxuZGVzY3JpYmUoXCJTZXJpYWxpemF0aW9uXCIsKCkgPT4ge1xyXG4gICAgXHJcbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIHNlcmlhbGl6ZS9kZXNlcmlhbGl6ZSBldmVyeSB0eXBlIG9mIG9iamVjdFwiLCgpID0+IHtcclxuICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIixcIjNcIix7cHJvcGVydHkxOiBcIkVjaG9cIn1dLFxyXG4gICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgYVJlZ0V4cDogbmV3IFJlZ0V4cChcIl4xMjNcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcbiAgICAgICAgdmFyIGRlc2VyaWFsaXplZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShzZXJpYWxpemVkKTtcclxuICAgICAgICBcclxuICAgICAgICBleHBlY3QoYW5PYmplY3QucHJvcGVydHkxKS50b0VxdWFsKGRlc2VyaWFsaXplZC5wcm9wZXJ0eTEpO1xyXG4gICAgICAgIGV4cGVjdChhbk9iamVjdC5wcm9wZXJ0eTIpLnRvRXF1YWwoZGVzZXJpYWxpemVkLnByb3BlcnR5Mik7XHJcbiAgICAgICAgZm9yKHZhciBlIGluIGFuT2JqZWN0LmFuQXJyYXkpIHtcclxuICAgICAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFuQXJyYXlbZV0pLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFuQXJyYXlbZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBlY3QoYW5PYmplY3QuYURhdGUpLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFEYXRlKTtcclxuICAgICAgICBleHBlY3QoYW5PYmplY3QuYVJlZ0V4cCkudG9FcXVhbChkZXNlcmlhbGl6ZWQuYVJlZ0V4cCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoXCJUd28gc2VyaWFsaXphdGlvbnMgb2YgdGhlIHNhbWUgb2JqZWN0IG11c3QgYmUgZXhhY3RseSBtYXRjaFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsXCIzXCIse3Byb3BlcnR5MTogXCJFY2hvXCJ9XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgIHZhciBzZXJpYWxpemVkMiA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQxKS50b0VxdWFsKHNlcmlhbGl6ZWQyKTtcclxuICAgIH0pO1xyXG59KTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcblxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZUluTWVtb3J5UmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7R3VpZH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbi8vIGltcG9ydCB7VW5pdE9mV29ya30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya1wiO1xyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtPYmplY3RTYXZlZEV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0RGVsZXRlZEV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtPYmplY3RSZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge1VuaXRPZldvcmtFcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtFcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvclVuaXRPZldvcmsge1xyXG5cclxuXHJcbiAgICBpbXBvcnQgQmFzZUluTWVtb3J5UmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuQmFzZUluTWVtb3J5UmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgVW5pdE9mV29yayA9IERERFRvb2xzLlVuaXRPZldvcmsuVW5pdE9mV29yaztcclxuICAgIGltcG9ydCBJUmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuSVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcbiAgICBpbXBvcnQgT2JqZWN0U2F2ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0U2F2ZWRFdmVudDtcclxuICAgIGltcG9ydCBPYmplY3REZWxldGVkRXZlbnQgPSBERERUb29scy5Vbml0T2ZXb3JrLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgIGltcG9ydCBPYmplY3RSZXRyaWV2ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0UmV0cmlldmVkRXZlbnQ7XHJcbiAgICBpbXBvcnQgRXZlbnRzID0gREREVG9vbHMuVW5pdE9mV29yay5FdmVudHM7XHJcbiAgICBpbXBvcnQgVW5pdE9mV29ya0Vycm9ycyA9IERERFRvb2xzLlVuaXRPZldvcmsuVW5pdE9mV29ya0Vycm9ycztcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5SZXBvc2l0b3J5LkVycm9ycztcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RLZXkgZXh0ZW5kcyBHdWlkIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0S2V5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiQ2lhb1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc2V0QVRlc3RQcm9wZXJ0eSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYVRlc3RQcm9wZXJ0eSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEFUZXN0UHJvcGVydHkoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYVRlc3RQcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZUluTWVtb3J5UmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0VW9XIGV4dGVuZHMgVW5pdE9mV29yazxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocmVwbzogSVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4pIHtcclxuICAgICAgICAgICAgc3VwZXIocmVwbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZXNjcmliZShcIlVuaXRPZldvcmtcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgcmVwbzogVGVzdFJlcG9zaXRvcnk7XHJcbiAgICAgICAgdmFyIGtleXM6IFRlc3RLZXlbXTtcclxuICAgICAgICB2YXIgYWdncmVnYXRlczogVGVzdEFnZ3JlZ2F0ZVtdO1xyXG4gICAgICAgIHZhciBudW1iZXJPZkFnZ3JlZ2F0ZXM6IG51bWJlciA9IDEwO1xyXG4gICAgICAgIHZhciB1b3c6IFRlc3RVb1c7XHJcblxyXG4gICAgICAgIHZhciBpbml0S2V5cyA9ICgpID0+IHtcclxuICAgICAgICAgICAga2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goR3VpZC5nZW5lcmF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGluaXRBZ2dyZWdhdGVzID0gKGtleXM6IFRlc3RLZXlbXSkgPT4ge1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZ2dyID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgICAgIGFnZ3Iuc2V0S2V5KGtleXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgYWdncmVnYXRlcy5wdXNoKGFnZ3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZmlsbFJlcG8gPSAocmVwbzogSVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4pID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGFnZ3JlZ2F0ZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiLCBcInYxXCIsIDxhbnk+VGVzdEFnZ3JlZ2F0ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiKTtcclxuICAgICAgICAgICAgaW5pdEtleXMoKTtcclxuICAgICAgICAgICAgaW5pdEFnZ3JlZ2F0ZXMoa2V5cyk7XHJcbiAgICAgICAgICAgIGZpbGxSZXBvKHJlcG8pO1xyXG5cclxuICAgICAgICAgICAgdW93ID0gbmV3IFRlc3RVb1cocmVwbyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIFVuaXRPZldvcmsgZm9yIGEgUmVwb3NpdG9yeS5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QodW93IGluc3RhbmNlb2YgVGVzdFVvVykudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gZ2V0IGFuIGl0ZW0gYXMgaWYgaXQgY2FtZSBkaXJlY3RseSBmcm9tIHRoZSByZXBvLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbyA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1b3dBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGZyb21Vb1cpO1xyXG4gICAgICAgICAgICB2YXIgcmVwb0FzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZnJvbVJlcG8pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHVvd0FzU3RyaW5nKS50b0VxdWFsKHVvd0FzU3RyaW5nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJXaGVuIHJldHJpZXZpbmcgb2JqZWN0cywgZXZlbnRzIG9mIHR5cGUgT2JqZWN0UmV0cmlldmVFdmVudCBtdXN0IGJlIHJhaXNlZC5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RSZXRyaWV2ZWRFdmVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBZnRlciBjYWxsaW5nIHNhdmVBbGwgYWxsIE1vZGlmaWVkIG9iamVjdHMgbXVzdCBiZSBzYXZlZCBpbnRvIHRoZSByZXBvc2l0b3J5XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZnJvbVVvVzAuc2V0QVRlc3RQcm9wZXJ0eShcIkJydXR0byFcIik7XHJcbiAgICAgICAgICAgIGZyb21Vb1cxLnNldEFUZXN0UHJvcGVydHkoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdFNhdmVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMiwgXCJUaGUgVW9XIGhhcyBub3Qgc2F2ZWQgZXhhY3RseSAyIG9iamVjdC5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8wID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMC5nZXRBVGVzdFByb3BlcnR5KCkpLnRvRXF1YWwoXCJCcnV0dG8hXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8xLmdldEFUZXN0UHJvcGVydHkoKSkudG9FcXVhbChcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVW5pdE9mV29yayBtdXN0IHNhdmUgb25seSBlZmZlY3RpdmVseSBjaGFuZ2VkIG9iamVjdHMuXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvYWRpbmcgMiBvYmplY3RzIGZyb20gdGhlIFVvVyAuLi5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyAuLi4gYnV0IGVkaXRpbmcgb25seSBvbmUuLi5cclxuICAgICAgICAgICAgZnJvbVVvVzEuc2V0QVRlc3RQcm9wZXJ0eShcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vLyAuLi4gd2UgZXhwZWN0IHRvIGdldCBvbmx5IDEgbm90aWZpY2F0aW9uIGZyb20gdGhlIFVvV1xyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdFNhdmVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIGV4cGVjdChldmVudC5pZCkudG9FcXVhbChrZXlzWzFdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxLCBcIlRoZSBVb1cgaGFzIG5vdCBzYXZlZCBleGFjdGx5IDEgb2JqZWN0LlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJVbml0T2ZXb3JrIG11c3QgZGVsZXRlIGNvbXBsZXRlbHkgYW4gb2JqZWN0IG9ubHkgYWZ0ZXIgY2FsbGluZyBzYXZlQWxsLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudCwgKGV2ZW50OiBPYmplY3REZWxldGVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwLCBcIkhhbmRsZXIgdHJpZ2dlcmVkIGJlZm9yZSBzYXZlQWxsIHdhcyBjYWxsZWQhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlIGRvIGV4cGVjdCB0byBzdGlsbCBmaW5kcyB0aGUgZGVsZXRlZCBpdGVtcyBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMCkubm90LnRvQmVOdWxsKFwiRWxlbWVudCAwIGRlbGV0ZWQgYmVmb3JlIHNhdmVBbGxcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzEpLm5vdC50b0JlTnVsbChcIkVsZW1lbnQgMSBkZWxldGVkIGJlZm9yZSBzYXZlQWxsXCIpO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIsIFwiVGhlIFVvVyBoYXMgbm90IGRlbGV0ZWQgZXhhY3RseSAyIG9iamVjdC5cIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkl0ZW0gMCBzaG91bGQgYmUgbm8gbW9yZSBpbiB0aGUgcmVwb3NpdG9yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgYXMgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSBub21vcmUgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiSXRlbSAxIHNob3VsZCBiZSBubyBtb3JlIGluIHRoZSByZXBvc2l0b3J5XCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBhcyB0aGUgaXRlbSBzaG91bGQgbm90IGJlIG5vbW9yZSBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkEgZGVsZXRlZCBpdGVtIG11c3Qgbm90IGJlICdyZXRyaWV2YWJsZScgZnJvbSB0aGUgVW5pdE9mV29yaywgZXZlbiBpZiBzYXZlQWxsIHdhcyBub3QgY2FsbGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQmVmb3JlIHRoZSBzYXZlQWxsIHdlIGV4cGVjdCB0byBnZXQgYW4gRXhjZXB0aW9uIGZyb20gdGhlIFVuaXRPZldvcmsgLi4uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGUgZWxlbWVudCBoYXMgYmVlbiBtYXJrZWQgYXMgZGVsZXRlZCwgYnV0IGl0IGlzIHN0aWxsIHJldHVybmVkIGJ5IHRoZSBVb1cuXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZSBpbnN0YW5jZW9mIEVycm9yKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKFVuaXRPZldvcmtFcnJvcnMuSXRlbU1hcmtlZEFzRGVsZXRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAuLi4gd2hpbGUgYWZ0ZXIgdGhlIHNhdmVBbGwgd2UgZXhwZWN0IHRvIGdldCBhbiBFeGNlcHRpb24gZnJvbSB0aGUgdW5kZXJseWluZyBSZXBvc2l0b3J5IC4uLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlIGVsZW1lbnQgaGFzIGJlZW4gbWFya2VkIGFzIGRlbGV0ZWQgYW5kIGRlbGV0ZWQsIGJ1dCBpdCBpcyBzdGlsbCByZXR1cm5lZCBieSB0aGUgVW9XLlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUgaW5zdGFuY2VvZiBFcnJvcikudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=