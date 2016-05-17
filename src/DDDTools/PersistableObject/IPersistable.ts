/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
/**
 * Defines default behavior and interfaces for a Persistable Object, an object that has a state that will probably be persisted. It gives support to "upgrade" persisted objects.
 */
namespace DDDTools.PersistableObject {
	
	import ITypeTracking = CommonInterfaces.ITypeTracking;

	export interface IPersistable extends ITypeTracking {
		getUpgradedInstance?(fromInstance: IPersistable): IPersistable;
		getState(): ITypeTracking;
		setState(state: ITypeTracking);
	}
}