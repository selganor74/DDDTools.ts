/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepository.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="../DomainEvents/InProcessDispatcher.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../DomainEvents/IEventHandler.ts" />
/// <reference path="./IdentityMap.ts" />
/// <reference path="./ObjectDeletedEvent.ts" />
/// <reference path="./ObjectRetrievedEvent.ts" />
/// <reference path="./ObjectSavedEvent.ts" />
/// <reference path="./UnitOfWorkErrors.ts" />

// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {IRepository} from "../Repository/IRepository";
// import {Serializer} from "../Serialization/Serializer";
// import {InProcessDispatcher} from "../DomainEvents/InProcessDispatcher";
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {IEventHandler} from "../DomainEvents/IEventHandler";
// import {IdentityMap, ItemStatus} from "./IdentityMap";
// import {ObjectDeletedEvent} from "./ObjectDeletedEvent";
// import {ObjectRetrievedEvent} from "./ObjectRetrievedEvent";
// import {ObjectSavedEvent} from "./ObjectSavedEvent";
// import {UnitOfWorkErrors} from "./UnitOfWorkErrors";

namespace DDDTools.UnitOfWork {
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IRepository = Repository.IRepository;
    import Serializer = Serialization.Serializer;
    import InProcessDispatcher = DomainEvents.InProcessDispatcher;
    import IDomainEvent = DomainEvents.IDomainEvent;
    import IEventHandler = DomainEvents.IEventHandler;

    /**
     * Simple UnitOfWork for a single Repository.
     */
    export class UnitOfWork<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {

        private idMap: IdentityMap<T, TKey>;
        private repository: IRepository<T, TKey>;
        private dispatcher: InProcessDispatcher;

        constructor(repository: IRepository<T, TKey>) {
            this.repository = repository;
            this.idMap = new IdentityMap<T, TKey>();
            this.dispatcher = new InProcessDispatcher();
        }

        /**
         * Retrieves an item from the Repository or from the UnitOfWork, given its Id.
         */
        public getById(key: TKey): T {

            if (this.idMap.isTracked(key)) {
                if (this.idMap.getItemStatus(key) === ItemStatus.Deleted) {
                    UnitOfWorkErrors.throw(UnitOfWorkErrors.ItemMarkedAsDeleted);
                }
                return this.idMap.getById(key);
            }

            var toReturn = this.repository.getById(key);
            this.idMap.add(key, toReturn);
            this.idMap.markAsSavedById(key);

            var retrievedEvent = new ObjectRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString());
            this.raiseEvent(retrievedEvent);

            return toReturn;
        }

        /**
         * Marks an item as deleted from the UnitOfWork (and from the Repository when the UoW will be saved)
         */
        public deleteById(key: TKey) {
            this.idMap.markAsDeletedById(key);
        }

        /**
         * Saves all the modified items in the UnitOfWork.
         */
        public saveAll() {
            var keys = this.idMap.getIds();
            for (var key of keys) {

                this.idMap.updateSavedItemStatus(key);
                var status = this.idMap.getItemStatus(key);

                switch (status) {
                    case ItemStatus.Deleted:
                        this.processDeletedItem(key);
                        break;
                    case ItemStatus.Modified:
                    case ItemStatus.New:
                        this.processNewOrModifiedItem(key);
                        break;
                    case ItemStatus.Saved:
                        break;
                }
            }
        }

        public registerHandler(eventTypeName: string, eventHandler: IEventHandler) {
            this.dispatcher.registerHandler(eventTypeName, eventHandler);
        }

        public unregisterHandler(eventTypeName: string, eventHandler: IEventHandler) {
            this.dispatcher.unregisterHandler(eventTypeName, eventHandler);
        }

        private processDeletedItem(key: TKey) {
            var item = this.idMap.getById(key);
            var deletedEvent = new ObjectDeletedEvent(item.__typeName, item.__typeVersion, key.toString());
            this.repository.delete(key);
            this.removeById(key);
            this.raiseEvent(deletedEvent);
        }

        private processNewOrModifiedItem(key: TKey) {
            var item = this.idMap.getById(key);
            this.repository.save(item);
            this.idMap.markAsSavedById(key);
            // raises an event for whomever is interested
            var savedEvent = new ObjectSavedEvent(item.__typeName, item.__typeVersion, key.toString());
            this.raiseEvent(savedEvent);
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
