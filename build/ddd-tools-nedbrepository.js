var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("DDDTools/CommonInterfaces/ITypeTracking", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/PersistableObject/IPersistable", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/CommonInterfaces/IEquatable", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/ValueObject/IValueObject", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/Entity/IKeyValueObject", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/ErrorManagement/BaseErrors", ["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.BaseErrors = BaseErrors;
});
define("DDDTools/PersistableObject/Errors", ["require", "exports", "DDDTools/ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_1) {
    "use strict";
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
    }(BaseErrors_1.BaseErrors));
    exports.Errors = Errors;
});
define("DDDTools/Utils/SimpleGuid", ["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.SimpleGuid = SimpleGuid;
});
define("DDDTools/ValueObject/BaseValueObject", ["require", "exports", "DDDTools/PersistableObject/BasePersistableObject"], function (require, exports, BasePersistableObject_1) {
    "use strict";
    var BaseValueObject = (function (_super) {
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
    exports.BaseValueObject = BaseValueObject;
});
define("DDDTools/ValueObjects/Guid", ["require", "exports", "DDDTools/Utils/SimpleGuid", "DDDTools/ValueObject/BaseValueObject"], function (require, exports, SimpleGuid_1, BaseValueObject_1) {
    "use strict";
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
    exports.Guid = Guid;
});
define("DDDTools/PersistableObject/TypeRegistry", ["require", "exports", "DDDTools/PersistableObject/Errors", "DDDTools/ValueObjects/Guid"], function (require, exports, Errors_1, Guid_1) {
    "use strict";
    var TypeRegistry = (function () {
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
    exports.TypeRegistry = TypeRegistry;
});
define("DDDTools/PersistableObject/Factory", ["require", "exports", "DDDTools/PersistableObject/Errors", "DDDTools/PersistableObject/TypeRegistry"], function (require, exports, Errors_2, TypeRegistry_1) {
    "use strict";
    var Factory = (function () {
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
    exports.Factory = Factory;
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
    exports.Upgrader = Upgrader;
});
define("DDDTools/Serialization/SerializableDate", ["require", "exports"], function (require, exports) {
    "use strict";
    var SerializableDate = (function () {
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
    exports.SerializableDate = SerializableDate;
});
define("DDDTools/Serialization/SerializableRegExp", ["require", "exports"], function (require, exports) {
    "use strict";
    var SerializableRegExp = (function () {
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
    exports.SerializableRegExp = SerializableRegExp;
});
define("DDDTools/Serialization/Touch", ["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.Touch = Touch;
});
define("DDDTools/Serialization/Serializer", ["require", "exports", "DDDTools/Serialization/SerializableDate", "DDDTools/Serialization/SerializableRegExp", "DDDTools/Serialization/Touch"], function (require, exports, SerializableDate_1, SerializableRegExp_1, Touch_1) {
    "use strict";
    var Serializer = (function () {
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
    exports.Serializer = Serializer;
});
define("DDDTools/Utils/SimpleIdentityMap", ["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.SimpleIdentityMap = SimpleIdentityMap;
});
define("DDDTools/Serialization/Deserializer", ["require", "exports", "DDDTools/Utils/SimpleIdentityMap", "DDDTools/Serialization/Touch"], function (require, exports, SimpleIdentityMap_1, Touch_2) {
    "use strict";
    var Deserializer = (function () {
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
    exports.Deserializer = Deserializer;
});
define("DDDTools/PersistableObject/BasePersistableObject", ["require", "exports", "DDDTools/PersistableObject/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Serialization/Serializer", "DDDTools/Serialization/Deserializer"], function (require, exports, Errors_3, Factory_1, Serializer_1, Deserializer_1) {
    "use strict";
    var BasePersistableObject = (function () {
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
    exports.BasePersistableObject = BasePersistableObject;
});
define("DDDTools/DomainEvents/IDomainEvent", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/DomainEvents/IEventHandler", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/DomainEvents/IDispatcher", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/DomainEvents/DomainDispatcher", ["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.DomainDispatcher = DomainDispatcher;
});
define("DDDTools/Entity/IEntity", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/Entity/BaseEntity", ["require", "exports", "DDDTools/PersistableObject/BasePersistableObject", "DDDTools/DomainEvents/DomainDispatcher"], function (require, exports, BasePersistableObject_2, DomainDispatcher_1) {
    "use strict";
    var BaseEntity = (function (_super) {
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
    exports.BaseEntity = BaseEntity;
});
define("DDDTools/Aggregate/IAggregateRoot", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/Aggregate/BaseAggregateRoot", ["require", "exports", "DDDTools/Entity/BaseEntity"], function (require, exports, BaseEntity_1) {
    "use strict";
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
    }(BaseEntity_1.BaseEntity));
    exports.BaseAggregateRoot = BaseAggregateRoot;
});
define("DDDTools/Repository/IRepositoryAsync", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/Repository/Errors", ["require", "exports", "DDDTools/ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_2) {
    "use strict";
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
        return Errors;
    }(BaseErrors_2.BaseErrors));
    exports.Errors = Errors;
});
define("DDDTools/Repository/BaseRepositoryAsync", ["require", "exports", "DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory"], function (require, exports, Errors_4, Factory_2) {
    "use strict";
    var BaseRepositoryAsync = (function () {
        function BaseRepositoryAsync(managedType) {
            this.managedType = managedType;
            if (managedType === "") {
                Errors_4.Errors.throw(Errors_4.Errors.ManagedTypeNotSupplied);
            }
        }
        BaseRepositoryAsync.prototype.getById = function (id) {
            var _this = this;
            var deferred = Q.defer();
            this.getByIdImplementation(id).then(function (value) {
                if (value.__typeName != _this.managedType) {
                    var reason = Errors_4.Errors.getErrorInstance(Errors_4.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtained " + value.__typeName + " from database.");
                    deferred.reject(reason);
                    return;
                }
                var toReturn = (Factory_2.Factory.createObjectsFromState(value));
                deferred.resolve(toReturn);
            }, function (error) {
                var reason = _this.buildError(error, Errors_4.Errors.ItemNotFound);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.doSave = function (item, deferred) {
            var _this = this;
            this.saveImplementation(item).then(function () {
                deferred.resolve();
            }, function (error) {
                var reason = _this.buildError(error, Errors_4.Errors.ErrorSavingItem);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.save = function (item) {
            var _this = this;
            var deferred = Q.defer();
            this.getById(item.getKey()).then(function (readValue) {
                if (!item.perfectlyMatch(readValue)) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    return;
                }
                else {
                    deferred.resolve();
                    return;
                }
            }, function (error) {
                if (error instanceof Error && error.name == Errors_4.Errors.ItemNotFound) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    return;
                }
                var reason = _this.buildError(error, Errors_4.Errors.ErrorReadingItem);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.delete = function (id) {
            var _this = this;
            var deferred = Q.defer();
            this.deleteImplementation(id).then(function () { deferred.resolve(); }, function (error) {
                var reason = _this.buildError(error, Errors_4.Errors.ErrorDeletingItem);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.buildError = function (errorFromCall, errorIfErrorFromCallIsNotError) {
            var reason;
            if (errorFromCall instanceof Error) {
                reason = errorFromCall;
            }
            else {
                reason = Errors_4.Errors.getErrorInstance(errorIfErrorFromCallIsNotError, JSON.stringify(errorFromCall));
            }
            return reason;
        };
        return BaseRepositoryAsync;
    }());
    exports.BaseRepositoryAsync = BaseRepositoryAsync;
});
define("NeDBRepository/BaseNeDBRepositoryAsync", ["require", "exports", "DDDTools/Repository/BaseRepositoryAsync", "DDDTools/Repository/Errors"], function (require, exports, BaseRepositoryAsync_1, Errors_5) {
    "use strict";
    var DbItem = (function () {
        function DbItem(item) {
            this.key = item.getKey().toString();
            this.item = item;
        }
        return DbItem;
    }());
    var BaseNeDBRepositoryAsync = (function (_super) {
        __extends(BaseNeDBRepositoryAsync, _super);
        function BaseNeDBRepositoryAsync(managedType, options) {
            _super.call(this, managedType);
            this.options = options;
            this.datastore = new Nedb(options);
        }
        BaseNeDBRepositoryAsync.prototype.getByIdImplementation = function (id) {
            var deferred = Q.defer();
            this.datastore.findOne({ key: id.toString() }, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                if (!document) {
                    var reason = Errors_5.Errors.getErrorInstance(Errors_5.Errors.ItemNotFound, "Item with id " + id.toString() + " was not found.");
                    deferred.reject(reason);
                    return;
                }
                deferred.resolve(document.item);
            });
            return deferred.promise;
        };
        BaseNeDBRepositoryAsync.prototype.doAnInsert = function (toSave, deferred) {
            this.datastore.insert(toSave, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve();
            });
        };
        BaseNeDBRepositoryAsync.prototype.doAnUpdate = function (toSave, deferred) {
            this.datastore.update(toSave, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve();
            });
        };
        BaseNeDBRepositoryAsync.prototype.saveImplementation = function (item) {
            var _this = this;
            var deferred = Q.defer();
            this.datastore.findOne({ id: item.getKey() }, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                var toSave = new DbItem(item);
                if (!document) {
                    _this.doAnInsert(toSave, deferred);
                    return;
                }
                _this.doAnUpdate(toSave, deferred);
            });
            return deferred.promise;
        };
        BaseNeDBRepositoryAsync.prototype.deleteImplementation = function (id) {
            var deferred = Q.defer();
            this.datastore.remove({ id: id.toString() }, function (err, document) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve();
            });
            return deferred.promise;
        };
        return BaseNeDBRepositoryAsync;
    }(BaseRepositoryAsync_1.BaseRepositoryAsync));
    exports.BaseNeDBRepositoryAsync = BaseNeDBRepositoryAsync;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLW5lZGJyZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyIsIi4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnkudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9Ub3VjaC50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlBc3luYy50cyIsIi4uL3NyYy9OZURCUmVwb3NpdG9yeS9CYXNlTmVEQlJlcG9zaXRvcnlBc3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lLR0E7UUFBQTtRQVlBLENBQUM7UUFWVSxnQkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE9BQWdCO1lBQ3ZDLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckQsTUFBTSxHQUFHLENBQUM7UUFDZCxDQUFDO1FBRU0sMkJBQWdCLEdBQXZCLFVBQXdCLElBQVksRUFBRSxPQUFnQjtZQUNsRCxJQUFJLEdBQUcsR0FB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