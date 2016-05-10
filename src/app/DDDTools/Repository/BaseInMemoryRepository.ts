/// <reference path="../ValueObject/BaseValueObject.ts"/>
/// <reference path="../Entity/BaseEntity.ts"/>
/// <reference path="../Repository/IRepository.ts"/>
/// <reference path="../Repository/RepositoryErrors.ts"/>
/// <reference path="../PersistableObject/PersistableObjectFactory.ts"/>

namespace DDDTools.Repository {
    
    import IRepository = Repository.IRepository;
    import Errors = Repository.RepositoryErrors;
    import IPersistable = PersistableObject.IPersistable;
    import PersistableObjectFactory = PersistableObject.PersistableObjectFactory;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    
    export abstract class BaseInMemoryRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        
        private storage: { [ id: string ]: IPersistable };
        
        constructor( private _managedTypeName: string ) {
            this.storage = {};
        }
        
        getById(id: TKey) : T {
            
            var key = id.toString();
            
            if (this.storage[key]) {
                var toReturn = PersistableObjectFactory.createObjectsFromState( this.storage[key] );
                return <T>toReturn;
            }
            
            Errors.throw(Errors.ItemNotFound);
        }
        
        save(item: T): void {
            try {
                var key = item.getKey().toString();
            } catch (e) {
                Errors.throw(Errors.KeyNotSet);
            }

            var howItWas: string;
            
            var howItIs = JSON.stringify( item );
            
            var asItWas: T = null;
            try {
                var asItWas = this.getById(item.getKey());                
            } catch(e) {
                // This is expected if the do not exists in the Repo.
            }

            
            
            if (howItIs !== howItWas) {
                item.incrementRevisionId();
            }
            
            this.storage[key] = item.getState();
        }
        
        delete(id: TKey) : void {
            var key = id.toString();
            this.storage[key] = undefined;
        }
    }
}