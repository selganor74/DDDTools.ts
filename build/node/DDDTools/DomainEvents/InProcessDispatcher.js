var DDDTools;
(function (DDDTools) {
    var DomainEvents;
    (function (DomainEvents) {
        var SimpleGuid = DDDTools.Utils.SimpleGuid;
        class InProcessDispatcher {
            constructor() {
                this.delegatesRegistry = {};
            }
            clear() {
                this.delegatesRegistry = {};
            }
            registerHandler(eventTypeName, handler) {
                if (!this.delegatesRegistry[eventTypeName]) {
                    this.delegatesRegistry[eventTypeName] = [];
                }
                if (!handler.__handlerId) {
                    handler.__handlerId = SimpleGuid.generate();
                    this.delegatesRegistry[eventTypeName].push(handler);
                }
            }
            unregisterHandler(eventTypeName, handler) {
                if (handler.__handlerId) {
                    for (var element in this.delegatesRegistry[eventTypeName]) {
                        var currentElement = this.delegatesRegistry[eventTypeName][element];
                        if (currentElement.__handlerId === handler.__handlerId) {
                            this.delegatesRegistry[eventTypeName].splice(Number(element), 1);
                            break;
                        }
                    }
                }
            }
            dispatch(event) {
                if (!this.delegatesRegistry[event.__typeName]) {
                    return;
                }
                var Errors = [];
                for (var element of this.delegatesRegistry[event.__typeName]) {
                    try {
                        element(event);
                    }
                    catch (e) {
                        Errors.push(e);
                    }
                }
                if (Errors.length != 0) {
                    var message = this.buildErrorMessage(Errors);
                    var e = new Error(message);
                    e.name = "Dispatcher Error";
                    console.log(e);
                }
            }
            buildErrorMessage(Errors) {
                var message = "";
                for (var element of Errors) {
                    message += element.name + ":" + element.message + "\n";
                }
                return message;
            }
        }
        DomainEvents.InProcessDispatcher = InProcessDispatcher;
    })(DomainEvents = DDDTools.DomainEvents || (DDDTools.DomainEvents = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5Qcm9jZXNzRGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxJQUFVLFFBQVEsQ0ErRGpCO0FBL0RELFdBQVUsUUFBUTtJQUFDLElBQUEsWUFBWSxDQStEOUI7SUEvRGtCLFdBQUEsWUFBWSxFQUFDLENBQUM7UUFFN0IsSUFBTyxVQUFVLEdBQUcsY0FBSyxDQUFDLFVBQVUsQ0FBQztRQUVyQztZQUFBO2dCQUNZLHNCQUFpQixHQUFpRCxFQUFFLENBQUM7WUF5RGpGLENBQUM7WUF2RFUsS0FBSztnQkFDUixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLENBQUM7WUFFTSxlQUFlLENBQUMsYUFBcUIsRUFBRSxPQUFzQjtnQkFDaEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQU8sT0FBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE9BQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO1lBQ0wsQ0FBQztZQUVNLGlCQUFpQixDQUFDLGFBQXFCLEVBQUUsT0FBc0I7Z0JBRWxFLEVBQUUsQ0FBQyxDQUFPLE9BQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BFLEVBQUUsQ0FBQyxDQUFPLGNBQWUsQ0FBQyxXQUFXLEtBQVcsT0FBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNqRSxLQUFLLENBQUM7d0JBQ1YsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBRU0sUUFBUSxDQUFDLEtBQW1CO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFJLE1BQU0sR0FBWSxFQUFFLENBQUM7Z0JBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUM7d0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztZQUNMLENBQUM7WUFFTyxpQkFBaUIsQ0FBQyxNQUFlO2dCQUNyQyxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUM7Z0JBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDM0QsQ0FBQztnQkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ25CLENBQUM7UUFDTCxDQUFDO1FBMURZLGdDQUFtQixzQkEwRC9CLENBQUE7SUFDTCxDQUFDLEVBL0RrQixZQUFZLEdBQVoscUJBQVksS0FBWixxQkFBWSxRQStEOUI7QUFBRCxDQUFDLEVBL0RTLFFBQVEsS0FBUixRQUFRLFFBK0RqQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluUHJvY2Vzc0Rpc3BhdGNoZXIge1xyXG4gICAgICAgIHByaXZhdGUgZGVsZWdhdGVzUmVnaXN0cnk6IHsgW2V2ZW50VHlwZU5hbWU6IHN0cmluZ106IElFdmVudEhhbmRsZXJbXSB9ID0ge307XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWRkcyBhbiBoYW5kbGUgaWYgKGFuZCBvbmx5IGlmKSB0aGUgaGFuZGxlciBoYXMgbm90IGJlZW4gXCJzdGFtcGVkXCJcclxuICAgICAgICAgICAgaWYgKCEoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdLnB1c2goaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gQWN0IG9ubHkgaWQgaGFuZGxlciBoYXMgYmVlbiByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICBpZiAoKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV1bZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCg8YW55PmN1cnJlbnRFbGVtZW50KS5fX2hhbmRsZXJJZCA9PT0gKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXS5zcGxpY2UoTnVtYmVyKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgRXJyb3JzOiBFcnJvcltdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgb2YgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBFcnJvcnMucHVzaChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRXJyb3JzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuYnVpbGRFcnJvck1lc3NhZ2UoRXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZS5uYW1lID0gXCJEaXNwYXRjaGVyIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZEVycm9yTWVzc2FnZShFcnJvcnM6IEVycm9yW10pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiBFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gZWxlbWVudC5uYW1lICsgXCI6XCIgKyBlbGVtZW50Lm1lc3NhZ2UgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==