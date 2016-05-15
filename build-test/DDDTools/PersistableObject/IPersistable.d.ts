/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
import { ITypeTracking } from "../CommonInterfaces/ITypeTracking";
export interface IPersistable extends ITypeTracking {
    getUpgradedInstance?(fromInstance: IPersistable): IPersistable;
    getState(): any;
    setState(state: any): any;
}
