import { IDomainEvent } from "../DomainEvents/IDomainEvent";
import { BaseValueObject } from "../ValueObject/BaseValueObject";
export declare class ObjectRetrievedEvent extends BaseValueObject<ObjectRetrievedEvent> implements IDomainEvent {
    typeName: string;
    typeVersion: string;
    id: string;
    __typeName: string;
    __typeVersion: string;
    constructor(typeName: string, typeVersion: string, id: string);
}
