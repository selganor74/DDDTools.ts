/// <reference path="ILockManager.ts"/>
/// <reference path="../BaseValueObject.ts"/>
/// <reference path="../ValueObjects/Guid.ts"/>

namespace DDDTools.Locking {

    import Guid = DDDTools.ValueObjects.Guid;

    // Una classe di Lock di esempio usata dall'InMemoryLockManager
    export class SimpleLock extends BaseValueObject<SimpleLock> implements ILock<SimpleLockKey>{
        public __typeName: string = "DDDTools.Locking.SimpleLock";

        constructor(
            private keyCreatedWith: SimpleLockKey
        ) {
            super();
        }

        canBeUnlockedByKey(key: SimpleLockKey) {
            return this.keyCreatedWith.equals(key);
        }
        
        isLockedByTheSameKey(otherLock: SimpleLock) : boolean {
            return this.keyCreatedWith.equals(otherLock.keyCreatedWith);
        }
    }

    // Una classe "Chiave" di esempio usata dall'InMemoryLockManager
    export class SimpleLockKey extends BaseValueObject<SimpleLockKey> {
        public __typeName: string = "DDDTools.Locking.SimpleLockKey"
        private key: Guid;

        constructor(key?: Guid) {
            super();
            this.key = key || Guid.generate();
        }
    }
    
    export class InMemoryEntityLockManager<
        TLockableEntity extends BaseEntity<TLockableEntity, TUniqueId>, 
        TUniqueId extends BaseValueObject<TUniqueId>,
        TLockKey extends BaseValueObject<TLockKey>, 
        TLock extends ILock<TLockKey>
        > implements ILockManager<TLockKey, TLock> {
    
        private static keyring: { [id: string]: any } = {};

        constructor(
            private item : TLockableEntity,
            private clientKey: TLockKey
        ) { }

        private getKeyAsString(): string {
            var key = this.item.getKey();
            var keyAsString = JSON.stringify(key);
            return keyAsString;
        }
        
        // L'oggetto di Lock usato per lockare l'istanza. L'oggetto di lock può avere informazioni utili da presentare all'utente.
        getLock(): TLock {
            var keyAsString = this.getKeyAsString();
            return InMemoryEntityLockManager.keyring[keyAsString] || null; 
        }

        hasLock(): boolean {
            var keyAsString = this.getKeyAsString();
            if (InMemoryEntityLockManager.keyring[keyAsString]) {
                return true;
            }
            return false;
        };

        lock( locker: TLock ): void {
            var currentLock = this.getLock();
            if (currentLock != null) {
                if ( currentLock.isLockedByTheSameKey( locker ) ){
                    // ho già un lock da questo client, per cui lo lascio invariato.
                    return;
                } else {
                    LockingErrors.Throw(LockingErrors.EntityLockedBySomeoneElse);
                }
            }
            
            var keyAsString = this.getKeyAsString();
            InMemoryEntityLockManager.keyring[keyAsString] = locker;
        };

        releaseLock(): void {
            if (!this.hasLock()) {
                return;
            }
            var keyAsString = this.getKeyAsString();
            InMemoryEntityLockManager.keyring[keyAsString] = undefined;
        };
        
        
    }
}