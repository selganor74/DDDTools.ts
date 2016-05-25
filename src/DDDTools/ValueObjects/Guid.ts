/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />

// import {SimpleGuid} from "../Utils/SimpleGuid";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";

/**
 * Collection of general and commonly used ValueObjects. 
 */
namespace DDDTools.ValueObjects {

    import SimpleGuid = Utils.SimpleGuid;
    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseValueObject = ValueObject.BaseValueObject;

    export class Guid extends BaseValueObject<Guid> implements IKeyValueObject<Guid> {

        public __typeName = "DDDTools.ValueObjects.Guid";
        public __typeVersion = "v1";

        private guid: string;

        constructor(guid?: string) {
            super();

            if (guid) {
                this.guid = guid
            } else {
                this.guid = SimpleGuid.generate();
            }
        }

        public static generate(): Guid {
            return new Guid(SimpleGuid.generate());
        }

        // ValueObjects used as key MUST implement a toString method that returns the key as string.
        public toString() {
            return this.guid;
        }
    }
}