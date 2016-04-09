/// <reference path="IValueObject.ts"/>
/// <reference path="IEntity.ts"/>
/// <reference path="BaseStatefulObject.ts"/>

namespace DDDTools {
	
	export abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IValueObject<TKey>> 
			extends BaseStatefulObject {
				
        private key: TKey;
        
		public getKey(): TKey {
            return this.key;
        };
		
		public setKey(key: TKey): void {
            this.key = key;
        };
		
		public equals(item: T) : boolean {
			if (!item) {
				return false;
			}
			return item.getKey().equals( this.getKey() );
		}		
	}
}