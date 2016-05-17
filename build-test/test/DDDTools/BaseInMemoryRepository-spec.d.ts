/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../../DDDTools/ValueObjects/Guid.d.ts" />
/// <reference path="../../DDDTools/Entity/BaseEntity.d.ts" />
/// <reference path="../../DDDTools/ValueObject/BaseValueObject.d.ts" />
/// <reference path="../../DDDTools/Aggregate/BaseAggregateRoot.d.ts" />
/// <reference path="../../DDDTools/Repository/Errors.d.ts" />
/// <reference path="../../DDDTools/Repository/BaseInMemoryRepository.d.ts" />
/// <reference path="../../DDDTools/PersistableObject/TypeRegistry.d.ts" />
/// <reference path="../../DDDTools/PersistableObject/Factory.d.ts" />
declare namespace CdC.Tests {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    class Key extends BaseValueObject<Key> {
        private id;
        __typeName: string;
        __typeVersion: string;
        constructor();
        toString(): string;
    }
    class ChildEntity extends BaseEntity<ChildEntity, Key> {
        arrayOfKeys: Key[];
        __typeName: string;
        __typeVersion: string;
        constructor();
    }
    class TestAggregate extends BaseAggregateRoot<TestAggregate, Key> {
        arrayOfEntities: ChildEntity[];
        anonymousObject: any;
        anObjectReference: any;
        anotherObjectReference: any;
        __typeName: string;
        __typeVersion: string;
        aTestProperty: string;
        constructor();
    }
}
