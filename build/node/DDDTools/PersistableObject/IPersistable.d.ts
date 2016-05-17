import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
export interface IPersistable extends ITypeTracking {
    getUpgradedInstance?(fromInstance: IPersistable): IPersistable;
    getState(): ITypeTracking;
    setState(state: ITypeTracking): any;
}
