import { IDomainEvent } from "../DomainEvents/IDomainEvent";
export declare class ObjectRetrievedEvent implements IDomainEvent {
    typeName: string;
    typeVersion: string;
    id: string;
    __typeName: string;
    __typeVersion: string;
    constructor(typeName: string, typeVersion: string, id: string);
}
