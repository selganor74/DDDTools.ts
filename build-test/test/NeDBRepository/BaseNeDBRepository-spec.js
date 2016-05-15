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
                    expect(retrieved.equals(testItem)).toBeTruthy();
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
        it("RevisionId must be incremented only if object to be saved differs from object saved", function (done) {
            var repo = new TestRepo("TestAggregate");
            var e = new TestAggregate();
            e.setKey(new TestKey());
            e.aTestProperty = "Before saving...";
            expect(e.getRevisionId()).toEqual(0);
            repo.save(e).then(function () {
                expect(e.getRevisionId()).toEqual(1);
                repo.save(e).then(function () {
                    expect(e.getRevisionId()).toEqual(1);
                    e.aTestProperty = "... after saving";
                    repo.save(e).then(function () {
                        expect(e.getRevisionId()).toEqual(2);
                        done();
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU5lREJSZXBvc2l0b3J5LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnktc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBVUE7UUFBNkIsMkJBQUk7UUFDN0I7WUFDSSxpQkFBTyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBNkIsV0FBSSxHQU1oQztJQU5ZLGVBQU8sVUFNbkIsQ0FBQTtJQUVEO1FBQW1DLGlDQUF5QztRQUl4RTtZQUNJLGlCQUFPLENBQUM7WUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQUFDLEFBVEQsQ0FBbUMscUNBQWlCLEdBU25EO0lBVFkscUJBQWEsZ0JBU3pCLENBQUE7SUFFRDtRQUF1Qiw0QkFBK0M7UUFBdEU7WUFBdUIsOEJBQStDO1FBSXRFLENBQUM7UUFIVSwrQkFBWSxHQUFuQjtRQUVBLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FBQyxBQUpELENBQXVCLGlEQUF1QixHQUk3QztJQUVELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUUzQixpQkFBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLGlCQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFM0QsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO1lBQ3JELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxVQUFDLElBQUk7WUFFekQsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTdDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekIsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMxQixVQUFDLFNBQVM7b0JBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFcEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDaEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDeEQsSUFBSSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxFQUNELFVBQUMsS0FBSztvQkFDRixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUM7b0JBQzFFLElBQUksRUFBRSxDQUFDO2dCQUNYLENBQUMsQ0FDSixDQUFDO1lBQ04sQ0FBQyxFQUNHLFVBQUMsS0FBSztnQkFDRixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLCtDQUErQyxDQUFDLENBQUM7Z0JBQzFFLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUNKLENBQUM7UUFFTixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxxRkFBcUYsRUFBRSxVQUFDLElBQUk7WUFHM0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDO1lBRXJDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2QsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztvQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ2QsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxFQUFFLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtCYXNlTmVEQlJlcG9zaXRvcnlBc3luY30gZnJvbSBcIi4uLy4uL05lREJSZXBvc2l0b3J5L0Jhc2VOZURCUmVwb3NpdG9yeUFzeW5jXCI7XHJcbmltcG9ydCB7QmFzZUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbmltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0VudGl0eS9JRW50aXR5XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0S2V5IGV4dGVuZHMgR3VpZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiVGVzdEtleVwiO1xyXG4gICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcblxyXG4gICAgcHVibGljIGFUZXN0UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGVzdFJlcG8gZXh0ZW5kcyBCYXNlTmVEQlJlcG9zaXRvcnlBc3luYzxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICBwdWJsaWMgc2V0dXBJbmRleGVzKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZGVzY3JpYmUoXCJCYXNlTmVEQlJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG5cclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiVGVzdEtleVwiLCBcInYxXCIsIFRlc3RLZXkpO1xyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJUZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgVGVzdEFnZ3JlZ2F0ZSk7XHJcblxyXG4gICAgaXQoXCJTaG91bGQgYmUgcG9zc2libGUgdG8gaW5zdGFudGlhdGUgdGhlIE5lREIgT2JqZWN0LlwiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG5lZGJSZXBvID0gbmV3IFRlc3RSZXBvKFwiVGVzdEFnZ3JlZ2F0ZVwiKTtcclxuICAgICAgICBleHBlY3QodHJ1ZSkudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJTaG91bGQgYmUgcG9zc2libGUgdG8gaW5zZXJ0IGFuZCByZXRyaWV2ZSBhbiBpdGVtXCIsIChkb25lKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciB0ZXN0SXRlbSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgdmFyIHRlc3RLZXkgPSBuZXcgVGVzdEtleSgpO1xyXG4gICAgICAgIHZhciB0ZXN0UmVwbyA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIik7XHJcblxyXG4gICAgICAgIHRlc3RJdGVtLnNldEtleSh0ZXN0S2V5KTtcclxuXHJcbiAgICAgICAgdGVzdFJlcG8uc2F2ZSh0ZXN0SXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRlc3RSZXBvLmdldEJ5SWQodGVzdEtleSkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZXRyaWV2ZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmV0cmlldmVkKS50b0VxdWFsKHRlc3RJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBCZWluZyBFbnRpdGllcyB0aGUgZXF1YWxzIG1ldGhvZCBzaG91bGQgcmV0dXJuIHRydWUgaWYgd2UgYXJlIHRhbGtpbmcgYWJvdXQgdGhlIHNhbWUgZW50aXR5LlxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZXRyaWV2ZWQuZXF1YWxzKHRlc3RJdGVtKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChyZXRyaWV2ZWQucGVyZmVjdGx5TWF0Y2godGVzdEl0ZW0pKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSByZXRyaWV2aW5nIHRoZSBpdGVtLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgcmV0cmlldmluZyB0aGUgaXRlbS5cIik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiUmV2aXNpb25JZCBtdXN0IGJlIGluY3JlbWVudGVkIG9ubHkgaWYgb2JqZWN0IHRvIGJlIHNhdmVkIGRpZmZlcnMgZnJvbSBvYmplY3Qgc2F2ZWRcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICAvLyBwZW5kaW5nKFwiTmVlZCB0byByZWZhY3RvciBJUEVyc2lzdGFibGUgdG8gYWRkIGZ1bmN0aW9ucyBmb3IgU3RhdGUgQ29tcGFyaXNvbi5cIik7XHJcblxyXG4gICAgICAgIHZhciByZXBvID0gbmV3IFRlc3RSZXBvKFwiVGVzdEFnZ3JlZ2F0ZVwiKTtcclxuICAgICAgICB2YXIgZSA9IG5ldyBUZXN0QWdncmVnYXRlKCk7XHJcbiAgICAgICAgZS5zZXRLZXkobmV3IFRlc3RLZXkoKSk7XHJcbiAgICAgICAgZS5hVGVzdFByb3BlcnR5ID0gXCJCZWZvcmUgc2F2aW5nLi4uXCI7XHJcblxyXG4gICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgwKTtcclxuXHJcbiAgICAgICAgcmVwby5zYXZlKGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiLi4uIGFmdGVyIHNhdmluZ1wiO1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdChlLmdldFJldmlzaW9uSWQoKSkudG9FcXVhbCgyKTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iXX0=