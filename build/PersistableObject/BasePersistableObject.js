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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBlcnNpc3RhYmxlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQU9BO1FBQUE7WUFFVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1lBQ3hCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBaUN0QyxDQUFDO1FBL0JVLHdDQUFRLEdBQWY7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELElBQUksY0FBYyxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksYUFBYSxHQUFHLDJCQUFZLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTdELE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDekIsQ0FBQztRQUdNLHdDQUFRLEdBQWYsVUFBd0IsS0FBYTtZQUlqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixlQUFNLENBQUMsS0FBSyxDQUFDLGVBQU0sQ0FBQyxrQkFBa0IsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1lBQzVFLENBQUM7WUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGlCQUF3QixDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekYsQ0FBQztRQUdMLENBQUM7UUFDTCw0QkFBQztJQUFELENBQUMsQUFwQ0QsSUFvQ0M7SUFwQ3FCLDZCQUFxQix3QkFvQzFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHtGYWN0b3J5IGFzIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeX0gZnJvbSBcIi4vRmFjdG9yeVwiO1xyXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCBpbXBsZW1lbnRzIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgcHVibGljIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5hbWVOb3RTZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVWZXJzaW9uTm90U2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0b1JlY29uc3RpdHV0ZSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMpO1xyXG4gICAgICAgIHZhciByZWNvbnN0aXR1dGVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHRvUmVjb25zdGl0dXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlY29uc3RpdHV0ZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZTxUU3RhdGU+KHN0YXRlOiBUU3RhdGUpIHtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlN0YXRlSXNOb3RBbk9iamVjdCwgXCJzdGF0ZSBkZXZlIGVzc2VyZSB1biBvZ2dldHRvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlRWxlbWVudCA9IHN0YXRlW2VsZW1lbnRdO1xyXG4gICAgICAgICAgICB0aGlzW2VsZW1lbnRdID0gUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUoY3VycmVudFN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZ2V0U3RhdGUoKSApICk7XHJcbiAgICB9XHJcbn1cclxuLy8gfSJdfQ==