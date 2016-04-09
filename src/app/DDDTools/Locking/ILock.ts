namespace DDDTools.Locking {
    export interface ILock<TLockKey extends BaseValueObject<TLockKey>> {
        canBeUnlockedByKey(key: TLockKey): boolean;
        isLockedByTheSameKey(otherLock: ILock<TLockKey>) : boolean;
    }
}