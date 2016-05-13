define(["require", "exports"], function (require, exports) {
    "use strict";
    var DomainDispatcher = (function () {
        function DomainDispatcher() {
        }
        DomainDispatcher.setDispatcherImplementation = function (dispatcher) {
            var sThis = DomainDispatcher;
            sThis.dispatcherImplementation = dispatcher;
        };
        DomainDispatcher.registerHandler = function (eventTypeName, handler) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.registerHandler(eventTypeName, handler);
            }
        };
        DomainDispatcher.unregisterHandler = function (eventTypeName, handler) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.unregisterHandler(eventTypeName, handler);
            }
        };
        DomainDispatcher.dispatch = function (event) {
            var sThis = DomainDispatcher;
            if (sThis.dispatcherImplementation) {
                sThis.dispatcherImplementation.dispatch(event);
            }
        };
        return DomainDispatcher;
    }());
    exports.DomainDispatcher = DomainDispatcher;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluRGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUtBO1FBQUE7UUE0QkEsQ0FBQztRQXpCaUIsNENBQTJCLEdBQXpDLFVBQTBDLFVBQXVCO1lBQzdELElBQUksS0FBSyxHQUFHLGdCQUFnQixDQUFDO1lBQzdCLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUM7UUFDaEQsQ0FBQztRQUVhLGdDQUFlLEdBQTdCLFVBQThCLGFBQXFCLEVBQUUsT0FBc0I7WUFDdkUsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0UsQ0FBQztRQUNMLENBQUM7UUFFYSxrQ0FBaUIsR0FBL0IsVUFBZ0MsYUFBcUIsRUFBRSxPQUFzQjtZQUN6RSxJQUFJLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztZQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdFLENBQUM7UUFDTCxDQUFDO1FBRWEseUJBQVEsR0FBdEIsVUFBdUIsS0FBbUI7WUFDdEMsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDO1FBQ0wsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FBQyxBQTVCRCxJQTRCQztJQTVCWSx3QkFBZ0IsbUJBNEI1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0lEaXNwYXRjaGVyfSBmcm9tIFwiLi9JRGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5leHBvcnQgY2xhc3MgRG9tYWluRGlzcGF0Y2hlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBkaXNwYXRjaGVySW1wbGVtZW50YXRpb246IElEaXNwYXRjaGVyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKGRpc3BhdGNoZXI6IElEaXNwYXRjaGVyKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24gPSBkaXNwYXRjaGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24ucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24udW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24uZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyB9Il19