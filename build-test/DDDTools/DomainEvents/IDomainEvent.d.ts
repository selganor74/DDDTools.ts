/// <reference path="../PersistableObject/IPersistable.d.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
declare namespace DDDTools.DomainEvents {
    import IPersistable = PersistableObject.IPersistable;
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IDomainEvent extends IPersistable, ITypeTracking {
    }
}
