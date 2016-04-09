namespace CdC.Repositories {
    import VOs = CdC.Model.ValueObjects;
    import M = CdC.Model;
    import DDD = DDDTools;
    import DDDRepo = DDDTools.Repository;
    import Errors = CdC.Repositories.OfferteErrors;
    
    export class Offerte extends DDD.BaseInMemoryRepository<M.Offerta, VOs.IdOfferta> {
        
        
    }
}