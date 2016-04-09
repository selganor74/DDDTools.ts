/// <reference path="../../typings/main.d.ts"/>

namespace CdC.Tests.InMemoryItemLocker {

    import DDD = DDDTools;
    import Locking = DDDTools.Locking;
    import Guid = DDDTools.ValueObjects.Guid;
    import LockingErrors = Locking.LockingErrors;

    export class Key extends DDD.BaseValueObject<Key> {
        private id: Guid;

        __typeName = "CdC.Tests.InMemoryItemLocker.Key";
        __typeVersion = "v1";

        constructor() {
            super();
            this.id = Guid.generate();
        }
    }

    class LockKey extends DDD.BaseValueObject<LockKey> {
        private id: Guid;

        __typeName = "CdC.Tests.InMemoryItemLocker.LockKey";
        __typeVersion = "v1";

        constructor() {
            super();
            this.id = Guid.generate();
        }
    }

    class Lock extends DDD.BaseValueObject<Lock> implements Locking.ILock<LockKey> {

        __typeName = "CdC.Tests.InMemoryItemLocker.Lock";
        __typeVersion = "v1";

        constructor(private key: LockKey) {
            super();
        }

        canBeUnlockedByKey(key: LockKey): boolean {
            return this.key.equals(key);
        }

        isLockedByTheSameKey(otherLock: Lock): boolean {
            return this.key.equals(otherLock.key);
        }

    }

    class TestEntity extends DDD.BaseEntity<TestEntity, Key> {

        __typeName = "CdC.Tests.InMemoryItemLocker.TestEntity";
        __typeVersion = "v1";
        
        public arrayOfEntities: ChildEntity[] = [];
        public anonymousObject: any = {};
        // Le due property qui sotto vengono usate per testare che i riferimenti agli stessi oggetti vengano ricostituiti correttamente.
        public anObjectReference: any = {};
        public anotherObjectReference: any = {};

        constructor() {
            super();
        }
    }

    class TestLockManager extends Locking.InMemoryEntityLockManager<
        TestEntity,
        Key,
        LockKey,
        Lock
        > {

    }

    describe("InMemoryItemLocker", () => {

        it("Deve essere possibilie gestire una Entity nel suo lock manager.", () => {
            var item = new TestEntity();
            var lockKey = new LockKey();

            var lockManager = new TestLockManager(item, lockKey);

            var lock = lockManager.getLock();
            // item non ancora lockato, mi aspetto che lock sia null
            expect(lock).toBeNull("Il getLock deve restituire null se un lock non è stato ancora assegnato.");

            lock = new Lock(lockKey);
            lockManager.lock(new Lock(lockKey));

            var newLock = lockManager.getLock();
            expect(lock.equals(newLock)).toBeTruthy("Il lock restituito non è quello impostato.");

            var anotherLockKey = new LockKey();
            var anotherLockManager = new TestLockManager(item, anotherLockKey);
            var anotherLock = new Lock(anotherLockKey);
            expect(() => { anotherLockManager.lock(anotherLock) }).toThrow( new Error(LockingErrors.EntityLockedBySomeoneElse));
        });
    })
}