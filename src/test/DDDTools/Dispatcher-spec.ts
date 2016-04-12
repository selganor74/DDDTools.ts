/// <reference path="../../app/DDDTools/DomainEvents/Dispatcher.ts" />
/// <reference path="../../app/DDDTools/IDomainEvent.ts" />
/// <reference path="../../app/DDDTools/BaseValueObject.ts" />

namespace CdC.Tests.Dispatcher {

    import Dispatcher = DDDTools.DomainEvents.Dispatcher;
    import IEventHandler = DDDTools.DomainEvents.IEventHandler;
    import IDomainEvent = DDDTools.IDomainEvent;
    import BaseValueObject = DDDTools.BaseValueObject;

    class aDomainEvent extends BaseValueObject<aDomainEvent> implements IDomainEvent {
        __typeName = "CdC.Tests.Dispatcher.aDomainEvent";
        __typeVersion = "v1";
    }

    describe("Dispatcher", () => {

        it("Multiple registration of the same eventhandler, must be treated as one.", () => {
            var eventHandler: IEventHandler;
            var counter = 0;

            eventHandler = (event: IDomainEvent) => {
                counter++;
            };

            var event = new aDomainEvent;

            Dispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            Dispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            Dispatcher.dispatch(event);

            // Handler has been registered twice, but dispatcher should call it once.
            expect(counter).toEqual(1);

            Dispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
        });

        it("After deregistering an handler, dispatch must not call it anymore", () => {
            var eventHandler: IEventHandler;
            var counter = 0;

            eventHandler = (event: IDomainEvent) => {
                counter++;
            };

            var event = new aDomainEvent;

            Dispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            Dispatcher.dispatch(event);

            // Just to verify that Handler has been correctly registered.
            expect(counter).toEqual(1);

            Dispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            counter = 0;
            Dispatcher.dispatch(event);
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

            Dispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
            Dispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);

            try {
                Dispatcher.dispatch(event);
            } catch (e) {
                expect(e.message).toEqual("Error:Error thrown by the handler\n");
            }

            // Verifies that the non Throwing Handler has not been thrown.
            expect(counter).toEqual(1);

            Dispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            Dispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);

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

            Dispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            Dispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);

            Dispatcher.dispatch(event);

            expect(counter).toEqual(2);

            Dispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
            Dispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);

        });
    });

}