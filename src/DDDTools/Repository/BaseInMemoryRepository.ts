import {Errors} from "./Errors";
import {Factory as PersistableObjectFactory} from "../PersistableObject/Factory";
import {IPersistable} from "../PersistableObject/IPersistable";
import {BaseRepository} from "./BaseRepository";
import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
import {IKeyValueObject} from "../Entity/IKeyValueObject";
import {IRepository} from "../Repository/IRepository";

// namespace DDDTools.Repository {

export abstract class BaseInMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>>
    extends BaseRepository<T, TKey>
    implements IRepository<T, TKey> {

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
// }