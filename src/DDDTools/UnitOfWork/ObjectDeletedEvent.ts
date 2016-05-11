import {IDomainEvent} from "../DomainEvents/IDomainEvent";
import {Events} from "./Events";

// namespace DDDTools.UnitOfWork {

export class ObjectDeletedEvent implements IDomainEvent {
    __typeName = Events.ObjectDeletedEvent;
    __typeVersion = "v1";

    constructor(
        public typeName: string,
        public typeVersion: string,
        public id: string
    ) { }
}

// }
