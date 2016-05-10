/// <reference path="../CommonInterfaces/IEquatable.ts"/>
/// <reference path="../PersistableObject/IPersistable.ts"/>
/// <reference path="IKeyValueObject.ts"/>

namespace DDDTools.Entity {
	
	import IPersistable = PersistableObject.IPersistable
	import IEquatable = CommonInterfaces.IEquatable;
	
	export interface IEntity<T, TKey extends IKeyValueObject<TKey>> extends IEquatable<T>, IPersistable {
		getKey() : TKey;
		setKey(key: TKey) : void; 
	}
}