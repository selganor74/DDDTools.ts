/// <reference path="../Utils/SimpleGuid.d.ts" />
/// <reference path="../Entity/IKeyValueObject.d.ts" />
/// <reference path="../ValueObject/BaseValueObject.d.ts" />
/// <reference path="../PersistableObject/TypeRegistry.d.ts" />
declare namespace DDDTools.ValueObjects {
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseValueObject = ValueObject.BaseValueObject;
    class Guid extends BaseValueObject<Guid> implements IKeyValueObject<Guid> {
        __typeName: string;
        __typeVersion: string;
        private guid;
        constructor(guid?: string);
        static generate(): Guid;
        toString(): string;
    }
}
