var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DDDTools;
(function (DDDTools) {
    var ErrorManagement;
    (function (ErrorManagement) {
        var BaseErrors = (function () {
            function BaseErrors() {
            }
            BaseErrors.throw = function (name, message) {
                var err = BaseErrors.getErrorInstance(name, message);
                throw err;
            };
            BaseErrors.getErrorInstance = function (name, message) {
                var err = new Error(message || name);
                err.name = name;
                return err;
            };
            return BaseErrors;
        }());
        ErrorManagement.BaseErrors = BaseErrors;
    })(ErrorManagement = DDDTools.ErrorManagement || (DDDTools.ErrorManagement = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Utils;
    (function (Utils) {
        var SimpleGuid = (function () {
            function SimpleGuid() {
            }
            SimpleGuid.isValid = function (guid) {
                var guidRegexp = new RegExp("^[{(]?[0-9A-Fa-f]{8}[-]?([0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$");
                return guidRegexp.test(guid);
            };
            SimpleGuid.s4 = function () {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            };
            SimpleGuid.generate = function () {
                var newSimpleGuid = "{" + SimpleGuid.s4() + SimpleGuid.s4() + "-" + SimpleGuid.s4() + "-" + SimpleGuid.s4() + "-" +
                    SimpleGuid.s4() + "-" + SimpleGuid.s4() + SimpleGuid.s4() + SimpleGuid.s4() + "}";
                if (SimpleGuid.isValid(newSimpleGuid)) {
                    return newSimpleGuid;
                }
                throw new Error("Should Never Happen! The generated guid is not valid!");
            };
            return SimpleGuid;
        }());
        Utils.SimpleGuid = SimpleGuid;
    })(Utils = DDDTools.Utils || (DDDTools.Utils = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Utils;
    (function (Utils) {
        var SimpleIdentityMap = (function () {
            function SimpleIdentityMap() {
                this.idToObjectMap = {};
            }
            SimpleIdentityMap.prototype.isTracked = function (id) {
                if (this.idToObjectMap[id]) {
                    return true;
                }
                return false;
            };
            SimpleIdentityMap.prototype.getById = function (id) {
                if (this.isTracked(id)) {
                    return this.idToObjectMap[id];
                }
                return null;
            };
            SimpleIdentityMap.prototype.add = function (id, object) {
                this.idToObjectMap[id] = object;
            };
            SimpleIdentityMap.prototype.getIds = function () {
                var toReturn = [];
                for (var element in this.idToObjectMap) {
                    toReturn.push(element);
                }
                return toReturn;
            };
            SimpleIdentityMap.prototype.deleteById = function (id) {
                delete this.idToObjectMap[id];
            };
            return SimpleIdentityMap;
        }());
        Utils.SimpleIdentityMap = SimpleIdentityMap;
    })(Utils = DDDTools.Utils || (DDDTools.Utils = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var SerializableDate = (function () {
            function SerializableDate(date) {
                this.__typeName = "SerializableDate";
                this.__typeVersion = "v1";
                this.__dateAsString = date.toISOString();
            }
            SerializableDate.getDateFromString = function (dateAsString) {
                return new Date(dateAsString);
            };
            SerializableDate.prototype.getDate = function () {
                return SerializableDate.getDateFromString(this.__dateAsString);
            };
            return SerializableDate;
        }());
        Serialization.SerializableDate = SerializableDate;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var SerializableRegExp = (function () {
            function SerializableRegExp(regExp) {
                this.__typeName = "SerializableRegExp";
                this.__typeVersion = "v1";
                this.splitRegExpAndFlags(regExp);
            }
            SerializableRegExp.prototype.splitRegExpAndFlags = function (regExp) {
                var reallyUnlikelyString = "°òàù°°òàù°°òàù°";
                var conditionedString = regExp.toString();
                conditionedString = conditionedString.replace("\\/", reallyUnlikelyString);
                var parts = conditionedString.split("/");
                if (parts[0] !== "")
                    throw new Error("This should never happen!");
                parts[1] = parts[1].replace(reallyUnlikelyString, "\\/");
                this.__regularExpression = parts[1];
                this.__flags = parts[2] || "";
            };
            SerializableRegExp.getRegExpFromRegExpAndFlags = function (regularExpression, flags) {
                var toReturn;
                if (flags) {
                    toReturn = new RegExp(regularExpression, flags);
                }
                else {
                    toReturn = new RegExp(regularExpression);
                }
                return toReturn;
            };
            SerializableRegExp.prototype.getRegExp = function () {
                return SerializableRegExp.getRegExpFromRegExpAndFlags(this.__regularExpression, this.__flags);
            };
            return SerializableRegExp;
        }());
        Serialization.SerializableRegExp = SerializableRegExp;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var Touch = (function () {
            function Touch() {
            }
            Touch.resetTouchIndex = function () {
                var sThis = Touch;
                sThis.touchIndex = 1;
            };
            Touch.getNewIndex = function () {
                var sThis = Touch;
                sThis.touchIndex++;
                return (sThis.touchIndex++ - 1).toString();
            };
            Touch.touch = function (object) {
                var sThis = Touch;
                if (typeof object === "object") {
                    var newId = sThis.getNewIndex();
                    object.__objectInstanceId = newId;
                }
            };
            Touch.untouch = function (object) {
                if (object.__objectInstanceId) {
                    delete object.__objectInstanceId;
                }
            };
            Touch.hasBeenTouched = function (object) {
                var casted = object;
                if (casted.__objectInstanceId) {
                    return true;
                }
                return false;
            };
            Touch.touchIndex = 1;
            return Touch;
        }());
        Serialization.Touch = Touch;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var SimpleIdentityMap = DDDTools.Utils.SimpleIdentityMap;
        var Deserializer = (function () {
            function Deserializer() {
            }
            Deserializer.deserialize = function (toDeserialize) {
                Deserializer.identityMap = new SimpleIdentityMap();
                var toReturn = JSON.parse(toDeserialize, Deserializer.customReviver);
                Deserializer.cleanup();
                return toReturn;
            };
            Deserializer.cleanup = function () {
                var sThis = Deserializer;
                var idMap = sThis.identityMap;
                var untouch = Serialization.Touch.untouch;
                for (var _i = 0, _a = idMap.getIds(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    var currentItem = idMap.getById(item);
                    untouch(currentItem);
                    idMap.deleteById(item);
                }
            };
            Deserializer.customReviver = function (key, value) {
                var sThis = Deserializer;
                var idMap = sThis.identityMap;
                if (typeof value === "object") {
                    if (sThis.hasBeenTouched(value)) {
                        if (idMap.isTracked(value.__objectInstanceId)) {
                            return idMap.getById(value.__objectInstanceId);
                        }
                        else {
                            value = sThis.FakeRegExpDeserializer(value);
                            value = sThis.FakeDateDeserializer(value);
                            idMap.add(value.__objectInstanceId, value);
                        }
                    }
                }
                return value;
            };
            Deserializer.hasBeenTouched = function (object) {
                var casted = object;
                if (casted.__objectInstanceId) {
                    return true;
                }
                return false;
            };
            Deserializer.FakeRegExpDeserializer = function (value) {
                if (value.__typeName) {
                    if (value.__typeName === "SerializableRegExp") {
                        value = Serialization.SerializableRegExp.getRegExpFromRegExpAndFlags(value.__regularExpression, value.__flags);
                    }
                }
                return value;
            };
            Deserializer.FakeDateDeserializer = function (value) {
                if (value.__typeName) {
                    if (value.__typeName === "SerializableDate") {
                        value = Serialization.SerializableDate.getDateFromString(value.__dateAsString);
                    }
                }
                return value;
            };
            return Deserializer;
        }());
        Serialization.Deserializer = Deserializer;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var Serializer = (function () {
            function Serializer() {
            }
            Serializer.serialize = function (toSerialize) {
                var toReturn;
                Serialization.Touch.resetTouchIndex();
                toSerialize = Serializer.preprocessForSerializablesSubstitution(toSerialize);
                try {
                    toReturn = JSON.stringify(toSerialize, Serializer.customSerializer);
                }
                finally {
                    Serializer.postprocessForSerializableSubstitution(toSerialize);
                    Serializer.untouchSourceObject(toSerialize);
                }
                return toReturn;
            };
            Serializer.preprocessForSerializablesSubstitution = function (sourceObject) {
                for (var idx in sourceObject) {
                    var current = sourceObject[idx];
                    if (current instanceof Date) {
                        var newFakeDate = new Serialization.SerializableDate(current);
                        sourceObject[idx] = newFakeDate;
                        continue;
                    }
                    if (current instanceof RegExp) {
                        var newFakeRegExp = new Serialization.SerializableRegExp(current);
                        sourceObject[idx] = newFakeRegExp;
                        continue;
                    }
                    if (typeof current === 'object' || Array.isArray(current)) {
                        sourceObject[idx] = Serializer.preprocessForSerializablesSubstitution(current);
                        continue;
                    }
                }
                return sourceObject;
            };
            Serializer.untouchSourceObject = function (sourceObject) {
                var sThis = Serializer;
                if (Serialization.Touch.hasBeenTouched(sourceObject)) {
                    Serialization.Touch.untouch(sourceObject);
                }
                for (var idx in sourceObject) {
                    var current = sourceObject[idx];
                    if (typeof current === 'object' || Array.isArray(current)) {
                        sThis.untouchSourceObject(current);
                        sourceObject[idx] = Serializer.preprocessForSerializablesSubstitution(current);
                        continue;
                    }
                }
            };
            Serializer.postprocessForSerializableSubstitution = function (sourceObject) {
                for (var idx in sourceObject) {
                    var current = sourceObject[idx];
                    if (current instanceof Serialization.SerializableDate) {
                        sourceObject[idx] = current.getDate();
                        continue;
                    }
                    if (current instanceof Serialization.SerializableRegExp) {
                        sourceObject[idx] = current.getRegExp();
                        continue;
                    }
                    if (typeof current === 'object' || Array.isArray(current)) {
                        sourceObject[idx] = Serializer.postprocessForSerializableSubstitution(current);
                        continue;
                    }
                }
                return sourceObject;
            };
            Serializer.customSerializer = function (key, value) {
                var sThis = Serializer;
                if (typeof value === "object") {
                    if (!Serialization.Touch.hasBeenTouched(value)) {
                        Serialization.Touch.touch(value);
                    }
                }
                return value;
            };
            return Serializer;
        }());
        Serialization.Serializer = Serializer;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var PersistableObject;
    (function (PersistableObject) {
        var BaseErrors = DDDTools.ErrorManagement.BaseErrors;
        var Errors = (function (_super) {
            __extends(Errors, _super);
            function Errors() {
                _super.apply(this, arguments);
            }
            Errors.StateIsNotAnObject = "State is not an Object";
            Errors.TypeNameNotSet = "TypeName not set";
            Errors.TypeVersionNotSet = "TypeVersion not set";
            Errors.UnableToInstantiateType = "Unable to Instantiate Type";
            Errors.TypeRegistryNotSet = "TypeRegistry not set";
            Errors.TypeNotRegistered = "Type has not been registered with the TypeRegistry";
            Errors.CannotRegisterUndefined = "typePrototype cannot be null or undefined";
            Errors.TypeNotInstatiable = "Type is not instantiable";
            Errors.UpgradePathNotFound = "Upgrade Path not Found";
            Errors.IncorrectVersionFormat = "Incorrect Version Format";
            Errors.WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
            return Errors;
        }(BaseErrors));
        PersistableObject.Errors = Errors;
    })(PersistableObject = DDDTools.PersistableObject || (DDDTools.PersistableObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var PersistableObject;
    (function (PersistableObject) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.registerType = function (typeName, typeVersion, typePrototype) {
                var sThis = Factory;
                if (!sThis.typeRegistry) {
                    sThis.typeRegistry = new PersistableObject.TypeRegistry();
                }
                PersistableObject.TypeRegistry.registerType(typeName, typeVersion, typePrototype);
            };
            Factory.createTypeInstance = function (typeName, typeVersion) {
                if (!Factory.typeRegistry) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeRegistryNotSet, "Please register at least a type with the Factory.");
                }
                return PersistableObject.TypeRegistry.getTypeInstance(typeName, typeVersion);
            };
            Factory.createObjectsFromState = function (state) {
                if (state === undefined) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.UnableToInstantiateType, "state cannot be 'undefined'");
                }
                if (state === null) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.UnableToInstantiateType, "state cannot be 'null'");
                }
                if (typeof state === 'object') {
                    if (Factory.isPersistableObject(state)) {
                        var persistable;
                        persistable = Factory.createTypeInstance(state.__typeName);
                        persistable.setState(state);
                        var upgradedPersistable = Upgrader.upgrade(persistable);
                        return upgradedPersistable;
                    }
                    var toReturn = Array.isArray(state) ? [] : {};
                    for (var currentElement in state) {
                        var thisElement = state[currentElement];
                        toReturn[currentElement] = Factory.createObjectsFromState(thisElement);
                    }
                    return toReturn;
                }
                return state;
            };
            Factory.isPersistableObject = function (objectToTest) {
                if (typeof objectToTest !== 'object') {
                    return false;
                }
                var persistable = objectToTest;
                if (!persistable.__typeName || persistable.__typeName === "") {
                    return false;
                }
                if (!persistable.__typeVersion || persistable.__typeVersion === "") {
                    return false;
                }
                return true;
            };
            Factory.isTypeInstantiable = function (typeName) {
                try {
                    var tmpType = Factory.createTypeInstance(typeName);
                }
                catch (e) {
                    return false;
                }
                return true;
            };
            return Factory;
        }());
        PersistableObject.Factory = Factory;
        var Upgrader = (function () {
            function Upgrader() {
            }
            Upgrader.buildVersionMapForType = function (typeName) {
                if (Upgrader.isVersionMapBuilt[typeName]) {
                    return;
                }
                try {
                    var tmpInstance = Factory.createTypeInstance(typeName);
                    Upgrader.latestTypeVersionMap[typeName] = tmpInstance.__typeVersion;
                }
                catch (e) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeNotInstatiable, "The type " + typeName + " cannot be instantiated, so it is impossible to identify the latest possible version.");
                }
                Upgrader.isVersionMapBuilt[typeName] = true;
            };
            Upgrader.isLatestVersionForType = function (typeName, typeVersion) {
                if (!Upgrader.isVersionMapBuilt[typeName]) {
                    Upgrader.buildVersionMapForType(typeName);
                }
                if (Upgrader.latestTypeVersionMap[typeName] !== typeVersion) {
                    return true;
                }
                return false;
            };
            Upgrader.upgrade = function (instanceFrom) {
                if (!Upgrader.isLatestVersionForType(instanceFrom.__typeName, instanceFrom.__typeVersion)) {
                    return instanceFrom;
                }
                var nextVersion = Upgrader.computeNextVersion(instanceFrom.__typeVersion);
                var upgraderInstance = Factory.createTypeInstance(instanceFrom.__typeName, nextVersion);
                var upgraded = upgraderInstance.getUpgradedInstance(instanceFrom);
                if (upgraded.__typeVersion != nextVersion) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.WrongVersionInUpgradedInstance, "The expected version of the upgraded instance was " + nextVersion + " while was found to be " + upgraderInstance.__typeVersion);
                }
                return Upgrader.upgrade(upgraded);
            };
            Upgrader.computeNextVersion = function (typeVersion) {
                var versionRe = new RegExp("^v[0-9]+");
                if (!versionRe.test(typeVersion)) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
                }
                var version = Number(typeVersion.substr(1));
                version = version + 1;
                var nextVersion = "v" + version;
                return nextVersion;
            };
            Upgrader.latestTypeVersionMap = {};
            Upgrader.isVersionMapBuilt = {};
            return Upgrader;
        }());
        PersistableObject.Upgrader = Upgrader;
    })(PersistableObject = DDDTools.PersistableObject || (DDDTools.PersistableObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var PersistableObject;
    (function (PersistableObject) {
        var Serializer = DDDTools.Serialization.Serializer;
        var Deserializer = DDDTools.Serialization.Deserializer;
        var BasePersistableObject = (function () {
            function BasePersistableObject() {
                this.__typeName = "";
                this.__typeVersion = "";
            }
            BasePersistableObject.prototype.getState = function () {
                if (this.__typeName === "") {
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeNameNotSet);
                }
                if (this.__typeVersion === "") {
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeVersionNotSet);
                }
                var toReconstitute = Serializer.serialize(this);
                var reconstituted = Deserializer.deserialize(toReconstitute);
                return reconstituted;
            };
            BasePersistableObject.prototype.setState = function (state) {
                if (typeof state !== "object") {
                    PersistableObject.Errors.throw(PersistableObject.Errors.StateIsNotAnObject, "state deve essere un oggetto");
                }
                for (var element in state) {
                    var currentStateElement = state[element];
                    this[element] = PersistableObject.Factory.createObjectsFromState(currentStateElement);
                }
            };
            return BasePersistableObject;
        }());
        PersistableObject.BasePersistableObject = BasePersistableObject;
    })(PersistableObject = DDDTools.PersistableObject || (DDDTools.PersistableObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var ValueObject;
    (function (ValueObject) {
        var BasePersistableObject = DDDTools.PersistableObject.BasePersistableObject;
        var Serializer = DDDTools.Serialization.Serializer;
        var BaseValueObject = (function (_super) {
            __extends(BaseValueObject, _super);
            function BaseValueObject() {
                _super.call(this);
            }
            BaseValueObject.prototype.equals = function (item) {
                var foreign = Serializer.serialize(item);
                var local = Serializer.serialize(this);
                return foreign === local;
            };
            return BaseValueObject;
        }(BasePersistableObject));
        ValueObject.BaseValueObject = BaseValueObject;
    })(ValueObject = DDDTools.ValueObject || (DDDTools.ValueObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var ValueObjects;
    (function (ValueObjects) {
        var SimpleGuid = DDDTools.Utils.SimpleGuid;
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var Guid = (function (_super) {
            __extends(Guid, _super);
            function Guid(guid) {
                _super.call(this);
                this.__typeName = "DDDTools.ValueObjects.Guid";
                this.__typeVersion = "v1";
                if (guid) {
                    this.guid = guid;
                }
                else {
                    this.guid = SimpleGuid.generate();
                }
            }
            Guid.generate = function () {
                return new Guid(SimpleGuid.generate());
            };
            Guid.prototype.toString = function () {
                return this.guid;
            };
            return Guid;
        }(BaseValueObject));
        ValueObjects.Guid = Guid;
    })(ValueObjects = DDDTools.ValueObjects || (DDDTools.ValueObjects = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var PersistableObject;
    (function (PersistableObject) {
        var Guid = DDDTools.ValueObjects.Guid;
        var TypeRegistry = (function () {
            function TypeRegistry() {
            }
            TypeRegistry.registerType = function (typeName, typeVersion, typePrototype) {
                var sThis = TypeRegistry;
                if (!typePrototype) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.CannotRegisterUndefined, "typePrototype supplied for " + typeName + " " + typeVersion + " is null or undefined!");
                }
                if (!sThis.versionIsInCorrectFormat(typeVersion)) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.IncorrectVersionFormat);
                }
                sThis.registry[typeName] = this.registry[typeName] || {};
                sThis.registry[typeName][typeVersion] = typePrototype;
                sThis.updateLatestVersions(typeName, typeVersion);
                if (!sThis.commonTypesRegistered) {
                    sThis.commonTypesRegistered = true;
                    TypeRegistry.registerType("DDDTools.ValueObjects.Guid", "v1", Guid);
                }
            };
            TypeRegistry.updateLatestVersions = function (typeName, typeVersion) {
                var sThis = TypeRegistry;
                if (!sThis.latestVersions[typeName]) {
                    sThis.latestVersions[typeName] = typeVersion;
                    return;
                }
                var reference = sThis.latestVersions[typeName];
                if (sThis.isVersionGreater(typeVersion, reference)) {
                    sThis.latestVersions[typeName] = typeVersion;
                }
            };
            TypeRegistry.isVersionGreater = function (vSubject, vReference) {
                var sThis = TypeRegistry;
                var vS = sThis.extractVersionNumber(vSubject);
                var vR = sThis.extractVersionNumber(vReference);
                return vS > vR;
            };
            TypeRegistry.extractVersionNumber = function (typeVersion) {
                var sThis = TypeRegistry;
                var version = typeVersion.replace("v", "");
                var asNumber = Number(version);
                return asNumber;
            };
            TypeRegistry.getTypeInstance = function (typeName, typeVersion) {
                var sThis = TypeRegistry;
                if (!typeVersion) {
                    typeVersion = sThis.getLatestVersionForType(typeName);
                }
                if (!sThis.registry[typeName]) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeNotRegistered, "Type " + typeName + " does not exist in the TypeRegistry.");
                }
                if (!sThis.registry[typeName][typeVersion]) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeNotRegistered, "Version " + typeVersion + " of Type " + typeName + " does not exist in the TypeRegistry.");
                }
                var toInstantiate = sThis.registry[typeName][typeVersion];
                var toReturn;
                try {
                    toReturn = (new toInstantiate());
                }
                catch (e) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
                }
                return toReturn;
            };
            TypeRegistry.isLatestVersionForType = function (typeName, typeVersion) {
                var sThis = TypeRegistry;
                return sThis.getLatestVersionForType(typeName) === typeVersion;
            };
            TypeRegistry.getLatestVersionForType = function (typeName) {
                var sThis = TypeRegistry;
                return sThis.latestVersions[typeName] || undefined;
            };
            TypeRegistry.versionIsInCorrectFormat = function (typeVersion) {
                var sThis = TypeRegistry;
                var versionRe = new RegExp("^v[0-9]+");
                if (!versionRe.test(typeVersion)) {
                    return false;
                }
                return true;
            };
            TypeRegistry.computeNextVersion = function (typeVersion) {
                var sThis = TypeRegistry;
                var versionRe = new RegExp("^v[0-9]+");
                if (!sThis.versionIsInCorrectFormat(typeVersion)) {
                    throw new Error();
                }
                var version = Number(typeVersion.substr(1));
                version = version + 1;
                var nextVersion = "v" + version;
                return nextVersion;
            };
            TypeRegistry.registry = {};
            TypeRegistry.latestVersions = {};
            TypeRegistry.commonTypesRegistered = false;
            return TypeRegistry;
        }());
        PersistableObject.TypeRegistry = TypeRegistry;
    })(PersistableObject = DDDTools.PersistableObject || (DDDTools.PersistableObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var DomainEvents;
    (function (DomainEvents) {
        var DomainDispatcher = (function () {
            function DomainDispatcher() {
            }
            DomainDispatcher.setDispatcherImplementation = function (dispatcher) {
                var sThis = DomainDispatcher;
                sThis.dispatcherImplementation = dispatcher;
            };
            DomainDispatcher.registerHandler = function (eventTypeName, handler) {
                var sThis = DomainDispatcher;
                if (sThis.dispatcherImplementation) {
                    sThis.dispatcherImplementation.registerHandler(eventTypeName, handler);
                }
            };
            DomainDispatcher.unregisterHandler = function (eventTypeName, handler) {
                var sThis = DomainDispatcher;
                if (sThis.dispatcherImplementation) {
                    sThis.dispatcherImplementation.unregisterHandler(eventTypeName, handler);
                }
            };
            DomainDispatcher.dispatch = function (event) {
                var sThis = DomainDispatcher;
                if (sThis.dispatcherImplementation) {
                    sThis.dispatcherImplementation.dispatch(event);
                }
            };
            return DomainDispatcher;
        }());
        DomainEvents.DomainDispatcher = DomainDispatcher;
    })(DomainEvents = DDDTools.DomainEvents || (DDDTools.DomainEvents = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var DomainEvents;
    (function (DomainEvents) {
        var SimpleGuid = DDDTools.Utils.SimpleGuid;
        var InProcessDispatcher = (function () {
            function InProcessDispatcher() {
                this.delegatesRegistry = {};
            }
            InProcessDispatcher.prototype.clear = function () {
                this.delegatesRegistry = {};
            };
            InProcessDispatcher.prototype.registerHandler = function (eventTypeName, handler) {
                if (!this.delegatesRegistry[eventTypeName]) {
                    this.delegatesRegistry[eventTypeName] = [];
                }
                if (!handler.__handlerId) {
                    handler.__handlerId = SimpleGuid.generate();
                    this.delegatesRegistry[eventTypeName].push(handler);
                }
            };
            InProcessDispatcher.prototype.unregisterHandler = function (eventTypeName, handler) {
                if (handler.__handlerId) {
                    for (var element in this.delegatesRegistry[eventTypeName]) {
                        var currentElement = this.delegatesRegistry[eventTypeName][element];
                        if (currentElement.__handlerId === handler.__handlerId) {
                            this.delegatesRegistry[eventTypeName].splice(Number(element), 1);
                            break;
                        }
                    }
                }
            };
            InProcessDispatcher.prototype.dispatch = function (event) {
                if (!this.delegatesRegistry[event.__typeName]) {
                    return;
                }
                var Errors = [];
                for (var _i = 0, _a = this.delegatesRegistry[event.__typeName]; _i < _a.length; _i++) {
                    var element = _a[_i];
                    try {
                        element(event);
                    }
                    catch (e) {
                        Errors.push(e);
                    }
                }
                if (Errors.length != 0) {
                    var message = this.buildErrorMessage(Errors);
                    var e = new Error(message);
                    e.name = "Dispatcher Error";
                    console.log(e);
                }
            };
            InProcessDispatcher.prototype.buildErrorMessage = function (Errors) {
                var message = "";
                for (var _i = 0, Errors_1 = Errors; _i < Errors_1.length; _i++) {
                    var element = Errors_1[_i];
                    message += element.name + ":" + element.message + "\n";
                }
                return message;
            };
            return InProcessDispatcher;
        }());
        DomainEvents.InProcessDispatcher = InProcessDispatcher;
    })(DomainEvents = DDDTools.DomainEvents || (DDDTools.DomainEvents = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Entity;
    (function (Entity) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var BaseKeyValueObject = (function (_super) {
            __extends(BaseKeyValueObject, _super);
            function BaseKeyValueObject() {
                _super.call(this);
            }
            return BaseKeyValueObject;
        }(BaseValueObject));
        Entity.BaseKeyValueObject = BaseKeyValueObject;
    })(Entity = DDDTools.Entity || (DDDTools.Entity = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Entity;
    (function (Entity) {
        var BasePersistableObject = DDDTools.PersistableObject.BasePersistableObject;
        var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
        var BaseEntity = (function (_super) {
            __extends(BaseEntity, _super);
            function BaseEntity() {
                _super.apply(this, arguments);
            }
            BaseEntity.prototype.raiseEvent = function (event) {
                DomainDispatcher.dispatch(event);
            };
            ;
            BaseEntity.prototype.getKey = function () {
                return this.key;
            };
            ;
            BaseEntity.prototype.setKey = function (key) {
                this.key = key;
            };
            ;
            BaseEntity.prototype.equals = function (item) {
                if (!item) {
                    return false;
                }
                return item.getKey().equals(this.getKey());
            };
            return BaseEntity;
        }(BasePersistableObject));
        Entity.BaseEntity = BaseEntity;
    })(Entity = DDDTools.Entity || (DDDTools.Entity = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Aggregate;
    (function (Aggregate) {
        var BaseEntity = DDDTools.Entity.BaseEntity;
        var BaseAggregateRoot = (function (_super) {
            __extends(BaseAggregateRoot, _super);
            function BaseAggregateRoot() {
                _super.apply(this, arguments);
                this.__revisionId = 0;
            }
            BaseAggregateRoot.prototype.getRevisionId = function () {
                return this.__revisionId;
            };
            BaseAggregateRoot.prototype.incrementRevisionId = function () {
                this.__revisionId++;
            };
            BaseAggregateRoot.prototype.perfectlyMatch = function (other) {
                if (!other) {
                    return false;
                }
                var thisOne = this.getState();
                var theOther = other.getState();
                var thisOneAsString = JSON.stringify(thisOne);
                var theOtherAsString = JSON.stringify(theOther);
                return thisOneAsString === theOtherAsString;
            };
            return BaseAggregateRoot;
        }(BaseEntity));
        Aggregate.BaseAggregateRoot = BaseAggregateRoot;
    })(Aggregate = DDDTools.Aggregate || (DDDTools.Aggregate = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseErrors = DDDTools.ErrorManagement.BaseErrors;
        var Errors = (function (_super) {
            __extends(Errors, _super);
            function Errors() {
                _super.apply(this, arguments);
            }
            Errors.KeyNotSet = "Key not set";
            Errors.ItemNotFound = "Item Not Found";
            Errors.ErrorSavingItem = "Error Saving Item";
            Errors.ErrorReadingItem = "Error Reading Item";
            Errors.ErrorDeletingItem = "Error Deleting Item";
            Errors.WrongTypeFromImplementation = "Wrong type from Implementation";
            Errors.ManagedTypeNotSupplied = "Repository needs to know what type it can manage";
            Errors.InvalidKey = "Invalid Key";
            return Errors;
        }(BaseErrors));
        Repository.Errors = Errors;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Events = (function () {
            function Events() {
            }
            Events.__nameSpace = "DDDTools.Repository";
            Events.ItemAddedEvent = Events.__nameSpace + ".ItemAddedEvent";
            Events.ItemUpdatedEvent = Events.__nameSpace + ".ItemUpdatedEvent";
            Events.ItemDeletedEvent = Events.__nameSpace + ".ItemDeletedEvent";
            Events.ItemRetrievedEvent = Events.__nameSpace + ".ItemRetrievedEvent";
            return Events;
        }());
        Repository.Events = Events;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ItemAddedEvent = (function (_super) {
            __extends(ItemAddedEvent, _super);
            function ItemAddedEvent(typeName, typeVersion, id, objectState) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.__typeName = Repository.Events.ItemAddedEvent;
                this.__typeVersion = "v1";
            }
            return ItemAddedEvent;
        }(BaseValueObject));
        Repository.ItemAddedEvent = ItemAddedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ItemDeletedEvent = (function (_super) {
            __extends(ItemDeletedEvent, _super);
            function ItemDeletedEvent(typeName, typeVersion, id, objectState) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.__typeName = Repository.Events.ItemDeletedEvent;
                this.__typeVersion = "v1";
            }
            return ItemDeletedEvent;
        }(BaseValueObject));
        Repository.ItemDeletedEvent = ItemDeletedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ItemRetrievedEvent = (function (_super) {
            __extends(ItemRetrievedEvent, _super);
            function ItemRetrievedEvent(typeName, typeVersion, id, objectState) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.__typeName = Repository.Events.ItemRetrievedEvent;
                this.__typeVersion = "v1";
            }
            return ItemRetrievedEvent;
        }(BaseValueObject));
        Repository.ItemRetrievedEvent = ItemRetrievedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ItemUpdatedEvent = (function (_super) {
            __extends(ItemUpdatedEvent, _super);
            function ItemUpdatedEvent(typeName, typeVersion, id, objectState) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.__typeName = Repository.Events.ItemUpdatedEvent;
                this.__typeVersion = "v1";
            }
            return ItemUpdatedEvent;
        }(BaseValueObject));
        Repository.ItemUpdatedEvent = ItemUpdatedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Factory = DDDTools.PersistableObject.Factory;
        var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
        var BaseRepository = (function () {
            function BaseRepository(managedType) {
                this.managedType = managedType;
                if (managedType === "") {
                    Repository.Errors.throw(Repository.Errors.ManagedTypeNotSupplied);
                }
            }
            BaseRepository.prototype.getById = function (id) {
                try {
                    var retrieved = this.getByIdImplementation(id);
                    if (retrieved.__typeName !== this.managedType) {
                        var reason = Repository.Errors.getErrorInstance(Repository.Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtaine " + retrieved.__typeName + " from database.");
                    }
                    var toReturn = Factory.createObjectsFromState(retrieved);
                    var event = new Repository.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), retrieved);
                    DomainDispatcher.dispatch(event);
                    return toReturn;
                }
                catch (e) {
                    Repository.Errors.throw(Repository.Errors.ItemNotFound, e.message);
                }
            };
            BaseRepository.prototype.save = function (item) {
                try {
                    var key = item.getKey().toString();
                }
                catch (e) {
                    Repository.Errors.throw(Repository.Errors.KeyNotSet);
                }
                var event;
                var asItWas = null;
                try {
                    asItWas = this.getById(item.getKey());
                }
                catch (e) {
                    event = new Repository.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                }
                if (!item.perfectlyMatch(asItWas)) {
                    item.incrementRevisionId();
                    event = event || new Repository.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                }
                this.saveImplementation(item);
                if (event) {
                    DomainDispatcher.dispatch(event);
                }
            };
            BaseRepository.prototype.delete = function (id) {
                var asItWas = null;
                try {
                    asItWas = this.getById(id);
                }
                catch (e) {
                    if (e instanceof Error && e.name === Repository.Errors.ItemNotFound) {
                        return;
                    }
                    Repository.Errors.throw(Repository.Errors.ErrorDeletingItem, JSON.stringify(e));
                }
                var event = new Repository.ItemDeletedEvent(asItWas.__typeName, asItWas.__typeVersion, id.toString(), asItWas.getState());
                this.deleteImplementation(id);
                DomainDispatcher.dispatch(event);
            };
            return BaseRepository;
        }());
        Repository.BaseRepository = BaseRepository;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Factory = DDDTools.PersistableObject.Factory;
        var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
        var BaseRepositoryAsync = (function () {
            function BaseRepositoryAsync(managedType) {
                this.managedType = managedType;
                if (managedType === "" || managedType == undefined) {
                    Repository.Errors.throw(Repository.Errors.ManagedTypeNotSupplied);
                }
            }
            BaseRepositoryAsync.prototype.getById = function (id) {
                var _this = this;
                var deferred = Q.defer();
                if (!id) {
                    deferred.reject(Repository.Errors.getErrorInstance(Repository.Errors.KeyNotSet, "id cannot be null or undefined"));
                    return deferred.promise;
                }
                this.getByIdImplementation(id).then(function (value) {
                    if (value.__typeName != _this.managedType && !(_this.managedType == undefined)) {
                        var reason = Repository.Errors.getErrorInstance(Repository.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtained " + value.__typeName + " from database.");
                        deferred.reject(reason);
                        return;
                    }
                    var toReturn = (Factory.createObjectsFromState(value));
                    var event = new Repository.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), value);
                    DomainDispatcher.dispatch(event);
                    deferred.resolve(toReturn);
                }, function (error) {
                    var reason = _this.buildError(error, Repository.Errors.ItemNotFound);
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.doSave = function (item, deferred) {
                var _this = this;
                this.saveImplementation(item).then(function () {
                    deferred.resolve();
                }, function (error) {
                    var reason = _this.buildError(error, Repository.Errors.ErrorSavingItem);
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.save = function (item) {
                var _this = this;
                var deferred = Q.defer();
                var event;
                if (!item.getKey()) {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.KeyNotSet);
                    deferred.reject(reason);
                    return deferred.promise;
                }
                this.getById(item.getKey()).then(function (readValue) {
                    if (!item.perfectlyMatch(readValue)) {
                        item.incrementRevisionId();
                        _this.doSave(item, deferred);
                        event = event || new Repository.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                        DomainDispatcher.dispatch(event);
                    }
                    else {
                        deferred.resolve();
                    }
                }, function (error) {
                    if (error instanceof Error && error.name == Repository.Errors.ItemNotFound) {
                        item.incrementRevisionId();
                        _this.doSave(item, deferred);
                        event = event || new Repository.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                        DomainDispatcher.dispatch(event);
                        return;
                    }
                    var reason = _this.buildError(error, Repository.Errors.ErrorReadingItem);
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.delete = function (id) {
                var _this = this;
                var deferred = Q.defer();
                var event;
                this.getById(id).then(function (item) {
                    var event = new Repository.ItemDeletedEvent(item.__typeName, item.__typeVersion, id.toString(), item.getState());
                    _this.deleteImplementation(id).then(function () {
                        deferred.resolve();
                        DomainDispatcher.dispatch(event);
                    }, function (error) {
                        var reason = _this.buildError(error, Repository.Errors.ErrorDeletingItem);
                        deferred.reject(reason);
                    });
                }, function (error) {
                    if (error instanceof Error && error.name === Repository.Errors.ItemNotFound) {
                        deferred.resolve();
                        return;
                    }
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.buildError = function (errorFromCall, errorIfErrorFromCallIsNotError) {
                var reason;
                if (errorFromCall instanceof Error) {
                    reason = errorFromCall;
                }
                else {
                    reason = Repository.Errors.getErrorInstance(errorIfErrorFromCallIsNotError, JSON.stringify(errorFromCall));
                }
                return reason;
            };
            return BaseRepositoryAsync;
        }());
        Repository.BaseRepositoryAsync = BaseRepositoryAsync;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Factory = DDDTools.PersistableObject.Factory;
        var InMemoryRepository = (function (_super) {
            __extends(InMemoryRepository, _super);
            function InMemoryRepository(managedTypeName) {
                _super.call(this, managedTypeName);
                this.storage = {};
            }
            InMemoryRepository.prototype.getByIdImplementation = function (id) {
                var key = id.toString();
                if (this.storage[key]) {
                    var toReturn = Factory.createObjectsFromState(this.storage[key]);
                    return toReturn;
                }
                Repository.Errors.throw(Repository.Errors.ItemNotFound);
            };
            InMemoryRepository.prototype.saveImplementation = function (item) {
                var key = item.getKey().toString();
                this.storage[key] = item.getState();
            };
            InMemoryRepository.prototype.deleteImplementation = function (id) {
                var key = id.toString();
                this.storage[key] = undefined;
            };
            return InMemoryRepository;
        }(Repository.BaseRepository));
        Repository.InMemoryRepository = InMemoryRepository;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseRepositoryAsync = Repository.BaseRepositoryAsync;
        var Serializer = DDDTools.Serialization.Serializer;
        var Deserializer = DDDTools.Serialization.Deserializer;
        var InMemoryRepositoryAsync = (function (_super) {
            __extends(InMemoryRepositoryAsync, _super);
            function InMemoryRepositoryAsync(managedType) {
                _super.call(this, managedType);
                this.storage = {};
            }
            InMemoryRepositoryAsync.prototype.getByIdSync = function (id) {
                if (!id) {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.InvalidKey, "id cannot be null nor undefined");
                    throw (reason);
                }
                if (!this.storage[id.toString()]) {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.ItemNotFound);
                    throw (reason);
                }
                var toReturn = Deserializer.deserialize(this.storage[id.toString()]);
                return toReturn;
            };
            InMemoryRepositoryAsync.prototype.getByIdImplementation = function (id) {
                var _this = this;
                return Q.Promise(function (resolve, reject, notify) {
                    try {
                        var result = _this.getByIdSync(id);
                        resolve(result);
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            };
            InMemoryRepositoryAsync.prototype.saveSync = function (item) {
                if (!item.getKey()) {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.KeyNotSet);
                    throw (reason);
                }
                try {
                    this.storage[item.getKey().toString()] = Serializer.serialize(item);
                }
                catch (e) {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.ErrorSavingItem, JSON.stringify(e));
                    throw (reason);
                }
                return {};
            };
            InMemoryRepositoryAsync.prototype.saveImplementation = function (item) {
                var _this = this;
                return Q.Promise(function (resolve, reject, notify) {
                    try {
                        _this.saveSync(item);
                        resolve({});
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            };
            InMemoryRepositoryAsync.prototype.deleteSync = function (id) {
                if (this.storage[id.toString()]) {
                    delete this.storage[id.toString()];
                }
                else {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.ItemNotFound);
                    throw (reason);
                }
                return;
            };
            InMemoryRepositoryAsync.prototype.deleteImplementation = function (id) {
                var _this = this;
                return Q.Promise(function (resolve, reject, notify) {
                    try {
                        _this.deleteSync(id);
                        resolve({});
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            };
            return InMemoryRepositoryAsync;
        }(BaseRepositoryAsync));
        Repository.InMemoryRepositoryAsync = InMemoryRepositoryAsync;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork) {
        var BaseErrors = DDDTools.ErrorManagement.BaseErrors;
        var UnitOfWorkErrors = (function (_super) {
            __extends(UnitOfWorkErrors, _super);
            function UnitOfWorkErrors() {
                _super.apply(this, arguments);
            }
            UnitOfWorkErrors.ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
            return UnitOfWorkErrors;
        }(BaseErrors));
        UnitOfWork.UnitOfWorkErrors = UnitOfWorkErrors;
    })(UnitOfWork = DDDTools.UnitOfWork || (DDDTools.UnitOfWork = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork) {
        var Events = (function () {
            function Events() {
            }
            Events.__nameSpace = "DDDTools.UnitOfWork";
            Events.ObjectSavedEvent = Events.__nameSpace + ".ObjectSavedEvent";
            Events.ObjectDeletedEvent = Events.__nameSpace + ".ObjectDeletedEvent";
            Events.ObjectRetrievedEvent = Events.__nameSpace + ".ObjectRetrievedEvent";
            return Events;
        }());
        UnitOfWork.Events = Events;
    })(UnitOfWork = DDDTools.UnitOfWork || (DDDTools.UnitOfWork = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ObjectDeletedEvent = (function (_super) {
            __extends(ObjectDeletedEvent, _super);
            function ObjectDeletedEvent(typeName, typeVersion, id) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.__typeName = UnitOfWork.Events.ObjectDeletedEvent;
                this.__typeVersion = "v1";
            }
            return ObjectDeletedEvent;
        }(BaseValueObject));
        UnitOfWork.ObjectDeletedEvent = ObjectDeletedEvent;
    })(UnitOfWork = DDDTools.UnitOfWork || (DDDTools.UnitOfWork = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ObjectRetrievedEvent = (function (_super) {
            __extends(ObjectRetrievedEvent, _super);
            function ObjectRetrievedEvent(typeName, typeVersion, id) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.__typeName = UnitOfWork.Events.ObjectRetrievedEvent;
                this.__typeVersion = "v1";
            }
            return ObjectRetrievedEvent;
        }(BaseValueObject));
        UnitOfWork.ObjectRetrievedEvent = ObjectRetrievedEvent;
    })(UnitOfWork = DDDTools.UnitOfWork || (DDDTools.UnitOfWork = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ObjectSavedEvent = (function (_super) {
            __extends(ObjectSavedEvent, _super);
            function ObjectSavedEvent(typeName, typeVersion, id) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.__typeName = UnitOfWork.Events.ObjectSavedEvent;
                this.__typeVersion = "v1";
            }
            return ObjectSavedEvent;
        }(BaseValueObject));
        UnitOfWork.ObjectSavedEvent = ObjectSavedEvent;
    })(UnitOfWork = DDDTools.UnitOfWork || (DDDTools.UnitOfWork = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork) {
        (function (ItemStatus) {
            ItemStatus[ItemStatus["New"] = 0] = "New";
            ItemStatus[ItemStatus["Modified"] = 1] = "Modified";
            ItemStatus[ItemStatus["Saved"] = 2] = "Saved";
            ItemStatus[ItemStatus["Deleted"] = 3] = "Deleted";
        })(UnitOfWork.ItemStatus || (UnitOfWork.ItemStatus = {}));
        var ItemStatus = UnitOfWork.ItemStatus;
        var TrackedItem = (function () {
            function TrackedItem(status, item, key) {
                this.status = status;
                this.item = item;
                this.key = key;
                this.asLoaded = item.getState();
            }
            TrackedItem.prototype.markAsNew = function () {
                this.status = ItemStatus.New;
                this.asLoaded = this.item.getState();
            };
            TrackedItem.prototype.markAsSaved = function () {
                this.status = ItemStatus.Saved;
                this.asLoaded = this.item.getState();
            };
            TrackedItem.prototype.markAsModified = function () {
                this.status = ItemStatus.Modified;
            };
            TrackedItem.prototype.markAsDeleted = function () {
                this.status = ItemStatus.Deleted;
            };
            TrackedItem.prototype.getStatus = function () {
                return this.status;
            };
            TrackedItem.prototype.getItem = function () {
                return this.item;
            };
            TrackedItem.prototype.getKey = function () {
                return this.key;
            };
            TrackedItem.prototype.hasChanged = function () {
                var currentState = this.item.getState();
                var currentStateAsString = JSON.stringify(currentState);
                var asLoadedAsString = JSON.stringify(this.asLoaded);
                return currentStateAsString !== asLoadedAsString;
            };
            TrackedItem.prototype.updateSavedItemStatus = function () {
                if (this.status === ItemStatus.Saved) {
                    if (this.hasChanged()) {
                        this.markAsModified();
                    }
                }
            };
            return TrackedItem;
        }());
        var IdentityMap = (function () {
            function IdentityMap() {
                this.idToObjectMap = {};
            }
            IdentityMap.prototype.isTracked = function (key) {
                var idAsString = key.toString();
                if (this.idToObjectMap[idAsString]) {
                    return true;
                }
                return false;
            };
            IdentityMap.prototype.getById = function (key) {
                var idAsString = key.toString();
                if (this.isTracked(key)) {
                    return this.idToObjectMap[idAsString].getItem();
                }
                return null;
            };
            IdentityMap.prototype.add = function (key, item) {
                var idAsString = key.toString();
                var newItem = new TrackedItem(ItemStatus.New, item, key);
                this.idToObjectMap[idAsString] = newItem;
            };
            IdentityMap.prototype.remove = function (key) {
                if (this.isTracked(key)) {
                    delete this.idToObjectMap[key.toString()];
                }
            };
            IdentityMap.prototype.getIds = function () {
                var toReturn = [];
                for (var element in this.idToObjectMap) {
                    toReturn.push(this.idToObjectMap[element].getKey());
                }
                return toReturn;
            };
            IdentityMap.prototype.markAsDeletedById = function (key) {
                var trackedItem = this.getTrackedItem(key);
                trackedItem.markAsDeleted();
            };
            IdentityMap.prototype.markAsSavedById = function (key) {
                var trackedItem = this.getTrackedItem(key);
                trackedItem.markAsSaved();
            };
            IdentityMap.prototype.markAsModifiedById = function (key) {
                var trackedItem = this.getTrackedItem(key);
                trackedItem.markAsModified();
            };
            IdentityMap.prototype.getItemStatus = function (key) {
                if (this.isTracked(key)) {
                    var trackedItem = this.getTrackedItem(key);
                    return trackedItem.getStatus();
                }
                return null;
            };
            IdentityMap.prototype.updateSavedItemStatus = function (key) {
                var item = this.getTrackedItem(key);
                item.updateSavedItemStatus();
            };
            IdentityMap.prototype.getTrackedItem = function (key) {
                var toReturn = this.idToObjectMap[key.toString()];
                if (!toReturn) {
                    return null;
                }
                return toReturn;
            };
            return IdentityMap;
        }());
        UnitOfWork.IdentityMap = IdentityMap;
    })(UnitOfWork = DDDTools.UnitOfWork || (DDDTools.UnitOfWork = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork_1) {
        var InProcessDispatcher = DDDTools.DomainEvents.InProcessDispatcher;
        var UnitOfWork = (function () {
            function UnitOfWork(repository) {
                this.repository = repository;
                this.idMap = new UnitOfWork_1.IdentityMap();
                this.dispatcher = new InProcessDispatcher();
            }
            UnitOfWork.prototype.getById = function (key) {
                if (this.idMap.isTracked(key)) {
                    if (this.idMap.getItemStatus(key) === UnitOfWork_1.ItemStatus.Deleted) {
                        UnitOfWork_1.UnitOfWorkErrors.throw(UnitOfWork_1.UnitOfWorkErrors.ItemMarkedAsDeleted);
                    }
                    return this.idMap.getById(key);
                }
                var toReturn = this.repository.getById(key);
                this.idMap.add(key, toReturn);
                this.idMap.markAsSavedById(key);
                var retrievedEvent = new UnitOfWork_1.ObjectRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString());
                this.raiseEvent(retrievedEvent);
                return toReturn;
            };
            UnitOfWork.prototype.deleteById = function (key) {
                this.idMap.markAsDeletedById(key);
            };
            UnitOfWork.prototype.saveAll = function () {
                var keys = this.idMap.getIds();
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    this.idMap.updateSavedItemStatus(key);
                    var status = this.idMap.getItemStatus(key);
                    switch (status) {
                        case UnitOfWork_1.ItemStatus.Deleted:
                            this.processDeletedItem(key);
                            break;
                        case UnitOfWork_1.ItemStatus.Modified:
                        case UnitOfWork_1.ItemStatus.New:
                            this.processNewOrModifiedItem(key);
                            break;
                        case UnitOfWork_1.ItemStatus.Saved:
                            break;
                    }
                }
            };
            UnitOfWork.prototype.registerHandler = function (eventTypeName, eventHandler) {
                this.dispatcher.registerHandler(eventTypeName, eventHandler);
            };
            UnitOfWork.prototype.unregisterHandler = function (eventTypeName, eventHandler) {
                this.dispatcher.unregisterHandler(eventTypeName, eventHandler);
            };
            UnitOfWork.prototype.processDeletedItem = function (key) {
                var item = this.idMap.getById(key);
                var deletedEvent = new UnitOfWork_1.ObjectDeletedEvent(item.__typeName, item.__typeVersion, key.toString());
                this.repository.delete(key);
                this.removeById(key);
                this.raiseEvent(deletedEvent);
            };
            UnitOfWork.prototype.processNewOrModifiedItem = function (key) {
                var item = this.idMap.getById(key);
                this.repository.save(item);
                this.idMap.markAsSavedById(key);
                var savedEvent = new UnitOfWork_1.ObjectSavedEvent(item.__typeName, item.__typeVersion, key.toString());
                this.raiseEvent(savedEvent);
            };
            UnitOfWork.prototype.raiseEvent = function (event) {
                this.dispatcher.dispatch(event);
            };
            UnitOfWork.prototype.removeById = function (key) {
                if (this.idMap.isTracked(key)) {
                    this.idMap.remove(key);
                }
            };
            return UnitOfWork;
        }());
        UnitOfWork_1.UnitOfWork = UnitOfWork;
    })(UnitOfWork = DDDTools.UnitOfWork || (DDDTools.UnitOfWork = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9RdWVyeS9JUXVlcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVEYXRlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlUmVnRXhwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vVG91Y2gudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9HdWlkLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L1R5cGVSZWdpc3RyeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUVudGl0eS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9FdmVudHMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtQWRkZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1EZWxldGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtUmV0cmlldmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtVXBkYXRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9CYXNlUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9JVW5pdE9mV29yay50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtFcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9FdmVudHMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9JZGVudGl0eU1hcC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxJQUFVLFFBQVEsQ0FjakI7QUFkRCxXQUFVLFFBQVE7SUFBQyxJQUFBLGVBQWUsQ0FjakM7SUFka0IsV0FB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RU8sK0JBQVUsR0FBbEIsVUFBbUIsS0FBbUI7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFLTywrQkFBVSxHQUFsQixVQUFtQixHQUFTO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixDQUFDO1lBQ0wsQ0FBQztZQUNMLGlCQUFDO1FBQUQsQ0FBQyxBQXRHRCxJQXNHQztRQXRHWSx1QkFBVSxhQXNHdEIsQ0FBQTtJQUNMLENBQUMsRUFuSGtCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBbUg1QjtBQUFELENBQUMsRUFuSFMsUUFBUSxLQUFSLFFBQVEsUUFtSGpCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIE1pbmltYWwgRXJyb3IgaGFuZGxpbmcgYmFzZSBiZWhhdmlvcnMgZm9yIHRoZSBkb21haW4gbW9kZWwuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuRXJyb3JNYW5hZ2VtZW50IHtcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIHRocm93KG5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gQmFzZUVycm9ycy5nZXRFcnJvckluc3RhbmNlKG5hbWUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0RXJyb3JJbnN0YW5jZShuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBFcnJvciB7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSB8fCBuYW1lKTtcclxuICAgICAgICAgICAgZXJyLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5RdWVyeSB7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgYSBxdWVyeSB0byBiZSBleGVjdXRlZCBhZ2FpbnN0IGEgRGF0YXN0b3JlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5PFQ+IHtcclxuICAgICAgICBleGVjdXRlKCk6IFRbXTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUXVlcnkge1xyXG4gICAgXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBRLklQcm9taXNlO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgYSBxdWVyeSB0byBiZSBleGVjdXRlZCBhZ2FpbnN0IGEgRGF0YXN0b3JlIGluIGFuIGFzeW5jIGZhc2hpb25cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVlcnlBc3luYzxUPiB7XHJcbiAgICAgICAgZXhlY3V0ZSgpOiBJUHJvbWlzZTxUW10+O1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFNvbWUgc2ltcGxlIGNsYXNzZXMgdXNlZCBpbiBkaWZmZXJlbnQgbW9kdWxlcy5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5VdGlscyB7XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBTaW1wbGVHdWlkIHtcclxuXHRcdC8vIEhlbHBlciBmb3IgZ3VpZCBnZW5lcmF0aW9uLlxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNWYWxpZChndWlkOiBzdHJpbmcpIHtcclxuXHRcdFx0dmFyIGd1aWRSZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeW3soXT9bMC05QS1GYS1mXXs4fVstXT8oWzAtOUEtRmEtZl17NH1bLV0/KXszfVswLTlBLUZhLWZdezEyfVspfV0/JFwiKTtcclxuXHRcdFx0cmV0dXJuIGd1aWRSZWdleHAudGVzdChndWlkKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcml2YXRlIHN0YXRpYyBzNCgpIHtcclxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcblx0XHRcdFx0LnRvU3RyaW5nKDE2KVxyXG5cdFx0XHRcdC5zdWJzdHJpbmcoMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpOiBzdHJpbmcge1xyXG5cdFx0XHR2YXIgbmV3U2ltcGxlR3VpZCA9IFwie1wiICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICtcclxuXHRcdFx0XHRTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwifVwiO1xyXG5cclxuXHRcdFx0aWYgKFNpbXBsZUd1aWQuaXNWYWxpZChuZXdTaW1wbGVHdWlkKSkge1xyXG5cdFx0XHRcdHJldHVybiBuZXdTaW1wbGVHdWlkO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNob3VsZCBOZXZlciBIYXBwZW4hIFRoZSBnZW5lcmF0ZWQgZ3VpZCBpcyBub3QgdmFsaWQhXCIpXHJcblx0XHR9XHJcblx0fVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlV0aWxzIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2ltcGxlSWRlbnRpdHlNYXAge1xyXG5cclxuICAgICAgICBwcml2YXRlIGlkVG9PYmplY3RNYXA6IHsgW2lkOiBzdHJpbmddOiBhbnkgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNUcmFja2VkKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRUb09iamVjdE1hcFtpZF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgb2JqZWN0OiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXBbaWRdID0gb2JqZWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyBhbGwgdGhlIGlkcyBpbiB0aGUgbWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldElkcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRlbGV0ZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuQ29tbW9uSW50ZXJmYWNlcyB7XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJRXF1YXRhYmxlPFQ+IHtcclxuXHRcdGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbjtcclxuXHR9XHJcbn0iLCJcclxubmFtZXNwYWNlIERERFRvb2xzLkNvbW1vbkludGVyZmFjZXMge1xyXG4gICAgXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZztcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgX19vYmplY3RJbnN0YW5jZUlkPzogc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVEYXRlIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJTZXJpYWxpemFibGVEYXRlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgICAgIF9fZGF0ZUFzU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGU6IERhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2RhdGVBc1N0cmluZyA9IGRhdGUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0ZUZyb21TdHJpbmcoZGF0ZUFzU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVBc1N0cmluZyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXREYXRlKCk6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gU2VyaWFsaXphYmxlRGF0ZS5nZXREYXRlRnJvbVN0cmluZyh0aGlzLl9fZGF0ZUFzU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVSZWdFeHAgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlNlcmlhbGl6YWJsZVJlZ0V4cFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBfX3JlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgX19mbGFnczogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihyZWdFeHA6IFJlZ0V4cCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGl0UmVnRXhwQW5kRmxhZ3MoIHJlZ0V4cCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzcGxpdFJlZ0V4cEFuZEZsYWdzKCByZWdFeHA6IFJlZ0V4cCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciByZWFsbHlVbmxpa2VseVN0cmluZyA9IFwiwrDDssOgw7nCsMKww7LDoMO5wrDCsMOyw6DDucKwXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUbyBnZXQgYSBjb3JyZWN0IHJlZ2V4cCB3ZSBtdXN0IHRha2UgYXdheSB0aGUgbGVhZGluZyBcIi9cIiBhbmQgdGhlIGZsYWdzIVxyXG4gICAgICAgICAgICB2YXIgY29uZGl0aW9uZWRTdHJpbmcgPSByZWdFeHAudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2VzIHRoZSBlc2NhcGVkIHNsYXNoZXMgd2l0aCBzb21ldGhpbmcgdmVyeSBpbXByb2JhYmxlXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbmVkU3RyaW5nID0gY29uZGl0aW9uZWRTdHJpbmcucmVwbGFjZShcIlxcXFwvXCIsIHJlYWxseVVubGlrZWx5U3RyaW5nKTtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gY29uZGl0aW9uZWRTdHJpbmcuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gcGFydHNbMF0gbXVzdCBhbHdheXMgYmUgdGhlIGVtcHR5IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKHBhcnRzWzBdICE9PSBcIlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4hXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXN0b3JlIHdoYXQgXHJcbiAgICAgICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZShyZWFsbHlVbmxpa2VseVN0cmluZywgXCJcXFxcL1wiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiA9IHBhcnRzWzFdO1xyXG4gICAgICAgICAgICB0aGlzLl9fZmxhZ3MgPSBwYXJ0c1syXSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cgKFwic3BsaXRSZWdFeHA6IFwiICsgcmVnRXhwLnRvU3RyaW5nKCkgKyBcIiAuLi4gXCIgKyB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gKyBcIiAuLi4gXCIgKyB0aGlzLl9fZmxhZ3MgKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRSZWdFeHBGcm9tUmVnRXhwQW5kRmxhZ3MocmVndWxhckV4cHJlc3Npb246IHN0cmluZywgZmxhZ3M6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IFJlZ0V4cDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0UmVnRXhwOiBcIiArIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiArIFwiIC4uLiBcIiArIHRoaXMuX19mbGFncyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZmxhZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvbiwgZmxhZ3MpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IGJhY2sgYSBSZWd1bGFyIEV4cHJlc3Npb24gZnJvbSB0aGUgU2VyaWFsaXphYmxlUmVnRXhwIGluc3RhbmNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFJlZ0V4cCgpOiBSZWdFeHAge1xyXG4gICAgICAgICAgICByZXR1cm4gU2VyaWFsaXphYmxlUmVnRXhwLmdldFJlZ0V4cEZyb21SZWdFeHBBbmRGbGFncyh0aGlzLl9fcmVndWxhckV4cHJlc3Npb24sIHRoaXMuX19mbGFncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUd1aWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHRvdWNoSW5kZXggPSAxO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmVwYXJlcyB0aGUgaWQgZ2VuZXJhdG9yIGZvciBhIG5ldyBydW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlc2V0VG91Y2hJbmRleCgpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVG91Y2g7XHJcbiAgICAgICAgICAgIHNUaGlzLnRvdWNoSW5kZXggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TmV3SW5kZXgoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFNpbXBsZUd1aWQuZ2VuZXJhdGUoKVxyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICAgICAgc1RoaXMudG91Y2hJbmRleCsrO1xyXG4gICAgICAgICAgICByZXR1cm4gKHNUaGlzLnRvdWNoSW5kZXgrKyAtIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhZGRzIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSB0byBhbiBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHRvdWNoKG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFRvdWNoXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3SWQgPSBzVGhpcy5nZXROZXdJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCA9IG5ld0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZW1vdmVzIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkgZnJvbSBhbiBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVudG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgICAgIGlmIChjYXN0ZWQuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVEYXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlUmVnRXhwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVG91Y2gudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG4vLyBpbXBvcnQge1NpbXBsZUlkZW50aXR5TWFwfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXBcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbi8vIGltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyBKU09OIHN0cmluZyBzZXJpYWxpemF0aW9uLiBJdCBleHRlbmRzIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgSlNPTi5zdHJpbmdpZnkgdG8gYWxsb3cgc2VyaWFsaXphdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIG9mIGRhdGUgYW5kIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3RzLCBhbmQgb2JqZWN0IHJlZmVyZW5jZS5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcbiAgICBpbXBvcnQgU2ltcGxlSWRlbnRpdHlNYXAgPSBVdGlscy5TaW1wbGVJZGVudGl0eU1hcDtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRGVzZXJpYWxpemVyIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGlzIG5lZWRlZCB0byB0cmFjayBvYmplY3QgaW5zdGFuY2VzIHRvIGFjaGlldmUgY29ycmVjdCByZWNvbnN0cnVjdGlvbiBvZiB0aGUgb2JqZWN0IHRyZWUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaWRlbnRpdHlNYXA6IFNpbXBsZUlkZW50aXR5TWFwO1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzZXNpYWxpemVzIGFuIG9iamVjdCBmcm9tIGEgSlNPTiBzdHJpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZSh0b0Rlc2VyaWFsaXplOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgICAgICBEZXNlcmlhbGl6ZXIuaWRlbnRpdHlNYXAgPSBuZXcgU2ltcGxlSWRlbnRpdHlNYXAoKTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gSlNPTi5wYXJzZSh0b0Rlc2VyaWFsaXplLCBEZXNlcmlhbGl6ZXIuY3VzdG9tUmV2aXZlcik7XHJcbiAgICAgICAgICAgIERlc2VyaWFsaXplci5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFucyB0aGUgcmVjb25zaXR1dGVkIGluc3RhbmNlcyBmcm9tIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHksXHJcbiAgICAgICAgICogYW5kIGVtcHRpZXMgdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGNsZWFudXAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERlc2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcbiAgICAgICAgICAgIHZhciB1bnRvdWNoID0gVG91Y2gudW50b3VjaDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgaWRNYXAuZ2V0SWRzKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IGlkTWFwLmdldEJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB1bnRvdWNoKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGxlYXZlIHRoZSBpbnN0YW5jZXMgXCJnYXJiYWdlYWJsZVwiLi4uIGhvdyB0byB0ZXN0ID8gICAgXHJcbiAgICAgICAgICAgICAgICBpZE1hcC5kZWxldGVCeUlkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJdCBoYW5kbGVzIEZha2UqIGluc3RhbmNlcyB1c2VzIF9fb2JqZWN0SW5zdGFuY2VJZCB0byByZWJ1aWxkIGEgY29ycmVjdCBvYmplY3QgdHJlZS4gXHJcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBieSBKU09OLnBhcnNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tUmV2aXZlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEZXNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIHZhciBpZE1hcCA9IHNUaGlzLmlkZW50aXR5TWFwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNUaGlzLmhhc0JlZW5Ub3VjaGVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZE1hcC5pc1RyYWNrZWQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRNYXAuZ2V0QnlJZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlRGF0ZURlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTWFwLmFkZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY2hlY2tzIGZvciB0aGUgcHJlc2VuY2Ugb2YgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaGFzQmVlblRvdWNoZWQob2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGNhc3RlZC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgUmVnRXhwIERlc2VyaWFsaXphdGlvblxyXG4gICAgICAgICAqIFRPRE86IEZpbmQgYSB3YXkgdG8gbW92ZSB0aGlzIHJlc3BvbnNpYmlsaXR5IHRvIHRoZSBTZXJpYWxpemFibGVSZWdFeHBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiU2VyaWFsaXphYmxlUmVnRXhwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFNlcmlhbGl6YWJsZVJlZ0V4cC5nZXRSZWdFeHBGcm9tUmVnRXhwQW5kRmxhZ3ModmFsdWUuX19yZWd1bGFyRXhwcmVzc2lvbiwgdmFsdWUuX19mbGFncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFuYWdlcyBEYXRlIERlc2VyaWFsaXphdGlvblxyXG4gICAgICAgICAqIFRPRE86IEZpbmQgYSB3YXkgdG8gbW92ZSB0aGlzIHJlc3BvbnNpYmlsaXR5IHRvIHRoZSBTZXJpYWxpemFibGVSZWdFeHBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGYWtlRGF0ZURlc2VyaWFsaXplcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlNlcmlhbGl6YWJsZURhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gU2VyaWFsaXphYmxlRGF0ZS5nZXREYXRlRnJvbVN0cmluZyh2YWx1ZS5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZURhdGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVSZWdFeHAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Ub3VjaC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZURhdGV9IGZyb20gXCIuL1NlcmlhbGl6YWJsZURhdGVcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVSZWdFeHB9IGZyb20gXCIuL1NlcmlhbGl6YWJsZVJlZ0V4cFwiO1xyXG4vLyBpbXBvcnQge1RvdWNofSBmcm9tIFwiLi9Ub3VjaFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemVyIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXJpYWxpemVzIGFuIG9iamVjdCB0byBhIEpTT04gc3RyaW5nLCBrZWVwZWluZyB0cmFjayBvZiB0aGUgaW5zdGFuY2VzIG9mIHRoZSBvYmplY3RzIHNlcmlhbGl6ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICBUb3VjaC5yZXNldFRvdWNoSW5kZXgoKTtcclxuICAgICAgICAgICAgdG9TZXJpYWxpemUgPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gSlNPTi5zdHJpbmdpZnkodG9TZXJpYWxpemUsIFNlcmlhbGl6ZXIuY3VzdG9tU2VyaWFsaXplcik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgICAgIFNlcmlhbGl6ZXIudW50b3VjaFNvdXJjZU9iamVjdCh0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJlcHJvY2VzcyB0aGUgb2JqZWN0IHRyZWUgdG8gYmUgc2VyaWFsaXplZCB0byBmaW5kIGFuZCByZXBsYWNlIERhdGUgb2JqZWN0cyB3aXRoIHNvbWV0aGluZyBkaWZmZXJlbnQuLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VEYXRlID0gbmV3IFNlcmlhbGl6YWJsZURhdGUoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50IGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VSZWdFeHAgPSBuZXcgU2VyaWFsaXphYmxlUmVnRXhwKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gbmV3RmFrZVJlZ0V4cDtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShjdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gU2VyaWFsaXplci5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlT2JqZWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdW50b3VjaFNvdXJjZU9iamVjdChzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgICAgICBpZiAoVG91Y2guaGFzQmVlblRvdWNoZWQoc291cmNlT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgVG91Y2gudW50b3VjaChzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzVGhpcy51bnRvdWNoU291cmNlT2JqZWN0KGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gU2VyaWFsaXplci5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUG9zdHByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBTZXJpYWxpemFibGVEYXRlL1JlZ0V4cCBvYmplY3RzIHdpdGggT3JpZ2luYWwgdHlwZXMgYWdhaW4uLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSAoPFNlcmlhbGl6YWJsZURhdGU+Y3VycmVudCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlUmVnRXhwPmN1cnJlbnQpLmdldFJlZ0V4cCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJdCdzIGR1dHkgaXMgdG8gXCJ0b3VjaFwiIGV2ZXJ5IG9iamVjdCBwcm9jZXNzZSB0byBhZGQgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5LlxyXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5zdHJpbmdpZnlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21TZXJpYWxpemVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRvdWNoLmhhc0JlZW5Ub3VjaGVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvdWNoLnRvdWNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vKipcclxuICogRGVmaW5lcyBkZWZhdWx0IGJlaGF2aW9yIGFuZCBpbnRlcmZhY2VzIGZvciBhIFBlcnNpc3RhYmxlIE9iamVjdCwgYW4gb2JqZWN0IHRoYXQgaGFzIGEgc3RhdGUgdGhhdCB3aWxsIHByb2JhYmx5IGJlIHBlcnNpc3RlZC4gSXQgZ2l2ZXMgc3VwcG9ydCB0byBcInVwZ3JhZGVcIiBwZXJzaXN0ZWQgb2JqZWN0cy5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblx0XHJcblx0aW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSVBlcnNpc3RhYmxlIGV4dGVuZHMgSVR5cGVUcmFja2luZyB7XHJcblx0XHRnZXRVcGdyYWRlZEluc3RhbmNlPyhmcm9tSW5zdGFuY2U6IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZTtcclxuXHRcdGdldFN0YXRlKCk6IElUeXBlVHJhY2tpbmc7XHJcblx0XHRzZXRTdGF0ZShzdGF0ZTogSVR5cGVUcmFja2luZyk7XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuLy8gaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcbiAgICBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICAgICAgLy8gVGhyb3duIGJ5IHBlcnNpc3RhYmxlIG9iamVjdHNcclxuICAgICAgICBzdGF0aWMgU3RhdGVJc05vdEFuT2JqZWN0ID0gXCJTdGF0ZSBpcyBub3QgYW4gT2JqZWN0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVOYW1lTm90U2V0ID0gXCJUeXBlTmFtZSBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVWZXJzaW9uTm90U2V0ID0gXCJUeXBlVmVyc2lvbiBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFVuYWJsZVRvSW5zdGFudGlhdGVUeXBlID0gXCJVbmFibGUgdG8gSW5zdGFudGlhdGUgVHlwZVwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlUmVnaXN0cnlOb3RTZXQgPSBcIlR5cGVSZWdpc3RyeSBub3Qgc2V0XCI7XHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgRmFjdG9yeS9UeXBlUmVnaXN0cnlcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdFJlZ2lzdGVyZWQgPSBcIlR5cGUgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGUgVHlwZVJlZ2lzdHJ5XCI7XHJcbiAgICAgICAgc3RhdGljIENhbm5vdFJlZ2lzdGVyVW5kZWZpbmVkID0gXCJ0eXBlUHJvdG90eXBlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFwiXHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgVXBncmFkZXJcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdEluc3RhdGlhYmxlID0gXCJUeXBlIGlzIG5vdCBpbnN0YW50aWFibGVcIjtcclxuICAgICAgICBzdGF0aWMgVXBncmFkZVBhdGhOb3RGb3VuZCA9IFwiVXBncmFkZSBQYXRoIG5vdCBGb3VuZFwiO1xyXG4gICAgICAgIHN0YXRpYyBJbmNvcnJlY3RWZXJzaW9uRm9ybWF0ID0gXCJJbmNvcnJlY3QgVmVyc2lvbiBGb3JtYXRcIjtcclxuICAgICAgICBzdGF0aWMgV3JvbmdWZXJzaW9uSW5VcGdyYWRlZEluc3RhbmNlID0gXCJXcm9uZyBWZXJzaW9uIGluIFVwZ3JhZGVkIEluc3RhbmNlXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgVmFsdWVPYmplY3QgcGF0dGVybi5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJRXF1YXRhYmxlID0gQ29tbW9uSW50ZXJmYWNlcy5JRXF1YXRhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSUVxdWF0YWJsZTxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgSVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuSVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9UeXBlUmVnaXN0cnkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7VHlwZVJlZ2lzdHJ5fSBmcm9tIFwiLi9UeXBlUmVnaXN0cnlcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnkgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGNyZWF0ZSBhbmQgcmVjb25zdGl0dXRlIHN0YXRmZXVsIG9iamVjdHMuXHJcbiAgICAgKiBJdCBndXJhbnRlZXMgdGhhdCBhIHN0YXRmdWwgb2JqZWN0IGlzIGFsd2F5cyBjcmVhdGVkIG9yIHJlY29uc3RpdHV0ZWQgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uLiAgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdHlwZVJlZ2lzdHJ5OiBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdGVycyBhIG5ldyBJUGVyc2lzdGFibGUgdHlwZSB3aXRoIHRoZSBGYWN0b3J5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogbmV3ICgpID0+IElQZXJzaXN0YWJsZSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBGYWN0b3J5O1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnR5cGVSZWdpc3RyeSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMudHlwZVJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZSh0eXBlTmFtZSwgdHlwZVZlcnNpb24sIHR5cGVQcm90b3R5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuIElmIHR5cGVWZXJzaW9uIGlzIG5vdCBzdXBwbGllZCwgbGF0ZXN0IGF2YWlsYWJsZSB2ZXJzaW9uIGlzIHJldHVybmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlVHlwZUluc3RhbmNlPFQgZXh0ZW5kcyBJUGVyc2lzdGFibGU+KHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uPzogc3RyaW5nKTogVCB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZhY3RvcnkudHlwZVJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVSZWdpc3RyeU5vdFNldCwgXCJQbGVhc2UgcmVnaXN0ZXIgYXQgbGVhc3QgYSB0eXBlIHdpdGggdGhlIEZhY3RvcnkuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gVHlwZVJlZ2lzdHJ5LmdldFR5cGVJbnN0YW5jZTxUPih0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgdHlwZVRvSW5zdGF0aWF0ZSA9IEZhY3RvcnkuY29tcHV0ZUZ1bGx5UXVhbGlmaWVkVHlwZU5hbWUodHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZVRvSW5zdGF0aWF0ZSArIFwiKClcIik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIFRoaXMgZmFpbHVyZSBpcyBleHBlY3RlZCBpZiB3ZSBhcmUgYXNraW5nIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0b1JldHVybi5fX3R5cGVWZXJzaW9uICE9IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgIHRvUmV0dXJuID0gPFQ+ZXZhbChcIm5ldyBcIiArIHR5cGVOYW1lICsgXCIoKVwiKTtcclxuICAgICAgICAgICAgLy8gfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgaW5zdGFuY2UgZnJvbSBpdHMgc3RhdGUuIFdpbGwgYWx3YXlzIHJldHVybiB0aGUgbGF0ZXN0IHZlcnNpb24gcG9zc2libGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShzdGF0ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICd1bmRlZmluZWQnXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICdudWxsJ1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChGYWN0b3J5LmlzUGVyc2lzdGFibGVPYmplY3Qoc3RhdGUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJzaXN0YWJsZTogSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0YWJsZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHN0YXRlLl9fdHlwZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RhYmxlLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdhcnJhbnRpZXMgdGhhdCBhIHR5cGUgaXMgYWx3YXlzIHJldHVybmVkIGF0IGl0cyBsYXRlc3QgdmVyc2lvbi5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXBncmFkZWRQZXJzaXN0YWJsZSA9IFVwZ3JhZGVyLnVwZ3JhZGUocGVyc2lzdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGdyYWRlZFBlcnNpc3RhYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgaXMgbm90IGEgcGVyc2lzdGFibGVPYmplY3QgY2FuIGJlIGFuIEFycmF5IG9yIGFuIE9iamVjdCBhbmQgbXVzdCBiZSByZWNvbnN0aXR1dGVkXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IGFueSA9IEFycmF5LmlzQXJyYXkoc3RhdGUpID8gW10gOiB7fTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRFbGVtZW50IGluIHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNFbGVtZW50ID0gc3RhdGVbY3VycmVudEVsZW1lbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuW2N1cnJlbnRFbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gXCJQcmltaXRpdmVcIlwiIHR5cGVzIGFyZSByZXR1cm5lZCBhcyB0aGV5IGFyZVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3MgaWYgYW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFwiSVBlcnNpc3RhYmxlXCIgaW50ZXJmYWNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzUGVyc2lzdGFibGVPYmplY3Qob2JqZWN0VG9UZXN0OiBhbnkpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0VG9UZXN0ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGVyc2lzdGFibGUgPSA8SVBlcnNpc3RhYmxlPm9iamVjdFRvVGVzdDtcclxuICAgICAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVOYW1lIHx8IHBlcnNpc3RhYmxlLl9fdHlwZU5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uIHx8IHBlcnNpc3RhYmxlLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3MgaWYgYSB0eXBlIGNhbiBiZSBpbnN0YXRpYXRlZCAoYXQgaXRzIGxhdGVzdCB2ZXJzaW9uKS4gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNUeXBlSW5zdGFudGlhYmxlKHR5cGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciB0bXBUeXBlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBcIkZ1bGx5IFF1YWxpZmllZCBUeXBlTmFtZVwiIG9mIHR5cGUgXCJ0eXBlTmFtZVwiIGZvciB0aGUgc3VwcGxpZWQgXCJ2ZXJzaW9uXCIuXHJcbiAgICAgICAgICogRlFUTiBpcyBjb21wdXRlZCBmcm9tIHR5cGVOYW1lIGFkZGluZyB0aGUgdmVyc2lvbiBzdHJpbmcgaW4gdGhlIHJpZ2h0IHBsYWNlLlxyXG4gICAgICAgICAqIEV4YW1wbGVcclxuICAgICAgICAgKiB0eXBlTmFtZTogQXBwbGljYXRpb24uTW9kZWwuT2ZmZXJ0YVxyXG4gICAgICAgICAqIHZlcnNpb246IHYyXHJcbiAgICAgICAgICogcmV0dXJuOiBBcHBsaWNhdGlvbi5Nb2RlbC52Mi5PZmZlcnRhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBzdGF0aWMgY29tcHV0ZUZ1bGx5UXVhbGlmaWVkVHlwZU5hbWUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gICAgIHZhciBmcXRuUGFydHNBcnJheSA9IHR5cGVOYW1lLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAvLyAgICAgdmFyIGNsYXNzTmFtZSA9IGZxdG5QYXJ0c0FycmF5LnBvcCgpO1xyXG4gICAgICAgIC8vICAgICBmcXRuUGFydHNBcnJheS5wdXNoKHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAvLyAgICAgZnF0blBhcnRzQXJyYXkucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICAgIC8vICAgICB2YXIgbmV3RnF0biA9IGZxdG5QYXJ0c0FycmF5LmpvaW4oXCIuXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gbmV3RnF0bjtcclxuICAgICAgICAvLyB9O1xyXG5cclxuICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBVcGdyYWRlciBpcyBhbiBoZWxwZXIgY2xhc3MgdG8gYXV0b21hdGUgdGhlIFwidXBncmFkZSBwcm9jZXNzXCIgb2YgYW4gb2JqZWN0J3Mgc3RhdGUuXHJcbiAgICAgKiBUaGUgVXBncmFkZXIgaXMgZm91bmQgb24gdGhlc2UgcHJpbmNpcGxlczpcclxuICAgICAqICAqIFRoZSBsYXRlc3QgdmVyc2lvbiBGUVROIG11c3QgbWF0Y2ggdGhlIG9uZSBzcGVjaWZpZWQgYnkgdGhlIHByb3BlcnR5IF9fdHlwZU5hbWUsIHdoaWNoIGlzIGluIHRoZSBmb3JtIG5hbWVzcGFjZS5vYmplY3ROYW1lLlxyXG4gICAgICogICogT2xkZXIgdmVyc2lvbnMgb2YgYSBQZXJzaXN0YWJsZU9iamVjdCBNVVNUIGhhdmUgYSBGUVROIGluIHRoZSBmb3JtIG5hbWVzcGFjZS48dmVyc2lvbj4ub2JqZWN0TmFtZS5cclxuICAgICAqICAqIF9fdHlwZVZlcnNpb24gTVVTVCBiZSBzcGVjaWZpZWQgYXMgdjx2ZXJzaW9uTnVtYmVyPiB3aGVyZSB2ZXJzaW9uIGlzIGFuIGludGVnZXIuXHJcbiAgICAgKiAgKiBBbGwgb2JqZWN0J3MgdmVyc2lvbnMgKGV4Y2x1ZGluZyB2MSkgTVVTVCBwcm92aWRlIGFuIGdldFVwZ3JhZGVkSW5zdGFuY2UgbWV0aG9kIHRoYXQga25vd3MgaG93IHRvIG1vZGlmeSBzdGF0ZSB0byBnbyBmcm9tIFxyXG4gICAgICogICAgdmVyc2lvbiB2PG4gLSAxPiB0byB2PG4+LCB3aGVyZSBuIGlzIHRoZSB2ZXJzaW9uIG9mIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QuICAgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBVcGdyYWRlciB7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5zIHRoZSBsYXRlc3QgdmVyc2lvbiBwb3NzaWJsZSBmb3IgZWFjaCB0eXBlLiBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsYXRlc3RUeXBlVmVyc2lvbk1hcDogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgLy8gQ29udGFpbnMgZmxhZ3MgdG8gZGV0ZXJtaW5lIGlmIGxhdHN0VHlwZVZlcnNpb25NYXAgZm9yIGEgc3BlY2lmaWMgdHlwZSBoYXMgYmVlbiBjYWxjdWxhdGVkXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNWZXJzaW9uTWFwQnVpbHQ6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmIChVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcEluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgVXBncmFkZXIubGF0ZXN0VHlwZVZlcnNpb25NYXBbdHlwZU5hbWVdID0gdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24gZm9yIFwiICsgdHlwZU5hbWUgKyBcIiBpcyBcIiArIHRtcEluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RJbnN0YXRpYWJsZSwgXCJUaGUgdHlwZSBcIiArIHR5cGVOYW1lICsgXCIgY2Fubm90IGJlIGluc3RhbnRpYXRlZCwgc28gaXQgaXMgaW1wb3NzaWJsZSB0byBpZGVudGlmeSB0aGUgbGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAvLyBMb29rcyBmb3IgdGhlIGxhdGVzdCB2ZXJzaW9uLCBpZiBub3QgYWxyZWFkeSBkb25lLlxyXG4gICAgICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgVXBncmFkZXIuYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gc3VwcGxpZWQgZG9lc24ndCBtYXRjaCB0aGUgbGF0ZXN0IHZlcnNpb24gaW4gdGhlIG1hcCwgdGhlIGluc3RhbmNlIG11c3QgYmUgdXBncmFkZWQuXHJcbiAgICAgICAgICAgIGlmIChVcGdyYWRlci5sYXRlc3RUeXBlVmVyc2lvbk1hcFt0eXBlTmFtZV0gIT09IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVwZ3JhZGUoaW5zdGFuY2VGcm9tOiBJUGVyc2lzdGFibGUpOiBJUGVyc2lzdGFibGUge1xyXG4gICAgICAgICAgICAvLyBJZiBvYmplY3QgZG9lc24ndCBuZWVkIHRvIHVwZ3JhZGUsIHRoZW4gd2UgYXJlIGRvbmUhXHJcbiAgICAgICAgICAgIGlmICghVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZShpbnN0YW5jZUZyb20uX190eXBlTmFtZSwgaW5zdGFuY2VGcm9tLl9fdHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VGcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFVwZ3JhZGVyLmNvbXB1dGVOZXh0VmVyc2lvbihpbnN0YW5jZUZyb20uX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIHZhciB1cGdyYWRlckluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIG5leHRWZXJzaW9uKTtcclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gdXBncmFkZXJJbnN0YW5jZS5nZXRVcGdyYWRlZEluc3RhbmNlKGluc3RhbmNlRnJvbSk7XHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWVzIHRoYXQgdmVyc2lvbiBpcyBlZmZlY3RpdmVseSB1cGdyYWRlZFxyXG4gICAgICAgICAgICBpZiAodXBncmFkZWQuX190eXBlVmVyc2lvbiAhPSBuZXh0VmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5Xcm9uZ1ZlcnNpb25JblVwZ3JhZGVkSW5zdGFuY2UsIFwiVGhlIGV4cGVjdGVkIHZlcnNpb24gb2YgdGhlIHVwZ3JhZGVkIGluc3RhbmNlIHdhcyBcIiArIG5leHRWZXJzaW9uICsgXCIgd2hpbGUgd2FzIGZvdW5kIHRvIGJlIFwiICsgdXBncmFkZXJJbnN0YW5jZS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gVXBncmFkZXIudXBncmFkZSh1cGdyYWRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOZXh0VmVyc2lvbih0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXZlcnNpb25SZS50ZXN0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG4vLyBpbXBvcnQge0Rlc2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IERlc2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uRGVzZXJpYWxpemVyO1xyXG5cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUGVyc2lzdGFibGVPYmplY3QgaW1wbGVtZW50cyBJUGVyc2lzdGFibGUge1xyXG5cclxuICAgICAgICBwdWJsaWMgX190eXBlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBwdWJsaWMgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGdldFN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fdHlwZU5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5hbWVOb3RTZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fX3R5cGVWZXJzaW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVWZXJzaW9uTm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRvUmVjb25zdGl0dXRlID0gU2VyaWFsaXplci5zZXJpYWxpemUodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciByZWNvbnN0aXR1dGVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHRvUmVjb25zdGl0dXRlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZWNvbnN0aXR1dGVkO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRTdGF0ZTxUU3RhdGU+KHN0YXRlOiBUU3RhdGUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlN0YXRlSXNOb3RBbk9iamVjdCwgXCJzdGF0ZSBkZXZlIGVzc2VyZSB1biBvZ2dldHRvXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlRWxlbWVudCA9IHN0YXRlW2VsZW1lbnRdO1xyXG4gICAgICAgICAgICAgICAgdGhpc1tlbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShjdXJyZW50U3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCB0aGlzLmdldFN0YXRlKCkgKSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3Qge1xyXG5cclxuXHRpbXBvcnQgQmFzZVBlcnNpc3RhYmxlT2JqZWN0ID0gUGVyc2lzdGFibGVPYmplY3QuQmFzZVBlcnNpc3RhYmxlT2JqZWN0O1xyXG5cdGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG5cclxuXHRleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcblx0XHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdFx0aW1wbGVtZW50cyBJVmFsdWVPYmplY3Q8VD4ge1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0XHQvLyBQZXIgb2duaSBwcm9wcmlldMOgIGRlbGwnSVRFTSA6dmVyaWZpY28gbCd1Z3VhZ2xpYW56YSBjb24gbCdpc3RhbnphIGF0dHVhbGVcclxuXHRcdFx0dmFyIGZvcmVpZ24gPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShpdGVtKTtcclxuXHRcdFx0dmFyIGxvY2FsID0gU2VyaWFsaXplci5zZXJpYWxpemUodGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gZm9yZWlnbiA9PT0gbG9jYWw7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L1R5cGVSZWdpc3RyeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgZ2VuZXJhbCBhbmQgY29tbW9ubHkgdXNlZCBWYWx1ZU9iamVjdHMuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0cyB7XHJcblxyXG4gICAgaW1wb3J0IFNpbXBsZUd1aWQgPSBVdGlscy5TaW1wbGVHdWlkO1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBHdWlkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEd1aWQ+IGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PEd1aWQ+IHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWUgPSBcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCI7XHJcbiAgICAgICAgcHVibGljIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ3VpZDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihndWlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3VpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkID0gZ3VpZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkID0gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IEd1aWQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEd1aWQoU2ltcGxlR3VpZC5nZW5lcmF0ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFZhbHVlT2JqZWN0cyB1c2VkIGFzIGtleSBNVVNUIGltcGxlbWVudCBhIHRvU3RyaW5nIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGtleSBhcyBzdHJpbmcuXHJcbiAgICAgICAgcHVibGljIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ndWlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuXHJcbi8vIFJlZ2lzdGVycyB0aGUgR3VpZCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RyeTogeyBbdHlwZU5hbWU6IHN0cmluZ106IHsgW3R5cGVWZXJzaW9uOiBzdHJpbmddOiBuZXcgKCkgPT4gSVBlcnNpc3RhYmxlIH0gfSA9IHt9O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxhdGVzdFZlcnNpb25zOiB7IFt0eXBlTmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGNvbW1vblR5cGVzUmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nLCB0eXBlUHJvdG90eXBlOiBuZXcgKCkgPT4gSVBlcnNpc3RhYmxlKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgaWYgKCF0eXBlUHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkNhbm5vdFJlZ2lzdGVyVW5kZWZpbmVkLCBcInR5cGVQcm90b3R5cGUgc3VwcGxpZWQgZm9yIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIHR5cGVWZXJzaW9uICsgXCIgaXMgbnVsbCBvciB1bmRlZmluZWQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdID0gdGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gfHwge307XHJcbiAgICAgICAgICAgIHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl0gPSB0eXBlUHJvdG90eXBlO1xyXG5cclxuICAgICAgICAgICAgc1RoaXMudXBkYXRlTGF0ZXN0VmVyc2lvbnModHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXJzIHRoZSB0eXBlcyBpbiBWYWx1ZU9iamVjdHMgb24gZmlyc3QgdXNlLi4uIFxyXG4gICAgICAgICAgICAvLyBUT0RPIGZpbmQgYSB3YXkgdG8gZGVsZWdhdGUgdHlwZSByZWdpc3RyYXRpb24gdG8gdGhlIE9iamVjdHMgaW4gdGhlIGNvbGxlY3Rpb24sIFt2aWEgcHNldWRvIHJlZmxlY3Rpb24gP11cIlxyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLmNvbW1vblR5cGVzUmVnaXN0ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuY29tbW9uVHlwZXNSZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RlclR5cGUoIFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIiwgXCJ2MVwiLCBHdWlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlTGF0ZXN0VmVyc2lvbnModHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIGlmICghc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuaXNWZXJzaW9uR3JlYXRlcih0eXBlVmVyc2lvbiwgcmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzVmVyc2lvbkdyZWF0ZXIodlN1YmplY3Q6IHN0cmluZywgdlJlZmVyZW5jZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZTOiBudW1iZXIgPSBzVGhpcy5leHRyYWN0VmVyc2lvbk51bWJlcih2U3ViamVjdCk7XHJcbiAgICAgICAgICAgIHZhciB2UjogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlJlZmVyZW5jZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2UyA+IHZSO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdFZlcnNpb25OdW1iZXIodHlwZVZlcnNpb246IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZlcnNpb246IHN0cmluZyA9IHR5cGVWZXJzaW9uLnJlcGxhY2UoXCJ2XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB2YXIgYXNOdW1iZXIgPSBOdW1iZXIodmVyc2lvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhc051bWJlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0VHlwZUluc3RhbmNlPFQgZXh0ZW5kcyBJUGVyc2lzdGFibGU+KHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgaWYgKCF0eXBlVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdHlwZVZlcnNpb24gPSBzVGhpcy5nZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5vdFJlZ2lzdGVyZWQsIFwiVHlwZSBcIiArIHR5cGVOYW1lICsgXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIFR5cGVSZWdpc3RyeS5cIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV1bdHlwZVZlcnNpb25dKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIG9mIFR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0b0luc3RhbnRpYXRlID0gc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gPFQ+KG5ldyAoPGFueT50b0luc3RhbnRpYXRlKSgpKTtcclxuICAgICAgICAgICAgICAgIC8vdG9SZXR1cm4uX190eXBlTmFtZSA9IHR5cGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgLy90b1JldHVybi5fX3R5cGVWZXJzaW9uID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgaWYgc3BlY2lmaWVkIHZlcnNpb24gaXMgdGhlIGxhdGVzdCBmb3IgdHlwZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHJldHVybiBzVGhpcy5nZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZSkgPT09IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBubyB2ZXJzaW9uIHR5cGUgaXMgZGVmaW5lZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXZlcnNpb25SZS50ZXN0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjb21wdXRlTmV4dFZlcnNpb24odHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gVGhyb3cgdGhlIGNvcnJlY3QgZXhjZXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQsIFwiU3BlY2lmaWVkIHZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gTnVtYmVyKHR5cGVWZXJzaW9uLnN1YnN0cigxKSk7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgMTtcclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dFZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRG9tYWluRXZlbnQgZXh0ZW5kcyBJUGVyc2lzdGFibGUsIElUeXBlVHJhY2tpbmcge1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50SGFuZGxlciB7XHJcbiAgICAgICAgKGRvbWFpbkV2ZW50OiBJRG9tYWluRXZlbnQpOiB2b2lkO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTtcclxuICAgICAgICBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SURpc3BhdGNoZXJ9IGZyb20gXCIuL0lEaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIERvbWFpbkRpc3BhdGNoZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbjogSURpc3BhdGNoZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKGRpc3BhdGNoZXI6IElEaXNwYXRjaGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbiA9IGRpc3BhdGNoZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluUHJvY2Vzc0Rpc3BhdGNoZXIge1xyXG4gICAgICAgIHByaXZhdGUgZGVsZWdhdGVzUmVnaXN0cnk6IHsgW2V2ZW50VHlwZU5hbWU6IHN0cmluZ106IElFdmVudEhhbmRsZXJbXSB9ID0ge307XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWRkcyBhbiBoYW5kbGUgaWYgKGFuZCBvbmx5IGlmKSB0aGUgaGFuZGxlciBoYXMgbm90IGJlZW4gXCJzdGFtcGVkXCJcclxuICAgICAgICAgICAgaWYgKCEoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdLnB1c2goaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gQWN0IG9ubHkgaWQgaGFuZGxlciBoYXMgYmVlbiByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICBpZiAoKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV1bZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCg8YW55PmN1cnJlbnRFbGVtZW50KS5fX2hhbmRsZXJJZCA9PT0gKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXS5zcGxpY2UoTnVtYmVyKGVsZW1lbnQpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgRXJyb3JzOiBFcnJvcltdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgb2YgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBFcnJvcnMucHVzaChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoRXJyb3JzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuYnVpbGRFcnJvck1lc3NhZ2UoRXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZS5uYW1lID0gXCJEaXNwYXRjaGVyIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZEVycm9yTWVzc2FnZShFcnJvcnM6IEVycm9yW10pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiBFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gZWxlbWVudC5uYW1lICsgXCI6XCIgKyBlbGVtZW50Lm1lc3NhZ2UgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUVxdWF0YWJsZX0gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcblx0aW1wb3J0IElFcXVhdGFibGUgPSBDb21tb25JbnRlcmZhY2VzLklFcXVhdGFibGU7XHJcblx0aW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJRW50aXR5PFQsIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IGV4dGVuZHMgSUVxdWF0YWJsZTxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHRcdGdldEtleSgpOiBUS2V5O1xyXG5cdFx0c2V0S2V5KGtleTogVEtleSk6IHZvaWQ7XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VLZXlWYWx1ZU9iamVjdDxUPlxyXG4gICAgICAgIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJS2V5VmFsdWVPYmplY3Q8VD4sIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVyaXZlZCBjbGFzc2VzIG11c3QgcmVpbXBsZW1lbnQgdGhpcyBtZXRob2QuIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRW50aXR5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuL0lFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzc2VzIGFuZCBpbnRlcmZhY2VzIHRvIGltcGxlbWVudCBhbiBFbnRpdHksIGEgcGVyc2lzdGFibGUgb2JqZWN0LiBcclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuXHRpbXBvcnQgQmFzZVBlcnNpc3RhYmxlT2JqZWN0ID0gUGVyc2lzdGFibGVPYmplY3QuQmFzZVBlcnNpc3RhYmxlT2JqZWN0O1xyXG5cdGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG5cdGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcblxyXG5cdGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRW50aXR5PFQgZXh0ZW5kcyBJRW50aXR5PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG5cdFx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRcdGltcGxlbWVudHMgSUVudGl0eTxULCBUS2V5PiB7XHJcblxyXG5cdFx0cHJpdmF0ZSBrZXk6IFRLZXk7XHJcblxyXG5cdFx0cHJpdmF0ZSByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuXHRcdFx0RG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBnZXRLZXkoKTogVEtleSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmtleTtcclxuXHRcdH07XHJcblxyXG5cdFx0cHVibGljIHNldEtleShrZXk6IFRLZXkpOiB2b2lkIHtcclxuXHRcdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0XHRpZiAoIWl0ZW0pIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGl0ZW0uZ2V0S2V5KCkuZXF1YWxzKHRoaXMuZ2V0S2V5KCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JRW50aXR5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkFnZ3JlZ2F0ZSB7XHJcblxyXG4gICAgICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgICAgIGltcG9ydCBJRW50aXR5ID0gRW50aXR5LklFbnRpdHk7XHJcblxyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFnZ3JlZ2F0ZVJvb3Q8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kcyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRSZXZpc2lvbklkKCk6IG51bWJlclxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50UmV2aXNpb25JZCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgICAgIHBlcmZlY3RseU1hdGNoKGFub3RoZXI6IElBZ2dyZWdhdGVSb290PFQsIFRLZXk+KTogYm9vbGVhbjtcclxuICAgICAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JRW50aXR5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgdGhlIEFnZ3JlZ2F0ZSBQYXR0ZXJuIGJ5IGRlZmluaW5nIGludGVyZmFjZXMgYW5kIGJhc2UgYmVoYXZpb3IgZm9yIGFuIEFnZ3JlZ2F0ZVJvb3QuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgSUVudGl0eSA9IEVudGl0eS5JRW50aXR5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBiZWhhdmlvciBvZiBhbiBBZ2dyZWdhdGVSb290LCB3aGljaCBpcyBiYXNpY2FsbHkgYW4gZW50aXR5Li4uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWdncmVnYXRlUm9vdDxcclxuICAgICAgICBUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID5cclxuICAgICAgICBleHRlbmRzIEJhc2VFbnRpdHk8VCwgVEtleT5cclxuICAgICAgICBpbXBsZW1lbnRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBJRW50aXR5PFQsIFRLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfX3JldmlzaW9uSWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRSZXZpc2lvbklkKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fcmV2aXNpb25JZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnRSZXZpc2lvbklkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV2aXNpb25JZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGFyZXMgYW4gYWdncmVnYXRlIHdpdGggYW5vdGhlci4gUmV0dXJucyB0cnVlIGlmIGFnZ3JlZ2F0ZSdzIGRhdGEgYXJlIGV4YWN0bHkgZXF1YWwuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBlcmZlY3RseU1hdGNoKG90aGVyOiBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvdGhlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc09uZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgdmFyIHRoZU90aGVyID0gb3RoZXIuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvIHRoZSBjb21wYXJpc29uIGp1c3QgbGlrZSB2YWx1ZSBvYmplY3RzLi4uIG5haXZlIGJ1dCBmdW5jdGlvbmFsIGF0IHRoaXMgdGltZS5cclxuICAgICAgICAgICAgdmFyIHRoaXNPbmVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXNPbmUpO1xyXG4gICAgICAgICAgICB2YXIgdGhlT3RoZXJBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoZU90aGVyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzT25lQXNTdHJpbmcgPT09IHRoZU90aGVyQXNTdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeTxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogVDtcclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQ7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgUmVwb3NpdG9yeSB0byBwZXJzaXN0IEFnZ3JlZ2F0ZXMuIENvbnRhaW5zIGEgcmVmZXJlbmNlIGluIG1lbW9yeSByZXBvc2l0b3J5LlxyXG4gKi9cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFEuSVByb21pc2U7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPjtcclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT47XHJcbiAgICAgICAgZGVsZXRlKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcbiBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEtleU5vdFNldCA9IFwiS2V5IG5vdCBzZXRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1Ob3RGb3VuZCA9IFwiSXRlbSBOb3QgRm91bmRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yU2F2aW5nSXRlbSA9IFwiRXJyb3IgU2F2aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yUmVhZGluZ0l0ZW0gPSBcIkVycm9yIFJlYWRpbmcgSXRlbVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JEZWxldGluZ0l0ZW0gPSBcIkVycm9yIERlbGV0aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFdyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiA9IFwiV3JvbmcgdHlwZSBmcm9tIEltcGxlbWVudGF0aW9uXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBNYW5hZ2VkVHlwZU5vdFN1cHBsaWVkID0gXCJSZXBvc2l0b3J5IG5lZWRzIHRvIGtub3cgd2hhdCB0eXBlIGl0IGNhbiBtYW5hZ2VcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEludmFsaWRLZXkgPSBcIkludmFsaWQgS2V5XCI7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RhdGljIGNvbnRhaW5lciBvZiBldmVudCBcIl9fdHlwZU5hbWVcInNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlJlcG9zaXRvcnlcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1BZGRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbUFkZGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1VcGRhdGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtRGVsZXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVJldHJpZXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbUFkZGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbUFkZGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1BZGRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgb2JqZWN0U3RhdGU6IElUeXBlVHJhY2tpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbURlbGV0ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtRGVsZXRlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtRGVsZXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgb2JqZWN0U3RhdGU6IElUeXBlVHJhY2tpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtUmV0cmlldmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbVJldHJpZXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtUmV0cmlldmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtVXBkYXRlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEl0ZW1VcGRhdGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1VcGRhdGVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtUmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtQWRkZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1VcGRhdGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtRGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuL0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vLyBpbXBvcnQge0l0ZW1SZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbUFkZGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1BZGRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbVVwZGF0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0l0ZW1EZWxldGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1EZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBQZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYXB0dXJlcyBjb21tb24gYmVoYXZpb3Igb2YgcmVwb3NpdG9yeSwgdXNpbmcgdGhlVGVtcGxhdGUgTWV0aG9kIFBhdHRlcm4uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVwb3NpdG9yeTxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRUeXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLk1hbmFnZWRUeXBlTm90U3VwcGxpZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRvIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYW4gXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgdGhyb3cgXCJJdGVtTm90Rm91bmRcIiBpZiBubyBlbGVtZW50IG1hdGNoaW5nIHRoZSBpZCB3YXMgZm91bmQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXRyaWV2ZWQgPSB0aGlzLmdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkLl9fdHlwZU5hbWUgIT09IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmUgXCIgKyByZXRyaWV2ZWQuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHJldHJpZXZlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1SZXRyaWV2ZWRFdmVudCh0b1JldHVybi5fX3R5cGVOYW1lLCB0b1JldHVybi5fX3R5cGVWZXJzaW9uLCB0b1JldHVybi5nZXRLZXkoKS50b1N0cmluZygpLCByZXRyaWV2ZWQpO1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcInNhdmVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uIFRoZSB0ZW1wbGF0ZSBtZXRob2QgXCJzYXZlXCIgd2lsbCBtYW5hZ2UgdGhlIHJldmlzaW9uSWQgbG9naWMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogdm9pZDtcclxuXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudDogSXRlbVVwZGF0ZWRFdmVudCB8IEl0ZW1BZGRlZEV2ZW50O1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkIGlmIHRoZSBkbyBub3QgZXhpc3RzIGluIHRoZSBSZXBvLlxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLnBlcmZlY3RseU1hdGNoKGFzSXRXYXMpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmluY3JlbWVudFJldmlzaW9uSWQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZmluYWxseSBzYXZlcyBhZ2dyZWdhdGUgaW50byB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgdGhpcy5zYXZlSW1wbGVtZW50YXRpb24oaXRlbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGlkKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaXRlbSBub3QgZm91bmQsIHNvIG5vdGhpbmcgdG8gZGVsZXRlIVxyXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGFzSXRXYXMuX190eXBlTmFtZSwgYXNJdFdhcy5fX3R5cGVWZXJzaW9uLCBpZC50b1N0cmluZygpLCBhc0l0V2FzLmdldFN0YXRlKCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVJbXBsZW1lbnRhdGlvbihpZCk7XHJcblxyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVJlcG9zaXRvcnlBc3luYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbVJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbUFkZGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtVXBkYXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbURlbGV0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcblxyXG5cclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeUFzeW5jfSBmcm9tIFwiLi9JUmVwb3NpdG9yeUFzeW5jXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vLyBpbXBvcnQge0l0ZW1SZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbUFkZGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1BZGRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbVVwZGF0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0l0ZW1EZWxldGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1EZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBRLklQcm9taXNlO1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRUeXBlID09PSBcIlwiIHx8IG1hbmFnZWRUeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGEgXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz47XHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFEuZGVmZXI8VD4oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZSggRXJyb3JzLktleU5vdFNldCwgXCJpZCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIiApKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZCkudGhlbihcclxuICAgICAgICAgICAgICAgICh2YWx1ZTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lICE9IHRoaXMubWFuYWdlZFR5cGUgJiYgISh0aGlzLm1hbmFnZWRUeXBlID09IHVuZGVmaW5lZCkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZWQgXCIgKyB2YWx1ZS5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1JldHVybjogVCA9IDxUPihGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1SZXRyaWV2ZWRFdmVudCh0b1JldHVybi5fX3R5cGVOYW1lLCB0b1JldHVybi5fX3R5cGVWZXJzaW9uLCB0b1JldHVybi5nZXRLZXkoKS50b1N0cmluZygpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodG9SZXR1cm4pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIHByaXZhdGUgZG9TYXZlKGl0ZW06IFQsIGRlZmVycmVkOiBRLkRlZmVycmVkPHt9Pik6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgc2F2ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JTYXZpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBRLmRlZmVyPHt9PigpO1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1VcGRhdGVkRXZlbnQgfCBJdGVtQWRkZWRFdmVudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghaXRlbS5nZXRLZXkoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKCBFcnJvcnMuS2V5Tm90U2V0ICk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWQoaXRlbS5nZXRLZXkoKSkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZWFkVmFsdWU6IFQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0IHNvIHdlIGhhdmUgdG8gY29tcGFyZSBpdCB3aXRoIHdoYXQgd2UgYXJlIHNhdmluZy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2gocmVhZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY3JlbWVudFJldmlzaW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IG5ldyBJdGVtVXBkYXRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCksIGl0ZW0uZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoYXQgaXMgaW4gdGhlIGRhdGFiYXNlIHBlcmZlY3RseSBtYXRjaCB3aGF0IHdlIGFyZSBzYXZpbmcsIHNvIG5vdGhpbmcgdG8gZG8hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlY3RlZCwgdGhlIGl0ZW0gaXMgbm90IGluIHRoZSByZXBvLCBzbyB3ZSBoYXZlIHRvIGFkZCBpdCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU2F2ZShpdGVtLCBkZWZlcnJlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IG5ldyBJdGVtQWRkZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwgaXRlbS5nZXRLZXkoKS50b1N0cmluZygpLCBpdGVtLmdldFN0YXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3JzIG11c3QgYmUgdHJlYXRlZCBhcyAuLi4gXCJFcnJvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclJlYWRpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICAgICAgZGVsZXRlKGlkOiBUS2V5KTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcjx7fT4oKTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtRGVsZXRlZEV2ZW50O1xyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWQoaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBpZC50b1N0cmluZygpLCBpdGVtLmdldFN0YXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYnVpbGQgYW4gZXJyb3IgZnJvbSBhIHJldHVybiB2YWx1ZSBvZiB0aGUgQXN5bmMgSW1wbGVtZW50YXRpb25zLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgYnVpbGRFcnJvcihlcnJvckZyb21DYWxsOiBhbnksIGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvcjogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgICAgICB2YXIgcmVhc29uOiBFcnJvcjtcclxuICAgICAgICAgICAgaWYgKGVycm9yRnJvbUNhbGwgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID0gZXJyb3JGcm9tQ2FsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvciwgSlNPTi5zdHJpbmdpZnkoZXJyb3JGcm9tQ2FsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWFzb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VSZXBvc2l0b3J5fSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBGYWN0b3J5ID0gUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5NZW1vcnlSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IElQZXJzaXN0YWJsZSB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihtYW5hZ2VkVHlwZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihtYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpcy5zdG9yYWdlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUPnRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlBc3luYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBCYXNlUmVwb3NpdG9yeUFzeW5jID0gUmVwb3NpdG9yeS5CYXNlUmVwb3NpdG9yeUFzeW5jO1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFEuSVByb21pc2U7XHJcblxyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgRGVzZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIEJhc2VSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IHsgW2lkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihtYW5hZ2VkVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG1hbmFnZWRUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0QnlJZFN5bmMoaWQ6IFRLZXkpIHtcclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5JbnZhbGlkS2V5LCBcImlkIGNhbm5vdCBiZSBudWxsIG5vciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QsIG5vdGlmeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRCeUlkU3luYyhpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlU3luYyhpdGVtOiBUKToge30ge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZ2V0S2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VbaXRlbS5nZXRLZXkoKS50b1N0cmluZygpXSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkVycm9yU2F2aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0LCBub3RpZnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlU3luYyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHt9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZGVsZXRlU3luYyhpZDogVEtleSk6IHt9IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QsIG5vdGlmeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN5bmMoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBVbml0T2ZXb3JrLiBBIFVuaXRPZldvcmsga2VlcHMgdHJhY2sgb2YgY2hhbmdlcyBvbiB0aGUgQWdncmVnYXRlcyBsb2FkZWQgZnJvbSB0aGUgdW5kZXJseWluZyByZXBvc2l0b3J5IGFuZCBhbGxvd3MgdG8gc2F2ZSB0aGVtIGFsbCBpbiBhIHNpbmdsZSBjYWxsLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElFdmVudEhhbmRsZXIgPSBEb21haW5FdmVudHMuSUV2ZW50SGFuZGxlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElVbml0T2ZXb3JrPFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBSZXBvc2l0b3J5IG9yIGZyb20gdGhlIFVuaXRPZldvcmssIGdpdmVuIGl0cyBJZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCeUlkKGtleTogVEtleSk6IFQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcmtzIGFuIGl0ZW0gYXMgZGVsZXRlZCBmcm9tIHRoZSBVbml0T2ZXb3JrIChhbmQgZnJvbSB0aGUgUmVwb3NpdG9yeSB3aGVuIHRoZSBVb1cgd2lsbCBiZSBzYXZlZClcclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWxldGVCeUlkKGtleTogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2F2ZUFsbCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbGxvd3MgdG8gcmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgVW5pdE9mV29ya1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsbG93cyB0byB1bnJlZ2lzdGVyIGFuIGhhbmRsZXIgZm9yIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIFVuaXRPZldvcmtcclxuICAgICAgICAgKi9cclxuICAgICAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQ7XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VFcnJvcnMgPSBFcnJvck1hbmFnZW1lbnQuQmFzZUVycm9ycztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVW5pdE9mV29ya0Vycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbU1hcmtlZEFzRGVsZXRlZCA9IFwiVGhpcyBpdGVtIHdhcyBtYXJrZWQgYXMgZGVsZXRlZCBpbiB0aGlzIFVuaXRPZldvcmssIGFuZCBjYW5ub3QgYmUgcmV0cmlldmVkLlwiO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBzdGF0aWMgY29udGFpbmVyIG9mIGV2ZW50IFwiX190eXBlTmFtZVwic1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfX25hbWVTcGFjZSA9IFwiREREVG9vbHMuVW5pdE9mV29ya1wiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT2JqZWN0U2F2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdFNhdmVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdERlbGV0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT2JqZWN0UmV0cmlldmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0RGVsZXRlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdERlbGV0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0RGVsZXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBPYmplY3RSZXRyaWV2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3RSZXRyaWV2ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0UmV0cmlldmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBPYmplY3RTYXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdFNhdmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgTmV3LFxyXG4gICAgICAgIE1vZGlmaWVkLFxyXG4gICAgICAgIFNhdmVkLFxyXG4gICAgICAgIERlbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsIGNsYXNzIHRvIHN0b3JlIGl0ZW0gc3RhdHVzIGluZm9cclxuICAgICAqL1xyXG4gICAgY2xhc3MgVHJhY2tlZEl0ZW08XHJcbiAgICAgICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgICAgICA+IHtcclxuICAgICAgICAvLyBXaWxsIGNvbnRhaW4gYSBzZXJpYWxpemVkIHZlcnNpb24gb2YgdGhlIG9iamVjdCBhcyBpdCB3YXMgd2hlbiBpdCB3YXMgbG9hZGVkIGZyb20gdGhlIHJlcG9zaXRvcnkuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYXNMb2FkZWQ6IElQZXJzaXN0YWJsZSAvLyBXaWxsIGNvbnRhaW4gdGhlIHN0YXRlIG9mIHRoZSBvYmplY3Qgd2hlbiBmaXJzdCBhZGRlZCBvciB1cGRhdGVkXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHN0YXR1czogSXRlbVN0YXR1cyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBpdGVtOiBULFxyXG4gICAgICAgICAgICBwcml2YXRlIGtleTogVEtleVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmFzTG9hZGVkID0gaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc05ldygpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLk5ldztcclxuICAgICAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc1NhdmVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuU2F2ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYXNMb2FkZWQgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNNb2RpZmllZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLk1vZGlmaWVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5EZWxldGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldFN0YXR1cygpOiBJdGVtU3RhdHVzIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEl0ZW0oKTogVCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaGFzQ2hhbmdlZCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjdXJyZW50U3RhdGUpO1xyXG4gICAgICAgICAgICB2YXIgYXNMb2FkZWRBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuYXNMb2FkZWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZUFzU3RyaW5nICE9PSBhc0xvYWRlZEFzU3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGFuIGl0ZW0gaW4gXCJTYXZlZFwiIHN0YXR1cyBoYXMgYmVlbiBtb2RpZmllZCwgYW5kIGNoYW5nZXMgdGhlIHN0YXR1cyBhY2NvcmRpbmdseS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlU2F2ZWRJdGVtU3RhdHVzKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuU2F2ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya0FzTW9kaWZpZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIElkZW50aXR5TWFwXHJcbiAgICAgICAgPFxyXG4gICAgICAgIFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPlxyXG4gICAge1xyXG5cclxuICAgICAgICBwcml2YXRlIGlkVG9PYmplY3RNYXA6IHsgW2lkOiBzdHJpbmddOiBUcmFja2VkSXRlbTxULCBUS2V5PiB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXAgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiBrZXkgaXMgYWxyZWFkeSBzdG9yZWQgaW4gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzVHJhY2tlZChrZXk6IFRLZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRUb09iamVjdE1hcFtpZEFzU3RyaW5nXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEJ5SWQoa2V5OiBUS2V5KTogVCB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddLmdldEl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZHMgb3IgcmVwbGFjZXMgYW4gaXRlbSB0byB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFkZChrZXk6IFRLZXksIGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIG5ld0l0ZW0gPSBuZXcgVHJhY2tlZEl0ZW0oSXRlbVN0YXR1cy5OZXcsIGl0ZW0sIGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcFtpZEFzU3RyaW5nXSA9IG5ld0l0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wbGV0ZWx5IHJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZW1vdmUoa2V5OiBUS2V5KTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2tleS50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldElkcygpOiBUS2V5W10ge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IFRLZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuaWRUb09iamVjdE1hcCkge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aGlzLmlkVG9PYmplY3RNYXBbZWxlbWVudF0uZ2V0S2V5KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNEZWxldGVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNEZWxldGVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzU2F2ZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHRyYWNrZWRJdGVtLm1hcmtBc1NhdmVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHRyYWNrZWRJdGVtLm1hcmtBc01vZGlmaWVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0SXRlbVN0YXR1cyhrZXk6IFRLZXkpOiBJdGVtU3RhdHVzIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFja2VkSXRlbS5nZXRTdGF0dXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBjb3JyZWN0IHN0YXR1cyBmb3IgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzLCBhcyBpdCBtYXkgaGF2ZSBiZWVuIG1vZGlmaWVkIHNpbmNlIG5vdyAoaGVyZSB3ZSBkb24ndCBoYXZlIHByb3BlcnR5IHRyYWNraW5nKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlU2F2ZWRJdGVtU3RhdHVzKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgaXRlbS51cGRhdGVTYXZlZEl0ZW1TdGF0dXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0VHJhY2tlZEl0ZW0oa2V5OiBUS2V5KTogVHJhY2tlZEl0ZW08VCwgVEtleT4ge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLmlkVG9PYmplY3RNYXBba2V5LnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgICBpZiAoIXRvUmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JZGVudGl0eU1hcC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL09iamVjdERlbGV0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL09iamVjdFJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vT2JqZWN0U2F2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1VuaXRPZldvcmtFcnJvcnMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbi8vIGltcG9ydCB7SW5Qcm9jZXNzRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge0lkZW50aXR5TWFwLCBJdGVtU3RhdHVzfSBmcm9tIFwiLi9JZGVudGl0eU1hcFwiO1xyXG4vLyBpbXBvcnQge09iamVjdERlbGV0ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0UmV0cmlldmVkRXZlbnR9IGZyb20gXCIuL09iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0U2F2ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge1VuaXRPZldvcmtFcnJvcnN9IGZyb20gXCIuL1VuaXRPZldvcmtFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElSZXBvc2l0b3J5ID0gUmVwb3NpdG9yeS5JUmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IEluUHJvY2Vzc0Rpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuSW5Qcm9jZXNzRGlzcGF0Y2hlcjtcclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IElFdmVudEhhbmRsZXIgPSBEb21haW5FdmVudHMuSUV2ZW50SGFuZGxlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgVW5pdE9mV29yazxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZE1hcDogSWRlbnRpdHlNYXA8VCwgVEtleT47XHJcbiAgICAgICAgcHJpdmF0ZSByZXBvc2l0b3J5OiBJUmVwb3NpdG9yeTxULCBUS2V5PjtcclxuICAgICAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEluUHJvY2Vzc0Rpc3BhdGNoZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAgPSBuZXcgSWRlbnRpdHlNYXA8VCwgVEtleT4oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRCeUlkKGtleTogVEtleSk6IFQge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmdldEl0ZW1TdGF0dXMoa2V5KSA9PT0gSXRlbVN0YXR1cy5EZWxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVW5pdE9mV29ya0Vycm9ycy50aHJvdyhVbml0T2ZXb3JrRXJyb3JzLkl0ZW1NYXJrZWRBc0RlbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLnJlcG9zaXRvcnkuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLmFkZChrZXksIHRvUmV0dXJuKTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXRyaWV2ZWRFdmVudCA9IG5ldyBPYmplY3RSZXRyaWV2ZWRFdmVudCh0b1JldHVybi5fX3R5cGVOYW1lLCB0b1JldHVybi5fX3R5cGVWZXJzaW9uLCB0b1JldHVybi5nZXRLZXkoKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KHJldHJpZXZlZEV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcmtzIGFuIGl0ZW0gYXMgZGVsZXRlZCBmcm9tIHRoZSBVbml0T2ZXb3JrIChhbmQgZnJvbSB0aGUgUmVwb3NpdG9yeSB3aGVuIHRoZSBVb1cgd2lsbCBiZSBzYXZlZClcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGVsZXRlQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNEZWxldGVkQnlJZChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYWxsIHRoZSBtb2RpZmllZCBpdGVtcyBpbiB0aGUgVW5pdE9mV29yay5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2F2ZUFsbCgpIHtcclxuICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLmlkTWFwLmdldElkcygpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgb2Yga2V5cykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWRNYXAudXBkYXRlU2F2ZWRJdGVtU3RhdHVzKGtleSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5pZE1hcC5nZXRJdGVtU3RhdHVzKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuRGVsZXRlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRGVsZXRlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLk1vZGlmaWVkOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5OZXc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5TYXZlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwcm9jZXNzRGVsZXRlZEl0ZW0oa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHZhciBkZWxldGVkRXZlbnQgPSBuZXcgT2JqZWN0RGVsZXRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yeS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChkZWxldGVkRXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwcm9jZXNzTmV3T3JNb2RpZmllZEl0ZW0oa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yeS5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLm1hcmtBc1NhdmVkQnlJZChrZXkpO1xyXG4gICAgICAgICAgICAvLyByYWlzZXMgYW4gZXZlbnQgZm9yIHdob21ldmVyIGlzIGludGVyZXN0ZWRcclxuICAgICAgICAgICAgdmFyIHNhdmVkRXZlbnQgPSBuZXcgT2JqZWN0U2F2ZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwga2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlRXZlbnQoc2F2ZWRFdmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJhaXNlRXZlbnQoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIG9iamVjdCBmcm9tIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgcmVtb3ZlQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRNYXAucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19