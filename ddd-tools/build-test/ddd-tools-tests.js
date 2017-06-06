var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.__typeName = "CdC.Tests.BasePersistableObject.A3StepUpgradableItem";
                        _this.__typeVersion = "v2";
                        return _this;
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
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.__typeName = "CdC.Tests.BasePersistableObject.TestEntity";
                        _this.__typeVersion = "v1";
                        return _this;
                    }
                    return TestEntity;
                }(BaseEntity));
                v1.TestEntity = TestEntity;
                var A3StepUpgradableItem = (function (_super) {
                    __extends(A3StepUpgradableItem, _super);
                    function A3StepUpgradableItem() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.__typeName = "CdC.Tests.BasePersistableObject.A3StepUpgradableItem";
                        _this.__typeVersion = "v1";
                        return _this;
                    }
                    return A3StepUpgradableItem;
                }(BaseEntity));
                v1.A3StepUpgradableItem = A3StepUpgradableItem;
            })(v1 = BasePersistableObject.v1 || (BasePersistableObject.v1 = {}));
        })(BasePersistableObject = Tests.BasePersistableObject || (Tests.BasePersistableObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "CdC.Tests.BasePersistableObject.A3StepUpgradableItem";
                    _this.__typeVersion = "v3";
                    return _this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "CdC.Tests.BasePersistableObject.TestEntity";
                    _this.__typeVersion = "v2";
                    return _this;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "CdC.Tests.BasePersistableObject.TestEntityNonUpgradable";
                    _this.__typeVersion = "v1";
                    return _this;
                }
                return TestEntityNonUpgradable;
            }(BaseEntity));
            BasePersistableObject.TestEntityNonUpgradable = TestEntityNonUpgradable;
            var AClassWithManyTypes = (function (_super) {
                __extends(AClassWithManyTypes, _super);
                function AClassWithManyTypes() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "CdC.Tests.BasePersistableObject.AClassWithManyTypes";
                    _this.__typeVersion = "v1";
                    _this.aNullValue = null;
                    return _this;
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
            var InMemoryRepositoryAsync = DDDTools.Repository.InMemoryRepositoryAsync;
            var BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
            var Guid = DDDTools.ValueObjects.Guid;
            var Factory = DDDTools.PersistableObject.Factory;
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "aStateMachine";
                    _this.__typeVersion = "v1";
                    return _this;
                }
                return aStateMachine;
            }(BaseStateMachine));
            var IdFakeAggregate = (function (_super) {
                __extends(IdFakeAggregate, _super);
                function IdFakeAggregate() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "IdFakeAggregate";
                    _this.__typeVersion = "v1";
                    return _this;
                }
                return IdFakeAggregate;
            }(Guid));
            var AFakeAggregate = (function (_super) {
                __extends(AFakeAggregate, _super);
                function AFakeAggregate() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "AFakeAggregate";
                    _this.__typeVersion = "v1";
                    _this.sm = new aStateMachine("State_A", stateMachineDefinition);
                    return _this;
                }
                return AFakeAggregate;
            }(BaseAggregateRoot));
            var fakeSMRepo;
            describe("BaseStateMachine", function () {
                var sut;
                var sutInAggregate;
                var idSutInAggregate;
                beforeEach(function () {
                    sut = new aStateMachine("State_A", stateMachineDefinition);
                    fakeSMRepo = new InMemoryRepositoryAsync("AFakeAggregate");
                    Factory.registerType("aStateMachine", "v1", aStateMachine);
                    Factory.registerType("IdFakeAggregate", "v1", IdFakeAggregate);
                    Factory.registerType("AFakeAggregate", "v1", AFakeAggregate);
                    idSutInAggregate = new IdFakeAggregate();
                    sutInAggregate = new AFakeAggregate();
                    sutInAggregate.setKey(idSutInAggregate);
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
                    }, KindsOfEventHandler.onSuccessfulEventProcessed);
                    sut.processEvent("From_A_to_B").then(function (result) {
                        done();
                    });
                });
                it("Must be possible to store and retrieve the state machine as an attribute of an aggregate.", function (done) {
                    var sutReloaded;
                    fakeSMRepo.save(sutInAggregate).then(function () {
                        return fakeSMRepo.getById(idSutInAggregate);
                    })
                        .then(function (sutInAggregate) {
                        sutReloaded = sutInAggregate;
                        return sutInAggregate.sm.processEvent("From_A_to_B");
                    })
                        .then(function (result) {
                        expect(result.okToChange).toBeTruthy();
                        expect(sutReloaded.sm.getCurrentStatus()).toEqual("State_B");
                    })
                        .catch(function (error) {
                        expect(false).toBeTruthy("Errors during test: " + error + " " + error.message);
                    })
                        .finally(function () {
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
                    var _this = _super.call(this) || this;
                    _this.via = via;
                    _this.numero = numero;
                    _this.citta = citta;
                    _this.cap = cap;
                    _this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject";
                    _this.__typeVersion = "v1";
                    return _this;
                }
                return TestValueObject;
            }(BaseValueObject));
            ForBaseValueObject.TestValueObject = TestValueObject;
            var TestValueObject_Array = (function (_super) {
                __extends(TestValueObject_Array, _super);
                function TestValueObject_Array(arrayOfSomething) {
                    var _this = _super.call(this) || this;
                    _this.arrayOfSomething = arrayOfSomething;
                    _this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
                    _this.__typeVersion = "v1";
                    return _this;
                }
                return TestValueObject_Array;
            }(BaseValueObject));
            ForBaseValueObject.TestValueObject_Array = TestValueObject_Array;
            var TestValueObject_Object = (function (_super) {
                __extends(TestValueObject_Object, _super);
                function TestValueObject_Object(someObject) {
                    var _this = _super.call(this) || this;
                    _this.someObject = someObject;
                    _this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Object";
                    _this.__typeVersion = "v1";
                    return _this;
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
                var _this = _super.call(this) || this;
                _this.__typeName = "CdC.Tests.Key";
                _this.__typeVersion = "v1";
                _this.id = Guid.generate();
                return _this;
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
                var _this = _super.call(this) || this;
                _this.arrayOfKeys = [];
                _this.__typeName = "CdC.Tests.ChildEntity";
                _this.__typeVersion = "v1";
                _this.anotherDate = new Date();
                return _this;
            }
            return ChildEntity;
        }(BaseEntity));
        Tests.ChildEntity = ChildEntity;
        var TestAggregate = (function (_super) {
            __extends(TestAggregate, _super);
            function TestAggregate() {
                var _this = _super.call(this) || this;
                _this.arrayOfEntities = [];
                _this.anonymousObject = {};
                _this.anObjectReference = {};
                _this.anotherObjectReference = {};
                _this.aNullReference = null;
                _this.anUndefinedItem = undefined;
                _this.aDate = new Date();
                _this.__typeName = "CdC.Tests.TestAggregate";
                _this.__typeVersion = "v1";
                _this.aTestProperty = "a test value !";
                return _this;
            }
            return TestAggregate;
        }(BaseAggregateRoot));
        Tests.TestAggregate = TestAggregate;
        var TestRepository = (function (_super) {
            __extends(TestRepository, _super);
            function TestRepository() {
                return _super.call(this, TestRepository.managedTypeName) || this;
            }
            return TestRepository;
        }(InMemoryRepository));
        TestRepository.managedTypeName = "CdC.Tests.TestAggregate";
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "NotRegistered";
                    _this.__typeVersion = "v1";
                    return _this;
                }
                return NotRegistered;
            }(BaseValueObject));
            RepAsync.NotRegistered = NotRegistered;
            var Key = (function (_super) {
                __extends(Key, _super);
                function Key() {
                    var _this = _super.call(this) || this;
                    _this.__typeName = "CdC.Tests.Key";
                    _this.__typeVersion = "v1";
                    _this.id = Guid.generate();
                    return _this;
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
                    var _this = _super.call(this) || this;
                    _this.arrayOfKeys = [];
                    _this.__typeName = "CdC.Tests.ChildEntity";
                    _this.__typeVersion = "v1";
                    _this.anotherDate = new Date();
                    return _this;
                }
                return ChildEntity;
            }(BaseEntity));
            RepAsync.ChildEntity = ChildEntity;
            var TestAggregate = (function (_super) {
                __extends(TestAggregate, _super);
                function TestAggregate() {
                    var _this = _super.call(this) || this;
                    _this.arrayOfEntities = [];
                    _this.anonymousObject = {};
                    _this.anObjectReference = {};
                    _this.anotherObjectReference = {};
                    _this.aNotRegisteredInstance = undefined;
                    _this.aNullReference = null;
                    _this.anUndefinedReference = undefined;
                    _this.aDate = new Date();
                    _this.__typeName = "CdC.Tests.TestAggregate";
                    _this.__typeVersion = "v1";
                    _this.aTestProperty = "a test value !";
                    return _this;
                }
                return TestAggregate;
            }(BaseAggregateRoot));
            RepAsync.TestAggregate = TestAggregate;
            var TestRepository = (function (_super) {
                __extends(TestRepository, _super);
                function TestRepository() {
                    return _super.call(this, TestRepository.managedTypeName) || this;
                }
                return TestRepository;
            }(InMemoryRepositoryAsync));
            TestRepository.managedTypeName = "CdC.Tests.TestAggregate";
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
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.__typeName = "CdC.Tests.Dispatcher.aDomainEvent";
                    _this.__typeVersion = "v1";
                    return _this;
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
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var ValueObjects;
        (function (ValueObjects) {
            var Money;
            (function (Money_1) {
                var Money = DDDTools.ValueObjects.Money;
                var Currencies = DDDTools.ValueObjects.Currencies;
                var Currency = DDDTools.ValueObjects.Currency;
                describe("Money", function () {
                    it("should be possibile to instantiate a new Money value object with an amount as number", function () {
                        try {
                            var aMoney = new Money(1000);
                            expect(aMoney instanceof Money).toBeTruthy();
                        }
                        catch (e) {
                            expect(false).toBeTruthy(e);
                        }
                    });
                    it("should be possibile to instantiate a new Money value object from an existing Money Value Object", function () {
                        try {
                            var aMoney = new Money(1000);
                            var anotherMoney = new Money(aMoney);
                            expect(anotherMoney instanceof Money).toBeTruthy();
                            expect(anotherMoney.getAmount()).toEqual(aMoney.getAmount(), "Amount is not the same on the to objects");
                            expect(anotherMoney.getAmountEuro()).toEqual(aMoney.getAmountEuro(), "AmountEuro is not the same on the to objects");
                            expect(anotherMoney.getCurrency()).toEqual(aMoney.getCurrency(), "Currency is not the same on the to objects");
                        }
                        catch (e) {
                            expect(false).toBeTruthy(e);
                        }
                    });
                    it("should be possible to instantiate a new Money object specifying a Currency and an exchange", function () {
                        var aMoney = new Money(1000, Currencies.DOLLAR, 0.500);
                        expect(aMoney.getAmount()).toEqual(1000);
                        expect(aMoney.getAmountEuro()).toEqual(500);
                        expect(aMoney.getCurrency() instanceof Currency).toBeTruthy();
                    });
                    it("should be possible to get a new Money object specifying a new Currency and a new exchange", function () {
                        var aMoney = new Money(1000, Currencies.DOLLAR, 0.500);
                        var newMoney = aMoney.changeExchange(1).changeCurrency(Currencies.EURO);
                        expect(newMoney.getAmount()).toEqual(1000);
                        expect(newMoney.getAmountEuro()).toEqual(1000);
                        expect(newMoney.getCurrency() instanceof Currency).toBeTruthy();
                    });
                    it("changeAmount must return a new Money object with the new amount.", function () {
                        try {
                            var aMoney = new Money(1000, Currencies.DOLLAR, 0.500);
                            var anotherMoney = new Money(aMoney).changeAmount(1500);
                            expect(anotherMoney instanceof Money).toBeTruthy();
                            expect(anotherMoney.getAmount()).toEqual(1500);
                            expect(anotherMoney.getAmountEuro()).toEqual(750);
                            expect(anotherMoney.getCurrency()).toEqual(aMoney.getCurrency());
                        }
                        catch (e) {
                            expect(false).toBeTruthy(e);
                        }
                    });
                });
            })(Money = ValueObjects.Money || (ValueObjects.Money = {}));
        })(ValueObjects = Tests.ValueObjects || (Tests.ValueObjects = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var Serialization;
        (function (Serialization) {
            var Serializer = DDDTools.Serialization.Serializer;
            var Deserializer = DDDTools.Serialization.Deserializer;
            var bigObject = [
                {
                    "id": "59358759d30fdeb8265e4f19",
                    "index": 0,
                    "guid": "aec0e02c-8070-4cf3-9d0a-2dad85c8f08d",
                    "isActive": true,
                    "balance": "$1,337.26",
                    "picture": "http://placehold.it/32x32",
                    "age": 37,
                    "eyeColor": "green",
                    "name": "Warren Hart",
                    "gender": "male",
                    "company": "IDEALIS",
                    "email": "warrenhart@idealis.com",
                    "phone": "+1 (981) 447-2964",
                    "address": "621 Boerum Place, Hegins, Colorado, 8082",
                    "about": "Sint sint consectetur quis proident. Magna est et mollit dolore aliquip tempor ullamco ad voluptate id eiusmod culpa officia cupidatat. Enim nisi duis amet est veniam occaecat. Qui commodo aute tempor sit qui tempor minim adipisicing non reprehenderit. Ex non ex labore dolor laboris excepteur officia cupidatat id tempor et et dolor.\r\n",
                    "registered": "2015-05-26T05:27:38 -02:00",
                    "latitude": -76.83499,
                    "longitude": -0.130902,
                    "tags": [
                        "proident",
                        "quis",
                        "est",
                        "fugiat",
                        "est",
                        "nisi",
                        "ut"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Parks Holland"
                        },
                        {
                            "id": 1,
                            "name": "Cecelia Vance"
                        },
                        {
                            "id": 2,
                            "name": "Benjamin Michael"
                        }
                    ],
                    "greeting": "Hello, Warren Hart! You have 1 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759350062e03293031a",
                    "index": 1,
                    "guid": "08866272-fae5-483b-a1a1-37489630ba60",
                    "isActive": true,
                    "balance": "$1,680.62",
                    "picture": "http://placehold.it/32x32",
                    "age": 23,
                    "eyeColor": "blue",
                    "name": "Angelique Lara",
                    "gender": "female",
                    "company": "ACLIMA",
                    "email": "angeliquelara@aclima.com",
                    "phone": "+1 (956) 554-2424",
                    "address": "808 Otsego Street, Conestoga, Guam, 4554",
                    "about": "Anim officia aliqua sint laborum anim pariatur. Sint ullamco ad esse ullamco. Anim eiusmod excepteur aute nulla aute do esse pariatur. Dolor velit pariatur exercitation fugiat fugiat nostrud minim non consectetur quis. Esse dolore excepteur minim ipsum esse est qui deserunt voluptate deserunt. Sint culpa magna laboris amet sunt sit qui nostrud pariatur et pariatur mollit. Consectetur do labore nostrud adipisicing aute excepteur nisi sint sint minim deserunt elit quis eu.\r\n",
                    "registered": "2014-01-22T09:27:10 -01:00",
                    "latitude": 28.329492,
                    "longitude": 73.794837,
                    "tags": [
                        "magna",
                        "excepteur",
                        "in",
                        "in",
                        "tempor",
                        "velit",
                        "id"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Madge Humphrey"
                        },
                        {
                            "id": 1,
                            "name": "Elsa Curtis"
                        },
                        {
                            "id": 2,
                            "name": "Leslie Lambert"
                        }
                    ],
                    "greeting": "Hello, Angelique Lara! You have 1 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587594b54e6a60e9ede41",
                    "index": 2,
                    "guid": "f4705734-5e2b-49c5-8880-5eaefd3102db",
                    "isActive": false,
                    "balance": "$2,928.19",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "blue",
                    "name": "Collier Burns",
                    "gender": "male",
                    "company": "COMBOGEN",
                    "email": "collierburns@combogen.com",
                    "phone": "+1 (832) 585-2428",
                    "address": "529 Hunterfly Place, Falconaire, New Hampshire, 7828",
                    "about": "Consectetur sunt quis non qui irure id enim labore amet tempor. Exercitation duis nisi ullamco voluptate sint commodo qui magna laboris reprehenderit magna voluptate nisi. Ex do aliqua occaecat sunt reprehenderit veniam tempor enim fugiat. Esse voluptate do officia eu adipisicing labore occaecat eiusmod. Reprehenderit reprehenderit do fugiat sunt cillum. Quis dolor ea eu minim.\r\n",
                    "registered": "2017-02-26T08:54:35 -01:00",
                    "latitude": 78.866473,
                    "longitude": -141.144082,
                    "tags": [
                        "ea",
                        "culpa",
                        "nulla",
                        "ut",
                        "minim",
                        "tempor",
                        "in"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Duke Clay"
                        },
                        {
                            "id": 1,
                            "name": "Dodson Conley"
                        },
                        {
                            "id": 2,
                            "name": "Mari Ayers"
                        }
                    ],
                    "greeting": "Hello, Collier Burns! You have 1 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759e6629addb163bfd9",
                    "index": 3,
                    "guid": "2fec5560-9390-4c5d-b934-d9a949763996",
                    "isActive": false,
                    "balance": "$3,964.12",
                    "picture": "http://placehold.it/32x32",
                    "age": 33,
                    "eyeColor": "green",
                    "name": "Guthrie Gaines",
                    "gender": "male",
                    "company": "SLAMBDA",
                    "email": "guthriegaines@slambda.com",
                    "phone": "+1 (992) 551-3190",
                    "address": "371 Banner Avenue, Moraida, Oregon, 5495",
                    "about": "Esse proident cupidatat qui consequat tempor eiusmod ex sint magna reprehenderit aliquip. Non reprehenderit irure sit consectetur officia incididunt. Exercitation sunt exercitation deserunt dolore consectetur cupidatat exercitation dolor ipsum adipisicing cillum consequat. Velit culpa irure laboris elit labore. Reprehenderit adipisicing ullamco qui enim eiusmod elit irure excepteur esse sit aliquip cillum deserunt id. In minim proident minim magna. Veniam ea officia ea id aute deserunt.\r\n",
                    "registered": "2016-07-11T07:53:24 -02:00",
                    "latitude": -66.920239,
                    "longitude": 30.652297,
                    "tags": [
                        "enim",
                        "sit",
                        "culpa",
                        "nulla",
                        "laborum",
                        "commodo",
                        "ad"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Effie Buchanan"
                        },
                        {
                            "id": 1,
                            "name": "Candice Powell"
                        },
                        {
                            "id": 2,
                            "name": "Schmidt Doyle"
                        }
                    ],
                    "greeting": "Hello, Guthrie Gaines! You have 4 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759d7f786eeada7efc2",
                    "index": 4,
                    "guid": "912776bc-0362-43a7-ab6a-b1a0ffe76949",
                    "isActive": false,
                    "balance": "$3,489.23",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "blue",
                    "name": "Vinson Morrow",
                    "gender": "male",
                    "company": "ELENTRIX",
                    "email": "vinsonmorrow@elentrix.com",
                    "phone": "+1 (830) 569-2006",
                    "address": "336 Vernon Avenue, Abiquiu, Virgin Islands, 1146",
                    "about": "Aute nisi aute culpa duis commodo. Ipsum pariatur aliquip commodo officia aliqua. Cupidatat nostrud dolore consectetur esse magna ipsum id excepteur duis officia exercitation.\r\n",
                    "registered": "2014-11-13T10:08:21 -01:00",
                    "latitude": -49.188698,
                    "longitude": 136.356937,
                    "tags": [
                        "veniam",
                        "ut",
                        "Lorem",
                        "id",
                        "laboris",
                        "commodo",
                        "veniam"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Miranda Gibbs"
                        },
                        {
                            "id": 1,
                            "name": "Brigitte Molina"
                        },
                        {
                            "id": 2,
                            "name": "Patricia Campos"
                        }
                    ],
                    "greeting": "Hello, Vinson Morrow! You have 9 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759ad826407b16188ea",
                    "index": 5,
                    "guid": "c8a30a29-e8d3-4142-bb28-a384c7861058",
                    "isActive": true,
                    "balance": "$1,743.41",
                    "picture": "http://placehold.it/32x32",
                    "age": 29,
                    "eyeColor": "green",
                    "name": "Warner Clements",
                    "gender": "male",
                    "company": "ORGANICA",
                    "email": "warnerclements@organica.com",
                    "phone": "+1 (926) 466-2674",
                    "address": "341 Hicks Street, Osmond, New Mexico, 6301",
                    "about": "Aliqua exercitation qui commodo est magna fugiat pariatur cupidatat ex anim adipisicing. Dolore mollit labore consequat enim ipsum commodo. Veniam dolor nisi ullamco nostrud mollit amet. Anim ipsum qui laboris minim quis amet nostrud. Quis nulla laboris consectetur cupidatat ullamco adipisicing ex nulla ut veniam.\r\n",
                    "registered": "2017-01-13T09:24:41 -01:00",
                    "latitude": 16.562789,
                    "longitude": -122.552423,
                    "tags": [
                        "minim",
                        "nisi",
                        "sint",
                        "est",
                        "pariatur",
                        "in",
                        "occaecat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Taylor Farmer"
                        },
                        {
                            "id": 1,
                            "name": "Tonia Velazquez"
                        },
                        {
                            "id": 2,
                            "name": "Allen Farley"
                        }
                    ],
                    "greeting": "Hello, Warner Clements! You have 10 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759191bc18688add64e",
                    "index": 6,
                    "guid": "59089d40-b1a2-4ebf-b873-e917f9185113",
                    "isActive": true,
                    "balance": "$1,752.54",
                    "picture": "http://placehold.it/32x32",
                    "age": 31,
                    "eyeColor": "green",
                    "name": "Jeanne Montoya",
                    "gender": "female",
                    "company": "EVENTAGE",
                    "email": "jeannemontoya@eventage.com",
                    "phone": "+1 (864) 536-2375",
                    "address": "976 Mersereau Court, Haring, Louisiana, 4617",
                    "about": "Mollit do nostrud aute dolore dolor do irure culpa occaecat. Nostrud culpa dolore ipsum reprehenderit sit incididunt voluptate aute proident duis reprehenderit officia. Voluptate nostrud magna ad dolore id consequat eu id nostrud cillum eiusmod elit dolor.\r\n",
                    "registered": "2015-03-31T11:01:12 -02:00",
                    "latitude": -54.967692,
                    "longitude": 47.48022,
                    "tags": [
                        "qui",
                        "incididunt",
                        "nulla",
                        "anim",
                        "sint",
                        "sunt",
                        "ad"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Kristen Gregory"
                        },
                        {
                            "id": 1,
                            "name": "Rosella Burke"
                        },
                        {
                            "id": 2,
                            "name": "Cain Vazquez"
                        }
                    ],
                    "greeting": "Hello, Jeanne Montoya! You have 1 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759bd2921d21bd68eaf",
                    "index": 7,
                    "guid": "33ae9d3e-19cd-48fa-b56e-c01e92c15f68",
                    "isActive": false,
                    "balance": "$1,393.35",
                    "picture": "http://placehold.it/32x32",
                    "age": 30,
                    "eyeColor": "brown",
                    "name": "Stout Bowers",
                    "gender": "male",
                    "company": "TERAPRENE",
                    "email": "stoutbowers@teraprene.com",
                    "phone": "+1 (847) 425-3109",
                    "address": "530 Pacific Street, Grandview, Palau, 1301",
                    "about": "Aliquip laborum proident ullamco enim quis eiusmod adipisicing consectetur. Magna sit fugiat minim sint esse enim tempor fugiat voluptate fugiat. Ex proident consectetur proident magna consequat do enim veniam voluptate occaecat enim commodo non. Ex sunt sint et non laboris Lorem nulla consectetur tempor excepteur minim elit excepteur. Do ad minim velit cillum.\r\n",
                    "registered": "2017-01-11T05:22:21 -01:00",
                    "latitude": 31.798464,
                    "longitude": -71.821511,
                    "tags": [
                        "eu",
                        "qui",
                        "culpa",
                        "nisi",
                        "ex",
                        "tempor",
                        "esse"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Noemi Valentine"
                        },
                        {
                            "id": 1,
                            "name": "Gregory Franco"
                        },
                        {
                            "id": 2,
                            "name": "Jackie Gates"
                        }
                    ],
                    "greeting": "Hello, Stout Bowers! You have 6 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759799676293e167ea9",
                    "index": 8,
                    "guid": "52d648a5-d170-4101-86bf-3727c91cc235",
                    "isActive": true,
                    "balance": "$3,482.57",
                    "picture": "http://placehold.it/32x32",
                    "age": 35,
                    "eyeColor": "blue",
                    "name": "Martinez Green",
                    "gender": "male",
                    "company": "MICRONAUT",
                    "email": "martinezgreen@micronaut.com",
                    "phone": "+1 (969) 443-3709",
                    "address": "970 Bragg Court, Alleghenyville, Kansas, 639",
                    "about": "Ut do dolor elit quis dolore incididunt consequat dolor quis quis sunt. Proident sunt nostrud laborum tempor in laborum officia anim dolor labore. Cupidatat id non officia aliquip duis ad. Dolore et commodo esse amet nisi. Laborum enim duis ad officia. Fugiat voluptate incididunt sint laboris. Ea reprehenderit id amet ad voluptate deserunt ad duis in eu anim.\r\n",
                    "registered": "2014-01-15T05:07:58 -01:00",
                    "latitude": -55.849907,
                    "longitude": 166.595595,
                    "tags": [
                        "nostrud",
                        "laboris",
                        "sunt",
                        "elit",
                        "Lorem",
                        "quis",
                        "commodo"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Mcpherson Malone"
                        },
                        {
                            "id": 1,
                            "name": "Earline Brock"
                        },
                        {
                            "id": 2,
                            "name": "Millie Myers"
                        }
                    ],
                    "greeting": "Hello, Martinez Green! You have 4 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "593587597e3b62ad5ea4a2a4",
                    "index": 9,
                    "guid": "a18a2839-6c3a-4f24-9d37-8c2f79e405ee",
                    "isActive": true,
                    "balance": "$2,500.09",
                    "picture": "http://placehold.it/32x32",
                    "age": 22,
                    "eyeColor": "brown",
                    "name": "Jacklyn Lowe",
                    "gender": "female",
                    "company": "VALREDA",
                    "email": "jacklynlowe@valreda.com",
                    "phone": "+1 (903) 483-2532",
                    "address": "367 Kossuth Place, Cazadero, Hawaii, 641",
                    "about": "Nisi ullamco laboris laboris non id cupidatat. Incididunt qui eiusmod labore commodo eiusmod laborum enim ullamco pariatur non adipisicing laborum non esse. Reprehenderit nulla velit magna aliqua minim mollit sunt exercitation. Laborum ipsum ad cillum sit deserunt est adipisicing in adipisicing.\r\n",
                    "registered": "2017-01-27T10:05:22 -01:00",
                    "latitude": -11.471258,
                    "longitude": -130.370701,
                    "tags": [
                        "aliqua",
                        "nostrud",
                        "aliqua",
                        "in",
                        "aliquip",
                        "Lorem",
                        "enim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Blanca Noel"
                        },
                        {
                            "id": 1,
                            "name": "Maryanne Dalton"
                        },
                        {
                            "id": 2,
                            "name": "Burgess Santana"
                        }
                    ],
                    "greeting": "Hello, Jacklyn Lowe! You have 8 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875900ca94c19c1e339f",
                    "index": 10,
                    "guid": "37f0e974-5241-4788-ae77-5951802ae164",
                    "isActive": true,
                    "balance": "$3,274.82",
                    "picture": "http://placehold.it/32x32",
                    "age": 31,
                    "eyeColor": "brown",
                    "name": "Hood Cook",
                    "gender": "male",
                    "company": "TWIGGERY",
                    "email": "hoodcook@twiggery.com",
                    "phone": "+1 (941) 532-2004",
                    "address": "942 Creamer Street, Rowe, Michigan, 3733",
                    "about": "Fugiat ad pariatur enim nisi nisi duis est consectetur. Dolore ut nisi id exercitation. Aute eiusmod exercitation ipsum cillum deserunt dolore consectetur ullamco duis. Amet ullamco cupidatat dolor in elit dolore eu qui. Sunt quis aliqua veniam pariatur laboris reprehenderit elit ad duis esse dolore. Duis est eiusmod mollit non ex elit voluptate ipsum cillum nulla voluptate laborum consequat.\r\n",
                    "registered": "2015-12-18T05:06:35 -01:00",
                    "latitude": -15.347986,
                    "longitude": -128.560519,
                    "tags": [
                        "cillum",
                        "fugiat",
                        "est",
                        "ad",
                        "sint",
                        "consequat",
                        "fugiat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Brady Rivers"
                        },
                        {
                            "id": 1,
                            "name": "Byers Whitehead"
                        },
                        {
                            "id": 2,
                            "name": "Phyllis Mcguire"
                        }
                    ],
                    "greeting": "Hello, Hood Cook! You have 7 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759b9bd9c105418d7e8",
                    "index": 11,
                    "guid": "aedaeded-2b74-4216-8a7c-7b4584c78212",
                    "isActive": true,
                    "balance": "$3,917.83",
                    "picture": "http://placehold.it/32x32",
                    "age": 24,
                    "eyeColor": "blue",
                    "name": "Lora Keller",
                    "gender": "female",
                    "company": "IMKAN",
                    "email": "lorakeller@imkan.com",
                    "phone": "+1 (925) 411-3852",
                    "address": "347 Rugby Road, Jugtown, Maine, 2300",
                    "about": "Pariatur amet culpa enim tempor minim reprehenderit dolor fugiat Lorem minim minim consectetur ut. Laboris eiusmod excepteur elit culpa et dolore dolor qui officia. Adipisicing officia enim duis est nostrud qui.\r\n",
                    "registered": "2014-08-31T09:44:39 -02:00",
                    "latitude": -25.56465,
                    "longitude": -82.442517,
                    "tags": [
                        "eu",
                        "velit",
                        "occaecat",
                        "consequat",
                        "sit",
                        "adipisicing",
                        "ullamco"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Bishop Hancock"
                        },
                        {
                            "id": 1,
                            "name": "Susanne Gonzales"
                        },
                        {
                            "id": 2,
                            "name": "Henson Jefferson"
                        }
                    ],
                    "greeting": "Hello, Lora Keller! You have 3 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875965f298420dbf609e",
                    "index": 12,
                    "guid": "960c4d32-3625-4643-8210-3f6ffe293a74",
                    "isActive": true,
                    "balance": "$1,552.49",
                    "picture": "http://placehold.it/32x32",
                    "age": 34,
                    "eyeColor": "green",
                    "name": "Autumn Kennedy",
                    "gender": "female",
                    "company": "ARCHITAX",
                    "email": "autumnkennedy@architax.com",
                    "phone": "+1 (838) 429-3302",
                    "address": "737 Lake Avenue, Alamo, Wisconsin, 1891",
                    "about": "Velit voluptate id do proident dolor consequat in esse voluptate occaecat ipsum sit. Esse reprehenderit qui incididunt sunt ad elit est elit nulla velit cupidatat labore ullamco. Cupidatat id aliqua minim fugiat voluptate sunt reprehenderit nostrud aliqua duis aliquip tempor ex aute. Minim fugiat culpa cillum minim aute laboris cupidatat anim enim minim. Et cillum veniam sit eu officia sint amet mollit aliquip.\r\n",
                    "registered": "2015-03-07T06:59:25 -01:00",
                    "latitude": -82.255268,
                    "longitude": -118.187936,
                    "tags": [
                        "aute",
                        "sit",
                        "ullamco",
                        "ea",
                        "ipsum",
                        "voluptate",
                        "sint"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Amy Sherman"
                        },
                        {
                            "id": 1,
                            "name": "Kinney Barron"
                        },
                        {
                            "id": 2,
                            "name": "Silvia Olson"
                        }
                    ],
                    "greeting": "Hello, Autumn Kennedy! You have 8 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "5935875966aa78cad8834f5c",
                    "index": 13,
                    "guid": "f719fc37-cd6e-4a99-80f2-34834e195551",
                    "isActive": false,
                    "balance": "$1,876.46",
                    "picture": "http://placehold.it/32x32",
                    "age": 30,
                    "eyeColor": "brown",
                    "name": "Hammond Higgins",
                    "gender": "male",
                    "company": "TALENDULA",
                    "email": "hammondhiggins@talendula.com",
                    "phone": "+1 (998) 571-2499",
                    "address": "877 Montauk Avenue, Malo, Washington, 9234",
                    "about": "Laborum ullamco occaecat qui ea quis magna duis. Ullamco elit consectetur tempor est labore ipsum non dolor ipsum non. Et elit magna eiusmod officia veniam tempor labore id est fugiat elit sunt elit.\r\n",
                    "registered": "2016-06-19T09:20:16 -02:00",
                    "latitude": -65.624134,
                    "longitude": -128.005646,
                    "tags": [
                        "aliquip",
                        "aute",
                        "adipisicing",
                        "excepteur",
                        "qui",
                        "minim",
                        "ut"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Barlow Medina"
                        },
                        {
                            "id": 1,
                            "name": "Lesley Patton"
                        },
                        {
                            "id": 2,
                            "name": "Danielle Brown"
                        }
                    ],
                    "greeting": "Hello, Hammond Higgins! You have 4 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "5935875942c4dee620b389f8",
                    "index": 14,
                    "guid": "487eaaef-b1f4-484d-8c0d-515d7f7e67b5",
                    "isActive": true,
                    "balance": "$1,656.82",
                    "picture": "http://placehold.it/32x32",
                    "age": 33,
                    "eyeColor": "blue",
                    "name": "Logan Gallegos",
                    "gender": "male",
                    "company": "METROZ",
                    "email": "logangallegos@metroz.com",
                    "phone": "+1 (981) 587-2476",
                    "address": "409 Clifton Place, Harrison, Texas, 2910",
                    "about": "Mollit commodo dolore in non culpa mollit nulla nulla eu pariatur magna ut. Cupidatat esse consequat eu amet magna anim qui dolor velit dolore amet esse officia laboris. Occaecat elit voluptate laborum culpa. Incididunt id sit labore ut sint non labore reprehenderit.\r\n",
                    "registered": "2016-08-25T12:45:23 -02:00",
                    "latitude": 57.759882,
                    "longitude": -43.499294,
                    "tags": [
                        "anim",
                        "excepteur",
                        "est",
                        "pariatur",
                        "incididunt",
                        "nostrud",
                        "irure"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Holman Bullock"
                        },
                        {
                            "id": 1,
                            "name": "Calderon Curry"
                        },
                        {
                            "id": 2,
                            "name": "Buckner Goodwin"
                        }
                    ],
                    "greeting": "Hello, Logan Gallegos! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759f6ea35d2858f7d72",
                    "index": 15,
                    "guid": "836d6ee3-11aa-41b5-a454-8e41849453c5",
                    "isActive": true,
                    "balance": "$3,314.80",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "brown",
                    "name": "Sabrina Beard",
                    "gender": "female",
                    "company": "ACCEL",
                    "email": "sabrinabeard@accel.com",
                    "phone": "+1 (861) 472-2477",
                    "address": "382 Fleet Street, Neibert, Rhode Island, 685",
                    "about": "Ipsum anim magna cillum est do incididunt magna et ullamco. Minim officia laborum officia culpa non enim nostrud duis in aliqua. Ut amet enim voluptate esse deserunt do in veniam cillum duis. Enim minim aliquip fugiat ea aliquip amet ea amet veniam aute. Pariatur consequat Lorem non amet Lorem ipsum. Do qui sunt laboris nostrud esse irure. Amet sit dolor ex ex adipisicing ex aliquip irure labore minim aliqua exercitation reprehenderit cupidatat.\r\n",
                    "registered": "2014-09-29T09:54:07 -02:00",
                    "latitude": 36.695791,
                    "longitude": 92.908774,
                    "tags": [
                        "deserunt",
                        "irure",
                        "veniam",
                        "excepteur",
                        "dolore",
                        "reprehenderit",
                        "reprehenderit"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Dudley Franks"
                        },
                        {
                            "id": 1,
                            "name": "Jacqueline Dudley"
                        },
                        {
                            "id": 2,
                            "name": "Moreno Burgess"
                        }
                    ],
                    "greeting": "Hello, Sabrina Beard! You have 2 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759afd6a62b33facb32",
                    "index": 16,
                    "guid": "4253c2b7-0f08-46e2-b512-9b7a7929e9b8",
                    "isActive": true,
                    "balance": "$3,533.35",
                    "picture": "http://placehold.it/32x32",
                    "age": 30,
                    "eyeColor": "brown",
                    "name": "Heath Raymond",
                    "gender": "male",
                    "company": "EMPIRICA",
                    "email": "heathraymond@empirica.com",
                    "phone": "+1 (855) 520-2717",
                    "address": "513 Hendrickson Place, Kennedyville, Pennsylvania, 8172",
                    "about": "Non occaecat enim consectetur occaecat. Deserunt ea nostrud amet eiusmod. Fugiat dolor cillum dolore excepteur voluptate mollit ea amet anim. Officia minim consectetur ut elit labore officia. Aliquip aliquip dolor occaecat labore culpa do aute id sunt et. Ullamco reprehenderit do qui et sint eiusmod consectetur cillum esse minim occaecat.\r\n",
                    "registered": "2014-01-11T02:29:19 -01:00",
                    "latitude": -5.179888,
                    "longitude": 56.804029,
                    "tags": [
                        "deserunt",
                        "commodo",
                        "eiusmod",
                        "esse",
                        "occaecat",
                        "anim",
                        "consectetur"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Kennedy Walls"
                        },
                        {
                            "id": 1,
                            "name": "Liza Schultz"
                        },
                        {
                            "id": 2,
                            "name": "Vicki Monroe"
                        }
                    ],
                    "greeting": "Hello, Heath Raymond! You have 6 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759f67f5045e0ce94f4",
                    "index": 17,
                    "guid": "b1bc4850-30dc-44d4-9483-5e3ddfd43061",
                    "isActive": false,
                    "balance": "$2,255.20",
                    "picture": "http://placehold.it/32x32",
                    "age": 35,
                    "eyeColor": "brown",
                    "name": "Fischer Hughes",
                    "gender": "male",
                    "company": "DYNO",
                    "email": "fischerhughes@dyno.com",
                    "phone": "+1 (822) 589-2138",
                    "address": "206 Mermaid Avenue, Bergoo, North Dakota, 5097",
                    "about": "Voluptate non culpa laboris nulla id aliqua id ullamco voluptate. Dolor non minim minim consequat magna eu est Lorem Lorem tempor dolore culpa. Velit qui sint esse sit velit ut officia incididunt laborum pariatur eiusmod irure exercitation occaecat. Veniam aute incididunt irure voluptate est veniam excepteur cillum id incididunt. Dolore dolor culpa cillum occaecat do velit dolore tempor.\r\n",
                    "registered": "2016-11-26T09:52:48 -01:00",
                    "latitude": 60.02127,
                    "longitude": -86.304336,
                    "tags": [
                        "tempor",
                        "do",
                        "cupidatat",
                        "pariatur",
                        "do",
                        "sit",
                        "amet"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Flossie Mcknight"
                        },
                        {
                            "id": 1,
                            "name": "Connie Stevenson"
                        },
                        {
                            "id": 2,
                            "name": "Blankenship Eaton"
                        }
                    ],
                    "greeting": "Hello, Fischer Hughes! You have 6 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759a27bd052e0becc04",
                    "index": 18,
                    "guid": "286c0d73-35ec-4334-b12c-3be2dd7e914e",
                    "isActive": false,
                    "balance": "$1,837.18",
                    "picture": "http://placehold.it/32x32",
                    "age": 24,
                    "eyeColor": "green",
                    "name": "Beverly Gilmore",
                    "gender": "female",
                    "company": "ISOSTREAM",
                    "email": "beverlygilmore@isostream.com",
                    "phone": "+1 (938) 513-2462",
                    "address": "576 Boynton Place, Chicopee, Arizona, 8589",
                    "about": "Excepteur esse eiusmod velit laborum nisi est. Irure officia cupidatat Lorem tempor ipsum tempor commodo deserunt cupidatat nulla fugiat consequat excepteur. Ex anim nisi sint dolor ut irure sit tempor. Laboris aute veniam ut nostrud tempor. Adipisicing ex nostrud eu proident ut dolor. Elit elit et quis ullamco deserunt cillum ullamco adipisicing aliquip Lorem duis duis irure enim. Id anim esse anim dolore eiusmod aliqua sunt deserunt adipisicing culpa veniam ipsum nisi mollit.\r\n",
                    "registered": "2016-10-11T04:37:10 -02:00",
                    "latitude": 69.483873,
                    "longitude": -161.654978,
                    "tags": [
                        "aute",
                        "ad",
                        "cupidatat",
                        "pariatur",
                        "id",
                        "incididunt",
                        "aliqua"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Lucile Mcintosh"
                        },
                        {
                            "id": 1,
                            "name": "Hewitt Lyons"
                        },
                        {
                            "id": 2,
                            "name": "Head Joyner"
                        }
                    ],
                    "greeting": "Hello, Beverly Gilmore! You have 6 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759a781e46a95a64119",
                    "index": 19,
                    "guid": "e0269eb7-d937-48fa-996a-fdcb77d20955",
                    "isActive": false,
                    "balance": "$1,932.02",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "green",
                    "name": "Josefina Nieves",
                    "gender": "female",
                    "company": "STUCCO",
                    "email": "josefinanieves@stucco.com",
                    "phone": "+1 (823) 413-2327",
                    "address": "859 Banker Street, Dalton, Florida, 210",
                    "about": "Ullamco et deserunt deserunt non nisi amet id elit Lorem nulla. Non esse eu fugiat occaecat magna excepteur irure tempor mollit culpa. Veniam nostrud amet commodo fugiat aute ipsum voluptate. Anim id fugiat sit dolore elit nulla laborum ullamco aute. In sit ut culpa incididunt non labore proident cupidatat anim labore incididunt do deserunt. Amet aliquip mollit ea enim eiusmod mollit ullamco aliquip anim anim.\r\n",
                    "registered": "2016-03-03T11:03:17 -01:00",
                    "latitude": 2.50705,
                    "longitude": 1.036936,
                    "tags": [
                        "nulla",
                        "voluptate",
                        "adipisicing",
                        "elit",
                        "commodo",
                        "reprehenderit",
                        "minim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Esperanza Stewart"
                        },
                        {
                            "id": 1,
                            "name": "Bruce Welch"
                        },
                        {
                            "id": 2,
                            "name": "Battle Best"
                        }
                    ],
                    "greeting": "Hello, Josefina Nieves! You have 7 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587592a52d4c03bf56c29",
                    "index": 20,
                    "guid": "28d10365-bf6a-4356-95e9-6c08ca93e12c",
                    "isActive": false,
                    "balance": "$2,274.02",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "green",
                    "name": "Adeline Pierce",
                    "gender": "female",
                    "company": "ZEPITOPE",
                    "email": "adelinepierce@zepitope.com",
                    "phone": "+1 (881) 517-2024",
                    "address": "497 Tudor Terrace, Rockhill, Iowa, 9430",
                    "about": "Commodo nostrud voluptate dolor minim officia occaecat exercitation ipsum eiusmod est tempor. Est qui culpa sit cillum reprehenderit culpa cillum adipisicing eiusmod veniam laborum ullamco duis. Excepteur reprehenderit consequat proident sit veniam irure labore culpa proident quis nisi pariatur. Esse occaecat laboris adipisicing ut eu tempor culpa Lorem tempor. Excepteur cillum sunt enim minim nulla ex ex mollit reprehenderit incididunt adipisicing laboris labore eu. Ea commodo velit nostrud adipisicing velit magna aliquip ipsum magna non. Fugiat consectetur proident elit dolor eu reprehenderit occaecat amet eu adipisicing.\r\n",
                    "registered": "2014-09-20T11:07:09 -02:00",
                    "latitude": -55.416049,
                    "longitude": -51.114015,
                    "tags": [
                        "deserunt",
                        "cupidatat",
                        "nisi",
                        "ullamco",
                        "sint",
                        "aliquip",
                        "anim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Elise Harrison"
                        },
                        {
                            "id": 1,
                            "name": "Hunt Leon"
                        },
                        {
                            "id": 2,
                            "name": "Jannie Merritt"
                        }
                    ],
                    "greeting": "Hello, Adeline Pierce! You have 8 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759908ab14f890220f6",
                    "index": 21,
                    "guid": "dea582d9-0534-431f-8c54-10e71d790f39",
                    "isActive": true,
                    "balance": "$3,226.67",
                    "picture": "http://placehold.it/32x32",
                    "age": 22,
                    "eyeColor": "blue",
                    "name": "Doris Dejesus",
                    "gender": "female",
                    "company": "ISOLOGICA",
                    "email": "dorisdejesus@isologica.com",
                    "phone": "+1 (933) 541-2631",
                    "address": "423 Stone Avenue, Whitestone, Nevada, 2013",
                    "about": "Proident reprehenderit sunt officia nostrud ullamco in et. Amet fugiat sit quis eu sint mollit laborum. Ex enim sunt aute irure et id. Et et fugiat pariatur dolor occaecat veniam ipsum reprehenderit.\r\n",
                    "registered": "2014-10-04T10:59:35 -02:00",
                    "latitude": -25.650544,
                    "longitude": -83.70955,
                    "tags": [
                        "labore",
                        "labore",
                        "reprehenderit",
                        "culpa",
                        "voluptate",
                        "fugiat",
                        "duis"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Lambert Cain"
                        },
                        {
                            "id": 1,
                            "name": "Herrera Obrien"
                        },
                        {
                            "id": 2,
                            "name": "Hilary Floyd"
                        }
                    ],
                    "greeting": "Hello, Doris Dejesus! You have 2 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "5935875949eac024b8e42544",
                    "index": 22,
                    "guid": "4b4572fe-bc6a-4dd1-83d6-76052ec8fcc9",
                    "isActive": true,
                    "balance": "$1,054.11",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "brown",
                    "name": "Clark Calhoun",
                    "gender": "male",
                    "company": "ONTALITY",
                    "email": "clarkcalhoun@ontality.com",
                    "phone": "+1 (930) 414-3267",
                    "address": "797 Oceanic Avenue, Shelby, Illinois, 3359",
                    "about": "Lorem dolore veniam Lorem occaecat voluptate ipsum eiusmod Lorem. Amet tempor pariatur anim deserunt culpa dolore exercitation occaecat minim ad qui. Ea eiusmod duis duis qui fugiat nisi eu eu eiusmod cupidatat.\r\n",
                    "registered": "2015-06-07T04:28:07 -02:00",
                    "latitude": 46.756217,
                    "longitude": 64.892363,
                    "tags": [
                        "magna",
                        "sint",
                        "consequat",
                        "cupidatat",
                        "culpa",
                        "cupidatat",
                        "officia"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Small Pace"
                        },
                        {
                            "id": 1,
                            "name": "Alexis Whitley"
                        },
                        {
                            "id": 2,
                            "name": "Andrews Whitney"
                        }
                    ],
                    "greeting": "Hello, Clark Calhoun! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "5935875935edd24c8d55446e",
                    "index": 23,
                    "guid": "fc2f02fc-4ce0-4514-a34a-fa053e2fc5f5",
                    "isActive": true,
                    "balance": "$3,590.71",
                    "picture": "http://placehold.it/32x32",
                    "age": 30,
                    "eyeColor": "green",
                    "name": "Dina Justice",
                    "gender": "female",
                    "company": "SPHERIX",
                    "email": "dinajustice@spherix.com",
                    "phone": "+1 (953) 460-3089",
                    "address": "303 India Street, Dowling, Tennessee, 6166",
                    "about": "Incididunt laboris eu ea reprehenderit dolor aliqua voluptate dolor labore magna. Ullamco culpa nulla magna nisi laborum est ex nulla qui Lorem incididunt magna id. Aute nostrud laboris sunt excepteur consequat commodo laborum ipsum et in sint reprehenderit eu pariatur. Nostrud occaecat qui pariatur eiusmod eiusmod consequat nulla id ipsum sunt.\r\n",
                    "registered": "2015-07-03T05:18:35 -02:00",
                    "latitude": 21.766899,
                    "longitude": -150.056685,
                    "tags": [
                        "duis",
                        "exercitation",
                        "consectetur",
                        "commodo",
                        "anim",
                        "veniam",
                        "laborum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Rivera Lester"
                        },
                        {
                            "id": 1,
                            "name": "Evangelina Ortiz"
                        },
                        {
                            "id": 2,
                            "name": "Mcmillan Rice"
                        }
                    ],
                    "greeting": "Hello, Dina Justice! You have 1 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759eb2e9415fbe661ab",
                    "index": 24,
                    "guid": "e59f388c-f652-4aec-9ed0-307bc5e43586",
                    "isActive": false,
                    "balance": "$1,727.32",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "brown",
                    "name": "Elnora Benjamin",
                    "gender": "female",
                    "company": "UNEEQ",
                    "email": "elnorabenjamin@uneeq.com",
                    "phone": "+1 (845) 566-2770",
                    "address": "750 Emerson Place, Tilden, Utah, 1986",
                    "about": "Mollit exercitation minim dolor qui labore et aliquip. Proident est officia aute dolor nulla amet elit ut quis nisi do eiusmod. Sunt tempor incididunt mollit amet deserunt occaecat veniam laborum dolor excepteur est adipisicing. Officia nulla commodo et laboris enim adipisicing in aliqua in mollit.\r\n",
                    "registered": "2015-07-30T06:37:49 -02:00",
                    "latitude": -57.967266,
                    "longitude": 74.755737,
                    "tags": [
                        "ipsum",
                        "mollit",
                        "labore",
                        "adipisicing",
                        "cillum",
                        "reprehenderit",
                        "consequat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Daugherty Fowler"
                        },
                        {
                            "id": 1,
                            "name": "Dale Todd"
                        },
                        {
                            "id": 2,
                            "name": "Madelyn Rodriguez"
                        }
                    ],
                    "greeting": "Hello, Elnora Benjamin! You have 8 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587593231d76a845c3f91",
                    "index": 25,
                    "guid": "9194a5ca-2130-4645-8ed1-0dc52b0800a2",
                    "isActive": false,
                    "balance": "$1,600.04",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "blue",
                    "name": "Cortez Phelps",
                    "gender": "male",
                    "company": "TALKALOT",
                    "email": "cortezphelps@talkalot.com",
                    "phone": "+1 (985) 455-2229",
                    "address": "899 Ridge Boulevard, Aguila, Alabama, 6380",
                    "about": "Ut occaecat culpa occaecat consectetur. Magna Lorem do do exercitation duis aute labore culpa elit ut enim anim. Qui excepteur ullamco nostrud enim fugiat ad anim mollit enim duis ad. Anim culpa reprehenderit ex sit anim non do excepteur occaecat nisi commodo consequat enim. Irure consectetur in esse mollit anim anim cillum est commodo est est ex. Mollit ut dolor aute nostrud sint sint.\r\n",
                    "registered": "2014-04-17T11:07:01 -02:00",
                    "latitude": 70.634471,
                    "longitude": -160.943496,
                    "tags": [
                        "adipisicing",
                        "labore",
                        "non",
                        "laborum",
                        "amet",
                        "aliquip",
                        "id"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Puckett Pratt"
                        },
                        {
                            "id": 1,
                            "name": "Burke Terrell"
                        },
                        {
                            "id": 2,
                            "name": "Myrna Simpson"
                        }
                    ],
                    "greeting": "Hello, Cortez Phelps! You have 2 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759179a01033d968da4",
                    "index": 26,
                    "guid": "f948edac-f56d-4d4d-b80c-737c33fc7f5c",
                    "isActive": false,
                    "balance": "$3,127.55",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "green",
                    "name": "Hubbard Woods",
                    "gender": "male",
                    "company": "MELBACOR",
                    "email": "hubbardwoods@melbacor.com",
                    "phone": "+1 (895) 478-3904",
                    "address": "497 Balfour Place, Elfrida, Alaska, 1040",
                    "about": "Et tempor mollit aliqua do non aute id aliquip dolore officia amet nulla sit. Aliqua aute sint officia pariatur reprehenderit commodo pariatur occaecat officia consequat cillum laboris incididunt. Ad laboris proident amet aute pariatur eu ad. Ullamco laboris minim deserunt labore cillum mollit quis sit proident commodo quis ad deserunt minim. Adipisicing tempor dolore ullamco cupidatat aute enim qui ex ut. Tempor do occaecat minim veniam labore cillum deserunt. Excepteur eiusmod cupidatat ea sint laboris cillum sint ex consequat officia.\r\n",
                    "registered": "2015-12-14T02:56:15 -01:00",
                    "latitude": -5.156554,
                    "longitude": 95.432917,
                    "tags": [
                        "deserunt",
                        "anim",
                        "culpa",
                        "consectetur",
                        "consectetur",
                        "velit",
                        "occaecat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Jolene Blackwell"
                        },
                        {
                            "id": 1,
                            "name": "Grimes Merrill"
                        },
                        {
                            "id": 2,
                            "name": "Priscilla Parker"
                        }
                    ],
                    "greeting": "Hello, Hubbard Woods! You have 8 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759b76767246213cc84",
                    "index": 27,
                    "guid": "12d37445-66e9-408e-8b8b-245df3598410",
                    "isActive": false,
                    "balance": "$3,595.99",
                    "picture": "http://placehold.it/32x32",
                    "age": 24,
                    "eyeColor": "brown",
                    "name": "Mariana Rhodes",
                    "gender": "female",
                    "company": "ZORK",
                    "email": "marianarhodes@zork.com",
                    "phone": "+1 (949) 593-2976",
                    "address": "640 Hanover Place, Bridgetown, Idaho, 3386",
                    "about": "Pariatur deserunt velit enim reprehenderit laboris aliqua. Consequat ut ea aute ex exercitation culpa commodo voluptate sunt laborum magna. Ad id mollit laboris aute do. Ut amet voluptate magna id ad fugiat voluptate aliquip esse nostrud. Est est id non cillum cillum sit nulla ullamco.\r\n",
                    "registered": "2015-06-15T11:33:34 -02:00",
                    "latitude": -42.280954,
                    "longitude": 43.062961,
                    "tags": [
                        "cupidatat",
                        "ex",
                        "eu",
                        "non",
                        "ullamco",
                        "aute",
                        "voluptate"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Toni Lawrence"
                        },
                        {
                            "id": 1,
                            "name": "Sheryl Flores"
                        },
                        {
                            "id": 2,
                            "name": "Preston Bernard"
                        }
                    ],
                    "greeting": "Hello, Mariana Rhodes! You have 8 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587595329d44a62360ad0",
                    "index": 28,
                    "guid": "9f4cd781-0713-42e4-8679-2dd013987a91",
                    "isActive": false,
                    "balance": "$1,445.85",
                    "picture": "http://placehold.it/32x32",
                    "age": 27,
                    "eyeColor": "green",
                    "name": "Goldie Cannon",
                    "gender": "female",
                    "company": "VELOS",
                    "email": "goldiecannon@velos.com",
                    "phone": "+1 (977) 452-3316",
                    "address": "820 Atlantic Avenue, Unionville, Connecticut, 1025",
                    "about": "Sint tempor quis fugiat exercitation exercitation fugiat in enim laborum laboris commodo exercitation esse. Eu in reprehenderit eiusmod anim deserunt adipisicing minim irure consequat cupidatat irure. Id sint est excepteur culpa est ex non fugiat sit ipsum elit. Magna proident in cupidatat amet culpa duis. Occaecat non eiusmod laboris esse duis adipisicing non dolor consequat.\r\n",
                    "registered": "2016-11-14T12:11:58 -01:00",
                    "latitude": -76.127602,
                    "longitude": -84.968736,
                    "tags": [
                        "qui",
                        "esse",
                        "irure",
                        "tempor",
                        "elit",
                        "ad",
                        "eiusmod"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Patel Vincent"
                        },
                        {
                            "id": 1,
                            "name": "Lula Mccray"
                        },
                        {
                            "id": 2,
                            "name": "Lynch Mercer"
                        }
                    ],
                    "greeting": "Hello, Goldie Cannon! You have 6 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875948ad07c9b76871f5",
                    "index": 29,
                    "guid": "91c88d8e-dcf0-421d-8910-7d34a6b54c14",
                    "isActive": true,
                    "balance": "$2,801.20",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "green",
                    "name": "Jenny Martin",
                    "gender": "female",
                    "company": "TETRATREX",
                    "email": "jennymartin@tetratrex.com",
                    "phone": "+1 (810) 457-2444",
                    "address": "781 Fleet Place, Iola, Virginia, 8686",
                    "about": "Adipisicing ex magna excepteur est quis dolore tempor do commodo sint velit pariatur. Velit ipsum nulla sit sunt anim nulla fugiat et aute exercitation deserunt cupidatat. Reprehenderit culpa reprehenderit elit consectetur duis deserunt cillum est occaecat nisi labore duis. Laborum mollit laborum nostrud elit nulla nulla adipisicing consequat eu occaecat veniam minim pariatur cillum. Veniam dolore incididunt ipsum dolore veniam. Non pariatur mollit cillum nulla aute fugiat occaecat pariatur proident aute esse nostrud adipisicing. Amet laboris pariatur fugiat consequat magna do magna nostrud est.\r\n",
                    "registered": "2014-03-18T02:15:27 -01:00",
                    "latitude": 55.150807,
                    "longitude": 161.22155,
                    "tags": [
                        "ex",
                        "et",
                        "ipsum",
                        "laborum",
                        "aliqua",
                        "elit",
                        "laboris"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Luz Mcgowan"
                        },
                        {
                            "id": 1,
                            "name": "Harrell Mcpherson"
                        },
                        {
                            "id": 2,
                            "name": "Bobbi Bond"
                        }
                    ],
                    "greeting": "Hello, Jenny Martin! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587596a9aaad4e8df3114",
                    "index": 30,
                    "guid": "4ce705db-2c81-4d92-93b9-9f880be01100",
                    "isActive": false,
                    "balance": "$2,514.53",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "green",
                    "name": "Mcdowell Sellers",
                    "gender": "male",
                    "company": "FROLIX",
                    "email": "mcdowellsellers@frolix.com",
                    "phone": "+1 (993) 461-3545",
                    "address": "431 Harman Street, Hondah, Arkansas, 6026",
                    "about": "Est nulla mollit occaecat excepteur ipsum in. Elit exercitation culpa dolore ex ea ad minim dolor excepteur dolor ad amet. Et ut culpa do Lorem ipsum elit enim exercitation ipsum ea tempor reprehenderit aliquip. Culpa exercitation culpa sit ea sint veniam magna ad deserunt cupidatat proident. Ex eiusmod in et laboris. Sint ex aliquip dolor esse. Eu sit laborum esse reprehenderit labore consequat aliquip non ipsum tempor cillum.\r\n",
                    "registered": "2014-03-04T08:17:20 -01:00",
                    "latitude": -9.664697,
                    "longitude": -179.977711,
                    "tags": [
                        "est",
                        "labore",
                        "esse",
                        "anim",
                        "labore",
                        "id",
                        "nisi"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Berger Brooks"
                        },
                        {
                            "id": 1,
                            "name": "Marguerite Oneill"
                        },
                        {
                            "id": 2,
                            "name": "Holden Petersen"
                        }
                    ],
                    "greeting": "Hello, Mcdowell Sellers! You have 7 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "5935875905c7690a3b3be63d",
                    "index": 31,
                    "guid": "dceae819-c7e6-4b20-8b58-6ab9f505b1bb",
                    "isActive": true,
                    "balance": "$2,360.41",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "blue",
                    "name": "Debora Zimmerman",
                    "gender": "female",
                    "company": "APEXTRI",
                    "email": "deborazimmerman@apextri.com",
                    "phone": "+1 (850) 479-2241",
                    "address": "492 Front Street, Craig, Vermont, 7971",
                    "about": "Ipsum incididunt officia consequat ipsum consectetur elit do exercitation minim. Cupidatat laborum ex officia exercitation culpa. Ex commodo et quis sunt est cillum ullamco voluptate cupidatat enim ex. Non id non occaecat mollit consectetur sit in velit voluptate. Magna dolore sint irure sint occaecat ipsum.\r\n",
                    "registered": "2014-08-27T03:16:02 -02:00",
                    "latitude": -52.361001,
                    "longitude": 43.055997,
                    "tags": [
                        "ad",
                        "cillum",
                        "exercitation",
                        "elit",
                        "occaecat",
                        "amet",
                        "enim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Lenora Carney"
                        },
                        {
                            "id": 1,
                            "name": "Letitia Sears"
                        },
                        {
                            "id": 2,
                            "name": "Terrie West"
                        }
                    ],
                    "greeting": "Hello, Debora Zimmerman! You have 9 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759c35444eb9aee5375",
                    "index": 32,
                    "guid": "ce179da8-9eec-481e-ad75-539eb972c207",
                    "isActive": false,
                    "balance": "$2,472.93",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "brown",
                    "name": "Riddle Rios",
                    "gender": "male",
                    "company": "ORBEAN",
                    "email": "riddlerios@orbean.com",
                    "phone": "+1 (839) 578-2107",
                    "address": "604 Anchorage Place, Indio, Massachusetts, 7571",
                    "about": "Dolor eu ipsum qui nisi esse incididunt nostrud sunt reprehenderit culpa quis duis voluptate. Sunt pariatur duis in proident commodo anim laborum elit sunt. Ullamco incididunt sit magna id ea excepteur exercitation proident enim minim est. Sit sint et mollit duis laboris.\r\n",
                    "registered": "2014-06-04T03:43:57 -02:00",
                    "latitude": -7.385752,
                    "longitude": -87.658105,
                    "tags": [
                        "quis",
                        "irure",
                        "adipisicing",
                        "ad",
                        "velit",
                        "laboris",
                        "quis"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Roach Travis"
                        },
                        {
                            "id": 1,
                            "name": "Baldwin Gilbert"
                        },
                        {
                            "id": 2,
                            "name": "Malinda Armstrong"
                        }
                    ],
                    "greeting": "Hello, Riddle Rios! You have 4 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759407db8fa992936bc",
                    "index": 33,
                    "guid": "0c2a5c5f-03f4-4310-85a8-5044eeb63db5",
                    "isActive": true,
                    "balance": "$3,366.20",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "blue",
                    "name": "Mooney Harvey",
                    "gender": "male",
                    "company": "CENTREGY",
                    "email": "mooneyharvey@centregy.com",
                    "phone": "+1 (921) 576-3111",
                    "address": "276 Church Avenue, Epworth, Montana, 4965",
                    "about": "Veniam cillum consectetur irure tempor sint duis dolor exercitation. Ea aute labore do est sunt eu mollit dolore sit anim irure. Consectetur ipsum et sit duis sunt eiusmod deserunt anim voluptate eu labore. Ullamco irure veniam id esse nostrud commodo voluptate nostrud. Tempor et dolore aliqua officia anim sit id culpa laboris excepteur tempor ullamco dolor excepteur. Amet sunt ut laboris excepteur duis sunt aliqua ullamco ea laboris id aute magna.\r\n",
                    "registered": "2015-03-30T08:24:30 -02:00",
                    "latitude": -81.591486,
                    "longitude": -73.773909,
                    "tags": [
                        "nulla",
                        "aliqua",
                        "irure",
                        "fugiat",
                        "deserunt",
                        "commodo",
                        "ipsum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Porter Galloway"
                        },
                        {
                            "id": 1,
                            "name": "Wells Mack"
                        },
                        {
                            "id": 2,
                            "name": "Meyer Ford"
                        }
                    ],
                    "greeting": "Hello, Mooney Harvey! You have 4 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "593587596ce993a79cddea43",
                    "index": 34,
                    "guid": "9842b22e-904f-4ec8-94da-727529c4cf3e",
                    "isActive": false,
                    "balance": "$1,831.87",
                    "picture": "http://placehold.it/32x32",
                    "age": 35,
                    "eyeColor": "blue",
                    "name": "Bush Bishop",
                    "gender": "male",
                    "company": "GRAINSPOT",
                    "email": "bushbishop@grainspot.com",
                    "phone": "+1 (915) 576-2844",
                    "address": "626 Whitty Lane, Downsville, Marshall Islands, 8571",
                    "about": "Sit duis voluptate minim do minim nulla do incididunt ad. Consequat qui nulla cupidatat laborum proident nulla anim culpa et deserunt culpa sint Lorem deserunt. Nostrud nostrud nostrud consequat ad proident. Sit duis aliquip in Lorem. Excepteur et nulla ut quis. Aliqua ex cillum veniam id aliqua dolore Lorem quis mollit qui irure tempor.\r\n",
                    "registered": "2014-09-05T01:54:14 -02:00",
                    "latitude": -79.466863,
                    "longitude": 121.172979,
                    "tags": [
                        "aliquip",
                        "adipisicing",
                        "excepteur",
                        "ex",
                        "excepteur",
                        "velit",
                        "veniam"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Natalia Caldwell"
                        },
                        {
                            "id": 1,
                            "name": "Erica Ellis"
                        },
                        {
                            "id": 2,
                            "name": "Gentry Riggs"
                        }
                    ],
                    "greeting": "Hello, Bush Bishop! You have 9 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759a7ddc8f040e23514",
                    "index": 35,
                    "guid": "4b37937a-b518-4260-9ba2-54cda68869ed",
                    "isActive": true,
                    "balance": "$1,562.43",
                    "picture": "http://placehold.it/32x32",
                    "age": 33,
                    "eyeColor": "brown",
                    "name": "Collins Robinson",
                    "gender": "male",
                    "company": "ACCUPRINT",
                    "email": "collinsrobinson@accuprint.com",
                    "phone": "+1 (891) 527-3692",
                    "address": "421 Wyona Street, Nescatunga, New Jersey, 2128",
                    "about": "Deserunt Lorem Lorem ad voluptate sit exercitation. Enim sint laboris laborum deserunt eu id sit ullamco deserunt sunt. Consequat velit velit do deserunt sit do reprehenderit minim labore ad. Nisi cupidatat nostrud pariatur magna duis et quis deserunt cupidatat fugiat consequat et. Veniam laborum amet nulla reprehenderit exercitation ut tempor ut eu minim dolore.\r\n",
                    "registered": "2014-02-27T02:22:11 -01:00",
                    "latitude": -3.642115,
                    "longitude": 17.703344,
                    "tags": [
                        "proident",
                        "Lorem",
                        "ea",
                        "consequat",
                        "aute",
                        "mollit",
                        "eiusmod"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Edith Hale"
                        },
                        {
                            "id": 1,
                            "name": "Shelby Matthews"
                        },
                        {
                            "id": 2,
                            "name": "Geneva Ingram"
                        }
                    ],
                    "greeting": "Hello, Collins Robinson! You have 7 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759e1ff126a39d9c11b",
                    "index": 36,
                    "guid": "f238ad0e-85ed-405c-aa9f-70339153c376",
                    "isActive": false,
                    "balance": "$3,901.62",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "blue",
                    "name": "Anderson Odonnell",
                    "gender": "male",
                    "company": "EMOLTRA",
                    "email": "andersonodonnell@emoltra.com",
                    "phone": "+1 (936) 543-3944",
                    "address": "644 Eldert Street, Boonville, Georgia, 4822",
                    "about": "Veniam in occaecat duis voluptate exercitation. Culpa nostrud est laboris dolore veniam. Eu esse aute qui exercitation adipisicing ea laborum ipsum aute in. Quis do est aliqua minim. Culpa veniam Lorem consequat et excepteur ullamco sit dolor. Culpa mollit non aliqua est mollit magna et laborum deserunt commodo qui ea. Consectetur laboris veniam eu duis fugiat.\r\n",
                    "registered": "2014-09-30T07:16:00 -02:00",
                    "latitude": 9.22238,
                    "longitude": -175.34091,
                    "tags": [
                        "nisi",
                        "aute",
                        "elit",
                        "occaecat",
                        "non",
                        "irure",
                        "ipsum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Dena Chapman"
                        },
                        {
                            "id": 1,
                            "name": "Maldonado Shepherd"
                        },
                        {
                            "id": 2,
                            "name": "Tameka Gentry"
                        }
                    ],
                    "greeting": "Hello, Anderson Odonnell! You have 1 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587595dea116805d73dac",
                    "index": 37,
                    "guid": "6d1a214d-251f-41b0-8468-b25557f9ccfc",
                    "isActive": false,
                    "balance": "$1,363.12",
                    "picture": "http://placehold.it/32x32",
                    "age": 23,
                    "eyeColor": "green",
                    "name": "Berg Strong",
                    "gender": "male",
                    "company": "MANTRIX",
                    "email": "bergstrong@mantrix.com",
                    "phone": "+1 (942) 428-2603",
                    "address": "758 Strong Place, Hollymead, Minnesota, 1226",
                    "about": "Consequat non ea qui culpa laboris exercitation duis duis. Consequat reprehenderit labore amet reprehenderit nostrud aute incididunt reprehenderit cillum minim do excepteur ad labore. Non elit aute exercitation do ullamco tempor. Deserunt deserunt minim elit proident. Ea anim aliqua ad Lorem do nisi mollit enim deserunt velit labore nisi ex proident. Ut in cillum ullamco consectetur proident ea.\r\n",
                    "registered": "2014-10-25T12:02:05 -02:00",
                    "latitude": 76.487674,
                    "longitude": -23.64978,
                    "tags": [
                        "aliquip",
                        "ipsum",
                        "deserunt",
                        "et",
                        "tempor",
                        "consequat",
                        "nostrud"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Wilder Durham"
                        },
                        {
                            "id": 1,
                            "name": "Irwin Riley"
                        },
                        {
                            "id": 2,
                            "name": "Baker Hamilton"
                        }
                    ],
                    "greeting": "Hello, Berg Strong! You have 9 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759550db856f015a440",
                    "index": 38,
                    "guid": "4827a577-5dab-410a-81c6-3df84bfb7cd7",
                    "isActive": false,
                    "balance": "$3,198.28",
                    "picture": "http://placehold.it/32x32",
                    "age": 37,
                    "eyeColor": "blue",
                    "name": "William Mcmahon",
                    "gender": "male",
                    "company": "EMTRAC",
                    "email": "williammcmahon@emtrac.com",
                    "phone": "+1 (938) 537-3327",
                    "address": "428 Laurel Avenue, Blairstown, American Samoa, 1701",
                    "about": "Enim culpa qui minim culpa amet id deserunt deserunt enim proident. Qui do voluptate nisi officia ea incididunt deserunt sunt eu elit. Voluptate exercitation fugiat sit nulla velit consequat anim. Velit dolore dolore in deserunt minim esse ex officia amet aliqua velit ut ad officia. Cupidatat amet fugiat pariatur consectetur do qui incididunt voluptate et aliquip fugiat dolore culpa. Aute esse amet minim esse nostrud sit velit id ex fugiat enim. Eu cillum in excepteur excepteur.\r\n",
                    "registered": "2015-10-25T07:16:27 -01:00",
                    "latitude": -19.637149,
                    "longitude": 64.159113,
                    "tags": [
                        "quis",
                        "consequat",
                        "pariatur",
                        "ut",
                        "deserunt",
                        "veniam",
                        "laborum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Natalie Freeman"
                        },
                        {
                            "id": 1,
                            "name": "Cherry Jensen"
                        },
                        {
                            "id": 2,
                            "name": "Houston Dunn"
                        }
                    ],
                    "greeting": "Hello, William Mcmahon! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587595c07c98726aa3f46",
                    "index": 39,
                    "guid": "55d474f9-506f-47bb-b9ed-4f61026ec5a3",
                    "isActive": false,
                    "balance": "$2,000.18",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "blue",
                    "name": "Heidi Mcdonald",
                    "gender": "female",
                    "company": "ISONUS",
                    "email": "heidimcdonald@isonus.com",
                    "phone": "+1 (813) 446-2441",
                    "address": "704 Polar Street, Saddlebrooke, Kentucky, 2500",
                    "about": "Non ut cillum occaecat amet minim est velit nulla Lorem pariatur fugiat duis laboris. Qui duis sint qui excepteur minim excepteur reprehenderit tempor ut ex occaecat. Dolor esse exercitation fugiat aliqua consequat laborum eu reprehenderit. Culpa velit qui adipisicing nostrud esse aliquip nulla mollit proident pariatur exercitation.\r\n",
                    "registered": "2014-02-15T01:47:14 -01:00",
                    "latitude": 61.411526,
                    "longitude": 68.061413,
                    "tags": [
                        "sit",
                        "anim",
                        "ullamco",
                        "do",
                        "sit",
                        "anim",
                        "minim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Yvonne Mcfadden"
                        },
                        {
                            "id": 1,
                            "name": "Herman Shaw"
                        },
                        {
                            "id": 2,
                            "name": "Olson Leblanc"
                        }
                    ],
                    "greeting": "Hello, Heidi Mcdonald! You have 5 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875912d06e02d35dce62",
                    "index": 40,
                    "guid": "9cd2dbfd-1056-4e5e-b9c9-f700ac13902e",
                    "isActive": false,
                    "balance": "$3,714.16",
                    "picture": "http://placehold.it/32x32",
                    "age": 24,
                    "eyeColor": "brown",
                    "name": "Williamson Dillon",
                    "gender": "male",
                    "company": "TURNABOUT",
                    "email": "williamsondillon@turnabout.com",
                    "phone": "+1 (935) 495-2594",
                    "address": "357 Fairview Place, Bluetown, Missouri, 7128",
                    "about": "Velit aliquip reprehenderit culpa labore enim. Dolore labore labore consectetur ullamco mollit quis tempor eu culpa id proident. Et ex commodo elit ipsum dolore magna excepteur non irure cupidatat. Ad pariatur commodo mollit esse commodo tempor aliquip. Anim dolore est ipsum aute Lorem cupidatat eu sit veniam irure. Ut tempor cupidatat sit est aute sint nulla. Ut excepteur incididunt in laboris incididunt eu reprehenderit cupidatat laboris ut dolor esse veniam.\r\n",
                    "registered": "2014-06-19T07:11:50 -02:00",
                    "latitude": -29.123114,
                    "longitude": 109.389039,
                    "tags": [
                        "elit",
                        "tempor",
                        "adipisicing",
                        "fugiat",
                        "do",
                        "ea",
                        "ea"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Lott Trujillo"
                        },
                        {
                            "id": 1,
                            "name": "Whitehead Perkins"
                        },
                        {
                            "id": 2,
                            "name": "Louisa Suarez"
                        }
                    ],
                    "greeting": "Hello, Williamson Dillon! You have 2 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759c54a109d70e752df",
                    "index": 41,
                    "guid": "0efcafda-d7e6-43dc-8eb3-ab8fbcbf9a1e",
                    "isActive": true,
                    "balance": "$1,171.10",
                    "picture": "http://placehold.it/32x32",
                    "age": 30,
                    "eyeColor": "green",
                    "name": "Tonya Bailey",
                    "gender": "female",
                    "company": "ZAGGLES",
                    "email": "tonyabailey@zaggles.com",
                    "phone": "+1 (895) 575-3775",
                    "address": "348 Kensington Street, Smeltertown, California, 7375",
                    "about": "Sit eiusmod non veniam eu in laboris. Reprehenderit mollit occaecat aliquip magna commodo et et mollit nostrud ipsum incididunt laboris culpa aute. Aute irure adipisicing laboris enim reprehenderit esse quis esse ad duis esse deserunt. Occaecat reprehenderit magna quis sint sit quis do dolor ut mollit esse occaecat ullamco. Eu proident qui irure in cupidatat ea commodo ad deserunt reprehenderit consectetur in eiusmod.\r\n",
                    "registered": "2015-02-28T02:35:23 -01:00",
                    "latitude": -33.671824,
                    "longitude": -52.079814,
                    "tags": [
                        "nostrud",
                        "sint",
                        "enim",
                        "magna",
                        "fugiat",
                        "exercitation",
                        "sit"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Anthony Barber"
                        },
                        {
                            "id": 1,
                            "name": "Molina Bentley"
                        },
                        {
                            "id": 2,
                            "name": "Melanie Clemons"
                        }
                    ],
                    "greeting": "Hello, Tonya Bailey! You have 10 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "593587593e1fa1e76de839db",
                    "index": 42,
                    "guid": "555612f6-9d85-4244-9702-adedae5044ad",
                    "isActive": false,
                    "balance": "$3,784.21",
                    "picture": "http://placehold.it/32x32",
                    "age": 22,
                    "eyeColor": "green",
                    "name": "Dionne Vargas",
                    "gender": "female",
                    "company": "KATAKANA",
                    "email": "dionnevargas@katakana.com",
                    "phone": "+1 (880) 432-3394",
                    "address": "670 Howard Avenue, Hackneyville, District Of Columbia, 6308",
                    "about": "Quis proident aliqua fugiat culpa aliquip minim irure tempor adipisicing do nostrud deserunt ullamco. Veniam in cupidatat et sint culpa id. Lorem incididunt do proident in. In reprehenderit proident est exercitation quis officia cupidatat duis aute fugiat. Anim cillum pariatur veniam dolor.\r\n",
                    "registered": "2014-06-11T09:37:22 -02:00",
                    "latitude": 85.027595,
                    "longitude": 142.630818,
                    "tags": [
                        "minim",
                        "cillum",
                        "culpa",
                        "proident",
                        "ad",
                        "cillum",
                        "et"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Caroline Rosario"
                        },
                        {
                            "id": 1,
                            "name": "Webb Johnson"
                        },
                        {
                            "id": 2,
                            "name": "Bowman Palmer"
                        }
                    ],
                    "greeting": "Hello, Dionne Vargas! You have 10 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759fb34c513c4263302",
                    "index": 43,
                    "guid": "30240806-dc6e-4cfd-9f95-5fda32b429ae",
                    "isActive": false,
                    "balance": "$1,441.39",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "blue",
                    "name": "Reba Cote",
                    "gender": "female",
                    "company": "COMTENT",
                    "email": "rebacote@comtent.com",
                    "phone": "+1 (823) 579-3069",
                    "address": "430 Highlawn Avenue, Mulberry, Ohio, 1526",
                    "about": "Aute proident ut duis incididunt esse est. Commodo id nostrud dolor excepteur tempor ex. Lorem officia ad laborum adipisicing eiusmod et dolor mollit consectetur non consectetur. Eiusmod nisi minim ullamco dolore et mollit ad sit velit incididunt. Exercitation cupidatat id eiusmod tempor laborum cillum velit aliqua ullamco.\r\n",
                    "registered": "2016-08-21T03:01:38 -02:00",
                    "latitude": 60.50055,
                    "longitude": 131.93956,
                    "tags": [
                        "qui",
                        "fugiat",
                        "culpa",
                        "tempor",
                        "consectetur",
                        "irure",
                        "fugiat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Katrina Scott"
                        },
                        {
                            "id": 1,
                            "name": "Hampton Parsons"
                        },
                        {
                            "id": 2,
                            "name": "Summer Price"
                        }
                    ],
                    "greeting": "Hello, Reba Cote! You have 1 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587598335d005ae011e52",
                    "index": 44,
                    "guid": "8878fc44-a8a4-4547-9637-7f0bf518604f",
                    "isActive": true,
                    "balance": "$3,222.88",
                    "picture": "http://placehold.it/32x32",
                    "age": 31,
                    "eyeColor": "brown",
                    "name": "Marie Alford",
                    "gender": "female",
                    "company": "BRAINCLIP",
                    "email": "mariealford@brainclip.com",
                    "phone": "+1 (913) 519-3508",
                    "address": "778 Harkness Avenue, Osage, New York, 3790",
                    "about": "Non laborum tempor nulla est et veniam pariatur cupidatat proident do nisi. Voluptate id reprehenderit qui eu et consequat ut. Ullamco non aliqua aliquip sunt veniam Lorem ex commodo nulla dolore dolor ut. Commodo in deserunt ipsum irure. Reprehenderit proident voluptate qui officia duis. Enim dolor anim quis aute.\r\n",
                    "registered": "2016-05-05T05:31:53 -02:00",
                    "latitude": 0.866798,
                    "longitude": 43.711846,
                    "tags": [
                        "dolor",
                        "veniam",
                        "irure",
                        "enim",
                        "sint",
                        "nostrud",
                        "minim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Chan Mendez"
                        },
                        {
                            "id": 1,
                            "name": "Roberta Baldwin"
                        },
                        {
                            "id": 2,
                            "name": "Kathleen Hahn"
                        }
                    ],
                    "greeting": "Hello, Marie Alford! You have 4 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759c7e74ecd502199bf",
                    "index": 45,
                    "guid": "67cd0f1a-aef2-49ce-8c2c-513d3a9f46d0",
                    "isActive": true,
                    "balance": "$2,651.89",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "brown",
                    "name": "Jarvis Levy",
                    "gender": "male",
                    "company": "ZOLAREX",
                    "email": "jarvislevy@zolarex.com",
                    "phone": "+1 (947) 454-2984",
                    "address": "448 Pitkin Avenue, Verdi, Mississippi, 1481",
                    "about": "Commodo mollit nulla non enim ullamco do voluptate culpa sit ex. Et occaecat in dolore officia consequat aliquip sint esse fugiat id sunt excepteur. Dolore mollit deserunt anim sint minim nulla amet officia nostrud occaecat dolor. Incididunt est enim eiusmod sit ex cillum veniam non magna quis.\r\n",
                    "registered": "2016-06-09T01:39:58 -02:00",
                    "latitude": 31.070259,
                    "longitude": -134.750545,
                    "tags": [
                        "anim",
                        "tempor",
                        "nulla",
                        "fugiat",
                        "reprehenderit",
                        "esse",
                        "qui"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Langley Wooten"
                        },
                        {
                            "id": 1,
                            "name": "Weber Carson"
                        },
                        {
                            "id": 2,
                            "name": "Krista Zamora"
                        }
                    ],
                    "greeting": "Hello, Jarvis Levy! You have 1 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759e412831fa0a35eb0",
                    "index": 46,
                    "guid": "2477bda2-9219-4e6e-a75e-5126be3573dc",
                    "isActive": true,
                    "balance": "$3,363.09",
                    "picture": "http://placehold.it/32x32",
                    "age": 29,
                    "eyeColor": "brown",
                    "name": "Carla Moreno",
                    "gender": "female",
                    "company": "LUNCHPOD",
                    "email": "carlamoreno@lunchpod.com",
                    "phone": "+1 (894) 421-2037",
                    "address": "227 Varanda Place, Russellville, Maryland, 8348",
                    "about": "Minim id mollit excepteur in ea cillum. Sint fugiat proident irure culpa commodo nulla pariatur nisi dolore velit aliquip enim. Nisi ipsum ea in cupidatat. Magna proident anim sunt laboris irure anim incididunt nostrud consectetur labore Lorem ipsum. Anim proident officia ut laboris dolor. Veniam dolor magna proident consequat. Aliqua laborum minim nulla non.\r\n",
                    "registered": "2017-03-11T05:58:18 -01:00",
                    "latitude": 89.398485,
                    "longitude": 36.308031,
                    "tags": [
                        "non",
                        "nulla",
                        "ea",
                        "ea",
                        "enim",
                        "anim",
                        "ex"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Angelita Patrick"
                        },
                        {
                            "id": 1,
                            "name": "Sims Ballard"
                        },
                        {
                            "id": 2,
                            "name": "Carroll Knight"
                        }
                    ],
                    "greeting": "Hello, Carla Moreno! You have 3 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875938199dc014cd26f8",
                    "index": 47,
                    "guid": "4df04641-1bfb-4992-8fa2-faf165519342",
                    "isActive": true,
                    "balance": "$2,736.00",
                    "picture": "http://placehold.it/32x32",
                    "age": 23,
                    "eyeColor": "blue",
                    "name": "Dillon Gallagher",
                    "gender": "male",
                    "company": "FLYBOYZ",
                    "email": "dillongallagher@flyboyz.com",
                    "phone": "+1 (988) 519-3712",
                    "address": "520 Joval Court, Harviell, North Carolina, 6578",
                    "about": "Qui reprehenderit et Lorem occaecat esse qui officia consequat est Lorem irure ea et reprehenderit. Lorem minim velit reprehenderit duis sit ea mollit. Aute incididunt exercitation fugiat magna eu culpa laboris ex amet dolore aute do. Fugiat consequat occaecat velit fugiat deserunt quis culpa tempor sint proident labore enim exercitation deserunt. Magna Lorem tempor commodo ea deserunt. Consequat labore officia aliquip fugiat.\r\n",
                    "registered": "2015-06-15T08:44:11 -02:00",
                    "latitude": -85.096236,
                    "longitude": 120.870241,
                    "tags": [
                        "minim",
                        "ex",
                        "sint",
                        "non",
                        "irure",
                        "commodo",
                        "fugiat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Haynes Farrell"
                        },
                        {
                            "id": 1,
                            "name": "Carter Hunt"
                        },
                        {
                            "id": 2,
                            "name": "Alexander Hebert"
                        }
                    ],
                    "greeting": "Hello, Dillon Gallagher! You have 4 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875914336aa1f5ae159a",
                    "index": 48,
                    "guid": "66dbe64c-4508-441d-b1f5-0e119445e7f0",
                    "isActive": true,
                    "balance": "$1,285.97",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "brown",
                    "name": "Keisha Huffman",
                    "gender": "female",
                    "company": "CRUSTATIA",
                    "email": "keishahuffman@crustatia.com",
                    "phone": "+1 (881) 431-3644",
                    "address": "536 Hopkins Street, Vandiver, Indiana, 2240",
                    "about": "Minim adipisicing ipsum fugiat laboris amet. Amet quis voluptate dolor sunt ea cupidatat excepteur aliqua mollit. Proident in fugiat ea incididunt tempor esse aute magna.\r\n",
                    "registered": "2016-01-25T05:06:20 -01:00",
                    "latitude": -71.412719,
                    "longitude": 55.004947,
                    "tags": [
                        "sit",
                        "voluptate",
                        "aliquip",
                        "eu",
                        "sunt",
                        "exercitation",
                        "ullamco"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Ruthie Collins"
                        },
                        {
                            "id": 1,
                            "name": "Mcintosh Waters"
                        },
                        {
                            "id": 2,
                            "name": "Ayala Talley"
                        }
                    ],
                    "greeting": "Hello, Keisha Huffman! You have 2 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759a8683c83ff2d5f14",
                    "index": 49,
                    "guid": "87bb3434-310f-48d4-b30c-5e2ebe3351b4",
                    "isActive": false,
                    "balance": "$3,030.67",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "brown",
                    "name": "Mckenzie Alston",
                    "gender": "male",
                    "company": "BULLZONE",
                    "email": "mckenziealston@bullzone.com",
                    "phone": "+1 (839) 505-2183",
                    "address": "109 Kingsland Avenue, Hachita, Nebraska, 4877",
                    "about": "Sint do esse dolore mollit veniam sunt pariatur dolore. Sit dolore do dolore laborum laborum deserunt exercitation ea aliqua pariatur. Ut occaecat laboris deserunt do commodo qui.\r\n",
                    "registered": "2014-07-12T01:49:16 -02:00",
                    "latitude": -75.461211,
                    "longitude": -27.172988,
                    "tags": [
                        "non",
                        "anim",
                        "adipisicing",
                        "laborum",
                        "minim",
                        "laboris",
                        "ipsum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Adriana Yang"
                        },
                        {
                            "id": 1,
                            "name": "Frieda Herrera"
                        },
                        {
                            "id": 2,
                            "name": "Clements Marshall"
                        }
                    ],
                    "greeting": "Hello, Mckenzie Alston! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "5935875907f2a0747ada5090",
                    "index": 50,
                    "guid": "e643d953-ca56-452f-a500-6796f9fe7a61",
                    "isActive": true,
                    "balance": "$1,608.78",
                    "picture": "http://placehold.it/32x32",
                    "age": 38,
                    "eyeColor": "brown",
                    "name": "Caitlin Chase",
                    "gender": "female",
                    "company": "INTRAWEAR",
                    "email": "caitlinchase@intrawear.com",
                    "phone": "+1 (980) 540-2896",
                    "address": "737 Legion Street, Thomasville, Puerto Rico, 3398",
                    "about": "Eu qui do et fugiat eiusmod nisi duis cupidatat qui eu sint officia minim. Veniam ad voluptate irure nisi nulla eiusmod eu do sint duis dolor ipsum. Consectetur consectetur aliquip irure incididunt minim esse aute Lorem irure ea consectetur Lorem. Velit ut est anim ipsum fugiat ex cillum ut velit aliquip irure Lorem ullamco. Aliqua qui in voluptate qui elit nostrud dolore dolore minim adipisicing velit magna ullamco. Sit nostrud sit quis irure est duis id sit amet aute veniam amet. In fugiat occaecat ea qui culpa excepteur voluptate dolor Lorem quis proident ut aliquip cupidatat.\r\n",
                    "registered": "2014-06-29T11:30:50 -02:00",
                    "latitude": 16.214471,
                    "longitude": -0.640864,
                    "tags": [
                        "sit",
                        "laborum",
                        "sint",
                        "culpa",
                        "ad",
                        "adipisicing",
                        "cillum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Doyle Stuart"
                        },
                        {
                            "id": 1,
                            "name": "Lester Hall"
                        },
                        {
                            "id": 2,
                            "name": "Paula Keith"
                        }
                    ],
                    "greeting": "Hello, Caitlin Chase! You have 2 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587593deb41ae320639fe",
                    "index": 51,
                    "guid": "1c6b672a-2e2b-4928-8b04-06022f679913",
                    "isActive": false,
                    "balance": "$1,941.60",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "brown",
                    "name": "Joan Espinoza",
                    "gender": "female",
                    "company": "EXOSPACE",
                    "email": "joanespinoza@exospace.com",
                    "phone": "+1 (957) 461-2402",
                    "address": "672 Madison Place, Blanford, South Carolina, 4211",
                    "about": "Fugiat consequat aute irure eiusmod Lorem et id id occaecat ea esse Lorem. Anim proident eiusmod pariatur sunt aliqua incididunt aute sunt amet. Proident amet consectetur eiusmod magna eu non. Anim ipsum in nisi sint cillum incididunt. Elit id duis qui et esse incididunt sit amet quis deserunt veniam labore sint nisi. Laborum voluptate commodo est anim fugiat nostrud exercitation deserunt labore. Sit cupidatat incididunt id anim commodo id incididunt nulla duis dolore Lorem enim.\r\n",
                    "registered": "2017-03-27T06:28:04 -02:00",
                    "latitude": -21.091547,
                    "longitude": -121.001422,
                    "tags": [
                        "elit",
                        "et",
                        "anim",
                        "ullamco",
                        "mollit",
                        "do",
                        "nisi"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Vera Holder"
                        },
                        {
                            "id": 1,
                            "name": "Melissa Blackburn"
                        },
                        {
                            "id": 2,
                            "name": "Pennington Luna"
                        }
                    ],
                    "greeting": "Hello, Joan Espinoza! You have 8 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759c3a56c682e1678b8",
                    "index": 52,
                    "guid": "0c6b75f9-60e9-4587-8823-a41727b0ebcb",
                    "isActive": false,
                    "balance": "$1,779.81",
                    "picture": "http://placehold.it/32x32",
                    "age": 24,
                    "eyeColor": "blue",
                    "name": "Kris Frederick",
                    "gender": "female",
                    "company": "BITREX",
                    "email": "krisfrederick@bitrex.com",
                    "phone": "+1 (858) 492-3326",
                    "address": "392 Myrtle Avenue, Roeville, South Dakota, 9846",
                    "about": "Do aliquip cupidatat dolor minim proident ut deserunt nisi ea et. Minim et labore sint ad deserunt occaecat esse velit officia officia. Do commodo incididunt quis id laboris do enim eiusmod culpa labore nisi. Reprehenderit sit minim incididunt laboris esse anim.\r\n",
                    "registered": "2016-10-21T04:55:11 -02:00",
                    "latitude": 82.540354,
                    "longitude": 108.296902,
                    "tags": [
                        "laborum",
                        "ad",
                        "esse",
                        "sit",
                        "sit",
                        "sit",
                        "et"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Georgia Blake"
                        },
                        {
                            "id": 1,
                            "name": "Fields Castillo"
                        },
                        {
                            "id": 2,
                            "name": "Dona Jackson"
                        }
                    ],
                    "greeting": "Hello, Kris Frederick! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587598e1aa0cd815a0ac3",
                    "index": 53,
                    "guid": "0ff8803d-7da5-4442-9866-b75e270e617d",
                    "isActive": false,
                    "balance": "$1,982.56",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "blue",
                    "name": "Deann Prince",
                    "gender": "female",
                    "company": "VERAQ",
                    "email": "deannprince@veraq.com",
                    "phone": "+1 (930) 480-3429",
                    "address": "655 Bouck Court, Gilmore, Northern Mariana Islands, 4155",
                    "about": "Magna officia laboris excepteur deserunt dolor deserunt veniam irure. Officia voluptate in officia nulla sint enim velit enim adipisicing dolor tempor eu mollit. Aliqua cillum velit fugiat consectetur pariatur do eu culpa nisi velit exercitation aliquip sit. Anim Lorem laborum magna qui non nulla occaecat dolore aute anim sit. Ea occaecat amet consequat exercitation nostrud velit enim.\r\n",
                    "registered": "2015-03-28T03:23:48 -01:00",
                    "latitude": -59.407839,
                    "longitude": 29.089065,
                    "tags": [
                        "voluptate",
                        "ut",
                        "culpa",
                        "labore",
                        "cupidatat",
                        "do",
                        "est"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Blevins Chen"
                        },
                        {
                            "id": 1,
                            "name": "Bonnie Slater"
                        },
                        {
                            "id": 2,
                            "name": "Jillian Castro"
                        }
                    ],
                    "greeting": "Hello, Deann Prince! You have 5 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759457b0bb44711f182",
                    "index": 54,
                    "guid": "fdfcf7de-70bd-4089-afa6-c3639412f1a9",
                    "isActive": true,
                    "balance": "$1,835.16",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "brown",
                    "name": "Rice Burt",
                    "gender": "male",
                    "company": "OZEAN",
                    "email": "riceburt@ozean.com",
                    "phone": "+1 (830) 443-3586",
                    "address": "393 Cornelia Street, Cedarville, Delaware, 9783",
                    "about": "Mollit adipisicing voluptate esse in commodo do magna excepteur minim laborum magna minim consectetur ea. Ut occaecat anim occaecat eu quis Lorem ipsum proident incididunt pariatur nulla deserunt. Proident tempor et ut proident Lorem consequat anim ea ipsum fugiat do esse.\r\n",
                    "registered": "2015-04-11T03:11:46 -02:00",
                    "latitude": 11.421136,
                    "longitude": -7.444148,
                    "tags": [
                        "dolore",
                        "duis",
                        "sint",
                        "ut",
                        "sunt",
                        "duis",
                        "laborum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Jones Deleon"
                        },
                        {
                            "id": 1,
                            "name": "Krystal Mendoza"
                        },
                        {
                            "id": 2,
                            "name": "Lorie Shaffer"
                        }
                    ],
                    "greeting": "Hello, Rice Burt! You have 8 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875901600919af83e02f",
                    "index": 55,
                    "guid": "42113277-7348-4d72-9731-13e0b59a9040",
                    "isActive": false,
                    "balance": "$2,509.45",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "brown",
                    "name": "Merrill Wilson",
                    "gender": "male",
                    "company": "FIBEROX",
                    "email": "merrillwilson@fiberox.com",
                    "phone": "+1 (955) 518-2094",
                    "address": "212 Schermerhorn Street, Springdale, Federated States Of Micronesia, 9323",
                    "about": "Labore incididunt incididunt magna cupidatat sunt. Id dolor veniam velit quis nisi ad consectetur consequat. Ut ex dolor sint minim nostrud et excepteur cupidatat duis culpa. Nulla adipisicing culpa ex in aliqua laboris aute commodo magna veniam consectetur ipsum magna.\r\n",
                    "registered": "2017-02-22T05:24:50 -01:00",
                    "latitude": 7.527539,
                    "longitude": -114.569103,
                    "tags": [
                        "cillum",
                        "nulla",
                        "aute",
                        "dolore",
                        "cupidatat",
                        "est",
                        "in"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Dejesus Walton"
                        },
                        {
                            "id": 1,
                            "name": "Bentley Reynolds"
                        },
                        {
                            "id": 2,
                            "name": "Tina Graham"
                        }
                    ],
                    "greeting": "Hello, Merrill Wilson! You have 1 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759f3b83285eaad5f7c",
                    "index": 56,
                    "guid": "d97c6221-8b31-4ded-adb7-a404a299782d",
                    "isActive": true,
                    "balance": "$2,805.46",
                    "picture": "http://placehold.it/32x32",
                    "age": 35,
                    "eyeColor": "green",
                    "name": "Iris Fuentes",
                    "gender": "female",
                    "company": "QUIZKA",
                    "email": "irisfuentes@quizka.com",
                    "phone": "+1 (973) 495-3842",
                    "address": "185 Linden Boulevard, Datil, West Virginia, 1486",
                    "about": "Nisi Lorem nulla aute quis. Cillum sint qui laborum excepteur ex qui aliqua ex ipsum occaecat et quis. Ut enim Lorem cillum minim ut proident. Aute anim exercitation minim mollit pariatur deserunt nisi. Nostrud voluptate reprehenderit laboris culpa Lorem sint nulla deserunt ut. Eiusmod dolore est duis cupidatat non ullamco dolore.\r\n",
                    "registered": "2016-05-28T04:21:21 -02:00",
                    "latitude": 51.583914,
                    "longitude": 85.675723,
                    "tags": [
                        "ad",
                        "duis",
                        "dolor",
                        "et",
                        "aute",
                        "est",
                        "veniam"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Gallagher Ratliff"
                        },
                        {
                            "id": 1,
                            "name": "Michele Hodge"
                        },
                        {
                            "id": 2,
                            "name": "Clarissa Smith"
                        }
                    ],
                    "greeting": "Hello, Iris Fuentes! You have 7 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587595105ecc6f40d6a0c",
                    "index": 57,
                    "guid": "b66c11ec-4770-4210-a0c9-82e3bc3a8f3f",
                    "isActive": true,
                    "balance": "$1,562.65",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "blue",
                    "name": "Felicia Singleton",
                    "gender": "female",
                    "company": "ZILIDIUM",
                    "email": "feliciasingleton@zilidium.com",
                    "phone": "+1 (848) 571-3974",
                    "address": "684 Covert Street, Boomer, Oklahoma, 9347",
                    "about": "Sunt irure minim fugiat adipisicing amet sit ipsum aliquip veniam nisi nostrud sit. Culpa id minim tempor deserunt reprehenderit. Reprehenderit anim sint non et laborum adipisicing consequat sit sint excepteur ipsum culpa.\r\n",
                    "registered": "2014-01-31T02:59:51 -01:00",
                    "latitude": -69.61114,
                    "longitude": -9.817985,
                    "tags": [
                        "sunt",
                        "quis",
                        "dolor",
                        "non",
                        "minim",
                        "deserunt",
                        "consequat"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Mayer Stone"
                        },
                        {
                            "id": 1,
                            "name": "Maude Rodgers"
                        },
                        {
                            "id": 2,
                            "name": "Camacho Noble"
                        }
                    ],
                    "greeting": "Hello, Felicia Singleton! You have 8 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759f139f288359ea884",
                    "index": 58,
                    "guid": "06216d7a-e9e4-4a9e-9cc9-d56a4c8c9714",
                    "isActive": true,
                    "balance": "$3,126.18",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "green",
                    "name": "Fay Snyder",
                    "gender": "female",
                    "company": "NIPAZ",
                    "email": "faysnyder@nipaz.com",
                    "phone": "+1 (967) 571-3839",
                    "address": "488 Horace Court, Harmon, Colorado, 3063",
                    "about": "Velit ullamco velit reprehenderit dolore sit. Sint esse laborum pariatur adipisicing consectetur enim amet fugiat ea proident nostrud non aliquip. Officia ipsum anim exercitation aute occaecat velit labore sit. Officia enim velit Lorem eu. Dolore consectetur cillum ea enim. Officia sunt nisi aliquip dolor in mollit id do nisi tempor. Occaecat eu exercitation irure et id Lorem cupidatat ex voluptate eu.\r\n",
                    "registered": "2016-12-26T07:30:58 -01:00",
                    "latitude": -27.813143,
                    "longitude": -70.151919,
                    "tags": [
                        "anim",
                        "proident",
                        "elit",
                        "deserunt",
                        "ad",
                        "dolor",
                        "veniam"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Graham Rodriquez"
                        },
                        {
                            "id": 1,
                            "name": "Nettie Roberts"
                        },
                        {
                            "id": 2,
                            "name": "Annie Morton"
                        }
                    ],
                    "greeting": "Hello, Fay Snyder! You have 2 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "5935875948b6ecff5077232e",
                    "index": 59,
                    "guid": "a1dee49f-f279-457d-8b02-f39f2945165b",
                    "isActive": true,
                    "balance": "$3,787.57",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "green",
                    "name": "Katheryn Bryan",
                    "gender": "female",
                    "company": "EARTHWAX",
                    "email": "katherynbryan@earthwax.com",
                    "phone": "+1 (873) 449-3605",
                    "address": "708 Howard Place, Bartley, Guam, 4527",
                    "about": "Quis ipsum nostrud exercitation incididunt exercitation ipsum amet fugiat ea esse. Voluptate deserunt ex occaecat nisi qui culpa non voluptate tempor qui laborum. Dolore reprehenderit irure est ipsum dolore adipisicing laboris Lorem veniam laborum dolor. Commodo sunt exercitation sint aliquip Lorem.\r\n",
                    "registered": "2015-04-21T02:18:00 -02:00",
                    "latitude": 23.238763,
                    "longitude": 119.575299,
                    "tags": [
                        "ipsum",
                        "officia",
                        "consectetur",
                        "consequat",
                        "aliquip",
                        "et",
                        "duis"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Finley Knapp"
                        },
                        {
                            "id": 1,
                            "name": "Shaffer Reyes"
                        },
                        {
                            "id": 2,
                            "name": "Malone Holloway"
                        }
                    ],
                    "greeting": "Hello, Katheryn Bryan! You have 7 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759e54008603ff01c06",
                    "index": 60,
                    "guid": "e77d3077-d908-450f-9654-337975e8bcc4",
                    "isActive": true,
                    "balance": "$1,544.11",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "blue",
                    "name": "Noel Patterson",
                    "gender": "male",
                    "company": "ACUSAGE",
                    "email": "noelpatterson@acusage.com",
                    "phone": "+1 (838) 508-2812",
                    "address": "539 Trucklemans Lane, Walker, New Hampshire, 8318",
                    "about": "Consequat velit nisi consectetur consectetur do ullamco irure qui velit nulla. Sit duis eu et excepteur. Quis cupidatat deserunt ullamco cillum do commodo eiusmod occaecat duis anim. Consequat velit esse ullamco minim qui voluptate ut excepteur reprehenderit excepteur. Elit adipisicing exercitation ullamco nostrud dolore in aliqua ea magna officia aliqua. Labore cillum culpa laboris cillum incididunt. Anim ea enim esse incididunt tempor quis adipisicing nostrud nulla.\r\n",
                    "registered": "2017-03-21T06:26:18 -01:00",
                    "latitude": 42.659302,
                    "longitude": -140.860985,
                    "tags": [
                        "eu",
                        "consequat",
                        "et",
                        "laborum",
                        "officia",
                        "in",
                        "deserunt"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Cara Meyers"
                        },
                        {
                            "id": 1,
                            "name": "Conrad Sweeney"
                        },
                        {
                            "id": 2,
                            "name": "Alana Le"
                        }
                    ],
                    "greeting": "Hello, Noel Patterson! You have 3 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875970544d8cac5bcc48",
                    "index": 61,
                    "guid": "1ac30713-132f-41de-9838-24306deb228f",
                    "isActive": false,
                    "balance": "$1,558.66",
                    "picture": "http://placehold.it/32x32",
                    "age": 28,
                    "eyeColor": "green",
                    "name": "Roseann Parrish",
                    "gender": "female",
                    "company": "PLAYCE",
                    "email": "roseannparrish@playce.com",
                    "phone": "+1 (835) 470-2591",
                    "address": "615 Eaton Court, Glenville, Oregon, 7307",
                    "about": "Ad officia amet nulla nisi reprehenderit. Fugiat tempor aliquip sit ex reprehenderit eiusmod dolore velit minim et ullamco. Occaecat occaecat ex ea voluptate. Excepteur anim reprehenderit deserunt pariatur et culpa dolore laboris qui aliquip. Reprehenderit et aliqua et dolor ex exercitation ipsum. Duis ullamco elit adipisicing ex cupidatat ullamco nulla elit.\r\n",
                    "registered": "2016-12-11T06:52:22 -01:00",
                    "latitude": 33.656866,
                    "longitude": 139.777007,
                    "tags": [
                        "aliqua",
                        "reprehenderit",
                        "in",
                        "consequat",
                        "do",
                        "incididunt",
                        "veniam"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Meagan Melton"
                        },
                        {
                            "id": 1,
                            "name": "Copeland Wolfe"
                        },
                        {
                            "id": 2,
                            "name": "Santana Hays"
                        }
                    ],
                    "greeting": "Hello, Roseann Parrish! You have 1 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "5935875997859f740927cd65",
                    "index": 62,
                    "guid": "5b86ca7c-946d-45bc-9cd1-204ea1c2da11",
                    "isActive": false,
                    "balance": "$1,022.63",
                    "picture": "http://placehold.it/32x32",
                    "age": 31,
                    "eyeColor": "brown",
                    "name": "Gladys Peterson",
                    "gender": "female",
                    "company": "NEXGENE",
                    "email": "gladyspeterson@nexgene.com",
                    "phone": "+1 (833) 435-2939",
                    "address": "294 Doone Court, Slovan, Virgin Islands, 8989",
                    "about": "Duis et nostrud fugiat et veniam consequat laboris pariatur velit ea exercitation officia nostrud excepteur. Fugiat adipisicing ad aute id. Cupidatat sunt deserunt nostrud Lorem irure id occaecat pariatur voluptate est dolore consectetur. Elit adipisicing commodo ad duis voluptate ullamco culpa amet ex consequat sunt officia tempor ex.\r\n",
                    "registered": "2016-10-12T11:59:37 -02:00",
                    "latitude": 23.97182,
                    "longitude": -113.372024,
                    "tags": [
                        "voluptate",
                        "occaecat",
                        "officia",
                        "ullamco",
                        "officia",
                        "labore",
                        "excepteur"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Lang Stanton"
                        },
                        {
                            "id": 1,
                            "name": "Goodwin Frye"
                        },
                        {
                            "id": 2,
                            "name": "Lynnette Bush"
                        }
                    ],
                    "greeting": "Hello, Gladys Peterson! You have 10 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "593587591bb39e7f0116f290",
                    "index": 63,
                    "guid": "5ad1ac6b-1270-44b4-8ecf-59f9539ca167",
                    "isActive": false,
                    "balance": "$2,116.60",
                    "picture": "http://placehold.it/32x32",
                    "age": 25,
                    "eyeColor": "green",
                    "name": "Chase Cummings",
                    "gender": "male",
                    "company": "TOURMANIA",
                    "email": "chasecummings@tourmania.com",
                    "phone": "+1 (904) 444-3565",
                    "address": "262 Greenpoint Avenue, Adelino, New Mexico, 3126",
                    "about": "Ex esse enim magna ipsum quis. Cupidatat nisi sint ad id est Lorem esse sunt pariatur est labore et amet. Eu culpa Lorem ad amet sint occaecat ea consectetur adipisicing exercitation. Eu culpa ex aute velit dolor irure adipisicing laborum aliquip. Officia do commodo consectetur minim nisi excepteur exercitation exercitation qui fugiat do dolore do id. Ut ex laborum deserunt quis tempor reprehenderit.\r\n",
                    "registered": "2016-11-26T01:52:06 -01:00",
                    "latitude": 87.822605,
                    "longitude": 155.294332,
                    "tags": [
                        "eiusmod",
                        "aliqua",
                        "Lorem",
                        "laboris",
                        "id",
                        "culpa",
                        "tempor"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Charmaine Tyler"
                        },
                        {
                            "id": 1,
                            "name": "Black Bowen"
                        },
                        {
                            "id": 2,
                            "name": "Alta Hoffman"
                        }
                    ],
                    "greeting": "Hello, Chase Cummings! You have 1 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759702a615ec57d98dd",
                    "index": 64,
                    "guid": "8446f29a-3263-411b-a4d6-0bde6da5bfe2",
                    "isActive": false,
                    "balance": "$3,708.65",
                    "picture": "http://placehold.it/32x32",
                    "age": 34,
                    "eyeColor": "green",
                    "name": "May Lott",
                    "gender": "female",
                    "company": "VALPREAL",
                    "email": "maylott@valpreal.com",
                    "phone": "+1 (833) 417-3200",
                    "address": "103 Fiske Place, Farmington, Louisiana, 1851",
                    "about": "Duis anim ullamco proident anim cillum magna id. Amet esse amet nostrud laboris consequat do nulla. Proident dolore laborum deserunt aute incididunt ad consequat minim.\r\n",
                    "registered": "2015-05-12T07:23:38 -02:00",
                    "latitude": 14.07945,
                    "longitude": 29.213713,
                    "tags": [
                        "enim",
                        "laborum",
                        "dolor",
                        "exercitation",
                        "sint",
                        "pariatur",
                        "sint"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Livingston Camacho"
                        },
                        {
                            "id": 1,
                            "name": "Sofia Santos"
                        },
                        {
                            "id": 2,
                            "name": "Faith Mcgee"
                        }
                    ],
                    "greeting": "Hello, May Lott! You have 7 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759da1a0df9c73207f9",
                    "index": 65,
                    "guid": "e77904c1-5792-43d3-8016-74db55820927",
                    "isActive": true,
                    "balance": "$3,147.38",
                    "picture": "http://placehold.it/32x32",
                    "age": 28,
                    "eyeColor": "green",
                    "name": "Hazel Mathews",
                    "gender": "female",
                    "company": "IDETICA",
                    "email": "hazelmathews@idetica.com",
                    "phone": "+1 (969) 432-3131",
                    "address": "740 Nova Court, Dennard, Palau, 920",
                    "about": "Irure incididunt sint occaecat excepteur. Dolore eiusmod et nisi veniam ex ex ut aute. Aliquip nostrud voluptate officia in labore fugiat minim eiusmod nulla dolore proident. Ad voluptate excepteur pariatur esse laboris officia pariatur. Anim labore elit ea proident deserunt ullamco laboris sint id et nisi aliqua. Et officia et ullamco ullamco.\r\n",
                    "registered": "2016-05-24T01:07:08 -02:00",
                    "latitude": 40.984688,
                    "longitude": -47.132028,
                    "tags": [
                        "proident",
                        "mollit",
                        "ullamco",
                        "ex",
                        "proident",
                        "anim",
                        "est"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Franklin Roy"
                        },
                        {
                            "id": 1,
                            "name": "Marissa Landry"
                        },
                        {
                            "id": 2,
                            "name": "Teri Dickerson"
                        }
                    ],
                    "greeting": "Hello, Hazel Mathews! You have 3 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759f44befd8dea2b6fe",
                    "index": 66,
                    "guid": "a85e2421-55a6-40d7-a393-42b38fd40892",
                    "isActive": false,
                    "balance": "$1,840.83",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "blue",
                    "name": "Espinoza Santiago",
                    "gender": "male",
                    "company": "ZENSOR",
                    "email": "espinozasantiago@zensor.com",
                    "phone": "+1 (854) 502-3390",
                    "address": "428 Sedgwick Place, Teasdale, Kansas, 8328",
                    "about": "Voluptate ullamco dolor proident ad proident enim nisi enim consectetur ea ea consectetur. Commodo magna elit et ipsum occaecat cillum ut minim. Sint in dolore ad reprehenderit. Ea minim labore cillum commodo nulla magna ipsum ad esse. Officia id culpa minim id anim voluptate pariatur.\r\n",
                    "registered": "2016-03-24T07:27:06 -01:00",
                    "latitude": -19.930342,
                    "longitude": 179.501957,
                    "tags": [
                        "irure",
                        "reprehenderit",
                        "occaecat",
                        "magna",
                        "ipsum",
                        "anim",
                        "quis"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Rosa Chan"
                        },
                        {
                            "id": 1,
                            "name": "Luna Nixon"
                        },
                        {
                            "id": 2,
                            "name": "Cox Little"
                        }
                    ],
                    "greeting": "Hello, Espinoza Santiago! You have 9 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759239c857922e69f96",
                    "index": 67,
                    "guid": "c8f4ce70-2852-4869-b5ae-52191b9f533c",
                    "isActive": false,
                    "balance": "$2,406.08",
                    "picture": "http://placehold.it/32x32",
                    "age": 32,
                    "eyeColor": "brown",
                    "name": "Aline Huff",
                    "gender": "female",
                    "company": "ZANYMAX",
                    "email": "alinehuff@zanymax.com",
                    "phone": "+1 (965) 446-2568",
                    "address": "671 Baltic Street, Moquino, Hawaii, 9586",
                    "about": "Reprehenderit dolore non proident deserunt incididunt eiusmod aute. Eiusmod anim laboris fugiat deserunt mollit. Officia duis exercitation do Lorem amet labore duis tempor. Consectetur Lorem velit commodo enim velit cillum minim irure. Nisi velit irure et voluptate pariatur aliquip minim cillum cillum ullamco culpa ipsum veniam occaecat. Magna proident incididunt tempor ut ex. Eiusmod fugiat consectetur adipisicing labore dolore excepteur fugiat nisi.\r\n",
                    "registered": "2015-10-12T04:23:56 -02:00",
                    "latitude": -89.63986,
                    "longitude": 160.290852,
                    "tags": [
                        "occaecat",
                        "laborum",
                        "quis",
                        "reprehenderit",
                        "dolore",
                        "nulla",
                        "velit"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Etta Wiley"
                        },
                        {
                            "id": 1,
                            "name": "Cervantes Adams"
                        },
                        {
                            "id": 2,
                            "name": "Hoffman Wolf"
                        }
                    ],
                    "greeting": "Hello, Aline Huff! You have 9 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "5935875901597a57a7b8101d",
                    "index": 68,
                    "guid": "b9e53906-0b32-41f9-aae3-4f065ff02981",
                    "isActive": false,
                    "balance": "$3,139.03",
                    "picture": "http://placehold.it/32x32",
                    "age": 40,
                    "eyeColor": "blue",
                    "name": "Kelli Andrews",
                    "gender": "female",
                    "company": "DATACATOR",
                    "email": "kelliandrews@datacator.com",
                    "phone": "+1 (811) 475-3772",
                    "address": "331 Apollo Street, Sanborn, Michigan, 6025",
                    "about": "Id anim pariatur ipsum velit mollit ea anim minim sunt duis veniam. Ad aliquip ullamco veniam occaecat tempor occaecat in incididunt do excepteur anim commodo amet voluptate. Veniam velit amet Lorem ut id ex Lorem velit consectetur magna pariatur. Laborum anim esse cillum nulla consequat laborum ex anim officia adipisicing est non duis incididunt.\r\n",
                    "registered": "2015-09-29T04:08:19 -02:00",
                    "latitude": 49.772126,
                    "longitude": -125.986346,
                    "tags": [
                        "adipisicing",
                        "sint",
                        "id",
                        "et",
                        "in",
                        "excepteur",
                        "mollit"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Tia Foley"
                        },
                        {
                            "id": 1,
                            "name": "Atkinson Albert"
                        },
                        {
                            "id": 2,
                            "name": "Tania Morales"
                        }
                    ],
                    "greeting": "Hello, Kelli Andrews! You have 6 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587591c0605404ad30b96",
                    "index": 69,
                    "guid": "79ac5530-f5d1-4fc6-87b5-04e643d17799",
                    "isActive": false,
                    "balance": "$3,955.58",
                    "picture": "http://placehold.it/32x32",
                    "age": 20,
                    "eyeColor": "blue",
                    "name": "Dixon Davis",
                    "gender": "male",
                    "company": "TROLLERY",
                    "email": "dixondavis@trollery.com",
                    "phone": "+1 (942) 529-2741",
                    "address": "547 Havens Place, Knowlton, Maine, 6439",
                    "about": "Sit excepteur eu in tempor ad est mollit ad nostrud consectetur laborum eu reprehenderit. Nostrud dolor id do quis aute deserunt laboris dolor ut voluptate non. Reprehenderit do laborum do quis ipsum labore non commodo Lorem dolor irure pariatur. Anim in ex anim et est anim. Commodo nisi voluptate sunt laboris aute sit aliquip cupidatat aliquip. Lorem et Lorem anim eu magna ipsum consectetur qui cupidatat tempor.\r\n",
                    "registered": "2017-05-15T05:31:12 -02:00",
                    "latitude": 80.617056,
                    "longitude": 95.206541,
                    "tags": [
                        "amet",
                        "sint",
                        "et",
                        "enim",
                        "amet",
                        "reprehenderit",
                        "ea"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Ballard Roach"
                        },
                        {
                            "id": 1,
                            "name": "Alejandra Berry"
                        },
                        {
                            "id": 2,
                            "name": "Mccarty Cunningham"
                        }
                    ],
                    "greeting": "Hello, Dixon Davis! You have 5 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587595f9b8ca8df7eb26e",
                    "index": 70,
                    "guid": "4165938a-6b84-4897-814c-dc69c12df044",
                    "isActive": true,
                    "balance": "$3,867.58",
                    "picture": "http://placehold.it/32x32",
                    "age": 39,
                    "eyeColor": "brown",
                    "name": "Eula Harper",
                    "gender": "female",
                    "company": "WARETEL",
                    "email": "eulaharper@waretel.com",
                    "phone": "+1 (918) 436-2571",
                    "address": "903 Dikeman Street, Rossmore, Wisconsin, 4719",
                    "about": "Ad ad ullamco tempor consectetur. Anim amet eu labore eiusmod do est esse ullamco elit incididunt. Cillum in aliqua magna enim voluptate tempor sint commodo mollit occaecat esse. Duis proident Lorem aute nostrud.\r\n",
                    "registered": "2016-03-01T09:23:04 -01:00",
                    "latitude": -14.404804,
                    "longitude": -122.32541,
                    "tags": [
                        "incididunt",
                        "veniam",
                        "deserunt",
                        "voluptate",
                        "labore",
                        "voluptate",
                        "enim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Wilda Avila"
                        },
                        {
                            "id": 1,
                            "name": "Cochran Pruitt"
                        },
                        {
                            "id": 2,
                            "name": "Mcbride Fulton"
                        }
                    ],
                    "greeting": "Hello, Eula Harper! You have 7 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759b8ee3ab98b37e49a",
                    "index": 71,
                    "guid": "8e1c6d5d-93a8-463a-aa94-74c99f1124e2",
                    "isActive": true,
                    "balance": "$1,529.48",
                    "picture": "http://placehold.it/32x32",
                    "age": 38,
                    "eyeColor": "brown",
                    "name": "Hines Maldonado",
                    "gender": "male",
                    "company": "ZAYA",
                    "email": "hinesmaldonado@zaya.com",
                    "phone": "+1 (962) 454-3577",
                    "address": "531 Bliss Terrace, Fivepointville, Washington, 2383",
                    "about": "Ipsum tempor officia deserunt minim amet mollit et irure veniam duis culpa tempor. Anim dolore est voluptate sunt exercitation et. Anim duis excepteur mollit laborum veniam nulla.\r\n",
                    "registered": "2014-09-16T02:24:35 -02:00",
                    "latitude": 42.069435,
                    "longitude": -116.907336,
                    "tags": [
                        "dolore",
                        "cillum",
                        "excepteur",
                        "laborum",
                        "elit",
                        "ex",
                        "Lorem"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Morton Hensley"
                        },
                        {
                            "id": 1,
                            "name": "Jasmine Gray"
                        },
                        {
                            "id": 2,
                            "name": "Mcclain Witt"
                        }
                    ],
                    "greeting": "Hello, Hines Maldonado! You have 9 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "59358759f760fd5e35beef55",
                    "index": 72,
                    "guid": "26cba157-42db-4240-a087-aa1b63807dab",
                    "isActive": true,
                    "balance": "$1,335.12",
                    "picture": "http://placehold.it/32x32",
                    "age": 34,
                    "eyeColor": "brown",
                    "name": "Nicole Kline",
                    "gender": "female",
                    "company": "BLUPLANET",
                    "email": "nicolekline@bluplanet.com",
                    "phone": "+1 (874) 512-3090",
                    "address": "888 Kane Place, Greenfields, Texas, 8708",
                    "about": "Mollit et reprehenderit consequat ad irure. Et in anim laborum sit et dolore adipisicing fugiat. Adipisicing consectetur anim cillum voluptate.\r\n",
                    "registered": "2015-10-22T08:09:42 -02:00",
                    "latitude": 51.568896,
                    "longitude": -177.818325,
                    "tags": [
                        "sunt",
                        "velit",
                        "eu",
                        "consequat",
                        "esse",
                        "consequat",
                        "est"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Jane Bowman"
                        },
                        {
                            "id": 1,
                            "name": "Eleanor Pugh"
                        },
                        {
                            "id": 2,
                            "name": "Hays Bradshaw"
                        }
                    ],
                    "greeting": "Hello, Nicole Kline! You have 6 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587595aadab52d1de253d",
                    "index": 73,
                    "guid": "8880eeac-a68a-461c-b93d-4e109f62546f",
                    "isActive": false,
                    "balance": "$1,443.26",
                    "picture": "http://placehold.it/32x32",
                    "age": 28,
                    "eyeColor": "brown",
                    "name": "Cantrell Kent",
                    "gender": "male",
                    "company": "IPLAX",
                    "email": "cantrellkent@iplax.com",
                    "phone": "+1 (870) 550-2845",
                    "address": "277 Cranberry Street, Lodoga, Rhode Island, 455",
                    "about": "Fugiat do nostrud in eu laborum quis culpa officia duis et duis dolore duis ullamco. Ex eiusmod nisi veniam pariatur esse tempor magna reprehenderit pariatur laborum elit mollit adipisicing. Amet voluptate ut ipsum reprehenderit incididunt aliqua qui. Consectetur velit adipisicing magna eu fugiat laboris nisi consequat cillum sunt. Laborum excepteur occaecat aliquip deserunt cupidatat est eu labore consectetur non amet eu ut.\r\n",
                    "registered": "2016-02-29T04:22:52 -01:00",
                    "latitude": 34.159476,
                    "longitude": 113.31375,
                    "tags": [
                        "ut",
                        "officia",
                        "officia",
                        "irure",
                        "enim",
                        "quis",
                        "non"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Wade Beasley"
                        },
                        {
                            "id": 1,
                            "name": "Hillary Cabrera"
                        },
                        {
                            "id": 2,
                            "name": "Nadia Mccarthy"
                        }
                    ],
                    "greeting": "Hello, Cantrell Kent! You have 6 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587590b655227b662e82f",
                    "index": 74,
                    "guid": "90e6bd21-6bf7-4356-94eb-f76d3da2e54a",
                    "isActive": false,
                    "balance": "$2,427.23",
                    "picture": "http://placehold.it/32x32",
                    "age": 22,
                    "eyeColor": "brown",
                    "name": "Kemp England",
                    "gender": "male",
                    "company": "SLOGANAUT",
                    "email": "kempengland@sloganaut.com",
                    "phone": "+1 (886) 540-2548",
                    "address": "427 Corbin Place, Loveland, Pennsylvania, 6521",
                    "about": "Nisi officia anim nulla ut aliqua. Ipsum amet pariatur dolore ex sit qui veniam dolore ipsum minim amet pariatur ex. In occaecat aute exercitation anim ut reprehenderit excepteur quis tempor reprehenderit. Sint enim aute velit ad aliqua veniam enim voluptate ad voluptate nostrud proident duis eu. Est irure incididunt et veniam qui et proident officia. Dolore anim incididunt enim excepteur eiusmod commodo.\r\n",
                    "registered": "2016-08-26T07:36:59 -02:00",
                    "latitude": -20.250255,
                    "longitude": -16.598157,
                    "tags": [
                        "sunt",
                        "aliqua",
                        "minim",
                        "dolor",
                        "do",
                        "officia",
                        "velit"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Joyner Cochran"
                        },
                        {
                            "id": 1,
                            "name": "Ward Stokes"
                        },
                        {
                            "id": 2,
                            "name": "Mcgee Valdez"
                        }
                    ],
                    "greeting": "Hello, Kemp England! You have 10 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "5935875974f28a79cb7ac8ad",
                    "index": 75,
                    "guid": "48c56ca8-5edf-4225-bbcf-621975a7329a",
                    "isActive": true,
                    "balance": "$2,470.42",
                    "picture": "http://placehold.it/32x32",
                    "age": 28,
                    "eyeColor": "brown",
                    "name": "Winnie Serrano",
                    "gender": "female",
                    "company": "RODEOLOGY",
                    "email": "winnieserrano@rodeology.com",
                    "phone": "+1 (968) 594-3795",
                    "address": "490 Beach Place, Bonanza, North Dakota, 4170",
                    "about": "Veniam nulla sit duis cupidatat fugiat duis cupidatat non proident. Esse ipsum do id eiusmod et cupidatat. Quis veniam sit qui mollit consequat. Anim nisi officia est exercitation proident exercitation aliqua nulla magna. Cupidatat fugiat exercitation qui qui adipisicing labore voluptate magna magna. Commodo magna nulla non adipisicing do ut velit incididunt exercitation esse magna.\r\n",
                    "registered": "2017-03-11T10:20:51 -01:00",
                    "latitude": 60.864956,
                    "longitude": -161.80346,
                    "tags": [
                        "laborum",
                        "mollit",
                        "proident",
                        "fugiat",
                        "excepteur",
                        "consectetur",
                        "laborum"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Barron Rose"
                        },
                        {
                            "id": 1,
                            "name": "Gale Steele"
                        },
                        {
                            "id": 2,
                            "name": "Tillman Hatfield"
                        }
                    ],
                    "greeting": "Hello, Winnie Serrano! You have 9 unread messages.",
                    "favoriteFruit": "banana"
                },
                {
                    "id": "593587594ade1c880dbf3555",
                    "index": 76,
                    "guid": "0c78a1e1-fb0e-4ac4-b517-f3daeb32fb63",
                    "isActive": false,
                    "balance": "$1,293.31",
                    "picture": "http://placehold.it/32x32",
                    "age": 33,
                    "eyeColor": "brown",
                    "name": "Sharon Calderon",
                    "gender": "female",
                    "company": "MANUFACT",
                    "email": "sharoncalderon@manufact.com",
                    "phone": "+1 (877) 593-3908",
                    "address": "231 Amherst Street, Frystown, Arizona, 4642",
                    "about": "Quis ex in anim irure consequat. Aliquip excepteur elit fugiat est anim nisi commodo. Duis enim elit ex laborum enim fugiat aliquip pariatur.\r\n",
                    "registered": "2016-10-21T09:41:54 -02:00",
                    "latitude": 32.511841,
                    "longitude": 15.425219,
                    "tags": [
                        "esse",
                        "deserunt",
                        "duis",
                        "id",
                        "velit",
                        "amet",
                        "enim"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Hatfield Drake"
                        },
                        {
                            "id": 1,
                            "name": "Elisa Crane"
                        },
                        {
                            "id": 2,
                            "name": "Garner Head"
                        }
                    ],
                    "greeting": "Hello, Sharon Calderon! You have 10 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "5935875948b4e1f3f62b551a",
                    "index": 77,
                    "guid": "0fbf24e8-7a82-4f45-9f5a-58d67f4cc898",
                    "isActive": false,
                    "balance": "$3,008.43",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "green",
                    "name": "Skinner Strickland",
                    "gender": "male",
                    "company": "MARQET",
                    "email": "skinnerstrickland@marqet.com",
                    "phone": "+1 (919) 521-2870",
                    "address": "262 Blake Court, Corinne, Florida, 9690",
                    "about": "Aute proident fugiat ut tempor aute adipisicing aliquip in amet qui incididunt proident esse. Deserunt reprehenderit sint non in magna. Cupidatat minim sint exercitation eiusmod sunt irure aliquip nulla et veniam qui.\r\n",
                    "registered": "2017-01-10T04:57:36 -01:00",
                    "latitude": 49.591459,
                    "longitude": 115.872826,
                    "tags": [
                        "deserunt",
                        "nostrud",
                        "cillum",
                        "minim",
                        "minim",
                        "nisi",
                        "commodo"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Kline Boyer"
                        },
                        {
                            "id": 1,
                            "name": "Sheri Harrington"
                        },
                        {
                            "id": 2,
                            "name": "Robert Compton"
                        }
                    ],
                    "greeting": "Hello, Skinner Strickland! You have 8 unread messages.",
                    "favoriteFruit": "apple"
                },
                {
                    "id": "59358759d9de3dcb2ebbac8e",
                    "index": 78,
                    "guid": "e7b5d639-203a-445b-8330-f56d38a0e662",
                    "isActive": false,
                    "balance": "$3,770.34",
                    "picture": "http://placehold.it/32x32",
                    "age": 24,
                    "eyeColor": "blue",
                    "name": "Rollins Gross",
                    "gender": "male",
                    "company": "COMTOUR",
                    "email": "rollinsgross@comtour.com",
                    "phone": "+1 (828) 533-3173",
                    "address": "220 Homecrest Avenue, Siglerville, Iowa, 384",
                    "about": "Cupidatat velit cupidatat velit tempor cillum pariatur Lorem enim duis ipsum minim reprehenderit laboris. Ea Lorem nostrud irure eu esse non voluptate reprehenderit anim duis occaecat qui enim. Velit pariatur dolore et qui nulla sunt exercitation reprehenderit minim incididunt.\r\n",
                    "registered": "2014-01-01T10:05:34 -01:00",
                    "latitude": -30.714144,
                    "longitude": -159.404382,
                    "tags": [
                        "velit",
                        "ad",
                        "adipisicing",
                        "et",
                        "sint",
                        "cillum",
                        "labore"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Maryann Grimes"
                        },
                        {
                            "id": 1,
                            "name": "Walsh Hess"
                        },
                        {
                            "id": 2,
                            "name": "Salazar Conner"
                        }
                    ],
                    "greeting": "Hello, Rollins Gross! You have 10 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "59358759a7ca03f50affde57",
                    "index": 79,
                    "guid": "71bfbc0a-a3c1-429f-a263-8e940b22ddb9",
                    "isActive": true,
                    "balance": "$3,282.06",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "blue",
                    "name": "Sharlene Clark",
                    "gender": "female",
                    "company": "IMAGEFLOW",
                    "email": "sharleneclark@imageflow.com",
                    "phone": "+1 (968) 454-2357",
                    "address": "362 Stockholm Street, Cavalero, Nevada, 3518",
                    "about": "Incididunt cupidatat quis eiusmod non aliquip officia. Sint consequat reprehenderit veniam cupidatat ex cillum et esse reprehenderit sunt pariatur occaecat et. Labore velit laborum dolor cupidatat dolor ipsum enim laboris ut id. Eu magna magna sit et sit velit non. Sit ullamco occaecat commodo excepteur consequat sit magna ea mollit irure excepteur incididunt. Fugiat nostrud velit aute eu magna eiusmod Lorem.\r\n",
                    "registered": "2015-01-22T09:13:36 -01:00",
                    "latitude": 80.042269,
                    "longitude": 14.299442,
                    "tags": [
                        "eiusmod",
                        "quis",
                        "sint",
                        "adipisicing",
                        "cillum",
                        "cillum",
                        "tempor"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "June Kirby"
                        },
                        {
                            "id": 1,
                            "name": "Whitfield Barlow"
                        },
                        {
                            "id": 2,
                            "name": "Diana Mueller"
                        }
                    ],
                    "greeting": "Hello, Sharlene Clark! You have 10 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587590ba3cbd5169c01ec",
                    "index": 80,
                    "guid": "ca43e67b-f6c6-433d-9510-fa5180ee343f",
                    "isActive": true,
                    "balance": "$1,843.68",
                    "picture": "http://placehold.it/32x32",
                    "age": 21,
                    "eyeColor": "green",
                    "name": "Ivy Sawyer",
                    "gender": "female",
                    "company": "GRACKER",
                    "email": "ivysawyer@gracker.com",
                    "phone": "+1 (951) 486-3093",
                    "address": "597 Rost Place, Canterwood, Illinois, 1539",
                    "about": "Tempor reprehenderit laboris tempor sit laborum amet laborum sunt laborum consectetur. Eu cupidatat velit excepteur qui nulla cupidatat in eiusmod elit eu mollit consectetur do. Commodo laboris voluptate qui incididunt officia aute. Laboris mollit proident incididunt dolor excepteur anim enim. Occaecat adipisicing adipisicing amet elit id irure deserunt et ut.\r\n",
                    "registered": "2016-08-24T01:01:18 -02:00",
                    "latitude": 72.509658,
                    "longitude": 161.624291,
                    "tags": [
                        "ipsum",
                        "commodo",
                        "nisi",
                        "fugiat",
                        "proident",
                        "do",
                        "commodo"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Herring Cantu"
                        },
                        {
                            "id": 1,
                            "name": "Corina Bartlett"
                        },
                        {
                            "id": 2,
                            "name": "Briana Walsh"
                        }
                    ],
                    "greeting": "Hello, Ivy Sawyer! You have 7 unread messages.",
                    "favoriteFruit": "strawberry"
                },
                {
                    "id": "593587593f68cb3e458579b0",
                    "index": 81,
                    "guid": "a167214a-4be1-4ca4-b33d-25acf3034966",
                    "isActive": true,
                    "balance": "$2,460.34",
                    "picture": "http://placehold.it/32x32",
                    "age": 26,
                    "eyeColor": "blue",
                    "name": "Talley Berger",
                    "gender": "male",
                    "company": "YURTURE",
                    "email": "talleyberger@yurture.com",
                    "phone": "+1 (947) 549-3849",
                    "address": "435 Wythe Avenue, Kimmell, Tennessee, 1807",
                    "about": "Amet do nulla sunt proident. Nostrud velit exercitation aute cupidatat exercitation deserunt do. Nostrud consectetur in cupidatat dolore aute cillum et cupidatat in. Elit sunt eu aliquip consequat sunt. Eiusmod qui elit veniam esse irure elit ea aliqua ullamco. Ipsum ipsum in sint qui incididunt proident quis culpa dolore eu dolor pariatur nulla. Cupidatat deserunt excepteur culpa consequat occaecat dolor deserunt sit culpa in nulla quis dolore.\r\n",
                    "registered": "2015-06-13T05:11:43 -02:00",
                    "latitude": -48.573089,
                    "longitude": 26.540939,
                    "tags": [
                        "nisi",
                        "velit",
                        "minim",
                        "tempor",
                        "ex",
                        "ad",
                        "excepteur"
                    ],
                    "friends": [
                        {
                            "id": 0,
                            "name": "Rios Massey"
                        },
                        {
                            "id": 1,
                            "name": "Strickland Norris"
                        },
                        {
                            "id": 2,
                            "name": "Selma Weeks"
                        }
                    ],
                    "greeting": "Hello, Talley Berger! You have 4 unread messages.",
                    "favoriteFruit": "strawberry"
                }
            ];
            describe("Serialization - Performance", function () {
                it("Measure time and size overhead in serialization.", function () {
                    var jsonString = JSON.stringify(bigObject, null, 0);
                    var now = performance.now();
                    var serializedString = Serializer.serialize(bigObject);
                    var done = performance.now();
                    var jsonStringSize = jsonString.length;
                    var serializedStringSize = serializedString.length;
                    var sizeOverhead = serializedStringSize - jsonStringSize;
                    var sizeOverheadPercent = Math.round((sizeOverhead / jsonStringSize) * 100.);
                    var timeToSerialize = Math.round((done - now) * 1000.) / 1000.;
                    console.log("bigObject stringify size: " + jsonStringSize);
                    console.log("serialized string size: " + serializedStringSize);
                    console.log("size Overhead: " + sizeOverhead);
                    console.log("size Overhead Percent: " + sizeOverheadPercent + " %");
                    console.log("Time to serialize: " + timeToSerialize + " ms");
                    now = performance.now();
                    var deserializedObject = Deserializer.deserialize(serializedString);
                    done = performance.now();
                    var timeToDeserialize = Math.round((done - now) * 100.) / 100.;
                    var deserializationToSerializationRatioPercent = Math.round((timeToDeserialize / timeToSerialize) * 100.);
                    var deserializationToSerializationRatio = Math.round((timeToDeserialize / timeToSerialize) * 100.) / 100.;
                    console.log("Time to deserialize: " + timeToDeserialize + " ms");
                    console.log("Deserialization to Serialization Percent: " + deserializationToSerializationRatioPercent + " %");
                    console.log("Serialization to Deserialization Ratio: 1:" + deserializationToSerializationRatio);
                    expect(true).toBeTruthy();
                });
            });
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
                    var anArrayDefinedExternally = [0, 1, 2, 3];
                    var anObject = {
                        property1: "A Property",
                        property2: "Another Property",
                        anArray: ["1", "3", { property1: "Echo" }],
                        anArrayContainingAParticularInstance: [instanceOfAnObject],
                        anArrayContainingTheSameParticularInstance: [instanceOfAnObject],
                        anArrayInstance: anArrayDefinedExternally,
                        anotherArrayInstance: anArrayDefinedExternally,
                        aNullValue: null,
                        aDate: new Date(),
                        aRegExp: /abc/i,
                        instance1: instanceOfAnObject,
                        instance2: instanceOfAnObject
                    };
                    var serialized = Serializer.serializeToObject(anObject);
                    var deserialized = Deserializer.deserializeFromObject(serialized);
                    expect(deserialized).toEqual(anObject, "serializeToObject + deserializeFromObject must return the original object!");
                    expect(deserialized.instance1 === deserialized.instance2).toBeTruthy("serializeToObject + deserializeFromObject do not preserve object structure and instances.");
                    expect(deserialized.anArrayContainingAParticularInstance[0] === deserialized.anArrayContainingTheSameParticularInstance[0]).toBeTruthy("serializeToObject + deserializeFromObject do not preserve object structure and instances in arrays.");
                    expect(deserialized.anArrayInstance === deserialized.anotherArrayInstance).toBeTruthy("serializeToObject + deserializeFromObject do not preserve arrays instances.");
                });
            });
        })(Serialization = Tests.Serialization || (Tests.Serialization = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
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
                    var _this = _super.call(this) || this;
                    _this.__typeName = "CdC.Tests.UnitOfWork.TestKey";
                    _this.__typeVersion = "v1";
                    return _this;
                }
                return TestKey;
            }(Guid));
            ForUnitOfWork.TestKey = TestKey;
            var TestAggregate = (function (_super) {
                __extends(TestAggregate, _super);
                function TestAggregate() {
                    var _this = _super.call(this) || this;
                    _this.aTestProperty = "Ciao";
                    _this.__typeName = "CdC.Tests.UnitOfWork.TestAggregate";
                    _this.__typeVersion = "v1";
                    return _this;
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
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return TestRepository;
            }(InMemoryRepository));
            ForUnitOfWork.TestRepository = TestRepository;
            var TestUoW = (function (_super) {
                __extends(TestUoW, _super);
                function TestUoW(repo) {
                    return _super.call(this, repo) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLXRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QvREREVG9vbHMvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlU3RhdGVNYWNoaW5lLXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlVmFsdWVPYmplY3Qtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luTWVtb3J5UmVwb3NpdG9yeS1zcGVjLnRzIiwiLi4vc3JjL3Rlc3QvREREVG9vbHMvSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luUHJvY2Vzc0Rpc3BhdGNoZXItc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL01vbmV5LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9TZXJpYWxpemF0aW9uLXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9Vbml0T2ZXb3JrLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWVBLElBQVUsR0FBRyxDQXFCWjtBQXJCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLEtBQUssQ0FxQmxCO0lBckJhLFdBQUEsS0FBSztRQUFDLElBQUEscUJBQXFCLENBcUJ4QztRQXJCbUIsV0FBQSxxQkFBcUI7WUFBQyxJQUFBLEVBQUUsQ0FxQjNDO1lBckJ5QyxXQUFBLEVBQUU7Z0JBSXhDLElBQU8sVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUcvQztvQkFBMEMsd0NBQXNDO29CQUFoRjt3QkFBQSxxRUFhQzt3QkFaRyxnQkFBVSxHQUFHLHNEQUFzRCxDQUFDO3dCQUNwRSxtQkFBYSxHQUFHLElBQUksQ0FBQzs7b0JBV3pCLENBQUM7b0JBUEcsa0RBQW1CLEdBQW5CLFVBQW9CLFlBQXFFO3dCQUNyRixJQUFJLEtBQUssR0FB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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsTUFBTSxDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDakUsQ0FBQztvQkFFRCxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBR2QsSUFBSSxDQUFDO3dCQUNELE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLDBGQUEwRixDQUFDLENBQUM7b0JBQ3pILENBQUM7b0JBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDVCxNQUFNLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN4QyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2hELENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFoUG1CLGFBQWEsR0FBYixtQkFBYSxLQUFiLG1CQUFhLFFBZ1BoQztJQUFELENBQUMsRUFoUGEsS0FBSyxHQUFMLFNBQUssS0FBTCxTQUFLLFFBZ1BsQjtBQUFELENBQUMsRUFoUFMsR0FBRyxLQUFILEdBQUcsUUFnUFoiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeSwgVXBncmFkZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MiB7XHJcblxyXG4gICAgaW1wb3J0IFRlc3RFbnRpdHkgPSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHk7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEEzU3RlcFVwZ3JhZGFibGVJdGVtIGV4dGVuZHMgQmFzZUVudGl0eTxBM1N0ZXBVcGdyYWRhYmxlSXRlbSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MlwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgYU5ld1Byb3BlcnR5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGdldFVwZ3JhZGVkSW5zdGFuY2UoZnJvbUluc3RhbmNlOiBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLkEzU3RlcFVwZ3JhZGFibGVJdGVtKTogQTNTdGVwVXBncmFkYWJsZUl0ZW0ge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmcm9tSW5zdGFuY2UuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgc3RhdGUuYU5ld1Byb3BlcnR5ID0gXCJ1cGdyYWRlciB3YXMgaGVyZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5fX3R5cGVWZXJzaW9uID0gXCJ2MlwiXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEVudGl0eSBleHRlbmRzIEJhc2VFbnRpdHk8VGVzdEVudGl0eSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEEzU3RlcFVwZ3JhZGFibGVJdGVtIGV4dGVuZHMgQmFzZUVudGl0eTxBM1N0ZXBVcGdyYWRhYmxlSXRlbSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgVXBncmFkZXIgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5VcGdyYWRlcjtcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5FcnJvcnM7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEEzU3RlcFVwZ3JhZGFibGVJdGVtIGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYzXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTmV3UHJvcGVydHk6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgYU5ld05ld1Byb3BlcnR5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGdldFVwZ3JhZGVkSW5zdGFuY2UoZnJvbUluc3RhbmNlOiBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYyLkEzU3RlcFVwZ3JhZGFibGVJdGVtKTogQTNTdGVwVXBncmFkYWJsZUl0ZW0ge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmcm9tSW5zdGFuY2UuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgc3RhdGUuYU5ld05ld1Byb3BlcnR5ID0gXCJ1cGdyYWRlciB3YXMgaGVyZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5fX3R5cGVWZXJzaW9uID0gXCJ2M1wiXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjJcIjtcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSk6IFRlc3RFbnRpdHkge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBmcm9tSW5zdGFuY2UuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgc3RhdGUuYU5ld1Byb3BlcnR5ID0gXCJ1cGdyYWRlciB3YXMgaGVyZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5fX3R5cGVWZXJzaW9uID0gXCJ2MlwiXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgcHJvcGVydHkgd2FzIG5vdCBpbiBcInYxXCIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5Tm9uVXBncmFkYWJsZSBleHRlbmRzIEJhc2VFbnRpdHk8VGVzdEVudGl0eU5vblVwZ3JhZGFibGUsIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEFDbGFzc1dpdGhNYW55VHlwZXMgZXh0ZW5kcyBCYXNlRW50aXR5PEFDbGFzc1dpdGhNYW55VHlwZXMsIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkFDbGFzc1dpdGhNYW55VHlwZXNcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICAvLyBQcmltaXRpdmUgRGF0YXR5cGVzXHJcbiAgICAgICAgcHVibGljIGFOdW1iZXI6IE51bWJlcjtcclxuICAgICAgICBwdWJsaWMgYVN0cmluZzogU3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBhQm9vbGVhbjogQm9vbGVhbjtcclxuICAgICAgICBwdWJsaWMgYW5PYmplY3Q6IE9iamVjdDtcclxuXHJcbiAgICAgICAgLy8gRXh0ZW5kZWQgdHlwZXNcclxuICAgICAgICBwdWJsaWMgYVJlZ0V4cDogUmVnRXhwO1xyXG4gICAgICAgIHB1YmxpYyBhRGF0ZTogRGF0ZTtcclxuICAgICAgICBwdWJsaWMgYU51bGxWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUoXCJCYXNlUGVyc2lzdGFibGVPYmplY3RcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5BM1N0ZXBVcGdyYWRhYmxlSXRlbSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiLCBcInYyXCIsIDxhbnk+Q2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52Mi5BM1N0ZXBVcGdyYWRhYmxlSXRlbSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiLCBcInYzXCIsIDxhbnk+QTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eVwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIiwgXCJ2MlwiLCA8YW55PlRlc3RFbnRpdHkpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eU5vblVwZ3JhZGFibGVcIiwgXCJ2MVwiLCA8YW55PlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkFDbGFzc1dpdGhNYW55VHlwZXNcIiwgXCJ2MVwiLCA8YW55PkFDbGFzc1dpdGhNYW55VHlwZXMpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJjb21wdXRlTmV4dFZlcnNpb24gZGV2ZSByZXN0aXR1aXJlIGlsIHZhbG9yZSBjb3JyZXR0byBkZWxsYSB2ZXJzaW9uZSBzdWNjZXNzaXZhXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb21wdXRlZCA9IFVwZ3JhZGVyLmNvbXB1dGVOZXh0VmVyc2lvbihcInYxXCIpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvbXB1dGVkKS50b0VxdWFsKFwidjJcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiY29tcHV0ZU5leHRWZXJzaW9uIGRldmUgcmVzdGl0dWlyZSB1biBlcnJvcmUgc2UgbGEgdmVyc2lvbmUgbm9uIMOoIGNvcnJldHRhLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZXhwZWN0ZWRFcnJvciA9IG5ldyBFcnJvcihFcnJvcnMuSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCk7XHJcbiAgICAgICAgICAgIGV4cGVjdGVkRXJyb3IubWVzc2FnZSA9IFwiU3BlY2lmaWVkIHZlcnNpb24gbTE1IGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCI7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoKCkgPT4geyB2YXIgY29tcHV0ZWQgPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oXCJtMTVcIik7IH0pLnRvVGhyb3coZXhwZWN0ZWRFcnJvcik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgZGV2ZSByZXN0aXR1aXJlIGZhbHNlIHBlciBnbGkgb2dnZXR0aSBjaGUgbm9uIGhhbm5vIHZlcnNpb25pIG9sdHJlIGFsbGEgcHJpbWFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgVGVzdEVudGl0eU5vblVwZ3JhZGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZWVkc1VwZ3JhZGUgPSBVcGdyYWRlci5pc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHRlLl9fdHlwZU5hbWUsIHRlLl9fdHlwZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KG5lZWRzVXBncmFkZSkudG9CZUZhbHN5KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBzaG91bGQgaGF2ZSByZXR1cm5lZCBmYWxzZSFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBkZXZlIHJlc3RpdHVpcmUgdHJ1ZSBwZXIgZ2xpIG9nZ2V0dGkgY2hlIGhhbm5vIHZlcnNpb25pIG9sdHJlIGFsbGEgcHJpbWFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmVlZHNVcGdyYWRlID0gVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0ZS5fX3R5cGVOYW1lLCB0ZS5fX3R5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChuZWVkc1VwZ3JhZGUpLnRvQmVUcnV0aHkoXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIHNob3VsZCBoYXZlIHJldHVybmVkIHRydWUhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInVwZ3JhZGUgbXVzdCBiZSBhYmxlIHRvIHVwZ3JhZGUgYSBQZXJzaXN0YWJsZU9iamVjdCB0byBpdHMgbGF0ZXN0IHZlcnNpb24gWzIgc3RlcHNdXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLlRlc3RFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh0ZS5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSA8VGVzdEVudGl0eT5VcGdyYWRlci51cGdyYWRlKHRlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjJcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJ1cGdyYWRlIG11c3QgYmUgYWJsZSB0byB1cGdyYWRlIGEgUGVyc2lzdGFibGVPYmplY3QgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uIFszIHN0ZXBzXVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5BM1N0ZXBVcGdyYWRhYmxlSXRlbSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHRlLl9fdHlwZVZlcnNpb24pLnRvRXF1YWwoXCJ2MVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1cGdyYWRlZCA9IDxBM1N0ZXBVcGdyYWRhYmxlSXRlbT5VcGdyYWRlci51cGdyYWRlKHRlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjNcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHVwZ3JhZGVkLmFOZXdOZXdQcm9wZXJ0eSkudG9FcXVhbChcInVwZ3JhZGVyIHdhcyBoZXJlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImdldFN0YXRlIG11c3QgYmUgYWJsZSB0byBjb3B5IFJlZ0V4cCB0eXBlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkFDbGFzc1dpdGhNYW55VHlwZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0UmVnRXhwID0gXCIvXnZbMC05XStcIjtcclxuICAgICAgICAgICAgdmFyIHRlc3RTdHJpbmcgPSBcInYxMjNcIjtcclxuICAgICAgICAgICAgdGUuYVJlZ0V4cCA9IG5ldyBSZWdFeHAodGVzdFJlZ0V4cCk7XHJcbiAgICAgICAgICAgIHZhciByZWdFeHBSZXN1bHQgPSB0ZS5hUmVnRXhwLnRlc3QodGVzdFN0cmluZyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSA8QUNsYXNzV2l0aE1hbnlUeXBlcz50ZS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFSZWdFeHAgaW5zdGFuY2VvZiBSZWdFeHApLnRvQmVUcnV0aHkoXCJhUmVnRXhwIGlzIG5vdCBhIFJlZ0V4cCBpbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFSZWdFeHAudGVzdChcInYxMjNcIikpLnRvRXF1YWwocmVnRXhwUmVzdWx0LCBcImFSZWdFeHAgbm9uIHNpIGNvbXBvcnRhIGNvbWUgbGEgUmVndWxhckV4cHJlc3Npb24gb3JpZ2luYWxlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImdldFN0YXRlIG11c3QgYmUgYWJsZSB0byBjb3B5IERhdGUgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGUuYURhdGUgPSB0ZXN0RGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IDxBQ2xhc3NXaXRoTWFueVR5cGVzPnRlLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3Qoc3RhdGUuYURhdGUgaW5zdGFuY2VvZiBEYXRlKS50b0JlVHJ1dGh5KFwiYURhdGUgaXMgbm90IGEgRGF0ZSBpbnN0YW5jZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFEYXRlLnRvU3RyaW5nKCkgKS50b0VxdWFsKHRlc3REYXRlLnRvU3RyaW5nKCksIFwiYURhdGUgbm9uIMOoIHN0YXRhIHJpcHJpc3RpbmF0YSBjb21lIERhdGVcIik7XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeSwgVXBncmFkZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VTdGF0ZU1hY2hpbmUge1xyXG5cclxuICAgIGltcG9ydCBCYXNlU3RhdGVNYWNoaW5lID0gREREVG9vbHMuU3RhdGVNYWNoaW5lLkJhc2VTdGF0ZU1hY2hpbmU7XHJcbiAgICBpbXBvcnQgU3RhdGVNYWNoaW5lRXZlbnQgPSBERERUb29scy5TdGF0ZU1hY2hpbmUuU3RhdGVNYWNoaW5lRXZlbnQ7XHJcbiAgICBpbXBvcnQgS2luZHNPZkV2ZW50SGFuZGxlciA9IERERFRvb2xzLlN0YXRlTWFjaGluZS5LaW5kc09mRXZlbnRIYW5kbGVyO1xyXG4gICAgaW1wb3J0IEhhbmRsZXJSZXN1bHQgPSBERERUb29scy5TdGF0ZU1hY2hpbmUuSGFuZGxlclJlc3VsdDtcclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IERERFRvb2xzLlByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG5cclxuICAgIGltcG9ydCBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYyA9IERERFRvb2xzLlJlcG9zaXRvcnkuSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBERERUb29scy5BZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuXHJcbiAgICB0eXBlIFN0YXRlcyA9IFwiU3RhdGVfQVwiIHwgXCJTdGF0ZV9CXCIgfCBcIlN0YXRlX0NcIjtcclxuICAgIHR5cGUgRXZlbnRzID0gXCJGcm9tX0FfdG9fQlwiIHwgXCJGcm9tX0JfdG9fQ1wiO1xyXG4gICAgdHlwZSBTdGF0ZU1hY2hpbmVEZWYgPSB7W2V2ZW50OiBzdHJpbmddOiB7W2Zyb21TdGF0dXM6IHN0cmluZ106IFN0YXRlc319O1xyXG4gICAgXHJcbiAgICB2YXIgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbjogU3RhdGVNYWNoaW5lRGVmID0ge1xyXG4gICAgICAgIFwiRnJvbV9BX3RvX0JcIjoge1xyXG4gICAgICAgICAgICBcIlN0YXRlX0FcIjogXCJTdGF0ZV9CXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiRnJvbV9CX3RvX0NcIjoge1xyXG4gICAgICAgICAgICBcIlN0YXRlX0JcIjogXCJTdGF0ZV9DXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgYVN0YXRlTWFjaGluZSBleHRlbmRzIEJhc2VTdGF0ZU1hY2hpbmU8U3RhdGVzLCBFdmVudHM+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJhU3RhdGVNYWNoaW5lXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBJZEZha2VBZ2dyZWdhdGUgZXh0ZW5kcyBHdWlkIHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJJZEZha2VBZ2dyZWdhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xhc3MgQUZha2VBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxBRmFrZUFnZ3JlZ2F0ZSwgSWRGYWtlQWdncmVnYXRlPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQUZha2VBZ2dyZWdhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc206IGFTdGF0ZU1hY2hpbmUgPSBuZXcgYVN0YXRlTWFjaGluZShcIlN0YXRlX0FcIiwgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGZha2VTTVJlcG86IEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jPEFGYWtlQWdncmVnYXRlLCBJZEZha2VBZ2dyZWdhdGU+O1xyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZVN0YXRlTWFjaGluZVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBzdXQ6IGFTdGF0ZU1hY2hpbmU7XHJcbiAgICAgICAgdmFyIHN1dEluQWdncmVnYXRlOiBBRmFrZUFnZ3JlZ2F0ZTtcclxuICAgICAgICB2YXIgaWRTdXRJbkFnZ3JlZ2F0ZTogSWRGYWtlQWdncmVnYXRlO1xyXG5cclxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICAgICAgc3V0ID0gbmV3IGFTdGF0ZU1hY2hpbmUoXCJTdGF0ZV9BXCIsIHN0YXRlTWFjaGluZURlZmluaXRpb24pO1xyXG4gICAgICAgICAgICBmYWtlU01SZXBvID0gbmV3IEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jPEFGYWtlQWdncmVnYXRlLCBJZEZha2VBZ2dyZWdhdGU+KFwiQUZha2VBZ2dyZWdhdGVcIik7XHJcblxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcImFTdGF0ZU1hY2hpbmVcIiwgXCJ2MVwiLCBhU3RhdGVNYWNoaW5lKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJJZEZha2VBZ2dyZWdhdGVcIiwgXCJ2MVwiLCBJZEZha2VBZ2dyZWdhdGUpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkFGYWtlQWdncmVnYXRlXCIsIFwidjFcIiwgQUZha2VBZ2dyZWdhdGUpO1xyXG5cclxuICAgICAgICAgICAgaWRTdXRJbkFnZ3JlZ2F0ZSA9IG5ldyBJZEZha2VBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgc3V0SW5BZ2dyZWdhdGUgPSBuZXcgQUZha2VBZ2dyZWdhdGUoKTsgICBcclxuICAgICAgICAgICAgc3V0SW5BZ2dyZWdhdGUuc2V0S2V5KGlkU3V0SW5BZ2dyZWdhdGUpOyAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgdGhlIHN0YXRlIG1hY2hpbmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYXNtID0gbmV3IGFTdGF0ZU1hY2hpbmUoXCJTdGF0ZV9BXCIsIHN0YXRlTWFjaGluZURlZmluaXRpb24pO1xyXG4gICAgICAgICAgICBleHBlY3QoYXNtIGluc3RhbmNlb2YgYVN0YXRlTWFjaGluZSkudG9CZVRydXRoeShcIlRoZSBjcmVhdGVkIG9iamVjdCBpcyBub3QgYW4gJ2FTdGF0ZU1hY2hpbmUnXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgYmUgcG9zc2liaWxlIHRvIHByb2Nlc3MgZXZlbnQgRnJvbV9BX3RvX0Igd2hlbiBpbiB0aGUgU3RhdGVfQSBzdGF0dXNcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlVHJ1dGh5KFwiVGhlIGNoYW5nZSBzaG91bGQgYmUgYWxsb3dlZCFcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3Qoc3V0LmdldEN1cnJlbnRTdGF0dXMoKSkudG9FcXVhbChcIlN0YXRlX0JcIiwgXCJUaGUgU3RhdGUgbWFjaGluZSBpcyBub3QgaW4gU3RhdGVfQlwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChzdXQuZ2V0UHJldmlvdXNTdGF0dXMoKSkudG9FcXVhbChcIlN0YXRlX0FcIiwgXCJUaGUgU3RhdGUgbWFjaGluZSBwcmV2aW91cyBzdGF0dXMgaXMgbm90IFN0YXRlX0FcIik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgTk9UIGJlIHBvc3NpYmlsZSB0byBwcm9jZXNzIGV2ZW50IEZyb21fQl90b19DIHdoZW4gaW4gdGhlIFN0YXRlX0Egc3RhdHVzXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHN1dC5wcm9jZXNzRXZlbnQoXCJGcm9tX0JfdG9fQ1wiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQub2tUb0NoYW5nZSkudG9CZUZhbHN5KFwiVGhlIGNoYW5nZSBzaG91bGQgTk9UIGJlIGFsbG93ZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBOT1QgYmUgcG9zc2liaWxlIHRvIHByb2Nlc3MgZXZlbnQgRnJvbV9BX3RvX0Igd2hlbiBpbiB0aGUgU3RhdGVfQSBzdGF0dXMsIGlmIGEgYmVmb3JlRXhpdCBoYW5kbGVyIHNheXMgaXQgc2hvdWxkIG5vdCBiZSBkb25lXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e3JldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KGZhbHNlLCBcIk5vLCB5b3UgY2FuJ3QhXCIpKX0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRXhpdFN0YXR1cylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5wcm9jZXNzRXZlbnQoXCJGcm9tX0FfdG9fQlwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQub2tUb0NoYW5nZSkudG9CZUZhbHN5KFwiVGhlIGNoYW5nZSBzaG91bGQgTk9UIGJlIGFsbG93ZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBOT1QgYmUgcG9zc2liaWxlIHRvIHByb2Nlc3MgZXZlbnQgRnJvbV9BX3RvX0Igd2hlbiBpbiB0aGUgU3RhdGVfQSBzdGF0dXMsIGlmIGEgYmVmb3JlRW50ZXIgaGFuZGxlciBzYXlzIGl0IHNob3VsZCBub3QgYmUgZG9uZVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntyZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdChmYWxzZSwgXCJObywgeW91IGNhbid0IVwiKSl9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmJlZm9yZUVudGVyU3RhdHVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlRmFsc3koXCJUaGUgY2hhbmdlIHNob3VsZCBOT1QgYmUgYWxsb3dlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1cywgaWYgYSBhZnRlckV4aXQgaGFuZGxlciByZXR1cm5zIG9rVG9DaGFuZ2UgPSBmYWxzZVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntyZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdChmYWxzZSwgXCJObywgeW91IGNhbid0IVwiKSl9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRXhpdFN0YXR1cylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5wcm9jZXNzRXZlbnQoXCJGcm9tX0FfdG9fQlwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQub2tUb0NoYW5nZSkudG9CZVRydXRoeShcIlRoZSBjaGFuZ2Ugc2hvdWxkIGJlIGFsbG93ZWQgYW55aG93IVwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChzdXQuZ2V0Q3VycmVudFN0YXR1cygpKS50b0JlKFwiU3RhdGVfQlwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgYmUgcG9zc2liaWxlIHRvIHByb2Nlc3MgZXZlbnQgRnJvbV9BX3RvX0Igd2hlbiBpbiB0aGUgU3RhdGVfQSBzdGF0dXMsIGlmIGEgYWZ0ZXJFbnRlciBoYW5kbGVyIHJldHVybnMgb2tUb0NoYW5nZSA9IGZhbHNlXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e3JldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KGZhbHNlLCBcIk5vLCB5b3UgY2FuJ3QhXCIpKX0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFbnRlclN0YXR1cylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5wcm9jZXNzRXZlbnQoXCJGcm9tX0FfdG9fQlwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQub2tUb0NoYW5nZSkudG9CZVRydXRoeShcIlRoZSBjaGFuZ2Ugc2hvdWxkIGJlIGFsbG93ZWQgYW55aG93IVwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChzdXQuZ2V0Q3VycmVudFN0YXR1cygpKS50b0JlKFwiU3RhdGVfQlwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlRoZSBvcmRlciBpbiB3aGljaCBoYW5kbGVyIGFyZSBjYWxsZWQgbXVzdCBiZSBjb3JyZWN0IVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDE7XHJcblxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoMSwgXCJiZWZvcmVFeGl0SGFuZGxlciBtdXN0IGJlIHRoZSBmaXJzdCBjYWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdCh0cnVlLCBcIlwiKSlcclxuICAgICAgICAgICAgfSwgS2luZHNPZkV2ZW50SGFuZGxlci5iZWZvcmVFeGl0U3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9CZSgyLCBcImJlZm9yZUVudGVySGFuZGxlciBtdXN0IGJlIHRoZSBzZWNvbmQgY2FsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQodHJ1ZSwgXCJcIikpXHJcbiAgICAgICAgICAgIH0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRW50ZXJTdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0JlKDMsIFwiYWZ0ZXJFeGl0SGFuZGxlciBtdXN0IGJlIHRoZSB0aGlyZCBjYWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdCh0cnVlLCBcIlwiKSlcclxuICAgICAgICAgICAgfSwgS2luZHNPZkV2ZW50SGFuZGxlci5hZnRlckV4aXRTdGF0dXMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0JlKDQsIFwiYWZ0ZXJFbnRlckhhbmRsZXIgbXVzdCBiZSB0aGUgZm91cnRoIGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRW50ZXJTdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0JlKDUsIFwib25TdWNjZXNmdWxFdmVudFByb2Nlc3NlZCBtdXN0IGJlIHRoZSBmaWZ0aCBjYWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdCh0cnVlLCBcIlwiKSlcclxuICAgICAgICAgICAgfSwgS2luZHNPZkV2ZW50SGFuZGxlci5vblN1Y2Nlc3NmdWxFdmVudFByb2Nlc3NlZCk7XHJcblxyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQgKFwiTXVzdCBiZSBwb3NzaWJsZSB0byBzdG9yZSBhbmQgcmV0cmlldmUgdGhlIHN0YXRlIG1hY2hpbmUgYXMgYW4gYXR0cmlidXRlIG9mIGFuIGFnZ3JlZ2F0ZS5cIiwgKGRvbmUpID0+IHsgICAgXHJcblxyXG4gICAgICAgICAgICB2YXIgc3V0UmVsb2FkZWQ6IEFGYWtlQWdncmVnYXRlO1xyXG5cclxuICAgICAgICAgICAgZmFrZVNNUmVwby5zYXZlKHN1dEluQWdncmVnYXRlKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWtlU01SZXBvLmdldEJ5SWQoaWRTdXRJbkFnZ3JlZ2F0ZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc3V0SW5BZ2dyZWdhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdXRSZWxvYWRlZCA9IHN1dEluQWdncmVnYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdXRJbkFnZ3JlZ2F0ZS5zbS5wcm9jZXNzRXZlbnQoXCJGcm9tX0FfdG9fQlwiKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3Qoc3V0UmVsb2FkZWQuc20uZ2V0Q3VycmVudFN0YXR1cygpKS50b0VxdWFsKFwiU3RhdGVfQlwiKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXJyb3JzIGR1cmluZyB0ZXN0OiBcIiArIGVycm9yICsgXCIgXCIgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdCB7XHJcblxyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgdmlhOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgbnVtZXJvOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2l0dGE6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBjYXA6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0X0FycmF5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdF9BcnJheT4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgYXJyYXlPZlNvbWV0aGluZzogYW55W11cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RWYWx1ZU9iamVjdF9PYmplY3QgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VGVzdFZhbHVlT2JqZWN0X09iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X09iamVjdFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHNvbWVPYmplY3Q6IGFueVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VWYWx1ZU9iamVjdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdFwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3QpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9BcnJheSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfT2JqZWN0XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9PYmplY3QpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJWYWx1ZU9iamVjdHMgbXVzdCBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZWlyIGNvbnRlbnQuIC0gQmFzZSB0eXBlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzIgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgRi5NZXN0aWNhXCIsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgXCJBcGlyb1wiLFxyXG4gICAgICAgICAgICAgICAgXCI2MjAyMVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBcInZpYSBkZWwgY2FtcG9cIixcclxuICAgICAgICAgICAgICAgIDY5LFxyXG4gICAgICAgICAgICAgICAgXCJHZW5vdmFcIixcclxuICAgICAgICAgICAgICAgIFwieHh4eHhcIlxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVmFsdWVPYmplY3RzIG11c3QgYmUgY29tcGFyZWQgYWdhaW5zdCB0aGVpciBjb250ZW50LiAtIEFycmF5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbeyBwMTogMywgcDI6IDQyIH0sIHsgcDE6IDYsIHAzOiA5NiB9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9BcnJheShcclxuICAgICAgICAgICAgICAgIFt7IHAxOiAzLCBwMjogNDIgfSwgeyBwMTogNiwgcDM6IDk2IH1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X0FycmF5KFxyXG4gICAgICAgICAgICAgICAgW3sgcDE6IDYsIHAzOiA5NiB9LCB7IHAxOiAzLCBwMjogNDIgfV1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlZhbHVlT2JqZWN0cyBtdXN0IGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlaXIgY29udGVudC4gLSBPYmplY3RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiA2LCBwMzogOTYgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJsZSB0byBmaW5kIG11bHRpcGxlIFZhbHVlT2JqZWN0cyBpbiBhbiBhcnJheSB2aWEgdGhlIGZpbmRJbkFycmF5IGZ1bmN0aW9uXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFycmF5T2ZWT3M6IFRlc3RWYWx1ZU9iamVjdF9PYmplY3RbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMiA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvNCA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGFycmF5T2ZWT3MucHVzaCh2bzEpO1xyXG4gICAgICAgICAgICBhcnJheU9mVk9zLnB1c2godm8yKTtcclxuICAgICAgICAgICAgYXJyYXlPZlZPcy5wdXNoKHZvMyk7XHJcbiAgICAgICAgICAgIGFycmF5T2ZWT3MucHVzaCh2bzQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHRvRmluZCA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0b0ZpbmQuZmluZEluQXJyYXkoYXJyYXlPZlZPcyk7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZXN1bHQubGVuZ3RoKS50b0VxdWFsKDIsIFwiVGhlIGZ1bmN0aW9uIGRpZCBub3QgZmluZCB0aGUgMiBlbGVtZW50cyBpdCBzaG91bGQgaGF2ZSBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhcnJheU9mVk9zW2ldLmVxdWFscyh0b0ZpbmQpKS50b0JlVHJ1dGh5KFwiU29tZSBlbGVtZW50cyBmb3VuZCBkbyBub3QgZXF1YWxzIGVsZW1lbnQgdG8gZmluZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvVHlwZVJlZ2lzdHJ5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCBERERUb29scyA9IHJlcXVpcmUoXCIuL0RERFRvb2xzXCIpXHJcblxyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzIGFzIFJlcG9FcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0luTWVtb3J5UmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7VHlwZVJlZ2lzdHJ5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvVHlwZVJlZ2lzdHJ5XCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMge1xyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IERERFRvb2xzLlZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5SZXBvc2l0b3J5LkVycm9ycztcclxuICAgIGltcG9ydCBJbk1lbW9yeVJlcG9zaXRvcnkgPSBERERUb29scy5SZXBvc2l0b3J5LkluTWVtb3J5UmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEtleSBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxLZXk+IHtcclxuICAgICAgICBwcml2YXRlIGlkOiBHdWlkO1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5LZXlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pZCA9IEd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDaGlsZEVudGl0eSBleHRlbmRzIEJhc2VFbnRpdHk8Q2hpbGRFbnRpdHksIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mS2V5czogS2V5W10gPSBbXTtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQ2hpbGRFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBhbm90aGVyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0QWdncmVnYXRlIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VGVzdEFnZ3JlZ2F0ZSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZFbnRpdGllczogQ2hpbGRFbnRpdHlbXSA9IFtdO1xyXG4gICAgICAgIHB1YmxpYyBhbm9ueW1vdXNPYmplY3Q6IGFueSA9IHt9O1xyXG4gICAgICAgIC8vIFVzZWQgdG8gdGVzdCBvYmplY3RzIHJlZmVyZW5jZXMgcmVjb25zdGl0dXRpb24uXHJcbiAgICAgICAgcHVibGljIGFuT2JqZWN0UmVmZXJlbmNlOiBhbnkgPSB7fTtcclxuICAgICAgICBwdWJsaWMgYW5vdGhlck9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTnVsbFJlZmVyZW5jZSA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIGFuVW5kZWZpbmVkSXRlbSA9IHVuZGVmaW5lZDsgXHJcbiAgICAgICAgcHVibGljIGFEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiYSB0ZXN0IHZhbHVlICFcIjtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgSW5NZW1vcnlSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBtYW5hZ2VkVHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihUZXN0UmVwb3NpdG9yeS5tYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5LZXlcIiwgXCJ2MVwiLCBLZXkpO1xyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQ2hpbGRFbnRpdHlcIiwgXCJ2MVwiLCBDaGlsZEVudGl0eSk7XHJcbiAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgVGVzdEFnZ3JlZ2F0ZSk7XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJbk1lbW9yeVJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBSZXBvc2l0b3J5IGNsYXNzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlcG8gaW5zdGFuY2VvZiBUZXN0UmVwb3NpdG9yeSkudG9FcXVhbCh0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IHRocm93ICdLZXlOb3RTZXQnIHdoZW4gc2F2aW5nIGFuIGVudGl0eSB3aXRob3V0IGtleSBzZXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gc2F2ZSBhbiBlbnRpdHkgd2l0aCB0aGUga2V5IHNldFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuS2V5Tm90U2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXQgc2hvdWxkIHRocm93IEl0ZW1Ob3RGb3VuZCBpZiBhIGtleSBpcyBub3QgcHJlc2VudCBpbiB0aGUgcmVwb3NpdG9yeVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkyID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCgoKSA9PiB7IHJlcG8uZ2V0QnlJZChrZXkyKSB9KS50b1Rocm93KG5ldyBFcnJvcihFcnJvcnMuSXRlbU5vdEZvdW5kKSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgbWFuYWdlIG51bGwgYW5kIHVuZGVmaW5lZCBkYXRhXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgdmFyIGFUZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uYURhdGUgPSBhVGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFOdWxsUmVmZXJlbmNlKS50b0JlTnVsbChcImFOdWxsUmVmZXJlbmNlIGlzIG5vdCBudWxsLCB3aGlsZSBpdCBzaG91bGRcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5VbmRlZmluZWRJdGVtKS50b0JlVW5kZWZpbmVkKFwiYW5VbmRlZmluZWRJdGVtIGlzIG5vdCB1bmRlZmluZWQsIHdoaWxlIGl0IHNob3VsZFwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgYSBkYXRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgdmFyIGFUZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uYURhdGUgPSBhVGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLCB3aGlsZSBpdCBzaG91bGRcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIGFuIGFycmF5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbmV3IENoaWxkRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYXJyYXlPZkVudGl0aWVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmFycmF5T2ZLZXlzLnB1c2gobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTYWx2YXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJlY3VwZXJhdG9cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuLi5cclxuICAgICAgICAgICAgLy8gZXhwZWN0KHJlbG9hZGVkIGluc3RhbmNlb2YgVGVzdEFnZ3JlZ2F0ZSkudG9CZVRydXRoeShcIlJlY29uc3RpdHV0ZWQgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgb3JpZ2luYWwgdHlwZS5cIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcykpLnRvQmVUcnV0aHkoXCJQcm9wZXJ0eSBhcnJheU9mRW50aXRpZXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzLmxlbmd0aCkudG9FcXVhbChudW1iZXJPZkVsZW1lbnRzVG9BZGQsIFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IHQrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNlID0gcmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzW3RdO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KEFycmF5LmlzQXJyYXkoY2UuYXJyYXlPZktleXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZktleXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNlLmFycmF5T2ZLZXlzLmxlbmd0aCkudG9FcXVhbChudW1iZXJPZkVsZW1lbnRzVG9BZGQsIFwiUHJvcGVydHkgYXJyYXlPZktleXMgZG9lcyBub3QgY29udGFpbiBcIiArIG51bWJlck9mRWxlbWVudHNUb0FkZCArIFwiIGVsZW1lbnRzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlICdhbm9ueW1vdXMnIG9iamVjdHMuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5vdGhlckVudGl0eSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGFub3RoZXJFbnRpdHkuc2V0S2V5KG5ldyBLZXkoKSk7XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFub255bW91c09iamVjdC5hbm90aGVyRW50aXR5ID0gYW5vdGhlckVudGl0eTtcclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYU51bWJlclR5cGUgPSA0MjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVsb2FkZWQgPSByZXBvLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhlIGZvbGxvd2luZyB0ZXN0IHN0YXJ0ZWQgdG8gZmFpbCBhZnRlciBnZXR0aW5nIGJhY2sgdG8gbmFtZXNwYWNlcy4gICAgXHJcbiAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZC5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlKS50b0VxdWFsKDQyLCBcIlByb3BlcnR5IGFOdW1iZXJUeXBlIHdhcyBub3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZWQuXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSByZWZlcmVuY2VzIHRvIHRoZSBzYW1lIGluc3RhbmNlLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiRmVhdHVyZSBub24gYW5jb3JhIHN2aWx1cHBhdGFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHkgPSB7XHJcbiAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQSB0ZXN0IHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBhQ29tcG9zaXRlUHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQW5vdGhlciB0ZXN0IHZhbHVlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYW5PYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSA9IGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChpdGVtLmFuT2JqZWN0UmVmZXJlbmNlKS50b0VxdWFsKGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChyZWxvYWRlZC5hbm90aGVyT2JqZWN0UmVmZXJlbmNlKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IGJlIGluY3JlbWVudGVkIG9ubHkgaWYgb2JqZWN0IHRvIGJlIHNhdmVkIGRpZmZlcnMgZnJvbSBvYmplY3Qgc2F2ZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IE5PVCBiZSBpbmNyZW1lbnRlZCB3aGVuIHVzaW5nICdyZXBsYWNlJyBtZXRob2RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlcG8ucmVwbGFjZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5SZXBBc3luYyB7XHJcblxyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlJlcG9zaXRvcnkuRXJyb3JzO1xyXG4gICAgaW1wb3J0IEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jID0gREREVG9vbHMuUmVwb3NpdG9yeS5Jbk1lbW9yeVJlcG9zaXRvcnlBc3luYztcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcbiAgICBpbXBvcnQgRmFjdG9yeUVycm9ycyA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkVycm9ycztcclxuXHJcblxyXG4gICAgLy8gRGVmaW5lcyBhIGNsYXNzIHRoYXQgd2lsbCBub3QgYmUgcmVnaXN0ZXJlZCB3aXQgdGhlIHR5cGVzIGZhY3RvcnlcclxuICAgIGV4cG9ydCBjbGFzcyBOb3RSZWdpc3RlcmVkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE5vdFJlZ2lzdGVyZWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJOb3RSZWdpc3RlcmVkXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgS2V5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEtleT4ge1xyXG4gICAgICAgIHByaXZhdGUgaWQ6IEd1aWQ7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLktleVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoaWxkRW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxDaGlsZEVudGl0eSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZLZXlzOiBLZXlbXSA9IFtdO1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhbm90aGVyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mRW50aXRpZXM6IENoaWxkRW50aXR5W10gPSBbXTtcclxuICAgICAgICBwdWJsaWMgYW5vbnltb3VzT2JqZWN0OiBhbnkgPSB7fTtcclxuICAgICAgICAvLyBVc2VkIHRvIHRlc3Qgb2JqZWN0cyByZWZlcmVuY2VzIHJlY29uc3RpdHV0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcbiAgICAgICAgcHVibGljIGFub3RoZXJPYmplY3RSZWZlcmVuY2U6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICAvLyBVc2VkIHRvIHRlc3QgZXhjZXB0aW9ucyBpbiBvYmplY3QgcmVjb25zdGl0dXRpb24uXHJcbiAgICAgICAgcHVibGljIGFOb3RSZWdpc3RlcmVkSW5zdGFuY2U6IE5vdFJlZ2lzdGVyZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTnVsbFJlZmVyZW5jZSA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIGFuVW5kZWZpbmVkUmVmZXJlbmNlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHB1YmxpYyBhRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgYVRlc3RQcm9wZXJ0eTogc3RyaW5nID0gXCJhIHRlc3QgdmFsdWUgIVwiO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUZXN0UmVwb3NpdG9yeSBleHRlbmRzIEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jPFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBtYW5hZ2VkVHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcihUZXN0UmVwb3NpdG9yeS5tYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuXHJcbiAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuS2V5XCIsIFwidjFcIiwgS2V5KTtcclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiLCBcInYxXCIsIENoaWxkRW50aXR5KTtcclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgVGVzdEFnZ3JlZ2F0ZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJbk1lbW9yeVJlcG9zaXRvcnlBc3luY1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIFJlcG9zaXRvcnkgY2xhc3NcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVwbyBpbnN0YW5jZW9mIFRlc3RSZXBvc2l0b3J5KS50b0VxdWFsKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgdGhyb3cgJ0tleU5vdFNldCcgd2hlbiBzYXZpbmcgYW4gZW50aXR5IHdpdGhvdXQga2V5IHNldFwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5LZXlOb3RTZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gc2F2ZSBhbiBlbnRpdHkgd2l0aCB0aGUga2V5IHNldFwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5LZXlOb3RTZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIml0IHNob3VsZCB0aHJvdyBJdGVtTm90Rm91bmQgaWYgYSBrZXkgaXMgbm90IHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnlcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgdmFyIGtleTIgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5nZXRCeUlkKGtleTIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZXR1cm5lZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZCBub3QgYmUgaGVyZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIubmFtZSkudG9FcXVhbChFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgYSBEYXRlXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmFEYXRlID0gdGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZWxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hRGF0ZSBpbnN0YW5jZW9mIERhdGUpLnRvQmVUcnV0aHkoXCJhRGF0ZSBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFEYXRlKS50b0VxdWFsKHRlc3REYXRlLCBcImFEYXRlIGlzIG5vdCBldmFsdWF0ZWQgYXMgdGhlIHByZSBzYXZlIHZhbHVlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIGFuIGFycmF5XCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ldyBDaGlsZEVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFycmF5T2ZFbnRpdGllcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcnJheU9mS2V5cy5wdXNoKG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTYWx2YXRvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG8uZ2V0QnlJZChrZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBUaGUgZm9sbG93aW5nIHRlc3Qgc3RhcnRlZCB0byBmYWlsIGFmdGVyIGdldHRpbmcgYmFjayB0byBuYW1lc3BhY2VzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcykpLnRvQmVUcnV0aHkoXCJQcm9wZXJ0eSBhcnJheU9mRW50aXRpZXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IG51bWJlck9mRWxlbWVudHNUb0FkZDsgdCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlID0gcmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzW3RdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KGNlLmFycmF5T2ZLZXlzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoY2UuYXJyYXlPZktleXMubGVuZ3RoKS50b0VxdWFsKG51bWJlck9mRWxlbWVudHNUb0FkZCwgXCJQcm9wZXJ0eSBhcnJheU9mS2V5cyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSAnYW5vbnltb3VzJyBvYmplY3RzLlwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbm90aGVyRW50aXR5ID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgYW5vdGhlckVudGl0eS5zZXRLZXkobmV3IEtleSgpKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgPSBhbm90aGVyRW50aXR5O1xyXG4gICAgICAgICAgICBpdGVtLmFub255bW91c09iamVjdC5hTnVtYmVyVHlwZSA9IDQyO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwby5nZXRCeUlkKGtleSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwZWN0KHJlbG9hZGVkLmFub255bW91c09iamVjdC5hbm90aGVyRW50aXR5IGluc3RhbmNlb2YgVGVzdEFnZ3JlZ2F0ZSkudG9CZVRydXRoeShcIlJlY29uc3RpdHV0ZWQgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgb3JpZ2luYWwgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlKS50b0VxdWFsKDQyLCBcIlByb3BlcnR5IGFOdW1iZXJUeXBlIHdhcyBub3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIHJlZmVyZW5jZXMgdG8gdGhlIHNhbWUgaW5zdGFuY2UuXCIsIChkb25lKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiRmVhdHVyZSBub24gYW5jb3JhIHN2aWx1cHBhdGFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHkgPSB7XHJcbiAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQSB0ZXN0IHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICBhQ29tcG9zaXRlUHJvcGVydHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBhUHJvcGVydHk6IFwiQW5vdGhlciB0ZXN0IHZhbHVlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYW5PYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSA9IGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChpdGVtLmFuT2JqZWN0UmVmZXJlbmNlKS50b0VxdWFsKGl0ZW0uYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVsb2FkZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChyZWxvYWRlZC5hbm90aGVyT2JqZWN0UmVmZXJlbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IGJlIGluY3JlbWVudGVkIG9ubHkgaWYgb2JqZWN0IHRvIGJlIHNhdmVkIGRpZmZlcnMgZnJvbSBvYmplY3Qgc2F2ZWRcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFJldmlzaW9uSWQgc2hvdWxkIG5vdCBiZSBpbmNyZW1lbnRlZCBpZiBpdGVtIHdhcyBuZXchXHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5zYXZlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG8uc2F2ZShlKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IE5PVCBiZSBpbmNyZW1lbnRlZCBpZiB1c2luZyAncmVwbGFjZScgbWV0aG9kLlwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV2aXNpb25JZCBzaG91bGQgbm90IGJlIGluY3JlbWVudGVkIGlmIGl0ZW0gd2FzIG5ldyFcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXBvLnNhdmUoZSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG4gICAgICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5yZXBsYWNlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJFeGNlcHRpb24gdGhyb3duIGJ5IGl0ZW0gcmVjb25zdGl0dXRpb24sIG11c3QgYmUgY2F0Y2hlZCBpbiB0aGUgZXJyb3IgZnVuY3Rpb24gb2YgdGhlIHJldHVybmVkIHByb21pc2VcIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcbiAgICAgICAgICAgIGUuYU5vdFJlZ2lzdGVyZWRJbnN0YW5jZSA9IG5ldyBOb3RSZWdpc3RlcmVkKCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZCBub3QgaGF2ZSBiZWVuIGhlcmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIubmFtZSkudG9FcXVhbChGYWN0b3J5RXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJXZSBzaG91bGQgbm90IGhhdmUgYmVlbiBoZXJlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SW5Qcm9jZXNzRGlzcGF0Y2hlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyXCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckRpc3BhdGNoZXIge1xyXG5cclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICBpbXBvcnQgSUV2ZW50SGFuZGxlciA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRXZlbnRIYW5kbGVyO1xyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEluUHJvY2Vzc0Rpc3BhdGNoZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuSW5Qcm9jZXNzRGlzcGF0Y2hlcjtcclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IERERFRvb2xzLlByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG5cclxuICAgIGNsYXNzIGFDbGFzc0NvbnRhaW5pbmdBbkhhbmRsZXJBbmRTb21lT3RoZXJTdHVmZiB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTnVtYmVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHRoaXMuZXZlbnRIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhRnVuY3Rpb25Jbk15Q29udGV4dCgpIHtcclxuICAgICAgICAgICAgdGhpcy5hTnVtYmVyID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBldmVudEhhbmRsZXIoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICBleHBlY3QoZXZlbnQpLm5vdC50b0JlVW5kZWZpbmVkKFwiVGhlIGV2ZW50IGFycml2ZWQgdG8gdGhlIGV2ZW50aGFuZGxlciBpcyB1bmRlZmluZWQuXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFGdW5jdGlvbkluTXlDb250ZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIGFEb21haW5FdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxhRG9tYWluRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiSW5Qcm9jZXNzRGlzcGF0Y2hlclwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwiTXVsdGlwbGUgcmVnaXN0cmF0aW9uIG9mIHRoZSBzYW1lIGV2ZW50aGFuZGxlciwgbXVzdCBiZSB0cmVhdGVkIGFzIG9uZS5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gSGFuZGxlciBoYXMgYmVlbiByZWdpc3RlcmVkIHR3aWNlLCBidXQgZGlzcGF0Y2hlciBzaG91bGQgY2FsbCBpdCBvbmNlLlxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBZnRlciBkZXJlZ2lzdGVyaW5nIGFuIGhhbmRsZXIsIGRpc3BhdGNoIG11c3Qgbm90IGNhbGwgaXQgYW55bW9yZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBKdXN0IHRvIHZlcmlmeSB0aGF0IEhhbmRsZXIgaGFzIGJlZW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBbGwgaGFuZGxlcnMgd2lsbCBiZSBjYWxsZWQgYnkgZGlzcGF0Y2gsIGV2ZW4gaWYgaGFuZGxlcnMgdGhyb3cuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGFUaHJvd2luZ0hhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGFUaHJvd2luZ0hhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgdGhyb3duIGJ5IHRoZSBoYW5kbGVyXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFUaHJvd2luZ0hhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5tZXNzYWdlKS50b0VxdWFsKFwiRXJyb3I6RXJyb3IgdGhyb3duIGJ5IHRoZSBoYW5kbGVyXFxuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBWZXJpZmllcyB0aGF0IHRoZSBub24gVGhyb3dpbmcgSGFuZGxlciBoYXMgbm90IGJlZW4gdGhyb3duLlxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBhVGhyb3dpbmdIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSGFuZGxlcnMgbXVzdCBiZSBjYWxsZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhleSBhcmUgcmVnaXN0ZXJlZC5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kRXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMCk7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzZWNvbmRFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBzZWNvbmRFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBzZWNvbmRFdmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkhhbmRsZXJzIG11c3QgYmUgY2FsbGVkIGluIHRoZWlyIG9yZ2luYWwgJ3RoaXMnIGNvbnRleHRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc1dpdGhIYW5kbGVyID0gbmV3IGFDbGFzc0NvbnRhaW5pbmdBbkhhbmRsZXJBbmRTb21lT3RoZXJTdHVmZigpO1xyXG5cclxuICAgICAgICAgICAgc3B5T24oY2xhc3NXaXRoSGFuZGxlciwgXCJhRnVuY3Rpb25Jbk15Q29udGV4dFwiKS5hbmQuY2FsbFRocm91Z2goKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGNsYXNzV2l0aEhhbmRsZXIuZXZlbnRIYW5kbGVyLCBjbGFzc1dpdGhIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IGFEb21haW5FdmVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjbGFzc1dpdGhIYW5kbGVyLmFGdW5jdGlvbkluTXlDb250ZXh0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmxlIHRvIHJlLXJlZ2lzdGVyIGFuIGhhbmRsZXIgaW4gYSBkaWZmZXJlbnQgaW5zdGFuY2VkIG9mIHRoZSBkaXNwYXRjaGVyLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzV2l0aEhhbmRsZXIgPSBuZXcgYUNsYXNzQ29udGFpbmluZ0FuSGFuZGxlckFuZFNvbWVPdGhlclN0dWZmKCk7XHJcblxyXG4gICAgICAgICAgICBzcHlPbihjbGFzc1dpdGhIYW5kbGVyLCBcImFGdW5jdGlvbkluTXlDb250ZXh0XCIpLmFuZC5jYWxsVGhyb3VnaCgpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgY2xhc3NXaXRoSGFuZGxlci5ldmVudEhhbmRsZXIsIGNsYXNzV2l0aEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGNsYXNzV2l0aEhhbmRsZXIuZXZlbnRIYW5kbGVyLCBjbGFzc1dpdGhIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IGFEb21haW5FdmVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjbGFzc1dpdGhIYW5kbGVyLmFGdW5jdGlvbkluTXlDb250ZXh0KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiZGlzcGF0Y2ggbXVzdCByZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIGFsbCBldmVudCBoYW5kbGVycyBhcmUgZG9uZVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRSdW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGZpcnN0UnVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhbkhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0UnVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFub3RoZXJIYW5kbGVyUmV0dXJuaW5nQVByb21pc2UoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBhbkhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZSk7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFub3RoZXJIYW5kbGVyUmV0dXJuaW5nQVByb21pc2UpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZpcnN0UnVuKS50b0JlVHJ1dGh5KFwiUHJvbWlzZSByZXNvbHZlZCBidXQgZmlyc3QgaGFuZGxlciBkaWRuJ3QgcnVuLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3Qoc2Vjb25kUnVuKS50b0JlVHJ1dGh5KFwiUHJvbWlzZSByZXNvbHZlZCBidXQgc2Vjb25kIGhhbmRsZXIgZGlkbid0IHJ1bi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInByb21pc2VzIHJlamVjdGVkIGJ5IGV2ZW50cyBtdXN0IGJlIGxvZ2dlZFwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIHNweU9uKGNvbnNvbGUsICdsb2cnKS5hbmQuY2FsbFRocm91Z2goKTtcclxuICAgICAgICAgICAgdmFyIHNlY29uZFJ1biA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5IYW5kbGVyUmV0dXJuaW5nQVByb21pc2UoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoXCJPa1wiKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFub3RoZXJIYW5kbGVyUmV0dXJuaW5nQVByb21pc2UoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QobmV3IEVycm9yKFwidGhpcyB0ZXh0IG11c3QgYmUgbG9nZ2VkIHRvIGNvbnNvbGVcIikpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZSk7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFuSGFuZGxlclJldHVybmluZ0FQcm9taXNlKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IGFEb21haW5FdmVudCgpKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChjb25zb2xlLmxvZykudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChzZWNvbmRSdW4pLnRvQmVUcnV0aHkoXCJQcm9taXNlIHJlc29sdmVkIGJ1dCBzZWNvbmQgaGFuZGxlciBkaWRuJ3QgcnVuXCIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLlZhbHVlT2JqZWN0cy5Nb25leSB7XHJcblxyXG4gICAgaW1wb3J0IE1vbmV5ID0gREREVG9vbHMuVmFsdWVPYmplY3RzLk1vbmV5O1xyXG4gICAgaW1wb3J0IEN1cnJlbmNpZXMgPSBERERUb29scy5WYWx1ZU9iamVjdHMuQ3VycmVuY2llcztcclxuICAgIGltcG9ydCBDdXJyZW5jeSA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5DdXJyZW5jeTtcclxuXHJcbiAgICBkZXNjcmliZShcIk1vbmV5XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJzaG91bGQgYmUgcG9zc2liaWxlIHRvIGluc3RhbnRpYXRlIGEgbmV3IE1vbmV5IHZhbHVlIG9iamVjdCB3aXRoIGFuIGFtb3VudCBhcyBudW1iZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFNb25leSA9IG5ldyBNb25leSgxMDAwKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhTW9uZXkgaW5zdGFuY2VvZiBNb25leSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJzaG91bGQgYmUgcG9zc2liaWxlIHRvIGluc3RhbnRpYXRlIGEgbmV3IE1vbmV5IHZhbHVlIG9iamVjdCBmcm9tIGFuIGV4aXN0aW5nIE1vbmV5IFZhbHVlIE9iamVjdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYU1vbmV5ID0gbmV3IE1vbmV5KDEwMDApICAgIDtcclxuICAgICAgICAgICAgICAgIHZhciBhbm90aGVyTW9uZXkgPSBuZXcgTW9uZXkoYU1vbmV5KTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkgaW5zdGFuY2VvZiBNb25leSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leS5nZXRBbW91bnQoKSkudG9FcXVhbChhTW9uZXkuZ2V0QW1vdW50KCksIFwiQW1vdW50IGlzIG5vdCB0aGUgc2FtZSBvbiB0aGUgdG8gb2JqZWN0c1wiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkuZ2V0QW1vdW50RXVybygpKS50b0VxdWFsKGFNb25leS5nZXRBbW91bnRFdXJvKCksIFwiQW1vdW50RXVybyBpcyBub3QgdGhlIHNhbWUgb24gdGhlIHRvIG9iamVjdHNcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYW5vdGhlck1vbmV5LmdldEN1cnJlbmN5KCkpLnRvRXF1YWwoYU1vbmV5LmdldEN1cnJlbmN5KCksIFwiQ3VycmVuY3kgaXMgbm90IHRoZSBzYW1lIG9uIHRoZSB0byBvYmplY3RzXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJzaG91bGQgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBuZXcgTW9uZXkgb2JqZWN0IHNwZWNpZnlpbmcgYSBDdXJyZW5jeSBhbmQgYW4gZXhjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYU1vbmV5ID0gbmV3IE1vbmV5KDEwMDAsIEN1cnJlbmNpZXMuRE9MTEFSLCAwLjUwMCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChhTW9uZXkuZ2V0QW1vdW50KCkpLnRvRXF1YWwoMTAwMCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChhTW9uZXkuZ2V0QW1vdW50RXVybygpKS50b0VxdWFsKDUwMCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChhTW9uZXkuZ2V0Q3VycmVuY3koKSBpbnN0YW5jZW9mIEN1cnJlbmN5KS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwic2hvdWxkIGJlIHBvc3NpYmxlIHRvIGdldCBhIG5ldyBNb25leSBvYmplY3Qgc3BlY2lmeWluZyBhIG5ldyBDdXJyZW5jeSBhbmQgYSBuZXcgZXhjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYU1vbmV5ID0gbmV3IE1vbmV5KDEwMDAsIEN1cnJlbmNpZXMuRE9MTEFSLCAwLjUwMCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdNb25leSA9IGFNb25leS5jaGFuZ2VFeGNoYW5nZSgxKS5jaGFuZ2VDdXJyZW5jeShDdXJyZW5jaWVzLkVVUk8pO1xyXG4gICAgICAgICAgICBleHBlY3QobmV3TW9uZXkuZ2V0QW1vdW50KCkpLnRvRXF1YWwoMTAwMCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChuZXdNb25leS5nZXRBbW91bnRFdXJvKCkpLnRvRXF1YWwoMTAwMCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChuZXdNb25leS5nZXRDdXJyZW5jeSgpIGluc3RhbmNlb2YgQ3VycmVuY3kpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJjaGFuZ2VBbW91bnQgbXVzdCByZXR1cm4gYSBuZXcgTW9uZXkgb2JqZWN0IHdpdGggdGhlIG5ldyBhbW91bnQuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBhTW9uZXkgPSBuZXcgTW9uZXkoMTAwMCwgQ3VycmVuY2llcy5ET0xMQVIsIDAuNTAwKTtcclxuICAgICAgICAgICAgICAgIHZhciBhbm90aGVyTW9uZXkgPSBuZXcgTW9uZXkoYU1vbmV5KS5jaGFuZ2VBbW91bnQoMTUwMCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYW5vdGhlck1vbmV5IGluc3RhbmNlb2YgTW9uZXkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkuZ2V0QW1vdW50KCkpLnRvRXF1YWwoMTUwMCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYW5vdGhlck1vbmV5LmdldEFtb3VudEV1cm8oKSkudG9FcXVhbCg3NTApO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leS5nZXRDdXJyZW5jeSgpKS50b0VxdWFsKGFNb25leS5nZXRDdXJyZW5jeSgpKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuU2VyaWFsaXphdGlvbiB7XHJcbiBcclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IERlc2VyaWFsaXplciA9IERERFRvb2xzLlNlcmlhbGl6YXRpb24uRGVzZXJpYWxpemVyO1xyXG5cclxuICAgIGltcG9ydCBTZXJpYWxpemFibGVEYXRlID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5TZXJpYWxpemFibGVEYXRlO1xyXG4gICAgaW1wb3J0IFNlcmlhbGl6YWJsZU51bGwgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZU51bGw7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXphYmxlUmVnRXhwID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5TZXJpYWxpemFibGVSZWdFeHA7XHJcblxyXG4gICAgLy8gdGhpcyBiaWcgb2JqZWN0IHdhcyBnZW5lcmF0ZWQgdXNpbmcgaHR0cDovL3d3dy5qc29uLWdlbmVyYXRvci5jb20vXHJcbiAgICAvLyNyZWdpb24gQmlnIG9iamVjdCBmb3Igc2VyaWFsaXphdGlvbi9kZXNlcmlhbGl6YXRpb24gcGVyZm9ybWFuY2UgdGVzdHNcclxuICAgIGxldCBiaWdPYmplY3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlkMzBmZGViODI2NWU0ZjE5XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYWVjMGUwMmMtODA3MC00Y2YzLTlkMGEtMmRhZDg1YzhmMDhkXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsMzM3LjI2XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzcsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJXYXJyZW4gSGFydFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSURFQUxJU1wiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwid2FycmVuaGFydEBpZGVhbGlzLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk4MSkgNDQ3LTI5NjRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjIxIEJvZXJ1bSBQbGFjZSwgSGVnaW5zLCBDb2xvcmFkbywgODA4MlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiU2ludCBzaW50IGNvbnNlY3RldHVyIHF1aXMgcHJvaWRlbnQuIE1hZ25hIGVzdCBldCBtb2xsaXQgZG9sb3JlIGFsaXF1aXAgdGVtcG9yIHVsbGFtY28gYWQgdm9sdXB0YXRlIGlkIGVpdXNtb2QgY3VscGEgb2ZmaWNpYSBjdXBpZGF0YXQuIEVuaW0gbmlzaSBkdWlzIGFtZXQgZXN0IHZlbmlhbSBvY2NhZWNhdC4gUXVpIGNvbW1vZG8gYXV0ZSB0ZW1wb3Igc2l0IHF1aSB0ZW1wb3IgbWluaW0gYWRpcGlzaWNpbmcgbm9uIHJlcHJlaGVuZGVyaXQuIEV4IG5vbiBleCBsYWJvcmUgZG9sb3IgbGFib3JpcyBleGNlcHRldXIgb2ZmaWNpYSBjdXBpZGF0YXQgaWQgdGVtcG9yIGV0IGV0IGRvbG9yLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA1LTI2VDA1OjI3OjM4IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC03Ni44MzQ5OSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTAuMTMwOTAyLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJwcm9pZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlzXCIsXHJcbiAgICAgICAgICAgICAgICBcImVzdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXN0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5pc2lcIixcclxuICAgICAgICAgICAgICAgIFwidXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQYXJrcyBIb2xsYW5kXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNlY2VsaWEgVmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVuamFtaW4gTWljaGFlbFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgV2FycmVuIEhhcnQhIFlvdSBoYXZlIDEgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkzNTAwNjJlMDMyOTMwMzFhXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMDg4NjYyNzItZmFlNS00ODNiLWExYTEtMzc0ODk2MzBiYTYwXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNjgwLjYyXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjMsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkFuZ2VsaXF1ZSBMYXJhXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkFDTElNQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYW5nZWxpcXVlbGFyYUBhY2xpbWEuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTU2KSA1NTQtMjQyNFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI4MDggT3RzZWdvIFN0cmVldCwgQ29uZXN0b2dhLCBHdWFtLCA0NTU0XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJBbmltIG9mZmljaWEgYWxpcXVhIHNpbnQgbGFib3J1bSBhbmltIHBhcmlhdHVyLiBTaW50IHVsbGFtY28gYWQgZXNzZSB1bGxhbWNvLiBBbmltIGVpdXNtb2QgZXhjZXB0ZXVyIGF1dGUgbnVsbGEgYXV0ZSBkbyBlc3NlIHBhcmlhdHVyLiBEb2xvciB2ZWxpdCBwYXJpYXR1ciBleGVyY2l0YXRpb24gZnVnaWF0IGZ1Z2lhdCBub3N0cnVkIG1pbmltIG5vbiBjb25zZWN0ZXR1ciBxdWlzLiBFc3NlIGRvbG9yZSBleGNlcHRldXIgbWluaW0gaXBzdW0gZXNzZSBlc3QgcXVpIGRlc2VydW50IHZvbHVwdGF0ZSBkZXNlcnVudC4gU2ludCBjdWxwYSBtYWduYSBsYWJvcmlzIGFtZXQgc3VudCBzaXQgcXVpIG5vc3RydWQgcGFyaWF0dXIgZXQgcGFyaWF0dXIgbW9sbGl0LiBDb25zZWN0ZXR1ciBkbyBsYWJvcmUgbm9zdHJ1ZCBhZGlwaXNpY2luZyBhdXRlIGV4Y2VwdGV1ciBuaXNpIHNpbnQgc2ludCBtaW5pbSBkZXNlcnVudCBlbGl0IHF1aXMgZXUuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDEtMjJUMDk6Mjc6MTAgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMjguMzI5NDkyLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA3My43OTQ4MzcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25hXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGV1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYWRnZSBIdW1waHJleVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFbHNhIEN1cnRpc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMZXNsaWUgTGFtYmVydFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQW5nZWxpcXVlIExhcmEhIFlvdSBoYXZlIDEgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NGI1NGU2YTYwZTllZGU0MVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDIsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImY0NzA1NzM0LTVlMmItNDljNS04ODgwLTVlYWVmZDMxMDJkYlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw5MjguMTlcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29sbGllciBCdXJuc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQ09NQk9HRU5cIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNvbGxpZXJidXJuc0Bjb21ib2dlbi5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MzIpIDU4NS0yNDI4XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjUyOSBIdW50ZXJmbHkgUGxhY2UsIEZhbGNvbmFpcmUsIE5ldyBIYW1wc2hpcmUsIDc4MjhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkNvbnNlY3RldHVyIHN1bnQgcXVpcyBub24gcXVpIGlydXJlIGlkIGVuaW0gbGFib3JlIGFtZXQgdGVtcG9yLiBFeGVyY2l0YXRpb24gZHVpcyBuaXNpIHVsbGFtY28gdm9sdXB0YXRlIHNpbnQgY29tbW9kbyBxdWkgbWFnbmEgbGFib3JpcyByZXByZWhlbmRlcml0IG1hZ25hIHZvbHVwdGF0ZSBuaXNpLiBFeCBkbyBhbGlxdWEgb2NjYWVjYXQgc3VudCByZXByZWhlbmRlcml0IHZlbmlhbSB0ZW1wb3IgZW5pbSBmdWdpYXQuIEVzc2Ugdm9sdXB0YXRlIGRvIG9mZmljaWEgZXUgYWRpcGlzaWNpbmcgbGFib3JlIG9jY2FlY2F0IGVpdXNtb2QuIFJlcHJlaGVuZGVyaXQgcmVwcmVoZW5kZXJpdCBkbyBmdWdpYXQgc3VudCBjaWxsdW0uIFF1aXMgZG9sb3IgZWEgZXUgbWluaW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDItMjZUMDg6NTQ6MzUgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNzguODY2NDczLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTQxLjE0NDA4MixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZWFcIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwibnVsbGFcIixcclxuICAgICAgICAgICAgICAgIFwidXRcIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImluXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHVrZSBDbGF5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvZHNvbiBDb25sZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyaSBBeWVyc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQ29sbGllciBCdXJucyEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTllNjYyOWFkZGIxNjNiZmQ5XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMmZlYzU1NjAtOTM5MC00YzVkLWI5MzQtZDlhOTQ5NzYzOTk2XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDk2NC4xMlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMzLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR3V0aHJpZSBHYWluZXNcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlNMQU1CREFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImd1dGhyaWVnYWluZXNAc2xhbWJkYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5OTIpIDU1MS0zMTkwXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjM3MSBCYW5uZXIgQXZlbnVlLCBNb3JhaWRhLCBPcmVnb24sIDU0OTVcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkVzc2UgcHJvaWRlbnQgY3VwaWRhdGF0IHF1aSBjb25zZXF1YXQgdGVtcG9yIGVpdXNtb2QgZXggc2ludCBtYWduYSByZXByZWhlbmRlcml0IGFsaXF1aXAuIE5vbiByZXByZWhlbmRlcml0IGlydXJlIHNpdCBjb25zZWN0ZXR1ciBvZmZpY2lhIGluY2lkaWR1bnQuIEV4ZXJjaXRhdGlvbiBzdW50IGV4ZXJjaXRhdGlvbiBkZXNlcnVudCBkb2xvcmUgY29uc2VjdGV0dXIgY3VwaWRhdGF0IGV4ZXJjaXRhdGlvbiBkb2xvciBpcHN1bSBhZGlwaXNpY2luZyBjaWxsdW0gY29uc2VxdWF0LiBWZWxpdCBjdWxwYSBpcnVyZSBsYWJvcmlzIGVsaXQgbGFib3JlLiBSZXByZWhlbmRlcml0IGFkaXBpc2ljaW5nIHVsbGFtY28gcXVpIGVuaW0gZWl1c21vZCBlbGl0IGlydXJlIGV4Y2VwdGV1ciBlc3NlIHNpdCBhbGlxdWlwIGNpbGx1bSBkZXNlcnVudCBpZC4gSW4gbWluaW0gcHJvaWRlbnQgbWluaW0gbWFnbmEuIFZlbmlhbSBlYSBvZmZpY2lhIGVhIGlkIGF1dGUgZGVzZXJ1bnQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDctMTFUMDc6NTM6MjQgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTY2LjkyMDIzOSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMzAuNjUyMjk3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJlbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdWxwYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFZmZpZSBCdWNoYW5hblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYW5kaWNlIFBvd2VsbFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTY2htaWR0IERveWxlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBHdXRocmllIEdhaW5lcyEgWW91IGhhdmUgNCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlkN2Y3ODZlZWFkYTdlZmMyXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOTEyNzc2YmMtMDM2Mi00M2E3LWFiNmEtYjFhMGZmZTc2OTQ5XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDQ4OS4yM1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIxLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJWaW5zb24gTW9ycm93XCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJFTEVOVFJJWFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwidmluc29ubW9ycm93QGVsZW50cml4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzMCkgNTY5LTIwMDZcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzM2IFZlcm5vbiBBdmVudWUsIEFiaXF1aXUsIFZpcmdpbiBJc2xhbmRzLCAxMTQ2XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJBdXRlIG5pc2kgYXV0ZSBjdWxwYSBkdWlzIGNvbW1vZG8uIElwc3VtIHBhcmlhdHVyIGFsaXF1aXAgY29tbW9kbyBvZmZpY2lhIGFsaXF1YS4gQ3VwaWRhdGF0IG5vc3RydWQgZG9sb3JlIGNvbnNlY3RldHVyIGVzc2UgbWFnbmEgaXBzdW0gaWQgZXhjZXB0ZXVyIGR1aXMgb2ZmaWNpYSBleGVyY2l0YXRpb24uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMTEtMTNUMTA6MDg6MjEgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTQ5LjE4ODY5OCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTM2LjM1NjkzNyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwidmVuaWFtXCIsXHJcbiAgICAgICAgICAgICAgICBcInV0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkxvcmVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yaXNcIixcclxuICAgICAgICAgICAgICAgIFwiY29tbW9kb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaXJhbmRhIEdpYmJzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJyaWdpdHRlIE1vbGluYVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQYXRyaWNpYSBDYW1wb3NcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFZpbnNvbiBNb3Jyb3chIFlvdSBoYXZlIDkgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YWQ4MjY0MDdiMTYxODhlYVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDUsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImM4YTMwYTI5LWU4ZDMtNDE0Mi1iYjI4LWEzODRjNzg2MTA1OFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDc0My40MVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI5LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2FybmVyIENsZW1lbnRzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJPUkdBTklDQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwid2FybmVyY2xlbWVudHNAb3JnYW5pY2EuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTI2KSA0NjYtMjY3NFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzNDEgSGlja3MgU3RyZWV0LCBPc21vbmQsIE5ldyBNZXhpY28sIDYzMDFcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkFsaXF1YSBleGVyY2l0YXRpb24gcXVpIGNvbW1vZG8gZXN0IG1hZ25hIGZ1Z2lhdCBwYXJpYXR1ciBjdXBpZGF0YXQgZXggYW5pbSBhZGlwaXNpY2luZy4gRG9sb3JlIG1vbGxpdCBsYWJvcmUgY29uc2VxdWF0IGVuaW0gaXBzdW0gY29tbW9kby4gVmVuaWFtIGRvbG9yIG5pc2kgdWxsYW1jbyBub3N0cnVkIG1vbGxpdCBhbWV0LiBBbmltIGlwc3VtIHF1aSBsYWJvcmlzIG1pbmltIHF1aXMgYW1ldCBub3N0cnVkLiBRdWlzIG51bGxhIGxhYm9yaXMgY29uc2VjdGV0dXIgY3VwaWRhdGF0IHVsbGFtY28gYWRpcGlzaWNpbmcgZXggbnVsbGEgdXQgdmVuaWFtLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAxLTEzVDA5OjI0OjQxIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDE2LjU2Mjc4OSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTEyMi41NTI0MjMsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm1pbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5pc2lcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3RcIixcclxuICAgICAgICAgICAgICAgIFwicGFyaWF0dXJcIixcclxuICAgICAgICAgICAgICAgIFwiaW5cIixcclxuICAgICAgICAgICAgICAgIFwib2NjYWVjYXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUYXlsb3IgRmFybWVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRvbmlhIFZlbGF6cXVlelwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGxlbiBGYXJsZXlcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFdhcm5lciBDbGVtZW50cyEgWW91IGhhdmUgMTAgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkxOTFiYzE4Njg4YWRkNjRlXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNTkwODlkNDAtYjFhMi00ZWJmLWI4NzMtZTkxN2Y5MTg1MTEzXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNzUyLjU0XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKZWFubmUgTW9udG95YVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJFVkVOVEFHRVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiamVhbm5lbW9udG95YUBldmVudGFnZS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NjQpIDUzNi0yMzc1XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjk3NiBNZXJzZXJlYXUgQ291cnQsIEhhcmluZywgTG91aXNpYW5hLCA0NjE3XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJNb2xsaXQgZG8gbm9zdHJ1ZCBhdXRlIGRvbG9yZSBkb2xvciBkbyBpcnVyZSBjdWxwYSBvY2NhZWNhdC4gTm9zdHJ1ZCBjdWxwYSBkb2xvcmUgaXBzdW0gcmVwcmVoZW5kZXJpdCBzaXQgaW5jaWRpZHVudCB2b2x1cHRhdGUgYXV0ZSBwcm9pZGVudCBkdWlzIHJlcHJlaGVuZGVyaXQgb2ZmaWNpYS4gVm9sdXB0YXRlIG5vc3RydWQgbWFnbmEgYWQgZG9sb3JlIGlkIGNvbnNlcXVhdCBldSBpZCBub3N0cnVkIGNpbGx1bSBlaXVzbW9kIGVsaXQgZG9sb3IuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDMtMzFUMTE6MDE6MTIgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTU0Ljk2NzY5MixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNDcuNDgwMjIsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInF1aVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpbmNpZGlkdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIm51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS3Jpc3RlbiBHcmVnb3J5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvc2VsbGEgQnVya2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FpbiBWYXpxdWV6XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBKZWFubmUgTW9udG95YSEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YmQyOTIxZDIxYmQ2OGVhZlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDcsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjMzYWU5ZDNlLTE5Y2QtNDhmYS1iNTZlLWMwMWU5MmMxNWY2OFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwzOTMuMzVcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlN0b3V0IEJvd2Vyc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiVEVSQVBSRU5FXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzdG91dGJvd2Vyc0B0ZXJhcHJlbmUuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODQ3KSA0MjUtMzEwOVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI1MzAgUGFjaWZpYyBTdHJlZXQsIEdyYW5kdmlldywgUGFsYXUsIDEzMDFcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkFsaXF1aXAgbGFib3J1bSBwcm9pZGVudCB1bGxhbWNvIGVuaW0gcXVpcyBlaXVzbW9kIGFkaXBpc2ljaW5nIGNvbnNlY3RldHVyLiBNYWduYSBzaXQgZnVnaWF0IG1pbmltIHNpbnQgZXNzZSBlbmltIHRlbXBvciBmdWdpYXQgdm9sdXB0YXRlIGZ1Z2lhdC4gRXggcHJvaWRlbnQgY29uc2VjdGV0dXIgcHJvaWRlbnQgbWFnbmEgY29uc2VxdWF0IGRvIGVuaW0gdmVuaWFtIHZvbHVwdGF0ZSBvY2NhZWNhdCBlbmltIGNvbW1vZG8gbm9uLiBFeCBzdW50IHNpbnQgZXQgbm9uIGxhYm9yaXMgTG9yZW0gbnVsbGEgY29uc2VjdGV0dXIgdGVtcG9yIGV4Y2VwdGV1ciBtaW5pbSBlbGl0IGV4Y2VwdGV1ci4gRG8gYWQgbWluaW0gdmVsaXQgY2lsbHVtLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAxLTExVDA1OjIyOjIxIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDMxLjc5ODQ2NCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTcxLjgyMTUxMSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZXVcIixcclxuICAgICAgICAgICAgICAgIFwicXVpXCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5pc2lcIixcclxuICAgICAgICAgICAgICAgIFwiZXhcIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImVzc2VcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOb2VtaSBWYWxlbnRpbmVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR3JlZ29yeSBGcmFuY29cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFja2llIEdhdGVzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBTdG91dCBCb3dlcnMhIFlvdSBoYXZlIDYgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTc5OTY3NjI5M2UxNjdlYTlcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA4LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI1MmQ2NDhhNS1kMTcwLTQxMDEtODZiZi0zNzI3YzkxY2MyMzVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw0ODIuNTdcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzNSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFydGluZXogR3JlZW5cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk1JQ1JPTkFVVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibWFydGluZXpncmVlbkBtaWNyb25hdXQuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTY5KSA0NDMtMzcwOVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI5NzAgQnJhZ2cgQ291cnQsIEFsbGVnaGVueXZpbGxlLCBLYW5zYXMsIDYzOVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVXQgZG8gZG9sb3IgZWxpdCBxdWlzIGRvbG9yZSBpbmNpZGlkdW50IGNvbnNlcXVhdCBkb2xvciBxdWlzIHF1aXMgc3VudC4gUHJvaWRlbnQgc3VudCBub3N0cnVkIGxhYm9ydW0gdGVtcG9yIGluIGxhYm9ydW0gb2ZmaWNpYSBhbmltIGRvbG9yIGxhYm9yZS4gQ3VwaWRhdGF0IGlkIG5vbiBvZmZpY2lhIGFsaXF1aXAgZHVpcyBhZC4gRG9sb3JlIGV0IGNvbW1vZG8gZXNzZSBhbWV0IG5pc2kuIExhYm9ydW0gZW5pbSBkdWlzIGFkIG9mZmljaWEuIEZ1Z2lhdCB2b2x1cHRhdGUgaW5jaWRpZHVudCBzaW50IGxhYm9yaXMuIEVhIHJlcHJlaGVuZGVyaXQgaWQgYW1ldCBhZCB2b2x1cHRhdGUgZGVzZXJ1bnQgYWQgZHVpcyBpbiBldSBhbmltLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAxLTE1VDA1OjA3OjU4IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC01NS44NDk5MDcsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE2Ni41OTU1OTUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5vc3RydWRcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3Jpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiTG9yZW1cIixcclxuICAgICAgICAgICAgICAgIFwicXVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tb2RvXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWNwaGVyc29uIE1hbG9uZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFYXJsaW5lIEJyb2NrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pbGxpZSBNeWVyc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTWFydGluZXogR3JlZW4hIFlvdSBoYXZlIDQgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTdlM2I2MmFkNWVhNGEyYTRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA5LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJhMThhMjgzOS02YzNhLTRmMjQtOWQzNy04YzJmNzllNDA1ZWVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw1MDAuMDlcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMixcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphY2tseW4gTG93ZVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJWQUxSRURBXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqYWNrbHlubG93ZUB2YWxyZWRhLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkwMykgNDgzLTI1MzJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzY3IEtvc3N1dGggUGxhY2UsIENhemFkZXJvLCBIYXdhaWksIDY0MVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiTmlzaSB1bGxhbWNvIGxhYm9yaXMgbGFib3JpcyBub24gaWQgY3VwaWRhdGF0LiBJbmNpZGlkdW50IHF1aSBlaXVzbW9kIGxhYm9yZSBjb21tb2RvIGVpdXNtb2QgbGFib3J1bSBlbmltIHVsbGFtY28gcGFyaWF0dXIgbm9uIGFkaXBpc2ljaW5nIGxhYm9ydW0gbm9uIGVzc2UuIFJlcHJlaGVuZGVyaXQgbnVsbGEgdmVsaXQgbWFnbmEgYWxpcXVhIG1pbmltIG1vbGxpdCBzdW50IGV4ZXJjaXRhdGlvbi4gTGFib3J1bSBpcHN1bSBhZCBjaWxsdW0gc2l0IGRlc2VydW50IGVzdCBhZGlwaXNpY2luZyBpbiBhZGlwaXNpY2luZy5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNy0wMS0yN1QxMDowNToyMiAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtMTEuNDcxMjU4LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTMwLjM3MDcwMSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVhXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vc3RydWRcIixcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVhXCIsXHJcbiAgICAgICAgICAgICAgICBcImluXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1aXBcIixcclxuICAgICAgICAgICAgICAgIFwiTG9yZW1cIixcclxuICAgICAgICAgICAgICAgIFwiZW5pbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsYW5jYSBOb2VsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcnlhbm5lIERhbHRvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCdXJnZXNzIFNhbnRhbmFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEphY2tseW4gTG93ZSEgWW91IGhhdmUgOCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkwMGNhOTRjMTljMWUzMzlmXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMTAsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjM3ZjBlOTc0LTUyNDEtNDc4OC1hZTc3LTU5NTE4MDJhZTE2NFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDI3NC44MlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMxLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSG9vZCBDb29rXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJUV0lHR0VSWVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiaG9vZGNvb2tAdHdpZ2dlcnkuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTQxKSA1MzItMjAwNFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI5NDIgQ3JlYW1lciBTdHJlZXQsIFJvd2UsIE1pY2hpZ2FuLCAzNzMzXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJGdWdpYXQgYWQgcGFyaWF0dXIgZW5pbSBuaXNpIG5pc2kgZHVpcyBlc3QgY29uc2VjdGV0dXIuIERvbG9yZSB1dCBuaXNpIGlkIGV4ZXJjaXRhdGlvbi4gQXV0ZSBlaXVzbW9kIGV4ZXJjaXRhdGlvbiBpcHN1bSBjaWxsdW0gZGVzZXJ1bnQgZG9sb3JlIGNvbnNlY3RldHVyIHVsbGFtY28gZHVpcy4gQW1ldCB1bGxhbWNvIGN1cGlkYXRhdCBkb2xvciBpbiBlbGl0IGRvbG9yZSBldSBxdWkuIFN1bnQgcXVpcyBhbGlxdWEgdmVuaWFtIHBhcmlhdHVyIGxhYm9yaXMgcmVwcmVoZW5kZXJpdCBlbGl0IGFkIGR1aXMgZXNzZSBkb2xvcmUuIER1aXMgZXN0IGVpdXNtb2QgbW9sbGl0IG5vbiBleCBlbGl0IHZvbHVwdGF0ZSBpcHN1bSBjaWxsdW0gbnVsbGEgdm9sdXB0YXRlIGxhYm9ydW0gY29uc2VxdWF0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTEyLTE4VDA1OjA2OjM1IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0xNS4zNDc5ODYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMjguNTYwNTE5LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJjaWxsdW1cIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImVzdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCcmFkeSBSaXZlcnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQnllcnMgV2hpdGVoZWFkXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBoeWxsaXMgTWNndWlyZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSG9vZCBDb29rISBZb3UgaGF2ZSA3IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWI5YmQ5YzEwNTQxOGQ3ZThcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxMSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYWVkYWVkZWQtMmI3NC00MjE2LThhN2MtN2I0NTg0Yzc4MjEyXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsOTE3LjgzXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjQsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkxvcmEgS2VsbGVyXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIklNS0FOXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJsb3Jha2VsbGVyQGlta2FuLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkyNSkgNDExLTM4NTJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzQ3IFJ1Z2J5IFJvYWQsIEp1Z3Rvd24sIE1haW5lLCAyMzAwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJQYXJpYXR1ciBhbWV0IGN1bHBhIGVuaW0gdGVtcG9yIG1pbmltIHJlcHJlaGVuZGVyaXQgZG9sb3IgZnVnaWF0IExvcmVtIG1pbmltIG1pbmltIGNvbnNlY3RldHVyIHV0LiBMYWJvcmlzIGVpdXNtb2QgZXhjZXB0ZXVyIGVsaXQgY3VscGEgZXQgZG9sb3JlIGRvbG9yIHF1aSBvZmZpY2lhLiBBZGlwaXNpY2luZyBvZmZpY2lhIGVuaW0gZHVpcyBlc3Qgbm9zdHJ1ZCBxdWkuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDgtMzFUMDk6NDQ6MzkgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTI1LjU2NDY1LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtODIuNDQyNTE3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJldVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJvY2NhZWNhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcInVsbGFtY29cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCaXNob3AgSGFuY29ja1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTdXNhbm5lIEdvbnphbGVzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhlbnNvbiBKZWZmZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIExvcmEgS2VsbGVyISBZb3UgaGF2ZSAzIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTY1ZjI5ODQyMGRiZjYwOWVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxMixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOTYwYzRkMzItMzYyNS00NjQzLTgyMTAtM2Y2ZmZlMjkzYTc0XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNTUyLjQ5XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzQsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBdXR1bW4gS2VubmVkeVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJBUkNISVRBWFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYXV0dW1ua2VubmVkeUBhcmNoaXRheC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MzgpIDQyOS0zMzAyXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjczNyBMYWtlIEF2ZW51ZSwgQWxhbW8sIFdpc2NvbnNpbiwgMTg5MVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVmVsaXQgdm9sdXB0YXRlIGlkIGRvIHByb2lkZW50IGRvbG9yIGNvbnNlcXVhdCBpbiBlc3NlIHZvbHVwdGF0ZSBvY2NhZWNhdCBpcHN1bSBzaXQuIEVzc2UgcmVwcmVoZW5kZXJpdCBxdWkgaW5jaWRpZHVudCBzdW50IGFkIGVsaXQgZXN0IGVsaXQgbnVsbGEgdmVsaXQgY3VwaWRhdGF0IGxhYm9yZSB1bGxhbWNvLiBDdXBpZGF0YXQgaWQgYWxpcXVhIG1pbmltIGZ1Z2lhdCB2b2x1cHRhdGUgc3VudCByZXByZWhlbmRlcml0IG5vc3RydWQgYWxpcXVhIGR1aXMgYWxpcXVpcCB0ZW1wb3IgZXggYXV0ZS4gTWluaW0gZnVnaWF0IGN1bHBhIGNpbGx1bSBtaW5pbSBhdXRlIGxhYm9yaXMgY3VwaWRhdGF0IGFuaW0gZW5pbSBtaW5pbS4gRXQgY2lsbHVtIHZlbmlhbSBzaXQgZXUgb2ZmaWNpYSBzaW50IGFtZXQgbW9sbGl0IGFsaXF1aXAuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDMtMDdUMDY6NTk6MjUgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTgyLjI1NTI2OCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTExOC4xODc5MzYsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImF1dGVcIixcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcInVsbGFtY29cIixcclxuICAgICAgICAgICAgICAgIFwiZWFcIixcclxuICAgICAgICAgICAgICAgIFwiaXBzdW1cIixcclxuICAgICAgICAgICAgICAgIFwidm9sdXB0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbXkgU2hlcm1hblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLaW5uZXkgQmFycm9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNpbHZpYSBPbHNvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQXV0dW1uIEtlbm5lZHkhIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk2NmFhNzhjYWQ4ODM0ZjVjXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMTMsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImY3MTlmYzM3LWNkNmUtNGE5OS04MGYyLTM0ODM0ZTE5NTU1MVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw4NzYuNDZcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhbW1vbmQgSGlnZ2luc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiVEFMRU5EVUxBXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJoYW1tb25kaGlnZ2luc0B0YWxlbmR1bGEuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTk4KSA1NzEtMjQ5OVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI4NzcgTW9udGF1ayBBdmVudWUsIE1hbG8sIFdhc2hpbmd0b24sIDkyMzRcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkxhYm9ydW0gdWxsYW1jbyBvY2NhZWNhdCBxdWkgZWEgcXVpcyBtYWduYSBkdWlzLiBVbGxhbWNvIGVsaXQgY29uc2VjdGV0dXIgdGVtcG9yIGVzdCBsYWJvcmUgaXBzdW0gbm9uIGRvbG9yIGlwc3VtIG5vbi4gRXQgZWxpdCBtYWduYSBlaXVzbW9kIG9mZmljaWEgdmVuaWFtIHRlbXBvciBsYWJvcmUgaWQgZXN0IGZ1Z2lhdCBlbGl0IHN1bnQgZWxpdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wNi0xOVQwOToyMDoxNiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNjUuNjI0MTM0LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTI4LjAwNTY0NixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVpcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGV1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlcIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwidXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCYXJsb3cgTWVkaW5hXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxlc2xleSBQYXR0b25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGFuaWVsbGUgQnJvd25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEhhbW1vbmQgSGlnZ2lucyEgWW91IGhhdmUgNCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NDJjNGRlZTYyMGIzODlmOFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDE0LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0ODdlYWFlZi1iMWY0LTQ4NGQtOGMwZC01MTVkN2Y3ZTY3YjVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw2NTYuODJcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG9nYW4gR2FsbGVnb3NcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk1FVFJPWlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibG9nYW5nYWxsZWdvc0BtZXRyb3ouY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTgxKSA1ODctMjQ3NlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0MDkgQ2xpZnRvbiBQbGFjZSwgSGFycmlzb24sIFRleGFzLCAyOTEwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJNb2xsaXQgY29tbW9kbyBkb2xvcmUgaW4gbm9uIGN1bHBhIG1vbGxpdCBudWxsYSBudWxsYSBldSBwYXJpYXR1ciBtYWduYSB1dC4gQ3VwaWRhdGF0IGVzc2UgY29uc2VxdWF0IGV1IGFtZXQgbWFnbmEgYW5pbSBxdWkgZG9sb3IgdmVsaXQgZG9sb3JlIGFtZXQgZXNzZSBvZmZpY2lhIGxhYm9yaXMuIE9jY2FlY2F0IGVsaXQgdm9sdXB0YXRlIGxhYm9ydW0gY3VscGEuIEluY2lkaWR1bnQgaWQgc2l0IGxhYm9yZSB1dCBzaW50IG5vbiBsYWJvcmUgcmVwcmVoZW5kZXJpdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wOC0yNVQxMjo0NToyMyAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA1Ny43NTk4ODIsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC00My40OTkyOTQsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImVzdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXJpYXR1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJpbmNpZGlkdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vc3RydWRcIixcclxuICAgICAgICAgICAgICAgIFwiaXJ1cmVcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIb2xtYW4gQnVsbG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYWxkZXJvbiBDdXJyeVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCdWNrbmVyIEdvb2R3aW5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIExvZ2FuIEdhbGxlZ29zISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5ZjZlYTM1ZDI4NThmN2Q3MlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDE1LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI4MzZkNmVlMy0xMWFhLTQxYjUtYTQ1NC04ZTQxODQ5NDUzYzVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMywzMTQuODBcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhYnJpbmEgQmVhcmRcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQUNDRUxcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInNhYnJpbmFiZWFyZEBhY2NlbC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NjEpIDQ3Mi0yNDc3XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjM4MiBGbGVldCBTdHJlZXQsIE5laWJlcnQsIFJob2RlIElzbGFuZCwgNjg1XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJJcHN1bSBhbmltIG1hZ25hIGNpbGx1bSBlc3QgZG8gaW5jaWRpZHVudCBtYWduYSBldCB1bGxhbWNvLiBNaW5pbSBvZmZpY2lhIGxhYm9ydW0gb2ZmaWNpYSBjdWxwYSBub24gZW5pbSBub3N0cnVkIGR1aXMgaW4gYWxpcXVhLiBVdCBhbWV0IGVuaW0gdm9sdXB0YXRlIGVzc2UgZGVzZXJ1bnQgZG8gaW4gdmVuaWFtIGNpbGx1bSBkdWlzLiBFbmltIG1pbmltIGFsaXF1aXAgZnVnaWF0IGVhIGFsaXF1aXAgYW1ldCBlYSBhbWV0IHZlbmlhbSBhdXRlLiBQYXJpYXR1ciBjb25zZXF1YXQgTG9yZW0gbm9uIGFtZXQgTG9yZW0gaXBzdW0uIERvIHF1aSBzdW50IGxhYm9yaXMgbm9zdHJ1ZCBlc3NlIGlydXJlLiBBbWV0IHNpdCBkb2xvciBleCBleCBhZGlwaXNpY2luZyBleCBhbGlxdWlwIGlydXJlIGxhYm9yZSBtaW5pbSBhbGlxdWEgZXhlcmNpdGF0aW9uIHJlcHJlaGVuZGVyaXQgY3VwaWRhdGF0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA5LTI5VDA5OjU0OjA3IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDM2LjY5NTc5MSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogOTIuOTA4Nzc0LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJkZXNlcnVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvbG9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEdWRsZXkgRnJhbmtzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkphY3F1ZWxpbmUgRHVkbGV5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vcmVubyBCdXJnZXNzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBTYWJyaW5hIEJlYXJkISBZb3UgaGF2ZSAyIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlhZmQ2YTYyYjMzZmFjYjMyXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMTYsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjQyNTNjMmI3LTBmMDgtNDZlMi1iNTEyLTliN2E3OTI5ZTliOFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDUzMy4zNVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVhdGggUmF5bW9uZFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRU1QSVJJQ0FcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImhlYXRocmF5bW9uZEBlbXBpcmljYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NTUpIDUyMC0yNzE3XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjUxMyBIZW5kcmlja3NvbiBQbGFjZSwgS2VubmVkeXZpbGxlLCBQZW5uc3lsdmFuaWEsIDgxNzJcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk5vbiBvY2NhZWNhdCBlbmltIGNvbnNlY3RldHVyIG9jY2FlY2F0LiBEZXNlcnVudCBlYSBub3N0cnVkIGFtZXQgZWl1c21vZC4gRnVnaWF0IGRvbG9yIGNpbGx1bSBkb2xvcmUgZXhjZXB0ZXVyIHZvbHVwdGF0ZSBtb2xsaXQgZWEgYW1ldCBhbmltLiBPZmZpY2lhIG1pbmltIGNvbnNlY3RldHVyIHV0IGVsaXQgbGFib3JlIG9mZmljaWEuIEFsaXF1aXAgYWxpcXVpcCBkb2xvciBvY2NhZWNhdCBsYWJvcmUgY3VscGEgZG8gYXV0ZSBpZCBzdW50IGV0LiBVbGxhbWNvIHJlcHJlaGVuZGVyaXQgZG8gcXVpIGV0IHNpbnQgZWl1c21vZCBjb25zZWN0ZXR1ciBjaWxsdW0gZXNzZSBtaW5pbSBvY2NhZWNhdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wMS0xMVQwMjoyOToxOSAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNS4xNzk4ODgsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDU2LjgwNDAyOSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29tbW9kb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJlaXVzbW9kXCIsXHJcbiAgICAgICAgICAgICAgICBcImVzc2VcIixcclxuICAgICAgICAgICAgICAgIFwib2NjYWVjYXRcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZWN0ZXR1clwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktlbm5lZHkgV2FsbHNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGl6YSBTY2h1bHR6XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlZpY2tpIE1vbnJvZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSGVhdGggUmF5bW9uZCEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWY2N2Y1MDQ1ZTBjZTk0ZjRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxNyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYjFiYzQ4NTAtMzBkYy00NGQ0LTk0ODMtNWUzZGRmZDQzMDYxXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDI1NS4yMFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmlzY2hlciBIdWdoZXNcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkRZTk9cIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImZpc2NoZXJodWdoZXNAZHluby5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MjIpIDU4OS0yMTM4XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjIwNiBNZXJtYWlkIEF2ZW51ZSwgQmVyZ29vLCBOb3J0aCBEYWtvdGEsIDUwOTdcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlZvbHVwdGF0ZSBub24gY3VscGEgbGFib3JpcyBudWxsYSBpZCBhbGlxdWEgaWQgdWxsYW1jbyB2b2x1cHRhdGUuIERvbG9yIG5vbiBtaW5pbSBtaW5pbSBjb25zZXF1YXQgbWFnbmEgZXUgZXN0IExvcmVtIExvcmVtIHRlbXBvciBkb2xvcmUgY3VscGEuIFZlbGl0IHF1aSBzaW50IGVzc2Ugc2l0IHZlbGl0IHV0IG9mZmljaWEgaW5jaWRpZHVudCBsYWJvcnVtIHBhcmlhdHVyIGVpdXNtb2QgaXJ1cmUgZXhlcmNpdGF0aW9uIG9jY2FlY2F0LiBWZW5pYW0gYXV0ZSBpbmNpZGlkdW50IGlydXJlIHZvbHVwdGF0ZSBlc3QgdmVuaWFtIGV4Y2VwdGV1ciBjaWxsdW0gaWQgaW5jaWRpZHVudC4gRG9sb3JlIGRvbG9yIGN1bHBhIGNpbGx1bSBvY2NhZWNhdCBkbyB2ZWxpdCBkb2xvcmUgdGVtcG9yLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTExLTI2VDA5OjUyOjQ4IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDYwLjAyMTI3LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtODYuMzA0MzM2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZG9cIixcclxuICAgICAgICAgICAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgICAgICAgICAgICBcInBhcmlhdHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbWV0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmxvc3NpZSBNY2tuaWdodFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb25uaWUgU3RldmVuc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsYW5rZW5zaGlwIEVhdG9uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBGaXNjaGVyIEh1Z2hlcyEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlhMjdiZDA1MmUwYmVjYzA0XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMTgsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjI4NmMwZDczLTM1ZWMtNDMzNC1iMTJjLTNiZTJkZDdlOTE0ZVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw4MzcuMThcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJldmVybHkgR2lsbW9yZVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJJU09TVFJFQU1cIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImJldmVybHlnaWxtb3JlQGlzb3N0cmVhbS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MzgpIDUxMy0yNDYyXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjU3NiBCb3ludG9uIFBsYWNlLCBDaGljb3BlZSwgQXJpem9uYSwgODU4OVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRXhjZXB0ZXVyIGVzc2UgZWl1c21vZCB2ZWxpdCBsYWJvcnVtIG5pc2kgZXN0LiBJcnVyZSBvZmZpY2lhIGN1cGlkYXRhdCBMb3JlbSB0ZW1wb3IgaXBzdW0gdGVtcG9yIGNvbW1vZG8gZGVzZXJ1bnQgY3VwaWRhdGF0IG51bGxhIGZ1Z2lhdCBjb25zZXF1YXQgZXhjZXB0ZXVyLiBFeCBhbmltIG5pc2kgc2ludCBkb2xvciB1dCBpcnVyZSBzaXQgdGVtcG9yLiBMYWJvcmlzIGF1dGUgdmVuaWFtIHV0IG5vc3RydWQgdGVtcG9yLiBBZGlwaXNpY2luZyBleCBub3N0cnVkIGV1IHByb2lkZW50IHV0IGRvbG9yLiBFbGl0IGVsaXQgZXQgcXVpcyB1bGxhbWNvIGRlc2VydW50IGNpbGx1bSB1bGxhbWNvIGFkaXBpc2ljaW5nIGFsaXF1aXAgTG9yZW0gZHVpcyBkdWlzIGlydXJlIGVuaW0uIElkIGFuaW0gZXNzZSBhbmltIGRvbG9yZSBlaXVzbW9kIGFsaXF1YSBzdW50IGRlc2VydW50IGFkaXBpc2ljaW5nIGN1bHBhIHZlbmlhbSBpcHN1bSBuaXNpIG1vbGxpdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0xMC0xMVQwNDozNzoxMCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA2OS40ODM4NzMsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNjEuNjU0OTc4LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cGlkYXRhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXJpYXR1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpbmNpZGlkdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1YVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkx1Y2lsZSBNY2ludG9zaFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZXdpdHQgTHlvbnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVhZCBKb3luZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEJldmVybHkgR2lsbW9yZSEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWE3ODFlNDZhOTVhNjQxMTlcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxOSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZTAyNjllYjctZDkzNy00OGZhLTk5NmEtZmRjYjc3ZDIwOTU1XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDkzMi4wMlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9zZWZpbmEgTmlldmVzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlNUVUNDT1wiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiam9zZWZpbmFuaWV2ZXNAc3R1Y2NvLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgyMykgNDEzLTIzMjdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiODU5IEJhbmtlciBTdHJlZXQsIERhbHRvbiwgRmxvcmlkYSwgMjEwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJVbGxhbWNvIGV0IGRlc2VydW50IGRlc2VydW50IG5vbiBuaXNpIGFtZXQgaWQgZWxpdCBMb3JlbSBudWxsYS4gTm9uIGVzc2UgZXUgZnVnaWF0IG9jY2FlY2F0IG1hZ25hIGV4Y2VwdGV1ciBpcnVyZSB0ZW1wb3IgbW9sbGl0IGN1bHBhLiBWZW5pYW0gbm9zdHJ1ZCBhbWV0IGNvbW1vZG8gZnVnaWF0IGF1dGUgaXBzdW0gdm9sdXB0YXRlLiBBbmltIGlkIGZ1Z2lhdCBzaXQgZG9sb3JlIGVsaXQgbnVsbGEgbGFib3J1bSB1bGxhbWNvIGF1dGUuIEluIHNpdCB1dCBjdWxwYSBpbmNpZGlkdW50IG5vbiBsYWJvcmUgcHJvaWRlbnQgY3VwaWRhdGF0IGFuaW0gbGFib3JlIGluY2lkaWR1bnQgZG8gZGVzZXJ1bnQuIEFtZXQgYWxpcXVpcCBtb2xsaXQgZWEgZW5pbSBlaXVzbW9kIG1vbGxpdCB1bGxhbWNvIGFsaXF1aXAgYW5pbSBhbmltLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTAzLTAzVDExOjAzOjE3IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIuNTA3MDUsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDEuMDM2OTM2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2b2x1cHRhdGVcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tb2RvXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFc3BlcmFuemEgU3Rld2FydFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCcnVjZSBXZWxjaFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCYXR0bGUgQmVzdFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSm9zZWZpbmEgTmlldmVzISBZb3UgaGF2ZSA3IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MmE1MmQ0YzAzYmY1NmMyOVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDIwLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIyOGQxMDM2NS1iZjZhLTQzNTYtOTVlOS02YzA4Y2E5M2UxMmNcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsMjc0LjAyXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjcsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBZGVsaW5lIFBpZXJjZVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJaRVBJVE9QRVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYWRlbGluZXBpZXJjZUB6ZXBpdG9wZS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4ODEpIDUxNy0yMDI0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQ5NyBUdWRvciBUZXJyYWNlLCBSb2NraGlsbCwgSW93YSwgOTQzMFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQ29tbW9kbyBub3N0cnVkIHZvbHVwdGF0ZSBkb2xvciBtaW5pbSBvZmZpY2lhIG9jY2FlY2F0IGV4ZXJjaXRhdGlvbiBpcHN1bSBlaXVzbW9kIGVzdCB0ZW1wb3IuIEVzdCBxdWkgY3VscGEgc2l0IGNpbGx1bSByZXByZWhlbmRlcml0IGN1bHBhIGNpbGx1bSBhZGlwaXNpY2luZyBlaXVzbW9kIHZlbmlhbSBsYWJvcnVtIHVsbGFtY28gZHVpcy4gRXhjZXB0ZXVyIHJlcHJlaGVuZGVyaXQgY29uc2VxdWF0IHByb2lkZW50IHNpdCB2ZW5pYW0gaXJ1cmUgbGFib3JlIGN1bHBhIHByb2lkZW50IHF1aXMgbmlzaSBwYXJpYXR1ci4gRXNzZSBvY2NhZWNhdCBsYWJvcmlzIGFkaXBpc2ljaW5nIHV0IGV1IHRlbXBvciBjdWxwYSBMb3JlbSB0ZW1wb3IuIEV4Y2VwdGV1ciBjaWxsdW0gc3VudCBlbmltIG1pbmltIG51bGxhIGV4IGV4IG1vbGxpdCByZXByZWhlbmRlcml0IGluY2lkaWR1bnQgYWRpcGlzaWNpbmcgbGFib3JpcyBsYWJvcmUgZXUuIEVhIGNvbW1vZG8gdmVsaXQgbm9zdHJ1ZCBhZGlwaXNpY2luZyB2ZWxpdCBtYWduYSBhbGlxdWlwIGlwc3VtIG1hZ25hIG5vbi4gRnVnaWF0IGNvbnNlY3RldHVyIHByb2lkZW50IGVsaXQgZG9sb3IgZXUgcmVwcmVoZW5kZXJpdCBvY2NhZWNhdCBhbWV0IGV1IGFkaXBpc2ljaW5nLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA5LTIwVDExOjA3OjA5IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC01NS40MTYwNDksXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC01MS4xMTQwMTUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cGlkYXRhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJuaXNpXCIsXHJcbiAgICAgICAgICAgICAgICBcInVsbGFtY29cIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWlwXCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFbGlzZSBIYXJyaXNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIdW50IExlb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFubmllIE1lcnJpdHRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEFkZWxpbmUgUGllcmNlISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk5MDhhYjE0Zjg5MDIyMGY2XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMjEsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImRlYTU4MmQ5LTA1MzQtNDMxZi04YzU0LTEwZTcxZDc5MGYzOVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDIyNi42N1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEb3JpcyBEZWplc3VzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIklTT0xPR0lDQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZG9yaXNkZWplc3VzQGlzb2xvZ2ljYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MzMpIDU0MS0yNjMxXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQyMyBTdG9uZSBBdmVudWUsIFdoaXRlc3RvbmUsIE5ldmFkYSwgMjAxM1wiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiUHJvaWRlbnQgcmVwcmVoZW5kZXJpdCBzdW50IG9mZmljaWEgbm9zdHJ1ZCB1bGxhbWNvIGluIGV0LiBBbWV0IGZ1Z2lhdCBzaXQgcXVpcyBldSBzaW50IG1vbGxpdCBsYWJvcnVtLiBFeCBlbmltIHN1bnQgYXV0ZSBpcnVyZSBldCBpZC4gRXQgZXQgZnVnaWF0IHBhcmlhdHVyIGRvbG9yIG9jY2FlY2F0IHZlbmlhbSBpcHN1bSByZXByZWhlbmRlcml0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTEwLTA0VDEwOjU5OjM1IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0yNS42NTA1NDQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC04My43MDk1NSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcInZvbHVwdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIixcclxuICAgICAgICAgICAgICAgIFwiZHVpc1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxhbWJlcnQgQ2FpblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZXJyZXJhIE9icmllblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIaWxhcnkgRmxveWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIERvcmlzIERlamVzdXMhIFlvdSBoYXZlIDIgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTQ5ZWFjMDI0YjhlNDI1NDRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAyMixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNGI0NTcyZmUtYmM2YS00ZGQxLTgzZDYtNzYwNTJlYzhmY2M5XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsMDU0LjExXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjcsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDbGFyayBDYWxob3VuXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJPTlRBTElUWVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY2xhcmtjYWxob3VuQG9udGFsaXR5LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkzMCkgNDE0LTMyNjdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzk3IE9jZWFuaWMgQXZlbnVlLCBTaGVsYnksIElsbGlub2lzLCAzMzU5XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJMb3JlbSBkb2xvcmUgdmVuaWFtIExvcmVtIG9jY2FlY2F0IHZvbHVwdGF0ZSBpcHN1bSBlaXVzbW9kIExvcmVtLiBBbWV0IHRlbXBvciBwYXJpYXR1ciBhbmltIGRlc2VydW50IGN1bHBhIGRvbG9yZSBleGVyY2l0YXRpb24gb2NjYWVjYXQgbWluaW0gYWQgcXVpLiBFYSBlaXVzbW9kIGR1aXMgZHVpcyBxdWkgZnVnaWF0IG5pc2kgZXUgZXUgZWl1c21vZCBjdXBpZGF0YXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDYtMDdUMDQ6Mjg6MDcgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNDYuNzU2MjE3LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA2NC44OTIzNjMsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25hXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VxdWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cGlkYXRhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdWxwYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdXBpZGF0YXRcIixcclxuICAgICAgICAgICAgICAgIFwib2ZmaWNpYVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNtYWxsIFBhY2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxleGlzIFdoaXRsZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW5kcmV3cyBXaGl0bmV5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBDbGFyayBDYWxob3VuISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MzVlZGQyNGM4ZDU1NDQ2ZVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDIzLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJmYzJmMDJmYy00Y2UwLTQ1MTQtYTM0YS1mYTA1M2UyZmM1ZjVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw1OTAuNzFcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpbmEgSnVzdGljZVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJTUEhFUklYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJkaW5hanVzdGljZUBzcGhlcml4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk1MykgNDYwLTMwODlcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzAzIEluZGlhIFN0cmVldCwgRG93bGluZywgVGVubmVzc2VlLCA2MTY2XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJJbmNpZGlkdW50IGxhYm9yaXMgZXUgZWEgcmVwcmVoZW5kZXJpdCBkb2xvciBhbGlxdWEgdm9sdXB0YXRlIGRvbG9yIGxhYm9yZSBtYWduYS4gVWxsYW1jbyBjdWxwYSBudWxsYSBtYWduYSBuaXNpIGxhYm9ydW0gZXN0IGV4IG51bGxhIHF1aSBMb3JlbSBpbmNpZGlkdW50IG1hZ25hIGlkLiBBdXRlIG5vc3RydWQgbGFib3JpcyBzdW50IGV4Y2VwdGV1ciBjb25zZXF1YXQgY29tbW9kbyBsYWJvcnVtIGlwc3VtIGV0IGluIHNpbnQgcmVwcmVoZW5kZXJpdCBldSBwYXJpYXR1ci4gTm9zdHJ1ZCBvY2NhZWNhdCBxdWkgcGFyaWF0dXIgZWl1c21vZCBlaXVzbW9kIGNvbnNlcXVhdCBudWxsYSBpZCBpcHN1bSBzdW50LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA3LTAzVDA1OjE4OjM1IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIxLjc2Njg5OSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTE1MC4wNTY2ODUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImR1aXNcIixcclxuICAgICAgICAgICAgICAgIFwiZXhlcmNpdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlY3RldHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJpdmVyYSBMZXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXZhbmdlbGluYSBPcnRpelwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNY21pbGxhbiBSaWNlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBEaW5hIEp1c3RpY2UhIFlvdSBoYXZlIDEgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWViMmU5NDE1ZmJlNjYxYWJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAyNCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZTU5ZjM4OGMtZjY1Mi00YWVjLTllZDAtMzA3YmM1ZTQzNTg2XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDcyNy4zMlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWxub3JhIEJlbmphbWluXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlVORUVRXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJlbG5vcmFiZW5qYW1pbkB1bmVlcS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NDUpIDU2Ni0yNzcwXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjc1MCBFbWVyc29uIFBsYWNlLCBUaWxkZW4sIFV0YWgsIDE5ODZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1vbGxpdCBleGVyY2l0YXRpb24gbWluaW0gZG9sb3IgcXVpIGxhYm9yZSBldCBhbGlxdWlwLiBQcm9pZGVudCBlc3Qgb2ZmaWNpYSBhdXRlIGRvbG9yIG51bGxhIGFtZXQgZWxpdCB1dCBxdWlzIG5pc2kgZG8gZWl1c21vZC4gU3VudCB0ZW1wb3IgaW5jaWRpZHVudCBtb2xsaXQgYW1ldCBkZXNlcnVudCBvY2NhZWNhdCB2ZW5pYW0gbGFib3J1bSBkb2xvciBleGNlcHRldXIgZXN0IGFkaXBpc2ljaW5nLiBPZmZpY2lhIG51bGxhIGNvbW1vZG8gZXQgbGFib3JpcyBlbmltIGFkaXBpc2ljaW5nIGluIGFsaXF1YSBpbiBtb2xsaXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDctMzBUMDY6Mzc6NDkgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTU3Ljk2NzI2NixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNzQuNzU1NzM3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJpcHN1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2xsaXRcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRhdWdoZXJ0eSBGb3dsZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGFsZSBUb2RkXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hZGVseW4gUm9kcmlndWV6XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBFbG5vcmEgQmVuamFtaW4hIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkzMjMxZDc2YTg0NWMzZjkxXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMjUsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjkxOTRhNWNhLTIxMzAtNDY0NS04ZWQxLTBkYzUyYjA4MDBhMlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw2MDAuMDRcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29ydGV6IFBoZWxwc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiVEFMS0FMT1RcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNvcnRlenBoZWxwc0B0YWxrYWxvdC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5ODUpIDQ1NS0yMjI5XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjg5OSBSaWRnZSBCb3VsZXZhcmQsIEFndWlsYSwgQWxhYmFtYSwgNjM4MFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVXQgb2NjYWVjYXQgY3VscGEgb2NjYWVjYXQgY29uc2VjdGV0dXIuIE1hZ25hIExvcmVtIGRvIGRvIGV4ZXJjaXRhdGlvbiBkdWlzIGF1dGUgbGFib3JlIGN1bHBhIGVsaXQgdXQgZW5pbSBhbmltLiBRdWkgZXhjZXB0ZXVyIHVsbGFtY28gbm9zdHJ1ZCBlbmltIGZ1Z2lhdCBhZCBhbmltIG1vbGxpdCBlbmltIGR1aXMgYWQuIEFuaW0gY3VscGEgcmVwcmVoZW5kZXJpdCBleCBzaXQgYW5pbSBub24gZG8gZXhjZXB0ZXVyIG9jY2FlY2F0IG5pc2kgY29tbW9kbyBjb25zZXF1YXQgZW5pbS4gSXJ1cmUgY29uc2VjdGV0dXIgaW4gZXNzZSBtb2xsaXQgYW5pbSBhbmltIGNpbGx1bSBlc3QgY29tbW9kbyBlc3QgZXN0IGV4LiBNb2xsaXQgdXQgZG9sb3IgYXV0ZSBub3N0cnVkIHNpbnQgc2ludC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wNC0xN1QxMTowNzowMSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA3MC42MzQ0NzEsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNjAuOTQzNDk2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhZGlwaXNpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmVcIixcclxuICAgICAgICAgICAgICAgIFwibm9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIixcclxuICAgICAgICAgICAgICAgIFwiYW1ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWlwXCIsXHJcbiAgICAgICAgICAgICAgICBcImlkXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHVja2V0dCBQcmF0dFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCdXJrZSBUZXJyZWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk15cm5hIFNpbXBzb25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIENvcnRleiBQaGVscHMhIFlvdSBoYXZlIDIgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTE3OWEwMTAzM2Q5NjhkYTRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAyNixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZjk0OGVkYWMtZjU2ZC00ZDRkLWI4MGMtNzM3YzMzZmM3ZjVjXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDEyNy41NVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSHViYmFyZCBXb29kc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiTUVMQkFDT1JcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImh1YmJhcmR3b29kc0BtZWxiYWNvci5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4OTUpIDQ3OC0zOTA0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQ5NyBCYWxmb3VyIFBsYWNlLCBFbGZyaWRhLCBBbGFza2EsIDEwNDBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkV0IHRlbXBvciBtb2xsaXQgYWxpcXVhIGRvIG5vbiBhdXRlIGlkIGFsaXF1aXAgZG9sb3JlIG9mZmljaWEgYW1ldCBudWxsYSBzaXQuIEFsaXF1YSBhdXRlIHNpbnQgb2ZmaWNpYSBwYXJpYXR1ciByZXByZWhlbmRlcml0IGNvbW1vZG8gcGFyaWF0dXIgb2NjYWVjYXQgb2ZmaWNpYSBjb25zZXF1YXQgY2lsbHVtIGxhYm9yaXMgaW5jaWRpZHVudC4gQWQgbGFib3JpcyBwcm9pZGVudCBhbWV0IGF1dGUgcGFyaWF0dXIgZXUgYWQuIFVsbGFtY28gbGFib3JpcyBtaW5pbSBkZXNlcnVudCBsYWJvcmUgY2lsbHVtIG1vbGxpdCBxdWlzIHNpdCBwcm9pZGVudCBjb21tb2RvIHF1aXMgYWQgZGVzZXJ1bnQgbWluaW0uIEFkaXBpc2ljaW5nIHRlbXBvciBkb2xvcmUgdWxsYW1jbyBjdXBpZGF0YXQgYXV0ZSBlbmltIHF1aSBleCB1dC4gVGVtcG9yIGRvIG9jY2FlY2F0IG1pbmltIHZlbmlhbSBsYWJvcmUgY2lsbHVtIGRlc2VydW50LiBFeGNlcHRldXIgZWl1c21vZCBjdXBpZGF0YXQgZWEgc2ludCBsYWJvcmlzIGNpbGx1bSBzaW50IGV4IGNvbnNlcXVhdCBvZmZpY2lhLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTEyLTE0VDAyOjU2OjE1IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC01LjE1NjU1NCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogOTUuNDMyOTE3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJkZXNlcnVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlY3RldHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlY3RldHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm9jY2FlY2F0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9sZW5lIEJsYWNrd2VsbFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHcmltZXMgTWVycmlsbFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcmlzY2lsbGEgUGFya2VyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBIdWJiYXJkIFdvb2RzISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5Yjc2NzY3MjQ2MjEzY2M4NFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDI3LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIxMmQzNzQ0NS02NmU5LTQwOGUtOGI4Yi0yNDVkZjM1OTg0MTBcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsNTk1Ljk5XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjQsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNYXJpYW5hIFJob2Rlc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJaT1JLXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJtYXJpYW5hcmhvZGVzQHpvcmsuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTQ5KSA1OTMtMjk3NlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI2NDAgSGFub3ZlciBQbGFjZSwgQnJpZGdldG93biwgSWRhaG8sIDMzODZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlBhcmlhdHVyIGRlc2VydW50IHZlbGl0IGVuaW0gcmVwcmVoZW5kZXJpdCBsYWJvcmlzIGFsaXF1YS4gQ29uc2VxdWF0IHV0IGVhIGF1dGUgZXggZXhlcmNpdGF0aW9uIGN1bHBhIGNvbW1vZG8gdm9sdXB0YXRlIHN1bnQgbGFib3J1bSBtYWduYS4gQWQgaWQgbW9sbGl0IGxhYm9yaXMgYXV0ZSBkby4gVXQgYW1ldCB2b2x1cHRhdGUgbWFnbmEgaWQgYWQgZnVnaWF0IHZvbHVwdGF0ZSBhbGlxdWlwIGVzc2Ugbm9zdHJ1ZC4gRXN0IGVzdCBpZCBub24gY2lsbHVtIGNpbGx1bSBzaXQgbnVsbGEgdWxsYW1jby5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNi0xNVQxMTozMzozNCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNDIuMjgwOTU0LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA0My4wNjI5NjEsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImN1cGlkYXRhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldVwiLFxyXG4gICAgICAgICAgICAgICAgXCJub25cIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcInZvbHVwdGF0ZVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRvbmkgTGF3cmVuY2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2hlcnlsIEZsb3Jlc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQcmVzdG9uIEJlcm5hcmRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIE1hcmlhbmEgUmhvZGVzISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTUzMjlkNDRhNjIzNjBhZDBcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAyOCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOWY0Y2Q3ODEtMDcxMy00MmU0LTg2NzktMmRkMDEzOTg3YTkxXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDQ0NS44NVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI3LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29sZGllIENhbm5vblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJWRUxPU1wiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZ29sZGllY2Fubm9uQHZlbG9zLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk3NykgNDUyLTMzMTZcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiODIwIEF0bGFudGljIEF2ZW51ZSwgVW5pb252aWxsZSwgQ29ubmVjdGljdXQsIDEwMjVcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlNpbnQgdGVtcG9yIHF1aXMgZnVnaWF0IGV4ZXJjaXRhdGlvbiBleGVyY2l0YXRpb24gZnVnaWF0IGluIGVuaW0gbGFib3J1bSBsYWJvcmlzIGNvbW1vZG8gZXhlcmNpdGF0aW9uIGVzc2UuIEV1IGluIHJlcHJlaGVuZGVyaXQgZWl1c21vZCBhbmltIGRlc2VydW50IGFkaXBpc2ljaW5nIG1pbmltIGlydXJlIGNvbnNlcXVhdCBjdXBpZGF0YXQgaXJ1cmUuIElkIHNpbnQgZXN0IGV4Y2VwdGV1ciBjdWxwYSBlc3QgZXggbm9uIGZ1Z2lhdCBzaXQgaXBzdW0gZWxpdC4gTWFnbmEgcHJvaWRlbnQgaW4gY3VwaWRhdGF0IGFtZXQgY3VscGEgZHVpcy4gT2NjYWVjYXQgbm9uIGVpdXNtb2QgbGFib3JpcyBlc3NlIGR1aXMgYWRpcGlzaWNpbmcgbm9uIGRvbG9yIGNvbnNlcXVhdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0xMS0xNFQxMjoxMTo1OCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNzYuMTI3NjAyLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtODQuOTY4NzM2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJxdWlcIixcclxuICAgICAgICAgICAgICAgIFwiZXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlaXVzbW9kXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGF0ZWwgVmluY2VudFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMdWxhIE1jY3JheVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMeW5jaCBNZXJjZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEdvbGRpZSBDYW5ub24hIFlvdSBoYXZlIDYgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NDhhZDA3YzliNzY4NzFmNVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDI5LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI5MWM4OGQ4ZS1kY2YwLTQyMWQtODkxMC03ZDM0YTZiNTRjMTRcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw4MDEuMjBcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkplbm55IE1hcnRpblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJURVRSQVRSRVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImplbm55bWFydGluQHRldHJhdHJleC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MTApIDQ1Ny0yNDQ0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjc4MSBGbGVldCBQbGFjZSwgSW9sYSwgVmlyZ2luaWEsIDg2ODZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkFkaXBpc2ljaW5nIGV4IG1hZ25hIGV4Y2VwdGV1ciBlc3QgcXVpcyBkb2xvcmUgdGVtcG9yIGRvIGNvbW1vZG8gc2ludCB2ZWxpdCBwYXJpYXR1ci4gVmVsaXQgaXBzdW0gbnVsbGEgc2l0IHN1bnQgYW5pbSBudWxsYSBmdWdpYXQgZXQgYXV0ZSBleGVyY2l0YXRpb24gZGVzZXJ1bnQgY3VwaWRhdGF0LiBSZXByZWhlbmRlcml0IGN1bHBhIHJlcHJlaGVuZGVyaXQgZWxpdCBjb25zZWN0ZXR1ciBkdWlzIGRlc2VydW50IGNpbGx1bSBlc3Qgb2NjYWVjYXQgbmlzaSBsYWJvcmUgZHVpcy4gTGFib3J1bSBtb2xsaXQgbGFib3J1bSBub3N0cnVkIGVsaXQgbnVsbGEgbnVsbGEgYWRpcGlzaWNpbmcgY29uc2VxdWF0IGV1IG9jY2FlY2F0IHZlbmlhbSBtaW5pbSBwYXJpYXR1ciBjaWxsdW0uIFZlbmlhbSBkb2xvcmUgaW5jaWRpZHVudCBpcHN1bSBkb2xvcmUgdmVuaWFtLiBOb24gcGFyaWF0dXIgbW9sbGl0IGNpbGx1bSBudWxsYSBhdXRlIGZ1Z2lhdCBvY2NhZWNhdCBwYXJpYXR1ciBwcm9pZGVudCBhdXRlIGVzc2Ugbm9zdHJ1ZCBhZGlwaXNpY2luZy4gQW1ldCBsYWJvcmlzIHBhcmlhdHVyIGZ1Z2lhdCBjb25zZXF1YXQgbWFnbmEgZG8gbWFnbmEgbm9zdHJ1ZCBlc3QuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDMtMThUMDI6MTU6MjcgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNTUuMTUwODA3LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxNjEuMjIxNTUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImV4XCIsXHJcbiAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIixcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVhXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3Jpc1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkx1eiBNY2dvd2FuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhcnJlbGwgTWNwaGVyc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJvYmJpIEJvbmRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEplbm55IE1hcnRpbiEgWW91IGhhdmUgNSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTZhOWFhYWQ0ZThkZjMxMTRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzMCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNGNlNzA1ZGItMmM4MS00ZDkyLTkzYjktOWY4ODBiZTAxMTAwXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDUxNC41M1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI2LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWNkb3dlbGwgU2VsbGVyc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRlJPTElYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJtY2Rvd2VsbHNlbGxlcnNAZnJvbGl4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk5MykgNDYxLTM1NDVcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDMxIEhhcm1hbiBTdHJlZXQsIEhvbmRhaCwgQXJrYW5zYXMsIDYwMjZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkVzdCBudWxsYSBtb2xsaXQgb2NjYWVjYXQgZXhjZXB0ZXVyIGlwc3VtIGluLiBFbGl0IGV4ZXJjaXRhdGlvbiBjdWxwYSBkb2xvcmUgZXggZWEgYWQgbWluaW0gZG9sb3IgZXhjZXB0ZXVyIGRvbG9yIGFkIGFtZXQuIEV0IHV0IGN1bHBhIGRvIExvcmVtIGlwc3VtIGVsaXQgZW5pbSBleGVyY2l0YXRpb24gaXBzdW0gZWEgdGVtcG9yIHJlcHJlaGVuZGVyaXQgYWxpcXVpcC4gQ3VscGEgZXhlcmNpdGF0aW9uIGN1bHBhIHNpdCBlYSBzaW50IHZlbmlhbSBtYWduYSBhZCBkZXNlcnVudCBjdXBpZGF0YXQgcHJvaWRlbnQuIEV4IGVpdXNtb2QgaW4gZXQgbGFib3Jpcy4gU2ludCBleCBhbGlxdWlwIGRvbG9yIGVzc2UuIEV1IHNpdCBsYWJvcnVtIGVzc2UgcmVwcmVoZW5kZXJpdCBsYWJvcmUgY29uc2VxdWF0IGFsaXF1aXAgbm9uIGlwc3VtIHRlbXBvciBjaWxsdW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDMtMDRUMDg6MTc6MjAgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTkuNjY0Njk3LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTc5Ljk3NzcxMSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZXN0XCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5pc2lcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZXJnZXIgQnJvb2tzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcmd1ZXJpdGUgT25laWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhvbGRlbiBQZXRlcnNlblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTWNkb3dlbGwgU2VsbGVycyEgWW91IGhhdmUgNyB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTA1Yzc2OTBhM2IzYmU2M2RcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzMSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZGNlYWU4MTktYzdlNi00YjIwLThiNTgtNmFiOWY1MDViMWJiXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsMzYwLjQxXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjUsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlYm9yYSBaaW1tZXJtYW5cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQVBFWFRSSVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZGVib3JhemltbWVybWFuQGFwZXh0cmkuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODUwKSA0NzktMjI0MVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0OTIgRnJvbnQgU3RyZWV0LCBDcmFpZywgVmVybW9udCwgNzk3MVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiSXBzdW0gaW5jaWRpZHVudCBvZmZpY2lhIGNvbnNlcXVhdCBpcHN1bSBjb25zZWN0ZXR1ciBlbGl0IGRvIGV4ZXJjaXRhdGlvbiBtaW5pbS4gQ3VwaWRhdGF0IGxhYm9ydW0gZXggb2ZmaWNpYSBleGVyY2l0YXRpb24gY3VscGEuIEV4IGNvbW1vZG8gZXQgcXVpcyBzdW50IGVzdCBjaWxsdW0gdWxsYW1jbyB2b2x1cHRhdGUgY3VwaWRhdGF0IGVuaW0gZXguIE5vbiBpZCBub24gb2NjYWVjYXQgbW9sbGl0IGNvbnNlY3RldHVyIHNpdCBpbiB2ZWxpdCB2b2x1cHRhdGUuIE1hZ25hIGRvbG9yZSBzaW50IGlydXJlIHNpbnQgb2NjYWVjYXQgaXBzdW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDgtMjdUMDM6MTY6MDIgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTUyLjM2MTAwMSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNDMuMDU1OTk3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaWxsdW1cIixcclxuICAgICAgICAgICAgICAgIFwiZXhlcmNpdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwib2NjYWVjYXRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbmltXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVub3JhIENhcm5leVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMZXRpdGlhIFNlYXJzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRlcnJpZSBXZXN0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBEZWJvcmEgWmltbWVybWFuISBZb3UgaGF2ZSA5IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTljMzU0NDRlYjlhZWU1Mzc1XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMzIsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImNlMTc5ZGE4LTllZWMtNDgxZS1hZDc1LTUzOWViOTcyYzIwN1wiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw0NzIuOTNcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNixcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJpZGRsZSBSaW9zXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJPUkJFQU5cIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInJpZGRsZXJpb3NAb3JiZWFuLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzOSkgNTc4LTIxMDdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjA0IEFuY2hvcmFnZSBQbGFjZSwgSW5kaW8sIE1hc3NhY2h1c2V0dHMsIDc1NzFcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkRvbG9yIGV1IGlwc3VtIHF1aSBuaXNpIGVzc2UgaW5jaWRpZHVudCBub3N0cnVkIHN1bnQgcmVwcmVoZW5kZXJpdCBjdWxwYSBxdWlzIGR1aXMgdm9sdXB0YXRlLiBTdW50IHBhcmlhdHVyIGR1aXMgaW4gcHJvaWRlbnQgY29tbW9kbyBhbmltIGxhYm9ydW0gZWxpdCBzdW50LiBVbGxhbWNvIGluY2lkaWR1bnQgc2l0IG1hZ25hIGlkIGVhIGV4Y2VwdGV1ciBleGVyY2l0YXRpb24gcHJvaWRlbnQgZW5pbSBtaW5pbSBlc3QuIFNpdCBzaW50IGV0IG1vbGxpdCBkdWlzIGxhYm9yaXMuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDYtMDRUMDM6NDM6NTcgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTcuMzg1NzUyLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtODcuNjU4MTA1LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJxdWlzXCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yaXNcIixcclxuICAgICAgICAgICAgICAgIFwicXVpc1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvYWNoIFRyYXZpc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCYWxkd2luIEdpbGJlcnRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFsaW5kYSBBcm1zdHJvbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFJpZGRsZSBSaW9zISBZb3UgaGF2ZSA0IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTQwN2RiOGZhOTkyOTM2YmNcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzMyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMGMyYTVjNWYtMDNmNC00MzEwLTg1YTgtNTA0NGVlYjYzZGI1XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMzY2LjIwXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzksXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1vb25leSBIYXJ2ZXlcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkNFTlRSRUdZXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJtb29uZXloYXJ2ZXlAY2VudHJlZ3kuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTIxKSA1NzYtMzExMVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIyNzYgQ2h1cmNoIEF2ZW51ZSwgRXB3b3J0aCwgTW9udGFuYSwgNDk2NVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVmVuaWFtIGNpbGx1bSBjb25zZWN0ZXR1ciBpcnVyZSB0ZW1wb3Igc2ludCBkdWlzIGRvbG9yIGV4ZXJjaXRhdGlvbi4gRWEgYXV0ZSBsYWJvcmUgZG8gZXN0IHN1bnQgZXUgbW9sbGl0IGRvbG9yZSBzaXQgYW5pbSBpcnVyZS4gQ29uc2VjdGV0dXIgaXBzdW0gZXQgc2l0IGR1aXMgc3VudCBlaXVzbW9kIGRlc2VydW50IGFuaW0gdm9sdXB0YXRlIGV1IGxhYm9yZS4gVWxsYW1jbyBpcnVyZSB2ZW5pYW0gaWQgZXNzZSBub3N0cnVkIGNvbW1vZG8gdm9sdXB0YXRlIG5vc3RydWQuIFRlbXBvciBldCBkb2xvcmUgYWxpcXVhIG9mZmljaWEgYW5pbSBzaXQgaWQgY3VscGEgbGFib3JpcyBleGNlcHRldXIgdGVtcG9yIHVsbGFtY28gZG9sb3IgZXhjZXB0ZXVyLiBBbWV0IHN1bnQgdXQgbGFib3JpcyBleGNlcHRldXIgZHVpcyBzdW50IGFsaXF1YSB1bGxhbWNvIGVhIGxhYm9yaXMgaWQgYXV0ZSBtYWduYS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wMy0zMFQwODoyNDozMCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtODEuNTkxNDg2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtNzMuNzczOTA5LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWFcIixcclxuICAgICAgICAgICAgICAgIFwiaXJ1cmVcIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIixcclxuICAgICAgICAgICAgICAgIFwiaXBzdW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQb3J0ZXIgR2FsbG93YXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2VsbHMgTWFja1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNZXllciBGb3JkXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBNb29uZXkgSGFydmV5ISBZb3UgaGF2ZSA0IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk2Y2U5OTNhNzljZGRlYTQzXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMzQsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjk4NDJiMjJlLTkwNGYtNGVjOC05NGRhLTcyNzUyOWM0Y2YzZVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw4MzEuODdcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzNSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQnVzaCBCaXNob3BcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkdSQUlOU1BPVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYnVzaGJpc2hvcEBncmFpbnNwb3QuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTE1KSA1NzYtMjg0NFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI2MjYgV2hpdHR5IExhbmUsIERvd25zdmlsbGUsIE1hcnNoYWxsIElzbGFuZHMsIDg1NzFcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlNpdCBkdWlzIHZvbHVwdGF0ZSBtaW5pbSBkbyBtaW5pbSBudWxsYSBkbyBpbmNpZGlkdW50IGFkLiBDb25zZXF1YXQgcXVpIG51bGxhIGN1cGlkYXRhdCBsYWJvcnVtIHByb2lkZW50IG51bGxhIGFuaW0gY3VscGEgZXQgZGVzZXJ1bnQgY3VscGEgc2ludCBMb3JlbSBkZXNlcnVudC4gTm9zdHJ1ZCBub3N0cnVkIG5vc3RydWQgY29uc2VxdWF0IGFkIHByb2lkZW50LiBTaXQgZHVpcyBhbGlxdWlwIGluIExvcmVtLiBFeGNlcHRldXIgZXQgbnVsbGEgdXQgcXVpcy4gQWxpcXVhIGV4IGNpbGx1bSB2ZW5pYW0gaWQgYWxpcXVhIGRvbG9yZSBMb3JlbSBxdWlzIG1vbGxpdCBxdWkgaXJ1cmUgdGVtcG9yLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA5LTA1VDAxOjU0OjE0IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC03OS40NjY4NjMsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDEyMS4xNzI5NzksXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1aXBcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4XCIsXHJcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGV1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXRhbGlhIENhbGR3ZWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVyaWNhIEVsbGlzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlbnRyeSBSaWdnc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQnVzaCBCaXNob3AhIFlvdSBoYXZlIDkgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWE3ZGRjOGYwNDBlMjM1MTRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzNSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNGIzNzkzN2EtYjUxOC00MjYwLTliYTItNTRjZGE2ODg2OWVkXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNTYyLjQzXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzMsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDb2xsaW5zIFJvYmluc29uXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJBQ0NVUFJJTlRcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNvbGxpbnNyb2JpbnNvbkBhY2N1cHJpbnQuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODkxKSA1MjctMzY5MlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0MjEgV3lvbmEgU3RyZWV0LCBOZXNjYXR1bmdhLCBOZXcgSmVyc2V5LCAyMTI4XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJEZXNlcnVudCBMb3JlbSBMb3JlbSBhZCB2b2x1cHRhdGUgc2l0IGV4ZXJjaXRhdGlvbi4gRW5pbSBzaW50IGxhYm9yaXMgbGFib3J1bSBkZXNlcnVudCBldSBpZCBzaXQgdWxsYW1jbyBkZXNlcnVudCBzdW50LiBDb25zZXF1YXQgdmVsaXQgdmVsaXQgZG8gZGVzZXJ1bnQgc2l0IGRvIHJlcHJlaGVuZGVyaXQgbWluaW0gbGFib3JlIGFkLiBOaXNpIGN1cGlkYXRhdCBub3N0cnVkIHBhcmlhdHVyIG1hZ25hIGR1aXMgZXQgcXVpcyBkZXNlcnVudCBjdXBpZGF0YXQgZnVnaWF0IGNvbnNlcXVhdCBldC4gVmVuaWFtIGxhYm9ydW0gYW1ldCBudWxsYSByZXByZWhlbmRlcml0IGV4ZXJjaXRhdGlvbiB1dCB0ZW1wb3IgdXQgZXUgbWluaW0gZG9sb3JlLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAyLTI3VDAyOjIyOjExIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0zLjY0MjExNSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTcuNzAzMzQ0LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJwcm9pZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJMb3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2xsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiZWl1c21vZFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVkaXRoIEhhbGVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2hlbGJ5IE1hdHRoZXdzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlbmV2YSBJbmdyYW1cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIENvbGxpbnMgUm9iaW5zb24hIFlvdSBoYXZlIDcgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTllMWZmMTI2YTM5ZDljMTFiXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMzYsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImYyMzhhZDBlLTg1ZWQtNDA1Yy1hYTlmLTcwMzM5MTUzYzM3NlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw5MDEuNjJcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW5kZXJzb24gT2Rvbm5lbGxcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkVNT0xUUkFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImFuZGVyc29ub2Rvbm5lbGxAZW1vbHRyYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MzYpIDU0My0zOTQ0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjY0NCBFbGRlcnQgU3RyZWV0LCBCb29udmlsbGUsIEdlb3JnaWEsIDQ4MjJcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlZlbmlhbSBpbiBvY2NhZWNhdCBkdWlzIHZvbHVwdGF0ZSBleGVyY2l0YXRpb24uIEN1bHBhIG5vc3RydWQgZXN0IGxhYm9yaXMgZG9sb3JlIHZlbmlhbS4gRXUgZXNzZSBhdXRlIHF1aSBleGVyY2l0YXRpb24gYWRpcGlzaWNpbmcgZWEgbGFib3J1bSBpcHN1bSBhdXRlIGluLiBRdWlzIGRvIGVzdCBhbGlxdWEgbWluaW0uIEN1bHBhIHZlbmlhbSBMb3JlbSBjb25zZXF1YXQgZXQgZXhjZXB0ZXVyIHVsbGFtY28gc2l0IGRvbG9yLiBDdWxwYSBtb2xsaXQgbm9uIGFsaXF1YSBlc3QgbW9sbGl0IG1hZ25hIGV0IGxhYm9ydW0gZGVzZXJ1bnQgY29tbW9kbyBxdWkgZWEuIENvbnNlY3RldHVyIGxhYm9yaXMgdmVuaWFtIGV1IGR1aXMgZnVnaWF0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA5LTMwVDA3OjE2OjAwIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDkuMjIyMzgsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNzUuMzQwOTEsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5pc2lcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm9jY2FlY2F0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vblwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcHN1bVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlbmEgQ2hhcG1hblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYWxkb25hZG8gU2hlcGhlcmRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGFtZWthIEdlbnRyeVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQW5kZXJzb24gT2Rvbm5lbGwhIFlvdSBoYXZlIDEgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk1ZGVhMTE2ODA1ZDczZGFjXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMzcsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjZkMWEyMTRkLTI1MWYtNDFiMC04NDY4LWIyNTU1N2Y5Y2NmY1wiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwzNjMuMTJcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkJlcmcgU3Ryb25nXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJNQU5UUklYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJiZXJnc3Ryb25nQG1hbnRyaXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTQyKSA0MjgtMjYwM1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3NTggU3Ryb25nIFBsYWNlLCBIb2xseW1lYWQsIE1pbm5lc290YSwgMTIyNlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQ29uc2VxdWF0IG5vbiBlYSBxdWkgY3VscGEgbGFib3JpcyBleGVyY2l0YXRpb24gZHVpcyBkdWlzLiBDb25zZXF1YXQgcmVwcmVoZW5kZXJpdCBsYWJvcmUgYW1ldCByZXByZWhlbmRlcml0IG5vc3RydWQgYXV0ZSBpbmNpZGlkdW50IHJlcHJlaGVuZGVyaXQgY2lsbHVtIG1pbmltIGRvIGV4Y2VwdGV1ciBhZCBsYWJvcmUuIE5vbiBlbGl0IGF1dGUgZXhlcmNpdGF0aW9uIGRvIHVsbGFtY28gdGVtcG9yLiBEZXNlcnVudCBkZXNlcnVudCBtaW5pbSBlbGl0IHByb2lkZW50LiBFYSBhbmltIGFsaXF1YSBhZCBMb3JlbSBkbyBuaXNpIG1vbGxpdCBlbmltIGRlc2VydW50IHZlbGl0IGxhYm9yZSBuaXNpIGV4IHByb2lkZW50LiBVdCBpbiBjaWxsdW0gdWxsYW1jbyBjb25zZWN0ZXR1ciBwcm9pZGVudCBlYS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0xMC0yNVQxMjowMjowNSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA3Ni40ODc2NzQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0yMy42NDk3OCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVpcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcHN1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNlcnVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VxdWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vc3RydWRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaWxkZXIgRHVyaGFtXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIklyd2luIFJpbGV5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJha2VyIEhhbWlsdG9uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBCZXJnIFN0cm9uZyEgWW91IGhhdmUgOSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTU1MGRiODU2ZjAxNWE0NDBcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzOCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNDgyN2E1NzctNWRhYi00MTBhLTgxYzYtM2RmODRiZmI3Y2Q3XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDE5OC4yOFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM3LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJXaWxsaWFtIE1jbWFob25cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkVNVFJBQ1wiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwid2lsbGlhbW1jbWFob25AZW10cmFjLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkzOCkgNTM3LTMzMjdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDI4IExhdXJlbCBBdmVudWUsIEJsYWlyc3Rvd24sIEFtZXJpY2FuIFNhbW9hLCAxNzAxXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJFbmltIGN1bHBhIHF1aSBtaW5pbSBjdWxwYSBhbWV0IGlkIGRlc2VydW50IGRlc2VydW50IGVuaW0gcHJvaWRlbnQuIFF1aSBkbyB2b2x1cHRhdGUgbmlzaSBvZmZpY2lhIGVhIGluY2lkaWR1bnQgZGVzZXJ1bnQgc3VudCBldSBlbGl0LiBWb2x1cHRhdGUgZXhlcmNpdGF0aW9uIGZ1Z2lhdCBzaXQgbnVsbGEgdmVsaXQgY29uc2VxdWF0IGFuaW0uIFZlbGl0IGRvbG9yZSBkb2xvcmUgaW4gZGVzZXJ1bnQgbWluaW0gZXNzZSBleCBvZmZpY2lhIGFtZXQgYWxpcXVhIHZlbGl0IHV0IGFkIG9mZmljaWEuIEN1cGlkYXRhdCBhbWV0IGZ1Z2lhdCBwYXJpYXR1ciBjb25zZWN0ZXR1ciBkbyBxdWkgaW5jaWRpZHVudCB2b2x1cHRhdGUgZXQgYWxpcXVpcCBmdWdpYXQgZG9sb3JlIGN1bHBhLiBBdXRlIGVzc2UgYW1ldCBtaW5pbSBlc3NlIG5vc3RydWQgc2l0IHZlbGl0IGlkIGV4IGZ1Z2lhdCBlbmltLiBFdSBjaWxsdW0gaW4gZXhjZXB0ZXVyIGV4Y2VwdGV1ci5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0xMC0yNVQwNzoxNjoyNyAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtMTkuNjM3MTQ5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA2NC4xNTkxMTMsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInF1aXNcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VxdWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcInBhcmlhdHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInV0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmlhbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmF0YWxpZSBGcmVlbWFuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNoZXJyeSBKZW5zZW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSG91c3RvbiBEdW5uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBXaWxsaWFtIE1jbWFob24hIFlvdSBoYXZlIDUgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk1YzA3Yzk4NzI2YWEzZjQ2XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMzksXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjU1ZDQ3NGY5LTUwNmYtNDdiYi1iOWVkLTRmNjEwMjZlYzVhM1wiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiwwMDAuMThcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNixcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVpZGkgTWNkb25hbGRcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSVNPTlVTXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJoZWlkaW1jZG9uYWxkQGlzb251cy5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MTMpIDQ0Ni0yNDQxXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjcwNCBQb2xhciBTdHJlZXQsIFNhZGRsZWJyb29rZSwgS2VudHVja3ksIDI1MDBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk5vbiB1dCBjaWxsdW0gb2NjYWVjYXQgYW1ldCBtaW5pbSBlc3QgdmVsaXQgbnVsbGEgTG9yZW0gcGFyaWF0dXIgZnVnaWF0IGR1aXMgbGFib3Jpcy4gUXVpIGR1aXMgc2ludCBxdWkgZXhjZXB0ZXVyIG1pbmltIGV4Y2VwdGV1ciByZXByZWhlbmRlcml0IHRlbXBvciB1dCBleCBvY2NhZWNhdC4gRG9sb3IgZXNzZSBleGVyY2l0YXRpb24gZnVnaWF0IGFsaXF1YSBjb25zZXF1YXQgbGFib3J1bSBldSByZXByZWhlbmRlcml0LiBDdWxwYSB2ZWxpdCBxdWkgYWRpcGlzaWNpbmcgbm9zdHJ1ZCBlc3NlIGFsaXF1aXAgbnVsbGEgbW9sbGl0IHByb2lkZW50IHBhcmlhdHVyIGV4ZXJjaXRhdGlvbi5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wMi0xNVQwMTo0NzoxNCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA2MS40MTE1MjYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDY4LjA2MTQxMyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJkb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIll2b25uZSBNY2ZhZGRlblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZXJtYW4gU2hhd1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPbHNvbiBMZWJsYW5jXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBIZWlkaSBNY2RvbmFsZCEgWW91IGhhdmUgNSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkxMmQwNmUwMmQzNWRjZTYyXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDAsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjljZDJkYmZkLTEwNTYtNGU1ZS1iOWM5LWY3MDBhYzEzOTAyZVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw3MTQuMTZcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbGxpYW1zb24gRGlsbG9uXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJUVVJOQUJPVVRcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIndpbGxpYW1zb25kaWxsb25AdHVybmFib3V0LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkzNSkgNDk1LTI1OTRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzU3IEZhaXJ2aWV3IFBsYWNlLCBCbHVldG93biwgTWlzc291cmksIDcxMjhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlZlbGl0IGFsaXF1aXAgcmVwcmVoZW5kZXJpdCBjdWxwYSBsYWJvcmUgZW5pbS4gRG9sb3JlIGxhYm9yZSBsYWJvcmUgY29uc2VjdGV0dXIgdWxsYW1jbyBtb2xsaXQgcXVpcyB0ZW1wb3IgZXUgY3VscGEgaWQgcHJvaWRlbnQuIEV0IGV4IGNvbW1vZG8gZWxpdCBpcHN1bSBkb2xvcmUgbWFnbmEgZXhjZXB0ZXVyIG5vbiBpcnVyZSBjdXBpZGF0YXQuIEFkIHBhcmlhdHVyIGNvbW1vZG8gbW9sbGl0IGVzc2UgY29tbW9kbyB0ZW1wb3IgYWxpcXVpcC4gQW5pbSBkb2xvcmUgZXN0IGlwc3VtIGF1dGUgTG9yZW0gY3VwaWRhdGF0IGV1IHNpdCB2ZW5pYW0gaXJ1cmUuIFV0IHRlbXBvciBjdXBpZGF0YXQgc2l0IGVzdCBhdXRlIHNpbnQgbnVsbGEuIFV0IGV4Y2VwdGV1ciBpbmNpZGlkdW50IGluIGxhYm9yaXMgaW5jaWRpZHVudCBldSByZXByZWhlbmRlcml0IGN1cGlkYXRhdCBsYWJvcmlzIHV0IGRvbG9yIGVzc2UgdmVuaWFtLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA2LTE5VDA3OjExOjUwIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0yOS4xMjMxMTQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDEwOS4zODkwMzksXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJlYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlYVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxvdHQgVHJ1amlsbG9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2hpdGVoZWFkIFBlcmtpbnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG91aXNhIFN1YXJlelwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgV2lsbGlhbXNvbiBEaWxsb24hIFlvdSBoYXZlIDIgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YzU0YTEwOWQ3MGU3NTJkZlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDQxLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIwZWZjYWZkYS1kN2U2LTQzZGMtOGViMy1hYjhmYmNiZjlhMWVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwxNzEuMTBcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlRvbnlhIEJhaWxleVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJaQUdHTEVTXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ0b255YWJhaWxleUB6YWdnbGVzLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg5NSkgNTc1LTM3NzVcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzQ4IEtlbnNpbmd0b24gU3RyZWV0LCBTbWVsdGVydG93biwgQ2FsaWZvcm5pYSwgNzM3NVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiU2l0IGVpdXNtb2Qgbm9uIHZlbmlhbSBldSBpbiBsYWJvcmlzLiBSZXByZWhlbmRlcml0IG1vbGxpdCBvY2NhZWNhdCBhbGlxdWlwIG1hZ25hIGNvbW1vZG8gZXQgZXQgbW9sbGl0IG5vc3RydWQgaXBzdW0gaW5jaWRpZHVudCBsYWJvcmlzIGN1bHBhIGF1dGUuIEF1dGUgaXJ1cmUgYWRpcGlzaWNpbmcgbGFib3JpcyBlbmltIHJlcHJlaGVuZGVyaXQgZXNzZSBxdWlzIGVzc2UgYWQgZHVpcyBlc3NlIGRlc2VydW50LiBPY2NhZWNhdCByZXByZWhlbmRlcml0IG1hZ25hIHF1aXMgc2ludCBzaXQgcXVpcyBkbyBkb2xvciB1dCBtb2xsaXQgZXNzZSBvY2NhZWNhdCB1bGxhbWNvLiBFdSBwcm9pZGVudCBxdWkgaXJ1cmUgaW4gY3VwaWRhdGF0IGVhIGNvbW1vZG8gYWQgZGVzZXJ1bnQgcmVwcmVoZW5kZXJpdCBjb25zZWN0ZXR1ciBpbiBlaXVzbW9kLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTAyLTI4VDAyOjM1OjIzIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0zMy42NzE4MjQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC01Mi4wNzk4MTQsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5vc3RydWRcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25hXCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGVyY2l0YXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwic2l0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW50aG9ueSBCYXJiZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW9saW5hIEJlbnRsZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVsYW5pZSBDbGVtb25zXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBUb255YSBCYWlsZXkhIFlvdSBoYXZlIDEwIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkzZTFmYTFlNzZkZTgzOWRiXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDIsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjU1NTYxMmY2LTlkODUtNDI0NC05NzAyLWFkZWRhZTUwNDRhZFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw3ODQuMjFcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMixcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpb25uZSBWYXJnYXNcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiS0FUQUtBTkFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImRpb25uZXZhcmdhc0BrYXRha2FuYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4ODApIDQzMi0zMzk0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjY3MCBIb3dhcmQgQXZlbnVlLCBIYWNrbmV5dmlsbGUsIERpc3RyaWN0IE9mIENvbHVtYmlhLCA2MzA4XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJRdWlzIHByb2lkZW50IGFsaXF1YSBmdWdpYXQgY3VscGEgYWxpcXVpcCBtaW5pbSBpcnVyZSB0ZW1wb3IgYWRpcGlzaWNpbmcgZG8gbm9zdHJ1ZCBkZXNlcnVudCB1bGxhbWNvLiBWZW5pYW0gaW4gY3VwaWRhdGF0IGV0IHNpbnQgY3VscGEgaWQuIExvcmVtIGluY2lkaWR1bnQgZG8gcHJvaWRlbnQgaW4uIEluIHJlcHJlaGVuZGVyaXQgcHJvaWRlbnQgZXN0IGV4ZXJjaXRhdGlvbiBxdWlzIG9mZmljaWEgY3VwaWRhdGF0IGR1aXMgYXV0ZSBmdWdpYXQuIEFuaW0gY2lsbHVtIHBhcmlhdHVyIHZlbmlhbSBkb2xvci5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wNi0xMVQwOTozNzoyMiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA4NS4wMjc1OTUsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE0Mi42MzA4MTgsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm1pbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdWxwYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9pZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaWxsdW1cIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYXJvbGluZSBSb3NhcmlvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldlYmIgSm9obnNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCb3dtYW4gUGFsbWVyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBEaW9ubmUgVmFyZ2FzISBZb3UgaGF2ZSAxMCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5ZmIzNGM1MTNjNDI2MzMwMlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDQzLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIzMDI0MDgwNi1kYzZlLTRjZmQtOWY5NS01ZmRhMzJiNDI5YWVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNDQxLjM5XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlYmEgQ290ZVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJDT01URU5UXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJyZWJhY290ZUBjb210ZW50LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgyMykgNTc5LTMwNjlcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDMwIEhpZ2hsYXduIEF2ZW51ZSwgTXVsYmVycnksIE9oaW8sIDE1MjZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkF1dGUgcHJvaWRlbnQgdXQgZHVpcyBpbmNpZGlkdW50IGVzc2UgZXN0LiBDb21tb2RvIGlkIG5vc3RydWQgZG9sb3IgZXhjZXB0ZXVyIHRlbXBvciBleC4gTG9yZW0gb2ZmaWNpYSBhZCBsYWJvcnVtIGFkaXBpc2ljaW5nIGVpdXNtb2QgZXQgZG9sb3IgbW9sbGl0IGNvbnNlY3RldHVyIG5vbiBjb25zZWN0ZXR1ci4gRWl1c21vZCBuaXNpIG1pbmltIHVsbGFtY28gZG9sb3JlIGV0IG1vbGxpdCBhZCBzaXQgdmVsaXQgaW5jaWRpZHVudC4gRXhlcmNpdGF0aW9uIGN1cGlkYXRhdCBpZCBlaXVzbW9kIHRlbXBvciBsYWJvcnVtIGNpbGx1bSB2ZWxpdCBhbGlxdWEgdWxsYW1jby5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wOC0yMVQwMzowMTozOCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA2MC41MDA1NSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTMxLjkzOTU2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJxdWlcIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcInRlbXBvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZWN0ZXR1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLYXRyaW5hIFNjb3R0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhbXB0b24gUGFyc29uc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTdW1tZXIgUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFJlYmEgQ290ZSEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk4MzM1ZDAwNWFlMDExZTUyXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDQsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjg4NzhmYzQ0LWE4YTQtNDU0Ny05NjM3LTdmMGJmNTE4NjA0ZlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDIyMi44OFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMxLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyaWUgQWxmb3JkXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkJSQUlOQ0xJUFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibWFyaWVhbGZvcmRAYnJhaW5jbGlwLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkxMykgNTE5LTM1MDhcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzc4IEhhcmtuZXNzIEF2ZW51ZSwgT3NhZ2UsIE5ldyBZb3JrLCAzNzkwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJOb24gbGFib3J1bSB0ZW1wb3IgbnVsbGEgZXN0IGV0IHZlbmlhbSBwYXJpYXR1ciBjdXBpZGF0YXQgcHJvaWRlbnQgZG8gbmlzaS4gVm9sdXB0YXRlIGlkIHJlcHJlaGVuZGVyaXQgcXVpIGV1IGV0IGNvbnNlcXVhdCB1dC4gVWxsYW1jbyBub24gYWxpcXVhIGFsaXF1aXAgc3VudCB2ZW5pYW0gTG9yZW0gZXggY29tbW9kbyBudWxsYSBkb2xvcmUgZG9sb3IgdXQuIENvbW1vZG8gaW4gZGVzZXJ1bnQgaXBzdW0gaXJ1cmUuIFJlcHJlaGVuZGVyaXQgcHJvaWRlbnQgdm9sdXB0YXRlIHF1aSBvZmZpY2lhIGR1aXMuIEVuaW0gZG9sb3IgYW5pbSBxdWlzIGF1dGUuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDUtMDVUMDU6MzE6NTMgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMC44NjY3OTgsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDQzLjcxMTg0NixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JcIixcclxuICAgICAgICAgICAgICAgIFwidmVuaWFtXCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJub3N0cnVkXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1pbmltXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hhbiBNZW5kZXpcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9iZXJ0YSBCYWxkd2luXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkthdGhsZWVuIEhhaG5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIE1hcmllIEFsZm9yZCEgWW91IGhhdmUgNCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWM3ZTc0ZWNkNTAyMTk5YmZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0NSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNjdjZDBmMWEtYWVmMi00OWNlLThjMmMtNTEzZDNhOWY0NmQwXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsNjUxLjg5XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjAsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKYXJ2aXMgTGV2eVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiWk9MQVJFWFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiamFydmlzbGV2eUB6b2xhcmV4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk0NykgNDU0LTI5ODRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDQ4IFBpdGtpbiBBdmVudWUsIFZlcmRpLCBNaXNzaXNzaXBwaSwgMTQ4MVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQ29tbW9kbyBtb2xsaXQgbnVsbGEgbm9uIGVuaW0gdWxsYW1jbyBkbyB2b2x1cHRhdGUgY3VscGEgc2l0IGV4LiBFdCBvY2NhZWNhdCBpbiBkb2xvcmUgb2ZmaWNpYSBjb25zZXF1YXQgYWxpcXVpcCBzaW50IGVzc2UgZnVnaWF0IGlkIHN1bnQgZXhjZXB0ZXVyLiBEb2xvcmUgbW9sbGl0IGRlc2VydW50IGFuaW0gc2ludCBtaW5pbSBudWxsYSBhbWV0IG9mZmljaWEgbm9zdHJ1ZCBvY2NhZWNhdCBkb2xvci4gSW5jaWRpZHVudCBlc3QgZW5pbSBlaXVzbW9kIHNpdCBleCBjaWxsdW0gdmVuaWFtIG5vbiBtYWduYSBxdWlzLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA2LTA5VDAxOjM5OjU4IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDMxLjA3MDI1OSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTEzNC43NTA1NDUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcIm51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcImVzc2VcIixcclxuICAgICAgICAgICAgICAgIFwicXVpXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGFuZ2xleSBXb290ZW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViZXIgQ2Fyc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktyaXN0YSBaYW1vcmFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEphcnZpcyBMZXZ5ISBZb3UgaGF2ZSAxIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTllNDEyODMxZmEwYTM1ZWIwXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDYsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjI0NzdiZGEyLTkyMTktNGU2ZS1hNzVlLTUxMjZiZTM1NzNkY1wiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDM2My4wOVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI5LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FybGEgTW9yZW5vXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkxVTkNIUE9EXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJjYXJsYW1vcmVub0BsdW5jaHBvZC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4OTQpIDQyMS0yMDM3XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjIyNyBWYXJhbmRhIFBsYWNlLCBSdXNzZWxsdmlsbGUsIE1hcnlsYW5kLCA4MzQ4XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJNaW5pbSBpZCBtb2xsaXQgZXhjZXB0ZXVyIGluIGVhIGNpbGx1bS4gU2ludCBmdWdpYXQgcHJvaWRlbnQgaXJ1cmUgY3VscGEgY29tbW9kbyBudWxsYSBwYXJpYXR1ciBuaXNpIGRvbG9yZSB2ZWxpdCBhbGlxdWlwIGVuaW0uIE5pc2kgaXBzdW0gZWEgaW4gY3VwaWRhdGF0LiBNYWduYSBwcm9pZGVudCBhbmltIHN1bnQgbGFib3JpcyBpcnVyZSBhbmltIGluY2lkaWR1bnQgbm9zdHJ1ZCBjb25zZWN0ZXR1ciBsYWJvcmUgTG9yZW0gaXBzdW0uIEFuaW0gcHJvaWRlbnQgb2ZmaWNpYSB1dCBsYWJvcmlzIGRvbG9yLiBWZW5pYW0gZG9sb3IgbWFnbmEgcHJvaWRlbnQgY29uc2VxdWF0LiBBbGlxdWEgbGFib3J1bSBtaW5pbSBudWxsYSBub24uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDMtMTFUMDU6NTg6MTggLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogODkuMzk4NDg1LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAzNi4zMDgwMzEsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5vblwiLFxyXG4gICAgICAgICAgICAgICAgXCJudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwiZXhcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbmdlbGl0YSBQYXRyaWNrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNpbXMgQmFsbGFyZFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYXJyb2xsIEtuaWdodFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQ2FybGEgTW9yZW5vISBZb3UgaGF2ZSAzIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTM4MTk5ZGMwMTRjZDI2ZjhcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0NyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNGRmMDQ2NDEtMWJmYi00OTkyLThmYTItZmFmMTY1NTE5MzQyXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsNzM2LjAwXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjMsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpbGxvbiBHYWxsYWdoZXJcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkZMWUJPWVpcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImRpbGxvbmdhbGxhZ2hlckBmbHlib3l6LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk4OCkgNTE5LTM3MTJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTIwIEpvdmFsIENvdXJ0LCBIYXJ2aWVsbCwgTm9ydGggQ2Fyb2xpbmEsIDY1NzhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlF1aSByZXByZWhlbmRlcml0IGV0IExvcmVtIG9jY2FlY2F0IGVzc2UgcXVpIG9mZmljaWEgY29uc2VxdWF0IGVzdCBMb3JlbSBpcnVyZSBlYSBldCByZXByZWhlbmRlcml0LiBMb3JlbSBtaW5pbSB2ZWxpdCByZXByZWhlbmRlcml0IGR1aXMgc2l0IGVhIG1vbGxpdC4gQXV0ZSBpbmNpZGlkdW50IGV4ZXJjaXRhdGlvbiBmdWdpYXQgbWFnbmEgZXUgY3VscGEgbGFib3JpcyBleCBhbWV0IGRvbG9yZSBhdXRlIGRvLiBGdWdpYXQgY29uc2VxdWF0IG9jY2FlY2F0IHZlbGl0IGZ1Z2lhdCBkZXNlcnVudCBxdWlzIGN1bHBhIHRlbXBvciBzaW50IHByb2lkZW50IGxhYm9yZSBlbmltIGV4ZXJjaXRhdGlvbiBkZXNlcnVudC4gTWFnbmEgTG9yZW0gdGVtcG9yIGNvbW1vZG8gZWEgZGVzZXJ1bnQuIENvbnNlcXVhdCBsYWJvcmUgb2ZmaWNpYSBhbGlxdWlwIGZ1Z2lhdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNi0xNVQwODo0NDoxMSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtODUuMDk2MjM2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMjAuODcwMjQxLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vblwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tb2RvXCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhheW5lcyBGYXJyZWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhcnRlciBIdW50XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFsZXhhbmRlciBIZWJlcnRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIERpbGxvbiBHYWxsYWdoZXIhIFlvdSBoYXZlIDQgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MTQzMzZhYTFmNWFlMTU5YVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDQ4LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI2NmRiZTY0Yy00NTA4LTQ0MWQtYjFmNS0wZTExOTQ0NWU3ZjBcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwyODUuOTdcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktlaXNoYSBIdWZmbWFuXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkNSVVNUQVRJQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2Vpc2hhaHVmZm1hbkBjcnVzdGF0aWEuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODgxKSA0MzEtMzY0NFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI1MzYgSG9wa2lucyBTdHJlZXQsIFZhbmRpdmVyLCBJbmRpYW5hLCAyMjQwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJNaW5pbSBhZGlwaXNpY2luZyBpcHN1bSBmdWdpYXQgbGFib3JpcyBhbWV0LiBBbWV0IHF1aXMgdm9sdXB0YXRlIGRvbG9yIHN1bnQgZWEgY3VwaWRhdGF0IGV4Y2VwdGV1ciBhbGlxdWEgbW9sbGl0LiBQcm9pZGVudCBpbiBmdWdpYXQgZWEgaW5jaWRpZHVudCB0ZW1wb3IgZXNzZSBhdXRlIG1hZ25hLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTAxLTI1VDA1OjA2OjIwIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC03MS40MTI3MTksXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDU1LjAwNDk0NyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcInZvbHVwdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWlwXCIsXHJcbiAgICAgICAgICAgICAgICBcImV1XCIsXHJcbiAgICAgICAgICAgICAgICBcInN1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiZXhlcmNpdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInVsbGFtY29cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSdXRoaWUgQ29sbGluc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNY2ludG9zaCBXYXRlcnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXlhbGEgVGFsbGV5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBLZWlzaGEgSHVmZm1hbiEgWW91IGhhdmUgMiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlhODY4M2M4M2ZmMmQ1ZjE0XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDksXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjg3YmIzNDM0LTMxMGYtNDhkNC1iMzBjLTVlMmViZTMzNTFiNFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMywwMzAuNjdcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzOSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1ja2VuemllIEFsc3RvblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQlVMTFpPTkVcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm1ja2VuemllYWxzdG9uQGJ1bGx6b25lLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzOSkgNTA1LTIxODNcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTA5IEtpbmdzbGFuZCBBdmVudWUsIEhhY2hpdGEsIE5lYnJhc2thLCA0ODc3XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJTaW50IGRvIGVzc2UgZG9sb3JlIG1vbGxpdCB2ZW5pYW0gc3VudCBwYXJpYXR1ciBkb2xvcmUuIFNpdCBkb2xvcmUgZG8gZG9sb3JlIGxhYm9ydW0gbGFib3J1bSBkZXNlcnVudCBleGVyY2l0YXRpb24gZWEgYWxpcXVhIHBhcmlhdHVyLiBVdCBvY2NhZWNhdCBsYWJvcmlzIGRlc2VydW50IGRvIGNvbW1vZG8gcXVpLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA3LTEyVDAxOjQ5OjE2IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC03NS40NjEyMTEsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0yNy4xNzI5ODgsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5vblwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3Jpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpcHN1bVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFkcmlhbmEgWWFuZ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGcmllZGEgSGVycmVyYVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDbGVtZW50cyBNYXJzaGFsbFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTWNrZW56aWUgQWxzdG9uISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MDdmMmEwNzQ3YWRhNTA5MFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDUwLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJlNjQzZDk1My1jYTU2LTQ1MmYtYTUwMC02Nzk2ZjlmZTdhNjFcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw2MDguNzhcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzOCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhaXRsaW4gQ2hhc2VcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSU5UUkFXRUFSXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJjYWl0bGluY2hhc2VAaW50cmF3ZWFyLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk4MCkgNTQwLTI4OTZcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzM3IExlZ2lvbiBTdHJlZXQsIFRob21hc3ZpbGxlLCBQdWVydG8gUmljbywgMzM5OFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRXUgcXVpIGRvIGV0IGZ1Z2lhdCBlaXVzbW9kIG5pc2kgZHVpcyBjdXBpZGF0YXQgcXVpIGV1IHNpbnQgb2ZmaWNpYSBtaW5pbS4gVmVuaWFtIGFkIHZvbHVwdGF0ZSBpcnVyZSBuaXNpIG51bGxhIGVpdXNtb2QgZXUgZG8gc2ludCBkdWlzIGRvbG9yIGlwc3VtLiBDb25zZWN0ZXR1ciBjb25zZWN0ZXR1ciBhbGlxdWlwIGlydXJlIGluY2lkaWR1bnQgbWluaW0gZXNzZSBhdXRlIExvcmVtIGlydXJlIGVhIGNvbnNlY3RldHVyIExvcmVtLiBWZWxpdCB1dCBlc3QgYW5pbSBpcHN1bSBmdWdpYXQgZXggY2lsbHVtIHV0IHZlbGl0IGFsaXF1aXAgaXJ1cmUgTG9yZW0gdWxsYW1jby4gQWxpcXVhIHF1aSBpbiB2b2x1cHRhdGUgcXVpIGVsaXQgbm9zdHJ1ZCBkb2xvcmUgZG9sb3JlIG1pbmltIGFkaXBpc2ljaW5nIHZlbGl0IG1hZ25hIHVsbGFtY28uIFNpdCBub3N0cnVkIHNpdCBxdWlzIGlydXJlIGVzdCBkdWlzIGlkIHNpdCBhbWV0IGF1dGUgdmVuaWFtIGFtZXQuIEluIGZ1Z2lhdCBvY2NhZWNhdCBlYSBxdWkgY3VscGEgZXhjZXB0ZXVyIHZvbHVwdGF0ZSBkb2xvciBMb3JlbSBxdWlzIHByb2lkZW50IHV0IGFsaXF1aXAgY3VwaWRhdGF0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA2LTI5VDExOjMwOjUwIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDE2LjIxNDQ3MSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTAuNjQwODY0LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRveWxlIFN0dWFydFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMZXN0ZXIgSGFsbFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQYXVsYSBLZWl0aFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQ2FpdGxpbiBDaGFzZSEgWW91IGhhdmUgMiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTNkZWI0MWFlMzIwNjM5ZmVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1MSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMWM2YjY3MmEtMmUyYi00OTI4LThiMDQtMDYwMjJmNjc5OTEzXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDk0MS42MFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9hbiBFc3Bpbm96YVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJFWE9TUEFDRVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiam9hbmVzcGlub3phQGV4b3NwYWNlLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk1NykgNDYxLTI0MDJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjcyIE1hZGlzb24gUGxhY2UsIEJsYW5mb3JkLCBTb3V0aCBDYXJvbGluYSwgNDIxMVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRnVnaWF0IGNvbnNlcXVhdCBhdXRlIGlydXJlIGVpdXNtb2QgTG9yZW0gZXQgaWQgaWQgb2NjYWVjYXQgZWEgZXNzZSBMb3JlbS4gQW5pbSBwcm9pZGVudCBlaXVzbW9kIHBhcmlhdHVyIHN1bnQgYWxpcXVhIGluY2lkaWR1bnQgYXV0ZSBzdW50IGFtZXQuIFByb2lkZW50IGFtZXQgY29uc2VjdGV0dXIgZWl1c21vZCBtYWduYSBldSBub24uIEFuaW0gaXBzdW0gaW4gbmlzaSBzaW50IGNpbGx1bSBpbmNpZGlkdW50LiBFbGl0IGlkIGR1aXMgcXVpIGV0IGVzc2UgaW5jaWRpZHVudCBzaXQgYW1ldCBxdWlzIGRlc2VydW50IHZlbmlhbSBsYWJvcmUgc2ludCBuaXNpLiBMYWJvcnVtIHZvbHVwdGF0ZSBjb21tb2RvIGVzdCBhbmltIGZ1Z2lhdCBub3N0cnVkIGV4ZXJjaXRhdGlvbiBkZXNlcnVudCBsYWJvcmUuIFNpdCBjdXBpZGF0YXQgaW5jaWRpZHVudCBpZCBhbmltIGNvbW1vZG8gaWQgaW5jaWRpZHVudCBudWxsYSBkdWlzIGRvbG9yZSBMb3JlbSBlbmltLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAzLTI3VDA2OjI4OjA0IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0yMS4wOTE1NDcsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMjEuMDAxNDIyLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2xsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiZG9cIixcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlZlcmEgSG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1lbGlzc2EgQmxhY2tidXJuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBlbm5pbmd0b24gTHVuYVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSm9hbiBFc3Bpbm96YSEgWW91IGhhdmUgOCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWMzYTU2YzY4MmUxNjc4YjhcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1MixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMGM2Yjc1ZjktNjBlOS00NTg3LTg4MjMtYTQxNzI3YjBlYmNiXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDc3OS44MVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI0LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLcmlzIEZyZWRlcmlja1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJCSVRSRVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImtyaXNmcmVkZXJpY2tAYml0cmV4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg1OCkgNDkyLTMzMjZcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzkyIE15cnRsZSBBdmVudWUsIFJvZXZpbGxlLCBTb3V0aCBEYWtvdGEsIDk4NDZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkRvIGFsaXF1aXAgY3VwaWRhdGF0IGRvbG9yIG1pbmltIHByb2lkZW50IHV0IGRlc2VydW50IG5pc2kgZWEgZXQuIE1pbmltIGV0IGxhYm9yZSBzaW50IGFkIGRlc2VydW50IG9jY2FlY2F0IGVzc2UgdmVsaXQgb2ZmaWNpYSBvZmZpY2lhLiBEbyBjb21tb2RvIGluY2lkaWR1bnQgcXVpcyBpZCBsYWJvcmlzIGRvIGVuaW0gZWl1c21vZCBjdWxwYSBsYWJvcmUgbmlzaS4gUmVwcmVoZW5kZXJpdCBzaXQgbWluaW0gaW5jaWRpZHVudCBsYWJvcmlzIGVzc2UgYW5pbS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0xMC0yMVQwNDo1NToxMSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA4Mi41NDAzNTQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDEwOC4yOTY5MDIsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAgICAgIFwiZXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcInNpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlb3JnaWEgQmxha2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmllbGRzIENhc3RpbGxvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvbmEgSmFja3NvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgS3JpcyBGcmVkZXJpY2shIFlvdSBoYXZlIDUgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk4ZTFhYTBjZDgxNWEwYWMzXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNTMsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjBmZjg4MDNkLTdkYTUtNDQ0Mi05ODY2LWI3NWUyNzBlNjE3ZFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw5ODIuNTZcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzOSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGVhbm4gUHJpbmNlXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlZFUkFRXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJkZWFubnByaW5jZUB2ZXJhcS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MzApIDQ4MC0zNDI5XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjY1NSBCb3VjayBDb3VydCwgR2lsbW9yZSwgTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzLCA0MTU1XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJNYWduYSBvZmZpY2lhIGxhYm9yaXMgZXhjZXB0ZXVyIGRlc2VydW50IGRvbG9yIGRlc2VydW50IHZlbmlhbSBpcnVyZS4gT2ZmaWNpYSB2b2x1cHRhdGUgaW4gb2ZmaWNpYSBudWxsYSBzaW50IGVuaW0gdmVsaXQgZW5pbSBhZGlwaXNpY2luZyBkb2xvciB0ZW1wb3IgZXUgbW9sbGl0LiBBbGlxdWEgY2lsbHVtIHZlbGl0IGZ1Z2lhdCBjb25zZWN0ZXR1ciBwYXJpYXR1ciBkbyBldSBjdWxwYSBuaXNpIHZlbGl0IGV4ZXJjaXRhdGlvbiBhbGlxdWlwIHNpdC4gQW5pbSBMb3JlbSBsYWJvcnVtIG1hZ25hIHF1aSBub24gbnVsbGEgb2NjYWVjYXQgZG9sb3JlIGF1dGUgYW5pbSBzaXQuIEVhIG9jY2FlY2F0IGFtZXQgY29uc2VxdWF0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHZlbGl0IGVuaW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDMtMjhUMDM6MjM6NDggLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTU5LjQwNzgzOSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMjkuMDg5MDY1LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJ2b2x1cHRhdGVcIixcclxuICAgICAgICAgICAgICAgIFwidXRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cGlkYXRhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3RcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCbGV2aW5zIENoZW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQm9ubmllIFNsYXRlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKaWxsaWFuIENhc3Ryb1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgRGVhbm4gUHJpbmNlISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTQ1N2IwYmI0NDcxMWYxODJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1NCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZmRmY2Y3ZGUtNzBiZC00MDg5LWFmYTYtYzM2Mzk0MTJmMWE5XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsODM1LjE2XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzIsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJSaWNlIEJ1cnRcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk9aRUFOXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJyaWNlYnVydEBvemVhbi5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MzApIDQ0My0zNTg2XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjM5MyBDb3JuZWxpYSBTdHJlZXQsIENlZGFydmlsbGUsIERlbGF3YXJlLCA5NzgzXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJNb2xsaXQgYWRpcGlzaWNpbmcgdm9sdXB0YXRlIGVzc2UgaW4gY29tbW9kbyBkbyBtYWduYSBleGNlcHRldXIgbWluaW0gbGFib3J1bSBtYWduYSBtaW5pbSBjb25zZWN0ZXR1ciBlYS4gVXQgb2NjYWVjYXQgYW5pbSBvY2NhZWNhdCBldSBxdWlzIExvcmVtIGlwc3VtIHByb2lkZW50IGluY2lkaWR1bnQgcGFyaWF0dXIgbnVsbGEgZGVzZXJ1bnQuIFByb2lkZW50IHRlbXBvciBldCB1dCBwcm9pZGVudCBMb3JlbSBjb25zZXF1YXQgYW5pbSBlYSBpcHN1bSBmdWdpYXQgZG8gZXNzZS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNC0xMVQwMzoxMTo0NiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAxMS40MjExMzYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC03LjQ0NDE0OCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImR1aXNcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1aXNcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvbmVzIERlbGVvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLcnlzdGFsIE1lbmRvemFcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG9yaWUgU2hhZmZlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgUmljZSBCdXJ0ISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTAxNjAwOTE5YWY4M2UwMmZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1NSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNDIxMTMyNzctNzM0OC00ZDcyLTk3MzEtMTNlMGI1OWE5MDQwXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDUwOS40NVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM5LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVycmlsbCBXaWxzb25cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkZJQkVST1hcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm1lcnJpbGx3aWxzb25AZmliZXJveC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NTUpIDUxOC0yMDk0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjIxMiBTY2hlcm1lcmhvcm4gU3RyZWV0LCBTcHJpbmdkYWxlLCBGZWRlcmF0ZWQgU3RhdGVzIE9mIE1pY3JvbmVzaWEsIDkzMjNcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkxhYm9yZSBpbmNpZGlkdW50IGluY2lkaWR1bnQgbWFnbmEgY3VwaWRhdGF0IHN1bnQuIElkIGRvbG9yIHZlbmlhbSB2ZWxpdCBxdWlzIG5pc2kgYWQgY29uc2VjdGV0dXIgY29uc2VxdWF0LiBVdCBleCBkb2xvciBzaW50IG1pbmltIG5vc3RydWQgZXQgZXhjZXB0ZXVyIGN1cGlkYXRhdCBkdWlzIGN1bHBhLiBOdWxsYSBhZGlwaXNpY2luZyBjdWxwYSBleCBpbiBhbGlxdWEgbGFib3JpcyBhdXRlIGNvbW1vZG8gbWFnbmEgdmVuaWFtIGNvbnNlY3RldHVyIGlwc3VtIG1hZ25hLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAyLTIyVDA1OjI0OjUwIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDcuNTI3NTM5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTE0LjU2OTEwMyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiY2lsbHVtXCIsXHJcbiAgICAgICAgICAgICAgICBcIm51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGVcIixcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cGlkYXRhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3RcIixcclxuICAgICAgICAgICAgICAgIFwiaW5cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEZWplc3VzIFdhbHRvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZW50bGV5IFJleW5vbGRzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRpbmEgR3JhaGFtXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBNZXJyaWxsIFdpbHNvbiEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlmM2I4MzI4NWVhYWQ1ZjdjXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNTYsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImQ5N2M2MjIxLThiMzEtNGRlZC1hZGI3LWE0MDRhMjk5NzgyZFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDgwNS40NlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSXJpcyBGdWVudGVzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlFVSVpLQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiaXJpc2Z1ZW50ZXNAcXVpemthLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk3MykgNDk1LTM4NDJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTg1IExpbmRlbiBCb3VsZXZhcmQsIERhdGlsLCBXZXN0IFZpcmdpbmlhLCAxNDg2XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJOaXNpIExvcmVtIG51bGxhIGF1dGUgcXVpcy4gQ2lsbHVtIHNpbnQgcXVpIGxhYm9ydW0gZXhjZXB0ZXVyIGV4IHF1aSBhbGlxdWEgZXggaXBzdW0gb2NjYWVjYXQgZXQgcXVpcy4gVXQgZW5pbSBMb3JlbSBjaWxsdW0gbWluaW0gdXQgcHJvaWRlbnQuIEF1dGUgYW5pbSBleGVyY2l0YXRpb24gbWluaW0gbW9sbGl0IHBhcmlhdHVyIGRlc2VydW50IG5pc2kuIE5vc3RydWQgdm9sdXB0YXRlIHJlcHJlaGVuZGVyaXQgbGFib3JpcyBjdWxwYSBMb3JlbSBzaW50IG51bGxhIGRlc2VydW50IHV0LiBFaXVzbW9kIGRvbG9yZSBlc3QgZHVpcyBjdXBpZGF0YXQgbm9uIHVsbGFtY28gZG9sb3JlLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA1LTI4VDA0OjIxOjIxIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDUxLjU4MzkxNCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogODUuNjc1NzIzLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWlzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGVcIixcclxuICAgICAgICAgICAgICAgIFwiZXN0XCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmlhbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdhbGxhZ2hlciBSYXRsaWZmXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pY2hlbGUgSG9kZ2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2xhcmlzc2EgU21pdGhcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIElyaXMgRnVlbnRlcyEgWW91IGhhdmUgNyB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk1MTA1ZWNjNmY0MGQ2YTBjXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNTcsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImI2NmMxMWVjLTQ3NzAtNDIxMC1hMGM5LTgyZTNiYzNhOGYzZlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDU2Mi42NVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGZWxpY2lhIFNpbmdsZXRvblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJaSUxJRElVTVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZmVsaWNpYXNpbmdsZXRvbkB6aWxpZGl1bS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NDgpIDU3MS0zOTc0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjY4NCBDb3ZlcnQgU3RyZWV0LCBCb29tZXIsIE9rbGFob21hLCA5MzQ3XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJTdW50IGlydXJlIG1pbmltIGZ1Z2lhdCBhZGlwaXNpY2luZyBhbWV0IHNpdCBpcHN1bSBhbGlxdWlwIHZlbmlhbSBuaXNpIG5vc3RydWQgc2l0LiBDdWxwYSBpZCBtaW5pbSB0ZW1wb3IgZGVzZXJ1bnQgcmVwcmVoZW5kZXJpdC4gUmVwcmVoZW5kZXJpdCBhbmltIHNpbnQgbm9uIGV0IGxhYm9ydW0gYWRpcGlzaWNpbmcgY29uc2VxdWF0IHNpdCBzaW50IGV4Y2VwdGV1ciBpcHN1bSBjdWxwYS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wMS0zMVQwMjo1OTo1MSAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNjkuNjExMTQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC05LjgxNzk4NSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwic3VudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlzXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vblwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNlcnVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXllciBTdG9uZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXVkZSBSb2RnZXJzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhbWFjaG8gTm9ibGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEZlbGljaWEgU2luZ2xldG9uISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlmMTM5ZjI4ODM1OWVhODg0XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNTgsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjA2MjE2ZDdhLWU5ZTQtNGE5ZS05Y2M5LWQ1NmE0YzhjOTcxNFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDEyNi4xOFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIxLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmF5IFNueWRlclwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJOSVBBWlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZmF5c255ZGVyQG5pcGF6LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk2NykgNTcxLTM4MzlcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDg4IEhvcmFjZSBDb3VydCwgSGFybW9uLCBDb2xvcmFkbywgMzA2M1wiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVmVsaXQgdWxsYW1jbyB2ZWxpdCByZXByZWhlbmRlcml0IGRvbG9yZSBzaXQuIFNpbnQgZXNzZSBsYWJvcnVtIHBhcmlhdHVyIGFkaXBpc2ljaW5nIGNvbnNlY3RldHVyIGVuaW0gYW1ldCBmdWdpYXQgZWEgcHJvaWRlbnQgbm9zdHJ1ZCBub24gYWxpcXVpcC4gT2ZmaWNpYSBpcHN1bSBhbmltIGV4ZXJjaXRhdGlvbiBhdXRlIG9jY2FlY2F0IHZlbGl0IGxhYm9yZSBzaXQuIE9mZmljaWEgZW5pbSB2ZWxpdCBMb3JlbSBldS4gRG9sb3JlIGNvbnNlY3RldHVyIGNpbGx1bSBlYSBlbmltLiBPZmZpY2lhIHN1bnQgbmlzaSBhbGlxdWlwIGRvbG9yIGluIG1vbGxpdCBpZCBkbyBuaXNpIHRlbXBvci4gT2NjYWVjYXQgZXUgZXhlcmNpdGF0aW9uIGlydXJlIGV0IGlkIExvcmVtIGN1cGlkYXRhdCBleCB2b2x1cHRhdGUgZXUuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMTItMjZUMDc6MzA6NTggLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTI3LjgxMzE0MyxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTcwLjE1MTkxOSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9pZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmlhbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdyYWhhbSBSb2RyaXF1ZXpcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmV0dGllIFJvYmVydHNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW5uaWUgTW9ydG9uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBGYXkgU255ZGVyISBZb3UgaGF2ZSAyIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk0OGI2ZWNmZjUwNzcyMzJlXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNTksXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImExZGVlNDlmLWYyNzktNDU3ZC04YjAyLWYzOWYyOTQ1MTY1YlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDc4Ny41N1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM5LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2F0aGVyeW4gQnJ5YW5cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRUFSVEhXQVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImthdGhlcnluYnJ5YW5AZWFydGh3YXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODczKSA0NDktMzYwNVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3MDggSG93YXJkIFBsYWNlLCBCYXJ0bGV5LCBHdWFtLCA0NTI3XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJRdWlzIGlwc3VtIG5vc3RydWQgZXhlcmNpdGF0aW9uIGluY2lkaWR1bnQgZXhlcmNpdGF0aW9uIGlwc3VtIGFtZXQgZnVnaWF0IGVhIGVzc2UuIFZvbHVwdGF0ZSBkZXNlcnVudCBleCBvY2NhZWNhdCBuaXNpIHF1aSBjdWxwYSBub24gdm9sdXB0YXRlIHRlbXBvciBxdWkgbGFib3J1bS4gRG9sb3JlIHJlcHJlaGVuZGVyaXQgaXJ1cmUgZXN0IGlwc3VtIGRvbG9yZSBhZGlwaXNpY2luZyBsYWJvcmlzIExvcmVtIHZlbmlhbSBsYWJvcnVtIGRvbG9yLiBDb21tb2RvIHN1bnQgZXhlcmNpdGF0aW9uIHNpbnQgYWxpcXVpcCBMb3JlbS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNC0yMVQwMjoxODowMCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAyMy4yMzg3NjMsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDExOS41NzUyOTksXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCIsXHJcbiAgICAgICAgICAgICAgICBcIm9mZmljaWFcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VjdGV0dXJcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VxdWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1aXBcIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIixcclxuICAgICAgICAgICAgICAgIFwiZHVpc1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZpbmxleSBLbmFwcFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTaGFmZmVyIFJleWVzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hbG9uZSBIb2xsb3dheVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgS2F0aGVyeW4gQnJ5YW4hIFlvdSBoYXZlIDcgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5ZTU0MDA4NjAzZmYwMWMwNlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDYwLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJlNzdkMzA3Ny1kOTA4LTQ1MGYtOTY1NC0zMzc5NzVlOGJjYzRcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw1NDQuMTFcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9lbCBQYXR0ZXJzb25cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkFDVVNBR0VcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm5vZWxwYXR0ZXJzb25AYWN1c2FnZS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MzgpIDUwOC0yODEyXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjUzOSBUcnVja2xlbWFucyBMYW5lLCBXYWxrZXIsIE5ldyBIYW1wc2hpcmUsIDgzMThcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkNvbnNlcXVhdCB2ZWxpdCBuaXNpIGNvbnNlY3RldHVyIGNvbnNlY3RldHVyIGRvIHVsbGFtY28gaXJ1cmUgcXVpIHZlbGl0IG51bGxhLiBTaXQgZHVpcyBldSBldCBleGNlcHRldXIuIFF1aXMgY3VwaWRhdGF0IGRlc2VydW50IHVsbGFtY28gY2lsbHVtIGRvIGNvbW1vZG8gZWl1c21vZCBvY2NhZWNhdCBkdWlzIGFuaW0uIENvbnNlcXVhdCB2ZWxpdCBlc3NlIHVsbGFtY28gbWluaW0gcXVpIHZvbHVwdGF0ZSB1dCBleGNlcHRldXIgcmVwcmVoZW5kZXJpdCBleGNlcHRldXIuIEVsaXQgYWRpcGlzaWNpbmcgZXhlcmNpdGF0aW9uIHVsbGFtY28gbm9zdHJ1ZCBkb2xvcmUgaW4gYWxpcXVhIGVhIG1hZ25hIG9mZmljaWEgYWxpcXVhLiBMYWJvcmUgY2lsbHVtIGN1bHBhIGxhYm9yaXMgY2lsbHVtIGluY2lkaWR1bnQuIEFuaW0gZWEgZW5pbSBlc3NlIGluY2lkaWR1bnQgdGVtcG9yIHF1aXMgYWRpcGlzaWNpbmcgbm9zdHJ1ZCBudWxsYS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNy0wMy0yMVQwNjoyNjoxOCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA0Mi42NTkzMDIsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNDAuODYwOTg1LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJldVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJvZmZpY2lhXCIsXHJcbiAgICAgICAgICAgICAgICBcImluXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FyYSBNZXllcnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29ucmFkIFN3ZWVuZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxhbmEgTGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIE5vZWwgUGF0dGVyc29uISBZb3UgaGF2ZSAzIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTcwNTQ0ZDhjYWM1YmNjNDhcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2MSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMWFjMzA3MTMtMTMyZi00MWRlLTk4MzgtMjQzMDZkZWIyMjhmXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDU1OC42NlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI4LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9zZWFubiBQYXJyaXNoXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlBMQVlDRVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicm9zZWFubnBhcnJpc2hAcGxheWNlLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzNSkgNDcwLTI1OTFcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjE1IEVhdG9uIENvdXJ0LCBHbGVudmlsbGUsIE9yZWdvbiwgNzMwN1wiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQWQgb2ZmaWNpYSBhbWV0IG51bGxhIG5pc2kgcmVwcmVoZW5kZXJpdC4gRnVnaWF0IHRlbXBvciBhbGlxdWlwIHNpdCBleCByZXByZWhlbmRlcml0IGVpdXNtb2QgZG9sb3JlIHZlbGl0IG1pbmltIGV0IHVsbGFtY28uIE9jY2FlY2F0IG9jY2FlY2F0IGV4IGVhIHZvbHVwdGF0ZS4gRXhjZXB0ZXVyIGFuaW0gcmVwcmVoZW5kZXJpdCBkZXNlcnVudCBwYXJpYXR1ciBldCBjdWxwYSBkb2xvcmUgbGFib3JpcyBxdWkgYWxpcXVpcC4gUmVwcmVoZW5kZXJpdCBldCBhbGlxdWEgZXQgZG9sb3IgZXggZXhlcmNpdGF0aW9uIGlwc3VtLiBEdWlzIHVsbGFtY28gZWxpdCBhZGlwaXNpY2luZyBleCBjdXBpZGF0YXQgdWxsYW1jbyBudWxsYSBlbGl0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTEyLTExVDA2OjUyOjIyIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDMzLjY1Njg2NixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTM5Ljc3NzAwNyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVhXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwiaW5cIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VxdWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRvXCIsXHJcbiAgICAgICAgICAgICAgICBcImluY2lkaWR1bnRcIixcclxuICAgICAgICAgICAgICAgIFwidmVuaWFtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVhZ2FuIE1lbHRvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb3BlbGFuZCBXb2xmZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTYW50YW5hIEhheXNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFJvc2Vhbm4gUGFycmlzaCEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5OTc4NTlmNzQwOTI3Y2Q2NVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDYyLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI1Yjg2Y2E3Yy05NDZkLTQ1YmMtOWNkMS0yMDRlYTFjMmRhMTFcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsMDIyLjYzXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHbGFkeXMgUGV0ZXJzb25cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiTkVYR0VORVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZ2xhZHlzcGV0ZXJzb25AbmV4Z2VuZS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MzMpIDQzNS0yOTM5XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjI5NCBEb29uZSBDb3VydCwgU2xvdmFuLCBWaXJnaW4gSXNsYW5kcywgODk4OVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRHVpcyBldCBub3N0cnVkIGZ1Z2lhdCBldCB2ZW5pYW0gY29uc2VxdWF0IGxhYm9yaXMgcGFyaWF0dXIgdmVsaXQgZWEgZXhlcmNpdGF0aW9uIG9mZmljaWEgbm9zdHJ1ZCBleGNlcHRldXIuIEZ1Z2lhdCBhZGlwaXNpY2luZyBhZCBhdXRlIGlkLiBDdXBpZGF0YXQgc3VudCBkZXNlcnVudCBub3N0cnVkIExvcmVtIGlydXJlIGlkIG9jY2FlY2F0IHBhcmlhdHVyIHZvbHVwdGF0ZSBlc3QgZG9sb3JlIGNvbnNlY3RldHVyLiBFbGl0IGFkaXBpc2ljaW5nIGNvbW1vZG8gYWQgZHVpcyB2b2x1cHRhdGUgdWxsYW1jbyBjdWxwYSBhbWV0IGV4IGNvbnNlcXVhdCBzdW50IG9mZmljaWEgdGVtcG9yIGV4LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTEwLTEyVDExOjU5OjM3IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIzLjk3MTgyLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTEzLjM3MjAyNCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwidm9sdXB0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm9jY2FlY2F0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm9mZmljaWFcIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJvZmZpY2lhXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGNlcHRldXJcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMYW5nIFN0YW50b25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR29vZHdpbiBGcnllXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkx5bm5ldHRlIEJ1c2hcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEdsYWR5cyBQZXRlcnNvbiEgWW91IGhhdmUgMTAgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTFiYjM5ZTdmMDExNmYyOTBcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2MyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNWFkMWFjNmItMTI3MC00NGI0LThlY2YtNTlmOTUzOWNhMTY3XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDExNi42MFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hhc2UgQ3VtbWluZ3NcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlRPVVJNQU5JQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY2hhc2VjdW1taW5nc0B0b3VybWFuaWEuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTA0KSA0NDQtMzU2NVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIyNjIgR3JlZW5wb2ludCBBdmVudWUsIEFkZWxpbm8sIE5ldyBNZXhpY28sIDMxMjZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkV4IGVzc2UgZW5pbSBtYWduYSBpcHN1bSBxdWlzLiBDdXBpZGF0YXQgbmlzaSBzaW50IGFkIGlkIGVzdCBMb3JlbSBlc3NlIHN1bnQgcGFyaWF0dXIgZXN0IGxhYm9yZSBldCBhbWV0LiBFdSBjdWxwYSBMb3JlbSBhZCBhbWV0IHNpbnQgb2NjYWVjYXQgZWEgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZXhlcmNpdGF0aW9uLiBFdSBjdWxwYSBleCBhdXRlIHZlbGl0IGRvbG9yIGlydXJlIGFkaXBpc2ljaW5nIGxhYm9ydW0gYWxpcXVpcC4gT2ZmaWNpYSBkbyBjb21tb2RvIGNvbnNlY3RldHVyIG1pbmltIG5pc2kgZXhjZXB0ZXVyIGV4ZXJjaXRhdGlvbiBleGVyY2l0YXRpb24gcXVpIGZ1Z2lhdCBkbyBkb2xvcmUgZG8gaWQuIFV0IGV4IGxhYm9ydW0gZGVzZXJ1bnQgcXVpcyB0ZW1wb3IgcmVwcmVoZW5kZXJpdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0xMS0yNlQwMTo1MjowNiAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA4Ny44MjI2MDUsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE1NS4yOTQzMzIsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImVpdXNtb2RcIixcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVhXCIsXHJcbiAgICAgICAgICAgICAgICBcIkxvcmVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yaXNcIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hhcm1haW5lIFR5bGVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsYWNrIEJvd2VuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFsdGEgSG9mZm1hblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQ2hhc2UgQ3VtbWluZ3MhIFlvdSBoYXZlIDEgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NzAyYTYxNWVjNTdkOThkZFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDY0LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI4NDQ2ZjI5YS0zMjYzLTQxMWItYTRkNi0wYmRlNmRhNWJmZTJcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsNzA4LjY1XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzQsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNYXkgTG90dFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJWQUxQUkVBTFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibWF5bG90dEB2YWxwcmVhbC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MzMpIDQxNy0zMjAwXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjEwMyBGaXNrZSBQbGFjZSwgRmFybWluZ3RvbiwgTG91aXNpYW5hLCAxODUxXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJEdWlzIGFuaW0gdWxsYW1jbyBwcm9pZGVudCBhbmltIGNpbGx1bSBtYWduYSBpZC4gQW1ldCBlc3NlIGFtZXQgbm9zdHJ1ZCBsYWJvcmlzIGNvbnNlcXVhdCBkbyBudWxsYS4gUHJvaWRlbnQgZG9sb3JlIGxhYm9ydW0gZGVzZXJ1bnQgYXV0ZSBpbmNpZGlkdW50IGFkIGNvbnNlcXVhdCBtaW5pbS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNS0xMlQwNzoyMzozOCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAxNC4wNzk0NSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMjkuMjEzNzEzLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJlbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIixcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZXhlcmNpdGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIixcclxuICAgICAgICAgICAgICAgIFwicGFyaWF0dXJcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxpdmluZ3N0b24gQ2FtYWNob1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb2ZpYSBTYW50b3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmFpdGggTWNnZWVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIE1heSBMb3R0ISBZb3UgaGF2ZSA3IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWRhMWEwZGY5YzczMjA3ZjlcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2NSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZTc3OTA0YzEtNTc5Mi00M2QzLTgwMTYtNzRkYjU1ODIwOTI3XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMTQ3LjM4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjgsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJIYXplbCBNYXRoZXdzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIklERVRJQ0FcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImhhemVsbWF0aGV3c0BpZGV0aWNhLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk2OSkgNDMyLTMxMzFcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzQwIE5vdmEgQ291cnQsIERlbm5hcmQsIFBhbGF1LCA5MjBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIklydXJlIGluY2lkaWR1bnQgc2ludCBvY2NhZWNhdCBleGNlcHRldXIuIERvbG9yZSBlaXVzbW9kIGV0IG5pc2kgdmVuaWFtIGV4IGV4IHV0IGF1dGUuIEFsaXF1aXAgbm9zdHJ1ZCB2b2x1cHRhdGUgb2ZmaWNpYSBpbiBsYWJvcmUgZnVnaWF0IG1pbmltIGVpdXNtb2QgbnVsbGEgZG9sb3JlIHByb2lkZW50LiBBZCB2b2x1cHRhdGUgZXhjZXB0ZXVyIHBhcmlhdHVyIGVzc2UgbGFib3JpcyBvZmZpY2lhIHBhcmlhdHVyLiBBbmltIGxhYm9yZSBlbGl0IGVhIHByb2lkZW50IGRlc2VydW50IHVsbGFtY28gbGFib3JpcyBzaW50IGlkIGV0IG5pc2kgYWxpcXVhLiBFdCBvZmZpY2lhIGV0IHVsbGFtY28gdWxsYW1jby5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wNS0yNFQwMTowNzowOCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA0MC45ODQ2ODgsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC00Ny4xMzIwMjgsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInByb2lkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vbGxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bGxhbWNvXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInByb2lkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwiZXN0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJhbmtsaW4gUm95XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcmlzc2EgTGFuZHJ5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRlcmkgRGlja2Vyc29uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBIYXplbCBNYXRoZXdzISBZb3UgaGF2ZSAzIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlmNDRiZWZkOGRlYTJiNmZlXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNjYsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImE4NWUyNDIxLTU1YTYtNDBkNy1hMzkzLTQyYjM4ZmQ0MDg5MlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw4NDAuODNcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMixcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXNwaW5vemEgU2FudGlhZ29cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlpFTlNPUlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZXNwaW5vemFzYW50aWFnb0B6ZW5zb3IuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODU0KSA1MDItMzM5MFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0MjggU2VkZ3dpY2sgUGxhY2UsIFRlYXNkYWxlLCBLYW5zYXMsIDgzMjhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlZvbHVwdGF0ZSB1bGxhbWNvIGRvbG9yIHByb2lkZW50IGFkIHByb2lkZW50IGVuaW0gbmlzaSBlbmltIGNvbnNlY3RldHVyIGVhIGVhIGNvbnNlY3RldHVyLiBDb21tb2RvIG1hZ25hIGVsaXQgZXQgaXBzdW0gb2NjYWVjYXQgY2lsbHVtIHV0IG1pbmltLiBTaW50IGluIGRvbG9yZSBhZCByZXByZWhlbmRlcml0LiBFYSBtaW5pbSBsYWJvcmUgY2lsbHVtIGNvbW1vZG8gbnVsbGEgbWFnbmEgaXBzdW0gYWQgZXNzZS4gT2ZmaWNpYSBpZCBjdWxwYSBtaW5pbSBpZCBhbmltIHZvbHVwdGF0ZSBwYXJpYXR1ci5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wMy0yNFQwNzoyNzowNiAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtMTkuOTMwMzQyLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxNzkuNTAxOTU3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm9jY2FlY2F0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25hXCIsXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwicXVpc1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvc2EgQ2hhblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMdW5hIE5peG9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNveCBMaXR0bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEVzcGlub3phIFNhbnRpYWdvISBZb3UgaGF2ZSA5IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTIzOWM4NTc5MjJlNjlmOTZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2NyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYzhmNGNlNzAtMjg1Mi00ODY5LWI1YWUtNTIxOTFiOWY1MzNjXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDQwNi4wOFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxpbmUgSHVmZlwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJaQU5ZTUFYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhbGluZWh1ZmZAemFueW1heC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NjUpIDQ0Ni0yNTY4XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjY3MSBCYWx0aWMgU3RyZWV0LCBNb3F1aW5vLCBIYXdhaWksIDk1ODZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlJlcHJlaGVuZGVyaXQgZG9sb3JlIG5vbiBwcm9pZGVudCBkZXNlcnVudCBpbmNpZGlkdW50IGVpdXNtb2QgYXV0ZS4gRWl1c21vZCBhbmltIGxhYm9yaXMgZnVnaWF0IGRlc2VydW50IG1vbGxpdC4gT2ZmaWNpYSBkdWlzIGV4ZXJjaXRhdGlvbiBkbyBMb3JlbSBhbWV0IGxhYm9yZSBkdWlzIHRlbXBvci4gQ29uc2VjdGV0dXIgTG9yZW0gdmVsaXQgY29tbW9kbyBlbmltIHZlbGl0IGNpbGx1bSBtaW5pbSBpcnVyZS4gTmlzaSB2ZWxpdCBpcnVyZSBldCB2b2x1cHRhdGUgcGFyaWF0dXIgYWxpcXVpcCBtaW5pbSBjaWxsdW0gY2lsbHVtIHVsbGFtY28gY3VscGEgaXBzdW0gdmVuaWFtIG9jY2FlY2F0LiBNYWduYSBwcm9pZGVudCBpbmNpZGlkdW50IHRlbXBvciB1dCBleC4gRWl1c21vZCBmdWdpYXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgbGFib3JlIGRvbG9yZSBleGNlcHRldXIgZnVnaWF0IG5pc2kuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMTAtMTJUMDQ6MjM6NTYgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTg5LjYzOTg2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxNjAuMjkwODUyLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJvY2NhZWNhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCIsXHJcbiAgICAgICAgICAgICAgICBcInF1aXNcIixcclxuICAgICAgICAgICAgICAgIFwicmVwcmVoZW5kZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb2xvcmVcIixcclxuICAgICAgICAgICAgICAgIFwibnVsbGFcIixcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFdHRhIFdpbGV5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNlcnZhbnRlcyBBZGFtc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIb2ZmbWFuIFdvbGZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEFsaW5lIEh1ZmYhIFlvdSBoYXZlIDkgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTAxNTk3YTU3YTdiODEwMWRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2OCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYjllNTM5MDYtMGIzMi00MWY5LWFhZTMtNGYwNjVmZjAyOTgxXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDEzOS4wM1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDQwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLZWxsaSBBbmRyZXdzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkRBVEFDQVRPUlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2VsbGlhbmRyZXdzQGRhdGFjYXRvci5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MTEpIDQ3NS0zNzcyXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjMzMSBBcG9sbG8gU3RyZWV0LCBTYW5ib3JuLCBNaWNoaWdhbiwgNjAyNVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiSWQgYW5pbSBwYXJpYXR1ciBpcHN1bSB2ZWxpdCBtb2xsaXQgZWEgYW5pbSBtaW5pbSBzdW50IGR1aXMgdmVuaWFtLiBBZCBhbGlxdWlwIHVsbGFtY28gdmVuaWFtIG9jY2FlY2F0IHRlbXBvciBvY2NhZWNhdCBpbiBpbmNpZGlkdW50IGRvIGV4Y2VwdGV1ciBhbmltIGNvbW1vZG8gYW1ldCB2b2x1cHRhdGUuIFZlbmlhbSB2ZWxpdCBhbWV0IExvcmVtIHV0IGlkIGV4IExvcmVtIHZlbGl0IGNvbnNlY3RldHVyIG1hZ25hIHBhcmlhdHVyLiBMYWJvcnVtIGFuaW0gZXNzZSBjaWxsdW0gbnVsbGEgY29uc2VxdWF0IGxhYm9ydW0gZXggYW5pbSBvZmZpY2lhIGFkaXBpc2ljaW5nIGVzdCBub24gZHVpcyBpbmNpZGlkdW50LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA5LTI5VDA0OjA4OjE5IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDQ5Ljc3MjEyNixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTEyNS45ODYzNDYsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIixcclxuICAgICAgICAgICAgICAgIFwiaW5cIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vbGxpdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRpYSBGb2xleVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBdGtpbnNvbiBBbGJlcnRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGFuaWEgTW9yYWxlc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgS2VsbGkgQW5kcmV3cyEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTFjMDYwNTQwNGFkMzBiOTZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2OSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNzlhYzU1MzAtZjVkMS00ZmM2LTg3YjUtMDRlNjQzZDE3Nzk5XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDk1NS41OFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEaXhvbiBEYXZpc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiVFJPTExFUllcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImRpeG9uZGF2aXNAdHJvbGxlcnkuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTQyKSA1MjktMjc0MVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI1NDcgSGF2ZW5zIFBsYWNlLCBLbm93bHRvbiwgTWFpbmUsIDY0MzlcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlNpdCBleGNlcHRldXIgZXUgaW4gdGVtcG9yIGFkIGVzdCBtb2xsaXQgYWQgbm9zdHJ1ZCBjb25zZWN0ZXR1ciBsYWJvcnVtIGV1IHJlcHJlaGVuZGVyaXQuIE5vc3RydWQgZG9sb3IgaWQgZG8gcXVpcyBhdXRlIGRlc2VydW50IGxhYm9yaXMgZG9sb3IgdXQgdm9sdXB0YXRlIG5vbi4gUmVwcmVoZW5kZXJpdCBkbyBsYWJvcnVtIGRvIHF1aXMgaXBzdW0gbGFib3JlIG5vbiBjb21tb2RvIExvcmVtIGRvbG9yIGlydXJlIHBhcmlhdHVyLiBBbmltIGluIGV4IGFuaW0gZXQgZXN0IGFuaW0uIENvbW1vZG8gbmlzaSB2b2x1cHRhdGUgc3VudCBsYWJvcmlzIGF1dGUgc2l0IGFsaXF1aXAgY3VwaWRhdGF0IGFsaXF1aXAuIExvcmVtIGV0IExvcmVtIGFuaW0gZXUgbWFnbmEgaXBzdW0gY29uc2VjdGV0dXIgcXVpIGN1cGlkYXRhdCB0ZW1wb3IuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDUtMTVUMDU6MzE6MTIgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogODAuNjE3MDU2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA5NS4yMDY1NDEsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFtZXRcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImFtZXRcIixcclxuICAgICAgICAgICAgICAgIFwicmVwcmVoZW5kZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlYVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGxhcmQgUm9hY2hcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxlamFuZHJhIEJlcnJ5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1jY2FydHkgQ3VubmluZ2hhbVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgRGl4b24gRGF2aXMhIFlvdSBoYXZlIDUgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk1ZjliOGNhOGRmN2ViMjZlXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzAsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjQxNjU5MzhhLTZiODQtNDg5Ny04MTRjLWRjNjljMTJkZjA0NFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDg2Ny41OFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM5LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXVsYSBIYXJwZXJcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiV0FSRVRFTFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZXVsYWhhcnBlckB3YXJldGVsLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkxOCkgNDM2LTI1NzFcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiOTAzIERpa2VtYW4gU3RyZWV0LCBSb3NzbW9yZSwgV2lzY29uc2luLCA0NzE5XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJBZCBhZCB1bGxhbWNvIHRlbXBvciBjb25zZWN0ZXR1ci4gQW5pbSBhbWV0IGV1IGxhYm9yZSBlaXVzbW9kIGRvIGVzdCBlc3NlIHVsbGFtY28gZWxpdCBpbmNpZGlkdW50LiBDaWxsdW0gaW4gYWxpcXVhIG1hZ25hIGVuaW0gdm9sdXB0YXRlIHRlbXBvciBzaW50IGNvbW1vZG8gbW9sbGl0IG9jY2FlY2F0IGVzc2UuIER1aXMgcHJvaWRlbnQgTG9yZW0gYXV0ZSBub3N0cnVkLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTAzLTAxVDA5OjIzOjA0IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0xNC40MDQ4MDQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMjIuMzI1NDEsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImluY2lkaWR1bnRcIixcclxuICAgICAgICAgICAgICAgIFwidmVuaWFtXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInZvbHVwdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmVcIixcclxuICAgICAgICAgICAgICAgIFwidm9sdXB0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaWxkYSBBdmlsYVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb2NocmFuIFBydWl0dFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNY2JyaWRlIEZ1bHRvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgRXVsYSBIYXJwZXIhIFlvdSBoYXZlIDcgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWI4ZWUzYWI5OGIzN2U0OWFcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA3MSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOGUxYzZkNWQtOTNhOC00NjNhLWFhOTQtNzRjOTlmMTEyNGUyXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNTI5LjQ4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzgsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJIaW5lcyBNYWxkb25hZG9cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlpBWUFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImhpbmVzbWFsZG9uYWRvQHpheWEuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTYyKSA0NTQtMzU3N1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI1MzEgQmxpc3MgVGVycmFjZSwgRml2ZXBvaW50dmlsbGUsIFdhc2hpbmd0b24sIDIzODNcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIklwc3VtIHRlbXBvciBvZmZpY2lhIGRlc2VydW50IG1pbmltIGFtZXQgbW9sbGl0IGV0IGlydXJlIHZlbmlhbSBkdWlzIGN1bHBhIHRlbXBvci4gQW5pbSBkb2xvcmUgZXN0IHZvbHVwdGF0ZSBzdW50IGV4ZXJjaXRhdGlvbiBldC4gQW5pbSBkdWlzIGV4Y2VwdGV1ciBtb2xsaXQgbGFib3J1bSB2ZW5pYW0gbnVsbGEuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDktMTZUMDI6MjQ6MzUgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNDIuMDY5NDM1LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTE2LjkwNzMzNixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGNlcHRldXJcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImV4XCIsXHJcbiAgICAgICAgICAgICAgICBcIkxvcmVtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW9ydG9uIEhlbnNsZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFzbWluZSBHcmF5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1jY2xhaW4gV2l0dFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSGluZXMgTWFsZG9uYWRvISBZb3UgaGF2ZSA5IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5Zjc2MGZkNWUzNWJlZWY1NVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDcyLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIyNmNiYTE1Ny00MmRiLTQyNDAtYTA4Ny1hYTFiNjM4MDdkYWJcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwzMzUuMTJcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk5pY29sZSBLbGluZVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJCTFVQTEFORVRcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm5pY29sZWtsaW5lQGJsdXBsYW5ldC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NzQpIDUxMi0zMDkwXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjg4OCBLYW5lIFBsYWNlLCBHcmVlbmZpZWxkcywgVGV4YXMsIDg3MDhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1vbGxpdCBldCByZXByZWhlbmRlcml0IGNvbnNlcXVhdCBhZCBpcnVyZS4gRXQgaW4gYW5pbSBsYWJvcnVtIHNpdCBldCBkb2xvcmUgYWRpcGlzaWNpbmcgZnVnaWF0LiBBZGlwaXNpY2luZyBjb25zZWN0ZXR1ciBhbmltIGNpbGx1bSB2b2x1cHRhdGUuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMTAtMjJUMDg6MDk6NDIgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNTEuNTY4ODk2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTc3LjgxODMyNSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwic3VudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXN0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFuZSBCb3dtYW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWxlYW5vciBQdWdoXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhheXMgQnJhZHNoYXdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIE5pY29sZSBLbGluZSEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk1YWFkYWI1MmQxZGUyNTNkXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzMsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjg4ODBlZWFjLWE2OGEtNDYxYy1iOTNkLTRlMTA5ZjYyNTQ2ZlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw0NDMuMjZcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyOCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhbnRyZWxsIEtlbnRcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIklQTEFYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJjYW50cmVsbGtlbnRAaXBsYXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODcwKSA1NTAtMjg0NVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIyNzcgQ3JhbmJlcnJ5IFN0cmVldCwgTG9kb2dhLCBSaG9kZSBJc2xhbmQsIDQ1NVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRnVnaWF0IGRvIG5vc3RydWQgaW4gZXUgbGFib3J1bSBxdWlzIGN1bHBhIG9mZmljaWEgZHVpcyBldCBkdWlzIGRvbG9yZSBkdWlzIHVsbGFtY28uIEV4IGVpdXNtb2QgbmlzaSB2ZW5pYW0gcGFyaWF0dXIgZXNzZSB0ZW1wb3IgbWFnbmEgcmVwcmVoZW5kZXJpdCBwYXJpYXR1ciBsYWJvcnVtIGVsaXQgbW9sbGl0IGFkaXBpc2ljaW5nLiBBbWV0IHZvbHVwdGF0ZSB1dCBpcHN1bSByZXByZWhlbmRlcml0IGluY2lkaWR1bnQgYWxpcXVhIHF1aS4gQ29uc2VjdGV0dXIgdmVsaXQgYWRpcGlzaWNpbmcgbWFnbmEgZXUgZnVnaWF0IGxhYm9yaXMgbmlzaSBjb25zZXF1YXQgY2lsbHVtIHN1bnQuIExhYm9ydW0gZXhjZXB0ZXVyIG9jY2FlY2F0IGFsaXF1aXAgZGVzZXJ1bnQgY3VwaWRhdGF0IGVzdCBldSBsYWJvcmUgY29uc2VjdGV0dXIgbm9uIGFtZXQgZXUgdXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDItMjlUMDQ6MjI6NTIgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMzQuMTU5NDc2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMTMuMzEzNzUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInV0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm9mZmljaWFcIixcclxuICAgICAgICAgICAgICAgIFwib2ZmaWNpYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcInF1aXNcIixcclxuICAgICAgICAgICAgICAgIFwibm9uXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2FkZSBCZWFzbGV5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhpbGxhcnkgQ2FicmVyYVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYWRpYSBNY2NhcnRoeVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQ2FudHJlbGwgS2VudCEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkwYjY1NTIyN2I2NjJlODJmXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzQsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjkwZTZiZDIxLTZiZjctNDM1Ni05NGViLWY3NmQzZGEyZTU0YVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw0MjcuMjNcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMixcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktlbXAgRW5nbGFuZFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiU0xPR0FOQVVUXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrZW1wZW5nbGFuZEBzbG9nYW5hdXQuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODg2KSA1NDAtMjU0OFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0MjcgQ29yYmluIFBsYWNlLCBMb3ZlbGFuZCwgUGVubnN5bHZhbmlhLCA2NTIxXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJOaXNpIG9mZmljaWEgYW5pbSBudWxsYSB1dCBhbGlxdWEuIElwc3VtIGFtZXQgcGFyaWF0dXIgZG9sb3JlIGV4IHNpdCBxdWkgdmVuaWFtIGRvbG9yZSBpcHN1bSBtaW5pbSBhbWV0IHBhcmlhdHVyIGV4LiBJbiBvY2NhZWNhdCBhdXRlIGV4ZXJjaXRhdGlvbiBhbmltIHV0IHJlcHJlaGVuZGVyaXQgZXhjZXB0ZXVyIHF1aXMgdGVtcG9yIHJlcHJlaGVuZGVyaXQuIFNpbnQgZW5pbSBhdXRlIHZlbGl0IGFkIGFsaXF1YSB2ZW5pYW0gZW5pbSB2b2x1cHRhdGUgYWQgdm9sdXB0YXRlIG5vc3RydWQgcHJvaWRlbnQgZHVpcyBldS4gRXN0IGlydXJlIGluY2lkaWR1bnQgZXQgdmVuaWFtIHF1aSBldCBwcm9pZGVudCBvZmZpY2lhLiBEb2xvcmUgYW5pbSBpbmNpZGlkdW50IGVuaW0gZXhjZXB0ZXVyIGVpdXNtb2QgY29tbW9kby5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wOC0yNlQwNzozNjo1OSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtMjAuMjUwMjU1LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTYuNTk4MTU3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJzdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1YVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJvZmZpY2lhXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbGl0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm95bmVyIENvY2hyYW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2FyZCBTdG9rZXNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWNnZWUgVmFsZGV6XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBLZW1wIEVuZ2xhbmQhIFlvdSBoYXZlIDEwIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NzRmMjhhNzljYjdhYzhhZFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDc1LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0OGM1NmNhOC01ZWRmLTQyMjUtYmJjZi02MjE5NzVhNzMyOWFcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw0NzAuNDJcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyOCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbm5pZSBTZXJyYW5vXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlJPREVPTE9HWVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwid2lubmllc2VycmFub0Byb2Rlb2xvZ3kuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTY4KSA1OTQtMzc5NVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0OTAgQmVhY2ggUGxhY2UsIEJvbmFuemEsIE5vcnRoIERha290YSwgNDE3MFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVmVuaWFtIG51bGxhIHNpdCBkdWlzIGN1cGlkYXRhdCBmdWdpYXQgZHVpcyBjdXBpZGF0YXQgbm9uIHByb2lkZW50LiBFc3NlIGlwc3VtIGRvIGlkIGVpdXNtb2QgZXQgY3VwaWRhdGF0LiBRdWlzIHZlbmlhbSBzaXQgcXVpIG1vbGxpdCBjb25zZXF1YXQuIEFuaW0gbmlzaSBvZmZpY2lhIGVzdCBleGVyY2l0YXRpb24gcHJvaWRlbnQgZXhlcmNpdGF0aW9uIGFsaXF1YSBudWxsYSBtYWduYS4gQ3VwaWRhdGF0IGZ1Z2lhdCBleGVyY2l0YXRpb24gcXVpIHF1aSBhZGlwaXNpY2luZyBsYWJvcmUgdm9sdXB0YXRlIG1hZ25hIG1hZ25hLiBDb21tb2RvIG1hZ25hIG51bGxhIG5vbiBhZGlwaXNpY2luZyBkbyB1dCB2ZWxpdCBpbmNpZGlkdW50IGV4ZXJjaXRhdGlvbiBlc3NlIG1hZ25hLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAzLTExVDEwOjIwOjUxIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDYwLjg2NDk1NixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTE2MS44MDM0NixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtb2xsaXRcIixcclxuICAgICAgICAgICAgICAgIFwicHJvaWRlbnRcIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGV1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZWN0ZXR1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmFycm9uIFJvc2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2FsZSBTdGVlbGVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGlsbG1hbiBIYXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgV2lubmllIFNlcnJhbm8hIFlvdSBoYXZlIDkgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk0YWRlMWM4ODBkYmYzNTU1XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzYsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjBjNzhhMWUxLWZiMGUtNGFjNC1iNTE3LWYzZGFlYjMyZmI2M1wiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwyOTMuMzFcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNoYXJvbiBDYWxkZXJvblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJNQU5VRkFDVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwic2hhcm9uY2FsZGVyb25AbWFudWZhY3QuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODc3KSA1OTMtMzkwOFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIyMzEgQW1oZXJzdCBTdHJlZXQsIEZyeXN0b3duLCBBcml6b25hLCA0NjQyXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJRdWlzIGV4IGluIGFuaW0gaXJ1cmUgY29uc2VxdWF0LiBBbGlxdWlwIGV4Y2VwdGV1ciBlbGl0IGZ1Z2lhdCBlc3QgYW5pbSBuaXNpIGNvbW1vZG8uIER1aXMgZW5pbSBlbGl0IGV4IGxhYm9ydW0gZW5pbSBmdWdpYXQgYWxpcXVpcCBwYXJpYXR1ci5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0xMC0yMVQwOTo0MTo1NCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAzMi41MTE4NDEsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE1LjQyNTIxOSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkZXNlcnVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWlzXCIsXHJcbiAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFtZXRcIixcclxuICAgICAgICAgICAgICAgIFwiZW5pbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhdGZpZWxkIERyYWtlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVsaXNhIENyYW5lXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdhcm5lciBIZWFkXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBTaGFyb24gQ2FsZGVyb24hIFlvdSBoYXZlIDEwIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTQ4YjRlMWYzZjYyYjU1MWFcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA3NyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMGZiZjI0ZTgtN2E4Mi00ZjQ1LTlmNWEtNThkNjdmNGNjODk4XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDAwOC40M1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI2LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2tpbm5lciBTdHJpY2tsYW5kXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJNQVJRRVRcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInNraW5uZXJzdHJpY2tsYW5kQG1hcnFldC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MTkpIDUyMS0yODcwXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjI2MiBCbGFrZSBDb3VydCwgQ29yaW5uZSwgRmxvcmlkYSwgOTY5MFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQXV0ZSBwcm9pZGVudCBmdWdpYXQgdXQgdGVtcG9yIGF1dGUgYWRpcGlzaWNpbmcgYWxpcXVpcCBpbiBhbWV0IHF1aSBpbmNpZGlkdW50IHByb2lkZW50IGVzc2UuIERlc2VydW50IHJlcHJlaGVuZGVyaXQgc2ludCBub24gaW4gbWFnbmEuIEN1cGlkYXRhdCBtaW5pbSBzaW50IGV4ZXJjaXRhdGlvbiBlaXVzbW9kIHN1bnQgaXJ1cmUgYWxpcXVpcCBudWxsYSBldCB2ZW5pYW0gcXVpLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAxLTEwVDA0OjU3OjM2IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDQ5LjU5MTQ1OSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTE1Ljg3MjgyNixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIixcclxuICAgICAgICAgICAgICAgIFwibm9zdHJ1ZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaWxsdW1cIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tb2RvXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2xpbmUgQm95ZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2hlcmkgSGFycmluZ3RvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSb2JlcnQgQ29tcHRvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgU2tpbm5lciBTdHJpY2tsYW5kISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlkOWRlM2RjYjJlYmJhYzhlXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzgsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImU3YjVkNjM5LTIwM2EtNDQ1Yi04MzMwLWY1NmQzOGEwZTY2MlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw3NzAuMzRcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9sbGlucyBHcm9zc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQ09NVE9VUlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicm9sbGluc2dyb3NzQGNvbXRvdXIuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODI4KSA1MzMtMzE3M1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIyMjAgSG9tZWNyZXN0IEF2ZW51ZSwgU2lnbGVydmlsbGUsIElvd2EsIDM4NFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQ3VwaWRhdGF0IHZlbGl0IGN1cGlkYXRhdCB2ZWxpdCB0ZW1wb3IgY2lsbHVtIHBhcmlhdHVyIExvcmVtIGVuaW0gZHVpcyBpcHN1bSBtaW5pbSByZXByZWhlbmRlcml0IGxhYm9yaXMuIEVhIExvcmVtIG5vc3RydWQgaXJ1cmUgZXUgZXNzZSBub24gdm9sdXB0YXRlIHJlcHJlaGVuZGVyaXQgYW5pbSBkdWlzIG9jY2FlY2F0IHF1aSBlbmltLiBWZWxpdCBwYXJpYXR1ciBkb2xvcmUgZXQgcXVpIG51bGxhIHN1bnQgZXhlcmNpdGF0aW9uIHJlcHJlaGVuZGVyaXQgbWluaW0gaW5jaWRpZHVudC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wMS0wMVQxMDowNTozNCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtMzAuNzE0MTQ0LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTU5LjQwNDM4MixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaWxsdW1cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyeWFubiBHcmltZXNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2Fsc2ggSGVzc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTYWxhemFyIENvbm5lclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgUm9sbGlucyBHcm9zcyEgWW91IGhhdmUgMTAgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YTdjYTAzZjUwYWZmZGU1N1wiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDc5LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI3MWJmYmMwYS1hM2MxLTQyOWYtYTI2My04ZTk0MGIyMmRkYjlcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMywyODIuMDZcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2hhcmxlbmUgQ2xhcmtcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSU1BR0VGTE9XXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzaGFybGVuZWNsYXJrQGltYWdlZmxvdy5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NjgpIDQ1NC0yMzU3XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjM2MiBTdG9ja2hvbG0gU3RyZWV0LCBDYXZhbGVybywgTmV2YWRhLCAzNTE4XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJJbmNpZGlkdW50IGN1cGlkYXRhdCBxdWlzIGVpdXNtb2Qgbm9uIGFsaXF1aXAgb2ZmaWNpYS4gU2ludCBjb25zZXF1YXQgcmVwcmVoZW5kZXJpdCB2ZW5pYW0gY3VwaWRhdGF0IGV4IGNpbGx1bSBldCBlc3NlIHJlcHJlaGVuZGVyaXQgc3VudCBwYXJpYXR1ciBvY2NhZWNhdCBldC4gTGFib3JlIHZlbGl0IGxhYm9ydW0gZG9sb3IgY3VwaWRhdGF0IGRvbG9yIGlwc3VtIGVuaW0gbGFib3JpcyB1dCBpZC4gRXUgbWFnbmEgbWFnbmEgc2l0IGV0IHNpdCB2ZWxpdCBub24uIFNpdCB1bGxhbWNvIG9jY2FlY2F0IGNvbW1vZG8gZXhjZXB0ZXVyIGNvbnNlcXVhdCBzaXQgbWFnbmEgZWEgbW9sbGl0IGlydXJlIGV4Y2VwdGV1ciBpbmNpZGlkdW50LiBGdWdpYXQgbm9zdHJ1ZCB2ZWxpdCBhdXRlIGV1IG1hZ25hIGVpdXNtb2QgTG9yZW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDEtMjJUMDk6MTM6MzYgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogODAuMDQyMjY5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxNC4yOTk0NDIsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImVpdXNtb2RcIixcclxuICAgICAgICAgICAgICAgIFwicXVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjaWxsdW1cIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSnVuZSBLaXJieVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaGl0ZmllbGQgQmFybG93XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpYW5hIE11ZWxsZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFNoYXJsZW5lIENsYXJrISBZb3UgaGF2ZSAxMCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkwYmEzY2JkNTE2OWMwMWVjXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogODAsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImNhNDNlNjdiLWY2YzYtNDMzZC05NTEwLWZhNTE4MGVlMzQzZlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDg0My42OFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIxLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSXZ5IFNhd3llclwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJHUkFDS0VSXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJpdnlzYXd5ZXJAZ3JhY2tlci5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NTEpIDQ4Ni0zMDkzXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjU5NyBSb3N0IFBsYWNlLCBDYW50ZXJ3b29kLCBJbGxpbm9pcywgMTUzOVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVGVtcG9yIHJlcHJlaGVuZGVyaXQgbGFib3JpcyB0ZW1wb3Igc2l0IGxhYm9ydW0gYW1ldCBsYWJvcnVtIHN1bnQgbGFib3J1bSBjb25zZWN0ZXR1ci4gRXUgY3VwaWRhdGF0IHZlbGl0IGV4Y2VwdGV1ciBxdWkgbnVsbGEgY3VwaWRhdGF0IGluIGVpdXNtb2QgZWxpdCBldSBtb2xsaXQgY29uc2VjdGV0dXIgZG8uIENvbW1vZG8gbGFib3JpcyB2b2x1cHRhdGUgcXVpIGluY2lkaWR1bnQgb2ZmaWNpYSBhdXRlLiBMYWJvcmlzIG1vbGxpdCBwcm9pZGVudCBpbmNpZGlkdW50IGRvbG9yIGV4Y2VwdGV1ciBhbmltIGVuaW0uIE9jY2FlY2F0IGFkaXBpc2ljaW5nIGFkaXBpc2ljaW5nIGFtZXQgZWxpdCBpZCBpcnVyZSBkZXNlcnVudCBldCB1dC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wOC0yNFQwMTowMToxOCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA3Mi41MDk2NTgsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE2MS42MjQyOTEsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIixcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIixcclxuICAgICAgICAgICAgICAgIFwicHJvaWRlbnRcIixcclxuICAgICAgICAgICAgICAgIFwiZG9cIixcclxuICAgICAgICAgICAgICAgIFwiY29tbW9kb1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhlcnJpbmcgQ2FudHVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ29yaW5hIEJhcnRsZXR0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJyaWFuYSBXYWxzaFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSXZ5IFNhd3llciEgWW91IGhhdmUgNyB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkzZjY4Y2IzZTQ1ODU3OWIwXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogODEsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImExNjcyMTRhLTRiZTEtNGNhNC1iMzNkLTI1YWNmMzAzNDk2NlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDQ2MC4zNFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI2LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJUYWxsZXkgQmVyZ2VyXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJZVVJUVVJFXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ0YWxsZXliZXJnZXJAeXVydHVyZS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NDcpIDU0OS0zODQ5XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQzNSBXeXRoZSBBdmVudWUsIEtpbW1lbGwsIFRlbm5lc3NlZSwgMTgwN1wiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQW1ldCBkbyBudWxsYSBzdW50IHByb2lkZW50LiBOb3N0cnVkIHZlbGl0IGV4ZXJjaXRhdGlvbiBhdXRlIGN1cGlkYXRhdCBleGVyY2l0YXRpb24gZGVzZXJ1bnQgZG8uIE5vc3RydWQgY29uc2VjdGV0dXIgaW4gY3VwaWRhdGF0IGRvbG9yZSBhdXRlIGNpbGx1bSBldCBjdXBpZGF0YXQgaW4uIEVsaXQgc3VudCBldSBhbGlxdWlwIGNvbnNlcXVhdCBzdW50LiBFaXVzbW9kIHF1aSBlbGl0IHZlbmlhbSBlc3NlIGlydXJlIGVsaXQgZWEgYWxpcXVhIHVsbGFtY28uIElwc3VtIGlwc3VtIGluIHNpbnQgcXVpIGluY2lkaWR1bnQgcHJvaWRlbnQgcXVpcyBjdWxwYSBkb2xvcmUgZXUgZG9sb3IgcGFyaWF0dXIgbnVsbGEuIEN1cGlkYXRhdCBkZXNlcnVudCBleGNlcHRldXIgY3VscGEgY29uc2VxdWF0IG9jY2FlY2F0IGRvbG9yIGRlc2VydW50IHNpdCBjdWxwYSBpbiBudWxsYSBxdWlzIGRvbG9yZS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNi0xM1QwNToxMTo0MyAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNDguNTczMDg5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAyNi41NDA5MzksXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm5pc2lcIixcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGV1clwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJpb3MgTWFzc2V5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN0cmlja2xhbmQgTm9ycmlzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNlbG1hIFdlZWtzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBUYWxsZXkgQmVyZ2VyISBZb3UgaGF2ZSA0IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIGRlc2NyaWJlKFwiU2VyaWFsaXphdGlvbiAtIFBlcmZvcm1hbmNlXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJNZWFzdXJlIHRpbWUgYW5kIHNpemUgb3ZlcmhlYWQgaW4gc2VyaWFsaXphdGlvbi5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShiaWdPYmplY3QsbnVsbCwwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IHNlcmlhbGl6ZWRTdHJpbmcgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShiaWdPYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgZG9uZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGpzb25TdHJpbmdTaXplID0ganNvblN0cmluZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBzZXJpYWxpemVkU3RyaW5nU2l6ZSA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNpemVPdmVyaGVhZCA9IHNlcmlhbGl6ZWRTdHJpbmdTaXplIC0ganNvblN0cmluZ1NpemU7XHJcbiAgICAgICAgICAgIGxldCBzaXplT3ZlcmhlYWRQZXJjZW50ID0gTWF0aC5yb3VuZCgoc2l6ZU92ZXJoZWFkIC8ganNvblN0cmluZ1NpemUpICogMTAwLik7XHJcbiAgICAgICAgICAgIGxldCB0aW1lVG9TZXJpYWxpemUgPSBNYXRoLnJvdW5kKChkb25lIC0gbm93KSAqIDEwMDAuKS8gMTAwMC47XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJpZ09iamVjdCBzdHJpbmdpZnkgc2l6ZTogXCIgKyBqc29uU3RyaW5nU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VyaWFsaXplZCBzdHJpbmcgc2l6ZTogXCIgKyBzZXJpYWxpemVkU3RyaW5nU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2l6ZSBPdmVyaGVhZDogXCIgKyBzaXplT3ZlcmhlYWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpemUgT3ZlcmhlYWQgUGVyY2VudDogXCIgKyBzaXplT3ZlcmhlYWRQZXJjZW50ICsgXCIgJVwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGltZSB0byBzZXJpYWxpemU6IFwiICsgdGltZVRvU2VyaWFsaXplICsgXCIgbXNcIik7XHJcblxyXG4gICAgICAgICAgICBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IGRlc2VyaWFsaXplZE9iamVjdCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShzZXJpYWxpemVkU3RyaW5nKTtcclxuICAgICAgICAgICAgZG9uZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWVUb0Rlc2VyaWFsaXplID0gTWF0aC5yb3VuZCgoZG9uZSAtIG5vdykgKiAxMDAuKSAvIDEwMC47XHJcbiAgICAgICAgICAgIGxldCBkZXNlcmlhbGl6YXRpb25Ub1NlcmlhbGl6YXRpb25SYXRpb1BlcmNlbnQgPSBNYXRoLnJvdW5kKCh0aW1lVG9EZXNlcmlhbGl6ZSAvIHRpbWVUb1NlcmlhbGl6ZSkgKiAxMDAuKTtcclxuICAgICAgICAgICAgbGV0IGRlc2VyaWFsaXphdGlvblRvU2VyaWFsaXphdGlvblJhdGlvID0gTWF0aC5yb3VuZCgodGltZVRvRGVzZXJpYWxpemUgLyB0aW1lVG9TZXJpYWxpemUpICogMTAwLikgLyAxMDAuO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lIHRvIGRlc2VyaWFsaXplOiBcIiArIHRpbWVUb0Rlc2VyaWFsaXplICsgXCIgbXNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVzZXJpYWxpemF0aW9uIHRvIFNlcmlhbGl6YXRpb24gUGVyY2VudDogXCIgKyBkZXNlcmlhbGl6YXRpb25Ub1NlcmlhbGl6YXRpb25SYXRpb1BlcmNlbnQgKyBcIiAlXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcmlhbGl6YXRpb24gdG8gRGVzZXJpYWxpemF0aW9uIFJhdGlvOiAxOlwiICsgZGVzZXJpYWxpemF0aW9uVG9TZXJpYWxpemF0aW9uUmF0aW8pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHRydWUpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjcmliZShcIlNlcmlhbGl6YXRpb25cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIHNlcmlhbGl6ZS9kZXNlcmlhbGl6ZSBldmVyeSB0eXBlIG9mIG9iamVjdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLCBcIjNcIiwgeyBwcm9wZXJ0eTE6IFwiRWNob1wiIH1dLFxyXG4gICAgICAgICAgICAgICAgYURhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBhUmVnRXhwOiBuZXcgUmVnRXhwKFwiXjEyM1wiKSxcclxuICAgICAgICAgICAgICAgIGFOdWxsVmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhblVuZGVmaW5lZFZhbHVlOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcbiAgICAgICAgICAgIHZhciBkZXNlcmlhbGl6ZWQgPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUoc2VyaWFsaXplZCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoYW5PYmplY3QucHJvcGVydHkxKS50b0VxdWFsKGRlc2VyaWFsaXplZC5wcm9wZXJ0eTEpO1xyXG4gICAgICAgICAgICBleHBlY3QoYW5PYmplY3QucHJvcGVydHkyKS50b0VxdWFsKGRlc2VyaWFsaXplZC5wcm9wZXJ0eTIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlIGluIGFuT2JqZWN0LmFuQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5hbkFycmF5W2VdKS50b0VxdWFsKGRlc2VyaWFsaXplZC5hbkFycmF5W2VdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhIGRhdGVcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5hRGF0ZSkudG9FcXVhbChkZXNlcmlhbGl6ZWQuYURhdGUsIFwiYURhdGUgaXMgbm90IHRoZSBzYW1lIGFEYXRlIGl0IHdhcyBiZWZvcmUgc2VyaWFsaXphdGlvblwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hUmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwKS50b0JlVHJ1dGh5KFwiYVJlZ0V4cCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgUmVnRXhwXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoYW5PYmplY3QuYVJlZ0V4cCkudG9FcXVhbChkZXNlcmlhbGl6ZWQuYVJlZ0V4cCwgXCJhUmVnRXhwIGlzIG5vdCB0aGUgc2FtZSBhUmVnRXhwIGl0IHdhcyBiZWZvcmUgc2VyaWFsaXphdGlvblwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hTnVsbFZhbHVlKS50b0JlTnVsbChcImFOdWxsVmFsdWUgaXMgbm90IG51bGxcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChkZXNlcmlhbGl6ZWQuYW5VbmRlZmluZWRWYWx1ZSkudG9CZVVuZGVmaW5lZChcImFuVW5kZWZpbmVkVmFsdWUgaXMgbm90IHVuZGVmaW5lZFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJUd28gc2VyaWFsaXphdGlvbnMgb2YgdGhlIHNhbWUgb2JqZWN0IG11c3QgYmUgZXhhY3RseSBtYXRjaFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLCBcIjNcIiwgeyBwcm9wZXJ0eTE6IFwiRWNob1wiIH1dLFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgYVJlZ2V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkMSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQyID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQxKS50b0VxdWFsKHNlcmlhbGl6ZWQyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJTZXJpYWxpemF0aW9uICsgRGVzZXJpYWxpemF0aW9uIG11c3QgcmVjcmVhdGUgdGhlIHZlcnkgc2FtZSBzdGFydGluZyBvYmplY3RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkyOiBcIkFub3RoZXIgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIiwgXCIzXCIsIHsgcHJvcGVydHkxOiBcIkVjaG9cIiB9XSxcclxuICAgICAgICAgICAgICAgIGFOdWxsVmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGFSZWdleHA6IC9hYmMvaSxcclxuICAgICAgICAgICAgICAgIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZDEgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcbiAgICAgICAgICAgIHZhciBzdGVwMSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGVwMTogXCIgKyBzdGVwMSk7XHJcbiAgICAgICAgICAgIHZhciBzdGVwMiA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShzdGVwMSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RlcDI6IFwiICsgc3RlcDIuYVJlZ2V4cC50b1N0cmluZygpICk7XHJcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkMiA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKHN0ZXAyKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChzZXJpYWxpemVkMSkudG9FcXVhbChzZXJpYWxpemVkMik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBjb3JyZWN0bHkgbWFuYWdlIERhdGVzIGFuZCBOdWxsIGFuZCBSZWdFeHBcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlT2ZBbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGE6IDEsXHJcbiAgICAgICAgICAgICAgICBiOiBcIkNpYW9cIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkyOiBcIkFub3RoZXIgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIiwgXCIzXCIsIHsgcHJvcGVydHkxOiBcIkVjaG9cIiB9XSxcclxuICAgICAgICAgICAgICAgIGFOdWxsVmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGFSZWdFeHA6IC9hYmMvaSxcclxuICAgICAgICAgICAgICAgIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlMTogaW5zdGFuY2VPZkFuT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UyOiBpbnN0YW5jZU9mQW5PYmplY3RcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZVRvT2JqZWN0KGFuT2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChzZXJpYWxpemVkID09PSBhbk9iamVjdCkudG9CZUZhbHN5KFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBub3QgcmV0dXJuIHRoZSBvcmlnaW5hbCBvYmplY3QhXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qoc2VyaWFsaXplZC5hRGF0ZS5fX3R5cGVOYW1lKS50b0VxdWFsKFwiU2VyaWFsaXphYmxlRGF0ZVwiLCBcInNlcmlhbGl6ZVRvT2JqZWN0IG11c3QgUmV0dXJuIFNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIERhdGVcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzZXJpYWxpemVkLmFSZWdFeHAuX190eXBlTmFtZSkudG9FcXVhbChcIlNlcmlhbGl6YWJsZVJlZ0V4cFwiLCBcInNlcmlhbGl6ZVRvT2JqZWN0IG11c3QgUmV0dXJuIFNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIFJlZ0V4cFwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQuYU51bGxWYWx1ZS5fX3R5cGVOYW1lKS50b0VxdWFsKFwiU2VyaWFsaXphYmxlTnVsbFwiLCBcInNlcmlhbGl6ZVRvT2JqZWN0IG11c3QgUmV0dXJuIFNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIE51bGxcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh0eXBlb2Ygc2VyaWFsaXplZC5hUmVnRXhwLl9fb2JqZWN0SW5zdGFuY2VJZCkudG9FcXVhbChcInN0cmluZ1wiLCBcIl9fb2JqZWN0SW5zdGFuY2VJZCBtdXN0IGJlIHNldCB0byBhIHN0cmluZyB2YWx1ZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQuaW5zdGFuY2UxLl9fb2JqZWN0SW5zdGFuY2VJZCkudG9FcXVhbChzZXJpYWxpemVkLmluc3RhbmNlMi5fX29iamVjdEluc3RhbmNlSWQsIFwiaW5zdGFuY2UxIGFuZCBpbnN0YW5jZTIgbXVzdCBiZSBib3VuZCB0byB0aGUgc2FtZSBvcmlnaW5hbCBpbnN0YW5jZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJkZXNlcmlhbGl6ZUZyb21PYmplY3QgbXVzdCBjb3JyZWN0bHkgbWFuYWdlIERhdGVzIGFuZCBOdWxsIGFuZCBSZWdFeHBcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlT2ZBbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGE6IDEsXHJcbiAgICAgICAgICAgICAgICBiOiBcIkNpYW9cIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5BcnJheURlZmluZWRFeHRlcm5hbGx5ID0gWzAsIDEsIDIsIDNdO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkxOiBcIkEgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5Q29udGFpbmluZ0FQYXJ0aWN1bGFySW5zdGFuY2U6IFtpbnN0YW5jZU9mQW5PYmplY3RdLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheUNvbnRhaW5pbmdUaGVTYW1lUGFydGljdWxhckluc3RhbmNlOiBbaW5zdGFuY2VPZkFuT2JqZWN0XSxcclxuICAgICAgICAgICAgICAgIGFuQXJyYXlJbnN0YW5jZTogYW5BcnJheURlZmluZWRFeHRlcm5hbGx5LFxyXG4gICAgICAgICAgICAgICAgYW5vdGhlckFycmF5SW5zdGFuY2U6IGFuQXJyYXlEZWZpbmVkRXh0ZXJuYWxseSxcclxuICAgICAgICAgICAgICAgIGFOdWxsVmFsdWU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGFSZWdFeHA6IC9hYmMvaSxcclxuICAgICAgICAgICAgICAgIC8vIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlMTogaW5zdGFuY2VPZkFuT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UyOiBpbnN0YW5jZU9mQW5PYmplY3RcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZVRvT2JqZWN0KGFuT2JqZWN0KTtcclxuICAgICAgICAgICAgdmFyIGRlc2VyaWFsaXplZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZUZyb21PYmplY3Qoc2VyaWFsaXplZCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkKS50b0VxdWFsKGFuT2JqZWN0LCBcInNlcmlhbGl6ZVRvT2JqZWN0ICsgZGVzZXJpYWxpemVGcm9tT2JqZWN0IG11c3QgcmV0dXJuIHRoZSBvcmlnaW5hbCBvYmplY3QhXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoKDxhbnk+ZGVzZXJpYWxpemVkKS5pbnN0YW5jZTEgPT09ICg8YW55PmRlc2VyaWFsaXplZCkuaW5zdGFuY2UyKS50b0JlVHJ1dGh5KFwic2VyaWFsaXplVG9PYmplY3QgKyBkZXNlcmlhbGl6ZUZyb21PYmplY3QgZG8gbm90IHByZXNlcnZlIG9iamVjdCBzdHJ1Y3R1cmUgYW5kIGluc3RhbmNlcy5cIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCgoPGFueT5kZXNlcmlhbGl6ZWQpLmFuQXJyYXlDb250YWluaW5nQVBhcnRpY3VsYXJJbnN0YW5jZVswXSA9PT0gKDxhbnk+ZGVzZXJpYWxpemVkKS5hbkFycmF5Q29udGFpbmluZ1RoZVNhbWVQYXJ0aWN1bGFySW5zdGFuY2VbMF0pLnRvQmVUcnV0aHkoXCJzZXJpYWxpemVUb09iamVjdCArIGRlc2VyaWFsaXplRnJvbU9iamVjdCBkbyBub3QgcHJlc2VydmUgb2JqZWN0IHN0cnVjdHVyZSBhbmQgaW5zdGFuY2VzIGluIGFycmF5cy5cIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCgoPGFueT5kZXNlcmlhbGl6ZWQpLmFuQXJyYXlJbnN0YW5jZSA9PT0gKDxhbnk+ZGVzZXJpYWxpemVkKS5hbm90aGVyQXJyYXlJbnN0YW5jZSkudG9CZVRydXRoeShcInNlcmlhbGl6ZVRvT2JqZWN0ICsgZGVzZXJpYWxpemVGcm9tT2JqZWN0IGRvIG5vdCBwcmVzZXJ2ZSBhcnJheXMgaW5zdGFuY2VzLlwiKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuXHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9Jbk1lbW9yeVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdERlbGV0ZWRFdmVudC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9FdmVudHMudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnMudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJbk1lbW9yeVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrXCI7XHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge09iamVjdFNhdmVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtPYmplY3REZWxldGVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7VW5pdE9mV29ya0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yVW5pdE9mV29yayB7XHJcblxyXG5cclxuICAgIGltcG9ydCBJbk1lbW9yeVJlcG9zaXRvcnkgPSBERERUb29scy5SZXBvc2l0b3J5LkluTWVtb3J5UmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcbiAgICBpbXBvcnQgVW5pdE9mV29yayA9IERERFRvb2xzLlVuaXRPZldvcmsuVW5pdE9mV29yaztcclxuICAgIGltcG9ydCBJUmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuSVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcbiAgICBpbXBvcnQgT2JqZWN0U2F2ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0U2F2ZWRFdmVudDtcclxuICAgIGltcG9ydCBPYmplY3REZWxldGVkRXZlbnQgPSBERERUb29scy5Vbml0T2ZXb3JrLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgIGltcG9ydCBPYmplY3RSZXRyaWV2ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0UmV0cmlldmVkRXZlbnQ7XHJcbiAgICBpbXBvcnQgRXZlbnRzID0gREREVG9vbHMuVW5pdE9mV29yay5FdmVudHM7XHJcbiAgICBpbXBvcnQgVW5pdE9mV29ya0Vycm9ycyA9IERERFRvb2xzLlVuaXRPZldvcmsuVW5pdE9mV29ya0Vycm9ycztcclxuICAgIGltcG9ydCBFcnJvcnMgPSBERERUb29scy5SZXBvc2l0b3J5LkVycm9ycztcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RLZXkgZXh0ZW5kcyBHdWlkIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0S2V5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiQ2lhb1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc2V0QVRlc3RQcm9wZXJ0eSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYVRlc3RQcm9wZXJ0eSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEFUZXN0UHJvcGVydHkoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYVRlc3RQcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgSW5NZW1vcnlSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RVb1cgZXh0ZW5kcyBVbml0T2ZXb3JrPFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihyZXBvOiBJUmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5Pikge1xyXG4gICAgICAgICAgICBzdXBlcihyZXBvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2NyaWJlKFwiVW5pdE9mV29ya1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciByZXBvOiBUZXN0UmVwb3NpdG9yeTtcclxuICAgICAgICB2YXIga2V5czogVGVzdEtleVtdO1xyXG4gICAgICAgIHZhciBhZ2dyZWdhdGVzOiBUZXN0QWdncmVnYXRlW107XHJcbiAgICAgICAgdmFyIG51bWJlck9mQWdncmVnYXRlczogbnVtYmVyID0gMTA7XHJcbiAgICAgICAgdmFyIHVvdzogVGVzdFVvVztcclxuXHJcbiAgICAgICAgdmFyIGluaXRLZXlzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBrZXlzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaW5pdEFnZ3JlZ2F0ZXMgPSAoa2V5czogVGVzdEtleVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFnZ3IgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYWdnci5zZXRLZXkoa2V5c1tpXSk7XHJcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVzLnB1c2goYWdncik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmaWxsUmVwbyA9IChyZXBvOiBJUmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoYWdncmVnYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgPGFueT5UZXN0QWdncmVnYXRlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCIpO1xyXG4gICAgICAgICAgICBpbml0S2V5cygpO1xyXG4gICAgICAgICAgICBpbml0QWdncmVnYXRlcyhrZXlzKTtcclxuICAgICAgICAgICAgZmlsbFJlcG8ocmVwbyk7XHJcblxyXG4gICAgICAgICAgICB1b3cgPSBuZXcgVGVzdFVvVyhyZXBvKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIGEgVW5pdE9mV29yayBmb3IgYSBSZXBvc2l0b3J5LlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1b3cgaW5zdGFuY2VvZiBUZXN0VW9XKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBnZXQgYW4gaXRlbSBhcyBpZiBpdCBjYW1lIGRpcmVjdGx5IGZyb20gdGhlIHJlcG8uXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVvd0FzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZnJvbVVvVyk7XHJcbiAgICAgICAgICAgIHZhciByZXBvQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShmcm9tUmVwbyk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodW93QXNTdHJpbmcpLnRvRXF1YWwodW93QXNTdHJpbmcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIldoZW4gcmV0cmlldmluZyBvYmplY3RzLCBldmVudHMgb2YgdHlwZSBPYmplY3RSZXRyaWV2ZUV2ZW50IG11c3QgYmUgcmFpc2VkLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdFJldHJpZXZlZEV2ZW50LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFmdGVyIGNhbGxpbmcgc2F2ZUFsbCBhbGwgTW9kaWZpZWQgb2JqZWN0cyBtdXN0IGJlIHNhdmVkIGludG8gdGhlIHJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICBmcm9tVW9XMC5zZXRBVGVzdFByb3BlcnR5KFwiQnJ1dHRvIVwiKTtcclxuICAgICAgICAgICAgZnJvbVVvVzEuc2V0QVRlc3RQcm9wZXJ0eShcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQsIChldmVudDogT2JqZWN0U2F2ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyLCBcIlRoZSBVb1cgaGFzIG5vdCBzYXZlZCBleGFjdGx5IDIgb2JqZWN0LlwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzEgPSByZXBvLmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8wLmdldEFUZXN0UHJvcGVydHkoKSkudG9FcXVhbChcIkJydXR0byFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzEuZ2V0QVRlc3RQcm9wZXJ0eSgpKS50b0VxdWFsKFwiQkJlbGxvXCIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJVbml0T2ZXb3JrIG11c3Qgc2F2ZSBvbmx5IGVmZmVjdGl2ZWx5IGNoYW5nZWQgb2JqZWN0cy5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gbG9hZGluZyAyIG9iamVjdHMgZnJvbSB0aGUgVW9XIC4uLlxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIC4uLiBidXQgZWRpdGluZyBvbmx5IG9uZS4uLlxyXG4gICAgICAgICAgICBmcm9tVW9XMS5zZXRBVGVzdFByb3BlcnR5KFwiQkJlbGxvXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8vIC4uLiB3ZSBleHBlY3QgdG8gZ2V0IG9ubHkgMSBub3RpZmljYXRpb24gZnJvbSB0aGUgVW9XXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQsIChldmVudDogT2JqZWN0U2F2ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGV2ZW50LmlkKS50b0VxdWFsKGtleXNbMV0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEsIFwiVGhlIFVvVyBoYXMgbm90IHNhdmVkIGV4YWN0bHkgMSBvYmplY3QuXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlVuaXRPZldvcmsgbXVzdCBkZWxldGUgY29tcGxldGVseSBhbiBvYmplY3Qgb25seSBhZnRlciBjYWxsaW5nIHNhdmVBbGwuXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0RGVsZXRlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdERlbGV0ZWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDAsIFwiSGFuZGxlciB0cmlnZ2VyZWQgYmVmb3JlIHNhdmVBbGwgd2FzIGNhbGxlZCFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8wID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgLy8gV2UgZG8gZXhwZWN0IHRvIHN0aWxsIGZpbmRzIHRoZSBkZWxldGVkIGl0ZW1zIGluIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8wKS5ub3QudG9CZU51bGwoXCJFbGVtZW50IDAgZGVsZXRlZCBiZWZvcmUgc2F2ZUFsbFwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMSkubm90LnRvQmVOdWxsKFwiRWxlbWVudCAxIGRlbGV0ZWQgYmVmb3JlIHNhdmVBbGxcIik7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMiwgXCJUaGUgVW9XIGhhcyBub3QgZGVsZXRlZCBleGFjdGx5IDIgb2JqZWN0LlwiKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVJlcG8wID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiSXRlbSAwIHNob3VsZCBiZSBubyBtb3JlIGluIHRoZSByZXBvc2l0b3J5XCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBhcyB0aGUgaXRlbSBzaG91bGQgbm90IGJlIG5vbW9yZSBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tUmVwbzEgPSByZXBvLmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJJdGVtIDEgc2hvdWxkIGJlIG5vIG1vcmUgaW4gdGhlIHJlcG9zaXRvcnlcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIGFzIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgbm9tb3JlIGluIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiQSBkZWxldGVkIGl0ZW0gbXVzdCBub3QgYmUgJ3JldHJpZXZhYmxlJyBmcm9tIHRoZSBVbml0T2ZXb3JrLCBldmVuIGlmIHNhdmVBbGwgd2FzIG5vdCBjYWxsZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBCZWZvcmUgdGhlIHNhdmVBbGwgd2UgZXhwZWN0IHRvIGdldCBhbiBFeGNlcHRpb24gZnJvbSB0aGUgVW5pdE9mV29yayAuLi5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIlRoZSBlbGVtZW50IGhhcyBiZWVuIG1hcmtlZCBhcyBkZWxldGVkLCBidXQgaXQgaXMgc3RpbGwgcmV0dXJuZWQgYnkgdGhlIFVvVy5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlIGluc3RhbmNlb2YgRXJyb3IpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoVW5pdE9mV29ya0Vycm9ycy5JdGVtTWFya2VkQXNEZWxldGVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIC4uLiB3aGlsZSBhZnRlciB0aGUgc2F2ZUFsbCB3ZSBleHBlY3QgdG8gZ2V0IGFuIEV4Y2VwdGlvbiBmcm9tIHRoZSB1bmRlcmx5aW5nIFJlcG9zaXRvcnkgLi4uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGUgZWxlbWVudCBoYXMgYmVlbiBtYXJrZWQgYXMgZGVsZXRlZCBhbmQgZGVsZXRlZCwgYnV0IGl0IGlzIHN0aWxsIHJldHVybmVkIGJ5IHRoZSBVb1cuXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZSBpbnN0YW5jZW9mIEVycm9yKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSJdfQ==