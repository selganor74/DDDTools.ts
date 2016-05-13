var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/Entity/BaseEntity", "../../DDDTools/PersistableObject/Upgrader", "../../DDDTools/PersistableObject/Errors", "../../DDDTools/PersistableObject/Factory"], function (require, exports, BaseEntity_1, Upgrader_1, Errors_1, Factory_1) {
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
                    beforeEach(function () {
                        Factory_1.Factory.registerType("CdC.Tests.BasePersistableObject.A3StepUpgradableItem", "v1", CdC.Tests.BasePersistableObject.v1.A3StepUpgradableItem);
                        Factory_1.Factory.registerType("CdC.Tests.BasePersistableObject.A3StepUpgradableItem", "v2", CdC.Tests.BasePersistableObject.v2.A3StepUpgradableItem);
                        Factory_1.Factory.registerType("CdC.Tests.BasePersistableObject.A3StepUpgradableItem", "v3", A3StepUpgradableItem);
                        Factory_1.Factory.registerType("CdC.Tests.BasePersistableObject.TestEntity", "v1", CdC.Tests.BasePersistableObject.v1.TestEntity);
                        Factory_1.Factory.registerType("CdC.Tests.BasePersistableObject.TestEntity", "v2", TestEntity);
                        Factory_1.Factory.registerType("CdC.Tests.BasePersistableObject.TestEntityNonUpgradable", "v1", TestEntityNonUpgradable);
                        Factory_1.Factory.registerType("CdC.Tests.BasePersistableObject.AClassWithManyTypes", "v1", AClassWithManyTypes);
                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBlcnNpc3RhYmxlT2JqZWN0LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9ERERUb29scy9CYXNlUGVyc2lzdGFibGVPYmplY3Qtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBVUEsSUFBVSxHQUFHLENBbUJaO0lBbkJELFdBQVUsR0FBRztRQUFDLElBQUEsS0FBSyxDQW1CbEI7UUFuQmEsV0FBQSxLQUFLO1lBQUMsSUFBQSxxQkFBcUIsQ0FtQnhDO1lBbkJtQixXQUFBLHFCQUFxQjtnQkFBQyxJQUFBLEVBQUUsQ0FtQjNDO2dCQW5CeUMsV0FBQSxFQUFFLEVBQUMsQ0FBQztvQkFLMUM7d0JBQTBDLHdDQUFzQzt3QkFBaEY7NEJBQTBDLDhCQUFzQzs0QkFDNUUsZUFBVSxHQUFHLHNEQUFzRCxDQUFDOzRCQUNwRSxrQkFBYSxHQUFHLElBQUksQ0FBQzt3QkFXekIsQ0FBQzt3QkFQRyxrREFBbUIsR0FBbkIsVUFBb0IsWUFBcUU7NEJBQ3JGLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDcEMsS0FBSyxDQUFDLFlBQVksR0FBRyxtQkFBbUIsQ0FBQzs0QkFDekMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7NEJBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7d0JBQ2hCLENBQUM7d0JBQ0wsMkJBQUM7b0JBQUQsQ0FBQyxBQWJELENBQTBDLHVCQUFVLEdBYW5EO29CQWJZLHVCQUFvQix1QkFhaEMsQ0FBQTtnQkFDTCxDQUFDLEVBbkJ5QyxFQUFFLEdBQUYsd0JBQUUsS0FBRix3QkFBRSxRQW1CM0M7WUFBRCxDQUFDLEVBbkJtQixxQkFBcUIsR0FBckIsMkJBQXFCLEtBQXJCLDJCQUFxQixRQW1CeEM7UUFBRCxDQUFDLEVBbkJhLEtBQUssR0FBTCxTQUFLLEtBQUws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Qyw4QkFBOEIsQ0FBQyxDQUFDO3dCQUMvRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsMENBQTBDLENBQUMsQ0FBQztvQkFDN0csQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBNUptQixxQkFBcUIsR0FBckIsMkJBQXFCLEtBQXJCLDJCQUFxQixRQTRKeEM7UUFBRCxDQUFDLEVBNUphLEtBQUssR0FBTCxTQUFLLEtBQUwsU0FBSyxRQTRKbEI7SUFBRCxDQUFDLEVBNUpTLEdBQUcsS0FBSCxHQUFHLFFBNEpaIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuaW1wb3J0IHtGYWN0b3J5IGFzIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtVcGdyYWRlcn0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L1VwZ3JhZGVyXCI7XHJcbmltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MiB7XHJcblxyXG4gICAgaW1wb3J0IFRlc3RFbnRpdHkgPSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHk7XHJcbiAgICBcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYyXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhTmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0RW50aXR5IGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5LCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PEEzU3RlcFVwZ3JhZGFibGVJdGVtLCBHdWlkPiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BM1N0ZXBVcGdyYWRhYmxlSXRlbVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQTNTdGVwVXBncmFkYWJsZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LkEzU3RlcFVwZ3JhZGFibGVJdGVtXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjNcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGFOZXdQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBhTmV3TmV3UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgZ2V0VXBncmFkZWRJbnN0YW5jZShmcm9tSW5zdGFuY2U6IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pOiBBM1N0ZXBVcGdyYWRhYmxlSXRlbSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3TmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYzXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHkgZXh0ZW5kcyBCYXNlRW50aXR5PFRlc3RFbnRpdHksIEd1aWQ+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MlwiO1xyXG5cclxuICAgICAgICBnZXRVcGdyYWRlZEluc3RhbmNlKGZyb21JbnN0YW5jZTogQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KTogVGVzdEVudGl0eSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IGZyb21JbnN0YW5jZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5hTmV3UHJvcGVydHkgPSBcInVwZ3JhZGVyIHdhcyBoZXJlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLl9fdHlwZVZlcnNpb24gPSBcInYyXCJcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBwcm9wZXJ0eSB3YXMgbm90IGluIFwidjFcIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYU5ld1Byb3BlcnR5OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlIGV4dGVuZHMgQmFzZUVudGl0eTxUZXN0RW50aXR5Tm9uVXBncmFkYWJsZSwgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuVGVzdEVudGl0eU5vblVwZ3JhZGFibGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQUNsYXNzV2l0aE1hbnlUeXBlcyBleHRlbmRzIEJhc2VFbnRpdHk8QUNsYXNzV2l0aE1hbnlUeXBlcywgR3VpZD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlc1wiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIC8vIFByaW1pdGl2ZSBEYXRhdHlwZXNcclxuICAgICAgICBwdWJsaWMgYU51bWJlcjogTnVtYmVyO1xyXG4gICAgICAgIHB1YmxpYyBhU3RyaW5nOiBTdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGFCb29sZWFuOiBCb29sZWFuO1xyXG4gICAgICAgIHB1YmxpYyBhbk9iamVjdDogT2JqZWN0O1xyXG5cclxuICAgICAgICAvLyBFeHRlbmRlZCB0eXBlc1xyXG4gICAgICAgIHB1YmxpYyBhUmVnRXhwOiBSZWdFeHA7XHJcbiAgICAgICAgcHVibGljIGFEYXRlOiBEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZVVwZ3JhZGVyXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2MlwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjIuQTNTdGVwVXBncmFkYWJsZUl0ZW0pO1xyXG4gICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQTNTdGVwVXBncmFkYWJsZUl0ZW1cIiwgXCJ2M1wiLCA8YW55PkEzU3RlcFVwZ3JhZGFibGVJdGVtKTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlcIiwgXCJ2MVwiLCA8YW55PkNkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5UZXN0RW50aXR5XCIsIFwidjJcIiwgPGFueT5UZXN0RW50aXR5KTtcclxuICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJDZEMuVGVzdHMuQmFzZVBlcnNpc3RhYmxlT2JqZWN0LlRlc3RFbnRpdHlOb25VcGdyYWRhYmxlXCIsIFwidjFcIiwgPGFueT5UZXN0RW50aXR5Tm9uVXBncmFkYWJsZSk7XHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzXCIsIFwidjFcIiwgPGFueT5BQ2xhc3NXaXRoTWFueVR5cGVzKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiY29tcHV0ZU5leHRWZXJzaW9uIGRldmUgcmVzdGl0dWlyZSBpbCB2YWxvcmUgY29ycmV0dG8gZGVsbGEgdmVyc2lvbmUgc3VjY2Vzc2l2YVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29tcHV0ZWQgPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oXCJ2MVwiKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb21wdXRlZCkudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImNvbXB1dGVOZXh0VmVyc2lvbiBkZXZlIHJlc3RpdHVpcmUgdW4gZXJyb3JlIHNlIGxhIHZlcnNpb25lIG5vbiDDqCBjb3JyZXR0YS5cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGV4cGVjdGVkRXJyb3IgPSBuZXcgRXJyb3IoRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQpO1xyXG4gICAgICAgICAgICBleHBlY3RlZEVycm9yLm1lc3NhZ2UgPSBcIlNwZWNpZmllZCB2ZXJzaW9uIG0xNSBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KCgpID0+IHsgdmFyIGNvbXB1dGVkID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKFwibTE1XCIpOyB9KS50b1Rocm93KGV4cGVjdGVkRXJyb3IpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJpc0xhdGVzdFZlcnNpb25Gb3JUeXBlIGRldmUgcmVzdGl0dWlyZSBmYWxzZSBwZXIgZ2xpIG9nZ2V0dGkgY2hlIG5vbiBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IFRlc3RFbnRpdHlOb25VcGdyYWRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbmVlZHNVcGdyYWRlID0gVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0ZS5fX3R5cGVOYW1lLCB0ZS5fX3R5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChuZWVkc1VwZ3JhZGUpLnRvQmVGYWxzeShcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgc2hvdWxkIGhhdmUgcmV0dXJuZWQgZmFsc2UhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcImlzTGF0ZXN0VmVyc2lvbkZvclR5cGUgZGV2ZSByZXN0aXR1aXJlIHRydWUgcGVyIGdsaSBvZ2dldHRpIGNoZSBoYW5ubyB2ZXJzaW9uaSBvbHRyZSBhbGxhIHByaW1hXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuVGVzdEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5lZWRzVXBncmFkZSA9IFVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodGUuX190eXBlTmFtZSwgdGUuX190eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QobmVlZHNVcGdyYWRlKS50b0JlVHJ1dGh5KFwiaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSBzaG91bGQgaGF2ZSByZXR1cm5lZCB0cnVlIVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJ1cGdyYWRlIG11c3QgYmUgYWJsZSB0byB1cGdyYWRlIGEgUGVyc2lzdGFibGVPYmplY3QgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uIFsyIHN0ZXBzXVwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC52MS5UZXN0RW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodGUuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYxXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gPFRlc3RFbnRpdHk+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYyXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwidXBncmFkZSBtdXN0IGJlIGFibGUgdG8gdXBncmFkZSBhIFBlcnNpc3RhYmxlT2JqZWN0IHRvIGl0cyBsYXRlc3QgdmVyc2lvbiBbMyBzdGVwc11cIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QudjEuQTNTdGVwVXBncmFkYWJsZUl0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh0ZS5fX3R5cGVWZXJzaW9uKS50b0VxdWFsKFwidjFcIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSA8QTNTdGVwVXBncmFkYWJsZUl0ZW0+VXBncmFkZXIudXBncmFkZSh0ZSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuX190eXBlVmVyc2lvbikudG9FcXVhbChcInYzXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QodXBncmFkZWQuYU5ld1Byb3BlcnR5KS50b0VxdWFsKFwidXBncmFkZXIgd2FzIGhlcmVcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh1cGdyYWRlZC5hTmV3TmV3UHJvcGVydHkpLnRvRXF1YWwoXCJ1cGdyYWRlciB3YXMgaGVyZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBSZWdFeHAgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGUgPSBuZXcgQ2RDLlRlc3RzLkJhc2VQZXJzaXN0YWJsZU9iamVjdC5BQ2xhc3NXaXRoTWFueVR5cGVzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGVzdFJlZ0V4cCA9IFwiL152WzAtOV0rXCI7XHJcbiAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gXCJ2MTIzXCI7XHJcbiAgICAgICAgICAgIHRlLmFSZWdFeHAgPSBuZXcgUmVnRXhwKHRlc3RSZWdFeHApO1xyXG4gICAgICAgICAgICB2YXIgcmVnRXhwUmVzdWx0ID0gdGUuYVJlZ0V4cC50ZXN0KHRlc3RTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gPEFDbGFzc1dpdGhNYW55VHlwZXM+dGUuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwKS50b0JlVHJ1dGh5KFwiYVJlZ0V4cCBpcyBub3QgYSBSZWdFeHAgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hUmVnRXhwLnRlc3QoXCJ2MTIzXCIpKS50b0VxdWFsKHJlZ0V4cFJlc3VsdCwgXCJhUmVnRXhwIG5vbiBzaSBjb21wb3J0YSBjb21lIGxhIFJlZ3VsYXJFeHByZXNzaW9uIG9yaWdpbmFsZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJnZXRTdGF0ZSBtdXN0IGJlIGFibGUgdG8gY29weSBEYXRlIHR5cGVzXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRlID0gbmV3IENkQy5UZXN0cy5CYXNlUGVyc2lzdGFibGVPYmplY3QuQUNsYXNzV2l0aE1hbnlUeXBlcygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIHRlLmFEYXRlID0gdGVzdERhdGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSA8QUNsYXNzV2l0aE1hbnlUeXBlcz50ZS5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHN0YXRlLmFEYXRlIGluc3RhbmNlb2YgRGF0ZSkudG9CZVRydXRoeShcImFEYXRlIGlzIG5vdCBhIERhdGUgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChzdGF0ZS5hRGF0ZS50b1N0cmluZygpICkudG9FcXVhbCh0ZXN0RGF0ZS50b1N0cmluZygpLCBcImFEYXRlIG5vbiDDqCBzdGF0YSByaXByaXN0aW5hdGEgY29tZSBEYXRlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=