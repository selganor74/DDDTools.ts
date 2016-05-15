import {IDomainEvent} from "../DomainEvents/IDomainEvent";
import {BaseValueObject} from "../ValueObject/BaseValueObject";
import {Events} from "./Events";
import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

// namespace DDDTools.UnitOfWork {

export class ItemRetrievedEvent extends BaseValueObject<ItemRetrievedEvent> implements IDomainEvent {
    __typeName = Events.ItemRetrievedEvent;
    __typeVersion = "v1";

    constructor(
        public typeName: string,
        public typeVersion: string,
        public id: string,
        public objectState: ITypeTracking
    ) {
        super();
    }
}

// }
