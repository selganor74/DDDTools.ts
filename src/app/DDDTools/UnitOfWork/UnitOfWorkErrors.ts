/// <reference path="../ErrorManagement/BaseErrors.ts" />

namespace DDDTools.UnitOfWork {

    import BaseErrors = ErrorManagement.BaseErrors;

    export class UnitOfWorkErrors extends BaseErrors {
        public static ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
    }

}