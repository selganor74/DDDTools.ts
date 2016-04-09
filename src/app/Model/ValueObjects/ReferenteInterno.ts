namespace CdC.Model.ValueObjects {
	
	import DDD = DDDTools;
	
	export class ReferenteInterno extends DDD.BaseValueObject<ReferenteInterno> {

		public __typeName =  "CdC.Model.ValueObjects.ReferenteInterno";

		constructor (
			private idReferentePrm: number,
			private nome: string,
			private cognome: string,
			private email: string
			) 
		{
			super();
		}		
	}
}