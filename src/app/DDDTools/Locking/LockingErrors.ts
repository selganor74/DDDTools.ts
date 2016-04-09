/// <reference path="../BaseErrors.ts" />

namespace DDDTools.Locking {
    
    export class LockingErrors extends BaseErrors {
        public static EntityLockedBySomeoneElse = "Entity is Locked by someone else";
    }    
}