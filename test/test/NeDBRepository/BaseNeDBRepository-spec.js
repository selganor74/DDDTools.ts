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
//# sourceMappingURL=BaseNeDBRepository-spec.js.map