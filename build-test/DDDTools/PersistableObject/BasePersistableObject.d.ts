import { IPersistable } from "./IPersistable";
export declare abstract class BasePersistableObject implements IPersistable {
    __typeName: string;
    __typeVersion: string;
    getState(): any;
    setState<TState>(state: TState): void;
}
