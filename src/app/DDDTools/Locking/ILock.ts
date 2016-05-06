/// <reference path="../ValueObject/BaseValueObject.ts" />

namespace DDDTools.Locking {
    
    import BaseValueObject = ValueObject.BaseValueObject;
    
    export interface ILock<TLockKey extends BaseValueObject<TLockKey>> {
        canBeUnlockedByKey(key: TLockKey): boolean;
        isLockedByTheSameKey(otherLock: ILock<TLockKey>) : boolean;
    }
}