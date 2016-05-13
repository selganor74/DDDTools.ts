var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_1) {
    "use strict";
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
        Errors.TypeNotInstatiable = "Type is not instantiable";
        Errors.UpgradePathNotFound = "Upgrade Path not Found";
        Errors.IncorrectVersionFormat = "Incorrect Version Format";
        Errors.WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
        return Errors;
    }(BaseErrors_1.BaseErrors));
    exports.Errors = Errors;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBRUE7UUFBNEIsMEJBQVU7UUFBdEM7WUFBNEIsOEJBQVU7UUFpQnRDLENBQUM7UUFkVSx5QkFBa0IsR0FBRyx3QkFBd0IsQ0FBQztRQUM5QyxxQkFBYyxHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLHdCQUFpQixHQUFHLHFCQUFxQixDQUFDO1FBQzFDLDhCQUF1QixHQUFHLDRCQUE0QixDQUFDO1FBQ3ZELHlCQUFrQixHQUFHLHNCQUFzQixDQUFDO1FBRzVDLHdCQUFpQixHQUFHLG9EQUFvRCxDQUFDO1FBR3pFLHlCQUFrQixHQUFHLDBCQUEwQixDQUFDO1FBQ2hELDBCQUFtQixHQUFHLHdCQUF3QixDQUFDO1FBQy9DLDZCQUFzQixHQUFHLDBCQUEwQixDQUFDO1FBQ3BELHFDQUE4QixHQUFHLG9DQUFvQyxDQUFDO1FBQ2pGLGFBQUM7SUFBRCxDQUFDLEFBakJELENBQTRCLHVCQUFVLEdBaUJyQztJQWpCWSxjQUFNLFNBaUJsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICAvLyBUaHJvd24gYnkgcGVyc2lzdGFibGUgb2JqZWN0c1xyXG4gICAgc3RhdGljIFN0YXRlSXNOb3RBbk9iamVjdCA9IFwiU3RhdGUgaXMgbm90IGFuIE9iamVjdFwiO1xyXG4gICAgc3RhdGljIFR5cGVOYW1lTm90U2V0ID0gXCJUeXBlTmFtZSBub3Qgc2V0XCI7XHJcbiAgICBzdGF0aWMgVHlwZVZlcnNpb25Ob3RTZXQgPSBcIlR5cGVWZXJzaW9uIG5vdCBzZXRcIjtcclxuICAgIHN0YXRpYyBVbmFibGVUb0luc3RhbnRpYXRlVHlwZSA9IFwiVW5hYmxlIHRvIEluc3RhbnRpYXRlIFR5cGVcIjtcclxuICAgIHN0YXRpYyBUeXBlUmVnaXN0cnlOb3RTZXQgPSBcIlR5cGVSZWdpc3RyeSBub3Qgc2V0XCI7XHJcblxyXG4gICAgLy8gVGhyb3duIGJ5IHRoZSBGYWN0b3J5L1R5cGVSZWdpc3RyeVxyXG4gICAgc3RhdGljIFR5cGVOb3RSZWdpc3RlcmVkID0gXCJUeXBlIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhlIFR5cGVSZWdpc3RyeVwiO1xyXG4gICAgXHJcbiAgICAvLyBUaHJvd24gYnkgdGhlIFVwZ3JhZGVyXHJcbiAgICBzdGF0aWMgVHlwZU5vdEluc3RhdGlhYmxlID0gXCJUeXBlIGlzIG5vdCBpbnN0YW50aWFibGVcIjtcclxuICAgIHN0YXRpYyBVcGdyYWRlUGF0aE5vdEZvdW5kID0gXCJVcGdyYWRlIFBhdGggbm90IEZvdW5kXCI7XHJcbiAgICBzdGF0aWMgSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCA9IFwiSW5jb3JyZWN0IFZlcnNpb24gRm9ybWF0XCI7XHJcbiAgICBzdGF0aWMgV3JvbmdWZXJzaW9uSW5VcGdyYWRlZEluc3RhbmNlID0gXCJXcm9uZyBWZXJzaW9uIGluIFVwZ3JhZGVkIEluc3RhbmNlXCI7XHJcbn0iXX0=