/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../CommonInterfaces/IEquatable.ts" />
/**
 * Implementation of the ValueObject pattern.
 */
namespace DDDTools.ValueObject {

    import IPersistable = PersistableObject.IPersistable;
    import IEquatable = CommonInterfaces.IEquatable;

    export interface IValueObject<T> extends IEquatable<T>, IPersistable {

    }
}