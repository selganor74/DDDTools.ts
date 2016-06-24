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
        var SerializableNull = (function () {
            function SerializableNull() {
                this.__typeName = "SerializableNull";
                this.__typeVersion = "v1";
            }
            return SerializableNull;
        }());
        Serialization.SerializableNull = SerializableNull;
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
                if (typeof value === "object" && value !== null) {
                    if (sThis.hasBeenTouched(value)) {
                        if (idMap.isTracked(value.__objectInstanceId)) {
                            return idMap.getById(value.__objectInstanceId);
                        }
                        else {
                            value = sThis.FakeRegExpDeserializer(value);
                            value = sThis.FakeDateDeserializer(value);
                            value = sThis.FakeNullDeserializer(value);
                            if (value !== null) {
                                idMap.add(value.__objectInstanceId, value);
                            }
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
            Deserializer.FakeNullDeserializer = function (value) {
                if (value.__typeName) {
                    if (value.__typeName === "SerializableNull") {
                        value = null;
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
                    if (current === null) {
                        var newFakeNull = new Serialization.SerializableNull();
                        sourceObject[idx] = newFakeNull;
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
                if (sourceObject === null)
                    return;
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
                    if (current instanceof Serialization.SerializableNull) {
                        sourceObject[idx] = null;
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
                if (typeof value === "object" && value !== null) {
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
        var BaseValueObject = (function (_super) {
            __extends(BaseValueObject, _super);
            function BaseValueObject() {
                _super.call(this);
            }
            BaseValueObject.prototype.equals = function (item) {
                return _.isEqual(item, this);
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
        var Factory = (function () {
            function Factory() {
            }
            Factory.registerType = function (typeName, typeVersion, typePrototype) {
                var sThis = Factory;
                if (!sThis.typeRegistry) {
                    sThis.typeRegistry = new TypeRegistry();
                }
                TypeRegistry.registerType(typeName, typeVersion, typePrototype);
            };
            Factory.createTypeInstance = function (typeName, typeVersion) {
                if (!Factory.typeRegistry) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeRegistryNotSet, "Please register at least a type with the Factory.");
                }
                return TypeRegistry.getTypeInstance(typeName, typeVersion);
            };
            Factory.createObjectsFromState = function (state) {
                if (state === undefined) {
                    return undefined;
                }
                if (state === null) {
                    return null;
                }
                if (state instanceof Date || state instanceof RegExp) {
                    return state;
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
            DomainDispatcher.registerHandler = function (eventTypeName, handler, scope) {
                var sThis = DomainDispatcher;
                if (sThis.dispatcherImplementation) {
                    sThis.dispatcherImplementation.registerHandler(eventTypeName, handler, scope);
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
            InProcessDispatcher.prototype.registerHandler = function (eventTypeName, handler, scope) {
                if (!this.delegatesRegistry[eventTypeName]) {
                    this.delegatesRegistry[eventTypeName] = [];
                }
                if (!handler.__handlerId) {
                    handler.__handlerId = SimpleGuid.generate();
                    handler.__originalScope = scope;
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
                        if (element.__originalScope) {
                            element.call(element.__originalScope, event);
                        }
                        else {
                            element(event);
                        }
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
                var comparison = _.isEqual(thisOne, theOther);
                return comparison;
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
        if (typeof angular !== "undefined") {
            var $injector = angular.injector(['ng']);
            var $q = $injector.get("$q");
            Repository.PromiseHandler = $q;
        }
        else {
            if (Q) {
                Repository.PromiseHandler = Q;
            }
        }
        if (Repository.PromiseHandler == undefined)
            throw new Error("A Promise Handler must be defined, supported are angular's $q or kris kowal's Q. This means that Q or angular MUST be loaded before ddd-tools.js");
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        (function (SaveActionEnum) {
            SaveActionEnum[SaveActionEnum["Add"] = 0] = "Add";
            SaveActionEnum[SaveActionEnum["Update"] = 1] = "Update";
        })(Repository.SaveActionEnum || (Repository.SaveActionEnum = {}));
        var SaveActionEnum = Repository.SaveActionEnum;
        ;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
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
            Events.ItemReplacedEvent = Events.__nameSpace + ".ItemReplacedEvent";
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
        var BaseRepositoryEvent = (function (_super) {
            __extends(BaseRepositoryEvent, _super);
            function BaseRepositoryEvent(item, repositoryId) {
                _super.call(this);
                this.item = item;
                this.repositoryId = repositoryId;
            }
            return BaseRepositoryEvent;
        }(BaseValueObject));
        Repository.BaseRepositoryEvent = BaseRepositoryEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var ItemAddedEvent = (function (_super) {
            __extends(ItemAddedEvent, _super);
            function ItemAddedEvent() {
                _super.apply(this, arguments);
                this.__typeName = Repository.Events.ItemAddedEvent;
                this.__typeVersion = "v1";
            }
            return ItemAddedEvent;
        }(Repository.BaseRepositoryEvent));
        Repository.ItemAddedEvent = ItemAddedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var ItemDeletedEvent = (function (_super) {
            __extends(ItemDeletedEvent, _super);
            function ItemDeletedEvent() {
                _super.apply(this, arguments);
                this.__typeName = Repository.Events.ItemDeletedEvent;
                this.__typeVersion = "v1";
            }
            return ItemDeletedEvent;
        }(Repository.BaseRepositoryEvent));
        Repository.ItemDeletedEvent = ItemDeletedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var ItemRetrievedEvent = (function (_super) {
            __extends(ItemRetrievedEvent, _super);
            function ItemRetrievedEvent() {
                _super.apply(this, arguments);
                this.__typeName = Repository.Events.ItemRetrievedEvent;
                this.__typeVersion = "v1";
            }
            return ItemRetrievedEvent;
        }(Repository.BaseRepositoryEvent));
        Repository.ItemRetrievedEvent = ItemRetrievedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var ItemUpdatedEvent = (function (_super) {
            __extends(ItemUpdatedEvent, _super);
            function ItemUpdatedEvent() {
                _super.apply(this, arguments);
                this.__typeName = Repository.Events.ItemUpdatedEvent;
                this.__typeVersion = "v1";
            }
            return ItemUpdatedEvent;
        }(Repository.BaseRepositoryEvent));
        Repository.ItemUpdatedEvent = ItemUpdatedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var ItemReplacedEvent = (function (_super) {
            __extends(ItemReplacedEvent, _super);
            function ItemReplacedEvent() {
                _super.apply(this, arguments);
                this.__typeName = Repository.Events.ItemReplacedEvent;
                this.__typeVersion = "v1";
            }
            return ItemReplacedEvent;
        }(Repository.BaseRepositoryEvent));
        Repository.ItemReplacedEvent = ItemReplacedEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Factory = DDDTools.PersistableObject.Factory;
        var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
        var BaseRepository = (function () {
            function BaseRepository(managedType, repositoryId) {
                this.managedType = managedType;
                this.repositoryId = repositoryId;
                if (managedType === "") {
                    Repository.Errors.throw(Repository.Errors.ManagedTypeNotSupplied);
                }
                if (!repositoryId)
                    this.repositoryId = "";
            }
            BaseRepository.prototype.getById = function (id) {
                try {
                    var retrieved = this.getByIdImplementation(id);
                    if (retrieved.__typeName !== this.managedType) {
                        var reason = Repository.Errors.getErrorInstance(Repository.Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtaine " + retrieved.__typeName + " from database.");
                    }
                    var toReturn = Factory.createObjectsFromState(retrieved);
                    var event = new Repository.ItemRetrievedEvent(toReturn, this.repositoryId);
                    DomainDispatcher.dispatch(event);
                    return toReturn;
                }
                catch (e) {
                    Repository.Errors.throw(Repository.Errors.ItemNotFound, e.message);
                }
            };
            BaseRepository.prototype.save = function (item) {
                this.saveOrReplace(item);
            };
            BaseRepository.prototype.replace = function (item) {
                this.saveOrReplace(item, true);
            };
            BaseRepository.prototype.saveOrReplace = function (item, replaceOnly) {
                if (replaceOnly === void 0) { replaceOnly = false; }
                try {
                    var key = item.getKey().toString();
                }
                catch (e) {
                    Repository.Errors.throw(Repository.Errors.KeyNotSet);
                }
                var event;
                var asItWas = null;
                var shouldIncrementRevision = true;
                var saveAction;
                saveAction = Repository.SaveActionEnum.Update;
                try {
                    asItWas = this.getById(item.getKey());
                }
                catch (e) {
                    event = new Repository.ItemAddedEvent(item, this.repositoryId);
                    saveAction = Repository.SaveActionEnum.Add;
                    shouldIncrementRevision = false;
                }
                if (!item.perfectlyMatch(asItWas)) {
                    if (!replaceOnly && shouldIncrementRevision) {
                        item.incrementRevisionId();
                        event = event || new Repository.ItemReplacedEvent(item, this.repositoryId);
                    }
                    event = event || new Repository.ItemUpdatedEvent(item, this.repositoryId);
                    this.saveImplementation(item, saveAction);
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
                var event = new Repository.ItemDeletedEvent(asItWas, this.repositoryId);
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
            function BaseRepositoryAsync(managedType, repositoryId) {
                this.managedType = managedType;
                this.repositoryId = repositoryId;
                if (managedType === "" || managedType == undefined) {
                    Repository.Errors.throw(Repository.Errors.ManagedTypeNotSupplied);
                }
                if (!repositoryId)
                    this.repositoryId = "";
            }
            BaseRepositoryAsync.prototype.getById = function (id) {
                var _this = this;
                var deferred = Repository.PromiseHandler.defer();
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
                    try {
                        var toReturn = (Factory.createObjectsFromState(value));
                    }
                    catch (e) {
                        deferred.reject(e);
                        return;
                    }
                    var event = new Repository.ItemRetrievedEvent(toReturn, _this.repositoryId);
                    DomainDispatcher.dispatch(event);
                    deferred.resolve(toReturn);
                }, function (error) {
                    var reason = _this.buildError(error, Repository.Errors.ItemNotFound);
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.doSave = function (item, saveAction) {
                var _this = this;
                var deferred = Repository.PromiseHandler.defer();
                this.saveImplementation(item, saveAction).then(function () {
                    deferred.resolve();
                }, function (error) {
                    var reason = _this.buildError(error, Repository.Errors.ErrorSavingItem);
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.save = function (item) {
                return this.saveOrReplace(item, false);
            };
            BaseRepositoryAsync.prototype.replace = function (item) {
                return this.saveOrReplace(item, true);
            };
            BaseRepositoryAsync.prototype.saveOrReplace = function (item, replaceOnly) {
                var _this = this;
                if (replaceOnly === void 0) { replaceOnly = false; }
                var deferred = Repository.PromiseHandler.defer();
                var event;
                if (!item.getKey()) {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.KeyNotSet);
                    deferred.reject(reason);
                    return deferred.promise;
                }
                this.getById(item.getKey()).then(function (readValue) {
                    if (!item.perfectlyMatch(readValue)) {
                        if (!replaceOnly) {
                            item.incrementRevisionId();
                            event = event || new Repository.ItemUpdatedEvent(item, _this.repositoryId);
                        }
                        _this.doSave(item, Repository.SaveActionEnum.Update).then(function () {
                            event = event || new Repository.ItemReplacedEvent(item, _this.repositoryId);
                            DomainDispatcher.dispatch(event);
                            deferred.resolve();
                        }, function (error) {
                            var reason = _this.buildError(error, Repository.Errors.ErrorReadingItem);
                            deferred.reject(reason);
                        });
                    }
                    else {
                        deferred.resolve();
                    }
                }, function (error) {
                    if (error instanceof Error && error.name == Repository.Errors.ItemNotFound) {
                        _this.doSave(item, Repository.SaveActionEnum.Add).then(function () {
                            event = event || new Repository.ItemAddedEvent(item, _this.repositoryId);
                            DomainDispatcher.dispatch(event);
                            deferred.resolve();
                        }, function (error) {
                            var reason = _this.buildError(error, Repository.Errors.ErrorReadingItem);
                            deferred.reject(reason);
                        });
                    }
                    else {
                        var reason = _this.buildError(error, Repository.Errors.ErrorReadingItem);
                        deferred.reject(reason);
                    }
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.delete = function (id) {
                var _this = this;
                var deferred = Repository.PromiseHandler.defer();
                var event;
                this.getById(id).then(function (item) {
                    var event = new Repository.ItemDeletedEvent(item, _this.repositoryId);
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
                var deferred = Repository.PromiseHandler.defer();
                try {
                    var result = this.getByIdSync(id);
                    deferred.resolve(result);
                }
                catch (err) {
                    deferred.reject(err);
                }
                return deferred.promise;
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
                var deferred = Repository.PromiseHandler.defer();
                try {
                    this.saveSync(item);
                    deferred.resolve({});
                }
                catch (err) {
                    deferred.reject(err);
                }
                return deferred.promise;
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
                var deferred = Repository.PromiseHandler.defer();
                try {
                    this.deleteSync(id);
                    deferred.resolve({});
                }
                catch (err) {
                    deferred.reject(err);
                }
                return deferred.promise;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9RdWVyeS9JUXVlcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVEYXRlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlUmVnRXhwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlTnVsbC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1RvdWNoLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUVudGl0eS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9Qcm9taXNlSGFuZGxlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvU2F2ZUFjdGlvbkVudW0udHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1BZGRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbURlbGV0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1SZXRyaWV2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1VcGRhdGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtUmVwbGFjZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvSVVuaXRPZldvcmsudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0UmV0cmlldmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvSWRlbnRpdHlNYXAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsSUFBVSxRQUFRLENBY2pCO0FBZEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxlQUFlLENBY2pDO0lBZGtCLFdBQUEsZUFBZSxFQUFDLENBQUM7UUFDaEM7WUFBQTtZQVlBLENBQUM7WUFWVSxnQkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE9BQWdCO2dCQUN2QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLEdBQUcsQ0FBQztZQUNkLENBQUM7WUFFTSwyQkFBZ0IsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLE9BQWdCO2dCQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2YsQ0FBQztZQUNMLGlCQUFDO1FBQUQsQ0FBQyxBQVpELElBWUM7UUFacUIsMEJBQVUsYUFZL0IsQ0FBQTtJQUNMLENBQUMsRUFka0IsZUFBZSxHQUFmLHdCQUFlLEtBQWYsd0JBQWUsUUFjakM7QUFBRCxDQUFDLEVBZFMsUUFBUSxLQUFSLFFBQVEsUUFjakI7QUdkRCxJQUFVLFFBQVEsQ0F5QmpCO0FBekJELFdBQVUsUUFBUTtJQUFDLElBQUEsS0FBSyxDQXlCdkI7SUF6QmtCLFdBQUEsS0FBSyxFQUFDLENBQUM7UUFFekI7WUFBQTtZQXNCQSxDQUFDO1lBcEJlLGtCQUFPLEdBQXRCLFVBQXVCLElBQVk7Z0JBQ2xDLElBQUksVUFBVSxHQUFXLElBQUksTUFBTSxDQUFDLHNFQUFzRSxDQUFDLENBQUM7Z0JBQzVHLE1B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IGhhbmRsaW5nIGJhc2UgYmVoYXZpb3JzIGZvciB0aGUgZG9tYWluIG1vZGVsLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkVycm9yTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgICAgIHN0YXRpYyB0aHJvdyhuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IEJhc2VFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShuYW1lLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldEVycm9ySW5zdGFuY2UobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UgfHwgbmFtZSk7XHJcbiAgICAgICAgICAgIGVyci5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuUXVlcnkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIGEgcXVlcnkgdG8gYmUgZXhlY3V0ZWQgYWdhaW5zdCBhIERhdGFzdG9yZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElRdWVyeTxUPiB7XHJcbiAgICAgICAgc2V0UXVlcnkocXVlcnlPYmplY3Q6IGFueSk7XHJcbiAgICAgICAgZXhlY3V0ZSgpOiBUW107XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlF1ZXJ5IHtcclxuICAgIFxyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUmVwb3NpdG9yeS5JUHJvbWlzZTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIGEgcXVlcnkgdG8gYmUgZXhlY3V0ZWQgYWdhaW5zdCBhIERhdGFzdG9yZSBpbiBhbiBhc3luYyBmYXNoaW9uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5QXN5bmM8VD4ge1xyXG4gICAgICAgIHNldFF1ZXJ5KHF1ZXJ5T2JqZWN0OiBhbnkpO1xyXG4gICAgICAgIGV4ZWN1dGUoKTogSVByb21pc2U8VFtdPjtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBTb21lIHNpbXBsZSBjbGFzc2VzIHVzZWQgaW4gZGlmZmVyZW50IG1vZHVsZXMuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU2ltcGxlR3VpZCB7XHJcblx0XHQvLyBIZWxwZXIgZm9yIGd1aWQgZ2VuZXJhdGlvbi5cclxuXHRcdHByaXZhdGUgc3RhdGljIGlzVmFsaWQoZ3VpZDogc3RyaW5nKSB7XHJcblx0XHRcdHZhciBndWlkUmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXlt7KF0/WzAtOUEtRmEtZl17OH1bLV0/KFswLTlBLUZhLWZdezR9Wy1dPyl7M31bMC05QS1GYS1mXXsxMn1bKX1dPyRcIik7XHJcblx0XHRcdHJldHVybiBndWlkUmVnZXhwLnRlc3QoZ3VpZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgczQoKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG5cdFx0XHRcdC50b1N0cmluZygxNilcclxuXHRcdFx0XHQuc3Vic3RyaW5nKDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcclxuXHRcdFx0dmFyIG5ld1NpbXBsZUd1aWQgPSBcIntcIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArXHJcblx0XHRcdFx0U2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIn1cIjtcclxuXHJcblx0XHRcdGlmIChTaW1wbGVHdWlkLmlzVmFsaWQobmV3U2ltcGxlR3VpZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3U2ltcGxlR3VpZDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaG91bGQgTmV2ZXIgSGFwcGVuISBUaGUgZ2VuZXJhdGVkIGd1aWQgaXMgbm90IHZhbGlkIVwiKVxyXG5cdFx0fVxyXG5cdH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5VdGlscyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpbXBsZUlkZW50aXR5TWFwIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogYW55IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzVHJhY2tlZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChpZDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIG9iamVjdDogYW55KTogYW55IHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXSA9IG9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgYWxsIHRoZSBpZHMgaW4gdGhlIG1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRJZHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5pZFRvT2JqZWN0TWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybi5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkZWxldGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLkNvbW1vbkludGVyZmFjZXMge1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUVxdWF0YWJsZTxUPiB7XHJcblx0XHRlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW47XHJcblx0fVxyXG59IiwiXHJcbm5hbWVzcGFjZSBERERUb29scy5Db21tb25JbnRlcmZhY2VzIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIF9fb2JqZWN0SW5zdGFuY2VJZD86IHN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlRGF0ZSBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBfX2RhdGVBc1N0cmluZzogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19kYXRlQXNTdHJpbmcgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldERhdGVGcm9tU3RyaW5nKGRhdGVBc1N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlQXNTdHJpbmcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0RGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZURhdGUuZ2V0RGF0ZUZyb21TdHJpbmcodGhpcy5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlUmVnRXhwIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJTZXJpYWxpemFibGVSZWdFeHBcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgX19yZWd1bGFyRXhwcmVzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIF9fZmxhZ3M6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocmVnRXhwOiBSZWdFeHApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGxpdFJlZ0V4cEFuZEZsYWdzKCByZWdFeHAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3BsaXRSZWdFeHBBbmRGbGFncyggcmVnRXhwOiBSZWdFeHAgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcmVhbGx5VW5saWtlbHlTdHJpbmcgPSBcIsKww7LDoMO5wrDCsMOyw6DDucKwwrDDssOgw7nCsFwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG8gZ2V0IGEgY29ycmVjdCByZWdleHAgd2UgbXVzdCB0YWtlIGF3YXkgdGhlIGxlYWRpbmcgXCIvXCIgYW5kIHRoZSBmbGFncyFcclxuICAgICAgICAgICAgdmFyIGNvbmRpdGlvbmVkU3RyaW5nID0gcmVnRXhwLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyByZXBsYWNlcyB0aGUgZXNjYXBlZCBzbGFzaGVzIHdpdGggc29tZXRoaW5nIHZlcnkgaW1wcm9iYWJsZVxyXG4gICAgICAgICAgICBjb25kaXRpb25lZFN0cmluZyA9IGNvbmRpdGlvbmVkU3RyaW5nLnJlcGxhY2UoXCJcXFxcL1wiLCByZWFsbHlVbmxpa2VseVN0cmluZyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGNvbmRpdGlvbmVkU3RyaW5nLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHBhcnRzWzBdIG11c3QgYWx3YXlzIGJlIHRoZSBlbXB0eSBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gXCJcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuIVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVzdG9yZSB3aGF0IFxyXG4gICAgICAgICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UocmVhbGx5VW5saWtlbHlTdHJpbmcsIFwiXFxcXC9cIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gPSBwYXJ0c1sxXTtcclxuICAgICAgICAgICAgdGhpcy5fX2ZsYWdzID0gcGFydHNbMl0gfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChcInNwbGl0UmVnRXhwOiBcIiArIHJlZ0V4cC50b1N0cmluZygpICsgXCIgLi4uIFwiICsgdGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uICsgXCIgLi4uIFwiICsgdGhpcy5fX2ZsYWdzICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHJlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmcsIGZsYWdzOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBSZWdFeHA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldFJlZ0V4cDogXCIgKyB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gKyBcIiAuLi4gXCIgKyB0aGlzLl9fZmxhZ3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGZsYWdzKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb24sIGZsYWdzKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBiYWNrIGEgUmVndWxhciBFeHByZXNzaW9uIGZyb20gdGhlIFNlcmlhbGl6YWJsZVJlZ0V4cCBpbnN0YW5jZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRSZWdFeHAoKTogUmVnRXhwIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZVJlZ0V4cC5nZXRSZWdFeHBGcm9tUmVnRXhwQW5kRmxhZ3ModGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uLCB0aGlzLl9fZmxhZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZU51bGwgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlNlcmlhbGl6YWJsZU51bGxcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdG91Y2hJbmRleCA9IDE7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXBhcmVzIHRoZSBpZCBnZW5lcmF0b3IgZm9yIGEgbmV3IHJ1blxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRUb3VjaEluZGV4KCkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICAgICAgc1RoaXMudG91Y2hJbmRleCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBnZXROZXdJbmRleCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpXHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFRvdWNoO1xyXG4gICAgICAgICAgICBzVGhpcy50b3VjaEluZGV4Kys7XHJcbiAgICAgICAgICAgIHJldHVybiAoc1RoaXMudG91Y2hJbmRleCsrIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFkZHMgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IHRvIGFuIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVG91Y2hcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdJZCA9IHNUaGlzLmdldE5ld0luZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkID0gbmV3SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlbW92ZXMgdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSBmcm9tIGFuIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdW50b3VjaChvYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaGFzQmVlblRvdWNoZWQob2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGNhc3RlZC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZURhdGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVSZWdFeHAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Ub3VjaC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbi8vIGltcG9ydCB7U2ltcGxlSWRlbnRpdHlNYXB9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcFwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuLy8gaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIEpTT04gc3RyaW5nIHNlcmlhbGl6YXRpb24uIEl0IGV4dGVuZHMgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBKU09OLnN0cmluZ2lmeSB0byBhbGxvdyBzZXJpYWxpemF0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gb2YgZGF0ZSBhbmQgcmVndWxhciBleHByZXNzaW9uIG9iamVjdHMsIGFuZCBvYmplY3QgcmVmZXJlbmNlLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBTaW1wbGVHdWlkID0gVXRpbHMuU2ltcGxlR3VpZDtcclxuICAgIGltcG9ydCBTaW1wbGVJZGVudGl0eU1hcCA9IFV0aWxzLlNpbXBsZUlkZW50aXR5TWFwO1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBEZXNlcmlhbGl6ZXIge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgaXMgbmVlZGVkIHRvIHRyYWNrIG9iamVjdCBpbnN0YW5jZXMgdG8gYWNoaWV2ZSBjb3JyZWN0IHJlY29uc3RydWN0aW9uIG9mIHRoZSBvYmplY3QgdHJlZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpZGVudGl0eU1hcDogU2ltcGxlSWRlbnRpdHlNYXA7XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXNlc2lhbGl6ZXMgYW4gb2JqZWN0IGZyb20gYSBKU09OIHN0cmluZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKHRvRGVzZXJpYWxpemU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgICAgIERlc2VyaWFsaXplci5pZGVudGl0eU1hcCA9IG5ldyBTaW1wbGVJZGVudGl0eU1hcCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBKU09OLnBhcnNlKHRvRGVzZXJpYWxpemUsIERlc2VyaWFsaXplci5jdXN0b21SZXZpdmVyKTtcclxuICAgICAgICAgICAgRGVzZXJpYWxpemVyLmNsZWFudXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2xlYW5zIHRoZSByZWNvbnNpdHV0ZWQgaW5zdGFuY2VzIGZyb20gdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSxcclxuICAgICAgICAgKiBhbmQgZW1wdGllcyB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY2xlYW51cCgpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRGVzZXJpYWxpemVyO1xyXG4gICAgICAgICAgICB2YXIgaWRNYXAgPSBzVGhpcy5pZGVudGl0eU1hcDtcclxuICAgICAgICAgICAgdmFyIHVudG91Y2ggPSBUb3VjaC51bnRvdWNoO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBpZE1hcC5nZXRJZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gaWRNYXAuZ2V0QnlJZChpdGVtKTtcclxuICAgICAgICAgICAgICAgIHVudG91Y2goY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgbGVhdmUgdGhlIGluc3RhbmNlcyBcImdhcmJhZ2VhYmxlXCIuLi4gaG93IHRvIHRlc3QgPyAgICBcclxuICAgICAgICAgICAgICAgIGlkTWFwLmRlbGV0ZUJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEl0IGhhbmRsZXMgRmFrZSogaW5zdGFuY2VzIHVzZXMgX19vYmplY3RJbnN0YW5jZUlkIHRvIHJlYnVpbGQgYSBjb3JyZWN0IG9iamVjdCB0cmVlLiBcclxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJ5IEpTT04ucGFyc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21SZXZpdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERlc2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc1RoaXMuaGFzQmVlblRvdWNoZWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkTWFwLmlzVHJhY2tlZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZE1hcC5nZXRCeUlkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VSZWdFeHBEZXNlcmlhbGl6ZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlTnVsbERlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXAuYWRkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgICAgIGlmIChjYXN0ZWQuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5hZ2VzIFJlZ0V4cCBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlUmVnRXhwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRmFrZVJlZ0V4cERlc2VyaWFsaXplcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlNlcmlhbGl6YWJsZVJlZ0V4cFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBTZXJpYWxpemFibGVSZWdFeHAuZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHZhbHVlLl9fcmVndWxhckV4cHJlc3Npb24sIHZhbHVlLl9fZmxhZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgRGF0ZSBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlUmVnRXhwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRmFrZURhdGVEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSA9PT0gXCJTZXJpYWxpemFibGVEYXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFNlcmlhbGl6YWJsZURhdGUuZ2V0RGF0ZUZyb21TdHJpbmcodmFsdWUuX19kYXRlQXNTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgTnVsbCBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlTnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZha2VOdWxsRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiU2VyaWFsaXphYmxlTnVsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVEYXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlUmVnRXhwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlTnVsbC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RvdWNoLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbi8vIGltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6ZXIge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlcmlhbGl6ZXMgYW4gb2JqZWN0IHRvIGEgSlNPTiBzdHJpbmcsIGtlZXBlaW5nIHRyYWNrIG9mIHRoZSBpbnN0YW5jZXMgb2YgdGhlIG9iamVjdHMgc2VyaWFsaXplZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKHRvU2VyaWFsaXplOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm47XHJcbiAgICAgICAgICAgIFRvdWNoLnJlc2V0VG91Y2hJbmRleCgpO1xyXG4gICAgICAgICAgICB0b1NlcmlhbGl6ZSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4gPSBKU09OLnN0cmluZ2lmeSh0b1NlcmlhbGl6ZSwgU2VyaWFsaXplci5jdXN0b21TZXJpYWxpemVyKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICAgICAgU2VyaWFsaXplci51bnRvdWNoU291cmNlT2JqZWN0KHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmVwcm9jZXNzIHRoZSBvYmplY3QgdHJlZSB0byBiZSBzZXJpYWxpemVkIHRvIGZpbmQgYW5kIHJlcGxhY2UgRGF0ZSBvYmplY3RzIHdpdGggc29tZXRoaW5nIGRpZmZlcmVudC4uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZURhdGUgPSBuZXcgU2VyaWFsaXphYmxlRGF0ZShjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZU51bGwgPSBuZXcgU2VyaWFsaXphYmxlTnVsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gbmV3RmFrZU51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdGYWtlUmVnRXhwID0gbmV3IFNlcmlhbGl6YWJsZVJlZ0V4cChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VSZWdFeHA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZU9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHVudG91Y2hTb3VyY2VPYmplY3Qoc291cmNlT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gU2VyaWFsaXplcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzb3VyY2VPYmplY3QgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChUb3VjaC5oYXNCZWVuVG91Y2hlZChzb3VyY2VPYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBUb3VjaC51bnRvdWNoKHNvdXJjZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzb3VyY2VPYmplY3RbaWR4XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShjdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNUaGlzLnVudG91Y2hTb3VyY2VPYmplY3QoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQb3N0cHJvY2VzcyB0aGUgb2JqZWN0IHRyZWUgdG8gYmUgc2VyaWFsaXplZCB0byBmaW5kIGFuZCByZXBsYWNlIFNlcmlhbGl6YWJsZURhdGUvUmVnRXhwIG9iamVjdHMgd2l0aCBPcmlnaW5hbCB0eXBlcyBhZ2Fpbi4uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZURhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlRGF0ZT5jdXJyZW50KS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZU51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZVJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gKDxTZXJpYWxpemFibGVSZWdFeHA+Y3VycmVudCkuZ2V0UmVnRXhwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZU9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEl0J3MgZHV0eSBpcyB0byBcInRvdWNoXCIgZXZlcnkgb2JqZWN0IHByb2Nlc3NlIHRvIGFkZCBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkuXHJcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBieSBKU09OLnN0cmluZ2lmeVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGN1c3RvbVNlcmlhbGl6ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gU2VyaWFsaXplcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVG91Y2guaGFzQmVlblRvdWNoZWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG91Y2gudG91Y2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8qKlxyXG4gKiBEZWZpbmVzIGRlZmF1bHQgYmVoYXZpb3IgYW5kIGludGVyZmFjZXMgZm9yIGEgUGVyc2lzdGFibGUgT2JqZWN0LCBhbiBvYmplY3QgdGhhdCBoYXMgYSBzdGF0ZSB0aGF0IHdpbGwgcHJvYmFibHkgYmUgcGVyc2lzdGVkLiBJdCBnaXZlcyBzdXBwb3J0IHRvIFwidXBncmFkZVwiIHBlcnNpc3RlZCBvYmplY3RzLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHRcclxuXHRpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJUGVyc2lzdGFibGUgZXh0ZW5kcyBJVHlwZVRyYWNraW5nIHtcclxuXHRcdGdldFVwZ3JhZGVkSW5zdGFuY2U/KGZyb21JbnN0YW5jZTogSVBlcnNpc3RhYmxlKTogSVBlcnNpc3RhYmxlO1xyXG5cdFx0Z2V0U3RhdGUoKTogSVR5cGVUcmFja2luZztcclxuXHRcdHNldFN0YXRlKHN0YXRlOiBJVHlwZVRyYWNraW5nKTtcclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnMudHNcIiAvPlxyXG4vLyBpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuICAgIFxyXG4gICAgaW1wb3J0IEJhc2VFcnJvcnMgPSBFcnJvck1hbmFnZW1lbnQuQmFzZUVycm9ycztcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEVycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgICAgICAvLyBUaHJvd24gYnkgcGVyc2lzdGFibGUgb2JqZWN0c1xyXG4gICAgICAgIHN0YXRpYyBTdGF0ZUlzTm90QW5PYmplY3QgPSBcIlN0YXRlIGlzIG5vdCBhbiBPYmplY3RcIjtcclxuICAgICAgICBzdGF0aWMgVHlwZU5hbWVOb3RTZXQgPSBcIlR5cGVOYW1lIG5vdCBzZXRcIjtcclxuICAgICAgICBzdGF0aWMgVHlwZVZlcnNpb25Ob3RTZXQgPSBcIlR5cGVWZXJzaW9uIG5vdCBzZXRcIjtcclxuICAgICAgICBzdGF0aWMgVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUgPSBcIlVuYWJsZSB0byBJbnN0YW50aWF0ZSBUeXBlXCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVSZWdpc3RyeU5vdFNldCA9IFwiVHlwZVJlZ2lzdHJ5IG5vdCBzZXRcIjtcclxuXHJcbiAgICAgICAgLy8gVGhyb3duIGJ5IHRoZSBGYWN0b3J5L1R5cGVSZWdpc3RyeVxyXG4gICAgICAgIHN0YXRpYyBUeXBlTm90UmVnaXN0ZXJlZCA9IFwiVHlwZSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB3aXRoIHRoZSBUeXBlUmVnaXN0cnlcIjtcclxuICAgICAgICBzdGF0aWMgQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQgPSBcInR5cGVQcm90b3R5cGUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXCJcclxuXHJcbiAgICAgICAgLy8gVGhyb3duIGJ5IHRoZSBVcGdyYWRlclxyXG4gICAgICAgIHN0YXRpYyBUeXBlTm90SW5zdGF0aWFibGUgPSBcIlR5cGUgaXMgbm90IGluc3RhbnRpYWJsZVwiO1xyXG4gICAgICAgIHN0YXRpYyBVcGdyYWRlUGF0aE5vdEZvdW5kID0gXCJVcGdyYWRlIFBhdGggbm90IEZvdW5kXCI7XHJcbiAgICAgICAgc3RhdGljIEluY29ycmVjdFZlcnNpb25Gb3JtYXQgPSBcIkluY29ycmVjdCBWZXJzaW9uIEZvcm1hdFwiO1xyXG4gICAgICAgIHN0YXRpYyBXcm9uZ1ZlcnNpb25JblVwZ3JhZGVkSW5zdGFuY2UgPSBcIldyb25nIFZlcnNpb24gaW4gVXBncmFkZWQgSW5zdGFuY2VcIjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzXCIgLz5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBWYWx1ZU9iamVjdCBwYXR0ZXJuLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IElFcXVhdGFibGUgPSBDb21tb25JbnRlcmZhY2VzLklFcXVhdGFibGU7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVmFsdWVPYmplY3Q8VD4gZXh0ZW5kcyBJRXF1YXRhYmxlPFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9JVmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9JVmFsdWVPYmplY3RcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuICAgIGltcG9ydCBJVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5JVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJS2V5VmFsdWVPYmplY3Q8VD4gZXh0ZW5kcyBJVmFsdWVPYmplY3Q8VD4ge1xyXG4gICAgICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxuICAgIH1cclxufSIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG4vLyBpbXBvcnQge0Rlc2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IERlc2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uRGVzZXJpYWxpemVyO1xyXG5cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUGVyc2lzdGFibGVPYmplY3QgaW1wbGVtZW50cyBJUGVyc2lzdGFibGUge1xyXG5cclxuICAgICAgICBwdWJsaWMgX190eXBlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBwdWJsaWMgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgcHVibGljIGdldFN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fdHlwZU5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5hbWVOb3RTZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fX3R5cGVWZXJzaW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVWZXJzaW9uTm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRvUmVjb25zdGl0dXRlID0gU2VyaWFsaXplci5zZXJpYWxpemUodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciByZWNvbnN0aXR1dGVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHRvUmVjb25zdGl0dXRlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZWNvbnN0aXR1dGVkO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRTdGF0ZTxUU3RhdGU+KHN0YXRlOiBUU3RhdGUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlN0YXRlSXNOb3RBbk9iamVjdCwgXCJzdGF0ZSBkZXZlIGVzc2VyZSB1biBvZ2dldHRvXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlRWxlbWVudCA9IHN0YXRlW2VsZW1lbnRdO1xyXG4gICAgICAgICAgICAgICAgdGhpc1tlbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShjdXJyZW50U3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCB0aGlzLmdldFN0YXRlKCkgKSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3Qge1xyXG5cclxuXHRpbXBvcnQgQmFzZVBlcnNpc3RhYmxlT2JqZWN0ID0gUGVyc2lzdGFibGVPYmplY3QuQmFzZVBlcnNpc3RhYmxlT2JqZWN0O1xyXG5cdGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG5cclxuXHRleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcblx0XHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdFx0aW1wbGVtZW50cyBJVmFsdWVPYmplY3Q8VD4ge1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0XHQvLyBQZXIgb2duaSBwcm9wcmlldMOgIGRlbGwnSVRFTSA6dmVyaWZpY28gbCd1Z3VhZ2xpYW56YSBjb24gbCdpc3RhbnphIGF0dHVhbGUgXHRcdFx0XHJcblx0XHRcdHJldHVybiBfLmlzRXF1YWwoaXRlbSwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiBnZW5lcmFsIGFuZCBjb21tb25seSB1c2VkIFZhbHVlT2JqZWN0cy4gXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3RzIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEd1aWQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8R3VpZD4gaW1wbGVtZW50cyBJS2V5VmFsdWVPYmplY3Q8R3VpZD4ge1xyXG5cclxuICAgICAgICBwdWJsaWMgX190eXBlTmFtZSA9IFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIjtcclxuICAgICAgICBwdWJsaWMgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBndWlkOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGd1aWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChndWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWQgPSBndWlkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogR3VpZCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3VpZChTaW1wbGVHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVmFsdWVPYmplY3RzIHVzZWQgYXMga2V5IE1VU1QgaW1wbGVtZW50IGEgdG9TdHJpbmcgbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUga2V5IGFzIHN0cmluZy5cclxuICAgICAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmd1aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge1R5cGVSZWdpc3RyeX0gZnJvbSBcIi4vVHlwZVJlZ2lzdHJ5XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnkgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGNyZWF0ZSBhbmQgcmVjb25zdGl0dXRlIHN0YXRmZXVsIG9iamVjdHMuXHJcbiAgICAgKiBJdCBndXJhbnRlZXMgdGhhdCBhIHN0YXRmdWwgb2JqZWN0IGlzIGFsd2F5cyBjcmVhdGVkIG9yIHJlY29uc3RpdHV0ZWQgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uLiAgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdHlwZVJlZ2lzdHJ5OiBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdGVycyBhIG5ldyBJUGVyc2lzdGFibGUgdHlwZSB3aXRoIHRoZSBGYWN0b3J5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogbmV3ICgpID0+IElQZXJzaXN0YWJsZSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBGYWN0b3J5O1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnR5cGVSZWdpc3RyeSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMudHlwZVJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZSh0eXBlTmFtZSwgdHlwZVZlcnNpb24sIHR5cGVQcm90b3R5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuIElmIHR5cGVWZXJzaW9uIGlzIG5vdCBzdXBwbGllZCwgbGF0ZXN0IGF2YWlsYWJsZSB2ZXJzaW9uIGlzIHJldHVybmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlVHlwZUluc3RhbmNlPFQgZXh0ZW5kcyBJUGVyc2lzdGFibGU+KHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uPzogc3RyaW5nKTogVCB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZhY3RvcnkudHlwZVJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVSZWdpc3RyeU5vdFNldCwgXCJQbGVhc2UgcmVnaXN0ZXIgYXQgbGVhc3QgYSB0eXBlIHdpdGggdGhlIEZhY3RvcnkuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gVHlwZVJlZ2lzdHJ5LmdldFR5cGVJbnN0YW5jZTxUPih0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgdHlwZVRvSW5zdGF0aWF0ZSA9IEZhY3RvcnkuY29tcHV0ZUZ1bGx5UXVhbGlmaWVkVHlwZU5hbWUodHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZVRvSW5zdGF0aWF0ZSArIFwiKClcIik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIFRoaXMgZmFpbHVyZSBpcyBleHBlY3RlZCBpZiB3ZSBhcmUgYXNraW5nIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0b1JldHVybi5fX3R5cGVWZXJzaW9uICE9IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgIHRvUmV0dXJuID0gPFQ+ZXZhbChcIm5ldyBcIiArIHR5cGVOYW1lICsgXCIoKVwiKTtcclxuICAgICAgICAgICAgLy8gfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgaW5zdGFuY2UgZnJvbSBpdHMgc3RhdGUuIFdpbGwgYWx3YXlzIHJldHVybiB0aGUgbGF0ZXN0IHZlcnNpb24gcG9zc2libGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShzdGF0ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICd1bmRlZmluZWQnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcInN0YXRlIGNhbm5vdCBiZSAnbnVsbCdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTWFuYWdlcyB0aGUgXCJzcGVjaWFsXCIgdHlwZXMgRGF0ZSBhbmQgUmVnRXhwLlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHN0YXRlIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRmFjdG9yeS5pc1BlcnNpc3RhYmxlT2JqZWN0KHN0YXRlKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGVyc2lzdGFibGU6IElQZXJzaXN0YWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGFibGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShzdGF0ZS5fX3R5cGVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0YWJsZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3YXJyYW50aWVzIHRoYXQgYSB0eXBlIGlzIGFsd2F5cyByZXR1cm5lZCBhdCBpdHMgbGF0ZXN0IHZlcnNpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZ3JhZGVkUGVyc2lzdGFibGUgPSBVcGdyYWRlci51cGdyYWRlKHBlcnNpc3RhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBncmFkZWRQZXJzaXN0YWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IGlzIG5vdCBhIHBlcnNpc3RhYmxlT2JqZWN0IGNhbiBiZSBhbiBBcnJheSBvciBhbiBPYmplY3QgYW5kIG11c3QgYmUgcmVjb25zdGl0dXRlZFxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBhbnkgPSBBcnJheS5pc0FycmF5KHN0YXRlKSA/IFtdIDoge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjdXJyZW50RWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGlzRWxlbWVudCA9IHN0YXRlW2N1cnJlbnRFbGVtZW50XTtcclxuICAgICAgICAgICAgICAgICAgICB0b1JldHVybltjdXJyZW50RWxlbWVudF0gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpc0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFwiUHJpbWl0aXZlXCJcIiB0eXBlcyBhcmUgcmV0dXJuZWQgYXMgdGhleSBhcmVcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBcIklQZXJzaXN0YWJsZVwiIGludGVyZmFjZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1BlcnNpc3RhYmxlT2JqZWN0KG9iamVjdFRvVGVzdDogYW55KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFRvVGVzdCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBlcnNpc3RhYmxlID0gPElQZXJzaXN0YWJsZT5vYmplY3RUb1Rlc3Q7XHJcbiAgICAgICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlTmFtZSB8fCBwZXJzaXN0YWJsZS5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlVmVyc2lvbiB8fCBwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGEgdHlwZSBjYW4gYmUgaW5zdGF0aWF0ZWQgKGF0IGl0cyBsYXRlc3QgdmVyc2lvbikuIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzVHlwZUluc3RhbnRpYWJsZSh0eXBlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wVHlwZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgXCJGdWxseSBRdWFsaWZpZWQgVHlwZU5hbWVcIiBvZiB0eXBlIFwidHlwZU5hbWVcIiBmb3IgdGhlIHN1cHBsaWVkIFwidmVyc2lvblwiLlxyXG4gICAgICAgICAqIEZRVE4gaXMgY29tcHV0ZWQgZnJvbSB0eXBlTmFtZSBhZGRpbmcgdGhlIHZlcnNpb24gc3RyaW5nIGluIHRoZSByaWdodCBwbGFjZS5cclxuICAgICAgICAgKiBFeGFtcGxlXHJcbiAgICAgICAgICogdHlwZU5hbWU6IEFwcGxpY2F0aW9uLk1vZGVsLk9mZmVydGFcclxuICAgICAgICAgKiB2ZXJzaW9uOiB2MlxyXG4gICAgICAgICAqIHJldHVybjogQXBwbGljYXRpb24uTW9kZWwudjIuT2ZmZXJ0YVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIHByaXZhdGUgc3RhdGljIGNvbXB1dGVGdWxseVF1YWxpZmllZFR5cGVOYW1lKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vICAgICB2YXIgZnF0blBhcnRzQXJyYXkgPSB0eXBlTmFtZS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgLy8gICAgIHZhciBjbGFzc05hbWUgPSBmcXRuUGFydHNBcnJheS5wb3AoKTtcclxuICAgICAgICAvLyAgICAgZnF0blBhcnRzQXJyYXkucHVzaCh0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgLy8gICAgIGZxdG5QYXJ0c0FycmF5LnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICAvLyAgICAgdmFyIG5ld0ZxdG4gPSBmcXRuUGFydHNBcnJheS5qb2luKFwiLlwiKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIG5ld0ZxdG47XHJcbiAgICAgICAgLy8gfTtcclxuXHJcbiAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgVXBncmFkZXIgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGF1dG9tYXRlIHRoZSBcInVwZ3JhZGUgcHJvY2Vzc1wiIG9mIGFuIG9iamVjdCdzIHN0YXRlLlxyXG4gICAgICogVGhlIFVwZ3JhZGVyIGlzIGZvdW5kIG9uIHRoZXNlIHByaW5jaXBsZXM6XHJcbiAgICAgKiAgKiBUaGUgbGF0ZXN0IHZlcnNpb24gRlFUTiBtdXN0IG1hdGNoIHRoZSBvbmUgc3BlY2lmaWVkIGJ5IHRoZSBwcm9wZXJ0eSBfX3R5cGVOYW1lLCB3aGljaCBpcyBpbiB0aGUgZm9ybSBuYW1lc3BhY2Uub2JqZWN0TmFtZS5cclxuICAgICAqICAqIE9sZGVyIHZlcnNpb25zIG9mIGEgUGVyc2lzdGFibGVPYmplY3QgTVVTVCBoYXZlIGEgRlFUTiBpbiB0aGUgZm9ybSBuYW1lc3BhY2UuPHZlcnNpb24+Lm9iamVjdE5hbWUuXHJcbiAgICAgKiAgKiBfX3R5cGVWZXJzaW9uIE1VU1QgYmUgc3BlY2lmaWVkIGFzIHY8dmVyc2lvbk51bWJlcj4gd2hlcmUgdmVyc2lvbiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICogICogQWxsIG9iamVjdCdzIHZlcnNpb25zIChleGNsdWRpbmcgdjEpIE1VU1QgcHJvdmlkZSBhbiBnZXRVcGdyYWRlZEluc3RhbmNlIG1ldGhvZCB0aGF0IGtub3dzIGhvdyB0byBtb2RpZnkgc3RhdGUgdG8gZ28gZnJvbSBcclxuICAgICAqICAgIHZlcnNpb24gdjxuIC0gMT4gdG8gdjxuPiwgd2hlcmUgbiBpcyB0aGUgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGdldFVwZ3JhZGVkSW5zdGFuY2UgbWV0aG9kLiAgIFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgVXBncmFkZXIge1xyXG5cclxuICAgICAgICAvLyBDb250YWlucyB0aGUgbGF0ZXN0IHZlcnNpb24gcG9zc2libGUgZm9yIGVhY2ggdHlwZS4gXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbGF0ZXN0VHlwZVZlcnNpb25NYXA6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgICAgIC8vIENvbnRhaW5zIGZsYWdzIHRvIGRldGVybWluZSBpZiBsYXRzdFR5cGVWZXJzaW9uTWFwIGZvciBhIHNwZWNpZmljIHR5cGUgaGFzIGJlZW4gY2FsY3VsYXRlZFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzVmVyc2lvbk1hcEJ1aWx0OiB7IFt0eXBlTmFtZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkVmVyc2lvbk1hcEZvclR5cGUodHlwZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAoVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciB0bXBJbnN0YW5jZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIFVwZ3JhZGVyLmxhdGVzdFR5cGVWZXJzaW9uTWFwW3R5cGVOYW1lXSA9IHRtcEluc3RhbmNlLl9fdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxhdGVzdCBwb3NzaWJsZSB2ZXJzaW9uIGZvciBcIiArIHR5cGVOYW1lICsgXCIgaXMgXCIgKyB0bXBJbnN0YW5jZS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90SW5zdGF0aWFibGUsIFwiVGhlIHR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQsIHNvIGl0IGlzIGltcG9zc2libGUgdG8gaWRlbnRpZnkgdGhlIGxhdGVzdCBwb3NzaWJsZSB2ZXJzaW9uLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgLy8gTG9va3MgZm9yIHRoZSBsYXRlc3QgdmVyc2lvbiwgaWYgbm90IGFscmVhZHkgZG9uZS5cclxuICAgICAgICAgICAgaWYgKCFVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIFVwZ3JhZGVyLmJ1aWxkVmVyc2lvbk1hcEZvclR5cGUodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSB2ZXJzaW9uIHN1cHBsaWVkIGRvZXNuJ3QgbWF0Y2ggdGhlIGxhdGVzdCB2ZXJzaW9uIGluIHRoZSBtYXAsIHRoZSBpbnN0YW5jZSBtdXN0IGJlIHVwZ3JhZGVkLlxyXG4gICAgICAgICAgICBpZiAoVXBncmFkZXIubGF0ZXN0VHlwZVZlcnNpb25NYXBbdHlwZU5hbWVdICE9PSB0eXBlVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB1cGdyYWRlKGluc3RhbmNlRnJvbTogSVBlcnNpc3RhYmxlKTogSVBlcnNpc3RhYmxlIHtcclxuICAgICAgICAgICAgLy8gSWYgb2JqZWN0IGRvZXNuJ3QgbmVlZCB0byB1cGdyYWRlLCB0aGVuIHdlIGFyZSBkb25lIVxyXG4gICAgICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIGluc3RhbmNlRnJvbS5fX3R5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlRnJvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbmV4dFZlcnNpb24gPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oaW5zdGFuY2VGcm9tLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB2YXIgdXBncmFkZXJJbnN0YW5jZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKGluc3RhbmNlRnJvbS5fX3R5cGVOYW1lLCBuZXh0VmVyc2lvbik7XHJcbiAgICAgICAgICAgIHZhciB1cGdyYWRlZCA9IHVwZ3JhZGVySW5zdGFuY2UuZ2V0VXBncmFkZWRJbnN0YW5jZShpbnN0YW5jZUZyb20pO1xyXG4gICAgICAgICAgICAvLyBWZXJpZmllcyB0aGF0IHZlcnNpb24gaXMgZWZmZWN0aXZlbHkgdXBncmFkZWRcclxuICAgICAgICAgICAgaWYgKHVwZ3JhZGVkLl9fdHlwZVZlcnNpb24gIT0gbmV4dFZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuV3JvbmdWZXJzaW9uSW5VcGdyYWRlZEluc3RhbmNlLCBcIlRoZSBleHBlY3RlZCB2ZXJzaW9uIG9mIHRoZSB1cGdyYWRlZCBpbnN0YW5jZSB3YXMgXCIgKyBuZXh0VmVyc2lvbiArIFwiIHdoaWxlIHdhcyBmb3VuZCB0byBiZSBcIiArIHVwZ3JhZGVySW5zdGFuY2UuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFVwZ3JhZGVyLnVwZ3JhZGUodXBncmFkZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjb21wdXRlTmV4dFZlcnNpb24odHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIC8vIFZlcnNpb24gbXVzdCBiZSBpbiB0aGUgZm9ybSB2TiB3aGVyZSB2IGlzIGEgY29uc3RhbnQgYW5kIE4gaXMgYW4gaW50ZWdlci5cclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCwgXCJTcGVjaWZpZWQgdmVyc2lvbiBcIiArIHR5cGVWZXJzaW9uICsgXCIgaXMgaW4gaW5jb3JyZWN0IGZvcm1hdC4gTXVzdCBiZSBpbiB0aGUgZm9ybSB2PG4+IHdoZXJlIG4gaXMgYW4gaW50ZWdlci5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZlcnNpb24gPSBOdW1iZXIodHlwZVZlcnNpb24uc3Vic3RyKDEpKTtcclxuICAgICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24gKyAxO1xyXG4gICAgICAgICAgICB2YXIgbmV4dFZlcnNpb24gPSBcInZcIiArIHZlcnNpb247XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0VmVyc2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNsYXNzIFR5cGVSZWdpc3RyeSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdHJ5OiB7IFt0eXBlTmFtZTogc3RyaW5nXTogeyBbdHlwZVZlcnNpb246IHN0cmluZ106IG5ldyAoLi4uYXJnczogYW55W10pID0+IElQZXJzaXN0YWJsZSB9IH0gPSB7fTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsYXRlc3RWZXJzaW9uczogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge31cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjb21tb25UeXBlc1JlZ2lzdGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gSVBlcnNpc3RhYmxlKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgaWYgKCF0eXBlUHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkNhbm5vdFJlZ2lzdGVyVW5kZWZpbmVkLCBcInR5cGVQcm90b3R5cGUgc3VwcGxpZWQgZm9yIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIHR5cGVWZXJzaW9uICsgXCIgaXMgbnVsbCBvciB1bmRlZmluZWQhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdID0gdGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gfHwge307XHJcbiAgICAgICAgICAgIHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl0gPSB0eXBlUHJvdG90eXBlO1xyXG5cclxuICAgICAgICAgICAgc1RoaXMudXBkYXRlTGF0ZXN0VmVyc2lvbnModHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gUmVnaXN0ZXJzIHRoZSB0eXBlcyBpbiBWYWx1ZU9iamVjdHMgb24gZmlyc3QgdXNlLi4uIFxyXG4gICAgICAgICAgICAvLyBUT0RPIGZpbmQgYSB3YXkgdG8gZGVsZWdhdGUgdHlwZSByZWdpc3RyYXRpb24gdG8gdGhlIE9iamVjdHMgaW4gdGhlIGNvbGxlY3Rpb24sIFt2aWEgcHNldWRvIHJlZmxlY3Rpb24gP11cIlxyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLmNvbW1vblR5cGVzUmVnaXN0ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuY29tbW9uVHlwZXNSZWdpc3RlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RlclR5cGUoXCJERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZFwiLCBcInYxXCIsIEd1aWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB1cGRhdGVMYXRlc3RWZXJzaW9ucyh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZWZlcmVuY2UgPSBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV07XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5pc1ZlcnNpb25HcmVhdGVyKHR5cGVWZXJzaW9uLCByZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNWZXJzaW9uR3JlYXRlcih2U3ViamVjdDogc3RyaW5nLCB2UmVmZXJlbmNlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICB2YXIgdlM6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZTdWJqZWN0KTtcclxuICAgICAgICAgICAgdmFyIHZSOiBudW1iZXIgPSBzVGhpcy5leHRyYWN0VmVyc2lvbk51bWJlcih2UmVmZXJlbmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZTID4gdlI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBleHRyYWN0VmVyc2lvbk51bWJlcih0eXBlVmVyc2lvbjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbjogc3RyaW5nID0gdHlwZVZlcnNpb24ucmVwbGFjZShcInZcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIHZhciBhc051bWJlciA9IE51bWJlcih2ZXJzaW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFzTnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRUeXBlSW5zdGFuY2U8VCBleHRlbmRzIElQZXJzaXN0YWJsZT4odHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb24/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlVmVyc2lvbiA9IHNUaGlzLmdldExhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl0pIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5vdFJlZ2lzdGVyZWQsIFwiVmVyc2lvbiBcIiArIHR5cGVWZXJzaW9uICsgXCIgb2YgVHlwZSBcIiArIHR5cGVOYW1lICsgXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIFR5cGVSZWdpc3RyeS5cIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRvSW5zdGFudGlhdGUgPSBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV1bdHlwZVZlcnNpb25dO1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4gPSA8VD4obmV3ICg8YW55PnRvSW5zdGFudGlhdGUpKCkpO1xyXG4gICAgICAgICAgICAgICAgLy90b1JldHVybi5fX3R5cGVOYW1lID0gdHlwZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZVZlcnNpb24gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJ1ZSBpZiBzcGVjaWZpZWQgdmVyc2lvbiBpcyB0aGUgbGF0ZXN0IGZvciB0eXBlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgcmV0dXJuIHNUaGlzLmdldExhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lKSA9PT0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaWxsIHJldHVybiB1bmRlZmluZWQgaWYgdGhlIG5vIHZlcnNpb24gdHlwZSBpcyBkZWZpbmVkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgICAgIGlmICghdmVyc2lvblJlLnRlc3QodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOZXh0VmVyc2lvbih0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICAvLyBWZXJzaW9uIG11c3QgYmUgaW4gdGhlIGZvcm0gdk4gd2hlcmUgdiBpcyBhIGNvbnN0YW50IGFuZCBOIGlzIGFuIGludGVnZXIuXHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgICAgIGlmICghc1RoaXMudmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBUaHJvdyB0aGUgY29ycmVjdCBleGNlcHRpb247XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9ycy50aHJvdyhFcnJvcnMuSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCwgXCJTcGVjaWZpZWQgdmVyc2lvbiBcIiArIHR5cGVWZXJzaW9uICsgXCIgaXMgaW4gaW5jb3JyZWN0IGZvcm1hdC4gTXVzdCBiZSBpbiB0aGUgZm9ybSB2PG4+IHdoZXJlIG4gaXMgYW4gaW50ZWdlci5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZlcnNpb24gPSBOdW1iZXIodHlwZVZlcnNpb24uc3Vic3RyKDEpKTtcclxuICAgICAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24gKyAxO1xyXG4gICAgICAgICAgICB2YXIgbmV4dFZlcnNpb24gPSBcInZcIiArIHZlcnNpb247XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0VmVyc2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRG9tYWluRXZlbnQgZXh0ZW5kcyBJUGVyc2lzdGFibGUsIElUeXBlVHJhY2tpbmcge1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50SGFuZGxlciB7XHJcbiAgICAgICAgKGRvbWFpbkV2ZW50OiBJRG9tYWluRXZlbnQpOiB2b2lkO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlciwgc2NvcGU/OiBhbnkpO1xyXG4gICAgICAgIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCk7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lEaXNwYXRjaGVyfSBmcm9tIFwiLi9JRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBEb21haW5EaXNwYXRjaGVyIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBkaXNwYXRjaGVySW1wbGVtZW50YXRpb246IElEaXNwYXRjaGVyO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihkaXNwYXRjaGVyOiBJRGlzcGF0Y2hlcikge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24gPSBkaXNwYXRjaGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyLCBzY29wZT86IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24ucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIsIHNjb3BlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluUHJvY2Vzc0Rpc3BhdGNoZXIge1xyXG4gICAgICAgIHByaXZhdGUgZGVsZWdhdGVzUmVnaXN0cnk6IHsgW2V2ZW50VHlwZU5hbWU6IHN0cmluZ106IElFdmVudEhhbmRsZXJbXSB9ID0ge307XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhlIHNjb3BlIHBhcmFtZXRlciBjYW4gYmUgcGFzc2VkIGluIHRvIHdhcnJhbnR5IHRoYXQgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgaW4gdGhlIG9yaWdpbmFsIGNvbnRleHQgW3RoaXNdISEhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIsIHNjb3BlPzogYW55KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGRzIGFuIGhhbmRsZSBpZiAoYW5kIG9ubHkgaWYpIHRoZSBoYW5kbGVyIGhhcyBub3QgYmVlbiBcInN0YW1wZWRcIlxyXG4gICAgICAgICAgICBpZiAoISg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgICAgICg8YW55PmhhbmRsZXIpLl9fb3JpZ2luYWxTY29wZSA9IHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIEFjdCBvbmx5IGlkIGhhbmRsZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgaWYgKCg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdW2VsZW1lbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoPGFueT5jdXJyZW50RWxlbWVudCkuX19oYW5kbGVySWQgPT09ICg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0uc3BsaWNlKE51bWJlcihlbGVtZW50KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIEVycm9yczogRXJyb3JbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IG9mIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCg8YW55PmVsZW1lbnQpLl9fb3JpZ2luYWxTY29wZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNhbGwoKDxhbnk+ZWxlbWVudCkuX19vcmlnaW5hbFNjb3BlLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChFcnJvcnMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5idWlsZEVycm9yTWVzc2FnZShFcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSBcIkRpc3BhdGNoZXIgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJ1aWxkRXJyb3JNZXNzYWdlKEVycm9yczogRXJyb3JbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IG9mIEVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSBlbGVtZW50Lm5hbWUgKyBcIjpcIiArIGVsZW1lbnQubWVzc2FnZSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRXF1YXRhYmxlfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlXCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuXHRpbXBvcnQgSUVxdWF0YWJsZSA9IENvbW1vbkludGVyZmFjZXMuSUVxdWF0YWJsZTtcclxuXHRpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIElFbnRpdHk8VCwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4gZXh0ZW5kcyBJRXF1YXRhYmxlPFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cdFx0Z2V0S2V5KCk6IFRLZXk7XHJcblx0XHRzZXRLZXkoa2V5OiBUS2V5KTogdm9pZDtcclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUtleVZhbHVlT2JqZWN0PFQ+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VD5cclxuICAgICAgICBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXJpdmVkIGNsYXNzZXMgbXVzdCByZWltcGxlbWVudCB0aGlzIG1ldGhvZC4gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4vSUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzZXMgYW5kIGludGVyZmFjZXMgdG8gaW1wbGVtZW50IGFuIEVudGl0eSwgYSBwZXJzaXN0YWJsZSBvYmplY3QuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5cdGltcG9ydCBCYXNlUGVyc2lzdGFibGVPYmplY3QgPSBQZXJzaXN0YWJsZU9iamVjdC5CYXNlUGVyc2lzdGFibGVPYmplY3Q7XHJcblx0aW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcblx0aW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbnRpdHk8VCBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcblx0XHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdFx0aW1wbGVtZW50cyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcblx0XHRwcml2YXRlIGtleTogVEtleTtcclxuXHJcblx0XHRwcm90ZWN0ZWQgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcblx0XHRcdERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5rZXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBzZXRLZXkoa2V5OiBUS2V5KTogdm9pZCB7XHJcblx0XHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0fTtcclxuXHJcblx0XHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdFx0aWYgKCFpdGVtKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBpdGVtLmdldEtleSgpLmVxdWFscyh0aGlzLmdldEtleSgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUVudGl0eS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0lFbnRpdHlcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5BZ2dyZWdhdGUge1xyXG5cclxuICAgICAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgICAgICBpbXBvcnQgSUVudGl0eSA9IEVudGl0eS5JRW50aXR5O1xyXG5cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElBZ2dyZWdhdGVSb290PFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICAgICAgICAgIGV4dGVuZHMgSUVudGl0eTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXJcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFJldmlzaW9uSWQoKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBwZXJmZWN0bHlNYXRjaChhbm90aGVyOiBJQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW47XHJcbiAgICAgICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0Jhc2VFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9CYXNlRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9JRW50aXR5XCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyB0aGUgQWdncmVnYXRlIFBhdHRlcm4gYnkgZGVmaW5pbmcgaW50ZXJmYWNlcyBhbmQgYmFzZSBiZWhhdmlvciBmb3IgYW4gQWdncmVnYXRlUm9vdC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5BZ2dyZWdhdGUge1xyXG5cclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBFbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBJRW50aXR5ID0gRW50aXR5LklFbnRpdHk7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgYmVoYXZpb3Igb2YgYW4gQWdncmVnYXRlUm9vdCwgd2hpY2ggaXMgYmFzaWNhbGx5IGFuIGVudGl0eS4uLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFnZ3JlZ2F0ZVJvb3Q8XHJcbiAgICAgICAgVCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgICAgICA+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlRW50aXR5PFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgSUVudGl0eTxULCBUS2V5PlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgX19yZXZpc2lvbklkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JldmlzaW9uSWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW5jcmVtZW50UmV2aXNpb25JZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldmlzaW9uSWQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBhcmVzIGFuIGFnZ3JlZ2F0ZSB3aXRoIGFub3RoZXIuIFJldHVybnMgdHJ1ZSBpZiBhZ2dyZWdhdGUncyBkYXRhIGFyZSBleGFjdGx5IGVxdWFsLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwZXJmZWN0bHlNYXRjaChvdGhlcjogQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3RoZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNPbmUgPSB0aGlzLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHZhciB0aGVPdGhlciA9IG90aGVyLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkbyB0aGUgY29tcGFyaXNvbiBqdXN0IGxpa2UgdmFsdWUgb2JqZWN0cy4uLiBuYWl2ZSBidXQgZnVuY3Rpb25hbCBhdCB0aGlzIHRpbWUuXHJcbiAgICAgICAgICAgIHZhciBjb21wYXJpc29uID0gXy5pc0VxdWFsKHRoaXNPbmUsIHRoZU90aGVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgZXhwb3J0IHZhciBQcm9taXNlSGFuZGxlcjogbmcuSVFTZXJ2aWNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBJUHJvbWlzZSA9IG5nLklQcm9taXNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBEZWZlcnJlZCA9IG5nLklEZWZlcnJlZDtcclxuIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNvZGUgZm9yY2VzIERERFRvb2xzIHRvIHVzZSAkcSBwcm9taXNlcyBpZiBhbmd1bGFyIGlzIGRlZmluZWQgYXQgdGhlIG1vbWVudCBkZGQtdG9vbHMgaXMgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGlmICh0eXBlb2YgYW5ndWxhciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHZhciAkaW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnXSk7XHJcbiAgICAgICAgdmFyICRxID0gJGluamVjdG9yLmdldChcIiRxXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFByb21pc2VIYW5kbGVyID0gJHE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChRKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhpcyBjYXN0IGlzIGVmZmVjdGl2ZWx5IGEgcmlzayEgSG93IHRvIG1hbmFnZSBpdCBjb3JyZWN0bHkgPyBcclxuICAgICAgICAgICAgUHJvbWlzZUhhbmRsZXIgPSA8bmcuSVFTZXJ2aWNlPig8YW55PlEpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgZGlkbid0IGZpbmQgYSBzdWl0YWJsZSBQcm9taXNlSGFuZGxlclxyXG4gICAgaWYgKFByb21pc2VIYW5kbGVyID09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiQSBQcm9taXNlIEhhbmRsZXIgbXVzdCBiZSBkZWZpbmVkLCBzdXBwb3J0ZWQgYXJlIGFuZ3VsYXIncyAkcSBvciBrcmlzIGtvd2FsJ3MgUS4gVGhpcyBtZWFucyB0aGF0IFEgb3IgYW5ndWxhciBNVVNUIGJlIGxvYWRlZCBiZWZvcmUgZGRkLXRvb2xzLmpzXCIpO1xyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgUmVwb3NpdG9yeSB0byBwZXJzaXN0IEFnZ3JlZ2F0ZXMuIENvbnRhaW5zIGEgcmVmZXJlbmNlIGluIG1lbW9yeSByZXBvc2l0b3J5LlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVJlcG9zaXRvcnk8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgcmVwb3NpdG9yeSBnaXZlbiBpdHMgaWQuIEl0IGdpdmVzIGJhY2sgYSBmdWxseSByY29uc3RpdHV0ZWQgQWdncmVnYXRlIFJvb3QsIHNvIHRoYXQgIHdpbGwgYmUgcG9zc2libGUgdG8gY2FsbCBhbnkgcHVibGljIG1ldGhvZC5cclxuICAgICAgICAgKiBmaXJlcyBJdGVtUmV0cmlldmVkIGV2ZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IFQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlcGxhY2VzIGFuIGl0ZW0uIEp1c3QgbGlrZSBzYXZlLCBidXQgaXQgZG9lc24ndCBpbmNyZW1lbnQgdGhlIHJldmlzaW9uSWQgYW5kIGtlZXAgdGhlIG9uZSBzdG9yZWQgaW4gdGhlIEFnZ3JlZ2F0ZVJvb3RcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlbGV0ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZUFjdGlvbiB3aWxsIGJlIHBhc3NlZCB0byByZXBvc2l0b3JpZXMgc2F2ZUltcGxlbWVudGF0aW9uIHNvIHRoYXQgY2xpZW50IGNhbiB0YWtlIGRlY2lzaW9ucyBvbiB3aGF0IHRvIGRvIHdoZW4gYWRkaW5nIG9yIHJlcGxhY2luZyBhbiBpdGVtIGlmIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGVudW0gU2F2ZUFjdGlvbkVudW0ge1xyXG4gICAgICAgIEFkZCxcclxuICAgICAgICBVcGRhdGVcclxuICAgIH07XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFJlcG9zaXRvcnkgdG8gcGVyc2lzdCBBZ2dyZWdhdGVzLiBDb250YWlucyBhIHJlZmVyZW5jZSBpbiBtZW1vcnkgcmVwb3NpdG9yeS5cclxuICovXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSByZXBvc2l0b3J5IGdpdmVuIGl0cyBpZC4gSXQgZ2l2ZXMgYmFjayBhIGZ1bGx5IHJjb25zdGl0dXRlZCBBZ2dyZWdhdGUgUm9vdCwgc28gdGhhdCAgd2lsbCBiZSBwb3NzaWJsZSB0byBjYWxsIGFueSBwdWJsaWMgbWV0aG9kLlxyXG4gICAgICAgICAqIGZpcmVzIEl0ZW1SZXRyaWV2ZWQgZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogSVByb21pc2U8VD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXBsYWNlcyBhbiBpdGVtLiBKdXN0IGxpa2Ugc2F2ZSwgYnV0IGl0IGRvZXNuJ3QgaW5jcmVtZW50IHRoZSByZXZpc2lvbklkIGFuZCBrZWVwIHRoZSBvbmUgc3RvcmVkIGluIHRoZSBBZ2dyZWdhdGVSb290XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWxldGVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcbiBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEtleU5vdFNldCA9IFwiS2V5IG5vdCBzZXRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1Ob3RGb3VuZCA9IFwiSXRlbSBOb3QgRm91bmRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yU2F2aW5nSXRlbSA9IFwiRXJyb3IgU2F2aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yUmVhZGluZ0l0ZW0gPSBcIkVycm9yIFJlYWRpbmcgSXRlbVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JEZWxldGluZ0l0ZW0gPSBcIkVycm9yIERlbGV0aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFdyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiA9IFwiV3JvbmcgdHlwZSBmcm9tIEltcGxlbWVudGF0aW9uXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBNYW5hZ2VkVHlwZU5vdFN1cHBsaWVkID0gXCJSZXBvc2l0b3J5IG5lZWRzIHRvIGtub3cgd2hhdCB0eXBlIGl0IGNhbiBtYW5hZ2VcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEludmFsaWRLZXkgPSBcIkludmFsaWQgS2V5XCI7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RhdGljIGNvbnRhaW5lciBvZiBldmVudCBcIl9fdHlwZU5hbWVcInNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlJlcG9zaXRvcnlcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1BZGRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbUFkZGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1VcGRhdGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtRGVsZXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVJlcGxhY2VkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtUmVwbGFjZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVJldHJpZXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcG9zaXRvcnlFdmVudDxURXZlbnQsVEFnZ3JlZ2F0ZT4gZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIGFnZ3JlZ2F0ZSBpbnN0YW5jZSBhZnRlciB0aGUgYWN0aW9uIGhhcyBiZWVuIHBlcmZvcm1lZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBpdGVtOiBUQWdncmVnYXRlLFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIElkIG9mIHRoZSByZXBvc2l0b3J5IHBlcmZvcm1pbmcgdGhlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVibGljIHJlcG9zaXRvcnlJZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1BZGRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtQWRkZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbUFkZGVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtRGVsZXRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtRGVsZXRlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtRGVsZXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbVJldHJpZXZlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtUmV0cmlldmVkRXZlbnQ8VEFnZ3JlZ2F0ZT4sIFRBZ2dyZWdhdGU+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1SZXRyaWV2ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtVXBkYXRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtVXBkYXRlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtVXBkYXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1SZXBsYWNlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtUmVwbGFjZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVJlcGxhY2VkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NhdmVBY3Rpb25FbnVtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1SZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1BZGRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbVVwZGF0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1EZWxldGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4vSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgc3RyaW5nIHRvIGRpbmV0aWZ5IHRoZSByZXBvc2l0b3J5LiBVc2VmdWwgaW4gc2NlbmFyaW9zIHdoZXJlIHRoZSBzYW1lIEFnZ3JlZ2F0ZVJvb3QgbWlnaHQgYmUgc2F2ZWQgaW4gZGlmZmVyZW50IGxvY2F0aW9ucy4gXHJcbiAgICAgICAgICAgICAqIEV2ZW50cyBtdXN0IGRpc2Nlcm4gd2hhdCBsb2NhdGlvbiB0aGUgaXRlbSB3YXMgc2F2ZWQvcmV0cmlldmVkL2RlbGV0ZSB0by9mcm9tL2Zyb20uIEl0IGRlZmF1bHRzIHRvIHRoZSBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeUlkPzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXBvc2l0b3J5SWQpIHRoaXMucmVwb3NpdG9yeUlkID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgZnVuY3Rpb25hbGl0eSB0byBhY2Nlc3MgdG8gdGhlIHJlcG9zaXRvcnkgYW5kIGdldCBhbiBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aHJvdyBcIkl0ZW1Ob3RGb3VuZFwiIGlmIG5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGlkIHdhcyBmb3VuZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVR5cGVUcmFja2luZztcclxuXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IFQge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJldHJpZXZlZCA9IHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXRyaWV2ZWQuX190eXBlTmFtZSAhPT0gdGhpcy5tYW5hZ2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZSBcIiArIHJldHJpZXZlZC5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUocmV0cmlldmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50PFQ+KHRvUmV0dXJuLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogdm9pZDtcclxuXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdvcmtzIGp1c3QgbGlrZSBzYXZlLCBidXQgaXQgbmV2ZXIgaW5jcmVtZW50cyBSZXZpc2lvbklkLCBpdCB0cnVzdHMgdGhlIG9uZSBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGFnZ3JlZ2F0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlT3JSZXBsYWNlKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlT3JSZXBsYWNlKGl0ZW06IFQsIHJlcGxhY2VPbmx5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50PFQ+IHwgSXRlbUFkZGVkRXZlbnQ8VD47XHJcbiAgICAgICAgICAgIHZhciBhc0l0V2FzOiBUID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHNob3VsZEluY3JlbWVudFJldmlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtO1xyXG5cclxuICAgICAgICAgICAgc2F2ZUFjdGlvbiA9IFNhdmVBY3Rpb25FbnVtLlVwZGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkIGlmIHRoZSBkbyBub3QgZXhpc3RzIGluIHRoZSBSZXBvLlxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFjdGlvbiA9IFNhdmVBY3Rpb25FbnVtLkFkZDtcclxuICAgICAgICAgICAgICAgIHNob3VsZEluY3JlbWVudFJldmlzaW9uID0gZmFsc2U7IC8vIGJlY2F1c2UgdGhlIGl0ZW0gd2FzIG5vdCBpbiB0aGUgcmVwbyFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2F2ZSBvY2N1ciBvbmx5IGlmIHN0b3JlZCBpdGVtIGFuZCBzYXZlZCBpdGVtIGFyZSBkaWZmZXJlbnQgc29tZWhvdy5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLnBlcmZlY3RseU1hdGNoKGFzSXRXYXMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2VPbmx5ICYmIHNob3VsZEluY3JlbWVudFJldmlzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVJlcGxhY2VkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVVwZGF0ZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmluYWxseSBzYXZlcyBhZ2dyZWdhdGUgaW50byB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0sIHNhdmVBY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGlkKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaXRlbSBub3QgZm91bmQsIHNvIG5vdGhpbmcgdG8gZGVsZXRlIVxyXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGFzSXRXYXMsIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TYXZlQWN0aW9uRW51bS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtUmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtQWRkZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1VcGRhdGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtRGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuXHJcblxyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIHN0cmluZyB0byBkaW5ldGlmeSB0aGUgcmVwb3NpdG9yeS4gVXNlZnVsIGluIHNjZW5hcmlvcyB3aGVyZSB0aGUgc2FtZSBBZ2dyZWdhdGVSb290IG1pZ2h0IGJlIHNhdmVkIGluIGRpZmZlcmVudCBsb2NhdGlvbnMuIFxyXG4gICAgICAgICAgICAgKiBFdmVudHMgbXVzdCBkaXNjZXJuIHdoYXQgbG9jYXRpb24gdGhlIGl0ZW0gd2FzIHNhdmVkL3JldHJpZXZlZC9kZWxldGUgdG8vZnJvbS9mcm9tLiBJdCBkZWZhdWx0cyB0byB0aGUgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnlJZD86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIgfHwgbWFuYWdlZFR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLk1hbmFnZWRUeXBlTm90U3VwcGxpZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlcG9zaXRvcnlJZCkgdGhpcy5yZXBvc2l0b3J5SWQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGEgXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz47XHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPFQ+KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCwgXCJpZCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgIT0gdGhpcy5tYW5hZ2VkVHlwZSAmJiAhKHRoaXMubWFuYWdlZFR5cGUgPT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmVkIFwiICsgdmFsdWUuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSA8VD4oRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtUmV0cmlldmVkRXZlbnQodG9SZXR1cm4sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0b1JldHVybik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJzYXZlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLiBUaGUgdGVtcGxhdGUgbWV0aG9kIFwic2F2ZVwiIHdpbGwgbWFuYWdlIHRoZSByZXZpc2lvbklkIGxvZ2ljLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCwgc2F2ZUFjdGlvbjogU2F2ZUFjdGlvbkVudW0pOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIHByaXZhdGUgZG9TYXZlKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0IHRoYXQgd2lsbCBiZSBzYXZlZDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlSW1wbGVtZW50YXRpb24oaXRlbSwgc2F2ZUFjdGlvbikudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclNhdmluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2F2ZU9yUmVwbGFjZShpdGVtOiBULCByZXBsYWNlT25seTogYm9vbGVhbiA9IGZhbHNlKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgICAgIHZhciBldmVudDogSXRlbVVwZGF0ZWRFdmVudDxUPiB8IEl0ZW1BZGRlZEV2ZW50PFQ+O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLmdldEtleSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWQoaXRlbS5nZXRLZXkoKSkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZWFkVmFsdWU6IFQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0IHNvIHdlIGhhdmUgdG8gY29tcGFyZSBpdCB3aXRoIHdoYXQgd2UgYXJlIHNhdmluZy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2gocmVhZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgcmV2aXNpb24gb25seSBpZiB3ZSBhcmUgbm90IHJlcGxhY2luZyBhbiBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVwbGFjZU9ubHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVVwZGF0ZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgU2F2ZUFjdGlvbkVudW0uVXBkYXRlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1SZXBsYWNlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclJlYWRpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGF0IGlzIGluIHRoZSBkYXRhYmFzZSBwZXJmZWN0bHkgbWF0Y2ggd2hhdCB3ZSBhcmUgc2F2aW5nLCBzbyBub3RoaW5nIHRvIGRvIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZWN0ZWQsIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgcmVwbywgc28gd2UgaGF2ZSB0byBhZGQgaXQhXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU2F2ZShpdGVtLCBTYXZlQWN0aW9uRW51bS5BZGQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3JzIG11c3QgYmUgdHJlYXRlZCBhcyAuLi4gXCJFcnJvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPHt9PigpO1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1EZWxldGVkRXZlbnQ8VD47XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZChpZCkudGhlbihcclxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1EZWxldGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYnVpbGQgYW4gZXJyb3IgZnJvbSBhIHJldHVybiB2YWx1ZSBvZiB0aGUgQXN5bmMgSW1wbGVtZW50YXRpb25zLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgYnVpbGRFcnJvcihlcnJvckZyb21DYWxsOiBhbnksIGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvcjogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgICAgICB2YXIgcmVhc29uOiBFcnJvcjtcclxuICAgICAgICAgICAgaWYgKGVycm9yRnJvbUNhbGwgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID0gZXJyb3JGcm9tQ2FsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvciwgSlNPTi5zdHJpbmdpZnkoZXJyb3JGcm9tQ2FsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWFzb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VSZXBvc2l0b3J5fSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBGYWN0b3J5ID0gUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5NZW1vcnlSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IElQZXJzaXN0YWJsZSB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihtYW5hZ2VkVHlwZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihtYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpcy5zdG9yYWdlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUPnRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1Byb21pc2VIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VSZXBvc2l0b3J5QXN5bmMgPSBSZXBvc2l0b3J5LkJhc2VSZXBvc2l0b3J5QXN5bmM7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IERlc2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uRGVzZXJpYWxpemVyO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IobWFuYWdlZFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihtYW5hZ2VkVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEJ5SWRTeW5jKGlkOiBUS2V5KSB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSW52YWxpZEtleSwgXCJpZCBjYW5ub3QgYmUgbnVsbCBub3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPElUeXBlVHJhY2tpbmc+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRCeUlkU3luYyhpZCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlU3luYyhpdGVtOiBUKToge30ge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZ2V0S2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VbaXRlbS5nZXRLZXkoKS50b1N0cmluZygpXSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkVycm9yU2F2aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTeW5jKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBkZWxldGVTeW5jKGlkOiBUS2V5KToge30ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTeW5jKGlkKVxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgVW5pdE9mV29yay4gQSBVbml0T2ZXb3JrIGtlZXBzIHRyYWNrIG9mIGNoYW5nZXMgb24gdGhlIEFnZ3JlZ2F0ZXMgbG9hZGVkIGZyb20gdGhlIHVuZGVybHlpbmcgcmVwb3NpdG9yeSBhbmQgYWxsb3dzIHRvIHNhdmUgdGhlbSBhbGwgaW4gYSBzaW5nbGUgY2FsbC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgVW5pdE9mV29yayBmb3IgYSBzaW5nbGUgUmVwb3NpdG9yeS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVW5pdE9mV29yazxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgUmVwb3NpdG9yeSBvciBmcm9tIHRoZSBVbml0T2ZXb3JrLCBnaXZlbiBpdHMgSWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChrZXk6IFRLZXkpOiBUO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlQnlJZChrZXk6IFRLZXkpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbGwgdGhlIG1vZGlmaWVkIGl0ZW1zIGluIHRoZSBVbml0T2ZXb3JrLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmVBbGwoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWxsb3dzIHRvIHJlZ2lzdGVyIGFuIGhhbmRsZXIgZm9yIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIFVuaXRPZldvcmtcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbGxvd3MgdG8gdW5yZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkO1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFVuaXRPZldvcmtFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1NYXJrZWRBc0RlbGV0ZWQgPSBcIlRoaXMgaXRlbSB3YXMgbWFya2VkIGFzIGRlbGV0ZWQgaW4gdGhpcyBVbml0T2ZXb3JrLCBhbmQgY2Fubm90IGJlIHJldHJpZXZlZC5cIjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RhdGljIGNvbnRhaW5lciBvZiBldmVudCBcIl9fdHlwZU5hbWVcInNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlVuaXRPZldvcmtcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdFNhdmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RTYXZlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmplY3REZWxldGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3REZWxldGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdFJldHJpZXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9iamVjdERlbGV0ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3REZWxldGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0UmV0cmlldmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0UmV0cmlldmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFJldHJpZXZlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0U2F2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3RTYXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIEl0ZW1TdGF0dXMge1xyXG4gICAgICAgIE5ldyxcclxuICAgICAgICBNb2RpZmllZCxcclxuICAgICAgICBTYXZlZCxcclxuICAgICAgICBEZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjbGFzcyB0byBzdG9yZSBpdGVtIHN0YXR1cyBpbmZvXHJcbiAgICAgKi9cclxuICAgIGNsYXNzIFRyYWNrZWRJdGVtPFxyXG4gICAgICAgIFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPiB7XHJcbiAgICAgICAgLy8gV2lsbCBjb250YWluIGEgc2VyaWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBvYmplY3QgYXMgaXQgd2FzIHdoZW4gaXQgd2FzIGxvYWRlZCBmcm9tIHRoZSByZXBvc2l0b3J5LlxyXG5cclxuICAgICAgICBwcml2YXRlIGFzTG9hZGVkOiBJUGVyc2lzdGFibGUgLy8gV2lsbCBjb250YWluIHRoZSBzdGF0ZSBvZiB0aGUgb2JqZWN0IHdoZW4gZmlyc3QgYWRkZWQgb3IgdXBkYXRlZFxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBzdGF0dXM6IEl0ZW1TdGF0dXMsXHJcbiAgICAgICAgICAgIHByaXZhdGUgaXRlbTogVCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBrZXk6IFRLZXlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5hc0xvYWRlZCA9IGl0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNOZXcoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5OZXc7XHJcbiAgICAgICAgICAgIHRoaXMuYXNMb2FkZWQgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNTYXZlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLlNhdmVkO1xyXG4gICAgICAgICAgICB0aGlzLmFzTG9hZGVkID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5Nb2RpZmllZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNEZWxldGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuRGVsZXRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0dXMoKTogSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJdGVtKCk6IFQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEtleSgpOiBUS2V5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGhhc0NoYW5nZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFN0YXRlKTtcclxuICAgICAgICAgICAgdmFyIGFzTG9hZGVkQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmFzTG9hZGVkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGVBc1N0cmluZyAhPT0gYXNMb2FkZWRBc1N0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiBhbiBpdGVtIGluIFwiU2F2ZWRcIiBzdGF0dXMgaGFzIGJlZW4gbW9kaWZpZWQsIGFuZCBjaGFuZ2VzIHRoZSBzdGF0dXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBJdGVtU3RhdHVzLlNhdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtBc01vZGlmaWVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJZGVudGl0eU1hcFxyXG4gICAgICAgIDxcclxuICAgICAgICBUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID5cclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogVHJhY2tlZEl0ZW08VCwgVEtleT4gfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYga2V5IGlzIGFscmVhZHkgc3RvcmVkIGluIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1RyYWNrZWQoa2V5OiBUS2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRCeUlkKGtleTogVEtleSk6IFQge1xyXG4gICAgICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRUb09iamVjdE1hcFtpZEFzU3RyaW5nXS5nZXRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIG9yIHJlcGxhY2VzIGFuIGl0ZW0gdG8gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGQoa2V5OiBUS2V5LCBpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdJdGVtID0gbmV3IFRyYWNrZWRJdGVtKEl0ZW1TdGF0dXMuTmV3LCBpdGVtLCBrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10gPSBuZXdJdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlKGtleTogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJZHMoKTogVEtleVtdIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2godGhpcy5pZFRvT2JqZWN0TWFwW2VsZW1lbnRdLmdldEtleSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzRGVsZXRlZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzRGVsZXRlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc1NhdmVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNTYXZlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc01vZGlmaWVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNNb2RpZmllZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEl0ZW1TdGF0dXMoa2V5OiBUS2V5KTogSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2tlZEl0ZW0uZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wdXRlcyB0aGUgY29ycmVjdCBzdGF0dXMgZm9yIGFuIGl0ZW0gaW4gXCJTYXZlZFwiIHN0YXR1cywgYXMgaXQgbWF5IGhhdmUgYmVlbiBtb2RpZmllZCBzaW5jZSBub3cgKGhlcmUgd2UgZG9uJ3QgaGF2ZSBwcm9wZXJ0eSB0cmFja2luZykuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlU2F2ZWRJdGVtU3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFRyYWNrZWRJdGVtKGtleTogVEtleSk6IFRyYWNrZWRJdGVtPFQsIFRLZXk+IHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gdGhpcy5pZFRvT2JqZWN0TWFwW2tleS50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgaWYgKCF0b1JldHVybikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSWRlbnRpdHlNYXAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3REZWxldGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3RSZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL09iamVjdFNhdmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Vbml0T2ZXb3JrRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG4vLyBpbXBvcnQge0luUHJvY2Vzc0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtJZGVudGl0eU1hcCwgSXRlbVN0YXR1c30gZnJvbSBcIi4vSWRlbnRpdHlNYXBcIjtcclxuLy8gaW1wb3J0IHtPYmplY3REZWxldGVkRXZlbnR9IGZyb20gXCIuL09iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFNhdmVkRXZlbnR9IGZyb20gXCIuL09iamVjdFNhdmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrRXJyb3JzfSBmcm9tIFwiLi9Vbml0T2ZXb3JrRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnkuSVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBJblByb2Nlc3NEaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkluUHJvY2Vzc0Rpc3BhdGNoZXI7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgVW5pdE9mV29yayBmb3IgYSBzaW5nbGUgUmVwb3NpdG9yeS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFVuaXRPZldvcms8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaWRNYXA6IElkZW50aXR5TWFwPFQsIFRLZXk+O1xyXG4gICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeTogSVJlcG9zaXRvcnk8VCwgVEtleT47XHJcbiAgICAgICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBJblByb2Nlc3NEaXNwYXRjaGVyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihyZXBvc2l0b3J5OiBJUmVwb3NpdG9yeTxULCBUS2V5Pikge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwID0gbmV3IElkZW50aXR5TWFwPFQsIFRLZXk+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBSZXBvc2l0b3J5IG9yIGZyb20gdGhlIFVuaXRPZldvcmssIGdpdmVuIGl0cyBJZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5nZXRJdGVtU3RhdHVzKGtleSkgPT09IEl0ZW1TdGF0dXMuRGVsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRPZldvcmtFcnJvcnMudGhyb3coVW5pdE9mV29ya0Vycm9ycy5JdGVtTWFya2VkQXNEZWxldGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gdGhpcy5yZXBvc2l0b3J5LmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5hZGQoa2V5LCB0b1JldHVybik7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzU2F2ZWRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0cmlldmVkRXZlbnQgPSBuZXcgT2JqZWN0UmV0cmlldmVkRXZlbnQodG9SZXR1cm4uX190eXBlTmFtZSwgdG9SZXR1cm4uX190eXBlVmVyc2lvbiwgdG9SZXR1cm4uZ2V0S2V5KCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChyZXRyaWV2ZWRFdmVudCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzRGVsZXRlZEJ5SWQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNhdmVBbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5pZE1hcC5nZXRJZHMoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IG9mIGtleXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTWFwLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLkRlbGV0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0RlbGV0ZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5Nb2RpZmllZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTmV3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NOZXdPck1vZGlmaWVkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuU2F2ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcHJvY2Vzc0RlbGV0ZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZGVsZXRlZEV2ZW50ID0gbmV3IE9iamVjdERlbGV0ZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwga2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlRXZlbnQoZGVsZXRlZEV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkuc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgLy8gcmFpc2VzIGFuIGV2ZW50IGZvciB3aG9tZXZlciBpcyBpbnRlcmVzdGVkXHJcbiAgICAgICAgICAgIHZhciBzYXZlZEV2ZW50ID0gbmV3IE9iamVjdFNhdmVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGtleS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KHNhdmVkRXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBvYmplY3QgZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHJlbW92ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTWFwLnJlbW92ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==