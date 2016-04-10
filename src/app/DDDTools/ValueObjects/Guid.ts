/// <reference path="../BaseValueObject.ts" />
/// <reference path="../IKeyValueObject.ts" />

namespace DDDTools.ValueObjects {

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
		
		// Funzione helper per la generazione dei guid
		private static s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}

		public static generate(): Guid {
			return new Guid('{' + Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' +
				Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4() + '}');
		}

		private isValid() {
			var guidRegexp: RegExp = new RegExp("^[{(]?[0-9A-Fa-f]{8}[-]?([0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$");
			return guidRegexp.test(this.guid);
		}
        
        // ValueObjects used as key MUST implement a toString method that returns the key as string.
        public toString() {
            return this.guid;
        }
	}
}