/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="./BaseRepositoryAsync.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepositoryAsync.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="../Serialization/Deserializer.ts" />

namespace DDDTools.Repository {

    import BaseRepositoryAsync = Repository.BaseRepositoryAsync;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    import IPromise = Q.IPromise;

    import Serializer = Serialization.Serializer;
    import Deserializer = Serialization.Deserializer;

    export class InMemoryRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
        extends BaseRepositoryAsync<T, TKey>
        implements IRepositoryAsync<T, TKey>
    {
        private storage: { [id: string]: string } = {};

        constructor(managedType: string) {
            super(managedType);
        }

        private getByIdSync(id: TKey) {
            if (!id) {
                var reason = Errors.getErrorInstance(Errors.InvalidKey, "id cannot be null nor undefined");
                throw (reason);
            }

            if (!this.storage[id.toString()]) {
                var reason = Errors.getErrorInstance(Errors.ItemNotFound);
                throw (reason);
            }
            var toReturn = Deserializer.deserialize(this.storage[id.toString()]);
            return toReturn;
        }

        protected getByIdImplementation(id: TKey): IPromise<ITypeTracking> {
            return Q.Promise((resolve, reject, notify) => {
                try {
                    var result = this.getByIdSync(id);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        }

        private saveSync(item: T): {} {
            if (!item.getKey()) {
                var reason = Errors.getErrorInstance(Errors.KeyNotSet);
                throw (reason);
            }
            try {
                this.storage[item.getKey().toString()] = Serializer.serialize(item);
            } catch (e) {
                var reason = Errors.getErrorInstance(Errors.ErrorSavingItem, JSON.stringify(e));
                throw (reason);
            }
            return {};
        }

        protected saveImplementation(item: T): IPromise<{}> {
            return Q.Promise((resolve, reject, notify) => {
                try {
                    this.saveSync(item);
                    resolve({});
                } catch (err) {
                    reject(err);
                }
            });
        }

        private deleteSync(id: TKey): {} {

            if (this.storage[id.toString()]) {
                delete this.storage[id.toString()];
            } else {
                var reason = Errors.getErrorInstance(Errors.ItemNotFound);
                throw (reason);
            }
            return;
        }

        protected deleteImplementation(id: TKey): IPromise<{}> {
            return Q.Promise((resolve, reject, notify) => {
                try {
                    this.deleteSync(id)
                    resolve({});
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}