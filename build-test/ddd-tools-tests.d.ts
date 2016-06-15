/// <reference path="../typings/browser.d.ts" />
/// <reference path="../build/browser/ddd-tools.d.ts" />
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
        aNullValue: any;
    }
}
declare namespace CdC.Tests.ForBaseValueObject {
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    class TestValueObject extends BaseValueObject<TestValueObject> {
        private via;
        private numero;
        private citta;
        private cap;
        __typeName: string;
        __typeVersion: string;
        constructor(via: string, numero: number, citta: string, cap: string);
    }
    class TestValueObject_Array extends BaseValueObject<TestValueObject_Array> {
        private arrayOfSomething;
        __typeName: string;
        __typeVersion: string;
        constructor(arrayOfSomething: any[]);
    }
    class TestValueObject_Object extends BaseValueObject<TestValueObject_Object> {
        private someObject;
        __typeName: string;
        __typeVersion: string;
        constructor(someObject: any);
    }
}
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
        anotherDate: Date;
        constructor();
    }
    class TestAggregate extends BaseAggregateRoot<TestAggregate, Key> {
        arrayOfEntities: ChildEntity[];
        anonymousObject: any;
        anObjectReference: any;
        anotherObjectReference: any;
        aNullReference: any;
        anUndefinedItem: any;
        aDate: Date;
        __typeName: string;
        __typeVersion: string;
        aTestProperty: string;
        constructor();
    }
}
declare namespace CdC.Tests.RepAsync {
    import BaseEntity = DDDTools.Entity.BaseEntity;
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    class NotRegistered extends BaseValueObject<NotRegistered> {
        __typeName: string;
        __typeVersion: string;
    }
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
        anotherDate: Date;
        constructor();
    }
    class TestAggregate extends BaseAggregateRoot<TestAggregate, Key> {
        arrayOfEntities: ChildEntity[];
        anonymousObject: any;
        anObjectReference: any;
        anotherObjectReference: any;
        aNotRegisteredInstance: NotRegistered;
        aNullReference: any;
        anUndefinedReference: any;
        aDate: Date;
        __typeName: string;
        __typeVersion: string;
        aTestProperty: string;
        constructor();
    }
}
declare namespace CdC.Tests.ForDispatcher {
}
import Serializer = DDDTools.Serialization.Serializer;
import Deserializer = DDDTools.Serialization.Deserializer;
declare namespace CdC.Tests.ForUnitOfWork {
    import InMemoryRepository = DDDTools.Repository.InMemoryRepository;
    import BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
    import Guid = DDDTools.ValueObjects.Guid;
    import UnitOfWork = DDDTools.UnitOfWork.UnitOfWork;
    import IRepository = DDDTools.Repository.IRepository;
    class TestKey extends Guid {
        constructor();
    }
    class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {
        constructor();
        private aTestProperty;
        setATestProperty(value: string): void;
        getATestProperty(): string;
    }
    class TestRepository extends InMemoryRepository<TestAggregate, TestKey> {
    }
    class TestUoW extends UnitOfWork<TestAggregate, TestKey> {
        constructor(repo: IRepository<TestAggregate, TestKey>);
    }
}
