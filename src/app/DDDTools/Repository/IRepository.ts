/// <reference path="../IEntity.ts"/>
/// <reference path="../IValueObject.ts"/>


namespace DDDTools.Repository {
    export interface IRepository<T extends IEntity<T, TKey>, TKey extends IValueObject<TKey>> {
        getById( id: TKey ): T;
        save( item: T ): void;
        delete( id: TKey ): void;
    }
}