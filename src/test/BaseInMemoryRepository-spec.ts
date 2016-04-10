/// <reference path="../../typings/main.d.ts"/>

namespace CdC.Tests {

    import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;

    import RepoErrors = DDDTools.Repository.RepositoryErrors;

    export class Key extends DDD.BaseValueObject<Key> {
        private id: Guid;
        __typeName = "CdC.Tests.Key";
        __typeVersion = "v1";

        constructor() {
            super();
            this.id = Guid.generate();
        }
        toString() {
            return this.id.toString();
        }
    }

    export class ChildEntity extends DDD.BaseEntity<ChildEntity, Key> {
        public arrayOfKeys: Key[] = [];
        __typeName = "CdC.Tests.ChildEntity";
        __typeVersion = "v1";

        constructor() {
            super();
        }
    }

    export class TestEntity extends DDD.BaseEntity<TestEntity, Key> {
        public arrayOfEntities: ChildEntity[] = [];
        public anonymousObject: any = {};
        // Le due property qui sotto vengono usate per testare che i riferimenti agli stessi oggetti vengano ricostituiti correttamente.
        public anObjectReference: any = {};
        public anotherObjectReference: any = {};

        __typeName = "CdC.Tests.TestEntity";
        __typeVersion = "v1";

        constructor() {
            super();
        }

    }

    class TestRepository extends DDD.BaseInMemoryRepository<TestEntity, Key> {

        private static managedTypeName = "CdC.Tests.TestEntity";

        constructor() {
            super(TestRepository.managedTypeName);
        }
    }

    describe("BaseInMemoryRepository", () => {

        it("Deve essere possibile istanziare il Repository", () => {
            var repo = new TestRepository();
            expect(repo instanceof TestRepository).toEqual(true);
        });

        it("Se si salva una entity senza chiave impostata, il repository deve restituire un errore KeyNotSet", () => {
            var repo = new TestRepository();

            var item = new TestEntity();
            try {
                repo.save(item);
                expect(false).toBeTruthy();
            } catch (e) {
                expect(e.name).toEqual(RepoErrors.KeyNotSet)
            }
        });

        it("Deve essere possibile salvare una entity con la chiave impostata", () => {
            var repo = new TestRepository();

            var item = new TestEntity();
            try {
                repo.save(item);
                expect(false).toBeTruthy();
            } catch (e) {
                expect(e.name).toEqual(RepoErrors.KeyNotSet)
            }
        });

        it("Se si richiede un item non presente nel repository, viene lanciato errore ItemNotFound", () => {
            var repo = new TestRepository();

            var item = new TestEntity();
            var key = new Key();
            var key2 = new Key();
            item.setKey(key);

            repo.save(item);


            expect(() => { repo.getById(key2) }).toThrow(new Error(RepoErrors.ItemNotFound));

        });

        it("Gli array devono essere ricostituiti correttamente", () => {
            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;

            var item = new TestEntity();
            var key = new Key();
            item.setKey(key);

            for (var i = 0; i < numberOfElementsToAdd; i++) {
                var child = new ChildEntity();
                child.setKey(new Key());
                item.arrayOfEntities.push(child);
                for (var q = 0; q < numberOfElementsToAdd; q++) {
                    child.arrayOfKeys.push(new Key());
                }
            }
            try {
                repo.save(item);
                console.log("Salvato");
                var reloaded = repo.getById(key);
                console.log("Recuperato");
            } catch (e) {
                expect(false).toBeTruthy("Eccezione nel salvataggio o nel recupero dell'item. " + e.message)
            }
            expect(reloaded instanceof TestEntity).toBeTruthy("L'oggetto ricostituito non è un'istanza dell'oggetto originale.");
            expect(Array.isArray(reloaded.arrayOfEntities)).toBeTruthy("La property arrayOfEntities non è un Array");
            expect(reloaded.arrayOfEntities.length).toEqual(numberOfElementsToAdd, "La property arrayOfEntities non contiene " + numberOfElementsToAdd + " elementi");
            for (var t = 0; t < numberOfElementsToAdd; t++) {
                var ce = reloaded.arrayOfEntities[t];
                expect(Array.isArray(ce.arrayOfKeys)).toBeTruthy("La property arrayOfKeys non è un Array");
                expect(ce.arrayOfKeys.length).toEqual(numberOfElementsToAdd, "La property arrayOfKeys non contiene " + numberOfElementsToAdd + " elementi");
            }
        });

        it("Gli oggetti anonimi devono essere ricostituiti correttamente.", () => {
            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;
            var item = new TestEntity();
            var key = new Key();
            item.setKey(key);

            var anotherEntity = new TestEntity();
            anotherEntity.setKey(new Key());
            item.anonymousObject.anotherEntity = anotherEntity;
            item.anonymousObject.aNumberType = 42;
            try {
                repo.save(item);
                var reloaded = repo.getById(key);
            } catch (e) {
                expect(false).toBeTruthy("Eccezione nel salvataggio o nel recupero dell'item. " + e.message)
            }

            expect(reloaded.anonymousObject.anotherEntity instanceof TestEntity).toBeTruthy("L'oggetto ricostituito non è un'istanza dell'oggetto originale.");
            expect(reloaded.anonymousObject.aNumberType).toEqual(42, "La property aNumberType non è stata ricostituita correttamente.");
        });

        it("Riferimenti alla stessa istanza devono essere ricostituiti correttamente", () => {

            pending("Feature non ancora sviluppata");

            var repo = new TestRepository();
            var numberOfElementsToAdd = 10;
            var item = new TestEntity();
            var key = new Key();
            item.setKey(key);

            var anObjectReferencedInMoreThanOneProperty = {
                aProperty: "Prima del test"
            };

            item.anObjectReference = anObjectReferencedInMoreThanOneProperty;
            item.anotherObjectReference = anObjectReferencedInMoreThanOneProperty;
            try {
                repo.save(item);
                var reloaded = repo.getById(key);
            } catch (e) {
                expect(false).toBeTruthy("Eccezione nel salvataggio o nel recupero dell'item. " + e.message)
            }

            expect(reloaded.anObjectReference.aProperty).toEqual("Prima del test");
            expect(reloaded.anotherObjectReference.aProperty).toEqual("Prima del test");
            reloaded.anObjectReference.aProperty = "Dopo del test";
            expect(reloaded.anObjectReference.aProperty).toEqual("Dopo del test", "anObjectReference.aProperty non è cambiata dopo la modifica.");
            expect(reloaded.anotherObjectReference.aProperty).toEqual("Dopo del test", "anotherObjectReference.aProperty non è cambiata dopo la modifica.");
        });
    })
} 