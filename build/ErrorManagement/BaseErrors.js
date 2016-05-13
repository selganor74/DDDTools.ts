define(["require", "exports"], function (require, exports) {
    "use strict";
    var BaseErrors = (function () {
        function BaseErrors() {
        }
        BaseErrors.throw = function (name, message) {
            var err = BaseErrors.getErrorInstance(name, message);
            throw err;
        };
        BaseErrors.getErrorInstance = function (name, message) {
            var err = new Error(message || name);
            err.name = name;
            return err;
        };
        return BaseErrors;
    }());
    exports.BaseErrors = BaseErrors;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ERERUb29scy9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUlBO1FBQUE7UUFZQSxDQUFDO1FBVlUsZ0JBQUssR0FBWixVQUFhLElBQVksRUFBRSxPQUFnQjtZQUN2QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELE1BQU0sR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQUVNLDJCQUFnQixHQUF2QixVQUF3QixJQUFZLEVBQUUsT0FBZ0I7WUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQUFDLEFBWkQsSUFZQztJQVpxQixrQkFBVSxhQVkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIE1pbmltYWwgRXJyb3IgaGFuZGxpbmcgYmFzZSBiZWhhdmlvcnMgZm9yIHRoZSBkb21haW4gbW9kZWwuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRXJyb3JNYW5hZ2VtZW50IHtcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgIHN0YXRpYyB0aHJvdyhuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgZXJyID0gQmFzZUVycm9ycy5nZXRFcnJvckluc3RhbmNlKG5hbWUsIG1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RXJyb3JJbnN0YW5jZShuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBFcnJvciB7XHJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihtZXNzYWdlIHx8IG5hbWUpO1xyXG4gICAgICAgIGVyci5uYW1lID0gbmFtZTtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59XHJcbi8vIH1cclxuIl19