import {IDomainEvent} from "../DomainEvents/IDomainEvent";
import {BaseValueObject} from "../ValueObject/BaseValueObject";
import {Events} from "./Events";
import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

// namespace DDDTools.UnitOfWork {

export class ItemDeletedEvent extends BaseValueObject<ItemDeletedEvent> implements IDomainEvent {
    __typeName = Events.ItemDeletedEvent;
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
