namespace CdC.Model.ValueObjects {
	
	import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;
	
	export class IdRevisioneDiOfferta extends DDD.BaseValueObject<IdRevisioneDiOfferta>  {

        public __typeName =  "CdC.Model.ValueObjects.IdRevisioneDiOfferta";

		constructor(private idRevisioneDiOfferta: Guid) {
			super();
		}
	}
}