/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepositoryAsync.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="../DomainEvents/InProcessDispatcher.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../DomainEvents/IEventHandler.ts" />
/// <reference path="./IUnitOfWorkAsync.ts" />
/// <reference path="./IdentityMap.ts" />
/// <reference path="./ObjectDeletedEvent.ts" />
/// <reference path="./ObjectRetrievedEvent.ts" />
/// <reference path="./ObjectSavedEvent.ts" />
/// <reference path="./UnitOfWorkErrors.ts" />
/// <reference path="../Promises/PromiseHandler.ts" />

namespace DDDTools.UnitOfWork {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IRepositoryAsync = Repository.IRepositoryAsync;
    import Serializer = Serialization.Serializer;
    import InProcessDispatcher = DomainEvents.InProcessDispatcher;
    import IDomainEvent = DomainEvents.IDomainEvent;
    import IEventHandler = DomainEvents.IEventHandler;
    import IPromise = Promises.IPromise;
    import PromiseHandler = Promises.PromiseHandler;
    /**
     * Simple UnitOfWork for a single Repository.
     */
    export class UnitOfWorkAsync<
        T extends BaseAggregateRoot<T, TKey>,
        TKey extends IKeyValueObject<TKey>
        >
        implements IUnitOfWorkAsync<T, TKey>
    {

        private idMap: IdentityMap<T, TKey>;
        private repository: IRepositoryAsync<T, TKey>;
        private dispatcher: InProcessDispatcher;

        constructor(repository: IRepositoryAsync<T, TKey>) {
            this.repository = repository;
            this.idMap = new IdentityMap<T, TKey>();
            this.dispatcher = new InProcessDispatcher();
        }

        /**
         * Retrieves an item from the Repository or from the UnitOfWork, given its Id.
         */
        public getById(key: TKey): IPromise<T> {

            if (this.idMap.isTracked(key)) {
                if (this.idMap.getItemStatus(key) === ItemStatus.Deleted) {
                    UnitOfWorkErrors.throw(UnitOfWorkErrors.ItemMarkedAsDeleted);
                }
                return PromiseHandler.when(this.idMap.getById(key));
            }

            return this.repository.getById(key).then((item) => {
                this.idMap.add(key, item);
                this.idMap.markAsSavedById(key);
                var retrievedEvent = new ObjectRetrievedEvent(item.__typeName, item.__typeVersion, item.getKey().toString());
                this.raiseEvent(retrievedEvent);

                return item;
            });
        }

        /**
         * Marks an item as deleted from the UnitOfWork (and from the Repository when the UoW will be saved)
         */
        public deleteById(key: TKey): IPromise<void> {
            return PromiseHandler.when(this.idMap.markAsDeletedById(key));
        }

        /**
         * Saves all the modified items in the UnitOfWork.
         */
        public saveAll() : IPromise<void> {
            var keys = this.idMap.getIds();
            var chainStarter = PromiseHandler.defer<void>();
            var promiseChain = chainStarter.promise;
            for (var key of keys) {

                this.idMap.updateSavedItemStatus(key);
                var status = this.idMap.getItemStatus(key);

                switch (status) {
                    case ItemStatus.Deleted:
                        promiseChain = promiseChain.then(() => {
                            this.processDeletedItem(key);
                        });
                        break;
                    case ItemStatus.Modified:
                    case ItemStatus.New:
                        promiseChain = promiseChain.then(() => {
                            this.processNewOrModifiedItem(key);
                        });
                        break;
                    case ItemStatus.Saved:
                        break;
                }
            }
            chainStarter.resolve();
            return promiseChain;
        }

        public registerHandler(eventTypeName: string, eventHandler: IEventHandler) {
            this.dispatcher.registerHandler(eventTypeName, eventHandler);
        }

        public unregisterHandler(eventTypeName: string, eventHandler: IEventHandler) {
            this.dispatcher.unregisterHandler(eventTypeName, eventHandler);
        }

        private processDeletedItem(key: TKey) : IPromise<void> {
            var item = this.idMap.getById(key);
            var deletedEvent = new ObjectDeletedEvent(item.__typeName, item.__typeVersion, key.toString());
            return this.repository.delete(key).then(() => {
                this.removeById(key);
                this.raiseEvent(deletedEvent);
            });
        }

        private processNewOrModifiedItem(key: TKey): IPromise<void> {
            var item = this.idMap.getById(key);
            return this.repository.save(item).then(() => {
                this.idMap.markAsSavedById(key);
                // raises an event for whomever is interested
                var savedEvent = new ObjectSavedEvent(item.__typeName, item.__typeVersion, key.toString());
                this.raiseEvent(savedEvent);
            });
        }

        private raiseEvent(event: IDomainEvent) {
            this.dispatcher.dispatch(event);
        }

        /**
         * Completely removes an object from the IdentityMap
         */
        private removeById(key: TKey) {
            if (this.idMap.isTracked(key)) {
                this.idMap.remove(key);
            }
        }
    }
}
