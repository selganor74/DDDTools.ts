/// <reference path="../ITypeTracking.ts" />

namespace DDDTools.StatefulObject {
    
	export interface IStateful extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
		getState(): any;
		setState(state: any);
	}
}