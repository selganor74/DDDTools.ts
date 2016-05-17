/// <reference path="../CommonInterfaces/ITypeTracking.d.ts" />
declare namespace DDDTools.PersistableObject {
    import ITypeTracking = CommonInterfaces.ITypeTracking;
    interface IPersistable extends ITypeTracking {
        getUpgradedInstance?(fromInstance: IPersistable): IPersistable;
        getState(): ITypeTracking;
        setState(state: ITypeTracking): any;
    }
}
