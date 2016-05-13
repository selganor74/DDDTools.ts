var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../../src/DDDTools/ValueObjects/Guid", "../../../src/DDDTools/Aggregate/BaseAggregateRoot", "../../../src/NeDBRepository/BaseNeDBRepository"], function (require, exports, Guid_1, BaseAggregateRoot_1, BaseNeDBRepository_1) {
    "use strict";
    var CdC;
    (function (CdC) {
        var Tests;
        (function (Tests) {
            var NeDBRepository;
            (function (NeDBRepository) {
                var TestKey = (function (_super) {
                    __extends(TestKey, _super);
                    function TestKey() {
                        _super.call(this);
                        this.__typeName = "CdC.Tests.NeDBRepository.TestKey";
                        this.__typeVersion = "v1";
                    }
                    return TestKey;
                }(Guid_1.Guid));
                NeDBRepository.TestKey = TestKey;
                var TestAggregate = (function (_super) {
                    __extends(TestAggregate, _super);
                    function TestAggregate() {
                        _super.call(this);
                        this.__typeName = "CdC.Tests.NeDBRepository.TestAggregate";
                        this.__typeVersion = "v1";
                    }
                    return TestAggregate;
                }(BaseAggregateRoot_1.BaseAggregateRoot));
                NeDBRepository.TestAggregate = TestAggregate;
                var TestRepo = (function (_super) {
                    __extends(TestRepo, _super);
                    function TestRepo() {
                        _super.apply(this, arguments);
                    }
                    return TestRepo;
                }(BaseNeDBRepository_1.BaseNeDBRepository));
                describe("BaseNeDBRepository", function () {
                    it("Should be possible to instantiate the NeDB Object.", function () {
                        var nedbRepo = new TestRepo();
                        expect(true).toBeTruthy();
                    });
                });
            })(NeDBRepository = Tests.NeDBRepository || (Tests.NeDBRepository = {}));
        })(Tests = CdC.Tests || (CdC.Tests = {}));
    })(CdC || (CdC = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU5lREJSZXBvc2l0b3J5LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnktc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBUUEsSUFBVSxHQUFHLENBNEJaO0lBNUJELFdBQVUsR0FBRztRQUFDLElBQUEsS0FBSyxDQTRCbEI7UUE1QmEsV0FBQSxLQUFLO1lBQUMsSUFBQSxjQUFjLENBNEJqQztZQTVCbUIsV0FBQSxjQUFjLEVBQUMsQ0FBQztnQkFFaEM7b0JBQTZCLDJCQUFJO29CQUM3Qjt3QkFDSSxpQkFBTyxDQUFDO3dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsa0NBQWtDLENBQUM7d0JBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUM5QixDQUFDO29CQUNMLGNBQUM7Z0JBQUQsQ0FBQyxBQU5ELENBQTZCLFdBQUksR0FNaEM7Z0JBTlksc0JBQU8sVUFNbkIsQ0FBQTtnQkFFRDtvQkFBbUMsaUNBQXlDO29CQUN4RTt3QkFDSSxpQkFBTyxDQUFDO3dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsd0NBQXdDLENBQUM7d0JBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUM5QixDQUFDO29CQUNMLG9CQUFDO2dCQUFELENBQUMsQUFORCxDQUFtQyxxQ0FBaUIsR0FNbkQ7Z0JBTlksNEJBQWEsZ0JBTXpCLENBQUE7Z0JBRUQ7b0JBQXVCLDRCQUEwQztvQkFBakU7d0JBQXVCLDhCQUEwQztvQkFFakUsQ0FBQztvQkFBRCxlQUFDO2dCQUFELENBQUMsQUFGRCxDQUF1Qix1Q0FBa0IsR0FFeEM7Z0JBRUQsUUFBUSxDQUFDLG9CQUFvQixFQUFFO29CQUMzQixFQUFFLENBQUMsb0RBQW9ELEVBQUU7d0JBQ3JELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7d0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBNUJtQixjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQTRCakM7UUFBRCxDQUFDLEVBNUJhLEtBQUssR0FBTCxTQUFLLEtBQUwsU0FBSyxRQTRCbEI7SUFBRCxDQUFDLEVBNUJTLEdBQUcsS0FBSCxHQUFHLFFBNEJaIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbmltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi8uLi9zcmMvREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi8uLi9zcmMvREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7QmFzZU5lREJSZXBvc2l0b3J5fSBmcm9tIFwiLi4vLi4vLi4vc3JjL05lREJSZXBvc2l0b3J5L0Jhc2VOZURCUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG5uYW1lc3BhY2UgQ2RDLlRlc3RzLk5lREJSZXBvc2l0b3J5IHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEtleSBleHRlbmRzIEd1aWQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5OZURCUmVwb3NpdG9yeS5UZXN0S2V5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLk5lREJSZXBvc2l0b3J5LlRlc3RBZ2dyZWdhdGVcIjtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBUZXN0UmVwbyBleHRlbmRzIEJhc2VOZURCUmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaWJlKFwiQmFzZU5lREJSZXBvc2l0b3J5XCIsICgpID0+IHtcclxuICAgICAgICBpdChcIlNob3VsZCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSB0aGUgTmVEQiBPYmplY3QuXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIG5lZGJSZXBvID0gbmV3IFRlc3RSZXBvKCk7XHJcbiAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSJdfQ==