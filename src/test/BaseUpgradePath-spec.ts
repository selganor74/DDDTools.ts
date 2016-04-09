/// <reference path="../../typings/main.d.ts"/>
/// <reference path="../app/DDDTools/StatefulObject/StatefulObjectUpgrader.ts" />

namespace CdC.Tests.BaseUpgradePath.v1 {

    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;

    export class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseUpgradePath.TestEntity";
        __typeVersion = "v1";
    }
    
}

namespace CdC.Tests.BaseUpgradePath {
    
    import BaseUpgradePath = DDDTools.StatefulObject.BaseUpgradePath;
    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    import StatefulObjectFactory = DDDTools.StatefulObject.StatefulObjectFactory;
    
    class TestUpgradePath extends BaseUpgradePath {}
    
    
    export class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName = "CdC.Tests.BaseUpgradePath.TestEntity";
        __typeVersion = "v2";
        
        /**
         * Questa property non era presente nella versione "v1".
         */
        public aNewProperty: string;
    }
    
    describe("BaseUpgradePath", () => {
        
        it("computeFullyQualifiedTypeNameFromVersion deve restituire il valore corretto del namespace", () => {
            
            pending();
            
            var tbup = new TestUpgradePath("CdC.Tests.BaseUpgradePath.TestEntity");

            // var computed = tbup.computeFullyQualifiedTypeNameFromVersion("v1");
            
            // expect(computed).toEqual("CdC.Tests.BaseUpgradePath.v1.TestEntity");
        });
        
        it("Deve essere possibile upgradare un'istanza del tipo 'v1' in 'v2'", () => {
            
            pending();

            var typeName = "CdC.Tests.BaseUpgradePath.TestEntity";
            var typeVersionTo = "v2";
            var typeVersionFrom = "v1";
                        
            var tbup = new TestUpgradePath( typeName );
            
            tbup.addUpgraderMethod("v1", (from) => {
                
                var to: CdC.Tests.BaseUpgradePath.TestEntity;
                
                var casted = <CdC.Tests.BaseUpgradePath.v1.TestEntity>from;
                
                to = <CdC.Tests.BaseUpgradePath.TestEntity>StatefulObjectFactory.instantiateType( typeName, typeVersionTo );
                var fromState = casted.getState();
                to.setState(fromState);
                to.__typeVersion = typeVersionTo ;
                
                return to;

            });
            
            
        });
        
    });
}	