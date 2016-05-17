"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseErrors_1 = require("../ErrorManagement/BaseErrors");
var Errors = (function (_super) {
    __extends(Errors, _super);
    function Errors() {
        _super.apply(this, arguments);
    }
    Errors.StateIsNotAnObject = "State is not an Object";
    Errors.TypeNameNotSet = "TypeName not set";
    Errors.TypeVersionNotSet = "TypeVersion not set";
    Errors.UnableToInstantiateType = "Unable to Instantiate Type";
    Errors.TypeRegistryNotSet = "TypeRegistry not set";
    Errors.TypeNotRegistered = "Type has not been registered with the TypeRegistry";
    Errors.CannotRegisterUndefined = "typePrototype cannot be null or undefined";
    Errors.TypeNotInstatiable = "Type is not instantiable";
    Errors.UpgradePathNotFound = "Upgrade Path not Found";
    Errors.IncorrectVersionFormat = "Incorrect Version Format";
    Errors.WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
    return Errors;
}(BaseErrors_1.BaseErrors));
exports.Errors = Errors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwyQkFBeUIsK0JBQStCLENBQUMsQ0FBQTtBQUV6RDtJQUE0QiwwQkFBVTtJQUF0QztRQUE0Qiw4QkFBVTtJQWtCdEMsQ0FBQztJQWZVLHlCQUFrQixHQUFHLHdCQUF3QixDQUFDO0lBQzlDLHFCQUFjLEdBQUcsa0JBQWtCLENBQUM7SUFDcEMsd0JBQWlCLEdBQUcscUJBQXFCLENBQUM7SUFDMUMsOEJBQXVCLEdBQUcsNEJBQTRCLENBQUM7SUFDdkQseUJBQWtCLEdBQUcsc0JBQXNCLENBQUM7SUFHNUMsd0JBQWlCLEdBQUcsb0RBQW9ELENBQUM7SUFDekUsOEJBQXVCLEdBQUcsMkNBQTJDLENBQUE7SUFHckUseUJBQWtCLEdBQUcsMEJBQTBCLENBQUM7SUFDaEQsMEJBQW1CLEdBQUcsd0JBQXdCLENBQUM7SUFDL0MsNkJBQXNCLEdBQUcsMEJBQTBCLENBQUM7SUFDcEQscUNBQThCLEdBQUcsb0NBQW9DLENBQUM7SUFDakYsYUFBQztBQUFELENBQUMsQUFsQkQsQ0FBNEIsdUJBQVUsR0FrQnJDO0FBbEJZLGNBQU0sU0FrQmxCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgIC8vIFRocm93biBieSBwZXJzaXN0YWJsZSBvYmplY3RzXHJcbiAgICBzdGF0aWMgU3RhdGVJc05vdEFuT2JqZWN0ID0gXCJTdGF0ZSBpcyBub3QgYW4gT2JqZWN0XCI7XHJcbiAgICBzdGF0aWMgVHlwZU5hbWVOb3RTZXQgPSBcIlR5cGVOYW1lIG5vdCBzZXRcIjtcclxuICAgIHN0YXRpYyBUeXBlVmVyc2lvbk5vdFNldCA9IFwiVHlwZVZlcnNpb24gbm90IHNldFwiO1xyXG4gICAgc3RhdGljIFVuYWJsZVRvSW5zdGFudGlhdGVUeXBlID0gXCJVbmFibGUgdG8gSW5zdGFudGlhdGUgVHlwZVwiO1xyXG4gICAgc3RhdGljIFR5cGVSZWdpc3RyeU5vdFNldCA9IFwiVHlwZVJlZ2lzdHJ5IG5vdCBzZXRcIjtcclxuXHJcbiAgICAvLyBUaHJvd24gYnkgdGhlIEZhY3RvcnkvVHlwZVJlZ2lzdHJ5XHJcbiAgICBzdGF0aWMgVHlwZU5vdFJlZ2lzdGVyZWQgPSBcIlR5cGUgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGUgVHlwZVJlZ2lzdHJ5XCI7XHJcbiAgICBzdGF0aWMgQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQgPSBcInR5cGVQcm90b3R5cGUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXCJcclxuICAgIFxyXG4gICAgLy8gVGhyb3duIGJ5IHRoZSBVcGdyYWRlclxyXG4gICAgc3RhdGljIFR5cGVOb3RJbnN0YXRpYWJsZSA9IFwiVHlwZSBpcyBub3QgaW5zdGFudGlhYmxlXCI7XHJcbiAgICBzdGF0aWMgVXBncmFkZVBhdGhOb3RGb3VuZCA9IFwiVXBncmFkZSBQYXRoIG5vdCBGb3VuZFwiO1xyXG4gICAgc3RhdGljIEluY29ycmVjdFZlcnNpb25Gb3JtYXQgPSBcIkluY29ycmVjdCBWZXJzaW9uIEZvcm1hdFwiO1xyXG4gICAgc3RhdGljIFdyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSA9IFwiV3JvbmcgVmVyc2lvbiBpbiBVcGdyYWRlZCBJbnN0YW5jZVwiO1xyXG59Il19