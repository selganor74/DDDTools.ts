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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ERERUb29scy9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFBQTtJQVlBLENBQUM7SUFWVSxnQkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE9BQWdCO1FBQ3ZDLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckQsTUFBTSxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRU0sMkJBQWdCLEdBQXZCLFVBQXdCLElBQVksRUFBRSxPQUFnQjtRQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWnFCLGtCQUFVLGFBWS9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTWluaW1hbCBFcnJvciBoYW5kbGluZyBiYXNlIGJlaGF2aW9ycyBmb3IgdGhlIGRvbWFpbiBtb2RlbC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICBzdGF0aWMgdGhyb3cobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGVyciA9IEJhc2VFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShuYW1lLCBtZXNzYWdlKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEVycm9ySW5zdGFuY2UobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSB8fCBuYW1lKTtcclxuICAgICAgICBlcnIubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxufSJdfQ==