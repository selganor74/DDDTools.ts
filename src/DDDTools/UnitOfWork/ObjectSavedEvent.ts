import {IDomainEvent} from "../DomainEvents/IDomainEvent";
import {BaseValueObject} from "../ValueObject/BaseValueObject";
import {Events} from "./Events";

// namespace DDDTools.UnitOfWork {

export class ObjectSavedEvent extends BaseValueObject<ObjectSavedEvent> implements IDomainEvent {
    __typeName = Events.ObjectSavedEvent;
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
