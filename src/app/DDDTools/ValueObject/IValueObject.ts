/// <reference path="../CommonInterfaces/IEquatable.ts"/>

/**
 * Implementation of the ValueObject pattern.
 */
namespace DDDTools.ValueObject {
	
	import IEquatable = CommonInterfaces.IEquatable;
	
	export interface IValueObject<T> extends IEquatable<T> {
		
	}
}