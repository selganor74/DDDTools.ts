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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVZhbHVlT2JqZWN0LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9ERERUb29scy9CYXNlVmFsdWVPYmplY3Qtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBS0EsSUFBVSxHQUFHLENBOEZaO0lBOUZELFdBQVUsR0FBRztRQUFDLElBQUEsS0FBSyxDQThGbEI7UUE5RmEsV0FBQSxLQUFLO1lBQUMsSUFBQSxrQkFBa0IsQ0E4RnJDO1lBOUZtQixXQUFBLGtCQUFrQixFQUFDLENBQUM7Z0JBRXBDO29CQUE4QixtQ0FBZ0M7b0JBSTFELHlCQUNZLEdBQVcsRUFDWCxNQUFjLEVBQ2QsS0FBYSxFQUNiLEdBQVc7d0JBRW5CLGlCQUFPLENBQUM7d0JBTEEsUUFBRyxHQUFILEdBQUcsQ0FBUTt3QkFDWCxXQUFNLEdBQU4sTUFBTSxDQUFRO3dCQUNkLFVBQUssR0FBTCxLQUFLLENBQVE7d0JBQ2IsUUFBRyxHQUFILEdBQUcsQ0FBUTt3QkFQdkIsZUFBVSxHQUFHLDJDQUEyQyxDQUFDO3dCQUN6RCxrQkFBYSxHQUFHLElBQUksQ0FBQztvQkFTckIsQ0FBQztvQkFDTCxzQkFBQztnQkFBRCxDQUFDLEFBWkQsQ0FBOEIsaUNBQWUsR0FZNUM7Z0JBRUQ7b0JBQW9DLHlDQUFzQztvQkFJdEUsK0JBQ1ksZ0JBQXVCO3dCQUUvQixpQkFBTyxDQUFDO3dCQUZBLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBTzt3QkFKbkMsZUFBVSxHQUFHLGlEQUFpRCxDQUFDO3dCQUMvRCxrQkFBYSxHQUFHLElBQUksQ0FBQztvQkFNckIsQ0FBQztvQkFDTCw0QkFBQztnQkFBRCxDQUFDLEFBVEQsQ0FBb0MsaUNBQWUsR0FTbEQ7Z0JBRUQ7b0JBQXFDLDBDQUF1QztvQkFJeEUsZ0NBQ1ksVUFBZTt3QkFFdkIsaUJBQU8sQ0FBQzt3QkFGQSxlQUFVLEdBQVYsVUFBVSxDQUFLO3dCQUozQixlQUFVLEdBQUcsaURBQWlE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QyxFQTlGbUIsa0JBQWtCLEdBQWxCLHdCQUFrQixLQUFsQix3QkFBa0IsUUE4RnJDO1FBQUQsQ0FBQyxFQTlGYSxLQUFLLEdBQUwsU0FBSyxLQUFMLFNBQUssUUE4RmxCO0lBQUQsQ0FBQyxFQTlGUyxHQUFHLEtBQUgsR0FBRyxRQThGWiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7R3VpZH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLkZvckJhc2VWYWx1ZU9iamVjdCB7XHJcblxyXG4gICAgY2xhc3MgVGVzdFZhbHVlT2JqZWN0IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdD4ge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5CYXNlVmFsdWVPYmplY3QuVGVzdFZhbHVlT2JqZWN0XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgdmlhOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByaXZhdGUgbnVtZXJvOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHByaXZhdGUgY2l0dGE6IHN0cmluZyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBjYXA6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUZXN0VmFsdWVPYmplY3RfQXJyYXkgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VGVzdFZhbHVlT2JqZWN0X0FycmF5PiB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLkJhc2VWYWx1ZU9iamVjdC5UZXN0VmFsdWVPYmplY3RfQXJyYXlcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBhcnJheU9mU29tZXRoaW5nOiBhbnlbXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRlc3RWYWx1ZU9iamVjdF9PYmplY3Q+IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuQmFzZVZhbHVlT2JqZWN0LlRlc3RWYWx1ZU9iamVjdF9BcnJheVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHNvbWVPYmplY3Q6IGFueVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmliZShcIkJhc2VWYWx1ZU9iamVjdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGl0KFwiVmFsdWVPYmplY3RzIG11c3QgYmUgY29tcGFyZWQgYWdhaW5zdCB0aGVpciBjb250ZW50LiAtIEJhc2UgdHlwZXNcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdm8xID0gbmV3IFRlc3RWYWx1ZU9iamVjdChcclxuICAgICAgICAgICAgICAgIFwidmlhIEYuTWVzdGljYVwiLFxyXG4gICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgIFwiQXBpcm9cIixcclxuICAgICAgICAgICAgICAgIFwiNjIwMjFcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8yID0gbmV3IFRlc3RWYWx1ZU9iamVjdChcclxuICAgICAgICAgICAgICAgIFwidmlhIEYuTWVzdGljYVwiLFxyXG4gICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgIFwiQXBpcm9cIixcclxuICAgICAgICAgICAgICAgIFwiNjIwMjFcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHZhciB2bzMgPSBuZXcgVGVzdFZhbHVlT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgXCJ2aWEgZGVsIGNhbXBvXCIsXHJcbiAgICAgICAgICAgICAgICA2OSxcclxuICAgICAgICAgICAgICAgIFwiR2Vub3ZhXCIsXHJcbiAgICAgICAgICAgICAgICBcInh4eHh4XCJcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIlZhbHVlT2JqZWN0cyBtdXN0IGJlIGNvbXBhcmVkIGFnYWluc3QgdGhlaXIgY29udGVudC4gLSBBcnJheVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2bzEgPSBuZXcgVGVzdFZhbHVlT2JqZWN0X0FycmF5KFxyXG4gICAgICAgICAgICAgICAgW3sgcDE6IDMsIHAyOiA0MiB9LCB7IHAxOiA2LCBwMzogOTYgfV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMiA9IG5ldyBUZXN0VmFsdWVPYmplY3RfQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBbeyBwMTogMywgcDI6IDQyIH0sIHsgcDE6IDYsIHAzOiA5NiB9XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgdm8zID0gbmV3IFRlc3RWYWx1ZU9iamVjdF9BcnJheShcclxuICAgICAgICAgICAgICAgIFt7IHAxOiA2LCBwMzogOTYgfSwgeyBwMTogMywgcDI6IDQyIH1dXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMikpLnRvQmVUcnV0aHkoXCJ2bzEgaXMgcmVwb3J0ZWQgdG8gYmUgbm90IGVxdWFsIHRvIHZvMiwgd2hpbGUgaXQgaXMhXCIpO1xyXG4gICAgICAgICAgICBleHBlY3Qodm8xLmVxdWFscyh2bzMpKS50b0JlRmFsc3koXCJ2bzEgaXMgcmVwb3J0ZWRlIHRvIGJlIGVxdWFsIHRvIHZvMywgd2hpbGUgaXQgaXMgbm90IVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJWYWx1ZU9iamVjdHMgbXVzdCBiZSBjb21wYXJlZCBhZ2FpbnN0IHRoZWlyIGNvbnRlbnQuIC0gT2JqZWN0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZvMSA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMiA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogMywgcDI6IDQyIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdmFyIHZvMyA9IG5ldyBUZXN0VmFsdWVPYmplY3RfT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgeyBwMTogNiwgcDM6IDk2IH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHZvMS5lcXVhbHModm8yKSkudG9CZVRydXRoeShcInZvMSBpcyByZXBvcnRlZCB0byBiZSBub3QgZXF1YWwgdG8gdm8yLCB3aGlsZSBpdCBpcyFcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdCh2bzEuZXF1YWxzKHZvMykpLnRvQmVGYWxzeShcInZvMSBpcyByZXBvcnRlZGUgdG8gYmUgZXF1YWwgdG8gdm8zLCB3aGlsZSBpdCBpcyBub3QhXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=