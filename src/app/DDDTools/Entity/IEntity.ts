/// <reference path="../CommonInterfaces/IEquatable.ts"/>

namespace DDDTools.Entity {
	
	import IEquatable = DDDTools.CommonInterfaces.IEquatable;
	
	export interface IEntity<T, TKey extends IEquatable<TKey>> extends IEquatable<T> {
		getKey() : TKey;
		setKey(key: TKey) : void; 
	}
}