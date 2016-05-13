/// <reference path="../../../typings/browser.d.ts"/>

import {Guid} from "../../../src/DDDTools/ValueObjects/Guid";
import {IAggregateRoot} from "../../../src/DDDTools/Aggregate/IAggregateRoot";
import {BaseAggregateRoot} from "../../../src/DDDTools/Aggregate/BaseAggregateRoot";
import {BaseNeDBRepository} from "../../../src/NeDBRepository/BaseNeDBRepository";
import {BaseKeyValueObject} from "../../../src/DDDTools/Entity/BaseKeyValueObject";

namespace CdC.Tests.NeDBRepository {

    export class TestKey extends Guid {
        constructor() {
            super();
            this.__typeName = "CdC.Tests.NeDBRepository.TestKey";
            this.__typeVersion = "v1";
        }
    }

    export class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {
        constructor() {
            super();
            this.__typeName = "CdC.Tests.NeDBRepository.TestAggregate";
            this.__typeVersion = "v1";
        }
    }

    class TestRepo extends BaseNeDBRepository<TestAggregate, TestKey> {

    }

    describe("BaseNeDBRepository", () => {
        it("Should be possible to instantiate the NeDB Object.", () => {
            var nedbRepo = new TestRepo();
            expect(true).toBeTruthy();
        });
    });
}