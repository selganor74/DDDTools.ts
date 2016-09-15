/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../PersistableObject/BasePersistableObject.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="./IValueObject.ts" />

// import {IValueObject} from "./IValueObject";
// import {BasePersistableObject} from "../PersistableObject/BasePersistableObject";
// import {Serializer} from "../Serialization/Serializer";

namespace DDDTools.ValueObject {

	import BasePersistableObject = PersistableObject.BasePersistableObject;
	import Serializer = Serialization.Serializer;

	export abstract class BaseValueObject<T>
		extends BasePersistableObject
		implements IValueObject<T> {

		constructor() {
			super();
		}

		public equals(item: T): boolean {
			// Per ogni proprietà dell'ITEM :verifico l'uguaglianza con l'istanza attuale 			
			return _.isEqual(item, this);
		}

		/**
		 * Finds this value object in an array. Will return an array of indexes matching the searched object.
		 */
		public findInArray(collection: T[]): string[] {
			var toReturn: string[] = [];
			for(var element in collection){
				if (this.equals(collection[element])) {
					toReturn.push(element)
				}
			}
			return toReturn;
		}
	}
}
