/// <reference path="../IDomainEvent.ts" />
/// <reference path="../StatefulObject/SimpleGuid.ts" />

namespace DDDTools.DomainEvents {

    import SimpleGuid = DDDTools.StatefulObject.SimpleGuid;

    export interface IEventHandler {
        (domainEvent: IDomainEvent): void;
    }

    export class Dispatcher {
        private static delegatesRegistry: { [eventTypeName: string]: IEventHandler[] };

        public static registerHandler(eventTypeName: string, handler: IEventHandler) {
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

        public static unregisterHandler(eventTypeName: string, handler: IEventHandler) {
            var sThis = Dispatcher;
            // Act only id handler has been registered.
            if ((<any>handler).__handlerId) {
                for( var element in sThis.delegatesRegistry[eventTypeName] ){
                    var currentElement = sThis.delegatesRegistry[eventTypeName][element];
                    if ((<any>currentElement).__handlerId === (<any>handler).__handlerId){
                        sThis.delegatesRegistry[eventTypeName].splice(Number(element),1);
                        break;
                    }
                }
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