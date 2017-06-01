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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLXRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QvREREVG9vbHMvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlU3RhdGVNYWNoaW5lLXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9CYXNlVmFsdWVPYmplY3Qtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luTWVtb3J5UmVwb3NpdG9yeS1zcGVjLnRzIiwiLi4vc3JjL3Rlc3QvREREVG9vbHMvSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMtc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL0luUHJvY2Vzc0Rpc3BhdGNoZXItc3BlYy50cyIsIi4uL3NyYy90ZXN0L0RERFRvb2xzL01vbmV5LXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9TZXJpYWxpemF0aW9uLXNwZWMudHMiLCIuLi9zcmMvdGVzdC9ERERUb29scy9Vbml0T2ZXb3JrLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWVBLElBQVUsR0FBRyxDQXFCWjtBQXJCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLEtBQUssQ0FxQmxCO0lBckJhLFdBQUEsS0FBSztRQUFDLElBQUEscUJBQXFCLENBcUJ4QztRQXJCbUIsV0FBQSxxQkFBcUI7WUFBQyxJQUFBLEVBQUUsQ0FxQjNDO1lBckJ5QyxXQUFBLEVBQUU7Z0JBSXhDLElBQU8sVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUcvQztvQkFBMEMsd0NBQXNDO29CQUFoRjt3QkFBQSxxRUFhQzt3QkFaRyxnQkFBVSxHQUFHLHNEQUFzRCxDQUFDO3dCQUNwRSxtQkFBYSxHQUFHLElBQUksQ0FBQzs7b0JBV3pCLENBQUM7b0JBUEcsa0RBQW1CLEdBQW5CLFVBQW9CLFlBQXFFO3dCQUNyRixJQUFJLEtBQUssR0FB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d0JBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsMEZBQTBGLENBQUMsQ0FBQztvQkFDekgsQ0FBQztvQkFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULE1BQU0sQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDaEQsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQWhQbUIsYUFBYSxHQUFiLG1CQUFhLEtBQWIsbUJBQWEsUUFnUGhDO0lBQUQsQ0FBQyxFQWhQYSxLQUFLLEdBQUwsU0FBSyxLQUFMLFNBQUssUUFnUGxCO0FBQUQsQ0FBQyxFQWhQUyxHQUFHLEtBQUgsR0FBRyxRQWdQWiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5LCBVcGdyYWRlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYyIHtcclxuXHJcbiAgICBpbXBvcnQgVGVzdEVudGl0eSA9IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eTtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYyXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEge1xyXG5cclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IERERFRvb2xzLkVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBGYWN0b3J5ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuICAgIGltcG9ydCBVcGdyYWRlciA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LlVwZ3JhZGVyO1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkVycm9ycztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjNcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGFOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBhTmV3TmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3TmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYzXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MlwiO1xyXG5cclxuICAgICAgICBnZXRVcGdyYWRlZEluc3RhbmNlKGZyb21JbnN0YW5jZTogQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KTogVGVzdEVudGl0eSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSB3YXMgbm90IGluIFwidjFcIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYU5ld1Byb3BlcnR5OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlIGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5Tm9uVXBncmFkYWJsZSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eU5vblVwZ3JhZGFibGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQUNsYXNzV2l0aE1hbnlUeXBlcyBleHRlbmRzIEJhc2VFbnRpdHk8QUNsYXNzV2l0aE1hbnlUeXBlcywgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlc1wiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIC8vIFByaW1pdGl2ZSBEYXRhdHlwZXNcclxuICAgICAgICBwdWJsaWMgYU51bWJlcjogTnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBhU3RyaW5nOiBTdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGFCb29sZWFuOiBCb29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdDogT2JqZWN0O1xyXG5cclxuICAgICAgICAvLyBFeHRlbmRlZCB0eXBlc1xyXG4gICAgICAgIHB1YmxpYyBhUmVnRXhwOiBSZWdFeHA7XHJcbiAgICAgICAgcHVibGljIGFEYXRlOiBEYXRlO1xyXG4gICAgICAgIHB1YmxpYyBhTnVsbFZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VQZXJzaXN0YWJsZU9iamVjdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLkEzU3RlcFVwZ3JhZGFibGVJdGVtKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCIsIFwidjJcIiwgPGFueT5DZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYyLkEzU3RlcFVwZ3JhZGFibGVJdGVtKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCIsIFwidjNcIiwgPGFueT5BM1N0ZXBVcGdyYWRhYmxlSXRlbSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLlRlc3RFbnRpdHkpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eVwiLCBcInYyXCIsIDxhbnk+VGVzdEVudGl0eSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5Tm9uVXBncmFkYWJsZVwiLCBcInYxXCIsIDxhbnk+VGVzdEVudGl0eU5vblVwZ3JhZGFibGUpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlc1wiLCBcInYxXCIsIDxhbnk+QUNsYXNzV2l0aE1hbnlUeXBlcyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImNvbXB1dGVOZXh0VmVyc2lvbiBkZXZlIHJlc3RpdHVpcmUgaWwgdmFsb3JlIGNvcnJldHRvIGRlbGxhIHZlcnNpb25lIHN1Y2Nlc3NpdmFcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbXB1dGVkID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKFwidjFcIik7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY29tcHV0ZWQpLnRvRXF1YWwoXCJ2MlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJjb21wdXRlTmV4dFZlcnNpb24gZGV2ZSByZXN0aXR1aXJlIHVuIGVycm9yZSBzZSBsYSB2ZXJzaW9uZSBub24gw6ggY29ycmV0dGEuXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBleHBlY3RlZEVycm9yID0gbmV3IEVycm9yKEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0KTtcclxuICAgICAgICAgICAgZXhwZWN0ZWRFcnJvci5tZXNzYWdlID0gXCJTcGVjaWZpZWQgdmVyc2lvbiBtMTUgaXMgaW4gaW5jb3JyZWN0IGZvcm1hdC4gTXVzdCBiZSBpbiB0aGUgZm9ybSB2PG4+IHdoZXJlIG4gaXMgYW4gaW50ZWdlci5cIjtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCgoKSA9PiB7IHZhciBjb21wdXRlZCA9IFVwZ3JhZGVyLmNvbXB1dGVOZXh0VmVyc2lvbihcIm0xNVwiKTsgfSkudG9UaHJvdyhleHBlY3RlZEVycm9yKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBkZXZlIHJlc3RpdHVpcmUgZmFsc2UgcGVyIGdsaSBvZ2dldHRpIGNoZSBub24gaGFubm8gdmVyc2lvbmkgb2x0cmUgYWxsYSBwcmltYVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBUZXN0RW50aXR5Tm9uVXBncmFkYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5lZWRzVXBncmFkZSA9IFVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodGUuX190eXBlTmFtZSwgdGUuX190eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QobmVlZHNVcGdyYWRlKS50b0JlRmFsc3koXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIHNob3VsZCBoYXZlIHJldHVybmVkIGZhbHNlIVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIGRldmUgcmVzdGl0dWlyZSB0cnVlIHBlciBnbGkgb2dnZXR0aSBjaGUgaGFubm8gdmVyc2lvbmkgb2x0cmUgYWxsYSBwcmltYVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLlRlc3RFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBuZWVkc1VwZ3JhZGUgPSBVcGdyYWRlci5pc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHRlLl9fdHlwZU5hbWUsIHRlLl9fdHlwZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KG5lZWRzVXBncmFkZSkudG9CZVRydXRoeShcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgc2hvdWxkIGhhdmUgcmV0dXJuZWQgdHJ1ZSFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwidXBncmFkZSBtdXN0IGJlIGFibGUgdG8gdXBncmFkZSBhIFBlcnNpc3RhYmxlT2JqZWN0IHRvIGl0cyBsYXRlc3QgdmVyc2lvbiBbMiBzdGVwc11cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHRlLl9fdHlwZVZlcnNpb24pLnRvRXF1YWwoXCJ2MVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1cGdyYWRlZCA9IDxUZXN0RW50aXR5PlVwZ3JhZGVyLnVwZ3JhZGUodGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHVwZ3JhZGVkLl9fdHlwZVZlcnNpb24pLnRvRXF1YWwoXCJ2MlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHVwZ3JhZGVkLmFOZXdQcm9wZXJ0eSkudG9FcXVhbChcInVwZ3JhZGVyIHdhcyBoZXJlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInVwZ3JhZGUgbXVzdCBiZSBhYmxlIHRvIHVwZ3JhZGUgYSBQZXJzaXN0YWJsZU9iamVjdCB0byBpdHMgbGF0ZXN0IHZlcnNpb24gWzMgc3RlcHNdXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnYxLkEzU3RlcFVwZ3JhZGFibGVJdGVtKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodGUuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYxXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gPEEzU3RlcFVwZ3JhZGFibGVJdGVtPlVwZ3JhZGVyLnVwZ3JhZGUodGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHVwZ3JhZGVkLl9fdHlwZVZlcnNpb24pLnRvRXF1YWwoXCJ2M1wiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHVwZ3JhZGVkLmFOZXdQcm9wZXJ0eSkudG9FcXVhbChcInVwZ3JhZGVyIHdhcyBoZXJlXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld05ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiZ2V0U3RhdGUgbXVzdCBiZSBhYmxlIHRvIGNvcHkgUmVnRXhwIHR5cGVzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlcygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlc3RSZWdFeHAgPSBcIi9edlswLTldK1wiO1xyXG4gICAgICAgICAgICB2YXIgdGVzdFN0cmluZyA9IFwidjEyM1wiO1xyXG4gICAgICAgICAgICB0ZS5hUmVnRXhwID0gbmV3IFJlZ0V4cCh0ZXN0UmVnRXhwKTtcclxuICAgICAgICAgICAgdmFyIHJlZ0V4cFJlc3VsdCA9IHRlLmFSZWdFeHAudGVzdCh0ZXN0U3RyaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IDxBQ2xhc3NXaXRoTWFueVR5cGVzPnRlLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3Qoc3RhdGUuYVJlZ0V4cCBpbnN0YW5jZW9mIFJlZ0V4cCkudG9CZVRydXRoeShcImFSZWdFeHAgaXMgbm90IGEgUmVnRXhwIGluc3RhbmNlXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qoc3RhdGUuYVJlZ0V4cC50ZXN0KFwidjEyM1wiKSkudG9FcXVhbChyZWdFeHBSZXN1bHQsIFwiYVJlZ0V4cCBub24gc2kgY29tcG9ydGEgY29tZSBsYSBSZWd1bGFyRXhwcmVzc2lvbiBvcmlnaW5hbGVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiZ2V0U3RhdGUgbXVzdCBiZSBhYmxlIHRvIGNvcHkgRGF0ZSB0eXBlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0ZSA9IG5ldyBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkFDbGFzc1dpdGhNYW55VHlwZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0ZS5hRGF0ZSA9IHRlc3REYXRlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gPEFDbGFzc1dpdGhNYW55VHlwZXM+dGUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hRGF0ZSBpbnN0YW5jZW9mIERhdGUpLnRvQmVUcnV0aHkoXCJhRGF0ZSBpcyBub3QgYSBEYXRlIGluc3RhbmNlXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qoc3RhdGUuYURhdGUudG9TdHJpbmcoKSApLnRvRXF1YWwodGVzdERhdGUudG9TdHJpbmcoKSwgXCJhRGF0ZSBub24gw6ggc3RhdGEgcmlwcmlzdGluYXRhIGNvbWUgRGF0ZVwiKTtcclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5LCBVcGdyYWRlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVN0YXRlTWFjaGluZSB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VTdGF0ZU1hY2hpbmUgPSBERERUb29scy5TdGF0ZU1hY2hpbmUuQmFzZVN0YXRlTWFjaGluZTtcclxuICAgIGltcG9ydCBTdGF0ZU1hY2hpbmVFdmVudCA9IERERFRvb2xzLlN0YXRlTWFjaGluZS5TdGF0ZU1hY2hpbmVFdmVudDtcclxuICAgIGltcG9ydCBLaW5kc09mRXZlbnRIYW5kbGVyID0gREREVG9vbHMuU3RhdGVNYWNoaW5lLktpbmRzT2ZFdmVudEhhbmRsZXI7XHJcbiAgICBpbXBvcnQgSGFuZGxlclJlc3VsdCA9IERERFRvb2xzLlN0YXRlTWFjaGluZS5IYW5kbGVyUmVzdWx0O1xyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gREREVG9vbHMuUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcblxyXG4gICAgaW1wb3J0IEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jID0gREREVG9vbHMuUmVwb3NpdG9yeS5Jbk1lbW9yeVJlcG9zaXRvcnlBc3luYztcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IERERFRvb2xzLkFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcblxyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBERERUb29scy5Eb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG5cclxuICAgIHR5cGUgU3RhdGVzID0gXCJTdGF0ZV9BXCIgfCBcIlN0YXRlX0JcIiB8IFwiU3RhdGVfQ1wiO1xyXG4gICAgdHlwZSBFdmVudHMgPSBcIkZyb21fQV90b19CXCIgfCBcIkZyb21fQl90b19DXCI7XHJcbiAgICB0eXBlIFN0YXRlTWFjaGluZURlZiA9IHtbZXZlbnQ6IHN0cmluZ106IHtbZnJvbVN0YXR1czogc3RyaW5nXTogU3RhdGVzfX07XHJcbiAgICBcclxuICAgIHZhciBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uOiBTdGF0ZU1hY2hpbmVEZWYgPSB7XHJcbiAgICAgICAgXCJGcm9tX0FfdG9fQlwiOiB7XHJcbiAgICAgICAgICAgIFwiU3RhdGVfQVwiOiBcIlN0YXRlX0JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJGcm9tX0JfdG9fQ1wiOiB7XHJcbiAgICAgICAgICAgIFwiU3RhdGVfQlwiOiBcIlN0YXRlX0NcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBhU3RhdGVNYWNoaW5lIGV4dGVuZHMgQmFzZVN0YXRlTWFjaGluZTxTdGF0ZXMsIEV2ZW50cz4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcImFTdGF0ZU1hY2hpbmVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIElkRmFrZUFnZ3JlZ2F0ZSBleHRlbmRzIEd1aWQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIklkRmFrZUFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjbGFzcyBBRmFrZUFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PEFGYWtlQWdncmVnYXRlLCBJZEZha2VBZ2dyZWdhdGU+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJBRmFrZUFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzbTogYVN0YXRlTWFjaGluZSA9IG5ldyBhU3RhdGVNYWNoaW5lKFwiU3RhdGVfQVwiLCBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZmFrZVNNUmVwbzogSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM8QUZha2VBZ2dyZWdhdGUsIElkRmFrZUFnZ3JlZ2F0ZT47XHJcblxyXG4gICAgZGVzY3JpYmUoXCJCYXNlU3RhdGVNYWNoaW5lXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHN1dDogYVN0YXRlTWFjaGluZTtcclxuICAgICAgICB2YXIgc3V0SW5BZ2dyZWdhdGU6IEFGYWtlQWdncmVnYXRlO1xyXG4gICAgICAgIHZhciBpZFN1dEluQWdncmVnYXRlOiBJZEZha2VBZ2dyZWdhdGU7XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICBzdXQgPSBuZXcgYVN0YXRlTWFjaGluZShcIlN0YXRlX0FcIiwgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbik7XHJcbiAgICAgICAgICAgIGZha2VTTVJlcG8gPSBuZXcgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM8QUZha2VBZ2dyZWdhdGUsIElkRmFrZUFnZ3JlZ2F0ZT4oXCJBRmFrZUFnZ3JlZ2F0ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiYVN0YXRlTWFjaGluZVwiLCBcInYxXCIsIGFTdGF0ZU1hY2hpbmUpO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIklkRmFrZUFnZ3JlZ2F0ZVwiLCBcInYxXCIsIElkRmFrZUFnZ3JlZ2F0ZSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQUZha2VBZ2dyZWdhdGVcIiwgXCJ2MVwiLCBBRmFrZUFnZ3JlZ2F0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZFN1dEluQWdncmVnYXRlID0gbmV3IElkRmFrZUFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBzdXRJbkFnZ3JlZ2F0ZSA9IG5ldyBBRmFrZUFnZ3JlZ2F0ZSgpOyAgIFxyXG4gICAgICAgICAgICBzdXRJbkFnZ3JlZ2F0ZS5zZXRLZXkoaWRTdXRJbkFnZ3JlZ2F0ZSk7ICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSB0aGUgc3RhdGUgbWFjaGluZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhc20gPSBuZXcgYVN0YXRlTWFjaGluZShcIlN0YXRlX0FcIiwgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbik7XHJcbiAgICAgICAgICAgIGV4cGVjdChhc20gaW5zdGFuY2VvZiBhU3RhdGVNYWNoaW5lKS50b0JlVHJ1dGh5KFwiVGhlIGNyZWF0ZWQgb2JqZWN0IGlzIG5vdCBhbiAnYVN0YXRlTWFjaGluZSdcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1c1wiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVUcnV0aHkoXCJUaGUgY2hhbmdlIHNob3VsZCBiZSBhbGxvd2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChzdXQuZ2V0Q3VycmVudFN0YXR1cygpKS50b0VxdWFsKFwiU3RhdGVfQlwiLCBcIlRoZSBTdGF0ZSBtYWNoaW5lIGlzIG5vdCBpbiBTdGF0ZV9CXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHN1dC5nZXRQcmV2aW91c1N0YXR1cygpKS50b0VxdWFsKFwiU3RhdGVfQVwiLCBcIlRoZSBTdGF0ZSBtYWNoaW5lIHByZXZpb3VzIHN0YXR1cyBpcyBub3QgU3RhdGVfQVwiKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBOT1QgYmUgcG9zc2liaWxlIHRvIHByb2Nlc3MgZXZlbnQgRnJvbV9CX3RvX0Mgd2hlbiBpbiB0aGUgU3RhdGVfQSBzdGF0dXNcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQl90b19DXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlRmFsc3koXCJUaGUgY2hhbmdlIHNob3VsZCBOT1QgYmUgYWxsb3dlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IE5PVCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1cywgaWYgYSBiZWZvcmVFeGl0IGhhbmRsZXIgc2F5cyBpdCBzaG91bGQgbm90IGJlIGRvbmVcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57cmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQoZmFsc2UsIFwiTm8sIHlvdSBjYW4ndCFcIikpfSwgS2luZHNPZkV2ZW50SGFuZGxlci5iZWZvcmVFeGl0U3RhdHVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlRmFsc3koXCJUaGUgY2hhbmdlIHNob3VsZCBOT1QgYmUgYWxsb3dlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdC5yZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IE5PVCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1cywgaWYgYSBiZWZvcmVFbnRlciBoYW5kbGVyIHNheXMgaXQgc2hvdWxkIG5vdCBiZSBkb25lXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e3JldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KGZhbHNlLCBcIk5vLCB5b3UgY2FuJ3QhXCIpKX0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRW50ZXJTdGF0dXMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucHJvY2Vzc0V2ZW50KFwiRnJvbV9BX3RvX0JcIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVzdWx0Lm9rVG9DaGFuZ2UpLnRvQmVGYWxzeShcIlRoZSBjaGFuZ2Ugc2hvdWxkIE5PVCBiZSBhbGxvd2VkIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0LnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmlsZSB0byBwcm9jZXNzIGV2ZW50IEZyb21fQV90b19CIHdoZW4gaW4gdGhlIFN0YXRlX0Egc3RhdHVzLCBpZiBhIGFmdGVyRXhpdCBoYW5kbGVyIHJldHVybnMgb2tUb0NoYW5nZSA9IGZhbHNlXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e3JldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KGZhbHNlLCBcIk5vLCB5b3UgY2FuJ3QhXCIpKX0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFeGl0U3RhdHVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlVHJ1dGh5KFwiVGhlIGNoYW5nZSBzaG91bGQgYmUgYWxsb3dlZCBhbnlob3chXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHN1dC5nZXRDdXJyZW50U3RhdHVzKCkpLnRvQmUoXCJTdGF0ZV9CXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiTXVzdCBiZSBwb3NzaWJpbGUgdG8gcHJvY2VzcyBldmVudCBGcm9tX0FfdG9fQiB3aGVuIGluIHRoZSBTdGF0ZV9BIHN0YXR1cywgaWYgYSBhZnRlckVudGVyIGhhbmRsZXIgcmV0dXJucyBva1RvQ2hhbmdlID0gZmFsc2VcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57cmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQoZmFsc2UsIFwiTm8sIHlvdSBjYW4ndCFcIikpfSwgS2luZHNPZkV2ZW50SGFuZGxlci5hZnRlckVudGVyU3RhdHVzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3V0LnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5va1RvQ2hhbmdlKS50b0JlVHJ1dGh5KFwiVGhlIGNoYW5nZSBzaG91bGQgYmUgYWxsb3dlZCBhbnlob3chXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KHN1dC5nZXRDdXJyZW50U3RhdHVzKCkpLnRvQmUoXCJTdGF0ZV9CXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQucmVhc29uKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVGhlIG9yZGVyIGluIHdoaWNoIGhhbmRsZXIgYXJlIGNhbGxlZCBtdXN0IGJlIGNvcnJlY3QhXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMTtcclxuXHJcbiAgICAgICAgICAgIHN1dC5yZWdpc3RlckhhbmRsZXIoKGV2ZW50OiBJRG9tYWluRXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9CZSgxLCBcImJlZm9yZUV4aXRIYW5kbGVyIG11c3QgYmUgdGhlIGZpcnN0IGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmJlZm9yZUV4aXRTdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgc3V0LnJlZ2lzdGVySGFuZGxlcigoZXZlbnQ6IElEb21haW5FdmVudCk9PntcclxuICAgICAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0JlKDIsIFwiYmVmb3JlRW50ZXJIYW5kbGVyIG11c3QgYmUgdGhlIHNlY29uZCBjYWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihuZXcgSGFuZGxlclJlc3VsdCh0cnVlLCBcIlwiKSlcclxuICAgICAgICAgICAgfSwgS2luZHNPZkV2ZW50SGFuZGxlci5iZWZvcmVFbnRlclN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoMywgXCJhZnRlckV4aXRIYW5kbGVyIG11c3QgYmUgdGhlIHRoaXJkIGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRXhpdFN0YXR1cyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoNCwgXCJhZnRlckVudGVySGFuZGxlciBtdXN0IGJlIHRoZSBmb3VydGggY2FsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4obmV3IEhhbmRsZXJSZXN1bHQodHJ1ZSwgXCJcIikpXHJcbiAgICAgICAgICAgIH0sIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFbnRlclN0YXR1cyk7XHJcblxyXG4gICAgICAgICAgICBzdXQucmVnaXN0ZXJIYW5kbGVyKChldmVudDogSURvbWFpbkV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvQmUoNSwgXCJvblN1Y2Nlc2Z1bEV2ZW50UHJvY2Vzc2VkIG11c3QgYmUgdGhlIGZpZnRoIGNhbGxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKG5ldyBIYW5kbGVyUmVzdWx0KHRydWUsIFwiXCIpKVxyXG4gICAgICAgICAgICB9LCBLaW5kc09mRXZlbnRIYW5kbGVyLm9uU3VjY2Vzc2Z1bEV2ZW50UHJvY2Vzc2VkKTtcclxuXHJcbiAgICAgICAgICAgIHN1dC5wcm9jZXNzRXZlbnQoXCJGcm9tX0FfdG9fQlwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdCAoXCJNdXN0IGJlIHBvc3NpYmxlIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSB0aGUgc3RhdGUgbWFjaGluZSBhcyBhbiBhdHRyaWJ1dGUgb2YgYW4gYWdncmVnYXRlLlwiLCAoZG9uZSkgPT4geyAgICBcclxuXHJcbiAgICAgICAgICAgIHZhciBzdXRSZWxvYWRlZDogQUZha2VBZ2dyZWdhdGU7XHJcblxyXG4gICAgICAgICAgICBmYWtlU01SZXBvLnNhdmUoc3V0SW5BZ2dyZWdhdGUpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZha2VTTVJlcG8uZ2V0QnlJZChpZFN1dEluQWdncmVnYXRlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChzdXRJbkFnZ3JlZ2F0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1dFJlbG9hZGVkID0gc3V0SW5BZ2dyZWdhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1dEluQWdncmVnYXRlLnNtLnByb2Nlc3NFdmVudChcIkZyb21fQV90b19CXCIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZXN1bHQub2tUb0NoYW5nZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChzdXRSZWxvYWRlZC5zbS5nZXRDdXJyZW50U3RhdHVzKCkpLnRvRXF1YWwoXCJTdGF0ZV9CXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFcnJvcnMgZHVyaW5nIHRlc3Q6IFwiICsgZXJyb3IgKyBcIiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9idWlsZC9icm93c2VyL2RkZC10b29scy5kLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7R3VpZH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0IHtcclxuXHJcblxyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0VmFsdWVPYmplY3QgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VGVzdFZhbHVlT2JqZWN0PiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSB2aWE6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBudW1lcm86IG51bWJlcixcclxuICAgICAgICAgICAgcHJpdmF0ZSBjaXR0YTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwcml2YXRlIGNhcDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0VmFsdWVPYmplY3RfQXJyYXkgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VGVzdFZhbHVlT2JqZWN0X0FycmF5PiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfQXJyYXlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBhcnJheU9mU29tZXRoaW5nOiBhbnlbXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFZhbHVlT2JqZWN0X09iamVjdCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxUZXN0VmFsdWVPYmplY3RfT2JqZWN0PiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfT2JqZWN0XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgc29tZU9iamVjdDogYW55XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZVZhbHVlT2JqZWN0XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0XCIsIFwidjFcIiwgPGFueT5DZEMuVGVzdHMuRm9yQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdCk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfQXJyYXlcIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5Gb3JCYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X0FycmF5KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9PYmplY3RcIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5Gb3JCYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0X09iamVjdCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlZhbHVlT2JqZWN0cyBtdXN0IGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlaXIgY29udGVudC4gLSBCYXNlIHR5cGVzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBcInZpYSBGLk1lc3RpY2FcIixcclxuICAgICAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICAgICBcIkFwaXJvXCIsXHJcbiAgICAgICAgICAgICAgICBcIjYyMDIxXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMiA9IG5ldyBUZXN0VmFsdWVPYmplY3QoXHJcbiAgICAgICAgICAgICAgICBcInZpYSBGLk1lc3RpY2FcIixcclxuICAgICAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICAgICBcIkFwaXJvXCIsXHJcbiAgICAgICAgICAgICAgICBcIjYyMDIxXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdChcclxuICAgICAgICAgICAgICAgIFwidmlhIGRlbCBjYW1wb1wiLFxyXG4gICAgICAgICAgICAgICAgNjksXHJcbiAgICAgICAgICAgICAgICBcIkdlbm92YVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ4eHh4eFwiXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMikpLnRvQmVUcnV0aHkoXCJ2bzEgaXMgcmVwb3J0ZWQgdG8gYmUgbm90IGVxdWFsIHRvIHZvMiwgd2hpbGUgaXQgaXMhXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzMpKS50b0JlRmFsc3koXCJ2bzEgaXMgcmVwb3J0ZWRlIHRvIGJlIGVxdWFsIHRvIHZvMywgd2hpbGUgaXQgaXMgbm90IVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJWYWx1ZU9iamVjdHMgbXVzdCBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZWlyIGNvbnRlbnQuIC0gQXJyYXlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9BcnJheShcclxuICAgICAgICAgICAgICAgIFt7IHAxOiAzLCBwMjogNDIgfSwgeyBwMTogNiwgcDM6IDk2IH1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzIgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X0FycmF5KFxyXG4gICAgICAgICAgICAgICAgW3sgcDE6IDMsIHAyOiA0MiB9LCB7IHAxOiA2LCBwMzogOTYgfV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3RfQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbeyBwMTogNiwgcDM6IDk2IH0sIHsgcDE6IDMsIHAyOiA0MiB9XVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzIpKS50b0JlVHJ1dGh5KFwidm8xIGlzIHJlcG9ydGVkIHRvIGJlIG5vdCBlcXVhbCB0byB2bzIsIHdoaWxlIGl0IGlzIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8zKSkudG9CZUZhbHN5KFwidm8xIGlzIHJlcG9ydGVkZSB0byBiZSBlcXVhbCB0byB2bzMsIHdoaWxlIGl0IGlzIG5vdCFcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVmFsdWVPYmplY3RzIG11c3QgYmUgY29tcGFyZWQgYWdhaW5zdCB0aGVpciBjb250ZW50LiAtIE9iamVjdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDMsIHAyOiA0MiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzIgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDMsIHAyOiA0MiB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X09iamVjdChcclxuICAgICAgICAgICAgICAgIHsgcDE6IDYsIHAzOiA5NiB9XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMikpLnRvQmVUcnV0aHkoXCJ2bzEgaXMgcmVwb3J0ZWQgdG8gYmUgbm90IGVxdWFsIHRvIHZvMiwgd2hpbGUgaXQgaXMhXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzMpKS50b0JlRmFsc3koXCJ2bzEgaXMgcmVwb3J0ZWRlIHRvIGJlIGVxdWFsIHRvIHZvMywgd2hpbGUgaXQgaXMgbm90IVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJNdXN0IGJlIHBvc3NpYmxlIHRvIGZpbmQgbXVsdGlwbGUgVmFsdWVPYmplY3RzIGluIGFuIGFycmF5IHZpYSB0aGUgZmluZEluQXJyYXkgZnVuY3Rpb25cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgYXJyYXlPZlZPczogVGVzdFZhbHVlT2JqZWN0X09iamVjdFtdID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiAzLCBwMjogNDIgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiA2LCBwMzogOTYgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm80ID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiA2LCBwMzogOTYgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYXJyYXlPZlZPcy5wdXNoKHZvMSk7XHJcbiAgICAgICAgICAgIGFycmF5T2ZWT3MucHVzaCh2bzIpO1xyXG4gICAgICAgICAgICBhcnJheU9mVk9zLnB1c2godm8zKTtcclxuICAgICAgICAgICAgYXJyYXlPZlZPcy5wdXNoKHZvNCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdG9GaW5kID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9PYmplY3QoXHJcbiAgICAgICAgICAgICAgICB7IHAxOiA2LCBwMzogOTYgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRvRmluZC5maW5kSW5BcnJheShhcnJheU9mVk9zKTtcclxuICAgICAgICAgICAgZXhwZWN0KHJlc3VsdC5sZW5ndGgpLnRvRXF1YWwoMiwgXCJUaGUgZnVuY3Rpb24gZGlkIG5vdCBmaW5kIHRoZSAyIGVsZW1lbnRzIGl0IHNob3VsZCBoYXZlIGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpIG9mIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFycmF5T2ZWT3NbaV0uZXF1YWxzKHRvRmluZCkpLnRvQmVUcnV0aHkoXCJTb21lIGVsZW1lbnRzIGZvdW5kIGRvIG5vdCBlcXVhbHMgZWxlbWVudCB0byBmaW5kLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnMudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IERERFRvb2xzID0gcmVxdWlyZShcIi4vREREVG9vbHNcIilcclxuXHJcbi8vIGltcG9ydCB7R3VpZH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbi8vIGltcG9ydCB7QmFzZUVudGl0eX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnMgYXMgUmVwb0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7SW5NZW1vcnlSZXBvc2l0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9Jbk1lbW9yeVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtUeXBlUmVnaXN0cnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnlcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cyB7XHJcblxyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gREREVG9vbHMuRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gREREVG9vbHMuVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlJlcG9zaXRvcnkuRXJyb3JzO1xyXG4gICAgaW1wb3J0IEluTWVtb3J5UmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuSW5NZW1vcnlSZXBvc2l0b3J5O1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgS2V5IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEtleT4ge1xyXG4gICAgICAgIHByaXZhdGUgaWQ6IEd1aWQ7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLktleVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENoaWxkRW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxDaGlsZEVudGl0eSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZLZXlzOiBLZXlbXSA9IFtdO1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGFub3RoZXJEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBLZXk+IHtcclxuICAgICAgICBwdWJsaWMgYXJyYXlPZkVudGl0aWVzOiBDaGlsZEVudGl0eVtdID0gW107XHJcbiAgICAgICAgcHVibGljIGFub255bW91c09iamVjdDogYW55ID0ge307XHJcbiAgICAgICAgLy8gVXNlZCB0byB0ZXN0IG9iamVjdHMgcmVmZXJlbmNlcyByZWNvbnN0aXR1dGlvbi5cclxuICAgICAgICBwdWJsaWMgYW5PYmplY3RSZWZlcmVuY2U6IGFueSA9IHt9O1xyXG4gICAgICAgIHB1YmxpYyBhbm90aGVyT2JqZWN0UmVmZXJlbmNlOiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgcHVibGljIGFOdWxsUmVmZXJlbmNlID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgYW5VbmRlZmluZWRJdGVtID0gdW5kZWZpbmVkOyBcclxuICAgICAgICBwdWJsaWMgYURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5UZXN0QWdncmVnYXRlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgYVRlc3RQcm9wZXJ0eTogc3RyaW5nID0gXCJhIHRlc3QgdmFsdWUgIVwiO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgVGVzdFJlcG9zaXRvcnkgZXh0ZW5kcyBJbk1lbW9yeVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgS2V5PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIG1hbmFnZWRUeXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFRlc3RSZXBvc2l0b3J5Lm1hbmFnZWRUeXBlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLktleVwiLCBcInYxXCIsIEtleSk7XHJcbiAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5DaGlsZEVudGl0eVwiLCBcInYxXCIsIENoaWxkRW50aXR5KTtcclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIiwgXCJ2MVwiLCBUZXN0QWdncmVnYXRlKTtcclxuXHJcbiAgICBkZXNjcmliZShcIkluTWVtb3J5UmVwb3NpdG9yeVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIFJlcG9zaXRvcnkgY2xhc3NcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICBleHBlY3QocmVwbyBpbnN0YW5jZW9mIFRlc3RSZXBvc2l0b3J5KS50b0VxdWFsKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgdGhyb3cgJ0tleU5vdFNldCcgd2hlbiBzYXZpbmcgYW4gZW50aXR5IHdpdGhvdXQga2V5IHNldFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuS2V5Tm90U2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBzYXZlIGFuIGVudGl0eSB3aXRoIHRoZSBrZXkgc2V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKEVycm9ycy5LZXlOb3RTZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJpdCBzaG91bGQgdGhyb3cgSXRlbU5vdEZvdW5kIGlmIGEga2V5IGlzIG5vdCBwcmVzZW50IGluIHRoZSByZXBvc2l0b3J5XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgdmFyIGtleTIgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KCgpID0+IHsgcmVwby5nZXRCeUlkKGtleTIpIH0pLnRvVGhyb3cobmV3IEVycm9yKEVycm9ycy5JdGVtTm90Rm91bmQpKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSBtYW5hZ2UgbnVsbCBhbmQgdW5kZWZpbmVkIGRhdGFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG4gICAgICAgICAgICB2YXIgYVRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgaXRlbS5hRGF0ZSA9IGFUZXN0RGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVsb2FkZWQgPSByZXBvLmdldEJ5SWQoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYU51bGxSZWZlcmVuY2UpLnRvQmVOdWxsKFwiYU51bGxSZWZlcmVuY2UgaXMgbm90IG51bGwsIHdoaWxlIGl0IHNob3VsZFwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hblVuZGVmaW5lZEl0ZW0pLnRvQmVVbmRlZmluZWQoXCJhblVuZGVmaW5lZEl0ZW0gaXMgbm90IHVuZGVmaW5lZCwgd2hpbGUgaXQgc2hvdWxkXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSBhIGRhdGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG4gICAgICAgICAgICB2YXIgYVRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgaXRlbS5hRGF0ZSA9IGFUZXN0RGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVsb2FkZWQgPSByZXBvLmdldEJ5SWQoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYURhdGUgaW5zdGFuY2VvZiBEYXRlKS50b0JlVHJ1dGh5KFwiYURhdGUgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUsIHdoaWxlIGl0IHNob3VsZFwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgYW4gYXJyYXlcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBuZXcgS2V5KCk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0S2V5KGtleSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mRWxlbWVudHNUb0FkZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBuZXcgQ2hpbGRFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNldEtleShuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hcnJheU9mRW50aXRpZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBxID0gMDsgcSA8IG51bWJlck9mRWxlbWVudHNUb0FkZDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXJyYXlPZktleXMucHVzaChuZXcgS2V5KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNhbHZhdG9cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVsb2FkZWQgPSByZXBvLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmVjdXBlcmF0b1wiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhlIGZvbGxvd2luZyB0ZXN0IHN0YXJ0ZWQgdG8gZmFpbCBhZnRlciBnZXR0aW5nIGJhY2sgdG8gbmFtZXNwYWNlcy4uLlxyXG4gICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KEFycmF5LmlzQXJyYXkocmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBpcyBub3QgYW4gQXJyYXlcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hcnJheU9mRW50aXRpZXMubGVuZ3RoKS50b0VxdWFsKG51bWJlck9mRWxlbWVudHNUb0FkZCwgXCJQcm9wZXJ0eSBhcnJheU9mRW50aXRpZXMgZG9lcyBub3QgY29udGFpbiBcIiArIG51bWJlck9mRWxlbWVudHNUb0FkZCArIFwiIGVsZW1lbnRzXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IG51bWJlck9mRWxlbWVudHNUb0FkZDsgdCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2UgPSByZWxvYWRlZC5hcnJheU9mRW50aXRpZXNbdF07XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoQXJyYXkuaXNBcnJheShjZS5hcnJheU9mS2V5cykpLnRvQmVUcnV0aHkoXCJQcm9wZXJ0eSBhcnJheU9mS2V5cyBpcyBub3QgYW4gQXJyYXlcIik7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY2UuYXJyYXlPZktleXMubGVuZ3RoKS50b0VxdWFsKG51bWJlck9mRWxlbWVudHNUb0FkZCwgXCJQcm9wZXJ0eSBhcnJheU9mS2V5cyBkb2VzIG5vdCBjb250YWluIFwiICsgbnVtYmVyT2ZFbGVtZW50c1RvQWRkICsgXCIgZWxlbWVudHNcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgJ2Fub255bW91cycgb2JqZWN0cy5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZFbGVtZW50c1RvQWRkID0gMTA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbm90aGVyRW50aXR5ID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgYW5vdGhlckVudGl0eS5zZXRLZXkobmV3IEtleSgpKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgPSBhbm90aGVyRW50aXR5O1xyXG4gICAgICAgICAgICBpdGVtLmFub255bW91c09iamVjdC5hTnVtYmVyVHlwZSA9IDQyO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgIHZhciByZWxvYWRlZCA9IHJlcG8uZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gVE9ETyBUaGUgZm9sbG93aW5nIHRlc3Qgc3RhcnRlZCB0byBmYWlsIGFmdGVyIGdldHRpbmcgYmFjayB0byBuYW1lc3BhY2VzLiAgICBcclxuICAgICAgICAgICAgLy8gZXhwZWN0KHJlbG9hZGVkLmFub255bW91c09iamVjdC5hbm90aGVyRW50aXR5IGluc3RhbmNlb2YgVGVzdEFnZ3JlZ2F0ZSkudG9CZVRydXRoeShcIlJlY29uc3RpdHV0ZWQgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgb3JpZ2luYWwgdHlwZS5cIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hbm9ueW1vdXNPYmplY3QuYU51bWJlclR5cGUpLnRvRXF1YWwoNDIsIFwiUHJvcGVydHkgYU51bWJlclR5cGUgd2FzIG5vdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlZC5cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlIHJlZmVyZW5jZXMgdG8gdGhlIHNhbWUgaW5zdGFuY2UuXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHBlbmRpbmcoXCJGZWF0dXJlIG5vbiBhbmNvcmEgc3ZpbHVwcGF0YVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eSA9IHtcclxuICAgICAgICAgICAgICAgIGFQcm9wZXJ0eTogXCJBIHRlc3QgdmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGFDb21wb3NpdGVQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFQcm9wZXJ0eTogXCJBbm90aGVyIHRlc3QgdmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbk9iamVjdFJlZmVyZW5jZSA9IGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eTtcclxuICAgICAgICAgICAgaXRlbS5hbm90aGVyT2JqZWN0UmVmZXJlbmNlID0gYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5O1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGl0ZW0uYW5PYmplY3RSZWZlcmVuY2UpLnRvRXF1YWwoaXRlbS5hbm90aGVyT2JqZWN0UmVmZXJlbmNlKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVsb2FkZWQgPSByZXBvLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFuT2JqZWN0UmVmZXJlbmNlKS50b0VxdWFsKHJlbG9hZGVkLmFub3RoZXJPYmplY3RSZWZlcmVuY2UpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJSZXZpc2lvbklkIG11c3QgYmUgaW5jcmVtZW50ZWQgb25seSBpZiBvYmplY3QgdG8gYmUgc2F2ZWQgZGlmZmVycyBmcm9tIG9iamVjdCBzYXZlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHBlbmRpbmcoXCJOZWVkIHRvIHJlZmFjdG9yIElQRXJzaXN0YWJsZSB0byBhZGQgZnVuY3Rpb25zIGZvciBTdGF0ZSBDb21wYXJpc29uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIi4uLiBhZnRlciBzYXZpbmdcIjtcclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgaXQoXCJSZXZpc2lvbklkIG11c3QgTk9UIGJlIGluY3JlbWVudGVkIHdoZW4gdXNpbmcgJ3JlcGxhY2UnIG1ldGhvZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHBlbmRpbmcoXCJOZWVkIHRvIHJlZmFjdG9yIElQRXJzaXN0YWJsZSB0byBhZGQgZnVuY3Rpb25zIGZvciBTdGF0ZSBDb21wYXJpc29uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIi4uLiBhZnRlciBzYXZpbmdcIjtcclxuICAgICAgICAgICAgcmVwby5yZXBsYWNlKGUpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLlJlcEFzeW5jIHtcclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBERERUb29scy5FbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBERERUb29scy5BZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgRXJyb3JzID0gREREVG9vbHMuUmVwb3NpdG9yeS5FcnJvcnM7XHJcbiAgICBpbXBvcnQgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMgPSBERERUb29scy5SZXBvc2l0b3J5LkluTWVtb3J5UmVwb3NpdG9yeUFzeW5jO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuICAgIGltcG9ydCBGYWN0b3J5RXJyb3JzID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuRXJyb3JzO1xyXG5cclxuXHJcbiAgICAvLyBEZWZpbmVzIGEgY2xhc3MgdGhhdCB3aWxsIG5vdCBiZSByZWdpc3RlcmVkIHdpdCB0aGUgdHlwZXMgZmFjdG9yeVxyXG4gICAgZXhwb3J0IGNsYXNzIE5vdFJlZ2lzdGVyZWQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8Tm90UmVnaXN0ZXJlZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIk5vdFJlZ2lzdGVyZWRcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBLZXkgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8S2V5PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBpZDogR3VpZDtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuS2V5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hpbGRFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PENoaWxkRW50aXR5LCBLZXk+IHtcclxuICAgICAgICBwdWJsaWMgYXJyYXlPZktleXM6IEtleVtdID0gW107XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGFub3RoZXJEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0QWdncmVnYXRlIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VGVzdEFnZ3JlZ2F0ZSwgS2V5PiB7XHJcbiAgICAgICAgcHVibGljIGFycmF5T2ZFbnRpdGllczogQ2hpbGRFbnRpdHlbXSA9IFtdO1xyXG4gICAgICAgIHB1YmxpYyBhbm9ueW1vdXNPYmplY3Q6IGFueSA9IHt9O1xyXG4gICAgICAgIC8vIFVzZWQgdG8gdGVzdCBvYmplY3RzIHJlZmVyZW5jZXMgcmVjb25zdGl0dXRpb24uXHJcbiAgICAgICAgcHVibGljIGFuT2JqZWN0UmVmZXJlbmNlOiBhbnkgPSB7fTtcclxuICAgICAgICBwdWJsaWMgYW5vdGhlck9iamVjdFJlZmVyZW5jZTogYW55ID0ge307XHJcblxyXG4gICAgICAgIC8vIFVzZWQgdG8gdGVzdCBleGNlcHRpb25zIGluIG9iamVjdCByZWNvbnN0aXR1dGlvbi5cclxuICAgICAgICBwdWJsaWMgYU5vdFJlZ2lzdGVyZWRJbnN0YW5jZTogTm90UmVnaXN0ZXJlZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcHVibGljIGFOdWxsUmVmZXJlbmNlID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgYW5VbmRlZmluZWRSZWZlcmVuY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcHVibGljIGFEYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBhVGVzdFByb3BlcnR5OiBzdHJpbmcgPSBcImEgdGVzdCB2YWx1ZSAhXCI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM8VGVzdEFnZ3JlZ2F0ZSwgS2V5PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIG1hbmFnZWRUeXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKFRlc3RSZXBvc2l0b3J5Lm1hbmFnZWRUeXBlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG5cclxuICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5LZXlcIiwgXCJ2MVwiLCBLZXkpO1xyXG4gICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkNoaWxkRW50aXR5XCIsIFwidjFcIiwgQ2hpbGRFbnRpdHkpO1xyXG4gICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLlRlc3RBZ2dyZWdhdGVcIiwgXCJ2MVwiLCBUZXN0QWdncmVnYXRlKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjcmliZShcIkluTWVtb3J5UmVwb3NpdG9yeUFzeW5jXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIGEgUmVwb3NpdG9yeSBjbGFzc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChyZXBvIGluc3RhbmNlb2YgVGVzdFJlcG9zaXRvcnkpLnRvRXF1YWwodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCB0aHJvdyAnS2V5Tm90U2V0JyB3aGVuIHNhdmluZyBhbiBlbnRpdHkgd2l0aG91dCBrZXkgc2V0XCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBzYXZlIGFuIGVudGl0eSB3aXRoIHRoZSBrZXkgc2V0XCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLktleU5vdFNldClcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiaXQgc2hvdWxkIHRocm93IEl0ZW1Ob3RGb3VuZCBpZiBhIGtleSBpcyBub3QgcHJlc2VudCBpbiB0aGUgcmVwb3NpdG9yeVwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5MiA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBvLmdldEJ5SWQoa2V5MilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJldHVybmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiV2Ugc2hvdWxkIG5vdCBiZSBoZXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGVyci5uYW1lKS50b0VxdWFsKEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgY29ycmVjdGx5IHJlY29uc3RpdHV0ZSBhIERhdGVcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGtleSA9IG5ldyBLZXkoKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRLZXkoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXN0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGl0ZW0uYURhdGUgPSB0ZXN0RGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXBvLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlbG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYURhdGUpLnRvRXF1YWwodGVzdERhdGUsIFwiYURhdGUgaXMgbm90IGV2YWx1YXRlZCBhcyB0aGUgcHJlIHNhdmUgdmFsdWUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgYW4gYXJyYXlcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRWxlbWVudHNUb0FkZCA9IDEwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbmV3IENoaWxkRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYXJyYXlPZkVudGl0aWVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBudW1iZXJPZkVsZW1lbnRzVG9BZGQ7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmFycmF5T2ZLZXlzLnB1c2gobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNhbHZhdG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVwby5nZXRCeUlkKGtleSkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIFRoZSBmb2xsb3dpbmcgdGVzdCBzdGFydGVkIHRvIGZhaWwgYWZ0ZXIgZ2V0dGluZyBiYWNrIHRvIG5hbWVzcGFjZXMuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cGVjdChyZWxvYWRlZCBpbnN0YW5jZW9mIFRlc3RBZ2dyZWdhdGUpLnRvQmVUcnV0aHkoXCJSZWNvbnN0aXR1dGVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIG9yaWdpbmFsIHR5cGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KEFycmF5LmlzQXJyYXkocmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzKSkudG9CZVRydXRoeShcIlByb3BlcnR5IGFycmF5T2ZFbnRpdGllcyBpcyBub3QgYW4gQXJyYXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QocmVsb2FkZWQuYXJyYXlPZkVudGl0aWVzLmxlbmd0aCkudG9FcXVhbChudW1iZXJPZkVsZW1lbnRzVG9BZGQsIFwiUHJvcGVydHkgYXJyYXlPZkVudGl0aWVzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgbnVtYmVyT2ZFbGVtZW50c1RvQWRkOyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2UgPSByZWxvYWRlZC5hcnJheU9mRW50aXRpZXNbdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KEFycmF5LmlzQXJyYXkoY2UuYXJyYXlPZktleXMpKS50b0JlVHJ1dGh5KFwiUHJvcGVydHkgYXJyYXlPZktleXMgaXMgbm90IGFuIEFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChjZS5hcnJheU9mS2V5cy5sZW5ndGgpLnRvRXF1YWwobnVtYmVyT2ZFbGVtZW50c1RvQWRkLCBcIlByb3BlcnR5IGFycmF5T2ZLZXlzIGRvZXMgbm90IGNvbnRhaW4gXCIgKyBudW1iZXJPZkVsZW1lbnRzVG9BZGQgKyBcIiBlbGVtZW50c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkV4Y2VwdGlvbiB3aGlsZSBzYXZpbmcgb3IgcmV0cmlldmluZyBhbiBpdGVtLiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlICdhbm9ueW1vdXMnIG9iamVjdHMuXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFub3RoZXJFbnRpdHkgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhbm90aGVyRW50aXR5LnNldEtleShuZXcgS2V5KCkpO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbm9ueW1vdXNPYmplY3QuYW5vdGhlckVudGl0eSA9IGFub3RoZXJFbnRpdHk7XHJcbiAgICAgICAgICAgIGl0ZW0uYW5vbnltb3VzT2JqZWN0LmFOdW1iZXJUeXBlID0gNDI7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoaXRlbSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXBvLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVsb2FkZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gVGhlIGZvbGxvd2luZyB0ZXN0IHN0YXJ0ZWQgdG8gZmFpbCBhZnRlciBnZXR0aW5nIGJhY2sgdG8gbmFtZXNwYWNlcy4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBlY3QocmVsb2FkZWQuYW5vbnltb3VzT2JqZWN0LmFub3RoZXJFbnRpdHkgaW5zdGFuY2VvZiBUZXN0QWdncmVnYXRlKS50b0JlVHJ1dGh5KFwiUmVjb25zdGl0dXRlZCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBvcmlnaW5hbCB0eXBlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZWxvYWRlZC5hbm9ueW1vdXNPYmplY3QuYU51bWJlclR5cGUpLnRvRXF1YWwoNDIsIFwiUHJvcGVydHkgYU51bWJlclR5cGUgd2FzIG5vdCBjb3JyZWN0bHkgcmVjb25zdGl0dXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgYW4gaXRlbS4gXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIGFuIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGNvcnJlY3RseSByZWNvbnN0aXR1dGUgcmVmZXJlbmNlcyB0byB0aGUgc2FtZSBpbnN0YW5jZS5cIiwgKGRvbmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHBlbmRpbmcoXCJGZWF0dXJlIG5vbiBhbmNvcmEgc3ZpbHVwcGF0YVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkVsZW1lbnRzVG9BZGQgPSAxMDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBpdGVtLnNldEtleShrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eSA9IHtcclxuICAgICAgICAgICAgICAgIGFQcm9wZXJ0eTogXCJBIHRlc3QgdmFsdWVcIixcclxuICAgICAgICAgICAgICAgIGFDb21wb3NpdGVQcm9wZXJ0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFQcm9wZXJ0eTogXCJBbm90aGVyIHRlc3QgdmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hbk9iamVjdFJlZmVyZW5jZSA9IGFuT2JqZWN0UmVmZXJlbmNlZEluTW9yZVRoYW5PbmVQcm9wZXJ0eTtcclxuICAgICAgICAgICAgaXRlbS5hbm90aGVyT2JqZWN0UmVmZXJlbmNlID0gYW5PYmplY3RSZWZlcmVuY2VkSW5Nb3JlVGhhbk9uZVByb3BlcnR5O1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGl0ZW0uYW5PYmplY3RSZWZlcmVuY2UpLnRvRXF1YWwoaXRlbS5hbm90aGVyT2JqZWN0UmVmZXJlbmNlKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG8uZ2V0QnlJZChrZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxvYWRlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJlbG9hZGVkLmFuT2JqZWN0UmVmZXJlbmNlKS50b0VxdWFsKHJlbG9hZGVkLmFub3RoZXJPYmplY3RSZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgdGhlIGl0ZW0uIFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJSZXZpc2lvbklkIG11c3QgYmUgaW5jcmVtZW50ZWQgb25seSBpZiBvYmplY3QgdG8gYmUgc2F2ZWQgZGlmZmVycyBmcm9tIG9iamVjdCBzYXZlZFwiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGUuc2V0S2V5KG5ldyBLZXkoKSk7XHJcbiAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG5cclxuICAgICAgICAgICAgcmVwby5zYXZlKGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV2aXNpb25JZCBzaG91bGQgbm90IGJlIGluY3JlbWVudGVkIGlmIGl0ZW0gd2FzIG5ldyFcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXBvLnNhdmUoZSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG4gICAgICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCIuLi4gYWZ0ZXIgc2F2aW5nXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVwby5zYXZlKGUpO1xyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRXhjZXB0aW9uIHdoaWxlIHNhdmluZyBvciByZXRyaWV2aW5nIHRoZSBpdGVtLiBcIiArIGVyci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJSZXZpc2lvbklkIG11c3QgTk9UIGJlIGluY3JlbWVudGVkIGlmIHVzaW5nICdyZXBsYWNlJyBtZXRob2QuXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHBlbmRpbmcoXCJOZWVkIHRvIHJlZmFjdG9yIElQRXJzaXN0YWJsZSB0byBhZGQgZnVuY3Rpb25zIGZvciBTdGF0ZSBDb21wYXJpc29uLlwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KCk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgZS5zZXRLZXkobmV3IEtleSgpKTtcclxuICAgICAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXZpc2lvbklkIHNob3VsZCBub3QgYmUgaW5jcmVtZW50ZWQgaWYgaXRlbSB3YXMgbmV3IVxyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcG8uc2F2ZShlKTtcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcbiAgICAgICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIi4uLiBhZnRlciBzYXZpbmdcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXBvLnJlcGxhY2UoZSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDApO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJFeGNlcHRpb24gd2hpbGUgc2F2aW5nIG9yIHJldHJpZXZpbmcgdGhlIGl0ZW0uIFwiICsgZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkV4Y2VwdGlvbiB0aHJvd24gYnkgaXRlbSByZWNvbnN0aXR1dGlvbiwgbXVzdCBiZSBjYXRjaGVkIGluIHRoZSBlcnJvciBmdW5jdGlvbiBvZiB0aGUgcmV0dXJuZWQgcHJvbWlzZVwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgVGVzdFJlcG9zaXRvcnkoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gbmV3IEtleSgpO1xyXG4gICAgICAgICAgICBlLnNldEtleShrZXkpO1xyXG4gICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIkJlZm9yZSBzYXZpbmcuLi5cIjtcclxuICAgICAgICAgICAgZS5hTm90UmVnaXN0ZXJlZEluc3RhbmNlID0gbmV3IE5vdFJlZ2lzdGVyZWQoKTtcclxuXHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG8uZ2V0QnlJZChrZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiV2Ugc2hvdWxkIG5vdCBoYXZlIGJlZW4gaGVyZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGVyci5uYW1lKS50b0VxdWFsKEZhY3RvcnlFcnJvcnMuVHlwZU5vdFJlZ2lzdGVyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHRydWUpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIldlIHNob3VsZCBub3QgaGF2ZSBiZWVuIGhlcmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yRGlzcGF0Y2hlciB7XHJcblxyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBERERUb29scy5WYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSW5Qcm9jZXNzRGlzcGF0Y2hlciA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JblByb2Nlc3NEaXNwYXRjaGVyO1xyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gREREVG9vbHMuUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcblxyXG4gICAgY2xhc3MgYUNsYXNzQ29udGFpbmluZ0FuSGFuZGxlckFuZFNvbWVPdGhlclN0dWZmIHtcclxuXHJcbiAgICAgICAgcHVibGljIGFOdW1iZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgdGhpcy5ldmVudEhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFGdW5jdGlvbkluTXlDb250ZXh0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmFOdW1iZXIgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV2ZW50SGFuZGxlcihldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV4cGVjdChldmVudCkubm90LnRvQmVVbmRlZmluZWQoXCJUaGUgZXZlbnQgYXJyaXZlZCB0byB0aGUgZXZlbnRoYW5kbGVyIGlzIHVuZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuYUZ1bmN0aW9uSW5NeUNvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgYURvbWFpbkV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PGFEb21haW5FdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJblByb2Nlc3NEaXNwYXRjaGVyXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJNdWx0aXBsZSByZWdpc3RyYXRpb24gb2YgdGhlIHNhbWUgZXZlbnRoYW5kbGVyLCBtdXN0IGJlIHRyZWF0ZWQgYXMgb25lLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdHdpY2UsIGJ1dCBkaXNwYXRjaGVyIHNob3VsZCBjYWxsIGl0IG9uY2UuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFmdGVyIGRlcmVnaXN0ZXJpbmcgYW4gaGFuZGxlciwgZGlzcGF0Y2ggbXVzdCBub3QgY2FsbCBpdCBhbnltb3JlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEp1c3QgdG8gdmVyaWZ5IHRoYXQgSGFuZGxlciBoYXMgYmVlbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFsbCBoYW5kbGVycyB3aWxsIGJlIGNhbGxlZCBieSBkaXNwYXRjaCwgZXZlbiBpZiBoYW5kbGVycyB0aHJvdy5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgYVRocm93aW5nSGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgYVRocm93aW5nSGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYVRocm93aW5nSGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm1lc3NhZ2UpLnRvRXF1YWwoXCJFcnJvcjpFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcXG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWVzIHRoYXQgdGhlIG5vbiBUaHJvd2luZyBIYW5kbGVyIGhhcyBub3QgYmVlbiB0aHJvd24uXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFUaHJvd2luZ0hhbmRsZXIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJIYW5kbGVycyBtdXN0IGJlIGNhbGxlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGV5IGFyZSByZWdpc3RlcmVkLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRFdmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNlY29uZEV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSGFuZGxlcnMgbXVzdCBiZSBjYWxsZWQgaW4gdGhlaXIgb3JnaW5hbCAndGhpcycgY29udGV4dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzV2l0aEhhbmRsZXIgPSBuZXcgYUNsYXNzQ29udGFpbmluZ0FuSGFuZGxlckFuZFNvbWVPdGhlclN0dWZmKCk7XHJcblxyXG4gICAgICAgICAgICBzcHlPbihjbGFzc1dpdGhIYW5kbGVyLCBcImFGdW5jdGlvbkluTXlDb250ZXh0XCIpLmFuZC5jYWxsVGhyb3VnaCgpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgY2xhc3NXaXRoSGFuZGxlci5ldmVudEhhbmRsZXIsIGNsYXNzV2l0aEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNsYXNzV2l0aEhhbmRsZXIuYUZ1bmN0aW9uSW5NeUNvbnRleHQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBpdChcIk11c3QgYmUgcG9zc2libGUgdG8gcmUtcmVnaXN0ZXIgYW4gaGFuZGxlciBpbiBhIGRpZmZlcmVudCBpbnN0YW5jZWQgb2YgdGhlIGRpc3BhdGNoZXIuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NXaXRoSGFuZGxlciA9IG5ldyBhQ2xhc3NDb250YWluaW5nQW5IYW5kbGVyQW5kU29tZU90aGVyU3R1ZmYoKTtcclxuXHJcbiAgICAgICAgICAgIHNweU9uKGNsYXNzV2l0aEhhbmRsZXIsIFwiYUZ1bmN0aW9uSW5NeUNvbnRleHRcIikuYW5kLmNhbGxUaHJvdWdoKCk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBjbGFzc1dpdGhIYW5kbGVyLmV2ZW50SGFuZGxlciwgY2xhc3NXaXRoSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgY2xhc3NXaXRoSGFuZGxlci5ldmVudEhhbmRsZXIsIGNsYXNzV2l0aEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNsYXNzV2l0aEhhbmRsZXIuYUZ1bmN0aW9uSW5NeUNvbnRleHQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJkaXNwYXRjaCBtdXN0IHJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gYWxsIGV2ZW50IGhhbmRsZXJzIGFyZSBkb25lXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlY29uZFJ1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZmlyc3RSdW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFuSGFuZGxlclJldHVybmluZ0FQcm9taXNlKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDUwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFJ1biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFuSGFuZGxlclJldHVybmluZ0FQcm9taXNlKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBhRG9tYWluRXZlbnQoKSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmlyc3RSdW4pLnRvQmVUcnV0aHkoXCJQcm9taXNlIHJlc29sdmVkIGJ1dCBmaXJzdCBoYW5kbGVyIGRpZG4ndCBydW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChzZWNvbmRSdW4pLnRvQmVUcnV0aHkoXCJQcm9taXNlIHJlc29sdmVkIGJ1dCBzZWNvbmQgaGFuZGxlciBkaWRuJ3QgcnVuLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwicHJvbWlzZXMgcmVqZWN0ZWQgYnkgZXZlbnRzIG11c3QgYmUgbG9nZ2VkXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgc3B5T24oY29uc29sZSwgJ2xvZycpLmFuZC5jYWxsVGhyb3VnaCgpO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kUnVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhbkhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFJ1biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShcIk9rXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5vdGhlckhhbmRsZXJSZXR1cm5pbmdBUHJvbWlzZShldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChuZXcgRXJyb3IoXCJ0aGlzIHRleHQgbXVzdCBiZSBsb2dnZWQgdG8gY29uc29sZVwiKSk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBhbm90aGVySGFuZGxlclJldHVybmluZ0FQcm9taXNlKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYW5IYW5kbGVyUmV0dXJuaW5nQVByb21pc2UpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgYURvbWFpbkV2ZW50KCkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGNvbnNvbGUubG9nKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHNlY29uZFJ1bikudG9CZVRydXRoeShcIlByb21pc2UgcmVzb2x2ZWQgYnV0IHNlY29uZCBoYW5kbGVyIGRpZG4ndCBydW5cIik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vYnVpbGQvYnJvd3Nlci9kZGQtdG9vbHMuZC50c1wiIC8+XHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuVmFsdWVPYmplY3RzLk1vbmV5IHtcclxuXHJcbiAgICBpbXBvcnQgTW9uZXkgPSBERERUb29scy5WYWx1ZU9iamVjdHMuTW9uZXk7XHJcbiAgICBpbXBvcnQgQ3VycmVuY2llcyA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5DdXJyZW5jaWVzO1xyXG4gICAgaW1wb3J0IEN1cnJlbmN5ID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkN1cnJlbmN5O1xyXG5cclxuICAgIGRlc2NyaWJlKFwiTW9uZXlcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBpdChcInNob3VsZCBiZSBwb3NzaWJpbGUgdG8gaW5zdGFudGlhdGUgYSBuZXcgTW9uZXkgdmFsdWUgb2JqZWN0IHdpdGggYW4gYW1vdW50IGFzIG51bWJlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYU1vbmV5ID0gbmV3IE1vbmV5KDEwMDApO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFNb25leSBpbnN0YW5jZW9mIE1vbmV5KS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInNob3VsZCBiZSBwb3NzaWJpbGUgdG8gaW5zdGFudGlhdGUgYSBuZXcgTW9uZXkgdmFsdWUgb2JqZWN0IGZyb20gYW4gZXhpc3RpbmcgTW9uZXkgVmFsdWUgT2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBhTW9uZXkgPSBuZXcgTW9uZXkoMTAwMCkgICAgO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFub3RoZXJNb25leSA9IG5ldyBNb25leShhTW9uZXkpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leSBpbnN0YW5jZW9mIE1vbmV5KS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYW5vdGhlck1vbmV5LmdldEFtb3VudCgpKS50b0VxdWFsKGFNb25leS5nZXRBbW91bnQoKSwgXCJBbW91bnQgaXMgbm90IHRoZSBzYW1lIG9uIHRoZSB0byBvYmplY3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leS5nZXRBbW91bnRFdXJvKCkpLnRvRXF1YWwoYU1vbmV5LmdldEFtb3VudEV1cm8oKSwgXCJBbW91bnRFdXJvIGlzIG5vdCB0aGUgc2FtZSBvbiB0aGUgdG8gb2JqZWN0c1wiKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkuZ2V0Q3VycmVuY3koKSkudG9FcXVhbChhTW9uZXkuZ2V0Q3VycmVuY3koKSwgXCJDdXJyZW5jeSBpcyBub3QgdGhlIHNhbWUgb24gdGhlIHRvIG9iamVjdHNcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcInNob3VsZCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIG5ldyBNb25leSBvYmplY3Qgc3BlY2lmeWluZyBhIEN1cnJlbmN5IGFuZCBhbiBleGNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhTW9uZXkgPSBuZXcgTW9uZXkoMTAwMCwgQ3VycmVuY2llcy5ET0xMQVIsIDAuNTAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFNb25leS5nZXRBbW91bnQoKSkudG9FcXVhbCgxMDAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFNb25leS5nZXRBbW91bnRFdXJvKCkpLnRvRXF1YWwoNTAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFNb25leS5nZXRDdXJyZW5jeSgpIGluc3RhbmNlb2YgQ3VycmVuY3kpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJzaG91bGQgYmUgcG9zc2libGUgdG8gZ2V0IGEgbmV3IE1vbmV5IG9iamVjdCBzcGVjaWZ5aW5nIGEgbmV3IEN1cnJlbmN5IGFuZCBhIG5ldyBleGNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhTW9uZXkgPSBuZXcgTW9uZXkoMTAwMCwgQ3VycmVuY2llcy5ET0xMQVIsIDAuNTAwKTtcclxuICAgICAgICAgICAgdmFyIG5ld01vbmV5ID0gYU1vbmV5LmNoYW5nZUV4Y2hhbmdlKDEpLmNoYW5nZUN1cnJlbmN5KEN1cnJlbmNpZXMuRVVSTyk7XHJcbiAgICAgICAgICAgIGV4cGVjdChuZXdNb25leS5nZXRBbW91bnQoKSkudG9FcXVhbCgxMDAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KG5ld01vbmV5LmdldEFtb3VudEV1cm8oKSkudG9FcXVhbCgxMDAwKTtcclxuICAgICAgICAgICAgZXhwZWN0KG5ld01vbmV5LmdldEN1cnJlbmN5KCkgaW5zdGFuY2VvZiBDdXJyZW5jeSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImNoYW5nZUFtb3VudCBtdXN0IHJldHVybiBhIG5ldyBNb25leSBvYmplY3Qgd2l0aCB0aGUgbmV3IGFtb3VudC5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFNb25leSA9IG5ldyBNb25leSgxMDAwLCBDdXJyZW5jaWVzLkRPTExBUiwgMC41MDApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFub3RoZXJNb25leSA9IG5ldyBNb25leShhTW9uZXkpLmNoYW5nZUFtb3VudCgxNTAwKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkgaW5zdGFuY2VvZiBNb25leSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFub3RoZXJNb25leS5nZXRBbW91bnQoKSkudG9FcXVhbCgxNTAwKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChhbm90aGVyTW9uZXkuZ2V0QW1vdW50RXVybygpKS50b0VxdWFsKDc1MCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoYW5vdGhlck1vbmV5LmdldEN1cnJlbmN5KCkpLnRvRXF1YWwoYU1vbmV5LmdldEN1cnJlbmN5KCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5TZXJpYWxpemF0aW9uIHtcclxuIFxyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgRGVzZXJpYWxpemVyID0gREREVG9vbHMuU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG4gICAgaW1wb3J0IFNlcmlhbGl6YWJsZURhdGUgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZURhdGU7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXphYmxlTnVsbCA9IERERFRvb2xzLlNlcmlhbGl6YXRpb24uU2VyaWFsaXphYmxlTnVsbDtcclxuICAgIGltcG9ydCBTZXJpYWxpemFibGVSZWdFeHAgPSBERERUb29scy5TZXJpYWxpemF0aW9uLlNlcmlhbGl6YWJsZVJlZ0V4cDtcclxuICAgIGRlc2NyaWJlKFwiU2VyaWFsaXphdGlvblwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwic2hvdWxkIGJlIGFibGUgdG8gc2VyaWFsaXplL2Rlc2VyaWFsaXplIGV2ZXJ5IHR5cGUgb2Ygb2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkxOiBcIkEgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGFSZWdFeHA6IG5ldyBSZWdFeHAoXCJeMTIzXCIpLFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFuVW5kZWZpbmVkVmFsdWU6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICAgICAgdmFyIGRlc2VyaWFsaXplZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShzZXJpYWxpemVkKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5wcm9wZXJ0eTEpLnRvRXF1YWwoZGVzZXJpYWxpemVkLnByb3BlcnR5MSk7XHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5wcm9wZXJ0eTIpLnRvRXF1YWwoZGVzZXJpYWxpemVkLnByb3BlcnR5Mik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGUgaW4gYW5PYmplY3QuYW5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFuQXJyYXlbZV0pLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFuQXJyYXlbZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4cGVjdChkZXNlcmlhbGl6ZWQuYURhdGUgaW5zdGFuY2VvZiBEYXRlKS50b0JlVHJ1dGh5KFwiYURhdGUgaXMgbm90IGEgZGF0ZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFEYXRlKS50b0VxdWFsKGRlc2VyaWFsaXplZC5hRGF0ZSwgXCJhRGF0ZSBpcyBub3QgdGhlIHNhbWUgYURhdGUgaXQgd2FzIGJlZm9yZSBzZXJpYWxpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkLmFSZWdFeHAgaW5zdGFuY2VvZiBSZWdFeHApLnRvQmVUcnV0aHkoXCJhUmVnRXhwIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBSZWdFeHBcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChhbk9iamVjdC5hUmVnRXhwKS50b0VxdWFsKGRlc2VyaWFsaXplZC5hUmVnRXhwLCBcImFSZWdFeHAgaXMgbm90IHRoZSBzYW1lIGFSZWdFeHAgaXQgd2FzIGJlZm9yZSBzZXJpYWxpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZGVzZXJpYWxpemVkLmFOdWxsVmFsdWUpLnRvQmVOdWxsKFwiYU51bGxWYWx1ZSBpcyBub3QgbnVsbFwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGRlc2VyaWFsaXplZC5hblVuZGVmaW5lZFZhbHVlKS50b0JlVW5kZWZpbmVkKFwiYW5VbmRlZmluZWRWYWx1ZSBpcyBub3QgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlR3byBzZXJpYWxpemF0aW9ucyBvZiB0aGUgc2FtZSBvYmplY3QgbXVzdCBiZSBleGFjdGx5IG1hdGNoXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkxOiBcIkEgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsIFwiM1wiLCB7IHByb3BlcnR5MTogXCJFY2hvXCIgfV0sXHJcbiAgICAgICAgICAgICAgICBhTnVsbFZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgYURhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBhUmVnZXhwOiAvYWJjL2ksXHJcbiAgICAgICAgICAgICAgICBhblVuZGVmaW5lZFZhbHVlOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZDIgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3Qoc2VyaWFsaXplZDEpLnRvRXF1YWwoc2VyaWFsaXplZDIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlNlcmlhbGl6YXRpb24gKyBEZXNlcmlhbGl6YXRpb24gbXVzdCByZWNyZWF0ZSB0aGUgdmVyeSBzYW1lIHN0YXJ0aW5nIG9iamVjdFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLCBcIjNcIiwgeyBwcm9wZXJ0eTE6IFwiRWNob1wiIH1dLFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgYVJlZ2V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkMSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuICAgICAgICAgICAgdmFyIHN0ZXAxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0ZXAxOiBcIiArIHN0ZXAxKTtcclxuICAgICAgICAgICAgdmFyIHN0ZXAyID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHN0ZXAxKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGVwMjogXCIgKyBzdGVwMi5hUmVnZXhwLnRvU3RyaW5nKCkgKTtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWQyID0gU2VyaWFsaXplci5zZXJpYWxpemUoc3RlcDIpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQxKS50b0VxdWFsKHNlcmlhbGl6ZWQyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJzZXJpYWxpemVUb09iamVjdCBtdXN0IGNvcnJlY3RseSBtYW5hZ2UgRGF0ZXMgYW5kIE51bGwgYW5kIFJlZ0V4cFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2VPZkFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgYTogMSxcclxuICAgICAgICAgICAgICAgIGI6IFwiQ2lhb1wiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBhbk9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheTogW1wiMVwiLCBcIjNcIiwgeyBwcm9wZXJ0eTE6IFwiRWNob1wiIH1dLFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgYVJlZ0V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICAgICAgYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UxOiBpbnN0YW5jZU9mQW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTI6IGluc3RhbmNlT2ZBbk9iamVjdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplVG9PYmplY3QoYW5PYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQgPT09IGFuT2JqZWN0KS50b0JlRmFsc3koXCJzZXJpYWxpemVUb09iamVjdCBtdXN0IG5vdCByZXR1cm4gdGhlIG9yaWdpbmFsIG9iamVjdCFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzZXJpYWxpemVkLmFEYXRlLl9fdHlwZU5hbWUpLnRvRXF1YWwoXCJTZXJpYWxpemFibGVEYXRlXCIsIFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBSZXR1cm4gU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgRGF0ZVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQuYVJlZ0V4cC5fX3R5cGVOYW1lKS50b0VxdWFsKFwiU2VyaWFsaXphYmxlUmVnRXhwXCIsIFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBSZXR1cm4gU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgUmVnRXhwXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qoc2VyaWFsaXplZC5hTnVsbFZhbHVlLl9fdHlwZU5hbWUpLnRvRXF1YWwoXCJTZXJpYWxpemFibGVOdWxsXCIsIFwic2VyaWFsaXplVG9PYmplY3QgbXVzdCBSZXR1cm4gU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgTnVsbFwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KHR5cGVvZiBzZXJpYWxpemVkLmFSZWdFeHAuX19vYmplY3RJbnN0YW5jZUlkKS50b0VxdWFsKFwic3RyaW5nXCIsIFwiX19vYmplY3RJbnN0YW5jZUlkIG11c3QgYmUgc2V0IHRvIGEgc3RyaW5nIHZhbHVlXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qoc2VyaWFsaXplZC5pbnN0YW5jZTEuX19vYmplY3RJbnN0YW5jZUlkKS50b0VxdWFsKHNlcmlhbGl6ZWQuaW5zdGFuY2UyLl9fb2JqZWN0SW5zdGFuY2VJZCwgXCJpbnN0YW5jZTEgYW5kIGluc3RhbmNlMiBtdXN0IGJlIGJvdW5kIHRvIHRoZSBzYW1lIG9yaWdpbmFsIGluc3RhbmNlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImRlc2VyaWFsaXplRnJvbU9iamVjdCBtdXN0IGNvcnJlY3RseSBtYW5hZ2UgRGF0ZXMgYW5kIE51bGwgYW5kIFJlZ0V4cFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2VPZkFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgYTogMSxcclxuICAgICAgICAgICAgICAgIGI6IFwiQ2lhb1wiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBhbkFycmF5RGVmaW5lZEV4dGVybmFsbHkgPSBbMCwgMSwgMiwgM107XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkyOiBcIkFub3RoZXIgUHJvcGVydHlcIixcclxuICAgICAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIiwgXCIzXCIsIHsgcHJvcGVydHkxOiBcIkVjaG9cIiB9XSxcclxuICAgICAgICAgICAgICAgIGFuQXJyYXlDb250YWluaW5nQVBhcnRpY3VsYXJJbnN0YW5jZTogW2luc3RhbmNlT2ZBbk9iamVjdF0sXHJcbiAgICAgICAgICAgICAgICBhbkFycmF5Q29udGFpbmluZ1RoZVNhbWVQYXJ0aWN1bGFySW5zdGFuY2U6IFtpbnN0YW5jZU9mQW5PYmplY3RdLFxyXG4gICAgICAgICAgICAgICAgYW5BcnJheUluc3RhbmNlOiBhbkFycmF5RGVmaW5lZEV4dGVybmFsbHksXHJcbiAgICAgICAgICAgICAgICBhbm90aGVyQXJyYXlJbnN0YW5jZTogYW5BcnJheURlZmluZWRFeHRlcm5hbGx5LFxyXG4gICAgICAgICAgICAgICAgYU51bGxWYWx1ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgYVJlZ0V4cDogL2FiYy9pLFxyXG4gICAgICAgICAgICAgICAgLy8gYW5VbmRlZmluZWRWYWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UxOiBpbnN0YW5jZU9mQW5PYmplY3QsXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTI6IGluc3RhbmNlT2ZBbk9iamVjdFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZCA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplVG9PYmplY3QoYW5PYmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgZGVzZXJpYWxpemVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplRnJvbU9iamVjdChzZXJpYWxpemVkKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChkZXNlcmlhbGl6ZWQpLnRvRXF1YWwoYW5PYmplY3QsIFwic2VyaWFsaXplVG9PYmplY3QgKyBkZXNlcmlhbGl6ZUZyb21PYmplY3QgbXVzdCByZXR1cm4gdGhlIG9yaWdpbmFsIG9iamVjdCFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCgoPGFueT5kZXNlcmlhbGl6ZWQpLmluc3RhbmNlMSA9PT0gKDxhbnk+ZGVzZXJpYWxpemVkKS5pbnN0YW5jZTIpLnRvQmVUcnV0aHkoXCJzZXJpYWxpemVUb09iamVjdCArIGRlc2VyaWFsaXplRnJvbU9iamVjdCBkbyBub3QgcHJlc2VydmUgb2JqZWN0IHN0cnVjdHVyZSBhbmQgaW5zdGFuY2VzLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KCg8YW55PmRlc2VyaWFsaXplZCkuYW5BcnJheUNvbnRhaW5pbmdBUGFydGljdWxhckluc3RhbmNlWzBdID09PSAoPGFueT5kZXNlcmlhbGl6ZWQpLmFuQXJyYXlDb250YWluaW5nVGhlU2FtZVBhcnRpY3VsYXJJbnN0YW5jZVswXSkudG9CZVRydXRoeShcInNlcmlhbGl6ZVRvT2JqZWN0ICsgZGVzZXJpYWxpemVGcm9tT2JqZWN0IGRvIG5vdCBwcmVzZXJ2ZSBvYmplY3Qgc3RydWN0dXJlIGFuZCBpbnN0YW5jZXMgaW4gYXJyYXlzLlwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KCg8YW55PmRlc2VyaWFsaXplZCkuYW5BcnJheUluc3RhbmNlID09PSAoPGFueT5kZXNlcmlhbGl6ZWQpLmFub3RoZXJBcnJheUluc3RhbmNlKS50b0JlVHJ1dGh5KFwic2VyaWFsaXplVG9PYmplY3QgKyBkZXNlcmlhbGl6ZUZyb21PYmplY3QgZG8gbm90IHByZXNlcnZlIGFycmF5cyBpbnN0YW5jZXMuXCIpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL2J1aWxkL2Jyb3dzZXIvZGRkLXRvb2xzLmQudHNcIiAvPlxyXG5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHNcIiAvPlxyXG4vLyAvIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzXCIgLz5cclxuLy8gLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50c1wiIC8+XHJcbi8vIC8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0luTWVtb3J5UmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG4vLyBpbXBvcnQge1VuaXRPZldvcmt9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtcIjtcclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0U2F2ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdERlbGV0ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0UmV0cmlldmVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrRXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5Gb3JVbml0T2ZXb3JrIHtcclxuXHJcblxyXG4gICAgaW1wb3J0IEluTWVtb3J5UmVwb3NpdG9yeSA9IERERFRvb2xzLlJlcG9zaXRvcnkuSW5NZW1vcnlSZXBvc2l0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gREREVG9vbHMuQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuICAgIGltcG9ydCBVbml0T2ZXb3JrID0gREREVG9vbHMuVW5pdE9mV29yay5Vbml0T2ZXb3JrO1xyXG4gICAgaW1wb3J0IElSZXBvc2l0b3J5ID0gREREVG9vbHMuUmVwb3NpdG9yeS5JUmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBERERUb29scy5Eb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IElFdmVudEhhbmRsZXIgPSBERERUb29scy5Eb21haW5FdmVudHMuSUV2ZW50SGFuZGxlcjtcclxuICAgIGltcG9ydCBPYmplY3RTYXZlZEV2ZW50ID0gREREVG9vbHMuVW5pdE9mV29yay5PYmplY3RTYXZlZEV2ZW50O1xyXG4gICAgaW1wb3J0IE9iamVjdERlbGV0ZWRFdmVudCA9IERERFRvb2xzLlVuaXRPZldvcmsuT2JqZWN0RGVsZXRlZEV2ZW50O1xyXG4gICAgaW1wb3J0IE9iamVjdFJldHJpZXZlZEV2ZW50ID0gREREVG9vbHMuVW5pdE9mV29yay5PYmplY3RSZXRyaWV2ZWRFdmVudDtcclxuICAgIGltcG9ydCBFdmVudHMgPSBERERUb29scy5Vbml0T2ZXb3JrLkV2ZW50cztcclxuICAgIGltcG9ydCBVbml0T2ZXb3JrRXJyb3JzID0gREREVG9vbHMuVW5pdE9mV29yay5Vbml0T2ZXb3JrRXJyb3JzO1xyXG4gICAgaW1wb3J0IEVycm9ycyA9IERERFRvb2xzLlJlcG9zaXRvcnkuRXJyb3JzO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEtleSBleHRlbmRzIEd1aWQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RLZXlcIjtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYVRlc3RQcm9wZXJ0eTogc3RyaW5nID0gXCJDaWFvXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRBVGVzdFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hVGVzdFByb3BlcnR5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QVRlc3RQcm9wZXJ0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hVGVzdFByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFJlcG9zaXRvcnkgZXh0ZW5kcyBJbk1lbW9yeVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFVvVyBleHRlbmRzIFVuaXRPZldvcms8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlcG86IElSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHJlcG8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVzY3JpYmUoXCJVbml0T2ZXb3JrXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHJlcG86IFRlc3RSZXBvc2l0b3J5O1xyXG4gICAgICAgIHZhciBrZXlzOiBUZXN0S2V5W107XHJcbiAgICAgICAgdmFyIGFnZ3JlZ2F0ZXM6IFRlc3RBZ2dyZWdhdGVbXTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZBZ2dyZWdhdGVzOiBudW1iZXIgPSAxMDtcclxuICAgICAgICB2YXIgdW93OiBUZXN0VW9XO1xyXG5cclxuICAgICAgICB2YXIgaW5pdEtleXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGtleXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKEd1aWQuZ2VuZXJhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpbml0QWdncmVnYXRlcyA9IChrZXlzOiBUZXN0S2V5W10pID0+IHtcclxuICAgICAgICAgICAgYWdncmVnYXRlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWdnciA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBhZ2dyLnNldEtleShrZXlzW2ldKTtcclxuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZXMucHVzaChhZ2dyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGZpbGxSZXBvID0gKHJlcG86IElSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShhZ2dyZWdhdGVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RBZ2dyZWdhdGVcIiwgXCJ2MVwiLCA8YW55PlRlc3RBZ2dyZWdhdGUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVwbyA9IG5ldyBUZXN0UmVwb3NpdG9yeShcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RBZ2dyZWdhdGVcIik7XHJcbiAgICAgICAgICAgIGluaXRLZXlzKCk7XHJcbiAgICAgICAgICAgIGluaXRBZ2dyZWdhdGVzKGtleXMpO1xyXG4gICAgICAgICAgICBmaWxsUmVwbyhyZXBvKTtcclxuXHJcbiAgICAgICAgICAgIHVvdyA9IG5ldyBUZXN0VW9XKHJlcG8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgYSBVbml0T2ZXb3JrIGZvciBhIFJlcG9zaXRvcnkuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KHVvdyBpbnN0YW5jZW9mIFRlc3RVb1cpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJJdCBtdXN0IGJlIHBvc3NpYmxlIHRvIGdldCBhbiBpdGVtIGFzIGlmIGl0IGNhbWUgZGlyZWN0bHkgZnJvbSB0aGUgcmVwby5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8gPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdW93QXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShmcm9tVW9XKTtcclxuICAgICAgICAgICAgdmFyIHJlcG9Bc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGZyb21SZXBvKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh1b3dBc1N0cmluZykudG9FcXVhbCh1b3dBc1N0cmluZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiV2hlbiByZXRyaWV2aW5nIG9iamVjdHMsIGV2ZW50cyBvZiB0eXBlIE9iamVjdFJldHJpZXZlRXZlbnQgbXVzdCBiZSByYWlzZWQuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0UmV0cmlldmVkRXZlbnQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiQWZ0ZXIgY2FsbGluZyBzYXZlQWxsIGFsbCBNb2RpZmllZCBvYmplY3RzIG11c3QgYmUgc2F2ZWQgaW50byB0aGUgcmVwb3NpdG9yeVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZyb21Vb1cwLnNldEFUZXN0UHJvcGVydHkoXCJCcnV0dG8hXCIpO1xyXG4gICAgICAgICAgICBmcm9tVW9XMS5zZXRBVGVzdFByb3BlcnR5KFwiQkJlbGxvXCIpO1xyXG5cclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0U2F2ZWRFdmVudCwgKGV2ZW50OiBPYmplY3RTYXZlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIsIFwiVGhlIFVvVyBoYXMgbm90IHNhdmVkIGV4YWN0bHkgMiBvYmplY3QuXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzAuZ2V0QVRlc3RQcm9wZXJ0eSgpKS50b0VxdWFsKFwiQnJ1dHRvIVwiKTtcclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMS5nZXRBVGVzdFByb3BlcnR5KCkpLnRvRXF1YWwoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlVuaXRPZldvcmsgbXVzdCBzYXZlIG9ubHkgZWZmZWN0aXZlbHkgY2hhbmdlZCBvYmplY3RzLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2FkaW5nIDIgb2JqZWN0cyBmcm9tIHRoZSBVb1cgLi4uXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gLi4uIGJ1dCBlZGl0aW5nIG9ubHkgb25lLi4uXHJcbiAgICAgICAgICAgIGZyb21Vb1cxLnNldEFUZXN0UHJvcGVydHkoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgICAgICAvLy8gLi4uIHdlIGV4cGVjdCB0byBnZXQgb25seSAxIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBVb1dcclxuICAgICAgICAgICAgdW93LnJlZ2lzdGVySGFuZGxlcihFdmVudHMuT2JqZWN0U2F2ZWRFdmVudCwgKGV2ZW50OiBPYmplY3RTYXZlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZXZlbnQuaWQpLnRvRXF1YWwoa2V5c1sxXS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSwgXCJUaGUgVW9XIGhhcyBub3Qgc2F2ZWQgZXhhY3RseSAxIG9iamVjdC5cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVW5pdE9mV29yayBtdXN0IGRlbGV0ZSBjb21wbGV0ZWx5IGFuIG9iamVjdCBvbmx5IGFmdGVyIGNhbGxpbmcgc2F2ZUFsbC5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3REZWxldGVkRXZlbnQsIChldmVudDogT2JqZWN0RGVsZXRlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMCwgXCJIYW5kbGVyIHRyaWdnZXJlZCBiZWZvcmUgc2F2ZUFsbCB3YXMgY2FsbGVkIVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbzEgPSByZXBvLmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBXZSBkbyBleHBlY3QgdG8gc3RpbGwgZmluZHMgdGhlIGRlbGV0ZWQgaXRlbXMgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzApLm5vdC50b0JlTnVsbChcIkVsZW1lbnQgMCBkZWxldGVkIGJlZm9yZSBzYXZlQWxsXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8xKS5ub3QudG9CZU51bGwoXCJFbGVtZW50IDEgZGVsZXRlZCBiZWZvcmUgc2F2ZUFsbFwiKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyLCBcIlRoZSBVb1cgaGFzIG5vdCBkZWxldGVkIGV4YWN0bHkgMiBvYmplY3QuXCIpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tUmVwbzAgPSByZXBvLmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJJdGVtIDAgc2hvdWxkIGJlIG5vIG1vcmUgaW4gdGhlIHJlcG9zaXRvcnlcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIGFzIHRoZSBpdGVtIHNob3VsZCBub3QgYmUgbm9tb3JlIGluIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkl0ZW0gMSBzaG91bGQgYmUgbm8gbW9yZSBpbiB0aGUgcmVwb3NpdG9yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgYXMgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSBub21vcmUgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBIGRlbGV0ZWQgaXRlbSBtdXN0IG5vdCBiZSAncmV0cmlldmFibGUnIGZyb20gdGhlIFVuaXRPZldvcmssIGV2ZW4gaWYgc2F2ZUFsbCB3YXMgbm90IGNhbGxlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJlZm9yZSB0aGUgc2F2ZUFsbCB3ZSBleHBlY3QgdG8gZ2V0IGFuIEV4Y2VwdGlvbiBmcm9tIHRoZSBVbml0T2ZXb3JrIC4uLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlIGVsZW1lbnQgaGFzIGJlZW4gbWFya2VkIGFzIGRlbGV0ZWQsIGJ1dCBpdCBpcyBzdGlsbCByZXR1cm5lZCBieSB0aGUgVW9XLlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUgaW5zdGFuY2VvZiBFcnJvcikudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChVbml0T2ZXb3JrRXJyb3JzLkl0ZW1NYXJrZWRBc0RlbGV0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gLi4uIHdoaWxlIGFmdGVyIHRoZSBzYXZlQWxsIHdlIGV4cGVjdCB0byBnZXQgYW4gRXhjZXB0aW9uIGZyb20gdGhlIHVuZGVybHlpbmcgUmVwb3NpdG9yeSAuLi5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIlRoZSBlbGVtZW50IGhhcyBiZWVuIG1hcmtlZCBhcyBkZWxldGVkIGFuZCBkZWxldGVkLCBidXQgaXQgaXMgc3RpbGwgcmV0dXJuZWQgYnkgdGhlIFVvVy5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlIGluc3RhbmNlb2YgRXJyb3IpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm5hbWUpLnRvRXF1YWwoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Il19