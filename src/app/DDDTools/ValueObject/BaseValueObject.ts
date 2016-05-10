/// <reference path="../PersistableObject/BasePersistableObject.ts"/>
/// <reference path="IValueObject.ts"/>


namespace DDDTools.ValueObject {

	import BasePersistableObject = PersistableObject.BasePersistableObject;

	export abstract class BaseValueObject<T> 
		extends BasePersistableObject
		implements IValueObject<T> {
		
        constructor() {
            super();
        }
        		
		public equals(item: T): boolean {
			// Per ogni proprietà dell'ITEM verifico l'uguaglianza con l'istanza attuale
			var foreign = JSON.stringify(item);
			var local = JSON.stringify(this);
			
			return foreign === local;
		}		
	}
}