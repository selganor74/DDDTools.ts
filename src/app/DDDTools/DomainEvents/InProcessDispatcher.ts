/// <reference path="IDomainEvent.ts" />
/// <reference path="../Utils/SimpleGuid.ts" />

namespace DDDTools.DomainEvents {

    import SimpleGuid = Utils.SimpleGuid;

    export class InProcessDispatcher {
        private delegatesRegistry: { [eventTypeName: string]: IEventHandler[] } = {};

        public clear() {
            this.delegatesRegistry = {};
        }
        
        public  registerHandler(eventTypeName: string, handler: IEventHandler) {
            if (!this.delegatesRegistry[eventTypeName]) {
                this.delegatesRegistry[eventTypeName] = [];
            }
            // Adds an handle if (and only if) the handler has not been "stamped"
            if (!(<any>handler).__handlerId) {
                (<any>handler).__handlerId = SimpleGuid.generate();
                this.delegatesRegistry[eventTypeName].push(handler);                
            }
        }

        public  unregisterHandler(eventTypeName: string, handler: IEventHandler) {
            // Act only id handler has been registered.
            if ((<any>handler).__handlerId) {
                for( var element in this.delegatesRegistry[eventTypeName] ){
                    var currentElement = this.delegatesRegistry[eventTypeName][element];
                    if ((<any>currentElement).__handlerId === (<any>handler).__handlerId){
                        this.delegatesRegistry[eventTypeName].splice(Number(element),1);
                        break;
                    }
                }
            }
        }

        public  dispatch(event: IDomainEvent) {
            var Errors: Error[] = [];
            for (var element of this.delegatesRegistry[event.__typeName]) {
                try {
                    element(event);
                } catch (e) {
                    Errors.push(e);
                }
            }
            if (Errors.length != 0) {
                var message = this.buildErrorMessage(Errors);
                var e = new Error(message);
                e.name = "Dispatcher Error";
                throw e;
            }
        }

        private  buildErrorMessage(Errors: Error[]): string {
            var message: string = "";
            for (var element of Errors) {
                message += element.name + ":" + element.message + "\n";
            }
            return message;
        }
    }
}