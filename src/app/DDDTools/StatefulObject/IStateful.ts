namespace DDDTools.StatefulObject {
    
	export interface IStateful {
		__typeName: string;
        __typeVersion: string;
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
		getState(): any;
		setState(state: any);
	}
}