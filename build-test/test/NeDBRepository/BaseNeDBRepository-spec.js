var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/ValueObjects/Guid", "../../DDDTools/Aggregate/BaseAggregateRoot", "../../NeDBRepository/BaseNeDBRepositoryAsync", "../../DDDTools/PersistableObject/Factory"], function (require, exports, Guid_1, BaseAggregateRoot_1, BaseNeDBRepositoryAsync_1, Factory_1) {
    "use strict";
    var TestKey = (function (_super) {
        __extends(TestKey, _super);
        function TestKey() {
            _super.call(this);
            this.__typeName = "TestKey";
            this.__typeVersion = "v1";
        }
        return TestKey;
    }(Guid_1.Guid));
    exports.TestKey = TestKey;
    var TestAggregate = (function (_super) {
        __extends(TestAggregate, _super);
        function TestAggregate() {
            _super.call(this);
            this.__typeName = "TestAggregate";
            this.__typeVersion = "v1";
        }
        return TestAggregate;
    }(BaseAggregateRoot_1.BaseAggregateRoot));
    exports.TestAggregate = TestAggregate;
    var TestRepo = (function (_super) {
        __extends(TestRepo, _super);
        function TestRepo() {
            _super.apply(this, arguments);
        }
        TestRepo.prototype.setupIndexes = function () {
        };
        return TestRepo;
    }(BaseNeDBRepositoryAsync_1.BaseNeDBRepositoryAsync));
    describe("BaseNeDBRepository", function () {
        Factory_1.Factory.registerType("TestKey", "v1", TestKey);
        Factory_1.Factory.registerType("TestAggregate", "v1", TestAggregate);
        it("Should be possible to instantiate the NeDB Object.", function () {
            var nedbRepo = new TestRepo("TestAggregate");
            expect(true).toBeTruthy();
        });
        it("Should be possible to insert and retrieve an item", function (done) {
            var testItem = new TestAggregate();
            var testKey = new TestKey();
            var testRepo = new TestRepo("TestAggregate");
            testItem.setKey(testKey);
            testRepo.save(testItem).then(function () {
                testRepo.getById(testKey).then(function (retrieved) {
                    expect(retrieved).toEqual(testItem);
                    expect(retrieved.perfectlyMatch(testItem)).toBeTruthy();
                    done();
                }, function (error) {
                    expect(false).toBeTruthy("There was an error while retrieving the item.");
                    done();
                });
            }, function (error) {
                expect(false).toBeTruthy("There was an error while retrieving the item.");
                done();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU5lREJSZXBvc2l0b3J5LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnktc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBVUE7UUFBNkIsMkJBQUk7UUFDN0I7WUFDSSxpQkFBTyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBNkIsV0FBSSxHQU1oQztJQU5ZLGVBQU8sVUFNbkIsQ0FBQTtJQUVEO1FBQW1DLGlDQUF5QztRQUN4RTtZQUNJLGlCQUFPLENBQUM7WUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBbUMscUNBQWlCLEdBTW5EO0lBTlkscUJBQWEsZ0JBTXpCLENBQUE7SUFFRDtRQUF1Qiw0QkFBK0M7UUFBdEU7WUFBdUIsOEJBQStDO1FBSXRFLENBQUM7UUFIVSwrQkFBWSxHQUFuQjtRQUVBLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FBQyxBQUpELENBQXVCLGlEQUF1QixHQUk3QztJQUVELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUUzQixpQkFBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLGlCQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFM0QsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO1lBQ3JELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxVQUFDLElBQUk7WUFFekQsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTdDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekIsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMxQixVQUFDLFNBQVM7b0JBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDeEQsSUFBSSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxFQUNELFVBQUMsS0FBSztvQkFDRixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUM7b0JBQzFFLElBQUksRUFBRSxDQUFDO2dCQUNYLENBQUMsQ0FDSixDQUFDO1lBQ04sQ0FBQyxFQUNHLFVBQUMsS0FBSztnQkFDRixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUM7Z0JBQzFFLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUNKLENBQUM7UUFFTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7QmFzZU5lREJSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuLi8uLi9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnlBc3luY1wiO1xyXG5pbXBvcnQge0Jhc2VLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvSUVudGl0eVwiXHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdEtleSBleHRlbmRzIEd1aWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIlRlc3RLZXlcIjtcclxuICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0QWdncmVnYXRlIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIlRlc3RBZ2dyZWdhdGVcIjtcclxuICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RSZXBvIGV4dGVuZHMgQmFzZU5lREJSZXBvc2l0b3J5QXN5bmM8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG4gICAgcHVibGljIHNldHVwSW5kZXhlcygpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmRlc2NyaWJlKFwiQmFzZU5lREJSZXBvc2l0b3J5XCIsICgpID0+IHtcclxuXHJcbiAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIlRlc3RLZXlcIiwgXCJ2MVwiLCBUZXN0S2V5KTtcclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiVGVzdEFnZ3JlZ2F0ZVwiLCBcInYxXCIsIFRlc3RBZ2dyZWdhdGUpO1xyXG5cclxuICAgIGl0KFwiU2hvdWxkIGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIHRoZSBOZURCIE9iamVjdC5cIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBuZWRiUmVwbyA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIik7XHJcbiAgICAgICAgZXhwZWN0KHRydWUpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiU2hvdWxkIGJlIHBvc3NpYmxlIHRvIGluc2VydCBhbmQgcmV0cmlldmUgYW4gaXRlbVwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgdGVzdEl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgIHZhciB0ZXN0S2V5ID0gbmV3IFRlc3RLZXkoKTtcclxuICAgICAgICB2YXIgdGVzdFJlcG8gPSBuZXcgVGVzdFJlcG8oXCJUZXN0QWdncmVnYXRlXCIpO1xyXG5cclxuICAgICAgICB0ZXN0SXRlbS5zZXRLZXkodGVzdEtleSk7XHJcblxyXG4gICAgICAgIHRlc3RSZXBvLnNhdmUodGVzdEl0ZW0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0ZXN0UmVwby5nZXRCeUlkKHRlc3RLZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmV0cmlldmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJldHJpZXZlZCkudG9FcXVhbCh0ZXN0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJldHJpZXZlZC5wZXJmZWN0bHlNYXRjaCh0ZXN0SXRlbSkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJldHJpZXZpbmcgdGhlIGl0ZW0uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSByZXRyaWV2aW5nIHRoZSBpdGVtLlwiKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfSlcclxufSk7XHJcbiJdfQ==