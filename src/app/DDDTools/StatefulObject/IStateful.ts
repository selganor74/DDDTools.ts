/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

/**
 * Defines default behavior and interfaces for a Stateful Object, an object that has a state that will probably be persisted. It gives support to "upgrade" persisted objects.
 */
namespace DDDTools.StatefulObject {
	
	import ITypeTracking = CommonInterfaces.ITypeTracking;
    
	export interface IStateful extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
		getState(): any;
		setState(state: any);
	}
}