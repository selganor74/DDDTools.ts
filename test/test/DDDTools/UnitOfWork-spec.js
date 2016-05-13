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
//# sourceMappingURL=UnitOfWork-spec.js.map