namespace DDDTools.StatefulObject {
    
	export interface IStateful {
		__typeName: string;
        __typeVersion: string;
        __objectInstanceId?: string;
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
		getState(): any;
		setState(state: any);
	}
}