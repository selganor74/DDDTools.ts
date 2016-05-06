/// <reference path="../ErrorManagement/BaseErrors.ts" />

namespace DDDTools.Locking {
    
    import BaseErrors = ErrorManagement.BaseErrors;
    
    export class LockingErrors extends BaseErrors {
        public static EntityLockedBySomeoneElse = "Entity is Locked by someone else";
    }    
}