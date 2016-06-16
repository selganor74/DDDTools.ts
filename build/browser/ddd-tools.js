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
        var ItemAddedEvent = (function (_super) {
            __extends(ItemAddedEvent, _super);
            function ItemAddedEvent(typeName, typeVersion, id, objectState, repositoryId) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.repositoryId = repositoryId;
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
            function ItemDeletedEvent(typeName, typeVersion, id, objectState, repositoryId) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.repositoryId = repositoryId;
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
            function ItemRetrievedEvent(typeName, typeVersion, id, objectState, repositoryId) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.repositoryId = repositoryId;
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
            function ItemUpdatedEvent(typeName, typeVersion, id, objectState, repositoryId) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.repositoryId = repositoryId;
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
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var ItemReplacedEvent = (function (_super) {
            __extends(ItemReplacedEvent, _super);
            function ItemReplacedEvent(typeName, typeVersion, id, objectState, repositoryId) {
                _super.call(this);
                this.typeName = typeName;
                this.typeVersion = typeVersion;
                this.id = id;
                this.objectState = objectState;
                this.repositoryId = repositoryId;
                this.__typeName = Repository.Events.ItemReplacedEvent;
                this.__typeVersion = "v1";
            }
            return ItemReplacedEvent;
        }(BaseValueObject));
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
                    var event = new Repository.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), retrieved, this.repositoryId);
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
                    event = new Repository.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState(), this.repositoryId);
                    saveAction = Repository.SaveActionEnum.Add;
                    shouldIncrementRevision = false;
                }
                if (!item.perfectlyMatch(asItWas)) {
                    if (!replaceOnly && shouldIncrementRevision) {
                        item.incrementRevisionId();
                        event = event || new Repository.ItemReplacedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState(), this.repositoryId);
                    }
                    event = event || new Repository.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState(), this.repositoryId);
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
                var event = new Repository.ItemDeletedEvent(asItWas.__typeName, asItWas.__typeVersion, id.toString(), asItWas.getState(), this.repositoryId);
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
                    var event = new Repository.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), value, _this.repositoryId);
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
                            event = event || new Repository.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState(), _this.repositoryId);
                        }
                        _this.doSave(item, Repository.SaveActionEnum.Update).then(function () {
                            event = event || new Repository.ItemReplacedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState(), _this.repositoryId);
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
                            event = event || new Repository.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState(), _this.repositoryId);
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
                    var event = new Repository.ItemDeletedEvent(item.__typeName, item.__typeVersion, id.toString(), item.getState(), _this.repositoryId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9RdWVyeS9JUXVlcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVEYXRlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlUmVnRXhwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXphYmxlTnVsbC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1RvdWNoLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3RzL0d1aWQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUVudGl0eS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9Qcm9taXNlSGFuZGxlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvU2F2ZUFjdGlvbkVudW0udHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbUFkZGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtRGVsZXRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbVJldHJpZXZlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbVVwZGF0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1SZXBsYWNlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9CYXNlUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9JVW5pdE9mV29yay50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtFcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9FdmVudHMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9JZGVudGl0eU1hcC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxJQUFVLFFBQVEsQ0FjakI7QUFkRCxXQUFVLFFBQVE7SUFBQyxJQUFBLGVBQWUsQ0FjakM7SUFka0IsV0FBQSxlQUFlLEVBQUMsQ0FBQztRQUNoQztZQUFBO1lBWUEsQ0FBQztZQVZVLGdCQUFLLEdBQVosVUFBYSxJQUFZLEVBQUUsT0FBZ0I7Z0JBQ3ZDLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sR0FBRyxDQUFDO1lBQ2QsQ0FBQztZQUVNLDJCQUFnQixHQUF2QixVQUF3QixJQUFZLEVBQUUsT0FBZ0I7Z0JBQ2xELElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQztnQkFDckMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZixDQUFDO1lBQ0wsaUJBQUM7UUFBRCxDQUFDLEFBWkQsSUFZQztRQVpxQiwwQkFBVSxhQVkvQixDQUFBO0lBQ0wsQ0FBQyxFQWRrQixlQUFlLEdBQWYsd0JBQWUsS0FBZix3QkFBZSxRQWNqQztBQUFELENBQUMsRUFkUyxRQUFRLEtBQVIsUUFBUSxRQWNqQjtBR2RELElBQVUsUUFBUSxDQXlCakI7QUF6QkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxLQUFLLENBeUJ2QjtJQXpCa0IsV0FBQSxLQUFLLEVBQUMsQ0FBQztRQUV6QjtZQUFBO1lBc0JBLENBQUM7WUFwQmUsa0JBQU8sR0FBdEIsVUFBdUIsSUFBWTtnQkFDbEMsSUFBSSxVQUFVLEdBQVcsSUFBSSxNQUFNLENBQUMsc0VBQXNFLENBQUMsQ0FBQztnQkFDNUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZ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QUUsQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFFTywrQkFBVSxHQUFsQixVQUFtQixLQUFtQjtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUtPLCtCQUFVLEdBQWxCLFVBQW1CLEdBQVM7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDTCxDQUFDO1lBQ0wsaUJBQUM7UUFBRCxDQUFDLEFBdEdELElBc0dDO1FBdEdZLHVCQUFVLGFBc0d0QixDQUFBO0lBQ0wsQ0FBQyxFQW5Ia0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFtSDVCO0FBQUQsQ0FBQyxFQW5IUyxRQUFRLEtBQVIsUUFBUSxRQW1IakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTWluaW1hbCBFcnJvciBoYW5kbGluZyBiYXNlIGJlaGF2aW9ycyBmb3IgdGhlIGRvbWFpbiBtb2RlbC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5FcnJvck1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgICAgICBzdGF0aWMgdGhyb3cobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBCYXNlRXJyb3JzLmdldEVycm9ySW5zdGFuY2UobmFtZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXRFcnJvckluc3RhbmNlKG5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IEVycm9yIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihtZXNzYWdlIHx8IG5hbWUpO1xyXG4gICAgICAgICAgICBlcnIubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlF1ZXJ5IHtcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBhIHF1ZXJ5IHRvIGJlIGV4ZWN1dGVkIGFnYWluc3QgYSBEYXRhc3RvcmVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVlcnk8VD4ge1xyXG4gICAgICAgIGV4ZWN1dGUoKTogVFtdO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5RdWVyeSB7XHJcbiAgICBcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFEuSVByb21pc2U7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBhIHF1ZXJ5IHRvIGJlIGV4ZWN1dGVkIGFnYWluc3QgYSBEYXRhc3RvcmUgaW4gYW4gYXN5bmMgZmFzaGlvblxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElRdWVyeUFzeW5jPFQ+IHtcclxuICAgICAgICBleGVjdXRlKCk6IElQcm9taXNlPFRbXT47XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogU29tZSBzaW1wbGUgY2xhc3NlcyB1c2VkIGluIGRpZmZlcmVudCBtb2R1bGVzLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlV0aWxzIHtcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFNpbXBsZUd1aWQge1xyXG5cdFx0Ly8gSGVscGVyIGZvciBndWlkIGdlbmVyYXRpb24uXHJcblx0XHRwcml2YXRlIHN0YXRpYyBpc1ZhbGlkKGd1aWQ6IHN0cmluZykge1xyXG5cdFx0XHR2YXIgZ3VpZFJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChcIl5beyhdP1swLTlBLUZhLWZdezh9Wy1dPyhbMC05QS1GYS1mXXs0fVstXT8pezN9WzAtOUEtRmEtZl17MTJ9Wyl9XT8kXCIpO1xyXG5cdFx0XHRyZXR1cm4gZ3VpZFJlZ2V4cC50ZXN0KGd1aWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByaXZhdGUgc3RhdGljIHM0KCkge1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuXHRcdFx0XHQudG9TdHJpbmcoMTYpXHJcblx0XHRcdFx0LnN1YnN0cmluZygxKTtcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IHN0cmluZyB7XHJcblx0XHRcdHZhciBuZXdTaW1wbGVHdWlkID0gXCJ7XCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgK1xyXG5cdFx0XHRcdFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgXCJ9XCI7XHJcblxyXG5cdFx0XHRpZiAoU2ltcGxlR3VpZC5pc1ZhbGlkKG5ld1NpbXBsZUd1aWQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ld1NpbXBsZUd1aWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU2hvdWxkIE5ldmVyIEhhcHBlbiEgVGhlIGdlbmVyYXRlZCBndWlkIGlzIG5vdCB2YWxpZCFcIilcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTaW1wbGVJZGVudGl0eU1hcCB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaWRUb09iamVjdE1hcDogeyBbaWQ6IHN0cmluZ106IGFueSB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXAgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpc1RyYWNrZWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZFRvT2JqZWN0TWFwW2lkXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChpZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkVG9PYmplY3RNYXBbaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFkZChpZDogc3RyaW5nLCBvYmplY3Q6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcFtpZF0gPSBvYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIGFsbCB0aGUgaWRzIGluIHRoZSBtYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0SWRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuaWRUb09iamVjdE1hcCkge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZGVsZXRlQnlJZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmlkVG9PYmplY3RNYXBbaWRdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5Db21tb25JbnRlcmZhY2VzIHtcclxuXHRleHBvcnQgaW50ZXJmYWNlIElFcXVhdGFibGU8VD4ge1xyXG5cdFx0ZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuO1xyXG5cdH1cclxufSIsIlxyXG5uYW1lc3BhY2UgREREVG9vbHMuQ29tbW9uSW50ZXJmYWNlcyB7XHJcbiAgICBcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZztcclxuICAgICAgICBfX29iamVjdEluc3RhbmNlSWQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZURhdGUgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlNlcmlhbGl6YWJsZURhdGVcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgX19kYXRlQXNTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9fZGF0ZUFzU3RyaW5nID0gZGF0ZS50b0lTT1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXREYXRlRnJvbVN0cmluZyhkYXRlQXNTdHJpbmc6IHN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZUFzU3RyaW5nKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldERhdGUoKTogRGF0ZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZXJpYWxpemFibGVEYXRlLmdldERhdGVGcm9tU3RyaW5nKHRoaXMuX19kYXRlQXNTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZVJlZ0V4cCBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgICAgIF9fcmVndWxhckV4cHJlc3Npb246IHN0cmluZztcclxuICAgICAgICBfX2ZsYWdzOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlZ0V4cDogUmVnRXhwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BsaXRSZWdFeHBBbmRGbGFncyggcmVnRXhwICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNwbGl0UmVnRXhwQW5kRmxhZ3MoIHJlZ0V4cDogUmVnRXhwICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHJlYWxseVVubGlrZWx5U3RyaW5nID0gXCLCsMOyw6DDucKwwrDDssOgw7nCsMKww7LDoMO5wrBcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvIGdldCBhIGNvcnJlY3QgcmVnZXhwIHdlIG11c3QgdGFrZSBhd2F5IHRoZSBsZWFkaW5nIFwiL1wiIGFuZCB0aGUgZmxhZ3MhXHJcbiAgICAgICAgICAgIHZhciBjb25kaXRpb25lZFN0cmluZyA9IHJlZ0V4cC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gcmVwbGFjZXMgdGhlIGVzY2FwZWQgc2xhc2hlcyB3aXRoIHNvbWV0aGluZyB2ZXJ5IGltcHJvYmFibGVcclxuICAgICAgICAgICAgY29uZGl0aW9uZWRTdHJpbmcgPSBjb25kaXRpb25lZFN0cmluZy5yZXBsYWNlKFwiXFxcXC9cIiwgcmVhbGx5VW5saWtlbHlTdHJpbmcpO1xyXG4gICAgICAgICAgICB2YXIgcGFydHMgPSBjb25kaXRpb25lZFN0cmluZy5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBwYXJ0c1swXSBtdXN0IGFsd2F5cyBiZSB0aGUgZW1wdHkgc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09IFwiXCIpIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiFcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlc3RvcmUgd2hhdCBcclxuICAgICAgICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKHJlYWxseVVubGlrZWx5U3RyaW5nLCBcIlxcXFwvXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uID0gcGFydHNbMV07XHJcbiAgICAgICAgICAgIHRoaXMuX19mbGFncyA9IHBhcnRzWzJdIHx8IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyAoXCJzcGxpdFJlZ0V4cDogXCIgKyByZWdFeHAudG9TdHJpbmcoKSArIFwiIC4uLiBcIiArIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiArIFwiIC4uLiBcIiArIHRoaXMuX19mbGFncyApOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldFJlZ0V4cEZyb21SZWdFeHBBbmRGbGFncyhyZWd1bGFyRXhwcmVzc2lvbjogc3RyaW5nLCBmbGFnczogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjogUmVnRXhwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRSZWdFeHA6IFwiICsgdGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uICsgXCIgLi4uIFwiICsgdGhpcy5fX2ZsYWdzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChmbGFncykge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4gPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uLCBmbGFncyk7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4gPSBuZXcgUmVnRXhwKHJlZ3VsYXJFeHByZXNzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXQgYmFjayBhIFJlZ3VsYXIgRXhwcmVzc2lvbiBmcm9tIHRoZSBTZXJpYWxpemFibGVSZWdFeHAgaW5zdGFuY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UmVnRXhwKCk6IFJlZ0V4cCB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZXJpYWxpemFibGVSZWdFeHAuZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiwgdGhpcy5fX2ZsYWdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVOdWxsIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJTZXJpYWxpemFibGVOdWxsXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUd1aWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHRvdWNoSW5kZXggPSAxO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmVwYXJlcyB0aGUgaWQgZ2VuZXJhdG9yIGZvciBhIG5ldyBydW5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlc2V0VG91Y2hJbmRleCgpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVG91Y2g7XHJcbiAgICAgICAgICAgIHNUaGlzLnRvdWNoSW5kZXggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TmV3SW5kZXgoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFNpbXBsZUd1aWQuZ2VuZXJhdGUoKVxyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICAgICAgc1RoaXMudG91Y2hJbmRleCsrO1xyXG4gICAgICAgICAgICByZXR1cm4gKHNUaGlzLnRvdWNoSW5kZXgrKyAtIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhZGRzIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSB0byBhbiBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHRvdWNoKG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFRvdWNoXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3SWQgPSBzVGhpcy5nZXROZXdJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCA9IG5ld0lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZW1vdmVzIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkgZnJvbSBhbiBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVudG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgICAgIGlmIChjYXN0ZWQuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVEYXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlUmVnRXhwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVG91Y2gudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG4vLyBpbXBvcnQge1NpbXBsZUlkZW50aXR5TWFwfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXBcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbi8vIGltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyBKU09OIHN0cmluZyBzZXJpYWxpemF0aW9uLiBJdCBleHRlbmRzIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgSlNPTi5zdHJpbmdpZnkgdG8gYWxsb3cgc2VyaWFsaXphdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uIG9mIGRhdGUgYW5kIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3RzLCBhbmQgb2JqZWN0IHJlZmVyZW5jZS5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcbiAgICBpbXBvcnQgU2ltcGxlSWRlbnRpdHlNYXAgPSBVdGlscy5TaW1wbGVJZGVudGl0eU1hcDtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRGVzZXJpYWxpemVyIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGlzIG5lZWRlZCB0byB0cmFjayBvYmplY3QgaW5zdGFuY2VzIHRvIGFjaGlldmUgY29ycmVjdCByZWNvbnN0cnVjdGlvbiBvZiB0aGUgb2JqZWN0IHRyZWUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaWRlbnRpdHlNYXA6IFNpbXBsZUlkZW50aXR5TWFwO1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzZXNpYWxpemVzIGFuIG9iamVjdCBmcm9tIGEgSlNPTiBzdHJpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZSh0b0Rlc2VyaWFsaXplOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgICAgICBEZXNlcmlhbGl6ZXIuaWRlbnRpdHlNYXAgPSBuZXcgU2ltcGxlSWRlbnRpdHlNYXAoKTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gSlNPTi5wYXJzZSh0b0Rlc2VyaWFsaXplLCBEZXNlcmlhbGl6ZXIuY3VzdG9tUmV2aXZlcik7XHJcbiAgICAgICAgICAgIERlc2VyaWFsaXplci5jbGVhbnVwKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFucyB0aGUgcmVjb25zaXR1dGVkIGluc3RhbmNlcyBmcm9tIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHksXHJcbiAgICAgICAgICogYW5kIGVtcHRpZXMgdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGNsZWFudXAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERlc2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcbiAgICAgICAgICAgIHZhciB1bnRvdWNoID0gVG91Y2gudW50b3VjaDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2YgaWRNYXAuZ2V0SWRzKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IGlkTWFwLmdldEJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB1bnRvdWNoKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGxlYXZlIHRoZSBpbnN0YW5jZXMgXCJnYXJiYWdlYWJsZVwiLi4uIGhvdyB0byB0ZXN0ID8gICAgXHJcbiAgICAgICAgICAgICAgICBpZE1hcC5kZWxldGVCeUlkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJdCBoYW5kbGVzIEZha2UqIGluc3RhbmNlcyB1c2VzIF9fb2JqZWN0SW5zdGFuY2VJZCB0byByZWJ1aWxkIGEgY29ycmVjdCBvYmplY3QgdHJlZS4gXHJcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBieSBKU09OLnBhcnNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tUmV2aXZlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEZXNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIHZhciBpZE1hcCA9IHNUaGlzLmlkZW50aXR5TWFwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNUaGlzLmhhc0JlZW5Ub3VjaGVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZE1hcC5pc1RyYWNrZWQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRNYXAuZ2V0QnlJZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlRGF0ZURlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc1RoaXMuRmFrZU51bGxEZXNlcmlhbGl6ZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkTWFwLmFkZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBoYXNCZWVuVG91Y2hlZChvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgY2FzdGVkID0gPElUeXBlVHJhY2tpbmc+b2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAoY2FzdGVkLl9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFuYWdlcyBSZWdFeHAgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgICAgICogVE9ETzogRmluZCBhIHdheSB0byBtb3ZlIHRoaXMgcmVzcG9uc2liaWxpdHkgdG8gdGhlIFNlcmlhbGl6YWJsZVJlZ0V4cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZha2VSZWdFeHBEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSA9PT0gXCJTZXJpYWxpemFibGVSZWdFeHBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gU2VyaWFsaXphYmxlUmVnRXhwLmdldFJlZ0V4cEZyb21SZWdFeHBBbmRGbGFncyh2YWx1ZS5fX3JlZ3VsYXJFeHByZXNzaW9uLCB2YWx1ZS5fX2ZsYWdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5hZ2VzIERhdGUgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgICAgICogVE9ETzogRmluZCBhIHdheSB0byBtb3ZlIHRoaXMgcmVzcG9uc2liaWxpdHkgdG8gdGhlIFNlcmlhbGl6YWJsZVJlZ0V4cFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiU2VyaWFsaXphYmxlRGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBTZXJpYWxpemFibGVEYXRlLmdldERhdGVGcm9tU3RyaW5nKHZhbHVlLl9fZGF0ZUFzU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5hZ2VzIE51bGwgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgICAgICogVE9ETzogRmluZCBhIHdheSB0byBtb3ZlIHRoaXMgcmVzcG9uc2liaWxpdHkgdG8gdGhlIFNlcmlhbGl6YWJsZU51bGxcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGYWtlTnVsbERlc2VyaWFsaXplcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlNlcmlhbGl6YWJsZU51bGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlRGF0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZVJlZ0V4cC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZU51bGwudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Ub3VjaC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZURhdGV9IGZyb20gXCIuL1NlcmlhbGl6YWJsZURhdGVcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVSZWdFeHB9IGZyb20gXCIuL1NlcmlhbGl6YWJsZVJlZ0V4cFwiO1xyXG4vLyBpbXBvcnQge1RvdWNofSBmcm9tIFwiLi9Ub3VjaFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemVyIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXJpYWxpemVzIGFuIG9iamVjdCB0byBhIEpTT04gc3RyaW5nLCBrZWVwZWluZyB0cmFjayBvZiB0aGUgaW5zdGFuY2VzIG9mIHRoZSBvYmplY3RzIHNlcmlhbGl6ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICBUb3VjaC5yZXNldFRvdWNoSW5kZXgoKTtcclxuICAgICAgICAgICAgdG9TZXJpYWxpemUgPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gSlNPTi5zdHJpbmdpZnkodG9TZXJpYWxpemUsIFNlcmlhbGl6ZXIuY3VzdG9tU2VyaWFsaXplcik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgICAgIFNlcmlhbGl6ZXIudW50b3VjaFNvdXJjZU9iamVjdCh0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJlcHJvY2VzcyB0aGUgb2JqZWN0IHRyZWUgdG8gYmUgc2VyaWFsaXplZCB0byBmaW5kIGFuZCByZXBsYWNlIERhdGUgb2JqZWN0cyB3aXRoIHNvbWV0aGluZyBkaWZmZXJlbnQuLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VEYXRlID0gbmV3IFNlcmlhbGl6YWJsZURhdGUoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VOdWxsID0gbmV3IFNlcmlhbGl6YWJsZU51bGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VOdWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZVJlZ0V4cCA9IG5ldyBTZXJpYWxpemFibGVSZWdFeHAoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlUmVnRXhwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB1bnRvdWNoU291cmNlT2JqZWN0KHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc291cmNlT2JqZWN0ID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoVG91Y2guaGFzQmVlblRvdWNoZWQoc291cmNlT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgVG91Y2gudW50b3VjaChzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzVGhpcy51bnRvdWNoU291cmNlT2JqZWN0KGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gU2VyaWFsaXplci5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUG9zdHByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBTZXJpYWxpemFibGVEYXRlL1JlZ0V4cCBvYmplY3RzIHdpdGggT3JpZ2luYWwgdHlwZXMgYWdhaW4uLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSAoPFNlcmlhbGl6YWJsZURhdGU+Y3VycmVudCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVOdWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlUmVnRXhwPmN1cnJlbnQpLmdldFJlZ0V4cCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJdCdzIGR1dHkgaXMgdG8gXCJ0b3VjaFwiIGV2ZXJ5IG9iamVjdCBwcm9jZXNzZSB0byBhZGQgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5LlxyXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5zdHJpbmdpZnlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21TZXJpYWxpemVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRvdWNoLmhhc0JlZW5Ub3VjaGVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvdWNoLnRvdWNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vKipcclxuICogRGVmaW5lcyBkZWZhdWx0IGJlaGF2aW9yIGFuZCBpbnRlcmZhY2VzIGZvciBhIFBlcnNpc3RhYmxlIE9iamVjdCwgYW4gb2JqZWN0IHRoYXQgaGFzIGEgc3RhdGUgdGhhdCB3aWxsIHByb2JhYmx5IGJlIHBlcnNpc3RlZC4gSXQgZ2l2ZXMgc3VwcG9ydCB0byBcInVwZ3JhZGVcIiBwZXJzaXN0ZWQgb2JqZWN0cy5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblx0XHJcblx0aW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSVBlcnNpc3RhYmxlIGV4dGVuZHMgSVR5cGVUcmFja2luZyB7XHJcblx0XHRnZXRVcGdyYWRlZEluc3RhbmNlPyhmcm9tSW5zdGFuY2U6IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZTtcclxuXHRcdGdldFN0YXRlKCk6IElUeXBlVHJhY2tpbmc7XHJcblx0XHRzZXRTdGF0ZShzdGF0ZTogSVR5cGVUcmFja2luZyk7XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuLy8gaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcbiAgICBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICAgICAgLy8gVGhyb3duIGJ5IHBlcnNpc3RhYmxlIG9iamVjdHNcclxuICAgICAgICBzdGF0aWMgU3RhdGVJc05vdEFuT2JqZWN0ID0gXCJTdGF0ZSBpcyBub3QgYW4gT2JqZWN0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVOYW1lTm90U2V0ID0gXCJUeXBlTmFtZSBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVWZXJzaW9uTm90U2V0ID0gXCJUeXBlVmVyc2lvbiBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFVuYWJsZVRvSW5zdGFudGlhdGVUeXBlID0gXCJVbmFibGUgdG8gSW5zdGFudGlhdGUgVHlwZVwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlUmVnaXN0cnlOb3RTZXQgPSBcIlR5cGVSZWdpc3RyeSBub3Qgc2V0XCI7XHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgRmFjdG9yeS9UeXBlUmVnaXN0cnlcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdFJlZ2lzdGVyZWQgPSBcIlR5cGUgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGUgVHlwZVJlZ2lzdHJ5XCI7XHJcbiAgICAgICAgc3RhdGljIENhbm5vdFJlZ2lzdGVyVW5kZWZpbmVkID0gXCJ0eXBlUHJvdG90eXBlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFwiXHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgVXBncmFkZXJcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdEluc3RhdGlhYmxlID0gXCJUeXBlIGlzIG5vdCBpbnN0YW50aWFibGVcIjtcclxuICAgICAgICBzdGF0aWMgVXBncmFkZVBhdGhOb3RGb3VuZCA9IFwiVXBncmFkZSBQYXRoIG5vdCBGb3VuZFwiO1xyXG4gICAgICAgIHN0YXRpYyBJbmNvcnJlY3RWZXJzaW9uRm9ybWF0ID0gXCJJbmNvcnJlY3QgVmVyc2lvbiBGb3JtYXRcIjtcclxuICAgICAgICBzdGF0aWMgV3JvbmdWZXJzaW9uSW5VcGdyYWRlZEluc3RhbmNlID0gXCJXcm9uZyBWZXJzaW9uIGluIFVwZ3JhZGVkIEluc3RhbmNlXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgVmFsdWVPYmplY3QgcGF0dGVybi5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJRXF1YXRhYmxlID0gQ29tbW9uSW50ZXJmYWNlcy5JRXF1YXRhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSUVxdWF0YWJsZTxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgSVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuSVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4vRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuLy8gaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBEZXNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLkRlc2VyaWFsaXplcjtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVBlcnNpc3RhYmxlT2JqZWN0IGltcGxlbWVudHMgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgcHVibGljIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOYW1lTm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlVmVyc2lvbk5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0b1JlY29uc3RpdHV0ZSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcmVjb25zdGl0dXRlZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh0b1JlY29uc3RpdHV0ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVjb25zdGl0dXRlZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0U3RhdGU8VFN0YXRlPihzdGF0ZTogVFN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5TdGF0ZUlzTm90QW5PYmplY3QsIFwic3RhdGUgZGV2ZSBlc3NlcmUgdW4gb2dnZXR0b1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUVsZW1lbnQgPSBzdGF0ZVtlbGVtZW50XTtcclxuICAgICAgICAgICAgICAgIHRoaXNbZWxlbWVudF0gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUoY3VycmVudFN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggdGhpcy5nZXRTdGF0ZSgpICkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0IHtcclxuXHJcblx0aW1wb3J0IEJhc2VQZXJzaXN0YWJsZU9iamVjdCA9IFBlcnNpc3RhYmxlT2JqZWN0LkJhc2VQZXJzaXN0YWJsZU9iamVjdDtcclxuXHRpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuXHJcblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG5cdFx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRcdGltcGxlbWVudHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdFx0Ly8gUGVyIG9nbmkgcHJvcHJpZXTDoCBkZWxsJ0lURU0gOnZlcmlmaWNvIGwndWd1YWdsaWFuemEgY29uIGwnaXN0YW56YSBhdHR1YWxlIFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gXy5pc0VxdWFsKGl0ZW0sIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgZ2VuZXJhbCBhbmQgY29tbW9ubHkgdXNlZCBWYWx1ZU9iamVjdHMuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0cyB7XHJcblxyXG4gICAgaW1wb3J0IFNpbXBsZUd1aWQgPSBVdGlscy5TaW1wbGVHdWlkO1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBHdWlkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEd1aWQ+IGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PEd1aWQ+IHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWUgPSBcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCI7XHJcbiAgICAgICAgcHVibGljIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ3VpZDogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihndWlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3VpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkID0gZ3VpZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkID0gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IEd1aWQge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEd1aWQoU2ltcGxlR3VpZC5nZW5lcmF0ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFZhbHVlT2JqZWN0cyB1c2VkIGFzIGtleSBNVVNUIGltcGxlbWVudCBhIHRvU3RyaW5nIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGtleSBhcyBzdHJpbmcuXHJcbiAgICAgICAgcHVibGljIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ndWlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdHMvR3VpZC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtUeXBlUmVnaXN0cnl9IGZyb20gXCIuL1R5cGVSZWdpc3RyeVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgR3VpZCA9IERERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5IGlzIGFuIGhlbHBlciBjbGFzcyB0byBjcmVhdGUgYW5kIHJlY29uc3RpdHV0ZSBzdGF0ZmV1bCBvYmplY3RzLlxyXG4gICAgICogSXQgZ3VyYW50ZWVzIHRoYXQgYSBzdGF0ZnVsIG9iamVjdCBpcyBhbHdheXMgY3JlYXRlZCBvciByZWNvbnN0aXR1dGVkIHRvIGl0cyBsYXRlc3QgdmVyc2lvbi4gIFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRmFjdG9yeSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHR5cGVSZWdpc3RyeTogVHlwZVJlZ2lzdHJ5O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWdpc3RlcnMgYSBuZXcgSVBlcnNpc3RhYmxlIHR5cGUgd2l0aCB0aGUgRmFjdG9yeVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcsIHR5cGVQcm90b3R5cGU6IG5ldyAoKSA9PiBJUGVyc2lzdGFibGUpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRmFjdG9yeTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy50eXBlUmVnaXN0cnkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLnR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RlclR5cGUodHlwZU5hbWUsIHR5cGVWZXJzaW9uLCB0eXBlUHJvdG90eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCB0eXBlLiBJZiB0eXBlVmVyc2lvbiBpcyBub3Qgc3VwcGxpZWQsIGxhdGVzdCBhdmFpbGFibGUgdmVyc2lvbiBpcyByZXR1cm5lZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZyk6IFQge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGYWN0b3J5LnR5cGVSZWdpc3RyeSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlUmVnaXN0cnlOb3RTZXQsIFwiUGxlYXNlIHJlZ2lzdGVyIGF0IGxlYXN0IGEgdHlwZSB3aXRoIHRoZSBGYWN0b3J5LlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFR5cGVSZWdpc3RyeS5nZXRUeXBlSW5zdGFuY2U8VD4odHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0eXBlVmVyc2lvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHR5cGVUb0luc3RhdGlhdGUgPSBGYWN0b3J5LmNvbXB1dGVGdWxseVF1YWxpZmllZFR5cGVOYW1lKHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRvUmV0dXJuID0gPFQ+ZXZhbChcIm5ldyBcIiArIHR5cGVUb0luc3RhdGlhdGUgKyBcIigpXCIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBUaGlzIGZhaWx1cmUgaXMgZXhwZWN0ZWQgaWYgd2UgYXJlIGFza2luZyBmb3IgdGhlIGxhdGVzdCB2ZXJzaW9uIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZTxUPih0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodG9SZXR1cm4uX190eXBlVmVyc2lvbiAhPSB0eXBlVmVyc2lvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0b1JldHVybiA9IDxUPmV2YWwoXCJuZXcgXCIgKyB0eXBlTmFtZSArIFwiKClcIik7XHJcbiAgICAgICAgICAgIC8vIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGluc3RhbmNlIGZyb20gaXRzIHN0YXRlLiBXaWxsIGFsd2F5cyByZXR1cm4gdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIG9mIHRoZSBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZU9iamVjdHNGcm9tU3RhdGUoc3RhdGU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcInN0YXRlIGNhbm5vdCBiZSAndW5kZWZpbmVkJ1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJzdGF0ZSBjYW5ub3QgYmUgJ251bGwnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE1hbmFnZXMgdGhlIFwic3BlY2lhbFwiIHR5cGVzIERhdGUgYW5kIFJlZ0V4cC5cclxuICAgICAgICAgICAgaWYgKHN0YXRlIGluc3RhbmNlb2YgRGF0ZSB8fCBzdGF0ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgaWYgKEZhY3RvcnkuaXNQZXJzaXN0YWJsZU9iamVjdChzdGF0ZSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlcnNpc3RhYmxlOiBJUGVyc2lzdGFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RhYmxlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2Uoc3RhdGUuX190eXBlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGFibGUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FycmFudGllcyB0aGF0IGEgdHlwZSBpcyBhbHdheXMgcmV0dXJuZWQgYXQgaXRzIGxhdGVzdCB2ZXJzaW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGdyYWRlZFBlcnNpc3RhYmxlID0gVXBncmFkZXIudXBncmFkZShwZXJzaXN0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZ3JhZGVkUGVyc2lzdGFibGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpdCBpcyBub3QgYSBwZXJzaXN0YWJsZU9iamVjdCBjYW4gYmUgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGFuZCBtdXN0IGJlIHJlY29uc3RpdHV0ZWRcclxuICAgICAgICAgICAgICAgIHZhciB0b1JldHVybjogYW55ID0gQXJyYXkuaXNBcnJheShzdGF0ZSkgPyBbXSA6IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY3VycmVudEVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhpc0VsZW1lbnQgPSBzdGF0ZVtjdXJyZW50RWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgdG9SZXR1cm5bY3VycmVudEVsZW1lbnRdID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHRoaXNFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBcIlByaW1pdGl2ZVwiXCIgdHlwZXMgYXJlIHJldHVybmVkIGFzIHRoZXkgYXJlXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiBhbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgXCJJUGVyc2lzdGFibGVcIiBpbnRlcmZhY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNQZXJzaXN0YWJsZU9iamVjdChvYmplY3RUb1Rlc3Q6IGFueSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RUb1Rlc3QgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwZXJzaXN0YWJsZSA9IDxJUGVyc2lzdGFibGU+b2JqZWN0VG9UZXN0O1xyXG4gICAgICAgICAgICBpZiAoIXBlcnNpc3RhYmxlLl9fdHlwZU5hbWUgfHwgcGVyc2lzdGFibGUuX190eXBlTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBlcnNpc3RhYmxlLl9fdHlwZVZlcnNpb24gfHwgcGVyc2lzdGFibGUuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiBhIHR5cGUgY2FuIGJlIGluc3RhdGlhdGVkIChhdCBpdHMgbGF0ZXN0IHZlcnNpb24pLiBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1R5cGVJbnN0YW50aWFibGUodHlwZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcFR5cGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIFwiRnVsbHkgUXVhbGlmaWVkIFR5cGVOYW1lXCIgb2YgdHlwZSBcInR5cGVOYW1lXCIgZm9yIHRoZSBzdXBwbGllZCBcInZlcnNpb25cIi5cclxuICAgICAgICAgKiBGUVROIGlzIGNvbXB1dGVkIGZyb20gdHlwZU5hbWUgYWRkaW5nIHRoZSB2ZXJzaW9uIHN0cmluZyBpbiB0aGUgcmlnaHQgcGxhY2UuXHJcbiAgICAgICAgICogRXhhbXBsZVxyXG4gICAgICAgICAqIHR5cGVOYW1lOiBBcHBsaWNhdGlvbi5Nb2RlbC5PZmZlcnRhXHJcbiAgICAgICAgICogdmVyc2lvbjogdjJcclxuICAgICAgICAgKiByZXR1cm46IEFwcGxpY2F0aW9uLk1vZGVsLnYyLk9mZmVydGFcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBwcml2YXRlIHN0YXRpYyBjb21wdXRlRnVsbHlRdWFsaWZpZWRUeXBlTmFtZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyAgICAgdmFyIGZxdG5QYXJ0c0FycmF5ID0gdHlwZU5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIC8vICAgICB2YXIgY2xhc3NOYW1lID0gZnF0blBhcnRzQXJyYXkucG9wKCk7XHJcbiAgICAgICAgLy8gICAgIGZxdG5QYXJ0c0FycmF5LnB1c2godHlwZVZlcnNpb24pO1xyXG4gICAgICAgIC8vICAgICBmcXRuUGFydHNBcnJheS5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIHZhciBuZXdGcXRuID0gZnF0blBhcnRzQXJyYXkuam9pbihcIi5cIik7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBuZXdGcXRuO1xyXG4gICAgICAgIC8vIH07XHJcblxyXG4gICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFVwZ3JhZGVyIGlzIGFuIGhlbHBlciBjbGFzcyB0byBhdXRvbWF0ZSB0aGUgXCJ1cGdyYWRlIHByb2Nlc3NcIiBvZiBhbiBvYmplY3QncyBzdGF0ZS5cclxuICAgICAqIFRoZSBVcGdyYWRlciBpcyBmb3VuZCBvbiB0aGVzZSBwcmluY2lwbGVzOlxyXG4gICAgICogICogVGhlIGxhdGVzdCB2ZXJzaW9uIEZRVE4gbXVzdCBtYXRjaCB0aGUgb25lIHNwZWNpZmllZCBieSB0aGUgcHJvcGVydHkgX190eXBlTmFtZSwgd2hpY2ggaXMgaW4gdGhlIGZvcm0gbmFtZXNwYWNlLm9iamVjdE5hbWUuXHJcbiAgICAgKiAgKiBPbGRlciB2ZXJzaW9ucyBvZiBhIFBlcnNpc3RhYmxlT2JqZWN0IE1VU1QgaGF2ZSBhIEZRVE4gaW4gdGhlIGZvcm0gbmFtZXNwYWNlLjx2ZXJzaW9uPi5vYmplY3ROYW1lLlxyXG4gICAgICogICogX190eXBlVmVyc2lvbiBNVVNUIGJlIHNwZWNpZmllZCBhcyB2PHZlcnNpb25OdW1iZXI+IHdoZXJlIHZlcnNpb24gaXMgYW4gaW50ZWdlci5cclxuICAgICAqICAqIEFsbCBvYmplY3QncyB2ZXJzaW9ucyAoZXhjbHVkaW5nIHYxKSBNVVNUIHByb3ZpZGUgYW4gZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QgdGhhdCBrbm93cyBob3cgdG8gbW9kaWZ5IHN0YXRlIHRvIGdvIGZyb20gXHJcbiAgICAgKiAgICB2ZXJzaW9uIHY8biAtIDE+IHRvIHY8bj4sIHdoZXJlIG4gaXMgdGhlIHZlcnNpb24gb2YgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBnZXRVcGdyYWRlZEluc3RhbmNlIG1ldGhvZC4gICBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFVwZ3JhZGVyIHtcclxuXHJcbiAgICAgICAgLy8gQ29udGFpbnMgdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIGZvciBlYWNoIHR5cGUuIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxhdGVzdFR5cGVWZXJzaW9uTWFwOiB7IFt0eXBlTmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAvLyBDb250YWlucyBmbGFncyB0byBkZXRlcm1pbmUgaWYgbGF0c3RUeXBlVmVyc2lvbk1hcCBmb3IgYSBzcGVjaWZpYyB0eXBlIGhhcyBiZWVuIGNhbGN1bGF0ZWRcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25NYXBCdWlsdDogeyBbdHlwZU5hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBidWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wSW5zdGFuY2UgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBVcGdyYWRlci5sYXRlc3RUeXBlVmVyc2lvbk1hcFt0eXBlTmFtZV0gPSB0bXBJbnN0YW5jZS5fX3R5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYXRlc3QgcG9zc2libGUgdmVyc2lvbiBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIGlzIFwiICsgdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5vdEluc3RhdGlhYmxlLCBcIlRoZSB0eXBlIFwiICsgdHlwZU5hbWUgKyBcIiBjYW5ub3QgYmUgaW5zdGFudGlhdGVkLCBzbyBpdCBpcyBpbXBvc3NpYmxlIHRvIGlkZW50aWZ5IHRoZSBsYXRlc3QgcG9zc2libGUgdmVyc2lvbi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIC8vIExvb2tzIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24sIGlmIG5vdCBhbHJlYWR5IGRvbmUuXHJcbiAgICAgICAgICAgIGlmICghVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBVcGdyYWRlci5idWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgdmVyc2lvbiBzdXBwbGllZCBkb2Vzbid0IG1hdGNoIHRoZSBsYXRlc3QgdmVyc2lvbiBpbiB0aGUgbWFwLCB0aGUgaW5zdGFuY2UgbXVzdCBiZSB1cGdyYWRlZC5cclxuICAgICAgICAgICAgaWYgKFVwZ3JhZGVyLmxhdGVzdFR5cGVWZXJzaW9uTWFwW3R5cGVOYW1lXSAhPT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdXBncmFkZShpbnN0YW5jZUZyb206IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZSB7XHJcbiAgICAgICAgICAgIC8vIElmIG9iamVjdCBkb2Vzbid0IG5lZWQgdG8gdXBncmFkZSwgdGhlbiB3ZSBhcmUgZG9uZSFcclxuICAgICAgICAgICAgaWYgKCFVcGdyYWRlci5pc0xhdGVzdFZlcnNpb25Gb3JUeXBlKGluc3RhbmNlRnJvbS5fX3R5cGVOYW1lLCBpbnN0YW5jZUZyb20uX190eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZUZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKGluc3RhbmNlRnJvbS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVySW5zdGFuY2UgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShpbnN0YW5jZUZyb20uX190eXBlTmFtZSwgbmV4dFZlcnNpb24pO1xyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSB1cGdyYWRlckluc3RhbmNlLmdldFVwZ3JhZGVkSW5zdGFuY2UoaW5zdGFuY2VGcm9tKTtcclxuICAgICAgICAgICAgLy8gVmVyaWZpZXMgdGhhdCB2ZXJzaW9uIGlzIGVmZmVjdGl2ZWx5IHVwZ3JhZGVkXHJcbiAgICAgICAgICAgIGlmICh1cGdyYWRlZC5fX3R5cGVWZXJzaW9uICE9IG5leHRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLldyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSwgXCJUaGUgZXhwZWN0ZWQgdmVyc2lvbiBvZiB0aGUgdXBncmFkZWQgaW5zdGFuY2Ugd2FzIFwiICsgbmV4dFZlcnNpb24gKyBcIiB3aGlsZSB3YXMgZm91bmQgdG8gYmUgXCIgKyB1cGdyYWRlckluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBVcGdyYWRlci51cGdyYWRlKHVwZ3JhZGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyBWZXJzaW9uIG11c3QgYmUgaW4gdGhlIGZvcm0gdk4gd2hlcmUgdiBpcyBhIGNvbnN0YW50IGFuZCBOIGlzIGFuIGludGVnZXIuXHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgICAgIGlmICghdmVyc2lvblJlLnRlc3QodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQsIFwiU3BlY2lmaWVkIHZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gTnVtYmVyKHR5cGVWZXJzaW9uLnN1YnN0cigxKSk7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgMTtcclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dFZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGFzcyBUeXBlUmVnaXN0cnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RyeTogeyBbdHlwZU5hbWU6IHN0cmluZ106IHsgW3R5cGVWZXJzaW9uOiBzdHJpbmddOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBJUGVyc2lzdGFibGUgfSB9ID0ge307XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbGF0ZXN0VmVyc2lvbnM6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY29tbW9uVHlwZXNSZWdpc3RlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcsIHR5cGVQcm90b3R5cGU6IG5ldyAoKSA9PiBJUGVyc2lzdGFibGUpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVQcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQsIFwidHlwZVByb3RvdHlwZSBzdXBwbGllZCBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBudWxsIG9yIHVuZGVmaW5lZCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMudmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gPSB0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSB8fCB7fTtcclxuICAgICAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSA9IHR5cGVQcm90b3R5cGU7XHJcblxyXG4gICAgICAgICAgICBzVGhpcy51cGRhdGVMYXRlc3RWZXJzaW9ucyh0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RlcnMgdGhlIHR5cGVzIGluIFZhbHVlT2JqZWN0cyBvbiBmaXJzdCB1c2UuLi4gXHJcbiAgICAgICAgICAgIC8vIFRPRE8gZmluZCBhIHdheSB0byBkZWxlZ2F0ZSB0eXBlIHJlZ2lzdHJhdGlvbiB0byB0aGUgT2JqZWN0cyBpbiB0aGUgY29sbGVjdGlvbiwgW3ZpYSBwc2V1ZG8gcmVmbGVjdGlvbiA/XVwiXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMuY29tbW9uVHlwZXNSZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5jb21tb25UeXBlc1JlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZShcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCIsIFwidjFcIiwgR3VpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZSA9IHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmlzVmVyc2lvbkdyZWF0ZXIodHlwZVZlcnNpb24sIHJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25HcmVhdGVyKHZTdWJqZWN0OiBzdHJpbmcsIHZSZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2UzogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlN1YmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgdlI6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZSZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdlMgPiB2UjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RWZXJzaW9uTnVtYmVyKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uOiBzdHJpbmcgPSB0eXBlVmVyc2lvbi5yZXBsYWNlKFwidlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgdmFyIGFzTnVtYmVyID0gTnVtYmVyKHZlcnNpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXNOdW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldFR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIGlmICghdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIHR5cGVWZXJzaW9uID0gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJWZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBvZiBUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9JbnN0YW50aWF0ZSA9IHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl07XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IDxUPihuZXcgKDxhbnk+dG9JbnN0YW50aWF0ZSkoKSk7XHJcbiAgICAgICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZU5hbWUgPSB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgIC8vdG9SZXR1cm4uX190eXBlVmVyc2lvbiA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIGlmIHNwZWNpZmllZCB2ZXJzaW9uIGlzIHRoZSBsYXRlc3QgZm9yIHR5cGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpID09PSB0eXBlVmVyc2lvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgbm8gdmVyc2lvbiB0eXBlIGlzIGRlZmluZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldExhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIC8vIFZlcnNpb24gbXVzdCBiZSBpbiB0aGUgZm9ybSB2TiB3aGVyZSB2IGlzIGEgY29uc3RhbnQgYW5kIE4gaXMgYW4gaW50ZWdlci5cclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy52ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFRocm93IHRoZSBjb3JyZWN0IGV4Y2VwdGlvbjtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEb21haW5FdmVudCBleHRlbmRzIElQZXJzaXN0YWJsZSwgSVR5cGVUcmFja2luZyB7XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRXZlbnRIYW5kbGVyIHtcclxuICAgICAgICAoZG9tYWluRXZlbnQ6IElEb21haW5FdmVudCk6IHZvaWQ7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEaXNwYXRjaGVyIHtcclxuICAgICAgICByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpO1xyXG4gICAgICAgIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURpc3BhdGNoZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRGlzcGF0Y2hlcn0gZnJvbSBcIi4vSURpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRG9tYWluRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uOiBJRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24oZGlzcGF0Y2hlcjogSURpc3BhdGNoZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uID0gZGlzcGF0Y2hlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24ucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24udW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24uZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBTaW1wbGVHdWlkID0gVXRpbHMuU2ltcGxlR3VpZDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5Qcm9jZXNzRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBkZWxlZ2F0ZXNSZWdpc3RyeTogeyBbZXZlbnRUeXBlTmFtZTogc3RyaW5nXTogSUV2ZW50SGFuZGxlcltdIH0gPSB7fTtcclxuXHJcbiAgICAgICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5ID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBZGRzIGFuIGhhbmRsZSBpZiAoYW5kIG9ubHkgaWYpIHRoZSBoYW5kbGVyIGhhcyBub3QgYmVlbiBcInN0YW1wZWRcIlxyXG4gICAgICAgICAgICBpZiAoISg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0ucHVzaChoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBBY3Qgb25seSBpZCBoYW5kbGVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIGlmICgoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXVtlbGVtZW50XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKDxhbnk+Y3VycmVudEVsZW1lbnQpLl9faGFuZGxlcklkID09PSAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdLnNwbGljZShOdW1iZXIoZWxlbWVudCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBFcnJvcnM6IEVycm9yW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChFcnJvcnMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5idWlsZEVycm9yTWVzc2FnZShFcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSBcIkRpc3BhdGNoZXIgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJ1aWxkRXJyb3JNZXNzYWdlKEVycm9yczogRXJyb3JbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IG9mIEVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSBlbGVtZW50Lm5hbWUgKyBcIjpcIiArIGVsZW1lbnQubWVzc2FnZSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRXF1YXRhYmxlfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlXCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuXHRpbXBvcnQgSUVxdWF0YWJsZSA9IENvbW1vbkludGVyZmFjZXMuSUVxdWF0YWJsZTtcclxuXHRpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIElFbnRpdHk8VCwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4gZXh0ZW5kcyBJRXF1YXRhYmxlPFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cdFx0Z2V0S2V5KCk6IFRLZXk7XHJcblx0XHRzZXRLZXkoa2V5OiBUS2V5KTogdm9pZDtcclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUtleVZhbHVlT2JqZWN0PFQ+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VD5cclxuICAgICAgICBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXJpdmVkIGNsYXNzZXMgbXVzdCByZWltcGxlbWVudCB0aGlzIG1ldGhvZC4gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4vSUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzZXMgYW5kIGludGVyZmFjZXMgdG8gaW1wbGVtZW50IGFuIEVudGl0eSwgYSBwZXJzaXN0YWJsZSBvYmplY3QuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5cdGltcG9ydCBCYXNlUGVyc2lzdGFibGVPYmplY3QgPSBQZXJzaXN0YWJsZU9iamVjdC5CYXNlUGVyc2lzdGFibGVPYmplY3Q7XHJcblx0aW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcblx0aW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbnRpdHk8VCBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcblx0XHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdFx0aW1wbGVtZW50cyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcblx0XHRwcml2YXRlIGtleTogVEtleTtcclxuXHJcblx0XHRwcml2YXRlIHJhaXNlRXZlbnQoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG5cdFx0XHREb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHRcdH07XHJcblxyXG5cdFx0cHVibGljIGdldEtleSgpOiBUS2V5IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMua2V5O1xyXG5cdFx0fTtcclxuXHJcblx0XHRwdWJsaWMgc2V0S2V5KGtleTogVEtleSk6IHZvaWQge1xyXG5cdFx0XHR0aGlzLmtleSA9IGtleTtcclxuXHRcdH07XHJcblxyXG5cdFx0cHVibGljIGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbiB7XHJcblx0XHRcdGlmICghaXRlbSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gaXRlbS5nZXRLZXkoKS5lcXVhbHModGhpcy5nZXRLZXkoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lFbnRpdHkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9JRW50aXR5XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbiAgICAgICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICAgICAgaW1wb3J0IElFbnRpdHkgPSBFbnRpdHkuSUVudGl0eTtcclxuXHJcbiAgICAgICAgZXhwb3J0IGludGVyZmFjZSBJQWdncmVnYXRlUm9vdDxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgICAgICAgICBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGdldFJldmlzaW9uSWQoKTogbnVtYmVyXHJcbiAgICAgICAgICAgICAgICBpbmNyZW1lbnRSZXZpc2lvbklkKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyZmVjdGx5TWF0Y2goYW5vdGhlcjogSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuO1xyXG4gICAgICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9CYXNlRW50aXR5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgdGhlIEFnZ3JlZ2F0ZSBQYXR0ZXJuIGJ5IGRlZmluaW5nIGludGVyZmFjZXMgYW5kIGJhc2UgYmVoYXZpb3IgZm9yIGFuIEFnZ3JlZ2F0ZVJvb3QuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlRW50aXR5ID0gRW50aXR5LkJhc2VFbnRpdHk7XHJcbiAgICBpbXBvcnQgSUVudGl0eSA9IEVudGl0eS5JRW50aXR5O1xyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGJlaGF2aW9yIG9mIGFuIEFnZ3JlZ2F0ZVJvb3QsIHdoaWNoIGlzIGJhc2ljYWxseSBhbiBlbnRpdHkuLi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VBZ2dyZWdhdGVSb290PFxyXG4gICAgICAgIFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPlxyXG4gICAgICAgIGV4dGVuZHMgQmFzZUVudGl0eTxULCBUS2V5PlxyXG4gICAgICAgIGltcGxlbWVudHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIElFbnRpdHk8VCwgVEtleT5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIF9fcmV2aXNpb25JZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgcHVibGljIGdldFJldmlzaW9uSWQoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19yZXZpc2lvbklkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGluY3JlbWVudFJldmlzaW9uSWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19yZXZpc2lvbklkKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wYXJlcyBhbiBhZ2dyZWdhdGUgd2l0aCBhbm90aGVyLiBSZXR1cm5zIHRydWUgaWYgYWdncmVnYXRlJ3MgZGF0YSBhcmUgZXhhY3RseSBlcXVhbC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGVyZmVjdGx5TWF0Y2gob3RoZXI6IEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW90aGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzT25lID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgdGhlT3RoZXIgPSBvdGhlci5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZG8gdGhlIGNvbXBhcmlzb24ganVzdCBsaWtlIHZhbHVlIG9iamVjdHMuLi4gbmFpdmUgYnV0IGZ1bmN0aW9uYWwgYXQgdGhpcyB0aW1lLlxyXG4gICAgICAgICAgICB2YXIgY29tcGFyaXNvbiA9IF8uaXNFcXVhbCh0aGlzT25lLCB0aGVPdGhlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGV4cG9ydCB2YXIgUHJvbWlzZUhhbmRsZXI6IG5nLklRU2VydmljZTtcclxuICAgIGV4cG9ydCBpbXBvcnQgSVByb21pc2UgPSBuZy5JUHJvbWlzZTtcclxuICAgIGV4cG9ydCBpbXBvcnQgRGVmZXJyZWQgPSBuZy5JRGVmZXJyZWQ7XHJcbiBcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBjb2RlIGZvcmNlcyBERERUb29scyB0byB1c2UgJHEgcHJvbWlzZXMgaWYgYW5ndWxhciBpcyBkZWZpbmVkIGF0IHRoZSBtb21lbnQgZGRkLXRvb2xzIGlzIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBpZiAodHlwZW9mIGFuZ3VsYXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICB2YXIgJGluamVjdG9yID0gYW5ndWxhci5pbmplY3RvcihbJ25nJ10pO1xyXG4gICAgICAgIHZhciAkcSA9ICRpbmplY3Rvci5nZXQoXCIkcVwiKTtcclxuICAgICAgICBcclxuICAgICAgICBQcm9taXNlSGFuZGxlciA9ICRxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoUSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPIFRoaXMgY2FzdCBpcyBlZmZlY3RpdmVseSBhIHJpc2shIEhvdyB0byBtYW5hZ2UgaXQgY29ycmVjdGx5ID8gXHJcbiAgICAgICAgICAgIFByb21pc2VIYW5kbGVyID0gPG5nLklRU2VydmljZT4oPGFueT5RKTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIGRpZG4ndCBmaW5kIGEgc3VpdGFibGUgUHJvbWlzZUhhbmRsZXJcclxuICAgIGlmIChQcm9taXNlSGFuZGxlciA9PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcihcIkEgUHJvbWlzZSBIYW5kbGVyIG11c3QgYmUgZGVmaW5lZCwgc3VwcG9ydGVkIGFyZSBhbmd1bGFyJ3MgJHEgb3Iga3JpcyBrb3dhbCdzIFEuIFRoaXMgbWVhbnMgdGhhdCBRIG9yIGFuZ3VsYXIgTVVTVCBiZSBsb2FkZWQgYmVmb3JlIGRkZC10b29scy5qc1wiKTtcclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFJlcG9zaXRvcnkgdG8gcGVyc2lzdCBBZ2dyZWdhdGVzLiBDb250YWlucyBhIHJlZmVyZW5jZSBpbiBtZW1vcnkgcmVwb3NpdG9yeS5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSZXBvc2l0b3J5PFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIHJlcG9zaXRvcnkgZ2l2ZW4gaXRzIGlkLiBJdCBnaXZlcyBiYWNrIGEgZnVsbHkgcmNvbnN0aXR1dGVkIEFnZ3JlZ2F0ZSBSb290LCBzbyB0aGF0ICB3aWxsIGJlIHBvc3NpYmxlIHRvIGNhbGwgYW55IHB1YmxpYyBtZXRob2QuXHJcbiAgICAgICAgICogZmlyZXMgSXRlbVJldHJpZXZlZCBldmVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogdm9pZDtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXBsYWNlcyBhbiBpdGVtLiBKdXN0IGxpa2Ugc2F2ZSwgYnV0IGl0IGRvZXNuJ3QgaW5jcmVtZW50IHRoZSByZXZpc2lvbklkIGFuZCBrZWVwIHRoZSBvbmUgc3RvcmVkIGluIHRoZSBBZ2dyZWdhdGVSb290XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKTogdm9pZDtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWxldGVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlKGlkOiBUS2V5KTogdm9pZDtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmVBY3Rpb24gd2lsbCBiZSBwYXNzZWQgdG8gcmVwb3NpdG9yaWVzIHNhdmVJbXBsZW1lbnRhdGlvbiBzbyB0aGF0IGNsaWVudCBjYW4gdGFrZSBkZWNpc2lvbnMgb24gd2hhdCB0byBkbyB3aGVuIGFkZGluZyBvciByZXBsYWNpbmcgYW4gaXRlbSBpZiBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBlbnVtIFNhdmVBY3Rpb25FbnVtIHtcclxuICAgICAgICBBZGQsXHJcbiAgICAgICAgVXBkYXRlXHJcbiAgICB9O1xyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUS5JUHJvbWlzZTtcclxuXHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIHJlcG9zaXRvcnkgZ2l2ZW4gaXRzIGlkLiBJdCBnaXZlcyBiYWNrIGEgZnVsbHkgcmNvbnN0aXR1dGVkIEFnZ3JlZ2F0ZSBSb290LCBzbyB0aGF0ICB3aWxsIGJlIHBvc3NpYmxlIHRvIGNhbGwgYW55IHB1YmxpYyBtZXRob2QuXHJcbiAgICAgICAgICogZmlyZXMgSXRlbVJldHJpZXZlZCBldmVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlcGxhY2VzIGFuIGl0ZW0uIEp1c3QgbGlrZSBzYXZlLCBidXQgaXQgZG9lc24ndCBpbmNyZW1lbnQgdGhlIHJldmlzaW9uSWQgYW5kIGtlZXAgdGhlIG9uZSBzdG9yZWQgaW4gdGhlIEFnZ3JlZ2F0ZVJvb3RcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlbGV0ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT47XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuIFxyXG4gICAgaW1wb3J0IEJhc2VFcnJvcnMgPSBFcnJvck1hbmFnZW1lbnQuQmFzZUVycm9ycztcclxuIFxyXG4gICAgZXhwb3J0IGNsYXNzIEVycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgS2V5Tm90U2V0ID0gXCJLZXkgbm90IHNldFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbU5vdEZvdW5kID0gXCJJdGVtIE5vdCBGb3VuZFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JTYXZpbmdJdGVtID0gXCJFcnJvciBTYXZpbmcgSXRlbVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JSZWFkaW5nSXRlbSA9IFwiRXJyb3IgUmVhZGluZyBJdGVtXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFcnJvckRlbGV0aW5nSXRlbSA9IFwiRXJyb3IgRGVsZXRpbmcgSXRlbVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uID0gXCJXcm9uZyB0eXBlIGZyb20gSW1wbGVtZW50YXRpb25cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE1hbmFnZWRUeXBlTm90U3VwcGxpZWQgPSBcIlJlcG9zaXRvcnkgbmVlZHMgdG8ga25vdyB3aGF0IHR5cGUgaXQgY2FuIG1hbmFnZVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSW52YWxpZEtleSA9IFwiSW52YWxpZCBLZXlcIjtcclxuICAgIH1cclxufSIsIlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBzdGF0aWMgY29udGFpbmVyIG9mIGV2ZW50IFwiX190eXBlTmFtZVwic1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfX25hbWVTcGFjZSA9IFwiREREVG9vbHMuUmVwb3NpdG9yeVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbUFkZGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtQWRkZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVVwZGF0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1VcGRhdGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1EZWxldGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtRGVsZXRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtUmVwbGFjZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1SZXBsYWNlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtUmV0cmlldmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtQWRkZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtQWRkZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbUFkZGVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZyxcclxuICAgICAgICAgICAgcHVibGljIHJlcG9zaXRvcnlJZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuICAgIFxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1EZWxldGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbURlbGV0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbURlbGV0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIG9iamVjdFN0YXRlOiBJVHlwZVRyYWNraW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgcmVwb3NpdG9yeUlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtUmV0cmlldmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbVJldHJpZXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtUmV0cmlldmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZyxcclxuICAgICAgICAgICAgcHVibGljIHJlcG9zaXRvcnlJZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1VcGRhdGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbVVwZGF0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVVwZGF0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIG9iamVjdFN0YXRlOiBJVHlwZVRyYWNraW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgcmVwb3NpdG9yeUlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbVJlcGxhY2VkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbVJlcGxhY2VkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1SZXBsYWNlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgb2JqZWN0U3RhdGU6IElUeXBlVHJhY2tpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyByZXBvc2l0b3J5SWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NhdmVBY3Rpb25FbnVtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1SZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1BZGRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbVVwZGF0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1EZWxldGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4vSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgc3RyaW5nIHRvIGRpbmV0aWZ5IHRoZSByZXBvc2l0b3J5LiBVc2VmdWwgaW4gc2NlbmFyaW9zIHdoZXJlIHRoZSBzYW1lIEFnZ3JlZ2F0ZVJvb3QgbWlnaHQgYmUgc2F2ZWQgaW4gZGlmZmVyZW50IGxvY2F0aW9ucy4gXHJcbiAgICAgICAgICAgICAqIEV2ZW50cyBtdXN0IGRpc2Nlcm4gd2hhdCBsb2NhdGlvbiB0aGUgaXRlbSB3YXMgc2F2ZWQvcmV0cmlldmVkL2RlbGV0ZSB0by9mcm9tL2Zyb20uIEl0IGRlZmF1bHRzIHRvIHRoZSBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeUlkPzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXBvc2l0b3J5SWQpIHRoaXMucmVwb3NpdG9yeUlkID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgZnVuY3Rpb25hbGl0eSB0byBhY2Nlc3MgdG8gdGhlIHJlcG9zaXRvcnkgYW5kIGdldCBhbiBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aHJvdyBcIkl0ZW1Ob3RGb3VuZFwiIGlmIG5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGlkIHdhcyBmb3VuZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVR5cGVUcmFja2luZztcclxuXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IFQge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJldHJpZXZlZCA9IHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXRyaWV2ZWQuX190eXBlTmFtZSAhPT0gdGhpcy5tYW5hZ2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZSBcIiArIHJldHJpZXZlZC5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUocmV0cmlldmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLl9fdHlwZU5hbWUsIHRvUmV0dXJuLl9fdHlwZVZlcnNpb24sIHRvUmV0dXJuLmdldEtleSgpLnRvU3RyaW5nKCksIHJldHJpZXZlZCwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcInNhdmVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uIFRoZSB0ZW1wbGF0ZSBtZXRob2QgXCJzYXZlXCIgd2lsbCBtYW5hZ2UgdGhlIHJldmlzaW9uSWQgbG9naWMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBULCBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdvcmtzIGp1c3QgbGlrZSBzYXZlLCBidXQgaXQgbmV2ZXIgaW5jcmVtZW50cyBSZXZpc2lvbklkLCBpdCB0cnVzdHMgdGhlIG9uZSBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGFnZ3JlZ2F0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlT3JSZXBsYWNlKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlT3JSZXBsYWNlKGl0ZW06IFQsIHJlcGxhY2VPbmx5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50IHwgSXRlbUFkZGVkRXZlbnQ7XHJcbiAgICAgICAgICAgIHZhciBhc0l0V2FzOiBUID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHNob3VsZEluY3JlbWVudFJldmlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtO1xyXG5cclxuICAgICAgICAgICAgc2F2ZUFjdGlvbiA9IFNhdmVBY3Rpb25FbnVtLlVwZGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkIGlmIHRoZSBkbyBub3QgZXhpc3RzIGluIHRoZSBSZXBvLlxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlQWN0aW9uID0gU2F2ZUFjdGlvbkVudW0uQWRkO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkSW5jcmVtZW50UmV2aXNpb24gPSBmYWxzZTsgLy8gYmVjYXVzZSB0aGUgaXRlbSB3YXMgbm90IGluIHRoZSByZXBvIVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTYXZlIG9jY3VyIG9ubHkgaWYgc3RvcmVkIGl0ZW0gYW5kIHNhdmVkIGl0ZW0gYXJlIGRpZmZlcmVudCBzb21laG93LlxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2goYXNJdFdhcykgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2VPbmx5ICYmIHNob3VsZEluY3JlbWVudFJldmlzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVJlcGxhY2VkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpLHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmluYWxseSBzYXZlcyBhZ2dyZWdhdGUgaW50byB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0sIHNhdmVBY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGlkKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaXRlbSBub3QgZm91bmQsIHNvIG5vdGhpbmcgdG8gZGVsZXRlIVxyXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGFzSXRXYXMuX190eXBlTmFtZSwgYXNJdFdhcy5fX3R5cGVWZXJzaW9uLCBpZC50b1N0cmluZygpLCBhc0l0V2FzLmdldFN0YXRlKCksIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TYXZlQWN0aW9uRW51bS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtUmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtQWRkZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1VcGRhdGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtRGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuXHJcblxyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxuZGVjbGFyZSB2YXIgUHJvbWlzZUhhbmRsZXI6IHR5cGVvZiBRO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIHN0cmluZyB0byBkaW5ldGlmeSB0aGUgcmVwb3NpdG9yeS4gVXNlZnVsIGluIHNjZW5hcmlvcyB3aGVyZSB0aGUgc2FtZSBBZ2dyZWdhdGVSb290IG1pZ2h0IGJlIHNhdmVkIGluIGRpZmZlcmVudCBsb2NhdGlvbnMuIFxyXG4gICAgICAgICAgICAgKiBFdmVudHMgbXVzdCBkaXNjZXJuIHdoYXQgbG9jYXRpb24gdGhlIGl0ZW0gd2FzIHNhdmVkL3JldHJpZXZlZC9kZWxldGUgdG8vZnJvbS9mcm9tLiBJdCBkZWZhdWx0cyB0byB0aGUgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnlJZD86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIgfHwgbWFuYWdlZFR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLk1hbmFnZWRUeXBlTm90U3VwcGxpZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlcG9zaXRvcnlJZCkgdGhpcy5yZXBvc2l0b3J5SWQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGEgXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz47XHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPFQ+KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCwgXCJpZCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgIT0gdGhpcy5tYW5hZ2VkVHlwZSAmJiAhKHRoaXMubWFuYWdlZFR5cGUgPT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmVkIFwiICsgdmFsdWUuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSA8VD4oRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtUmV0cmlldmVkRXZlbnQodG9SZXR1cm4uX190eXBlTmFtZSwgdG9SZXR1cm4uX190eXBlVmVyc2lvbiwgdG9SZXR1cm4uZ2V0S2V5KCkudG9TdHJpbmcoKSwgdmFsdWUsIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0b1JldHVybik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJzYXZlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLiBUaGUgdGVtcGxhdGUgbWV0aG9kIFwic2F2ZVwiIHdpbGwgbWFuYWdlIHRoZSByZXZpc2lvbklkIGxvZ2ljLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCwgc2F2ZUFjdGlvbjogU2F2ZUFjdGlvbkVudW0pOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIHByaXZhdGUgZG9TYXZlKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0IHRoYXQgd2lsbCBiZSBzYXZlZDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlSW1wbGVtZW50YXRpb24oaXRlbSwgc2F2ZUFjdGlvbikudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclNhdmluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2F2ZU9yUmVwbGFjZShpdGVtOiBULCByZXBsYWNlT25seTogYm9vbGVhbiA9IGZhbHNlKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgICAgIHZhciBldmVudDogSXRlbVVwZGF0ZWRFdmVudCB8IEl0ZW1BZGRlZEV2ZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLmdldEtleSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWQoaXRlbS5nZXRLZXkoKSkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZWFkVmFsdWU6IFQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0IHNvIHdlIGhhdmUgdG8gY29tcGFyZSBpdCB3aXRoIHdoYXQgd2UgYXJlIHNhdmluZy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2gocmVhZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgcmV2aXNpb24gb25seSBpZiB3ZSBhcmUgbm90IHJlcGxhY2luZyBhbiBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVwbGFjZU9ubHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVVwZGF0ZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwgaXRlbS5nZXRLZXkoKS50b1N0cmluZygpLCBpdGVtLmdldFN0YXRlKCksIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU2F2ZShpdGVtLCBTYXZlQWN0aW9uRW51bS5VcGRhdGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVJlcGxhY2VkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hhdCBpcyBpbiB0aGUgZGF0YWJhc2UgcGVyZmVjdGx5IG1hdGNoIHdoYXQgd2UgYXJlIHNhdmluZywgc28gbm90aGluZyB0byBkbyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT0gRXJyb3JzLkl0ZW1Ob3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkLCB0aGUgaXRlbSBpcyBub3QgaW4gdGhlIHJlcG8sIHNvIHdlIGhhdmUgdG8gYWRkIGl0IVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgU2F2ZUFjdGlvbkVudW0uQWRkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1BZGRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCksIGl0ZW0uZ2V0U3RhdGUoKSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3JzIG11c3QgYmUgdHJlYXRlZCBhcyAuLi4gXCJFcnJvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPHt9PigpO1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1EZWxldGVkRXZlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZChpZCkudGhlbihcclxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1EZWxldGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGlkLnRvU3RyaW5nKCksIGl0ZW0uZ2V0U3RhdGUoKSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYnVpbGQgYW4gZXJyb3IgZnJvbSBhIHJldHVybiB2YWx1ZSBvZiB0aGUgQXN5bmMgSW1wbGVtZW50YXRpb25zLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgYnVpbGRFcnJvcihlcnJvckZyb21DYWxsOiBhbnksIGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvcjogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgICAgICB2YXIgcmVhc29uOiBFcnJvcjtcclxuICAgICAgICAgICAgaWYgKGVycm9yRnJvbUNhbGwgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID0gZXJyb3JGcm9tQ2FsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvciwgSlNPTi5zdHJpbmdpZnkoZXJyb3JGcm9tQ2FsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWFzb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VSZXBvc2l0b3J5fSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBGYWN0b3J5ID0gUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5NZW1vcnlSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IElQZXJzaXN0YWJsZSB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihtYW5hZ2VkVHlwZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihtYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpcy5zdG9yYWdlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUPnRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1Byb21pc2VIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VSZXBvc2l0b3J5QXN5bmMgPSBSZXBvc2l0b3J5LkJhc2VSZXBvc2l0b3J5QXN5bmM7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IERlc2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uRGVzZXJpYWxpemVyO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IobWFuYWdlZFR5cGU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihtYW5hZ2VkVHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEJ5SWRTeW5jKGlkOiBUS2V5KSB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSW52YWxpZEtleSwgXCJpZCBjYW5ub3QgYmUgbnVsbCBub3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPElUeXBlVHJhY2tpbmc+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRCeUlkU3luYyhpZCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlU3luYyhpdGVtOiBUKToge30ge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZ2V0S2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VbaXRlbS5nZXRLZXkoKS50b1N0cmluZygpXSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkVycm9yU2F2aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTeW5jKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBkZWxldGVTeW5jKGlkOiBUS2V5KToge30ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTeW5jKGlkKVxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgVW5pdE9mV29yay4gQSBVbml0T2ZXb3JrIGtlZXBzIHRyYWNrIG9mIGNoYW5nZXMgb24gdGhlIEFnZ3JlZ2F0ZXMgbG9hZGVkIGZyb20gdGhlIHVuZGVybHlpbmcgcmVwb3NpdG9yeSBhbmQgYWxsb3dzIHRvIHNhdmUgdGhlbSBhbGwgaW4gYSBzaW5nbGUgY2FsbC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgVW5pdE9mV29yayBmb3IgYSBzaW5nbGUgUmVwb3NpdG9yeS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVW5pdE9mV29yazxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgUmVwb3NpdG9yeSBvciBmcm9tIHRoZSBVbml0T2ZXb3JrLCBnaXZlbiBpdHMgSWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChrZXk6IFRLZXkpOiBUO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlQnlJZChrZXk6IFRLZXkpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbGwgdGhlIG1vZGlmaWVkIGl0ZW1zIGluIHRoZSBVbml0T2ZXb3JrLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmVBbGwoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWxsb3dzIHRvIHJlZ2lzdGVyIGFuIGhhbmRsZXIgZm9yIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIFVuaXRPZldvcmtcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbGxvd3MgdG8gdW5yZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkO1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFVuaXRPZldvcmtFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1NYXJrZWRBc0RlbGV0ZWQgPSBcIlRoaXMgaXRlbSB3YXMgbWFya2VkIGFzIGRlbGV0ZWQgaW4gdGhpcyBVbml0T2ZXb3JrLCBhbmQgY2Fubm90IGJlIHJldHJpZXZlZC5cIjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RhdGljIGNvbnRhaW5lciBvZiBldmVudCBcIl9fdHlwZU5hbWVcInNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlVuaXRPZldvcmtcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdFNhdmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RTYXZlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmplY3REZWxldGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3REZWxldGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdFJldHJpZXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9iamVjdERlbGV0ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3REZWxldGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0UmV0cmlldmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0UmV0cmlldmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFJldHJpZXZlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0U2F2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3RTYXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIEl0ZW1TdGF0dXMge1xyXG4gICAgICAgIE5ldyxcclxuICAgICAgICBNb2RpZmllZCxcclxuICAgICAgICBTYXZlZCxcclxuICAgICAgICBEZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjbGFzcyB0byBzdG9yZSBpdGVtIHN0YXR1cyBpbmZvXHJcbiAgICAgKi9cclxuICAgIGNsYXNzIFRyYWNrZWRJdGVtPFxyXG4gICAgICAgIFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPiB7XHJcbiAgICAgICAgLy8gV2lsbCBjb250YWluIGEgc2VyaWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBvYmplY3QgYXMgaXQgd2FzIHdoZW4gaXQgd2FzIGxvYWRlZCBmcm9tIHRoZSByZXBvc2l0b3J5LlxyXG5cclxuICAgICAgICBwcml2YXRlIGFzTG9hZGVkOiBJUGVyc2lzdGFibGUgLy8gV2lsbCBjb250YWluIHRoZSBzdGF0ZSBvZiB0aGUgb2JqZWN0IHdoZW4gZmlyc3QgYWRkZWQgb3IgdXBkYXRlZFxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBzdGF0dXM6IEl0ZW1TdGF0dXMsXHJcbiAgICAgICAgICAgIHByaXZhdGUgaXRlbTogVCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBrZXk6IFRLZXlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5hc0xvYWRlZCA9IGl0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNOZXcoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5OZXc7XHJcbiAgICAgICAgICAgIHRoaXMuYXNMb2FkZWQgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNTYXZlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLlNhdmVkO1xyXG4gICAgICAgICAgICB0aGlzLmFzTG9hZGVkID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5Nb2RpZmllZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNEZWxldGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuRGVsZXRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0dXMoKTogSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJdGVtKCk6IFQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEtleSgpOiBUS2V5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGhhc0NoYW5nZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFN0YXRlKTtcclxuICAgICAgICAgICAgdmFyIGFzTG9hZGVkQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmFzTG9hZGVkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGVBc1N0cmluZyAhPT0gYXNMb2FkZWRBc1N0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiBhbiBpdGVtIGluIFwiU2F2ZWRcIiBzdGF0dXMgaGFzIGJlZW4gbW9kaWZpZWQsIGFuZCBjaGFuZ2VzIHRoZSBzdGF0dXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBJdGVtU3RhdHVzLlNhdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtBc01vZGlmaWVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJZGVudGl0eU1hcFxyXG4gICAgICAgIDxcclxuICAgICAgICBUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID5cclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogVHJhY2tlZEl0ZW08VCwgVEtleT4gfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYga2V5IGlzIGFscmVhZHkgc3RvcmVkIGluIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1RyYWNrZWQoa2V5OiBUS2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRCeUlkKGtleTogVEtleSk6IFQge1xyXG4gICAgICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRUb09iamVjdE1hcFtpZEFzU3RyaW5nXS5nZXRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIG9yIHJlcGxhY2VzIGFuIGl0ZW0gdG8gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGQoa2V5OiBUS2V5LCBpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdJdGVtID0gbmV3IFRyYWNrZWRJdGVtKEl0ZW1TdGF0dXMuTmV3LCBpdGVtLCBrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10gPSBuZXdJdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlKGtleTogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJZHMoKTogVEtleVtdIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2godGhpcy5pZFRvT2JqZWN0TWFwW2VsZW1lbnRdLmdldEtleSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzRGVsZXRlZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzRGVsZXRlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc1NhdmVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNTYXZlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc01vZGlmaWVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNNb2RpZmllZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEl0ZW1TdGF0dXMoa2V5OiBUS2V5KTogSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2tlZEl0ZW0uZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wdXRlcyB0aGUgY29ycmVjdCBzdGF0dXMgZm9yIGFuIGl0ZW0gaW4gXCJTYXZlZFwiIHN0YXR1cywgYXMgaXQgbWF5IGhhdmUgYmVlbiBtb2RpZmllZCBzaW5jZSBub3cgKGhlcmUgd2UgZG9uJ3QgaGF2ZSBwcm9wZXJ0eSB0cmFja2luZykuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlU2F2ZWRJdGVtU3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFRyYWNrZWRJdGVtKGtleTogVEtleSk6IFRyYWNrZWRJdGVtPFQsIFRLZXk+IHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gdGhpcy5pZFRvT2JqZWN0TWFwW2tleS50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgaWYgKCF0b1JldHVybikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSWRlbnRpdHlNYXAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3REZWxldGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3RSZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL09iamVjdFNhdmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Vbml0T2ZXb3JrRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG4vLyBpbXBvcnQge0luUHJvY2Vzc0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtJZGVudGl0eU1hcCwgSXRlbVN0YXR1c30gZnJvbSBcIi4vSWRlbnRpdHlNYXBcIjtcclxuLy8gaW1wb3J0IHtPYmplY3REZWxldGVkRXZlbnR9IGZyb20gXCIuL09iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFNhdmVkRXZlbnR9IGZyb20gXCIuL09iamVjdFNhdmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrRXJyb3JzfSBmcm9tIFwiLi9Vbml0T2ZXb3JrRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnkuSVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBJblByb2Nlc3NEaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkluUHJvY2Vzc0Rpc3BhdGNoZXI7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgVW5pdE9mV29yayBmb3IgYSBzaW5nbGUgUmVwb3NpdG9yeS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFVuaXRPZldvcms8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaWRNYXA6IElkZW50aXR5TWFwPFQsIFRLZXk+O1xyXG4gICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeTogSVJlcG9zaXRvcnk8VCwgVEtleT47XHJcbiAgICAgICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBJblByb2Nlc3NEaXNwYXRjaGVyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihyZXBvc2l0b3J5OiBJUmVwb3NpdG9yeTxULCBUS2V5Pikge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwID0gbmV3IElkZW50aXR5TWFwPFQsIFRLZXk+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBSZXBvc2l0b3J5IG9yIGZyb20gdGhlIFVuaXRPZldvcmssIGdpdmVuIGl0cyBJZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5nZXRJdGVtU3RhdHVzKGtleSkgPT09IEl0ZW1TdGF0dXMuRGVsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRPZldvcmtFcnJvcnMudGhyb3coVW5pdE9mV29ya0Vycm9ycy5JdGVtTWFya2VkQXNEZWxldGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gdGhpcy5yZXBvc2l0b3J5LmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5hZGQoa2V5LCB0b1JldHVybik7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzU2F2ZWRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0cmlldmVkRXZlbnQgPSBuZXcgT2JqZWN0UmV0cmlldmVkRXZlbnQodG9SZXR1cm4uX190eXBlTmFtZSwgdG9SZXR1cm4uX190eXBlVmVyc2lvbiwgdG9SZXR1cm4uZ2V0S2V5KCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChyZXRyaWV2ZWRFdmVudCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzRGVsZXRlZEJ5SWQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNhdmVBbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5pZE1hcC5nZXRJZHMoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IG9mIGtleXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTWFwLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLkRlbGV0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0RlbGV0ZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5Nb2RpZmllZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTmV3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NOZXdPck1vZGlmaWVkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuU2F2ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcHJvY2Vzc0RlbGV0ZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZGVsZXRlZEV2ZW50ID0gbmV3IE9iamVjdERlbGV0ZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwga2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlRXZlbnQoZGVsZXRlZEV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkuc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgLy8gcmFpc2VzIGFuIGV2ZW50IGZvciB3aG9tZXZlciBpcyBpbnRlcmVzdGVkXHJcbiAgICAgICAgICAgIHZhciBzYXZlZEV2ZW50ID0gbmV3IE9iamVjdFNhdmVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGtleS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KHNhdmVkRXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBvYmplY3QgZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHJlbW92ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTWFwLnJlbW92ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==