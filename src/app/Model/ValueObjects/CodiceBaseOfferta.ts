namespace CdC.Model.ValueObjects {
	
	import DDD = DDDTools;
	
	export class CodiceBaseOfferta extends DDD.BaseValueObject<CodiceBaseOfferta> {
		
		public __typeName = "CdC.Model.ValueObjects.CodiceBaseOfferta";

		constructor(private codiceBaseOfferta: string) {
			super();
		}
		
		public isValid(): boolean {
			// TODO Identificare regular Expression per Validità Codice Base Offerta.
			return true;
		}
				
	}
}