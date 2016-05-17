/// <reference path="../ErrorManagement/BaseErrors.d.ts" />
declare namespace DDDTools.UnitOfWork {
    import BaseErrors = ErrorManagement.BaseErrors;
    class UnitOfWorkErrors extends BaseErrors {
        static ItemMarkedAsDeleted: string;
    }
}
