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
			var foreign = Serializer.serialize(item);
			var local = Serializer.serialize(this);

			return foreign === local;
		}
	}
}
