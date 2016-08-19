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
                    this.aNullValue = null;
                }
                return AClassWithManyTypes;
            }(BaseEntity));
            BasePersistableObject.AClassWithManyTypes = AClassWithManyTypes;
            describe("BasePersistableObject", function () {
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
        var BaseStateMachine;
        (function (BaseStateMachine_1) {
            var BaseStateMachine = DDDTools.StateMachine.BaseStateMachine;
            var KindsOfEventHandler = DDDTools.StateMachine.KindsOfEventHandler;
            var HandlerResult = DDDTools.StateMachine.HandlerResult;
            var PromiseHandler = DDDTools.Promises.PromiseHandler;
            var stateMachineDefinition = {
                "From_A_to_B": {
                    "State_A": "State_B"
                },
                "From_B_to_C": {
                    "State_B": "State_C"
                }
            };
            var aStateMachine = (function (_super) {
                __extends(aStateMachine, _super);
                function aStateMachine() {
                    _super.apply(this, arguments);
                    this.__typeName = "aStateMachine";
                    this.__typeVersion = "v1";
                }
                return aStateMachine;
            }(BaseStateMachine));
            describe("BaseStateMachine", function () {
                var sut;
                beforeEach(function () {
                    sut = new aStateMachine("State_A", stateMachineDefinition);
                });
                it("Must be possible to instantiate the state machine", function () {
                    var asm = new aStateMachine("State_A", stateMachineDefinition);
                    expect(asm instanceof aStateMachine).toBeTruthy("The created object is not an 'aStateMachine'");
                });
                it("Must be possibile to process event From_A_to_B when in the State_A status", function (done) {
                    sut.processEvent("From_A_to_B").then(function (result) {
                        expect(result.okToChange).toBeTruthy("The change should be allowed!");
                        expect(sut.getCurrentStatus()).toEqual("State_B", "The State machine is not in State_B");
                        expect(sut.getPreviousStatus()).toEqual("State_A", "The State machine previous status is not State_A");
                        done();
                    });
                });
                it("Must NOT be possibile to process event From_B_to_C when in the State_A status", function (done) {
                    sut.processEvent("From_B_to_C").then(function (result) {
                        expect(result.okToChange).toBeFalsy("The change should NOT be allowed!");
                        done();
                    });
                });
                it("Must NOT be possibile to process event From_A_to_B when in the State_A status, if a beforeExit handler says it should not be done", function (done) {
                    sut.registerHandler(function (event) { return PromiseHandler.when(new HandlerResult(false, "No, you can't!")); }, KindsOfEventHandler.beforeExitStatus);
                    sut.processEvent("From_A_to_B").then(function (result) {
                        expect(result.okToChange).toBeFalsy("The change should NOT be allowed!");
                        done();
                    });
                });
                it("Must NOT be possibile to process event From_A_to_B when in the State_A status, if a beforeEnter handler says it should not be done", function (done) {
                    sut.registerHandler(function (event) { return PromiseHandler.when(new HandlerResult(false, "No, you can't!")); }, KindsOfEventHandler.beforeEnterStatus);
                    sut.processEvent("From_A_to_B").then(function (result) {
                        expect(result.okToChange).toBeFalsy("The change should NOT be allowed!");
                        done();
                    });
                });
                it("Must be possibile to process event From_A_to_B when in the State_A status, if a afterExit handler returns okToChange = false", function (done) {
                    sut.registerHandler(function (event) { return PromiseHandler.when(new HandlerResult(false, "No, you can't!")); }, KindsOfEventHandler.afterExitStatus);
                    sut.processEvent("From_A_to_B").then(function (result) {
                        expect(result.okToChange).toBeTruthy("The change should be allowed anyhow!");
                        expect(sut.getCurrentStatus()).toBe("State_B");
                        done();
                    });
                });
                it("Must be possibile to process event From_A_to_B when in the State_A status, if a afterEnter handler returns okToChange = false", function (done) {
                    sut.registerHandler(function (event) { return PromiseHandler.when(new HandlerResult(false, "No, you can't!")); }, KindsOfEventHandler.afterEnterStatus);
                    sut.processEvent("From_A_to_B").then(function (result) {
                        expect(result.okToChange).toBeTruthy("The change should be allowed anyhow!");
                        expect(sut.getCurrentStatus()).toBe("State_B");
                        done();
                    });
                });
                it("The order in which handler are called must be correct!", function (done) {
                    var counter = 1;
                    sut.registerHandler(function (event) {
                        expect(counter).toBe(1, "beforeExitHandler must be the first called");
                        counter++;
                        return PromiseHandler.when(new HandlerResult(true, ""));
                    }, KindsOfEventHandler.beforeExitStatus);
                    sut.registerHandler(function (event) {
                        expect(counter).toBe(2, "beforeEnterHandler must be the second called");
                        counter++;
                        return PromiseHandler.when(new HandlerResult(true, ""));
                    }, KindsOfEventHandler.beforeEnterStatus);
                    sut.registerHandler(function (event) {
                        expect(counter).toBe(3, "afterExitHandler must be the third called");
                        counter++;
                        return PromiseHandler.when(new HandlerResult(true, ""));
                    }, KindsOfEventHandler.afterExitStatus);
                    sut.registerHandler(function (event) {
                        expect(counter).toBe(4, "afterEnterHandler must be the fourth called");
                        counter++;
                        return PromiseHandler.when(new HandlerResult(true, ""));
                    }, KindsOfEventHandler.afterEnterStatus);
                    sut.registerHandler(function (event) {
                        expect(counter).toBe(5, "onSuccesfulEventProcessed must be the fifth called");
                        counter++;
                        return PromiseHandler.when(new HandlerResult(true, ""));
                    }, KindsOfEventHandler.onSuccesfulEventProcessed);
                    sut.processEvent("From_A_to_B").then(function (result) {
                        done();
                    });
                });
            });
        })(BaseStateMachine = Tests.BaseStateMachine || (Tests.BaseStateMachine = {}));
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
                it("Must be possible to find multiple ValueObjects in an array via the findInArray function", function () {
                    var arrayOfVOs = [];
                    var vo1 = new TestValueObject_Object({ p1: 3, p2: 42 });
                    var vo2 = new TestValueObject_Object({ p1: 3, p2: 42 });
                    var vo3 = new TestValueObject_Object({ p1: 6, p3: 96 });
                    var vo4 = new TestValueObject_Object({ p1: 6, p3: 96 });
                    arrayOfVOs.push(vo1);
                    arrayOfVOs.push(vo2);
                    arrayOfVOs.push(vo3);
                    arrayOfVOs.push(vo4);
                    var toFind = new TestValueObject_Object({ p1: 6, p3: 96 });
                    var result = toFind.findInArray(arrayOfVOs);
                    expect(result.length).toEqual(2, "The function did not find the 2 elements it should have found.");
                    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                        var i = result_1[_i];
                        expect(arrayOfVOs[i].equals(toFind)).toBeTruthy("Some elements found do not equals element to find.");
                    }
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
                expect(e.getRevisionId()).toEqual(0);
                repo.save(e);
                expect(e.getRevisionId()).toEqual(0);
                e.aTestProperty = "... after saving";
                repo.save(e);
                expect(e.getRevisionId()).toEqual(1);
            });
            it("RevisionId must NOT be incremented when using 'replace' method", function () {
                var repo = new TestRepository();
                var e = new TestAggregate();
                e.setKey(new Key());
                e.aTestProperty = "Before saving...";
                expect(e.getRevisionId()).toEqual(0);
                repo.save(e);
                expect(e.getRevisionId()).toEqual(0);
                e.aTestProperty = "... after saving";
                repo.replace(e);
                expect(e.getRevisionId()).toEqual(0);
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
                        expect(e.getRevisionId()).toEqual(0);
                        return repo.save(e);
                    }).then(function () {
                        expect(e.getRevisionId()).toEqual(0);
                        e.aTestProperty = "... after saving";
                        return repo.save(e);
                    }).then(function () {
                        expect(e.getRevisionId()).toEqual(1);
                        done();
                    }, function (err) {
                        expect(false).toBeTruthy("Exception while saving or retrieving the item. " + err.message);
                        done();
                    });
                });
                it("RevisionId must NOT be incremented if using 'replace' method.", function (done) {
                    var repo = new TestRepository();
                    var e = new TestAggregate();
                    e.setKey(new Key());
                    e.aTestProperty = "Before saving...";
                    expect(e.getRevisionId()).toEqual(0);
                    repo.save(e).then(function () {
                        expect(e.getRevisionId()).toEqual(0);
                        return repo.save(e);
                    }).then(function () {
                        expect(e.getRevisionId()).toEqual(0);
                        e.aTestProperty = "... after saving";
                        return repo.replace(e);
                    }).then(function () {
                        expect(e.getRevisionId()).toEqual(0);
                        done();
                    }, function (err) {
                        expect(false).toBeTruthy("Exception while saving or retrieving the item. " + err.message);
                        done();
                    });
                });
                it("Exception thrown by item reconstitution, must be catched in the error function of the returned promise", function (done) {
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
            var PromiseHandler = DDDTools.Promises.PromiseHandler;
            var aClassContainingAnHandlerAndSomeOtherStuff = (function () {
                function aClassContainingAnHandlerAndSomeOtherStuff() {
                    this.aNumber = 0;
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", this.eventHandler, this);
                }
                aClassContainingAnHandlerAndSomeOtherStuff.prototype.aFunctionInMyContext = function () {
                    this.aNumber = 1;
                };
                aClassContainingAnHandlerAndSomeOtherStuff.prototype.eventHandler = function (event) {
                    expect(event).not.toBeUndefined("The event arrived to the eventhandler is undefined.");
                    this.aFunctionInMyContext();
                };
                return aClassContainingAnHandlerAndSomeOtherStuff;
            }());
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
                it("Handlers must be called in their orginal 'this' context", function () {
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    var classWithHandler = new aClassContainingAnHandlerAndSomeOtherStuff();
                    spyOn(classWithHandler, "aFunctionInMyContext").and.callThrough();
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", classWithHandler.eventHandler, classWithHandler);
                    DomainDispatcher.dispatch(new aDomainEvent());
                    expect(classWithHandler.aFunctionInMyContext).toHaveBeenCalledTimes(1);
                });
                it("Must be possible to re-register an handler in a different instanced of the dispatcher.", function () {
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    var classWithHandler = new aClassContainingAnHandlerAndSomeOtherStuff();
                    spyOn(classWithHandler, "aFunctionInMyContext").and.callThrough();
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", classWithHandler.eventHandler, classWithHandler);
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", classWithHandler.eventHandler, classWithHandler);
                    DomainDispatcher.dispatch(new aDomainEvent());
                    expect(classWithHandler.aFunctionInMyContext).toHaveBeenCalledTimes(1);
                });
                it("dispatch must return a promise that will be resolved when all event handlers are done", function (done) {
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    var secondRun = false;
                    var firstRun = false;
                    function anHandlerReturningAPromise(event) {
                        var deferred = PromiseHandler.defer();
                        setTimeout(function () {
                            firstRun = true;
                            deferred.resolve();
                        }, 50);
                        return deferred.promise;
                    }
                    function anotherHandlerReturningAPromise(event) {
                        var deferred = PromiseHandler.defer();
                        setTimeout(function () {
                            secondRun = true;
                            deferred.resolve();
                        }, 100);
                        return deferred.promise;
                    }
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", anHandlerReturningAPromise);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", anotherHandlerReturningAPromise);
                    DomainDispatcher.dispatch(new aDomainEvent()).then(function () {
                        expect(firstRun).toBeTruthy("Promise resolved but first handler didn't run.");
                        expect(secondRun).toBeTruthy("Promise resolved but second handler didn't run.");
                    }).finally(function () {
                        done();
                    });
                });
                it("promises rejected by events must be logged", function (done) {
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    spyOn(console, 'log').and.callThrough();
                    var secondRun = false;
                    function anHandlerReturningAPromise(event) {
                        var deferred = PromiseHandler.defer();
                        setTimeout(function () {
                            secondRun = true;
                            deferred.resolve("Ok");
                        }, 100);
                        return deferred.promise;
                    }
                    function anotherHandlerReturningAPromise(event) {
                        var deferred = PromiseHandler.defer();
                        setTimeout(function () {
                            deferred.reject(new Error("this text must be logged to console"));
                        }, 50);
                        return deferred.promise;
                    }
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", anotherHandlerReturningAPromise);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", anHandlerReturningAPromise);
                    DomainDispatcher.dispatch(new aDomainEvent()).then(function () {
                        expect(console.log).toHaveBeenCalledTimes(2);
                        expect(secondRun).toBeTruthy("Promise resolved but second handler didn't run");
                    }).finally(function () {
                        done();
                    });
                });
            });
        })(ForDispatcher = Tests.ForDispatcher || (Tests.ForDispatcher = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var Serializer = DDDTools.Serialization.Serializer;
var Deserializer = DDDTools.Serialization.Deserializer;
var SerializableDate = DDDTools.Serialization.SerializableDate;
var SerializableNull = DDDTools.Serialization.SerializableNull;
var SerializableRegExp = DDDTools.Serialization.SerializableRegExp;
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
    it("serializeToObject must correctly manage Dates and Null and RegExp", function () {
        var instanceOfAnObject = {
            a: 1,
            b: "Ciao"
        };
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1", "3", { property1: "Echo" }],
            aNullValue: null,
            aDate: new Date(),
            aRegExp: /abc/i,
            anUndefinedValue: undefined,
            instance1: instanceOfAnObject,
            instance2: instanceOfAnObject
        };
        var serialized = Serializer.serializeToObject(anObject);
        expect(serialized === anObject).toBeFalsy("serializeToObject must not return the original object!");
        expect(serialized.aDate.__typeName).toEqual("SerializableDate", "serializeToObject must Return Serializable version of Date");
        expect(serialized.aRegExp.__typeName).toEqual("SerializableRegExp", "serializeToObject must Return Serializable version of RegExp");
        expect(serialized.aNullValue.__typeName).toEqual("SerializableNull", "serializeToObject must Return Serializable version of Null");
        expect(typeof serialized.aRegExp.__objectInstanceId).toEqual("string", "__objectInstanceId must be set to a string value");
        expect(serialized.instance1.__objectInstanceId).toEqual(serialized.instance2.__objectInstanceId, "instance1 and instance2 must be bound to the same original instance");
    });
    it("deserializeFromObject must correctly manage Dates and Null and RegExp", function () {
        var instanceOfAnObject = {
            a: 1,
            b: "Ciao"
        };
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1", "3", { property1: "Echo" }],
            aNullValue: null,
            aDate: new Date(),
            aRegExp: /abc/i,
            instance1: instanceOfAnObject,
            instance2: instanceOfAnObject
        };
        var serialized = Serializer.serializeToObject(anObject);
        var deserialized = Deserializer.deserializeFromObject(serialized);
        expect(deserialized).toEqual(anObject, "serializeToObject + deserializeFromObject must return the original object!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLXRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QvREREVG9vbHMvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlU3RhdGVNYWNoaW5lLXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlVmFsdWVPYmplY3Qtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luTWVtb3J5UmVwb3NpdG9yeS1zcGVjLnRzIiwiLi4vc3JjL3Rlc3QvREREVG9vbHMvSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luUHJvY2Vzc0Rpc3BhdGNoZXItc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL1NlcmlhbGl6YXRpb24tc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL1VuaXRPZldvcmstc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQWVBLElBQVUsR0FBRyxDQXFCWjtBQXJCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLEtBQUssQ0FxQmxCO0lBckJhLFdBQUEsS0FBSztRQUFDLElBQUEscUJBQXFCLENBcUJ4QztRQXJCbUIsV0FBQSxxQkFBcUI7WUFBQyxJQUFBLEVBQUUsQ0FxQjNDO1lBckJ5QyxXQUFBLEVBQUUsRUFBQyxDQUFDO2dCQUkxQyxJQUFPLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFHL0M7b0JBQTBDLHdDQUFzQztvQkFBaEY7d0JBQTBDLDhCQUFzQzt3QkFDNUUsZUFBVSxHQUFHLHNEQUFzRCxDQUFDO3dCQUNwRSxrQkFBYSxHQUFHLElBQUksQ0FBQztvQkFXekIsQ0FBQztvQkFQRyxrREFBbUIsR0FBbkIsVUFBb0IsWUFBcUU7d0JBQ3JGLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFD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Z0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDakUsQ0FBQztvQkFFRCxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBR2QsSUFBSSxDQUFDO3dCQUNELE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLDBGQUEwRixDQUFDLENBQUM7b0JBQ3pILENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDVCxNQUFNLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN4QyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFoUG1CLGFBQWEsR0FBYixtQkFBYSxLQUFiLG1CQUFhLFFBZ1BoQztJQUFELENBQUMsRUFoUGEsS0FBSyxHQUFMLFNBQUssS0FBTCxTQUFLLFFBZ1BsQjtBQUFELENBQUMsRUFoUFMsR0FBRyxLQUFILEdBQUcsUUFnUFoiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeSwgVXBncmFkZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MiB7XHJcblxyXG4gICAgaW1wb3J0IFRlc3RFbnRpdHkgPSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHk7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEEzU3RlcFVwZ3JhZGFibGVJdGVtIGV4dGVuZHMgQmFzZUVudGl0eTxBM1N0ZXBVcGdyYWRhYmxlSXRlbSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MlwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgYU5ld1Byb3BlcnR5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGdldFVwZ3JhZGVkSW5zdGFuY2UoZnJvbUluc3RhbmNlOiBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLkEzU3RlcFVwZ3JhZGFibGVJdGVtKTogQTNTdGVwVXBncmFkYWJsZUl0ZW0ge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmcm9tSW5zdGFuY2UuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgc3RhdGUuYU5ld1Byb3BlcnR5ID0gXCJ1cGdyYWRlciB3YXMgaGVyZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5fX3R5cGVWZXJzaW9uID0gXCJ2MlwiXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEVudGl0eSBleHRlbmRzIEJhc2VFbnRpdHk8VGVzdEVudGl0eSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEEzU3RlcFVwZ3JhZGFibGVJdGVtIGV4dGVuZHMgQmFzZUVudGl0eTxBM1N0ZXBVcGdyYWRhYmxlSXRlbSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgVXBncmFkZXIgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5VcGdyYWRlcjtcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5FcnJvcnM7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEEzU3RlcFVwZ3JhZGFibGVJdGVtIGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYzXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTmV3UHJvcGVydHk6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgYU5ld05ld1Byb3BlcnR5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGdldFVwZ3JhZGVkSW5zdGFuY2UoZnJvbUluc3RhbmNlOiBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYyLkEzU3RlcFVwZ3JhZGFibGVJdGVtKTogQTNTdGVwVXBncmFkYWJsZUl0ZW0ge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmcm9tSW5zdGFuY2UuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgc3RhdGUuYU5ld05ld1Byb3BlcnR5ID0gXCJ1cGdyYWRlciB3YXMgaGVyZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5fX3R5cGVWZXJzaW9uID0gXCJ2M1wiXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjJcIjtcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSk6IFRlc3RFbnRpdHkge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmcm9tSW5zdGFuY2UuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgc3RhdGUuYU5ld1Byb3BlcnR5ID0gXCJ1cGdyYWRlciB3YXMgaGVyZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5fX3R5cGVWZXJzaW9uID0gXCJ2MlwiXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgcHJvcGVydHkgd2FzIG5vdCBpbiBcInYxXCIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5Tm9uVXBncmFkYWJsZSBleHRlbmRzIEJhc2VFbnRpdHk8VGVzdEVudGl0eU5vblVwZ3JhZGFibGUsIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFDbGFzc1dpdGhNYW55VHlwZXMgZXh0ZW5kcyBCYXNlRW50aXR5PEFDbGFzc1dpdGhNYW55VHlwZXMsIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkFDbGFzc1dpdGhNYW55VHlwZXNcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICAvLyBQcmltaXRpdmUgRGF0YXR5cGVzXHJcbiAgICAgICAgcHVibGljIGFOdW1iZXI6IE51bWJlcjtcclxuICAgICAgICBwdWJsaWMgYVN0cmluZzogU3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBhQm9vbGVhbjogQm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgYW5PYmplY3Q6IE9iamVjdDtcclxuXHJcbiAgICAgICAgLy8gRXh0ZW5kZWQgdHlwZXNcclxuICAgICAgICBwdWJsaWMgYVJlZ0V4cDogUmVnRXhwO1xyXG4gICAgICAgIHB1YmxpYyBhRGF0ZTogRGF0ZTtcclxuICAgICAgICBwdWJsaWMgYU51bGxWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUoXCJCYXNlUGVyc2lzdGFibGVPYmplY3RcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5BM1N0ZXBVcGdyYWRhYmxlSXRlbSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiLCBcInYyXCIsIDxhbnk+Q2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52Mi5BM1N0ZXBVcGdyYWRhYmxlSXRlbSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiLCBcInYzXCIsIDxhbnk+QTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eVwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIiwgXCJ2MlwiLCA8YW55PlRlc3RFbnRpdHkpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eU5vblVwZ3JhZGFibGVcIiwgXCJ2MVwiLCA8YW55PlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkFDbGFzc1dpdGhNYW55VHlwZXNcIiwgXCJ2MVwiLCA8YW55PkFDbGFzc1dpdGhNYW55VHlwZXMpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJjb21wdXRlTmV4dFZlcnNpb24gZGV2ZSByZXN0aXR1aXJlIGlsIHZhbG9yZSBjb3JyZXR0byBkZWxsYSB2ZXJzaW9uZSBzdWNjZXNzaXZhXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb21wdXRlZCA9IFVwZ3JhZGVyLmNvbXB1dGVOZXh0VmVyc2lvbihcInYxXCIpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvbXB1dGVkKS50b0VxdWFsKFwidjJcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiY29tcHV0ZU5leHRWZXJzaW9uIGRldmUgcmVzdGl0dWlyZSB1biBlcnJvcmUgc2UgbGEgdmVyc2lvbmUgbm9uIMOoIGNvcnJldHRhLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZXhwZWN0ZWRFcnJvciA9IG5ldyBFcnJvcihFcnJvcnMuSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCk7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkRXJyb3IubWVzc2FnZSA9IFwiU3BlY2lmaWVkIHZlcnNpb24gbTE1IGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCI7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoKCkgPT4geyB2YXIgY29tcHV0ZWQgPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oXCJtMTVcIik7IH0pLnRvVGhyb3coZXhwZWN0ZWRFcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgZGV2ZSByZXN0aXR1aXJlIGZhbHNlIHBlciBnbGkgb2dnZXR0aSBjaGUgbm9uIGhhbm5vIHZlcnNpb25pIG9sdHJlIGFsbGEgcHJpbWFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgVGVzdEVudGl0eU5vblVwZ3JhZGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZWVkc1VwZ3JhZGUgPSBVcGdyYWRlci5pc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHRlLl9fdHlwZU5hbWUsIHRlLl9fdHlwZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KG5lZWRzVXBncmFkZSkudG9CZUZhbHN5KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBzaG91bGQgaGF2ZSByZXR1cm5lZCBmYWxzZSFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBkZXZlIHJlc3RpdHVpcmUgdHJ1ZSBwZXIgZ2xpIG9nZ2V0dGkgY2hlIGhhbm5vIHZlcnNpb25pIG9sdHJlIGFsbGEgcHJpbWFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmVlZHNVcGdyYWRlID0gVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0ZS5fX3R5cGVOYW1lLCB0ZS5fX3R5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChuZWVkc1VwZ3JhZGUpLnRvQmVUcnV0aHkoXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIHNob3VsZCBoYXZlIHJldHVybmVkIHRydWUhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInVwZ3JhZGUgbXVzdCBiZSBhYmxlIHRvIHVwZ3JhZGUgYSBQZXJzaXN0YWJsZU9iamVjdCB0byBpdHMgbGF0ZXN0IHZlcnNpb24gWzIgc3RlcHNdXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLlRlc3RFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh0ZS5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSA8VGVzdEVudGl0eT5VcGdyYWRlci51cGdyYWRlKHRlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjJcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJ1cGdyYWRlIG11c3QgYmUgYWJsZSB0byB1cGdyYWRlIGEgUGVyc2lzdGFibGVPYmplY3QgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uIFszIHN0ZXBzXVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5BM1N0ZXBVcGdyYWRhYmxlSXRlbSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHRlLl9fdHlwZVZlcnNpb24pLnRvRXF1YWwoXCJ2MVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1cGdyYWRlZCA9IDxBM1N0ZXBVcGdyYWRhYmxlSXRlbT5VcGdyYWRlci51cGdyYWRlKHRlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjNcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHVwZ3JhZGVkLmFOZXdOZXdQcm9wZXJ0eSkudG9FcXVhbChcInVwZ3JhZGVyIHdhcyBoZXJlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImdldFN0YXRlIG11c3QgYmUgYWJsZSB0byBjb3B5IFJlZ0V4cCB0eXBlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkFDbGFzc1dpdGhNYW55VHlwZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0UmVnRXhwID0gXCIvXnZbMC05XStcIjtcclxuICAgICAgICAgICAgdmFyIHRlc3RTdHJpbmcgPSBcInYxMjNcIjtcclxuICAgICAgICAgICAgdGUuYVJlZ0V4cCA9IG5ldyBSZWdFeHAodGVzdFJlZ0V4cCk7XHJcbiAgICAgICAgICAgIHZhciByZWdFeHBSZXN1bHQgPSB0ZS5hUmVnRXhwLnRlc3QodGVzdFN0cmluZyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSA8QUNsYXNzV2l0aE1hbnlUeXBlcz50ZS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFSZWdFeHAgaW5zdGFuY2VvZiBSZWdFeHApLnRvQmVUcnV0aHkoXCJhUmVnRXhwIGlzIG5vdCBhIFJlZ0V4cCBpbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFSZWdFeHAudGVzdChcInYxMjNcIikpLnRvRXF1YWwocmVnRXhwUmVzdWx0LCBcImFSZWdFeHAgbm9uIHNpIGNvbXBvcnRhIGNvbWUgbGEgUmVndWxhckV4cHJlc3Npb24gb3JpZ2luYWxlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImdldFN0YXRlIG11c3QgYmUgYWJsZSB0byBjb3B5IERhdGUgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGUuYURhdGUgPSB0ZXN0RGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IDxBQ2xhc3NXaXRoTWFueVR5cGVzPnRlLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3Qoc3RhdGUuYURhdGUgaW5zdGFuY2VvZiBEYXRlKS50b0JlVHJ1dGh5KFwiYURhdGUgaXMgbm90IGEgRGF0ZSBpbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFEYXRlLnRvU3RyaW5nKCkgKS50b0VxdWFsKHRlc3REYXRlLnRvU3RyaW5nKCksIFwiYURhdGUgbm9uIMOoIHN0YXRhIHJpcHJpc3RpbmF0YSBjb21lIERhdGVcIik7XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeSwgVXBncmFkZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VTdGF0ZU1hY2hpbmUge1xyXG5cclxuICAgIGltcG9ydCBCYXNlU3RhdGVNYWNoaW5lID0gREREVG9vbHMuU3RhdGVNYWNoaW5lLkJhc2VTdGF0ZU1hY2hpbmU7XHJcbiAgICBpbXBvcnQgU3RhdGVNYWNoaW5lRXZlbnQgPSBERERUb29scy5TdGF0ZU1hY2hpbmUuU3RhdGVNYWNoaW5lRXZlbnQ7XHJcbiAgICBpbXBvcnQgS2luZHNPZkV2ZW50SGFuZGxlciA9IERERFRvb2xzLlN0YXRlTWFjaGluZS5LaW5kc09mRXZlbnRIYW5kbGVyO1xyXG4gICAgaW1wb3J0IEhhbmRsZXJSZXN1bHQgPSBERERUb29scy5TdGF0ZU1hY2hpbmUuSGFuZGxlclJlc3VsdDtcclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IERERFRvb2xzLlByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBERERUb29scy5Eb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG5cclxuICAgIHR5cGUgU3RhdGVzID0gXCJTdGF0ZV9BXCIgfCBcIlN0YXRlX0JcIiB8IFwiU3RhdGVfQ1wiO1xyXG4gICAgdHlwZSBFdmVudHMgPSBcIkZyb21fQV90b19CXCIgfCBcIkZyb21fQl90b19DXCI7XHJcbiAgICB0eXBlIFN0YXRlTWFjaGluZURlZiA9IHtbZXZlbnQ6IHN0cmluZ106IHtbZnJvbVN0YXR1czogc3RyaW5nXTogU3RhdGVzfX07XHJcbiAgICBcclxuICAgIHZhciBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uOiBTdGF0ZU1hY2hpbmVEZWYgPSB7XHJcbiAgICAgICAgXCJGcm9tX0FfdG9fQlwiOiB7XHJcbiAgICAgICAgICAgIFwiU3RhdGVfQVwiOiBcIlN0YXRlX0JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJGcm9tX0JfdG9fQ1wiOiB7XHJcbiAgICAgICAgICAgIFwiU3RhdGVfQlwiOiBcIlN0YXRlX0NcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBhU3RhdGVNYWNoaW5lIGV4dGVuZHMgQmFzZVN0YXRlTWFjaGluZTxTdGF0ZXMsIEV2ZW50cz4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcImFTdGF0ZU1hY2hpbmVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZVN0YXRlTWFjaGluZVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBzdXQ6IGFTdGF0ZU1hY2hpbmU7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICBzdXQgPSBuZXcgYVN0YXRlTWFjaGluZShcIlN0YXRlX0FcIiwgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSB0aGUgc3RhdGUgbWFjaGluZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhc20gPSBuZXcgYVN0YXRlTWFjaGluZShcIlN0YXRlX0FcIiwgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbik7XHJcbiAgICAgICAgICAgIGV4cGVjdChhc20gaW5zdGFuY2VvZiBhU3RhdGVNYWNoaW5lKS50b0JlVHJ1dGh5KFwiVGhlIGNyZWF0ZWQgb2JqZWN0IGlzIG5vdCBhbiAnYVN0YXRlTWFjaGluZSdcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1c1wiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVUcnV0aHkoXCJUaGUgY2hhbmdlIHNob3VsZCBiZSBhbGxvd2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChzdXQuZ2V0Q3VycmVudFN0YXR1cygpKS50b0VxdWFsKFwiU3RhdGVfQlwiLCBcIlRoZSBTdGF0ZSBtYWNoaW5lIGlzIG5vdCBpbiBTdGF0ZV9CXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHN1dC5nZXRQcmV2aW91c1N0YXR1cygpKS50b0VxdWFsKFwiU3RhdGVfQVwiLCBcIlRoZSBTdGF0ZSBtYWNoaW5lIHByZXZpb3VzIHN0YXR1cyBpcyBub3QgU3RhdGVfQVwiKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBOT1QgYmUgcG9zc2liaWxlIHRvIHByb2Nlc3MgZXZlbnQgRnJvbV9CX3RvX0Mgd2hlbiBpbiB0aGUgU3RhdGVfQSBzdGF0dXNcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQl90b19DXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlRmFsc3koXCJUaGUgY2hhbmdlIHNob3VsZCBOT1QgYmUgYWxsb3dlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IE5PVCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1cywgaWYgYSBiZWZvcmVFeGl0IGhhbmRsZXIgc2F5cyBpdCBzaG91bGQgbm90IGJlIGRvbmVcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57cmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQoZmFsc2UsIFwiTm8sIHlvdSBjYW4ndCFcIikpfSwgS2luZHNPZkV2ZW50SGFuZGxlci5iZWZvcmVFeGl0U3RhdHVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlRmFsc3koXCJUaGUgY2hhbmdlIHNob3VsZCBOT1QgYmUgYWxsb3dlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IE5PVCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1cywgaWYgYSBiZWZvcmVFbnRlciBoYW5kbGVyIHNheXMgaXQgc2hvdWxkIG5vdCBiZSBkb25lXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e3JldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KGZhbHNlLCBcIk5vLCB5b3UgY2FuJ3QhXCIpKX0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRW50ZXJTdGF0dXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVGYWxzeShcIlRoZSBjaGFuZ2Ugc2hvdWxkIE5PVCBiZSBhbGxvd2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmlsZSB0byBwcm9jZXNzIGV2ZW50IEZyb21fQV90b19CIHdoZW4gaW4gdGhlIFN0YXRlX0Egc3RhdHVzLCBpZiBhIGFmdGVyRXhpdCBoYW5kbGVyIHJldHVybnMgb2tUb0NoYW5nZSA9IGZhbHNlXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e3JldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KGZhbHNlLCBcIk5vLCB5b3UgY2FuJ3QhXCIpKX0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFeGl0U3RhdHVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlVHJ1dGh5KFwiVGhlIGNoYW5nZSBzaG91bGQgYmUgYWxsb3dlZCBhbnlob3chXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHN1dC5nZXRDdXJyZW50U3RhdHVzKCkpLnRvQmUoXCJTdGF0ZV9CXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1cywgaWYgYSBhZnRlckVudGVyIGhhbmRsZXIgcmV0dXJucyBva1RvQ2hhbmdlID0gZmFsc2VcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57cmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQoZmFsc2UsIFwiTm8sIHlvdSBjYW4ndCFcIikpfSwgS2luZHNPZkV2ZW50SGFuZGxlci5hZnRlckVudGVyU3RhdHVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlVHJ1dGh5KFwiVGhlIGNoYW5nZSBzaG91bGQgYmUgYWxsb3dlZCBhbnlob3chXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHN1dC5nZXRDdXJyZW50U3RhdHVzKCkpLnRvQmUoXCJTdGF0ZV9CXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVGhlIG9yZGVyIGluIHdoaWNoIGhhbmRsZXIgYXJlIGNhbGxlZCBtdXN0IGJlIGNvcnJlY3QhXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMTtcclxuXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9CZSgxLCBcImJlZm9yZUV4aXRIYW5kbGVyIG11c3QgYmUgdGhlIGZpcnN0IGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmJlZm9yZUV4aXRTdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0JlKDIsIFwiYmVmb3JlRW50ZXJIYW5kbGVyIG11c3QgYmUgdGhlIHNlY29uZCBjYWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdCh0cnVlLCBcIlwiKSlcclxuICAgICAgICAgICAgfSwgS2luZHNPZkV2ZW50SGFuZGxlci5iZWZvcmVFbnRlclN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoMywgXCJhZnRlckV4aXRIYW5kbGVyIG11c3QgYmUgdGhlIHRoaXJkIGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRXhpdFN0YXR1cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoNCwgXCJhZnRlckVudGVySGFuZGxlciBtdXN0IGJlIHRoZSBmb3VydGggY2FsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQodHJ1ZSwgXCJcIikpXHJcbiAgICAgICAgICAgIH0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFbnRlclN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoNSwgXCJvblN1Y2Nlc2Z1bEV2ZW50UHJvY2Vzc2VkIG11c3QgYmUgdGhlIGZpZnRoIGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLm9uU3VjY2VzZnVsRXZlbnRQcm9jZXNzZWQpO1xyXG5cclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdCB7XHJcblxyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgdmlhOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgbnVtZXJvOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2l0dGE6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBjYXA6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0X0FycmF5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdF9BcnJheT4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgYXJyYXlPZlNvbWV0aGluZzogYW55W11cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RWYWx1ZU9iamVjdF9PYmplY3QgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VGVzdFZhbHVlT2JqZWN0X09iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X09iamVjdFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHNvbWVPYmplY3Q6IGFueVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VWYWx1ZU9iamVjdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdFwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3QpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9BcnJheSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfT2JqZWN0XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9PYmplY3QpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJWYWx1ZU9iamVjdHMgbXVzdCBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZWlyIGNvbnRlbnQuIC0gQmFzZSB0eXBlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzIgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBcInZpYSBkZWwgY2FtcG9cIixcclxuICAgICAgICAgICAgICAgIDY5LFxyXG4gICAgICAgICAgICAgICAgXCJHZW5vdmFcIixcclxuICAgICAgICAgICAgICAgIFwieHh4eHhcIlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVmFsdWVPYmplY3RzIG11c3QgYmUgY29tcGFyZWQgYWdhaW5zdCB0aGVpciBjb250ZW50LiAtIEFycmF5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbeyBwMTogMywgcDI6IDQyIH0sIHsgcDE6IDYsIHAzOiA5NiB9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9BcnJheShcclxuICAgICAgICAgICAgICAgIFt7IHAxOiAzLCBwMjogNDIgfSwgeyBwMTogNiwgcDM6IDk2IH1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X0FycmF5KFxyXG4gICAgICAgICAgICAgICAgW3sgcDE6IDYsIHAzOiA5NiB9LCB7IHAxOiAzLCBwMjogNDIgfV1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlZhbHVlT2JqZWN0cyBtdXN0IGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlaXIgY29udGVudC4gLSBPYmplY3RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiA2LCBwMzogOTYgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJsZSB0byBmaW5kIG11bHRpcGxlIFZhbHVlT2JqZWN0cyBpbiBhbiBhcnJheSB2aWEgdGhlIGZpbmRJbkFycmF5IGZ1bmN0aW9uXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFycmF5T2ZWT3M6IFRlc3RWYWx1ZU9iamVjdF9PYmplY3RbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMiA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvNCA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGFycmF5T2ZWT3MucHVzaCh2bzEpO1xyXG4gICAgICAgICAgICBhcnJheU9mVk9zLnB1c2godm8yKTtcclxuICAgICAgICAgICAgYXJyYXlPZlZPcy5wdXNoKHZvMyk7XHJcbiAgICAgICAgICAgIGFycmF5T2ZWT3MucHVzaCh2bzQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHRvRmluZCA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0b0ZpbmQuZmluZEluQXJyYXkoYXJyYXlPZlZPcyk7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVuZ3RoKS50b0VxdWFsKDIsIFwiVGhlIGZ1bmN0aW9uIGRpZCBub3QgZmluZCB0aGUgMiBlbGVtZW50cyBpdCBzaG91bGQgaGF2ZSBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhcnJheU9mVk9zW2ldLmVxdWFscyh0b0ZpbmQpKS50b0JlVHJ1dGh5KFwiU29tZSBlbGVtZW50cyBmb3VuZCBkbyBub3QgZXF1YWxzIGVsZW1lbnQgdG8gZmluZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvVHlwZVJlZ2lzdHJ5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCBERERUb29scyA9IHJlcXVpcmUoXCIuL0RERFRvb2xzXCIpXHJcblxyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzIGFzIFJlcG9FcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0luTWVtb3J5UmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7VHlwZVJlZ2lzdHJ5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvVHlwZVJlZ2lzdHJ5XCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMge1xyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IERERFRvb2xzLlZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5SZXBvc2l0b3J5LkVycm9ycztcclxuICAgIGltcG9ydCBJbk1lbW9yeVJlcG9zaXRvcnkgPSBERERUb29scy5SZXBvc2l0b3J5LkluTWVtb3J5UmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEtleSBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxLZXk+IHtcclxuICAgICAgICBwcml2YXRlIGlkOiBHdWlkO1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5LZXlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IEd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDaGlsZEVudGl0eSBleHRlbmRzIEJhc2VFbnRpdHk8Q2hpbGRFbnRpdHksIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mS2V5czogS2V5W10gPSBbXTtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQ2hpbGRFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBhbm90aGVyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0QWdncmVnYXRlIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VGVzdEFnZ3JlZ2F0ZSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZFbnRpdGllczogQ2hpbGRFbnRpdHlbXSA9IFtdO1xyXG4gICAgICAgIHB1YmxpYyBhbm9ueW1vdXNPYmplY3Q6IGFueSA9IHt9O1xyXG4gICAgICAgIC8vIFVzZWQgdG8gdGVzdCBvYmplY3RzIHJlZmVyZW5jZXMgcmVjb25zdGl0dXRpb24uXHJcbiAgICAgICAgcHVibGljIGFuT2JqZWN0UmVmZXJlbmNlOiBhbnkgPSB7fTtcclxuICAgICAgICBwdWJsaWMgYW5vdGhlck9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTnVsbFJlZmVyZW5jZSA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIGFuVW5kZWZpbmVkSXRlbSA9IHVuZGVmaW5lZDsgXHJcbiAgICAgICAgcHVibGljIGFEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiYSB0ZXN0IHZhbHVlICFcIjtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgSW5NZW1vcnlSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBtYW5hZ2VkVHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihUZXN0UmVwb3NpdG9yeS5tYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5LZXlcIiwgXCJ2MVwiLCBLZXkpO1xyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQ2hpbGRFbnRpdHlcIiwgXCJ2MVwiLCBDaGlsZEVudGl0eSk7XHJcbiAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgVGVzdEFnZ3JlZ2F0ZSk7XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJbk1lbW9yeVJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBSZXBvc2l0b3J5IGNsYXNzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlcG8gaW5zdGFuY2VvZiBUZXN0UmVwb3NpdG9yeSkudG9FcXVhbCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IHRocm93ICdLZXlOb3RTZXQnIHdoZW4gc2F2aW5nIGFuIGVudGl0eSB3aXRob3V0IGtleSBzZXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gc2F2ZSBhbiBlbnRpdHkgd2l0aCB0aGUga2V5IHNldFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuS2V5Tm90U2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXQgc2hvdWxkIHRocm93IEl0ZW1Ob3RGb3VuZCBpZiBhIGtleSBpcyBub3QgcHJlc2VudCBpbiB0aGUgcmVwb3NpdG9yeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkyID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCgoKSA9PiB7IHJlcG8uZ2V0QnlJZChrZXkyKSB9KS50b1Rocm93KG5ldyBFcnJvcihFcnJvcnMuSXRlbU5vdEZvdW5kKSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgbWFuYWdlIG51bGwgYW5kIHVuZGVmaW5lZCBkYXRhXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgdmFyIGFUZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uYURhdGUgPSBhVGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFOdWxsUmVmZXJlbmNlKS50b0JlTnVsbChcImFOdWxsUmVmZXJlbmNlIGlzIG5vdCBudWxsLCB3aGlsZSBpdCBzaG91bGRcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5VbmRlZmluZWRJdGVtKS50b0JlVW5kZWZpbmVkKFwiYW5VbmRlZmluZWRJdGVtIGlzIG5vdCB1bmRlZmluZWQsIHdoaWxlIGl0IHNob3VsZFwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgYSBkYXRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgdmFyIGFUZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uYURhdGUgPSBhVGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLCB3aGlsZSBpdCBzaG91bGRcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIGFuIGFycmF5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbmV3IENoaWxkRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYXJyYXlPZkVudGl0aWVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmFycmF5T2ZLZXlzLnB1c2gobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTYWx2YXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJlY3VwZXJhdG9cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuLi5cclxuICAgICAgICAgICAgLy8gZXhwZWN0KHJlbG9hZGVkIGluc3RhbmNlb2YgVGVzdEFnZ3JlZ2F0ZSkudG9CZVRydXRoeShcIlJlY29uc3RpdHV0ZWQgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgb3JpZ2luYWwgdHlwZS5cIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcykpLnRvQmVUcnV0aHkoXCJQcm9wZXJ0eSBhcnJheU9mRW50aXRpZXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzLmxlbmd0aCkudG9FcXVhbChudW1iZXJPZkVsZW1lbnRzVG9BZGQsIFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IHQrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNlID0gcmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzW3RdO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KEFycmF5LmlzQXJyYXkoY2UuYXJyYXlPZktleXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZktleXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNlLmFycmF5T2ZLZXlzLmxlbmd0aCkudG9FcXVhbChudW1iZXJPZkVsZW1lbnRzVG9BZGQsIFwiUHJvcGVydHkgYXJyYXlPZktleXMgZG9lcyBub3QgY29udGFpbiBcIiArIG51bWJlck9mRWxlbWVudHNUb0FkZCArIFwiIGVsZW1lbnRzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlICdhbm9ueW1vdXMnIG9iamVjdHMuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5vdGhlckVudGl0eSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGFub3RoZXJFbnRpdHkuc2V0S2V5KG5ldyBLZXkoKSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFub255bW91c09iamVjdC5hbm90aGVyRW50aXR5ID0gYW5vdGhlckVudGl0eTtcclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYU51bWJlclR5cGUgPSA0MjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVsb2FkZWQgPSByZXBvLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhlIGZvbGxvd2luZyB0ZXN0IHN0YXJ0ZWQgdG8gZmFpbCBhZnRlciBnZXR0aW5nIGJhY2sgdG8gbmFtZXNwYWNlcy4gICAgXHJcbiAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZC5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlKS50b0VxdWFsKDQyLCBcIlByb3BlcnR5IGFOdW1iZXJUeXBlIHdhcyBub3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZWQuXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSByZWZlcmVuY2VzIHRvIHRoZSBzYW1lIGluc3RhbmNlLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiRmVhdHVyZSBub24gYW5jb3JhIHN2aWx1cHBhdGFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHkgPSB7XHJcbiAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQSB0ZXN0IHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBhQ29tcG9zaXRlUHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQW5vdGhlciB0ZXN0IHZhbHVlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYW5PYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSA9IGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChpdGVtLmFuT2JqZWN0UmVmZXJlbmNlKS50b0VxdWFsKGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChyZWxvYWRlZC5hbm90aGVyT2JqZWN0UmVmZXJlbmNlKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IGJlIGluY3JlbWVudGVkIG9ubHkgaWYgb2JqZWN0IHRvIGJlIHNhdmVkIGRpZmZlcnMgZnJvbSBvYmplY3Qgc2F2ZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IE5PVCBiZSBpbmNyZW1lbnRlZCB3aGVuIHVzaW5nICdyZXBsYWNlJyBtZXRob2RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlcG8ucmVwbGFjZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5SZXBBc3luYyB7XHJcblxyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlJlcG9zaXRvcnkuRXJyb3JzO1xyXG4gICAgaW1wb3J0IEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jID0gREREVG9vbHMuUmVwb3NpdG9yeS5Jbk1lbW9yeVJlcG9zaXRvcnlBc3luYztcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcbiAgICBpbXBvcnQgRmFjdG9yeUVycm9ycyA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkVycm9ycztcclxuXHJcblxyXG4gICAgLy8gRGVmaW5lcyBhIGNsYXNzIHRoYXQgd2lsbCBub3QgYmUgcmVnaXN0ZXJlZCB3aXQgdGhlIHR5cGVzIGZhY3RvcnlcclxuICAgIGV4cG9ydCBjbGFzcyBOb3RSZWdpc3RlcmVkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE5vdFJlZ2lzdGVyZWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJOb3RSZWdpc3RlcmVkXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgS2V5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEtleT4ge1xyXG4gICAgICAgIHByaXZhdGUgaWQ6IEd1aWQ7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLktleVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoaWxkRW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxDaGlsZEVudGl0eSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZLZXlzOiBLZXlbXSA9IFtdO1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhbm90aGVyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mRW50aXRpZXM6IENoaWxkRW50aXR5W10gPSBbXTtcclxuICAgICAgICBwdWJsaWMgYW5vbnltb3VzT2JqZWN0OiBhbnkgPSB7fTtcclxuICAgICAgICAvLyBVc2VkIHRvIHRlc3Qgb2JqZWN0cyByZWZlcmVuY2VzIHJlY29uc3RpdHV0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcbiAgICAgICAgcHVibGljIGFub3RoZXJPYmplY3RSZWZlcmVuY2U6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICAvLyBVc2VkIHRvIHRlc3QgZXhjZXB0aW9ucyBpbiBvYmplY3QgcmVjb25zdGl0dXRpb24uXHJcbiAgICAgICAgcHVibGljIGFOb3RSZWdpc3RlcmVkSW5zdGFuY2U6IE5vdFJlZ2lzdGVyZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTnVsbFJlZmVyZW5jZSA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIGFuVW5kZWZpbmVkUmVmZXJlbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHB1YmxpYyBhRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgYVRlc3RQcm9wZXJ0eTogc3RyaW5nID0gXCJhIHRlc3QgdmFsdWUgIVwiO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUZXN0UmVwb3NpdG9yeSBleHRlbmRzIEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jPFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBtYW5hZ2VkVHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihUZXN0UmVwb3NpdG9yeS5tYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuXHJcbiAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuS2V5XCIsIFwidjFcIiwgS2V5KTtcclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiLCBcInYxXCIsIENoaWxkRW50aXR5KTtcclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgVGVzdEFnZ3JlZ2F0ZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJbk1lbW9yeVJlcG9zaXRvcnlBc3luY1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIFJlcG9zaXRvcnkgY2xhc3NcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVwbyBpbnN0YW5jZW9mIFRlc3RSZXBvc2l0b3J5KS50b0VxdWFsKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgdGhyb3cgJ0tleU5vdFNldCcgd2hlbiBzYXZpbmcgYW4gZW50aXR5IHdpdGhvdXQga2V5IHNldFwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5LZXlOb3RTZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gc2F2ZSBhbiBlbnRpdHkgd2l0aCB0aGUga2V5IHNldFwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5LZXlOb3RTZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIml0IHNob3VsZCB0aHJvdyBJdGVtTm90Rm91bmQgaWYgYSBrZXkgaXMgbm90IHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnlcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgdmFyIGtleTIgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5nZXRCeUlkKGtleTIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZXR1cm5lZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZCBub3QgYmUgaGVyZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIubmFtZSkudG9FcXVhbChFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgYSBEYXRlXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmFEYXRlID0gdGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZWxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hRGF0ZSBpbnN0YW5jZW9mIERhdGUpLnRvQmVUcnV0aHkoXCJhRGF0ZSBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFEYXRlKS50b0VxdWFsKHRlc3REYXRlLCBcImFEYXRlIGlzIG5vdCBldmFsdWF0ZWQgYXMgdGhlIHByZSBzYXZlIHZhbHVlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIGFuIGFycmF5XCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ldyBDaGlsZEVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFycmF5T2ZFbnRpdGllcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcnJheU9mS2V5cy5wdXNoKG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTYWx2YXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG8uZ2V0QnlJZChrZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBUaGUgZm9sbG93aW5nIHRlc3Qgc3RhcnRlZCB0byBmYWlsIGFmdGVyIGdldHRpbmcgYmFjayB0byBuYW1lc3BhY2VzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcykpLnRvQmVUcnV0aHkoXCJQcm9wZXJ0eSBhcnJheU9mRW50aXRpZXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IG51bWJlck9mRWxlbWVudHNUb0FkZDsgdCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlID0gcmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzW3RdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KGNlLmFycmF5T2ZLZXlzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoY2UuYXJyYXlPZktleXMubGVuZ3RoKS50b0VxdWFsKG51bWJlck9mRWxlbWVudHNUb0FkZCwgXCJQcm9wZXJ0eSBhcnJheU9mS2V5cyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSAnYW5vbnltb3VzJyBvYmplY3RzLlwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbm90aGVyRW50aXR5ID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgYW5vdGhlckVudGl0eS5zZXRLZXkobmV3IEtleSgpKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgPSBhbm90aGVyRW50aXR5O1xyXG4gICAgICAgICAgICBpdGVtLmFub255bW91c09iamVjdC5hTnVtYmVyVHlwZSA9IDQyO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwby5nZXRCeUlkKGtleSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwZWN0KHJlbG9hZGVkLmFub255bW91c09iamVjdC5hbm90aGVyRW50aXR5IGluc3RhbmNlb2YgVGVzdEFnZ3JlZ2F0ZSkudG9CZVRydXRoeShcIlJlY29uc3RpdHV0ZWQgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgb3JpZ2luYWwgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlKS50b0VxdWFsKDQyLCBcIlByb3BlcnR5IGFOdW1iZXJUeXBlIHdhcyBub3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIHJlZmVyZW5jZXMgdG8gdGhlIHNhbWUgaW5zdGFuY2UuXCIsIChkb25lKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiRmVhdHVyZSBub24gYW5jb3JhIHN2aWx1cHBhdGFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHkgPSB7XHJcbiAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQSB0ZXN0IHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBhQ29tcG9zaXRlUHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQW5vdGhlciB0ZXN0IHZhbHVlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYW5PYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSA9IGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChpdGVtLmFuT2JqZWN0UmVmZXJlbmNlKS50b0VxdWFsKGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVsb2FkZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChyZWxvYWRlZC5hbm90aGVyT2JqZWN0UmVmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IGJlIGluY3JlbWVudGVkIG9ubHkgaWYgb2JqZWN0IHRvIGJlIHNhdmVkIGRpZmZlcnMgZnJvbSBvYmplY3Qgc2F2ZWRcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFJldmlzaW9uSWQgc2hvdWxkIG5vdCBiZSBpbmNyZW1lbnRlZCBpZiBpdGVtIHdhcyBuZXchXHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5zYXZlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG8uc2F2ZShlKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IE5PVCBiZSBpbmNyZW1lbnRlZCBpZiB1c2luZyAncmVwbGFjZScgbWV0aG9kLlwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV2aXNpb25JZCBzaG91bGQgbm90IGJlIGluY3JlbWVudGVkIGlmIGl0ZW0gd2FzIG5ldyFcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXBvLnNhdmUoZSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG4gICAgICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5yZXBsYWNlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJFeGNlcHRpb24gdGhyb3duIGJ5IGl0ZW0gcmVjb25zdGl0dXRpb24sIG11c3QgYmUgY2F0Y2hlZCBpbiB0aGUgZXJyb3IgZnVuY3Rpb24gb2YgdGhlIHJldHVybmVkIHByb21pc2VcIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcbiAgICAgICAgICAgIGUuYU5vdFJlZ2lzdGVyZWRJbnN0YW5jZSA9IG5ldyBOb3RSZWdpc3RlcmVkKCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZCBub3QgaGF2ZSBiZWVuIGhlcmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIubmFtZSkudG9FcXVhbChGYWN0b3J5RXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJXZSBzaG91bGQgbm90IGhhdmUgYmVlbiBoZXJlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SW5Qcm9jZXNzRGlzcGF0Y2hlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyXCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckRpc3BhdGNoZXIge1xyXG5cclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICBpbXBvcnQgSUV2ZW50SGFuZGxlciA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRXZlbnRIYW5kbGVyO1xyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEluUHJvY2Vzc0Rpc3BhdGNoZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuSW5Qcm9jZXNzRGlzcGF0Y2hlcjtcclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IERERFRvb2xzLlByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG5cclxuICAgIGNsYXNzIGFDbGFzc0NvbnRhaW5pbmdBbkhhbmRsZXJBbmRTb21lT3RoZXJTdHVmZiB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTnVtYmVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHRoaXMuZXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhRnVuY3Rpb25Jbk15Q29udGV4dCgpIHtcclxuICAgICAgICAgICAgdGhpcy5hTnVtYmVyID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBldmVudEhhbmRsZXIoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICBleHBlY3QoZXZlbnQpLm5vdC50b0JlVW5kZWZpbmVkKFwiVGhlIGV2ZW50IGFycml2ZWQgdG8gdGhlIGV2ZW50aGFuZGxlciBpcyB1bmRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFGdW5jdGlvbkluTXlDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIGFEb21haW5FdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxhRG9tYWluRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiSW5Qcm9jZXNzRGlzcGF0Y2hlclwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwiTXVsdGlwbGUgcmVnaXN0cmF0aW9uIG9mIHRoZSBzYW1lIGV2ZW50aGFuZGxlciwgbXVzdCBiZSB0cmVhdGVkIGFzIG9uZS5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlciBoYXMgYmVlbiByZWdpc3RlcmVkIHR3aWNlLCBidXQgZGlzcGF0Y2hlciBzaG91bGQgY2FsbCBpdCBvbmNlLlxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBZnRlciBkZXJlZ2lzdGVyaW5nIGFuIGhhbmRsZXIsIGRpc3BhdGNoIG11c3Qgbm90IGNhbGwgaXQgYW55bW9yZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBKdXN0IHRvIHZlcmlmeSB0aGF0IEhhbmRsZXIgaGFzIGJlZW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBbGwgaGFuZGxlcnMgd2lsbCBiZSBjYWxsZWQgYnkgZGlzcGF0Y2gsIGV2ZW4gaWYgaGFuZGxlcnMgdGhyb3cuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGFUaHJvd2luZ0hhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGFUaHJvd2luZ0hhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgdGhyb3duIGJ5IHRoZSBoYW5kbGVyXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFUaHJvd2luZ0hhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5tZXNzYWdlKS50b0VxdWFsKFwiRXJyb3I6RXJyb3IgdGhyb3duIGJ5IHRoZSBoYW5kbGVyXFxuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBWZXJpZmllcyB0aGF0IHRoZSBub24gVGhyb3dpbmcgSGFuZGxlciBoYXMgbm90IGJlZW4gdGhyb3duLlxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBhVGhyb3dpbmdIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSGFuZGxlcnMgbXVzdCBiZSBjYWxsZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhleSBhcmUgcmVnaXN0ZXJlZC5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kRXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMCk7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzZWNvbmRFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBzZWNvbmRFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBzZWNvbmRFdmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkhhbmRsZXJzIG11c3QgYmUgY2FsbGVkIGluIHRoZWlyIG9yZ2luYWwgJ3RoaXMnIGNvbnRleHRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc1dpdGhIYW5kbGVyID0gbmV3IGFDbGFzc0NvbnRhaW5pbmdBbkhhbmRsZXJBbmRTb21lT3RoZXJTdHVmZigpO1xyXG5cclxuICAgICAgICAgICAgc3B5T24oY2xhc3NXaXRoSGFuZGxlciwgXCJhRnVuY3Rpb25Jbk15Q29udGV4dFwiKS5hbmQuY2FsbFRocm91Z2goKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGNsYXNzV2l0aEhhbmRsZXIuZXZlbnRIYW5kbGVyLCBjbGFzc1dpdGhIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IGFEb21haW5FdmVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjbGFzc1dpdGhIYW5kbGVyLmFGdW5jdGlvbkluTXlDb250ZXh0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmxlIHRvIHJlLXJlZ2lzdGVyIGFuIGhhbmRsZXIgaW4gYSBkaWZmZXJlbnQgaW5zdGFuY2VkIG9mIHRoZSBkaXNwYXRjaGVyLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzV2l0aEhhbmRsZXIgPSBuZXcgYUNsYXNzQ29udGFpbmluZ0FuSGFuZGxlckFuZFNvbWVPdGhlclN0dWZmKCk7XHJcblxyXG4gICAgICAgICAgICBzcHlPbihjbGFzc1dpdGhIYW5kbGVyLCBcImFGdW5jdGlvbkluTXlDb250ZXh0XCIpLmFuZC5jYWxsVGhyb3VnaCgpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgY2xhc3NXaXRoSGFuZGxlci5ldmVudEhhbmRsZXIsIGNsYXNzV2l0aEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGNsYXNzV2l0aEhhbmRsZXIuZXZlbnRIYW5kbGVyLCBjbGFzc1dpdGhIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IGFEb21haW5FdmVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjbGFzc1dpdGhIYW5kbGVyLmFGdW5jdGlvbkluTXlDb250ZXh0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiZGlzcGF0Y2ggbXVzdCByZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIGFsbCBldmVudCBoYW5kbGVycyBhcmUgZG9uZVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRSdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGZpcnN0UnVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhbkhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UnVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFub3RoZXJIYW5kbGVyUmV0dXJuaW5nQVByb21pc2UoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBhbkhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZSk7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFub3RoZXJIYW5kbGVyUmV0dXJuaW5nQVByb21pc2UpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZpcnN0UnVuKS50b0JlVHJ1dGh5KFwiUHJvbWlzZSByZXNvbHZlZCBidXQgZmlyc3QgaGFuZGxlciBkaWRuJ3QgcnVuLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3Qoc2Vjb25kUnVuKS50b0JlVHJ1dGh5KFwiUHJvbWlzZSByZXNvbHZlZCBidXQgc2Vjb25kIGhhbmRsZXIgZGlkbid0IHJ1bi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInByb21pc2VzIHJlamVjdGVkIGJ5IGV2ZW50cyBtdXN0IGJlIGxvZ2dlZFwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIHNweU9uKGNvbnNvbGUsICdsb2cnKS5hbmQuY2FsbFRocm91Z2goKTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZFJ1biA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5IYW5kbGVyUmV0dXJuaW5nQVByb21pc2UoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoXCJPa1wiKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFub3RoZXJIYW5kbGVyUmV0dXJuaW5nQVByb21pc2UoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKFwidGhpcyB0ZXh0IG11c3QgYmUgbG9nZ2VkIHRvIGNvbnNvbGVcIikpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZSk7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFuSGFuZGxlclJldHVybmluZ0FQcm9taXNlKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IGFEb21haW5FdmVudCgpKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChjb25zb2xlLmxvZykudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChzZWNvbmRSdW4pLnRvQmVUcnV0aHkoXCJQcm9taXNlIHJlc29sdmVkIGJ1dCBzZWNvbmQgaGFuZGxlciBkaWRuJ3QgcnVuXCIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbi8vIGltcG9ydCB7RGVzZXJpYWxpemVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXJcIjtcclxuXHJcbmltcG9ydCBTZXJpYWxpemVyID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG5pbXBvcnQgRGVzZXJpYWxpemVyID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG5pbXBvcnQgU2VyaWFsaXphYmxlRGF0ZSA9IERERFRvb2xzLlNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlRGF0ZTtcclxuaW1wb3J0IFNlcmlhbGl6YWJsZU51bGwgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZU51bGw7XHJcbmltcG9ydCBTZXJpYWxpemFibGVSZWdFeHAgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZVJlZ0V4cDtcclxuZGVzY3JpYmUoXCJTZXJpYWxpemF0aW9uXCIsICgpID0+IHtcclxuXHJcbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIHNlcmlhbGl6ZS9kZXNlcmlhbGl6ZSBldmVyeSB0eXBlIG9mIG9iamVjdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBhUmVnRXhwOiBuZXcgUmVnRXhwKFwiXjEyM1wiKSxcclxuICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICB2YXIgZGVzZXJpYWxpemVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHNlcmlhbGl6ZWQpO1xyXG5cclxuICAgICAgICBleHBlY3QoYW5PYmplY3QucHJvcGVydHkxKS50b0VxdWFsKGRlc2VyaWFsaXplZC5wcm9wZXJ0eTEpO1xyXG4gICAgICAgIGV4cGVjdChhbk9iamVjdC5wcm9wZXJ0eTIpLnRvRXF1YWwoZGVzZXJpYWxpemVkLnByb3BlcnR5Mik7XHJcbiAgICAgICAgZm9yICh2YXIgZSBpbiBhbk9iamVjdC5hbkFycmF5KSB7XHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5hbkFycmF5W2VdKS50b0VxdWFsKGRlc2VyaWFsaXplZC5hbkFycmF5W2VdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hRGF0ZSBpbnN0YW5jZW9mIERhdGUpLnRvQmVUcnV0aHkoXCJhRGF0ZSBpcyBub3QgYSBkYXRlXCIpO1xyXG4gICAgICAgIGV4cGVjdChhbk9iamVjdC5hRGF0ZSkudG9FcXVhbChkZXNlcmlhbGl6ZWQuYURhdGUsIFwiYURhdGUgaXMgbm90IHRoZSBzYW1lIGFEYXRlIGl0IHdhcyBiZWZvcmUgc2VyaWFsaXphdGlvblwiKTtcclxuICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkLmFSZWdFeHAgaW5zdGFuY2VvZiBSZWdFeHApLnRvQmVUcnV0aHkoXCJhUmVnRXhwIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBSZWdFeHBcIik7XHJcbiAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFSZWdFeHApLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFSZWdFeHAsIFwiYVJlZ0V4cCBpcyBub3QgdGhlIHNhbWUgYVJlZ0V4cCBpdCB3YXMgYmVmb3JlIHNlcmlhbGl6YXRpb25cIik7XHJcbiAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hTnVsbFZhbHVlKS50b0JlTnVsbChcImFOdWxsVmFsdWUgaXMgbm90IG51bGxcIik7XHJcbiAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hblVuZGVmaW5lZFZhbHVlKS50b0JlVW5kZWZpbmVkKFwiYW5VbmRlZmluZWRWYWx1ZSBpcyBub3QgdW5kZWZpbmVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJUd28gc2VyaWFsaXphdGlvbnMgb2YgdGhlIHNhbWUgb2JqZWN0IG11c3QgYmUgZXhhY3RseSBtYXRjaFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgIGFOdWxsVmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBhUmVnZXhwOiAvYWJjL2ksXHJcbiAgICAgICAgICAgIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgIHZhciBzZXJpYWxpemVkMiA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQxKS50b0VxdWFsKHNlcmlhbGl6ZWQyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiU2VyaWFsaXphdGlvbiArIERlc2VyaWFsaXphdGlvbiBtdXN0IHJlY3JlYXRlIHRoZSB2ZXJ5IHNhbWUgc3RhcnRpbmcgb2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIiwgXCIzXCIsIHsgcHJvcGVydHkxOiBcIkVjaG9cIiB9XSxcclxuICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgYURhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGFSZWdleHA6IC9hYmMvaSxcclxuICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VyaWFsaXplZDEgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcbiAgICAgICAgdmFyIHN0ZXAxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RlcDE6IFwiICsgc3RlcDEpO1xyXG4gICAgICAgIHZhciBzdGVwMiA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShzdGVwMSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGVwMjogXCIgKyBzdGVwMi5hUmVnZXhwLnRvU3RyaW5nKCkgKTtcclxuICAgICAgICB2YXIgc2VyaWFsaXplZDIgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShzdGVwMik7XHJcblxyXG4gICAgICAgIGV4cGVjdChzZXJpYWxpemVkMSkudG9FcXVhbChzZXJpYWxpemVkMik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInNlcmlhbGl6ZVRvT2JqZWN0IG11c3QgY29ycmVjdGx5IG1hbmFnZSBEYXRlcyBhbmQgTnVsbCBhbmQgUmVnRXhwXCIsICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaW5zdGFuY2VPZkFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBhOjEsXHJcbiAgICAgICAgICAgIGI6XCJDaWFvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgIGFOdWxsVmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBhUmVnRXhwOiAvYWJjL2ksXHJcbiAgICAgICAgICAgIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaW5zdGFuY2UxOiBpbnN0YW5jZU9mQW5PYmplY3QsXHJcbiAgICAgICAgICAgIGluc3RhbmNlMjogaW5zdGFuY2VPZkFuT2JqZWN0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplVG9PYmplY3QoYW5PYmplY3QpO1xyXG5cclxuICAgICAgICBleHBlY3Qoc2VyaWFsaXplZCA9PT0gYW5PYmplY3QpLnRvQmVGYWxzeShcInNlcmlhbGl6ZVRvT2JqZWN0IG11c3Qgbm90IHJldHVybiB0aGUgb3JpZ2luYWwgb2JqZWN0IVwiKTtcclxuICAgICAgICBleHBlY3Qoc2VyaWFsaXplZC5hRGF0ZS5fX3R5cGVOYW1lKS50b0VxdWFsKFwiU2VyaWFsaXphYmxlRGF0ZVwiLCBcInNlcmlhbGl6ZVRvT2JqZWN0IG11c3QgUmV0dXJuIFNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIERhdGVcIik7XHJcbiAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQuYVJlZ0V4cC5fX3R5cGVOYW1lKS50b0VxdWFsKFwiU2VyaWFsaXphYmxlUmVnRXhwXCIsIFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBSZXR1cm4gU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgUmVnRXhwXCIpO1xyXG4gICAgICAgIGV4cGVjdChzZXJpYWxpemVkLmFOdWxsVmFsdWUuX190eXBlTmFtZSkudG9FcXVhbChcIlNlcmlhbGl6YWJsZU51bGxcIiwgXCJzZXJpYWxpemVUb09iamVjdCBtdXN0IFJldHVybiBTZXJpYWxpemFibGUgdmVyc2lvbiBvZiBOdWxsXCIpO1xyXG4gICAgICAgIGV4cGVjdCh0eXBlb2Ygc2VyaWFsaXplZC5hUmVnRXhwLl9fb2JqZWN0SW5zdGFuY2VJZCkudG9FcXVhbChcInN0cmluZ1wiLCBcIl9fb2JqZWN0SW5zdGFuY2VJZCBtdXN0IGJlIHNldCB0byBhIHN0cmluZyB2YWx1ZVwiKTtcclxuICAgICAgICBleHBlY3Qoc2VyaWFsaXplZC5pbnN0YW5jZTEuX19vYmplY3RJbnN0YW5jZUlkKS50b0VxdWFsKHNlcmlhbGl6ZWQuaW5zdGFuY2UyLl9fb2JqZWN0SW5zdGFuY2VJZCwgXCJpbnN0YW5jZTEgYW5kIGluc3RhbmNlMiBtdXN0IGJlIGJvdW5kIHRvIHRoZSBzYW1lIG9yaWdpbmFsIGluc3RhbmNlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJkZXNlcmlhbGl6ZUZyb21PYmplY3QgbXVzdCBjb3JyZWN0bHkgbWFuYWdlIERhdGVzIGFuZCBOdWxsIGFuZCBSZWdFeHBcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpbnN0YW5jZU9mQW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgIGE6MSxcclxuICAgICAgICAgICAgYjpcIkNpYW9cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIiwgXCIzXCIsIHsgcHJvcGVydHkxOiBcIkVjaG9cIiB9XSxcclxuICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgYURhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGFSZWdFeHA6IC9hYmMvaSxcclxuICAgICAgICAgICAgLy8gYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBpbnN0YW5jZTE6IGluc3RhbmNlT2ZBbk9iamVjdCxcclxuICAgICAgICAgICAgaW5zdGFuY2UyOiBpbnN0YW5jZU9mQW5PYmplY3RcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZXJpYWxpemVkID0gU2VyaWFsaXplci5zZXJpYWxpemVUb09iamVjdChhbk9iamVjdCk7XHJcbiAgICAgICAgdmFyIGRlc2VyaWFsaXplZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZUZyb21PYmplY3Qoc2VyaWFsaXplZCk7XHJcblxyXG4gICAgICAgIGV4cGVjdChkZXNlcmlhbGl6ZWQpLnRvRXF1YWwoYW5PYmplY3QsIFwic2VyaWFsaXplVG9PYmplY3QgKyBkZXNlcmlhbGl6ZUZyb21PYmplY3QgbXVzdCByZXR1cm4gdGhlIG9yaWdpbmFsIG9iamVjdCFcIik7XHJcbiAgICB9KTtcclxufSk7IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0luTWVtb3J5UmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge1VuaXRPZldvcmt9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtcIjtcclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0U2F2ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdERlbGV0ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0UmV0cmlldmVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrRXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5Gb3JVbml0T2ZXb3JrIHtcclxuXHJcblxyXG4gICAgaW1wb3J0IEluTWVtb3J5UmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuSW5NZW1vcnlSZXBvc2l0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBVbml0T2ZXb3JrID0gREREVG9vbHMuVW5pdE9mV29yay5Vbml0T2ZXb3JrO1xyXG4gICAgaW1wb3J0IElSZXBvc2l0b3J5ID0gREREVG9vbHMuUmVwb3NpdG9yeS5JUmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBERERUb29scy5Eb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IElFdmVudEhhbmRsZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuSUV2ZW50SGFuZGxlcjtcclxuICAgIGltcG9ydCBPYmplY3RTYXZlZEV2ZW50ID0gREREVG9vbHMuVW5pdE9mV29yay5PYmplY3RTYXZlZEV2ZW50O1xyXG4gICAgaW1wb3J0IE9iamVjdERlbGV0ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0RGVsZXRlZEV2ZW50O1xyXG4gICAgaW1wb3J0IE9iamVjdFJldHJpZXZlZEV2ZW50ID0gREREVG9vbHMuVW5pdE9mV29yay5PYmplY3RSZXRyaWV2ZWRFdmVudDtcclxuICAgIGltcG9ydCBFdmVudHMgPSBERERUb29scy5Vbml0T2ZXb3JrLkV2ZW50cztcclxuICAgIGltcG9ydCBVbml0T2ZXb3JrRXJyb3JzID0gREREVG9vbHMuVW5pdE9mV29yay5Vbml0T2ZXb3JrRXJyb3JzO1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlJlcG9zaXRvcnkuRXJyb3JzO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEtleSBleHRlbmRzIEd1aWQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RLZXlcIjtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYVRlc3RQcm9wZXJ0eTogc3RyaW5nID0gXCJDaWFvXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRBVGVzdFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hVGVzdFByb3BlcnR5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QVRlc3RQcm9wZXJ0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hVGVzdFByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFJlcG9zaXRvcnkgZXh0ZW5kcyBJbk1lbW9yeVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFVvVyBleHRlbmRzIFVuaXRPZldvcms8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlcG86IElSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHJlcG8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVzY3JpYmUoXCJVbml0T2ZXb3JrXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHJlcG86IFRlc3RSZXBvc2l0b3J5O1xyXG4gICAgICAgIHZhciBrZXlzOiBUZXN0S2V5W107XHJcbiAgICAgICAgdmFyIGFnZ3JlZ2F0ZXM6IFRlc3RBZ2dyZWdhdGVbXTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBZ2dyZWdhdGVzOiBudW1iZXIgPSAxMDtcclxuICAgICAgICB2YXIgdW93OiBUZXN0VW9XO1xyXG5cclxuICAgICAgICB2YXIgaW5pdEtleXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGtleXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKEd1aWQuZ2VuZXJhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpbml0QWdncmVnYXRlcyA9IChrZXlzOiBUZXN0S2V5W10pID0+IHtcclxuICAgICAgICAgICAgYWdncmVnYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWdnciA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZ2dyLnNldEtleShrZXlzW2ldKTtcclxuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZXMucHVzaChhZ2dyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGZpbGxSZXBvID0gKHJlcG86IElSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShhZ2dyZWdhdGVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RBZ2dyZWdhdGVcIiwgXCJ2MVwiLCA8YW55PlRlc3RBZ2dyZWdhdGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeShcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RBZ2dyZWdhdGVcIik7XHJcbiAgICAgICAgICAgIGluaXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGluaXRBZ2dyZWdhdGVzKGtleXMpO1xyXG4gICAgICAgICAgICBmaWxsUmVwbyhyZXBvKTtcclxuXHJcbiAgICAgICAgICAgIHVvdyA9IG5ldyBUZXN0VW9XKHJlcG8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBVbml0T2ZXb3JrIGZvciBhIFJlcG9zaXRvcnkuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KHVvdyBpbnN0YW5jZW9mIFRlc3RVb1cpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGdldCBhbiBpdGVtIGFzIGlmIGl0IGNhbWUgZGlyZWN0bHkgZnJvbSB0aGUgcmVwby5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8gPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdW93QXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShmcm9tVW9XKTtcclxuICAgICAgICAgICAgdmFyIHJlcG9Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGZyb21SZXBvKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh1b3dBc1N0cmluZykudG9FcXVhbCh1b3dBc1N0cmluZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiV2hlbiByZXRyaWV2aW5nIG9iamVjdHMsIGV2ZW50cyBvZiB0eXBlIE9iamVjdFJldHJpZXZlRXZlbnQgbXVzdCBiZSByYWlzZWQuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0UmV0cmlldmVkRXZlbnQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiQWZ0ZXIgY2FsbGluZyBzYXZlQWxsIGFsbCBNb2RpZmllZCBvYmplY3RzIG11c3QgYmUgc2F2ZWQgaW50byB0aGUgcmVwb3NpdG9yeVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZyb21Vb1cwLnNldEFUZXN0UHJvcGVydHkoXCJCcnV0dG8hXCIpO1xyXG4gICAgICAgICAgICBmcm9tVW9XMS5zZXRBVGVzdFByb3BlcnR5KFwiQkJlbGxvXCIpO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0U2F2ZWRFdmVudCwgKGV2ZW50OiBPYmplY3RTYXZlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIsIFwiVGhlIFVvVyBoYXMgbm90IHNhdmVkIGV4YWN0bHkgMiBvYmplY3QuXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzAuZ2V0QVRlc3RQcm9wZXJ0eSgpKS50b0VxdWFsKFwiQnJ1dHRvIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMS5nZXRBVGVzdFByb3BlcnR5KCkpLnRvRXF1YWwoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlVuaXRPZldvcmsgbXVzdCBzYXZlIG9ubHkgZWZmZWN0aXZlbHkgY2hhbmdlZCBvYmplY3RzLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2FkaW5nIDIgb2JqZWN0cyBmcm9tIHRoZSBVb1cgLi4uXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gLi4uIGJ1dCBlZGl0aW5nIG9ubHkgb25lLi4uXHJcbiAgICAgICAgICAgIGZyb21Vb1cxLnNldEFUZXN0UHJvcGVydHkoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgICAgICAvLy8gLi4uIHdlIGV4cGVjdCB0byBnZXQgb25seSAxIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBVb1dcclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0U2F2ZWRFdmVudCwgKGV2ZW50OiBPYmplY3RTYXZlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZXZlbnQuaWQpLnRvRXF1YWwoa2V5c1sxXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSwgXCJUaGUgVW9XIGhhcyBub3Qgc2F2ZWQgZXhhY3RseSAxIG9iamVjdC5cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVW5pdE9mV29yayBtdXN0IGRlbGV0ZSBjb21wbGV0ZWx5IGFuIG9iamVjdCBvbmx5IGFmdGVyIGNhbGxpbmcgc2F2ZUFsbC5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3REZWxldGVkRXZlbnQsIChldmVudDogT2JqZWN0RGVsZXRlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMCwgXCJIYW5kbGVyIHRyaWdnZXJlZCBiZWZvcmUgc2F2ZUFsbCB3YXMgY2FsbGVkIVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzEgPSByZXBvLmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBXZSBkbyBleHBlY3QgdG8gc3RpbGwgZmluZHMgdGhlIGRlbGV0ZWQgaXRlbXMgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzApLm5vdC50b0JlTnVsbChcIkVsZW1lbnQgMCBkZWxldGVkIGJlZm9yZSBzYXZlQWxsXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8xKS5ub3QudG9CZU51bGwoXCJFbGVtZW50IDEgZGVsZXRlZCBiZWZvcmUgc2F2ZUFsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyLCBcIlRoZSBVb1cgaGFzIG5vdCBkZWxldGVkIGV4YWN0bHkgMiBvYmplY3QuXCIpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJJdGVtIDAgc2hvdWxkIGJlIG5vIG1vcmUgaW4gdGhlIHJlcG9zaXRvcnlcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIGFzIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgbm9tb3JlIGluIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkl0ZW0gMSBzaG91bGQgYmUgbm8gbW9yZSBpbiB0aGUgcmVwb3NpdG9yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgYXMgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSBub21vcmUgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBIGRlbGV0ZWQgaXRlbSBtdXN0IG5vdCBiZSAncmV0cmlldmFibGUnIGZyb20gdGhlIFVuaXRPZldvcmssIGV2ZW4gaWYgc2F2ZUFsbCB3YXMgbm90IGNhbGxlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJlZm9yZSB0aGUgc2F2ZUFsbCB3ZSBleHBlY3QgdG8gZ2V0IGFuIEV4Y2VwdGlvbiBmcm9tIHRoZSBVbml0T2ZXb3JrIC4uLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlIGVsZW1lbnQgaGFzIGJlZW4gbWFya2VkIGFzIGRlbGV0ZWQsIGJ1dCBpdCBpcyBzdGlsbCByZXR1cm5lZCBieSB0aGUgVW9XLlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUgaW5zdGFuY2VvZiBFcnJvcikudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChVbml0T2ZXb3JrRXJyb3JzLkl0ZW1NYXJrZWRBc0RlbGV0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gLi4uIHdoaWxlIGFmdGVyIHRoZSBzYXZlQWxsIHdlIGV4cGVjdCB0byBnZXQgYW4gRXhjZXB0aW9uIGZyb20gdGhlIHVuZGVybHlpbmcgUmVwb3NpdG9yeSAuLi5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIlRoZSBlbGVtZW50IGhhcyBiZWVuIG1hcmtlZCBhcyBkZWxldGVkIGFuZCBkZWxldGVkLCBidXQgaXQgaXMgc3RpbGwgcmV0dXJuZWQgYnkgdGhlIFVvVy5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlIGluc3RhbmNlb2YgRXJyb3IpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Il19