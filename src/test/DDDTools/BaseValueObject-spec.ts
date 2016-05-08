/// <reference path="../../../typings/main.d.ts"/>

namespace CdC.Tests.BaseValueObject {

    import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;

    class TestValueObject extends DDD.ValueObject.BaseValueObject<TestValueObject> {
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

    class TestValueObject_Array extends DDD.ValueObject.BaseValueObject<TestValueObject_Array> {
        __typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
        __typeVersion = "v1";

        constructor(
            private arrayOfSomething: any[]
        ) {
            super();
        }
    }

    class TestValueObject_Object extends DDD.ValueObject.BaseValueObject<TestValueObject_Object> {
        __typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
        __typeVersion = "v1";

        constructor(
            private someObject: any
        ) {
            super();
        }
    }

    describe("BaseValueObject", () => {

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