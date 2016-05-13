var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/ValueObject/BaseValueObject"], function (require, exports, BaseValueObject_1) {
    "use strict";
    var CdC;
    (function (CdC) {
        var Tests;
        (function (Tests) {
            var ForBaseValueObject;
            (function (ForBaseValueObject) {
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
                }(BaseValueObject_1.BaseValueObject));
                var TestValueObject_Array = (function (_super) {
                    __extends(TestValueObject_Array, _super);
                    function TestValueObject_Array(arrayOfSomething) {
                        _super.call(this);
                        this.arrayOfSomething = arrayOfSomething;
                        this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
                        this.__typeVersion = "v1";
                    }
                    return TestValueObject_Array;
                }(BaseValueObject_1.BaseValueObject));
                var TestValueObject_Object = (function (_super) {
                    __extends(TestValueObject_Object, _super);
                    function TestValueObject_Object(someObject) {
                        _super.call(this);
                        this.someObject = someObject;
                        this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
                        this.__typeVersion = "v1";
                    }
                    return TestValueObject_Object;
                }(BaseValueObject_1.BaseValueObject));
                describe("BaseValueObject", function () {
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
});
//# sourceMappingURL=BaseValueObject-spec.js.map