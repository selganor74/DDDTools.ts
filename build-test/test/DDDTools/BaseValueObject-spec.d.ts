/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../../DDDTools/ValueObjects/Guid.d.ts" />
/// <reference path="../../DDDTools/ValueObject/BaseValueObject.d.ts" />
/// <reference path="../../DDDTools/PersistableObject/Factory.d.ts" />
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
