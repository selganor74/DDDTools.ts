var DDDTools;
(function (DDDTools) {
    var ErrorManagement;
    (function (ErrorManagement) {
        class BaseErrors {
            static throw(name, message) {
                var err = BaseErrors.getErrorInstance(name, message);
                throw err;
            }
            static getErrorInstance(name, message) {
                var err = new Error(message || name);
                err.name = name;
                return err;
            }
        }
        ErrorManagement.BaseErrors = BaseErrors;
    })(ErrorManagement = DDDTools.ErrorManagement || (DDDTools.ErrorManagement = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ERERUb29scy9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxJQUFVLFFBQVEsQ0FjakI7QUFkRCxXQUFVLFFBQVE7SUFBQyxJQUFBLGVBQWUsQ0FjakM7SUFka0IsV0FBQSxlQUFlLEVBQUMsQ0FBQztRQUNoQztZQUVJLE9BQU8sS0FBSyxDQUFDLElBQVksRUFBRSxPQUFnQjtnQkFDdkMsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDckQsTUFBTSxHQUFHLENBQUM7WUFDZCxDQUFDO1lBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsT0FBZ0I7Z0JBQ2xELElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDckMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZixDQUFDO1FBQ0wsQ0FBQztRQVpxQiwwQkFBVSxhQVkvQixDQUFBO0lBQ0wsQ0FBQyxFQWRrQixlQUFlLEdBQWYsd0JBQWUsS0FBZix3QkFBZSxRQWNqQztBQUFELENBQUMsRUFkUyxRQUFRLEtBQVIsUUFBUSxRQWNqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBNaW5pbWFsIEVycm9yIGhhbmRsaW5nIGJhc2UgYmVoYXZpb3JzIGZvciB0aGUgZG9tYWluIG1vZGVsLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkVycm9yTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgICAgIHN0YXRpYyB0aHJvdyhuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IEJhc2VFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShuYW1lLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldEVycm9ySW5zdGFuY2UobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UgfHwgbmFtZSk7XHJcbiAgICAgICAgICAgIGVyci5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=