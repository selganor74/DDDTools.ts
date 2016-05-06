/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

namespace DDDTools.StatefulObject {
	
	import ITypeTracking = CommonInterfaces.ITypeTracking;
    
	export interface IStateful extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
		getState(): any;
		setState(state: any);
	}
}