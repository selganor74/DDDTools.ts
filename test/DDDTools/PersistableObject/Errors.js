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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBSUE7UUFBNEIsMEJBQVU7UUFBdEM7WUFBNEIsOEJBQVU7UUFpQnRDLENBQUM7UUFkVSx5QkFBa0IsR0FBRyx3QkFBd0IsQ0FBQztRQUM5QyxxQkFBYyxHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLHdCQUFpQixHQUFHLHFCQUFxQixDQUFDO1FBQzFDLDhCQUF1QixHQUFHLDRCQUE0QixDQUFDO1FBQ3ZELHlCQUFrQixHQUFHLHNCQUFzQixDQUFDO1FBRzVDLHdCQUFpQixHQUFHLG9EQUFvRCxDQUFDO1FBR3pFLHlCQUFrQixHQUFHLDBCQUEwQixDQUFDO1FBQ2hELDBCQUFtQixHQUFHLHdCQUF3QixDQUFDO1FBQy9DLDZCQUFzQixHQUFHLDBCQUEwQixDQUFDO1FBQ3BELHFDQUE4QixHQUFHLG9DQUFvQyxDQUFDO1FBQ2pGLGFBQUM7SUFBRCxDQUFDLEFBakJELENBQTRCLHVCQUFVLEdBaUJyQztJQWpCWSxjQUFNLFNBaUJsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbmltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgLy8gVGhyb3duIGJ5IHBlcnNpc3RhYmxlIG9iamVjdHNcclxuICAgIHN0YXRpYyBTdGF0ZUlzTm90QW5PYmplY3QgPSBcIlN0YXRlIGlzIG5vdCBhbiBPYmplY3RcIjtcclxuICAgIHN0YXRpYyBUeXBlTmFtZU5vdFNldCA9IFwiVHlwZU5hbWUgbm90IHNldFwiO1xyXG4gICAgc3RhdGljIFR5cGVWZXJzaW9uTm90U2V0ID0gXCJUeXBlVmVyc2lvbiBub3Qgc2V0XCI7XHJcbiAgICBzdGF0aWMgVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUgPSBcIlVuYWJsZSB0byBJbnN0YW50aWF0ZSBUeXBlXCI7XHJcbiAgICBzdGF0aWMgVHlwZVJlZ2lzdHJ5Tm90U2V0ID0gXCJUeXBlUmVnaXN0cnkgbm90IHNldFwiO1xyXG5cclxuICAgIC8vIFRocm93biBieSB0aGUgRmFjdG9yeS9UeXBlUmVnaXN0cnlcclxuICAgIHN0YXRpYyBUeXBlTm90UmVnaXN0ZXJlZCA9IFwiVHlwZSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB3aXRoIHRoZSBUeXBlUmVnaXN0cnlcIjtcclxuICAgIFxyXG4gICAgLy8gVGhyb3duIGJ5IHRoZSBVcGdyYWRlclxyXG4gICAgc3RhdGljIFR5cGVOb3RJbnN0YXRpYWJsZSA9IFwiVHlwZSBpcyBub3QgaW5zdGFudGlhYmxlXCI7XHJcbiAgICBzdGF0aWMgVXBncmFkZVBhdGhOb3RGb3VuZCA9IFwiVXBncmFkZSBQYXRoIG5vdCBGb3VuZFwiO1xyXG4gICAgc3RhdGljIEluY29ycmVjdFZlcnNpb25Gb3JtYXQgPSBcIkluY29ycmVjdCBWZXJzaW9uIEZvcm1hdFwiO1xyXG4gICAgc3RhdGljIFdyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSA9IFwiV3JvbmcgVmVyc2lvbiBpbiBVcGdyYWRlZCBJbnN0YW5jZVwiO1xyXG59XHJcbi8vIH0iXX0=