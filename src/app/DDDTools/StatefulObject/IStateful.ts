namespace DDDTools.StatefulObject {
	export interface IStateful {
		__typeName: string;
        __typeVersion: string;
		getTypeName(): any;
		getState(): any;
		setState(state: any);
	}
}