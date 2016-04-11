/// <reference path="IKeyValueObject.ts"/>
/// <reference path="BaseStatefulObject.ts"/>
/// <reference path="BaseValueObject.ts"/>

namespace DDDTools {

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