/// <reference path="../BaseEntity.ts"/>
/// <reference path="../BaseValueObject.ts"/>
namespace DDDTools.Locking {
    export interface ILockManager<
        TLockKey extends BaseValueObject<TLockKey>,
        TLock extends ILock<TLockKey>
        > {
        lock(locker: TLock);
        releaseLock();
        getLock(): TLock;
    }
}