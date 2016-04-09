namespace CdC.Model.ValueObjects {

	import DDD = DDDTools;

	export class InfoCommerciali extends DDD.BaseValueObject<InfoCommerciali> {

        public __typeName =  "CdC.Model.ValueObjects.InfoCommerciali";

		constructor(
			private idPrmLinea: number,
			private idPrmSottolinea: number,
			private idPrmTipoBanco: number,
			private idPrmComponente: number,
			private descrizioneLinea: string,
			private descrizioneSottolinea: string,
			private descrizioneComponente: string,
			private descrizioneTipoBanco: string
			) {
			super();
		}		
	}
}