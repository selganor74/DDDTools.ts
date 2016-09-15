/// <reference path="../ErrorManagement/BaseErrors.ts" />

// import {BaseErrors} from "../ErrorManagement/BaseErrors";

namespace DDDTools.UnitOfWork {

    import BaseErrors = ErrorManagement.BaseErrors;

    export class UnitOfWorkErrors extends BaseErrors {
        public static ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
    }

}