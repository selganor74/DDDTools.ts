namespace DDDTools.Serialization {

    export interface IBaseTypeWrapper {
        getOriginalValue(): object | Array<any> | RegExp | Date | null
    }
}