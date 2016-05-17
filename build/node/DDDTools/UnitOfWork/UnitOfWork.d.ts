import { BaseAggregateRoot } from "../Aggregate/BaseAggregateRoot";
import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { IRepository } from "../Repository/IRepository";
import { IEventHandler } from "../DomainEvents/IEventHandler";
export declare class UnitOfWork<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
    private idMap;
    private repository;
    private dispatcher;
    constructor(repository: IRepository<T, TKey>);
    getById(key: TKey): T;
    deleteById(key: TKey): void;
    saveAll(): void;
    registerHandler(eventTypeName: string, eventHandler: IEventHandler): void;
    unregisterHandler(eventTypeName: string, eventHandler: IEventHandler): void;
    private processDeletedItem(key);
    private processNewOrModifiedItem(key);
    private raiseEvent(event);
    private removeById(key);
}
