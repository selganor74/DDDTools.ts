/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../../DDDTools/Entity/BaseEntity.d.ts" />
/// <reference path="../../DDDTools/ValueObjects/Guid.d.ts" />
/// <reference path="../../DDDTools/PersistableObject/Factory.d.ts" />
/// <reference path="../../DDDTools/PersistableObject/Errors.d.ts" />
declare namespace CdC.Tests.BasePersistableObject.v2 {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<A3StepUpgradableItem, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BasePersistableObject.v1.A3StepUpgradableItem): A3StepUpgradableItem;
    }
}
declare namespace CdC.Tests.BasePersistableObject.v1 {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
    class A3StepUpgradableItem extends BaseEntity<A3StepUpgradableItem, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace CdC.Tests.BasePersistableObject {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        aNewNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BasePersistableObject.v2.A3StepUpgradableItem): A3StepUpgradableItem;
    }
    class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BasePersistableObject.v1.TestEntity): TestEntity;
        aNewProperty: string;
    }
    class TestEntityNonUpgradable extends BaseEntity<TestEntityNonUpgradable, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
    class AClassWithManyTypes extends BaseEntity<AClassWithManyTypes, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNumber: Number;
        aString: String;
        aBoolean: Boolean;
        anObject: Object;
        aRegExp: RegExp;
        aDate: Date;
    }
}
