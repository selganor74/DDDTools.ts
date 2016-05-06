/// <reference path="../Entity/BaseEntity.ts"/>
/// <reference path="../ValueObject/BaseValueObject.ts"/>

namespace DDDTools.Locking {
    
    import BaseValueObject = ValueObject.BaseValueObject;
    
    export interface ILockManager<
        TLockKey extends BaseValueObject<TLockKey>,
        TLock extends ILock<TLockKey>
        > {
        lock(locker: TLock);
        releaseLock();
        getLock(): TLock;
    }
}