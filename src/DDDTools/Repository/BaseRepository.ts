import {IRepository} from "./IRepository";
import {Errors} from "./Errors";
import {IPersistable} from "../PersistableObject/IPersistable";
import {Factory as Factory} from "../PersistableObject/Factory";
import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
import {IKeyValueObject} from "../Entity/IKeyValueObject";
import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

// namespace DDDTools.Repository {

/**
 * Captures common behavior of repository, using theTemplate Method Pattern.
 */
export abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
    implements IRepository<T, TKey> {

    constructor(
        /**
         * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
         */
        private managedType: string
        ) {
        if (managedType === "") {
            Errors.throw(Errors.ManagedTypeNotSupplied);
        }
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
            return toReturn;
        } catch (e) {
            Errors.throw(Errors.ItemNotFound, e.message);
        }
    }

    /**
     * You MUST override this method to provide "save" functionality in your implementation. The template method "save" will manage the revisionId logic.
     */
    protected abstract saveImplementation(item: T): void;

    save(item: T): void {
        try {
            var key = item.getKey().toString();
        } catch (e) {
            Errors.throw(Errors.KeyNotSet);
        }

        var asItWas: T = null;
        try {
            asItWas = this.getById(item.getKey());
        } catch (e) {
            // This is expected if the do not exists in the Repo.
        }

        if (!item.perfectlyMatch(asItWas)) {
            item.incrementRevisionId();
        }

        // finally saves aggregate into the repository.
        this.saveImplementation(item);
    }

    /**
     * You MUST override this method to provide "delete" functionality in your implementation.
     */
    protected abstract deleteImplementation(id: TKey): void;

    delete(id: TKey): void {
        this.deleteImplementation(id);
    }
}
// }