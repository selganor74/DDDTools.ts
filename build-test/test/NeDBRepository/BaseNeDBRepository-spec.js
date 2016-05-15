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
        var key;
        var persistenceTestAggregate;
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
        it("A repository built with filename option MUST be persistent - part 1 saving", function (done) {
            var repo1 = new TestRepo("TestAggregate", { filename: "TestAggregate", autoload: true });
            persistenceTestAggregate = new TestAggregate();
            persistenceTestAggregate.aTestProperty = "Wow this has been saved.";
            key = new TestKey();
            persistenceTestAggregate.setKey(key);
            repo1.save(persistenceTestAggregate).then(function () {
                expect(true).toBeTruthy();
                done();
            }, function (err) {
                expect(false).toBeTruthy("First Save failed");
                done();
            });
        });
        it("A repository built with filename option MUST be persistent - part 2 retrieving", function (done) {
            var repo2 = new TestRepo("TestAggregate", { filename: "TestAggregate", autoload: true });
            repo2.getById(key).then(function (doc) {
                expect(doc.perfectlyMatch(persistenceTestAggregate)).toBeTruthy();
                done();
            }, function (err) {
                expect(false).toBeTruthy(JSON.stringify(err));
                done();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU5lREJSZXBvc2l0b3J5LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnktc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBVUE7UUFBNkIsMkJBQUk7UUFDN0I7WUFDSSxpQkFBTyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBNkIsV0FBSSxHQU1oQztJQU5ZLGVBQU8sVUFNbkIsQ0FBQTtJQUVEO1FBQW1DLGlDQUF5QztRQUl4RTtZQUNJLGlCQUFPLENBQUM7WUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQUFDLEFBVEQsQ0FBbUMscUNBQWlCLEdBU25EO0lBVFkscUJBQWEsZ0JBU3pCLENBQUE7SUFFRDtRQUF1Qiw0QkFBK0M7UUFBdEU7WUFBdUIsOEJBQStDO1FBSXRFLENBQUM7UUFIVSwrQkFBWSxHQUFuQjtRQUVBLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FBQyxBQUpELENBQXVCLGlEQUF1QixHQUk3QztJQUVELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUUzQixJQUFJLEdBQVksQ0FBQztRQUNqQixJQUFJLHdCQUF1QyxDQUFDO1FBRTVDLGlCQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsaUJBQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUUzRCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7WUFDckQsSUFBSSxRQUFR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RSxDQUFDO1lBQ1gsQ0FBQyxDQUNKLENBQUM7UUFFTixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7QmFzZU5lREJSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuLi8uLi9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnlBc3luY1wiO1xyXG5pbXBvcnQge0Jhc2VLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0VudGl0eS9CYXNlS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi8uLi9ERERUb29scy9FbnRpdHkvSUVudGl0eVwiXHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdEtleSBleHRlbmRzIEd1aWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIlRlc3RLZXlcIjtcclxuICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0QWdncmVnYXRlIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG5cclxuICAgIHB1YmxpYyBhVGVzdFByb3BlcnR5OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIlRlc3RBZ2dyZWdhdGVcIjtcclxuICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRlc3RSZXBvIGV4dGVuZHMgQmFzZU5lREJSZXBvc2l0b3J5QXN5bmM8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4ge1xyXG4gICAgcHVibGljIHNldHVwSW5kZXhlcygpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmRlc2NyaWJlKFwiQmFzZU5lREJSZXBvc2l0b3J5XCIsICgpID0+IHtcclxuICAgIFxyXG4gICAgdmFyIGtleTogVGVzdEtleTsgLy8gbmVlZGVkIGJ5IHBlcnNpc3RlbmNlIHRlc3RzXHJcbiAgICB2YXIgcGVyc2lzdGVuY2VUZXN0QWdncmVnYXRlOiBUZXN0QWdncmVnYXRlO1xyXG4gICAgXHJcbiAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIlRlc3RLZXlcIiwgXCJ2MVwiLCBUZXN0S2V5KTtcclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiVGVzdEFnZ3JlZ2F0ZVwiLCBcInYxXCIsIFRlc3RBZ2dyZWdhdGUpO1xyXG5cclxuICAgIGl0KFwiU2hvdWxkIGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIHRoZSBOZURCIE9iamVjdC5cIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBuZWRiUmVwbyA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIik7XHJcbiAgICAgICAgZXhwZWN0KHRydWUpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiU2hvdWxkIGJlIHBvc3NpYmxlIHRvIGluc2VydCBhbmQgcmV0cmlldmUgYW4gaXRlbVwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgdGVzdEl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgIHZhciB0ZXN0S2V5ID0gbmV3IFRlc3RLZXkoKTtcclxuICAgICAgICB2YXIgdGVzdFJlcG8gPSBuZXcgVGVzdFJlcG8oXCJUZXN0QWdncmVnYXRlXCIpO1xyXG5cclxuICAgICAgICB0ZXN0SXRlbS5zZXRLZXkodGVzdEtleSk7XHJcblxyXG4gICAgICAgIHRlc3RSZXBvLnNhdmUodGVzdEl0ZW0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0ZXN0UmVwby5nZXRCeUlkKHRlc3RLZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmV0cmlldmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJldHJpZXZlZCkudG9FcXVhbCh0ZXN0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmVpbmcgRW50aXRpZXMgdGhlIGVxdWFscyBtZXRob2Qgc2hvdWxkIHJldHVybiB0cnVlIGlmIHdlIGFyZSB0YWxraW5nIGFib3V0IHRoZSBzYW1lIGVudGl0eS5cclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmV0cmlldmVkLmVxdWFscyh0ZXN0SXRlbSkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmV0cmlldmVkLnBlcmZlY3RseU1hdGNoKHRlc3RJdGVtKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgcmV0cmlldmluZyB0aGUgaXRlbS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJldHJpZXZpbmcgdGhlIGl0ZW0uXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIlJldmlzaW9uSWQgbXVzdCBiZSBpbmNyZW1lbnRlZCBvbmx5IGlmIG9iamVjdCB0byBiZSBzYXZlZCBkaWZmZXJzIGZyb20gb2JqZWN0IHNhdmVkXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIik7XHJcbiAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgIGUuc2V0S2V5KG5ldyBUZXN0S2V5KCkpO1xyXG4gICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDEpO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIi4uLiBhZnRlciBzYXZpbmdcIjtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJBIHJlcG9zaXRvcnkgYnVpbHQgd2l0aCBmaWxlbmFtZSBvcHRpb24gTVVTVCBiZSBwZXJzaXN0ZW50IC0gcGFydCAxIHNhdmluZ1wiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgIHZhciByZXBvMSA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIiwgeyBmaWxlbmFtZTogXCJUZXN0QWdncmVnYXRlXCIsIGF1dG9sb2FkOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBwZXJzaXN0ZW5jZVRlc3RBZ2dyZWdhdGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgIHBlcnNpc3RlbmNlVGVzdEFnZ3JlZ2F0ZS5hVGVzdFByb3BlcnR5ID0gXCJXb3cgdGhpcyBoYXMgYmVlbiBzYXZlZC5cIjtcclxuICAgICAgICBrZXkgPSBuZXcgVGVzdEtleSgpO1xyXG4gICAgICAgIHBlcnNpc3RlbmNlVGVzdEFnZ3JlZ2F0ZS5zZXRLZXkoa2V5KTtcclxuICAgICAgICBcclxuICAgICAgICByZXBvMS5zYXZlKHBlcnNpc3RlbmNlVGVzdEFnZ3JlZ2F0ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGVjdCh0cnVlKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJGaXJzdCBTYXZlIGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIkEgcmVwb3NpdG9yeSBidWlsdCB3aXRoIGZpbGVuYW1lIG9wdGlvbiBNVVNUIGJlIHBlcnNpc3RlbnQgLSBwYXJ0IDIgcmV0cmlldmluZ1wiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgIHZhciByZXBvMiA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIiwgeyBmaWxlbmFtZTogXCJUZXN0QWdncmVnYXRlXCIsIGF1dG9sb2FkOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICByZXBvMi5nZXRCeUlkKGtleSkudGhlbihcclxuICAgICAgICAgICAgKGRvYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGRvYy5wZXJmZWN0bHlNYXRjaChwZXJzaXN0ZW5jZVRlc3RBZ2dyZWdhdGUpKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiJdfQ==