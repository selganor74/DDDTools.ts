/// <reference path="../../../typings/browser.d.ts"/>

import {Guid} from "../../DDDTools/ValueObjects/Guid";
import {IAggregateRoot} from "../../DDDTools/Aggregate/IAggregateRoot";
import {BaseAggregateRoot} from "../../DDDTools/Aggregate/BaseAggregateRoot";
import {BaseNeDBRepositoryAsync} from "../../NeDBRepository/BaseNeDBRepositoryAsync";
import {BaseKeyValueObject} from "../../DDDTools/Entity/BaseKeyValueObject";
import {Factory} from "../../DDDTools/PersistableObject/Factory";
import {IEntity} from "../../DDDTools/Entity/IEntity";
import {NeDBDatabaseFactory} from "../../NeDBRepository/NeDBDatabaseFactory";

export class TestKey extends Guid {
    constructor() {
        super();
        this.__typeName = "TestKey";
        this.__typeVersion = "v1";
    }
}

export class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {

    public aTestProperty: string;

    constructor() {
        super();
        this.__typeName = "TestAggregate";
        this.__typeVersion = "v1";
    }
}

class TestRepo extends BaseNeDBRepositoryAsync<TestAggregate, TestKey> {
    public setupIndexes() {

    }
}

describe("BaseNeDBRepository", () => {
    
    var key: TestKey; // needed by persistence tests
    var persistenceTestAggregate: TestAggregate;
    
    Factory.registerType("TestKey", "v1", TestKey);
    Factory.registerType("TestAggregate", "v1", TestAggregate);

    var inMemoryDb = NeDBDatabaseFactory.getAndRegisterInMemoryDb("TestAggregateInMemory");
    var persistentDb = NeDBDatabaseFactory.getAndRegisterPersistentDb("TestAggregatePersistent");
    
    it("Should be possible to instantiate the NeDB Object.", () => {
        var nedbRepo = new TestRepo("TestAggregate", inMemoryDb);
        expect(true).toBeTruthy();
    });

    it("Should be possible to insert and retrieve an item", (done) => {

        var testItem = new TestAggregate();
        var testKey = new TestKey();
        var testRepo = new TestRepo("TestAggregate", inMemoryDb);

        testItem.setKey(testKey);

        testRepo.save(testItem).then(() => {
            testRepo.getById(testKey).then(
                (retrieved) => {
                    expect(retrieved).toEqual(testItem);
                    // Being Entities the equals method should return true if we are talking about the same entity.
                    expect(retrieved.equals(testItem)).toBeTruthy();
                    expect(retrieved.perfectlyMatch(testItem)).toBeTruthy();
                    done();
                },
                (error) => {
                    expect(false).toBeTruthy("There was an error while retrieving the item.");
                    done();
                }
            );
        },
            (error) => {
                expect(false).toBeTruthy("There was an error while retrieving the item.");
                done();
            }
        );

    });

    it("RevisionId must be incremented only if object to be saved differs from object saved", (done) => {
        // pending("Need to refactor IPErsistable to add functions for State Comparison.");

        var repo = new TestRepo("TestAggregate", inMemoryDb);
        var e = new TestAggregate();
        e.setKey(new TestKey());
        e.aTestProperty = "Before saving...";

        expect(e.getRevisionId()).toEqual(0);

        repo.save(e).then(() => {
            expect(e.getRevisionId()).toEqual(1);
            repo.save(e).then(() => {
                expect(e.getRevisionId()).toEqual(1);
                e.aTestProperty = "... after saving";
                repo.save(e).then(() => {
                    expect(e.getRevisionId()).toEqual(2);
                    done();
                });
            });
        });
    });

    it("A repository built with filename option MUST be persistent - part 1 saving", (done) => {
        var repo1 = new TestRepo("TestAggregate", persistentDb);

        persistenceTestAggregate = new TestAggregate();
        persistenceTestAggregate.aTestProperty = "Wow this has been saved.";
        key = new TestKey();
        persistenceTestAggregate.setKey(key);
        
        repo1.save(persistenceTestAggregate).then(() => {
            expect(true).toBeTruthy();
            done();
        },
            (err) => {
                expect(false).toBeTruthy("First Save failed");
                done();
            });
    });

    it("A repository built with filename option MUST be persistent - part 2 retrieving", (done) => {
        var repo2 = new TestRepo("TestAggregate", persistentDb);

        repo2.getById(key).then(
            (doc) => {
                expect(doc.perfectlyMatch(persistenceTestAggregate)).toBeTruthy();
                done();
            },
            (err) => {
                expect(false).toBeTruthy(JSON.stringify(err));
                done();
            }
        );         
    });
});
