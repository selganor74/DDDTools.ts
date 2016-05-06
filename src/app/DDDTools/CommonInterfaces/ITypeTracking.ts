namespace DDDTools.CommonInterfaces {
    export interface ITypeTracking {
        __typeName: string;
        __typeVersion: string;
        __objectInstanceId?: string;        
    }
}