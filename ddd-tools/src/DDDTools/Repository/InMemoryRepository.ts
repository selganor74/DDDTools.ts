/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="./BaseRepository.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepository.ts" />

// import {Errors} from "./Errors";
// import {Factory as Factory} from "../PersistableObject/Factory";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {BaseRepository} from "./BaseRepository";
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {IRepository} from "../Repository/IRepository";

namespace DDDTools.Repository {

    import Factory = PersistableObject.Factory;
    import IPersistable = PersistableObject.IPersistable;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;

    export class InMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
        extends BaseRepository<T, TKey>
        implements IRepository<T, TKey> {

        private storage: { [id: string]: IPersistable };

        constructor(managedTypeName: string) {
            super(managedTypeName);
            this.storage = {};
        }

        protected getByIdImplementation(id: TKey) {

            var key = id.toString();

            if (this.storage[key]) {
                var toReturn = Factory.createObjectsFromState(this.storage[key]);
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