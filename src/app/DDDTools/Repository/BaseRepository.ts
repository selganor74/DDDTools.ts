/// <reference path="../ValueObject/BaseValueObject.ts"/>
/// <reference path="../Entity/BaseEntity.ts"/>
/// <reference path="../Repository/IRepository.ts"/>
/// <reference path="../Repository/RepositoryErrors.ts"/>
/// <reference path="../PersistableObject/Factory.ts"/>

namespace DDDTools.Repository {
    
    import IRepository = Repository.IRepository;
    import Errors = Repository.RepositoryErrors;
    import IPersistable = PersistableObject.IPersistable;
    import PersistableObjectFactory = PersistableObject.Factory;
    import BaseAggregateRoot = Aggregate.BaseAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    
    /**
     * Captures common behavior of repository, using theTemplate Method Pattern.
     */
    export abstract class BaseRepository<T extends BaseAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
                
        /**
         * You MUST override this method to provide functionality to access to the repository and get an "stateObject" to use for object "reconstruction".
         * This method should throw "ItemNotFound" if no element matching the id was found.
         */
        protected abstract getByIdImplementation(id: TKey) : T;
        
        getById(id: TKey) : T {
            try {
                var toReturn = this.getByIdImplementation(id);
                return toReturn;
            } catch(e) {
                Errors.throw(Errors.ItemNotFound, e.message);
            }
        }
        
        /**
         * You MUST override this method to provide "save" functionality in your implementation. The entry pont method "save" will manage the revisionId for you.
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
            } catch(e) {
                // This is expected if the do not exists in the Repo.
            }

            if (!item.perfectlyMatch( asItWas )) {
                item.incrementRevisionId();
            }
            
            // finally saves aggregate into the repository.
            this.saveImplementation(item);
        }
        
        /**
         * You MUST override this method to provide "delete" functionality in your implementation.
         */
        protected abstract deleteImplementation(id: TKey) : void;

        delete(id: TKey) : void {
            this.deleteImplementation(id);
        }
    }
}