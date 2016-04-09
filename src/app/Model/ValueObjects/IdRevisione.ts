namespace CdC.Model.ValueObjects {
	
	import DDD = DDDTools;
	
	export class IdRevisione extends DDD.BaseValueObject<IdRevisione> {

        public __typeName =  "CdC.Model.ValueObjects.IdRevisione";

		constructor(private idRevisione: number) {
			super();
		}
		
		toString() {
			return 'R'+this.idRevisione;
		}	
	}
}