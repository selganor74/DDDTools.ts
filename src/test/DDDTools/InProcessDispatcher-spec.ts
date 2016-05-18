/// <reference path="../../../typings/browser.d.ts"/>

/// <reference path="../../../build/browser/ddd-tools.d.ts" />
// / <reference path="../../DDDTools/DomainEvents/DomainDispatcher.ts" />
// / <reference path="../../DDDTools/DomainEvents/IEventHandler.ts" />
// / <reference path="../../DDDTools/DomainEvents/IDomainEvent.ts" />
// / <reference path="../../DDDTools/ValueObject/BaseValueObject.ts" />
// / <reference path="../../DDDTools/DomainEvents/InProcessDispatcher.ts" />

// import {DomainDispatcher} from "../../DDDTools/DomainEvents/DomainDispatcher";
// import {IEventHandler} from "../../DDDTools/DomainEvents/IEventHandler";
// import {IDomainEvent} from "../../DDDTools/DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../../DDDTools/ValueObject/BaseValueObject";
// import {InProcessDispatcher} from "../../DDDTools/DomainEvents/InProcessDispatcher";

namespace CdC.Tests.ForDispatcher {

    import DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
    import IEventHandler = DDDTools.DomainEvents.IEventHandler;
    import IDomainEvent = DDDTools.DomainEvents.IDomainEvent;
    import BaseValueObject = DDDTools.ValueObject.BaseValueObject;
    import InProcessDispatcher = DDDTools.DomainEvents.InProcessDispatcher;


    class aDomainEvent extends BaseValueObject<aDomainEvent> implements IDomainEvent {
        __typeName = "CdC.Tests.Dispatcher.aDomainEvent";
        __typeVersion = "v1";
    }

    describe("InProcessDispatcher", () => {

        it("Multiple registration of the same eventhandler, must be treated as one.", () => {
            var eventHandler: IEventHandler;
            var counter = 0;

            eventHandler = (event: IDomainEvent) => {
                counter++;
            };

            var event = new aDomainEvent;

            DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());

            DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            DomainDispatcher.dispatch(event);

            // Handler has been registered twice, but dispatcher should call it once.
            expect(counter).toEqual(1);

            DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
        });

        it("After deregistering an handler, dispatch must not call it anymore", () => {
            var eventHandler: IEventHandler;
            var counter = 0;

            eventHandler = (event: IDomainEvent) => {
                counter++;
            };

            var event = new aDomainEvent;

            DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());

            DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            DomainDispatcher.dispatch(event);

            // Just to verify that Handler has been correctly registered.
            expect(counter).toEqual(1);

            DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            counter = 0;
            DomainDispatcher.dispatch(event);
            expect(counter).toEqual(0);
        });

        it("All handlers will be called by dispatch, even if handlers throw.", () => {
            var eventHandler: IEventHandler;
            var aThrowingHandler: IEventHandler;
            var counter = 0;

            aThrowingHandler = (event: IDomainEvent) => {
                throw new Error("Error thrown by the handler");
            };

            eventHandler = (event: IDomainEvent) => {
                counter++;
            };

            var event = new aDomainEvent;

            DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());

            DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
            DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            try {
                DomainDispatcher.dispatch(event);
            } catch (e) {
                expect(e.message).toEqual("Error:Error thrown by the handler\n");
            }

            // Verifies that the non Throwing Handler has not been thrown.
            expect(counter).toEqual(1);

            DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);

        });

        it("Handlers must be called in the same order they are registered.", () => {
            var eventHandler: IEventHandler;
            var secondEventHandler: IEventHandler;
            var counter = 0;

            eventHandler = (event: IDomainEvent) => {
                expect(counter).toEqual(0);
                counter++;
            };

            secondEventHandler = (event: IDomainEvent) => {
                expect(counter).toEqual(1);
                counter++;
            };

            var event = new aDomainEvent;

            DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());

            DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);

            DomainDispatcher.dispatch(event);

            expect(counter).toEqual(2);

            DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);
        });
    });
}