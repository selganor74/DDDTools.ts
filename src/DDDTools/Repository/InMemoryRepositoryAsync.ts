/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="./BaseRepositoryAsync.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepositoryAsync.ts" />

namespace DDDTools.Repository {

    import BaseRepositoryAsync = Repository.BaseRepositoryAsync;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    import IPromise = Q.IPromise;

    export class InMemoryRepositoryAsync<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
        extends BaseRepositoryAsync<T, TKey>
        implements IRepositoryAsync<T, TKey>
    {
        private storage: { [id: string]: ITypeTracking } = {};

        constructor(managedType: string) {
            super(managedType);
        }

        protected getByIdImplementation(id: TKey): IPromise<ITypeTracking> {
            var deferred = Q.defer();
            if (this.storage[id.toString()]) {
                deferred.resolve(this.storage[id.toString()]);
            } else {
                var reason = Errors.getErrorInstance(Errors.ItemNotFound);
                deferred.reject(reason);
            }
            return deferred.promise;
        }

        protected saveImplementation(item: T): IPromise<{}> {
            var deferred = Q.defer();

            if (!item.getKey()) {
                var reason = Errors.getErrorInstance(Errors.KeyNotSet);
                deferred.reject(reason);
                return deferred.promise;
            }
            try {
                this.storage[item.getKey().toString()] = item;
            } catch (e) {
                var reason = Errors.getErrorInstance(Errors.ErrorSavingItem, JSON.stringify(e));
            }
            return deferred.promise;
        }

        protected deleteImplementation(id: TKey): IPromise<{}> {
            var deferred = Q.defer();
            if (this.storage[id.toString()]) {
                delete this.storage[id.toString()];
                deferred.resolve();
                return deferred.promise;
            } else {
                var reason = Errors.getErrorInstance(Errors.ItemNotFound);
                deferred.reject(reason);
                return deferred.promise;
            }
        }
    }
}