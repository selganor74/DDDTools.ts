/// <reference path="./IRepository.ts" />
/// <reference path="./SaveActionEnum.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./ItemRetrievedEvent.ts" />
/// <reference path="./ItemAddedEvent.ts" />
/// <reference path="./ItemUpdatedEvent.ts" />
/// <reference path="./ItemDeletedEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />

// import {IRepository} from "./IRepository";
// import {Errors} from "./Errors";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {Factory as Factory} from "../PersistableObject/Factory";
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
// import {ItemRetrievedEvent} from "./ItemRetrievedEvent";
// import {ItemAddedEvent} from "./ItemAddedEvent";
// import {ItemUpdatedEvent} from "./ItemUpdatedEvent";
// import {ItemDeletedEvent} from "./ItemDeletedEvent";
// import {DomainDispatcher} from "../DomainEvents/DomainDispatcher";

namespace DDDTools.Repository {

    import IPersistable = PersistableObject.IPersistable;
    import Factory = PersistableObject.Factory;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    import DomainDispatcher = DomainEvents.DomainDispatcher;

    /**
     * Captures common behavior of repository, using theTemplate Method Pattern.
     */
    export abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
        implements IRepository<T, TKey> {

        constructor(
            /**
             * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
             */
            private managedType: string,
            /**
             * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations. 
             * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
             */
            private repositoryId?: string
        ) {
            if (managedType === "") {
                Errors.throw(Errors.ManagedTypeNotSupplied);
            }

            if (!repositoryId) this.repositoryId = "";
        }

        /**
         * You MUST override this method to provide functionality to access to the repository and get an "stateObject" to use for object "reconstruction".
         * This method should throw "ItemNotFound" if no element matching the id was found.
         */
        protected abstract getByIdImplementation(id: TKey): ITypeTracking;

        getById(id: TKey): T {
            try {
                var retrieved = this.getByIdImplementation(id);
                if (retrieved.__typeName !== this.managedType) {
                    var reason = Errors.getErrorInstance(Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtaine " + retrieved.__typeName + " from database.");
                }
                var toReturn: T = Factory.createObjectsFromState(retrieved);

                var event = new ItemRetrievedEvent<T>(toReturn, this.repositoryId);
                DomainDispatcher.dispatch(event);

                return toReturn;
            } catch (e) {
                Errors.throw(Errors.ItemNotFound, e.message);
            }
        }

        /**
         * You MUST override this method to provide "save" functionality in your implementation. The template method "save" will manage the revisionId logic.
         */
        protected abstract saveImplementation(item: T, saveAction: SaveActionEnum): void;

        save(item: T): void {
            this.saveOrReplace(item);
        }

        /**
         * Works just like save, but it never increments RevisionId, it trusts the one already present in the aggregate.
         */
        replace(item: T) {
            this.saveOrReplace(item, true);
        }

        private saveOrReplace(item: T, replaceOnly: boolean = false) {
            try {
                var key = item.getKey().toString();
            } catch (e) {
                Errors.throw(Errors.KeyNotSet);
            }

            var event: ItemUpdatedEvent<T> | ItemAddedEvent<T>;
            var asItWas: T = null;
            var shouldSaveItem = true;
            var saveAction: SaveActionEnum;
            var itemIsNew: boolean;

            try {
                asItWas = this.getById(item.getKey());
                itemIsNew = false;
            } catch (e) {
                if (e instanceof Error && e.name === Errors.ItemNotFound) {
                    itemIsNew = true;
                } else {
                    throw e;
                }
            }

            if (itemIsNew) {
                shouldSaveItem = true;
                // This is expected if the do not exists in the Repo.
                event = new ItemAddedEvent(item, this.repositoryId);
                saveAction = SaveActionEnum.Add;
                // Save occur only if stored item and saved item are different somehow.
                event = event || new ItemUpdatedEvent(item, this.repositoryId);
                if (!replaceOnly) {
                    item.incrementRevisionId(asItWas);
                }
            }

            if (!itemIsNew) {
                shouldSaveItem = false;
                if (!item.perfectlyMatch(asItWas)) {
                    if (item.getRevisionId() < asItWas.getRevisionId()) {
                        var error = Errors.getErrorInstance(Errors.SavingOldObject);
                        error.message = "Error saving item of type " + this.managedType + " with key " + item.getKey().toString() + " because item's __revisionId (" + item.getRevisionId() + ") is less than saved item's __revisionId (" + asItWas.getRevisionId() + ").";
                        throw error;
                    }
                    shouldSaveItem = true;
                    saveAction = SaveActionEnum.Update;
                    if (!replaceOnly) {
                        item.incrementRevisionId(asItWas);
                        event = event || new ItemReplacedEvent(item, this.repositoryId);
                    }
                }
            }

            if (shouldSaveItem) {
                // finally saves aggregate into the repository.
                this.saveImplementation(item, saveAction);

                DomainDispatcher.dispatch(event);
            }
        }
        /**
         * You MUST override this method to provide "delete" functionality in your implementation.
         */
        protected abstract deleteImplementation(id: TKey): void;

        delete(id: TKey): void {
            var asItWas: T = null;
            try {
                asItWas = this.getById(id);
            } catch (e) {
                // item not found, so nothing to delete!
                if (e instanceof Error && e.name === Errors.ItemNotFound) {
                    return;
                }
                Errors.throw(Errors.ErrorDeletingItem, JSON.stringify(e));
            }

            var event = new ItemDeletedEvent(asItWas, this.repositoryId);

            this.deleteImplementation(id);

            DomainDispatcher.dispatch(event);
        }
    }
}