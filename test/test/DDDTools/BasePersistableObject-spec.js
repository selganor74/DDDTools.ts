var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/Entity/BaseEntity", "../../DDDTools/PersistableObject/Upgrader", "../../DDDTools/PersistableObject/Errors"], function (require, exports, BaseEntity_1, Upgrader_1, Errors_1) {
    "use strict";
    var CdC;
    (function (CdC) {
        var Tests;
        (function (Tests) {
            var BasePersistableObject;
            (function (BasePersistableObject) {
                var v2;
                (function (v2) {
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
                    }(BaseEntity_1.BaseEntity));
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
                    var TestEntity = (function (_super) {
                        __extends(TestEntity, _super);
                        function TestEntity() {
                            _super.apply(this, arguments);
                            this.__typeName = "CdC.Tests.BasePersistableObject.TestEntity";
                            this.__typeVersion = "v1";
                        }
                        return TestEntity;
                    }(BaseEntity_1.BaseEntity));
                    v1.TestEntity = TestEntity;
                    var A3StepUpgradableItem = (function (_super) {
                        __extends(A3StepUpgradableItem, _super);
                        function A3StepUpgradableItem() {
                            _super.apply(this, arguments);
                            this.__typeName = "CdC.Tests.BasePersistableObject.A3StepUpgradableItem";
                            this.__typeVersion = "v1";
                        }
                        return A3StepUpgradableItem;
                    }(BaseEntity_1.BaseEntity));
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
                }(BaseEntity_1.BaseEntity));
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
                }(BaseEntity_1.BaseEntity));
                BasePersistableObject.TestEntity = TestEntity;
                var TestEntityNonUpgradable = (function (_super) {
                    __extends(TestEntityNonUpgradable, _super);
                    function TestEntityNonUpgradable() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BasePersistableObject.TestEntityNonUpgradable";
                        this.__typeVersion = "v1";
                    }
                    return TestEntityNonUpgradable;
                }(BaseEntity_1.BaseEntity));
                BasePersistableObject.TestEntityNonUpgradable = TestEntityNonUpgradable;
                var AClassWithManyTypes = (function (_super) {
                    __extends(AClassWithManyTypes, _super);
                    function AClassWithManyTypes() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BasePersistableObject.AClassWithManyTypes";
                        this.__typeVersion = "v1";
                    }
                    return AClassWithManyTypes;
                }(BaseEntity_1.BaseEntity));
                BasePersistableObject.AClassWithManyTypes = AClassWithManyTypes;
                describe("BaseUpgrader", function () {
                    it("computeNextVersion deve restituire il valore corretto della versione successiva", function () {
                        var computed = Upgrader_1.Upgrader.computeNextVersion("v1");
                        expect(computed).toEqual("v2");
                    });
                    it("computeNextVersion deve restituire un errore se la versione non è corretta.", function () {
                        var expectedError = new Error(Errors_1.Errors.IncorrectVersionFormat);
                        expectedError.message = "Specified version m15 is in incorrect format. Must be in the form v<n> where n is an integer.";
                        expect(function () { var computed = Upgrader_1.Upgrader.computeNextVersion("m15"); }).toThrow(expectedError);
                    });
                    it("isLatestVersionForType deve restituire false per gli oggetti che non hanno versioni oltre alla prima", function () {
                        var te = new TestEntityNonUpgradable();
                        var needsUpgrade = Upgrader_1.Upgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);
                        expect(needsUpgrade).toBeFalsy("isLatestVersionForType should have returned false!");
                    });
                    it("isLatestVersionForType deve restituire true per gli oggetti che hanno versioni oltre alla prima", function () {
                        var te = new CdC.Tests.BasePersistableObject.v1.TestEntity();
                        var needsUpgrade = Upgrader_1.Upgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);
                        expect(needsUpgrade).toBeTruthy("isLatestVersionForType should have returned true!");
                    });
                    it("upgrade must be able to upgrade a PersistableObject to its latest version [2 steps]", function () {
                        var te = new CdC.Tests.BasePersistableObject.v1.TestEntity();
                        expect(te.__typeVersion).toEqual("v1");
                        var upgraded = Upgrader_1.Upgrader.upgrade(te);
                        expect(upgraded.__typeVersion).toEqual("v2");
                        expect(upgraded.aNewProperty).toEqual("upgrader was here");
                    });
                    it("upgrade must be able to upgrade a PersistableObject to its latest version [3 steps]", function () {
                        var te = new CdC.Tests.BasePersistableObject.v1.A3StepUpgradableItem();
                        expect(te.__typeVersion).toEqual("v1");
                        var upgraded = Upgrader_1.Upgrader.upgrade(te);
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
});
//# sourceMappingURL=BasePersistableObject-spec.js.map