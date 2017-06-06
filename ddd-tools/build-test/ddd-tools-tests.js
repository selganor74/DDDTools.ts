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
                expect(e.getRevisionId()).toEqual(1);
                repo.save(e);
                expect(e.getRevisionId()).toEqual(1);
                e.aTestProperty = "... after saving";
                repo.save(e);
                expect(e.getRevisionId()).toEqual(2);
            });
            it("RevisionId must NOT be incremented when using 'replace' method", function () {
                var repo = new TestRepository();
                var e = new TestAggregate();
                e.setKey(new Key());
                e.aTestProperty = "Before saving...";
                expect(e.getRevisionId()).toEqual(0);
                repo.save(e);
                expect(e.getRevisionId()).toEqual(1);
                e.aTestProperty = "... after saving";
                repo.replace(e);
                expect(e.getRevisionId()).toEqual(1);
            });
            it("When saving a stale item (__revisonId lower than saved item __revisionId) an exception must be thrown.", function () {
                var repo = new TestRepository();
                var e = new TestAggregate();
                var key = new Key();
                e.setKey(key);
                e.aTestProperty = "Before saving...";
                expect(e.getRevisionId()).toEqual(0);
                repo.save(e);
                var f = new TestAggregate();
                f.setKey(key);
                f.aTestProperty = "Before saving...";
                try {
                    repo.save(f);
                    expect(false).toBeTruthy("We shouldn't get here...");
                }
                catch (q) {
                    expect(q instanceof Error).toBeTruthy("Returned error should be instance of class Error");
                    expect(q.name).toEqual(Errors.SavingOldObject);
                    expect(f.getRevisionId()).toEqual(0);
                }
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
                it("RevisionId must NOT be incremented if using 'replace' method.", function (done) {
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
                        return repo.replace(e);
                    }).then(function () {
                        expect(e.getRevisionId()).toEqual(1);
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
                it("When saving a 'stale' item (__revisionId lower than saved version's __revisionId) an Exception must be thrown.", function (done) {
                    var repo = new TestRepository();
                    var e = new TestAggregate();
                    var key = new Key();
                    e.setKey(key);
                    e.aTestProperty = "Before saving...";
                    repo.save(e).then(function () {
                        var f = new TestAggregate();
                        f.setKey(key);
                        f.aTestProperty = "Before saving...";
                        return repo.save(f);
                    }).then(function () {
                        expect(false).toBeTruthy("This save should not be succesful!");
                        done();
                    }, function (err) {
                        expect(err instanceof Error).toBeTruthy("Should have been returned an error.");
                        expect(err.name).toEqual(Errors.SavingOldObject);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLXRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QvREREVG9vbHMvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlU3RhdGVNYWNoaW5lLXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlVmFsdWVPYmplY3Qtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luTWVtb3J5UmVwb3NpdG9yeS1zcGVjLnRzIiwiLi4vc3JjL3Rlc3QvREREVG9vbHMvSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luUHJvY2Vzc0Rpc3BhdGNoZXItc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL01vbmV5LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9TZXJpYWxpemF0aW9uLXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9Vbml0T2ZXb3JrLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWVBLElBQVUsR0FBRyxDQXFCWjtBQXJCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLEtBQUssQ0FxQmxCO0lBckJhLFdBQUEsS0FBSztRQUFDLElBQUEscUJBQXFCLENBcUJ4QztRQXJCbUIsV0FBQSxxQkFBcUI7WUFBQyxJQUFBLEVBQUUsQ0FxQjNDO1lBckJ5QyxXQUFBLEVBQUU7Z0JBSXhDLElBQU8sVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUcvQztvQkFBMEMsd0NBQXNDO29CQUFoRjt3QkFBQSxxRUFhQzt3QkFaRyxnQkFBVSxHQUFHLHNEQUFzRCxDQUFDO3dCQUNwRSxtQkFBYSxHQUFHLElBQUksQ0FBQzs7b0JBV3pCLENBQUM7b0JBUEcsa0RBQW1CLEdBQW5CLFVBQW9CLFlBQXFFO3dCQUNyRixJQUFJLEtBQUssR0FB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QUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2pFLENBQUM7b0JBRUQsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUdkLElBQUksQ0FBQzt3QkFDRCxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQywwRkFBMEYsQ0FBQyxDQUFDO29CQUN6SCxDQUFDO29CQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsTUFBTSxDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNoRCxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBaFBtQixhQUFhLEdBQWIsbUJBQWEsS0FBYixtQkFBYSxRQWdQaEM7SUFBRCxDQUFDLEVBaFBhLEtBQUssR0FBTCxTQUFLLEtBQUwsU0FBSyxRQWdQbEI7QUFBRCxDQUFDLEVBaFBTLEdBQUcsS0FBSCxHQUFHLFFBZ1BaIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVudGl0eX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7R3VpZH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeSBhcyBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnksIFVwZ3JhZGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIge1xyXG5cclxuICAgIGltcG9ydCBUZXN0RW50aXR5ID0gQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5O1xyXG5cclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBM1N0ZXBVcGdyYWRhYmxlSXRlbSBleHRlbmRzIEJhc2VFbnRpdHk8QTNTdGVwVXBncmFkYWJsZUl0ZW0sIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjJcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGFOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG5cclxuICAgICAgICBnZXRVcGdyYWRlZEluc3RhbmNlKGZyb21JbnN0YW5jZTogQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5BM1N0ZXBVcGdyYWRhYmxlSXRlbSk6IEEzU3RlcFVwZ3JhZGFibGVJdGVtIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZnJvbUluc3RhbmNlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHN0YXRlLmFOZXdQcm9wZXJ0eSA9IFwidXBncmFkZXIgd2FzIGhlcmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuX190eXBlVmVyc2lvbiA9IFwidjJcIlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MSB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBM1N0ZXBVcGdyYWRhYmxlSXRlbSBleHRlbmRzIEJhc2VFbnRpdHk8QTNTdGVwVXBncmFkYWJsZUl0ZW0sIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG4gICAgaW1wb3J0IFVwZ3JhZGVyID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuVXBncmFkZXI7XHJcbiAgICBpbXBvcnQgRXJyb3JzID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRXJyb3JzO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBM1N0ZXBVcGdyYWRhYmxlSXRlbSBleHRlbmRzIEJhc2VFbnRpdHk8VGVzdEVudGl0eSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2M1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgYU5ld1Byb3BlcnR5OiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGFOZXdOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG5cclxuICAgICAgICBnZXRVcGdyYWRlZEluc3RhbmNlKGZyb21JbnN0YW5jZTogQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52Mi5BM1N0ZXBVcGdyYWRhYmxlSXRlbSk6IEEzU3RlcFVwZ3JhZGFibGVJdGVtIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZnJvbUluc3RhbmNlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHN0YXRlLmFOZXdOZXdQcm9wZXJ0eSA9IFwidXBncmFkZXIgd2FzIGhlcmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuX190eXBlVmVyc2lvbiA9IFwidjNcIlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEVudGl0eSBleHRlbmRzIEJhc2VFbnRpdHk8VGVzdEVudGl0eSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYyXCI7XHJcblxyXG4gICAgICAgIGdldFVwZ3JhZGVkSW5zdGFuY2UoZnJvbUluc3RhbmNlOiBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLlRlc3RFbnRpdHkpOiBUZXN0RW50aXR5IHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gZnJvbUluc3RhbmNlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHN0YXRlLmFOZXdQcm9wZXJ0eSA9IFwidXBncmFkZXIgd2FzIGhlcmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuX190eXBlVmVyc2lvbiA9IFwidjJcIlxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIHByb3BlcnR5IHdhcyBub3QgaW4gXCJ2MVwiLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhTmV3UHJvcGVydHk6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEVudGl0eU5vblVwZ3JhZGFibGUgZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5Tm9uVXBncmFkYWJsZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBBQ2xhc3NXaXRoTWFueVR5cGVzIGV4dGVuZHMgQmFzZUVudGl0eTxBQ2xhc3NXaXRoTWFueVR5cGVzLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgLy8gUHJpbWl0aXZlIERhdGF0eXBlc1xyXG4gICAgICAgIHB1YmxpYyBhTnVtYmVyOiBOdW1iZXI7XHJcbiAgICAgICAgcHVibGljIGFTdHJpbmc6IFN0cmluZztcclxuICAgICAgICBwdWJsaWMgYUJvb2xlYW46IEJvb2xlYW47XHJcbiAgICAgICAgcHVibGljIGFuT2JqZWN0OiBPYmplY3Q7XHJcblxyXG4gICAgICAgIC8vIEV4dGVuZGVkIHR5cGVzXHJcbiAgICAgICAgcHVibGljIGFSZWdFeHA6IFJlZ0V4cDtcclxuICAgICAgICBwdWJsaWMgYURhdGU6IERhdGU7XHJcbiAgICAgICAgcHVibGljIGFOdWxsVmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MlwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2M1wiLCA8YW55PkEzU3RlcFVwZ3JhZGFibGVJdGVtKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCIsIFwidjJcIiwgPGFueT5UZXN0RW50aXR5KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlXCIsIFwidjFcIiwgPGFueT5UZXN0RW50aXR5Tm9uVXBncmFkYWJsZSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzXCIsIFwidjFcIiwgPGFueT5BQ2xhc3NXaXRoTWFueVR5cGVzKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiY29tcHV0ZU5leHRWZXJzaW9uIGRldmUgcmVzdGl0dWlyZSBpbCB2YWxvcmUgY29ycmV0dG8gZGVsbGEgdmVyc2lvbmUgc3VjY2Vzc2l2YVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29tcHV0ZWQgPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oXCJ2MVwiKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb21wdXRlZCkudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImNvbXB1dGVOZXh0VmVyc2lvbiBkZXZlIHJlc3RpdHVpcmUgdW4gZXJyb3JlIHNlIGxhIHZlcnNpb25lIG5vbiDDqCBjb3JyZXR0YS5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4cGVjdGVkRXJyb3IgPSBuZXcgRXJyb3IoRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQpO1xyXG4gICAgICAgICAgICBleHBlY3RlZEVycm9yLm1lc3NhZ2UgPSBcIlNwZWNpZmllZCB2ZXJzaW9uIG0xNSBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KCgpID0+IHsgdmFyIGNvbXB1dGVkID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKFwibTE1XCIpOyB9KS50b1Rocm93KGV4cGVjdGVkRXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIGRldmUgcmVzdGl0dWlyZSBmYWxzZSBwZXIgZ2xpIG9nZ2V0dGkgY2hlIG5vbiBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmVlZHNVcGdyYWRlID0gVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0ZS5fX3R5cGVOYW1lLCB0ZS5fX3R5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChuZWVkc1VwZ3JhZGUpLnRvQmVGYWxzeShcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgc2hvdWxkIGhhdmUgcmV0dXJuZWQgZmFsc2UhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgZGV2ZSByZXN0aXR1aXJlIHRydWUgcGVyIGdsaSBvZ2dldHRpIGNoZSBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5lZWRzVXBncmFkZSA9IFVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodGUuX190eXBlTmFtZSwgdGUuX190eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QobmVlZHNVcGdyYWRlKS50b0JlVHJ1dGh5KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBzaG91bGQgaGF2ZSByZXR1cm5lZCB0cnVlIVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJ1cGdyYWRlIG11c3QgYmUgYWJsZSB0byB1cGdyYWRlIGEgUGVyc2lzdGFibGVPYmplY3QgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uIFsyIHN0ZXBzXVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodGUuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYxXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gPFRlc3RFbnRpdHk+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwidXBncmFkZSBtdXN0IGJlIGFibGUgdG8gdXBncmFkZSBhIFBlcnNpc3RhYmxlT2JqZWN0IHRvIGl0cyBsYXRlc3QgdmVyc2lvbiBbMyBzdGVwc11cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh0ZS5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSA8QTNTdGVwVXBncmFkYWJsZUl0ZW0+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYzXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3TmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBSZWdFeHAgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdFJlZ0V4cCA9IFwiL152WzAtOV0rXCI7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gXCJ2MTIzXCI7XHJcbiAgICAgICAgICAgIHRlLmFSZWdFeHAgPSBuZXcgUmVnRXhwKHRlc3RSZWdFeHApO1xyXG4gICAgICAgICAgICB2YXIgcmVnRXhwUmVzdWx0ID0gdGUuYVJlZ0V4cC50ZXN0KHRlc3RTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gPEFDbGFzc1dpdGhNYW55VHlwZXM+dGUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwKS50b0JlVHJ1dGh5KFwiYVJlZ0V4cCBpcyBub3QgYSBSZWdFeHAgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwLnRlc3QoXCJ2MTIzXCIpKS50b0VxdWFsKHJlZ0V4cFJlc3VsdCwgXCJhUmVnRXhwIG5vbiBzaSBjb21wb3J0YSBjb21lIGxhIFJlZ3VsYXJFeHByZXNzaW9uIG9yaWdpbmFsZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBEYXRlIHR5cGVzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlcygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRlLmFEYXRlID0gdGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSA8QUNsYXNzV2l0aE1hbnlUeXBlcz50ZS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhIERhdGUgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hRGF0ZS50b1N0cmluZygpICkudG9FcXVhbCh0ZXN0RGF0ZS50b1N0cmluZygpLCBcImFEYXRlIG5vbiDDqCBzdGF0YSByaXByaXN0aW5hdGEgY29tZSBEYXRlXCIpO1xyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVudGl0eX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7R3VpZH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeSBhcyBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnksIFVwZ3JhZGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5CYXNlU3RhdGVNYWNoaW5lIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVN0YXRlTWFjaGluZSA9IERERFRvb2xzLlN0YXRlTWFjaGluZS5CYXNlU3RhdGVNYWNoaW5lO1xyXG4gICAgaW1wb3J0IFN0YXRlTWFjaGluZUV2ZW50ID0gREREVG9vbHMuU3RhdGVNYWNoaW5lLlN0YXRlTWFjaGluZUV2ZW50O1xyXG4gICAgaW1wb3J0IEtpbmRzT2ZFdmVudEhhbmRsZXIgPSBERERUb29scy5TdGF0ZU1hY2hpbmUuS2luZHNPZkV2ZW50SGFuZGxlcjtcclxuICAgIGltcG9ydCBIYW5kbGVyUmVzdWx0ID0gREREVG9vbHMuU3RhdGVNYWNoaW5lLkhhbmRsZXJSZXN1bHQ7XHJcbiAgICBpbXBvcnQgUHJvbWlzZUhhbmRsZXIgPSBERERUb29scy5Qcm9taXNlcy5Qcm9taXNlSGFuZGxlcjtcclxuXHJcbiAgICBpbXBvcnQgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMgPSBERERUb29scy5SZXBvc2l0b3J5LkluTWVtb3J5UmVwb3NpdG9yeUFzeW5jO1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuXHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgdHlwZSBTdGF0ZXMgPSBcIlN0YXRlX0FcIiB8IFwiU3RhdGVfQlwiIHwgXCJTdGF0ZV9DXCI7XHJcbiAgICB0eXBlIEV2ZW50cyA9IFwiRnJvbV9BX3RvX0JcIiB8IFwiRnJvbV9CX3RvX0NcIjtcclxuICAgIHR5cGUgU3RhdGVNYWNoaW5lRGVmID0ge1tldmVudDogc3RyaW5nXToge1tmcm9tU3RhdHVzOiBzdHJpbmddOiBTdGF0ZXN9fTtcclxuICAgIFxyXG4gICAgdmFyIHN0YXRlTWFjaGluZURlZmluaXRpb246IFN0YXRlTWFjaGluZURlZiA9IHtcclxuICAgICAgICBcIkZyb21fQV90b19CXCI6IHtcclxuICAgICAgICAgICAgXCJTdGF0ZV9BXCI6IFwiU3RhdGVfQlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIkZyb21fQl90b19DXCI6IHtcclxuICAgICAgICAgICAgXCJTdGF0ZV9CXCI6IFwiU3RhdGVfQ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIGFTdGF0ZU1hY2hpbmUgZXh0ZW5kcyBCYXNlU3RhdGVNYWNoaW5lPFN0YXRlcywgRXZlbnRzPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiYVN0YXRlTWFjaGluZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgSWRGYWtlQWdncmVnYXRlIGV4dGVuZHMgR3VpZCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiSWRGYWtlQWdncmVnYXRlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsYXNzIEFGYWtlQWdncmVnYXRlIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8QUZha2VBZ2dyZWdhdGUsIElkRmFrZUFnZ3JlZ2F0ZT4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkFGYWtlQWdncmVnYXRlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHVibGljIHNtOiBhU3RhdGVNYWNoaW5lID0gbmV3IGFTdGF0ZU1hY2hpbmUoXCJTdGF0ZV9BXCIsIHN0YXRlTWFjaGluZURlZmluaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmYWtlU01SZXBvOiBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYzxBRmFrZUFnZ3JlZ2F0ZSwgSWRGYWtlQWdncmVnYXRlPjtcclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VTdGF0ZU1hY2hpbmVcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgc3V0OiBhU3RhdGVNYWNoaW5lO1xyXG4gICAgICAgIHZhciBzdXRJbkFnZ3JlZ2F0ZTogQUZha2VBZ2dyZWdhdGU7XHJcbiAgICAgICAgdmFyIGlkU3V0SW5BZ2dyZWdhdGU6IElkRmFrZUFnZ3JlZ2F0ZTtcclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHN1dCA9IG5ldyBhU3RhdGVNYWNoaW5lKFwiU3RhdGVfQVwiLCBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uKTtcclxuICAgICAgICAgICAgZmFrZVNNUmVwbyA9IG5ldyBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYzxBRmFrZUFnZ3JlZ2F0ZSwgSWRGYWtlQWdncmVnYXRlPihcIkFGYWtlQWdncmVnYXRlXCIpO1xyXG5cclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJhU3RhdGVNYWNoaW5lXCIsIFwidjFcIiwgYVN0YXRlTWFjaGluZSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiSWRGYWtlQWdncmVnYXRlXCIsIFwidjFcIiwgSWRGYWtlQWdncmVnYXRlKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJBRmFrZUFnZ3JlZ2F0ZVwiLCBcInYxXCIsIEFGYWtlQWdncmVnYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGlkU3V0SW5BZ2dyZWdhdGUgPSBuZXcgSWRGYWtlQWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHN1dEluQWdncmVnYXRlID0gbmV3IEFGYWtlQWdncmVnYXRlKCk7ICAgXHJcbiAgICAgICAgICAgIHN1dEluQWdncmVnYXRlLnNldEtleShpZFN1dEluQWdncmVnYXRlKTsgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIHRoZSBzdGF0ZSBtYWNoaW5lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFzbSA9IG5ldyBhU3RhdGVNYWNoaW5lKFwiU3RhdGVfQVwiLCBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFzbSBpbnN0YW5jZW9mIGFTdGF0ZU1hY2hpbmUpLnRvQmVUcnV0aHkoXCJUaGUgY3JlYXRlZCBvYmplY3QgaXMgbm90IGFuICdhU3RhdGVNYWNoaW5lJ1wiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmlsZSB0byBwcm9jZXNzIGV2ZW50IEZyb21fQV90b19CIHdoZW4gaW4gdGhlIFN0YXRlX0Egc3RhdHVzXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHN1dC5wcm9jZXNzRXZlbnQoXCJGcm9tX0FfdG9fQlwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQub2tUb0NoYW5nZSkudG9CZVRydXRoeShcIlRoZSBjaGFuZ2Ugc2hvdWxkIGJlIGFsbG93ZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHN1dC5nZXRDdXJyZW50U3RhdHVzKCkpLnRvRXF1YWwoXCJTdGF0ZV9CXCIsIFwiVGhlIFN0YXRlIG1hY2hpbmUgaXMgbm90IGluIFN0YXRlX0JcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3Qoc3V0LmdldFByZXZpb3VzU3RhdHVzKCkpLnRvRXF1YWwoXCJTdGF0ZV9BXCIsIFwiVGhlIFN0YXRlIG1hY2hpbmUgcHJldmlvdXMgc3RhdHVzIGlzIG5vdCBTdGF0ZV9BXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IE5PVCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0JfdG9fQyB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1c1wiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9CX3RvX0NcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVGYWxzeShcIlRoZSBjaGFuZ2Ugc2hvdWxkIE5PVCBiZSBhbGxvd2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgTk9UIGJlIHBvc3NpYmlsZSB0byBwcm9jZXNzIGV2ZW50IEZyb21fQV90b19CIHdoZW4gaW4gdGhlIFN0YXRlX0Egc3RhdHVzLCBpZiBhIGJlZm9yZUV4aXQgaGFuZGxlciBzYXlzIGl0IHNob3VsZCBub3QgYmUgZG9uZVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntyZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdChmYWxzZSwgXCJObywgeW91IGNhbid0IVwiKSl9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmJlZm9yZUV4aXRTdGF0dXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVGYWxzeShcIlRoZSBjaGFuZ2Ugc2hvdWxkIE5PVCBiZSBhbGxvd2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgTk9UIGJlIHBvc3NpYmlsZSB0byBwcm9jZXNzIGV2ZW50IEZyb21fQV90b19CIHdoZW4gaW4gdGhlIFN0YXRlX0Egc3RhdHVzLCBpZiBhIGJlZm9yZUVudGVyIGhhbmRsZXIgc2F5cyBpdCBzaG91bGQgbm90IGJlIGRvbmVcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57cmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQoZmFsc2UsIFwiTm8sIHlvdSBjYW4ndCFcIikpfSwgS2luZHNPZkV2ZW50SGFuZGxlci5iZWZvcmVFbnRlclN0YXR1cylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5wcm9jZXNzRXZlbnQoXCJGcm9tX0FfdG9fQlwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQub2tUb0NoYW5nZSkudG9CZUZhbHN5KFwiVGhlIGNoYW5nZSBzaG91bGQgTk9UIGJlIGFsbG93ZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBpdChcIk11c3QgYmUgcG9zc2liaWxlIHRvIHByb2Nlc3MgZXZlbnQgRnJvbV9BX3RvX0Igd2hlbiBpbiB0aGUgU3RhdGVfQSBzdGF0dXMsIGlmIGEgYWZ0ZXJFeGl0IGhhbmRsZXIgcmV0dXJucyBva1RvQ2hhbmdlID0gZmFsc2VcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57cmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQoZmFsc2UsIFwiTm8sIHlvdSBjYW4ndCFcIikpfSwgS2luZHNPZkV2ZW50SGFuZGxlci5hZnRlckV4aXRTdGF0dXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVUcnV0aHkoXCJUaGUgY2hhbmdlIHNob3VsZCBiZSBhbGxvd2VkIGFueWhvdyFcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3Qoc3V0LmdldEN1cnJlbnRTdGF0dXMoKSkudG9CZShcIlN0YXRlX0JcIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmlsZSB0byBwcm9jZXNzIGV2ZW50IEZyb21fQV90b19CIHdoZW4gaW4gdGhlIFN0YXRlX0Egc3RhdHVzLCBpZiBhIGFmdGVyRW50ZXIgaGFuZGxlciByZXR1cm5zIG9rVG9DaGFuZ2UgPSBmYWxzZVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntyZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdChmYWxzZSwgXCJObywgeW91IGNhbid0IVwiKSl9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRW50ZXJTdGF0dXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVUcnV0aHkoXCJUaGUgY2hhbmdlIHNob3VsZCBiZSBhbGxvd2VkIGFueWhvdyFcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3Qoc3V0LmdldEN1cnJlbnRTdGF0dXMoKSkudG9CZShcIlN0YXRlX0JcIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJUaGUgb3JkZXIgaW4gd2hpY2ggaGFuZGxlciBhcmUgY2FsbGVkIG11c3QgYmUgY29ycmVjdCFcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAxO1xyXG5cclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0JlKDEsIFwiYmVmb3JlRXhpdEhhbmRsZXIgbXVzdCBiZSB0aGUgZmlyc3QgY2FsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQodHJ1ZSwgXCJcIikpXHJcbiAgICAgICAgICAgIH0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRXhpdFN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoMiwgXCJiZWZvcmVFbnRlckhhbmRsZXIgbXVzdCBiZSB0aGUgc2Vjb25kIGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmJlZm9yZUVudGVyU3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9CZSgzLCBcImFmdGVyRXhpdEhhbmRsZXIgbXVzdCBiZSB0aGUgdGhpcmQgY2FsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQodHJ1ZSwgXCJcIikpXHJcbiAgICAgICAgICAgIH0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFeGl0U3RhdHVzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9CZSg0LCBcImFmdGVyRW50ZXJIYW5kbGVyIG11c3QgYmUgdGhlIGZvdXJ0aCBjYWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdCh0cnVlLCBcIlwiKSlcclxuICAgICAgICAgICAgfSwgS2luZHNPZkV2ZW50SGFuZGxlci5hZnRlckVudGVyU3RhdHVzKTtcclxuXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9CZSg1LCBcIm9uU3VjY2VzZnVsRXZlbnRQcm9jZXNzZWQgbXVzdCBiZSB0aGUgZmlmdGggY2FsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQodHJ1ZSwgXCJcIikpXHJcbiAgICAgICAgICAgIH0sIEtpbmRzT2ZFdmVudEhhbmRsZXIub25TdWNjZXNzZnVsRXZlbnRQcm9jZXNzZWQpO1xyXG5cclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0IChcIk11c3QgYmUgcG9zc2libGUgdG8gc3RvcmUgYW5kIHJldHJpZXZlIHRoZSBzdGF0ZSBtYWNoaW5lIGFzIGFuIGF0dHJpYnV0ZSBvZiBhbiBhZ2dyZWdhdGUuXCIsIChkb25lKSA9PiB7ICAgIFxyXG5cclxuICAgICAgICAgICAgdmFyIHN1dFJlbG9hZGVkOiBBRmFrZUFnZ3JlZ2F0ZTtcclxuXHJcbiAgICAgICAgICAgIGZha2VTTVJlcG8uc2F2ZShzdXRJbkFnZ3JlZ2F0ZSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFrZVNNUmVwby5nZXRCeUlkKGlkU3V0SW5BZ2dyZWdhdGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHN1dEluQWdncmVnYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3V0UmVsb2FkZWQgPSBzdXRJbkFnZ3JlZ2F0ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3V0SW5BZ2dyZWdhdGUuc20ucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHN1dFJlbG9hZGVkLnNtLmdldEN1cnJlbnRTdGF0dXMoKSkudG9FcXVhbChcIlN0YXRlX0JcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkVycm9ycyBkdXJpbmcgdGVzdDogXCIgKyBlcnJvciArIFwiIFwiICsgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5Gb3JCYXNlVmFsdWVPYmplY3Qge1xyXG5cclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IERERFRvb2xzLlZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RWYWx1ZU9iamVjdCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxUZXN0VmFsdWVPYmplY3Q+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHZpYTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwcml2YXRlIG51bWVybzogbnVtYmVyLFxyXG4gICAgICAgICAgICBwcml2YXRlIGNpdHRhOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2FwOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RWYWx1ZU9iamVjdF9BcnJheSBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxUZXN0VmFsdWVPYmplY3RfQXJyYXk+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9BcnJheVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIGFycmF5T2ZTb21ldGhpbmc6IGFueVtdXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdF9PYmplY3Q+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9PYmplY3RcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBzb21lT2JqZWN0OiBhbnlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUoXCJCYXNlVmFsdWVPYmplY3RcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RcIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5Gb3JCYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9BcnJheVwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfQXJyYXkpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X09iamVjdFwiLCBcInYxXCIsIDxhbnk+Q2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfT2JqZWN0KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVmFsdWVPYmplY3RzIG11c3QgYmUgY29tcGFyZWQgYWdhaW5zdCB0aGVpciBjb250ZW50LiAtIEJhc2UgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdChcclxuICAgICAgICAgICAgICAgIFwidmlhIEYuTWVzdGljYVwiLFxyXG4gICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgIFwiQXBpcm9cIixcclxuICAgICAgICAgICAgICAgIFwiNjIwMjFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdChcclxuICAgICAgICAgICAgICAgIFwidmlhIEYuTWVzdGljYVwiLFxyXG4gICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgIFwiQXBpcm9cIixcclxuICAgICAgICAgICAgICAgIFwiNjIwMjFcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgZGVsIGNhbXBvXCIsXHJcbiAgICAgICAgICAgICAgICA2OSxcclxuICAgICAgICAgICAgICAgIFwiR2Vub3ZhXCIsXHJcbiAgICAgICAgICAgICAgICBcInh4eHh4XCJcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlZhbHVlT2JqZWN0cyBtdXN0IGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlaXIgY29udGVudC4gLSBBcnJheVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X0FycmF5KFxyXG4gICAgICAgICAgICAgICAgW3sgcDE6IDMsIHAyOiA0MiB9LCB7IHAxOiA2LCBwMzogOTYgfV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMiA9IG5ldyBUZXN0VmFsdWVPYmplY3RfQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbeyBwMTogMywgcDI6IDQyIH0sIHsgcDE6IDYsIHAzOiA5NiB9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9BcnJheShcclxuICAgICAgICAgICAgICAgIFt7IHAxOiA2LCBwMzogOTYgfSwgeyBwMTogMywgcDI6IDQyIH1dXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMikpLnRvQmVUcnV0aHkoXCJ2bzEgaXMgcmVwb3J0ZWQgdG8gYmUgbm90IGVxdWFsIHRvIHZvMiwgd2hpbGUgaXQgaXMhXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzMpKS50b0JlRmFsc3koXCJ2bzEgaXMgcmVwb3J0ZWRlIHRvIGJlIGVxdWFsIHRvIHZvMywgd2hpbGUgaXQgaXMgbm90IVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJWYWx1ZU9iamVjdHMgbXVzdCBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZWlyIGNvbnRlbnQuIC0gT2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMiA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgYmUgcG9zc2libGUgdG8gZmluZCBtdWx0aXBsZSBWYWx1ZU9iamVjdHMgaW4gYW4gYXJyYXkgdmlhIHRoZSBmaW5kSW5BcnJheSBmdW5jdGlvblwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhcnJheU9mVk9zOiBUZXN0VmFsdWVPYmplY3RfT2JqZWN0W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDMsIHAyOiA0MiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzIgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDMsIHAyOiA0MiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDYsIHAzOiA5NiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzQgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDYsIHAzOiA5NiB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBhcnJheU9mVk9zLnB1c2godm8xKTtcclxuICAgICAgICAgICAgYXJyYXlPZlZPcy5wdXNoKHZvMik7XHJcbiAgICAgICAgICAgIGFycmF5T2ZWT3MucHVzaCh2bzMpO1xyXG4gICAgICAgICAgICBhcnJheU9mVk9zLnB1c2godm80KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB0b0ZpbmQgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDYsIHAzOiA5NiB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9GaW5kLmZpbmRJbkFycmF5KGFycmF5T2ZWT3MpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVzdWx0Lmxlbmd0aCkudG9FcXVhbCgyLCBcIlRoZSBmdW5jdGlvbiBkaWQgbm90IGZpbmQgdGhlIDIgZWxlbWVudHMgaXQgc2hvdWxkIGhhdmUgZm91bmQuXCIpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYXJyYXlPZlZPc1tpXS5lcXVhbHModG9GaW5kKSkudG9CZVRydXRoeShcIlNvbWUgZWxlbWVudHMgZm91bmQgZG8gbm90IGVxdWFscyBlbGVtZW50IHRvIGZpbmQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9Jbk1lbW9yeVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L1R5cGVSZWdpc3RyeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQgREREVG9vbHMgPSByZXF1aXJlKFwiLi9ERERUb29sc1wiKVxyXG5cclxuLy8gaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0Vycm9ycyBhcyBSZXBvRXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJbk1lbW9yeVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge1R5cGVSZWdpc3RyeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L1R5cGVSZWdpc3RyeVwiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzIHtcclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBERERUb29scy5BZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgRXJyb3JzID0gREREVG9vbHMuUmVwb3NpdG9yeS5FcnJvcnM7XHJcbiAgICBpbXBvcnQgSW5NZW1vcnlSZXBvc2l0b3J5ID0gREREVG9vbHMuUmVwb3NpdG9yeS5Jbk1lbW9yeVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8S2V5PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBpZDogR3VpZDtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuS2V5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hpbGRFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PENoaWxkRW50aXR5LCBLZXk+IHtcclxuICAgICAgICBwdWJsaWMgYXJyYXlPZktleXM6IEtleVtdID0gW107XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgYW5vdGhlckRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIEtleT4ge1xyXG4gICAgICAgIHB1YmxpYyBhcnJheU9mRW50aXRpZXM6IENoaWxkRW50aXR5W10gPSBbXTtcclxuICAgICAgICBwdWJsaWMgYW5vbnltb3VzT2JqZWN0OiBhbnkgPSB7fTtcclxuICAgICAgICAvLyBVc2VkIHRvIHRlc3Qgb2JqZWN0cyByZWZlcmVuY2VzIHJlY29uc3RpdHV0aW9uLlxyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcbiAgICAgICAgcHVibGljIGFub3RoZXJPYmplY3RSZWZlcmVuY2U6IGFueSA9IHt9O1xyXG5cclxuICAgICAgICBwdWJsaWMgYU51bGxSZWZlcmVuY2UgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBhblVuZGVmaW5lZEl0ZW0gPSB1bmRlZmluZWQ7IFxyXG4gICAgICAgIHB1YmxpYyBhRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBhVGVzdFByb3BlcnR5OiBzdHJpbmcgPSBcImEgdGVzdCB2YWx1ZSAhXCI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUZXN0UmVwb3NpdG9yeSBleHRlbmRzIEluTWVtb3J5UmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBLZXk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbWFuYWdlZFR5cGVOYW1lID0gXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoVGVzdFJlcG9zaXRvcnkubWFuYWdlZFR5cGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuS2V5XCIsIFwidjFcIiwgS2V5KTtcclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCIsIFwidjFcIiwgQ2hpbGRFbnRpdHkpO1xyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuVGVzdEFnZ3JlZ2F0ZVwiLCBcInYxXCIsIFRlc3RBZ2dyZWdhdGUpO1xyXG5cclxuICAgIGRlc2NyaWJlKFwiSW5NZW1vcnlSZXBvc2l0b3J5XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIGEgUmVwb3NpdG9yeSBjbGFzc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZXBvIGluc3RhbmNlb2YgVGVzdFJlcG9zaXRvcnkpLnRvRXF1YWwodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCB0aHJvdyAnS2V5Tm90U2V0JyB3aGVuIHNhdmluZyBhbiBlbnRpdHkgd2l0aG91dCBrZXkgc2V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5LZXlOb3RTZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIHNhdmUgYW4gZW50aXR5IHdpdGggdGhlIGtleSBzZXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIml0IHNob3VsZCB0aHJvdyBJdGVtTm90Rm91bmQgaWYgYSBrZXkgaXMgbm90IHByZXNlbnQgaW4gdGhlIHJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5MiA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuXHJcblxyXG4gICAgICAgICAgICBleHBlY3QoKCkgPT4geyByZXBvLmdldEJ5SWQoa2V5MikgfSkudG9UaHJvdyhuZXcgRXJyb3IoRXJyb3JzLkl0ZW1Ob3RGb3VuZCkpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IG1hbmFnZSBudWxsIGFuZCB1bmRlZmluZWQgZGF0YVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcbiAgICAgICAgICAgIHZhciBhVGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmFEYXRlID0gYVRlc3REYXRlO1xyXG5cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hTnVsbFJlZmVyZW5jZSkudG9CZU51bGwoXCJhTnVsbFJlZmVyZW5jZSBpcyBub3QgbnVsbCwgd2hpbGUgaXQgc2hvdWxkXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFuVW5kZWZpbmVkSXRlbSkudG9CZVVuZGVmaW5lZChcImFuVW5kZWZpbmVkSXRlbSBpcyBub3QgdW5kZWZpbmVkLCB3aGlsZSBpdCBzaG91bGRcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIGEgZGF0ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcbiAgICAgICAgICAgIHZhciBhVGVzdERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmFEYXRlID0gYVRlc3REYXRlO1xyXG5cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hRGF0ZSBpbnN0YW5jZW9mIERhdGUpLnRvQmVUcnV0aHkoXCJhRGF0ZSBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgd2hpbGUgaXQgc2hvdWxkXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSBhbiBhcnJheVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ldyBDaGlsZEVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFycmF5T2ZFbnRpdGllcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcnJheU9mS2V5cy5wdXNoKG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2FsdmF0b1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJSZWN1cGVyYXRvXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVE9ETyBUaGUgZm9sbG93aW5nIHRlc3Qgc3RhcnRlZCB0byBmYWlsIGFmdGVyIGdldHRpbmcgYmFjayB0byBuYW1lc3BhY2VzLi4uXHJcbiAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZCBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoQXJyYXkuaXNBcnJheShyZWxvYWRlZC5hcnJheU9mRW50aXRpZXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllcy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyB0KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjZSA9IHJlbG9hZGVkLmFycmF5T2ZFbnRpdGllc1t0XTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChBcnJheS5pc0FycmF5KGNlLmFycmF5T2ZLZXlzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjZS5hcnJheU9mS2V5cy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSAnYW5vbnltb3VzJyBvYmplY3RzLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFub3RoZXJFbnRpdHkgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhbm90aGVyRW50aXR5LnNldEtleShuZXcgS2V5KCkpO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSA9IGFub3RoZXJFbnRpdHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlID0gNDI7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbG9hZGVkID0gcmVwby5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuICAgIFxyXG4gICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFub255bW91c09iamVjdC5hTnVtYmVyVHlwZSkudG9FcXVhbCg0MiwgXCJQcm9wZXJ0eSBhTnVtYmVyVHlwZSB3YXMgbm90IGNvcnJlY3RseSByZWNvbnN0aXR1dGVkLlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgcmVmZXJlbmNlcyB0byB0aGUgc2FtZSBpbnN0YW5jZS5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIkZlYXR1cmUgbm9uIGFuY29yYSBzdmlsdXBwYXRhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5ID0ge1xyXG4gICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkEgdGVzdCB2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgYUNvbXBvc2l0ZVByb3BlcnR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYVByb3BlcnR5OiBcIkFub3RoZXIgdGVzdCB2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpdGVtLmFuT2JqZWN0UmVmZXJlbmNlID0gYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5O1xyXG4gICAgICAgICAgICBpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UgPSBhbk9iamVjdFJlZmVyZW5jZWRJbk1vcmVUaGFuT25lUHJvcGVydHk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoaXRlbS5hbk9iamVjdFJlZmVyZW5jZSkudG9FcXVhbChpdGVtLmFub3RoZXJPYmplY3RSZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgdGhlIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYW5PYmplY3RSZWZlcmVuY2UpLnRvRXF1YWwocmVsb2FkZWQuYW5vdGhlck9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlJldmlzaW9uSWQgbXVzdCBiZSBpbmNyZW1lbnRlZCBvbmx5IGlmIG9iamVjdCB0byBiZSBzYXZlZCBkaWZmZXJzIGZyb20gb2JqZWN0IHNhdmVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBpdChcIlJldmlzaW9uSWQgbXVzdCBOT1QgYmUgaW5jcmVtZW50ZWQgd2hlbiB1c2luZyAncmVwbGFjZScgbWV0aG9kXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuXHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZXBvLnJlcGxhY2UoZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiV2hlbiBzYXZpbmcgYSBzdGFsZSBpdGVtIChfX3Jldmlzb25JZCBsb3dlciB0aGFuIHNhdmVkIGl0ZW0gX19yZXZpc2lvbklkKSBhbiBleGNlcHRpb24gbXVzdCBiZSB0aHJvd24uXCIsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpOyBcclxuICAgICAgICAgICAgZS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZiA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGYuc2V0S2V5KGtleSk7XHJcbiAgICAgICAgICAgIGYuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShmKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZG4ndCBnZXQgaGVyZS4uLlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaChxKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocSBpbnN0YW5jZW9mIEVycm9yKS50b0JlVHJ1dGh5KFwiUmV0dXJuZWQgZXJyb3Igc2hvdWxkIGJlIGluc3RhbmNlIG9mIGNsYXNzIEVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHEubmFtZSkudG9FcXVhbChFcnJvcnMuU2F2aW5nT2xkT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLlJlcEFzeW5jIHtcclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBERERUb29scy5BZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgRXJyb3JzID0gREREVG9vbHMuUmVwb3NpdG9yeS5FcnJvcnM7XHJcbiAgICBpbXBvcnQgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMgPSBERERUb29scy5SZXBvc2l0b3J5LkluTWVtb3J5UmVwb3NpdG9yeUFzeW5jO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuICAgIGltcG9ydCBGYWN0b3J5RXJyb3JzID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRXJyb3JzO1xyXG5cclxuXHJcbiAgICAvLyBEZWZpbmVzIGEgY2xhc3MgdGhhdCB3aWxsIG5vdCBiZSByZWdpc3RlcmVkIHdpdCB0aGUgdHlwZXMgZmFjdG9yeVxyXG4gICAgZXhwb3J0IGNsYXNzIE5vdFJlZ2lzdGVyZWQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8Tm90UmVnaXN0ZXJlZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIk5vdFJlZ2lzdGVyZWRcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8S2V5PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBpZDogR3VpZDtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuS2V5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hpbGRFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PENoaWxkRW50aXR5LCBLZXk+IHtcclxuICAgICAgICBwdWJsaWMgYXJyYXlPZktleXM6IEtleVtdID0gW107XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGFub3RoZXJEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0QWdncmVnYXRlIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VGVzdEFnZ3JlZ2F0ZSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZFbnRpdGllczogQ2hpbGRFbnRpdHlbXSA9IFtdO1xyXG4gICAgICAgIHB1YmxpYyBhbm9ueW1vdXNPYmplY3Q6IGFueSA9IHt9O1xyXG4gICAgICAgIC8vIFVzZWQgdG8gdGVzdCBvYmplY3RzIHJlZmVyZW5jZXMgcmVjb25zdGl0dXRpb24uXHJcbiAgICAgICAgcHVibGljIGFuT2JqZWN0UmVmZXJlbmNlOiBhbnkgPSB7fTtcclxuICAgICAgICBwdWJsaWMgYW5vdGhlck9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcblxyXG4gICAgICAgIC8vIFVzZWQgdG8gdGVzdCBleGNlcHRpb25zIGluIG9iamVjdCByZWNvbnN0aXR1dGlvbi5cclxuICAgICAgICBwdWJsaWMgYU5vdFJlZ2lzdGVyZWRJbnN0YW5jZTogTm90UmVnaXN0ZXJlZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcHVibGljIGFOdWxsUmVmZXJlbmNlID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgYW5VbmRlZmluZWRSZWZlcmVuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcHVibGljIGFEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBhVGVzdFByb3BlcnR5OiBzdHJpbmcgPSBcImEgdGVzdCB2YWx1ZSAhXCI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM8VGVzdEFnZ3JlZ2F0ZSwgS2V5PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIG1hbmFnZWRUeXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFRlc3RSZXBvc2l0b3J5Lm1hbmFnZWRUeXBlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5LZXlcIiwgXCJ2MVwiLCBLZXkpO1xyXG4gICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCIsIFwidjFcIiwgQ2hpbGRFbnRpdHkpO1xyXG4gICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIiwgXCJ2MVwiLCBUZXN0QWdncmVnYXRlKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjcmliZShcIkluTWVtb3J5UmVwb3NpdG9yeUFzeW5jXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIGEgUmVwb3NpdG9yeSBjbGFzc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZXBvIGluc3RhbmNlb2YgVGVzdFJlcG9zaXRvcnkpLnRvRXF1YWwodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCB0aHJvdyAnS2V5Tm90U2V0JyB3aGVuIHNhdmluZyBhbiBlbnRpdHkgd2l0aG91dCBrZXkgc2V0XCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBzYXZlIGFuIGVudGl0eSB3aXRoIHRoZSBrZXkgc2V0XCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXQgc2hvdWxkIHRocm93IEl0ZW1Ob3RGb3VuZCBpZiBhIGtleSBpcyBub3QgcHJlc2VudCBpbiB0aGUgcmVwb3NpdG9yeVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5MiA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBvLmdldEJ5SWQoa2V5MilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJldHVybmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiV2Ugc2hvdWxkIG5vdCBiZSBoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGVyci5uYW1lKS50b0VxdWFsKEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSBhIERhdGVcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uYURhdGUgPSB0ZXN0RGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBvLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlbG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYURhdGUpLnRvRXF1YWwodGVzdERhdGUsIFwiYURhdGUgaXMgbm90IGV2YWx1YXRlZCBhcyB0aGUgcHJlIHNhdmUgdmFsdWUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgYW4gYXJyYXlcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbmV3IENoaWxkRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYXJyYXlPZkVudGl0aWVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmFycmF5T2ZLZXlzLnB1c2gobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNhbHZhdG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwby5nZXRCeUlkKGtleSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZCBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KEFycmF5LmlzQXJyYXkocmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBpcyBub3QgYW4gQXJyYXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzLmxlbmd0aCkudG9FcXVhbChudW1iZXJPZkVsZW1lbnRzVG9BZGQsIFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2UgPSByZWxvYWRlZC5hcnJheU9mRW50aXRpZXNbdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KEFycmF5LmlzQXJyYXkoY2UuYXJyYXlPZktleXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZktleXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChjZS5hcnJheU9mS2V5cy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlICdhbm9ueW1vdXMnIG9iamVjdHMuXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFub3RoZXJFbnRpdHkgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhbm90aGVyRW50aXR5LnNldEtleShuZXcgS2V5KCkpO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSA9IGFub3RoZXJFbnRpdHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlID0gNDI7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVsb2FkZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gVGhlIGZvbGxvd2luZyB0ZXN0IHN0YXJ0ZWQgdG8gZmFpbCBhZnRlciBnZXR0aW5nIGJhY2sgdG8gbmFtZXNwYWNlcy4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hbm9ueW1vdXNPYmplY3QuYU51bWJlclR5cGUpLnRvRXF1YWwoNDIsIFwiUHJvcGVydHkgYU51bWJlclR5cGUgd2FzIG5vdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgcmVmZXJlbmNlcyB0byB0aGUgc2FtZSBpbnN0YW5jZS5cIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHBlbmRpbmcoXCJGZWF0dXJlIG5vbiBhbmNvcmEgc3ZpbHVwcGF0YVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eSA9IHtcclxuICAgICAgICAgICAgICAgIGFQcm9wZXJ0eTogXCJBIHRlc3QgdmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGFDb21wb3NpdGVQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFQcm9wZXJ0eTogXCJBbm90aGVyIHRlc3QgdmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbk9iamVjdFJlZmVyZW5jZSA9IGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eTtcclxuICAgICAgICAgICAgaXRlbS5hbm90aGVyT2JqZWN0UmVmZXJlbmNlID0gYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5O1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGl0ZW0uYW5PYmplY3RSZWZlcmVuY2UpLnRvRXF1YWwoaXRlbS5hbm90aGVyT2JqZWN0UmVmZXJlbmNlKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG8uZ2V0QnlJZChrZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFuT2JqZWN0UmVmZXJlbmNlKS50b0VxdWFsKHJlbG9hZGVkLmFub3RoZXJPYmplY3RSZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgdGhlIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJSZXZpc2lvbklkIG11c3QgYmUgaW5jcmVtZW50ZWQgb25seSBpZiBvYmplY3QgdG8gYmUgc2F2ZWQgZGlmZmVycyBmcm9tIG9iamVjdCBzYXZlZFwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFJldmlzaW9uSWQgc2hvdWxkIG5vdCBiZSBpbmNyZW1lbnRlZCBpZiBpdGVtIHdhcyBuZXchXHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5zYXZlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG8uc2F2ZShlKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyB0aGUgaXRlbS4gXCIgKyBlcnIubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IE5PVCBiZSBpbmNyZW1lbnRlZCBpZiB1c2luZyAncmVwbGFjZScgbWV0aG9kLlwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV2aXNpb25JZCBzaG91bGQgbm90IGJlIGluY3JlbWVudGVkIGlmIGl0ZW0gd2FzIG5ldyFcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXBvLnNhdmUoZSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDEpO1xyXG4gICAgICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5yZXBsYWNlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJFeGNlcHRpb24gdGhyb3duIGJ5IGl0ZW0gcmVjb25zdGl0dXRpb24sIG11c3QgYmUgY2F0Y2hlZCBpbiB0aGUgZXJyb3IgZnVuY3Rpb24gb2YgdGhlIHJldHVybmVkIHByb21pc2VcIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcbiAgICAgICAgICAgIGUuYU5vdFJlZ2lzdGVyZWRJbnN0YW5jZSA9IG5ldyBOb3RSZWdpc3RlcmVkKCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZCBub3QgaGF2ZSBiZWVuIGhlcmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIubmFtZSkudG9FcXVhbChGYWN0b3J5RXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJXZSBzaG91bGQgbm90IGhhdmUgYmVlbiBoZXJlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiV2hlbiBzYXZpbmcgYSAnc3RhbGUnIGl0ZW0gKF9fcmV2aXNpb25JZCBsb3dlciB0aGFuIHNhdmVkIHZlcnNpb24ncyBfX3JldmlzaW9uSWQpIGFuIEV4Y2VwdGlvbiBtdXN0IGJlIHRocm93bi5cIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZi5zZXRLZXkoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBmLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5zYXZlKGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhpcyBzYXZlIHNob3VsZCBub3QgYmUgc3VjY2VzZnVsIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIgaW5zdGFuY2VvZiBFcnJvcikudG9CZVRydXRoeShcIlNob3VsZCBoYXZlIGJlZW4gcmV0dXJuZWQgYW4gZXJyb3IuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlcnIubmFtZSkudG9FcXVhbChFcnJvcnMuU2F2aW5nT2xkT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yRGlzcGF0Y2hlciB7XHJcblxyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSW5Qcm9jZXNzRGlzcGF0Y2hlciA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JblByb2Nlc3NEaXNwYXRjaGVyO1xyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gREREVG9vbHMuUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcblxyXG4gICAgY2xhc3MgYUNsYXNzQ29udGFpbmluZ0FuSGFuZGxlckFuZFNvbWVPdGhlclN0dWZmIHtcclxuXHJcbiAgICAgICAgcHVibGljIGFOdW1iZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgdGhpcy5ldmVudEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFGdW5jdGlvbkluTXlDb250ZXh0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmFOdW1iZXIgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV2ZW50SGFuZGxlcihldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV4cGVjdChldmVudCkubm90LnRvQmVVbmRlZmluZWQoXCJUaGUgZXZlbnQgYXJyaXZlZCB0byB0aGUgZXZlbnRoYW5kbGVyIGlzIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuYUZ1bmN0aW9uSW5NeUNvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgYURvbWFpbkV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PGFEb21haW5FdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJblByb2Nlc3NEaXNwYXRjaGVyXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJNdWx0aXBsZSByZWdpc3RyYXRpb24gb2YgdGhlIHNhbWUgZXZlbnRoYW5kbGVyLCBtdXN0IGJlIHRyZWF0ZWQgYXMgb25lLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdHdpY2UsIGJ1dCBkaXNwYXRjaGVyIHNob3VsZCBjYWxsIGl0IG9uY2UuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFmdGVyIGRlcmVnaXN0ZXJpbmcgYW4gaGFuZGxlciwgZGlzcGF0Y2ggbXVzdCBub3QgY2FsbCBpdCBhbnltb3JlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEp1c3QgdG8gdmVyaWZ5IHRoYXQgSGFuZGxlciBoYXMgYmVlbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFsbCBoYW5kbGVycyB3aWxsIGJlIGNhbGxlZCBieSBkaXNwYXRjaCwgZXZlbiBpZiBoYW5kbGVycyB0aHJvdy5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgYVRocm93aW5nSGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgYVRocm93aW5nSGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYVRocm93aW5nSGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm1lc3NhZ2UpLnRvRXF1YWwoXCJFcnJvcjpFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcXG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWVzIHRoYXQgdGhlIG5vbiBUaHJvd2luZyBIYW5kbGVyIGhhcyBub3QgYmVlbiB0aHJvd24uXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFUaHJvd2luZ0hhbmRsZXIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJIYW5kbGVycyBtdXN0IGJlIGNhbGxlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGV5IGFyZSByZWdpc3RlcmVkLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRFdmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNlY29uZEV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSGFuZGxlcnMgbXVzdCBiZSBjYWxsZWQgaW4gdGhlaXIgb3JnaW5hbCAndGhpcycgY29udGV4dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzV2l0aEhhbmRsZXIgPSBuZXcgYUNsYXNzQ29udGFpbmluZ0FuSGFuZGxlckFuZFNvbWVPdGhlclN0dWZmKCk7XHJcblxyXG4gICAgICAgICAgICBzcHlPbihjbGFzc1dpdGhIYW5kbGVyLCBcImFGdW5jdGlvbkluTXlDb250ZXh0XCIpLmFuZC5jYWxsVGhyb3VnaCgpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgY2xhc3NXaXRoSGFuZGxlci5ldmVudEhhbmRsZXIsIGNsYXNzV2l0aEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNsYXNzV2l0aEhhbmRsZXIuYUZ1bmN0aW9uSW5NeUNvbnRleHQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgYmUgcG9zc2libGUgdG8gcmUtcmVnaXN0ZXIgYW4gaGFuZGxlciBpbiBhIGRpZmZlcmVudCBpbnN0YW5jZWQgb2YgdGhlIGRpc3BhdGNoZXIuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NXaXRoSGFuZGxlciA9IG5ldyBhQ2xhc3NDb250YWluaW5nQW5IYW5kbGVyQW5kU29tZU90aGVyU3R1ZmYoKTtcclxuXHJcbiAgICAgICAgICAgIHNweU9uKGNsYXNzV2l0aEhhbmRsZXIsIFwiYUZ1bmN0aW9uSW5NeUNvbnRleHRcIikuYW5kLmNhbGxUaHJvdWdoKCk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBjbGFzc1dpdGhIYW5kbGVyLmV2ZW50SGFuZGxlciwgY2xhc3NXaXRoSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgY2xhc3NXaXRoSGFuZGxlci5ldmVudEhhbmRsZXIsIGNsYXNzV2l0aEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNsYXNzV2l0aEhhbmRsZXIuYUZ1bmN0aW9uSW5NeUNvbnRleHQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJkaXNwYXRjaCBtdXN0IHJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gYWxsIGV2ZW50IGhhbmRsZXJzIGFyZSBkb25lXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlY29uZFJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZmlyc3RSdW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFuSGFuZGxlclJldHVybmluZ0FQcm9taXNlKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFJ1biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFuSGFuZGxlclJldHVybmluZ0FQcm9taXNlKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBhRG9tYWluRXZlbnQoKSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmlyc3RSdW4pLnRvQmVUcnV0aHkoXCJQcm9taXNlIHJlc29sdmVkIGJ1dCBmaXJzdCBoYW5kbGVyIGRpZG4ndCBydW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChzZWNvbmRSdW4pLnRvQmVUcnV0aHkoXCJQcm9taXNlIHJlc29sdmVkIGJ1dCBzZWNvbmQgaGFuZGxlciBkaWRuJ3QgcnVuLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwicHJvbWlzZXMgcmVqZWN0ZWQgYnkgZXZlbnRzIG11c3QgYmUgbG9nZ2VkXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgc3B5T24oY29uc29sZSwgJ2xvZycpLmFuZC5jYWxsVGhyb3VnaCgpO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kUnVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhbkhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFJ1biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShcIk9rXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoXCJ0aGlzIHRleHQgbXVzdCBiZSBsb2dnZWQgdG8gY29uc29sZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBhbm90aGVySGFuZGxlclJldHVybmluZ0FQcm9taXNlKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYW5IYW5kbGVyUmV0dXJuaW5nQVByb21pc2UpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGNvbnNvbGUubG9nKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHNlY29uZFJ1bikudG9CZVRydXRoeShcIlByb21pc2UgcmVzb2x2ZWQgYnV0IHNlY29uZCBoYW5kbGVyIGRpZG4ndCBydW5cIik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuVmFsdWVPYmplY3RzLk1vbmV5IHtcclxuXHJcbiAgICBpbXBvcnQgTW9uZXkgPSBERERUb29scy5WYWx1ZU9iamVjdHMuTW9uZXk7XHJcbiAgICBpbXBvcnQgQ3VycmVuY2llcyA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5DdXJyZW5jaWVzO1xyXG4gICAgaW1wb3J0IEN1cnJlbmN5ID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkN1cnJlbmN5O1xyXG5cclxuICAgIGRlc2NyaWJlKFwiTW9uZXlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcInNob3VsZCBiZSBwb3NzaWJpbGUgdG8gaW5zdGFudGlhdGUgYSBuZXcgTW9uZXkgdmFsdWUgb2JqZWN0IHdpdGggYW4gYW1vdW50IGFzIG51bWJlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYU1vbmV5ID0gbmV3IE1vbmV5KDEwMDApO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFNb25leSBpbnN0YW5jZW9mIE1vbmV5KS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInNob3VsZCBiZSBwb3NzaWJpbGUgdG8gaW5zdGFudGlhdGUgYSBuZXcgTW9uZXkgdmFsdWUgb2JqZWN0IGZyb20gYW4gZXhpc3RpbmcgTW9uZXkgVmFsdWUgT2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBhTW9uZXkgPSBuZXcgTW9uZXkoMTAwMCkgICAgO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFub3RoZXJNb25leSA9IG5ldyBNb25leShhTW9uZXkpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leSBpbnN0YW5jZW9mIE1vbmV5KS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYW5vdGhlck1vbmV5LmdldEFtb3VudCgpKS50b0VxdWFsKGFNb25leS5nZXRBbW91bnQoKSwgXCJBbW91bnQgaXMgbm90IHRoZSBzYW1lIG9uIHRoZSB0byBvYmplY3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leS5nZXRBbW91bnRFdXJvKCkpLnRvRXF1YWwoYU1vbmV5LmdldEFtb3VudEV1cm8oKSwgXCJBbW91bnRFdXJvIGlzIG5vdCB0aGUgc2FtZSBvbiB0aGUgdG8gb2JqZWN0c1wiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkuZ2V0Q3VycmVuY3koKSkudG9FcXVhbChhTW9uZXkuZ2V0Q3VycmVuY3koKSwgXCJDdXJyZW5jeSBpcyBub3QgdGhlIHNhbWUgb24gdGhlIHRvIG9iamVjdHNcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInNob3VsZCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIG5ldyBNb25leSBvYmplY3Qgc3BlY2lmeWluZyBhIEN1cnJlbmN5IGFuZCBhbiBleGNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhTW9uZXkgPSBuZXcgTW9uZXkoMTAwMCwgQ3VycmVuY2llcy5ET0xMQVIsIDAuNTAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFNb25leS5nZXRBbW91bnQoKSkudG9FcXVhbCgxMDAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFNb25leS5nZXRBbW91bnRFdXJvKCkpLnRvRXF1YWwoNTAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFNb25leS5nZXRDdXJyZW5jeSgpIGluc3RhbmNlb2YgQ3VycmVuY3kpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJzaG91bGQgYmUgcG9zc2libGUgdG8gZ2V0IGEgbmV3IE1vbmV5IG9iamVjdCBzcGVjaWZ5aW5nIGEgbmV3IEN1cnJlbmN5IGFuZCBhIG5ldyBleGNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhTW9uZXkgPSBuZXcgTW9uZXkoMTAwMCwgQ3VycmVuY2llcy5ET0xMQVIsIDAuNTAwKTtcclxuICAgICAgICAgICAgdmFyIG5ld01vbmV5ID0gYU1vbmV5LmNoYW5nZUV4Y2hhbmdlKDEpLmNoYW5nZUN1cnJlbmN5KEN1cnJlbmNpZXMuRVVSTyk7XHJcbiAgICAgICAgICAgIGV4cGVjdChuZXdNb25leS5nZXRBbW91bnQoKSkudG9FcXVhbCgxMDAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KG5ld01vbmV5LmdldEFtb3VudEV1cm8oKSkudG9FcXVhbCgxMDAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KG5ld01vbmV5LmdldEN1cnJlbmN5KCkgaW5zdGFuY2VvZiBDdXJyZW5jeSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImNoYW5nZUFtb3VudCBtdXN0IHJldHVybiBhIG5ldyBNb25leSBvYmplY3Qgd2l0aCB0aGUgbmV3IGFtb3VudC5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFNb25leSA9IG5ldyBNb25leSgxMDAwLCBDdXJyZW5jaWVzLkRPTExBUiwgMC41MDApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFub3RoZXJNb25leSA9IG5ldyBNb25leShhTW9uZXkpLmNoYW5nZUFtb3VudCgxNTAwKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkgaW5zdGFuY2VvZiBNb25leSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leS5nZXRBbW91bnQoKSkudG9FcXVhbCgxNTAwKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkuZ2V0QW1vdW50RXVybygpKS50b0VxdWFsKDc1MCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYW5vdGhlck1vbmV5LmdldEN1cnJlbmN5KCkpLnRvRXF1YWwoYU1vbmV5LmdldEN1cnJlbmN5KCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5TZXJpYWxpemF0aW9uIHtcclxuIFxyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgRGVzZXJpYWxpemVyID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG4gICAgaW1wb3J0IFNlcmlhbGl6YWJsZURhdGUgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZURhdGU7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXphYmxlTnVsbCA9IERERFRvb2xzLlNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlTnVsbDtcclxuICAgIGltcG9ydCBTZXJpYWxpemFibGVSZWdFeHAgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZVJlZ0V4cDtcclxuXHJcbiAgICAvLyB0aGlzIGJpZyBvYmplY3Qgd2FzIGdlbmVyYXRlZCB1c2luZyBodHRwOi8vd3d3Lmpzb24tZ2VuZXJhdG9yLmNvbS9cclxuICAgIC8vI3JlZ2lvbiBCaWcgb2JqZWN0IGZvciBzZXJpYWxpemF0aW9uL2Rlc2VyaWFsaXphdGlvbiBwZXJmb3JtYW5jZSB0ZXN0c1xyXG4gICAgbGV0IGJpZ09iamVjdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWQzMGZkZWI4MjY1ZTRmMTlcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAwLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJhZWMwZTAyYy04MDcwLTRjZjMtOWQwYS0yZGFkODVjOGYwOGRcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwzMzcuMjZcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzNyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldhcnJlbiBIYXJ0XCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJJREVBTElTXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ3YXJyZW5oYXJ0QGlkZWFsaXMuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTgxKSA0NDctMjk2NFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI2MjEgQm9lcnVtIFBsYWNlLCBIZWdpbnMsIENvbG9yYWRvLCA4MDgyXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJTaW50IHNpbnQgY29uc2VjdGV0dXIgcXVpcyBwcm9pZGVudC4gTWFnbmEgZXN0IGV0IG1vbGxpdCBkb2xvcmUgYWxpcXVpcCB0ZW1wb3IgdWxsYW1jbyBhZCB2b2x1cHRhdGUgaWQgZWl1c21vZCBjdWxwYSBvZmZpY2lhIGN1cGlkYXRhdC4gRW5pbSBuaXNpIGR1aXMgYW1ldCBlc3QgdmVuaWFtIG9jY2FlY2F0LiBRdWkgY29tbW9kbyBhdXRlIHRlbXBvciBzaXQgcXVpIHRlbXBvciBtaW5pbSBhZGlwaXNpY2luZyBub24gcmVwcmVoZW5kZXJpdC4gRXggbm9uIGV4IGxhYm9yZSBkb2xvciBsYWJvcmlzIGV4Y2VwdGV1ciBvZmZpY2lhIGN1cGlkYXRhdCBpZCB0ZW1wb3IgZXQgZXQgZG9sb3IuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDUtMjZUMDU6Mjc6MzggLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTc2LjgzNDk5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMC4xMzA5MDIsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInByb2lkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInF1aXNcIixcclxuICAgICAgICAgICAgICAgIFwiZXN0XCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3RcIixcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1dFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBhcmtzIEhvbGxhbmRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2VjZWxpYSBWYW5jZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZW5qYW1pbiBNaWNoYWVsXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBXYXJyZW4gSGFydCEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTM1MDA2MmUwMzI5MzAzMWFcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIwODg2NjI3Mi1mYWU1LTQ4M2ItYTFhMS0zNzQ4OTYzMGJhNjBcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw2ODAuNjJcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQW5nZWxpcXVlIExhcmFcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQUNMSU1BXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhbmdlbGlxdWVsYXJhQGFjbGltYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NTYpIDU1NC0yNDI0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjgwOCBPdHNlZ28gU3RyZWV0LCBDb25lc3RvZ2EsIEd1YW0sIDQ1NTRcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkFuaW0gb2ZmaWNpYSBhbGlxdWEgc2ludCBsYWJvcnVtIGFuaW0gcGFyaWF0dXIuIFNpbnQgdWxsYW1jbyBhZCBlc3NlIHVsbGFtY28uIEFuaW0gZWl1c21vZCBleGNlcHRldXIgYXV0ZSBudWxsYSBhdXRlIGRvIGVzc2UgcGFyaWF0dXIuIERvbG9yIHZlbGl0IHBhcmlhdHVyIGV4ZXJjaXRhdGlvbiBmdWdpYXQgZnVnaWF0IG5vc3RydWQgbWluaW0gbm9uIGNvbnNlY3RldHVyIHF1aXMuIEVzc2UgZG9sb3JlIGV4Y2VwdGV1ciBtaW5pbSBpcHN1bSBlc3NlIGVzdCBxdWkgZGVzZXJ1bnQgdm9sdXB0YXRlIGRlc2VydW50LiBTaW50IGN1bHBhIG1hZ25hIGxhYm9yaXMgYW1ldCBzdW50IHNpdCBxdWkgbm9zdHJ1ZCBwYXJpYXR1ciBldCBwYXJpYXR1ciBtb2xsaXQuIENvbnNlY3RldHVyIGRvIGxhYm9yZSBub3N0cnVkIGFkaXBpc2ljaW5nIGF1dGUgZXhjZXB0ZXVyIG5pc2kgc2ludCBzaW50IG1pbmltIGRlc2VydW50IGVsaXQgcXVpcyBldS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wMS0yMlQwOToyNzoxMCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAyOC4zMjk0OTIsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDczLjc5NDgzNyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibWFnbmFcIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImluXCIsXHJcbiAgICAgICAgICAgICAgICBcImluXCIsXHJcbiAgICAgICAgICAgICAgICBcInRlbXBvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hZGdlIEh1bXBocmV5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVsc2EgQ3VydGlzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxlc2xpZSBMYW1iZXJ0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBBbmdlbGlxdWUgTGFyYSEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk0YjU0ZTZhNjBlOWVkZTQxXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZjQ3MDU3MzQtNWUyYi00OWM1LTg4ODAtNWVhZWZkMzEwMmRiXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDkyOC4xOVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI3LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDb2xsaWVyIEJ1cm5zXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJDT01CT0dFTlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY29sbGllcmJ1cm5zQGNvbWJvZ2VuLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzMikgNTg1LTI0MjhcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTI5IEh1bnRlcmZseSBQbGFjZSwgRmFsY29uYWlyZSwgTmV3IEhhbXBzaGlyZSwgNzgyOFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQ29uc2VjdGV0dXIgc3VudCBxdWlzIG5vbiBxdWkgaXJ1cmUgaWQgZW5pbSBsYWJvcmUgYW1ldCB0ZW1wb3IuIEV4ZXJjaXRhdGlvbiBkdWlzIG5pc2kgdWxsYW1jbyB2b2x1cHRhdGUgc2ludCBjb21tb2RvIHF1aSBtYWduYSBsYWJvcmlzIHJlcHJlaGVuZGVyaXQgbWFnbmEgdm9sdXB0YXRlIG5pc2kuIEV4IGRvIGFsaXF1YSBvY2NhZWNhdCBzdW50IHJlcHJlaGVuZGVyaXQgdmVuaWFtIHRlbXBvciBlbmltIGZ1Z2lhdC4gRXNzZSB2b2x1cHRhdGUgZG8gb2ZmaWNpYSBldSBhZGlwaXNpY2luZyBsYWJvcmUgb2NjYWVjYXQgZWl1c21vZC4gUmVwcmVoZW5kZXJpdCByZXByZWhlbmRlcml0IGRvIGZ1Z2lhdCBzdW50IGNpbGx1bS4gUXVpcyBkb2xvciBlYSBldSBtaW5pbS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNy0wMi0yNlQwODo1NDozNSAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA3OC44NjY0NzMsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNDEuMTQ0MDgyLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJlYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdWxwYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwiaW5cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEdWtlIENsYXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9kc29uIENvbmxleVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXJpIEF5ZXJzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBDb2xsaWVyIEJ1cm5zISBZb3UgaGF2ZSAxIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWU2NjI5YWRkYjE2M2JmZDlcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIyZmVjNTU2MC05MzkwLTRjNWQtYjkzNC1kOWE5NDk3NjM5OTZcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsOTY0LjEyXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzMsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHdXRocmllIEdhaW5lc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiU0xBTUJEQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZ3V0aHJpZWdhaW5lc0BzbGFtYmRhLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk5MikgNTUxLTMxOTBcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzcxIEJhbm5lciBBdmVudWUsIE1vcmFpZGEsIE9yZWdvbiwgNTQ5NVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRXNzZSBwcm9pZGVudCBjdXBpZGF0YXQgcXVpIGNvbnNlcXVhdCB0ZW1wb3IgZWl1c21vZCBleCBzaW50IG1hZ25hIHJlcHJlaGVuZGVyaXQgYWxpcXVpcC4gTm9uIHJlcHJlaGVuZGVyaXQgaXJ1cmUgc2l0IGNvbnNlY3RldHVyIG9mZmljaWEgaW5jaWRpZHVudC4gRXhlcmNpdGF0aW9uIHN1bnQgZXhlcmNpdGF0aW9uIGRlc2VydW50IGRvbG9yZSBjb25zZWN0ZXR1ciBjdXBpZGF0YXQgZXhlcmNpdGF0aW9uIGRvbG9yIGlwc3VtIGFkaXBpc2ljaW5nIGNpbGx1bSBjb25zZXF1YXQuIFZlbGl0IGN1bHBhIGlydXJlIGxhYm9yaXMgZWxpdCBsYWJvcmUuIFJlcHJlaGVuZGVyaXQgYWRpcGlzaWNpbmcgdWxsYW1jbyBxdWkgZW5pbSBlaXVzbW9kIGVsaXQgaXJ1cmUgZXhjZXB0ZXVyIGVzc2Ugc2l0IGFsaXF1aXAgY2lsbHVtIGRlc2VydW50IGlkLiBJbiBtaW5pbSBwcm9pZGVudCBtaW5pbSBtYWduYS4gVmVuaWFtIGVhIG9mZmljaWEgZWEgaWQgYXV0ZSBkZXNlcnVudC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wNy0xMVQwNzo1MzoyNCAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNjYuOTIwMjM5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAzMC42NTIyOTcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIixcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcIm51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIixcclxuICAgICAgICAgICAgICAgIFwiY29tbW9kb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhZFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVmZmllIEJ1Y2hhbmFuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhbmRpY2UgUG93ZWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNjaG1pZHQgRG95bGVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEd1dGhyaWUgR2FpbmVzISBZb3UgaGF2ZSA0IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWQ3Zjc4NmVlYWRhN2VmYzJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI5MTI3NzZiYy0wMzYyLTQzYTctYWI2YS1iMWEwZmZlNzY5NDlcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsNDg5LjIzXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlZpbnNvbiBNb3Jyb3dcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkVMRU5UUklYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ2aW5zb25tb3Jyb3dAZWxlbnRyaXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODMwKSA1NjktMjAwNlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzMzYgVmVybm9uIEF2ZW51ZSwgQWJpcXVpdSwgVmlyZ2luIElzbGFuZHMsIDExNDZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkF1dGUgbmlzaSBhdXRlIGN1bHBhIGR1aXMgY29tbW9kby4gSXBzdW0gcGFyaWF0dXIgYWxpcXVpcCBjb21tb2RvIG9mZmljaWEgYWxpcXVhLiBDdXBpZGF0YXQgbm9zdHJ1ZCBkb2xvcmUgY29uc2VjdGV0dXIgZXNzZSBtYWduYSBpcHN1bSBpZCBleGNlcHRldXIgZHVpcyBvZmZpY2lhIGV4ZXJjaXRhdGlvbi5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0xMS0xM1QxMDowODoyMSAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNDkuMTg4Njk4LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMzYuMzU2OTM3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIixcclxuICAgICAgICAgICAgICAgIFwidXRcIixcclxuICAgICAgICAgICAgICAgIFwiTG9yZW1cIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3Jpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tb2RvXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmlhbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pcmFuZGEgR2liYnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQnJpZ2l0dGUgTW9saW5hXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBhdHJpY2lhIENhbXBvc1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgVmluc29uIE1vcnJvdyEgWW91IGhhdmUgOSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlhZDgyNjQwN2IxNjE4OGVhXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYzhhMzBhMjktZThkMy00MTQyLWJiMjgtYTM4NGM3ODYxMDU4XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNzQzLjQxXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjksXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJXYXJuZXIgQ2xlbWVudHNcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk9SR0FOSUNBXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ3YXJuZXJjbGVtZW50c0BvcmdhbmljYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MjYpIDQ2Ni0yNjc0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjM0MSBIaWNrcyBTdHJlZXQsIE9zbW9uZCwgTmV3IE1leGljbywgNjMwMVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQWxpcXVhIGV4ZXJjaXRhdGlvbiBxdWkgY29tbW9kbyBlc3QgbWFnbmEgZnVnaWF0IHBhcmlhdHVyIGN1cGlkYXRhdCBleCBhbmltIGFkaXBpc2ljaW5nLiBEb2xvcmUgbW9sbGl0IGxhYm9yZSBjb25zZXF1YXQgZW5pbSBpcHN1bSBjb21tb2RvLiBWZW5pYW0gZG9sb3IgbmlzaSB1bGxhbWNvIG5vc3RydWQgbW9sbGl0IGFtZXQuIEFuaW0gaXBzdW0gcXVpIGxhYm9yaXMgbWluaW0gcXVpcyBhbWV0IG5vc3RydWQuIFF1aXMgbnVsbGEgbGFib3JpcyBjb25zZWN0ZXR1ciBjdXBpZGF0YXQgdWxsYW1jbyBhZGlwaXNpY2luZyBleCBudWxsYSB1dCB2ZW5pYW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDEtMTNUMDk6MjQ6NDEgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMTYuNTYyNzg5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTIyLjU1MjQyMyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImVzdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXJpYXR1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJvY2NhZWNhdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRheWxvciBGYXJtZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG9uaWEgVmVsYXpxdWV6XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFsbGVuIEZhcmxleVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgV2FybmVyIENsZW1lbnRzISBZb3UgaGF2ZSAxMCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTE5MWJjMTg2ODhhZGQ2NGVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI1OTA4OWQ0MC1iMWEyLTRlYmYtYjg3My1lOTE3ZjkxODUxMTNcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw3NTIuNTRcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkplYW5uZSBNb250b3lhXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkVWRU5UQUdFXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqZWFubmVtb250b3lhQGV2ZW50YWdlLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg2NCkgNTM2LTIzNzVcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiOTc2IE1lcnNlcmVhdSBDb3VydCwgSGFyaW5nLCBMb3Vpc2lhbmEsIDQ2MTdcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1vbGxpdCBkbyBub3N0cnVkIGF1dGUgZG9sb3JlIGRvbG9yIGRvIGlydXJlIGN1bHBhIG9jY2FlY2F0LiBOb3N0cnVkIGN1bHBhIGRvbG9yZSBpcHN1bSByZXByZWhlbmRlcml0IHNpdCBpbmNpZGlkdW50IHZvbHVwdGF0ZSBhdXRlIHByb2lkZW50IGR1aXMgcmVwcmVoZW5kZXJpdCBvZmZpY2lhLiBWb2x1cHRhdGUgbm9zdHJ1ZCBtYWduYSBhZCBkb2xvcmUgaWQgY29uc2VxdWF0IGV1IGlkIG5vc3RydWQgY2lsbHVtIGVpdXNtb2QgZWxpdCBkb2xvci5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wMy0zMVQxMTowMToxMiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNTQuOTY3NjkyLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA0Ny40ODAyMixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwicXVpXCIsXHJcbiAgICAgICAgICAgICAgICBcImluY2lkaWR1bnRcIixcclxuICAgICAgICAgICAgICAgIFwibnVsbGFcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLcmlzdGVuIEdyZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9zZWxsYSBCdXJrZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYWluIFZhenF1ZXpcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEplYW5uZSBNb250b3lhISBZb3UgaGF2ZSAxIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTliZDI5MjFkMjFiZDY4ZWFmXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMzNhZTlkM2UtMTljZC00OGZhLWI1NmUtYzAxZTkyYzE1ZjY4XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDM5My4zNVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3RvdXQgQm93ZXJzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJURVJBUFJFTkVcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInN0b3V0Ym93ZXJzQHRlcmFwcmVuZS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NDcpIDQyNS0zMTA5XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjUzMCBQYWNpZmljIFN0cmVldCwgR3JhbmR2aWV3LCBQYWxhdSwgMTMwMVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQWxpcXVpcCBsYWJvcnVtIHByb2lkZW50IHVsbGFtY28gZW5pbSBxdWlzIGVpdXNtb2QgYWRpcGlzaWNpbmcgY29uc2VjdGV0dXIuIE1hZ25hIHNpdCBmdWdpYXQgbWluaW0gc2ludCBlc3NlIGVuaW0gdGVtcG9yIGZ1Z2lhdCB2b2x1cHRhdGUgZnVnaWF0LiBFeCBwcm9pZGVudCBjb25zZWN0ZXR1ciBwcm9pZGVudCBtYWduYSBjb25zZXF1YXQgZG8gZW5pbSB2ZW5pYW0gdm9sdXB0YXRlIG9jY2FlY2F0IGVuaW0gY29tbW9kbyBub24uIEV4IHN1bnQgc2ludCBldCBub24gbGFib3JpcyBMb3JlbSBudWxsYSBjb25zZWN0ZXR1ciB0ZW1wb3IgZXhjZXB0ZXVyIG1pbmltIGVsaXQgZXhjZXB0ZXVyLiBEbyBhZCBtaW5pbSB2ZWxpdCBjaWxsdW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDEtMTFUMDU6MjI6MjEgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMzEuNzk4NDY0LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtNzEuODIxNTExLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJldVwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlcIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZXNzZVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vZW1pIFZhbGVudGluZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHcmVnb3J5IEZyYW5jb1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKYWNraWUgR2F0ZXNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFN0b3V0IEJvd2VycyEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5Nzk5Njc2MjkzZTE2N2VhOVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDgsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjUyZDY0OGE1LWQxNzAtNDEwMS04NmJmLTM3MjdjOTFjYzIzNVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDQ4Mi41N1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNYXJ0aW5leiBHcmVlblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiTUlDUk9OQVVUXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJtYXJ0aW5lemdyZWVuQG1pY3JvbmF1dC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NjkpIDQ0My0zNzA5XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjk3MCBCcmFnZyBDb3VydCwgQWxsZWdoZW55dmlsbGUsIEthbnNhcywgNjM5XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJVdCBkbyBkb2xvciBlbGl0IHF1aXMgZG9sb3JlIGluY2lkaWR1bnQgY29uc2VxdWF0IGRvbG9yIHF1aXMgcXVpcyBzdW50LiBQcm9pZGVudCBzdW50IG5vc3RydWQgbGFib3J1bSB0ZW1wb3IgaW4gbGFib3J1bSBvZmZpY2lhIGFuaW0gZG9sb3IgbGFib3JlLiBDdXBpZGF0YXQgaWQgbm9uIG9mZmljaWEgYWxpcXVpcCBkdWlzIGFkLiBEb2xvcmUgZXQgY29tbW9kbyBlc3NlIGFtZXQgbmlzaS4gTGFib3J1bSBlbmltIGR1aXMgYWQgb2ZmaWNpYS4gRnVnaWF0IHZvbHVwdGF0ZSBpbmNpZGlkdW50IHNpbnQgbGFib3Jpcy4gRWEgcmVwcmVoZW5kZXJpdCBpZCBhbWV0IGFkIHZvbHVwdGF0ZSBkZXNlcnVudCBhZCBkdWlzIGluIGV1IGFuaW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDEtMTVUMDU6MDc6NTggLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTU1Ljg0OTkwNyxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTY2LjU5NTU5NSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibm9zdHJ1ZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmlzXCIsXHJcbiAgICAgICAgICAgICAgICBcInN1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJMb3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlzXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNY3BoZXJzb24gTWFsb25lXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVhcmxpbmUgQnJvY2tcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWlsbGllIE15ZXJzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBNYXJ0aW5leiBHcmVlbiEgWW91IGhhdmUgNCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5N2UzYjYyYWQ1ZWE0YTJhNFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDksXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImExOGEyODM5LTZjM2EtNGYyNC05ZDM3LThjMmY3OWU0MDVlZVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDUwMC4wOVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFja2x5biBMb3dlXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlZBTFJFREFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImphY2tseW5sb3dlQHZhbHJlZGEuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTAzKSA0ODMtMjUzMlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzNjcgS29zc3V0aCBQbGFjZSwgQ2F6YWRlcm8sIEhhd2FpaSwgNjQxXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJOaXNpIHVsbGFtY28gbGFib3JpcyBsYWJvcmlzIG5vbiBpZCBjdXBpZGF0YXQuIEluY2lkaWR1bnQgcXVpIGVpdXNtb2QgbGFib3JlIGNvbW1vZG8gZWl1c21vZCBsYWJvcnVtIGVuaW0gdWxsYW1jbyBwYXJpYXR1ciBub24gYWRpcGlzaWNpbmcgbGFib3J1bSBub24gZXNzZS4gUmVwcmVoZW5kZXJpdCBudWxsYSB2ZWxpdCBtYWduYSBhbGlxdWEgbWluaW0gbW9sbGl0IHN1bnQgZXhlcmNpdGF0aW9uLiBMYWJvcnVtIGlwc3VtIGFkIGNpbGx1bSBzaXQgZGVzZXJ1bnQgZXN0IGFkaXBpc2ljaW5nIGluIGFkaXBpc2ljaW5nLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAxLTI3VDEwOjA1OjIyIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0xMS40NzEyNTgsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMzAuMzcwNzAxLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWFcIixcclxuICAgICAgICAgICAgICAgIFwibm9zdHJ1ZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWFcIixcclxuICAgICAgICAgICAgICAgIFwiaW5cIixcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVpcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJMb3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbmltXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxhbmNhIE5vZWxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyeWFubmUgRGFsdG9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJ1cmdlc3MgU2FudGFuYVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSmFja2x5biBMb3dlISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTAwY2E5NGMxOWMxZTMzOWZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxMCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMzdmMGU5NzQtNTI0MS00Nzg4LWFlNzctNTk1MTgwMmFlMTY0XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMjc0LjgyXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJIb29kIENvb2tcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlRXSUdHRVJZXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJob29kY29va0B0d2lnZ2VyeS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NDEpIDUzMi0yMDA0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjk0MiBDcmVhbWVyIFN0cmVldCwgUm93ZSwgTWljaGlnYW4sIDM3MzNcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkZ1Z2lhdCBhZCBwYXJpYXR1ciBlbmltIG5pc2kgbmlzaSBkdWlzIGVzdCBjb25zZWN0ZXR1ci4gRG9sb3JlIHV0IG5pc2kgaWQgZXhlcmNpdGF0aW9uLiBBdXRlIGVpdXNtb2QgZXhlcmNpdGF0aW9uIGlwc3VtIGNpbGx1bSBkZXNlcnVudCBkb2xvcmUgY29uc2VjdGV0dXIgdWxsYW1jbyBkdWlzLiBBbWV0IHVsbGFtY28gY3VwaWRhdGF0IGRvbG9yIGluIGVsaXQgZG9sb3JlIGV1IHF1aS4gU3VudCBxdWlzIGFsaXF1YSB2ZW5pYW0gcGFyaWF0dXIgbGFib3JpcyByZXByZWhlbmRlcml0IGVsaXQgYWQgZHVpcyBlc3NlIGRvbG9yZS4gRHVpcyBlc3QgZWl1c21vZCBtb2xsaXQgbm9uIGV4IGVsaXQgdm9sdXB0YXRlIGlwc3VtIGNpbGx1bSBudWxsYSB2b2x1cHRhdGUgbGFib3J1bSBjb25zZXF1YXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMTItMThUMDU6MDY6MzUgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTE1LjM0Nzk4NixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTEyOC41NjA1MTksXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXN0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VxdWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJyYWR5IFJpdmVyc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCeWVycyBXaGl0ZWhlYWRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGh5bGxpcyBNY2d1aXJlXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBIb29kIENvb2shIFlvdSBoYXZlIDcgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YjliZDljMTA1NDE4ZDdlOFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDExLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJhZWRhZWRlZC0yYjc0LTQyMTYtOGE3Yy03YjQ1ODRjNzgyMTJcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw5MTcuODNcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG9yYSBLZWxsZXJcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSU1LQU5cIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImxvcmFrZWxsZXJAaW1rYW4uY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTI1KSA0MTEtMzg1MlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzNDcgUnVnYnkgUm9hZCwgSnVndG93biwgTWFpbmUsIDIzMDBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlBhcmlhdHVyIGFtZXQgY3VscGEgZW5pbSB0ZW1wb3IgbWluaW0gcmVwcmVoZW5kZXJpdCBkb2xvciBmdWdpYXQgTG9yZW0gbWluaW0gbWluaW0gY29uc2VjdGV0dXIgdXQuIExhYm9yaXMgZWl1c21vZCBleGNlcHRldXIgZWxpdCBjdWxwYSBldCBkb2xvcmUgZG9sb3IgcXVpIG9mZmljaWEuIEFkaXBpc2ljaW5nIG9mZmljaWEgZW5pbSBkdWlzIGVzdCBub3N0cnVkIHF1aS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wOC0zMVQwOTo0NDozOSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtMjUuNTY0NjUsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC04Mi40NDI1MTcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImV1XCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm9jY2FlY2F0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJpc2hvcCBIYW5jb2NrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN1c2FubmUgR29uemFsZXNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVuc29uIEplZmZlcnNvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTG9yYSBLZWxsZXIhIFlvdSBoYXZlIDMgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NjVmMjk4NDIwZGJmNjA5ZVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDEyLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI5NjBjNGQzMi0zNjI1LTQ2NDMtODIxMC0zZjZmZmUyOTNhNzRcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw1NTIuNDlcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkF1dHVtbiBLZW5uZWR5XCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkFSQ0hJVEFYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhdXR1bW5rZW5uZWR5QGFyY2hpdGF4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzOCkgNDI5LTMzMDJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzM3IExha2UgQXZlbnVlLCBBbGFtbywgV2lzY29uc2luLCAxODkxXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJWZWxpdCB2b2x1cHRhdGUgaWQgZG8gcHJvaWRlbnQgZG9sb3IgY29uc2VxdWF0IGluIGVzc2Ugdm9sdXB0YXRlIG9jY2FlY2F0IGlwc3VtIHNpdC4gRXNzZSByZXByZWhlbmRlcml0IHF1aSBpbmNpZGlkdW50IHN1bnQgYWQgZWxpdCBlc3QgZWxpdCBudWxsYSB2ZWxpdCBjdXBpZGF0YXQgbGFib3JlIHVsbGFtY28uIEN1cGlkYXRhdCBpZCBhbGlxdWEgbWluaW0gZnVnaWF0IHZvbHVwdGF0ZSBzdW50IHJlcHJlaGVuZGVyaXQgbm9zdHJ1ZCBhbGlxdWEgZHVpcyBhbGlxdWlwIHRlbXBvciBleCBhdXRlLiBNaW5pbSBmdWdpYXQgY3VscGEgY2lsbHVtIG1pbmltIGF1dGUgbGFib3JpcyBjdXBpZGF0YXQgYW5pbSBlbmltIG1pbmltLiBFdCBjaWxsdW0gdmVuaWFtIHNpdCBldSBvZmZpY2lhIHNpbnQgYW1ldCBtb2xsaXQgYWxpcXVpcC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wMy0wN1QwNjo1OToyNSAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtODIuMjU1MjY4LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTE4LjE4NzkzNixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYXV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJlYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcHN1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2b2x1cHRhdGVcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFteSBTaGVybWFuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktpbm5leSBCYXJyb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2lsdmlhIE9sc29uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBBdXR1bW4gS2VubmVkeSEgWW91IGhhdmUgOCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTY2YWE3OGNhZDg4MzRmNWNcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxMyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZjcxOWZjMzctY2Q2ZS00YTk5LTgwZjItMzQ4MzRlMTk1NTUxXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDg3Ni40NlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGFtbW9uZCBIaWdnaW5zXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJUQUxFTkRVTEFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImhhbW1vbmRoaWdnaW5zQHRhbGVuZHVsYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5OTgpIDU3MS0yNDk5XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjg3NyBNb250YXVrIEF2ZW51ZSwgTWFsbywgV2FzaGluZ3RvbiwgOTIzNFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiTGFib3J1bSB1bGxhbWNvIG9jY2FlY2F0IHF1aSBlYSBxdWlzIG1hZ25hIGR1aXMuIFVsbGFtY28gZWxpdCBjb25zZWN0ZXR1ciB0ZW1wb3IgZXN0IGxhYm9yZSBpcHN1bSBub24gZG9sb3IgaXBzdW0gbm9uLiBFdCBlbGl0IG1hZ25hIGVpdXNtb2Qgb2ZmaWNpYSB2ZW5pYW0gdGVtcG9yIGxhYm9yZSBpZCBlc3QgZnVnaWF0IGVsaXQgc3VudCBlbGl0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA2LTE5VDA5OjIwOjE2IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC02NS42MjQxMzQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMjguMDA1NjQ2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWlwXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGVcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInF1aVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1dFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhcmxvdyBNZWRpbmFcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGVzbGV5IFBhdHRvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEYW5pZWxsZSBCcm93blwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSGFtbW9uZCBIaWdnaW5zISBZb3UgaGF2ZSA0IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk0MmM0ZGVlNjIwYjM4OWY4XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMTQsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjQ4N2VhYWVmLWIxZjQtNDg0ZC04YzBkLTUxNWQ3ZjdlNjdiNVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDY1Ni44MlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMzLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJMb2dhbiBHYWxsZWdvc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiTUVUUk9aXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJsb2dhbmdhbGxlZ29zQG1ldHJvei5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5ODEpIDU4Ny0yNDc2XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQwOSBDbGlmdG9uIFBsYWNlLCBIYXJyaXNvbiwgVGV4YXMsIDI5MTBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1vbGxpdCBjb21tb2RvIGRvbG9yZSBpbiBub24gY3VscGEgbW9sbGl0IG51bGxhIG51bGxhIGV1IHBhcmlhdHVyIG1hZ25hIHV0LiBDdXBpZGF0YXQgZXNzZSBjb25zZXF1YXQgZXUgYW1ldCBtYWduYSBhbmltIHF1aSBkb2xvciB2ZWxpdCBkb2xvcmUgYW1ldCBlc3NlIG9mZmljaWEgbGFib3Jpcy4gT2NjYWVjYXQgZWxpdCB2b2x1cHRhdGUgbGFib3J1bSBjdWxwYS4gSW5jaWRpZHVudCBpZCBzaXQgbGFib3JlIHV0IHNpbnQgbm9uIGxhYm9yZSByZXByZWhlbmRlcml0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA4LTI1VDEyOjQ1OjIzIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDU3Ljc1OTg4MixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTQzLjQ5OTI5NCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGNlcHRldXJcIixcclxuICAgICAgICAgICAgICAgIFwiZXN0XCIsXHJcbiAgICAgICAgICAgICAgICBcInBhcmlhdHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImluY2lkaWR1bnRcIixcclxuICAgICAgICAgICAgICAgIFwibm9zdHJ1ZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhvbG1hbiBCdWxsb2NrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhbGRlcm9uIEN1cnJ5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJ1Y2tuZXIgR29vZHdpblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTG9nYW4gR2FsbGVnb3MhIFlvdSBoYXZlIDUgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlmNmVhMzVkMjg1OGY3ZDcyXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMTUsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjgzNmQ2ZWUzLTExYWEtNDFiNS1hNDU0LThlNDE4NDk0NTNjNVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDMxNC44MFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI3LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2FicmluYSBCZWFyZFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJBQ0NFTFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwic2FicmluYWJlYXJkQGFjY2VsLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg2MSkgNDcyLTI0NzdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzgyIEZsZWV0IFN0cmVldCwgTmVpYmVydCwgUmhvZGUgSXNsYW5kLCA2ODVcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIklwc3VtIGFuaW0gbWFnbmEgY2lsbHVtIGVzdCBkbyBpbmNpZGlkdW50IG1hZ25hIGV0IHVsbGFtY28uIE1pbmltIG9mZmljaWEgbGFib3J1bSBvZmZpY2lhIGN1bHBhIG5vbiBlbmltIG5vc3RydWQgZHVpcyBpbiBhbGlxdWEuIFV0IGFtZXQgZW5pbSB2b2x1cHRhdGUgZXNzZSBkZXNlcnVudCBkbyBpbiB2ZW5pYW0gY2lsbHVtIGR1aXMuIEVuaW0gbWluaW0gYWxpcXVpcCBmdWdpYXQgZWEgYWxpcXVpcCBhbWV0IGVhIGFtZXQgdmVuaWFtIGF1dGUuIFBhcmlhdHVyIGNvbnNlcXVhdCBMb3JlbSBub24gYW1ldCBMb3JlbSBpcHN1bS4gRG8gcXVpIHN1bnQgbGFib3JpcyBub3N0cnVkIGVzc2UgaXJ1cmUuIEFtZXQgc2l0IGRvbG9yIGV4IGV4IGFkaXBpc2ljaW5nIGV4IGFsaXF1aXAgaXJ1cmUgbGFib3JlIG1pbmltIGFsaXF1YSBleGVyY2l0YXRpb24gcmVwcmVoZW5kZXJpdCBjdXBpZGF0YXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDktMjlUMDk6NTQ6MDcgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMzYuNjk1NzkxLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA5Mi45MDg3NzQsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmlhbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGNlcHRldXJcIixcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwicmVwcmVoZW5kZXJpdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkR1ZGxleSBGcmFua3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmFjcXVlbGluZSBEdWRsZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW9yZW5vIEJ1cmdlc3NcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFNhYnJpbmEgQmVhcmQhIFlvdSBoYXZlIDIgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWFmZDZhNjJiMzNmYWNiMzJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxNixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNDI1M2MyYjctMGYwOC00NmUyLWI1MTItOWI3YTc5MjllOWI4XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsNTMzLjM1XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzAsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJIZWF0aCBSYXltb25kXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJFTVBJUklDQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiaGVhdGhyYXltb25kQGVtcGlyaWNhLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg1NSkgNTIwLTI3MTdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTEzIEhlbmRyaWNrc29uIFBsYWNlLCBLZW5uZWR5dmlsbGUsIFBlbm5zeWx2YW5pYSwgODE3MlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiTm9uIG9jY2FlY2F0IGVuaW0gY29uc2VjdGV0dXIgb2NjYWVjYXQuIERlc2VydW50IGVhIG5vc3RydWQgYW1ldCBlaXVzbW9kLiBGdWdpYXQgZG9sb3IgY2lsbHVtIGRvbG9yZSBleGNlcHRldXIgdm9sdXB0YXRlIG1vbGxpdCBlYSBhbWV0IGFuaW0uIE9mZmljaWEgbWluaW0gY29uc2VjdGV0dXIgdXQgZWxpdCBsYWJvcmUgb2ZmaWNpYS4gQWxpcXVpcCBhbGlxdWlwIGRvbG9yIG9jY2FlY2F0IGxhYm9yZSBjdWxwYSBkbyBhdXRlIGlkIHN1bnQgZXQuIFVsbGFtY28gcmVwcmVoZW5kZXJpdCBkbyBxdWkgZXQgc2ludCBlaXVzbW9kIGNvbnNlY3RldHVyIGNpbGx1bSBlc3NlIG1pbmltIG9jY2FlY2F0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAxLTExVDAyOjI5OjE5IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC01LjE3OTg4OCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNTYuODA0MDI5LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJkZXNlcnVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tb2RvXCIsXHJcbiAgICAgICAgICAgICAgICBcImVpdXNtb2RcIixcclxuICAgICAgICAgICAgICAgIFwiZXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJvY2NhZWNhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlY3RldHVyXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2VubmVkeSBXYWxsc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMaXphIFNjaHVsdHpcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVmlja2kgTW9ucm9lXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBIZWF0aCBSYXltb25kISBZb3UgaGF2ZSA2IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5ZjY3ZjUwNDVlMGNlOTRmNFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDE3LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJiMWJjNDg1MC0zMGRjLTQ0ZDQtOTQ4My01ZTNkZGZkNDMwNjFcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsMjU1LjIwXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzUsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGaXNjaGVyIEh1Z2hlc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRFlOT1wiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZmlzY2hlcmh1Z2hlc0BkeW5vLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgyMikgNTg5LTIxMzhcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjA2IE1lcm1haWQgQXZlbnVlLCBCZXJnb28sIE5vcnRoIERha290YSwgNTA5N1wiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVm9sdXB0YXRlIG5vbiBjdWxwYSBsYWJvcmlzIG51bGxhIGlkIGFsaXF1YSBpZCB1bGxhbWNvIHZvbHVwdGF0ZS4gRG9sb3Igbm9uIG1pbmltIG1pbmltIGNvbnNlcXVhdCBtYWduYSBldSBlc3QgTG9yZW0gTG9yZW0gdGVtcG9yIGRvbG9yZSBjdWxwYS4gVmVsaXQgcXVpIHNpbnQgZXNzZSBzaXQgdmVsaXQgdXQgb2ZmaWNpYSBpbmNpZGlkdW50IGxhYm9ydW0gcGFyaWF0dXIgZWl1c21vZCBpcnVyZSBleGVyY2l0YXRpb24gb2NjYWVjYXQuIFZlbmlhbSBhdXRlIGluY2lkaWR1bnQgaXJ1cmUgdm9sdXB0YXRlIGVzdCB2ZW5pYW0gZXhjZXB0ZXVyIGNpbGx1bSBpZCBpbmNpZGlkdW50LiBEb2xvcmUgZG9sb3IgY3VscGEgY2lsbHVtIG9jY2FlY2F0IGRvIHZlbGl0IGRvbG9yZSB0ZW1wb3IuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMTEtMjZUMDk6NTI6NDggLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNjAuMDIxMjcsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC04Ni4zMDQzMzYsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInRlbXBvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjdXBpZGF0YXRcIixcclxuICAgICAgICAgICAgICAgIFwicGFyaWF0dXJcIixcclxuICAgICAgICAgICAgICAgIFwiZG9cIixcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFtZXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGbG9zc2llIE1ja25pZ2h0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbm5pZSBTdGV2ZW5zb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxhbmtlbnNoaXAgRWF0b25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEZpc2NoZXIgSHVnaGVzISBZb3UgaGF2ZSA2IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWEyN2JkMDUyZTBiZWNjMDRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAxOCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMjg2YzBkNzMtMzVlYy00MzM0LWIxMmMtM2JlMmRkN2U5MTRlXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDgzNy4xOFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI0LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmV2ZXJseSBHaWxtb3JlXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIklTT1NUUkVBTVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYmV2ZXJseWdpbG1vcmVAaXNvc3RyZWFtLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkzOCkgNTEzLTI0NjJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTc2IEJveW50b24gUGxhY2UsIENoaWNvcGVlLCBBcml6b25hLCA4NTg5XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJFeGNlcHRldXIgZXNzZSBlaXVzbW9kIHZlbGl0IGxhYm9ydW0gbmlzaSBlc3QuIElydXJlIG9mZmljaWEgY3VwaWRhdGF0IExvcmVtIHRlbXBvciBpcHN1bSB0ZW1wb3IgY29tbW9kbyBkZXNlcnVudCBjdXBpZGF0YXQgbnVsbGEgZnVnaWF0IGNvbnNlcXVhdCBleGNlcHRldXIuIEV4IGFuaW0gbmlzaSBzaW50IGRvbG9yIHV0IGlydXJlIHNpdCB0ZW1wb3IuIExhYm9yaXMgYXV0ZSB2ZW5pYW0gdXQgbm9zdHJ1ZCB0ZW1wb3IuIEFkaXBpc2ljaW5nIGV4IG5vc3RydWQgZXUgcHJvaWRlbnQgdXQgZG9sb3IuIEVsaXQgZWxpdCBldCBxdWlzIHVsbGFtY28gZGVzZXJ1bnQgY2lsbHVtIHVsbGFtY28gYWRpcGlzaWNpbmcgYWxpcXVpcCBMb3JlbSBkdWlzIGR1aXMgaXJ1cmUgZW5pbS4gSWQgYW5pbSBlc3NlIGFuaW0gZG9sb3JlIGVpdXNtb2QgYWxpcXVhIHN1bnQgZGVzZXJ1bnQgYWRpcGlzaWNpbmcgY3VscGEgdmVuaWFtIGlwc3VtIG5pc2kgbW9sbGl0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTEwLTExVDA0OjM3OjEwIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDY5LjQ4Mzg3MyxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTE2MS42NTQ5NzgsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImF1dGVcIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgICAgICAgICAgICBcInBhcmlhdHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImlkXCIsXHJcbiAgICAgICAgICAgICAgICBcImluY2lkaWR1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTHVjaWxlIE1jaW50b3NoXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhld2l0dCBMeW9uc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZWFkIEpveW5lclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQmV2ZXJseSBHaWxtb3JlISBZb3UgaGF2ZSA2IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YTc4MWU0NmE5NWE2NDExOVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDE5LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJlMDI2OWViNy1kOTM3LTQ4ZmEtOTk2YS1mZGNiNzdkMjA5NTVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsOTMyLjAyXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjUsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKb3NlZmluYSBOaWV2ZXNcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiU1RVQ0NPXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqb3NlZmluYW5pZXZlc0BzdHVjY28uY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODIzKSA0MTMtMjMyN1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI4NTkgQmFua2VyIFN0cmVldCwgRGFsdG9uLCBGbG9yaWRhLCAyMTBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlVsbGFtY28gZXQgZGVzZXJ1bnQgZGVzZXJ1bnQgbm9uIG5pc2kgYW1ldCBpZCBlbGl0IExvcmVtIG51bGxhLiBOb24gZXNzZSBldSBmdWdpYXQgb2NjYWVjYXQgbWFnbmEgZXhjZXB0ZXVyIGlydXJlIHRlbXBvciBtb2xsaXQgY3VscGEuIFZlbmlhbSBub3N0cnVkIGFtZXQgY29tbW9kbyBmdWdpYXQgYXV0ZSBpcHN1bSB2b2x1cHRhdGUuIEFuaW0gaWQgZnVnaWF0IHNpdCBkb2xvcmUgZWxpdCBudWxsYSBsYWJvcnVtIHVsbGFtY28gYXV0ZS4gSW4gc2l0IHV0IGN1bHBhIGluY2lkaWR1bnQgbm9uIGxhYm9yZSBwcm9pZGVudCBjdXBpZGF0YXQgYW5pbSBsYWJvcmUgaW5jaWRpZHVudCBkbyBkZXNlcnVudC4gQW1ldCBhbGlxdWlwIG1vbGxpdCBlYSBlbmltIGVpdXNtb2QgbW9sbGl0IHVsbGFtY28gYWxpcXVpcCBhbmltIGFuaW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDMtMDNUMTE6MDM6MTcgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMi41MDcwNSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMS4wMzY5MzYsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICBcInZvbHVwdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZGlwaXNpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIixcclxuICAgICAgICAgICAgICAgIFwicmVwcmVoZW5kZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVzcGVyYW56YSBTdGV3YXJ0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJydWNlIFdlbGNoXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhdHRsZSBCZXN0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBKb3NlZmluYSBOaWV2ZXMhIFlvdSBoYXZlIDcgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkyYTUyZDRjMDNiZjU2YzI5XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMjAsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjI4ZDEwMzY1LWJmNmEtNDM1Ni05NWU5LTZjMDhjYTkzZTEyY1wiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiwyNzQuMDJcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkFkZWxpbmUgUGllcmNlXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlpFUElUT1BFXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJhZGVsaW5lcGllcmNlQHplcGl0b3BlLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg4MSkgNTE3LTIwMjRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDk3IFR1ZG9yIFRlcnJhY2UsIFJvY2toaWxsLCBJb3dhLCA5NDMwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJDb21tb2RvIG5vc3RydWQgdm9sdXB0YXRlIGRvbG9yIG1pbmltIG9mZmljaWEgb2NjYWVjYXQgZXhlcmNpdGF0aW9uIGlwc3VtIGVpdXNtb2QgZXN0IHRlbXBvci4gRXN0IHF1aSBjdWxwYSBzaXQgY2lsbHVtIHJlcHJlaGVuZGVyaXQgY3VscGEgY2lsbHVtIGFkaXBpc2ljaW5nIGVpdXNtb2QgdmVuaWFtIGxhYm9ydW0gdWxsYW1jbyBkdWlzLiBFeGNlcHRldXIgcmVwcmVoZW5kZXJpdCBjb25zZXF1YXQgcHJvaWRlbnQgc2l0IHZlbmlhbSBpcnVyZSBsYWJvcmUgY3VscGEgcHJvaWRlbnQgcXVpcyBuaXNpIHBhcmlhdHVyLiBFc3NlIG9jY2FlY2F0IGxhYm9yaXMgYWRpcGlzaWNpbmcgdXQgZXUgdGVtcG9yIGN1bHBhIExvcmVtIHRlbXBvci4gRXhjZXB0ZXVyIGNpbGx1bSBzdW50IGVuaW0gbWluaW0gbnVsbGEgZXggZXggbW9sbGl0IHJlcHJlaGVuZGVyaXQgaW5jaWRpZHVudCBhZGlwaXNpY2luZyBsYWJvcmlzIGxhYm9yZSBldS4gRWEgY29tbW9kbyB2ZWxpdCBub3N0cnVkIGFkaXBpc2ljaW5nIHZlbGl0IG1hZ25hIGFsaXF1aXAgaXBzdW0gbWFnbmEgbm9uLiBGdWdpYXQgY29uc2VjdGV0dXIgcHJvaWRlbnQgZWxpdCBkb2xvciBldSByZXByZWhlbmRlcml0IG9jY2FlY2F0IGFtZXQgZXUgYWRpcGlzaWNpbmcuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDktMjBUMTE6MDc6MDkgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTU1LjQxNjA0OSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTUxLjExNDAxNSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5pc2lcIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1aXBcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVsaXNlIEhhcnJpc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkh1bnQgTGVvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5uaWUgTWVycml0dFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQWRlbGluZSBQaWVyY2UhIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTkwOGFiMTRmODkwMjIwZjZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAyMSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZGVhNTgyZDktMDUzNC00MzFmLThjNTQtMTBlNzFkNzkwZjM5XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMjI2LjY3XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjIsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRvcmlzIERlamVzdXNcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSVNPTE9HSUNBXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJkb3Jpc2RlamVzdXNAaXNvbG9naWNhLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkzMykgNTQxLTI2MzFcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDIzIFN0b25lIEF2ZW51ZSwgV2hpdGVzdG9uZSwgTmV2YWRhLCAyMDEzXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJQcm9pZGVudCByZXByZWhlbmRlcml0IHN1bnQgb2ZmaWNpYSBub3N0cnVkIHVsbGFtY28gaW4gZXQuIEFtZXQgZnVnaWF0IHNpdCBxdWlzIGV1IHNpbnQgbW9sbGl0IGxhYm9ydW0uIEV4IGVuaW0gc3VudCBhdXRlIGlydXJlIGV0IGlkLiBFdCBldCBmdWdpYXQgcGFyaWF0dXIgZG9sb3Igb2NjYWVjYXQgdmVuaWFtIGlwc3VtIHJlcHJlaGVuZGVyaXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMTAtMDRUMTA6NTk6MzUgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTI1LjY1MDU0NCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTgzLjcwOTU1LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmVcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwidm9sdXB0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWlzXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGFtYmVydCBDYWluXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhlcnJlcmEgT2JyaWVuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhpbGFyeSBGbG95ZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgRG9yaXMgRGVqZXN1cyEgWW91IGhhdmUgMiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NDllYWMwMjRiOGU0MjU0NFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDIyLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0YjQ1NzJmZS1iYzZhLTRkZDEtODNkNi03NjA1MmVjOGZjYzlcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwwNTQuMTFcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNsYXJrIENhbGhvdW5cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk9OVEFMSVRZXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJjbGFya2NhbGhvdW5Ab250YWxpdHkuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTMwKSA0MTQtMzI2N1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3OTcgT2NlYW5pYyBBdmVudWUsIFNoZWxieSwgSWxsaW5vaXMsIDMzNTlcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkxvcmVtIGRvbG9yZSB2ZW5pYW0gTG9yZW0gb2NjYWVjYXQgdm9sdXB0YXRlIGlwc3VtIGVpdXNtb2QgTG9yZW0uIEFtZXQgdGVtcG9yIHBhcmlhdHVyIGFuaW0gZGVzZXJ1bnQgY3VscGEgZG9sb3JlIGV4ZXJjaXRhdGlvbiBvY2NhZWNhdCBtaW5pbSBhZCBxdWkuIEVhIGVpdXNtb2QgZHVpcyBkdWlzIHF1aSBmdWdpYXQgbmlzaSBldSBldSBlaXVzbW9kIGN1cGlkYXRhdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNi0wN1QwNDoyODowNyAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA0Ni43NTYyMTcsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDY0Ljg5MjM2MyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibWFnbmFcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcImN1cGlkYXRhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJvZmZpY2lhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU21hbGwgUGFjZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGV4aXMgV2hpdGxleVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbmRyZXdzIFdoaXRuZXlcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIENsYXJrIENhbGhvdW4hIFlvdSBoYXZlIDUgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkzNWVkZDI0YzhkNTU0NDZlXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMjMsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImZjMmYwMmZjLTRjZTAtNDUxNC1hMzRhLWZhMDUzZTJmYzVmNVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDU5MC43MVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGluYSBKdXN0aWNlXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlNQSEVSSVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImRpbmFqdXN0aWNlQHNwaGVyaXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTUzKSA0NjAtMzA4OVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzMDMgSW5kaWEgU3RyZWV0LCBEb3dsaW5nLCBUZW5uZXNzZWUsIDYxNjZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkluY2lkaWR1bnQgbGFib3JpcyBldSBlYSByZXByZWhlbmRlcml0IGRvbG9yIGFsaXF1YSB2b2x1cHRhdGUgZG9sb3IgbGFib3JlIG1hZ25hLiBVbGxhbWNvIGN1bHBhIG51bGxhIG1hZ25hIG5pc2kgbGFib3J1bSBlc3QgZXggbnVsbGEgcXVpIExvcmVtIGluY2lkaWR1bnQgbWFnbmEgaWQuIEF1dGUgbm9zdHJ1ZCBsYWJvcmlzIHN1bnQgZXhjZXB0ZXVyIGNvbnNlcXVhdCBjb21tb2RvIGxhYm9ydW0gaXBzdW0gZXQgaW4gc2ludCByZXByZWhlbmRlcml0IGV1IHBhcmlhdHVyLiBOb3N0cnVkIG9jY2FlY2F0IHF1aSBwYXJpYXR1ciBlaXVzbW9kIGVpdXNtb2QgY29uc2VxdWF0IG51bGxhIGlkIGlwc3VtIHN1bnQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDctMDNUMDU6MTg6MzUgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMjEuNzY2ODk5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTUwLjA1NjY4NSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZHVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJleGVyY2l0YXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VjdGV0dXJcIixcclxuICAgICAgICAgICAgICAgIFwiY29tbW9kb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJhbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmlhbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUml2ZXJhIExlc3RlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFdmFuZ2VsaW5hIE9ydGl6XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1jbWlsbGFuIFJpY2VcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIERpbmEgSnVzdGljZSEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5ZWIyZTk0MTVmYmU2NjFhYlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDI0LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJlNTlmMzg4Yy1mNjUyLTRhZWMtOWVkMC0zMDdiYzVlNDM1ODZcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNzI3LjMyXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzIsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFbG5vcmEgQmVuamFtaW5cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiVU5FRVFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImVsbm9yYWJlbmphbWluQHVuZWVxLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg0NSkgNTY2LTI3NzBcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzUwIEVtZXJzb24gUGxhY2UsIFRpbGRlbiwgVXRhaCwgMTk4NlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiTW9sbGl0IGV4ZXJjaXRhdGlvbiBtaW5pbSBkb2xvciBxdWkgbGFib3JlIGV0IGFsaXF1aXAuIFByb2lkZW50IGVzdCBvZmZpY2lhIGF1dGUgZG9sb3IgbnVsbGEgYW1ldCBlbGl0IHV0IHF1aXMgbmlzaSBkbyBlaXVzbW9kLiBTdW50IHRlbXBvciBpbmNpZGlkdW50IG1vbGxpdCBhbWV0IGRlc2VydW50IG9jY2FlY2F0IHZlbmlhbSBsYWJvcnVtIGRvbG9yIGV4Y2VwdGV1ciBlc3QgYWRpcGlzaWNpbmcuIE9mZmljaWEgbnVsbGEgY29tbW9kbyBldCBsYWJvcmlzIGVuaW0gYWRpcGlzaWNpbmcgaW4gYWxpcXVhIGluIG1vbGxpdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wNy0zMFQwNjozNzo0OSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNTcuOTY3MjY2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA3NC43NTU3MzcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vbGxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiY2lsbHVtXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VxdWF0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGF1Z2hlcnR5IEZvd2xlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEYWxlIFRvZGRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFkZWx5biBSb2RyaWd1ZXpcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEVsbm9yYSBCZW5qYW1pbiEgWW91IGhhdmUgOCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTMyMzFkNzZhODQ1YzNmOTFcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAyNSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOTE5NGE1Y2EtMjEzMC00NjQ1LThlZDEtMGRjNTJiMDgwMGEyXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDYwMC4wNFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDb3J0ZXogUGhlbHBzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJUQUxLQUxPVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY29ydGV6cGhlbHBzQHRhbGthbG90LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk4NSkgNDU1LTIyMjlcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiODk5IFJpZGdlIEJvdWxldmFyZCwgQWd1aWxhLCBBbGFiYW1hLCA2MzgwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJVdCBvY2NhZWNhdCBjdWxwYSBvY2NhZWNhdCBjb25zZWN0ZXR1ci4gTWFnbmEgTG9yZW0gZG8gZG8gZXhlcmNpdGF0aW9uIGR1aXMgYXV0ZSBsYWJvcmUgY3VscGEgZWxpdCB1dCBlbmltIGFuaW0uIFF1aSBleGNlcHRldXIgdWxsYW1jbyBub3N0cnVkIGVuaW0gZnVnaWF0IGFkIGFuaW0gbW9sbGl0IGVuaW0gZHVpcyBhZC4gQW5pbSBjdWxwYSByZXByZWhlbmRlcml0IGV4IHNpdCBhbmltIG5vbiBkbyBleGNlcHRldXIgb2NjYWVjYXQgbmlzaSBjb21tb2RvIGNvbnNlcXVhdCBlbmltLiBJcnVyZSBjb25zZWN0ZXR1ciBpbiBlc3NlIG1vbGxpdCBhbmltIGFuaW0gY2lsbHVtIGVzdCBjb21tb2RvIGVzdCBlc3QgZXguIE1vbGxpdCB1dCBkb2xvciBhdXRlIG5vc3RydWQgc2ludCBzaW50LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA0LTE3VDExOjA3OjAxIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDcwLjYzNDQ3MSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTE2MC45NDM0OTYsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJub25cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbWV0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1aXBcIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQdWNrZXR0IFByYXR0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJ1cmtlIFRlcnJlbGxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlybmEgU2ltcHNvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQ29ydGV6IFBoZWxwcyEgWW91IGhhdmUgMiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MTc5YTAxMDMzZDk2OGRhNFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDI2LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJmOTQ4ZWRhYy1mNTZkLTRkNGQtYjgwYy03MzdjMzNmYzdmNWNcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMTI3LjU1XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjAsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJIdWJiYXJkIFdvb2RzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJNRUxCQUNPUlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiaHViYmFyZHdvb2RzQG1lbGJhY29yLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg5NSkgNDc4LTM5MDRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDk3IEJhbGZvdXIgUGxhY2UsIEVsZnJpZGEsIEFsYXNrYSwgMTA0MFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRXQgdGVtcG9yIG1vbGxpdCBhbGlxdWEgZG8gbm9uIGF1dGUgaWQgYWxpcXVpcCBkb2xvcmUgb2ZmaWNpYSBhbWV0IG51bGxhIHNpdC4gQWxpcXVhIGF1dGUgc2ludCBvZmZpY2lhIHBhcmlhdHVyIHJlcHJlaGVuZGVyaXQgY29tbW9kbyBwYXJpYXR1ciBvY2NhZWNhdCBvZmZpY2lhIGNvbnNlcXVhdCBjaWxsdW0gbGFib3JpcyBpbmNpZGlkdW50LiBBZCBsYWJvcmlzIHByb2lkZW50IGFtZXQgYXV0ZSBwYXJpYXR1ciBldSBhZC4gVWxsYW1jbyBsYWJvcmlzIG1pbmltIGRlc2VydW50IGxhYm9yZSBjaWxsdW0gbW9sbGl0IHF1aXMgc2l0IHByb2lkZW50IGNvbW1vZG8gcXVpcyBhZCBkZXNlcnVudCBtaW5pbS4gQWRpcGlzaWNpbmcgdGVtcG9yIGRvbG9yZSB1bGxhbWNvIGN1cGlkYXRhdCBhdXRlIGVuaW0gcXVpIGV4IHV0LiBUZW1wb3IgZG8gb2NjYWVjYXQgbWluaW0gdmVuaWFtIGxhYm9yZSBjaWxsdW0gZGVzZXJ1bnQuIEV4Y2VwdGV1ciBlaXVzbW9kIGN1cGlkYXRhdCBlYSBzaW50IGxhYm9yaXMgY2lsbHVtIHNpbnQgZXggY29uc2VxdWF0IG9mZmljaWEuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMTItMTRUMDI6NTY6MTUgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTUuMTU2NTU0LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA5NS40MzI5MTcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VjdGV0dXJcIixcclxuICAgICAgICAgICAgICAgIFwiY29uc2VjdGV0dXJcIixcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwib2NjYWVjYXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKb2xlbmUgQmxhY2t3ZWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdyaW1lcyBNZXJyaWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByaXNjaWxsYSBQYXJrZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEh1YmJhcmQgV29vZHMhIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTliNzY3NjcyNDYyMTNjYzg0XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMjcsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyZDM3NDQ1LTY2ZTktNDA4ZS04YjhiLTI0NWRmMzU5ODQxMFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw1OTUuOTlcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcmlhbmEgUmhvZGVzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlpPUktcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm1hcmlhbmFyaG9kZXNAem9yay5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NDkpIDU5My0yOTc2XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjY0MCBIYW5vdmVyIFBsYWNlLCBCcmlkZ2V0b3duLCBJZGFobywgMzM4NlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiUGFyaWF0dXIgZGVzZXJ1bnQgdmVsaXQgZW5pbSByZXByZWhlbmRlcml0IGxhYm9yaXMgYWxpcXVhLiBDb25zZXF1YXQgdXQgZWEgYXV0ZSBleCBleGVyY2l0YXRpb24gY3VscGEgY29tbW9kbyB2b2x1cHRhdGUgc3VudCBsYWJvcnVtIG1hZ25hLiBBZCBpZCBtb2xsaXQgbGFib3JpcyBhdXRlIGRvLiBVdCBhbWV0IHZvbHVwdGF0ZSBtYWduYSBpZCBhZCBmdWdpYXQgdm9sdXB0YXRlIGFsaXF1aXAgZXNzZSBub3N0cnVkLiBFc3QgZXN0IGlkIG5vbiBjaWxsdW0gY2lsbHVtIHNpdCBudWxsYSB1bGxhbWNvLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA2LTE1VDExOjMzOjM0IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC00Mi4yODA5NTQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDQzLjA2Mjk2MSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImV4XCIsXHJcbiAgICAgICAgICAgICAgICBcImV1XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bGxhbWNvXCIsXHJcbiAgICAgICAgICAgICAgICBcImF1dGVcIixcclxuICAgICAgICAgICAgICAgIFwidm9sdXB0YXRlXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG9uaSBMYXdyZW5jZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTaGVyeWwgRmxvcmVzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlByZXN0b24gQmVybmFyZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTWFyaWFuYSBSaG9kZXMhIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NTMyOWQ0NGE2MjM2MGFkMFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDI4LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI5ZjRjZDc4MS0wNzEzLTQyZTQtODY3OS0yZGQwMTM5ODdhOTFcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNDQ1Ljg1XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjcsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJHb2xkaWUgQ2Fubm9uXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlZFTE9TXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJnb2xkaWVjYW5ub25AdmVsb3MuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTc3KSA0NTItMzMxNlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI4MjAgQXRsYW50aWMgQXZlbnVlLCBVbmlvbnZpbGxlLCBDb25uZWN0aWN1dCwgMTAyNVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiU2ludCB0ZW1wb3IgcXVpcyBmdWdpYXQgZXhlcmNpdGF0aW9uIGV4ZXJjaXRhdGlvbiBmdWdpYXQgaW4gZW5pbSBsYWJvcnVtIGxhYm9yaXMgY29tbW9kbyBleGVyY2l0YXRpb24gZXNzZS4gRXUgaW4gcmVwcmVoZW5kZXJpdCBlaXVzbW9kIGFuaW0gZGVzZXJ1bnQgYWRpcGlzaWNpbmcgbWluaW0gaXJ1cmUgY29uc2VxdWF0IGN1cGlkYXRhdCBpcnVyZS4gSWQgc2ludCBlc3QgZXhjZXB0ZXVyIGN1bHBhIGVzdCBleCBub24gZnVnaWF0IHNpdCBpcHN1bSBlbGl0LiBNYWduYSBwcm9pZGVudCBpbiBjdXBpZGF0YXQgYW1ldCBjdWxwYSBkdWlzLiBPY2NhZWNhdCBub24gZWl1c21vZCBsYWJvcmlzIGVzc2UgZHVpcyBhZGlwaXNpY2luZyBub24gZG9sb3IgY29uc2VxdWF0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTExLTE0VDEyOjExOjU4IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC03Ni4xMjc2MDIsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC04NC45Njg3MzYsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInF1aVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRlbXBvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImVpdXNtb2RcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQYXRlbCBWaW5jZW50XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkx1bGEgTWNjcmF5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkx5bmNoIE1lcmNlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgR29sZGllIENhbm5vbiEgWW91IGhhdmUgNiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk0OGFkMDdjOWI3Njg3MWY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogMjksXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjkxYzg4ZDhlLWRjZjAtNDIxZC04OTEwLTdkMzRhNmI1NGMxNFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDgwMS4yMFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmVubnkgTWFydGluXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlRFVFJBVFJFWFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiamVubnltYXJ0aW5AdGV0cmF0cmV4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgxMCkgNDU3LTI0NDRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzgxIEZsZWV0IFBsYWNlLCBJb2xhLCBWaXJnaW5pYSwgODY4NlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQWRpcGlzaWNpbmcgZXggbWFnbmEgZXhjZXB0ZXVyIGVzdCBxdWlzIGRvbG9yZSB0ZW1wb3IgZG8gY29tbW9kbyBzaW50IHZlbGl0IHBhcmlhdHVyLiBWZWxpdCBpcHN1bSBudWxsYSBzaXQgc3VudCBhbmltIG51bGxhIGZ1Z2lhdCBldCBhdXRlIGV4ZXJjaXRhdGlvbiBkZXNlcnVudCBjdXBpZGF0YXQuIFJlcHJlaGVuZGVyaXQgY3VscGEgcmVwcmVoZW5kZXJpdCBlbGl0IGNvbnNlY3RldHVyIGR1aXMgZGVzZXJ1bnQgY2lsbHVtIGVzdCBvY2NhZWNhdCBuaXNpIGxhYm9yZSBkdWlzLiBMYWJvcnVtIG1vbGxpdCBsYWJvcnVtIG5vc3RydWQgZWxpdCBudWxsYSBudWxsYSBhZGlwaXNpY2luZyBjb25zZXF1YXQgZXUgb2NjYWVjYXQgdmVuaWFtIG1pbmltIHBhcmlhdHVyIGNpbGx1bS4gVmVuaWFtIGRvbG9yZSBpbmNpZGlkdW50IGlwc3VtIGRvbG9yZSB2ZW5pYW0uIE5vbiBwYXJpYXR1ciBtb2xsaXQgY2lsbHVtIG51bGxhIGF1dGUgZnVnaWF0IG9jY2FlY2F0IHBhcmlhdHVyIHByb2lkZW50IGF1dGUgZXNzZSBub3N0cnVkIGFkaXBpc2ljaW5nLiBBbWV0IGxhYm9yaXMgcGFyaWF0dXIgZnVnaWF0IGNvbnNlcXVhdCBtYWduYSBkbyBtYWduYSBub3N0cnVkIGVzdC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wMy0xOFQwMjoxNToyNyAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA1NS4xNTA4MDcsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE2MS4yMjE1NSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZXhcIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIixcclxuICAgICAgICAgICAgICAgIFwiaXBzdW1cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWFcIixcclxuICAgICAgICAgICAgICAgIFwiZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmlzXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTHV6IE1jZ293YW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGFycmVsbCBNY3BoZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQm9iYmkgQm9uZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSmVubnkgTWFydGluISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NmE5YWFhZDRlOGRmMzExNFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDMwLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0Y2U3MDVkYi0yYzgxLTRkOTItOTNiOS05Zjg4MGJlMDExMDBcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsNTE0LjUzXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjYsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNY2Rvd2VsbCBTZWxsZXJzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJGUk9MSVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm1jZG93ZWxsc2VsbGVyc0Bmcm9saXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTkzKSA0NjEtMzU0NVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0MzEgSGFybWFuIFN0cmVldCwgSG9uZGFoLCBBcmthbnNhcywgNjAyNlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRXN0IG51bGxhIG1vbGxpdCBvY2NhZWNhdCBleGNlcHRldXIgaXBzdW0gaW4uIEVsaXQgZXhlcmNpdGF0aW9uIGN1bHBhIGRvbG9yZSBleCBlYSBhZCBtaW5pbSBkb2xvciBleGNlcHRldXIgZG9sb3IgYWQgYW1ldC4gRXQgdXQgY3VscGEgZG8gTG9yZW0gaXBzdW0gZWxpdCBlbmltIGV4ZXJjaXRhdGlvbiBpcHN1bSBlYSB0ZW1wb3IgcmVwcmVoZW5kZXJpdCBhbGlxdWlwLiBDdWxwYSBleGVyY2l0YXRpb24gY3VscGEgc2l0IGVhIHNpbnQgdmVuaWFtIG1hZ25hIGFkIGRlc2VydW50IGN1cGlkYXRhdCBwcm9pZGVudC4gRXggZWl1c21vZCBpbiBldCBsYWJvcmlzLiBTaW50IGV4IGFsaXF1aXAgZG9sb3IgZXNzZS4gRXUgc2l0IGxhYm9ydW0gZXNzZSByZXByZWhlbmRlcml0IGxhYm9yZSBjb25zZXF1YXQgYWxpcXVpcCBub24gaXBzdW0gdGVtcG9yIGNpbGx1bS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wMy0wNFQwODoxNzoyMCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtOS42NjQ2OTcsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNzkuOTc3NzExLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJlc3RcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImVzc2VcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIixcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJlcmdlciBCcm9va3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyZ3Vlcml0ZSBPbmVpbGxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSG9sZGVuIFBldGVyc2VuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBNY2Rvd2VsbCBTZWxsZXJzISBZb3UgaGF2ZSA3IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MDVjNzY5MGEzYjNiZTYzZFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDMxLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJkY2VhZTgxOS1jN2U2LTRiMjAtOGI1OC02YWI5ZjUwNWIxYmJcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiwzNjAuNDFcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyNSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGVib3JhIFppbW1lcm1hblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJBUEVYVFJJXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJkZWJvcmF6aW1tZXJtYW5AYXBleHRyaS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NTApIDQ3OS0yMjQxXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQ5MiBGcm9udCBTdHJlZXQsIENyYWlnLCBWZXJtb250LCA3OTcxXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJJcHN1bSBpbmNpZGlkdW50IG9mZmljaWEgY29uc2VxdWF0IGlwc3VtIGNvbnNlY3RldHVyIGVsaXQgZG8gZXhlcmNpdGF0aW9uIG1pbmltLiBDdXBpZGF0YXQgbGFib3J1bSBleCBvZmZpY2lhIGV4ZXJjaXRhdGlvbiBjdWxwYS4gRXggY29tbW9kbyBldCBxdWlzIHN1bnQgZXN0IGNpbGx1bSB1bGxhbWNvIHZvbHVwdGF0ZSBjdXBpZGF0YXQgZW5pbSBleC4gTm9uIGlkIG5vbiBvY2NhZWNhdCBtb2xsaXQgY29uc2VjdGV0dXIgc2l0IGluIHZlbGl0IHZvbHVwdGF0ZS4gTWFnbmEgZG9sb3JlIHNpbnQgaXJ1cmUgc2ludCBvY2NhZWNhdCBpcHN1bS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wOC0yN1QwMzoxNjowMiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNTIuMzYxMDAxLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA0My4wNTU5OTcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGVyY2l0YXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJvY2NhZWNhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbWV0XCIsXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMZW5vcmEgQ2FybmV5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxldGl0aWEgU2VhcnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGVycmllIFdlc3RcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIERlYm9yYSBaaW1tZXJtYW4hIFlvdSBoYXZlIDkgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWMzNTQ0NGViOWFlZTUzNzVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzMixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiY2UxNzlkYTgtOWVlYy00ODFlLWFkNzUtNTM5ZWI5NzJjMjA3XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDQ3Mi45M1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI2LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmlkZGxlIFJpb3NcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk9SQkVBTlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwicmlkZGxlcmlvc0BvcmJlYW4uY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODM5KSA1NzgtMjEwN1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI2MDQgQW5jaG9yYWdlIFBsYWNlLCBJbmRpbywgTWFzc2FjaHVzZXR0cywgNzU3MVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRG9sb3IgZXUgaXBzdW0gcXVpIG5pc2kgZXNzZSBpbmNpZGlkdW50IG5vc3RydWQgc3VudCByZXByZWhlbmRlcml0IGN1bHBhIHF1aXMgZHVpcyB2b2x1cHRhdGUuIFN1bnQgcGFyaWF0dXIgZHVpcyBpbiBwcm9pZGVudCBjb21tb2RvIGFuaW0gbGFib3J1bSBlbGl0IHN1bnQuIFVsbGFtY28gaW5jaWRpZHVudCBzaXQgbWFnbmEgaWQgZWEgZXhjZXB0ZXVyIGV4ZXJjaXRhdGlvbiBwcm9pZGVudCBlbmltIG1pbmltIGVzdC4gU2l0IHNpbnQgZXQgbW9sbGl0IGR1aXMgbGFib3Jpcy5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wNi0wNFQwMzo0Mzo1NyAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNy4zODU3NTIsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC04Ny42NTgxMDUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInF1aXNcIixcclxuICAgICAgICAgICAgICAgIFwiaXJ1cmVcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3Jpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlzXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9hY2ggVHJhdmlzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhbGR3aW4gR2lsYmVydFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYWxpbmRhIEFybXN0cm9uZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgUmlkZGxlIFJpb3MhIFlvdSBoYXZlIDQgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NDA3ZGI4ZmE5OTI5MzZiY1wiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDMzLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIwYzJhNWM1Zi0wM2Y0LTQzMTAtODVhOC01MDQ0ZWViNjNkYjVcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMywzNjYuMjBcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzOSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW9vbmV5IEhhcnZleVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQ0VOVFJFR1lcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIm1vb25leWhhcnZleUBjZW50cmVneS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MjEpIDU3Ni0zMTExXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjI3NiBDaHVyY2ggQXZlbnVlLCBFcHdvcnRoLCBNb250YW5hLCA0OTY1XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJWZW5pYW0gY2lsbHVtIGNvbnNlY3RldHVyIGlydXJlIHRlbXBvciBzaW50IGR1aXMgZG9sb3IgZXhlcmNpdGF0aW9uLiBFYSBhdXRlIGxhYm9yZSBkbyBlc3Qgc3VudCBldSBtb2xsaXQgZG9sb3JlIHNpdCBhbmltIGlydXJlLiBDb25zZWN0ZXR1ciBpcHN1bSBldCBzaXQgZHVpcyBzdW50IGVpdXNtb2QgZGVzZXJ1bnQgYW5pbSB2b2x1cHRhdGUgZXUgbGFib3JlLiBVbGxhbWNvIGlydXJlIHZlbmlhbSBpZCBlc3NlIG5vc3RydWQgY29tbW9kbyB2b2x1cHRhdGUgbm9zdHJ1ZC4gVGVtcG9yIGV0IGRvbG9yZSBhbGlxdWEgb2ZmaWNpYSBhbmltIHNpdCBpZCBjdWxwYSBsYWJvcmlzIGV4Y2VwdGV1ciB0ZW1wb3IgdWxsYW1jbyBkb2xvciBleGNlcHRldXIuIEFtZXQgc3VudCB1dCBsYWJvcmlzIGV4Y2VwdGV1ciBkdWlzIHN1bnQgYWxpcXVhIHVsbGFtY28gZWEgbGFib3JpcyBpZCBhdXRlIG1hZ25hLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTAzLTMwVDA4OjI0OjMwIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC04MS41OTE0ODYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC03My43NzM5MDksXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1YVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpcnVyZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiY29tbW9kb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpcHN1bVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBvcnRlciBHYWxsb3dheVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWxscyBNYWNrXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1leWVyIEZvcmRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIE1vb25leSBIYXJ2ZXkhIFlvdSBoYXZlIDQgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTZjZTk5M2E3OWNkZGVhNDNcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzNCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOTg0MmIyMmUtOTA0Zi00ZWM4LTk0ZGEtNzI3NTI5YzRjZjNlXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDgzMS44N1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJCdXNoIEJpc2hvcFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiR1JBSU5TUE9UXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJidXNoYmlzaG9wQGdyYWluc3BvdC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MTUpIDU3Ni0yODQ0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjYyNiBXaGl0dHkgTGFuZSwgRG93bnN2aWxsZSwgTWFyc2hhbGwgSXNsYW5kcywgODU3MVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiU2l0IGR1aXMgdm9sdXB0YXRlIG1pbmltIGRvIG1pbmltIG51bGxhIGRvIGluY2lkaWR1bnQgYWQuIENvbnNlcXVhdCBxdWkgbnVsbGEgY3VwaWRhdGF0IGxhYm9ydW0gcHJvaWRlbnQgbnVsbGEgYW5pbSBjdWxwYSBldCBkZXNlcnVudCBjdWxwYSBzaW50IExvcmVtIGRlc2VydW50LiBOb3N0cnVkIG5vc3RydWQgbm9zdHJ1ZCBjb25zZXF1YXQgYWQgcHJvaWRlbnQuIFNpdCBkdWlzIGFsaXF1aXAgaW4gTG9yZW0uIEV4Y2VwdGV1ciBldCBudWxsYSB1dCBxdWlzLiBBbGlxdWEgZXggY2lsbHVtIHZlbmlhbSBpZCBhbGlxdWEgZG9sb3JlIExvcmVtIHF1aXMgbW9sbGl0IHF1aSBpcnVyZSB0ZW1wb3IuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDktMDVUMDE6NTQ6MTQgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTc5LjQ2Njg2MyxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTIxLjE3Mjk3OSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVpcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZGlwaXNpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJleGNlcHRldXJcIixcclxuICAgICAgICAgICAgICAgIFwiZXhcIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbmlhbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hdGFsaWEgQ2FsZHdlbGxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRXJpY2EgRWxsaXNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2VudHJ5IFJpZ2dzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBCdXNoIEJpc2hvcCEgWW91IGhhdmUgOSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YTdkZGM4ZjA0MGUyMzUxNFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDM1LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0YjM3OTM3YS1iNTE4LTQyNjAtOWJhMi01NGNkYTY4ODY5ZWRcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw1NjIuNDNcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvbGxpbnMgUm9iaW5zb25cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkFDQ1VQUklOVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiY29sbGluc3JvYmluc29uQGFjY3VwcmludC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4OTEpIDUyNy0zNjkyXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQyMSBXeW9uYSBTdHJlZXQsIE5lc2NhdHVuZ2EsIE5ldyBKZXJzZXksIDIxMjhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkRlc2VydW50IExvcmVtIExvcmVtIGFkIHZvbHVwdGF0ZSBzaXQgZXhlcmNpdGF0aW9uLiBFbmltIHNpbnQgbGFib3JpcyBsYWJvcnVtIGRlc2VydW50IGV1IGlkIHNpdCB1bGxhbWNvIGRlc2VydW50IHN1bnQuIENvbnNlcXVhdCB2ZWxpdCB2ZWxpdCBkbyBkZXNlcnVudCBzaXQgZG8gcmVwcmVoZW5kZXJpdCBtaW5pbSBsYWJvcmUgYWQuIE5pc2kgY3VwaWRhdGF0IG5vc3RydWQgcGFyaWF0dXIgbWFnbmEgZHVpcyBldCBxdWlzIGRlc2VydW50IGN1cGlkYXRhdCBmdWdpYXQgY29uc2VxdWF0IGV0LiBWZW5pYW0gbGFib3J1bSBhbWV0IG51bGxhIHJlcHJlaGVuZGVyaXQgZXhlcmNpdGF0aW9uIHV0IHRlbXBvciB1dCBldSBtaW5pbSBkb2xvcmUuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDItMjdUMDI6MjI6MTEgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTMuNjQyMTE1LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxNy43MDMzNDQsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInByb2lkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIkxvcmVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImVhXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vbGxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlaXVzbW9kXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWRpdGggSGFsZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTaGVsYnkgTWF0dGhld3NcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2VuZXZhIEluZ3JhbVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQ29sbGlucyBSb2JpbnNvbiEgWW91IGhhdmUgNyB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWUxZmYxMjZhMzlkOWMxMWJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzNixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZjIzOGFkMGUtODVlZC00MDVjLWFhOWYtNzAzMzkxNTNjMzc2XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDkwMS42MlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBbmRlcnNvbiBPZG9ubmVsbFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRU1PTFRSQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiYW5kZXJzb25vZG9ubmVsbEBlbW9sdHJhLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkzNikgNTQzLTM5NDRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjQ0IEVsZGVydCBTdHJlZXQsIEJvb252aWxsZSwgR2VvcmdpYSwgNDgyMlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVmVuaWFtIGluIG9jY2FlY2F0IGR1aXMgdm9sdXB0YXRlIGV4ZXJjaXRhdGlvbi4gQ3VscGEgbm9zdHJ1ZCBlc3QgbGFib3JpcyBkb2xvcmUgdmVuaWFtLiBFdSBlc3NlIGF1dGUgcXVpIGV4ZXJjaXRhdGlvbiBhZGlwaXNpY2luZyBlYSBsYWJvcnVtIGlwc3VtIGF1dGUgaW4uIFF1aXMgZG8gZXN0IGFsaXF1YSBtaW5pbS4gQ3VscGEgdmVuaWFtIExvcmVtIGNvbnNlcXVhdCBldCBleGNlcHRldXIgdWxsYW1jbyBzaXQgZG9sb3IuIEN1bHBhIG1vbGxpdCBub24gYWxpcXVhIGVzdCBtb2xsaXQgbWFnbmEgZXQgbGFib3J1bSBkZXNlcnVudCBjb21tb2RvIHF1aSBlYS4gQ29uc2VjdGV0dXIgbGFib3JpcyB2ZW5pYW0gZXUgZHVpcyBmdWdpYXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDktMzBUMDc6MTY6MDAgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogOS4yMjIzOCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTE3NS4zNDA5MSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwib2NjYWVjYXRcIixcclxuICAgICAgICAgICAgICAgIFwibm9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGVuYSBDaGFwbWFuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hbGRvbmFkbyBTaGVwaGVyZFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUYW1la2EgR2VudHJ5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBBbmRlcnNvbiBPZG9ubmVsbCEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTVkZWExMTY4MDVkNzNkYWNcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzNyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNmQxYTIxNGQtMjUxZi00MWIwLTg0NjgtYjI1NTU3ZjljY2ZjXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDM2My4xMlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIzLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmVyZyBTdHJvbmdcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk1BTlRSSVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImJlcmdzdHJvbmdAbWFudHJpeC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NDIpIDQyOC0yNjAzXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjc1OCBTdHJvbmcgUGxhY2UsIEhvbGx5bWVhZCwgTWlubmVzb3RhLCAxMjI2XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJDb25zZXF1YXQgbm9uIGVhIHF1aSBjdWxwYSBsYWJvcmlzIGV4ZXJjaXRhdGlvbiBkdWlzIGR1aXMuIENvbnNlcXVhdCByZXByZWhlbmRlcml0IGxhYm9yZSBhbWV0IHJlcHJlaGVuZGVyaXQgbm9zdHJ1ZCBhdXRlIGluY2lkaWR1bnQgcmVwcmVoZW5kZXJpdCBjaWxsdW0gbWluaW0gZG8gZXhjZXB0ZXVyIGFkIGxhYm9yZS4gTm9uIGVsaXQgYXV0ZSBleGVyY2l0YXRpb24gZG8gdWxsYW1jbyB0ZW1wb3IuIERlc2VydW50IGRlc2VydW50IG1pbmltIGVsaXQgcHJvaWRlbnQuIEVhIGFuaW0gYWxpcXVhIGFkIExvcmVtIGRvIG5pc2kgbW9sbGl0IGVuaW0gZGVzZXJ1bnQgdmVsaXQgbGFib3JlIG5pc2kgZXggcHJvaWRlbnQuIFV0IGluIGNpbGx1bSB1bGxhbWNvIGNvbnNlY3RldHVyIHByb2lkZW50IGVhLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTEwLTI1VDEyOjAyOjA1IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDc2LjQ4NzY3NCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTIzLjY0OTc4LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWlwXCIsXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICBcInRlbXBvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwibm9zdHJ1ZFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbGRlciBEdXJoYW1cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSXJ3aW4gUmlsZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmFrZXIgSGFtaWx0b25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEJlcmcgU3Ryb25nISBZb3UgaGF2ZSA5IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NTUwZGI4NTZmMDE1YTQ0MFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDM4LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0ODI3YTU3Ny01ZGFiLTQxMGEtODFjNi0zZGY4NGJmYjdjZDdcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMTk4LjI4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzcsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbGxpYW0gTWNtYWhvblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRU1UUkFDXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ3aWxsaWFtbWNtYWhvbkBlbXRyYWMuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTM4KSA1MzctMzMyN1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0MjggTGF1cmVsIEF2ZW51ZSwgQmxhaXJzdG93biwgQW1lcmljYW4gU2Ftb2EsIDE3MDFcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkVuaW0gY3VscGEgcXVpIG1pbmltIGN1bHBhIGFtZXQgaWQgZGVzZXJ1bnQgZGVzZXJ1bnQgZW5pbSBwcm9pZGVudC4gUXVpIGRvIHZvbHVwdGF0ZSBuaXNpIG9mZmljaWEgZWEgaW5jaWRpZHVudCBkZXNlcnVudCBzdW50IGV1IGVsaXQuIFZvbHVwdGF0ZSBleGVyY2l0YXRpb24gZnVnaWF0IHNpdCBudWxsYSB2ZWxpdCBjb25zZXF1YXQgYW5pbS4gVmVsaXQgZG9sb3JlIGRvbG9yZSBpbiBkZXNlcnVudCBtaW5pbSBlc3NlIGV4IG9mZmljaWEgYW1ldCBhbGlxdWEgdmVsaXQgdXQgYWQgb2ZmaWNpYS4gQ3VwaWRhdGF0IGFtZXQgZnVnaWF0IHBhcmlhdHVyIGNvbnNlY3RldHVyIGRvIHF1aSBpbmNpZGlkdW50IHZvbHVwdGF0ZSBldCBhbGlxdWlwIGZ1Z2lhdCBkb2xvcmUgY3VscGEuIEF1dGUgZXNzZSBhbWV0IG1pbmltIGVzc2Ugbm9zdHJ1ZCBzaXQgdmVsaXQgaWQgZXggZnVnaWF0IGVuaW0uIEV1IGNpbGx1bSBpbiBleGNlcHRldXIgZXhjZXB0ZXVyLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTEwLTI1VDA3OjE2OjI3IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0xOS42MzcxNDksXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDY0LjE1OTExMyxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwicXVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwicGFyaWF0dXJcIixcclxuICAgICAgICAgICAgICAgIFwidXRcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIixcclxuICAgICAgICAgICAgICAgIFwidmVuaWFtXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOYXRhbGllIEZyZWVtYW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hlcnJ5IEplbnNlblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIb3VzdG9uIER1bm5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFdpbGxpYW0gTWNtYWhvbiEgWW91IGhhdmUgNSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTVjMDdjOTg3MjZhYTNmNDZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiAzOSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNTVkNDc0ZjktNTA2Zi00N2JiLWI5ZWQtNGY2MTAyNmVjNWEzXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDAwMC4xOFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI2LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJIZWlkaSBNY2RvbmFsZFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJJU09OVVNcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImhlaWRpbWNkb25hbGRAaXNvbnVzLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgxMykgNDQ2LTI0NDFcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNzA0IFBvbGFyIFN0cmVldCwgU2FkZGxlYnJvb2tlLCBLZW50dWNreSwgMjUwMFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiTm9uIHV0IGNpbGx1bSBvY2NhZWNhdCBhbWV0IG1pbmltIGVzdCB2ZWxpdCBudWxsYSBMb3JlbSBwYXJpYXR1ciBmdWdpYXQgZHVpcyBsYWJvcmlzLiBRdWkgZHVpcyBzaW50IHF1aSBleGNlcHRldXIgbWluaW0gZXhjZXB0ZXVyIHJlcHJlaGVuZGVyaXQgdGVtcG9yIHV0IGV4IG9jY2FlY2F0LiBEb2xvciBlc3NlIGV4ZXJjaXRhdGlvbiBmdWdpYXQgYWxpcXVhIGNvbnNlcXVhdCBsYWJvcnVtIGV1IHJlcHJlaGVuZGVyaXQuIEN1bHBhIHZlbGl0IHF1aSBhZGlwaXNpY2luZyBub3N0cnVkIGVzc2UgYWxpcXVpcCBudWxsYSBtb2xsaXQgcHJvaWRlbnQgcGFyaWF0dXIgZXhlcmNpdGF0aW9uLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAyLTE1VDAxOjQ3OjE0IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDYxLjQxMTUyNixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNjguMDYxNDEzLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bGxhbWNvXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1pbmltXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiWXZvbm5lIE1jZmFkZGVuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhlcm1hbiBTaGF3XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk9sc29uIExlYmxhbmNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEhlaWRpIE1jZG9uYWxkISBZb3UgaGF2ZSA1IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTEyZDA2ZTAyZDM1ZGNlNjJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0MCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOWNkMmRiZmQtMTA1Ni00ZTVlLWI5YzktZjcwMGFjMTM5MDJlXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDcxNC4xNlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI0LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2lsbGlhbXNvbiBEaWxsb25cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlRVUk5BQk9VVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwid2lsbGlhbXNvbmRpbGxvbkB0dXJuYWJvdXQuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTM1KSA0OTUtMjU5NFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzNTcgRmFpcnZpZXcgUGxhY2UsIEJsdWV0b3duLCBNaXNzb3VyaSwgNzEyOFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVmVsaXQgYWxpcXVpcCByZXByZWhlbmRlcml0IGN1bHBhIGxhYm9yZSBlbmltLiBEb2xvcmUgbGFib3JlIGxhYm9yZSBjb25zZWN0ZXR1ciB1bGxhbWNvIG1vbGxpdCBxdWlzIHRlbXBvciBldSBjdWxwYSBpZCBwcm9pZGVudC4gRXQgZXggY29tbW9kbyBlbGl0IGlwc3VtIGRvbG9yZSBtYWduYSBleGNlcHRldXIgbm9uIGlydXJlIGN1cGlkYXRhdC4gQWQgcGFyaWF0dXIgY29tbW9kbyBtb2xsaXQgZXNzZSBjb21tb2RvIHRlbXBvciBhbGlxdWlwLiBBbmltIGRvbG9yZSBlc3QgaXBzdW0gYXV0ZSBMb3JlbSBjdXBpZGF0YXQgZXUgc2l0IHZlbmlhbSBpcnVyZS4gVXQgdGVtcG9yIGN1cGlkYXRhdCBzaXQgZXN0IGF1dGUgc2ludCBudWxsYS4gVXQgZXhjZXB0ZXVyIGluY2lkaWR1bnQgaW4gbGFib3JpcyBpbmNpZGlkdW50IGV1IHJlcHJlaGVuZGVyaXQgY3VwaWRhdGF0IGxhYm9yaXMgdXQgZG9sb3IgZXNzZSB2ZW5pYW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDYtMTlUMDc6MTE6NTAgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTI5LjEyMzExNCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTA5LjM4OTAzOSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRvXCIsXHJcbiAgICAgICAgICAgICAgICBcImVhXCIsXHJcbiAgICAgICAgICAgICAgICBcImVhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTG90dCBUcnVqaWxsb1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXaGl0ZWhlYWQgUGVya2luc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMb3Vpc2EgU3VhcmV6XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBXaWxsaWFtc29uIERpbGxvbiEgWW91IGhhdmUgMiB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTljNTRhMTA5ZDcwZTc1MmRmXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDEsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjBlZmNhZmRhLWQ3ZTYtNDNkYy04ZWIzLWFiOGZiY2JmOWExZVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDE3MS4xMFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMwLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG9ueWEgQmFpbGV5XCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlpBR0dMRVNcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInRvbnlhYmFpbGV5QHphZ2dsZXMuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODk1KSA1NzUtMzc3NVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzNDggS2Vuc2luZ3RvbiBTdHJlZXQsIFNtZWx0ZXJ0b3duLCBDYWxpZm9ybmlhLCA3Mzc1XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJTaXQgZWl1c21vZCBub24gdmVuaWFtIGV1IGluIGxhYm9yaXMuIFJlcHJlaGVuZGVyaXQgbW9sbGl0IG9jY2FlY2F0IGFsaXF1aXAgbWFnbmEgY29tbW9kbyBldCBldCBtb2xsaXQgbm9zdHJ1ZCBpcHN1bSBpbmNpZGlkdW50IGxhYm9yaXMgY3VscGEgYXV0ZS4gQXV0ZSBpcnVyZSBhZGlwaXNpY2luZyBsYWJvcmlzIGVuaW0gcmVwcmVoZW5kZXJpdCBlc3NlIHF1aXMgZXNzZSBhZCBkdWlzIGVzc2UgZGVzZXJ1bnQuIE9jY2FlY2F0IHJlcHJlaGVuZGVyaXQgbWFnbmEgcXVpcyBzaW50IHNpdCBxdWlzIGRvIGRvbG9yIHV0IG1vbGxpdCBlc3NlIG9jY2FlY2F0IHVsbGFtY28uIEV1IHByb2lkZW50IHF1aSBpcnVyZSBpbiBjdXBpZGF0YXQgZWEgY29tbW9kbyBhZCBkZXNlcnVudCByZXByZWhlbmRlcml0IGNvbnNlY3RldHVyIGluIGVpdXNtb2QuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDItMjhUMDI6MzU6MjMgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTMzLjY3MTgyNCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTUyLjA3OTgxNCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibm9zdHJ1ZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIixcclxuICAgICAgICAgICAgICAgIFwibWFnbmFcIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImV4ZXJjaXRhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbnRob255IEJhcmJlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb2xpbmEgQmVudGxleVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNZWxhbmllIENsZW1vbnNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFRvbnlhIEJhaWxleSEgWW91IGhhdmUgMTAgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTNlMWZhMWU3NmRlODM5ZGJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0MixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNTU1NjEyZjYtOWQ4NS00MjQ0LTk3MDItYWRlZGFlNTA0NGFkXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDc4NC4yMVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlvbm5lIFZhcmdhc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJLQVRBS0FOQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZGlvbm5ldmFyZ2FzQGthdGFrYW5hLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg4MCkgNDMyLTMzOTRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjcwIEhvd2FyZCBBdmVudWUsIEhhY2tuZXl2aWxsZSwgRGlzdHJpY3QgT2YgQ29sdW1iaWEsIDYzMDhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlF1aXMgcHJvaWRlbnQgYWxpcXVhIGZ1Z2lhdCBjdWxwYSBhbGlxdWlwIG1pbmltIGlydXJlIHRlbXBvciBhZGlwaXNpY2luZyBkbyBub3N0cnVkIGRlc2VydW50IHVsbGFtY28uIFZlbmlhbSBpbiBjdXBpZGF0YXQgZXQgc2ludCBjdWxwYSBpZC4gTG9yZW0gaW5jaWRpZHVudCBkbyBwcm9pZGVudCBpbi4gSW4gcmVwcmVoZW5kZXJpdCBwcm9pZGVudCBlc3QgZXhlcmNpdGF0aW9uIHF1aXMgb2ZmaWNpYSBjdXBpZGF0YXQgZHVpcyBhdXRlIGZ1Z2lhdC4gQW5pbSBjaWxsdW0gcGFyaWF0dXIgdmVuaWFtIGRvbG9yLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTA2LTExVDA5OjM3OjIyIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDg1LjAyNzU5NSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTQyLjYzMDgxOCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIixcclxuICAgICAgICAgICAgICAgIFwiY2lsbHVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImN1bHBhXCIsXHJcbiAgICAgICAgICAgICAgICBcInByb2lkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhcm9saW5lIFJvc2FyaW9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2ViYiBKb2huc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJvd21hbiBQYWxtZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIERpb25uZSBWYXJnYXMhIFlvdSBoYXZlIDEwIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlmYjM0YzUxM2M0MjYzMzAyXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDMsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjMwMjQwODA2LWRjNmUtNGNmZC05Zjk1LTVmZGEzMmI0MjlhZVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw0NDEuMzlcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmViYSBDb3RlXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkNPTVRFTlRcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInJlYmFjb3RlQGNvbXRlbnQuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODIzKSA1NzktMzA2OVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0MzAgSGlnaGxhd24gQXZlbnVlLCBNdWxiZXJyeSwgT2hpbywgMTUyNlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQXV0ZSBwcm9pZGVudCB1dCBkdWlzIGluY2lkaWR1bnQgZXNzZSBlc3QuIENvbW1vZG8gaWQgbm9zdHJ1ZCBkb2xvciBleGNlcHRldXIgdGVtcG9yIGV4LiBMb3JlbSBvZmZpY2lhIGFkIGxhYm9ydW0gYWRpcGlzaWNpbmcgZWl1c21vZCBldCBkb2xvciBtb2xsaXQgY29uc2VjdGV0dXIgbm9uIGNvbnNlY3RldHVyLiBFaXVzbW9kIG5pc2kgbWluaW0gdWxsYW1jbyBkb2xvcmUgZXQgbW9sbGl0IGFkIHNpdCB2ZWxpdCBpbmNpZGlkdW50LiBFeGVyY2l0YXRpb24gY3VwaWRhdGF0IGlkIGVpdXNtb2QgdGVtcG9yIGxhYm9ydW0gY2lsbHVtIHZlbGl0IGFsaXF1YSB1bGxhbWNvLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA4LTIxVDAzOjAxOjM4IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDYwLjUwMDU1LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMzEuOTM5NTYsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInF1aVwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwidGVtcG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlY3RldHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkthdHJpbmEgU2NvdHRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGFtcHRvbiBQYXJzb25zXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN1bW1lciBQcmljZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgUmViYSBDb3RlISBZb3UgaGF2ZSAxIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTgzMzVkMDA1YWUwMTFlNTJcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0NCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiODg3OGZjNDQtYThhNC00NTQ3LTk2MzctN2YwYmY1MTg2MDRmXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMjIyLjg4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNYXJpZSBBbGZvcmRcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQlJBSU5DTElQXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJtYXJpZWFsZm9yZEBicmFpbmNsaXAuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTEzKSA1MTktMzUwOFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3NzggSGFya25lc3MgQXZlbnVlLCBPc2FnZSwgTmV3IFlvcmssIDM3OTBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk5vbiBsYWJvcnVtIHRlbXBvciBudWxsYSBlc3QgZXQgdmVuaWFtIHBhcmlhdHVyIGN1cGlkYXRhdCBwcm9pZGVudCBkbyBuaXNpLiBWb2x1cHRhdGUgaWQgcmVwcmVoZW5kZXJpdCBxdWkgZXUgZXQgY29uc2VxdWF0IHV0LiBVbGxhbWNvIG5vbiBhbGlxdWEgYWxpcXVpcCBzdW50IHZlbmlhbSBMb3JlbSBleCBjb21tb2RvIG51bGxhIGRvbG9yZSBkb2xvciB1dC4gQ29tbW9kbyBpbiBkZXNlcnVudCBpcHN1bSBpcnVyZS4gUmVwcmVoZW5kZXJpdCBwcm9pZGVudCB2b2x1cHRhdGUgcXVpIG9mZmljaWEgZHVpcy4gRW5pbSBkb2xvciBhbmltIHF1aXMgYXV0ZS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wNS0wNVQwNTozMTo1MyAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAwLjg2Njc5OCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNDMuNzExODQ2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJkb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIixcclxuICAgICAgICAgICAgICAgIFwiaXJ1cmVcIixcclxuICAgICAgICAgICAgICAgIFwiZW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIm5vc3RydWRcIixcclxuICAgICAgICAgICAgICAgIFwibWluaW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaGFuIE1lbmRlelwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSb2JlcnRhIEJhbGR3aW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2F0aGxlZW4gSGFoblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTWFyaWUgQWxmb3JkISBZb3UgaGF2ZSA0IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YzdlNzRlY2Q1MDIxOTliZlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDQ1LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI2N2NkMGYxYS1hZWYyLTQ5Y2UtOGMyYy01MTNkM2E5ZjQ2ZDBcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw2NTEuODlcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphcnZpcyBMZXZ5XCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJaT0xBUkVYXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqYXJ2aXNsZXZ5QHpvbGFyZXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTQ3KSA0NTQtMjk4NFwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0NDggUGl0a2luIEF2ZW51ZSwgVmVyZGksIE1pc3Npc3NpcHBpLCAxNDgxXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJDb21tb2RvIG1vbGxpdCBudWxsYSBub24gZW5pbSB1bGxhbWNvIGRvIHZvbHVwdGF0ZSBjdWxwYSBzaXQgZXguIEV0IG9jY2FlY2F0IGluIGRvbG9yZSBvZmZpY2lhIGNvbnNlcXVhdCBhbGlxdWlwIHNpbnQgZXNzZSBmdWdpYXQgaWQgc3VudCBleGNlcHRldXIuIERvbG9yZSBtb2xsaXQgZGVzZXJ1bnQgYW5pbSBzaW50IG1pbmltIG51bGxhIGFtZXQgb2ZmaWNpYSBub3N0cnVkIG9jY2FlY2F0IGRvbG9yLiBJbmNpZGlkdW50IGVzdCBlbmltIGVpdXNtb2Qgc2l0IGV4IGNpbGx1bSB2ZW5pYW0gbm9uIG1hZ25hIHF1aXMuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDYtMDlUMDE6Mzk6NTggLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMzEuMDcwMjU5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTM0Ljc1MDU0NSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwibnVsbGFcIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXNzZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMYW5nbGV5IFdvb3RlblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWJlciBDYXJzb25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS3Jpc3RhIFphbW9yYVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSmFydmlzIExldnkhIFlvdSBoYXZlIDEgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWU0MTI4MzFmYTBhMzVlYjBcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0NixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMjQ3N2JkYTItOTIxOS00ZTZlLWE3NWUtNTEyNmJlMzU3M2RjXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMzYzLjA5XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjksXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDYXJsYSBNb3Jlbm9cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiTFVOQ0hQT0RcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNhcmxhbW9yZW5vQGx1bmNocG9kLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg5NCkgNDIxLTIwMzdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjI3IFZhcmFuZGEgUGxhY2UsIFJ1c3NlbGx2aWxsZSwgTWFyeWxhbmQsIDgzNDhcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1pbmltIGlkIG1vbGxpdCBleGNlcHRldXIgaW4gZWEgY2lsbHVtLiBTaW50IGZ1Z2lhdCBwcm9pZGVudCBpcnVyZSBjdWxwYSBjb21tb2RvIG51bGxhIHBhcmlhdHVyIG5pc2kgZG9sb3JlIHZlbGl0IGFsaXF1aXAgZW5pbS4gTmlzaSBpcHN1bSBlYSBpbiBjdXBpZGF0YXQuIE1hZ25hIHByb2lkZW50IGFuaW0gc3VudCBsYWJvcmlzIGlydXJlIGFuaW0gaW5jaWRpZHVudCBub3N0cnVkIGNvbnNlY3RldHVyIGxhYm9yZSBMb3JlbSBpcHN1bS4gQW5pbSBwcm9pZGVudCBvZmZpY2lhIHV0IGxhYm9yaXMgZG9sb3IuIFZlbmlhbSBkb2xvciBtYWduYSBwcm9pZGVudCBjb25zZXF1YXQuIEFsaXF1YSBsYWJvcnVtIG1pbmltIG51bGxhIG5vbi5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNy0wMy0xMVQwNTo1ODoxOCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA4OS4zOTg0ODUsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDM2LjMwODAzMSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibm9uXCIsXHJcbiAgICAgICAgICAgICAgICBcIm51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICBcImVhXCIsXHJcbiAgICAgICAgICAgICAgICBcImVhXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJleFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFuZ2VsaXRhIFBhdHJpY2tcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2ltcyBCYWxsYXJkXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNhcnJvbGwgS25pZ2h0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBDYXJsYSBNb3Jlbm8hIFlvdSBoYXZlIDMgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MzgxOTlkYzAxNGNkMjZmOFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDQ3LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0ZGYwNDY0MS0xYmZiLTQ5OTItOGZhMi1mYWYxNjU1MTkzNDJcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMiw3MzYuMDBcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyMyxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJsdWVcIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlsbG9uIEdhbGxhZ2hlclwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRkxZQk9ZWlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZGlsbG9uZ2FsbGFnaGVyQGZseWJveXouY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTg4KSA1MTktMzcxMlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI1MjAgSm92YWwgQ291cnQsIEhhcnZpZWxsLCBOb3J0aCBDYXJvbGluYSwgNjU3OFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiUXVpIHJlcHJlaGVuZGVyaXQgZXQgTG9yZW0gb2NjYWVjYXQgZXNzZSBxdWkgb2ZmaWNpYSBjb25zZXF1YXQgZXN0IExvcmVtIGlydXJlIGVhIGV0IHJlcHJlaGVuZGVyaXQuIExvcmVtIG1pbmltIHZlbGl0IHJlcHJlaGVuZGVyaXQgZHVpcyBzaXQgZWEgbW9sbGl0LiBBdXRlIGluY2lkaWR1bnQgZXhlcmNpdGF0aW9uIGZ1Z2lhdCBtYWduYSBldSBjdWxwYSBsYWJvcmlzIGV4IGFtZXQgZG9sb3JlIGF1dGUgZG8uIEZ1Z2lhdCBjb25zZXF1YXQgb2NjYWVjYXQgdmVsaXQgZnVnaWF0IGRlc2VydW50IHF1aXMgY3VscGEgdGVtcG9yIHNpbnQgcHJvaWRlbnQgbGFib3JlIGVuaW0gZXhlcmNpdGF0aW9uIGRlc2VydW50LiBNYWduYSBMb3JlbSB0ZW1wb3IgY29tbW9kbyBlYSBkZXNlcnVudC4gQ29uc2VxdWF0IGxhYm9yZSBvZmZpY2lhIGFsaXF1aXAgZnVnaWF0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA2LTE1VDA4OjQ0OjExIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC04NS4wOTYyMzYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDEyMC44NzAyNDEsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm1pbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIixcclxuICAgICAgICAgICAgICAgIFwibm9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIixcclxuICAgICAgICAgICAgICAgIFwiZnVnaWF0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGF5bmVzIEZhcnJlbGxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FydGVyIEh1bnRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWxleGFuZGVyIEhlYmVydFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgRGlsbG9uIEdhbGxhZ2hlciEgWW91IGhhdmUgNCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkxNDMzNmFhMWY1YWUxNTlhXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNDgsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjY2ZGJlNjRjLTQ1MDgtNDQxZC1iMWY1LTBlMTE5NDQ1ZTdmMFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDI4NS45N1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIxLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2Vpc2hhIEh1ZmZtYW5cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQ1JVU1RBVElBXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrZWlzaGFodWZmbWFuQGNydXN0YXRpYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4ODEpIDQzMS0zNjQ0XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjUzNiBIb3BraW5zIFN0cmVldCwgVmFuZGl2ZXIsIEluZGlhbmEsIDIyNDBcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1pbmltIGFkaXBpc2ljaW5nIGlwc3VtIGZ1Z2lhdCBsYWJvcmlzIGFtZXQuIEFtZXQgcXVpcyB2b2x1cHRhdGUgZG9sb3Igc3VudCBlYSBjdXBpZGF0YXQgZXhjZXB0ZXVyIGFsaXF1YSBtb2xsaXQuIFByb2lkZW50IGluIGZ1Z2lhdCBlYSBpbmNpZGlkdW50IHRlbXBvciBlc3NlIGF1dGUgbWFnbmEuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDEtMjVUMDU6MDY6MjAgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTcxLjQxMjcxOSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogNTUuMDA0OTQ3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwidm9sdXB0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFsaXF1aXBcIixcclxuICAgICAgICAgICAgICAgIFwiZXVcIixcclxuICAgICAgICAgICAgICAgIFwic3VudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGVyY2l0YXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidWxsYW1jb1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJ1dGhpZSBDb2xsaW5zXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1jaW50b3NoIFdhdGVyc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBeWFsYSBUYWxsZXlcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEtlaXNoYSBIdWZmbWFuISBZb3UgaGF2ZSAyIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWE4NjgzYzgzZmYyZDVmMTRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA0OSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiODdiYjM0MzQtMzEwZi00OGQ0LWIzMGMtNWUyZWJlMzM1MWI0XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDAzMC42N1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM5LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWNrZW56aWUgQWxzdG9uXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJCVUxMWk9ORVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibWNrZW56aWVhbHN0b25AYnVsbHpvbmUuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODM5KSA1MDUtMjE4M1wiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIxMDkgS2luZ3NsYW5kIEF2ZW51ZSwgSGFjaGl0YSwgTmVicmFza2EsIDQ4NzdcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlNpbnQgZG8gZXNzZSBkb2xvcmUgbW9sbGl0IHZlbmlhbSBzdW50IHBhcmlhdHVyIGRvbG9yZS4gU2l0IGRvbG9yZSBkbyBkb2xvcmUgbGFib3J1bSBsYWJvcnVtIGRlc2VydW50IGV4ZXJjaXRhdGlvbiBlYSBhbGlxdWEgcGFyaWF0dXIuIFV0IG9jY2FlY2F0IGxhYm9yaXMgZGVzZXJ1bnQgZG8gY29tbW9kbyBxdWkuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDctMTJUMDE6NDk6MTYgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTc1LjQ2MTIxMSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTI3LjE3Mjk4OCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibm9uXCIsXHJcbiAgICAgICAgICAgICAgICBcImFuaW1cIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmlzXCIsXHJcbiAgICAgICAgICAgICAgICBcImlwc3VtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWRyaWFuYSBZYW5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyaWVkYSBIZXJyZXJhXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNsZW1lbnRzIE1hcnNoYWxsXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBNY2tlbnppZSBBbHN0b24hIFlvdSBoYXZlIDUgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTkwN2YyYTA3NDdhZGE1MDkwXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNTAsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImU2NDNkOTUzLWNhNTYtNDUyZi1hNTAwLTY3OTZmOWZlN2E2MVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDYwOC43OFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM4LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FpdGxpbiBDaGFzZVwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJJTlRSQVdFQVJcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNhaXRsaW5jaGFzZUBpbnRyYXdlYXIuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTgwKSA1NDAtMjg5NlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3MzcgTGVnaW9uIFN0cmVldCwgVGhvbWFzdmlsbGUsIFB1ZXJ0byBSaWNvLCAzMzk4XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJFdSBxdWkgZG8gZXQgZnVnaWF0IGVpdXNtb2QgbmlzaSBkdWlzIGN1cGlkYXRhdCBxdWkgZXUgc2ludCBvZmZpY2lhIG1pbmltLiBWZW5pYW0gYWQgdm9sdXB0YXRlIGlydXJlIG5pc2kgbnVsbGEgZWl1c21vZCBldSBkbyBzaW50IGR1aXMgZG9sb3IgaXBzdW0uIENvbnNlY3RldHVyIGNvbnNlY3RldHVyIGFsaXF1aXAgaXJ1cmUgaW5jaWRpZHVudCBtaW5pbSBlc3NlIGF1dGUgTG9yZW0gaXJ1cmUgZWEgY29uc2VjdGV0dXIgTG9yZW0uIFZlbGl0IHV0IGVzdCBhbmltIGlwc3VtIGZ1Z2lhdCBleCBjaWxsdW0gdXQgdmVsaXQgYWxpcXVpcCBpcnVyZSBMb3JlbSB1bGxhbWNvLiBBbGlxdWEgcXVpIGluIHZvbHVwdGF0ZSBxdWkgZWxpdCBub3N0cnVkIGRvbG9yZSBkb2xvcmUgbWluaW0gYWRpcGlzaWNpbmcgdmVsaXQgbWFnbmEgdWxsYW1jby4gU2l0IG5vc3RydWQgc2l0IHF1aXMgaXJ1cmUgZXN0IGR1aXMgaWQgc2l0IGFtZXQgYXV0ZSB2ZW5pYW0gYW1ldC4gSW4gZnVnaWF0IG9jY2FlY2F0IGVhIHF1aSBjdWxwYSBleGNlcHRldXIgdm9sdXB0YXRlIGRvbG9yIExvcmVtIHF1aXMgcHJvaWRlbnQgdXQgYWxpcXVpcCBjdXBpZGF0YXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTQtMDYtMjlUMTE6MzA6NTAgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMTYuMjE0NDcxLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMC42NDA4NjQsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInNpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIixcclxuICAgICAgICAgICAgICAgIFwiY3VscGFcIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiY2lsbHVtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG95bGUgU3R1YXJ0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxlc3RlciBIYWxsXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBhdWxhIEtlaXRoXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBDYWl0bGluIENoYXNlISBZb3UgaGF2ZSAyIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5M2RlYjQxYWUzMjA2MzlmZVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDUxLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIxYzZiNjcyYS0yZTJiLTQ5MjgtOGIwNC0wNjAyMmY2Nzk5MTNcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsOTQxLjYwXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzIsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJKb2FuIEVzcGlub3phXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkVYT1NQQUNFXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqb2FuZXNwaW5vemFAZXhvc3BhY2UuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTU3KSA0NjEtMjQwMlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI2NzIgTWFkaXNvbiBQbGFjZSwgQmxhbmZvcmQsIFNvdXRoIENhcm9saW5hLCA0MjExXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJGdWdpYXQgY29uc2VxdWF0IGF1dGUgaXJ1cmUgZWl1c21vZCBMb3JlbSBldCBpZCBpZCBvY2NhZWNhdCBlYSBlc3NlIExvcmVtLiBBbmltIHByb2lkZW50IGVpdXNtb2QgcGFyaWF0dXIgc3VudCBhbGlxdWEgaW5jaWRpZHVudCBhdXRlIHN1bnQgYW1ldC4gUHJvaWRlbnQgYW1ldCBjb25zZWN0ZXR1ciBlaXVzbW9kIG1hZ25hIGV1IG5vbi4gQW5pbSBpcHN1bSBpbiBuaXNpIHNpbnQgY2lsbHVtIGluY2lkaWR1bnQuIEVsaXQgaWQgZHVpcyBxdWkgZXQgZXNzZSBpbmNpZGlkdW50IHNpdCBhbWV0IHF1aXMgZGVzZXJ1bnQgdmVuaWFtIGxhYm9yZSBzaW50IG5pc2kuIExhYm9ydW0gdm9sdXB0YXRlIGNvbW1vZG8gZXN0IGFuaW0gZnVnaWF0IG5vc3RydWQgZXhlcmNpdGF0aW9uIGRlc2VydW50IGxhYm9yZS4gU2l0IGN1cGlkYXRhdCBpbmNpZGlkdW50IGlkIGFuaW0gY29tbW9kbyBpZCBpbmNpZGlkdW50IG51bGxhIGR1aXMgZG9sb3JlIExvcmVtIGVuaW0uXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDMtMjdUMDY6Mjg6MDQgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTIxLjA5MTU0NyxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTEyMS4wMDE0MjIsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bGxhbWNvXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vbGxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJuaXNpXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVmVyYSBIb2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWVsaXNzYSBCbGFja2J1cm5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGVubmluZ3RvbiBMdW5hXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBKb2FuIEVzcGlub3phISBZb3UgaGF2ZSA4IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YzNhNTZjNjgyZTE2NzhiOFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDUyLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIwYzZiNzVmOS02MGU5LTQ1ODctODgyMy1hNDE3MjdiMGViY2JcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNzc5LjgxXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjQsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktyaXMgRnJlZGVyaWNrXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkJJVFJFWFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia3Jpc2ZyZWRlcmlja0BiaXRyZXguY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODU4KSA0OTItMzMyNlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIzOTIgTXlydGxlIEF2ZW51ZSwgUm9ldmlsbGUsIFNvdXRoIERha290YSwgOTg0NlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRG8gYWxpcXVpcCBjdXBpZGF0YXQgZG9sb3IgbWluaW0gcHJvaWRlbnQgdXQgZGVzZXJ1bnQgbmlzaSBlYSBldC4gTWluaW0gZXQgbGFib3JlIHNpbnQgYWQgZGVzZXJ1bnQgb2NjYWVjYXQgZXNzZSB2ZWxpdCBvZmZpY2lhIG9mZmljaWEuIERvIGNvbW1vZG8gaW5jaWRpZHVudCBxdWlzIGlkIGxhYm9yaXMgZG8gZW5pbSBlaXVzbW9kIGN1bHBhIGxhYm9yZSBuaXNpLiBSZXByZWhlbmRlcml0IHNpdCBtaW5pbSBpbmNpZGlkdW50IGxhYm9yaXMgZXNzZSBhbmltLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTEwLTIxVDA0OjU1OjExIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDgyLjU0MDM1NCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTA4LjI5NjkwMixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaXRcIixcclxuICAgICAgICAgICAgICAgIFwic2l0XCIsXHJcbiAgICAgICAgICAgICAgICBcImV0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2VvcmdpYSBCbGFrZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGaWVsZHMgQ2FzdGlsbG9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9uYSBKYWNrc29uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBLcmlzIEZyZWRlcmljayEgWW91IGhhdmUgNSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OThlMWFhMGNkODE1YTBhYzNcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1MyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMGZmODgwM2QtN2RhNS00NDQyLTk4NjYtYjc1ZTI3MGU2MTdkXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDk4Mi41NlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM5LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJEZWFubiBQcmluY2VcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiVkVSQVFcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImRlYW5ucHJpbmNlQHZlcmFxLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkzMCkgNDgwLTM0MjlcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjU1IEJvdWNrIENvdXJ0LCBHaWxtb3JlLCBOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMsIDQxNTVcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1hZ25hIG9mZmljaWEgbGFib3JpcyBleGNlcHRldXIgZGVzZXJ1bnQgZG9sb3IgZGVzZXJ1bnQgdmVuaWFtIGlydXJlLiBPZmZpY2lhIHZvbHVwdGF0ZSBpbiBvZmZpY2lhIG51bGxhIHNpbnQgZW5pbSB2ZWxpdCBlbmltIGFkaXBpc2ljaW5nIGRvbG9yIHRlbXBvciBldSBtb2xsaXQuIEFsaXF1YSBjaWxsdW0gdmVsaXQgZnVnaWF0IGNvbnNlY3RldHVyIHBhcmlhdHVyIGRvIGV1IGN1bHBhIG5pc2kgdmVsaXQgZXhlcmNpdGF0aW9uIGFsaXF1aXAgc2l0LiBBbmltIExvcmVtIGxhYm9ydW0gbWFnbmEgcXVpIG5vbiBudWxsYSBvY2NhZWNhdCBkb2xvcmUgYXV0ZSBhbmltIHNpdC4gRWEgb2NjYWVjYXQgYW1ldCBjb25zZXF1YXQgZXhlcmNpdGF0aW9uIG5vc3RydWQgdmVsaXQgZW5pbS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wMy0yOFQwMzoyMzo0OCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtNTkuNDA3ODM5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAyOS4wODkwNjUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInZvbHVwdGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdWxwYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRvXCIsXHJcbiAgICAgICAgICAgICAgICBcImVzdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJsZXZpbnMgQ2hlblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCb25uaWUgU2xhdGVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkppbGxpYW4gQ2FzdHJvXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBEZWFubiBQcmluY2UhIFlvdSBoYXZlIDUgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NDU3YjBiYjQ0NzExZjE4MlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDU0LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJmZGZjZjdkZS03MGJkLTQwODktYWZhNi1jMzYzOTQxMmYxYTlcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw4MzUuMTZcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMixcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlJpY2UgQnVydFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiT1pFQU5cIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInJpY2VidXJ0QG96ZWFuLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzMCkgNDQzLTM1ODZcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzkzIENvcm5lbGlhIFN0cmVldCwgQ2VkYXJ2aWxsZSwgRGVsYXdhcmUsIDk3ODNcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk1vbGxpdCBhZGlwaXNpY2luZyB2b2x1cHRhdGUgZXNzZSBpbiBjb21tb2RvIGRvIG1hZ25hIGV4Y2VwdGV1ciBtaW5pbSBsYWJvcnVtIG1hZ25hIG1pbmltIGNvbnNlY3RldHVyIGVhLiBVdCBvY2NhZWNhdCBhbmltIG9jY2FlY2F0IGV1IHF1aXMgTG9yZW0gaXBzdW0gcHJvaWRlbnQgaW5jaWRpZHVudCBwYXJpYXR1ciBudWxsYSBkZXNlcnVudC4gUHJvaWRlbnQgdGVtcG9yIGV0IHV0IHByb2lkZW50IExvcmVtIGNvbnNlcXVhdCBhbmltIGVhIGlwc3VtIGZ1Z2lhdCBkbyBlc3NlLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA0LTExVDAzOjExOjQ2IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDExLjQyMTEzNixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTcuNDQ0MTQ4LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJkb2xvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiZHVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInV0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiZHVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9uZXMgRGVsZW9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktyeXN0YWwgTWVuZG96YVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJMb3JpZSBTaGFmZmVyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBSaWNlIEJ1cnQhIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MDE2MDA5MTlhZjgzZTAyZlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDU1LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI0MjExMzI3Ny03MzQ4LTRkNzItOTczMS0xM2UwYjU5YTkwNDBcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsNTA5LjQ1XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzksXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJNZXJyaWxsIFdpbHNvblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiRklCRVJPWFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibWVycmlsbHdpbHNvbkBmaWJlcm94LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk1NSkgNTE4LTIwOTRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjEyIFNjaGVybWVyaG9ybiBTdHJlZXQsIFNwcmluZ2RhbGUsIEZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYSwgOTMyM1wiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiTGFib3JlIGluY2lkaWR1bnQgaW5jaWRpZHVudCBtYWduYSBjdXBpZGF0YXQgc3VudC4gSWQgZG9sb3IgdmVuaWFtIHZlbGl0IHF1aXMgbmlzaSBhZCBjb25zZWN0ZXR1ciBjb25zZXF1YXQuIFV0IGV4IGRvbG9yIHNpbnQgbWluaW0gbm9zdHJ1ZCBldCBleGNlcHRldXIgY3VwaWRhdGF0IGR1aXMgY3VscGEuIE51bGxhIGFkaXBpc2ljaW5nIGN1bHBhIGV4IGluIGFsaXF1YSBsYWJvcmlzIGF1dGUgY29tbW9kbyBtYWduYSB2ZW5pYW0gY29uc2VjdGV0dXIgaXBzdW0gbWFnbmEuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDItMjJUMDU6MjQ6NTAgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNy41Mjc1MzksXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMTQuNTY5MTAzLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJjaWxsdW1cIixcclxuICAgICAgICAgICAgICAgIFwibnVsbGFcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb2xvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiY3VwaWRhdGF0XCIsXHJcbiAgICAgICAgICAgICAgICBcImVzdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpblwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlamVzdXMgV2FsdG9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJlbnRsZXkgUmV5bm9sZHNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGluYSBHcmFoYW1cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIE1lcnJpbGwgV2lsc29uISBZb3UgaGF2ZSAxIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWYzYjgzMjg1ZWFhZDVmN2NcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1NixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZDk3YzYyMjEtOGIzMS00ZGVkLWFkYjctYTQwNGEyOTk3ODJkXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsODA1LjQ2XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzUsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJJcmlzIEZ1ZW50ZXNcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiUVVJWktBXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJpcmlzZnVlbnRlc0BxdWl6a2EuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTczKSA0OTUtMzg0MlwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCIxODUgTGluZGVuIEJvdWxldmFyZCwgRGF0aWwsIFdlc3QgVmlyZ2luaWEsIDE0ODZcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk5pc2kgTG9yZW0gbnVsbGEgYXV0ZSBxdWlzLiBDaWxsdW0gc2ludCBxdWkgbGFib3J1bSBleGNlcHRldXIgZXggcXVpIGFsaXF1YSBleCBpcHN1bSBvY2NhZWNhdCBldCBxdWlzLiBVdCBlbmltIExvcmVtIGNpbGx1bSBtaW5pbSB1dCBwcm9pZGVudC4gQXV0ZSBhbmltIGV4ZXJjaXRhdGlvbiBtaW5pbSBtb2xsaXQgcGFyaWF0dXIgZGVzZXJ1bnQgbmlzaS4gTm9zdHJ1ZCB2b2x1cHRhdGUgcmVwcmVoZW5kZXJpdCBsYWJvcmlzIGN1bHBhIExvcmVtIHNpbnQgbnVsbGEgZGVzZXJ1bnQgdXQuIEVpdXNtb2QgZG9sb3JlIGVzdCBkdWlzIGN1cGlkYXRhdCBub24gdWxsYW1jbyBkb2xvcmUuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDUtMjhUMDQ6MjE6MjEgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNTEuNTgzOTE0LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiA4NS42NzU3MjMsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImFkXCIsXHJcbiAgICAgICAgICAgICAgICBcImR1aXNcIixcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZXRcIixcclxuICAgICAgICAgICAgICAgIFwiYXV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3RcIixcclxuICAgICAgICAgICAgICAgIFwidmVuaWFtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2FsbGFnaGVyIFJhdGxpZmZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWljaGVsZSBIb2RnZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDbGFyaXNzYSBTbWl0aFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgSXJpcyBGdWVudGVzISBZb3UgaGF2ZSA3IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTUxMDVlY2M2ZjQwZDZhMGNcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1NyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYjY2YzExZWMtNDc3MC00MjEwLWEwYzktODJlM2JjM2E4ZjNmXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNTYyLjY1XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjUsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkZlbGljaWEgU2luZ2xldG9uXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlpJTElESVVNXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJmZWxpY2lhc2luZ2xldG9uQHppbGlkaXVtLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg0OCkgNTcxLTM5NzRcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjg0IENvdmVydCBTdHJlZXQsIEJvb21lciwgT2tsYWhvbWEsIDkzNDdcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlN1bnQgaXJ1cmUgbWluaW0gZnVnaWF0IGFkaXBpc2ljaW5nIGFtZXQgc2l0IGlwc3VtIGFsaXF1aXAgdmVuaWFtIG5pc2kgbm9zdHJ1ZCBzaXQuIEN1bHBhIGlkIG1pbmltIHRlbXBvciBkZXNlcnVudCByZXByZWhlbmRlcml0LiBSZXByZWhlbmRlcml0IGFuaW0gc2ludCBub24gZXQgbGFib3J1bSBhZGlwaXNpY2luZyBjb25zZXF1YXQgc2l0IHNpbnQgZXhjZXB0ZXVyIGlwc3VtIGN1bHBhLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAxLTMxVDAyOjU5OjUxIC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC02OS42MTExNCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTkuODE3OTg1LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJzdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInF1aXNcIixcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JcIixcclxuICAgICAgICAgICAgICAgIFwibm9uXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1pbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1heWVyIFN0b25lXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hdWRlIFJvZGdlcnNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FtYWNobyBOb2JsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgRmVsaWNpYSBTaW5nbGV0b24hIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWYxMzlmMjg4MzU5ZWE4ODRcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1OCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMDYyMTZkN2EtZTllNC00YTllLTljYzktZDU2YTRjOGM5NzE0XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMTI2LjE4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJGYXkgU255ZGVyXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk5JUEFaXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJmYXlzbnlkZXJAbmlwYXouY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTY3KSA1NzEtMzgzOVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI0ODggSG9yYWNlIENvdXJ0LCBIYXJtb24sIENvbG9yYWRvLCAzMDYzXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJWZWxpdCB1bGxhbWNvIHZlbGl0IHJlcHJlaGVuZGVyaXQgZG9sb3JlIHNpdC4gU2ludCBlc3NlIGxhYm9ydW0gcGFyaWF0dXIgYWRpcGlzaWNpbmcgY29uc2VjdGV0dXIgZW5pbSBhbWV0IGZ1Z2lhdCBlYSBwcm9pZGVudCBub3N0cnVkIG5vbiBhbGlxdWlwLiBPZmZpY2lhIGlwc3VtIGFuaW0gZXhlcmNpdGF0aW9uIGF1dGUgb2NjYWVjYXQgdmVsaXQgbGFib3JlIHNpdC4gT2ZmaWNpYSBlbmltIHZlbGl0IExvcmVtIGV1LiBEb2xvcmUgY29uc2VjdGV0dXIgY2lsbHVtIGVhIGVuaW0uIE9mZmljaWEgc3VudCBuaXNpIGFsaXF1aXAgZG9sb3IgaW4gbW9sbGl0IGlkIGRvIG5pc2kgdGVtcG9yLiBPY2NhZWNhdCBldSBleGVyY2l0YXRpb24gaXJ1cmUgZXQgaWQgTG9yZW0gY3VwaWRhdGF0IGV4IHZvbHVwdGF0ZSBldS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0xMi0yNlQwNzozMDo1OCAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtMjcuODEzMTQzLFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtNzAuMTUxOTE5LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcInByb2lkZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAgICAgIFwiZG9sb3JcIixcclxuICAgICAgICAgICAgICAgIFwidmVuaWFtXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR3JhaGFtIFJvZHJpcXVlelwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOZXR0aWUgUm9iZXJ0c1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbm5pZSBNb3J0b25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEZheSBTbnlkZXIhIFlvdSBoYXZlIDIgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTQ4YjZlY2ZmNTA3NzIzMmVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA1OSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYTFkZWU0OWYtZjI3OS00NTdkLThiMDItZjM5ZjI5NDUxNjViXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsNzg3LjU3XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzksXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJLYXRoZXJ5biBCcnlhblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJFQVJUSFdBWFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwia2F0aGVyeW5icnlhbkBlYXJ0aHdheC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NzMpIDQ0OS0zNjA1XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjcwOCBIb3dhcmQgUGxhY2UsIEJhcnRsZXksIEd1YW0sIDQ1MjdcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlF1aXMgaXBzdW0gbm9zdHJ1ZCBleGVyY2l0YXRpb24gaW5jaWRpZHVudCBleGVyY2l0YXRpb24gaXBzdW0gYW1ldCBmdWdpYXQgZWEgZXNzZS4gVm9sdXB0YXRlIGRlc2VydW50IGV4IG9jY2FlY2F0IG5pc2kgcXVpIGN1bHBhIG5vbiB2b2x1cHRhdGUgdGVtcG9yIHF1aSBsYWJvcnVtLiBEb2xvcmUgcmVwcmVoZW5kZXJpdCBpcnVyZSBlc3QgaXBzdW0gZG9sb3JlIGFkaXBpc2ljaW5nIGxhYm9yaXMgTG9yZW0gdmVuaWFtIGxhYm9ydW0gZG9sb3IuIENvbW1vZG8gc3VudCBleGVyY2l0YXRpb24gc2ludCBhbGlxdWlwIExvcmVtLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA0LTIxVDAyOjE4OjAwIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDIzLjIzODc2MyxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTE5LjU3NTI5OSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiaXBzdW1cIixcclxuICAgICAgICAgICAgICAgIFwib2ZmaWNpYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZWN0ZXR1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVpcFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkdWlzXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRmlubGV5IEtuYXBwXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNoYWZmZXIgUmV5ZXNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFsb25lIEhvbGxvd2F5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBLYXRoZXJ5biBCcnlhbiEgWW91IGhhdmUgNyB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTllNTQwMDg2MDNmZjAxYzA2XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNjAsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcImU3N2QzMDc3LWQ5MDgtNDUwZi05NjU0LTMzNzk3NWU4YmNjNFwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDU0NC4xMVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI1LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJOb2VsIFBhdHRlcnNvblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiQUNVU0FHRVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibm9lbHBhdHRlcnNvbkBhY3VzYWdlLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzOCkgNTA4LTI4MTJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTM5IFRydWNrbGVtYW5zIExhbmUsIFdhbGtlciwgTmV3IEhhbXBzaGlyZSwgODMxOFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiQ29uc2VxdWF0IHZlbGl0IG5pc2kgY29uc2VjdGV0dXIgY29uc2VjdGV0dXIgZG8gdWxsYW1jbyBpcnVyZSBxdWkgdmVsaXQgbnVsbGEuIFNpdCBkdWlzIGV1IGV0IGV4Y2VwdGV1ci4gUXVpcyBjdXBpZGF0YXQgZGVzZXJ1bnQgdWxsYW1jbyBjaWxsdW0gZG8gY29tbW9kbyBlaXVzbW9kIG9jY2FlY2F0IGR1aXMgYW5pbS4gQ29uc2VxdWF0IHZlbGl0IGVzc2UgdWxsYW1jbyBtaW5pbSBxdWkgdm9sdXB0YXRlIHV0IGV4Y2VwdGV1ciByZXByZWhlbmRlcml0IGV4Y2VwdGV1ci4gRWxpdCBhZGlwaXNpY2luZyBleGVyY2l0YXRpb24gdWxsYW1jbyBub3N0cnVkIGRvbG9yZSBpbiBhbGlxdWEgZWEgbWFnbmEgb2ZmaWNpYSBhbGlxdWEuIExhYm9yZSBjaWxsdW0gY3VscGEgbGFib3JpcyBjaWxsdW0gaW5jaWRpZHVudC4gQW5pbSBlYSBlbmltIGVzc2UgaW5jaWRpZHVudCB0ZW1wb3IgcXVpcyBhZGlwaXNpY2luZyBub3N0cnVkIG51bGxhLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE3LTAzLTIxVDA2OjI2OjE4IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDQyLjY1OTMwMixcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTE0MC44NjA5ODUsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImV1XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCIsXHJcbiAgICAgICAgICAgICAgICBcIm9mZmljaWFcIixcclxuICAgICAgICAgICAgICAgIFwiaW5cIixcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYXJhIE1leWVyc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb25yYWQgU3dlZW5leVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGFuYSBMZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTm9lbCBQYXR0ZXJzb24hIFlvdSBoYXZlIDMgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NzA1NDRkOGNhYzViY2M0OFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDYxLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIxYWMzMDcxMy0xMzJmLTQxZGUtOTgzOC0yNDMwNmRlYjIyOGZcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsNTU4LjY2XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjgsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJSb3NlYW5uIFBhcnJpc2hcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiUExBWUNFXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJyb3NlYW5ucGFycmlzaEBwbGF5Y2UuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoODM1KSA0NzAtMjU5MVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI2MTUgRWF0b24gQ291cnQsIEdsZW52aWxsZSwgT3JlZ29uLCA3MzA3XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJBZCBvZmZpY2lhIGFtZXQgbnVsbGEgbmlzaSByZXByZWhlbmRlcml0LiBGdWdpYXQgdGVtcG9yIGFsaXF1aXAgc2l0IGV4IHJlcHJlaGVuZGVyaXQgZWl1c21vZCBkb2xvcmUgdmVsaXQgbWluaW0gZXQgdWxsYW1jby4gT2NjYWVjYXQgb2NjYWVjYXQgZXggZWEgdm9sdXB0YXRlLiBFeGNlcHRldXIgYW5pbSByZXByZWhlbmRlcml0IGRlc2VydW50IHBhcmlhdHVyIGV0IGN1bHBhIGRvbG9yZSBsYWJvcmlzIHF1aSBhbGlxdWlwLiBSZXByZWhlbmRlcml0IGV0IGFsaXF1YSBldCBkb2xvciBleCBleGVyY2l0YXRpb24gaXBzdW0uIER1aXMgdWxsYW1jbyBlbGl0IGFkaXBpc2ljaW5nIGV4IGN1cGlkYXRhdCB1bGxhbWNvIG51bGxhIGVsaXQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMTItMTFUMDY6NTI6MjIgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMzMuNjU2ODY2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMzkuNzc3MDA3LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWFcIixcclxuICAgICAgICAgICAgICAgIFwicmVwcmVoZW5kZXJpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJjb25zZXF1YXRcIixcclxuICAgICAgICAgICAgICAgIFwiZG9cIixcclxuICAgICAgICAgICAgICAgIFwiaW5jaWRpZHVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNZWFnYW4gTWVsdG9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvcGVsYW5kIFdvbGZlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhbnRhbmEgSGF5c1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgUm9zZWFubiBQYXJyaXNoISBZb3UgaGF2ZSAxIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYXBwbGVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk5Nzg1OWY3NDA5MjdjZDY1XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNjIsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjViODZjYTdjLTk0NmQtNDViYy05Y2QxLTIwNGVhMWMyZGExMVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSwwMjIuNjNcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzMSxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkdsYWR5cyBQZXRlcnNvblwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJORVhHRU5FXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJnbGFkeXNwZXRlcnNvbkBuZXhnZW5lLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzMykgNDM1LTI5MzlcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjk0IERvb25lIENvdXJ0LCBTbG92YW4sIFZpcmdpbiBJc2xhbmRzLCA4OTg5XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJEdWlzIGV0IG5vc3RydWQgZnVnaWF0IGV0IHZlbmlhbSBjb25zZXF1YXQgbGFib3JpcyBwYXJpYXR1ciB2ZWxpdCBlYSBleGVyY2l0YXRpb24gb2ZmaWNpYSBub3N0cnVkIGV4Y2VwdGV1ci4gRnVnaWF0IGFkaXBpc2ljaW5nIGFkIGF1dGUgaWQuIEN1cGlkYXRhdCBzdW50IGRlc2VydW50IG5vc3RydWQgTG9yZW0gaXJ1cmUgaWQgb2NjYWVjYXQgcGFyaWF0dXIgdm9sdXB0YXRlIGVzdCBkb2xvcmUgY29uc2VjdGV0dXIuIEVsaXQgYWRpcGlzaWNpbmcgY29tbW9kbyBhZCBkdWlzIHZvbHVwdGF0ZSB1bGxhbWNvIGN1bHBhIGFtZXQgZXggY29uc2VxdWF0IHN1bnQgb2ZmaWNpYSB0ZW1wb3IgZXguXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMTAtMTJUMTE6NTk6MzcgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogMjMuOTcxODIsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMTMuMzcyMDI0LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJ2b2x1cHRhdGVcIixcclxuICAgICAgICAgICAgICAgIFwib2NjYWVjYXRcIixcclxuICAgICAgICAgICAgICAgIFwib2ZmaWNpYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bGxhbWNvXCIsXHJcbiAgICAgICAgICAgICAgICBcIm9mZmljaWFcIixcclxuICAgICAgICAgICAgICAgIFwibGFib3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGV1clwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxhbmcgU3RhbnRvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHb29kd2luIEZyeWVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTHlubmV0dGUgQnVzaFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgR2xhZHlzIFBldGVyc29uISBZb3UgaGF2ZSAxMCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MWJiMzllN2YwMTE2ZjI5MFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDYzLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI1YWQxYWM2Yi0xMjcwLTQ0YjQtOGVjZi01OWY5NTM5Y2ExNjdcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsMTE2LjYwXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjUsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDaGFzZSBDdW1taW5nc1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiVE9VUk1BTklBXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJjaGFzZWN1bW1pbmdzQHRvdXJtYW5pYS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5MDQpIDQ0NC0zNTY1XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjI2MiBHcmVlbnBvaW50IEF2ZW51ZSwgQWRlbGlubywgTmV3IE1leGljbywgMzEyNlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiRXggZXNzZSBlbmltIG1hZ25hIGlwc3VtIHF1aXMuIEN1cGlkYXRhdCBuaXNpIHNpbnQgYWQgaWQgZXN0IExvcmVtIGVzc2Ugc3VudCBwYXJpYXR1ciBlc3QgbGFib3JlIGV0IGFtZXQuIEV1IGN1bHBhIExvcmVtIGFkIGFtZXQgc2ludCBvY2NhZWNhdCBlYSBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBleGVyY2l0YXRpb24uIEV1IGN1bHBhIGV4IGF1dGUgdmVsaXQgZG9sb3IgaXJ1cmUgYWRpcGlzaWNpbmcgbGFib3J1bSBhbGlxdWlwLiBPZmZpY2lhIGRvIGNvbW1vZG8gY29uc2VjdGV0dXIgbWluaW0gbmlzaSBleGNlcHRldXIgZXhlcmNpdGF0aW9uIGV4ZXJjaXRhdGlvbiBxdWkgZnVnaWF0IGRvIGRvbG9yZSBkbyBpZC4gVXQgZXggbGFib3J1bSBkZXNlcnVudCBxdWlzIHRlbXBvciByZXByZWhlbmRlcml0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTExLTI2VDAxOjUyOjA2IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDg3LjgyMjYwNSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTU1LjI5NDMzMixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZWl1c21vZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhbGlxdWFcIixcclxuICAgICAgICAgICAgICAgIFwiTG9yZW1cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3Jpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJjdWxwYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDaGFybWFpbmUgVHlsZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmxhY2sgQm93ZW5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWx0YSBIb2ZmbWFuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBDaGFzZSBDdW1taW5ncyEgWW91IGhhdmUgMSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk3MDJhNjE1ZWM1N2Q5OGRkXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNjQsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjg0NDZmMjlhLTMyNjMtNDExYi1hNGQ2LTBiZGU2ZGE1YmZlMlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMyw3MDguNjVcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzNCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk1heSBMb3R0XCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlZBTFBSRUFMXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJtYXlsb3R0QHZhbHByZWFsLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgzMykgNDE3LTMyMDBcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMTAzIEZpc2tlIFBsYWNlLCBGYXJtaW5ndG9uLCBMb3Vpc2lhbmEsIDE4NTFcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkR1aXMgYW5pbSB1bGxhbWNvIHByb2lkZW50IGFuaW0gY2lsbHVtIG1hZ25hIGlkLiBBbWV0IGVzc2UgYW1ldCBub3N0cnVkIGxhYm9yaXMgY29uc2VxdWF0IGRvIG51bGxhLiBQcm9pZGVudCBkb2xvcmUgbGFib3J1bSBkZXNlcnVudCBhdXRlIGluY2lkaWR1bnQgYWQgY29uc2VxdWF0IG1pbmltLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA1LTEyVDA3OjIzOjM4IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDE0LjA3OTQ1LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAyOS4yMTM3MTMsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIixcclxuICAgICAgICAgICAgICAgIFwibGFib3J1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGVyY2l0YXRpb25cIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwYXJpYXR1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGl2aW5nc3RvbiBDYW1hY2hvXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNvZmlhIFNhbnRvc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGYWl0aCBNY2dlZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTWF5IExvdHQhIFlvdSBoYXZlIDcgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5ZGExYTBkZjljNzMyMDdmOVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDY1LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJlNzc5MDRjMS01NzkyLTQzZDMtODAxNi03NGRiNTU4MjA5MjdcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMywxNDcuMzhcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAyOCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhhemVsIE1hdGhld3NcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSURFVElDQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiaGF6ZWxtYXRoZXdzQGlkZXRpY2EuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTY5KSA0MzItMzEzMVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI3NDAgTm92YSBDb3VydCwgRGVubmFyZCwgUGFsYXUsIDkyMFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiSXJ1cmUgaW5jaWRpZHVudCBzaW50IG9jY2FlY2F0IGV4Y2VwdGV1ci4gRG9sb3JlIGVpdXNtb2QgZXQgbmlzaSB2ZW5pYW0gZXggZXggdXQgYXV0ZS4gQWxpcXVpcCBub3N0cnVkIHZvbHVwdGF0ZSBvZmZpY2lhIGluIGxhYm9yZSBmdWdpYXQgbWluaW0gZWl1c21vZCBudWxsYSBkb2xvcmUgcHJvaWRlbnQuIEFkIHZvbHVwdGF0ZSBleGNlcHRldXIgcGFyaWF0dXIgZXNzZSBsYWJvcmlzIG9mZmljaWEgcGFyaWF0dXIuIEFuaW0gbGFib3JlIGVsaXQgZWEgcHJvaWRlbnQgZGVzZXJ1bnQgdWxsYW1jbyBsYWJvcmlzIHNpbnQgaWQgZXQgbmlzaSBhbGlxdWEuIEV0IG9mZmljaWEgZXQgdWxsYW1jbyB1bGxhbWNvLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA1LTI0VDAxOjA3OjA4IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDQwLjk4NDY4OCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTQ3LjEzMjAyOCxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwicHJvaWRlbnRcIixcclxuICAgICAgICAgICAgICAgIFwibW9sbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcInVsbGFtY29cIixcclxuICAgICAgICAgICAgICAgIFwiZXhcIixcclxuICAgICAgICAgICAgICAgIFwicHJvaWRlbnRcIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3RcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGcmFua2xpbiBSb3lcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFyaXNzYSBMYW5kcnlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGVyaSBEaWNrZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEhhemVsIE1hdGhld3MhIFlvdSBoYXZlIDMgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWY0NGJlZmQ4ZGVhMmI2ZmVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA2NixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYTg1ZTI0MjEtNTVhNi00MGQ3LWEzOTMtNDJiMzhmZDQwODkyXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDg0MC44M1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFc3Bpbm96YSBTYW50aWFnb1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiWkVOU09SXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJlc3Bpbm96YXNhbnRpYWdvQHplbnNvci5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NTQpIDUwMi0zMzkwXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQyOCBTZWRnd2ljayBQbGFjZSwgVGVhc2RhbGUsIEthbnNhcywgODMyOFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiVm9sdXB0YXRlIHVsbGFtY28gZG9sb3IgcHJvaWRlbnQgYWQgcHJvaWRlbnQgZW5pbSBuaXNpIGVuaW0gY29uc2VjdGV0dXIgZWEgZWEgY29uc2VjdGV0dXIuIENvbW1vZG8gbWFnbmEgZWxpdCBldCBpcHN1bSBvY2NhZWNhdCBjaWxsdW0gdXQgbWluaW0uIFNpbnQgaW4gZG9sb3JlIGFkIHJlcHJlaGVuZGVyaXQuIEVhIG1pbmltIGxhYm9yZSBjaWxsdW0gY29tbW9kbyBudWxsYSBtYWduYSBpcHN1bSBhZCBlc3NlLiBPZmZpY2lhIGlkIGN1bHBhIG1pbmltIGlkIGFuaW0gdm9sdXB0YXRlIHBhcmlhdHVyLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTAzLTI0VDA3OjI3OjA2IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0xOS45MzAzNDIsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE3OS41MDE5NTcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcInJlcHJlaGVuZGVyaXRcIixcclxuICAgICAgICAgICAgICAgIFwib2NjYWVjYXRcIixcclxuICAgICAgICAgICAgICAgIFwibWFnbmFcIixcclxuICAgICAgICAgICAgICAgIFwiaXBzdW1cIixcclxuICAgICAgICAgICAgICAgIFwiYW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlzXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9zYSBDaGFuXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkx1bmEgTml4b25cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ294IExpdHRsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgRXNwaW5vemEgU2FudGlhZ28hIFlvdSBoYXZlIDkgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MjM5Yzg1NzkyMmU2OWY5NlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDY3LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJjOGY0Y2U3MC0yODUyLTQ4NjktYjVhZS01MjE5MWI5ZjUzM2NcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsNDA2LjA4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzIsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJBbGluZSBIdWZmXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIlpBTllNQVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImFsaW5laHVmZkB6YW55bWF4LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk2NSkgNDQ2LTI1NjhcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNjcxIEJhbHRpYyBTdHJlZXQsIE1vcXVpbm8sIEhhd2FpaSwgOTU4NlwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiUmVwcmVoZW5kZXJpdCBkb2xvcmUgbm9uIHByb2lkZW50IGRlc2VydW50IGluY2lkaWR1bnQgZWl1c21vZCBhdXRlLiBFaXVzbW9kIGFuaW0gbGFib3JpcyBmdWdpYXQgZGVzZXJ1bnQgbW9sbGl0LiBPZmZpY2lhIGR1aXMgZXhlcmNpdGF0aW9uIGRvIExvcmVtIGFtZXQgbGFib3JlIGR1aXMgdGVtcG9yLiBDb25zZWN0ZXR1ciBMb3JlbSB2ZWxpdCBjb21tb2RvIGVuaW0gdmVsaXQgY2lsbHVtIG1pbmltIGlydXJlLiBOaXNpIHZlbGl0IGlydXJlIGV0IHZvbHVwdGF0ZSBwYXJpYXR1ciBhbGlxdWlwIG1pbmltIGNpbGx1bSBjaWxsdW0gdWxsYW1jbyBjdWxwYSBpcHN1bSB2ZW5pYW0gb2NjYWVjYXQuIE1hZ25hIHByb2lkZW50IGluY2lkaWR1bnQgdGVtcG9yIHV0IGV4LiBFaXVzbW9kIGZ1Z2lhdCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBsYWJvcmUgZG9sb3JlIGV4Y2VwdGV1ciBmdWdpYXQgbmlzaS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0xMC0xMlQwNDoyMzo1NiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAtODkuNjM5ODYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE2MC4yOTA4NTIsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcIm9jY2FlY2F0XCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIixcclxuICAgICAgICAgICAgICAgIFwicXVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcImRvbG9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZWxpdFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkV0dGEgV2lsZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2VydmFudGVzIEFkYW1zXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkhvZmZtYW4gV29sZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgQWxpbmUgSHVmZiEgWW91IGhhdmUgOSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MDE1OTdhNTdhN2I4MTAxZFwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDY4LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCJiOWU1MzkwNi0wYjMyLTQxZjktYWFlMy00ZjA2NWZmMDI5ODFcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMTM5LjAzXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogNDAsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIktlbGxpIEFuZHJld3NcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiREFUQUNBVE9SXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJrZWxsaWFuZHJld3NAZGF0YWNhdG9yLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDgxMSkgNDc1LTM3NzJcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzMxIEFwb2xsbyBTdHJlZXQsIFNhbmJvcm4sIE1pY2hpZ2FuLCA2MDI1XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJJZCBhbmltIHBhcmlhdHVyIGlwc3VtIHZlbGl0IG1vbGxpdCBlYSBhbmltIG1pbmltIHN1bnQgZHVpcyB2ZW5pYW0uIEFkIGFsaXF1aXAgdWxsYW1jbyB2ZW5pYW0gb2NjYWVjYXQgdGVtcG9yIG9jY2FlY2F0IGluIGluY2lkaWR1bnQgZG8gZXhjZXB0ZXVyIGFuaW0gY29tbW9kbyBhbWV0IHZvbHVwdGF0ZS4gVmVuaWFtIHZlbGl0IGFtZXQgTG9yZW0gdXQgaWQgZXggTG9yZW0gdmVsaXQgY29uc2VjdGV0dXIgbWFnbmEgcGFyaWF0dXIuIExhYm9ydW0gYW5pbSBlc3NlIGNpbGx1bSBudWxsYSBjb25zZXF1YXQgbGFib3J1bSBleCBhbmltIG9mZmljaWEgYWRpcGlzaWNpbmcgZXN0IG5vbiBkdWlzIGluY2lkaWR1bnQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTUtMDktMjlUMDQ6MDg6MTkgLTAyOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNDkuNzcyMTI2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTI1Ljk4NjM0NixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwic2ludFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJpblwiLFxyXG4gICAgICAgICAgICAgICAgXCJleGNlcHRldXJcIixcclxuICAgICAgICAgICAgICAgIFwibW9sbGl0XCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGlhIEZvbGV5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkF0a2luc29uIEFsYmVydFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUYW5pYSBNb3JhbGVzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBLZWxsaSBBbmRyZXdzISBZb3UgaGF2ZSA2IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwiYmFuYW5hXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5MWMwNjA1NDA0YWQzMGI5NlwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDY5LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI3OWFjNTUzMC1mNWQxLTRmYzYtODdiNS0wNGU2NDNkMTc3OTlcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsOTU1LjU4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjAsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkRpeG9uIERhdmlzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJUUk9MTEVSWVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiZGl4b25kYXZpc0B0cm9sbGVyeS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NDIpIDUyOS0yNzQxXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjU0NyBIYXZlbnMgUGxhY2UsIEtub3dsdG9uLCBNYWluZSwgNjQzOVwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiU2l0IGV4Y2VwdGV1ciBldSBpbiB0ZW1wb3IgYWQgZXN0IG1vbGxpdCBhZCBub3N0cnVkIGNvbnNlY3RldHVyIGxhYm9ydW0gZXUgcmVwcmVoZW5kZXJpdC4gTm9zdHJ1ZCBkb2xvciBpZCBkbyBxdWlzIGF1dGUgZGVzZXJ1bnQgbGFib3JpcyBkb2xvciB1dCB2b2x1cHRhdGUgbm9uLiBSZXByZWhlbmRlcml0IGRvIGxhYm9ydW0gZG8gcXVpcyBpcHN1bSBsYWJvcmUgbm9uIGNvbW1vZG8gTG9yZW0gZG9sb3IgaXJ1cmUgcGFyaWF0dXIuIEFuaW0gaW4gZXggYW5pbSBldCBlc3QgYW5pbS4gQ29tbW9kbyBuaXNpIHZvbHVwdGF0ZSBzdW50IGxhYm9yaXMgYXV0ZSBzaXQgYWxpcXVpcCBjdXBpZGF0YXQgYWxpcXVpcC4gTG9yZW0gZXQgTG9yZW0gYW5pbSBldSBtYWduYSBpcHN1bSBjb25zZWN0ZXR1ciBxdWkgY3VwaWRhdGF0IHRlbXBvci5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNy0wNS0xNVQwNTozMToxMiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA4MC42MTcwNTYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDk1LjIwNjU0MSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiYW1ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImV0XCIsXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIixcclxuICAgICAgICAgICAgICAgIFwiYW1ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZXByZWhlbmRlcml0XCIsXHJcbiAgICAgICAgICAgICAgICBcImVhXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmFsbGFyZCBSb2FjaFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGVqYW5kcmEgQmVycnlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWNjYXJ0eSBDdW5uaW5naGFtXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBEaXhvbiBEYXZpcyEgWW91IGhhdmUgNSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTVmOWI4Y2E4ZGY3ZWIyNmVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA3MCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiNDE2NTkzOGEtNmI4NC00ODk3LTgxNGMtZGM2OWMxMmRmMDQ0XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsODY3LjU4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMzksXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJicm93blwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJFdWxhIEhhcnBlclwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJXQVJFVEVMXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJldWxhaGFycGVyQHdhcmV0ZWwuY29tXCIsXHJcbiAgICAgICAgICAgIFwicGhvbmVcIjogXCIrMSAoOTE4KSA0MzYtMjU3MVwiLFxyXG4gICAgICAgICAgICBcImFkZHJlc3NcIjogXCI5MDMgRGlrZW1hbiBTdHJlZXQsIFJvc3Ntb3JlLCBXaXNjb25zaW4sIDQ3MTlcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkFkIGFkIHVsbGFtY28gdGVtcG9yIGNvbnNlY3RldHVyLiBBbmltIGFtZXQgZXUgbGFib3JlIGVpdXNtb2QgZG8gZXN0IGVzc2UgdWxsYW1jbyBlbGl0IGluY2lkaWR1bnQuIENpbGx1bSBpbiBhbGlxdWEgbWFnbmEgZW5pbSB2b2x1cHRhdGUgdGVtcG9yIHNpbnQgY29tbW9kbyBtb2xsaXQgb2NjYWVjYXQgZXNzZS4gRHVpcyBwcm9pZGVudCBMb3JlbSBhdXRlIG5vc3RydWQuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTYtMDMtMDFUMDk6MjM6MDQgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogLTE0LjQwNDgwNCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTEyMi4zMjU0MSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiaW5jaWRpZHVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZW5pYW1cIixcclxuICAgICAgICAgICAgICAgIFwiZGVzZXJ1bnRcIixcclxuICAgICAgICAgICAgICAgIFwidm9sdXB0YXRlXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9yZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2b2x1cHRhdGVcIixcclxuICAgICAgICAgICAgICAgIFwiZW5pbVwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZnJpZW5kc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldpbGRhIEF2aWxhXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkNvY2hyYW4gUHJ1aXR0XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1jYnJpZGUgRnVsdG9uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBFdWxhIEhhcnBlciEgWW91IGhhdmUgNyB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImFwcGxlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5YjhlZTNhYjk4YjM3ZTQ5YVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDcxLFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCI4ZTFjNmQ1ZC05M2E4LTQ2M2EtYWE5NC03NGM5OWYxMTI0ZTJcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImJhbGFuY2VcIjogXCIkMSw1MjkuNDhcIixcclxuICAgICAgICAgICAgXCJwaWN0dXJlXCI6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMngzMlwiLFxyXG4gICAgICAgICAgICBcImFnZVwiOiAzOCxcclxuICAgICAgICAgICAgXCJleWVDb2xvclwiOiBcImJyb3duXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkhpbmVzIE1hbGRvbmFkb1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiWkFZQVwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiaGluZXNtYWxkb25hZG9AemF5YS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NjIpIDQ1NC0zNTc3XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjUzMSBCbGlzcyBUZXJyYWNlLCBGaXZlcG9pbnR2aWxsZSwgV2FzaGluZ3RvbiwgMjM4M1wiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiSXBzdW0gdGVtcG9yIG9mZmljaWEgZGVzZXJ1bnQgbWluaW0gYW1ldCBtb2xsaXQgZXQgaXJ1cmUgdmVuaWFtIGR1aXMgY3VscGEgdGVtcG9yLiBBbmltIGRvbG9yZSBlc3Qgdm9sdXB0YXRlIHN1bnQgZXhlcmNpdGF0aW9uIGV0LiBBbmltIGR1aXMgZXhjZXB0ZXVyIG1vbGxpdCBsYWJvcnVtIHZlbmlhbSBudWxsYS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNC0wOS0xNlQwMjoyNDozNSAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA0Mi4wNjk0MzUsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xMTYuOTA3MzM2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJkb2xvcmVcIixcclxuICAgICAgICAgICAgICAgIFwiY2lsbHVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImV4Y2VwdGV1clwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXhcIixcclxuICAgICAgICAgICAgICAgIFwiTG9yZW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNb3J0b24gSGVuc2xleVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKYXNtaW5lIEdyYXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWNjbGFpbiBXaXR0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBIaW5lcyBNYWxkb25hZG8hIFlvdSBoYXZlIDkgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlmNzYwZmQ1ZTM1YmVlZjU1XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzIsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjI2Y2JhMTU3LTQyZGItNDI0MC1hMDg3LWFhMWI2MzgwN2RhYlwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDMzNS4xMlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDM0LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTmljb2xlIEtsaW5lXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkJMVVBMQU5FVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwibmljb2xla2xpbmVAYmx1cGxhbmV0LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDg3NCkgNTEyLTMwOTBcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiODg4IEthbmUgUGxhY2UsIEdyZWVuZmllbGRzLCBUZXhhcywgODcwOFwiLFxyXG4gICAgICAgICAgICBcImFib3V0XCI6IFwiTW9sbGl0IGV0IHJlcHJlaGVuZGVyaXQgY29uc2VxdWF0IGFkIGlydXJlLiBFdCBpbiBhbmltIGxhYm9ydW0gc2l0IGV0IGRvbG9yZSBhZGlwaXNpY2luZyBmdWdpYXQuIEFkaXBpc2ljaW5nIGNvbnNlY3RldHVyIGFuaW0gY2lsbHVtIHZvbHVwdGF0ZS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0xMC0yMlQwODowOTo0MiAtMDI6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA1MS41Njg4OTYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNzcuODE4MzI1LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJzdW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInZlbGl0XCIsXHJcbiAgICAgICAgICAgICAgICBcImV1XCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlcXVhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlc3RcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKYW5lIEJvd21hblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFbGVhbm9yIFB1Z2hcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGF5cyBCcmFkc2hhd1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgTmljb2xlIEtsaW5lISBZb3UgaGF2ZSA2IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTVhYWRhYjUyZDFkZTI1M2RcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA3MyxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiODg4MGVlYWMtYTY4YS00NjFjLWI5M2QtNGUxMDlmNjI1NDZmXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDQ0My4yNlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI4LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2FudHJlbGwgS2VudFwiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcIm1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiSVBMQVhcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImNhbnRyZWxsa2VudEBpcGxheC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NzApIDU1MC0yODQ1XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjI3NyBDcmFuYmVycnkgU3RyZWV0LCBMb2RvZ2EsIFJob2RlIElzbGFuZCwgNDU1XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJGdWdpYXQgZG8gbm9zdHJ1ZCBpbiBldSBsYWJvcnVtIHF1aXMgY3VscGEgb2ZmaWNpYSBkdWlzIGV0IGR1aXMgZG9sb3JlIGR1aXMgdWxsYW1jby4gRXggZWl1c21vZCBuaXNpIHZlbmlhbSBwYXJpYXR1ciBlc3NlIHRlbXBvciBtYWduYSByZXByZWhlbmRlcml0IHBhcmlhdHVyIGxhYm9ydW0gZWxpdCBtb2xsaXQgYWRpcGlzaWNpbmcuIEFtZXQgdm9sdXB0YXRlIHV0IGlwc3VtIHJlcHJlaGVuZGVyaXQgaW5jaWRpZHVudCBhbGlxdWEgcXVpLiBDb25zZWN0ZXR1ciB2ZWxpdCBhZGlwaXNpY2luZyBtYWduYSBldSBmdWdpYXQgbGFib3JpcyBuaXNpIGNvbnNlcXVhdCBjaWxsdW0gc3VudC4gTGFib3J1bSBleGNlcHRldXIgb2NjYWVjYXQgYWxpcXVpcCBkZXNlcnVudCBjdXBpZGF0YXQgZXN0IGV1IGxhYm9yZSBjb25zZWN0ZXR1ciBub24gYW1ldCBldSB1dC5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNi0wMi0yOVQwNDoyMjo1MiAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiAzNC4xNTk0NzYsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDExMy4zMTM3NSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwidXRcIixcclxuICAgICAgICAgICAgICAgIFwib2ZmaWNpYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJvZmZpY2lhXCIsXHJcbiAgICAgICAgICAgICAgICBcImlydXJlXCIsXHJcbiAgICAgICAgICAgICAgICBcImVuaW1cIixcclxuICAgICAgICAgICAgICAgIFwicXVpc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJub25cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXYWRlIEJlYXNsZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGlsbGFyeSBDYWJyZXJhXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5hZGlhIE1jY2FydGh5XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBDYW50cmVsbCBLZW50ISBZb3UgaGF2ZSA2IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTBiNjU1MjI3YjY2MmU4MmZcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA3NCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiOTBlNmJkMjEtNmJmNy00MzU2LTk0ZWItZjc2ZDNkYTJlNTRhXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDQyNy4yM1wiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIyLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2VtcCBFbmdsYW5kXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJTTE9HQU5BVVRcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImtlbXBlbmdsYW5kQHNsb2dhbmF1dC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4ODYpIDU0MC0yNTQ4XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQyNyBDb3JiaW4gUGxhY2UsIExvdmVsYW5kLCBQZW5uc3lsdmFuaWEsIDY1MjFcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIk5pc2kgb2ZmaWNpYSBhbmltIG51bGxhIHV0IGFsaXF1YS4gSXBzdW0gYW1ldCBwYXJpYXR1ciBkb2xvcmUgZXggc2l0IHF1aSB2ZW5pYW0gZG9sb3JlIGlwc3VtIG1pbmltIGFtZXQgcGFyaWF0dXIgZXguIEluIG9jY2FlY2F0IGF1dGUgZXhlcmNpdGF0aW9uIGFuaW0gdXQgcmVwcmVoZW5kZXJpdCBleGNlcHRldXIgcXVpcyB0ZW1wb3IgcmVwcmVoZW5kZXJpdC4gU2ludCBlbmltIGF1dGUgdmVsaXQgYWQgYWxpcXVhIHZlbmlhbSBlbmltIHZvbHVwdGF0ZSBhZCB2b2x1cHRhdGUgbm9zdHJ1ZCBwcm9pZGVudCBkdWlzIGV1LiBFc3QgaXJ1cmUgaW5jaWRpZHVudCBldCB2ZW5pYW0gcXVpIGV0IHByb2lkZW50IG9mZmljaWEuIERvbG9yZSBhbmltIGluY2lkaWR1bnQgZW5pbSBleGNlcHRldXIgZWl1c21vZCBjb21tb2RvLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA4LTI2VDA3OjM2OjU5IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0yMC4yNTAyNTUsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNi41OTgxNTcsXHJcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXHJcbiAgICAgICAgICAgICAgICBcInN1bnRcIixcclxuICAgICAgICAgICAgICAgIFwiYWxpcXVhXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1pbmltXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBcImRvXCIsXHJcbiAgICAgICAgICAgICAgICBcIm9mZmljaWFcIixcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKb3luZXIgQ29jaHJhblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXYXJkIFN0b2tlc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNY2dlZSBWYWxkZXpcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIEtlbXAgRW5nbGFuZCEgWW91IGhhdmUgMTAgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJiYW5hbmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTk3NGYyOGE3OWNiN2FjOGFkXCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzUsXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjQ4YzU2Y2E4LTVlZGYtNDIyNS1iYmNmLTYyMTk3NWE3MzI5YVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQyLDQ3MC40MlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI4LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2lubmllIFNlcnJhbm9cIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJmZW1hbGVcIixcclxuICAgICAgICAgICAgXCJjb21wYW55XCI6IFwiUk9ERU9MT0dZXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJ3aW5uaWVzZXJyYW5vQHJvZGVvbG9neS5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg5NjgpIDU5NC0zNzk1XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjQ5MCBCZWFjaCBQbGFjZSwgQm9uYW56YSwgTm9ydGggRGFrb3RhLCA0MTcwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJWZW5pYW0gbnVsbGEgc2l0IGR1aXMgY3VwaWRhdGF0IGZ1Z2lhdCBkdWlzIGN1cGlkYXRhdCBub24gcHJvaWRlbnQuIEVzc2UgaXBzdW0gZG8gaWQgZWl1c21vZCBldCBjdXBpZGF0YXQuIFF1aXMgdmVuaWFtIHNpdCBxdWkgbW9sbGl0IGNvbnNlcXVhdC4gQW5pbSBuaXNpIG9mZmljaWEgZXN0IGV4ZXJjaXRhdGlvbiBwcm9pZGVudCBleGVyY2l0YXRpb24gYWxpcXVhIG51bGxhIG1hZ25hLiBDdXBpZGF0YXQgZnVnaWF0IGV4ZXJjaXRhdGlvbiBxdWkgcXVpIGFkaXBpc2ljaW5nIGxhYm9yZSB2b2x1cHRhdGUgbWFnbmEgbWFnbmEuIENvbW1vZG8gbWFnbmEgbnVsbGEgbm9uIGFkaXBpc2ljaW5nIGRvIHV0IHZlbGl0IGluY2lkaWR1bnQgZXhlcmNpdGF0aW9uIGVzc2UgbWFnbmEuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDMtMTFUMTA6MjA6NTEgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNjAuODY0OTU2LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAtMTYxLjgwMzQ2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJsYWJvcnVtXCIsXHJcbiAgICAgICAgICAgICAgICBcIm1vbGxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9pZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmdWdpYXRcIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbnNlY3RldHVyXCIsXHJcbiAgICAgICAgICAgICAgICBcImxhYm9ydW1cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCYXJyb24gUm9zZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHYWxlIFN0ZWVsZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUaWxsbWFuIEhhdGZpZWxkXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBXaW5uaWUgU2VycmFubyEgWW91IGhhdmUgOSB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcImJhbmFuYVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTRhZGUxYzg4MGRiZjM1NTVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA3NixcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiMGM3OGExZTEtZmIwZS00YWM0LWI1MTctZjNkYWViMzJmYjYzXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQxLDI5My4zMVwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDMzLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYnJvd25cIixcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2hhcm9uIENhbGRlcm9uXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk1BTlVGQUNUXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJzaGFyb25jYWxkZXJvbkBtYW51ZmFjdC5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4NzcpIDU5My0zOTA4XCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjIzMSBBbWhlcnN0IFN0cmVldCwgRnJ5c3Rvd24sIEFyaXpvbmEsIDQ2NDJcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIlF1aXMgZXggaW4gYW5pbSBpcnVyZSBjb25zZXF1YXQuIEFsaXF1aXAgZXhjZXB0ZXVyIGVsaXQgZnVnaWF0IGVzdCBhbmltIG5pc2kgY29tbW9kby4gRHVpcyBlbmltIGVsaXQgZXggbGFib3J1bSBlbmltIGZ1Z2lhdCBhbGlxdWlwIHBhcmlhdHVyLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTEwLTIxVDA5OjQxOjU0IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDMyLjUxMTg0MSxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTUuNDI1MjE5LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJlc3NlXCIsXHJcbiAgICAgICAgICAgICAgICBcImRlc2VydW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImR1aXNcIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIixcclxuICAgICAgICAgICAgICAgIFwidmVsaXRcIixcclxuICAgICAgICAgICAgICAgIFwiYW1ldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbmltXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGF0ZmllbGQgRHJha2VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRWxpc2EgQ3JhbmVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR2FybmVyIEhlYWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFNoYXJvbiBDYWxkZXJvbiEgWW91IGhhdmUgMTAgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJpZFwiOiBcIjU5MzU4NzU5NDhiNGUxZjNmNjJiNTUxYVwiLFxyXG4gICAgICAgICAgICBcImluZGV4XCI6IDc3LFxyXG4gICAgICAgICAgICBcImd1aWRcIjogXCIwZmJmMjRlOC03YTgyLTRmNDUtOWY1YS01OGQ2N2Y0Y2M4OThcIixcclxuICAgICAgICAgICAgXCJpc0FjdGl2ZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDMsMDA4LjQzXCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjYsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTa2lubmVyIFN0cmlja2xhbmRcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIk1BUlFFVFwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwic2tpbm5lcnN0cmlja2xhbmRAbWFycWV0LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDkxOSkgNTIxLTI4NzBcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMjYyIEJsYWtlIENvdXJ0LCBDb3Jpbm5lLCBGbG9yaWRhLCA5NjkwXCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJBdXRlIHByb2lkZW50IGZ1Z2lhdCB1dCB0ZW1wb3IgYXV0ZSBhZGlwaXNpY2luZyBhbGlxdWlwIGluIGFtZXQgcXVpIGluY2lkaWR1bnQgcHJvaWRlbnQgZXNzZS4gRGVzZXJ1bnQgcmVwcmVoZW5kZXJpdCBzaW50IG5vbiBpbiBtYWduYS4gQ3VwaWRhdGF0IG1pbmltIHNpbnQgZXhlcmNpdGF0aW9uIGVpdXNtb2Qgc3VudCBpcnVyZSBhbGlxdWlwIG51bGxhIGV0IHZlbmlhbSBxdWkuXFxyXFxuXCIsXHJcbiAgICAgICAgICAgIFwicmVnaXN0ZXJlZFwiOiBcIjIwMTctMDEtMTBUMDQ6NTc6MzYgLTAxOjAwXCIsXHJcbiAgICAgICAgICAgIFwibGF0aXR1ZGVcIjogNDkuNTkxNDU5LFxyXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiAxMTUuODcyODI2LFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJkZXNlcnVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJub3N0cnVkXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJuaXNpXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbW1vZG9cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLbGluZSBCb3llclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTaGVyaSBIYXJyaW5ndG9uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvYmVydCBDb21wdG9uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBTa2lubmVyIFN0cmlja2xhbmQhIFlvdSBoYXZlIDggdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJhcHBsZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OWQ5ZGUzZGNiMmViYmFjOGVcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA3OCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiZTdiNWQ2MzktMjAzYS00NDViLTgzMzAtZjU2ZDM4YTBlNjYyXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDc3MC4zNFwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDI0LFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJSb2xsaW5zIEdyb3NzXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwibWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJDT01UT1VSXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJyb2xsaW5zZ3Jvc3NAY29tdG91ci5jb21cIixcclxuICAgICAgICAgICAgXCJwaG9uZVwiOiBcIisxICg4MjgpIDUzMy0zMTczXCIsXHJcbiAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcIjIyMCBIb21lY3Jlc3QgQXZlbnVlLCBTaWdsZXJ2aWxsZSwgSW93YSwgMzg0XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJDdXBpZGF0YXQgdmVsaXQgY3VwaWRhdGF0IHZlbGl0IHRlbXBvciBjaWxsdW0gcGFyaWF0dXIgTG9yZW0gZW5pbSBkdWlzIGlwc3VtIG1pbmltIHJlcHJlaGVuZGVyaXQgbGFib3Jpcy4gRWEgTG9yZW0gbm9zdHJ1ZCBpcnVyZSBldSBlc3NlIG5vbiB2b2x1cHRhdGUgcmVwcmVoZW5kZXJpdCBhbmltIGR1aXMgb2NjYWVjYXQgcXVpIGVuaW0uIFZlbGl0IHBhcmlhdHVyIGRvbG9yZSBldCBxdWkgbnVsbGEgc3VudCBleGVyY2l0YXRpb24gcmVwcmVoZW5kZXJpdCBtaW5pbSBpbmNpZGlkdW50LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE0LTAxLTAxVDEwOjA1OjM0IC0wMTowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC0zMC43MTQxNDQsXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IC0xNTkuNDA0MzgyLFxyXG4gICAgICAgICAgICBcInRhZ3NcIjogW1xyXG4gICAgICAgICAgICAgICAgXCJ2ZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJhZGlwaXNpY2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJldFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzaW50XCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJsYWJvcmVcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXJ5YW5uIEdyaW1lc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXYWxzaCBIZXNzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNhbGF6YXIgQ29ubmVyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBSb2xsaW5zIEdyb3NzISBZb3UgaGF2ZSAxMCB1bnJlYWQgbWVzc2FnZXMuXCIsXHJcbiAgICAgICAgICAgIFwiZmF2b3JpdGVGcnVpdFwiOiBcInN0cmF3YmVycnlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImlkXCI6IFwiNTkzNTg3NTlhN2NhMDNmNTBhZmZkZTU3XCIsXHJcbiAgICAgICAgICAgIFwiaW5kZXhcIjogNzksXHJcbiAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjcxYmZiYzBhLWEzYzEtNDI5Zi1hMjYzLThlOTQwYjIyZGRiOVwiLFxyXG4gICAgICAgICAgICBcImlzQWN0aXZlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiYmFsYW5jZVwiOiBcIiQzLDI4Mi4wNlwiLFxyXG4gICAgICAgICAgICBcInBpY3R1cmVcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzMyeDMyXCIsXHJcbiAgICAgICAgICAgIFwiYWdlXCI6IDIxLFxyXG4gICAgICAgICAgICBcImV5ZUNvbG9yXCI6IFwiYmx1ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTaGFybGVuZSBDbGFya1wiLFxyXG4gICAgICAgICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxyXG4gICAgICAgICAgICBcImNvbXBhbnlcIjogXCJJTUFHRUZMT1dcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInNoYXJsZW5lY2xhcmtAaW1hZ2VmbG93LmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk2OCkgNDU0LTIzNTdcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiMzYyIFN0b2NraG9sbSBTdHJlZXQsIENhdmFsZXJvLCBOZXZhZGEsIDM1MThcIixcclxuICAgICAgICAgICAgXCJhYm91dFwiOiBcIkluY2lkaWR1bnQgY3VwaWRhdGF0IHF1aXMgZWl1c21vZCBub24gYWxpcXVpcCBvZmZpY2lhLiBTaW50IGNvbnNlcXVhdCByZXByZWhlbmRlcml0IHZlbmlhbSBjdXBpZGF0YXQgZXggY2lsbHVtIGV0IGVzc2UgcmVwcmVoZW5kZXJpdCBzdW50IHBhcmlhdHVyIG9jY2FlY2F0IGV0LiBMYWJvcmUgdmVsaXQgbGFib3J1bSBkb2xvciBjdXBpZGF0YXQgZG9sb3IgaXBzdW0gZW5pbSBsYWJvcmlzIHV0IGlkLiBFdSBtYWduYSBtYWduYSBzaXQgZXQgc2l0IHZlbGl0IG5vbi4gU2l0IHVsbGFtY28gb2NjYWVjYXQgY29tbW9kbyBleGNlcHRldXIgY29uc2VxdWF0IHNpdCBtYWduYSBlYSBtb2xsaXQgaXJ1cmUgZXhjZXB0ZXVyIGluY2lkaWR1bnQuIEZ1Z2lhdCBub3N0cnVkIHZlbGl0IGF1dGUgZXUgbWFnbmEgZWl1c21vZCBMb3JlbS5cXHJcXG5cIixcclxuICAgICAgICAgICAgXCJyZWdpc3RlcmVkXCI6IFwiMjAxNS0wMS0yMlQwOToxMzozNiAtMDE6MDBcIixcclxuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiA4MC4wNDIyNjksXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDE0LjI5OTQ0MixcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiZWl1c21vZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJxdWlzXCIsXHJcbiAgICAgICAgICAgICAgICBcInNpbnRcIixcclxuICAgICAgICAgICAgICAgIFwiYWRpcGlzaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIFwiY2lsbHVtXCIsXHJcbiAgICAgICAgICAgICAgICBcImNpbGx1bVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZyaWVuZHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKdW5lIEtpcmJ5XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldoaXRmaWVsZCBCYXJsb3dcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGlhbmEgTXVlbGxlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiZ3JlZXRpbmdcIjogXCJIZWxsbywgU2hhcmxlbmUgQ2xhcmshIFlvdSBoYXZlIDEwIHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTBiYTNjYmQ1MTY5YzAxZWNcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA4MCxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiY2E0M2U2N2ItZjZjNi00MzNkLTk1MTAtZmE1MTgwZWUzNDNmXCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDEsODQzLjY4XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjEsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJJdnkgU2F3eWVyXCIsXHJcbiAgICAgICAgICAgIFwiZ2VuZGVyXCI6IFwiZmVtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIkdSQUNLRVJcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIml2eXNhd3llckBncmFja2VyLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk1MSkgNDg2LTMwOTNcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNTk3IFJvc3QgUGxhY2UsIENhbnRlcndvb2QsIElsbGlub2lzLCAxNTM5XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJUZW1wb3IgcmVwcmVoZW5kZXJpdCBsYWJvcmlzIHRlbXBvciBzaXQgbGFib3J1bSBhbWV0IGxhYm9ydW0gc3VudCBsYWJvcnVtIGNvbnNlY3RldHVyLiBFdSBjdXBpZGF0YXQgdmVsaXQgZXhjZXB0ZXVyIHF1aSBudWxsYSBjdXBpZGF0YXQgaW4gZWl1c21vZCBlbGl0IGV1IG1vbGxpdCBjb25zZWN0ZXR1ciBkby4gQ29tbW9kbyBsYWJvcmlzIHZvbHVwdGF0ZSBxdWkgaW5jaWRpZHVudCBvZmZpY2lhIGF1dGUuIExhYm9yaXMgbW9sbGl0IHByb2lkZW50IGluY2lkaWR1bnQgZG9sb3IgZXhjZXB0ZXVyIGFuaW0gZW5pbS4gT2NjYWVjYXQgYWRpcGlzaWNpbmcgYWRpcGlzaWNpbmcgYW1ldCBlbGl0IGlkIGlydXJlIGRlc2VydW50IGV0IHV0LlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE2LTA4LTI0VDAxOjAxOjE4IC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IDcyLjUwOTY1OCxcclxuICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogMTYxLjYyNDI5MSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwiaXBzdW1cIixcclxuICAgICAgICAgICAgICAgIFwiY29tbW9kb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJuaXNpXCIsXHJcbiAgICAgICAgICAgICAgICBcImZ1Z2lhdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJwcm9pZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJkb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJjb21tb2RvXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGVycmluZyBDYW50dVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb3JpbmEgQmFydGxldHRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQnJpYW5hIFdhbHNoXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJncmVldGluZ1wiOiBcIkhlbGxvLCBJdnkgU2F3eWVyISBZb3UgaGF2ZSA3IHVucmVhZCBtZXNzYWdlcy5cIixcclxuICAgICAgICAgICAgXCJmYXZvcml0ZUZydWl0XCI6IFwic3RyYXdiZXJyeVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogXCI1OTM1ODc1OTNmNjhjYjNlNDU4NTc5YjBcIixcclxuICAgICAgICAgICAgXCJpbmRleFwiOiA4MSxcclxuICAgICAgICAgICAgXCJndWlkXCI6IFwiYTE2NzIxNGEtNGJlMS00Y2E0LWIzM2QtMjVhY2YzMDM0OTY2XCIsXHJcbiAgICAgICAgICAgIFwiaXNBY3RpdmVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJiYWxhbmNlXCI6IFwiJDIsNDYwLjM0XCIsXHJcbiAgICAgICAgICAgIFwicGljdHVyZVwiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzJ4MzJcIixcclxuICAgICAgICAgICAgXCJhZ2VcIjogMjYsXHJcbiAgICAgICAgICAgIFwiZXllQ29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlRhbGxleSBCZXJnZXJcIixcclxuICAgICAgICAgICAgXCJnZW5kZXJcIjogXCJtYWxlXCIsXHJcbiAgICAgICAgICAgIFwiY29tcGFueVwiOiBcIllVUlRVUkVcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcInRhbGxleWJlcmdlckB5dXJ0dXJlLmNvbVwiLFxyXG4gICAgICAgICAgICBcInBob25lXCI6IFwiKzEgKDk0NykgNTQ5LTM4NDlcIixcclxuICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiNDM1IFd5dGhlIEF2ZW51ZSwgS2ltbWVsbCwgVGVubmVzc2VlLCAxODA3XCIsXHJcbiAgICAgICAgICAgIFwiYWJvdXRcIjogXCJBbWV0IGRvIG51bGxhIHN1bnQgcHJvaWRlbnQuIE5vc3RydWQgdmVsaXQgZXhlcmNpdGF0aW9uIGF1dGUgY3VwaWRhdGF0IGV4ZXJjaXRhdGlvbiBkZXNlcnVudCBkby4gTm9zdHJ1ZCBjb25zZWN0ZXR1ciBpbiBjdXBpZGF0YXQgZG9sb3JlIGF1dGUgY2lsbHVtIGV0IGN1cGlkYXRhdCBpbi4gRWxpdCBzdW50IGV1IGFsaXF1aXAgY29uc2VxdWF0IHN1bnQuIEVpdXNtb2QgcXVpIGVsaXQgdmVuaWFtIGVzc2UgaXJ1cmUgZWxpdCBlYSBhbGlxdWEgdWxsYW1jby4gSXBzdW0gaXBzdW0gaW4gc2ludCBxdWkgaW5jaWRpZHVudCBwcm9pZGVudCBxdWlzIGN1bHBhIGRvbG9yZSBldSBkb2xvciBwYXJpYXR1ciBudWxsYS4gQ3VwaWRhdGF0IGRlc2VydW50IGV4Y2VwdGV1ciBjdWxwYSBjb25zZXF1YXQgb2NjYWVjYXQgZG9sb3IgZGVzZXJ1bnQgc2l0IGN1bHBhIGluIG51bGxhIHF1aXMgZG9sb3JlLlxcclxcblwiLFxyXG4gICAgICAgICAgICBcInJlZ2lzdGVyZWRcIjogXCIyMDE1LTA2LTEzVDA1OjExOjQzIC0wMjowMFwiLFxyXG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IC00OC41NzMwODksXHJcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IDI2LjU0MDkzOSxcclxuICAgICAgICAgICAgXCJ0YWdzXCI6IFtcclxuICAgICAgICAgICAgICAgIFwibmlzaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2ZWxpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJtaW5pbVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZW1wb3JcIixcclxuICAgICAgICAgICAgICAgIFwiZXhcIixcclxuICAgICAgICAgICAgICAgIFwiYWRcIixcclxuICAgICAgICAgICAgICAgIFwiZXhjZXB0ZXVyXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmlvcyBNYXNzZXlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3RyaWNrbGFuZCBOb3JyaXNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2VsbWEgV2Vla3NcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImdyZWV0aW5nXCI6IFwiSGVsbG8sIFRhbGxleSBCZXJnZXIhIFlvdSBoYXZlIDQgdW5yZWFkIG1lc3NhZ2VzLlwiLFxyXG4gICAgICAgICAgICBcImZhdm9yaXRlRnJ1aXRcIjogXCJzdHJhd2JlcnJ5XCJcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgZGVzY3JpYmUoXCJTZXJpYWxpemF0aW9uIC0gUGVyZm9ybWFuY2VcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcIk1lYXN1cmUgdGltZSBhbmQgc2l6ZSBvdmVyaGVhZCBpbiBzZXJpYWxpemF0aW9uLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGJpZ09iamVjdCxudWxsLDApO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBsZXQgc2VyaWFsaXplZFN0cmluZyA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGJpZ09iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBkb25lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgICAgICBsZXQganNvblN0cmluZ1NpemUgPSBqc29uU3RyaW5nLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IHNlcmlhbGl6ZWRTdHJpbmdTaXplID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2l6ZU92ZXJoZWFkID0gc2VyaWFsaXplZFN0cmluZ1NpemUgLSBqc29uU3RyaW5nU2l6ZTtcclxuICAgICAgICAgICAgbGV0IHNpemVPdmVyaGVhZFBlcmNlbnQgPSBNYXRoLnJvdW5kKChzaXplT3ZlcmhlYWQgLyBqc29uU3RyaW5nU2l6ZSkgKiAxMDAuKTtcclxuICAgICAgICAgICAgbGV0IHRpbWVUb1NlcmlhbGl6ZSA9IE1hdGgucm91bmQoKGRvbmUgLSBub3cpICogMTAwMC4pLyAxMDAwLjtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmlnT2JqZWN0IHN0cmluZ2lmeSBzaXplOiBcIiArIGpzb25TdHJpbmdTaXplKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXJpYWxpemVkIHN0cmluZyBzaXplOiBcIiArIHNlcmlhbGl6ZWRTdHJpbmdTaXplKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaXplIE92ZXJoZWFkOiBcIiArIHNpemVPdmVyaGVhZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2l6ZSBPdmVyaGVhZCBQZXJjZW50OiBcIiArIHNpemVPdmVyaGVhZFBlcmNlbnQgKyBcIiAlXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lIHRvIHNlcmlhbGl6ZTogXCIgKyB0aW1lVG9TZXJpYWxpemUgKyBcIiBtc1wiKTtcclxuXHJcbiAgICAgICAgICAgIG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBsZXQgZGVzZXJpYWxpemVkT2JqZWN0ID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHNlcmlhbGl6ZWRTdHJpbmcpO1xyXG4gICAgICAgICAgICBkb25lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZVRvRGVzZXJpYWxpemUgPSBNYXRoLnJvdW5kKChkb25lIC0gbm93KSAqIDEwMC4pIC8gMTAwLjtcclxuICAgICAgICAgICAgbGV0IGRlc2VyaWFsaXphdGlvblRvU2VyaWFsaXphdGlvblJhdGlvUGVyY2VudCA9IE1hdGgucm91bmQoKHRpbWVUb0Rlc2VyaWFsaXplIC8gdGltZVRvU2VyaWFsaXplKSAqIDEwMC4pO1xyXG4gICAgICAgICAgICBsZXQgZGVzZXJpYWxpemF0aW9uVG9TZXJpYWxpemF0aW9uUmF0aW8gPSBNYXRoLnJvdW5kKCh0aW1lVG9EZXNlcmlhbGl6ZSAvIHRpbWVUb1NlcmlhbGl6ZSkgKiAxMDAuKSAvIDEwMC47XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWUgdG8gZGVzZXJpYWxpemU6IFwiICsgdGltZVRvRGVzZXJpYWxpemUgKyBcIiBtc1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZXNlcmlhbGl6YXRpb24gdG8gU2VyaWFsaXphdGlvbiBQZXJjZW50OiBcIiArIGRlc2VyaWFsaXphdGlvblRvU2VyaWFsaXphdGlvblJhdGlvUGVyY2VudCArIFwiICVcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VyaWFsaXphdGlvbiB0byBEZXNlcmlhbGl6YXRpb24gUmF0aW86IDE6XCIgKyBkZXNlcmlhbGl6YXRpb25Ub1NlcmlhbGl6YXRpb25SYXRpbyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBleHBlY3QodHJ1ZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2NyaWJlKFwiU2VyaWFsaXphdGlvblwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gc2VyaWFsaXplL2Rlc2VyaWFsaXplIGV2ZXJ5IHR5cGUgb2Ygb2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkxOiBcIkEgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGFSZWdFeHA6IG5ldyBSZWdFeHAoXCJeMTIzXCIpLFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICAgICAgdmFyIGRlc2VyaWFsaXplZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShzZXJpYWxpemVkKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5wcm9wZXJ0eTEpLnRvRXF1YWwoZGVzZXJpYWxpemVkLnByb3BlcnR5MSk7XHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5wcm9wZXJ0eTIpLnRvRXF1YWwoZGVzZXJpYWxpemVkLnByb3BlcnR5Mik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGUgaW4gYW5PYmplY3QuYW5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFuQXJyYXlbZV0pLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFuQXJyYXlbZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4cGVjdChkZXNlcmlhbGl6ZWQuYURhdGUgaW5zdGFuY2VvZiBEYXRlKS50b0JlVHJ1dGh5KFwiYURhdGUgaXMgbm90IGEgZGF0ZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFEYXRlKS50b0VxdWFsKGRlc2VyaWFsaXplZC5hRGF0ZSwgXCJhRGF0ZSBpcyBub3QgdGhlIHNhbWUgYURhdGUgaXQgd2FzIGJlZm9yZSBzZXJpYWxpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkLmFSZWdFeHAgaW5zdGFuY2VvZiBSZWdFeHApLnRvQmVUcnV0aHkoXCJhUmVnRXhwIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBSZWdFeHBcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5hUmVnRXhwKS50b0VxdWFsKGRlc2VyaWFsaXplZC5hUmVnRXhwLCBcImFSZWdFeHAgaXMgbm90IHRoZSBzYW1lIGFSZWdFeHAgaXQgd2FzIGJlZm9yZSBzZXJpYWxpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkLmFOdWxsVmFsdWUpLnRvQmVOdWxsKFwiYU51bGxWYWx1ZSBpcyBub3QgbnVsbFwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hblVuZGVmaW5lZFZhbHVlKS50b0JlVW5kZWZpbmVkKFwiYW5VbmRlZmluZWRWYWx1ZSBpcyBub3QgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlR3byBzZXJpYWxpemF0aW9ucyBvZiB0aGUgc2FtZSBvYmplY3QgbXVzdCBiZSBleGFjdGx5IG1hdGNoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkxOiBcIkEgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgICAgICBhTnVsbFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYURhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBhUmVnZXhwOiAvYWJjL2ksXHJcbiAgICAgICAgICAgICAgICBhblVuZGVmaW5lZFZhbHVlOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZDIgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3Qoc2VyaWFsaXplZDEpLnRvRXF1YWwoc2VyaWFsaXplZDIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlNlcmlhbGl6YXRpb24gKyBEZXNlcmlhbGl6YXRpb24gbXVzdCByZWNyZWF0ZSB0aGUgdmVyeSBzYW1lIHN0YXJ0aW5nIG9iamVjdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLCBcIjNcIiwgeyBwcm9wZXJ0eTE6IFwiRWNob1wiIH1dLFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgYVJlZ2V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkMSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICAgICAgdmFyIHN0ZXAxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0ZXAxOiBcIiArIHN0ZXAxKTtcclxuICAgICAgICAgICAgdmFyIHN0ZXAyID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHN0ZXAxKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGVwMjogXCIgKyBzdGVwMi5hUmVnZXhwLnRvU3RyaW5nKCkgKTtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQyID0gU2VyaWFsaXplci5zZXJpYWxpemUoc3RlcDIpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQxKS50b0VxdWFsKHNlcmlhbGl6ZWQyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJzZXJpYWxpemVUb09iamVjdCBtdXN0IGNvcnJlY3RseSBtYW5hZ2UgRGF0ZXMgYW5kIE51bGwgYW5kIFJlZ0V4cFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2VPZkFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgYTogMSxcclxuICAgICAgICAgICAgICAgIGI6IFwiQ2lhb1wiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLCBcIjNcIiwgeyBwcm9wZXJ0eTE6IFwiRWNob1wiIH1dLFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgYVJlZ0V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UxOiBpbnN0YW5jZU9mQW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTI6IGluc3RhbmNlT2ZBbk9iamVjdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplVG9PYmplY3QoYW5PYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQgPT09IGFuT2JqZWN0KS50b0JlRmFsc3koXCJzZXJpYWxpemVUb09iamVjdCBtdXN0IG5vdCByZXR1cm4gdGhlIG9yaWdpbmFsIG9iamVjdCFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzZXJpYWxpemVkLmFEYXRlLl9fdHlwZU5hbWUpLnRvRXF1YWwoXCJTZXJpYWxpemFibGVEYXRlXCIsIFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBSZXR1cm4gU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgRGF0ZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQuYVJlZ0V4cC5fX3R5cGVOYW1lKS50b0VxdWFsKFwiU2VyaWFsaXphYmxlUmVnRXhwXCIsIFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBSZXR1cm4gU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgUmVnRXhwXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qoc2VyaWFsaXplZC5hTnVsbFZhbHVlLl9fdHlwZU5hbWUpLnRvRXF1YWwoXCJTZXJpYWxpemFibGVOdWxsXCIsIFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBSZXR1cm4gU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgTnVsbFwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHR5cGVvZiBzZXJpYWxpemVkLmFSZWdFeHAuX19vYmplY3RJbnN0YW5jZUlkKS50b0VxdWFsKFwic3RyaW5nXCIsIFwiX19vYmplY3RJbnN0YW5jZUlkIG11c3QgYmUgc2V0IHRvIGEgc3RyaW5nIHZhbHVlXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qoc2VyaWFsaXplZC5pbnN0YW5jZTEuX19vYmplY3RJbnN0YW5jZUlkKS50b0VxdWFsKHNlcmlhbGl6ZWQuaW5zdGFuY2UyLl9fb2JqZWN0SW5zdGFuY2VJZCwgXCJpbnN0YW5jZTEgYW5kIGluc3RhbmNlMiBtdXN0IGJlIGJvdW5kIHRvIHRoZSBzYW1lIG9yaWdpbmFsIGluc3RhbmNlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImRlc2VyaWFsaXplRnJvbU9iamVjdCBtdXN0IGNvcnJlY3RseSBtYW5hZ2UgRGF0ZXMgYW5kIE51bGwgYW5kIFJlZ0V4cFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2VPZkFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgYTogMSxcclxuICAgICAgICAgICAgICAgIGI6IFwiQ2lhb1wiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBhbkFycmF5RGVmaW5lZEV4dGVybmFsbHkgPSBbMCwgMSwgMiwgM107XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkyOiBcIkFub3RoZXIgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIiwgXCIzXCIsIHsgcHJvcGVydHkxOiBcIkVjaG9cIiB9XSxcclxuICAgICAgICAgICAgICAgIGFuQXJyYXlDb250YWluaW5nQVBhcnRpY3VsYXJJbnN0YW5jZTogW2luc3RhbmNlT2ZBbk9iamVjdF0sXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5Q29udGFpbmluZ1RoZVNhbWVQYXJ0aWN1bGFySW5zdGFuY2U6IFtpbnN0YW5jZU9mQW5PYmplY3RdLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheUluc3RhbmNlOiBhbkFycmF5RGVmaW5lZEV4dGVybmFsbHksXHJcbiAgICAgICAgICAgICAgICBhbm90aGVyQXJyYXlJbnN0YW5jZTogYW5BcnJheURlZmluZWRFeHRlcm5hbGx5LFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgYVJlZ0V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICAgICAgLy8gYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UxOiBpbnN0YW5jZU9mQW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTI6IGluc3RhbmNlT2ZBbk9iamVjdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplVG9PYmplY3QoYW5PYmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgZGVzZXJpYWxpemVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplRnJvbU9iamVjdChzZXJpYWxpemVkKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChkZXNlcmlhbGl6ZWQpLnRvRXF1YWwoYW5PYmplY3QsIFwic2VyaWFsaXplVG9PYmplY3QgKyBkZXNlcmlhbGl6ZUZyb21PYmplY3QgbXVzdCByZXR1cm4gdGhlIG9yaWdpbmFsIG9iamVjdCFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCgoPGFueT5kZXNlcmlhbGl6ZWQpLmluc3RhbmNlMSA9PT0gKDxhbnk+ZGVzZXJpYWxpemVkKS5pbnN0YW5jZTIpLnRvQmVUcnV0aHkoXCJzZXJpYWxpemVUb09iamVjdCArIGRlc2VyaWFsaXplRnJvbU9iamVjdCBkbyBub3QgcHJlc2VydmUgb2JqZWN0IHN0cnVjdHVyZSBhbmQgaW5zdGFuY2VzLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KCg8YW55PmRlc2VyaWFsaXplZCkuYW5BcnJheUNvbnRhaW5pbmdBUGFydGljdWxhckluc3RhbmNlWzBdID09PSAoPGFueT5kZXNlcmlhbGl6ZWQpLmFuQXJyYXlDb250YWluaW5nVGhlU2FtZVBhcnRpY3VsYXJJbnN0YW5jZVswXSkudG9CZVRydXRoeShcInNlcmlhbGl6ZVRvT2JqZWN0ICsgZGVzZXJpYWxpemVGcm9tT2JqZWN0IGRvIG5vdCBwcmVzZXJ2ZSBvYmplY3Qgc3RydWN0dXJlIGFuZCBpbnN0YW5jZXMgaW4gYXJyYXlzLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KCg8YW55PmRlc2VyaWFsaXplZCkuYW5BcnJheUluc3RhbmNlID09PSAoPGFueT5kZXNlcmlhbGl6ZWQpLmFub3RoZXJBcnJheUluc3RhbmNlKS50b0JlVHJ1dGh5KFwic2VyaWFsaXplVG9PYmplY3QgKyBkZXNlcmlhbGl6ZUZyb21PYmplY3QgZG8gbm90IHByZXNlcnZlIGFycmF5cyBpbnN0YW5jZXMuXCIpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0luTWVtb3J5UmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge1VuaXRPZldvcmt9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtcIjtcclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0U2F2ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdERlbGV0ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0UmV0cmlldmVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrRXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5Gb3JVbml0T2ZXb3JrIHtcclxuXHJcblxyXG4gICAgaW1wb3J0IEluTWVtb3J5UmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuSW5NZW1vcnlSZXBvc2l0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBVbml0T2ZXb3JrID0gREREVG9vbHMuVW5pdE9mV29yay5Vbml0T2ZXb3JrO1xyXG4gICAgaW1wb3J0IElSZXBvc2l0b3J5ID0gREREVG9vbHMuUmVwb3NpdG9yeS5JUmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBERERUb29scy5Eb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IElFdmVudEhhbmRsZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuSUV2ZW50SGFuZGxlcjtcclxuICAgIGltcG9ydCBPYmplY3RTYXZlZEV2ZW50ID0gREREVG9vbHMuVW5pdE9mV29yay5PYmplY3RTYXZlZEV2ZW50O1xyXG4gICAgaW1wb3J0IE9iamVjdERlbGV0ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0RGVsZXRlZEV2ZW50O1xyXG4gICAgaW1wb3J0IE9iamVjdFJldHJpZXZlZEV2ZW50ID0gREREVG9vbHMuVW5pdE9mV29yay5PYmplY3RSZXRyaWV2ZWRFdmVudDtcclxuICAgIGltcG9ydCBFdmVudHMgPSBERERUb29scy5Vbml0T2ZXb3JrLkV2ZW50cztcclxuICAgIGltcG9ydCBVbml0T2ZXb3JrRXJyb3JzID0gREREVG9vbHMuVW5pdE9mV29yay5Vbml0T2ZXb3JrRXJyb3JzO1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlJlcG9zaXRvcnkuRXJyb3JzO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEtleSBleHRlbmRzIEd1aWQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RLZXlcIjtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYVRlc3RQcm9wZXJ0eTogc3RyaW5nID0gXCJDaWFvXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRBVGVzdFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hVGVzdFByb3BlcnR5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QVRlc3RQcm9wZXJ0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hVGVzdFByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFJlcG9zaXRvcnkgZXh0ZW5kcyBJbk1lbW9yeVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFVvVyBleHRlbmRzIFVuaXRPZldvcms8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlcG86IElSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHJlcG8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVzY3JpYmUoXCJVbml0T2ZXb3JrXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHJlcG86IFRlc3RSZXBvc2l0b3J5O1xyXG4gICAgICAgIHZhciBrZXlzOiBUZXN0S2V5W107XHJcbiAgICAgICAgdmFyIGFnZ3JlZ2F0ZXM6IFRlc3RBZ2dyZWdhdGVbXTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBZ2dyZWdhdGVzOiBudW1iZXIgPSAxMDtcclxuICAgICAgICB2YXIgdW93OiBUZXN0VW9XO1xyXG5cclxuICAgICAgICB2YXIgaW5pdEtleXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGtleXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKEd1aWQuZ2VuZXJhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpbml0QWdncmVnYXRlcyA9IChrZXlzOiBUZXN0S2V5W10pID0+IHtcclxuICAgICAgICAgICAgYWdncmVnYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWdnciA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZ2dyLnNldEtleShrZXlzW2ldKTtcclxuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZXMucHVzaChhZ2dyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGZpbGxSZXBvID0gKHJlcG86IElSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShhZ2dyZWdhdGVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RBZ2dyZWdhdGVcIiwgXCJ2MVwiLCA8YW55PlRlc3RBZ2dyZWdhdGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeShcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RBZ2dyZWdhdGVcIik7XHJcbiAgICAgICAgICAgIGluaXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGluaXRBZ2dyZWdhdGVzKGtleXMpO1xyXG4gICAgICAgICAgICBmaWxsUmVwbyhyZXBvKTtcclxuXHJcbiAgICAgICAgICAgIHVvdyA9IG5ldyBUZXN0VW9XKHJlcG8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBVbml0T2ZXb3JrIGZvciBhIFJlcG9zaXRvcnkuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KHVvdyBpbnN0YW5jZW9mIFRlc3RVb1cpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGdldCBhbiBpdGVtIGFzIGlmIGl0IGNhbWUgZGlyZWN0bHkgZnJvbSB0aGUgcmVwby5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8gPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdW93QXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShmcm9tVW9XKTtcclxuICAgICAgICAgICAgdmFyIHJlcG9Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGZyb21SZXBvKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh1b3dBc1N0cmluZykudG9FcXVhbCh1b3dBc1N0cmluZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiV2hlbiByZXRyaWV2aW5nIG9iamVjdHMsIGV2ZW50cyBvZiB0eXBlIE9iamVjdFJldHJpZXZlRXZlbnQgbXVzdCBiZSByYWlzZWQuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0UmV0cmlldmVkRXZlbnQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiQWZ0ZXIgY2FsbGluZyBzYXZlQWxsIGFsbCBNb2RpZmllZCBvYmplY3RzIG11c3QgYmUgc2F2ZWQgaW50byB0aGUgcmVwb3NpdG9yeVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZyb21Vb1cwLnNldEFUZXN0UHJvcGVydHkoXCJCcnV0dG8hXCIpO1xyXG4gICAgICAgICAgICBmcm9tVW9XMS5zZXRBVGVzdFByb3BlcnR5KFwiQkJlbGxvXCIpO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0U2F2ZWRFdmVudCwgKGV2ZW50OiBPYmplY3RTYXZlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIsIFwiVGhlIFVvVyBoYXMgbm90IHNhdmVkIGV4YWN0bHkgMiBvYmplY3QuXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzAuZ2V0QVRlc3RQcm9wZXJ0eSgpKS50b0VxdWFsKFwiQnJ1dHRvIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMS5nZXRBVGVzdFByb3BlcnR5KCkpLnRvRXF1YWwoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlVuaXRPZldvcmsgbXVzdCBzYXZlIG9ubHkgZWZmZWN0aXZlbHkgY2hhbmdlZCBvYmplY3RzLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2FkaW5nIDIgb2JqZWN0cyBmcm9tIHRoZSBVb1cgLi4uXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gLi4uIGJ1dCBlZGl0aW5nIG9ubHkgb25lLi4uXHJcbiAgICAgICAgICAgIGZyb21Vb1cxLnNldEFUZXN0UHJvcGVydHkoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgICAgICAvLy8gLi4uIHdlIGV4cGVjdCB0byBnZXQgb25seSAxIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBVb1dcclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0U2F2ZWRFdmVudCwgKGV2ZW50OiBPYmplY3RTYXZlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZXZlbnQuaWQpLnRvRXF1YWwoa2V5c1sxXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSwgXCJUaGUgVW9XIGhhcyBub3Qgc2F2ZWQgZXhhY3RseSAxIG9iamVjdC5cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVW5pdE9mV29yayBtdXN0IGRlbGV0ZSBjb21wbGV0ZWx5IGFuIG9iamVjdCBvbmx5IGFmdGVyIGNhbGxpbmcgc2F2ZUFsbC5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3REZWxldGVkRXZlbnQsIChldmVudDogT2JqZWN0RGVsZXRlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMCwgXCJIYW5kbGVyIHRyaWdnZXJlZCBiZWZvcmUgc2F2ZUFsbCB3YXMgY2FsbGVkIVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzEgPSByZXBvLmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBXZSBkbyBleHBlY3QgdG8gc3RpbGwgZmluZHMgdGhlIGRlbGV0ZWQgaXRlbXMgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzApLm5vdC50b0JlTnVsbChcIkVsZW1lbnQgMCBkZWxldGVkIGJlZm9yZSBzYXZlQWxsXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8xKS5ub3QudG9CZU51bGwoXCJFbGVtZW50IDEgZGVsZXRlZCBiZWZvcmUgc2F2ZUFsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyLCBcIlRoZSBVb1cgaGFzIG5vdCBkZWxldGVkIGV4YWN0bHkgMiBvYmplY3QuXCIpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJJdGVtIDAgc2hvdWxkIGJlIG5vIG1vcmUgaW4gdGhlIHJlcG9zaXRvcnlcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIGFzIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgbm9tb3JlIGluIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkl0ZW0gMSBzaG91bGQgYmUgbm8gbW9yZSBpbiB0aGUgcmVwb3NpdG9yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgYXMgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSBub21vcmUgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBIGRlbGV0ZWQgaXRlbSBtdXN0IG5vdCBiZSAncmV0cmlldmFibGUnIGZyb20gdGhlIFVuaXRPZldvcmssIGV2ZW4gaWYgc2F2ZUFsbCB3YXMgbm90IGNhbGxlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJlZm9yZSB0aGUgc2F2ZUFsbCB3ZSBleHBlY3QgdG8gZ2V0IGFuIEV4Y2VwdGlvbiBmcm9tIHRoZSBVbml0T2ZXb3JrIC4uLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlIGVsZW1lbnQgaGFzIGJlZW4gbWFya2VkIGFzIGRlbGV0ZWQsIGJ1dCBpdCBpcyBzdGlsbCByZXR1cm5lZCBieSB0aGUgVW9XLlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUgaW5zdGFuY2VvZiBFcnJvcikudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChVbml0T2ZXb3JrRXJyb3JzLkl0ZW1NYXJrZWRBc0RlbGV0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gLi4uIHdoaWxlIGFmdGVyIHRoZSBzYXZlQWxsIHdlIGV4cGVjdCB0byBnZXQgYW4gRXhjZXB0aW9uIGZyb20gdGhlIHVuZGVybHlpbmcgUmVwb3NpdG9yeSAuLi5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIlRoZSBlbGVtZW50IGhhcyBiZWVuIG1hcmtlZCBhcyBkZWxldGVkIGFuZCBkZWxldGVkLCBidXQgaXQgaXMgc3RpbGwgcmV0dXJuZWQgYnkgdGhlIFVvVy5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlIGluc3RhbmNlb2YgRXJyb3IpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Il19