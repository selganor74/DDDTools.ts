namespace CdC.Model.ValueObjects {
	
	import DDD = DDDTools;
	
	export class IdVariante extends DDD.BaseValueObject<IdVariante> {
		
        public __typeName =  "CdC.Model.ValueObjects.IdVariante";

		private idVariante: number;
		
		constructor( idVariante? : number) {
			super();
			if (idVariante != null && idVariante != undefined) {
				this.idVariante = idVariante;
			}
		}

		toString() {
			return 'V'+this.idVariante;
		}		
	}
}