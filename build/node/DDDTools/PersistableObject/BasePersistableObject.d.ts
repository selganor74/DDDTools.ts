/// <reference path="IPersistable.d.ts" />
/// <reference path="Errors.d.ts" />
/// <reference path="Factory.d.ts" />
/// <reference path="../Serialization/Serializer.d.ts" />
/// <reference path="../Serialization/Deserializer.d.ts" />
declare namespace DDDTools.PersistableObject {
    abstract class BasePersistableObject implements IPersistable {
        __typeName: string;
        __typeVersion: string;
        getState(): any;
        setState<TState>(state: TState): void;
    }
}
