var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/ValueObjects/Guid", "../../DDDTools/Aggregate/BaseAggregateRoot", "../../NeDBRepository/BaseNeDBRepositoryAsync", "../../DDDTools/PersistableObject/Factory", "../../NeDBRepository/NeDBDatabaseFactory"], function (require, exports, Guid_1, BaseAggregateRoot_1, BaseNeDBRepositoryAsync_1, Factory_1, NeDBDatabaseFactory_1) {
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
        var inMemoryDb = NeDBDatabaseFactory_1.NeDBDatabaseFactory.getAndRegisterInMemoryDb("TestAggregateInMemory");
        var persistentDb = NeDBDatabaseFactory_1.NeDBDatabaseFactory.getAndRegisterPersistentDb("TestAggregatePersistent");
        it("Should be possible to instantiate the NeDB Object.", function () {
            var nedbRepo = new TestRepo("TestAggregate", inMemoryDb);
            expect(true).toBeTruthy();
        });
        it("Should be possible to insert and retrieve an item", function (done) {
            var testItem = new TestAggregate();
            var testKey = new TestKey();
            var testRepo = new TestRepo("TestAggregate", inMemoryDb);
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
            var repo = new TestRepo("TestAggregate", inMemoryDb);
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
            var repo1 = new TestRepo("TestAggregate", persistentDb);
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
            var repo2 = new TestRepo("TestAggregate", persistentDb);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU5lREJSZXBvc2l0b3J5LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnktc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBV0E7UUFBNkIsMkJBQUk7UUFDN0I7WUFDSSxpQkFBTyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBTkQsQ0FBNkIsV0FBSSxHQU1oQztJQU5ZLGVBQU8sVUFNbkIsQ0FBQTtJQUVEO1FBQW1DLGlDQUF5QztRQUl4RTtZQUNJLGlCQUFPLENBQUM7WUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQUFDLEFBVEQsQ0FBbUMscUNBQWlCLEdBU25EO0lBVFkscUJBQWEsZ0JBU3pCLENBQUE7SUFFRDtRQUF1Qiw0QkFBK0M7UUFBdEU7WUFBdUIsOEJBQStDO1FBSXRFLENBQUM7UUFIVSwrQkFBWSxHQUFuQjtRQUVBLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FBQyxBQUpELENBQXVCLGlEQUF1QixHQUk3QztJQUVELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtRQUUzQixJQUFJLEdBQVksQ0FBQztRQUNqQixJQUFJLHdCQUF1QyxDQUFDO1FBRTVDLGlCQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsaUJBQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUUzRCxJQUFJLFVBQVUsR0FBRyx5Q0FBbUIsQ0FBQyx3QkFBd0IsQ0FB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QUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxFQUFFLENBQUM7WUFDWCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0d1aWR9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZFwiO1xyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtCYXNlTmVEQlJlcG9zaXRvcnlBc3luY30gZnJvbSBcIi4uLy4uL05lREJSZXBvc2l0b3J5L0Jhc2VOZURCUmVwb3NpdG9yeUFzeW5jXCI7XHJcbmltcG9ydCB7QmFzZUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRW50aXR5L0Jhc2VLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbmltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0VudGl0eS9JRW50aXR5XCI7XHJcbmltcG9ydCB7TmVEQkRhdGFiYXNlRmFjdG9yeX0gZnJvbSBcIi4uLy4uL05lREJSZXBvc2l0b3J5L05lREJEYXRhYmFzZUZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0S2V5IGV4dGVuZHMgR3VpZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiVGVzdEtleVwiO1xyXG4gICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcblxyXG4gICAgcHVibGljIGFUZXN0UHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVGVzdFJlcG8gZXh0ZW5kcyBCYXNlTmVEQlJlcG9zaXRvcnlBc3luYzxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICBwdWJsaWMgc2V0dXBJbmRleGVzKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZGVzY3JpYmUoXCJCYXNlTmVEQlJlcG9zaXRvcnlcIiwgKCkgPT4ge1xyXG4gICAgXHJcbiAgICB2YXIga2V5OiBUZXN0S2V5OyAvLyBuZWVkZWQgYnkgcGVyc2lzdGVuY2UgdGVzdHNcclxuICAgIHZhciBwZXJzaXN0ZW5jZVRlc3RBZ2dyZWdhdGU6IFRlc3RBZ2dyZWdhdGU7XHJcbiAgICBcclxuICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiVGVzdEtleVwiLCBcInYxXCIsIFRlc3RLZXkpO1xyXG4gICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJUZXN0QWdncmVnYXRlXCIsIFwidjFcIiwgVGVzdEFnZ3JlZ2F0ZSk7XHJcblxyXG4gICAgdmFyIGluTWVtb3J5RGIgPSBOZURCRGF0YWJhc2VGYWN0b3J5LmdldEFuZFJlZ2lzdGVySW5NZW1vcnlEYihcIlRlc3RBZ2dyZWdhdGVJbk1lbW9yeVwiKTtcclxuICAgIHZhciBwZXJzaXN0ZW50RGIgPSBOZURCRGF0YWJhc2VGYWN0b3J5LmdldEFuZFJlZ2lzdGVyUGVyc2lzdGVudERiKFwiVGVzdEFnZ3JlZ2F0ZVBlcnNpc3RlbnRcIik7XHJcbiAgICBcclxuICAgIGl0KFwiU2hvdWxkIGJlIHBvc3NpYmxlIHRvIGluc3RhbnRpYXRlIHRoZSBOZURCIE9iamVjdC5cIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBuZWRiUmVwbyA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIiwgaW5NZW1vcnlEYik7XHJcbiAgICAgICAgZXhwZWN0KHRydWUpLnRvQmVUcnV0aHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiU2hvdWxkIGJlIHBvc3NpYmxlIHRvIGluc2VydCBhbmQgcmV0cmlldmUgYW4gaXRlbVwiLCAoZG9uZSkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgdGVzdEl0ZW0gPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgIHZhciB0ZXN0S2V5ID0gbmV3IFRlc3RLZXkoKTtcclxuICAgICAgICB2YXIgdGVzdFJlcG8gPSBuZXcgVGVzdFJlcG8oXCJUZXN0QWdncmVnYXRlXCIsIGluTWVtb3J5RGIpO1xyXG5cclxuICAgICAgICB0ZXN0SXRlbS5zZXRLZXkodGVzdEtleSk7XHJcblxyXG4gICAgICAgIHRlc3RSZXBvLnNhdmUodGVzdEl0ZW0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0ZXN0UmVwby5nZXRCeUlkKHRlc3RLZXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmV0cmlldmVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHJldHJpZXZlZCkudG9FcXVhbCh0ZXN0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmVpbmcgRW50aXRpZXMgdGhlIGVxdWFscyBtZXRob2Qgc2hvdWxkIHJldHVybiB0cnVlIGlmIHdlIGFyZSB0YWxraW5nIGFib3V0IHRoZSBzYW1lIGVudGl0eS5cclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmV0cmlldmVkLmVxdWFscyh0ZXN0SXRlbSkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QocmV0cmlldmVkLnBlcmZlY3RseU1hdGNoKHRlc3RJdGVtKSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgcmV0cmlldmluZyB0aGUgaXRlbS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJldHJpZXZpbmcgdGhlIGl0ZW0uXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIlJldmlzaW9uSWQgbXVzdCBiZSBpbmNyZW1lbnRlZCBvbmx5IGlmIG9iamVjdCB0byBiZSBzYXZlZCBkaWZmZXJzIGZyb20gb2JqZWN0IHNhdmVkXCIsIChkb25lKSA9PiB7XHJcbiAgICAgICAgLy8gcGVuZGluZyhcIk5lZWQgdG8gcmVmYWN0b3IgSVBFcnNpc3RhYmxlIHRvIGFkZCBmdW5jdGlvbnMgZm9yIFN0YXRlIENvbXBhcmlzb24uXCIpO1xyXG5cclxuICAgICAgICB2YXIgcmVwbyA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIiwgaW5NZW1vcnlEYik7XHJcbiAgICAgICAgdmFyIGUgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgIGUuc2V0S2V5KG5ldyBUZXN0S2V5KCkpO1xyXG4gICAgICAgIGUuYVRlc3RQcm9wZXJ0eSA9IFwiQmVmb3JlIHNhdmluZy4uLlwiO1xyXG5cclxuICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMCk7XHJcblxyXG4gICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KGUuZ2V0UmV2aXNpb25JZCgpKS50b0VxdWFsKDEpO1xyXG4gICAgICAgICAgICByZXBvLnNhdmUoZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgICAgICBlLmFUZXN0UHJvcGVydHkgPSBcIi4uLiBhZnRlciBzYXZpbmdcIjtcclxuICAgICAgICAgICAgICAgIHJlcG8uc2F2ZShlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QoZS5nZXRSZXZpc2lvbklkKCkpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJBIHJlcG9zaXRvcnkgYnVpbHQgd2l0aCBmaWxlbmFtZSBvcHRpb24gTVVTVCBiZSBwZXJzaXN0ZW50IC0gcGFydCAxIHNhdmluZ1wiLCAoZG9uZSkgPT4ge1xyXG4gICAgICAgIHZhciByZXBvMSA9IG5ldyBUZXN0UmVwbyhcIlRlc3RBZ2dyZWdhdGVcIiwgcGVyc2lzdGVudERiKTtcclxuXHJcbiAgICAgICAgcGVyc2lzdGVuY2VUZXN0QWdncmVnYXRlID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICBwZXJzaXN0ZW5jZVRlc3RBZ2dyZWdhdGUuYVRlc3RQcm9wZXJ0eSA9IFwiV293IHRoaXMgaGFzIGJlZW4gc2F2ZWQuXCI7XHJcbiAgICAgICAga2V5ID0gbmV3IFRlc3RLZXkoKTtcclxuICAgICAgICBwZXJzaXN0ZW5jZVRlc3RBZ2dyZWdhdGUuc2V0S2V5KGtleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVwbzEuc2F2ZShwZXJzaXN0ZW5jZVRlc3RBZ2dyZWdhdGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QodHJ1ZSkudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiRmlyc3QgU2F2ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJBIHJlcG9zaXRvcnkgYnVpbHQgd2l0aCBmaWxlbmFtZSBvcHRpb24gTVVTVCBiZSBwZXJzaXN0ZW50IC0gcGFydCAyIHJldHJpZXZpbmdcIiwgKGRvbmUpID0+IHtcclxuICAgICAgICB2YXIgcmVwbzIgPSBuZXcgVGVzdFJlcG8oXCJUZXN0QWdncmVnYXRlXCIsIHBlcnNpc3RlbnREYik7XHJcblxyXG4gICAgICAgIHJlcG8yLmdldEJ5SWQoa2V5KS50aGVuKFxyXG4gICAgICAgICAgICAoZG9jKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZG9jLnBlcmZlY3RseU1hdGNoKHBlcnNpc3RlbmNlVGVzdEFnZ3JlZ2F0ZSkpLnRvQmVUcnV0aHkoKTtcclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTsgICAgICAgICBcclxuICAgIH0pO1xyXG59KTtcclxuIl19