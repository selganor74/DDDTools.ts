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
//# sourceMappingURL=InProcessDispatcher-spec.js.map