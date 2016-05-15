import { IKeyValueObject } from "../Entity/IKeyValueObject";
import { BaseValueObject } from "../ValueObject/BaseValueObject";
export declare class Guid extends BaseValueObject<Guid> implements IKeyValueObject<Guid> {
    __typeName: string;
    __typeVersion: string;
    private guid;
    constructor(guid?: string);
    static generate(): Guid;
    toString(): string;
}
