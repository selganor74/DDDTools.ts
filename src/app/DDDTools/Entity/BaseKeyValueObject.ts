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
         * This is a base implementation of "toString". 
         */		
        public toString() {
            var state = this.getState();
            return JSON.stringify(state);
        }
	}
}