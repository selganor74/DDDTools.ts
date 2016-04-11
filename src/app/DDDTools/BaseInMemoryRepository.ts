/// <reference path="BaseValueObject.ts"/>
/// <reference path="BaseEntity.ts"/>
/// <reference path="Repository/IRepository.ts"/>
/// <reference path="Repository/RepositoryErrors.ts"/>
/// <reference path="StatefulObject/StatefulObjectFactory.ts"/>

namespace DDDTools {
    
    import IRepository = Repository.IRepository;
    import Errors = Repository.RepositoryErrors;
    import IStateful = StatefulObject.IStateful;
    import StatefulObjectFactory = StatefulObject.StatefulObjectFactory;
    
    export abstract class BaseInMemoryRepository<T extends BaseEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        
        private storage: { [ id: string ]: IStateful };
        
        constructor( private _managedTypeName: string ) {
            this.storage = {};
        }
        
        getById(id: TKey) : T {
            
            var key = id.toString();
            
            if (this.storage[key]) {
                var toReturn = StatefulObjectFactory.createObjectsFromState( this.storage[key] );
                return <T>toReturn;
            }
            
            Errors.Throw(Errors.ItemNotFound);
        }
        
        save(item: T): void {
            try {
                var key = item.getKey().toString();
            } catch (e) {
                Errors.Throw(Errors.KeyNotSet);
            }
            this.storage[key] = item.getState();
            // console.log(JSON.stringify( this.storage[key]));
        }
        
        delete(id: TKey) : void {
            var key = id.toString();
            this.storage[key] = undefined;
        }
    }
}