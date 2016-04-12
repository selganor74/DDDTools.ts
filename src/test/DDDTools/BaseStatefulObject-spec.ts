/// <reference path="../../../typings/main.d.ts"/>
/// <reference path="../../app/DDDTools/StatefulObject/StatefulObjectUpgrader.ts" />
/// <reference path="../../app/DDDTools/StatefulObject/StatefulObjectFactory.ts" />

namespace CdC.Tests.BaseStatefulObject.v2 {
    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;

    export class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.A3StepUpgradableItem";
        __typeVersion = "v2";

        public aNewProperty: string;

        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v1.A3StepUpgradableItem): A3StepUpgradableItem {
            var state = fromInstance.getState();
            state.aNewProperty = "upgrader was here";
            state.__typeVersion = "v2"
            this.setState(state);
            return this;
        }
    }

}

namespace CdC.Tests.BaseStatefulObject.v1 {

    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;

    export class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.TestEntity";
        __typeVersion = "v1";
    }

    export class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.A3StepUpgradableItem";
        __typeVersion = "v1";
    }
}

namespace CdC.Tests.BaseStatefulObject {

    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    import StatefulObjectFactory = DDDTools.StatefulObject.StatefulObjectFactory;
    import StatefulObjectUpgrader = DDDTools.StatefulObject.StatefulObjectUpgrader;
    import Errors = DDDTools.StatefulObject.UpgraderErrors;

    export class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.A3StepUpgradableItem";
        __typeVersion = "v3";

        public aNewProperty: string;
        public aNewNewProperty: string;

        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v2.A3StepUpgradableItem): A3StepUpgradableItem {
            var state = fromInstance.getState();
            state.aNewNewProperty = "upgrader was here";
            state.__typeVersion = "v3"
            this.setState(state);
            return this;
        }

    }

    export class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.TestEntity";
        __typeVersion = "v2";

        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v1.TestEntity): TestEntity {
            var state = fromInstance.getState();
            state.aNewProperty = "upgrader was here";
            state.__typeVersion = "v2"
            this.setState(state);
            return this;
        }

        /**
         * This property was not in "v1".
         */
        public aNewProperty: string;
    }

    export class TestEntityNonUpgradable extends BaseEntity<TestEntityNonUpgradable, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.TestEntityNonUpgradable";
        __typeVersion = "v1";

    }

    export class AClassWithManyTypes extends BaseEntity<AClassWithManyTypes, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.AClassWithManyTypes";
        __typeVersion = "v1";

        // Primitive Datatypes
        public aNumber: Number;
        public aString: String;
        public aBoolean: Boolean;
        public anObject: Object;

        // Extended types
        public aRegExp: RegExp;
        public aDate: Date;
    }

    describe("BaseStatefulObjectUpgrader", () => {

        it("computeNextVersion deve restituire il valore corretto della versione successiva", () => {

            var computed = StatefulObjectUpgrader.computeNextVersion("v1");

            expect(computed).toEqual("v2");
        });

        it("computeNextVersion deve restituire un errore se la versione non è corretta.", () => {

            var expectedError = new Error(Errors.IncorrectVersionFormat);
            expectedError.message = "Specified version m15 is in incorrect format. Must be in the form v<n> where n is an integer.";

            expect(() => { var computed = StatefulObjectUpgrader.computeNextVersion("m15"); }).toThrow(expectedError);

        });

        it("isLatestVersionForType deve restituire false per gli oggetti che non hanno versioni oltre alla prima", () => {
            var te = new TestEntityNonUpgradable();

            var needsUpgrade = StatefulObjectUpgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);

            expect(needsUpgrade).toBeFalsy("isLatestVersionForType should have returned false!");
        });

        it("isLatestVersionForType deve restituire true per gli oggetti che hanno versioni oltre alla prima", () => {
            var te = new CdC.Tests.BaseStatefulObject.v1.TestEntity();

            var needsUpgrade = StatefulObjectUpgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);

            expect(needsUpgrade).toBeTruthy("isLatestVersionForType should have returned true!");
        });

        it("upgrade must be able to upgrade a StatefulObject to its latest version [2 steps]", () => {

            var te = new CdC.Tests.BaseStatefulObject.v1.TestEntity();

            expect(te.__typeVersion).toEqual("v1");

            var upgraded = <TestEntity>StatefulObjectUpgrader.upgrade(te);

            expect(upgraded.__typeVersion).toEqual("v2");
            expect(upgraded.aNewProperty).toEqual("upgrader was here");
        });

        it("upgrade must be able to upgrade a StatefulObject to its latest version [3 steps]", () => {

            var te = new CdC.Tests.BaseStatefulObject.v1.A3StepUpgradableItem();

            expect(te.__typeVersion).toEqual("v1");

            var upgraded = <A3StepUpgradableItem>StatefulObjectUpgrader.upgrade(te);

            expect(upgraded.__typeVersion).toEqual("v3");
            expect(upgraded.aNewProperty).toEqual("upgrader was here");
            expect(upgraded.aNewNewProperty).toEqual("upgrader was here");
        });

        it("getState must be able to copy RegExp types", () => {
            var te = new CdC.Tests.BaseStatefulObject.AClassWithManyTypes();

            var testRegExp = "/^v[0-9]+";
            var testString = "v123";
            te.aRegExp = new RegExp(testRegExp);
            var regExpResult = te.aRegExp.test(testString);

            var state = <AClassWithManyTypes>te.getState();

            expect(state.aRegExp instanceof RegExp).toBeTruthy("aRegExp is not a RegExp instance");
            expect(state.aRegExp.test("v123")).toEqual(regExpResult, "aRegExp non si comporta come la RegularExpression originale");
        });

        it("getState must be able to copy Date types", () => {
            var te = new CdC.Tests.BaseStatefulObject.AClassWithManyTypes();

            var testDate = new Date();

            te.aDate = testDate;

            var state = <AClassWithManyTypes>te.getState();

            expect(state.aDate instanceof Date).toBeTruthy("aDate is not a Date instance");
            expect(state.aDate.toString() ).toEqual(testDate.toString(), "aDate non è stata ripristinata come Date");
        });
    });
}