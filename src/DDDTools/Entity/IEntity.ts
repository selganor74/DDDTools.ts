/// <reference path="../CommonInterfaces/IEquatable.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="./IKeyValueObject.ts" />

// import {IEquatable} from "../CommonInterfaces/IEquatable";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {IKeyValueObject} from "./IKeyValueObject";

namespace DDDTools.Entity {

	import IEquatable = CommonInterfaces.IEquatable;
	import IPersistable = PersistableObject.IPersistable;

	export interface IEntity<T, TKey extends IKeyValueObject<TKey>> extends IEquatable<T>, IPersistable {
		getKey(): TKey;
		setKey(key: TKey): void;
	}
}