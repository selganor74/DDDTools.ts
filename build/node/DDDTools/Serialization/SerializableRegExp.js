var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        class SerializableRegExp {
            constructor(regExp) {
                this.__typeName = "RegExp";
                this.__typeVersion = "v1";
                this.__regularExpression = regExp.toString();
            }
            getRegExp() {
                return new RegExp(this.__regularExpression);
            }
        }
        Serialization.SerializableRegExp = SerializableRegExp;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphYmxlUmVnRXhwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlUmVnRXhwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLElBQVUsUUFBUSxDQWlCakI7QUFqQkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxhQUFhLENBaUIvQjtJQWpCa0IsV0FBQSxhQUFhLEVBQUMsQ0FBQztRQUk5QjtZQUtJLFlBQVksTUFBYztnQkFKMUIsZUFBVSxHQUFXLFFBQVEsQ0FBQztnQkFDOUIsa0JBQWEsR0FBVyxJQUFJLENBQUM7Z0JBSXpCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakQsQ0FBQztZQUVELFNBQVM7Z0JBQ0wsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2hELENBQUM7UUFDTCxDQUFDO1FBWlksZ0NBQWtCLHFCQVk5QixDQUFBO0lBQ0wsQ0FBQyxFQWpCa0IsYUFBYSxHQUFiLHNCQUFhLEtBQWIsc0JBQWEsUUFpQi9CO0FBQUQsQ0FBQyxFQWpCUyxRQUFRLEtBQVIsUUFBUSxRQWlCakIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVSZWdFeHAgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlJlZ0V4cFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBfX3JlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlZ0V4cDogUmVnRXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVnRXhwKCk6IFJlZ0V4cCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19