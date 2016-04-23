/// <reference path="../../DDDTools/BaseKeyValueObject.ts" />

namespace CdC.Model.ValueObjects {
	
	import DDD = DDDTools;
	import Guid = DDDTools.ValueObjects.Guid;
    
	export class IdOfferta extends DDD.BaseKeyValueObject<IdOfferta> {

        public __typeName =  "CdC.Model.ValueObjects.IdOfferta";

		constructor(private idOfferta?: Guid) {
			super();
			if (!idOfferta)
				this.idOfferta = Guid.generate();
		}
	}
}