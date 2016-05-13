var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/Repository/BaseInMemoryRepository", "../../DDDTools/Aggregate/BaseAggregateRoot", "../../DDDTools/ValueObjects/Guid", "../../DDDTools/UnitOfWork/UnitOfWork", "../../DDDTools/UnitOfWork/Events", "../../DDDTools/UnitOfWork/UnitOfWorkErrors", "../../DDDTools/Repository/Errors"], function (require, exports, BaseInMemoryRepository_1, BaseAggregateRoot_1, Guid_1, UnitOfWork_1, Events_1, UnitOfWorkErrors_1, Errors_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pdE9mV29yay1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvREREVG9vbHMvVW5pdE9mV29yay1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFpQkEsSUFBVSxHQUFHLENBMk5aO0lBM05ELFdBQVUsR0FBRztRQUFDLElBQUEsS0FBSyxDQTJObEI7UUEzTmEsV0FBQSxLQUFLO1lBQUMsSUFBQSxhQUFhLENBMk5oQztZQTNObUIsV0FBQSxhQUFhLEVBQUMsQ0FBQztnQkFFL0I7b0JBQTZCLDJCQUFJO29CQUM3Qjt3QkFDSSxpQkFBTyxDQUFDO3dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsOEJBQThCLENBQUM7d0JBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUM5QixDQUFDO29CQUNMLGNBQUM7Z0JBQUQsQ0FBQyxBQU5ELENBQTZCLFdBQUksR0FNaEM7Z0JBTlkscUJBQU8sVUFNbkIsQ0FBQTtnQkFFRDtvQkFBbUMsaUNBQXlDO29CQUN4RTt3QkFDSSxpQkFBTyxDQUFDO3dCQUtKLGtCQUFhLEdBQVcsTUFBTSxDQUFDO3dCQUpuQyxJQUFJLENBQUMsVUFBVSxHQUFHLG9DQUFvQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztvQkFDOUIsQ0FBQztvQkFJTSx3Q0FBZ0IsR0FBdkIsVUFBd0IsS0FBYTt3QkFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBRU0sd0NBQWdCLEdBQXZCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUM5QixDQUFDO29CQUNMLG9CQUFDO2dCQUFELENBQUMsQUFoQkQsQ0FBbUMscUNBQWlCLEdBZ0JuRDtnQkFoQlksMkJBQWEsZ0JBZ0J6QixDQUFBO2dCQUVEO29CQUFvQyxrQ0FBOEM7b0JBQWxGO3dCQUFvQyw4QkFBOEM7b0JBRWxGLENBQUM7b0JBQUQscUJBQUM7Z0JBQUQsQ0FBQyxBQUZELENBQW9DLCtDQUFzQixHQUV6RDtnQkFGWSw0QkFBYyxpQkFFMUIsQ0FBQTtnQkFFRDtvQkFBNkIsMkJBQWtDO29CQUMzRCxpQkFBWSxJQUF5Qzt3QkFDakQsa0JBQU0sSUFBSSxDQUFDLENBQUM7b0JBQ2hCLENBQUM7b0JBQ0wsY0FBQztnQkFBRCxDQUFDLEFBSkQsQ0FBNkIsdUJBQVUsR0FJdEM7Z0JBSlkscUJBQU8sVUFJbkIsQ0FBQTtnQkFHRCxRQUFRLENBQUMsWUFBWSxFQUFFO29CQUVuQixJQUFJLElBQW9CLENBQUM7b0JBQ3pCLElBQUksSUFBZSxDQUFDO29CQUNwQixJQUFJLFVBQTJCLENBQUM7b0JBQ2hDLElBQUksa0JBQWtCLEdBQVcsRUFBRSxDQUFDO29CQUNwQyxJQUFJLEdBQVksQ0FBQztvQkFFakIsSUFBSSxRQUFRLEdBQUc7d0JBQ1gsSUFBSSxHQUFHLEVBQUUsQ0FBQzt3QkFDVixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7d0JBQy9CLENBQUM7b0JBQ0wsQ0FBQyxDQUFBO29CQUVELElBQUksY0FBYyxHQUFHLFVBQUMsSUFBZTt3QkFDakMsVUFBVSxHQUFHLEVBQUUsQ0FBQzt3QkFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDOzRCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQixDQUFDO29CQUNMLENBQUMsQ0FBQTtvQkFFRCxJQUFJLFFBQVEsR0FBRyxVQUFDLElBQXlDO3dCQUNyRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLENBQUM7b0JBQ0wsQ0FBQyxDQUFBO29CQUVELFVBQVUsQ0FBQzt3QkFDUCxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQUMsb0NBQW9DLENBQUMsQ0FBQzt3QkFDaEUsUUFBUSxFQUFFLENBQUM7d0JBQ1gsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBRWYsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztvQkFFSCxFQUFFLENBQUMsbUVBQW1FLEVBQUU7d0JBQ3BFLE1BQU0sQ0FBQyxHQUFHLFlBQVksT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDO29CQUVILEVBQUUsQ0FBQywwRUFBMEUsRUFBRTt3QkFDM0UsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFckMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFFNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLENBQUM7b0JBRUgsRUFBRSxDQUFDLDZFQUE2RSxFQUFFO3dCQUM5RSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBRWhCLEdBQUcsQ0FBQyxlQUFlLENBQUMsZUFBTSxDQUFDLG9CQUFvQixFQUFFOzRCQUM3QyxPQUFPLEVBQUUsQ0FBQzt3QkFDZCxDQUFDLENBQUMsQ0FBQzt3QkFFSCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVwQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVwQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsQ0FBQztvQkFFSCxFQUFFLENBQUMsOEVBQThFLEVBQUU7d0JBRS9FLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFFaEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNyQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBRXBDLEdBQUcsQ0FBQyxlQUFlLENBQUMsZUFBTSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsS0FBdUI7NEJBQ2pFLE9BQU8sRUFBRSxDQUFDO3dCQUNkLENBQUMsQ0FBQyxDQUFDO3dCQUVILEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFFZCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO3dCQUV0RSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUV0QyxNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3hELE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFM0QsQ0FBQyxDQUFDLENBQUM7b0JBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFO3dCQUd6RCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBR2hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFHcEMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUF1Qjs0QkFDakUsT0FBTyxFQUFFLENBQUM7NEJBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7d0JBQ2pELENBQUMsQ0FBQyxDQUFDO3dCQUVILEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFFZCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO29CQUMxRSxDQUFDLENBQUMsQ0FBQztvQkFFSCxFQUFFLENBQUMseUVBQXlFLEVBQUU7d0JBRTFFLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQzt3QkFFaEIsR0FBRyxDQUFDLGVBQWUsQ0FBQyxlQUFNLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUF5Qjs0QkFDckUsT0FBTyxFQUFFLENBQUM7d0JBQ2QsQ0FBQyxDQUFDLENBQUM7d0JBRUgsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsOENBQThDLENBQUMsQ0FBQzt3QkFFM0UsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFHdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsa0NBQWtDLENBQUMsQ0FBQzt3QkFDbkUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsa0NBQWtDLENBQUMsQ0FBQzt3QkFFbkUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUVkLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7d0JBRXhFLElBQUksQ0FBQzs0QkFDRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7d0JBQzNFLENBQUU7d0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFYixDQUFDO3dCQUVELElBQUksQ0FBQzs0QkFDRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7d0JBQzNFLENBQUU7d0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFYixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUVILEVBQUUsQ0FBQyw4RkFBOEYsRUFBRTt3QkFDL0YsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFbkMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFHeEIsSUFBSSxDQUFDOzRCQUNELE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLDhFQUE4RSxDQUFDLENBQUM7d0JBQzdHLENBQUU7d0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDVCxNQUFNLENBQUMsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDOzRCQUN4QyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQ0FBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqRSxDQUFDO3dCQUVELEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFHZCxJQUFJLENBQUM7NEJBQ0QsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsMEZBQTBGLENBQUMsQ0FBQzt3QkFDekgsQ0FBRTt3QkFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNULE1BQU0sQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7NEJBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUEzTm1CLGFBQWEsR0FBYixtQkFBYSxLQUFiLG1CQUFhLFFBMk5oQztRQUFELENBQUMsRUEzTmEsS0FBSyxHQUFMLFNBQUssS0FBTCxTQUFLLFFBMk5sQjtJQUFELENBQUMsRUEzTlMsR0FBRyxLQUFILEdBQUcsUUEyTloiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnl9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7R3VpZH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcbmltcG9ydCB7VW5pdE9mV29ya30gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya1wiO1xyXG5pbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtPYmplY3RTYXZlZEV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50XCI7XHJcbmltcG9ydCB7T2JqZWN0RGVsZXRlZEV2ZW50fSBmcm9tIFwiLi4vLi4vREREVG9vbHMvVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3RSZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50c1wiO1xyXG5pbXBvcnQge1VuaXRPZldvcmtFcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtFcnJvcnNcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuLi8uLi9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIENkQy5UZXN0cy5Gb3JVbml0T2ZXb3JrIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEtleSBleHRlbmRzIEd1aWQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5Vbml0T2ZXb3JrLlRlc3RLZXlcIjtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdEFnZ3JlZ2F0ZSBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fX3R5cGVOYW1lID0gXCJDZEMuVGVzdHMuVW5pdE9mV29yay5UZXN0QWdncmVnYXRlXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYVRlc3RQcm9wZXJ0eTogc3RyaW5nID0gXCJDaWFvXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRBVGVzdFByb3BlcnR5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5hVGVzdFByb3BlcnR5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QVRlc3RQcm9wZXJ0eSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hVGVzdFByb3BlcnR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdFJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlSW5NZW1vcnlSZXBvc2l0b3J5PFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlc3RVb1cgZXh0ZW5kcyBVbml0T2ZXb3JrPFRlc3RBZ2dyZWdhdGUsIFRlc3RLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihyZXBvOiBJUmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5Pikge1xyXG4gICAgICAgICAgICBzdXBlcihyZXBvKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlc2NyaWJlKFwiVW5pdE9mV29ya1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciByZXBvOiBUZXN0UmVwb3NpdG9yeTtcclxuICAgICAgICB2YXIga2V5czogVGVzdEtleVtdO1xyXG4gICAgICAgIHZhciBhZ2dyZWdhdGVzOiBUZXN0QWdncmVnYXRlW107XHJcbiAgICAgICAgdmFyIG51bWJlck9mQWdncmVnYXRlczogbnVtYmVyID0gMTA7XHJcbiAgICAgICAgdmFyIHVvdzogVGVzdFVvVztcclxuXHJcbiAgICAgICAgdmFyIGluaXRLZXlzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBrZXlzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZBZ2dyZWdhdGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGtleXMucHVzaChHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaW5pdEFnZ3JlZ2F0ZXMgPSAoa2V5czogVGVzdEtleVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZkFnZ3JlZ2F0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFnZ3IgPSBuZXcgVGVzdEFnZ3JlZ2F0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYWdnci5zZXRLZXkoa2V5c1tpXSk7XHJcbiAgICAgICAgICAgICAgICBhZ2dyZWdhdGVzLnB1c2goYWdncik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmaWxsUmVwbyA9IChyZXBvOiBJUmVwb3NpdG9yeTxUZXN0QWdncmVnYXRlLCBUZXN0S2V5PikgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mQWdncmVnYXRlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXBvLnNhdmUoYWdncmVnYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICByZXBvID0gbmV3IFRlc3RSZXBvc2l0b3J5KFwiQ2RDLlRlc3RzLlVuaXRPZldvcmsuVGVzdEFnZ3JlZ2F0ZVwiKTtcclxuICAgICAgICAgICAgaW5pdEtleXMoKTtcclxuICAgICAgICAgICAgaW5pdEFnZ3JlZ2F0ZXMoa2V5cyk7XHJcbiAgICAgICAgICAgIGZpbGxSZXBvKHJlcG8pO1xyXG5cclxuICAgICAgICAgICAgdW93ID0gbmV3IFRlc3RVb1cocmVwbyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiSXQgbXVzdCBiZSBwb3NzaWJsZSB0byBpbnN0YW50aWF0ZSBhIFVuaXRPZldvcmsgZm9yIGEgUmVwb3NpdG9yeS5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QodW93IGluc3RhbmNlb2YgVGVzdFVvVykudG9CZVRydXRoeSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkl0IG11c3QgYmUgcG9zc2libGUgdG8gZ2V0IGFuIGl0ZW0gYXMgaWYgaXQgY2FtZSBkaXJlY3RseSBmcm9tIHRoZSByZXBvLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tUmVwbyA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB1b3dBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGZyb21Vb1cpO1xyXG4gICAgICAgICAgICB2YXIgcmVwb0FzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZnJvbVJlcG8pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KHVvd0FzU3RyaW5nKS50b0VxdWFsKHVvd0FzU3RyaW5nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJXaGVuIHJldHJpZXZpbmcgb2JqZWN0cywgZXZlbnRzIG9mIHR5cGUgT2JqZWN0UmV0cmlldmVFdmVudCBtdXN0IGJlIHJhaXNlZC5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RSZXRyaWV2ZWRFdmVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJBZnRlciBjYWxsaW5nIHNhdmVBbGwgYWxsIE1vZGlmaWVkIG9iamVjdHMgbXVzdCBiZSBzYXZlZCBpbnRvIHRoZSByZXBvc2l0b3J5XCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMCA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzEgPSB1b3cuZ2V0QnlJZChrZXlzWzFdKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZnJvbVVvVzAuc2V0QVRlc3RQcm9wZXJ0eShcIkJydXR0byFcIik7XHJcbiAgICAgICAgICAgIGZyb21Vb1cxLnNldEFUZXN0UHJvcGVydHkoXCJCQmVsbG9cIik7XHJcblxyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdFNhdmVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuc2F2ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMiwgXCJUaGUgVW9XIGhhcyBub3Qgc2F2ZWQgZXhhY3RseSAyIG9iamVjdC5cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8wID0gcmVwby5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG5cclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMC5nZXRBVGVzdFByb3BlcnR5KCkpLnRvRXF1YWwoXCJCcnV0dG8hXCIpO1xyXG4gICAgICAgICAgICBleHBlY3QoZnJvbVJlcG8xLmdldEFUZXN0UHJvcGVydHkoKSkudG9FcXVhbChcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0KFwiVW5pdE9mV29yayBtdXN0IHNhdmUgb25seSBlZmZlY3RpdmVseSBjaGFuZ2VkIG9iamVjdHMuXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvYWRpbmcgMiBvYmplY3RzIGZyb20gdGhlIFVvVyAuLi5cclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cwID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgIHZhciBmcm9tVW9XMSA9IHVvdy5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyAuLi4gYnV0IGVkaXRpbmcgb25seSBvbmUuLi5cclxuICAgICAgICAgICAgZnJvbVVvVzEuc2V0QVRlc3RQcm9wZXJ0eShcIkJCZWxsb1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vLyAuLi4gd2UgZXhwZWN0IHRvIGdldCBvbmx5IDEgbm90aWZpY2F0aW9uIGZyb20gdGhlIFVvV1xyXG4gICAgICAgICAgICB1b3cucmVnaXN0ZXJIYW5kbGVyKEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50LCAoZXZlbnQ6IE9iamVjdFNhdmVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgIGV4cGVjdChldmVudC5pZCkudG9FcXVhbChrZXlzWzFdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxLCBcIlRoZSBVb1cgaGFzIG5vdCBzYXZlZCBleGFjdGx5IDEgb2JqZWN0LlwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJVbml0T2ZXb3JrIG11c3QgZGVsZXRlIGNvbXBsZXRlbHkgYW4gb2JqZWN0IG9ubHkgYWZ0ZXIgY2FsbGluZyBzYXZlQWxsLlwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJvbVVvVzAgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cxID0gdW93LmdldEJ5SWQoa2V5c1sxXSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIHVvdy5yZWdpc3RlckhhbmRsZXIoRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudCwgKGV2ZW50OiBPYmplY3REZWxldGVkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1b3cuZGVsZXRlQnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdW93LmRlbGV0ZUJ5SWQoa2V5c1sxXSk7XHJcblxyXG4gICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwLCBcIkhhbmRsZXIgdHJpZ2dlcmVkIGJlZm9yZSBzYXZlQWxsIHdhcyBjYWxsZWQhXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgdmFyIGZyb21SZXBvMSA9IHJlcG8uZ2V0QnlJZChrZXlzWzFdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlIGRvIGV4cGVjdCB0byBzdGlsbCBmaW5kcyB0aGUgZGVsZXRlZCBpdGVtcyBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgZXhwZWN0KGZyb21SZXBvMCkubm90LnRvQmVOdWxsKFwiRWxlbWVudCAwIGRlbGV0ZWQgYmVmb3JlIHNhdmVBbGxcIik7XHJcbiAgICAgICAgICAgIGV4cGVjdChmcm9tUmVwbzEpLm5vdC50b0JlTnVsbChcIkVsZW1lbnQgMSBkZWxldGVkIGJlZm9yZSBzYXZlQWxsXCIpO1xyXG5cclxuICAgICAgICAgICAgdW93LnNhdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIsIFwiVGhlIFVvVyBoYXMgbm90IGRlbGV0ZWQgZXhhY3RseSAyIG9iamVjdC5cIik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21SZXBvMCA9IHJlcG8uZ2V0QnlJZChrZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChmYWxzZSkudG9CZVRydXRoeShcIkl0ZW0gMCBzaG91bGQgYmUgbm8gbW9yZSBpbiB0aGUgcmVwb3NpdG9yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgYXMgdGhlIGl0ZW0gc2hvdWxkIG5vdCBiZSBub21vcmUgaW4gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVJlcG8xID0gcmVwby5nZXRCeUlkKGtleXNbMV0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiSXRlbSAxIHNob3VsZCBiZSBubyBtb3JlIGluIHRoZSByZXBvc2l0b3J5XCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBhcyB0aGUgaXRlbSBzaG91bGQgbm90IGJlIG5vbW9yZSBpbiB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkEgZGVsZXRlZCBpdGVtIG11c3Qgbm90IGJlICdyZXRyaWV2YWJsZScgZnJvbSB0aGUgVW5pdE9mV29yaywgZXZlbiBpZiBzYXZlQWxsIHdhcyBub3QgY2FsbGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZyb21Vb1cgPSB1b3cuZ2V0QnlJZChrZXlzWzBdKTtcclxuXHJcbiAgICAgICAgICAgIHVvdy5kZWxldGVCeUlkKGtleXNbMF0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQmVmb3JlIHRoZSBzYXZlQWxsIHdlIGV4cGVjdCB0byBnZXQgYW4gRXhjZXB0aW9uIGZyb20gdGhlIFVuaXRPZldvcmsgLi4uXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBmcm9tVW9XID0gdW93LmdldEJ5SWQoa2V5c1swXSk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZmFsc2UpLnRvQmVUcnV0aHkoXCJUaGUgZWxlbWVudCBoYXMgYmVlbiBtYXJrZWQgYXMgZGVsZXRlZCwgYnV0IGl0IGlzIHN0aWxsIHJldHVybmVkIGJ5IHRoZSBVb1cuXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZSBpbnN0YW5jZW9mIEVycm9yKS50b0JlVHJ1dGh5KCk7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZS5uYW1lKS50b0VxdWFsKFVuaXRPZldvcmtFcnJvcnMuSXRlbU1hcmtlZEFzRGVsZXRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVvdy5zYXZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAuLi4gd2hpbGUgYWZ0ZXIgdGhlIHNhdmVBbGwgd2UgZXhwZWN0IHRvIGdldCBhbiBFeGNlcHRpb24gZnJvbSB0aGUgdW5kZXJseWluZyBSZXBvc2l0b3J5IC4uLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZnJvbVVvVyA9IHVvdy5nZXRCeUlkKGtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGZhbHNlKS50b0JlVHJ1dGh5KFwiVGhlIGVsZW1lbnQgaGFzIGJlZW4gbWFya2VkIGFzIGRlbGV0ZWQgYW5kIGRlbGV0ZWQsIGJ1dCBpdCBpcyBzdGlsbCByZXR1cm5lZCBieSB0aGUgVW9XLlwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUgaW5zdGFuY2VvZiBFcnJvcikudG9CZVRydXRoeSgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZWN0KGUubmFtZSkudG9FcXVhbChFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iXX0=