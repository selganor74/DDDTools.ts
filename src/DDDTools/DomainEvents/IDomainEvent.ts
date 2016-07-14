/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// import {IPersistable} from "../PersistableObject/IPersistable";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.DomainEvents {

    import IPersistable = PersistableObject.IPersistable;
    import ITypeTracking = CommonInterfaces.ITypeTracking;

    /**
     * Role interface to identify a Domain Event
     */
    export interface IDomainEvent extends IPersistable, ITypeTracking {

    }
}