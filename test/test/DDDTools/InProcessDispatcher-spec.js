var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../../DDDTools/DomainEvents/DomainDispatcher", "../../DDDTools/ValueObject/BaseValueObject", "../../DDDTools/DomainEvents/InProcessDispatcher"], function (require, exports, DomainDispatcher_1, BaseValueObject_1, InProcessDispatcher_1) {
    "use strict";
    var CdC;
    (function (CdC) {
        var Tests;
        (function (Tests) {
            var ForDispatcher;
            (function (ForDispatcher) {
                var aDomainEvent = (function (_super) {
                    __extends(aDomainEvent, _super);
                    function aDomainEvent() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.Dispatcher.aDomainEvent";
                        this.__typeVersion = "v1";
                    }
                    return aDomainEvent;
                }(BaseValueObject_1.BaseValueObject));
                describe("InProcessDispatcher", function () {
                    it("Multiple registration of the same eventhandler, must be treated as one.", function () {
                        var eventHandler;
                        var counter = 0;
                        eventHandler = function (event) {
                            counter++;
                        };
                        var event = new aDomainEvent;
                        DomainDispatcher_1.DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher_1.InProcessDispatcher());
                        DomainDispatcher_1.DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        DomainDispatcher_1.DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        DomainDispatcher_1.DomainDispatcher.dispatch(event);
                        expect(counter).toEqual(1);
                        DomainDispatcher_1.DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    });
                    it("After deregistering an handler, dispatch must not call it anymore", function () {
                        var eventHandler;
                        var counter = 0;
                        eventHandler = function (event) {
                            counter++;
                        };
                        var event = new aDomainEvent;
                        DomainDispatcher_1.DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher_1.InProcessDispatcher());
                        DomainDispatcher_1.DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        DomainDispatcher_1.DomainDispatcher.dispatch(event);
                        expect(counter).toEqual(1);
                        DomainDispatcher_1.DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        counter = 0;
                        DomainDispatcher_1.DomainDispatcher.dispatch(event);
                        expect(counter).toEqual(0);
                    });
                    it("All handlers will be called by dispatch, even if handlers throw.", function () {
                        var eventHandler;
                        var aThrowingHandler;
                        var counter = 0;
                        aThrowingHandler = function (event) {
                            throw new Error("Error thrown by the handler");
                        };
                        eventHandler = function (event) {
                            counter++;
                        };
                        var event = new aDomainEvent;
                        DomainDispatcher_1.DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher_1.InProcessDispatcher());
                        DomainDispatcher_1.DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
                        DomainDispatcher_1.DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        try {
                            DomainDispatcher_1.DomainDispatcher.dispatch(event);
                        }
                        catch (e) {
                            expect(e.message).toEqual("Error:Error thrown by the handler\n");
                        }
                        expect(counter).toEqual(1);
                        DomainDispatcher_1.DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        DomainDispatcher_1.DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
                    });
                    it("Handlers must be called in the same order they are registered.", function () {
                        var eventHandler;
                        var secondEventHandler;
                        var counter = 0;
                        eventHandler = function (event) {
                            expect(counter).toEqual(0);
                            counter++;
                        };
                        secondEventHandler = function (event) {
                            expect(counter).toEqual(1);
                            counter++;
                        };
                        var event = new aDomainEvent;
                        DomainDispatcher_1.DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher_1.InProcessDispatcher());
                        DomainDispatcher_1.DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        DomainDispatcher_1.DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);
                        DomainDispatcher_1.DomainDispatcher.dispatch(event);
                        expect(counter).toEqual(2);
                        DomainDispatcher_1.DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                        DomainDispatcher_1.DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);
                    });
                });
            })(ForDispatcher = Tests.ForDispatcher || (Tests.ForDispatcher = {}));
        })(Tests = CdC.Tests || (CdC.Tests = {}));
    })(CdC || (CdC = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5Qcm9jZXNzRGlzcGF0Y2hlci1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvREREVG9vbHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFRQSxJQUFVLEdBQUcsQ0EwSFo7SUExSEQsV0FBVSxHQUFHO1FBQUMsSUFBQSxLQUFLLENBMEhsQjtRQTFIYSxXQUFBLEtBQUs7WUFBQyxJQUFBLGFBQWEsQ0EwSGhDO1lBMUhtQixXQUFBLGFBQWEsRUFBQyxDQUFDO2dCQUUvQjtvQkFBMkIsZ0NBQTZCO29CQUF4RDt3QkFBMkIsOEJBQTZCO3dCQUNwRCxlQUFVLEdBQUcsbUNBQW1DLENBQUM7d0JBQ2pELGtCQUFhLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFELG1CQUFDO2dCQUFELENBQUMsQUFIRCxDQUEyQixpQ0FBZSxHQUd6QztnQkFFRCxRQUFRLENBQUMscUJBQXFCLEVBQUU7b0JBRTVCLEVBQUUsQ0FBQyx5RUFBeUUsRUFBRTt3QkFDMUUsSUFBSSxZQUEyQixDQUFDO3dCQUNoQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7d0JBRWhCLFlBQVksR0FBRyxVQUFDLEtBQW1COzRCQUMvQixPQUFPLEVBQUUsQ0FBQzt3QkFDZCxDQUFDLENBQUM7d0JBRUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUM7d0JBRTdCLG1DQUFnQixDQUFDLDJCQUEyQixDQUFDLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxDQUFDO3dCQUV4RSxtQ0FBZ0IsQ0FBQyxlQUFlLENBQUMsbUNBQW1DLEVBQUUsWUFBWSxDQUFDLENBQUM7d0JBQ3BGLG1DQUFnQixDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFFcEYsbUNBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUdqQyxNQUFNLENBQUMsT0FBTyxDQUFD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QUMsQ0FBQzt3QkFFRixrQkFBa0IsR0FBRyxVQUFDLEtBQW1COzRCQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixPQUFPLEVBQUUsQ0FBQzt3QkFDZCxDQUFDLENBQUM7d0JBRUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUM7d0JBRTdCLG1DQUFnQixDQUFDLDJCQUEyQixDQUFDLElBQUkseUNBQW1CLEVBQUUsQ0FBQyxDQUFDO3dCQUV4RSxtQ0FBZ0IsQ0FBQyxlQUFlLENBQUMsbUNBQW1DLEVBQUUsWUFBWSxDQUFDLENBQUM7d0JBQ3BGLG1DQUFnQixDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3dCQUUxRixtQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRWpDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTNCLG1DQUFnQixDQUFDLGlCQUFpQixDQUFDLG1DQUFtQyxFQUFFLFlBQVksQ0FBQyxDQUFDO3dCQUN0RixtQ0FBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxtQ0FBbUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNoRyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUExSG1CLGFBQWEsR0FBYixtQkFBYSxLQUFiLG1CQUFhLFFBMEhoQztRQUFELENBQUMsRUExSGEsS0FBSyxHQUFMLFNBQUssS0FBTCxTQUFLLFFBMEhsQjtJQUFELENBQUMsRUExSFMsR0FBRyxLQUFILEdBQUcsUUEwSFoiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uLy4uL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi8uLi9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vLi4vREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBDZEMuVGVzdHMuRm9yRGlzcGF0Y2hlciB7XHJcblxyXG4gICAgY2xhc3MgYURvbWFpbkV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PGFEb21haW5FdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpYmUoXCJJblByb2Nlc3NEaXNwYXRjaGVyXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgaXQoXCJNdWx0aXBsZSByZWdpc3RyYXRpb24gb2YgdGhlIHNhbWUgZXZlbnRoYW5kbGVyLCBtdXN0IGJlIHRyZWF0ZWQgYXMgb25lLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgYURvbWFpbkV2ZW50O1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5zZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24obmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQgdHdpY2UsIGJ1dCBkaXNwYXRjaGVyIHNob3VsZCBjYWxsIGl0IG9uY2UuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFmdGVyIGRlcmVnaXN0ZXJpbmcgYW4gaGFuZGxlciwgZGlzcGF0Y2ggbXVzdCBub3QgY2FsbCBpdCBhbnltb3JlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJRG9tYWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEp1c3QgdG8gdmVyaWZ5IHRoYXQgSGFuZGxlciBoYXMgYmVlbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgZXhwZWN0KGNvdW50ZXIpLnRvRXF1YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdChcIkFsbCBoYW5kbGVycyB3aWxsIGJlIGNhbGxlZCBieSBkaXNwYXRjaCwgZXZlbiBpZiBoYW5kbGVycyB0aHJvdy5cIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyO1xyXG4gICAgICAgICAgICB2YXIgYVRocm93aW5nSGFuZGxlcjogSUV2ZW50SGFuZGxlcjtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgYVRocm93aW5nSGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcIik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQ6IElEb21haW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IGFEb21haW5FdmVudDtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCkpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoXCJDZEMuVGVzdHMuRGlzcGF0Y2hlci5hRG9tYWluRXZlbnRcIiwgYVRocm93aW5nSGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGV4cGVjdChlLm1lc3NhZ2UpLnRvRXF1YWwoXCJFcnJvcjpFcnJvciB0aHJvd24gYnkgdGhlIGhhbmRsZXJcXG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWVzIHRoYXQgdGhlIG5vbiBUaHJvd2luZyBIYW5kbGVyIGhhcyBub3QgYmVlbiB0aHJvd24uXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDEpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGFUaHJvd2luZ0hhbmRsZXIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXQoXCJIYW5kbGVycyBtdXN0IGJlIGNhbGxlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGV5IGFyZSByZWdpc3RlcmVkLlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRFdmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXI7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgwKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNlY29uZEV2ZW50SGFuZGxlciA9IChldmVudDogSURvbWFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoY291bnRlcikudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBhRG9tYWluRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIGV4cGVjdChjb3VudGVyKS50b0VxdWFsKDIpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihcIkNkQy5UZXN0cy5EaXNwYXRjaGVyLmFEb21haW5FdmVudFwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKFwiQ2RDLlRlc3RzLkRpc3BhdGNoZXIuYURvbWFpbkV2ZW50XCIsIHNlY29uZEV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSJdfQ==