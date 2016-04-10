namespace DDDTools.StatefulObject {
	export interface IStateful {
		__typeName: string;
        __typeVersion: string;
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
		getTypeName(): any;
		getState(): any;
		setState(state: any);
	}
}