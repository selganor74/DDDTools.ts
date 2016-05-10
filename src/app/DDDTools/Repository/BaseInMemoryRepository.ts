/// <reference path="../ValueObject/BaseValueObject.ts"/>
/// <reference path="../Entity/BaseEntity.ts"/>
/// <reference path="../Repository/IRepository.ts"/>
/// <reference path="../Repository/RepositoryErrors.ts"/>
/// <reference path="BaseRepository.ts" />

namespace DDDTools.Repository {

    import Errors = Repository.RepositoryErrors;
    import IPersistable = PersistableObject.IPersistable;
    import PersistableObjectFactory = PersistableObject.Factory;1
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;

    export abstract class BaseInMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseRepository<T, TKey> {

        private storage: { [id: string]: IPersistable };

        constructor(private _managedTypeName: string) {
            super();
            this.storage = {};
        }

        protected getByIdImplementation(id: TKey) {

            var key = id.toString();

            if (this.storage[key]) {
                var toReturn = PersistableObjectFactory.createObjectsFromState(this.storage[key]);
                return <T>toReturn;
            }

            Errors.throw(Errors.ItemNotFound);
        }

        protected saveImplementation(item: T): void {
            var key = item.getKey().toString();
            this.storage[key] = item.getState();
        }

        protected deleteImplementation(id: TKey): void {
            var key = id.toString();
            this.storage[key] = undefined;
        }
    }
}