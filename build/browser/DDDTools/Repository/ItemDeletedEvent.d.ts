import { IDomainEvent } from "../DomainEvents/IDomainEvent";
import { BaseValueObject } from "../ValueObject/BaseValueObject";
import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
export declare class ItemDeletedEvent extends BaseValueObject<ItemDeletedEvent> implements IDomainEvent {
    typeName: string;
    typeVersion: string;
    id: string;
    objectState: ITypeTracking;
    __typeName: string;
    __typeVersion: string;
    constructor(typeName: string, typeVersion: string, id: string, objectState: ITypeTracking);
}
