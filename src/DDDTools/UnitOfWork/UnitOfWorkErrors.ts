import {BaseErrors} from "../ErrorManagement/BaseErrors";

// namespace DDDTools.UnitOfWork {

export class UnitOfWorkErrors extends BaseErrors {
    public static ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
}

// }