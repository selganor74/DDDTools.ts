define(["require", "exports", "../Utils/SimpleGuid"], function (require, exports, SimpleGuid_1) {
    "use strict";
    var Touch = (function () {
        function Touch() {
        }
        Touch.touch = function (object) {
            if (typeof object === "object") {
                var newId = SimpleGuid_1.SimpleGuid.generate();
                object.__objectInstanceId = newId;
            }
        };
        Touch.untouch = function (object) {
            if (object.__objectInstanceId) {
                delete object.__objectInstanceId;
            }
        };
        Touch.hasBeenTouched = function (object) {
            var casted = object;
            if (casted.__objectInstanceId) {
                return true;
            }
            return false;
        };
        return Touch;
    }());
    exports.Touch = Touch;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG91Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9Ub3VjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQU1BO1FBQUE7UUErQkEsQ0FBQztRQTNCaUIsV0FBSyxHQUFuQixVQUFvQixNQUFXO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksS0FBSyxHQUFHLHVCQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUM7UUFLYSxhQUFPLEdBQXJCLFVBQXNCLE1BQVc7WUFDN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxNQUFNLENBQUMsa0JBQWtCLENBQUM7WUFDckMsQ0FBQztRQUNMLENBQUM7UUFLYSxvQkFBYyxHQUE1QixVQUE2QixNQUFXO1lBQ3BDLElBQUksTUFBTSxHQUFrQixNQUFNLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUwsWUFBQztJQUFELENBQUMsQUEvQkQsSUErQkM7SUEvQlksYUFBSyxRQStCakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuICAgIC8qKlxyXG4gICAgICogYWRkcyBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkgdG8gYW4gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB2YXIgbmV3SWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQgPSBuZXdJZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmVzIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkgZnJvbSBhbiBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB1bnRvdWNoKG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGZvciB0aGUgcHJlc2VuY2Ugb2YgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaGFzQmVlblRvdWNoZWQob2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgY2FzdGVkID0gPElUeXBlVHJhY2tpbmc+b2JqZWN0O1xyXG4gICAgICAgIGlmIChjYXN0ZWQuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vLyB9Il19