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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9RdWVyeS9JUXVlcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVEYXRlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlUmVnRXhwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlTnVsbC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1RvdWNoLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUVudGl0eS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9Qcm9taXNlSGFuZGxlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvU2F2ZUFjdGlvbkVudW0udHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1BZGRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbURlbGV0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1SZXRyaWV2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1VcGRhdGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtUmVwbGFjZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvSVVuaXRPZldvcmsudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0UmV0cmlldmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvSWRlbnRpdHlNYXAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsSUFBVSxRQUFRLENBY2pCO0FBZEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxlQUFlLENBY2pDO0lBZGtCLFdBQUEsZUFBZSxFQUFDLENBQUM7UUFDaEM7WUFBQTtZQVlBLENBQUM7WUFWVSxnQkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE9BQWdCO2dCQUN2QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLEdBQUcsQ0FBQztZQUNkLENBQUM7WUFFTSwyQkFBZ0IsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLE9BQWdCO2dCQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2YsQ0FBQztZQUNMLGlCQUFDO1FBQUQsQ0FBQyxBQVpELElBWUM7UUFacUIsMEJBQVUsYUFZL0IsQ0FBQTtJQUNMLENBQUMsRUFka0IsZUFBZSxHQUFmLHdCQUFlLEtBQWYsd0JBQWUsUUFjakM7QUFBRCxDQUFDLEVBZFMsUUFBUSxLQUFSLFFBQVEsUUFjakI7QUdkRCxJQUFVLFFBQVEsQ0F5QmpCO0FBekJELFdBQVUsUUFBUTtJQUFDLElBQUEsS0FBSyxDQXlCdkI7SUF6QmtCLFdBQUEsS0FBSyxFQUFDLENBQUM7UUFFekI7WUFBQTtZQXNCQSxDQUFDO1lBcEJlLGtCQUFPLEdBQXRCLFVBQXVCLElBQVk7Z0JBQ2xDLElBQUksVUFBVSxHQUFXLElBQUksTUFBTSxDQUFDLHNFQUFzRSxDQUFDLENBQUM7Z0JBQzVHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFFYyxhQUFFLEdBQWpCO2dCQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztxQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztxQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsQ0FBQztZQUVhLG1CQUFRLEdBQXRCO2dCQUNDLElBQUksYUFBYSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHO29CQUNoSCxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQztnQkFFbkYsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFBO1lBQ3pFLENBQUM7WUFDRixpQkFBQztRQUFELENBQUMsQUF0QkQsSUFzQkM7UUF0QlksZ0JBQVUsYUFzQnRCLENBQUE7SUFDRixDQUFDLEVBekJrQixLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUF5QnZCO0FBQUQsQ0FBQyxFQXpCUyxRQUFRLEtBQVIsUUFBUSxRQXlCakI7QUM1QkQsSUFBVSxRQUFRLENBMkNqQjtBQTNDRCxXQUFVLFFBQVE7SUFBQyxJQUFBLEtBQUssQ0EyQ3ZCO0lBM0NrQixXQUFBLEtBQUssRUFBQyxDQUFDO1FBRXRCO1lBSUk7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDNUIsQ0FBQztZQUVNLHFDQUFTLEdBQWhCLFVBQWlCLEVBQVU7Z0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVNLG1DQUFPLEdBQWQsVUFBZSxFQUFVO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRU0sK0JBQUcsR0FBVixVQUFXLEVBQVUsRUFBRSxNQUFXO2dCQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUNwQyxDQUFDO1lBS00sa0NBQU0sR0FBYjtnQkFDSSxJQUFJLFFBQVEsR0FBYSxFQUFFLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQztZQUVNLHNDQUFVLEdBQWpCLFVBQWtCLEVBQVU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBQ0wsd0JBQUM7UUFBRCxDQUFDLEFBeENELElBd0NDO1FBeENZLHVCQUFpQixvQkF3QzdCLENBQUE7SUFDTCxDQUFDLEVBM0NrQixLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUEyQ3ZCO0FBQUQsQ0FBQyxFQTNDUyxRQUFRLEtBQVIsUUFBUSxRQTJDakI7QUd2Q0QsSUFBVSxRQUFRLENBcUJqQjtBQXJCRCxXQUFVLFFBQVE7SUFBQyxJQUFBLGFBQWEsQ0FxQi9CO0lBckJrQixXQUFBLGFBQWEsRUFBQyxDQUFDO1FBSTlCO1lBS0ksMEJBQVksSUFBVTtnQkFKdEIsZUFBVSxHQUFXLGtCQUFrQixDQUFDO2dCQUN4QyxrQkFBYSxHQUFXLElBQUksQ0FBQztnQkFJekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0MsQ0FBQztZQUVhLGtDQUFpQixHQUEvQixVQUFnQyxZQUFvQjtnQkFDaEQsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFFRCxrQ0FBTyxHQUFQO2dCQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUNMLHVCQUFDO1FBQUQsQ0FBQyxBQWhCRCxJQWdCQztRQWhCWSw4QkFBZ0IsbUJBZ0I1QixDQUFBO0lBQ0wsQ0FBQyxFQXJCa0IsYUFBYSxHQUFiLHNCQUFhLEtBQWIsc0JBQWEsUUFxQi9CO0FBQUQsQ0FBQyxFQXJCUyxRQUFRLEtBQVIsUUFBUSxRQXFCakI7QUNyQkQsSUFBVSxRQUFRLENBMkRqQjtBQTNERCxXQUFVLFFBQVE7SUFBQyxJQUFBLGFBQWEsQ0EyRC9CO0lBM0RrQixXQUFBLGFBQWEsRUFBQyxDQUFDO1FBSTlCO1lBTUksNEJBQVksTUFBYztnQkFMMUIsZUFBVSxHQUFXLG9CQUFvQixDQUFDO2dCQUMxQyxrQkFBYSxHQUFXLElBQUksQ0FBQztnQkFLekIsSUFBSSxDQUFDLG1CQUFtQixDQUFFLE1BQU0sQ0FBRSxDQUFDO1lBQ3ZDLENBQUM7WUFFTyxnREFBbUIsR0FBM0IsVUFBNkIsTUFBYztnQkFFdkMsSUFBSSxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQztnQkFHN0MsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRzFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUd6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFHbEUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRXpELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUdsQyxDQUFDO1lBR2EsOENBQTJCLEdBQXpDLFVBQTBDLGlCQUF5QixFQUFFLEtBQWE7Z0JBQzlFLElBQUksUUFBZ0IsQ0FBQztnQkFJckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDUixRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUVwQixDQUFDO1lBS00sc0NBQVMsR0FBaEI7Z0JBQ0ksTUFBTSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEcsQ0FBQztZQUNMLHlCQUFDO1FBQUQsQ0FBQyxBQXRERCxJQXNEQztRQXREWSxnQ0FBa0IscUJBc0Q5QixDQUFBO0lBQ0wsQ0FBQyxFQTNEa0IsYUFBYSxHQUFiLHNCQUFhLEtBQWIsc0JBQWEsUUEyRC9CO0FBQUQsQ0FBQyxFQTNEUyxRQUFRLEtBQVIsUUFBUSxRQTJEakI7QUMzREQsSUFBVSxRQUFRLENBU2pCO0FBVEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxhQUFhLENBUy9CO0lBVGtCLFdBQUEsYUFBYSxFQUFDLENBQUM7UUFJOUI7WUFBQTtnQkFDSSxlQUFVLEdBQVcsa0JBQWtCLENBQUM7Z0JBQ3hDLGtCQUFhLEdBQVcsSUFBSSxDQUFDO1lBRWpDLENBQUM7WUFBRCx1QkFBQztRQUFELENBQUMsQUFKRCxJQUlDO1FBSlksOEJBQWdCLG1CQUk1QixDQUFBO0lBQ0wsQ0FBQyxFQVRrQixhQUFhLEdBQWIsc0JBQWEsS0FBYixzQkFBYSxRQVMvQjtBQUFELENBQUMsRUFUUyxRQUFRLEtBQVIsUUFBUSxRQVNqQjtBQ1JELElBQVUsUUFBUSxDQXdEakI7QUF4REQsV0FBVSxRQUFRO0lBQUMsSUFBQSxhQUFhLENBd0QvQjtJQXhEa0IsV0FBQSxhQUFhLEVBQUMsQ0FBQztRQUk5QjtZQUFBO1lBa0RBLENBQUM7WUEzQ2lCLHFCQUFlLEdBQTdCO2dCQUNJLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUVjLGlCQUFXLEdBQTFCO2dCQUVJLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNuQixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0MsQ0FBQztZQUthLFdBQUssR0FBbkIsVUFBb0IsTUFBVztnQkFDM0IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFBO2dCQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3RDLENBQUM7WUFDTCxDQUFDO1lBS2EsYUFBTyxHQUFyQixVQUFzQixNQUFXO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUM1QixPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztnQkFDckMsQ0FBQztZQUNMLENBQUM7WUFLYSxvQkFBYyxHQUE1QixVQUE2QixNQUFXO2dCQUNwQyxJQUFJLE1BQU0sR0FBa0IsTUFBTSxDQUFDO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQTlDYyxnQkFBVSxHQUFHLENBQUMsQ0FBQztZQWdEbEMsWUFBQztRQUFELENBQUMsQUFsREQsSUFrREM7UUFsRFksbUJBQUssUUFrRGpCLENBQUE7SUFFTCxDQUFDLEVBeERrQixhQUFhLEdBQWIsc0JBQWEsS0FBYixzQkFBYSxRQXdEL0I7QUFBRCxDQUFDLEVBeERTLFFBQVEsS0FBUixRQUFRLFFBd0RqQjtBQzNDRCxJQUFVLFFBQVEsQ0FvSGpCO0FBcEhELFdBQVUsUUFBUTtJQUFDLElBQUEsYUFBYSxDQW9IL0I7SUFwSGtCLFdBQUEsYUFBYSxFQUFDLENBQUM7UUFHOUIsSUFBTyxpQkFBaUIsR0FBRyxjQUFLLENBQUMsaUJBQWlCLENBQUM7UUFJbkQ7WUFBQTtZQTRHQSxDQUFDO1lBbEdpQix3QkFBVyxHQUF6QixVQUEwQixhQUFxQjtnQkFDM0MsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7Z0JBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckUsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLENBQUM7WUFNYyxvQkFBTyxHQUF0QjtnQkFDSSxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3pCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7Z0JBQzlCLElBQUksT0FBTyxHQUFHLG1CQUFLLENBQUMsT0FBTyxDQUFDO2dCQUU1QixHQUFHLENBQUMsQ0FBYSxVQUFjLEVBQWQsS0FBQSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQWQsY0FBYyxFQUFkLElBQWMsQ0FBQztvQkFBM0IsSUFBSSxJQUFJLFNBQUE7b0JBQ1QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUVyQixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMxQjtZQUNMLENBQUM7WUFNYywwQkFBYSxHQUE1QixVQUE2QixHQUFXLEVBQUUsS0FBVTtnQkFDaEQsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUN6QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO2dCQUU5QixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUE7d0JBQ2xELENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osS0FBSyxHQUFHLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDNUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDMUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ2pCLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUMvQyxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUtjLDJCQUFjLEdBQTdCLFVBQThCLE1BQVc7Z0JBQ3JDLElBQUksTUFBTSxHQUFrQixNQUFNLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBTWMsbUNBQXNCLEdBQXJDLFVBQXNDLEtBQVU7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLG9CQUFvQixDQUFDLENBQUMsQ0FBQzt3QkFDNUMsS0FBSyxHQUFHLGdDQUFrQixDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JHLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFNYyxpQ0FBb0IsR0FBbkMsVUFBb0MsS0FBVTtnQkFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssa0JBQWtCLENBQUMsQ0FBQyxDQUFDO3dCQUMxQyxLQUFLLEdBQUcsOEJBQWdCLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNyRSxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBTWMsaUNBQW9CLEdBQW5DLFVBQW9DLEtBQVU7Z0JBQzFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQzt3QkFDMUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUNMLG1CQUFDO1FBQUQsQ0FBQyxBQTVHRCxJQTRHQztRQTVHWSwwQkFBWSxlQTRHeEIsQ0FBQTtJQUNMLENBQUMsRUFwSGtCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBb0gvQjtBQUFELENBQUMsRUFwSFMsUUFBUSxLQUFSLFFBQVEsUUFvSGpCO0FDN0hELElBQVUsUUFBUSxDQTJHakI7QUEzR0QsV0FBVSxRQUFRO0lBQUMsSUFBQSxhQUFhLENBMkcvQjtJQTNHa0IsV0FBQSxhQUFhLEVBQUMsQ0FBQztRQUU5QjtZQUFBO1lBd0dBLENBQUM7WUFwR2lCLG9CQUFTLEdBQXZCLFVBQXdCLFdBQWdCO2dCQUNwQyxJQUFJLFFBQVEsQ0FBQztnQkFDYixtQkFBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixXQUFXLEdBQUcsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUM7b0JBQ0QsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN4RSxDQUFDO3dCQUFTLENBQUM7b0JBQ1AsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMvRCxVQUFVLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDO1lBS2MsaURBQXNDLEdBQXJELFVBQXNELFlBQWlCO2dCQUNuRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLFdBQVcsR0FBRyxJQUFJLDhCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDO3dCQUNoQyxRQUFRLENBQUM7b0JBQ2IsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSw4QkFBZ0IsRUFBRSxDQUFDO3dCQUN6QyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDO3dCQUNoQyxRQUFRLENBQUM7b0JBQ2IsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxhQUFhLEdBQUcsSUFBSSxnQ0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDcEQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQzt3QkFDbEMsUUFBUSxDQUFDO29CQUNiLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvRSxRQUFRLENBQUM7b0JBQ2IsQ0FBQztnQkFDTCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEIsQ0FBQztZQUVjLDhCQUFtQixHQUFsQyxVQUFtQyxZQUFpQjtnQkFDaEQsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDO2dCQUV2QixFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDO29CQUFDLE1BQU0sQ0FBQztnQkFFbEMsRUFBRSxDQUFDLENBQUMsbUJBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxtQkFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEQsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMvRSxRQUFRLENBQUM7b0JBQ2IsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUtjLGlEQUFzQyxHQUFyRCxVQUFzRCxZQUFpQjtnQkFDbkUsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVksOEJBQWdCLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQXNCLE9BQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDMUQsUUFBUSxDQUFDO29CQUNiLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxZQUFZLDhCQUFnQixDQUFDLENBQUMsQ0FBQzt3QkFDdEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDekIsUUFBUSxDQUFDO29CQUNiLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxZQUFZLGdDQUFrQixDQUFDLENBQUMsQ0FBQzt3QkFDeEMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUF3QixPQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQzlELFFBQVEsQ0FBQztvQkFDYixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0UsUUFBUSxDQUFDO29CQUNiLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hCLENBQUM7WUFNYywyQkFBZ0IsR0FBL0IsVUFBZ0MsR0FBVyxFQUFFLEtBQVU7Z0JBQ25ELElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQztnQkFFdkIsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsbUJBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDTCxpQkFBQztRQUFELENBQUMsQUF4R0QsSUF3R0M7UUF4R1ksd0JBQVUsYUF3R3RCLENBQUE7SUFDTCxDQUFDLEVBM0drQixhQUFhLEdBQWIsc0JBQWEsS0FBYixzQkFBYSxRQTJHL0I7QUFBRCxDQUFDLEVBM0dTLFFBQVEsS0FBUixRQUFRLFFBMkdqQjtBRWpIRCxJQUFVLFFBQVEsQ0F1QmpCO0FBdkJELFdBQVUsUUFBUTtJQUFDLElBQUEsaUJBQWlCLENBdUJuQztJQXZCa0IsV0FBQSxpQkFBaUIsRUFBQyxDQUFDO1FBRWxDLElBQU8sVUFBVSxHQUFHLHdCQUFlLENBQUMsVUFBVSxDQUFDO1FBRS9DO1lBQTRCLDBCQUFVO1lBQXRDO2dCQUE0Qiw4QkFBVTtZQWtCdEMsQ0FBQztZQWZVLHlCQUFrQixHQUFHLHdCQUF3QixDQUFDO1lBQzlDLHFCQUFjLEdBQUcsa0JBQWtCLENBQUM7WUFDcEMsd0JBQWlCLEdBQUcscUJBQXFCLENBQUM7WUFDMUMsOEJBQXVCLEdBQUcsNEJBQTRCLENBQUM7WUFDdkQseUJBQWtCLEdBQUcsc0JBQXNCLENBQUM7WUFHNUMsd0JBQWlCLEdBQUcsb0RBQW9ELENBQUM7WUFDekUsOEJBQXVCLEdBQUcsMkNBQTJDLENBQUE7WUFHckUseUJBQWtCLEdBQUcsMEJBQTBCLENBQUM7WUFDaEQsMEJBQW1CLEdBQUcsd0JBQXdCLENBQUM7WUFDL0MsNkJBQXNCLEdBQUcsMEJBQTBCLENBQUM7WUFDcEQscUNBQThCLEdBQUcsb0NBQW9DLENBQUM7WUFDakYsYUFBQztRQUFELENBQUMsQUFsQkQsQ0FBNEIsVUFBVSxHQWtCckM7UUFsQlksd0JBQU0sU0FrQmxCLENBQUE7SUFDTCxDQUFDLEVBdkJrQixpQkFBaUIsR0FBakIsMEJBQWlCLEtBQWpCLDBCQUFpQixRQXVCbkM7QUFBRCxDQUFDLEVBdkJTLFFBQVEsS0FBUixRQUFRLFFBdUJqQjtBR2JELElBQVUsUUFBUSxDQTBDakI7QUExQ0QsV0FBVSxRQUFRO0lBQUMsSUFBQSxpQkFBaUIsQ0EwQ25DO0lBMUNrQixXQUFBLGlCQUFpQixFQUFDLENBQUM7UUFFbEMsSUFBTyxVQUFVLEdBQUcsc0JBQWEsQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBTyxZQUFZLEdBQUcsc0JBQWEsQ0FBQyxZQUFZLENBQUM7UUFFakQ7WUFBQTtnQkFFVyxlQUFVLEdBQVcsRUFBRSxDQUFDO2dCQUN4QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztZQWlDdEMsQ0FBQztZQS9CVSx3Q0FBUSxHQUFmO2dCQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsd0JBQU0sQ0FBQyxLQUFLLENBQUMsd0JBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLHdCQUFNLENBQUMsS0FBSyxDQUFDLHdCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFFRCxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUU3RCxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3pCLENBQUM7WUFHTSx3Q0FBUSxHQUFmLFVBQXdCLEtBQWE7Z0JBSWpDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLHdCQUFNLENBQUMsS0FBSyxDQUFDLHdCQUFNLENBQUMsa0JBQWtCLEVBQUUsOEJBQThCLENBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN4QixJQUFJLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLHlCQUFPLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztZQUdMLENBQUM7WUFDTCw0QkFBQztRQUFELENBQUMsQUFwQ0QsSUFvQ0M7UUFwQ3FCLHVDQUFxQix3QkFvQzFDLENBQUE7SUFDTCxDQUFDLEVBMUNrQixpQkFBaUIsR0FBakIsMEJBQWlCLEtBQWpCLDBCQUFpQixRQTBDbkM7QUFBRCxDQUFDLEVBMUNTLFFBQVEsS0FBUixRQUFRLFFBMENqQjtBQzlDRCxJQUFVLFFBQVEsQ0FrQmpCO0FBbEJELFdBQVUsUUFBUTtJQUFDLElBQUEsV0FBVyxDQWtCN0I7SUFsQmtCLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFFL0IsSUFBTyxxQkFBcUIsR0FBRywwQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQztRQUd2RTtZQUNTLG1DQUFxQjtZQUc3QjtnQkFDQyxpQkFBTyxDQUFDO1lBQ1QsQ0FBQztZQUVNLGdDQUFNLEdBQWIsVUFBYyxJQUFPO2dCQUVwQixNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNGLHNCQUFDO1FBQUQsQ0FBQyxBQVpELENBQ1MscUJBQXFCLEdBVzdCO1FBWnFCLDJCQUFlLGtCQVlwQyxDQUFBO0lBQ0YsQ0FBQyxFQWxCa0IsV0FBVyxHQUFYLG9CQUFXLEtBQVgsb0JBQVcsUUFrQjdCO0FBQUQsQ0FBQyxFQWxCUyxRQUFRLEtBQVIsUUFBUSxRQWtCakI7QUNoQkQsSUFBVSxRQUFRLENBZ0NqQjtBQWhDRCxXQUFVLFFBQVE7SUFBQyxJQUFBLFlBQVksQ0FnQzlCO0lBaENrQixXQUFBLFlBQVksRUFBQyxDQUFDO1FBRTdCLElBQU8sVUFBVSxHQUFHLGNBQUssQ0FBQyxVQUFVLENBQUM7UUFFckMsSUFBTyxlQUFlLEdBQUcsb0JBQVcsQ0FBQyxlQUFlLENBQUM7UUFFckQ7WUFBMEIsd0JBQXFCO1lBTzNDLGNBQVksSUFBYTtnQkFDckIsaUJBQU8sQ0FBQztnQkFOTCxlQUFVLEdBQUcsNEJBQTRCLENBQUM7Z0JBQzFDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO2dCQU94QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO1lBQ0wsQ0FBQztZQUVhLGFBQVEsR0FBdEI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFHTSx1QkFBUSxHQUFmO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFDTCxXQUFDO1FBQUQsQ0FBQyxBQXpCRCxDQUEwQixlQUFlLEdBeUJ4QztRQXpCWSxpQkFBSSxPQXlCaEIsQ0FBQTtJQUNMLENBQUMsRUFoQ2tCLFlBQVksR0FBWixxQkFBWSxLQUFaLHFCQUFZLFFBZ0M5QjtBQUFELENBQUMsRUFoQ1MsUUFBUSxLQUFSLFFBQVEsUUFnQ2pCO0FDbkNELElBQVUsUUFBUSxDQXdWakI7QUF4VkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxpQkFBaUIsQ0F3Vm5DO0lBeFZrQixXQUFBLGlCQUFpQixFQUFDLENBQUM7UUFFbEMsSUFBTyxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFNekM7WUFBQTtZQTZJQSxDQUFDO1lBdElpQixvQkFBWSxHQUExQixVQUEyQixRQUFnQixFQUFFLFdBQW1CLEVBQUUsYUFBcUM7Z0JBQ25HLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2dCQUMzQyxDQUFDO2dCQUNELFlBQVksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBS2EsMEJBQWtCLEdBQWhDLFVBQXlELFFBQWdCLEVBQUUsV0FBb0I7Z0JBRTNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLHdCQUFNLENBQUMsS0FBSyxDQUFDLHdCQUFNLENBQUMsa0JBQWtCLEVBQUUsbURBQW1ELENBQUMsQ0FBQztnQkFDakcsQ0FBQztnQkFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBSSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7WUF1QmxFLENBQUM7WUFLYSw4QkFBc0IsR0FBcEMsVUFBcUMsS0FBVTtnQkFDM0MsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRXRCLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBRWpCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBR0QsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM1QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUVyQyxJQUFJLFdBQXlCLENBQUM7d0JBRTlCLFdBQVcsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUMzRCxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUU1QixJQUFJLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3hELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxJQUFJLFFBQVEsR0FBUSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7b0JBQ25ELEdBQUcsQ0FBQyxDQUFDLElBQUksY0FBYyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQy9CLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDeEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDM0UsQ0FBQztvQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNwQixDQUFDO2dCQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUtjLDJCQUFtQixHQUFsQyxVQUFtQyxZQUFpQjtnQkFFaEQsRUFBRSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxJQUFJLFdBQVcsR0FBaUIsWUFBWSxDQUFDO2dCQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsSUFBSSxXQUFXLENBQUMsYUFBYSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBS2MsMEJBQWtCLEdBQWpDLFVBQWtDLFFBQWdCO2dCQUM5QyxJQUFJLENBQUM7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQztnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFtQkwsY0FBQztRQUFELENBQUMsQUE3SUQsSUE2SUM7UUE3SVkseUJBQU8sVUE2SW5CLENBQUE7UUFZRDtZQUFBO1lBMkRBLENBQUM7WUFwRGtCLCtCQUFzQixHQUFyQyxVQUFzQyxRQUFnQjtnQkFDbEQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0QsSUFBSSxDQUFDO29CQUNELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkQsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7Z0JBRXhFLENBQUU7Z0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVCx3QkFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBTSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsR0FBRyxRQUFRLEdBQUcsdUZBQXVGLENBQUMsQ0FBQztnQkFDOUosQ0FBQztnQkFDRCxRQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2hELENBQUM7WUFFYSwrQkFBc0IsR0FBcEMsVUFBcUMsUUFBZ0IsRUFBRSxXQUFtQjtnQkFFdEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxRQUFRLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBRWEsZ0JBQU8sR0FBckIsVUFBc0IsWUFBMEI7Z0JBRTVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEYsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUN4RixJQUFJLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFbEUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN4Qyx3QkFBTSxDQUFDLEtBQUssQ0FBQyx3QkFBTSxDQUFDLDhCQUE4QixFQUFFLG9EQUFvRCxHQUFHLFdBQVcsR0FBRyx5QkFBeUIsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDekwsQ0FBQztnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBRWEsMkJBQWtCLEdBQWhDLFVBQWlDLFdBQW1CO2dCQUVoRCxJQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0Isd0JBQU0sQ0FBQyxLQUFLLENBQUMsd0JBQU0sQ0FBQyxzQkFBc0IsRUFBRSxvQkFBb0IsR0FBRyxXQUFXLEdBQUcsMEVBQTBFLENBQUMsQ0FBQztnQkFDakssQ0FBQztnQkFDRCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxXQUFXLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztnQkFDaEMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN2QixDQUFDO1lBdkRjLDZCQUFvQixHQUFtQyxFQUFFLENBQUM7WUFFMUQsMEJBQWlCLEdBQW9DLEVBQUUsQ0FBQztZQXNEM0UsZUFBQztRQUFELENBQUMsQUEzREQsSUEyREM7UUEzRFksMEJBQVEsV0EyRHBCLENBQUE7UUFHRDtZQUFBO1lBdUhBLENBQUM7WUFqSGlCLHlCQUFZLEdBQTFCLFVBQTJCLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxhQUFxQztnQkFDbkcsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLHdCQUFNLENBQUMsS0FBSyxDQUFDLHdCQUFNLENBQUMsdUJBQXVCLEVBQUUsNkJBQTZCLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsd0JBQXdCLENBQUMsQ0FBQztnQkFDMUksQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLHdCQUFNLENBQUMsS0FBSyxDQUFDLHdCQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6RCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGFBQWEsQ0FBQztnQkFFdEQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFHbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO29CQUMvQixLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO29CQUNuQyxZQUFZLENBQUMsWUFBWSxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztZQUNMLENBQUM7WUFFYyxpQ0FBb0IsR0FBbkMsVUFBb0MsUUFBZ0IsRUFBRSxXQUFtQjtnQkFDckUsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsQ0FBQztvQkFDN0MsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0QsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDO2dCQUNqRCxDQUFDO1lBQ0wsQ0FBQztZQUVjLDZCQUFnQixHQUEvQixVQUFnQyxRQUFnQixFQUFFLFVBQWtCO2dCQUNoRSxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxHQUFXLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxFQUFFLEdBQVcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RCxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNuQixDQUFDO1lBRWMsaUNBQW9CLEdBQW5DLFVBQW9DLFdBQW1CO2dCQUNuRCxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3pCLElBQUksT0FBTyxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQztZQUVhLDRCQUFlLEdBQTdCLFVBQXNELFFBQWdCLEVBQUUsV0FBb0I7Z0JBQ3hGLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQztnQkFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNmLFdBQVcsR0FBRyxLQUFLLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsd0JBQU0sQ0FBQyxLQUFLLENBQUMsd0JBQU0sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEdBQUcsUUFBUSxHQUFHLHNDQUFzQyxDQUFDLENBQUE7Z0JBQ3ZHLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsd0JBQU0sQ0FBQyxLQUFLLENBQUMsd0JBQU0sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLEdBQUcsV0FBVyxHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsc0NBQXNDLENBQUMsQ0FBQTtnQkFDdEksQ0FBQztnQkFFRCxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLFFBQVEsQ0FBQztnQkFFYixJQUFJLENBQUM7b0JBQ0QsUUFBUSxHQUFNLENBQUMsSUFBVSxhQUFjLEVBQUUsQ0FBQyxDQUFDO2dCQUcvQyxDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1Qsd0JBQU0sQ0FBQyxLQUFLLENBQUMsd0JBQU0sQ0FBQyx1QkFBdUIsRUFBRSwrQkFBK0IsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0csQ0FBQztnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLENBQUM7WUFLYSxtQ0FBc0IsR0FBcEMsVUFBcUMsUUFBZ0IsRUFBRSxXQUFtQjtnQkFDdEUsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxLQUFLLFdBQVcsQ0FBQztZQUNuRSxDQUFDO1lBS2Esb0NBQXVCLEdBQXJDLFVBQXNDLFFBQWdCO2dCQUNsRCxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBRXpCLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQztZQUN2RCxDQUFDO1lBRWMscUNBQXdCLEdBQXZDLFVBQXdDLFdBQW1CO2dCQUN2RCxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUM7Z0JBQ3pCLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVhLCtCQUFrQixHQUFoQyxVQUFpQyxXQUFtQjtnQkFDaEQsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDO2dCQUV6QixJQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUUvQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBRXRCLENBQUM7Z0JBQ0QsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksV0FBVyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDdkIsQ0FBQztZQXBIYyxxQkFBUSxHQUE0RixFQUFFLENBQUM7WUFDdkcsMkJBQWMsR0FBbUMsRUFBRSxDQUFBO1lBQ25ELGtDQUFxQixHQUFHLEtBQUssQ0FBQztZQW1IakQsbUJBQUM7UUFBRCxDQUFDLEFBdkhELElBdUhDO0lBRUwsQ0FBQyxFQXhWa0IsaUJBQWlCLEdBQWpCLDBCQUFpQixLQUFqQiwwQkFBaUIsUUF3Vm5DO0FBQUQsQ0FBQyxFQXhWUyxRQUFRLEtBQVIsUUFBUSxRQXdWakI7QUl4VkQsSUFBVSxRQUFRLENBK0JqQjtBQS9CRCxXQUFVLFFBQVE7SUFBQyxJQUFBLFlBQVksQ0ErQjlCO0lBL0JrQixXQUFBLFlBQVksRUFBQyxDQUFDO1FBRTdCO1lBQUE7WUE0QkEsQ0FBQztZQXpCaUIsNENBQTJCLEdBQXpDLFVBQTBDLFVBQXVCO2dCQUM3RCxJQUFJLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFVBQVUsQ0FBQztZQUNoRCxDQUFDO1lBRWEsZ0NBQWUsR0FBN0IsVUFBOEIsYUFBcUIsRUFBRSxPQUFzQjtnQkFDdkUsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO1lBQ0wsQ0FBQztZQUVhLGtDQUFpQixHQUEvQixVQUFnQyxhQUFxQixFQUFFLE9BQXNCO2dCQUN6RSxJQUFJLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztvQkFDakMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztZQUNMLENBQUM7WUFFYSx5QkFBUSxHQUF0QixVQUF1QixLQUFtQjtnQkFDdEMsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7WUFDTCxDQUFDO1lBQ0wsdUJBQUM7UUFBRCxDQUFDLEFBNUJELElBNEJDO1FBNUJZLDZCQUFnQixtQkE0QjVCLENBQUE7SUFDTCxDQUFDLEVBL0JrQixZQUFZLEdBQVoscUJBQVksS0FBWixxQkFBWSxRQStCOUI7QUFBRCxDQUFDLEVBL0JTLFFBQVEsS0FBUixRQUFRLFFBK0JqQjtBQy9CRCxJQUFVLFFBQVEsQ0ErRGpCO0FBL0RELFdBQVUsUUFBUTtJQUFDLElBQUEsWUFBWSxDQStEOUI7SUEvRGtCLFdBQUEsWUFBWSxFQUFDLENBQUM7UUFFN0IsSUFBTyxVQUFVLEdBQUcsY0FBSyxDQUFDLFVBQVUsQ0FBQztRQUVyQztZQUFBO2dCQUNZLHNCQUFpQixHQUFpRCxFQUFFLENBQUM7WUF5RGpGLENBQUM7WUF2RFUsbUNBQUssR0FBWjtnQkFDSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLENBQUM7WUFFTSw2Q0FBZSxHQUF0QixVQUF1QixhQUFxQixFQUFFLE9BQXNCO2dCQUNoRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQy9DLENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBTyxPQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsT0FBUSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7WUFDTCxDQUFDO1lBRU0sK0NBQWlCLEdBQXhCLFVBQXlCLGFBQXFCLEVBQUUsT0FBc0I7Z0JBRWxFLEVBQUUsQ0FBQyxDQUFPLE9BQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BFLEVBQUUsQ0FBQyxDQUFPLGNBQWUsQ0FBQyxXQUFXLEtBQVcsT0FBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNqRSxLQUFLLENBQUM7d0JBQ1YsQ0FBQztvQkFDTCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBRU0sc0NBQVEsR0FBZixVQUFnQixLQUFtQjtnQkFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0QsSUFBSSxNQUFNLEdBQVksRUFBRSxDQUFDO2dCQUN6QixHQUFHLENBQUMsQ0FBZ0IsVUFBd0MsRUFBeEMsS0FBQSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUF4QyxjQUF3QyxFQUF4QyxJQUF3QyxDQUFDO29CQUF4RCxJQUFJLE9BQU8sU0FBQTtvQkFDWixJQUFJLENBQUM7d0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQixDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztpQkFDSjtnQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7WUFDTCxDQUFDO1lBRU8sK0NBQWlCLEdBQXpCLFVBQTBCLE1BQWU7Z0JBQ3JDLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQztnQkFDekIsR0FBRyxDQUFDLENBQWdCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxDQUFDO29CQUF0QixJQUFJLE9BQU8sZUFBQTtvQkFDWixPQUFPLElBQUksT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQzFEO2dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbkIsQ0FBQztZQUNMLDBCQUFDO1FBQUQsQ0FBQyxBQTFERCxJQTBEQztRQTFEWSxnQ0FBbUIsc0JBMEQvQixDQUFBO0lBQ0wsQ0FBQyxFQS9Ea0IsWUFBWSxHQUFaLHFCQUFZLEtBQVoscUJBQVksUUErRDlCO0FBQUQsQ0FBQyxFQS9EUyxRQUFRLEtBQVIsUUFBUSxRQStEakI7QUUvREQsSUFBVSxRQUFRLENBa0JqQjtBQWxCRCxXQUFVLFFBQVE7SUFBQyxJQUFBLE1BQU0sQ0FrQnhCO0lBbEJrQixXQUFBLE1BQU0sRUFBQyxDQUFDO1FBRXZCLElBQU8sZUFBZSxHQUFHLG9CQUFXLENBQUMsZUFBZSxDQUFDO1FBR3JEO1lBQ1ksc0NBQWtCO1lBRzFCO2dCQUNJLGlCQUFPLENBQUM7WUFDWixDQUFDO1lBTUwseUJBQUM7UUFBRCxDQUFDLEFBWkQsQ0FDWSxlQUFlLEdBVzFCO1FBWnFCLHlCQUFrQixxQkFZdkMsQ0FBQTtJQUNMLENBQUMsRUFsQmtCLE1BQU0sR0FBTixlQUFNLEtBQU4sZUFBTSxRQWtCeEI7QUFBRCxDQUFDLEVBbEJTLFFBQVEsS0FBUixRQUFRLFFBa0JqQjtBQ1ZELElBQVUsUUFBUSxDQStCakI7QUEvQkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxNQUFNLENBK0J4QjtJQS9Ca0IsV0FBQSxNQUFNLEVBQUMsQ0FBQztRQUUxQixJQUFPLHFCQUFxQixHQUFHLDBCQUFpQixDQUFDLHFCQUFxQixDQUFDO1FBRXZFLElBQU8sZ0JBQWdCLEdBQUcscUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztRQUV4RDtZQUNTLDhCQUFxQjtZQUQ5QjtnQkFDUyw4QkFBcUI7WUF1QjlCLENBQUM7WUFsQlUsK0JBQVUsR0FBcEIsVUFBcUIsS0FBbUI7Z0JBQ3ZDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxDQUFDOztZQUVNLDJCQUFNLEdBQWI7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDakIsQ0FBQzs7WUFFTSwyQkFBTSxHQUFiLFVBQWMsR0FBUztnQkFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDaEIsQ0FBQzs7WUFFTSwyQkFBTSxHQUFiLFVBQWMsSUFBTztnQkFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsQ0FBQztnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0YsaUJBQUM7UUFBRCxDQUFDLEFBeEJELENBQ1MscUJBQXFCLEdBdUI3QjtRQXhCcUIsaUJBQVUsYUF3Qi9CLENBQUE7SUFDRixDQUFDLEVBL0JrQixNQUFNLEdBQU4sZUFBTSxLQUFOLGVBQU0sUUErQnhCO0FBQUQsQ0FBQyxFQS9CUyxRQUFRLEtBQVIsUUFBUSxRQStCakI7QUVoQ0QsSUFBVSxRQUFRLENBNkNqQjtBQTdDRCxXQUFVLFFBQVE7SUFBQyxJQUFBLFNBQVMsQ0E2QzNCO0lBN0NrQixXQUFBLFNBQVMsRUFBQyxDQUFDO1FBRzFCLElBQU8sVUFBVSxHQUFHLGVBQU0sQ0FBQyxVQUFVLENBQUM7UUFPdEM7WUFJWSxxQ0FBbUI7WUFKL0I7Z0JBSVksOEJBQW1CO2dCQUduQixpQkFBWSxHQUFXLENBQUMsQ0FBQztZQTJCckMsQ0FBQztZQXpCVSx5Q0FBYSxHQUFwQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDO1lBRU0sK0NBQW1CLEdBQTFCO2dCQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QixDQUFDO1lBS00sMENBQWMsR0FBckIsVUFBc0IsS0FBaUM7Z0JBRW5ELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUdoQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFOUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN0QixDQUFDO1lBQ0wsd0JBQUM7UUFBRCxDQUFDLEFBbENELENBSVksVUFBVSxHQThCckI7UUFsQ3FCLDJCQUFpQixvQkFrQ3RDLENBQUE7SUFDTCxDQUFDLEVBN0NrQixTQUFTLEdBQVQsa0JBQVMsS0FBVCxrQkFBUyxRQTZDM0I7QUFBRCxDQUFDLEVBN0NTLFFBQVEsS0FBUixRQUFRLFFBNkNqQjtBQzFERCxJQUFVLFFBQVEsQ0F3QmpCO0FBeEJELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQXdCNUI7SUF4QmtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFTM0IsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdCLHlCQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRUoseUJBQWMsR0FBdUIsQ0FBRSxDQUFDO1lBQzVDLENBQUM7UUFDTCxDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMseUJBQWMsSUFBSSxTQUFTLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLGtKQUFrSixDQUFDLENBQUM7SUFFek0sQ0FBQyxFQXhCa0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUF3QjVCO0FBQUQsQ0FBQyxFQXhCUyxRQUFRLEtBQVIsUUFBUSxRQXdCakI7QUUxQkQsSUFBVSxRQUFRLENBVWpCO0FBVkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBVTVCO0lBVmtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFLM0IsV0FBWSxjQUFjO1lBQ3RCLGlEQUFHLENBQUE7WUFDSCx1REFBTSxDQUFBO1FBQ1YsQ0FBQyxFQUhXLHlCQUFjLEtBQWQseUJBQWMsUUFHekI7UUFIRCxJQUFZLGNBQWMsR0FBZCx5QkFHWCxDQUFBO1FBQUEsQ0FBQztJQUVOLENBQUMsRUFWa0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFVNUI7QUFBRCxDQUFDLEVBVlMsUUFBUSxLQUFSLFFBQVEsUUFVakI7QUVORCxJQUFVLFFBQVEsQ0FjakI7QUFkRCxXQUFVLFFBQVE7SUFBQyxJQUFBLFVBQVUsQ0FjNUI7SUFka0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUUzQixJQUFPLFVBQVUsR0FBRyx3QkFBZSxDQUFDLFVBQVUsQ0FBQztRQUUvQztZQUE0QiwwQkFBVTtZQUF0QztnQkFBNEIsOEJBQVU7WUFTdEMsQ0FBQztZQVJpQixnQkFBUyxHQUFHLGFBQWEsQ0FBQztZQUMxQixtQkFBWSxHQUFHLGdCQUFnQixDQUFDO1lBQ2hDLHNCQUFlLEdBQUcsbUJBQW1CLENBQUM7WUFDdEMsdUJBQWdCLEdBQUcsb0JBQW9CLENBQUM7WUFDeEMsd0JBQWlCLEdBQUcscUJBQXFCLENBQUM7WUFDMUMsa0NBQTJCLEdBQUcsZ0NBQWdDLENBQUM7WUFDL0QsNkJBQXNCLEdBQUcsa0RBQWtELENBQUM7WUFDNUUsaUJBQVUsR0FBRyxhQUFhLENBQUM7WUFDN0MsYUFBQztRQUFELENBQUMsQUFURCxDQUE0QixVQUFVLEdBU3JDO1FBVFksaUJBQU0sU0FTbEIsQ0FBQTtJQUNMLENBQUMsRUFka0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFjNUI7QUFBRCxDQUFDLEVBZFMsUUFBUSxLQUFSLFFBQVEsUUFjakI7QUNoQkQsSUFBVSxRQUFRLENBY2pCO0FBZEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBYzVCO0lBZGtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFLM0I7WUFBQTtZQU9BLENBQUM7WUFOa0Isa0JBQVcsR0FBRyxxQkFBcUIsQ0FBQztZQUNyQyxxQkFBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7WUFDeEQsdUJBQWdCLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztZQUM1RCx1QkFBZ0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDO1lBQzVELHdCQUFpQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7WUFDOUQseUJBQWtCLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztZQUNsRixhQUFDO1FBQUQsQ0FBQyxBQVBELElBT0M7UUFQWSxpQkFBTSxTQU9sQixDQUFBO0lBRUwsQ0FBQyxFQWRrQixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQWM1QjtBQUFELENBQUMsRUFkUyxRQUFRLEtBQVIsUUFBUSxRQWNqQjtBQ05ELElBQVUsUUFBUSxDQXFCakI7QUFyQkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBcUI1QjtJQXJCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUczQixJQUFPLGVBQWUsR0FBRyxvQkFBVyxDQUFDLGVBQWUsQ0FBQztRQUdyRDtZQUFxRSx1Q0FBdUI7WUFFeEYsNkJBSVcsSUFBZ0IsRUFJaEIsWUFBb0I7Z0JBRTNCLGlCQUFPLENBQUM7Z0JBTkQsU0FBSSxHQUFKLElBQUksQ0FBWTtnQkFJaEIsaUJBQVksR0FBWixZQUFZLENBQVE7WUFHL0IsQ0FBQztZQUNMLDBCQUFDO1FBQUQsQ0FBQyxBQWRELENBQXFFLGVBQWUsR0FjbkY7UUFkcUIsOEJBQW1CLHNCQWN4QyxDQUFBO0lBQ0wsQ0FBQyxFQXJCa0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFxQjVCO0FBQUQsQ0FBQyxFQXJCUyxRQUFRLEtBQVIsUUFBUSxRQXFCakI7QUNwQkQsSUFBVSxRQUFRLENBVWpCO0FBVkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBVTVCO0lBVmtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFNM0I7WUFBZ0Qsa0NBQTJEO1lBQTNHO2dCQUFnRCw4QkFBMkQ7Z0JBQ3ZHLGVBQVUsR0FBRyxpQkFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDbkMsa0JBQWEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUFELHFCQUFDO1FBQUQsQ0FBQyxBQUhELENBQWdELDhCQUFtQixHQUdsRTtRQUhZLHlCQUFjLGlCQUcxQixDQUFBO0lBQ0wsQ0FBQyxFQVZrQixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVU1QjtBQUFELENBQUMsRUFWUyxRQUFRLEtBQVIsUUFBUSxRQVVqQjtBQ1ZELElBQVUsUUFBUSxDQVVqQjtBQVZELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQVU1QjtJQVZrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBTTNCO1lBQWtELG9DQUE2RDtZQUEvRztnQkFBa0QsOEJBQTZEO2dCQUMzRyxlQUFVLEdBQUcsaUJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDckMsa0JBQWEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUFELHVCQUFDO1FBQUQsQ0FBQyxBQUhELENBQWtELDhCQUFtQixHQUdwRTtRQUhZLDJCQUFnQixtQkFHNUIsQ0FBQTtJQUNMLENBQUMsRUFWa0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFVNUI7QUFBRCxDQUFDLEVBVlMsUUFBUSxLQUFSLFFBQVEsUUFVakI7QUNWRCxJQUFVLFFBQVEsQ0FVakI7QUFWRCxXQUFVLFFBQVE7SUFBQyxJQUFBLFVBQVUsQ0FVNUI7SUFWa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQU0zQjtZQUFvRCxzQ0FBK0Q7WUFBbkg7Z0JBQW9ELDhCQUErRDtnQkFDL0csZUFBVSxHQUFHLGlCQUFNLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUM7WUFBRCx5QkFBQztRQUFELENBQUMsQUFIRCxDQUFvRCw4QkFBbUIsR0FHdEU7UUFIWSw2QkFBa0IscUJBRzlCLENBQUE7SUFDTCxDQUFDLEVBVmtCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBVTVCO0FBQUQsQ0FBQyxFQVZTLFFBQVEsS0FBUixRQUFRLFFBVWpCO0FDVkQsSUFBVSxRQUFRLENBV2pCO0FBWEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBVzVCO0lBWGtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFNM0I7WUFBa0Qsb0NBQTZEO1lBQS9HO2dCQUFrRCw4QkFBNkQ7Z0JBQzNHLGVBQVUsR0FBRyxpQkFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUNyQyxrQkFBYSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDO1lBQUQsdUJBQUM7UUFBRCxDQUFDLEFBSEQsQ0FBa0QsOEJBQW1CLEdBR3BFO1FBSFksMkJBQWdCLG1CQUc1QixDQUFBO0lBRUwsQ0FBQyxFQVhrQixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVc1QjtBQUFELENBQUMsRUFYUyxRQUFRLEtBQVIsUUFBUSxRQVdqQjtBQ1hELElBQVUsUUFBUSxDQVdqQjtBQVhELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQVc1QjtJQVhrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBTTNCO1lBQW1ELHFDQUE4RDtZQUFqSDtnQkFBbUQsOEJBQThEO2dCQUM3RyxlQUFVLEdBQUcsaUJBQU0sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdEMsa0JBQWEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUFELHdCQUFDO1FBQUQsQ0FBQyxBQUhELENBQW1ELDhCQUFtQixHQUdyRTtRQUhZLDRCQUFpQixvQkFHN0IsQ0FBQTtJQUVMLENBQUMsRUFYa0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFXNUI7QUFBRCxDQUFDLEVBWFMsUUFBUSxLQUFSLFFBQVEsUUFXakI7QUNLRCxJQUFVLFFBQVEsQ0FzSWpCO0FBdElELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQXNJNUI7SUF0SWtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFHM0IsSUFBTyxPQUFPLEdBQUcsMEJBQWlCLENBQUMsT0FBTyxDQUFDO1FBSTNDLElBQU8sZ0JBQWdCLEdBQUcscUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztRQUt4RDtZQUdJLHdCQUlZLFdBQW1CLEVBS25CLFlBQXFCO2dCQUxyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFLbkIsaUJBQVksR0FBWixZQUFZLENBQVM7Z0JBRTdCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyQixpQkFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDOUMsQ0FBQztZQVFELGdDQUFPLEdBQVAsVUFBUSxFQUFRO2dCQUNaLElBQUksQ0FBQztvQkFDRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQy9DLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLElBQUksTUFBTSxHQUFHLGlCQUFNLENBQUMsZ0JBQWdCLENBQUMsaUJBQU0sQ0FBQywyQkFBMkIsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLEdBQUcsU0FBUyxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO29CQUMzSyxDQUFDO29CQUNELElBQUksUUFBUSxHQUFNLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFNUQsSUFBSSxLQUFLLEdBQUcsSUFBSSw2QkFBa0IsQ0FBSSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNuRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRWpDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLENBQUU7Z0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDVCxpQkFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7WUFDTCxDQUFDO1lBT0QsNkJBQUksR0FBSixVQUFLLElBQU87Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDO1lBS0QsZ0NBQU8sR0FBUCxVQUFRLElBQU87Z0JBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUVPLHNDQUFhLEdBQXJCLFVBQXNCLElBQU8sRUFBRSxXQUE0QjtnQkFBNUIsMkJBQTRCLEdBQTVCLG1CQUE0QjtnQkFDdkQsSUFBSSxDQUFDO29CQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkMsQ0FBRTtnQkFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNULGlCQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsSUFBSSxLQUE4QyxDQUFDO2dCQUNuRCxJQUFJLE9BQU8sR0FBTSxJQUFJLENBQUM7Z0JBQ3RCLElBQUksdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLFVBQTBCLENBQUM7Z0JBRS9CLFVBQVUsR0FBRyx5QkFBYyxDQUFDLE1BQU0sQ0FBQztnQkFFbkMsSUFBSSxDQUFDO29CQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRVQsS0FBSyxHQUFHLElBQUkseUJBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNwRCxVQUFVLEdBQUcseUJBQWMsQ0FBQyxHQUFHLENBQUM7b0JBQ2hDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztnQkFDcEMsQ0FBQztnQkFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUMzQixLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksNEJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDcEUsQ0FBQztvQkFDRCxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksMkJBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFHL0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFFMUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBRUwsQ0FBQztZQU1ELCtCQUFNLEdBQU4sVUFBTyxFQUFRO2dCQUNYLElBQUksT0FBTyxHQUFNLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDO29CQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQixDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRVQsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLGlCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsaUJBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSwyQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUU3RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRTlCLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxDQUFDO1lBQ0wscUJBQUM7UUFBRCxDQUFDLEFBekhELElBeUhDO1FBekhxQix5QkFBYyxpQkF5SG5DLENBQUE7SUFDTCxDQUFDLEVBdElrQixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQXNJNUI7QUFBRCxDQUFDLEVBdElTLFFBQVEsS0FBUixRQUFRLFFBc0lqQjtBQ25JRCxJQUFVLFFBQVEsQ0EyTWpCO0FBM01ELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQTJNNUI7SUEzTWtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFHM0IsSUFBTyxPQUFPLEdBQUcsMEJBQWlCLENBQUMsT0FBTyxDQUFDO1FBSTNDLElBQU8sZ0JBQWdCLEdBQUcscUJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztRQUt4RDtZQUdJLDZCQUlZLFdBQW1CLEVBS25CLFlBQXFCO2dCQUxyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFLbkIsaUJBQVksR0FBWixZQUFZLENBQVM7Z0JBRTdCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxFQUFFLElBQUksV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELGlCQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUM5QyxDQUFDO1lBT0QscUNBQU8sR0FBUCxVQUFRLEVBQVE7Z0JBQWhCLGlCQWdDQztnQkEvQkcsSUFBSSxRQUFRLEdBQUcseUJBQWMsQ0FBQyxLQUFLLEVBQUssQ0FBQztnQkFFekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTSxDQUFDLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7b0JBQzdGLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUM1QixDQUFDO2dCQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQy9CLFVBQUMsS0FBUTtvQkFDTCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzRSxJQUFJLE1BQU0sR0FBRyxpQkFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFNLENBQUMsMkJBQTJCLEVBQUUsWUFBWSxHQUFHLEtBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUNwSyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN4QixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFDRCxJQUFJLENBQUM7d0JBQ0QsSUFBSSxRQUFRLEdBQVMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDakUsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNULFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25CLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUVELElBQUksS0FBSyxHQUFHLElBQUksNkJBQWtCLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDaEUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUVqQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQixDQUFDLEVBQ0QsVUFBQyxLQUFVO29CQUNQLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLGlCQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3pELFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzVCLENBQUM7WUFPTyxvQ0FBTSxHQUFkLFVBQWUsSUFBTyxFQUFFLFVBQTBCO2dCQUFsRCxpQkFhQztnQkFaRyxJQUFJLFFBQVEsR0FBRyx5QkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUV0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDMUM7b0JBQ0ksUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUN0QixDQUFDLEVBQ0QsVUFBQyxLQUFVO29CQUNQLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLGlCQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzVELFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FDSixDQUFDO2dCQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzVCLENBQUM7WUFFRCxrQ0FBSSxHQUFKLFVBQUssSUFBTztnQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELHFDQUFPLEdBQVAsVUFBUSxJQUFPO2dCQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBRU8sMkNBQWEsR0FBckIsVUFBc0IsSUFBTyxFQUFFLFdBQTRCO2dCQUEzRCxpQkF3REM7Z0JBeEQ4QiwyQkFBNEIsR0FBNUIsbUJBQTRCO2dCQUN2RCxJQUFJLFFBQVEsR0FBRyx5QkFBYyxDQUFDLEtBQUssRUFBTSxDQUFDO2dCQUMxQyxJQUFJLEtBQThDLENBQUM7Z0JBRW5ELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBSSxNQUFNLEdBQUcsaUJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2RCxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDNUIsVUFBQyxTQUFZO29CQUVULEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRWxDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDZixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs0QkFDM0IsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLDJCQUFnQixDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ25FLENBQUM7d0JBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUseUJBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQzFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSw0QkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUNoRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2pDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQyxFQUFFLFVBQUMsS0FBSzs0QkFDTCxJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxpQkFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7NEJBQzdELFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBRUosUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN2QixDQUFDO2dCQUNMLENBQUMsRUFDRCxVQUFDLEtBQVU7b0JBQ1AsRUFBRSxDQUFDLENBQUMsS0FBSyxZQUFZLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLGlCQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFHOUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUseUJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3RDOzRCQUNJLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSx5QkFBYyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzdELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDakMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUN2QixDQUFDLEVBQ0QsVUFBQyxLQUFLOzRCQUNGLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLGlCQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs0QkFDN0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQyxDQUNKLENBQUM7b0JBQ04sQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFFSixJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxpQkFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQzdELFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0wsQ0FBQyxDQUNKLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFNUIsQ0FBQztZQU9ELG9DQUFNLEdBQU4sVUFBTyxFQUFRO2dCQUFmLGlCQXlCQztnQkF4QkcsSUFBSSxRQUFRLEdBQUcseUJBQWMsQ0FBQyxLQUFLLEVBQU0sQ0FBQztnQkFDMUMsSUFBSSxLQUEwQixDQUFDO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDakIsVUFBQyxJQUFJO29CQUNELElBQUksS0FBSyxHQUFHLElBQUksMkJBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDMUQsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUI7d0JBQ0ksUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNuQixnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JDLENBQUMsRUFDRCxVQUFDLEtBQVU7d0JBQ1AsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsaUJBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO3dCQUM3RCxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQ0osQ0FBQztnQkFDTixDQUFDLEVBQ0QsVUFBQyxLQUFLO29CQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxpQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQy9ELFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDbkIsTUFBTSxDQUFDO29CQUNYLENBQUM7Z0JBQ0wsQ0FBQyxDQUNKLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDNUIsQ0FBQztZQUtPLHdDQUFVLEdBQWxCLFVBQW1CLGFBQWtCLEVBQUUsOEJBQXNDO2dCQUN6RSxJQUFJLE1BQWEsQ0FBQztnQkFDbEIsRUFBRSxDQUFDLENBQUMsYUFBYSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLE1BQU0sR0FBRyxhQUFhLENBQUM7Z0JBQzNCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osTUFBTSxHQUFHLGlCQUFNLENBQUMsZ0JBQWdCLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQUNMLDBCQUFDO1FBQUQsQ0FBQyxBQTlMRCxJQThMQztRQTlMcUIsOEJBQW1CLHNCQThMeEMsQ0FBQTtJQUNMLENBQUMsRUEzTWtCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBMk01QjtBQUFELENBQUMsRUEzTVMsUUFBUSxLQUFSLFFBQVEsUUEyTWpCO0FDek5ELElBQVUsUUFBUSxDQXdDakI7QUF4Q0QsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBd0M1QjtJQXhDa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUUzQixJQUFPLE9BQU8sR0FBRywwQkFBaUIsQ0FBQyxPQUFPLENBQUM7UUFLM0M7WUFDWSxzQ0FBdUI7WUFLL0IsNEJBQVksZUFBdUI7Z0JBQy9CLGtCQUFNLGVBQWUsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUN0QixDQUFDO1lBRVMsa0RBQXFCLEdBQS9CLFVBQWdDLEVBQVE7Z0JBRXBDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBSSxRQUFRLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsaUJBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBRVMsK0NBQWtCLEdBQTVCLFVBQTZCLElBQU87Z0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsQ0FBQztZQUVTLGlEQUFvQixHQUE5QixVQUErQixFQUFRO2dCQUNuQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ2xDLENBQUM7WUFDTCx5QkFBQztRQUFELENBQUMsQUFoQ0QsQ0FDWSx5QkFBYyxHQStCekI7UUFoQ1ksNkJBQWtCLHFCQWdDOUIsQ0FBQTtJQUNMLENBQUMsRUF4Q2tCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBd0M1QjtBQUFELENBQUMsRUF4Q1MsUUFBUSxLQUFSLFFBQVEsUUF3Q2pCO0FDNUNELElBQVUsUUFBUSxDQWtHakI7QUFsR0QsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBa0c1QjtJQWxHa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUUzQixJQUFPLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztRQUs1RCxJQUFPLFVBQVUsR0FBRyxzQkFBYSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFPLFlBQVksR0FBRyxzQkFBYSxDQUFDLFlBQVksQ0FBQztRQUVqRDtZQUNZLDJDQUE0QjtZQUtwQyxpQ0FBWSxXQUFtQjtnQkFDM0Isa0JBQU0sV0FBVyxDQUFDLENBQUM7Z0JBSGYsWUFBTyxHQUE2QixFQUFFLENBQUM7WUFJL0MsQ0FBQztZQUVPLDZDQUFXLEdBQW5CLFVBQW9CLEVBQVE7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDTixJQUFJLE1BQU0sR0FBRyxpQkFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFNLENBQUMsVUFBVSxFQUFFLGlDQUFpQyxDQUFDLENBQUM7b0JBQzNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixJQUFJLE1BQU0sR0FBRyxpQkFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckUsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDO1lBRVMsdURBQXFCLEdBQS9CLFVBQWdDLEVBQVE7Z0JBQ3BDLElBQUksUUFBUSxHQUFHLHlCQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRXRDLElBQUksQ0FBQztvQkFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUM1QixDQUFDO1lBRU8sMENBQVEsR0FBaEIsVUFBaUIsSUFBTztnQkFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFJLE1BQU0sR0FBRyxpQkFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCxJQUFJLENBQUM7b0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RSxDQUFFO2dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1QsSUFBSSxNQUFNLEdBQUcsaUJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQztZQUVTLG9EQUFrQixHQUE1QixVQUE2QixJQUFPO2dCQUNoQyxJQUFJLFFBQVEsR0FBRyx5QkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUV0QyxJQUFJLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsQ0FBRTtnQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNYLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDNUIsQ0FBQztZQUVPLDRDQUFVLEdBQWxCLFVBQW1CLEVBQVE7Z0JBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxNQUFNLEdBQUcsaUJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVTLHNEQUFvQixHQUE5QixVQUErQixFQUFRO2dCQUNuQyxJQUFJLFFBQVEsR0FBRyx5QkFBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUV0QyxJQUFJLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtvQkFDbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsQ0FBRTtnQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNYLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDNUIsQ0FBQztZQUNMLDhCQUFDO1FBQUQsQ0FBQyxBQXZGRCxDQUNZLG1CQUFtQixHQXNGOUI7UUF2Rlksa0NBQXVCLDBCQXVGbkMsQ0FBQTtJQUNMLENBQUMsRUFsR2tCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBa0c1QjtBQUFELENBQUMsRUFsR1MsUUFBUSxLQUFSLFFBQVEsUUFrR2pCO0FFMUdELElBQVUsUUFBUSxDQVFqQjtBQVJELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQVE1QjtJQVJrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBRTNCLElBQU8sVUFBVSxHQUFHLHdCQUFlLENBQUMsVUFBVSxDQUFDO1FBRS9DO1lBQXNDLG9DQUFVO1lBQWhEO2dCQUFzQyw4QkFBVTtZQUVoRCxDQUFDO1lBRGlCLG9DQUFtQixHQUFHLDhFQUE4RSxDQUFDO1lBQ3ZILHVCQUFDO1FBQUQsQ0FBQyxBQUZELENBQXNDLFVBQVUsR0FFL0M7UUFGWSwyQkFBZ0IsbUJBRTVCLENBQUE7SUFFTCxDQUFDLEVBUmtCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBUTVCO0FBQUQsQ0FBQyxFQVJTLFFBQVEsS0FBUixRQUFRLFFBUWpCO0FDUkQsSUFBVSxRQUFRLENBV2pCO0FBWEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBVzVCO0lBWGtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFLM0I7WUFBQTtZQUtBLENBQUM7WUFKa0Isa0JBQVcsR0FBRyxxQkFBcUIsQ0FBQztZQUNyQyx1QkFBZ0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDO1lBQzVELHlCQUFrQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUM7WUFDaEUsMkJBQW9CLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztZQUN0RixhQUFDO1FBQUQsQ0FBQyxBQUxELElBS0M7UUFMWSxpQkFBTSxTQUtsQixDQUFBO0lBQ0wsQ0FBQyxFQVhrQixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQVc1QjtBQUFELENBQUMsRUFYUyxRQUFRLEtBQVIsUUFBUSxRQVdqQjtBQ1BELElBQVUsUUFBUSxDQWlCakI7QUFqQkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBaUI1QjtJQWpCa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQUczQixJQUFPLGVBQWUsR0FBRyxvQkFBVyxDQUFDLGVBQWUsQ0FBQztRQUVyRDtZQUF3QyxzQ0FBbUM7WUFJdkUsNEJBQ1csUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsRUFBVTtnQkFFakIsaUJBQU8sQ0FBQztnQkFKRCxhQUFRLEdBQVIsUUFBUSxDQUFRO2dCQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtnQkFOckIsZUFBVSxHQUFHLGlCQUFNLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3ZDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1lBUXJCLENBQUM7WUFDTCx5QkFBQztRQUFELENBQUMsQUFYRCxDQUF3QyxlQUFlLEdBV3REO1FBWFksNkJBQWtCLHFCQVc5QixDQUFBO0lBQ0wsQ0FBQyxFQWpCa0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFpQjVCO0FBQUQsQ0FBQyxFQWpCUyxRQUFRLEtBQVIsUUFBUSxRQWlCakI7QUNqQkQsSUFBVSxRQUFRLENBaUJqQjtBQWpCRCxXQUFVLFFBQVE7SUFBQyxJQUFBLFVBQVUsQ0FpQjVCO0lBakJrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBRzNCLElBQU8sZUFBZSxHQUFHLG9CQUFXLENBQUMsZUFBZSxDQUFDO1FBRXJEO1lBQTBDLHdDQUFxQztZQUkzRSw4QkFDVyxRQUFnQixFQUNoQixXQUFtQixFQUNuQixFQUFVO2dCQUVqQixpQkFBTyxDQUFDO2dCQUpELGFBQVEsR0FBUixRQUFRLENBQVE7Z0JBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO2dCQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFRO2dCQU5yQixlQUFVLEdBQUcsaUJBQU0sQ0FBQyxvQkFBb0IsQ0FBQztnQkFDekMsa0JBQWEsR0FBRyxJQUFJLENBQUM7WUFRckIsQ0FBQztZQUNMLDJCQUFDO1FBQUQsQ0FBQyxBQVhELENBQTBDLGVBQWUsR0FXeEQ7UUFYWSwrQkFBb0IsdUJBV2hDLENBQUE7SUFDTCxDQUFDLEVBakJrQixVQUFVLEdBQVYsbUJBQVUsS0FBVixtQkFBVSxRQWlCNUI7QUFBRCxDQUFDLEVBakJTLFFBQVEsS0FBUixRQUFRLFFBaUJqQjtBQ2pCRCxJQUFVLFFBQVEsQ0FrQmpCO0FBbEJELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQWtCNUI7SUFsQmtCLFdBQUEsVUFBVSxFQUFDLENBQUM7UUFHM0IsSUFBTyxlQUFlLEdBQUcsb0JBQVcsQ0FBQyxlQUFlLENBQUM7UUFFckQ7WUFBc0Msb0NBQWlDO1lBSW5FLDBCQUNXLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLEVBQVU7Z0JBRWpCLGlCQUFPLENBQUM7Z0JBSkQsYUFBUSxHQUFSLFFBQVEsQ0FBUTtnQkFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBQ25CLE9BQUUsR0FBRixFQUFFLENBQVE7Z0JBTnJCLGVBQVUsR0FBRyxpQkFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUNyQyxrQkFBYSxHQUFHLElBQUksQ0FBQztZQVFyQixDQUFDO1lBQ0wsdUJBQUM7UUFBRCxDQUFDLEFBWEQsQ0FBc0MsZUFBZSxHQVdwRDtRQVhZLDJCQUFnQixtQkFXNUIsQ0FBQTtJQUVMLENBQUMsRUFsQmtCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBa0I1QjtBQUFELENBQUMsRUFsQlMsUUFBUSxLQUFSLFFBQVEsUUFrQmpCO0FDaEJELElBQVUsUUFBUSxDQXdMakI7QUF4TEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxVQUFVLENBd0w1QjtJQXhMa0IsV0FBQSxVQUFVLEVBQUMsQ0FBQztRQU8zQixXQUFZLFVBQVU7WUFDbEIseUNBQUcsQ0FBQTtZQUNILG1EQUFRLENBQUE7WUFDUiw2Q0FBSyxDQUFBO1lBQ0wsaURBQU8sQ0FBQTtRQUNYLENBQUMsRUFMVyxxQkFBVSxLQUFWLHFCQUFVLFFBS3JCO1FBTEQsSUFBWSxVQUFVLEdBQVYscUJBS1gsQ0FBQTtRQUtEO1lBUUkscUJBQ1ksTUFBa0IsRUFDbEIsSUFBTyxFQUNQLEdBQVM7Z0JBRlQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtnQkFDbEIsU0FBSSxHQUFKLElBQUksQ0FBRztnQkFDUCxRQUFHLEdBQUgsR0FBRyxDQUFNO2dCQUVqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQyxDQUFDO1lBRU0sK0JBQVMsR0FBaEI7Z0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekMsQ0FBQztZQUVNLGlDQUFXLEdBQWxCO2dCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLENBQUM7WUFFTSxvQ0FBYyxHQUFyQjtnQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdEMsQ0FBQztZQUVNLG1DQUFhLEdBQXBCO2dCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxDQUFDO1lBRU0sK0JBQVMsR0FBaEI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdkIsQ0FBQztZQUVNLDZCQUFPLEdBQWQ7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQztZQUVNLDRCQUFNLEdBQWI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDcEIsQ0FBQztZQUVNLGdDQUFVLEdBQWpCO2dCQUNJLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFckQsTUFBTSxDQUFDLG9CQUFvQixLQUFLLGdCQUFnQixDQUFDO1lBQ3JELENBQUM7WUFLTSwyQ0FBcUIsR0FBNUI7Z0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBRUwsa0JBQUM7UUFBRCxDQUFDLEFBakVELElBaUVDO1FBRUQ7WUFTSTtnQkFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUM1QixDQUFDO1lBS00sK0JBQVMsR0FBaEIsVUFBaUIsR0FBUztnQkFDdEIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFLTSw2QkFBTyxHQUFkLFVBQWUsR0FBUztnQkFDcEIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBS00seUJBQUcsR0FBVixVQUFXLEdBQVMsRUFBRSxJQUFPO2dCQUN6QixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUM3QyxDQUFDO1lBS00sNEJBQU0sR0FBYixVQUFjLEdBQVM7Z0JBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7WUFDTCxDQUFDO1lBRU0sNEJBQU0sR0FBYjtnQkFDSSxJQUFJLFFBQVEsR0FBVyxFQUFFLENBQUM7Z0JBQzFCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLENBQUM7WUFFTSx1Q0FBaUIsR0FBeEIsVUFBeUIsR0FBUztnQkFDOUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0MsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLENBQUM7WUFFTSxxQ0FBZSxHQUF0QixVQUF1QixHQUFTO2dCQUM1QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDOUIsQ0FBQztZQUVNLHdDQUFrQixHQUF6QixVQUEwQixHQUFTO2dCQUMvQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDakMsQ0FBQztZQUVNLG1DQUFhLEdBQXBCLFVBQXFCLEdBQVM7Z0JBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUtNLDJDQUFxQixHQUE1QixVQUE2QixHQUFTO2dCQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBRU8sb0NBQWMsR0FBdEIsVUFBdUIsR0FBUztnQkFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDO1lBQ0wsa0JBQUM7UUFBRCxDQUFDLEFBbkdELElBbUdDO1FBbkdZLHNCQUFXLGNBbUd2QixDQUFBO0lBQ0wsQ0FBQyxFQXhMa0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUF3TDVCO0FBQUQsQ0FBQyxFQXhMUyxRQUFRLEtBQVIsUUFBUSxRQXdMakI7QUN4S0QsSUFBVSxRQUFRLENBbUhqQjtBQW5IRCxXQUFVLFFBQVE7SUFBQyxJQUFBLFVBQVUsQ0FtSDVCO0lBbkhrQixXQUFBLFlBQVUsRUFBQyxDQUFDO1FBSzNCLElBQU8sbUJBQW1CLEdBQUcscUJBQVksQ0FBQyxtQkFBbUIsQ0FBQztRQU85RDtZQU1JLG9CQUFZLFVBQWdDO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHdCQUFXLEVBQVcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7WUFDaEQsQ0FBQztZQUtNLDRCQUFPLEdBQWQsVUFBZSxHQUFTO2dCQUVwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLHVCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsNkJBQWdCLENBQUMsS0FBSyxDQUFDLDZCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ2pFLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVoQyxJQUFJLGNBQWMsR0FBRyxJQUFJLGlDQUFvQixDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDekgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFFaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDO1lBS00sK0JBQVUsR0FBakIsVUFBa0IsR0FBUztnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBS00sNEJBQU8sR0FBZDtnQkFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUMsQ0FBWSxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxDQUFDO29CQUFoQixJQUFJLEdBQUcsYUFBQTtvQkFFUixJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFM0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDYixLQUFLLHVCQUFVLENBQUMsT0FBTzs0QkFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM3QixLQUFLLENBQUM7d0JBQ1YsS0FBSyx1QkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDekIsS0FBSyx1QkFBVSxDQUFDLEdBQUc7NEJBQ2YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNuQyxLQUFLLENBQUM7d0JBQ1YsS0FBSyx1QkFBVSxDQUFDLEtBQUs7NEJBQ2pCLEtBQUssQ0FBQztvQkFDZCxDQUFDO2lCQUNKO1lBQ0wsQ0FBQztZQUVNLG9DQUFlLEdBQXRCLFVBQXVCLGFBQXFCLEVBQUUsWUFBMkI7Z0JBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNqRSxDQUFDO1lBRU0sc0NBQWlCLEdBQXhCLFVBQXlCLGFBQXFCLEVBQUUsWUFBMkI7Z0JBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFFTyx1Q0FBa0IsR0FBMUIsVUFBMkIsR0FBUztnQkFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLElBQUksWUFBWSxHQUFHLElBQUksK0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBRU8sNkNBQXdCLEdBQWhDLFVBQWlDLEdBQVM7Z0JBQ3RDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWhDLElBQUksVUFBVSxHQUFHLElBQUksNkJBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFFTywrQkFBVSxHQUFsQixVQUFtQixLQUFtQjtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUtPLCtCQUFVLEdBQWxCLFVBQW1CLEdBQVM7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDTCxDQUFDO1lBQ0wsaUJBQUM7UUFBRCxDQUFDLEFBdEdELElBc0dDO1FBdEdZLHVCQUFVLGFBc0d0QixDQUFBO0lBQ0wsQ0FBQyxFQW5Ia0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFtSDVCO0FBQUQsQ0FBQyxFQW5IUyxRQUFRLEtBQVIsUUFBUSxRQW1IakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTWluaW1hbCBFcnJvciBoYW5kbGluZyBiYXNlIGJlaGF2aW9ycyBmb3IgdGhlIGRvbWFpbiBtb2RlbC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5FcnJvck1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgICAgICBzdGF0aWMgdGhyb3cobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBCYXNlRXJyb3JzLmdldEVycm9ySW5zdGFuY2UobmFtZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXRFcnJvckluc3RhbmNlKG5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IEVycm9yIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihtZXNzYWdlIHx8IG5hbWUpO1xyXG4gICAgICAgICAgICBlcnIubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlF1ZXJ5IHtcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBhIHF1ZXJ5IHRvIGJlIGV4ZWN1dGVkIGFnYWluc3QgYSBEYXRhc3RvcmVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVlcnk8VD4ge1xyXG4gICAgICAgIHNldFF1ZXJ5KHF1ZXJ5T2JqZWN0OiBhbnkpO1xyXG4gICAgICAgIGV4ZWN1dGUoKTogVFtdO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5RdWVyeSB7XHJcbiAgICBcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFEuSVByb21pc2U7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBhIHF1ZXJ5IHRvIGJlIGV4ZWN1dGVkIGFnYWluc3QgYSBEYXRhc3RvcmUgaW4gYW4gYXN5bmMgZmFzaGlvblxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElRdWVyeUFzeW5jPFQ+IHtcclxuICAgICAgICBzZXRRdWVyeShxdWVyeU9iamVjdDogYW55KTtcclxuICAgICAgICBleGVjdXRlKCk6IElQcm9taXNlPFRbXT47XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogU29tZSBzaW1wbGUgY2xhc3NlcyB1c2VkIGluIGRpZmZlcmVudCBtb2R1bGVzLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlV0aWxzIHtcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFNpbXBsZUd1aWQge1xyXG5cdFx0Ly8gSGVscGVyIGZvciBndWlkIGdlbmVyYXRpb24uXHJcblx0XHRwcml2YXRlIHN0YXRpYyBpc1ZhbGlkKGd1aWQ6IHN0cmluZykge1xyXG5cdFx0XHR2YXIgZ3VpZFJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChcIl5beyhdP1swLTlBLUZhLWZdezh9Wy1dPyhbMC05QS1GYS1mXXs0fVstXT8pezN9WzAtOUEtRmEtZl17MTJ9Wyl9XT8kXCIpO1xyXG5cdFx0XHRyZXR1cm4gZ3VpZFJlZ2V4cC50ZXN0KGd1aWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByaXZhdGUgc3RhdGljIHM0KCkge1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuXHRcdFx0XHQudG9TdHJpbmcoMTYpXHJcblx0XHRcdFx0LnN1YnN0cmluZygxKTtcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IHN0cmluZyB7XHJcblx0XHRcdHZhciBuZXdTaW1wbGVHdWlkID0gXCJ7XCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgK1xyXG5cdFx0XHRcdFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgXCJ9XCI7XHJcblxyXG5cdFx0XHRpZiAoU2ltcGxlR3VpZC5pc1ZhbGlkKG5ld1NpbXBsZUd1aWQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ld1NpbXBsZUd1aWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU2hvdWxkIE5ldmVyIEhhcHBlbiEgVGhlIGdlbmVyYXRlZCBndWlkIGlzIG5vdCB2YWxpZCFcIilcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTaW1wbGVJZGVudGl0eU1hcCB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaWRUb09iamVjdE1hcDogeyBbaWQ6IHN0cmluZ106IGFueSB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXAgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc1RyYWNrZWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZFRvT2JqZWN0TWFwW2lkXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkVG9PYmplY3RNYXBbaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFkZChpZDogc3RyaW5nLCBvYmplY3Q6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcFtpZF0gPSBvYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIGFsbCB0aGUgaWRzIGluIHRoZSBtYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0SWRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuaWRUb09iamVjdE1hcCkge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZGVsZXRlQnlJZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmlkVG9PYmplY3RNYXBbaWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5Db21tb25JbnRlcmZhY2VzIHtcclxuXHRleHBvcnQgaW50ZXJmYWNlIElFcXVhdGFibGU8VD4ge1xyXG5cdFx0ZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuO1xyXG5cdH1cclxufSIsIlxyXG5uYW1lc3BhY2UgREREVG9vbHMuQ29tbW9uSW50ZXJmYWNlcyB7XHJcbiAgICBcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZztcclxuICAgICAgICBfX29iamVjdEluc3RhbmNlSWQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZURhdGUgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlNlcmlhbGl6YWJsZURhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgX19kYXRlQXNTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZGF0ZUFzU3RyaW5nID0gZGF0ZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXREYXRlRnJvbVN0cmluZyhkYXRlQXNTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZUFzU3RyaW5nKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldERhdGUoKTogRGF0ZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZXJpYWxpemFibGVEYXRlLmdldERhdGVGcm9tU3RyaW5nKHRoaXMuX19kYXRlQXNTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZVJlZ0V4cCBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgICAgIF9fcmVndWxhckV4cHJlc3Npb246IHN0cmluZztcclxuICAgICAgICBfX2ZsYWdzOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlZ0V4cDogUmVnRXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BsaXRSZWdFeHBBbmRGbGFncyggcmVnRXhwICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNwbGl0UmVnRXhwQW5kRmxhZ3MoIHJlZ0V4cDogUmVnRXhwICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHJlYWxseVVubGlrZWx5U3RyaW5nID0gXCLCsMOyw6DDucKwwrDDssOgw7nCsMKww7LDoMO5wrBcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvIGdldCBhIGNvcnJlY3QgcmVnZXhwIHdlIG11c3QgdGFrZSBhd2F5IHRoZSBsZWFkaW5nIFwiL1wiIGFuZCB0aGUgZmxhZ3MhXHJcbiAgICAgICAgICAgIHZhciBjb25kaXRpb25lZFN0cmluZyA9IHJlZ0V4cC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gcmVwbGFjZXMgdGhlIGVzY2FwZWQgc2xhc2hlcyB3aXRoIHNvbWV0aGluZyB2ZXJ5IGltcHJvYmFibGVcclxuICAgICAgICAgICAgY29uZGl0aW9uZWRTdHJpbmcgPSBjb25kaXRpb25lZFN0cmluZy5yZXBsYWNlKFwiXFxcXC9cIiwgcmVhbGx5VW5saWtlbHlTdHJpbmcpO1xyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSBjb25kaXRpb25lZFN0cmluZy5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBwYXJ0c1swXSBtdXN0IGFsd2F5cyBiZSB0aGUgZW1wdHkgc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09IFwiXCIpIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiFcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc3RvcmUgd2hhdCBcclxuICAgICAgICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKHJlYWxseVVubGlrZWx5U3RyaW5nLCBcIlxcXFwvXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uID0gcGFydHNbMV07XHJcbiAgICAgICAgICAgIHRoaXMuX19mbGFncyA9IHBhcnRzWzJdIHx8IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoXCJzcGxpdFJlZ0V4cDogXCIgKyByZWdFeHAudG9TdHJpbmcoKSArIFwiIC4uLiBcIiArIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiArIFwiIC4uLiBcIiArIHRoaXMuX19mbGFncyApOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldFJlZ0V4cEZyb21SZWdFeHBBbmRGbGFncyhyZWd1bGFyRXhwcmVzc2lvbjogc3RyaW5nLCBmbGFnczogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjogUmVnRXhwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRSZWdFeHA6IFwiICsgdGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uICsgXCIgLi4uIFwiICsgdGhpcy5fX2ZsYWdzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmbGFncykge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4gPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uLCBmbGFncyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4gPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgYmFjayBhIFJlZ3VsYXIgRXhwcmVzc2lvbiBmcm9tIHRoZSBTZXJpYWxpemFibGVSZWdFeHAgaW5zdGFuY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UmVnRXhwKCk6IFJlZ0V4cCB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZXJpYWxpemFibGVSZWdFeHAuZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiwgdGhpcy5fX2ZsYWdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVOdWxsIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJTZXJpYWxpemFibGVOdWxsXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUd1aWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHRvdWNoSW5kZXggPSAxO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmVwYXJlcyB0aGUgaWQgZ2VuZXJhdG9yIGZvciBhIG5ldyBydW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlc2V0VG91Y2hJbmRleCgpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVG91Y2g7XHJcbiAgICAgICAgICAgIHNUaGlzLnRvdWNoSW5kZXggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TmV3SW5kZXgoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFNpbXBsZUd1aWQuZ2VuZXJhdGUoKVxyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICAgICAgc1RoaXMudG91Y2hJbmRleCsrO1xyXG4gICAgICAgICAgICByZXR1cm4gKHNUaGlzLnRvdWNoSW5kZXgrKyAtIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhZGRzIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSB0byBhbiBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHRvdWNoKG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFRvdWNoXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3SWQgPSBzVGhpcy5nZXROZXdJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCA9IG5ld0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZW1vdmVzIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkgZnJvbSBhbiBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVudG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgICAgIGlmIChjYXN0ZWQuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVEYXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlUmVnRXhwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVG91Y2gudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG4vLyBpbXBvcnQge1NpbXBsZUlkZW50aXR5TWFwfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXBcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbi8vIGltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyBKU09OIHN0cmluZyBzZXJpYWxpemF0aW9uLiBJdCBleHRlbmRzIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgSlNPTi5zdHJpbmdpZnkgdG8gYWxsb3cgc2VyaWFsaXphdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIG9mIGRhdGUgYW5kIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3RzLCBhbmQgb2JqZWN0IHJlZmVyZW5jZS5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcbiAgICBpbXBvcnQgU2ltcGxlSWRlbnRpdHlNYXAgPSBVdGlscy5TaW1wbGVJZGVudGl0eU1hcDtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRGVzZXJpYWxpemVyIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGlzIG5lZWRlZCB0byB0cmFjayBvYmplY3QgaW5zdGFuY2VzIHRvIGFjaGlldmUgY29ycmVjdCByZWNvbnN0cnVjdGlvbiBvZiB0aGUgb2JqZWN0IHRyZWUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaWRlbnRpdHlNYXA6IFNpbXBsZUlkZW50aXR5TWFwO1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzZXNpYWxpemVzIGFuIG9iamVjdCBmcm9tIGEgSlNPTiBzdHJpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZSh0b0Rlc2VyaWFsaXplOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgICAgICBEZXNlcmlhbGl6ZXIuaWRlbnRpdHlNYXAgPSBuZXcgU2ltcGxlSWRlbnRpdHlNYXAoKTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gSlNPTi5wYXJzZSh0b0Rlc2VyaWFsaXplLCBEZXNlcmlhbGl6ZXIuY3VzdG9tUmV2aXZlcik7XHJcbiAgICAgICAgICAgIERlc2VyaWFsaXplci5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFucyB0aGUgcmVjb25zaXR1dGVkIGluc3RhbmNlcyBmcm9tIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHksXHJcbiAgICAgICAgICogYW5kIGVtcHRpZXMgdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGNsZWFudXAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERlc2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcbiAgICAgICAgICAgIHZhciB1bnRvdWNoID0gVG91Y2gudW50b3VjaDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgaWRNYXAuZ2V0SWRzKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IGlkTWFwLmdldEJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB1bnRvdWNoKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGxlYXZlIHRoZSBpbnN0YW5jZXMgXCJnYXJiYWdlYWJsZVwiLi4uIGhvdyB0byB0ZXN0ID8gICAgXHJcbiAgICAgICAgICAgICAgICBpZE1hcC5kZWxldGVCeUlkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJdCBoYW5kbGVzIEZha2UqIGluc3RhbmNlcyB1c2VzIF9fb2JqZWN0SW5zdGFuY2VJZCB0byByZWJ1aWxkIGEgY29ycmVjdCBvYmplY3QgdHJlZS4gXHJcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBieSBKU09OLnBhcnNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tUmV2aXZlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEZXNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIHZhciBpZE1hcCA9IHNUaGlzLmlkZW50aXR5TWFwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNUaGlzLmhhc0JlZW5Ub3VjaGVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZE1hcC5pc1RyYWNrZWQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRNYXAuZ2V0QnlJZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlRGF0ZURlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc1RoaXMuRmFrZU51bGxEZXNlcmlhbGl6ZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTWFwLmFkZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBoYXNCZWVuVG91Y2hlZChvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgY2FzdGVkID0gPElUeXBlVHJhY2tpbmc+b2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAoY2FzdGVkLl9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFuYWdlcyBSZWdFeHAgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgICAgICogVE9ETzogRmluZCBhIHdheSB0byBtb3ZlIHRoaXMgcmVzcG9uc2liaWxpdHkgdG8gdGhlIFNlcmlhbGl6YWJsZVJlZ0V4cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZha2VSZWdFeHBEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSA9PT0gXCJTZXJpYWxpemFibGVSZWdFeHBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gU2VyaWFsaXphYmxlUmVnRXhwLmdldFJlZ0V4cEZyb21SZWdFeHBBbmRGbGFncyh2YWx1ZS5fX3JlZ3VsYXJFeHByZXNzaW9uLCB2YWx1ZS5fX2ZsYWdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5hZ2VzIERhdGUgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgICAgICogVE9ETzogRmluZCBhIHdheSB0byBtb3ZlIHRoaXMgcmVzcG9uc2liaWxpdHkgdG8gdGhlIFNlcmlhbGl6YWJsZVJlZ0V4cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiU2VyaWFsaXphYmxlRGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBTZXJpYWxpemFibGVEYXRlLmdldERhdGVGcm9tU3RyaW5nKHZhbHVlLl9fZGF0ZUFzU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5hZ2VzIE51bGwgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgICAgICogVE9ETzogRmluZCBhIHdheSB0byBtb3ZlIHRoaXMgcmVzcG9uc2liaWxpdHkgdG8gdGhlIFNlcmlhbGl6YWJsZU51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGYWtlTnVsbERlc2VyaWFsaXplcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlNlcmlhbGl6YWJsZU51bGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlRGF0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZVJlZ0V4cC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZU51bGwudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Ub3VjaC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZURhdGV9IGZyb20gXCIuL1NlcmlhbGl6YWJsZURhdGVcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVSZWdFeHB9IGZyb20gXCIuL1NlcmlhbGl6YWJsZVJlZ0V4cFwiO1xyXG4vLyBpbXBvcnQge1RvdWNofSBmcm9tIFwiLi9Ub3VjaFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemVyIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXJpYWxpemVzIGFuIG9iamVjdCB0byBhIEpTT04gc3RyaW5nLCBrZWVwZWluZyB0cmFjayBvZiB0aGUgaW5zdGFuY2VzIG9mIHRoZSBvYmplY3RzIHNlcmlhbGl6ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICBUb3VjaC5yZXNldFRvdWNoSW5kZXgoKTtcclxuICAgICAgICAgICAgdG9TZXJpYWxpemUgPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gSlNPTi5zdHJpbmdpZnkodG9TZXJpYWxpemUsIFNlcmlhbGl6ZXIuY3VzdG9tU2VyaWFsaXplcik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgICAgIFNlcmlhbGl6ZXIudW50b3VjaFNvdXJjZU9iamVjdCh0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJlcHJvY2VzcyB0aGUgb2JqZWN0IHRyZWUgdG8gYmUgc2VyaWFsaXplZCB0byBmaW5kIGFuZCByZXBsYWNlIERhdGUgb2JqZWN0cyB3aXRoIHNvbWV0aGluZyBkaWZmZXJlbnQuLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VEYXRlID0gbmV3IFNlcmlhbGl6YWJsZURhdGUoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VOdWxsID0gbmV3IFNlcmlhbGl6YWJsZU51bGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VOdWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZVJlZ0V4cCA9IG5ldyBTZXJpYWxpemFibGVSZWdFeHAoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlUmVnRXhwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB1bnRvdWNoU291cmNlT2JqZWN0KHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc291cmNlT2JqZWN0ID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoVG91Y2guaGFzQmVlblRvdWNoZWQoc291cmNlT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgVG91Y2gudW50b3VjaChzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzVGhpcy51bnRvdWNoU291cmNlT2JqZWN0KGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gU2VyaWFsaXplci5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUG9zdHByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBTZXJpYWxpemFibGVEYXRlL1JlZ0V4cCBvYmplY3RzIHdpdGggT3JpZ2luYWwgdHlwZXMgYWdhaW4uLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSAoPFNlcmlhbGl6YWJsZURhdGU+Y3VycmVudCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVOdWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlUmVnRXhwPmN1cnJlbnQpLmdldFJlZ0V4cCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJdCdzIGR1dHkgaXMgdG8gXCJ0b3VjaFwiIGV2ZXJ5IG9iamVjdCBwcm9jZXNzZSB0byBhZGQgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5LlxyXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5zdHJpbmdpZnlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21TZXJpYWxpemVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRvdWNoLmhhc0JlZW5Ub3VjaGVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvdWNoLnRvdWNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vKipcclxuICogRGVmaW5lcyBkZWZhdWx0IGJlaGF2aW9yIGFuZCBpbnRlcmZhY2VzIGZvciBhIFBlcnNpc3RhYmxlIE9iamVjdCwgYW4gb2JqZWN0IHRoYXQgaGFzIGEgc3RhdGUgdGhhdCB3aWxsIHByb2JhYmx5IGJlIHBlcnNpc3RlZC4gSXQgZ2l2ZXMgc3VwcG9ydCB0byBcInVwZ3JhZGVcIiBwZXJzaXN0ZWQgb2JqZWN0cy5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblx0XHJcblx0aW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSVBlcnNpc3RhYmxlIGV4dGVuZHMgSVR5cGVUcmFja2luZyB7XHJcblx0XHRnZXRVcGdyYWRlZEluc3RhbmNlPyhmcm9tSW5zdGFuY2U6IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZTtcclxuXHRcdGdldFN0YXRlKCk6IElUeXBlVHJhY2tpbmc7XHJcblx0XHRzZXRTdGF0ZShzdGF0ZTogSVR5cGVUcmFja2luZyk7XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuLy8gaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcbiAgICBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICAgICAgLy8gVGhyb3duIGJ5IHBlcnNpc3RhYmxlIG9iamVjdHNcclxuICAgICAgICBzdGF0aWMgU3RhdGVJc05vdEFuT2JqZWN0ID0gXCJTdGF0ZSBpcyBub3QgYW4gT2JqZWN0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVOYW1lTm90U2V0ID0gXCJUeXBlTmFtZSBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVWZXJzaW9uTm90U2V0ID0gXCJUeXBlVmVyc2lvbiBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFVuYWJsZVRvSW5zdGFudGlhdGVUeXBlID0gXCJVbmFibGUgdG8gSW5zdGFudGlhdGUgVHlwZVwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlUmVnaXN0cnlOb3RTZXQgPSBcIlR5cGVSZWdpc3RyeSBub3Qgc2V0XCI7XHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgRmFjdG9yeS9UeXBlUmVnaXN0cnlcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdFJlZ2lzdGVyZWQgPSBcIlR5cGUgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGUgVHlwZVJlZ2lzdHJ5XCI7XHJcbiAgICAgICAgc3RhdGljIENhbm5vdFJlZ2lzdGVyVW5kZWZpbmVkID0gXCJ0eXBlUHJvdG90eXBlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFwiXHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgVXBncmFkZXJcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdEluc3RhdGlhYmxlID0gXCJUeXBlIGlzIG5vdCBpbnN0YW50aWFibGVcIjtcclxuICAgICAgICBzdGF0aWMgVXBncmFkZVBhdGhOb3RGb3VuZCA9IFwiVXBncmFkZSBQYXRoIG5vdCBGb3VuZFwiO1xyXG4gICAgICAgIHN0YXRpYyBJbmNvcnJlY3RWZXJzaW9uRm9ybWF0ID0gXCJJbmNvcnJlY3QgVmVyc2lvbiBGb3JtYXRcIjtcclxuICAgICAgICBzdGF0aWMgV3JvbmdWZXJzaW9uSW5VcGdyYWRlZEluc3RhbmNlID0gXCJXcm9uZyBWZXJzaW9uIGluIFVwZ3JhZGVkIEluc3RhbmNlXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgVmFsdWVPYmplY3QgcGF0dGVybi5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJRXF1YXRhYmxlID0gQ29tbW9uSW50ZXJmYWNlcy5JRXF1YXRhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSUVxdWF0YWJsZTxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgSVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuSVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4vRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuLy8gaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBEZXNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLkRlc2VyaWFsaXplcjtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVBlcnNpc3RhYmxlT2JqZWN0IGltcGxlbWVudHMgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgcHVibGljIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOYW1lTm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlVmVyc2lvbk5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0b1JlY29uc3RpdHV0ZSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcmVjb25zdGl0dXRlZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh0b1JlY29uc3RpdHV0ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVjb25zdGl0dXRlZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0U3RhdGU8VFN0YXRlPihzdGF0ZTogVFN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5TdGF0ZUlzTm90QW5PYmplY3QsIFwic3RhdGUgZGV2ZSBlc3NlcmUgdW4gb2dnZXR0b1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUVsZW1lbnQgPSBzdGF0ZVtlbGVtZW50XTtcclxuICAgICAgICAgICAgICAgIHRoaXNbZWxlbWVudF0gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUoY3VycmVudFN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggdGhpcy5nZXRTdGF0ZSgpICkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0IHtcclxuXHJcblx0aW1wb3J0IEJhc2VQZXJzaXN0YWJsZU9iamVjdCA9IFBlcnNpc3RhYmxlT2JqZWN0LkJhc2VQZXJzaXN0YWJsZU9iamVjdDtcclxuXHRpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuXHJcblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG5cdFx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRcdGltcGxlbWVudHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdFx0Ly8gUGVyIG9nbmkgcHJvcHJpZXTDoCBkZWxsJ0lURU0gOnZlcmlmaWNvIGwndWd1YWdsaWFuemEgY29uIGwnaXN0YW56YSBhdHR1YWxlIFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gXy5pc0VxdWFsKGl0ZW0sIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgZ2VuZXJhbCBhbmQgY29tbW9ubHkgdXNlZCBWYWx1ZU9iamVjdHMuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0cyB7XHJcblxyXG4gICAgaW1wb3J0IFNpbXBsZUd1aWQgPSBVdGlscy5TaW1wbGVHdWlkO1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBHdWlkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEd1aWQ+IGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PEd1aWQ+IHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWUgPSBcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCI7XHJcbiAgICAgICAgcHVibGljIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ3VpZDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihndWlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3VpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkID0gZ3VpZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkID0gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IEd1aWQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEd1aWQoU2ltcGxlR3VpZC5nZW5lcmF0ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFZhbHVlT2JqZWN0cyB1c2VkIGFzIGtleSBNVVNUIGltcGxlbWVudCBhIHRvU3RyaW5nIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGtleSBhcyBzdHJpbmcuXHJcbiAgICAgICAgcHVibGljIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ndWlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtUeXBlUmVnaXN0cnl9IGZyb20gXCIuL1R5cGVSZWdpc3RyeVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5IGlzIGFuIGhlbHBlciBjbGFzcyB0byBjcmVhdGUgYW5kIHJlY29uc3RpdHV0ZSBzdGF0ZmV1bCBvYmplY3RzLlxyXG4gICAgICogSXQgZ3VyYW50ZWVzIHRoYXQgYSBzdGF0ZnVsIG9iamVjdCBpcyBhbHdheXMgY3JlYXRlZCBvciByZWNvbnN0aXR1dGVkIHRvIGl0cyBsYXRlc3QgdmVyc2lvbi4gIFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRmFjdG9yeSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHR5cGVSZWdpc3RyeTogVHlwZVJlZ2lzdHJ5O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWdpc3RlcnMgYSBuZXcgSVBlcnNpc3RhYmxlIHR5cGUgd2l0aCB0aGUgRmFjdG9yeVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcsIHR5cGVQcm90b3R5cGU6IG5ldyAoKSA9PiBJUGVyc2lzdGFibGUpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRmFjdG9yeTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy50eXBlUmVnaXN0cnkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLnR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RlclR5cGUodHlwZU5hbWUsIHR5cGVWZXJzaW9uLCB0eXBlUHJvdG90eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCB0eXBlLiBJZiB0eXBlVmVyc2lvbiBpcyBub3Qgc3VwcGxpZWQsIGxhdGVzdCBhdmFpbGFibGUgdmVyc2lvbiBpcyByZXR1cm5lZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZyk6IFQge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGYWN0b3J5LnR5cGVSZWdpc3RyeSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlUmVnaXN0cnlOb3RTZXQsIFwiUGxlYXNlIHJlZ2lzdGVyIGF0IGxlYXN0IGEgdHlwZSB3aXRoIHRoZSBGYWN0b3J5LlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFR5cGVSZWdpc3RyeS5nZXRUeXBlSW5zdGFuY2U8VD4odHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0eXBlVmVyc2lvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHR5cGVUb0luc3RhdGlhdGUgPSBGYWN0b3J5LmNvbXB1dGVGdWxseVF1YWxpZmllZFR5cGVOYW1lKHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRvUmV0dXJuID0gPFQ+ZXZhbChcIm5ldyBcIiArIHR5cGVUb0luc3RhdGlhdGUgKyBcIigpXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBUaGlzIGZhaWx1cmUgaXMgZXhwZWN0ZWQgaWYgd2UgYXJlIGFza2luZyBmb3IgdGhlIGxhdGVzdCB2ZXJzaW9uIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZTxUPih0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodG9SZXR1cm4uX190eXBlVmVyc2lvbiAhPSB0eXBlVmVyc2lvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0b1JldHVybiA9IDxUPmV2YWwoXCJuZXcgXCIgKyB0eXBlTmFtZSArIFwiKClcIik7XHJcbiAgICAgICAgICAgIC8vIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGluc3RhbmNlIGZyb20gaXRzIHN0YXRlLiBXaWxsIGFsd2F5cyByZXR1cm4gdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIG9mIHRoZSBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU9iamVjdHNGcm9tU3RhdGUoc3RhdGU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcInN0YXRlIGNhbm5vdCBiZSAndW5kZWZpbmVkJ1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJzdGF0ZSBjYW5ub3QgYmUgJ251bGwnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE1hbmFnZXMgdGhlIFwic3BlY2lhbFwiIHR5cGVzIERhdGUgYW5kIFJlZ0V4cC5cclxuICAgICAgICAgICAgaWYgKHN0YXRlIGluc3RhbmNlb2YgRGF0ZSB8fCBzdGF0ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKEZhY3RvcnkuaXNQZXJzaXN0YWJsZU9iamVjdChzdGF0ZSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlcnNpc3RhYmxlOiBJUGVyc2lzdGFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RhYmxlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2Uoc3RhdGUuX190eXBlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGFibGUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FycmFudGllcyB0aGF0IGEgdHlwZSBpcyBhbHdheXMgcmV0dXJuZWQgYXQgaXRzIGxhdGVzdCB2ZXJzaW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGdyYWRlZFBlcnNpc3RhYmxlID0gVXBncmFkZXIudXBncmFkZShwZXJzaXN0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZ3JhZGVkUGVyc2lzdGFibGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCBpcyBub3QgYSBwZXJzaXN0YWJsZU9iamVjdCBjYW4gYmUgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGFuZCBtdXN0IGJlIHJlY29uc3RpdHV0ZWRcclxuICAgICAgICAgICAgICAgIHZhciB0b1JldHVybjogYW55ID0gQXJyYXkuaXNBcnJheShzdGF0ZSkgPyBbXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY3VycmVudEVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc0VsZW1lbnQgPSBzdGF0ZVtjdXJyZW50RWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgdG9SZXR1cm5bY3VycmVudEVsZW1lbnRdID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHRoaXNFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBcIlByaW1pdGl2ZVwiXCIgdHlwZXMgYXJlIHJldHVybmVkIGFzIHRoZXkgYXJlXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiBhbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgXCJJUGVyc2lzdGFibGVcIiBpbnRlcmZhY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNQZXJzaXN0YWJsZU9iamVjdChvYmplY3RUb1Rlc3Q6IGFueSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RUb1Rlc3QgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwZXJzaXN0YWJsZSA9IDxJUGVyc2lzdGFibGU+b2JqZWN0VG9UZXN0O1xyXG4gICAgICAgICAgICBpZiAoIXBlcnNpc3RhYmxlLl9fdHlwZU5hbWUgfHwgcGVyc2lzdGFibGUuX190eXBlTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBlcnNpc3RhYmxlLl9fdHlwZVZlcnNpb24gfHwgcGVyc2lzdGFibGUuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiBhIHR5cGUgY2FuIGJlIGluc3RhdGlhdGVkIChhdCBpdHMgbGF0ZXN0IHZlcnNpb24pLiBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1R5cGVJbnN0YW50aWFibGUodHlwZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcFR5cGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIFwiRnVsbHkgUXVhbGlmaWVkIFR5cGVOYW1lXCIgb2YgdHlwZSBcInR5cGVOYW1lXCIgZm9yIHRoZSBzdXBwbGllZCBcInZlcnNpb25cIi5cclxuICAgICAgICAgKiBGUVROIGlzIGNvbXB1dGVkIGZyb20gdHlwZU5hbWUgYWRkaW5nIHRoZSB2ZXJzaW9uIHN0cmluZyBpbiB0aGUgcmlnaHQgcGxhY2UuXHJcbiAgICAgICAgICogRXhhbXBsZVxyXG4gICAgICAgICAqIHR5cGVOYW1lOiBBcHBsaWNhdGlvbi5Nb2RlbC5PZmZlcnRhXHJcbiAgICAgICAgICogdmVyc2lvbjogdjJcclxuICAgICAgICAgKiByZXR1cm46IEFwcGxpY2F0aW9uLk1vZGVsLnYyLk9mZmVydGFcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBwcml2YXRlIHN0YXRpYyBjb21wdXRlRnVsbHlRdWFsaWZpZWRUeXBlTmFtZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyAgICAgdmFyIGZxdG5QYXJ0c0FycmF5ID0gdHlwZU5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIC8vICAgICB2YXIgY2xhc3NOYW1lID0gZnF0blBhcnRzQXJyYXkucG9wKCk7XHJcbiAgICAgICAgLy8gICAgIGZxdG5QYXJ0c0FycmF5LnB1c2godHlwZVZlcnNpb24pO1xyXG4gICAgICAgIC8vICAgICBmcXRuUGFydHNBcnJheS5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIHZhciBuZXdGcXRuID0gZnF0blBhcnRzQXJyYXkuam9pbihcIi5cIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBuZXdGcXRuO1xyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFVwZ3JhZGVyIGlzIGFuIGhlbHBlciBjbGFzcyB0byBhdXRvbWF0ZSB0aGUgXCJ1cGdyYWRlIHByb2Nlc3NcIiBvZiBhbiBvYmplY3QncyBzdGF0ZS5cclxuICAgICAqIFRoZSBVcGdyYWRlciBpcyBmb3VuZCBvbiB0aGVzZSBwcmluY2lwbGVzOlxyXG4gICAgICogICogVGhlIGxhdGVzdCB2ZXJzaW9uIEZRVE4gbXVzdCBtYXRjaCB0aGUgb25lIHNwZWNpZmllZCBieSB0aGUgcHJvcGVydHkgX190eXBlTmFtZSwgd2hpY2ggaXMgaW4gdGhlIGZvcm0gbmFtZXNwYWNlLm9iamVjdE5hbWUuXHJcbiAgICAgKiAgKiBPbGRlciB2ZXJzaW9ucyBvZiBhIFBlcnNpc3RhYmxlT2JqZWN0IE1VU1QgaGF2ZSBhIEZRVE4gaW4gdGhlIGZvcm0gbmFtZXNwYWNlLjx2ZXJzaW9uPi5vYmplY3ROYW1lLlxyXG4gICAgICogICogX190eXBlVmVyc2lvbiBNVVNUIGJlIHNwZWNpZmllZCBhcyB2PHZlcnNpb25OdW1iZXI+IHdoZXJlIHZlcnNpb24gaXMgYW4gaW50ZWdlci5cclxuICAgICAqICAqIEFsbCBvYmplY3QncyB2ZXJzaW9ucyAoZXhjbHVkaW5nIHYxKSBNVVNUIHByb3ZpZGUgYW4gZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QgdGhhdCBrbm93cyBob3cgdG8gbW9kaWZ5IHN0YXRlIHRvIGdvIGZyb20gXHJcbiAgICAgKiAgICB2ZXJzaW9uIHY8biAtIDE+IHRvIHY8bj4sIHdoZXJlIG4gaXMgdGhlIHZlcnNpb24gb2YgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBnZXRVcGdyYWRlZEluc3RhbmNlIG1ldGhvZC4gICBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFVwZ3JhZGVyIHtcclxuXHJcbiAgICAgICAgLy8gQ29udGFpbnMgdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIGZvciBlYWNoIHR5cGUuIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxhdGVzdFR5cGVWZXJzaW9uTWFwOiB7IFt0eXBlTmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAvLyBDb250YWlucyBmbGFncyB0byBkZXRlcm1pbmUgaWYgbGF0c3RUeXBlVmVyc2lvbk1hcCBmb3IgYSBzcGVjaWZpYyB0eXBlIGhhcyBiZWVuIGNhbGN1bGF0ZWRcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25NYXBCdWlsdDogeyBbdHlwZU5hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBidWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wSW5zdGFuY2UgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBVcGdyYWRlci5sYXRlc3RUeXBlVmVyc2lvbk1hcFt0eXBlTmFtZV0gPSB0bXBJbnN0YW5jZS5fX3R5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYXRlc3QgcG9zc2libGUgdmVyc2lvbiBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIGlzIFwiICsgdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5vdEluc3RhdGlhYmxlLCBcIlRoZSB0eXBlIFwiICsgdHlwZU5hbWUgKyBcIiBjYW5ub3QgYmUgaW5zdGFudGlhdGVkLCBzbyBpdCBpcyBpbXBvc3NpYmxlIHRvIGlkZW50aWZ5IHRoZSBsYXRlc3QgcG9zc2libGUgdmVyc2lvbi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIC8vIExvb2tzIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24sIGlmIG5vdCBhbHJlYWR5IGRvbmUuXHJcbiAgICAgICAgICAgIGlmICghVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBVcGdyYWRlci5idWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgdmVyc2lvbiBzdXBwbGllZCBkb2Vzbid0IG1hdGNoIHRoZSBsYXRlc3QgdmVyc2lvbiBpbiB0aGUgbWFwLCB0aGUgaW5zdGFuY2UgbXVzdCBiZSB1cGdyYWRlZC5cclxuICAgICAgICAgICAgaWYgKFVwZ3JhZGVyLmxhdGVzdFR5cGVWZXJzaW9uTWFwW3R5cGVOYW1lXSAhPT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdXBncmFkZShpbnN0YW5jZUZyb206IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZSB7XHJcbiAgICAgICAgICAgIC8vIElmIG9iamVjdCBkb2Vzbid0IG5lZWQgdG8gdXBncmFkZSwgdGhlbiB3ZSBhcmUgZG9uZSFcclxuICAgICAgICAgICAgaWYgKCFVcGdyYWRlci5pc0xhdGVzdFZlcnNpb25Gb3JUeXBlKGluc3RhbmNlRnJvbS5fX3R5cGVOYW1lLCBpbnN0YW5jZUZyb20uX190eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZUZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKGluc3RhbmNlRnJvbS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVySW5zdGFuY2UgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShpbnN0YW5jZUZyb20uX190eXBlTmFtZSwgbmV4dFZlcnNpb24pO1xyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSB1cGdyYWRlckluc3RhbmNlLmdldFVwZ3JhZGVkSW5zdGFuY2UoaW5zdGFuY2VGcm9tKTtcclxuICAgICAgICAgICAgLy8gVmVyaWZpZXMgdGhhdCB2ZXJzaW9uIGlzIGVmZmVjdGl2ZWx5IHVwZ3JhZGVkXHJcbiAgICAgICAgICAgIGlmICh1cGdyYWRlZC5fX3R5cGVWZXJzaW9uICE9IG5leHRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLldyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSwgXCJUaGUgZXhwZWN0ZWQgdmVyc2lvbiBvZiB0aGUgdXBncmFkZWQgaW5zdGFuY2Ugd2FzIFwiICsgbmV4dFZlcnNpb24gKyBcIiB3aGlsZSB3YXMgZm91bmQgdG8gYmUgXCIgKyB1cGdyYWRlckluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBVcGdyYWRlci51cGdyYWRlKHVwZ3JhZGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyBWZXJzaW9uIG11c3QgYmUgaW4gdGhlIGZvcm0gdk4gd2hlcmUgdiBpcyBhIGNvbnN0YW50IGFuZCBOIGlzIGFuIGludGVnZXIuXHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgICAgIGlmICghdmVyc2lvblJlLnRlc3QodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQsIFwiU3BlY2lmaWVkIHZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gTnVtYmVyKHR5cGVWZXJzaW9uLnN1YnN0cigxKSk7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgMTtcclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dFZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGFzcyBUeXBlUmVnaXN0cnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RyeTogeyBbdHlwZU5hbWU6IHN0cmluZ106IHsgW3R5cGVWZXJzaW9uOiBzdHJpbmddOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBJUGVyc2lzdGFibGUgfSB9ID0ge307XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbGF0ZXN0VmVyc2lvbnM6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY29tbW9uVHlwZXNSZWdpc3RlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcsIHR5cGVQcm90b3R5cGU6IG5ldyAoKSA9PiBJUGVyc2lzdGFibGUpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVQcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQsIFwidHlwZVByb3RvdHlwZSBzdXBwbGllZCBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBudWxsIG9yIHVuZGVmaW5lZCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMudmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gPSB0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSB8fCB7fTtcclxuICAgICAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSA9IHR5cGVQcm90b3R5cGU7XHJcblxyXG4gICAgICAgICAgICBzVGhpcy51cGRhdGVMYXRlc3RWZXJzaW9ucyh0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RlcnMgdGhlIHR5cGVzIGluIFZhbHVlT2JqZWN0cyBvbiBmaXJzdCB1c2UuLi4gXHJcbiAgICAgICAgICAgIC8vIFRPRE8gZmluZCBhIHdheSB0byBkZWxlZ2F0ZSB0eXBlIHJlZ2lzdHJhdGlvbiB0byB0aGUgT2JqZWN0cyBpbiB0aGUgY29sbGVjdGlvbiwgW3ZpYSBwc2V1ZG8gcmVmbGVjdGlvbiA/XVwiXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMuY29tbW9uVHlwZXNSZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5jb21tb25UeXBlc1JlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZShcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCIsIFwidjFcIiwgR3VpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZSA9IHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmlzVmVyc2lvbkdyZWF0ZXIodHlwZVZlcnNpb24sIHJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25HcmVhdGVyKHZTdWJqZWN0OiBzdHJpbmcsIHZSZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2UzogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlN1YmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgdlI6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZSZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdlMgPiB2UjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RWZXJzaW9uTnVtYmVyKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uOiBzdHJpbmcgPSB0eXBlVmVyc2lvbi5yZXBsYWNlKFwidlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgdmFyIGFzTnVtYmVyID0gTnVtYmVyKHZlcnNpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXNOdW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldFR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIGlmICghdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIHR5cGVWZXJzaW9uID0gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJWZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBvZiBUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9JbnN0YW50aWF0ZSA9IHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl07XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IDxUPihuZXcgKDxhbnk+dG9JbnN0YW50aWF0ZSkoKSk7XHJcbiAgICAgICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZU5hbWUgPSB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgIC8vdG9SZXR1cm4uX190eXBlVmVyc2lvbiA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIGlmIHNwZWNpZmllZCB2ZXJzaW9uIGlzIHRoZSBsYXRlc3QgZm9yIHR5cGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpID09PSB0eXBlVmVyc2lvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgbm8gdmVyc2lvbiB0eXBlIGlzIGRlZmluZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldExhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIC8vIFZlcnNpb24gbXVzdCBiZSBpbiB0aGUgZm9ybSB2TiB3aGVyZSB2IGlzIGEgY29uc3RhbnQgYW5kIE4gaXMgYW4gaW50ZWdlci5cclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy52ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFRocm93IHRoZSBjb3JyZWN0IGV4Y2VwdGlvbjtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEb21haW5FdmVudCBleHRlbmRzIElQZXJzaXN0YWJsZSwgSVR5cGVUcmFja2luZyB7XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRXZlbnRIYW5kbGVyIHtcclxuICAgICAgICAoZG9tYWluRXZlbnQ6IElEb21haW5FdmVudCk6IHZvaWQ7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEaXNwYXRjaGVyIHtcclxuICAgICAgICByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpO1xyXG4gICAgICAgIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURpc3BhdGNoZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRGlzcGF0Y2hlcn0gZnJvbSBcIi4vSURpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRG9tYWluRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uOiBJRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24oZGlzcGF0Y2hlcjogSURpc3BhdGNoZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uID0gZGlzcGF0Y2hlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24ucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24udW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24uZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBTaW1wbGVHdWlkID0gVXRpbHMuU2ltcGxlR3VpZDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5Qcm9jZXNzRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBkZWxlZ2F0ZXNSZWdpc3RyeTogeyBbZXZlbnRUeXBlTmFtZTogc3RyaW5nXTogSUV2ZW50SGFuZGxlcltdIH0gPSB7fTtcclxuXHJcbiAgICAgICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5ID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBZGRzIGFuIGhhbmRsZSBpZiAoYW5kIG9ubHkgaWYpIHRoZSBoYW5kbGVyIGhhcyBub3QgYmVlbiBcInN0YW1wZWRcIlxyXG4gICAgICAgICAgICBpZiAoISg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0ucHVzaChoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBBY3Qgb25seSBpZCBoYW5kbGVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIGlmICgoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXVtlbGVtZW50XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKDxhbnk+Y3VycmVudEVsZW1lbnQpLl9faGFuZGxlcklkID09PSAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdLnNwbGljZShOdW1iZXIoZWxlbWVudCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBFcnJvcnM6IEVycm9yW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChFcnJvcnMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5idWlsZEVycm9yTWVzc2FnZShFcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSBcIkRpc3BhdGNoZXIgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJ1aWxkRXJyb3JNZXNzYWdlKEVycm9yczogRXJyb3JbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IG9mIEVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSBlbGVtZW50Lm5hbWUgKyBcIjpcIiArIGVsZW1lbnQubWVzc2FnZSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRXF1YXRhYmxlfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlXCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuXHRpbXBvcnQgSUVxdWF0YWJsZSA9IENvbW1vbkludGVyZmFjZXMuSUVxdWF0YWJsZTtcclxuXHRpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIElFbnRpdHk8VCwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4gZXh0ZW5kcyBJRXF1YXRhYmxlPFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cdFx0Z2V0S2V5KCk6IFRLZXk7XHJcblx0XHRzZXRLZXkoa2V5OiBUS2V5KTogdm9pZDtcclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUtleVZhbHVlT2JqZWN0PFQ+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VD5cclxuICAgICAgICBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXJpdmVkIGNsYXNzZXMgbXVzdCByZWltcGxlbWVudCB0aGlzIG1ldGhvZC4gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4vSUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzZXMgYW5kIGludGVyZmFjZXMgdG8gaW1wbGVtZW50IGFuIEVudGl0eSwgYSBwZXJzaXN0YWJsZSBvYmplY3QuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5cdGltcG9ydCBCYXNlUGVyc2lzdGFibGVPYmplY3QgPSBQZXJzaXN0YWJsZU9iamVjdC5CYXNlUGVyc2lzdGFibGVPYmplY3Q7XHJcblx0aW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcblx0aW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbnRpdHk8VCBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcblx0XHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdFx0aW1wbGVtZW50cyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcblx0XHRwcml2YXRlIGtleTogVEtleTtcclxuXHJcblx0XHRwcm90ZWN0ZWQgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcblx0XHRcdERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5rZXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBzZXRLZXkoa2V5OiBUS2V5KTogdm9pZCB7XHJcblx0XHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0fTtcclxuXHJcblx0XHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdFx0aWYgKCFpdGVtKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBpdGVtLmdldEtleSgpLmVxdWFscyh0aGlzLmdldEtleSgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUVudGl0eS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0lFbnRpdHlcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5BZ2dyZWdhdGUge1xyXG5cclxuICAgICAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgICAgICBpbXBvcnQgSUVudGl0eSA9IEVudGl0eS5JRW50aXR5O1xyXG5cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElBZ2dyZWdhdGVSb290PFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICAgICAgICAgIGV4dGVuZHMgSUVudGl0eTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXJcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFJldmlzaW9uSWQoKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBwZXJmZWN0bHlNYXRjaChhbm90aGVyOiBJQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW47XHJcbiAgICAgICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0Jhc2VFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9CYXNlRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9JRW50aXR5XCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyB0aGUgQWdncmVnYXRlIFBhdHRlcm4gYnkgZGVmaW5pbmcgaW50ZXJmYWNlcyBhbmQgYmFzZSBiZWhhdmlvciBmb3IgYW4gQWdncmVnYXRlUm9vdC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5BZ2dyZWdhdGUge1xyXG5cclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBFbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBJRW50aXR5ID0gRW50aXR5LklFbnRpdHk7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgYmVoYXZpb3Igb2YgYW4gQWdncmVnYXRlUm9vdCwgd2hpY2ggaXMgYmFzaWNhbGx5IGFuIGVudGl0eS4uLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFnZ3JlZ2F0ZVJvb3Q8XHJcbiAgICAgICAgVCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgICAgICA+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlRW50aXR5PFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgSUVudGl0eTxULCBUS2V5PlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgX19yZXZpc2lvbklkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JldmlzaW9uSWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW5jcmVtZW50UmV2aXNpb25JZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldmlzaW9uSWQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBhcmVzIGFuIGFnZ3JlZ2F0ZSB3aXRoIGFub3RoZXIuIFJldHVybnMgdHJ1ZSBpZiBhZ2dyZWdhdGUncyBkYXRhIGFyZSBleGFjdGx5IGVxdWFsLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwZXJmZWN0bHlNYXRjaChvdGhlcjogQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3RoZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNPbmUgPSB0aGlzLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHZhciB0aGVPdGhlciA9IG90aGVyLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkbyB0aGUgY29tcGFyaXNvbiBqdXN0IGxpa2UgdmFsdWUgb2JqZWN0cy4uLiBuYWl2ZSBidXQgZnVuY3Rpb25hbCBhdCB0aGlzIHRpbWUuXHJcbiAgICAgICAgICAgIHZhciBjb21wYXJpc29uID0gXy5pc0VxdWFsKHRoaXNPbmUsIHRoZU90aGVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgZXhwb3J0IHZhciBQcm9taXNlSGFuZGxlcjogbmcuSVFTZXJ2aWNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBJUHJvbWlzZSA9IG5nLklQcm9taXNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBEZWZlcnJlZCA9IG5nLklEZWZlcnJlZDtcclxuIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNvZGUgZm9yY2VzIERERFRvb2xzIHRvIHVzZSAkcSBwcm9taXNlcyBpZiBhbmd1bGFyIGlzIGRlZmluZWQgYXQgdGhlIG1vbWVudCBkZGQtdG9vbHMgaXMgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGlmICh0eXBlb2YgYW5ndWxhciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHZhciAkaW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnXSk7XHJcbiAgICAgICAgdmFyICRxID0gJGluamVjdG9yLmdldChcIiRxXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFByb21pc2VIYW5kbGVyID0gJHE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChRKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhpcyBjYXN0IGlzIGVmZmVjdGl2ZWx5IGEgcmlzayEgSG93IHRvIG1hbmFnZSBpdCBjb3JyZWN0bHkgPyBcclxuICAgICAgICAgICAgUHJvbWlzZUhhbmRsZXIgPSA8bmcuSVFTZXJ2aWNlPig8YW55PlEpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgZGlkbid0IGZpbmQgYSBzdWl0YWJsZSBQcm9taXNlSGFuZGxlclxyXG4gICAgaWYgKFByb21pc2VIYW5kbGVyID09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiQSBQcm9taXNlIEhhbmRsZXIgbXVzdCBiZSBkZWZpbmVkLCBzdXBwb3J0ZWQgYXJlIGFuZ3VsYXIncyAkcSBvciBrcmlzIGtvd2FsJ3MgUS4gVGhpcyBtZWFucyB0aGF0IFEgb3IgYW5ndWxhciBNVVNUIGJlIGxvYWRlZCBiZWZvcmUgZGRkLXRvb2xzLmpzXCIpO1xyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgUmVwb3NpdG9yeSB0byBwZXJzaXN0IEFnZ3JlZ2F0ZXMuIENvbnRhaW5zIGEgcmVmZXJlbmNlIGluIG1lbW9yeSByZXBvc2l0b3J5LlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVJlcG9zaXRvcnk8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgcmVwb3NpdG9yeSBnaXZlbiBpdHMgaWQuIEl0IGdpdmVzIGJhY2sgYSBmdWxseSByY29uc3RpdHV0ZWQgQWdncmVnYXRlIFJvb3QsIHNvIHRoYXQgIHdpbGwgYmUgcG9zc2libGUgdG8gY2FsbCBhbnkgcHVibGljIG1ldGhvZC5cclxuICAgICAgICAgKiBmaXJlcyBJdGVtUmV0cmlldmVkIGV2ZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IFQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlcGxhY2VzIGFuIGl0ZW0uIEp1c3QgbGlrZSBzYXZlLCBidXQgaXQgZG9lc24ndCBpbmNyZW1lbnQgdGhlIHJldmlzaW9uSWQgYW5kIGtlZXAgdGhlIG9uZSBzdG9yZWQgaW4gdGhlIEFnZ3JlZ2F0ZVJvb3RcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlbGV0ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZUFjdGlvbiB3aWxsIGJlIHBhc3NlZCB0byByZXBvc2l0b3JpZXMgc2F2ZUltcGxlbWVudGF0aW9uIHNvIHRoYXQgY2xpZW50IGNhbiB0YWtlIGRlY2lzaW9ucyBvbiB3aGF0IHRvIGRvIHdoZW4gYWRkaW5nIG9yIHJlcGxhY2luZyBhbiBpdGVtIGlmIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGVudW0gU2F2ZUFjdGlvbkVudW0ge1xyXG4gICAgICAgIEFkZCxcclxuICAgICAgICBVcGRhdGVcclxuICAgIH07XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFJlcG9zaXRvcnkgdG8gcGVyc2lzdCBBZ2dyZWdhdGVzLiBDb250YWlucyBhIHJlZmVyZW5jZSBpbiBtZW1vcnkgcmVwb3NpdG9yeS5cclxuICovXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBRLklQcm9taXNlO1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgcmVwb3NpdG9yeSBnaXZlbiBpdHMgaWQuIEl0IGdpdmVzIGJhY2sgYSBmdWxseSByY29uc3RpdHV0ZWQgQWdncmVnYXRlIFJvb3QsIHNvIHRoYXQgIHdpbGwgYmUgcG9zc2libGUgdG8gY2FsbCBhbnkgcHVibGljIG1ldGhvZC5cclxuICAgICAgICAgKiBmaXJlcyBJdGVtUmV0cmlldmVkIGV2ZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IElQcm9taXNlPFQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVwbGFjZXMgYW4gaXRlbS4gSnVzdCBsaWtlIHNhdmUsIGJ1dCBpdCBkb2Vzbid0IGluY3JlbWVudCB0aGUgcmV2aXNpb25JZCBhbmQga2VlcCB0aGUgb25lIHN0b3JlZCBpbiB0aGUgQWdncmVnYXRlUm9vdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlcGxhY2UoaXRlbTogVCk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVsZXRlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG4gXHJcbiAgICBpbXBvcnQgQmFzZUVycm9ycyA9IEVycm9yTWFuYWdlbWVudC5CYXNlRXJyb3JzO1xyXG4gXHJcbiAgICBleHBvcnQgY2xhc3MgRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBLZXlOb3RTZXQgPSBcIktleSBub3Qgc2V0XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtTm90Rm91bmQgPSBcIkl0ZW0gTm90IEZvdW5kXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFcnJvclNhdmluZ0l0ZW0gPSBcIkVycm9yIFNhdmluZyBJdGVtXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFcnJvclJlYWRpbmdJdGVtID0gXCJFcnJvciBSZWFkaW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yRGVsZXRpbmdJdGVtID0gXCJFcnJvciBEZWxldGluZyBJdGVtXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBXcm9uZ1R5cGVGcm9tSW1wbGVtZW50YXRpb24gPSBcIldyb25nIHR5cGUgZnJvbSBJbXBsZW1lbnRhdGlvblwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTWFuYWdlZFR5cGVOb3RTdXBwbGllZCA9IFwiUmVwb3NpdG9yeSBuZWVkcyB0byBrbm93IHdoYXQgdHlwZSBpdCBjYW4gbWFuYWdlXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJbnZhbGlkS2V5ID0gXCJJbnZhbGlkIEtleVwiO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0YXRpYyBjb250YWluZXIgb2YgZXZlbnQgXCJfX3R5cGVOYW1lXCJzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9fbmFtZVNwYWNlID0gXCJERERUb29scy5SZXBvc2l0b3J5XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtQWRkZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1BZGRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtVXBkYXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbURlbGV0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1EZWxldGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1SZXBsYWNlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVJlcGxhY2VkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1SZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1SZXRyaWV2ZWRFdmVudFwiO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8VEV2ZW50LFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZSBhZ2dyZWdhdGUgaW5zdGFuY2UgYWZ0ZXIgdGhlIGFjdGlvbiBoYXMgYmVlbiBwZXJmb3JtZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwdWJsaWMgaXRlbTogVEFnZ3JlZ2F0ZSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZSBJZCBvZiB0aGUgcmVwb3NpdG9yeSBwZXJmb3JtaW5nIHRoZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyByZXBvc2l0b3J5SWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtQWRkZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbUFkZGVkRXZlbnQ8VEFnZ3JlZ2F0ZT4sIFRBZ2dyZWdhdGU+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1BZGRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbURlbGV0ZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbURlbGV0ZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbURlbGV0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1SZXRyaWV2ZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbVJldHJpZXZlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtUmV0cmlldmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbVVwZGF0ZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbVVwZGF0ZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVVwZGF0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtUmVwbGFjZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbVJlcGxhY2VkRXZlbnQ8VEFnZ3JlZ2F0ZT4sIFRBZ2dyZWdhdGU+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1SZXBsYWNlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TYXZlQWN0aW9uRW51bS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtUmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtQWRkZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1VcGRhdGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtRGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuL0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vLyBpbXBvcnQge0l0ZW1SZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbUFkZGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1BZGRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbVVwZGF0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0l0ZW1EZWxldGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1EZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBQZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYXB0dXJlcyBjb21tb24gYmVoYXZpb3Igb2YgcmVwb3NpdG9yeSwgdXNpbmcgdGhlVGVtcGxhdGUgTWV0aG9kIFBhdHRlcm4uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVwb3NpdG9yeTxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIHN0cmluZyB0byBkaW5ldGlmeSB0aGUgcmVwb3NpdG9yeS4gVXNlZnVsIGluIHNjZW5hcmlvcyB3aGVyZSB0aGUgc2FtZSBBZ2dyZWdhdGVSb290IG1pZ2h0IGJlIHNhdmVkIGluIGRpZmZlcmVudCBsb2NhdGlvbnMuIFxyXG4gICAgICAgICAgICAgKiBFdmVudHMgbXVzdCBkaXNjZXJuIHdoYXQgbG9jYXRpb24gdGhlIGl0ZW0gd2FzIHNhdmVkL3JldHJpZXZlZC9kZWxldGUgdG8vZnJvbS9mcm9tLiBJdCBkZWZhdWx0cyB0byB0aGUgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnlJZD86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuTWFuYWdlZFR5cGVOb3RTdXBwbGllZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcmVwb3NpdG9yeUlkKSB0aGlzLnJlcG9zaXRvcnlJZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRvIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYW4gXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgdGhyb3cgXCJJdGVtTm90Rm91bmRcIiBpZiBubyBlbGVtZW50IG1hdGNoaW5nIHRoZSBpZCB3YXMgZm91bmQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXRyaWV2ZWQgPSB0aGlzLmdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkLl9fdHlwZU5hbWUgIT09IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmUgXCIgKyByZXRyaWV2ZWQuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHJldHJpZXZlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1SZXRyaWV2ZWRFdmVudDxUPih0b1JldHVybiwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcInNhdmVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uIFRoZSB0ZW1wbGF0ZSBtZXRob2QgXCJzYXZlXCIgd2lsbCBtYW5hZ2UgdGhlIHJldmlzaW9uSWQgbG9naWMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBULCBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXb3JrcyBqdXN0IGxpa2Ugc2F2ZSwgYnV0IGl0IG5ldmVyIGluY3JlbWVudHMgUmV2aXNpb25JZCwgaXQgdHJ1c3RzIHRoZSBvbmUgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBhZ2dyZWdhdGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2F2ZU9yUmVwbGFjZShpdGVtOiBULCByZXBsYWNlT25seTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudDogSXRlbVVwZGF0ZWRFdmVudDxUPiB8IEl0ZW1BZGRlZEV2ZW50PFQ+O1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBzaG91bGRJbmNyZW1lbnRSZXZpc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bTtcclxuXHJcbiAgICAgICAgICAgIHNhdmVBY3Rpb24gPSBTYXZlQWN0aW9uRW51bS5VcGRhdGU7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXNJdFdhcyA9IHRoaXMuZ2V0QnlJZChpdGVtLmdldEtleSgpKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlY3RlZCBpZiB0aGUgZG8gbm90IGV4aXN0cyBpbiB0aGUgUmVwby5cclxuICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IEl0ZW1BZGRlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgIHNhdmVBY3Rpb24gPSBTYXZlQWN0aW9uRW51bS5BZGQ7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRJbmNyZW1lbnRSZXZpc2lvbiA9IGZhbHNlOyAvLyBiZWNhdXNlIHRoZSBpdGVtIHdhcyBub3QgaW4gdGhlIHJlcG8hXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNhdmUgb2NjdXIgb25seSBpZiBzdG9yZWQgaXRlbSBhbmQgc2F2ZWQgaXRlbSBhcmUgZGlmZmVyZW50IHNvbWVob3cuXHJcbiAgICAgICAgICAgIGlmICghaXRlbS5wZXJmZWN0bHlNYXRjaChhc0l0V2FzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXBsYWNlT25seSAmJiBzaG91bGRJbmNyZW1lbnRSZXZpc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1SZXBsYWNlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZpbmFsbHkgc2F2ZXMgYWdncmVnYXRlIGludG8gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVJbXBsZW1lbnRhdGlvbihpdGVtLCBzYXZlQWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkO1xyXG5cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGFzSXRXYXM6IFQgPSBudWxsO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXNJdFdhcyA9IHRoaXMuZ2V0QnlJZChpZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGl0ZW0gbm90IGZvdW5kLCBzbyBub3RoaW5nIHRvIGRlbGV0ZSFcclxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IgJiYgZS5uYW1lID09PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbURlbGV0ZWRFdmVudChhc0l0V2FzLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUltcGxlbWVudGF0aW9uKGlkKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2F2ZUFjdGlvbkVudW0udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbVJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbUFkZGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtVXBkYXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbURlbGV0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcblxyXG5cclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeUFzeW5jfSBmcm9tIFwiLi9JUmVwb3NpdG9yeUFzeW5jXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vLyBpbXBvcnQge0l0ZW1SZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbUFkZGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1BZGRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbVVwZGF0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0l0ZW1EZWxldGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1EZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBQZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYXB0dXJlcyBjb21tb24gYmVoYXZpb3Igb2YgcmVwb3NpdG9yeSwgdXNpbmcgdGhlVGVtcGxhdGUgTWV0aG9kIFBhdHRlcm4uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT4ge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG1hbmFnZWQgYnkgdGhpcyByZXBvc2l0b3J5LiBXaWxsIGJlIGNvbXBhcmVkIHdpdGggdGhlIF9fdHlwZU5hbWUgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgcmV0cmlldmVkLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJpdmF0ZSBtYW5hZ2VkVHlwZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQSBzdHJpbmcgdG8gZGluZXRpZnkgdGhlIHJlcG9zaXRvcnkuIFVzZWZ1bCBpbiBzY2VuYXJpb3Mgd2hlcmUgdGhlIHNhbWUgQWdncmVnYXRlUm9vdCBtaWdodCBiZSBzYXZlZCBpbiBkaWZmZXJlbnQgbG9jYXRpb25zLiBcclxuICAgICAgICAgICAgICogRXZlbnRzIG11c3QgZGlzY2VybiB3aGF0IGxvY2F0aW9uIHRoZSBpdGVtIHdhcyBzYXZlZC9yZXRyaWV2ZWQvZGVsZXRlIHRvL2Zyb20vZnJvbS4gSXQgZGVmYXVsdHMgdG8gdGhlIGVtcHR5IHN0cmluZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJpdmF0ZSByZXBvc2l0b3J5SWQ/OiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZWRUeXBlID09PSBcIlwiIHx8IG1hbmFnZWRUeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXBvc2l0b3J5SWQpIHRoaXMucmVwb3NpdG9yeUlkID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgZnVuY3Rpb25hbGl0eSB0byBhY2Nlc3MgdG8gdGhlIHJlcG9zaXRvcnkgYW5kIGdldCBhIFwic3RhdGVPYmplY3RcIiB0byB1c2UgZm9yIG9iamVjdCBcInJlY29uc3RydWN0aW9uXCIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPElUeXBlVHJhY2tpbmc+O1xyXG5cclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogSVByb21pc2U8VD4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcjxUPigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5LZXlOb3RTZXQsIFwiaWQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZCkudGhlbihcclxuICAgICAgICAgICAgICAgICh2YWx1ZTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lICE9IHRoaXMubWFuYWdlZFR5cGUgJiYgISh0aGlzLm1hbmFnZWRUeXBlID09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5Xcm9uZ1R5cGVGcm9tSW1wbGVtZW50YXRpb24sIFwiRXhwZWN0aW5nIFwiICsgdGhpcy5tYW5hZ2VkVHlwZSArIFwiIGJ1dCBvYnRhaW5lZCBcIiArIHZhbHVlLl9fdHlwZU5hbWUgKyBcIiBmcm9tIGRhdGFiYXNlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gPFQ+KEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodG9SZXR1cm4pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICBwcml2YXRlIGRvU2F2ZShpdGVtOiBULCBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgc2F2ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0sIHNhdmVBY3Rpb24pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JTYXZpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlT3JSZXBsYWNlKGl0ZW0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcGxhY2UoaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNhdmVPclJlcGxhY2UoaXRlbTogVCwgcmVwbGFjZU9ubHk6IGJvb2xlYW4gPSBmYWxzZSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPHt9PigpO1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1VcGRhdGVkRXZlbnQ8VD4gfCBJdGVtQWRkZWRFdmVudDxUPjtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXRlbS5nZXRLZXkoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5LZXlOb3RTZXQpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVhZFZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGl0ZW0gYWxyZWFkeSBleGlzdCBzbyB3ZSBoYXZlIHRvIGNvbXBhcmUgaXQgd2l0aCB3aGF0IHdlIGFyZSBzYXZpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLnBlcmZlY3RseU1hdGNoKHJlYWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IHJldmlzaW9uIG9ubHkgaWYgd2UgYXJlIG5vdCByZXBsYWNpbmcgYW4gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2VPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY3JlbWVudFJldmlzaW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TYXZlKGl0ZW0sIFNhdmVBY3Rpb25FbnVtLlVwZGF0ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IG5ldyBJdGVtUmVwbGFjZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hhdCBpcyBpbiB0aGUgZGF0YWJhc2UgcGVyZmVjdGx5IG1hdGNoIHdoYXQgd2UgYXJlIHNhdmluZywgc28gbm90aGluZyB0byBkbyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT0gRXJyb3JzLkl0ZW1Ob3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkLCB0aGUgaXRlbSBpcyBub3QgaW4gdGhlIHJlcG8sIHNvIHdlIGhhdmUgdG8gYWRkIGl0IVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgU2F2ZUFjdGlvbkVudW0uQWRkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1BZGRlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yUmVhZGluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyIGVycm9ycyBtdXN0IGJlIHRyZWF0ZWQgYXMgLi4uIFwiRXJyb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yUmVhZGluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJkZWxldGVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcjx7fT4oKTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtRGVsZXRlZEV2ZW50PFQ+O1xyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWQoaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGJ1aWxkIGFuIGVycm9yIGZyb20gYSByZXR1cm4gdmFsdWUgb2YgdGhlIEFzeW5jIEltcGxlbWVudGF0aW9ucy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGJ1aWxkRXJyb3IoZXJyb3JGcm9tQ2FsbDogYW55LCBlcnJvcklmRXJyb3JGcm9tQ2FsbElzTm90RXJyb3I6IHN0cmluZyk6IEVycm9yIHtcclxuICAgICAgICAgICAgdmFyIHJlYXNvbjogRXJyb3I7XHJcbiAgICAgICAgICAgIGlmIChlcnJvckZyb21DYWxsIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9IGVycm9yRnJvbUNhbGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShlcnJvcklmRXJyb3JGcm9tQ2FsbElzTm90RXJyb3IsIEpTT04uc3RyaW5naWZ5KGVycm9yRnJvbUNhbGwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVhc29uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtCYXNlUmVwb3NpdG9yeX0gZnJvbSBcIi4vQmFzZVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluTWVtb3J5UmVwb3NpdG9yeTxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxULCBUS2V5PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnk8VCwgVEtleT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IHsgW2lkOiBzdHJpbmddOiBJUGVyc2lzdGFibGUgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IobWFuYWdlZFR5cGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIobWFuYWdlZFR5cGVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIga2V5ID0gaWQudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHRoaXMuc3RvcmFnZVtrZXldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8VD50b1JldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlBc3luYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBCYXNlUmVwb3NpdG9yeUFzeW5jID0gUmVwb3NpdG9yeS5CYXNlUmVwb3NpdG9yeUFzeW5jO1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBEZXNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLkRlc2VyaWFsaXplcjtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG1hbmFnZWRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIobWFuYWdlZFR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRCeUlkU3luYyhpZDogVEtleSkge1xyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkludmFsaWRLZXksIFwiaWQgY2Fubm90IGJlIG51bGwgbm9yIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTxJVHlwZVRyYWNraW5nPiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZ2V0QnlJZFN5bmMoaWQpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2F2ZVN5bmMoaXRlbTogVCk6IHt9IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmdldEtleSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2l0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKV0gPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShpdGVtKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5FcnJvclNhdmluZ0l0ZW0sIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3luYyhpdGVtKTtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoe30pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZGVsZXRlU3luYyhpZDogVEtleSk6IHt9IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3luYyhpZClcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoe30pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFVuaXRPZldvcmsuIEEgVW5pdE9mV29yayBrZWVwcyB0cmFjayBvZiBjaGFuZ2VzIG9uIHRoZSBBZ2dyZWdhdGVzIGxvYWRlZCBmcm9tIHRoZSB1bmRlcmx5aW5nIHJlcG9zaXRvcnkgYW5kIGFsbG93cyB0byBzYXZlIHRoZW0gYWxsIGluIGEgc2luZ2xlIGNhbGwuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSUV2ZW50SGFuZGxlciA9IERvbWFpbkV2ZW50cy5JRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2ltcGxlIFVuaXRPZldvcmsgZm9yIGEgc2luZ2xlIFJlcG9zaXRvcnkuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVVuaXRPZldvcms8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEJ5SWQoa2V5OiBUS2V5KTogVDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFya3MgYW4gaXRlbSBhcyBkZWxldGVkIGZyb20gdGhlIFVuaXRPZldvcmsgKGFuZCBmcm9tIHRoZSBSZXBvc2l0b3J5IHdoZW4gdGhlIFVvVyB3aWxsIGJlIHNhdmVkKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYWxsIHRoZSBtb2RpZmllZCBpdGVtcyBpbiB0aGUgVW5pdE9mV29yay5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlQWxsKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsbG93cyB0byByZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWxsb3dzIHRvIHVucmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgVW5pdE9mV29ya1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTogdm9pZDtcclxuXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVycm9ycyA9IEVycm9yTWFuYWdlbWVudC5CYXNlRXJyb3JzO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVbml0T2ZXb3JrRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtTWFya2VkQXNEZWxldGVkID0gXCJUaGlzIGl0ZW0gd2FzIG1hcmtlZCBhcyBkZWxldGVkIGluIHRoaXMgVW5pdE9mV29yaywgYW5kIGNhbm5vdCBiZSByZXRyaWV2ZWQuXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0YXRpYyBjb250YWluZXIgb2YgZXZlbnQgXCJfX3R5cGVOYW1lXCJzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9fbmFtZVNwYWNlID0gXCJERERUb29scy5Vbml0T2ZXb3JrXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmplY3RTYXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT2JqZWN0RGVsZXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmplY3RSZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBPYmplY3REZWxldGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0RGVsZXRlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3REZWxldGVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9iamVjdFJldHJpZXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdFJldHJpZXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3RSZXRyaWV2ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9iamVjdFNhdmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0U2F2ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0U2F2ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgZW51bSBJdGVtU3RhdHVzIHtcclxuICAgICAgICBOZXcsXHJcbiAgICAgICAgTW9kaWZpZWQsXHJcbiAgICAgICAgU2F2ZWQsXHJcbiAgICAgICAgRGVsZXRlZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwgY2xhc3MgdG8gc3RvcmUgaXRlbSBzdGF0dXMgaW5mb1xyXG4gICAgICovXHJcbiAgICBjbGFzcyBUcmFja2VkSXRlbTxcclxuICAgICAgICBUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID4ge1xyXG4gICAgICAgIC8vIFdpbGwgY29udGFpbiBhIHNlcmlhbGl6ZWQgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IGFzIGl0IHdhcyB3aGVuIGl0IHdhcyBsb2FkZWQgZnJvbSB0aGUgcmVwb3NpdG9yeS5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhc0xvYWRlZDogSVBlcnNpc3RhYmxlIC8vIFdpbGwgY29udGFpbiB0aGUgc3RhdGUgb2YgdGhlIG9iamVjdCB3aGVuIGZpcnN0IGFkZGVkIG9yIHVwZGF0ZWRcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgc3RhdHVzOiBJdGVtU3RhdHVzLFxyXG4gICAgICAgICAgICBwcml2YXRlIGl0ZW06IFQsXHJcbiAgICAgICAgICAgIHByaXZhdGUga2V5OiBUS2V5XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNMb2FkZWQgPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzTmV3KCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuTmV3O1xyXG4gICAgICAgICAgICB0aGlzLmFzTG9hZGVkID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzU2F2ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5TYXZlZDtcclxuICAgICAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc01vZGlmaWVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuTW9kaWZpZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzRGVsZXRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLkRlbGV0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0U3RhdHVzKCk6IEl0ZW1TdGF0dXMge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0SXRlbSgpOiBUIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRLZXkoKTogVEtleSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBoYXNDaGFuZ2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgIHZhciBhc0xvYWRlZEFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhpcy5hc0xvYWRlZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlQXNTdHJpbmcgIT09IGFzTG9hZGVkQXNTdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3MgaWYgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzIGhhcyBiZWVuIG1vZGlmaWVkLCBhbmQgY2hhbmdlcyB0aGUgc3RhdHVzIGFjY29yZGluZ2x5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVTYXZlZEl0ZW1TdGF0dXMoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gSXRlbVN0YXR1cy5TYXZlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrQXNNb2RpZmllZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSWRlbnRpdHlNYXBcclxuICAgICAgICA8XHJcbiAgICAgICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgICAgICA+XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaWRUb09iamVjdE1hcDogeyBbaWQ6IHN0cmluZ106IFRyYWNrZWRJdGVtPFQsIFRLZXk+IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIGtleSBpcyBhbHJlYWR5IHN0b3JlZCBpbiB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNUcmFja2VkKGtleTogVEtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuICAgICAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10uZ2V0SXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkcyBvciByZXBsYWNlcyBhbiBpdGVtIHRvIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWRkKGtleTogVEtleSwgaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgbmV3SXRlbSA9IG5ldyBUcmFja2VkSXRlbShJdGVtU3RhdHVzLk5ldywgaXRlbSwga2V5KTtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddID0gbmV3SXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbW92ZShrZXk6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmlkVG9PYmplY3RNYXBba2V5LnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0SWRzKCk6IFRLZXlbXSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjogVEtleVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5pZFRvT2JqZWN0TWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybi5wdXNoKHRoaXMuaWRUb09iamVjdE1hcFtlbGVtZW50XS5nZXRLZXkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc0RlbGV0ZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHRyYWNrZWRJdGVtLm1hcmtBc0RlbGV0ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNTYXZlZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzU2F2ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNNb2RpZmllZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzTW9kaWZpZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJdGVtU3RhdHVzKGtleTogVEtleSk6IEl0ZW1TdGF0dXMge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNrZWRJdGVtLmdldFN0YXR1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcHV0ZXMgdGhlIGNvcnJlY3Qgc3RhdHVzIGZvciBhbiBpdGVtIGluIFwiU2F2ZWRcIiBzdGF0dXMsIGFzIGl0IG1heSBoYXZlIGJlZW4gbW9kaWZpZWQgc2luY2Ugbm93IChoZXJlIHdlIGRvbid0IGhhdmUgcHJvcGVydHkgdHJhY2tpbmcpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVTYXZlZEl0ZW1TdGF0dXMoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRUcmFja2VkSXRlbShrZXk6IFRLZXkpOiBUcmFja2VkSXRlbTxULCBUS2V5PiB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIGlmICghdG9SZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lkZW50aXR5TWFwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vT2JqZWN0RGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vT2JqZWN0UmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3RTYXZlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVW5pdE9mV29ya0Vycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuLy8gaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7SWRlbnRpdHlNYXAsIEl0ZW1TdGF0dXN9IGZyb20gXCIuL0lkZW50aXR5TWFwXCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0RGVsZXRlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3REZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtPYmplY3RSZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtPYmplY3RTYXZlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3RTYXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7VW5pdE9mV29ya0Vycm9yc30gZnJvbSBcIi4vVW5pdE9mV29ya0Vycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVJlcG9zaXRvcnkgPSBSZXBvc2l0b3J5LklSZXBvc2l0b3J5O1xyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgSW5Qcm9jZXNzRGlzcGF0Y2hlciA9IERvbWFpbkV2ZW50cy5JblByb2Nlc3NEaXNwYXRjaGVyO1xyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgSUV2ZW50SGFuZGxlciA9IERvbWFpbkV2ZW50cy5JRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2ltcGxlIFVuaXRPZldvcmsgZm9yIGEgc2luZ2xlIFJlcG9zaXRvcnkuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBVbml0T2ZXb3JrPFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIGlkTWFwOiBJZGVudGl0eU1hcDxULCBUS2V5PjtcclxuICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+O1xyXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogSW5Qcm9jZXNzRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocmVwb3NpdG9yeTogSVJlcG9zaXRvcnk8VCwgVEtleT4pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcCA9IG5ldyBJZGVudGl0eU1hcDxULCBUS2V5PigpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgUmVwb3NpdG9yeSBvciBmcm9tIHRoZSBVbml0T2ZXb3JrLCBnaXZlbiBpdHMgSWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEJ5SWQoa2V5OiBUS2V5KTogVCB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpID09PSBJdGVtU3RhdHVzLkRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBVbml0T2ZXb3JrRXJyb3JzLnRocm93KFVuaXRPZldvcmtFcnJvcnMuSXRlbU1hcmtlZEFzRGVsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IHRoaXMucmVwb3NpdG9yeS5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAuYWRkKGtleSwgdG9SZXR1cm4pO1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLm1hcmtBc1NhdmVkQnlJZChrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldHJpZXZlZEV2ZW50ID0gbmV3IE9iamVjdFJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLl9fdHlwZU5hbWUsIHRvUmV0dXJuLl9fdHlwZVZlcnNpb24sIHRvUmV0dXJuLmdldEtleSgpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlRXZlbnQocmV0cmlldmVkRXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFya3MgYW4gaXRlbSBhcyBkZWxldGVkIGZyb20gdGhlIFVuaXRPZldvcmsgKGFuZCBmcm9tIHRoZSBSZXBvc2l0b3J5IHdoZW4gdGhlIFVvVyB3aWxsIGJlIHNhdmVkKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWxldGVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLm1hcmtBc0RlbGV0ZWRCeUlkKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbGwgdGhlIG1vZGlmaWVkIGl0ZW1zIGluIHRoZSBVbml0T2ZXb3JrLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzYXZlQWxsKCkge1xyXG4gICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMuaWRNYXAuZ2V0SWRzKCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBvZiBrZXlzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZE1hcC51cGRhdGVTYXZlZEl0ZW1TdGF0dXMoa2V5KTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmlkTWFwLmdldEl0ZW1TdGF0dXMoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5EZWxldGVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NEZWxldGVkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTW9kaWZpZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLk5ldzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTmV3T3JNb2RpZmllZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLlNhdmVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHByb2Nlc3NEZWxldGVkSXRlbShrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdmFyIGRlbGV0ZWRFdmVudCA9IG5ldyBPYmplY3REZWxldGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGtleS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3J5LmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KGRlbGV0ZWRFdmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHByb2Nlc3NOZXdPck1vZGlmaWVkSXRlbShrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3J5LnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzU2F2ZWRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIC8vIHJhaXNlcyBhbiBldmVudCBmb3Igd2hvbWV2ZXIgaXMgaW50ZXJlc3RlZFxyXG4gICAgICAgICAgICB2YXIgc2F2ZWRFdmVudCA9IG5ldyBPYmplY3RTYXZlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChzYXZlZEV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wbGV0ZWx5IHJlbW92ZXMgYW4gb2JqZWN0IGZyb20gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSByZW1vdmVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZE1hcC5yZW1vdmUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=