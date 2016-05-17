import { IAggregateRoot } from "../Aggregate/IAggregateRoot";
import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { IEventHandler } from "../DomainEvents/IEventHandler";
export interface IUnitOfWork<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
    getById(key: TKey): T;
    deleteById(key: TKey): void;
    saveAll(): void;
    registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
    unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;
}
