/// <reference path="../CommonInterfaces/IEquatable.ts"/>

namespace DDDTools.Entity {
	
	import IPersistable = PersistableObject.IPersistable
	import IEquatable = CommonInterfaces.IEquatable;
	
	export interface IEntity<T, TKey extends IEquatable<TKey>> extends IEquatable<T>, IPersistable {
		getKey() : TKey;
		setKey(key: TKey) : void; 
	}
}