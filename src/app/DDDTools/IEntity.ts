/// <reference path="IValueObject.ts"/>
/// <reference path="IEquatable.ts"/>

namespace DDDTools {
	export interface IEntity<T, TKey extends IEquatable<TKey>> extends IEquatable<T> {
		getKey() : TKey;
		setKey(key: TKey) : void; 
	}
}