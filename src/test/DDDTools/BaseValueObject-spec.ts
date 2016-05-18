/// <reference path="../../../typings/browser.d.ts"/>

/// <reference path="../../../build/browser/ddd-tools.d.ts" />
// / <reference path="../../DDDTools/ValueObjects/Guid.ts" />
// / <reference path="../../DDDTools/ValueObject/BaseValueObject.ts" />
// / <reference path="../../DDDTools/PersistableObject/Factory.ts" />

// import {Guid} from "../../DDDTools/ValueObjects/Guid";
// import {BaseValueObject} from "../../DDDTools/ValueObject/BaseValueObject";
// import {Factory} from "../../DDDTools/PersistableObject/Factory";

namespace CdC.Tests.ForBaseValueObject {


    import Guid = DDDTools.ValueObjects.Guid;
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    import Factory = DDDTools.PersistableObject.Factory;


    export class TestValueObject extends BaseValueObject<TestValueObject> {
        __typeName = "CdC.Tests.BaseValueObject.TestValueObject";
        __typeVersion = "v1";

        constructor(
            private via: string,
            private numero: number,
            private citta: string,
            private cap: string
        ) {
            super();
        }
    }

    export class TestValueObject_Array extends BaseValueObject<TestValueObject_Array> {
        __typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
        __typeVersion = "v1";

        constructor(
            private arrayOfSomething: any[]
        ) {
            super();
        }
    }

    export class TestValueObject_Object extends BaseValueObject<TestValueObject_Object> {
        __typeName = "CdC.Tests.BaseValueObject.TestValueObject_Object";
        __typeVersion = "v1";

        constructor(
            private someObject: any
        ) {
            super();
        }
    }

    describe("BaseValueObject", () => {

        beforeEach(() => {

            Factory.registerType("CdC.Tests.BaseValueObject.TestValueObject", "v1", <any>CdC.Tests.ForBaseValueObject.TestValueObject);
            Factory.registerType("CdC.Tests.BaseValueObject.TestValueObject_Array", "v1", <any>CdC.Tests.ForBaseValueObject.TestValueObject_Array);
            Factory.registerType("CdC.Tests.BaseValueObject.TestValueObject_Object", "v1", <any>CdC.Tests.ForBaseValueObject.TestValueObject_Object);

        });

        it("ValueObjects must be compared against their content. - Base types", () => {
            var vo1 = new TestValueObject(
                "via F.Mestica",
                3,
                "Apiro",
                "62021"
            );
            var vo2 = new TestValueObject(
                "via F.Mestica",
                3,
                "Apiro",
                "62021"
            )
            var vo3 = new TestValueObject(
                "via del campo",
                69,
                "Genova",
                "xxxxx"
            )

            expect(vo1.equals(vo2)).toBeTruthy("vo1 is reported to be not equal to vo2, while it is!");
            expect(vo1.equals(vo3)).toBeFalsy("vo1 is reportede to be equal to vo3, while it is not!");
        });

        it("ValueObjects must be compared against their content. - Array", () => {
            var vo1 = new TestValueObject_Array(
                [{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]
            );
            var vo2 = new TestValueObject_Array(
                [{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]
            );
            var vo3 = new TestValueObject_Array(
                [{ p1: 6, p3: 96 }, { p1: 3, p2: 42 }]
            )

            expect(vo1.equals(vo2)).toBeTruthy("vo1 is reported to be not equal to vo2, while it is!");
            expect(vo1.equals(vo3)).toBeFalsy("vo1 is reportede to be equal to vo3, while it is not!");
        });

        it("ValueObjects must be compared against their content. - Object", () => {
            var vo1 = new TestValueObject_Object(
                { p1: 3, p2: 42 }
            );
            var vo2 = new TestValueObject_Object(
                { p1: 3, p2: 42 }
            );
            var vo3 = new TestValueObject_Object(
                { p1: 6, p3: 96 }
            )

            expect(vo1.equals(vo2)).toBeTruthy("vo1 is reported to be not equal to vo2, while it is!");
            expect(vo1.equals(vo3)).toBeFalsy("vo1 is reportede to be equal to vo3, while it is not!");
        });
    });
}