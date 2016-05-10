/// <reference path="../ErrorManagement/BaseErrors.ts"/>

namespace DDDTools.PersistableObject {
    
    import BaseErrors = ErrorManagement.BaseErrors;
    
    export class UpgraderErrors extends BaseErrors {
        static TypeNotInstatiable = "Type in not instantiable";
        static UpgradePathNotFound = "Upgrade Path not Found";
        static IncorrectVersionFormat = "Incorrect Version Format";
        static WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
    }
}