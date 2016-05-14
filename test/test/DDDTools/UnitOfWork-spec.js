var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/Repository/BaseInMemoryRepository", "../../DDDTools/Aggregate/BaseAggregateRoot", "../../DDDTools/ValueObjects/Guid", "../../DDDTools/UnitOfWork/UnitOfWork", "../../DDDTools/UnitOfWork/Events", "../../DDDTools/UnitOfWork/UnitOfWorkErrors", "../../DDDTools/Repository/Errors", "../../DDDTools/PersistableObject/Factory"], function (require, exports, BaseInMemoryRepository_1, BaseAggregateRoot_1, Guid_1, UnitOfWork_1, Events_1, UnitOfWorkErrors_1, Errors_1, Factory_1) {
    "use strict";
    var CdC;
    (function (CdC) {
        var Tests;
        (function (Tests) {
            var ForUnitOfWork;
            (function (ForUnitOfWork) {
                var TestKey = (function (_super) {
                    __extends(TestKey, _super);
                    function TestKey() {
                        _super.call(this);
                        this.__typeName = "CdC.Tests.UnitOfWork.TestKey";
                        this.__typeVersion = "v1";
                    }
                    return TestKey;
                }(Guid_1.Guid));
                ForUnitOfWork.TestKey = TestKey;
                var TestAggregate = (function (_super) {
                    __extends(TestAggregate, _super);
                    function TestAggregate() {
                        _super.call(this);
                        this.aTestProperty = "Ciao";
                        this.__typeName = "CdC.Tests.UnitOfWork.TestAggregate";
                        this.__typeVersion = "v1";
                    }
                    TestAggregate.prototype.setATestProperty = function (value) {
                        this.aTestProperty = value;
                    };
                    TestAggregate.prototype.getATestProperty = function () {
                        return this.aTestProperty;
                    };
                    return TestAggregate;
                }(BaseAggregateRoot_1.BaseAggregateRoot));
                ForUnitOfWork.TestAggregate = TestAggregate;
                var TestRepository = (function (_super) {
                    __extends(TestRepository, _super);
                    function TestRepository() {
                        _super.apply(this, arguments);
                    }
                    return TestRepository;
                }(BaseInMemoryRepository_1.BaseInMemoryRepository));
                ForUnitOfWork.TestRepository = TestRepository;
                var TestUoW = (function (_super) {
                    __extends(TestUoW, _super);
                    function TestUoW(repo) {
                        _super.call(this, repo);
                    }
                    return TestUoW;
                }(UnitOfWork_1.UnitOfWork));
                ForUnitOfWork.TestUoW = TestUoW;
                describe("UnitOfWork", function () {
                    var repo;
                    var keys;
                    var aggregates;
                    var numberOfAggregates = 10;
                    var uow;
                    var initKeys = function () {
                        keys = [];
                        for (var i = 0; i < numberOfAggregates; i++) {
                            keys.push(Guid_1.Guid.generate());
                        }
                    };
                    var initAggregates = function (keys) {
                        aggregates = [];
                        for (var i = 0; i < numberOfAggregates; i++) {
                            var aggr = new TestAggregate();
                            aggr.setKey(keys[i]);
                            aggregates.push(aggr);
                        }
                    };
                    var fillRepo = function (repo) {
                        for (var i = 0; i < numberOfAggregates; i++) {
                            repo.save(aggregates[i]);
                        }
                    };
                    beforeEach(function () {
                        Factory_1.Factory.registerType("CdC.Tests.UnitOfWork.TestAggregate", "v1", TestAggregate);
                        repo = new TestRepository("CdC.Tests.UnitOfWork.TestAggregate");
                        initKeys();
                        initAggregates(keys);
                        fillRepo(repo);
                        uow = new TestUoW(repo);
                    });
                    it("It must be possible to instantiate a UnitOfWork for a Repository.", function () {
                        expect(uow instanceof TestUoW).toBeTruthy();
                    });
                    it("It must be possible to get an item as if it came directly from the repo.", function () {
                        var fromUoW = uow.getById(keys[0]);
                        var fromRepo = repo.getById(keys[0]);
                        var uowAsString = JSON.stringify(fromUoW);
                        var repoAsString = JSON.stringify(fromRepo);
                        expect(uowAsString).toEqual(uowAsString);
                    });
                    it("When retrieving objects, events of type ObjectRetrieveEvent must be raised.", function () {
                        var counter = 0;
                        uow.registerHandler(Events_1.Events.ObjectRetrievedEvent, function () {
                            counter++;
                        });
                        var fromUoW0 = uow.getById(keys[0]);
                        var fromUoW1 = uow.getById(keys[1]);
                        expect(counter).toEqual(2);
                    });
                    it("After calling saveAll all Modified objects must be saved into the repository", function () {
                        var fromUoW0 = uow.getById(keys[0]);
                        var fromUoW1 = uow.getById(keys[1]);
                        var counter = 0;
                        fromUoW0.setATestProperty("Brutto!");
                        fromUoW1.setATestProperty("BBello");
                        uow.registerHandler(Events_1.Events.ObjectSavedEvent, function (event) {
                            counter++;
                        });
                        uow.saveAll();
                        expect(counter).toEqual(2, "The UoW has not saved exactly 2 object.");
                        var fromRepo0 = repo.getById(keys[0]);
                        var fromRepo1 = repo.getById(keys[1]);
                        expect(fromRepo0.getATestProperty()).toEqual("Brutto!");
                        expect(fromRepo1.getATestProperty()).toEqual("BBello");
                    });
                    it("UnitOfWork must save only effectively changed objects.", function () {
                        var fromUoW0 = uow.getById(keys[0]);
                        var fromUoW1 = uow.getById(keys[1]);
                        var counter = 0;
                        fromUoW1.setATestProperty("BBello");
                        uow.registerHandler(Events_1.Events.ObjectSavedEvent, function (event) {
                            counter++;
                            expect(event.id).toEqual(keys[1].toString());
                        });
                        uow.saveAll();
                        expect(counter).toEqual(1, "The UoW has not saved exactly 1 object.");
                    });
                    it("UnitOfWork must delete completely an object only after calling saveAll.", function () {
                        var fromUoW0 = uow.getById(keys[0]);
                        var fromUoW1 = uow.getById(keys[1]);
                        var counter = 0;
                        uow.registerHandler(Events_1.Events.ObjectDeletedEvent, function (event) {
                            counter++;
                        });
                        uow.deleteById(keys[0]);
                        uow.deleteById(keys[1]);
                        expect(counter).toEqual(0, "Handler triggered before saveAll was called!");
                        var fromRepo0 = repo.getById(keys[0]);
                        var fromRepo1 = repo.getById(keys[1]);
                        expect(fromRepo0).not.toBeNull("Element 0 deleted before saveAll");
                        expect(fromRepo1).not.toBeNull("Element 1 deleted before saveAll");
                        uow.saveAll();
                        expect(counter).toEqual(2, "The UoW has not deleted exactly 2 object.");
                        try {
                            var fromRepo0 = repo.getById(keys[0]);
                            expect(false).toBeTruthy("Item 0 should be no more in the repository");
                        }
                        catch (e) {
                        }
                        try {
                            var fromRepo1 = repo.getById(keys[1]);
                            expect(false).toBeTruthy("Item 1 should be no more in the repository");
                        }
                        catch (e) {
                        }
                    });
                    it("A deleted item must not be 'retrievable' from the UnitOfWork, even if saveAll was not called", function () {
                        var fromUoW = uow.getById(keys[0]);
                        uow.deleteById(keys[0]);
                        try {
                            fromUoW = uow.getById(keys[0]);
                            expect(false).toBeTruthy("The element has been marked as deleted, but it is still returned by the UoW.");
                        }
                        catch (e) {
                            expect(e instanceof Error).toBeTruthy();
                            expect(e.name).toEqual(UnitOfWorkErrors_1.UnitOfWorkErrors.ItemMarkedAsDeleted);
                        }
                        uow.saveAll();
                        try {
                            fromUoW = uow.getById(keys[0]);
                            expect(false).toBeTruthy("The element has been marked as deleted and deleted, but it is still returned by the UoW.");
                        }
                        catch (e) {
                            expect(e instanceof Error).toBeTruthy();
                            expect(e.name).toEqual(Errors_1.Errors.ItemNotFound);
                        }
                    });
                });
            })(ForUnitOfWork = Tests.ForUnitOfWork || (Tests.ForUnitOfWork = {}));
        })(Tests = CdC.Tests || (CdC.Tests = {}));
    })(CdC || (CdC = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pdE9mV29yay1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvREREVG9vbHMvVW5pdE9mV29yay1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFrQkEsSUFBVSxHQUFHLENBOE5aO0lBOU5ELFdBQVUsR0FBRztRQUFDLElBQUEsS0FBSyxDQThObEI7UUE5TmEsV0FBQSxLQUFLO1lBQUMsSUFBQSxhQUFhLENBOE5oQztZQTlObUIsV0FBQSxhQUFhLEVBQUMsQ0FBQztnQkFFL0I7b0JBQTZCLDJCQUFJO29CQUM3Qjt3QkFDSSxpQkFBTyxDQUFDO3dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsOEJBQThCLENBQUM7d0JBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUM5QixDQUFDO29CQUNMLGNBQUM7Z0JBQUQsQ0FBQyxBQU5ELENBQTZCLFdBQUksR0FNaEM7Z0JBTlkscUJBQU8sVUFNbkIsQ0FBQTtnQkFFRDtvQkFBbUMsaUNBQXlDO29CQUN4RTt3QkFDSSxpQkFBTyxDQUFDO3dCQUtKLGtCQUFhLEdBQVcsTUFBTSxDQUFDO3dCQUpuQyxJQUFJLENBQUMsVUFBVSxHQUFHLG9DQUFvQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDOUIsQ0FBQztvQkFJTSx3Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBYTt3QkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBRU0sd0NBQWdCLEdBQXZCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUM5QixDQUFDO29CQUNMLG9CQUFDO2dCQUFELENBQUMsQUFoQkQsQ0FBbUMscUNBQWlCLEdBZ0JuRDtnQkFoQlksMkJBQWEsZ0JBZ0J6QixDQUFBO2dCQUVEO29CQUFvQyxrQ0FBOEM7b0JBQWxGO3dCQUFvQyw4QkFBOEM7b0JBRWxGLENB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QUFDLG1CQUFtQixDQUFDLENBQUM7d0JBQ2pFLENBQUM7d0JBRUQsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUdkLElBQUksQ0FBQzs0QkFDRCxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQywwRkFBMEYsQ0FBQyxDQUFDO3dCQUN6SCxDQUFFO3dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1QsTUFBTSxDQUFDLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs0QkFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUNoRCxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQTlObUIsYUFBYSxHQUFiLG1CQUFhLEtBQWIsbUJBQWEsUUE4TmhDO1FBQUQsQ0FBQyxFQTlOYSxLQUFLLEdBQUwsU0FBSyxLQUFMLFNBQUssUUE4TmxCO0lBQUQsQ0FBQyxFQTlOUyxHQUFHLEtBQUgsR0FBRyxRQThOWiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7QmFzZUluTWVtb3J5UmVwb3NpdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZUluTWVtb3J5UmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuaW1wb3J0IHtVbml0T2ZXb3JrfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrXCI7XHJcbmltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge09iamVjdFNhdmVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3REZWxldGVkRXZlbnR9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdERlbGV0ZWRFdmVudFwiO1xyXG5pbXBvcnQge09iamVjdFJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvRXZlbnRzXCI7XHJcbmltcG9ydCB7VW5pdE9mV29ya0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9yc1wiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yVW5pdE9mV29yayB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RLZXkgZXh0ZW5kcyBHdWlkIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0S2V5XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RBZ2dyZWdhdGUgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlTmFtZSA9IFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGFUZXN0UHJvcGVydHk6IHN0cmluZyA9IFwiQ2lhb1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc2V0QVRlc3RQcm9wZXJ0eSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYVRlc3RQcm9wZXJ0eSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEFUZXN0UHJvcGVydHkoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYVRlc3RQcm9wZXJ0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZUluTWVtb3J5UmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0VW9XIGV4dGVuZHMgVW5pdE9mV29yazxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocmVwbzogSVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4pIHtcclxuICAgICAgICAgICAgc3VwZXIocmVwbyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZXNjcmliZShcIlVuaXRPZldvcmtcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgcmVwbzogVGVzdFJlcG9zaXRvcnk7XHJcbiAgICAgICAgdmFyIGtleXM6IFRlc3RLZXlbXTtcclxuICAgICAgICB2YXIgYWdncmVnYXRlczogVGVzdEFnZ3JlZ2F0ZVtdO1xyXG4gICAgICAgIHZhciBudW1iZXJPZkFnZ3JlZ2F0ZXM6IG51bWJlciA9IDEwO1xyXG4gICAgICAgIHZhciB1b3c6IFRlc3RVb1c7XHJcblxyXG4gICAgICAgIHZhciBpbml0S2V5cyA9ICgpID0+IHtcclxuICAgICAgICAgICAga2V5cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goR3VpZC5nZW5lcmF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGluaXRBZ2dyZWdhdGVzID0gKGtleXM6IFRlc3RLZXlbXSkgPT4ge1xyXG4gICAgICAgICAgICBhZ2dyZWdhdGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBhZ2dyID0gbmV3IFRlc3RBZ2dyZWdhdGUoKTtcclxuICAgICAgICAgICAgICAgIGFnZ3Iuc2V0S2V5KGtleXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgYWdncmVnYXRlcy5wdXNoKGFnZ3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZmlsbFJlcG8gPSAocmVwbzogSVJlcG9zaXRvcnk8VGVzdEFnZ3JlZ2F0ZSwgVGVzdEtleT4pID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVwby5zYXZlKGFnZ3JlZ2F0ZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiLCBcInYxXCIsIDxhbnk+VGVzdEFnZ3JlZ2F0ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiKTtcclxuICAgICAgICAgICAgaW5pdEtleXMoKTtcclxuICAgICAgICAgICAgaW5pdEFnZ3JlZ2F0ZXMoa2V5cyk7XHJcbiAgICAgICAgICAgIGZpbGxSZXBvKHJlcG8pO1xyXG5cclxuICAgICAgICAgICAgdW93ID0gbmV3IFRlc3RVb1cocmVwbyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIFVuaXRPZldvcmsgZm9yIGEgUmVwb3NpdG9yeS5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QodW93IGluc3RhbmNlb2YgVGVzdFVvVykudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gZ2V0IGFuIGl0ZW0gYXMgaWYgaXQgY2FtZSBkaXJlY3RseSBmcm9tIHRoZSByZXBvLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbyA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1b3dBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGZyb21Vb1cpO1xyXG4gICAgICAgICAgICB2YXIgcmVwb0FzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZnJvbVJlcG8pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHVvd0FzU3RyaW5nKS50b0VxdWFsKHVvd0FzU3RyaW5nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJXaGVuIHJldHJpZXZpbmcgb2JqZWN0cywgZXZlbnRzIG9mIHR5cGUgT2JqZWN0UmV0cmlldmVFdmVudCBtdXN0IGJlIHJhaXNlZC5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RSZXRyaWV2ZWRFdmVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBZnRlciBjYWxsaW5nIHNhdmVBbGwgYWxsIE1vZGlmaWVkIG9iamVjdHMgbXVzdCBiZSBzYXZlZCBpbnRvIHRoZSByZXBvc2l0b3J5XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZnJvbVVvVzAuc2V0QVRlc3RQcm9wZXJ0eShcIkJydXR0byFcIik7XHJcbiAgICAgICAgICAgIGZyb21Vb1cxLnNldEFUZXN0UHJvcGVydHkoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdFNhdmVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMiwgXCJUaGUgVW9XIGhhcyBub3Qgc2F2ZWQgZXhhY3RseSAyIG9iamVjdC5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8wID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMC5nZXRBVGVzdFByb3BlcnR5KCkpLnRvRXF1YWwoXCJCcnV0dG8hXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8xLmdldEFUZXN0UHJvcGVydHkoKSkudG9FcXVhbChcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVW5pdE9mV29yayBtdXN0IHNhdmUgb25seSBlZmZlY3RpdmVseSBjaGFuZ2VkIG9iamVjdHMuXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvYWRpbmcgMiBvYmplY3RzIGZyb20gdGhlIFVvVyAuLi5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyAuLi4gYnV0IGVkaXRpbmcgb25seSBvbmUuLi5cclxuICAgICAgICAgICAgZnJvbVVvVzEuc2V0QVRlc3RQcm9wZXJ0eShcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vLyAuLi4gd2UgZXhwZWN0IHRvIGdldCBvbmx5IDEgbm90aWZpY2F0aW9uIGZyb20gdGhlIFVvV1xyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdFNhdmVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIGV4cGVjdChldmVudC5pZCkudG9FcXVhbChrZXlzWzFdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxLCBcIlRoZSBVb1cgaGFzIG5vdCBzYXZlZCBleGFjdGx5IDEgb2JqZWN0LlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJVbml0T2ZXb3JrIG11c3QgZGVsZXRlIGNvbXBsZXRlbHkgYW4gb2JqZWN0IG9ubHkgYWZ0ZXIgY2FsbGluZyBzYXZlQWxsLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudCwgKGV2ZW50OiBPYmplY3REZWxldGVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwLCBcIkhhbmRsZXIgdHJpZ2dlcmVkIGJlZm9yZSBzYXZlQWxsIHdhcyBjYWxsZWQhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlIGRvIGV4cGVjdCB0byBzdGlsbCBmaW5kcyB0aGUgZGVsZXRlZCBpdGVtcyBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMCkubm90LnRvQmVOdWxsKFwiRWxlbWVudCAwIGRlbGV0ZWQgYmVmb3JlIHNhdmVBbGxcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzEpLm5vdC50b0JlTnVsbChcIkVsZW1lbnQgMSBkZWxldGVkIGJlZm9yZSBzYXZlQWxsXCIpO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIsIFwiVGhlIFVvVyBoYXMgbm90IGRlbGV0ZWQgZXhhY3RseSAyIG9iamVjdC5cIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkl0ZW0gMCBzaG91bGQgYmUgbm8gbW9yZSBpbiB0aGUgcmVwb3NpdG9yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgYXMgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSBub21vcmUgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiSXRlbSAxIHNob3VsZCBiZSBubyBtb3JlIGluIHRoZSByZXBvc2l0b3J5XCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBhcyB0aGUgaXRlbSBzaG91bGQgbm90IGJlIG5vbW9yZSBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkEgZGVsZXRlZCBpdGVtIG11c3Qgbm90IGJlICdyZXRyaWV2YWJsZScgZnJvbSB0aGUgVW5pdE9mV29yaywgZXZlbiBpZiBzYXZlQWxsIHdhcyBub3QgY2FsbGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQmVmb3JlIHRoZSBzYXZlQWxsIHdlIGV4cGVjdCB0byBnZXQgYW4gRXhjZXB0aW9uIGZyb20gdGhlIFVuaXRPZldvcmsgLi4uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGUgZWxlbWVudCBoYXMgYmVlbiBtYXJrZWQgYXMgZGVsZXRlZCwgYnV0IGl0IGlzIHN0aWxsIHJldHVybmVkIGJ5IHRoZSBVb1cuXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZSBpbnN0YW5jZW9mIEVycm9yKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKFVuaXRPZldvcmtFcnJvcnMuSXRlbU1hcmtlZEFzRGVsZXRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAuLi4gd2hpbGUgYWZ0ZXIgdGhlIHNhdmVBbGwgd2UgZXhwZWN0IHRvIGdldCBhbiBFeGNlcHRpb24gZnJvbSB0aGUgdW5kZXJseWluZyBSZXBvc2l0b3J5IC4uLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlIGVsZW1lbnQgaGFzIGJlZW4gbWFya2VkIGFzIGRlbGV0ZWQgYW5kIGRlbGV0ZWQsIGJ1dCBpdCBpcyBzdGlsbCByZXR1cm5lZCBieSB0aGUgVW9XLlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUgaW5zdGFuY2VvZiBFcnJvcikudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=