/// <reference path="../BaseValueObject.ts" />
/// <reference path="../IKeyValueObject.ts" />

namespace DDDTools.ValueObjects {

    import SimpleGuid = DDDTools.StatefulObject.SimpleGuid;

    export class Guid extends BaseValueObject<Guid> implements IKeyValueObject<Guid> {

        public __typeName = "DDDTools.ValueObjects.Guid";
        public __typeVersion = "v1";

        private guid: string;

        constructor(guid?: string) {
            super();

            if (guid) {
                this.guid = guid
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