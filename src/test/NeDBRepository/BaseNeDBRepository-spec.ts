/// <reference path="../../../typings/browser.d.ts"/>

import {Guid} from "../../DDDTools/ValueObjects/Guid";
import {IAggregateRoot} from "../../DDDTools/Aggregate/IAggregateRoot";
import {BaseAggregateRoot} from "../../DDDTools/Aggregate/BaseAggregateRoot";
import {BaseNeDBRepositoryAsync} from "../../NeDBRepository/BaseNeDBRepositoryAsync";
import {BaseKeyValueObject} from "../../DDDTools/Entity/BaseKeyValueObject";
import {Factory} from "../../DDDTools/PersistableObject/Factory";
import {IEntity} from "../../DDDTools/Entity/IEntity"

export class TestKey extends Guid {
    constructor() {
        super();
        this.__typeName = "TestKey";
        this.__typeVersion = "v1";
    }
}

export class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {
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

    Factory.registerType("TestKey", "v1", TestKey);
    Factory.registerType("TestAggregate", "v1", TestAggregate);

    it("Should be possible to instantiate the NeDB Object.", () => {
        var nedbRepo = new TestRepo("TestAggregate");
        expect(true).toBeTruthy();
    });

    it("Should be possible to insert and retrieve an item", (done) => {

        var testItem = new TestAggregate();
        var testKey = new TestKey();
        var testRepo = new TestRepo("TestAggregate");

        testItem.setKey(testKey);

        testRepo.save(testItem).then(() => {
            testRepo.getById(testKey).then(
                (retrieved) => {
                    expect(retrieved).toEqual(testItem);
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

    })
});
