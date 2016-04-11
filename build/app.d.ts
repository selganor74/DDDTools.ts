/// <reference path="../typings/main.d.ts" />
declare namespace DDDTools {
    interface IEquatable<T> {
        equals(item: T): boolean;
    }
}
declare namespace DDDTools {
    interface IValueObject<T> extends IEquatable<T> {
    }
}
declare namespace DDDTools {
    interface IEntity<T, TKey extends IEquatable<TKey>> extends IEquatable<T> {
        getKey(): TKey;
        setKey(key: TKey): void;
    }
}
declare namespace DDDTools.StatefulObject {
    interface IStateful {
        __typeName: string;
        __typeVersion: string;
        __objectInstanceId?: string;
        getUpgradedInstance?(fromInstance: IStateful): IStateful;
        getState(): any;
        setState(state: any): any;
    }
}
declare namespace DDDTools {
    abstract class BaseErrors {
        static Throw(name: string, message?: string): void;
        static getErrorInstance(name: string, message?: string): Error;
    }
}
declare namespace DDDTools.StatefulObject {
    import BaseErrors = DDDTools.BaseErrors;
    class StatefulObjectErrors extends BaseErrors {
        static StateIsNotAnObject: string;
        static TypeNameNotSet: string;
        static TypeVersionNotSet: string;
        static UnableToInstantiateType: string;
    }
}
declare namespace DDDTools.StatefulObject {
    import BaseErrors = DDDTools.BaseErrors;
    class UpgraderErrors extends BaseErrors {
        static TypeNotInstatiable: string;
        static UpgradePathNotFound: string;
        static IncorrectVersionFormat: string;
        static WrongVersionInUpgradedInstance: string;
    }
}
declare namespace DDDTools.StatefulObject {
    class StatefulObjectUpgrader {
        private static latestTypeVersionMap;
        private static isVersionMapBuilt;
        private static buildVersionMapForType(typeName);
        static isLatestVersionForType(typeName: string, typeVersion: string): boolean;
        static upgrade(instanceFrom: IStateful): IStateful;
        static computeNextVersion(typeVersion: string): string;
    }
}
declare namespace DDDTools.StatefulObject {
    class StatefulObjectFactory {
        static createTypeInstance(typeName: string, typeVersion?: string): IStateful;
        static createObjectsFromState(state: any): any;
        private static isStatefulObject(objectToTest);
        private static isTypeInstantiable(fullyQualifiedTypeName);
        private static computeFullyQualifiedTypeName(typeName, typeVersion);
    }
}
declare namespace DDDTools.StatefulObject {
    class SimpleGuid {
        private static isValid(guid);
        private static s4();
        static generate(): string;
    }
}
declare namespace DDDTools.StatefulObject {
    class StatefulSerializerDeserializer {
        private static idToObjectMap;
        static serialize(toSerialize: any): string;
        static deserialize(toDeserialize: string): any;
        private static cleanup();
        private static customSerializer(key, value);
        private static customReviver(key, value);
        private static hasBeenTouched(object);
        private static touch(object);
        private static isInIdentityMapById(id);
        private static getFromIdentityMapById(id);
        private static addToIdentityMapById(id, object);
        private static RegExpSerializer(value);
        private static RegExpDeserializer(value);
        private static DateSerializer(value);
        private static DateDeserializer(value);
    }
}
declare namespace DDDTools {
    import IStateful = StatefulObject.IStateful;
    abstract class BaseStatefulObject implements IStateful {
        __typeName: string;
        __typeVersion: string;
        getState(): any;
        setState(state: any): void;
    }
}
declare namespace DDDTools {
    abstract class BaseEntity<T extends IEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> extends BaseStatefulObject {
        private key;
        getKey(): TKey;
        setKey(key: TKey): void;
        equals(item: T): boolean;
    }
}
declare namespace DDDTools {
    abstract class BaseValueObject<T> extends BaseStatefulObject implements IValueObject<T> {
        constructor();
        equals(item: T): boolean;
    }
}
declare namespace DDDTools.Repository {
    interface IRepository<T extends IEntity<T, TKey>, TKey extends IValueObject<TKey>> {
        getById(id: TKey): T;
        save(item: T): void;
        delete(id: TKey): void;
    }
}
declare namespace DDDTools.Repository {
    import DDD = DDDTools;
    class RepositoryErrors extends DDD.BaseErrors {
        static KeyNotSet: string;
        static ItemNotFound: string;
    }
}
declare namespace DDDTools {
    import IRepository = Repository.IRepository;
    abstract class BaseInMemoryRepository<T extends BaseEntity<T, TKey>, TKey extends IKeyValueObject<TKey>> implements IRepository<T, TKey> {
        private _managedTypeName;
        private storage;
        constructor(_managedTypeName: string);
        getById(id: TKey): T;
        save(item: T): void;
        delete(id: TKey): void;
    }
}
declare namespace DDDTools {
    interface IKeyValueObject<T> extends IValueObject<T> {
        toString(): string;
    }
}
declare namespace DDDTools {
    abstract class BaseKeyValueObject<T> extends BaseValueObject<T> implements IKeyValueObject<T> {
        constructor();
        toString(): string;
    }
}
declare namespace DDDTools.Locking {
    interface ILock<TLockKey extends BaseValueObject<TLockKey>> {
        canBeUnlockedByKey(key: TLockKey): boolean;
        isLockedByTheSameKey(otherLock: ILock<TLockKey>): boolean;
    }
}
declare namespace DDDTools.Locking {
    interface ILockManager<TLockKey extends BaseValueObject<TLockKey>, TLock extends ILock<TLockKey>> {
        lock(locker: TLock): any;
        releaseLock(): any;
        getLock(): TLock;
    }
}
declare namespace DDDTools.ValueObjects {
    class Guid extends BaseValueObject<Guid> implements IKeyValueObject<Guid> {
        __typeName: string;
        __typeVersion: string;
        private guid;
        constructor(guid?: string);
        private static s4();
        static generate(): Guid;
        private isValid();
        toString(): string;
    }
}
declare namespace DDDTools.Locking {
    import Guid = DDDTools.ValueObjects.Guid;
    class SimpleLock extends BaseValueObject<SimpleLock> implements ILock<SimpleLockKey> {
        private keyCreatedWith;
        __typeName: string;
        constructor(keyCreatedWith: SimpleLockKey);
        canBeUnlockedByKey(key: SimpleLockKey): boolean;
        isLockedByTheSameKey(otherLock: SimpleLock): boolean;
    }
    class SimpleLockKey extends BaseValueObject<SimpleLockKey> implements IKeyValueObject<SimpleLockKey> {
        __typeName: string;
        private key;
        constructor(key?: Guid);
        toString(): string;
    }
    class InMemoryEntityLockManager<TLockableEntity extends BaseEntity<TLockableEntity, TUniqueId>, TUniqueId extends BaseValueObject<TUniqueId>, TLockKey extends BaseValueObject<TLockKey>, TLock extends ILock<TLockKey>> implements ILockManager<TLockKey, TLock> {
        private item;
        private clientKey;
        private static keyring;
        constructor(item: TLockableEntity, clientKey: TLockKey);
        private getKeyAsString();
        getLock(): TLock;
        hasLock(): boolean;
        lock(locker: TLock): void;
        releaseLock(): void;
    }
}
declare namespace DDDTools.Locking {
    class LockingErrors extends BaseErrors {
        static EntityLockedBySomeoneElse: string;
    }
}
declare namespace CdC.Model {
    import DDD = DDDTools;
    import VOs = CdC.Model.ValueObjects;
    class Offerta extends DDD.BaseEntity<Offerta, VOs.IdOfferta> {
        __typeName: string;
        private descrizioneOfferta;
        private revisioniDiOfferta;
        private variantiDiOrdine;
        private codiceBaseOfferta;
        private dataPresuntaOrdine;
        private probabilitaRientroOrdine;
        constructor();
        getRevisioniDiOfferta(): VOs.IdRevisioneDiOfferta[];
    }
}
declare namespace CdC.Model {
    class RevisioneDiOfferta {
        private moduli;
        private revisione;
        private variante;
        private offertista;
        private commerciale;
        private infoCommerciali;
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    class CodiceBaseOfferta extends DDD.BaseValueObject<CodiceBaseOfferta> {
        private codiceBaseOfferta;
        __typeName: string;
        constructor(codiceBaseOfferta: string);
        isValid(): boolean;
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;
    class IdModulo extends DDD.BaseValueObject<IdModulo> {
        private idModulo;
        __typeName: string;
        constructor(idModulo: Guid);
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;
    class IdOfferta extends DDD.BaseValueObject<IdOfferta> {
        private idOfferta;
        __typeName: string;
        constructor(idOfferta?: Guid);
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    class IdRevisione extends DDD.BaseValueObject<IdRevisione> {
        private idRevisione;
        __typeName: string;
        constructor(idRevisione: number);
        toString(): string;
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    import Guid = DDDTools.ValueObjects.Guid;
    class IdRevisioneDiOfferta extends DDD.BaseValueObject<IdRevisioneDiOfferta> {
        private idRevisioneDiOfferta;
        __typeName: string;
        constructor(idRevisioneDiOfferta: Guid);
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    class IdVariante extends DDD.BaseValueObject<IdVariante> {
        __typeName: string;
        private idVariante;
        constructor(idVariante?: number);
        toString(): string;
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    class InfoCommerciali extends DDD.BaseValueObject<InfoCommerciali> {
        private idPrmLinea;
        private idPrmSottolinea;
        private idPrmTipoBanco;
        private idPrmComponente;
        private descrizioneLinea;
        private descrizioneSottolinea;
        private descrizioneComponente;
        private descrizioneTipoBanco;
        __typeName: string;
        constructor(idPrmLinea: number, idPrmSottolinea: number, idPrmTipoBanco: number, idPrmComponente: number, descrizioneLinea: string, descrizioneSottolinea: string, descrizioneComponente: string, descrizioneTipoBanco: string);
    }
}
declare namespace CdC.Model.ValueObjects {
    import DDD = DDDTools;
    class ReferenteInterno extends DDD.BaseValueObject<ReferenteInterno> {
        private idReferentePrm;
        private nome;
        private cognome;
        private email;
        __typeName: string;
        constructor(idReferentePrm: number, nome: string, cognome: string, email: string);
    }
}
declare namespace CdC.Repositories {
    import DDD = DDDTools;
    class OfferteErrors extends DDD.BaseErrors {
    }
}
declare namespace CdC.Repositories {
    import VOs = CdC.Model.ValueObjects;
    import M = CdC.Model;
    import DDD = DDDTools;
    class Offerte extends DDD.BaseInMemoryRepository<M.Offerta, VOs.IdOfferta> {
    }
}
declare namespace CdC.Tests {
    import DDD = DDDTools;
    class Key extends DDD.BaseValueObject<Key> {
        private id;
        __typeName: string;
        __typeVersion: string;
        constructor();
        toString(): string;
    }
    class ChildEntity extends DDD.BaseEntity<ChildEntity, Key> {
        arrayOfKeys: Key[];
        __typeName: string;
        __typeVersion: string;
        constructor();
    }
    class TestEntity extends DDD.BaseEntity<TestEntity, Key> {
        arrayOfEntities: ChildEntity[];
        anonymousObject: any;
        anObjectReference: any;
        anotherObjectReference: any;
        __typeName: string;
        __typeVersion: string;
        constructor();
    }
}
declare namespace CdC.Tests.BaseStatefulObject.v2 {
    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v1.A3StepUpgradableItem): A3StepUpgradableItem;
    }
}
declare namespace CdC.Tests.BaseStatefulObject.v1 {
    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
}
declare namespace CdC.Tests.BaseStatefulObject {
    import BaseEntity = DDDTools.BaseEntity;
    import Guid = DDDTools.ValueObjects.Guid;
    class A3StepUpgradableItem extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNewProperty: string;
        aNewNewProperty: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v2.A3StepUpgradableItem): A3StepUpgradableItem;
    }
    class TestEntity extends BaseEntity<TestEntity, Guid> {
        __typeName: string;
        __typeVersion: string;
        getUpgradedInstance(fromInstance: CdC.Tests.BaseStatefulObject.v1.TestEntity): TestEntity;
        aNewProperty: string;
    }
    class TestEntityNonUpgradable extends BaseEntity<TestEntityNonUpgradable, Guid> {
        __typeName: string;
        __typeVersion: string;
    }
    class AClassWithManyTypes extends BaseEntity<AClassWithManyTypes, Guid> {
        __typeName: string;
        __typeVersion: string;
        aNumber: Number;
        aString: String;
        aBoolean: Boolean;
        anObject: Object;
        aRegExp: RegExp;
        aDate: Date;
    }
}
declare namespace CdC.Tests.BaseValueObject {
}
declare namespace CdC.Tests.InMemoryItemLocker {
    import DDD = DDDTools;
    class Key extends DDD.BaseValueObject<Key> {
        private id;
        __typeName: string;
        __typeVersion: string;
        constructor();
    }
}
