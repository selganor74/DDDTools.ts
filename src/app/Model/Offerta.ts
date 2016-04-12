namespace CdC.Model {

	import DDD = DDDTools;
	import VOs = CdC.Model.ValueObjects;

	export class Offerta extends DDD.BaseEntity<Offerta, VOs.IdOfferta> {

		public __typeName =  "CdC.Model.Offerta";

		private descrizioneOfferta: string;

		private revisioniDiOfferta: Array<ValueObjects.IdRevisioneDiOfferta>;
		private variantiDiOrdine: Array<ValueObjects.IdRevisioneDiOfferta>;

		private codiceBaseOfferta: ValueObjects.CodiceBaseOfferta;
		private dataPresuntaOrdine: Date;
		private probabilitaRientroOrdine: number;
		// private infoCommerciali: InfoCommerciali;
		
		constructor(
			) {
			super();
			this.revisioniDiOfferta = [];
			this.variantiDiOrdine = [];
		}
        
        public getRevisioniDiOfferta() {
            return this.revisioniDiOfferta;
        }
	}
}