/// <reference path="IKeyValueObject.ts"/>
/// <reference path="../ValueObject/BaseValueObject.ts"/>

namespace DDDTools.Entity {
    
    import BaseValueObject = ValueObject.BaseValueObject;

	export abstract class BaseKeyValueObject<T> 
		extends BaseValueObject<T>
		implements IKeyValueObject<T> {
		
        constructor() {
            super();
        }
        
        /**
         * Derived classes must reimplement this method. 
         */		
        public abstract toString(): string; 
	}
}