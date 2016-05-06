/// <reference path="../Aggregate/IAggregateRoot.ts"/>
/// <reference path="../Entity/IKeyValueObject.ts"/>


namespace DDDTools.Repository {
    
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    
    export interface IRepository<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        getById( id: TKey ): T;
        save( item: T ): void;
        delete( id: TKey ): void;
    }
}