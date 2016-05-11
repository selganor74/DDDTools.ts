/// <reference path="../../../typings/browser.d.ts"/>

import Repository = require("../../app/NeDBRepository/BaseNeDBRepository.ts");

namespace CdC.Tests.NeDBRepository {
        
    import BaseNeDBRepository = Repository.NeDBImplementation.BaseNeDBRepository;
    import BaseKeyValueObject = DDDTools.Entity.BaseKeyValueObject;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import IAggregateRoot = DDDTools.Aggregate.IAggregateRoot;
    import Guid = DDDTools.ValueObjects.Guid;
    
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