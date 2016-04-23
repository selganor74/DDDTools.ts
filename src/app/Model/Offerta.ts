namespace CdC.Model {

	import DDD = DDDTools;
	import VOs = CdC.Model.ValueObjects;

	export class Offerta extends DDD.BaseAggregateRoot<Offerta, VOs.IdOfferta> {

		public __typeName =  "CdC.Model.Offerta";

		private descrizioneOfferta: string;

		private offertePerVarianti: Array<ValueObjects.IdRevisioneDiOfferta>;
		private variantiDiOrdine: Array<ValueObjects.IdRevisioneDiOfferta>;

		private codiceBaseOfferta: ValueObjects.CodiceBaseOfferta;
		private dataPresuntaOrdine: Date;
		private probabilitaRientroOrdine: number;
		// private infoCommerciali: InfoCommerciali;
		
		constructor(
			) {
			super();
			this.offertePerVarianti = [];
			this.variantiDiOrdine = [];
		}
        
        public getRevisioniDiOfferta() {
            return this.offertePerVarianti;
        }
        
        public registerEventHandlers() {}
        
        public unregisterEventHandlers() {}
	}
}