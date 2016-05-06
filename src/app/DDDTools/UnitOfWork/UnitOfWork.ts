/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepository.ts" />
/// <reference path="../Serialization/Serializer.ts" />

namespace DDDTools.UnitOfWork {
    
    import IAggregateRoot = Aggregate.IAggregateRoot;
    import IKeyValueObject = Entity.IKeyValueObject;
    import IRepository = Repository.IRepository;
    import Serializer = Serialization.Serializer;
    
    /**
     * Simple UnitOfWork for a single Repository.
     */
    export class UnitOfWork<T extends IAggregateRoot<T, TKey>, TKey extends IKeyValueObject<TKey>> {
        
        private idMap : IdentityMap<T, TKey>;
        private repository: IRepository<T, TKey>;
        
        // Will contain a serialized version of the object as it was when it was loaded from the repository.
        private asLoaded: {[id: string]: string };
        
        constructor(repository: IRepository<T, TKey>) {
            this.repository = repository;
            this.idMap = new IdentityMap<T, TKey>();
        }
        
        /**
         * Saves all the modified items in the UnitOfWork.
         */
        public saveAll() {
            var keys = this.idMap.getIds();
            for(var key of keys) {
                var status = this.idMap.getItemStatus(key);
                if (status === ItemStatus.Saved) {
                    if (this.itemHasChanged(key)) {
                        this.idMap.markAsModifiedById(key);
                    }
                }
                switch(status) {
                    case ItemStatus.Deleted:
                        this.repository.delete(key);
                        this.removeById(key);
                        break;
                    case ItemStatus.Modified, ItemStatus.New:
                        var item = this.idMap.getById(key);
                        this.repository.save(item);
                        this.idMap.markAsSavedById(key);
                        break;
                    case ItemStatus.Saved:
                        break;
                }
            }
        }
        
        /**
         * Completely removes an object from the IdentityMap
         */
        private removeById(key: TKey) {
            if (this.idMap.isTracked(key)) {
                this.idMap.remove(key);
                delete this.asLoaded[key.toString()];
            }
        }
        
        /**
         * Retrieves an item from the Repository or from the UnitOfWork, given its Id.
         */
        public getById(key: TKey) : T {
                        
            if (this.idMap.isTracked(key)){
                return this.idMap.getById(key);
            }
            
            var toReturn = this.repository.getById(key);
            this.idMap.add(key, toReturn);
            this.asLoaded[key.toString()] = Serializer.serialize(toReturn);
            return toReturn;
        }
        
        /**
         * Deletes an item from the UnitOfWork (and from the Repository when the UoW will be saved)
         */
        public deleteById(key: TKey) {
            this.idMap.markAsDeletedById(key);
        }
        
        /**
         * Determines if an item has changed since it was loaded
         */
        private itemHasChanged(key: TKey) {
            var howItWas: string = this.asLoaded[key.toString()];
            var howItIs: string = Serializer.serialize( this.getById(key) );
            return howItIs === howItWas;
        }
    }    
}