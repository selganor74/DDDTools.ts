/// <reference path="../../typings/main.d.ts"/>
/// <reference path="../app/DDDTools/StatefulObject/StatefulObjectUpgrader.ts" />
/// <reference path="../app/DDDTools/StatefulObject/StatefulObjectFactory.ts" />

namespace CdC.Tests.BaseStatefulObject.v1 {

    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;

    export class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseStatefulObject.TestEntity";
        __typeVersion = "v1";
    }

}

namespace CdC.Tests.BaseStatefulObject {

    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    import StatefulObjectFactory = DDDTools.StatefulObject.StatefulObjectFactory;
    import StatefulObjectUpgrader = DDDTools.StatefulObject.StatefulObjectUpgrader;


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

    describe("BaseStatefulObjectUpgrader", () => {

        it("computeNextVersion deve restituire il valore corretto della versione successiva", () => {

            var computed = StatefulObjectUpgrader.computeNextVersion("v1");

            expect(computed).toEqual("v2");
        });

        it("needsUpgrade deve restituire false per gli oggetti che non hanno versioni oltre alla prima", () => {
            var te = new TestEntityNonUpgradable();

            var needsUpgrade = StatefulObjectUpgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);

            expect(needsUpgrade).toBeFalsy("needsUpgrade should have returned false!");
        });

        it("needsUpgrade deve restituire true per gli oggetti che hanno versioni oltre alla prima", () => {
            var te = new CdC.Tests.BaseStatefulObject.v1.TestEntity();

            var needsUpgrade = StatefulObjectUpgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);

            expect(needsUpgrade).toBeTruthy("needsUpgrade should have returned true!");
        });

        it("upgrade must be able to upgrade a StatefulObject to its latest version", () => {
            var te = new CdC.Tests.BaseStatefulObject.v1.TestEntity();

            expect(te.__typeVersion).toEqual("v1");

            var upgraded = <TestEntity>StatefulObjectUpgrader.upgrade(te);

            expect(upgraded.__typeVersion).toEqual("v2");
            expect(upgraded.aNewProperty).toEqual("upgrader was here");
        });

    });
}