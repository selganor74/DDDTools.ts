namespace CdC.Model.ValueObjects {
	
	import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;
	
	export class IdModulo extends DDD.BaseValueObject<IdModulo> {

        public __typeName =  "CdC.Model.ValueObjects.IdModulo";

		constructor(private idModulo: Guid) {
			super();
		}
	}
}