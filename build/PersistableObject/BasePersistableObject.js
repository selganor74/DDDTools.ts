define(["require", "exports", "./Errors", "./Factory", "../Serialization/Serializer", "../Serialization/Deserializer"], function (require, exports, Errors_1, Factory_1, Serializer_1, Deserializer_1) {
    "use strict";
    var BasePersistableObject = (function () {
        function BasePersistableObject() {
            this.__typeName = "";
            this.__typeVersion = "";
        }
        BasePersistableObject.prototype.getState = function () {
            if (this.__typeName === "") {
                Errors_1.Errors.throw(Errors_1.Errors.TypeNameNotSet);
            }
            if (this.__typeVersion === "") {
                Errors_1.Errors.throw(Errors_1.Errors.TypeVersionNotSet);
            }
            var toReconstitute = Serializer_1.Serializer.serialize(this);
            var reconstituted = Deserializer_1.Deserializer.deserialize(toReconstitute);
            return reconstituted;
        };
        BasePersistableObject.prototype.setState = function (state) {
            if (typeof state !== "object") {
                Errors_1.Errors.throw(Errors_1.Errors.StateIsNotAnObject, "state deve essere un oggetto");
            }
            for (var element in state) {
                var currentStateElement = state[element];
                this[element] = Factory_1.Factory.createObjectsFromState(currentStateElement);
            }
        };
        return BasePersistableObject;
    }());
    exports.BasePersistableObject = BasePersistableObject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBlcnNpc3RhYmxlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQU9BO1FBQUE7WUFFVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1lBQ3hCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBaUN0QyxDQUFDO1FBL0JVLHdDQUFRLEdBQWY7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELElBQUksY0FBYyxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksYUFBYSxHQUFHLDJCQUFZLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTdELE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekIsQ0FBQztRQUdNLHdDQUFRLEdBQWYsVUFBd0IsS0FBYTtZQUlqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixlQUFNLENBQUMsS0FBSyxDQUFDLGVBQU0sQ0FBQyxrQkFBa0IsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1lBQzVFLENBQUM7WUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGlCQUFPLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4RSxDQUFDO1FBR0wsQ0FBQztRQUNMLDRCQUFDO0lBQUQsQ0FBQyxBQXBDRCxJQW9DQztJQXBDcUIsNkJBQXFCLHdCQW9DMUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuL0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7RGVzZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXJcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUGVyc2lzdGFibGVPYmplY3QgaW1wbGVtZW50cyBJUGVyc2lzdGFibGUge1xyXG5cclxuICAgIHB1YmxpYyBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGdldFN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX190eXBlTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOYW1lTm90U2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlVmVyc2lvbk5vdFNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9SZWNvbnN0aXR1dGUgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZSh0aGlzKTtcclxuICAgICAgICB2YXIgcmVjb25zdGl0dXRlZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh0b1JlY29uc3RpdHV0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWNvbnN0aXR1dGVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGU8VFN0YXRlPihzdGF0ZTogVFN0YXRlKSB7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5TdGF0ZUlzTm90QW5PYmplY3QsIFwic3RhdGUgZGV2ZSBlc3NlcmUgdW4gb2dnZXR0b1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUVsZW1lbnQgPSBzdGF0ZVtlbGVtZW50XTtcclxuICAgICAgICAgICAgdGhpc1tlbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShjdXJyZW50U3RhdGVFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggdGhpcy5nZXRTdGF0ZSgpICkgKTtcclxuICAgIH1cclxufVxyXG4vLyB9Il19