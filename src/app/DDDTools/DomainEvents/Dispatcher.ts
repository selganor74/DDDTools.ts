/// <reference path="../IDomainEvent.ts" />
/// <reference path="../StatefulObject/SimpleGuid.ts" />

namespace DDDTools.DomainEvents {

    import SimpleGuid = DDDTools.StatefulObject.SimpleGuid;

    export interface IMessageHandler {
        (domainEvent: IDomainEvent): void;
    }

    export class Dispatcher {
        private static delegatesRegistry: { [eventTypeName: string]: IMessageHandler[] };

        public static registerHandler(eventTypeName: string, handler: IMessageHandler) {
            var sThis = Dispatcher;
            if (!sThis.delegatesRegistry[eventTypeName]) {
                sThis.delegatesRegistry[eventTypeName] = [];
            }
            // Adds an handle if (and only if) the handler has not been "stamped"
            if (!(<any>handler).__handlerId) {
                (<any>handler).__handlerId = SimpleGuid.generate();
                sThis.delegatesRegistry[eventTypeName].push(handler);                
            }
        }

        public static dispatch(event: IDomainEvent) {
            var sThis = Dispatcher;
            var Errors: Error[] = [];
            for (var element of sThis.delegatesRegistry[event.__typeName]) {
                try {
                    element(event);
                } catch (e) {
                    Errors.push(e);
                }
            }
            if (Errors.length != 0) {
                var message = sThis.buildErrorMessage(Errors);
                var e = new Error(message);
                e.name = "Dispatcher Error";
                throw e;
            }
        }

        private static buildErrorMessage(Errors: Error[]): string {
            var message: string = "";
            for (var element of Errors) {
                message += element.name + ":" + element.message + "\n";
            }
            return message;
        }
    }
}