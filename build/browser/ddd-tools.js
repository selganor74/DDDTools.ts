var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("DDDTools/CommonInterfaces/ITypeTracking", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/PersistableObject/IPersistable", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/CommonInterfaces/IEquatable", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/ValueObject/IValueObject", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/Entity/IKeyValueObject", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/ErrorManagement/BaseErrors", [], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var BaseErrors;
    return {
        setters:[],
        execute: function() {
            BaseErrors = (function () {
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
            exports_6("BaseErrors", BaseErrors);
        }
    }
});
System.register("DDDTools/PersistableObject/Errors", ["DDDTools/ErrorManagement/BaseErrors"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var BaseErrors_1;
    var Errors;
    return {
        setters:[
            function (BaseErrors_1_1) {
                BaseErrors_1 = BaseErrors_1_1;
            }],
        execute: function() {
            Errors = (function (_super) {
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
            }(BaseErrors_1.BaseErrors));
            exports_7("Errors", Errors);
        }
    }
});
System.register("DDDTools/Utils/SimpleGuid", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var SimpleGuid;
    return {
        setters:[],
        execute: function() {
            SimpleGuid = (function () {
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
            exports_8("SimpleGuid", SimpleGuid);
        }
    }
});
System.register("DDDTools/ValueObject/BaseValueObject", ["DDDTools/PersistableObject/BasePersistableObject"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var BasePersistableObject_1;
    var BaseValueObject;
    return {
        setters:[
            function (BasePersistableObject_1_1) {
                BasePersistableObject_1 = BasePersistableObject_1_1;
            }],
        execute: function() {
            BaseValueObject = (function (_super) {
                __extends(BaseValueObject, _super);
                function BaseValueObject() {
                    _super.call(this);
                }
                BaseValueObject.prototype.equals = function (item) {
                    var foreign = JSON.stringify(item);
                    var local = JSON.stringify(this);
                    return foreign === local;
                };
                return BaseValueObject;
            }(BasePersistableObject_1.BasePersistableObject));
            exports_9("BaseValueObject", BaseValueObject);
        }
    }
});
System.register("DDDTools/ValueObjects/Guid", ["DDDTools/Utils/SimpleGuid", "DDDTools/ValueObject/BaseValueObject"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var SimpleGuid_1, BaseValueObject_1;
    var Guid;
    return {
        setters:[
            function (SimpleGuid_1_1) {
                SimpleGuid_1 = SimpleGuid_1_1;
            },
            function (BaseValueObject_1_1) {
                BaseValueObject_1 = BaseValueObject_1_1;
            }],
        execute: function() {
            Guid = (function (_super) {
                __extends(Guid, _super);
                function Guid(guid) {
                    _super.call(this);
                    this.__typeName = "DDDTools.ValueObjects.Guid";
                    this.__typeVersion = "v1";
                    if (guid) {
                        this.guid = guid;
                    }
                    else {
                        this.guid = SimpleGuid_1.SimpleGuid.generate();
                    }
                }
                Guid.generate = function () {
                    return new Guid(SimpleGuid_1.SimpleGuid.generate());
                };
                Guid.prototype.toString = function () {
                    return this.guid;
                };
                return Guid;
            }(BaseValueObject_1.BaseValueObject));
            exports_10("Guid", Guid);
        }
    }
});
System.register("DDDTools/PersistableObject/TypeRegistry", ["DDDTools/PersistableObject/Errors", "DDDTools/ValueObjects/Guid"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var Errors_1, Guid_1;
    var TypeRegistry;
    return {
        setters:[
            function (Errors_1_1) {
                Errors_1 = Errors_1_1;
            },
            function (Guid_1_1) {
                Guid_1 = Guid_1_1;
            }],
        execute: function() {
            TypeRegistry = (function () {
                function TypeRegistry() {
                }
                TypeRegistry.registerValueObjectsLibrary = function () {
                    var sThis = TypeRegistry;
                    sThis.registerType("DDDTools.ValueObjects.Guid", "v1", Guid_1.Guid);
                };
                TypeRegistry.registerType = function (typeName, typeVersion, typePrototype) {
                    var sThis = TypeRegistry;
                    if (!typePrototype) {
                        Errors_1.Errors.throw(Errors_1.Errors.CannotRegisterUndefined, "typePrototype supplied for " + typeName + " " + typeVersion + " is null or undefined!");
                    }
                    if (!sThis.versionIsInCorrectFormat(typeVersion)) {
                        Errors_1.Errors.throw(Errors_1.Errors.IncorrectVersionFormat);
                    }
                    sThis.registry[typeName] = this.registry[typeName] || {};
                    sThis.registry[typeName][typeVersion] = typePrototype;
                    sThis.updateLatestVersions(typeName, typeVersion);
                    if (!sThis.libraryRegistered) {
                        sThis.libraryRegistered = true;
                        sThis.registerValueObjectsLibrary();
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
                        Errors_1.Errors.throw(Errors_1.Errors.TypeNotRegistered, "Type " + typeName + " does not exist in the TypeRegistry.");
                    }
                    if (!sThis.registry[typeName][typeVersion]) {
                        Errors_1.Errors.throw(Errors_1.Errors.TypeNotRegistered, "Version " + typeVersion + " of Type " + typeName + " does not exist in the TypeRegistry.");
                    }
                    var toInstantiate = sThis.registry[typeName][typeVersion];
                    var toReturn;
                    try {
                        toReturn = (new toInstantiate());
                    }
                    catch (e) {
                        Errors_1.Errors.throw(Errors_1.Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
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
                TypeRegistry.libraryRegistered = false;
                return TypeRegistry;
            }());
            exports_11("TypeRegistry", TypeRegistry);
        }
    }
});
System.register("DDDTools/PersistableObject/Factory", ["DDDTools/PersistableObject/Errors", "DDDTools/PersistableObject/TypeRegistry"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var Errors_2, TypeRegistry_1;
    var Factory, Upgrader;
    return {
        setters:[
            function (Errors_2_1) {
                Errors_2 = Errors_2_1;
            },
            function (TypeRegistry_1_1) {
                TypeRegistry_1 = TypeRegistry_1_1;
            }],
        execute: function() {
            Factory = (function () {
                function Factory() {
                }
                Factory.registerType = function (typeName, typeVersion, typePrototype) {
                    TypeRegistry_1.TypeRegistry.registerType(typeName, typeVersion, typePrototype);
                };
                Factory.createTypeInstance = function (typeName, typeVersion) {
                    if (!Factory.typeRegistry) {
                        Errors_2.Errors.throw(Errors_2.Errors.TypeRegistryNotSet, "Please define a type registry and set it on the Factory calling 'setTypeRegistry' method.");
                    }
                    return TypeRegistry_1.TypeRegistry.getTypeInstance(typeName, typeVersion);
                };
                Factory.createObjectsFromState = function (state) {
                    if (state === undefined) {
                        Errors_2.Errors.throw(Errors_2.Errors.UnableToInstantiateType, "state cannot be 'undefined'");
                    }
                    if (state === null) {
                        Errors_2.Errors.throw(Errors_2.Errors.UnableToInstantiateType, "state cannot be 'null'");
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
                Factory.typeRegistry = new TypeRegistry_1.TypeRegistry();
                return Factory;
            }());
            exports_12("Factory", Factory);
            Upgrader = (function () {
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
                        Errors_2.Errors.throw(Errors_2.Errors.TypeNotInstatiable, "The type " + typeName + " cannot be instantiated, so it is impossible to identify the latest possible version.");
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
                        Errors_2.Errors.throw(Errors_2.Errors.WrongVersionInUpgradedInstance, "The expected version of the upgraded instance was " + nextVersion + " while was found to be " + upgraderInstance.__typeVersion);
                    }
                    return Upgrader.upgrade(upgraded);
                };
                Upgrader.computeNextVersion = function (typeVersion) {
                    var versionRe = new RegExp("^v[0-9]+");
                    if (!versionRe.test(typeVersion)) {
                        Errors_2.Errors.throw(Errors_2.Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
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
            exports_12("Upgrader", Upgrader);
        }
    }
});
System.register("DDDTools/Serialization/SerializableDate", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var SerializableDate;
    return {
        setters:[],
        execute: function() {
            SerializableDate = (function () {
                function SerializableDate(date) {
                    this.__typeName = "Date";
                    this.__typeVersion = "v1";
                    this.__dateAsString = date.toISOString();
                }
                SerializableDate.prototype.getDate = function () {
                    return new Date(this.__dateAsString);
                };
                return SerializableDate;
            }());
            exports_13("SerializableDate", SerializableDate);
        }
    }
});
System.register("DDDTools/Serialization/SerializableRegExp", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var SerializableRegExp;
    return {
        setters:[],
        execute: function() {
            SerializableRegExp = (function () {
                function SerializableRegExp(regExp) {
                    this.__typeName = "RegExp";
                    this.__typeVersion = "v1";
                    this.__regularExpression = regExp.toString();
                }
                SerializableRegExp.prototype.getRegExp = function () {
                    return new RegExp(this.__regularExpression);
                };
                return SerializableRegExp;
            }());
            exports_14("SerializableRegExp", SerializableRegExp);
        }
    }
});
System.register("DDDTools/Serialization/Touch", [], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var Touch;
    return {
        setters:[],
        execute: function() {
            Touch = (function () {
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
            exports_15("Touch", Touch);
        }
    }
});
System.register("DDDTools/Serialization/Serializer", ["DDDTools/Serialization/SerializableDate", "DDDTools/Serialization/SerializableRegExp", "DDDTools/Serialization/Touch"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var SerializableDate_1, SerializableRegExp_1, Touch_1;
    var Serializer;
    return {
        setters:[
            function (SerializableDate_1_1) {
                SerializableDate_1 = SerializableDate_1_1;
            },
            function (SerializableRegExp_1_1) {
                SerializableRegExp_1 = SerializableRegExp_1_1;
            },
            function (Touch_1_1) {
                Touch_1 = Touch_1_1;
            }],
        execute: function() {
            Serializer = (function () {
                function Serializer() {
                }
                Serializer.serialize = function (toSerialize) {
                    var toReturn;
                    Touch_1.Touch.resetTouchIndex();
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
                            var newFakeDate = new SerializableDate_1.SerializableDate(current);
                            sourceObject[idx] = newFakeDate;
                            continue;
                        }
                        if (current instanceof RegExp) {
                            var newFakeRegExp = new SerializableRegExp_1.SerializableRegExp(current);
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
                    if (Touch_1.Touch.hasBeenTouched(sourceObject)) {
                        Touch_1.Touch.untouch(sourceObject);
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
                        if (current instanceof SerializableDate_1.SerializableDate) {
                            sourceObject[idx] = current.getDate();
                            continue;
                        }
                        if (current instanceof SerializableRegExp_1.SerializableRegExp) {
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
                        if (!Touch_1.Touch.hasBeenTouched(value)) {
                            Touch_1.Touch.touch(value);
                        }
                    }
                    return value;
                };
                return Serializer;
            }());
            exports_16("Serializer", Serializer);
        }
    }
});
System.register("DDDTools/Utils/SimpleIdentityMap", [], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var SimpleIdentityMap;
    return {
        setters:[],
        execute: function() {
            SimpleIdentityMap = (function () {
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
            exports_17("SimpleIdentityMap", SimpleIdentityMap);
        }
    }
});
System.register("DDDTools/Serialization/Deserializer", ["DDDTools/Utils/SimpleIdentityMap", "DDDTools/Serialization/Touch"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var SimpleIdentityMap_1, Touch_2;
    var Deserializer;
    return {
        setters:[
            function (SimpleIdentityMap_1_1) {
                SimpleIdentityMap_1 = SimpleIdentityMap_1_1;
            },
            function (Touch_2_1) {
                Touch_2 = Touch_2_1;
            }],
        execute: function() {
            Deserializer = (function () {
                function Deserializer() {
                }
                Deserializer.deserialize = function (toDeserialize) {
                    Deserializer.identityMap = new SimpleIdentityMap_1.SimpleIdentityMap();
                    var toReturn = JSON.parse(toDeserialize, Deserializer.customReviver);
                    Deserializer.cleanup();
                    return toReturn;
                };
                Deserializer.cleanup = function () {
                    var sThis = Deserializer;
                    var idMap = sThis.identityMap;
                    var untouch = Touch_2.Touch.untouch;
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
                        if (value.__typeName === "RegExp") {
                            value = new RegExp(value.__regularExpression || "");
                        }
                    }
                    return value;
                };
                Deserializer.FakeDateDeserializer = function (value) {
                    if (value.__typeName) {
                        if (value.__typeName === "Date") {
                            value = new Date(value.__dateAsString);
                        }
                    }
                    return value;
                };
                return Deserializer;
            }());
            exports_18("Deserializer", Deserializer);
        }
    }
});
System.register("DDDTools/PersistableObject/BasePersistableObject", ["DDDTools/PersistableObject/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Serialization/Serializer", "DDDTools/Serialization/Deserializer"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var Errors_3, Factory_1, Serializer_1, Deserializer_1;
    var BasePersistableObject;
    return {
        setters:[
            function (Errors_3_1) {
                Errors_3 = Errors_3_1;
            },
            function (Factory_1_1) {
                Factory_1 = Factory_1_1;
            },
            function (Serializer_1_1) {
                Serializer_1 = Serializer_1_1;
            },
            function (Deserializer_1_1) {
                Deserializer_1 = Deserializer_1_1;
            }],
        execute: function() {
            BasePersistableObject = (function () {
                function BasePersistableObject() {
                    this.__typeName = "";
                    this.__typeVersion = "";
                }
                BasePersistableObject.prototype.getState = function () {
                    if (this.__typeName === "") {
                        Errors_3.Errors.throw(Errors_3.Errors.TypeNameNotSet);
                    }
                    if (this.__typeVersion === "") {
                        Errors_3.Errors.throw(Errors_3.Errors.TypeVersionNotSet);
                    }
                    var toReconstitute = Serializer_1.Serializer.serialize(this);
                    var reconstituted = Deserializer_1.Deserializer.deserialize(toReconstitute);
                    return reconstituted;
                };
                BasePersistableObject.prototype.setState = function (state) {
                    if (typeof state !== "object") {
                        Errors_3.Errors.throw(Errors_3.Errors.StateIsNotAnObject, "state deve essere un oggetto");
                    }
                    for (var element in state) {
                        var currentStateElement = state[element];
                        this[element] = Factory_1.Factory.createObjectsFromState(currentStateElement);
                    }
                };
                return BasePersistableObject;
            }());
            exports_19("BasePersistableObject", BasePersistableObject);
        }
    }
});
System.register("DDDTools/DomainEvents/IDomainEvent", [], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/DomainEvents/IEventHandler", [], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/DomainEvents/IDispatcher", [], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/DomainEvents/DomainDispatcher", [], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var DomainDispatcher;
    return {
        setters:[],
        execute: function() {
            DomainDispatcher = (function () {
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
            exports_23("DomainDispatcher", DomainDispatcher);
        }
    }
});
System.register("DDDTools/Entity/IEntity", [], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/Entity/BaseEntity", ["DDDTools/PersistableObject/BasePersistableObject", "DDDTools/DomainEvents/DomainDispatcher"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var BasePersistableObject_2, DomainDispatcher_1;
    var BaseEntity;
    return {
        setters:[
            function (BasePersistableObject_2_1) {
                BasePersistableObject_2 = BasePersistableObject_2_1;
            },
            function (DomainDispatcher_1_1) {
                DomainDispatcher_1 = DomainDispatcher_1_1;
            }],
        execute: function() {
            BaseEntity = (function (_super) {
                __extends(BaseEntity, _super);
                function BaseEntity() {
                    _super.apply(this, arguments);
                }
                BaseEntity.prototype.raiseEvent = function (event) {
                    DomainDispatcher_1.DomainDispatcher.dispatch(event);
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
            }(BasePersistableObject_2.BasePersistableObject));
            exports_25("BaseEntity", BaseEntity);
        }
    }
});
System.register("DDDTools/Aggregate/IAggregateRoot", [], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/Aggregate/BaseAggregateRoot", ["DDDTools/Entity/BaseEntity"], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var BaseEntity_1;
    var BaseAggregateRoot;
    return {
        setters:[
            function (BaseEntity_1_1) {
                BaseEntity_1 = BaseEntity_1_1;
            }],
        execute: function() {
            BaseAggregateRoot = (function (_super) {
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
            }(BaseEntity_1.BaseEntity));
            exports_27("BaseAggregateRoot", BaseAggregateRoot);
        }
    }
});
System.register("DDDTools/Aggregate", ["DDDTools/Aggregate/BaseAggregateRoot"], function(exports_28, context_28) {
    "use strict";
    var __moduleName = context_28 && context_28.id;
    var BaseAggregateRoot_1;
    return {
        setters:[
            function (BaseAggregateRoot_1_1) {
                BaseAggregateRoot_1 = BaseAggregateRoot_1_1;
            }],
        execute: function() {
            exports_28("BaseAggregateRoot", BaseAggregateRoot_1.BaseAggregateRoot);
        }
    }
});
System.register("DDDTools/CommonInterfaces", [], function(exports_29, context_29) {
    "use strict";
    var __moduleName = context_29 && context_29.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/DomainEvents/InProcessDispatcher", ["DDDTools/Utils/SimpleGuid"], function(exports_30, context_30) {
    "use strict";
    var __moduleName = context_30 && context_30.id;
    var SimpleGuid_2;
    var InProcessDispatcher;
    return {
        setters:[
            function (SimpleGuid_2_1) {
                SimpleGuid_2 = SimpleGuid_2_1;
            }],
        execute: function() {
            InProcessDispatcher = (function () {
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
                        handler.__handlerId = SimpleGuid_2.SimpleGuid.generate();
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
                    for (var _i = 0, Errors_4 = Errors; _i < Errors_4.length; _i++) {
                        var element = Errors_4[_i];
                        message += element.name + ":" + element.message + "\n";
                    }
                    return message;
                };
                return InProcessDispatcher;
            }());
            exports_30("InProcessDispatcher", InProcessDispatcher);
        }
    }
});
System.register("DDDTools/DomainEvents", ["DDDTools/DomainEvents/DomainDispatcher", "DDDTools/DomainEvents/InProcessDispatcher"], function(exports_31, context_31) {
    "use strict";
    var __moduleName = context_31 && context_31.id;
    var DomainDispatcher_2, InProcessDispatcher_1;
    return {
        setters:[
            function (DomainDispatcher_2_1) {
                DomainDispatcher_2 = DomainDispatcher_2_1;
            },
            function (InProcessDispatcher_1_1) {
                InProcessDispatcher_1 = InProcessDispatcher_1_1;
            }],
        execute: function() {
            exports_31("DomainDispatcher", DomainDispatcher_2.DomainDispatcher);
            exports_31("InProcessDispatcher", InProcessDispatcher_1.InProcessDispatcher);
        }
    }
});
System.register("DDDTools/Entity/BaseKeyValueObject", ["DDDTools/ValueObject/BaseValueObject"], function(exports_32, context_32) {
    "use strict";
    var __moduleName = context_32 && context_32.id;
    var BaseValueObject_2;
    var BaseKeyValueObject;
    return {
        setters:[
            function (BaseValueObject_2_1) {
                BaseValueObject_2 = BaseValueObject_2_1;
            }],
        execute: function() {
            BaseKeyValueObject = (function (_super) {
                __extends(BaseKeyValueObject, _super);
                function BaseKeyValueObject() {
                    _super.call(this);
                }
                return BaseKeyValueObject;
            }(BaseValueObject_2.BaseValueObject));
            exports_32("BaseKeyValueObject", BaseKeyValueObject);
        }
    }
});
System.register("DDDTools/Entity", ["DDDTools/Entity/BaseEntity", "DDDTools/Entity/BaseKeyValueObject"], function(exports_33, context_33) {
    "use strict";
    var __moduleName = context_33 && context_33.id;
    var BaseEntity_2, BaseKeyValueObject_1;
    return {
        setters:[
            function (BaseEntity_2_1) {
                BaseEntity_2 = BaseEntity_2_1;
            },
            function (BaseKeyValueObject_1_1) {
                BaseKeyValueObject_1 = BaseKeyValueObject_1_1;
            }],
        execute: function() {
            exports_33("BaseEntity", BaseEntity_2.BaseEntity);
            exports_33("BaseKeyValueObject", BaseKeyValueObject_1.BaseKeyValueObject);
        }
    }
});
System.register("DDDTools/ErrorManagement", ["DDDTools/ErrorManagement/BaseErrors"], function(exports_34, context_34) {
    "use strict";
    var __moduleName = context_34 && context_34.id;
    var BaseErrors_2;
    return {
        setters:[
            function (BaseErrors_2_1) {
                BaseErrors_2 = BaseErrors_2_1;
            }],
        execute: function() {
            exports_34("BaseErrors", BaseErrors_2.BaseErrors);
        }
    }
});
System.register("DDDTools/PersistableObject", ["DDDTools/PersistableObject/BasePersistableObject", "DDDTools/PersistableObject/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/PersistableObject/TypeRegistry"], function(exports_35, context_35) {
    "use strict";
    var __moduleName = context_35 && context_35.id;
    var BasePersistableObject_3, Errors_5, Factory_2, TypeRegistry_2;
    return {
        setters:[
            function (BasePersistableObject_3_1) {
                BasePersistableObject_3 = BasePersistableObject_3_1;
            },
            function (Errors_5_1) {
                Errors_5 = Errors_5_1;
            },
            function (Factory_2_1) {
                Factory_2 = Factory_2_1;
            },
            function (TypeRegistry_2_1) {
                TypeRegistry_2 = TypeRegistry_2_1;
            }],
        execute: function() {
            exports_35("BasePersistableObject", BasePersistableObject_3.BasePersistableObject);
            exports_35("Errors", Errors_5.Errors);
            exports_35("Factory", Factory_2.Factory);
            exports_35("TypeRegistry", TypeRegistry_2.TypeRegistry);
        }
    }
});
System.register("DDDTools/Repository/Errors", ["DDDTools/ErrorManagement/BaseErrors"], function(exports_36, context_36) {
    "use strict";
    var __moduleName = context_36 && context_36.id;
    var BaseErrors_3;
    var Errors;
    return {
        setters:[
            function (BaseErrors_3_1) {
                BaseErrors_3 = BaseErrors_3_1;
            }],
        execute: function() {
            Errors = (function (_super) {
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
                return Errors;
            }(BaseErrors_3.BaseErrors));
            exports_36("Errors", Errors);
        }
    }
});
System.register("DDDTools/Repository/IRepository", [], function(exports_37, context_37) {
    "use strict";
    var __moduleName = context_37 && context_37.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/Repository/Events", [], function(exports_38, context_38) {
    "use strict";
    var __moduleName = context_38 && context_38.id;
    var Events;
    return {
        setters:[],
        execute: function() {
            Events = (function () {
                function Events() {
                }
                Events.__nameSpace = "DDDTools.Repository";
                Events.ItemAddedEvent = Events.__nameSpace + ".ItemAddedEvent";
                Events.ItemUpdatedEvent = Events.__nameSpace + ".ItemUpdatedEvent";
                Events.ItemDeletedEvent = Events.__nameSpace + ".ItemDeletedEvent";
                Events.ItemRetrievedEvent = Events.__nameSpace + ".ItemRetrievedEvent";
                return Events;
            }());
            exports_38("Events", Events);
        }
    }
});
System.register("DDDTools/Repository/ItemRetrievedEvent", ["DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function(exports_39, context_39) {
    "use strict";
    var __moduleName = context_39 && context_39.id;
    var BaseValueObject_3, Events_1;
    var ItemRetrievedEvent;
    return {
        setters:[
            function (BaseValueObject_3_1) {
                BaseValueObject_3 = BaseValueObject_3_1;
            },
            function (Events_1_1) {
                Events_1 = Events_1_1;
            }],
        execute: function() {
            ItemRetrievedEvent = (function (_super) {
                __extends(ItemRetrievedEvent, _super);
                function ItemRetrievedEvent(typeName, typeVersion, id, objectState) {
                    _super.call(this);
                    this.typeName = typeName;
                    this.typeVersion = typeVersion;
                    this.id = id;
                    this.objectState = objectState;
                    this.__typeName = Events_1.Events.ItemRetrievedEvent;
                    this.__typeVersion = "v1";
                }
                return ItemRetrievedEvent;
            }(BaseValueObject_3.BaseValueObject));
            exports_39("ItemRetrievedEvent", ItemRetrievedEvent);
        }
    }
});
System.register("DDDTools/Repository/ItemAddedEvent", ["DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function(exports_40, context_40) {
    "use strict";
    var __moduleName = context_40 && context_40.id;
    var BaseValueObject_4, Events_2;
    var ItemAddedEvent;
    return {
        setters:[
            function (BaseValueObject_4_1) {
                BaseValueObject_4 = BaseValueObject_4_1;
            },
            function (Events_2_1) {
                Events_2 = Events_2_1;
            }],
        execute: function() {
            ItemAddedEvent = (function (_super) {
                __extends(ItemAddedEvent, _super);
                function ItemAddedEvent(typeName, typeVersion, id, objectState) {
                    _super.call(this);
                    this.typeName = typeName;
                    this.typeVersion = typeVersion;
                    this.id = id;
                    this.objectState = objectState;
                    this.__typeName = Events_2.Events.ItemAddedEvent;
                    this.__typeVersion = "v1";
                }
                return ItemAddedEvent;
            }(BaseValueObject_4.BaseValueObject));
            exports_40("ItemAddedEvent", ItemAddedEvent);
        }
    }
});
System.register("DDDTools/Repository/ItemUpdatedEvent", ["DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function(exports_41, context_41) {
    "use strict";
    var __moduleName = context_41 && context_41.id;
    var BaseValueObject_5, Events_3;
    var ItemUpdatedEvent;
    return {
        setters:[
            function (BaseValueObject_5_1) {
                BaseValueObject_5 = BaseValueObject_5_1;
            },
            function (Events_3_1) {
                Events_3 = Events_3_1;
            }],
        execute: function() {
            ItemUpdatedEvent = (function (_super) {
                __extends(ItemUpdatedEvent, _super);
                function ItemUpdatedEvent(typeName, typeVersion, id, objectState) {
                    _super.call(this);
                    this.typeName = typeName;
                    this.typeVersion = typeVersion;
                    this.id = id;
                    this.objectState = objectState;
                    this.__typeName = Events_3.Events.ItemUpdatedEvent;
                    this.__typeVersion = "v1";
                }
                return ItemUpdatedEvent;
            }(BaseValueObject_5.BaseValueObject));
            exports_41("ItemUpdatedEvent", ItemUpdatedEvent);
        }
    }
});
System.register("DDDTools/Repository/ItemDeletedEvent", ["DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function(exports_42, context_42) {
    "use strict";
    var __moduleName = context_42 && context_42.id;
    var BaseValueObject_6, Events_4;
    var ItemDeletedEvent;
    return {
        setters:[
            function (BaseValueObject_6_1) {
                BaseValueObject_6 = BaseValueObject_6_1;
            },
            function (Events_4_1) {
                Events_4 = Events_4_1;
            }],
        execute: function() {
            ItemDeletedEvent = (function (_super) {
                __extends(ItemDeletedEvent, _super);
                function ItemDeletedEvent(typeName, typeVersion, id, objectState) {
                    _super.call(this);
                    this.typeName = typeName;
                    this.typeVersion = typeVersion;
                    this.id = id;
                    this.objectState = objectState;
                    this.__typeName = Events_4.Events.ItemDeletedEvent;
                    this.__typeVersion = "v1";
                }
                return ItemDeletedEvent;
            }(BaseValueObject_6.BaseValueObject));
            exports_42("ItemDeletedEvent", ItemDeletedEvent);
        }
    }
});
System.register("DDDTools/Repository/BaseRepository", ["DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Repository/ItemRetrievedEvent", "DDDTools/Repository/ItemAddedEvent", "DDDTools/Repository/ItemUpdatedEvent", "DDDTools/Repository/ItemDeletedEvent", "DDDTools/DomainEvents/DomainDispatcher"], function(exports_43, context_43) {
    "use strict";
    var __moduleName = context_43 && context_43.id;
    var Errors_6, Factory_3, ItemRetrievedEvent_1, ItemAddedEvent_1, ItemUpdatedEvent_1, ItemDeletedEvent_1, DomainDispatcher_3;
    var BaseRepository;
    return {
        setters:[
            function (Errors_6_1) {
                Errors_6 = Errors_6_1;
            },
            function (Factory_3_1) {
                Factory_3 = Factory_3_1;
            },
            function (ItemRetrievedEvent_1_1) {
                ItemRetrievedEvent_1 = ItemRetrievedEvent_1_1;
            },
            function (ItemAddedEvent_1_1) {
                ItemAddedEvent_1 = ItemAddedEvent_1_1;
            },
            function (ItemUpdatedEvent_1_1) {
                ItemUpdatedEvent_1 = ItemUpdatedEvent_1_1;
            },
            function (ItemDeletedEvent_1_1) {
                ItemDeletedEvent_1 = ItemDeletedEvent_1_1;
            },
            function (DomainDispatcher_3_1) {
                DomainDispatcher_3 = DomainDispatcher_3_1;
            }],
        execute: function() {
            BaseRepository = (function () {
                function BaseRepository(managedType) {
                    this.managedType = managedType;
                    if (managedType === "") {
                        Errors_6.Errors.throw(Errors_6.Errors.ManagedTypeNotSupplied);
                    }
                }
                BaseRepository.prototype.getById = function (id) {
                    try {
                        var retrieved = this.getByIdImplementation(id);
                        if (retrieved.__typeName !== this.managedType) {
                            var reason = Errors_6.Errors.getErrorInstance(Errors_6.Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtaine " + retrieved.__typeName + " from database.");
                        }
                        var toReturn = Factory_3.Factory.createObjectsFromState(retrieved);
                        var event = new ItemRetrievedEvent_1.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), retrieved);
                        DomainDispatcher_3.DomainDispatcher.dispatch(event);
                        return toReturn;
                    }
                    catch (e) {
                        Errors_6.Errors.throw(Errors_6.Errors.ItemNotFound, e.message);
                    }
                };
                BaseRepository.prototype.save = function (item) {
                    try {
                        var key = item.getKey().toString();
                    }
                    catch (e) {
                        Errors_6.Errors.throw(Errors_6.Errors.KeyNotSet);
                    }
                    var event;
                    var asItWas = null;
                    try {
                        asItWas = this.getById(item.getKey());
                    }
                    catch (e) {
                        event = new ItemAddedEvent_1.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                    }
                    if (!item.perfectlyMatch(asItWas)) {
                        item.incrementRevisionId();
                        event = event || new ItemUpdatedEvent_1.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                    }
                    this.saveImplementation(item);
                    if (event) {
                        DomainDispatcher_3.DomainDispatcher.dispatch(event);
                    }
                };
                BaseRepository.prototype.delete = function (id) {
                    var asItWas = null;
                    try {
                        asItWas = this.getById(id);
                    }
                    catch (e) {
                        if (e instanceof Error && e.name === Errors_6.Errors.ItemNotFound) {
                            return;
                        }
                        Errors_6.Errors.throw(Errors_6.Errors.ErrorDeletingItem, JSON.stringify(e));
                    }
                    var event = new ItemDeletedEvent_1.ItemDeletedEvent(asItWas.__typeName, asItWas.__typeVersion, id.toString(), asItWas.getState());
                    this.deleteImplementation(id);
                    DomainDispatcher_3.DomainDispatcher.dispatch(event);
                };
                return BaseRepository;
            }());
            exports_43("BaseRepository", BaseRepository);
        }
    }
});
System.register("DDDTools/Repository/BaseInMemoryRepository", ["DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Repository/BaseRepository"], function(exports_44, context_44) {
    "use strict";
    var __moduleName = context_44 && context_44.id;
    var Errors_7, Factory_4, BaseRepository_1;
    var BaseInMemoryRepository;
    return {
        setters:[
            function (Errors_7_1) {
                Errors_7 = Errors_7_1;
            },
            function (Factory_4_1) {
                Factory_4 = Factory_4_1;
            },
            function (BaseRepository_1_1) {
                BaseRepository_1 = BaseRepository_1_1;
            }],
        execute: function() {
            BaseInMemoryRepository = (function (_super) {
                __extends(BaseInMemoryRepository, _super);
                function BaseInMemoryRepository(managedTypeName) {
                    _super.call(this, managedTypeName);
                    this.storage = {};
                }
                BaseInMemoryRepository.prototype.getByIdImplementation = function (id) {
                    var key = id.toString();
                    if (this.storage[key]) {
                        var toReturn = Factory_4.Factory.createObjectsFromState(this.storage[key]);
                        return toReturn;
                    }
                    Errors_7.Errors.throw(Errors_7.Errors.ItemNotFound);
                };
                BaseInMemoryRepository.prototype.saveImplementation = function (item) {
                    var key = item.getKey().toString();
                    this.storage[key] = item.getState();
                };
                BaseInMemoryRepository.prototype.deleteImplementation = function (id) {
                    var key = id.toString();
                    this.storage[key] = undefined;
                };
                return BaseInMemoryRepository;
            }(BaseRepository_1.BaseRepository));
            exports_44("BaseInMemoryRepository", BaseInMemoryRepository);
        }
    }
});
System.register("DDDTools/Repository/IRepositoryAsync", [], function(exports_45, context_45) {
    "use strict";
    var __moduleName = context_45 && context_45.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/Repository/BaseRepositoryAsync", ["DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Repository/ItemRetrievedEvent", "DDDTools/Repository/ItemAddedEvent", "DDDTools/Repository/ItemUpdatedEvent", "DDDTools/Repository/ItemDeletedEvent", "DDDTools/DomainEvents/DomainDispatcher"], function(exports_46, context_46) {
    "use strict";
    var __moduleName = context_46 && context_46.id;
    var Errors_8, Factory_5, ItemRetrievedEvent_2, ItemAddedEvent_2, ItemUpdatedEvent_2, ItemDeletedEvent_2, DomainDispatcher_4;
    var BaseRepositoryAsync;
    return {
        setters:[
            function (Errors_8_1) {
                Errors_8 = Errors_8_1;
            },
            function (Factory_5_1) {
                Factory_5 = Factory_5_1;
            },
            function (ItemRetrievedEvent_2_1) {
                ItemRetrievedEvent_2 = ItemRetrievedEvent_2_1;
            },
            function (ItemAddedEvent_2_1) {
                ItemAddedEvent_2 = ItemAddedEvent_2_1;
            },
            function (ItemUpdatedEvent_2_1) {
                ItemUpdatedEvent_2 = ItemUpdatedEvent_2_1;
            },
            function (ItemDeletedEvent_2_1) {
                ItemDeletedEvent_2 = ItemDeletedEvent_2_1;
            },
            function (DomainDispatcher_4_1) {
                DomainDispatcher_4 = DomainDispatcher_4_1;
            }],
        execute: function() {
            BaseRepositoryAsync = (function () {
                function BaseRepositoryAsync(managedType) {
                    this.managedType = managedType;
                    if (managedType === "") {
                        Errors_8.Errors.throw(Errors_8.Errors.ManagedTypeNotSupplied);
                    }
                }
                BaseRepositoryAsync.prototype.getById = function (id) {
                    var _this = this;
                    var deferred = Q.defer();
                    this.getByIdImplementation(id).then(function (value) {
                        if (value.__typeName != _this.managedType) {
                            var reason = Errors_8.Errors.getErrorInstance(Errors_8.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtained " + value.__typeName + " from database.");
                            deferred.reject(reason);
                            return;
                        }
                        var toReturn = (Factory_5.Factory.createObjectsFromState(value));
                        var event = new ItemRetrievedEvent_2.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), value);
                        DomainDispatcher_4.DomainDispatcher.dispatch(event);
                        deferred.resolve(toReturn);
                    }, function (error) {
                        var reason = _this.buildError(error, Errors_8.Errors.ItemNotFound);
                        deferred.reject(reason);
                    });
                    return deferred.promise;
                };
                BaseRepositoryAsync.prototype.doSave = function (item, deferred) {
                    var _this = this;
                    this.saveImplementation(item).then(function () {
                        deferred.resolve();
                    }, function (error) {
                        var reason = _this.buildError(error, Errors_8.Errors.ErrorSavingItem);
                        deferred.reject(reason);
                    });
                    return deferred.promise;
                };
                BaseRepositoryAsync.prototype.save = function (item) {
                    var _this = this;
                    var deferred = Q.defer();
                    var event;
                    this.getById(item.getKey()).then(function (readValue) {
                        if (!item.perfectlyMatch(readValue)) {
                            item.incrementRevisionId();
                            _this.doSave(item, deferred);
                            event = event || new ItemUpdatedEvent_2.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                            DomainDispatcher_4.DomainDispatcher.dispatch(event);
                            return;
                        }
                        else {
                            deferred.resolve();
                            return;
                        }
                    }, function (error) {
                        if (error instanceof Error && error.name == Errors_8.Errors.ItemNotFound) {
                            item.incrementRevisionId();
                            _this.doSave(item, deferred);
                            event = event || new ItemAddedEvent_2.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                            DomainDispatcher_4.DomainDispatcher.dispatch(event);
                            return;
                        }
                        var reason = _this.buildError(error, Errors_8.Errors.ErrorReadingItem);
                        deferred.reject(reason);
                    });
                    return deferred.promise;
                };
                BaseRepositoryAsync.prototype.delete = function (id) {
                    var _this = this;
                    var deferred = Q.defer();
                    var event;
                    this.getById(id).then(function (item) {
                        var event = new ItemDeletedEvent_2.ItemDeletedEvent(item.__typeName, item.__typeVersion, id.toString(), item.getState());
                        _this.deleteImplementation(id).then(function () {
                            deferred.resolve();
                            DomainDispatcher_4.DomainDispatcher.dispatch(event);
                        }, function (error) {
                            var reason = _this.buildError(error, Errors_8.Errors.ErrorDeletingItem);
                            deferred.reject(reason);
                        });
                    }, function (error) {
                        if (error instanceof Error && error.name === Errors_8.Errors.ItemNotFound) {
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
                        reason = Errors_8.Errors.getErrorInstance(errorIfErrorFromCallIsNotError, JSON.stringify(errorFromCall));
                    }
                    return reason;
                };
                return BaseRepositoryAsync;
            }());
            exports_46("BaseRepositoryAsync", BaseRepositoryAsync);
        }
    }
});
System.register("DDDTools/Repository", ["DDDTools/Repository/BaseInMemoryRepository", "DDDTools/Repository/BaseRepository", "DDDTools/Repository/BaseRepositoryAsync", "DDDTools/Repository/Errors", "DDDTools/Repository/Events", "DDDTools/Repository/ItemAddedEvent", "DDDTools/Repository/ItemDeletedEvent", "DDDTools/Repository/ItemRetrievedEvent", "DDDTools/Repository/ItemUpdatedEvent"], function(exports_47, context_47) {
    "use strict";
    var __moduleName = context_47 && context_47.id;
    var BaseInMemoryRepository_1, BaseRepository_2, BaseRepositoryAsync_1, Errors_9, Events_5, ItemAddedEvent_3, ItemDeletedEvent_3, ItemRetrievedEvent_3, ItemUpdatedEvent_3;
    return {
        setters:[
            function (BaseInMemoryRepository_1_1) {
                BaseInMemoryRepository_1 = BaseInMemoryRepository_1_1;
            },
            function (BaseRepository_2_1) {
                BaseRepository_2 = BaseRepository_2_1;
            },
            function (BaseRepositoryAsync_1_1) {
                BaseRepositoryAsync_1 = BaseRepositoryAsync_1_1;
            },
            function (Errors_9_1) {
                Errors_9 = Errors_9_1;
            },
            function (Events_5_1) {
                Events_5 = Events_5_1;
            },
            function (ItemAddedEvent_3_1) {
                ItemAddedEvent_3 = ItemAddedEvent_3_1;
            },
            function (ItemDeletedEvent_3_1) {
                ItemDeletedEvent_3 = ItemDeletedEvent_3_1;
            },
            function (ItemRetrievedEvent_3_1) {
                ItemRetrievedEvent_3 = ItemRetrievedEvent_3_1;
            },
            function (ItemUpdatedEvent_3_1) {
                ItemUpdatedEvent_3 = ItemUpdatedEvent_3_1;
            }],
        execute: function() {
            exports_47("BaseInMemoryRepository", BaseInMemoryRepository_1.BaseInMemoryRepository);
            exports_47("BaseRepository", BaseRepository_2.BaseRepository);
            exports_47("BaseRepositoryAsync", BaseRepositoryAsync_1.BaseRepositoryAsync);
            exports_47("Errors", Errors_9.Errors);
            exports_47("Events", Events_5.Events);
            exports_47("ItemAddedEvent", ItemAddedEvent_3.ItemAddedEvent);
            exports_47("ItemDeletedEvent", ItemDeletedEvent_3.ItemDeletedEvent);
            exports_47("ItemRetrievedEvent", ItemRetrievedEvent_3.ItemRetrievedEvent);
            exports_47("ItemUpdatedEvent", ItemUpdatedEvent_3.ItemUpdatedEvent);
        }
    }
});
System.register("DDDTools/Serialization", ["DDDTools/Serialization/Deserializer", "DDDTools/Serialization/SerializableDate", "DDDTools/Serialization/SerializableRegExp", "DDDTools/Serialization/Serializer", "DDDTools/Serialization/Touch"], function(exports_48, context_48) {
    "use strict";
    var __moduleName = context_48 && context_48.id;
    var Deserializer_2, SerializableDate_2, SerializableRegExp_2, Serializer_2, Touch_3;
    return {
        setters:[
            function (Deserializer_2_1) {
                Deserializer_2 = Deserializer_2_1;
            },
            function (SerializableDate_2_1) {
                SerializableDate_2 = SerializableDate_2_1;
            },
            function (SerializableRegExp_2_1) {
                SerializableRegExp_2 = SerializableRegExp_2_1;
            },
            function (Serializer_2_1) {
                Serializer_2 = Serializer_2_1;
            },
            function (Touch_3_1) {
                Touch_3 = Touch_3_1;
            }],
        execute: function() {
            exports_48("Deserializer", Deserializer_2.Deserializer);
            exports_48("SerializableDate", SerializableDate_2.SerializableDate);
            exports_48("SerializableRegExp", SerializableRegExp_2.SerializableRegExp);
            exports_48("Serializer", Serializer_2.Serializer);
            exports_48("Touch", Touch_3.Touch);
        }
    }
});
System.register("DDDTools/UnitOfWork/Events", [], function(exports_49, context_49) {
    "use strict";
    var __moduleName = context_49 && context_49.id;
    var Events;
    return {
        setters:[],
        execute: function() {
            Events = (function () {
                function Events() {
                }
                Events.__nameSpace = "DDDTools.UnitOfWork";
                Events.ObjectSavedEvent = Events.__nameSpace + ".ObjectSavedEvent";
                Events.ObjectDeletedEvent = Events.__nameSpace + ".ObjectDeletedEvent";
                Events.ObjectRetrievedEvent = Events.__nameSpace + ".ObjectRetrievedEvent";
                return Events;
            }());
            exports_49("Events", Events);
        }
    }
});
System.register("DDDTools/UnitOfWork/IdentityMap", [], function(exports_50, context_50) {
    "use strict";
    var __moduleName = context_50 && context_50.id;
    var ItemStatus, TrackedItem, IdentityMap;
    return {
        setters:[],
        execute: function() {
            (function (ItemStatus) {
                ItemStatus[ItemStatus["New"] = 0] = "New";
                ItemStatus[ItemStatus["Modified"] = 1] = "Modified";
                ItemStatus[ItemStatus["Saved"] = 2] = "Saved";
                ItemStatus[ItemStatus["Deleted"] = 3] = "Deleted";
            })(ItemStatus || (ItemStatus = {}));
            exports_50("ItemStatus", ItemStatus);
            TrackedItem = (function () {
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
            IdentityMap = (function () {
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
            exports_50("IdentityMap", IdentityMap);
        }
    }
});
System.register("DDDTools/UnitOfWork/IUnitOfWork", [], function(exports_51, context_51) {
    "use strict";
    var __moduleName = context_51 && context_51.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("DDDTools/UnitOfWork/ObjectDeletedEvent", ["DDDTools/ValueObject/BaseValueObject", "DDDTools/UnitOfWork/Events"], function(exports_52, context_52) {
    "use strict";
    var __moduleName = context_52 && context_52.id;
    var BaseValueObject_7, Events_6;
    var ObjectDeletedEvent;
    return {
        setters:[
            function (BaseValueObject_7_1) {
                BaseValueObject_7 = BaseValueObject_7_1;
            },
            function (Events_6_1) {
                Events_6 = Events_6_1;
            }],
        execute: function() {
            ObjectDeletedEvent = (function (_super) {
                __extends(ObjectDeletedEvent, _super);
                function ObjectDeletedEvent(typeName, typeVersion, id) {
                    _super.call(this);
                    this.typeName = typeName;
                    this.typeVersion = typeVersion;
                    this.id = id;
                    this.__typeName = Events_6.Events.ObjectDeletedEvent;
                    this.__typeVersion = "v1";
                }
                return ObjectDeletedEvent;
            }(BaseValueObject_7.BaseValueObject));
            exports_52("ObjectDeletedEvent", ObjectDeletedEvent);
        }
    }
});
System.register("DDDTools/UnitOfWork/ObjectSavedEvent", ["DDDTools/ValueObject/BaseValueObject", "DDDTools/UnitOfWork/Events"], function(exports_53, context_53) {
    "use strict";
    var __moduleName = context_53 && context_53.id;
    var BaseValueObject_8, Events_7;
    var ObjectSavedEvent;
    return {
        setters:[
            function (BaseValueObject_8_1) {
                BaseValueObject_8 = BaseValueObject_8_1;
            },
            function (Events_7_1) {
                Events_7 = Events_7_1;
            }],
        execute: function() {
            ObjectSavedEvent = (function (_super) {
                __extends(ObjectSavedEvent, _super);
                function ObjectSavedEvent(typeName, typeVersion, id) {
                    _super.call(this);
                    this.typeName = typeName;
                    this.typeVersion = typeVersion;
                    this.id = id;
                    this.__typeName = Events_7.Events.ObjectSavedEvent;
                    this.__typeVersion = "v1";
                }
                return ObjectSavedEvent;
            }(BaseValueObject_8.BaseValueObject));
            exports_53("ObjectSavedEvent", ObjectSavedEvent);
        }
    }
});
System.register("DDDTools/UnitOfWork/ObjectRetrievedEvent", ["DDDTools/ValueObject/BaseValueObject", "DDDTools/UnitOfWork/Events"], function(exports_54, context_54) {
    "use strict";
    var __moduleName = context_54 && context_54.id;
    var BaseValueObject_9, Events_8;
    var ObjectRetrievedEvent;
    return {
        setters:[
            function (BaseValueObject_9_1) {
                BaseValueObject_9 = BaseValueObject_9_1;
            },
            function (Events_8_1) {
                Events_8 = Events_8_1;
            }],
        execute: function() {
            ObjectRetrievedEvent = (function (_super) {
                __extends(ObjectRetrievedEvent, _super);
                function ObjectRetrievedEvent(typeName, typeVersion, id) {
                    _super.call(this);
                    this.typeName = typeName;
                    this.typeVersion = typeVersion;
                    this.id = id;
                    this.__typeName = Events_8.Events.ObjectRetrievedEvent;
                    this.__typeVersion = "v1";
                }
                return ObjectRetrievedEvent;
            }(BaseValueObject_9.BaseValueObject));
            exports_54("ObjectRetrievedEvent", ObjectRetrievedEvent);
        }
    }
});
System.register("DDDTools/UnitOfWork/UnitOfWorkErrors", ["DDDTools/ErrorManagement/BaseErrors"], function(exports_55, context_55) {
    "use strict";
    var __moduleName = context_55 && context_55.id;
    var BaseErrors_4;
    var UnitOfWorkErrors;
    return {
        setters:[
            function (BaseErrors_4_1) {
                BaseErrors_4 = BaseErrors_4_1;
            }],
        execute: function() {
            UnitOfWorkErrors = (function (_super) {
                __extends(UnitOfWorkErrors, _super);
                function UnitOfWorkErrors() {
                    _super.apply(this, arguments);
                }
                UnitOfWorkErrors.ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
                return UnitOfWorkErrors;
            }(BaseErrors_4.BaseErrors));
            exports_55("UnitOfWorkErrors", UnitOfWorkErrors);
        }
    }
});
System.register("DDDTools/UnitOfWork/UnitOfWork", ["DDDTools/DomainEvents/InProcessDispatcher", "DDDTools/UnitOfWork/IdentityMap", "DDDTools/UnitOfWork/ObjectDeletedEvent", "DDDTools/UnitOfWork/ObjectRetrievedEvent", "DDDTools/UnitOfWork/ObjectSavedEvent", "DDDTools/UnitOfWork/UnitOfWorkErrors"], function(exports_56, context_56) {
    "use strict";
    var __moduleName = context_56 && context_56.id;
    var InProcessDispatcher_2, IdentityMap_1, ObjectDeletedEvent_1, ObjectRetrievedEvent_1, ObjectSavedEvent_1, UnitOfWorkErrors_1;
    var UnitOfWork;
    return {
        setters:[
            function (InProcessDispatcher_2_1) {
                InProcessDispatcher_2 = InProcessDispatcher_2_1;
            },
            function (IdentityMap_1_1) {
                IdentityMap_1 = IdentityMap_1_1;
            },
            function (ObjectDeletedEvent_1_1) {
                ObjectDeletedEvent_1 = ObjectDeletedEvent_1_1;
            },
            function (ObjectRetrievedEvent_1_1) {
                ObjectRetrievedEvent_1 = ObjectRetrievedEvent_1_1;
            },
            function (ObjectSavedEvent_1_1) {
                ObjectSavedEvent_1 = ObjectSavedEvent_1_1;
            },
            function (UnitOfWorkErrors_1_1) {
                UnitOfWorkErrors_1 = UnitOfWorkErrors_1_1;
            }],
        execute: function() {
            UnitOfWork = (function () {
                function UnitOfWork(repository) {
                    this.repository = repository;
                    this.idMap = new IdentityMap_1.IdentityMap();
                    this.dispatcher = new InProcessDispatcher_2.InProcessDispatcher();
                }
                UnitOfWork.prototype.getById = function (key) {
                    if (this.idMap.isTracked(key)) {
                        if (this.idMap.getItemStatus(key) === IdentityMap_1.ItemStatus.Deleted) {
                            UnitOfWorkErrors_1.UnitOfWorkErrors.throw(UnitOfWorkErrors_1.UnitOfWorkErrors.ItemMarkedAsDeleted);
                        }
                        return this.idMap.getById(key);
                    }
                    var toReturn = this.repository.getById(key);
                    this.idMap.add(key, toReturn);
                    this.idMap.markAsSavedById(key);
                    var retrievedEvent = new ObjectRetrievedEvent_1.ObjectRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString());
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
                            case IdentityMap_1.ItemStatus.Deleted:
                                this.processDeletedItem(key);
                                break;
                            case IdentityMap_1.ItemStatus.Modified:
                            case IdentityMap_1.ItemStatus.New:
                                this.processNewOrModifiedItem(key);
                                break;
                            case IdentityMap_1.ItemStatus.Saved:
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
                    var deletedEvent = new ObjectDeletedEvent_1.ObjectDeletedEvent(item.__typeName, item.__typeVersion, key.toString());
                    this.repository.delete(key);
                    this.removeById(key);
                    this.raiseEvent(deletedEvent);
                };
                UnitOfWork.prototype.processNewOrModifiedItem = function (key) {
                    var item = this.idMap.getById(key);
                    this.repository.save(item);
                    this.idMap.markAsSavedById(key);
                    var savedEvent = new ObjectSavedEvent_1.ObjectSavedEvent(item.__typeName, item.__typeVersion, key.toString());
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
            exports_56("UnitOfWork", UnitOfWork);
        }
    }
});
System.register("DDDTools/UnitOfWork", ["DDDTools/UnitOfWork/Events", "DDDTools/UnitOfWork/IdentityMap", "DDDTools/UnitOfWork/ObjectDeletedEvent", "DDDTools/UnitOfWork/ObjectSavedEvent", "DDDTools/UnitOfWork/ObjectRetrievedEvent", "DDDTools/UnitOfWork/UnitOfWork", "DDDTools/UnitOfWork/UnitOfWorkErrors"], function(exports_57, context_57) {
    "use strict";
    var __moduleName = context_57 && context_57.id;
    var Events_9, IdentityMap_2, ObjectDeletedEvent_2, ObjectSavedEvent_2, ObjectRetrievedEvent_2, UnitOfWork_1, UnitOfWorkErrors_2;
    return {
        setters:[
            function (Events_9_1) {
                Events_9 = Events_9_1;
            },
            function (IdentityMap_2_1) {
                IdentityMap_2 = IdentityMap_2_1;
            },
            function (ObjectDeletedEvent_2_1) {
                ObjectDeletedEvent_2 = ObjectDeletedEvent_2_1;
            },
            function (ObjectSavedEvent_2_1) {
                ObjectSavedEvent_2 = ObjectSavedEvent_2_1;
            },
            function (ObjectRetrievedEvent_2_1) {
                ObjectRetrievedEvent_2 = ObjectRetrievedEvent_2_1;
            },
            function (UnitOfWork_1_1) {
                UnitOfWork_1 = UnitOfWork_1_1;
            },
            function (UnitOfWorkErrors_2_1) {
                UnitOfWorkErrors_2 = UnitOfWorkErrors_2_1;
            }],
        execute: function() {
            exports_57("Events", Events_9.Events);
            exports_57("IdentityMap", IdentityMap_2.IdentityMap);
            exports_57("ObjectDeletedEvent", ObjectDeletedEvent_2.ObjectDeletedEvent);
            exports_57("ObjectRetrievedEvent", ObjectRetrievedEvent_2.ObjectRetrievedEvent);
            exports_57("ObjectSavedEvent", ObjectSavedEvent_2.ObjectSavedEvent);
            exports_57("UnitOfWork", UnitOfWork_1.UnitOfWork);
            exports_57("UnitOfWorkErrors", UnitOfWorkErrors_2.UnitOfWorkErrors);
        }
    }
});
System.register("DDDTools/Utils", ["DDDTools/Utils/SimpleGuid", "DDDTools/Utils/SimpleIdentityMap"], function(exports_58, context_58) {
    "use strict";
    var __moduleName = context_58 && context_58.id;
    var SimpleGuid_3, SimpleIdentityMap_2;
    return {
        setters:[
            function (SimpleGuid_3_1) {
                SimpleGuid_3 = SimpleGuid_3_1;
            },
            function (SimpleIdentityMap_2_1) {
                SimpleIdentityMap_2 = SimpleIdentityMap_2_1;
            }],
        execute: function() {
            exports_58("SimpleGuid", SimpleGuid_3.SimpleGuid);
            exports_58("SimpleIdentityMap", SimpleIdentityMap_2.SimpleIdentityMap);
        }
    }
});
System.register("DDDTools/ValueObject", ["DDDTools/ValueObject/BaseValueObject"], function(exports_59, context_59) {
    "use strict";
    var __moduleName = context_59 && context_59.id;
    var BaseValueObject_10;
    return {
        setters:[
            function (BaseValueObject_10_1) {
                BaseValueObject_10 = BaseValueObject_10_1;
            }],
        execute: function() {
            exports_59("BaseValueObject", BaseValueObject_10.BaseValueObject);
        }
    }
});
System.register("DDDTools/ValueObjects/CommonVOLibrary", [], function(exports_60, context_60) {
    "use strict";
    var __moduleName = context_60 && context_60.id;
    var CommonVOLibrary;
    return {
        setters:[],
        execute: function() {
            CommonVOLibrary = (function () {
                function CommonVOLibrary() {
                }
                return CommonVOLibrary;
            }());
            exports_60("CommonVOLibrary", CommonVOLibrary);
        }
    }
});
System.register("DDDTools/ValueObjects", ["DDDTools/ValueObjects/CommonVOLibrary", "DDDTools/ValueObjects/Guid"], function(exports_61, context_61) {
    "use strict";
    var __moduleName = context_61 && context_61.id;
    var CommonVOLibrary_1, Guid_2;
    return {
        setters:[
            function (CommonVOLibrary_1_1) {
                CommonVOLibrary_1 = CommonVOLibrary_1_1;
            },
            function (Guid_2_1) {
                Guid_2 = Guid_2_1;
            }],
        execute: function() {
            exports_61("CommonVOLibrary", CommonVOLibrary_1.CommonVOLibrary);
            exports_61("Guid", Guid_2.Guid);
        }
    }
});
System.register("DDDTools/DDDTools", ["DDDTools/Aggregate", "DDDTools/CommonInterfaces", "DDDTools/DomainEvents", "DDDTools/Entity", "DDDTools/ErrorManagement", "DDDTools/PersistableObject", "DDDTools/Repository", "DDDTools/Serialization", "DDDTools/UnitOfWork", "DDDTools/Utils", "DDDTools/ValueObject", "DDDTools/ValueObjects"], function(exports_62, context_62) {
    "use strict";
    var __moduleName = context_62 && context_62.id;
    var Aggregate, CommonInterfaces, DomainEvents, Entity, ErrorManagement, PersistableObject, Repository, Serialization, UnitOfWork, Utils, ValueObject, ValueObjects;
    return {
        setters:[
            function (Aggregate_1) {
                Aggregate = Aggregate_1;
            },
            function (CommonInterfaces_1) {
                CommonInterfaces = CommonInterfaces_1;
            },
            function (DomainEvents_1) {
                DomainEvents = DomainEvents_1;
            },
            function (Entity_1) {
                Entity = Entity_1;
            },
            function (ErrorManagement_1) {
                ErrorManagement = ErrorManagement_1;
            },
            function (PersistableObject_1) {
                PersistableObject = PersistableObject_1;
            },
            function (Repository_1) {
                Repository = Repository_1;
            },
            function (Serialization_1) {
                Serialization = Serialization_1;
            },
            function (UnitOfWork_2) {
                UnitOfWork = UnitOfWork_2;
            },
            function (Utils_1) {
                Utils = Utils_1;
            },
            function (ValueObject_1) {
                ValueObject = ValueObject_1;
            },
            function (ValueObjects_1) {
                ValueObjects = ValueObjects_1;
            }],
        execute: function() {
            exports_62("Aggregate", Aggregate);
            exports_62("CommonInterfaces", CommonInterfaces);
            exports_62("DomainEvents", DomainEvents);
            exports_62("Entity", Entity);
            exports_62("ErrorManagement", ErrorManagement);
            exports_62("PersistableObject", PersistableObject);
            exports_62("Repository", Repository);
            exports_62("Serialization", Serialization);
            exports_62("UnitOfWork", UnitOfWork);
            exports_62("Utils", Utils);
            exports_62("ValueObject", ValueObject);
            exports_62("ValueObjects", ValueObjects);
        }
    }
});
System.register("DDDTools/Query/IQuery", [], function(exports_63, context_63) {
    "use strict";
    var __moduleName = context_63 && context_63.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9Ub3VjaC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvQWdncmVnYXRlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlS2V5VmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbVJldHJpZXZlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbUFkZGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtVXBkYXRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbURlbGV0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZUluTWVtb3J5UmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9CYXNlUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0lkZW50aXR5TWFwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvSVVuaXRPZldvcmsudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0UmV0cmlldmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29yay50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9Db21tb25WT0xpYnJhcnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3RzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RERFRvb2xzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUtHQTtnQkFBQTtnQkFZQSxDQUFDO2dCQVZVLGdCQUFLLEdBQVosVUFBYSxJQUFZLEVBQUUsT0FBZ0I7b0JBQ3ZDLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3JELE1BQU0sR0FBRyxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sMkJBQWdCLEdBQXZCLFVBQXdCLElBQVksRUFBRSxPQUFnQjtvQkFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO29CQUNyQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO2dCQUNMLGlCQUFDO1lBQUQsQ0FBQyxBQVpELElBWUM7WUFaRCxtQ0FZQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7WUNiRDtnQkFBNEIsMEJBQVU7Z0JBQXRDO29CQUE0Qiw4QkFBVTtnQkFrQnRDLENBQUM7Z0JBZlUseUJBQWtCLEdBQUcsd0JBQXdCLENBQUM7Z0JBQzlD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QXRHRCxJQXNHQztZQXRHRCxvQ0FzR0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUMvR08scUNBQU07WUFBRSxvREFBVztZQUFlLHlFQUFrQjtZQUFFLCtFQUFvQjtZQUFFLG1FQUFnQjtZQUFFLGlEQUFVO1lBQUUsbUVBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztZQ04xSCxpREFBVTtZQUFFLHNFQUFpQjs7Ozs7Ozs7Ozs7Ozs7WUNBN0IsaUVBQWU7Ozs7Ozs7Ozs7O1lDRHZCO2dCQUFBO2dCQUVBLENBQUM7Z0JBQUQsc0JBQUM7WUFBRCxDQUFDLEFBRkQsSUFFQztZQUZELDhDQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDRE8sZ0VBQWU7WUFBRSwrQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNVckIsa0NBQVM7WUFBRSxnREFBZ0I7WUFBRSx3Q0FBWTtZQUFFLDRCQUFNO1lBQUUsOENBQWU7WUFBRSxrREFBaUI7WUFBRSxvQ0FBVTtZQUFFLDBDQUFhO1lBQUUsb0NBQVU7WUFBRSwwQkFBSztZQUFFLHNDQUFXO1lBQUUsd0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYW1lc3BhY2UgREREVG9vbHMuQ29tbW9uSW50ZXJmYWNlcyB7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVR5cGVUcmFja2luZyB7XHJcbiAgICBfX3R5cGVOYW1lOiBzdHJpbmc7XHJcbiAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBfX29iamVjdEluc3RhbmNlSWQ/OiBzdHJpbmc7XHJcbn1cclxuLy8gfSIsIi8qKlxyXG4gKiBEZWZpbmVzIGRlZmF1bHQgYmVoYXZpb3IgYW5kIGludGVyZmFjZXMgZm9yIGEgUGVyc2lzdGFibGUgT2JqZWN0LCBhbiBvYmplY3QgdGhhdCBoYXMgYSBzdGF0ZSB0aGF0IHdpbGwgcHJvYmFibHkgYmUgcGVyc2lzdGVkLiBJdCBnaXZlcyBzdXBwb3J0IHRvIFwidXBncmFkZVwiIHBlcnNpc3RlZCBvYmplY3RzLlxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVyc2lzdGFibGUgZXh0ZW5kcyBJVHlwZVRyYWNraW5nIHtcclxuXHRnZXRVcGdyYWRlZEluc3RhbmNlPyhmcm9tSW5zdGFuY2U6IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZTtcclxuXHRnZXRTdGF0ZSgpOiBJVHlwZVRyYWNraW5nO1xyXG5cdHNldFN0YXRlKHN0YXRlOiBJVHlwZVRyYWNraW5nKTtcclxufVxyXG4vLyB9IiwiLy8gbmFtZXNwYWNlIERERFRvb2xzLkNvbW1vbkludGVyZmFjZXMge1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUVxdWF0YWJsZTxUPiB7XHJcblx0XHRlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW47XHJcblx0fVxyXG4vLyB9IiwiLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBWYWx1ZU9iamVjdCBwYXR0ZXJuLlxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0IHtcclxuXHJcbmltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7SUVxdWF0YWJsZX0gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVPYmplY3Q8VD4gZXh0ZW5kcyBJRXF1YXRhYmxlPFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9JVmFsdWVPYmplY3RcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuLy8gICAgaW1wb3J0IElWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LklWYWx1ZU9iamVjdDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtleVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG4vLyB9IiwiLyoqXHJcbiAqIE1pbmltYWwgRXJyb3IgaGFuZGxpbmcgYmFzZSBiZWhhdmlvcnMgZm9yIHRoZSBkb21haW4gbW9kZWwuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgc3RhdGljIHRocm93KG5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHZhciBlcnIgPSBCYXNlRXJyb3JzLmdldEVycm9ySW5zdGFuY2UobmFtZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRFcnJvckluc3RhbmNlKG5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IEVycm9yIHtcclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UgfHwgbmFtZSk7XHJcbiAgICAgICAgZXJyLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgIC8vIFRocm93biBieSBwZXJzaXN0YWJsZSBvYmplY3RzXHJcbiAgICBzdGF0aWMgU3RhdGVJc05vdEFuT2JqZWN0ID0gXCJTdGF0ZSBpcyBub3QgYW4gT2JqZWN0XCI7XHJcbiAgICBzdGF0aWMgVHlwZU5hbWVOb3RTZXQgPSBcIlR5cGVOYW1lIG5vdCBzZXRcIjtcclxuICAgIHN0YXRpYyBUeXBlVmVyc2lvbk5vdFNldCA9IFwiVHlwZVZlcnNpb24gbm90IHNldFwiO1xyXG4gICAgc3RhdGljIFVuYWJsZVRvSW5zdGFudGlhdGVUeXBlID0gXCJVbmFibGUgdG8gSW5zdGFudGlhdGUgVHlwZVwiO1xyXG4gICAgc3RhdGljIFR5cGVSZWdpc3RyeU5vdFNldCA9IFwiVHlwZVJlZ2lzdHJ5IG5vdCBzZXRcIjtcclxuXHJcbiAgICAvLyBUaHJvd24gYnkgdGhlIEZhY3RvcnkvVHlwZVJlZ2lzdHJ5XHJcbiAgICBzdGF0aWMgVHlwZU5vdFJlZ2lzdGVyZWQgPSBcIlR5cGUgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGUgVHlwZVJlZ2lzdHJ5XCI7XHJcbiAgICBzdGF0aWMgQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQgPSBcInR5cGVQcm90b3R5cGUgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXCJcclxuICAgIFxyXG4gICAgLy8gVGhyb3duIGJ5IHRoZSBVcGdyYWRlclxyXG4gICAgc3RhdGljIFR5cGVOb3RJbnN0YXRpYWJsZSA9IFwiVHlwZSBpcyBub3QgaW5zdGFudGlhYmxlXCI7XHJcbiAgICBzdGF0aWMgVXBncmFkZVBhdGhOb3RGb3VuZCA9IFwiVXBncmFkZSBQYXRoIG5vdCBGb3VuZFwiO1xyXG4gICAgc3RhdGljIEluY29ycmVjdFZlcnNpb25Gb3JtYXQgPSBcIkluY29ycmVjdCBWZXJzaW9uIEZvcm1hdFwiO1xyXG4gICAgc3RhdGljIFdyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSA9IFwiV3JvbmcgVmVyc2lvbiBpbiBVcGdyYWRlZCBJbnN0YW5jZVwiO1xyXG59IiwiLyoqXHJcbiAqIFNvbWUgc2ltcGxlIGNsYXNzZXMgdXNlZCBpbiBkaWZmZXJlbnQgbW9kdWxlcy5cclxuICovXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5VdGlscyB7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlR3VpZCB7XHJcblx0Ly8gSGVscGVyIGZvciBndWlkIGdlbmVyYXRpb24uXHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNWYWxpZChndWlkOiBzdHJpbmcpIHtcclxuXHRcdHZhciBndWlkUmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXlt7KF0/WzAtOUEtRmEtZl17OH1bLV0/KFswLTlBLUZhLWZdezR9Wy1dPyl7M31bMC05QS1GYS1mXXsxMn1bKX1dPyRcIik7XHJcblx0XHRyZXR1cm4gZ3VpZFJlZ2V4cC50ZXN0KGd1aWQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzdGF0aWMgczQoKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuXHRcdFx0LnRvU3RyaW5nKDE2KVxyXG5cdFx0XHQuc3Vic3RyaW5nKDEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpOiBzdHJpbmcge1xyXG5cdFx0dmFyIG5ld1NpbXBsZUd1aWQgPSBcIntcIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArXHJcblx0XHRcdFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgXCJ9XCI7XHJcblxyXG5cdFx0aWYgKFNpbXBsZUd1aWQuaXNWYWxpZChuZXdTaW1wbGVHdWlkKSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3U2ltcGxlR3VpZDtcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlNob3VsZCBOZXZlciBIYXBwZW4hIFRoZSBnZW5lcmF0ZWQgZ3VpZCBpcyBub3QgdmFsaWQhXCIpXHJcblx0fVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3Qge1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG5cdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0aW1wbGVtZW50cyBJVmFsdWVPYmplY3Q8VD4ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdC8vIFBlciBvZ25pIHByb3ByaWV0w6AgZGVsbCdJVEVNIHZlcmlmaWNvIGwndWd1YWdsaWFuemEgY29uIGwnaXN0YW56YSBhdHR1YWxlXHJcblx0XHR2YXIgZm9yZWlnbiA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xyXG5cdFx0dmFyIGxvY2FsID0gSlNPTi5zdHJpbmdpZnkodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIGZvcmVpZ24gPT09IGxvY2FsO1xyXG5cdH1cclxufVxyXG4vLyB9IiwiLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgZ2VuZXJhbCBhbmQgY29tbW9ubHkgdXNlZCBWYWx1ZU9iamVjdHMuIFxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0cyB7XHJcblxyXG5pbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHdWlkIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEd1aWQ+IGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PEd1aWQ+IHtcclxuXHJcbiAgICBwdWJsaWMgX190eXBlTmFtZSA9IFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIjtcclxuICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIHByaXZhdGUgZ3VpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGd1aWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBpZiAoZ3VpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWQgPSBndWlkXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkID0gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IEd1aWQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3VpZChTaW1wbGVHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbHVlT2JqZWN0cyB1c2VkIGFzIGtleSBNVVNUIGltcGxlbWVudCBhIHRvU3RyaW5nIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGtleSBhcyBzdHJpbmcuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3VpZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7R3VpZH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RyeTogeyBbdHlwZU5hbWU6IHN0cmluZ106IHsgW3R5cGVWZXJzaW9uOiBzdHJpbmddOiBuZXcgKCkgPT4gSVBlcnNpc3RhYmxlIH0gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGF0ZXN0VmVyc2lvbnM6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaWJyYXJ5UmVnaXN0ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWx3YXlzIFJlZ2lzdGVyIExpYnJhcnkgVmFsdWUgT2JqZWN0cy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXJWYWx1ZU9iamVjdHNMaWJyYXJ5KCkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICBzVGhpcy5yZWdpc3RlclR5cGUoXCJERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZFwiLCBcInYxXCIsIDxhbnk+R3VpZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcsIHR5cGVQcm90b3R5cGU6IG5ldyAoKSA9PiBJUGVyc2lzdGFibGUpOiB2b2lkIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgaWYgKCF0eXBlUHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQsIFwidHlwZVByb3RvdHlwZSBzdXBwbGllZCBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBudWxsIG9yIHVuZGVmaW5lZCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNUaGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdID0gdGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gfHwge307XHJcbiAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSA9IHR5cGVQcm90b3R5cGU7XHJcblxyXG4gICAgICAgIHNUaGlzLnVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgIGlmICghc1RoaXMubGlicmFyeVJlZ2lzdGVyZWQpIHtcclxuICAgICAgICAgICAgc1RoaXMubGlicmFyeVJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzVGhpcy5yZWdpc3RlclZhbHVlT2JqZWN0c0xpYnJhcnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlTGF0ZXN0VmVyc2lvbnModHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICBpZiAoIXNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVmZXJlbmNlID0gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdO1xyXG4gICAgICAgIGlmIChzVGhpcy5pc1ZlcnNpb25HcmVhdGVyKHR5cGVWZXJzaW9uLCByZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25HcmVhdGVyKHZTdWJqZWN0OiBzdHJpbmcsIHZSZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICB2YXIgdlM6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZTdWJqZWN0KTtcclxuICAgICAgICB2YXIgdlI6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZSZWZlcmVuY2UpO1xyXG4gICAgICAgIHJldHVybiB2UyA+IHZSO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RWZXJzaW9uTnVtYmVyKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICB2YXIgdmVyc2lvbjogc3RyaW5nID0gdHlwZVZlcnNpb24ucmVwbGFjZShcInZcIiwgXCJcIik7XHJcbiAgICAgICAgdmFyIGFzTnVtYmVyID0gTnVtYmVyKHZlcnNpb24pO1xyXG4gICAgICAgIHJldHVybiBhc051bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICBpZiAoIXR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHR5cGVWZXJzaW9uID0gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl0pIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJWZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBvZiBUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRvSW5zdGFudGlhdGUgPSBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV1bdHlwZVZlcnNpb25dO1xyXG4gICAgICAgIHZhciB0b1JldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdG9SZXR1cm4gPSA8VD4obmV3ICg8YW55PnRvSW5zdGFudGlhdGUpKCkpO1xyXG4gICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZU5hbWUgPSB0eXBlTmFtZTtcclxuICAgICAgICAgICAgLy90b1JldHVybi5fX3R5cGVWZXJzaW9uID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiBzcGVjaWZpZWQgdmVyc2lvbiBpcyB0aGUgbGF0ZXN0IGZvciB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICByZXR1cm4gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpID09PSB0eXBlVmVyc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgbm8gdmVyc2lvbiB0eXBlIGlzIGRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgIHJldHVybiBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gfHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOZXh0VmVyc2lvbih0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCFzVGhpcy52ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhyb3cgdGhlIGNvcnJlY3QgZXhjZXB0aW9uO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSBOdW1iZXIodHlwZVZlcnNpb24uc3Vic3RyKDEpKTtcclxuICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgIHJldHVybiBuZXh0VmVyc2lvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge1R5cGVSZWdpc3RyeX0gZnJvbSBcIi4vVHlwZVJlZ2lzdHJ5XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuLyoqXHJcbiAqIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeSBpcyBhbiBoZWxwZXIgY2xhc3MgdG8gY3JlYXRlIGFuZCByZWNvbnN0aXR1dGUgc3RhdGZldWwgb2JqZWN0cy5cclxuICogSXQgZ3VyYW50ZWVzIHRoYXQgYSBzdGF0ZnVsIG9iamVjdCBpcyBhbHdheXMgY3JlYXRlZCBvciByZWNvbnN0aXR1dGVkIHRvIGl0cyBsYXRlc3QgdmVyc2lvbi4gIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyB0eXBlUmVnaXN0cnk6IFR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBuZXcgSVBlcnNpc3RhYmxlIHR5cGUgd2l0aCB0aGUgRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nLCB0eXBlUHJvdG90eXBlOiBuZXcgKCkgPT4gSVBlcnNpc3RhYmxlKSB7XHJcbiAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZSh0eXBlTmFtZSwgdHlwZVZlcnNpb24sIHR5cGVQcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuIElmIHR5cGVWZXJzaW9uIGlzIG5vdCBzdXBwbGllZCwgbGF0ZXN0IGF2YWlsYWJsZSB2ZXJzaW9uIGlzIHJldHVybmVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZyk6IFQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghRmFjdG9yeS50eXBlUmVnaXN0cnkpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlUmVnaXN0cnlOb3RTZXQsIFwiUGxlYXNlIGRlZmluZSBhIHR5cGUgcmVnaXN0cnkgYW5kIHNldCBpdCBvbiB0aGUgRmFjdG9yeSBjYWxsaW5nICdzZXRUeXBlUmVnaXN0cnknIG1ldGhvZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFR5cGVSZWdpc3RyeS5nZXRUeXBlSW5zdGFuY2U8VD4odHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAodHlwZVZlcnNpb24pIHtcclxuICAgICAgICAvLyAgICAgdmFyIHR5cGVUb0luc3RhdGlhdGUgPSBGYWN0b3J5LmNvbXB1dGVGdWxseVF1YWxpZmllZFR5cGVOYW1lKHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0b1JldHVybiA9IDxUPmV2YWwoXCJuZXcgXCIgKyB0eXBlVG9JbnN0YXRpYXRlICsgXCIoKVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gVGhpcyBmYWlsdXJlIGlzIGV4cGVjdGVkIGlmIHdlIGFyZSBhc2tpbmcgZm9yIHRoZSBsYXRlc3QgdmVyc2lvbiBhdmFpbGFibGVcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRvUmV0dXJuLl9fdHlwZVZlcnNpb24gIT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAvLyAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAvLyAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZU5hbWUgKyBcIigpXCIpO1xyXG4gICAgICAgIC8vIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGluc3RhbmNlIGZyb20gaXRzIHN0YXRlLiBXaWxsIGFsd2F5cyByZXR1cm4gdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIG9mIHRoZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVPYmplY3RzRnJvbVN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICd1bmRlZmluZWQnXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICdudWxsJ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChGYWN0b3J5LmlzUGVyc2lzdGFibGVPYmplY3Qoc3RhdGUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBlcnNpc3RhYmxlOiBJUGVyc2lzdGFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyc2lzdGFibGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShzdGF0ZS5fX3R5cGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIHBlcnNpc3RhYmxlLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FycmFudGllcyB0aGF0IGEgdHlwZSBpcyBhbHdheXMgcmV0dXJuZWQgYXQgaXRzIGxhdGVzdCB2ZXJzaW9uLlxyXG4gICAgICAgICAgICAgICAgdmFyIHVwZ3JhZGVkUGVyc2lzdGFibGUgPSBVcGdyYWRlci51cGdyYWRlKHBlcnNpc3RhYmxlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGdyYWRlZFBlcnNpc3RhYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIG5vdCBhIHBlcnNpc3RhYmxlT2JqZWN0IGNhbiBiZSBhbiBBcnJheSBvciBhbiBPYmplY3QgYW5kIG11c3QgYmUgcmVjb25zdGl0dXRlZFxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IGFueSA9IEFycmF5LmlzQXJyYXkoc3RhdGUpID8gW10gOiB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY3VycmVudEVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzRWxlbWVudCA9IHN0YXRlW2N1cnJlbnRFbGVtZW50XTtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuW2N1cnJlbnRFbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBcIlByaW1pdGl2ZVwiXCIgdHlwZXMgYXJlIHJldHVybmVkIGFzIHRoZXkgYXJlXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBcIklQZXJzaXN0YWJsZVwiIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNQZXJzaXN0YWJsZU9iamVjdChvYmplY3RUb1Rlc3Q6IGFueSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdFRvVGVzdCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBlcnNpc3RhYmxlID0gPElQZXJzaXN0YWJsZT5vYmplY3RUb1Rlc3Q7XHJcbiAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVOYW1lIHx8IHBlcnNpc3RhYmxlLl9fdHlwZU5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uIHx8IHBlcnNpc3RhYmxlLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgYSB0eXBlIGNhbiBiZSBpbnN0YXRpYXRlZCAoYXQgaXRzIGxhdGVzdCB2ZXJzaW9uKS4gXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGlzVHlwZUluc3RhbnRpYWJsZSh0eXBlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHRtcFR5cGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgXCJGdWxseSBRdWFsaWZpZWQgVHlwZU5hbWVcIiBvZiB0eXBlIFwidHlwZU5hbWVcIiBmb3IgdGhlIHN1cHBsaWVkIFwidmVyc2lvblwiLlxyXG4gICAgICogRlFUTiBpcyBjb21wdXRlZCBmcm9tIHR5cGVOYW1lIGFkZGluZyB0aGUgdmVyc2lvbiBzdHJpbmcgaW4gdGhlIHJpZ2h0IHBsYWNlLlxyXG4gICAgICogRXhhbXBsZVxyXG4gICAgICogdHlwZU5hbWU6IEFwcGxpY2F0aW9uLk1vZGVsLk9mZmVydGFcclxuICAgICAqIHZlcnNpb246IHYyXHJcbiAgICAgKiByZXR1cm46IEFwcGxpY2F0aW9uLk1vZGVsLnYyLk9mZmVydGFcclxuICAgICAqL1xyXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgY29tcHV0ZUZ1bGx5UXVhbGlmaWVkVHlwZU5hbWUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgdmFyIGZxdG5QYXJ0c0FycmF5ID0gdHlwZU5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gICAgIHZhciBjbGFzc05hbWUgPSBmcXRuUGFydHNBcnJheS5wb3AoKTtcclxuICAgIC8vICAgICBmcXRuUGFydHNBcnJheS5wdXNoKHR5cGVWZXJzaW9uKTtcclxuICAgIC8vICAgICBmcXRuUGFydHNBcnJheS5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAvLyAgICAgdmFyIG5ld0ZxdG4gPSBmcXRuUGFydHNBcnJheS5qb2luKFwiLlwiKTtcclxuICAgIC8vICAgICByZXR1cm4gbmV3RnF0bjtcclxuICAgIC8vIH07XHJcblxyXG59XHJcbi8vIH1cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBncmFkZXIgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGF1dG9tYXRlIHRoZSBcInVwZ3JhZGUgcHJvY2Vzc1wiIG9mIGFuIG9iamVjdCdzIHN0YXRlLlxyXG4gKiBUaGUgVXBncmFkZXIgaXMgZm91bmQgb24gdGhlc2UgcHJpbmNpcGxlczpcclxuICogICogVGhlIGxhdGVzdCB2ZXJzaW9uIEZRVE4gbXVzdCBtYXRjaCB0aGUgb25lIHNwZWNpZmllZCBieSB0aGUgcHJvcGVydHkgX190eXBlTmFtZSwgd2hpY2ggaXMgaW4gdGhlIGZvcm0gbmFtZXNwYWNlLm9iamVjdE5hbWUuXHJcbiAqICAqIE9sZGVyIHZlcnNpb25zIG9mIGEgUGVyc2lzdGFibGVPYmplY3QgTVVTVCBoYXZlIGEgRlFUTiBpbiB0aGUgZm9ybSBuYW1lc3BhY2UuPHZlcnNpb24+Lm9iamVjdE5hbWUuXHJcbiAqICAqIF9fdHlwZVZlcnNpb24gTVVTVCBiZSBzcGVjaWZpZWQgYXMgdjx2ZXJzaW9uTnVtYmVyPiB3aGVyZSB2ZXJzaW9uIGlzIGFuIGludGVnZXIuXHJcbiAqICAqIEFsbCBvYmplY3QncyB2ZXJzaW9ucyAoZXhjbHVkaW5nIHYxKSBNVVNUIHByb3ZpZGUgYW4gZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QgdGhhdCBrbm93cyBob3cgdG8gbW9kaWZ5IHN0YXRlIHRvIGdvIGZyb20gXHJcbiAqICAgIHZlcnNpb24gdjxuIC0gMT4gdG8gdjxuPiwgd2hlcmUgbiBpcyB0aGUgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGdldFVwZ3JhZGVkSW5zdGFuY2UgbWV0aG9kLiAgIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVwZ3JhZGVyIHtcclxuXHJcbiAgICAvLyBDb250YWlucyB0aGUgbGF0ZXN0IHZlcnNpb24gcG9zc2libGUgZm9yIGVhY2ggdHlwZS4gXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsYXRlc3RUeXBlVmVyc2lvbk1hcDogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAvLyBDb250YWlucyBmbGFncyB0byBkZXRlcm1pbmUgaWYgbGF0c3RUeXBlVmVyc2lvbk1hcCBmb3IgYSBzcGVjaWZpYyB0eXBlIGhhcyBiZWVuIGNhbGN1bGF0ZWRcclxuICAgIHByaXZhdGUgc3RhdGljIGlzVmVyc2lvbk1hcEJ1aWx0OiB7IFt0eXBlTmFtZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB0bXBJbnN0YW5jZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgVXBncmFkZXIubGF0ZXN0VHlwZVZlcnNpb25NYXBbdHlwZU5hbWVdID0gdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYXRlc3QgcG9zc2libGUgdmVyc2lvbiBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIGlzIFwiICsgdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RJbnN0YXRpYWJsZSwgXCJUaGUgdHlwZSBcIiArIHR5cGVOYW1lICsgXCIgY2Fubm90IGJlIGluc3RhbnRpYXRlZCwgc28gaXQgaXMgaW1wb3NzaWJsZSB0byBpZGVudGlmeSB0aGUgbGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gTG9va3MgZm9yIHRoZSBsYXRlc3QgdmVyc2lvbiwgaWYgbm90IGFscmVhZHkgZG9uZS5cclxuICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICBVcGdyYWRlci5idWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gc3VwcGxpZWQgZG9lc24ndCBtYXRjaCB0aGUgbGF0ZXN0IHZlcnNpb24gaW4gdGhlIG1hcCwgdGhlIGluc3RhbmNlIG11c3QgYmUgdXBncmFkZWQuXHJcbiAgICAgICAgaWYgKFVwZ3JhZGVyLmxhdGVzdFR5cGVWZXJzaW9uTWFwW3R5cGVOYW1lXSAhPT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZ3JhZGUoaW5zdGFuY2VGcm9tOiBJUGVyc2lzdGFibGUpOiBJUGVyc2lzdGFibGUge1xyXG4gICAgICAgIC8vIElmIG9iamVjdCBkb2Vzbid0IG5lZWQgdG8gdXBncmFkZSwgdGhlbiB3ZSBhcmUgZG9uZSFcclxuICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIGluc3RhbmNlRnJvbS5fX3R5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VGcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV4dFZlcnNpb24gPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oaW5zdGFuY2VGcm9tLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgIHZhciB1cGdyYWRlckluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIG5leHRWZXJzaW9uKTtcclxuICAgICAgICB2YXIgdXBncmFkZWQgPSB1cGdyYWRlckluc3RhbmNlLmdldFVwZ3JhZGVkSW5zdGFuY2UoaW5zdGFuY2VGcm9tKTtcclxuICAgICAgICAvLyBWZXJpZmllcyB0aGF0IHZlcnNpb24gaXMgZWZmZWN0aXZlbHkgdXBncmFkZWRcclxuICAgICAgICBpZiAodXBncmFkZWQuX190eXBlVmVyc2lvbiAhPSBuZXh0VmVyc2lvbikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLldyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSwgXCJUaGUgZXhwZWN0ZWQgdmVyc2lvbiBvZiB0aGUgdXBncmFkZWQgaW5zdGFuY2Ugd2FzIFwiICsgbmV4dFZlcnNpb24gKyBcIiB3aGlsZSB3YXMgZm91bmQgdG8gYmUgXCIgKyB1cGdyYWRlckluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVXBncmFkZXIudXBncmFkZSh1cGdyYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlTmV4dFZlcnNpb24odHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSBOdW1iZXIodHlwZVZlcnNpb24uc3Vic3RyKDEpKTtcclxuICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgIHJldHVybiBuZXh0VmVyc2lvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZURhdGUgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiRGF0ZVwiO1xyXG4gICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgX19kYXRlQXNTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fX2RhdGVBc1N0cmluZyA9IGRhdGUudG9JU09TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLl9fZGF0ZUFzU3RyaW5nKTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZVJlZ0V4cCBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJSZWdFeHBcIjtcclxuICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgIF9fcmVndWxhckV4cHJlc3Npb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWdFeHA6IFJlZ0V4cCkge1xyXG4gICAgICAgIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlZ0V4cCgpOiBSZWdFeHAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbik7XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdG91Y2hJbmRleCA9IDE7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZXMgdGhlIGlkIGdlbmVyYXRvciBmb3IgYSBuZXcgcnVuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRUb3VjaEluZGV4KCkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFRvdWNoO1xyXG4gICAgICAgIHNUaGlzLnRvdWNoSW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXROZXdJbmRleCgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIHJldHVybiBTaW1wbGVHdWlkLmdlbmVyYXRlKClcclxuICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICBzVGhpcy50b3VjaEluZGV4Kys7XHJcbiAgICAgICAgcmV0dXJuIChzVGhpcy50b3VjaEluZGV4KysgLSAxKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIGFkZHMgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IHRvIGFuIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHRvdWNoKG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVG91Y2hcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB2YXIgbmV3SWQgPSBzVGhpcy5nZXROZXdJbmRleCgpO1xyXG4gICAgICAgICAgICBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkID0gbmV3SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlcyB0aGUgX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IGZyb20gYW4gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdW50b3VjaChvYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICBpZiAoY2FzdGVkLl9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gfSIsImltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyBhbiBvYmplY3QgdG8gYSBKU09OIHN0cmluZywga2VlcGVpbmcgdHJhY2sgb2YgdGhlIGluc3RhbmNlcyBvZiB0aGUgb2JqZWN0cyBzZXJpYWxpemVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKHRvU2VyaWFsaXplOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciB0b1JldHVybjtcclxuICAgICAgICBUb3VjaC5yZXNldFRvdWNoSW5kZXgoKTtcclxuICAgICAgICB0b1NlcmlhbGl6ZSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRvUmV0dXJuID0gSlNPTi5zdHJpbmdpZnkodG9TZXJpYWxpemUsIFNlcmlhbGl6ZXIuY3VzdG9tU2VyaWFsaXplcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgU2VyaWFsaXplci5wb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbih0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgIFNlcmlhbGl6ZXIudW50b3VjaFNvdXJjZU9iamVjdCh0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByZXByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBEYXRlIG9iamVjdHMgd2l0aCBzb21ldGhpbmcgZGlmZmVyZW50Li4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdGYWtlRGF0ZSA9IG5ldyBTZXJpYWxpemFibGVEYXRlKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlRGF0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50IGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZVJlZ0V4cCA9IG5ldyBTZXJpYWxpemFibGVSZWdFeHAoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VSZWdFeHA7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gU2VyaWFsaXplci5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIHVudG91Y2hTb3VyY2VPYmplY3Qoc291cmNlT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgIGlmIChUb3VjaC5oYXNCZWVuVG91Y2hlZChzb3VyY2VPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIFRvdWNoLnVudG91Y2goc291cmNlT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKCB2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLnVudG91Y2hTb3VyY2VPYmplY3QoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvc3Rwcm9jZXNzIHRoZSBvYmplY3QgdHJlZSB0byBiZSBzZXJpYWxpemVkIHRvIGZpbmQgYW5kIHJlcGxhY2UgRmFrZURhdGUgb2JqZWN0cyB3aXRoIERhdGVzIGFnYWluLi4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZURhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gKDxTZXJpYWxpemFibGVEYXRlPmN1cnJlbnQpLmdldERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50IGluc3RhbmNlb2YgU2VyaWFsaXphYmxlUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlUmVnRXhwPmN1cnJlbnQpLmdldFJlZ0V4cCgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc291cmNlT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXQncyBkdXR5IGlzIHRvIFwidG91Y2hcIiBldmVyeSBvYmplY3QgcHJvY2Vzc2UgdG8gYWRkIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eS5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5zdHJpbmdpZnlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tU2VyaWFsaXplcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKCFUb3VjaC5oYXNCZWVuVG91Y2hlZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIFRvdWNoLnRvdWNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcbi8vIH0iLCIvLyBuYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUlkZW50aXR5TWFwIHtcclxuXHJcbiAgICBwcml2YXRlIGlkVG9PYmplY3RNYXA6IHsgW2lkOiBzdHJpbmddOiBhbnkgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RyYWNrZWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChpZDogc3RyaW5nLCBvYmplY3Q6IGFueSk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXSA9IG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIHRoZSBpZHMgaW4gdGhlIG1hcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICB2YXIgdG9SZXR1cm46IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgdG9SZXR1cm4ucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiLyoqXHJcbiAqIEltcGxlbWVudHMgSlNPTiBzdHJpbmcgc2VyaWFsaXphdGlvbi4gSXQgZXh0ZW5kcyB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIEpTT04uc3RyaW5naWZ5IHRvIGFsbG93IHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbiBvZiBkYXRlIGFuZCByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0cywgYW5kIG9iamVjdCByZWZlcmVuY2UuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5pbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7U2ltcGxlSWRlbnRpdHlNYXB9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcFwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNlcmlhbGl6ZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIG5lZWRlZCB0byB0cmFjayBvYmplY3QgaW5zdGFuY2VzIHRvIGFjaGlldmUgY29ycmVjdCByZWNvbnN0cnVjdGlvbiBvZiB0aGUgb2JqZWN0IHRyZWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGlkZW50aXR5TWFwOiBTaW1wbGVJZGVudGl0eU1hcDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNlc2lhbGl6ZXMgYW4gb2JqZWN0IGZyb20gYSBKU09OIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZSh0b0Rlc2VyaWFsaXplOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIERlc2VyaWFsaXplci5pZGVudGl0eU1hcCA9IG5ldyBTaW1wbGVJZGVudGl0eU1hcCgpO1xyXG4gICAgICAgIHZhciB0b1JldHVybiA9IEpTT04ucGFyc2UodG9EZXNlcmlhbGl6ZSwgRGVzZXJpYWxpemVyLmN1c3RvbVJldml2ZXIpO1xyXG4gICAgICAgIERlc2VyaWFsaXplci5jbGVhbnVwKCk7XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYW5zIHRoZSByZWNvbnNpdHV0ZWQgaW5zdGFuY2VzIGZyb20gdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSxcclxuICAgICAqIGFuZCBlbXB0aWVzIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xlYW51cCgpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEZXNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcbiAgICAgICAgdmFyIHVudG91Y2ggPSBUb3VjaC51bnRvdWNoO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGlkTWFwLmdldElkcygpKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IGlkTWFwLmdldEJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgIHVudG91Y2goY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBsZWF2ZSB0aGUgaW5zdGFuY2VzIFwiZ2FyYmFnZWFibGVcIi4uLiBob3cgdG8gdGVzdCA/ICAgIFxyXG4gICAgICAgICAgICBpZE1hcC5kZWxldGVCeUlkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEl0IGhhbmRsZXMgRmFrZSogaW5zdGFuY2VzIHVzZXMgX19vYmplY3RJbnN0YW5jZUlkIHRvIHJlYnVpbGQgYSBjb3JyZWN0IG9iamVjdCB0cmVlLiBcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5wYXJzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21SZXZpdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gRGVzZXJpYWxpemVyO1xyXG4gICAgICAgIHZhciBpZE1hcCA9IHNUaGlzLmlkZW50aXR5TWFwO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5oYXNCZWVuVG91Y2hlZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpZE1hcC5pc1RyYWNrZWQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZE1hcC5nZXRCeUlkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZE1hcC5hZGQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGZvciB0aGUgcHJlc2VuY2Ugb2YgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICBpZiAoY2FzdGVkLl9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFuYWdlcyBSZWdFeHAgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEZha2VSZWdFeHBEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiUmVnRXhwXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IFJlZ0V4cCh2YWx1ZS5fX3JlZ3VsYXJFeHByZXNzaW9uIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hbmFnZXMgRGF0ZSBEZXNlcmlhbGl6YXRpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgRmFrZURhdGVEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiRGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKCg8U2VyaWFsaXphYmxlRGF0ZT52YWx1ZSkuX19kYXRlQXNTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4vRmFjdG9yeVwiO1xyXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCBpbXBsZW1lbnRzIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgcHVibGljIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5hbWVOb3RTZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVWZXJzaW9uTm90U2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0b1JlY29uc3RpdHV0ZSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMpO1xyXG4gICAgICAgIHZhciByZWNvbnN0aXR1dGVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHRvUmVjb25zdGl0dXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlY29uc3RpdHV0ZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZTxUU3RhdGU+KHN0YXRlOiBUU3RhdGUpIHtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlN0YXRlSXNOb3RBbk9iamVjdCwgXCJzdGF0ZSBkZXZlIGVzc2VyZSB1biBvZ2dldHRvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlRWxlbWVudCA9IHN0YXRlW2VsZW1lbnRdO1xyXG4gICAgICAgICAgICB0aGlzW2VsZW1lbnRdID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKGN1cnJlbnRTdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCB0aGlzLmdldFN0YXRlKCkgKSApO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5leHBvcnQgaW50ZXJmYWNlIElEb21haW5FdmVudCBleHRlbmRzIElQZXJzaXN0YWJsZSwgSVR5cGVUcmFja2luZyB7XHJcblxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50SGFuZGxlciB7XHJcbiAgICAoZG9tYWluRXZlbnQ6IElEb21haW5FdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpc3BhdGNoZXIge1xyXG4gICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcik7XHJcbiAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpO1xyXG4gICAgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCk7XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtJRGlzcGF0Y2hlcn0gZnJvbSBcIi4vSURpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuZXhwb3J0IGNsYXNzIERvbWFpbkRpc3BhdGNoZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uOiBJRGlzcGF0Y2hlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihkaXNwYXRjaGVyOiBJRGlzcGF0Y2hlcikge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uID0gZGlzcGF0Y2hlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SUVxdWF0YWJsZX0gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZVwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eTxULCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiBleHRlbmRzIElFcXVhdGFibGU8VD4sIElQZXJzaXN0YWJsZSB7XHJcblx0Z2V0S2V5KCk6IFRLZXk7XHJcblx0c2V0S2V5KGtleTogVEtleSk6IHZvaWQ7XHJcbn1cclxuLy8gfSIsImltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuL0lFbnRpdHlcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzc2VzIGFuZCBpbnRlcmZhY2VzIHRvIGltcGxlbWVudCBhbiBFbnRpdHksIGEgcGVyc2lzdGFibGUgb2JqZWN0LiBcclxuICovXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbnRpdHk8VCBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcblx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRpbXBsZW1lbnRzIElFbnRpdHk8VCwgVEtleT4ge1xyXG5cclxuXHRwcml2YXRlIGtleTogVEtleTtcclxuXHRcclxuXHRwcml2YXRlIHJhaXNlRXZlbnQoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG5cdFx0RG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGdldEtleSgpOiBUS2V5IHtcclxuXHRcdHJldHVybiB0aGlzLmtleTtcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2V0S2V5KGtleTogVEtleSk6IHZvaWQge1xyXG5cdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbiB7XHJcblx0XHRpZiAoIWl0ZW0pIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGl0ZW0uZ2V0S2V5KCkuZXF1YWxzKHRoaXMuZ2V0S2V5KCkpO1xyXG5cdH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9JRW50aXR5XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFnZ3JlZ2F0ZVJvb3Q8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGV4dGVuZHMgSUVudGl0eTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGdldFJldmlzaW9uSWQoKTogbnVtYmVyXHJcbiAgICAgICAgaW5jcmVtZW50UmV2aXNpb25JZCgpOiB2b2lkO1xyXG5cclxuICAgICAgICBwZXJmZWN0bHlNYXRjaChhbm90aGVyOiBJQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW47XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgdGhlIEFnZ3JlZ2F0ZSBQYXR0ZXJuIGJ5IGRlZmluaW5nIGludGVyZmFjZXMgYW5kIGJhc2UgYmVoYXZpb3IgZm9yIGFuIEFnZ3JlZ2F0ZVJvb3QuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGJlaGF2aW9yIG9mIGFuIEFnZ3JlZ2F0ZVJvb3QsIHdoaWNoIGlzIGJhc2ljYWxseSBhbiBlbnRpdHkuLi5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWdncmVnYXRlUm9vdDxcclxuICAgIFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgID5cclxuICAgIGV4dGVuZHMgQmFzZUVudGl0eTxULCBUS2V5PlxyXG4gICAgaW1wbGVtZW50cyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgSUVudGl0eTxULCBUS2V5PlxyXG57XHJcbiAgICBwcml2YXRlIF9fcmV2aXNpb25JZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fcmV2aXNpb25JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVtZW50UmV2aXNpb25JZCgpIHtcclxuICAgICAgICB0aGlzLl9fcmV2aXNpb25JZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGFyZXMgYW4gYWdncmVnYXRlIHdpdGggYW5vdGhlci4gUmV0dXJucyB0cnVlIGlmIGFnZ3JlZ2F0ZSdzIGRhdGEgYXJlIGV4YWN0bHkgZXF1YWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwZXJmZWN0bHlNYXRjaChvdGhlcjogQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKCFvdGhlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGhpc09uZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgICB2YXIgdGhlT3RoZXIgPSBvdGhlci5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBkbyB0aGUgY29tcGFyaXNvbiBqdXN0IGxpa2UgdmFsdWUgb2JqZWN0cy4uLiBuYWl2ZSBidXQgZnVuY3Rpb25hbCBhdCB0aGlzIHRpbWUuXHJcbiAgICAgICAgdmFyIHRoaXNPbmVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXNPbmUpO1xyXG4gICAgICAgIHZhciB0aGVPdGhlckFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhlT3RoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc09uZUFzU3RyaW5nID09PSB0aGVPdGhlckFzU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcblxyXG5leHBvcnQge0lBZ2dyZWdhdGVSb290LCBCYXNlQWdncmVnYXRlUm9vdH07IiwiaW1wb3J0IHtJRXF1YXRhYmxlfSBmcm9tIFwiLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGVcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbmV4cG9ydCB7SUVxdWF0YWJsZSwgSVR5cGVUcmFja2luZ307IiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5Qcm9jZXNzRGlzcGF0Y2hlciB7XHJcbiAgICBwcml2YXRlIGRlbGVnYXRlc1JlZ2lzdHJ5OiB7IFtldmVudFR5cGVOYW1lOiBzdHJpbmddOiBJRXZlbnRIYW5kbGVyW10gfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5ID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGRzIGFuIGhhbmRsZSBpZiAoYW5kIG9ubHkgaWYpIHRoZSBoYW5kbGVyIGhhcyBub3QgYmVlbiBcInN0YW1wZWRcIlxyXG4gICAgICAgIGlmICghKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0ucHVzaChoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIC8vIEFjdCBvbmx5IGlkIGhhbmRsZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5cclxuICAgICAgICBpZiAoKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdW2VsZW1lbnRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCg8YW55PmN1cnJlbnRFbGVtZW50KS5fX2hhbmRsZXJJZCA9PT0gKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdLnNwbGljZShOdW1iZXIoZWxlbWVudCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVycm9yczogRXJyb3JbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgb2YgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudChldmVudCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChFcnJvcnMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmJ1aWxkRXJyb3JNZXNzYWdlKEVycm9ycyk7XHJcbiAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBlLm5hbWUgPSBcIkRpc3BhdGNoZXIgRXJyb3JcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRFcnJvck1lc3NhZ2UoRXJyb3JzOiBFcnJvcltdKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgbWVzc2FnZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBlbGVtZW50IG9mIEVycm9ycykge1xyXG4gICAgICAgICAgICBtZXNzYWdlICs9IGVsZW1lbnQubmFtZSArIFwiOlwiICsgZWxlbWVudC5tZXNzYWdlICsgXCJcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHtJRGlzcGF0Y2hlcn0gZnJvbSBcIi4vRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyXCI7XHJcbmltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlclwiO1xyXG5cclxuZXhwb3J0IHtEb21haW5EaXNwYXRjaGVyLCBJRGlzcGF0Y2hlciwgSURvbWFpbkV2ZW50LCBJRXZlbnRIYW5kbGVyLCBJblByb2Nlc3NEaXNwYXRjaGVyfTsiLCJpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlS2V5VmFsdWVPYmplY3Q8VD5cclxuICAgIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcbiAgICBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVyaXZlZCBjbGFzc2VzIG11c3QgcmVpbXBsZW1lbnQgdGhpcyBtZXRob2QuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcbi8vIH0iLCJpbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuL0VudGl0eS9CYXNlRW50aXR5XCI7XHJcbmltcG9ydCB7QmFzZUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9FbnRpdHkvQmFzZUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4vRW50aXR5L0lFbnRpdHlcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCB7QmFzZUVudGl0eSwgQmFzZUtleVZhbHVlT2JqZWN0LCBJRW50aXR5LCBJS2V5VmFsdWVPYmplY3R9OyIsImltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbmV4cG9ydCB7QmFzZUVycm9yc307IiwiaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vUGVyc2lzdGFibGVPYmplY3QvRXJyb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7VHlwZVJlZ2lzdHJ5fSBmcm9tIFwiLi9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnlcIjtcclxuXHJcbmV4cG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0LCBFcnJvcnMsIEZhY3RvcnksIElQZXJzaXN0YWJsZSwgVHlwZVJlZ2lzdHJ5fTsiLCJpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBLZXlOb3RTZXQgPSBcIktleSBub3Qgc2V0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEl0ZW1Ob3RGb3VuZCA9IFwiSXRlbSBOb3QgRm91bmRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JTYXZpbmdJdGVtID0gXCJFcnJvciBTYXZpbmcgSXRlbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvclJlYWRpbmdJdGVtID0gXCJFcnJvciBSZWFkaW5nIEl0ZW1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JEZWxldGluZ0l0ZW0gPSBcIkVycm9yIERlbGV0aW5nIEl0ZW1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uID0gXCJXcm9uZyB0eXBlIGZyb20gSW1wbGVtZW50YXRpb25cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgTWFuYWdlZFR5cGVOb3RTdXBwbGllZCA9IFwiUmVwb3NpdG9yeSBuZWVkcyB0byBrbm93IHdoYXQgdHlwZSBpdCBjYW4gbWFuYWdlXCI7XHJcbn0iLCIvKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeTxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUO1xyXG4gICAgc2F2ZShpdGVtOiBUKTogdm9pZDtcclxuICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQ7XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfX25hbWVTcGFjZSA9IFwiREREVG9vbHMuUmVwb3NpdG9yeVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtQWRkZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1BZGRlZEV2ZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEl0ZW1VcGRhdGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEl0ZW1EZWxldGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtRGVsZXRlZEV2ZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEl0ZW1SZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1SZXRyaWV2ZWRFdmVudFwiO1xyXG59XHJcbi8vIH1cclxuIiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbVJldHJpZXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEl0ZW1SZXRyaWV2ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtUmV0cmlldmVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gfVxyXG4iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQWRkZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtQWRkZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtQWRkZWRFdmVudDtcclxuICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIG9iamVjdFN0YXRlOiBJVHlwZVRyYWNraW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyB9XHJcbiIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1VcGRhdGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbVVwZGF0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtVXBkYXRlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgb2JqZWN0U3RhdGU6IElUeXBlVHJhY2tpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIH1cclxuIiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbURlbGV0ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtRGVsZXRlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1EZWxldGVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gfVxyXG4iLCJpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi9JUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuaW1wb3J0IHtJdGVtUmV0cmlldmVkRXZlbnR9IGZyb20gXCIuL0l0ZW1SZXRyaWV2ZWRFdmVudFwiO1xyXG5pbXBvcnQge0l0ZW1BZGRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtQWRkZWRFdmVudFwiO1xyXG5pbXBvcnQge0l0ZW1VcGRhdGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1VcGRhdGVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtRGVsZXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtRGVsZXRlZEV2ZW50XCI7XHJcbmltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4vKipcclxuICogQ2FwdHVyZXMgY29tbW9uIGJlaGF2aW9yIG9mIHJlcG9zaXRvcnksIHVzaW5nIHRoZVRlbXBsYXRlIE1ldGhvZCBQYXR0ZXJuLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnk8VCwgVEtleT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG1hbmFnZWQgYnkgdGhpcyByZXBvc2l0b3J5LiBXaWxsIGJlIGNvbXBhcmVkIHdpdGggdGhlIF9fdHlwZU5hbWUgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgcmV0cmlldmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLk1hbmFnZWRUeXBlTm90U3VwcGxpZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRvIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYW4gXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aHJvdyBcIkl0ZW1Ob3RGb3VuZFwiIGlmIG5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGlkIHdhcyBmb3VuZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZ2V0QnlJZChpZDogVEtleSk6IFQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZXRyaWV2ZWQgPSB0aGlzLmdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXRyaWV2ZWQuX190eXBlTmFtZSAhPT0gdGhpcy5tYW5hZ2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5Xcm9uZ1R5cGVGcm9tSW1wbGVtZW50YXRpb24sIFwiRXhwZWN0aW5nIFwiICsgdGhpcy5tYW5hZ2VkVHlwZSArIFwiIGJ1dCBvYnRhaW5lIFwiICsgcmV0cmlldmVkLl9fdHlwZU5hbWUgKyBcIiBmcm9tIGRhdGFiYXNlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUocmV0cmlldmVkKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtUmV0cmlldmVkRXZlbnQodG9SZXR1cm4uX190eXBlTmFtZSwgdG9SZXR1cm4uX190eXBlVmVyc2lvbiwgdG9SZXR1cm4uZ2V0S2V5KCkudG9TdHJpbmcoKSwgcmV0cmlldmVkKTtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCwgZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogdm9pZDtcclxuXHJcbiAgICBzYXZlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5LZXlOb3RTZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50IHwgSXRlbUFkZGVkRXZlbnQ7XHJcbiAgICAgICAgdmFyIGFzSXRXYXM6IFQgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGFzSXRXYXMgPSB0aGlzLmdldEJ5SWQoaXRlbS5nZXRLZXkoKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkIGlmIHRoZSBkbyBub3QgZXhpc3RzIGluIHRoZSBSZXBvLlxyXG4gICAgICAgICAgICBldmVudCA9IG5ldyBJdGVtQWRkZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwgaXRlbS5nZXRLZXkoKS50b1N0cmluZygpLGl0ZW0uZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2goYXNJdFdhcykpIHtcclxuICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSxpdGVtLmdldFN0YXRlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluYWxseSBzYXZlcyBhZ2dyZWdhdGUgaW50byB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICB0aGlzLnNhdmVJbXBsZW1lbnRhdGlvbihpdGVtKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudCkge1xyXG4gICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkO1xyXG5cclxuICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBhc0l0V2FzOiBUID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGlkKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGl0ZW0gbm90IGZvdW5kLCBzbyBub3RoaW5nIHRvIGRlbGV0ZSFcclxuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbURlbGV0ZWRFdmVudChhc0l0V2FzLl9fdHlwZU5hbWUsIGFzSXRXYXMuX190eXBlVmVyc2lvbiwgaWQudG9TdHJpbmcoKSwgYXNJdFdhcy5nZXRTdGF0ZSgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5kZWxldGVJbXBsZW1lbnRhdGlvbihpZCk7XHJcblxyXG4gICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0Jhc2VSZXBvc2l0b3J5fSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbk1lbW9yeVJlcG9zaXRvcnk8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxULCBUS2V5PlxyXG4gICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiB7IFtpZDogc3RyaW5nXTogSVBlcnNpc3RhYmxlIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoIG1hbmFnZWRUeXBlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWFuYWdlZFR5cGVOYW1lKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KSB7XHJcblxyXG4gICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdG9yYWdlW2tleV0pIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHRoaXMuc3RvcmFnZVtrZXldKTtcclxuICAgICAgICAgICAgcmV0dXJuIDxUPnRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsIi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFJlcG9zaXRvcnkgdG8gcGVyc2lzdCBBZ2dyZWdhdGVzLiBDb250YWlucyBhIHJlZmVyZW5jZSBpbiBtZW1vcnkgcmVwb3NpdG9yeS5cclxuICovXHJcblxyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuaW1wb3J0IElQcm9taXNlID0gUS5JUHJvbWlzZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPjtcclxuICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PjtcclxuICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PjtcclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0lSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbmltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbmltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG5pbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxuaW1wb3J0IElQcm9taXNlID0gUS5JUHJvbWlzZTtcclxuXHJcbi8qKlxyXG4gKiBDYXB0dXJlcyBjb21tb24gYmVoYXZpb3Igb2YgcmVwb3NpdG9yeSwgdXNpbmcgdGhlVGVtcGxhdGUgTWV0aG9kIFBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG1hbmFnZWQgYnkgdGhpcyByZXBvc2l0b3J5LiBXaWxsIGJlIGNvbXBhcmVkIHdpdGggdGhlIF9fdHlwZU5hbWUgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgcmV0cmlldmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKG1hbmFnZWRUeXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuTWFuYWdlZFR5cGVOb3RTdXBwbGllZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGEgXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPElUeXBlVHJhY2tpbmc+O1xyXG5cclxuICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcjxUPigpO1xyXG4gICAgICAgIHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAodmFsdWU6IFQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lICE9IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmVkIFwiICsgdmFsdWUuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0b1JldHVybjogVCA9IDxUPihGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLl9fdHlwZU5hbWUsIHRvUmV0dXJuLl9fdHlwZVZlcnNpb24sIHRvUmV0dXJuLmdldEtleSgpLnRvU3RyaW5nKCksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodG9SZXR1cm4pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgIHByaXZhdGUgZG9TYXZlKGl0ZW06IFQsIGRlZmVycmVkOiBRLkRlZmVycmVkPHt9Pik6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgdGhpcy5zYXZlSW1wbGVtZW50YXRpb24oaXRlbSkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JTYXZpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9IFEuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50IHwgSXRlbUFkZGVkRXZlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0QnlJZChpdGVtLmdldEtleSgpKS50aGVuKFxyXG4gICAgICAgICAgICAocmVhZFZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0IHNvIHdlIGhhdmUgdG8gY29tcGFyZSBpdCB3aXRoIHdoYXQgd2UgYXJlIHNhdmluZy5cclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5wZXJmZWN0bHlNYXRjaChyZWFkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoYXQgaXMgaW4gdGhlIGRhdGFiYXNlIHBlcmZlY3RseSBtYXRjaCB3aGF0IHdlIGFyZSBzYXZpbmcsIHNvIG5vdGhpbmcgdG8gZG8hXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT0gRXJyb3JzLkl0ZW1Ob3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZWN0ZWQsIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgcmVwbywgc28gd2UgaGF2ZSB0byBhZGQgaXQhXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TYXZlKGl0ZW0sIGRlZmVycmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3JzIG11c3QgYmUgdHJlYXRlZCBhcyAuLi4gXCJFcnJvcnNcIlxyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yUmVhZGluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG5cclxuICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcjx7fT4oKTtcclxuICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1EZWxldGVkRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5nZXRCeUlkKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1EZWxldGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGlkLnRvU3RyaW5nKCksIGl0ZW0uZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGJ1aWxkIGFuIGVycm9yIGZyb20gYSByZXR1cm4gdmFsdWUgb2YgdGhlIEFzeW5jIEltcGxlbWVudGF0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidWlsZEVycm9yKGVycm9yRnJvbUNhbGw6IGFueSwgZXJyb3JJZkVycm9yRnJvbUNhbGxJc05vdEVycm9yOiBzdHJpbmcpOiBFcnJvciB7XHJcbiAgICAgICAgdmFyIHJlYXNvbjogRXJyb3I7XHJcbiAgICAgICAgaWYgKGVycm9yRnJvbUNhbGwgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICByZWFzb24gPSBlcnJvckZyb21DYWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvciwgSlNPTi5zdHJpbmdpZnkoZXJyb3JGcm9tQ2FsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVhc29uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlSW5NZW1vcnlSZXBvc2l0b3J5fSBmcm9tIFwiLi9SZXBvc2l0b3J5L0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHtCYXNlUmVwb3NpdG9yeX0gZnJvbSBcIi4vUmVwb3NpdG9yeS9CYXNlUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlBc3luY1wiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vUmVwb3NpdG9yeS9FcnJvcnNcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL1JlcG9zaXRvcnkvRXZlbnRzXCI7XHJcbmltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHtJUmVwb3NpdG9yeUFzeW5jfSBmcm9tIFwiLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vUmVwb3NpdG9yeS9JdGVtQWRkZWRFdmVudFwiO1xyXG5pbXBvcnQge0l0ZW1EZWxldGVkRXZlbnR9IGZyb20gXCIuL1JlcG9zaXRvcnkvSXRlbURlbGV0ZWRFdmVudFwiO1xyXG5pbXBvcnQge0l0ZW1SZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vUmVwb3NpdG9yeS9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9SZXBvc2l0b3J5L0l0ZW1VcGRhdGVkRXZlbnRcIjtcclxuXHJcbmV4cG9ydCB7QmFzZUluTWVtb3J5UmVwb3NpdG9yeSwgQmFzZVJlcG9zaXRvcnksIEJhc2VSZXBvc2l0b3J5QXN5bmMsIEVycm9ycywgRXZlbnRzLCBJUmVwb3NpdG9yeSwgSVJlcG9zaXRvcnlBc3luYywgSXRlbUFkZGVkRXZlbnQsIEl0ZW1EZWxldGVkRXZlbnQsIEl0ZW1SZXRyaWV2ZWRFdmVudCwgSXRlbVVwZGF0ZWRFdmVudH07IiwiaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZVJlZ0V4cFwiO1xyXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG5pbXBvcnQge1RvdWNofSBmcm9tIFwiLi9TZXJpYWxpemF0aW9uL1RvdWNoXCI7XHJcblxyXG5leHBvcnQge0Rlc2VyaWFsaXplciwgU2VyaWFsaXphYmxlRGF0ZSwgU2VyaWFsaXphYmxlUmVnRXhwLCBTZXJpYWxpemVyLCBUb3VjaH07IiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9fbmFtZVNwYWNlID0gXCJERERUb29scy5Vbml0T2ZXb3JrXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9iamVjdFNhdmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RTYXZlZEV2ZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9iamVjdERlbGV0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmplY3RSZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbn1cclxuLy8gfVxyXG4iLCJcclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGVudW0gSXRlbVN0YXR1cyB7XHJcbiAgICBOZXcsXHJcbiAgICBNb2RpZmllZCxcclxuICAgIFNhdmVkLFxyXG4gICAgRGVsZXRlZFxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgdG8gc3RvcmUgaXRlbSBzdGF0dXMgaW5mb1xyXG4gKi9cclxuY2xhc3MgVHJhY2tlZEl0ZW08XHJcbiAgICBUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICA+IHtcclxuICAgIC8vIFdpbGwgY29udGFpbiBhIHNlcmlhbGl6ZWQgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IGFzIGl0IHdhcyB3aGVuIGl0IHdhcyBsb2FkZWQgZnJvbSB0aGUgcmVwb3NpdG9yeS5cclxuXHJcbiAgICBwcml2YXRlIGFzTG9hZGVkOiBJUGVyc2lzdGFibGUgLy8gV2lsbCBjb250YWluIHRoZSBzdGF0ZSBvZiB0aGUgb2JqZWN0IHdoZW4gZmlyc3QgYWRkZWQgb3IgdXBkYXRlZFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RhdHVzOiBJdGVtU3RhdHVzLFxyXG4gICAgICAgIHByaXZhdGUgaXRlbTogVCxcclxuICAgICAgICBwcml2YXRlIGtleTogVEtleVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5hc0xvYWRlZCA9IGl0ZW0uZ2V0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFya0FzTmV3KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5OZXc7XHJcbiAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXJrQXNTYXZlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuU2F2ZWQ7XHJcbiAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXJrQXNNb2RpZmllZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuTW9kaWZpZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLkRlbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXR1cygpOiBJdGVtU3RhdHVzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzQ2hhbmdlZCgpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFN0YXRlKTtcclxuICAgICAgICB2YXIgYXNMb2FkZWRBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuYXNMb2FkZWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlQXNTdHJpbmcgIT09IGFzTG9hZGVkQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzIGhhcyBiZWVuIG1vZGlmaWVkLCBhbmQgY2hhbmdlcyB0aGUgc3RhdHVzIGFjY29yZGluZ2x5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlU2F2ZWRJdGVtU3RhdHVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gSXRlbVN0YXR1cy5TYXZlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya0FzTW9kaWZpZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU1hcFxyXG4gICAgPFxyXG4gICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgPlxyXG57XHJcblxyXG4gICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogVHJhY2tlZEl0ZW08VCwgVEtleT4gfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGtleSBpcyBhbHJlYWR5IHN0b3JlZCBpbiB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzVHJhY2tlZChrZXk6IFRLZXkpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10uZ2V0SXRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb3IgcmVwbGFjZXMgYW4gaXRlbSB0byB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoa2V5OiBUS2V5LCBpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgbmV3SXRlbSA9IG5ldyBUcmFja2VkSXRlbShJdGVtU3RhdHVzLk5ldywgaXRlbSwga2V5KTtcclxuICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10gPSBuZXdJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZShrZXk6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2tleS50b1N0cmluZygpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldElkcygpOiBUS2V5W10ge1xyXG4gICAgICAgIHZhciB0b1JldHVybjogVEtleVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aGlzLmlkVG9PYmplY3RNYXBbZWxlbWVudF0uZ2V0S2V5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc0RlbGV0ZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNEZWxldGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc1NhdmVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzU2F2ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNNb2RpZmllZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtU3RhdHVzKGtleTogVEtleSk6IEl0ZW1TdGF0dXMge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRyYWNrZWRJdGVtLmdldFN0YXR1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXB1dGVzIHRoZSBjb3JyZWN0IHN0YXR1cyBmb3IgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzLCBhcyBpdCBtYXkgaGF2ZSBiZWVuIG1vZGlmaWVkIHNpbmNlIG5vdyAoaGVyZSB3ZSBkb24ndCBoYXZlIHByb3BlcnR5IHRyYWNraW5nKS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICBpdGVtLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VHJhY2tlZEl0ZW0oa2V5OiBUS2V5KTogVHJhY2tlZEl0ZW08VCwgVEtleT4ge1xyXG4gICAgICAgIHZhciB0b1JldHVybiA9IHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgaWYgKCF0b1JldHVybikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCIvKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBVbml0T2ZXb3JrLiBBIFVuaXRPZldvcmsga2VlcHMgdHJhY2sgb2YgY2hhbmdlcyBvbiB0aGUgQWdncmVnYXRlcyBsb2FkZWQgZnJvbSB0aGUgdW5kZXJseWluZyByZXBvc2l0b3J5IGFuZCBhbGxvd3MgdG8gc2F2ZSB0aGVtIGFsbCBpbiBhIHNpbmdsZSBjYWxsLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVW5pdE9mV29yazxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICovXHJcbiAgICBnZXRCeUlkKGtleTogVEtleSk6IFQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgKi9cclxuICAgIHNhdmVBbGwoKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB0byByZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgdG8gdW5yZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTogdm9pZDtcclxuXHJcbn1cclxuLy8gfSIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0RGVsZXRlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdERlbGV0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3REZWxldGVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyB9XHJcbiIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0U2F2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3RTYXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICApIHsgXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gfVxyXG4iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFJldHJpZXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdFJldHJpZXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFJldHJpZXZlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG4vLyB9XHJcbiIsImltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pdE9mV29ya0Vycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtTWFya2VkQXNEZWxldGVkID0gXCJUaGlzIGl0ZW0gd2FzIG1hcmtlZCBhcyBkZWxldGVkIGluIHRoaXMgVW5pdE9mV29yaywgYW5kIGNhbm5vdCBiZSByZXRyaWV2ZWQuXCI7XHJcbn1cclxuXHJcbi8vIH0iLCIvLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7SWRlbnRpdHlNYXAsIEl0ZW1TdGF0dXN9IGZyb20gXCIuL0lkZW50aXR5TWFwXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVsZXRlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3REZWxldGVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3RSZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3RTYXZlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3RTYXZlZEV2ZW50XCI7XHJcbmltcG9ydCB7VW5pdE9mV29ya0Vycm9yc30gZnJvbSBcIi4vVW5pdE9mV29ya0Vycm9yc1wiO1xyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVuaXRPZldvcms8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgcHJpdmF0ZSBpZE1hcDogSWRlbnRpdHlNYXA8VCwgVEtleT47XHJcbiAgICBwcml2YXRlIHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+O1xyXG4gICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBJblByb2Nlc3NEaXNwYXRjaGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+KSB7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLmlkTWFwID0gbmV3IElkZW50aXR5TWFwPFQsIFRLZXk+KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWRNYXAuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpID09PSBJdGVtU3RhdHVzLkRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIFVuaXRPZldvcmtFcnJvcnMudGhyb3coVW5pdE9mV29ya0Vycm9ycy5JdGVtTWFya2VkQXNEZWxldGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLnJlcG9zaXRvcnkuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgIHRoaXMuaWRNYXAuYWRkKGtleSwgdG9SZXR1cm4pO1xyXG4gICAgICAgIHRoaXMuaWRNYXAubWFya0FzU2F2ZWRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgIHZhciByZXRyaWV2ZWRFdmVudCA9IG5ldyBPYmplY3RSZXRyaWV2ZWRFdmVudCh0b1JldHVybi5fX3R5cGVOYW1lLCB0b1JldHVybi5fX3R5cGVWZXJzaW9uLCB0b1JldHVybi5nZXRLZXkoKS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnJhaXNlRXZlbnQocmV0cmlldmVkRXZlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIHRoaXMuaWRNYXAubWFya0FzRGVsZXRlZEJ5SWQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlQWxsKCkge1xyXG4gICAgICAgIHZhciBrZXlzID0gdGhpcy5pZE1hcC5nZXRJZHMoKTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgb2Yga2V5cykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pZE1hcC51cGRhdGVTYXZlZEl0ZW1TdGF0dXMoa2V5KTtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5EZWxldGVkOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0RlbGV0ZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTW9kaWZpZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTmV3OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuU2F2ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NEZWxldGVkSXRlbShrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgIHZhciBkZWxldGVkRXZlbnQgPSBuZXcgT2JqZWN0RGVsZXRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5LmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQnlJZChrZXkpO1xyXG4gICAgICAgIHRoaXMucmFpc2VFdmVudChkZWxldGVkRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5LnNhdmUoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuICAgICAgICAvLyByYWlzZXMgYW4gZXZlbnQgZm9yIHdob21ldmVyIGlzIGludGVyZXN0ZWRcclxuICAgICAgICB2YXIgc2F2ZWRFdmVudCA9IG5ldyBPYmplY3RTYXZlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5yYWlzZUV2ZW50KHNhdmVkRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBvYmplY3QgZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW1vdmVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIH1cclxuIiwiaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL1VuaXRPZldvcmsvRXZlbnRzXCI7XHJcbmltcG9ydCB7SWRlbnRpdHlNYXB9IGZyb20gXCIuL1VuaXRPZldvcmsvSWRlbnRpdHlNYXBcIjtcclxuaW1wb3J0IHtJVW5pdE9mV29ya30gZnJvbSBcIi4vVW5pdE9mV29yay9JVW5pdE9mV29ya1wiO1xyXG5pbXBvcnQge09iamVjdERlbGV0ZWRFdmVudH0gZnJvbSBcIi4vVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3RTYXZlZEV2ZW50fSBmcm9tIFwiLi9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3RSZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG5pbXBvcnQge1VuaXRPZldvcmt9IGZyb20gXCIuL1VuaXRPZldvcmsvVW5pdE9mV29ya1wiO1xyXG5pbXBvcnQge1VuaXRPZldvcmtFcnJvcnN9IGZyb20gXCIuL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9yc1wiO1xyXG5cclxuZXhwb3J0IHtFdmVudHMsIElkZW50aXR5TWFwLCBJVW5pdE9mV29yaywgT2JqZWN0RGVsZXRlZEV2ZW50LCBPYmplY3RSZXRyaWV2ZWRFdmVudCwgT2JqZWN0U2F2ZWRFdmVudCwgVW5pdE9mV29yaywgVW5pdE9mV29ya0Vycm9yc307IiwiaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7U2ltcGxlSWRlbnRpdHlNYXB9IGZyb20gXCIuL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwXCI7XHJcblxyXG5leHBvcnQge1NpbXBsZUd1aWQsIFNpbXBsZUlkZW50aXR5TWFwfTsiLCJpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9WYWx1ZU9iamVjdC9JVmFsdWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCB7QmFzZVZhbHVlT2JqZWN0LCBJVmFsdWVPYmplY3R9OyIsImltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25WT0xpYnJhcnkge1xyXG4gICAgXHJcbn0iLCJpbXBvcnQge0NvbW1vblZPTGlicmFyeX0gZnJvbSBcIi4vVmFsdWVPYmplY3RzL0NvbW1vblZPTGlicmFyeVwiO1xyXG5pbXBvcnQge0d1aWR9IGZyb20gXCIuL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcblxyXG5leHBvcnQge0NvbW1vblZPTGlicmFyeSwgR3VpZH07IiwiaW1wb3J0ICogYXMgQWdncmVnYXRlIGZyb20gXCIuL0FnZ3JlZ2F0ZVwiO1xyXG5pbXBvcnQgKiBhcyBDb21tb25JbnRlcmZhY2VzIGZyb20gXCIuL0NvbW1vbkludGVyZmFjZXNcIjtcclxuaW1wb3J0ICogYXMgRG9tYWluRXZlbnRzIGZyb20gXCIuL0RvbWFpbkV2ZW50c1wiO1xyXG5pbXBvcnQgKiBhcyBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XHJcbmltcG9ydCAqIGFzIEVycm9yTWFuYWdlbWVudCBmcm9tIFwiLi9FcnJvck1hbmFnZW1lbnRcIjtcclxuaW1wb3J0ICogYXMgUGVyc2lzdGFibGVPYmplY3QgZnJvbSBcIi4vUGVyc2lzdGFibGVPYmplY3RcIjtcclxuaW1wb3J0ICogYXMgUmVwb3NpdG9yeSBmcm9tIFwiLi9SZXBvc2l0b3J5XCI7XHJcbmltcG9ydCAqIGFzIFNlcmlhbGl6YXRpb24gZnJvbSBcIi4vU2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBVbml0T2ZXb3JrIGZyb20gXCIuL1VuaXRPZldvcmtcIjtcclxuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0ICogYXMgVmFsdWVPYmplY3QgZnJvbSBcIi4vVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0ICogYXMgVmFsdWVPYmplY3RzIGZyb20gXCIuL1ZhbHVlT2JqZWN0c1wiO1xyXG5cclxuZXhwb3J0IHtBZ2dyZWdhdGUsIENvbW1vbkludGVyZmFjZXMsIERvbWFpbkV2ZW50cywgRW50aXR5LCBFcnJvck1hbmFnZW1lbnQsIFBlcnNpc3RhYmxlT2JqZWN0LCBSZXBvc2l0b3J5LCBTZXJpYWxpemF0aW9uLCBVbml0T2ZXb3JrLCBVdGlscywgVmFsdWVPYmplY3QsIFZhbHVlT2JqZWN0c307XHJcbiIsIi8qKlxyXG4gKiBJZGVudGlmaWVzIGEgcXVlcnkgdG8gYmUgZXhlY3V0ZWQgYWdhaW5zdCBhIERhdGFzdG9yZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnk8VD4ge1xyXG4gICAgZXhlY3V0ZSgpOiBUW107XHJcbn0iXX0=