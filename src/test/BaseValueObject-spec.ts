/// <reference path="../../typings/main.d.ts"/>

namespace CdC.Tests.BaseValueObject {

    import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;

    class TestValueObject extends DDD.BaseValueObject<TestValueObject> {
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

    class TestValueObject_Array extends DDD.BaseValueObject<TestValueObject_Array> {
        __typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
        __typeVersion = "v1";

        constructor(
            private arrayOfSomething: any[]
        ) {
            super();
        }
    }

    class TestValueObject_Object extends DDD.BaseValueObject<TestValueObject_Object> {
        __typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
        __typeVersion = "v1";

        constructor(
            private someObject: any
        ) {
            super();
        }
    }

    describe("BaseValueObject", () => {

        it("Il criterio di uguaglianza tra ValueObjects e sul 'contenuto' dell'oggetto. - Tipi base", () => {
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

            expect(vo1.equals(vo2)).toBeTruthy("vo1 non risulta uguale a vo2, quando lo è");
            expect(vo1.equals(vo3)).toBeFalsy("vo1 risulta essere uguale a vo3, quando non lo è");
        });

        it("Il criterio di uguaglianza tra ValueObjects e sul 'contenuto' dell'oggetto. - Array", () => {
            var vo1 = new TestValueObject_Array(
                [{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]
            );
            var vo2 = new TestValueObject_Array(
                [{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]
            );
            var vo3 = new TestValueObject_Array(
                [{ p1: 6, p3: 96 }, { p1: 3, p2: 42 }]
            )

            expect(vo1.equals(vo2)).toBeTruthy("vo1 non risulta uguale a vo2, quando lo è");
            expect(vo1.equals(vo3)).toBeFalsy("vo1 risulta essere uguale a vo3, quando non lo è");
        });

        it("Il criterio di uguaglianza tra ValueObjects e sul 'contenuto' dell'oggetto. - Object", () => {
            var vo1 = new TestValueObject_Object(
                { p1: 3, p2: 42 }
            );
            var vo2 = new TestValueObject_Object(
                { p1: 3, p2: 42 }
            );
            var vo3 = new TestValueObject_Object(
                { p1: 6, p3: 96 }
            )

            expect(vo1.equals(vo2)).toBeTruthy("vo1 non risulta uguale a vo2, quando lo è");
            expect(vo1.equals(vo3)).toBeFalsy("vo1 risulta essere uguale a vo3, quando non lo è");
        });
    });
}