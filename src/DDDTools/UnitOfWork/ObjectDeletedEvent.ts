import {IDomainEvent} from "../DomainEvents/IDomainEvent";
import {BaseValueObject} from "../ValueObject/BaseValueObject";
import {Events} from "./Events";

// namespace DDDTools.UnitOfWork {

export class ObjectDeletedEvent extends BaseValueObject<ObjectDeletedEvent> implements IDomainEvent {
    __typeName = Events.ObjectDeletedEvent;
    __typeVersion = "v1";

    constructor(
        public typeName: string,
        public typeVersion: string,
        public id: string
    ) {
        super();
    }
}

// }
