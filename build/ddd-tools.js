var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("CommonInterfaces/ITypeTracking", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("PersistableObject/IPersistable", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("CommonInterfaces/IEquatable", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("ValueObject/IValueObject", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("Entity/IKeyValueObject", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("ErrorManagement/BaseErrors", ["require", "exports"], function (require, exports) {
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
define("PersistableObject/Errors", ["require", "exports", "ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_1) {
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
define("Utils/SimpleGuid", ["require", "exports"], function (require, exports) {
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
define("ValueObject/BaseValueObject", ["require", "exports", "PersistableObject/BasePersistableObject"], function (require, exports, BasePersistableObject_1) {
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
define("ValueObjects/Guid", ["require", "exports", "Utils/SimpleGuid", "ValueObject/BaseValueObject"], function (require, exports, SimpleGuid_1, BaseValueObject_1) {
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
define("PersistableObject/TypeRegistry", ["require", "exports", "PersistableObject/Errors", "ValueObjects/Guid"], function (require, exports, Errors_1, Guid_1) {
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
define("PersistableObject/Factory", ["require", "exports", "PersistableObject/Errors", "PersistableObject/TypeRegistry"], function (require, exports, Errors_2, TypeRegistry_1) {
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
define("Serialization/SerializableDate", ["require", "exports"], function (require, exports) {
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
define("Serialization/SerializableRegExp", ["require", "exports"], function (require, exports) {
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
define("Serialization/Touch", ["require", "exports"], function (require, exports) {
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
define("Serialization/Serializer", ["require", "exports", "Serialization/SerializableDate", "Serialization/SerializableRegExp", "Serialization/Touch"], function (require, exports, SerializableDate_1, SerializableRegExp_1, Touch_1) {
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
define("Utils/SimpleIdentityMap", ["require", "exports"], function (require, exports) {
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
define("Serialization/Deserializer", ["require", "exports", "Utils/SimpleIdentityMap", "Serialization/Touch"], function (require, exports, SimpleIdentityMap_1, Touch_2) {
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
define("PersistableObject/BasePersistableObject", ["require", "exports", "PersistableObject/Errors", "PersistableObject/Factory", "Serialization/Serializer", "Serialization/Deserializer"], function (require, exports, Errors_3, Factory_1, Serializer_1, Deserializer_1) {
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
define("DomainEvents/IDomainEvent", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DomainEvents/IEventHandler", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DomainEvents/IDispatcher", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DomainEvents/DomainDispatcher", ["require", "exports"], function (require, exports) {
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
define("Entity/IEntity", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("Entity/BaseEntity", ["require", "exports", "PersistableObject/BasePersistableObject", "DomainEvents/DomainDispatcher"], function (require, exports, BasePersistableObject_2, DomainDispatcher_1) {
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
define("Aggregate/IAggregateRoot", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("Aggregate/BaseAggregateRoot", ["require", "exports", "Entity/BaseEntity"], function (require, exports, BaseEntity_1) {
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
define("DomainEvents/InProcessDispatcher", ["require", "exports", "Utils/SimpleGuid"], function (require, exports, SimpleGuid_2) {
    "use strict";
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
    exports.InProcessDispatcher = InProcessDispatcher;
});
define("Entity/BaseKeyValueObject", ["require", "exports", "ValueObject/BaseValueObject"], function (require, exports, BaseValueObject_2) {
    "use strict";
    var BaseKeyValueObject = (function (_super) {
        __extends(BaseKeyValueObject, _super);
        function BaseKeyValueObject() {
            _super.call(this);
        }
        return BaseKeyValueObject;
    }(BaseValueObject_2.BaseValueObject));
    exports.BaseKeyValueObject = BaseKeyValueObject;
});
define("Repository/Errors", ["require", "exports", "ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_2) {
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
define("Repository/IRepository", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("Repository/BaseRepository", ["require", "exports", "Repository/Errors", "PersistableObject/Factory"], function (require, exports, Errors_5, Factory_2) {
    "use strict";
    var BaseRepository = (function () {
        function BaseRepository(managedType) {
            this.managedType = managedType;
            if (managedType === "") {
                Errors_5.Errors.throw(Errors_5.Errors.ManagedTypeNotSupplied);
            }
        }
        BaseRepository.prototype.getById = function (id) {
            try {
                var retrieved = this.getByIdImplementation(id);
                if (retrieved.__typeName !== this.managedType) {
                    var reason = Errors_5.Errors.getErrorInstance(Errors_5.Errors.WrongTypeFromImplementation, "Expecting " + this.managedType + " but obtaine " + retrieved.__typeName + " from database.");
                }
                var toReturn = Factory_2.Factory.createObjectsFromState(retrieved);
                return toReturn;
            }
            catch (e) {
                Errors_5.Errors.throw(Errors_5.Errors.ItemNotFound, e.message);
            }
        };
        BaseRepository.prototype.save = function (item) {
            try {
                var key = item.getKey().toString();
            }
            catch (e) {
                Errors_5.Errors.throw(Errors_5.Errors.KeyNotSet);
            }
            var asItWas = null;
            try {
                asItWas = this.getById(item.getKey());
            }
            catch (e) {
            }
            if (!item.perfectlyMatch(asItWas)) {
                item.incrementRevisionId();
            }
            this.saveImplementation(item);
        };
        BaseRepository.prototype.delete = function (id) {
            this.deleteImplementation(id);
        };
        return BaseRepository;
    }());
    exports.BaseRepository = BaseRepository;
});
define("Repository/BaseInMemoryRepository", ["require", "exports", "Repository/Errors", "PersistableObject/Factory", "Repository/BaseRepository"], function (require, exports, Errors_6, Factory_3, BaseRepository_1) {
    "use strict";
    var BaseInMemoryRepository = (function (_super) {
        __extends(BaseInMemoryRepository, _super);
        function BaseInMemoryRepository(managedTypeName) {
            _super.call(this, managedTypeName);
            this.storage = {};
        }
        BaseInMemoryRepository.prototype.getByIdImplementation = function (id) {
            var key = id.toString();
            if (this.storage[key]) {
                var toReturn = Factory_3.Factory.createObjectsFromState(this.storage[key]);
                return toReturn;
            }
            Errors_6.Errors.throw(Errors_6.Errors.ItemNotFound);
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
    exports.BaseInMemoryRepository = BaseInMemoryRepository;
});
define("Repository/IRepositoryAsync", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("Repository/BaseRepositoryAsync", ["require", "exports", "Repository/Errors", "PersistableObject/Factory"], function (require, exports, Errors_7, Factory_4) {
    "use strict";
    var BaseRepositoryAsync = (function () {
        function BaseRepositoryAsync(managedType) {
            this.managedType = managedType;
            if (managedType === "") {
                Errors_7.Errors.throw(Errors_7.Errors.ManagedTypeNotSupplied);
            }
        }
        BaseRepositoryAsync.prototype.getById = function (id) {
            var _this = this;
            var deferred = Q.defer();
            this.getByIdImplementation(id).then(function (value) {
                if (value.__typeName != _this.managedType) {
                    var reason = Errors_7.Errors.getErrorInstance(Errors_7.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtained " + value.__typeName + " from database.");
                    deferred.reject(reason);
                    return;
                }
                var toReturn = (Factory_4.Factory.createObjectsFromState(value));
                deferred.resolve(toReturn);
            }, function (error) {
                var reason = _this.buildError(error, Errors_7.Errors.ItemNotFound);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.doSave = function (item, deferred) {
            var _this = this;
            this.saveImplementation(item).then(function () {
                deferred.resolve();
            }, function (error) {
                var reason = _this.buildError(error, Errors_7.Errors.ErrorSavingItem);
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
                if (error instanceof Error && error.name == Errors_7.Errors.ItemNotFound) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    return;
                }
                var reason = _this.buildError(error, Errors_7.Errors.ErrorReadingItem);
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.delete = function (id) {
            var _this = this;
            var deferred = Q.defer();
            this.deleteImplementation(id).then(function () { deferred.resolve(); }, function (error) {
                var reason = _this.buildError(error, Errors_7.Errors.ErrorDeletingItem);
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
                reason = Errors_7.Errors.getErrorInstance(errorIfErrorFromCallIsNotError, JSON.stringify(errorFromCall));
            }
            return reason;
        };
        return BaseRepositoryAsync;
    }());
    exports.BaseRepositoryAsync = BaseRepositoryAsync;
});
define("UnitOfWork/Events", ["require", "exports"], function (require, exports) {
    "use strict";
    var Events = (function () {
        function Events() {
        }
        Events.__nameSpace = "DDDTools.UnitOfWork";
        Events.ObjectSavedEvent = Events.__nameSpace + ".ObjectSavedEvent";
        Events.ObjectDeletedEvent = Events.__nameSpace + ".ObjectDeletedEvent";
        Events.ObjectRetrievedEvent = Events.__nameSpace + ".ObjectRetrievedEvent";
        return Events;
    }());
    exports.Events = Events;
});
define("UnitOfWork/IdentityMap", ["require", "exports"], function (require, exports) {
    "use strict";
    (function (ItemStatus) {
        ItemStatus[ItemStatus["New"] = 0] = "New";
        ItemStatus[ItemStatus["Modified"] = 1] = "Modified";
        ItemStatus[ItemStatus["Saved"] = 2] = "Saved";
        ItemStatus[ItemStatus["Deleted"] = 3] = "Deleted";
    })(exports.ItemStatus || (exports.ItemStatus = {}));
    var ItemStatus = exports.ItemStatus;
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
    exports.IdentityMap = IdentityMap;
});
define("UnitOfWork/IUnitOfWork", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("UnitOfWork/ObjectDeletedEvent", ["require", "exports", "ValueObject/BaseValueObject", "UnitOfWork/Events"], function (require, exports, BaseValueObject_3, Events_1) {
    "use strict";
    var ObjectDeletedEvent = (function (_super) {
        __extends(ObjectDeletedEvent, _super);
        function ObjectDeletedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_1.Events.ObjectDeletedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectDeletedEvent;
    }(BaseValueObject_3.BaseValueObject));
    exports.ObjectDeletedEvent = ObjectDeletedEvent;
});
define("UnitOfWork/ObjectRetrievedEvent", ["require", "exports", "ValueObject/BaseValueObject", "UnitOfWork/Events"], function (require, exports, BaseValueObject_4, Events_2) {
    "use strict";
    var ObjectRetrievedEvent = (function (_super) {
        __extends(ObjectRetrievedEvent, _super);
        function ObjectRetrievedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_2.Events.ObjectRetrievedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectRetrievedEvent;
    }(BaseValueObject_4.BaseValueObject));
    exports.ObjectRetrievedEvent = ObjectRetrievedEvent;
});
define("UnitOfWork/ObjectSavedEvent", ["require", "exports", "ValueObject/BaseValueObject", "UnitOfWork/Events"], function (require, exports, BaseValueObject_5, Events_3) {
    "use strict";
    var ObjectSavedEvent = (function (_super) {
        __extends(ObjectSavedEvent, _super);
        function ObjectSavedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_3.Events.ObjectSavedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectSavedEvent;
    }(BaseValueObject_5.BaseValueObject));
    exports.ObjectSavedEvent = ObjectSavedEvent;
});
define("UnitOfWork/UnitOfWorkErrors", ["require", "exports", "ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_3) {
    "use strict";
    var UnitOfWorkErrors = (function (_super) {
        __extends(UnitOfWorkErrors, _super);
        function UnitOfWorkErrors() {
            _super.apply(this, arguments);
        }
        UnitOfWorkErrors.ItemMarkedAsDeleted = "This item was marked as deleted in this UnitOfWork, and cannot be retrieved.";
        return UnitOfWorkErrors;
    }(BaseErrors_3.BaseErrors));
    exports.UnitOfWorkErrors = UnitOfWorkErrors;
});
define("UnitOfWork/UnitOfWork", ["require", "exports", "DomainEvents/InProcessDispatcher", "UnitOfWork/IdentityMap", "UnitOfWork/ObjectDeletedEvent", "UnitOfWork/ObjectRetrievedEvent", "UnitOfWork/ObjectSavedEvent", "UnitOfWork/UnitOfWorkErrors"], function (require, exports, InProcessDispatcher_1, IdentityMap_1, ObjectDeletedEvent_1, ObjectRetrievedEvent_1, ObjectSavedEvent_1, UnitOfWorkErrors_1) {
    "use strict";
    var UnitOfWork = (function () {
        function UnitOfWork(repository) {
            this.repository = repository;
            this.idMap = new IdentityMap_1.IdentityMap();
            this.dispatcher = new InProcessDispatcher_1.InProcessDispatcher();
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
    exports.UnitOfWork = UnitOfWork;
});
define("ValueObjects/CommonVOLibrary", ["require", "exports"], function (require, exports) {
    "use strict";
    var CommonVOLibrary = (function () {
        function CommonVOLibrary() {
        }
        return CommonVOLibrary;
    }());
    exports.CommonVOLibrary = CommonVOLibrary;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyIsIi4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnkudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9Ub3VjaC50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHMiLCIuLi9zcmMvREREVG9vbHMvRW50aXR5L0Jhc2VLZXlWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnkudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9CYXNlSW5NZW1vcnlSZXBvc2l0b3J5LnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlBc3luYy50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9FdmVudHMudHMiLCIuLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9JZGVudGl0eU1hcC50cyIsIi4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0lVbml0T2ZXb3JrLnRzIiwiLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0RGVsZXRlZEV2ZW50LnRzIiwiLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0UmV0cmlldmVkRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RTYXZlZEV2ZW50LnRzIiwiLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9ycy50cyIsIi4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHMiLCIuLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3RzL0NvbW1vblZPTGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lLR0E7UUFBQTtRQVlBLENBQUM7UUFWVSxnQkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE9BQWdCO1lBQ3ZDLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckQsTUFBTSxHQUFHLENBQUM7UUFDZCxDQUFDO1FBRU0sMkJBQWdCLEdBQXZCLFVBQXdCLElBQVksRUFBRSxPQUFnQjtZQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7WUFDckMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFDTCxpQkFBQztJQUFELENBQUMsQUFaRCxJQVlDO0lBWnFCLGtCQUFVLGFBWS9CLENBQUE7Ozs7SUNiRDtRQUE0QiwwQkFBVTtRQUF0QztZQUE0Qiw4QkFBVTtRQWtCdEMsQ0FBQztRQWZVLHlCQUFrQixHQUFHLHdCQUF3QixDQUFDO1FBQzlDLHFCQUFjLEdBQUcsa0JBQWtCLENBQUM7UUFDcEMsd0JBQWlCLEdBQUcscUJB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aUJBQUM7SUFBRCxDQUFDLEFBdEdELElBc0dDO0lBdEdZLGtCQUFVLGFBc0d0QixDQUFBOzs7O0lDdkhEO1FBQUE7UUFFQSxDQUFDO1FBQUQsc0JBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUZZLHVCQUFlLGtCQUUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmFtZXNwYWNlIERERFRvb2xzLkNvbW1vbkludGVyZmFjZXMge1xyXG5leHBvcnQgaW50ZXJmYWNlIElUeXBlVHJhY2tpbmcge1xyXG4gICAgX190eXBlTmFtZTogc3RyaW5nO1xyXG4gICAgX190eXBlVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgX19vYmplY3RJbnN0YW5jZUlkPzogc3RyaW5nO1xyXG59XHJcbi8vIH0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGRlZmF1bHQgYmVoYXZpb3IgYW5kIGludGVyZmFjZXMgZm9yIGEgUGVyc2lzdGFibGUgT2JqZWN0LCBhbiBvYmplY3QgdGhhdCBoYXMgYSBzdGF0ZSB0aGF0IHdpbGwgcHJvYmFibHkgYmUgcGVyc2lzdGVkLiBJdCBnaXZlcyBzdXBwb3J0IHRvIFwidXBncmFkZVwiIHBlcnNpc3RlZCBvYmplY3RzLlxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVyc2lzdGFibGUgZXh0ZW5kcyBJVHlwZVRyYWNraW5nIHtcclxuXHRnZXRVcGdyYWRlZEluc3RhbmNlPyhmcm9tSW5zdGFuY2U6IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZTtcclxuXHRnZXRTdGF0ZSgpOiBhbnk7XHJcblx0c2V0U3RhdGUoc3RhdGU6IGFueSk7XHJcbn1cclxuLy8gfSIsIi8vIG5hbWVzcGFjZSBERERUb29scy5Db21tb25JbnRlcmZhY2VzIHtcclxuXHRleHBvcnQgaW50ZXJmYWNlIElFcXVhdGFibGU8VD4ge1xyXG5cdFx0ZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuO1xyXG5cdH1cclxuLy8gfSIsIi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgVmFsdWVPYmplY3QgcGF0dGVybi5cclxuICovXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0lFcXVhdGFibGV9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSUVxdWF0YWJsZTxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbn1cclxuLy8gfSIsImltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbi8vICAgIGltcG9ydCBJVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5JVmFsdWVPYmplY3Q7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElLZXlWYWx1ZU9iamVjdDxUPiBleHRlbmRzIElWYWx1ZU9iamVjdDxUPiB7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuLy8gfSIsIi8qKlxyXG4gKiBNaW5pbWFsIEVycm9yIGhhbmRsaW5nIGJhc2UgYmVoYXZpb3JzIGZvciB0aGUgZG9tYWluIG1vZGVsLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgIHN0YXRpYyB0aHJvdyhuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgZXJyID0gQmFzZUVycm9ycy5nZXRFcnJvckluc3RhbmNlKG5hbWUsIG1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RXJyb3JJbnN0YW5jZShuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpOiBFcnJvciB7XHJcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihtZXNzYWdlIHx8IG5hbWUpO1xyXG4gICAgICAgIGVyci5uYW1lID0gbmFtZTtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICAvLyBUaHJvd24gYnkgcGVyc2lzdGFibGUgb2JqZWN0c1xyXG4gICAgc3RhdGljIFN0YXRlSXNOb3RBbk9iamVjdCA9IFwiU3RhdGUgaXMgbm90IGFuIE9iamVjdFwiO1xyXG4gICAgc3RhdGljIFR5cGVOYW1lTm90U2V0ID0gXCJUeXBlTmFtZSBub3Qgc2V0XCI7XHJcbiAgICBzdGF0aWMgVHlwZVZlcnNpb25Ob3RTZXQgPSBcIlR5cGVWZXJzaW9uIG5vdCBzZXRcIjtcclxuICAgIHN0YXRpYyBVbmFibGVUb0luc3RhbnRpYXRlVHlwZSA9IFwiVW5hYmxlIHRvIEluc3RhbnRpYXRlIFR5cGVcIjtcclxuICAgIHN0YXRpYyBUeXBlUmVnaXN0cnlOb3RTZXQgPSBcIlR5cGVSZWdpc3RyeSBub3Qgc2V0XCI7XHJcblxyXG4gICAgLy8gVGhyb3duIGJ5IHRoZSBGYWN0b3J5L1R5cGVSZWdpc3RyeVxyXG4gICAgc3RhdGljIFR5cGVOb3RSZWdpc3RlcmVkID0gXCJUeXBlIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhlIFR5cGVSZWdpc3RyeVwiO1xyXG4gICAgc3RhdGljIENhbm5vdFJlZ2lzdGVyVW5kZWZpbmVkID0gXCJ0eXBlUHJvdG90eXBlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFwiXHJcbiAgICBcclxuICAgIC8vIFRocm93biBieSB0aGUgVXBncmFkZXJcclxuICAgIHN0YXRpYyBUeXBlTm90SW5zdGF0aWFibGUgPSBcIlR5cGUgaXMgbm90IGluc3RhbnRpYWJsZVwiO1xyXG4gICAgc3RhdGljIFVwZ3JhZGVQYXRoTm90Rm91bmQgPSBcIlVwZ3JhZGUgUGF0aCBub3QgRm91bmRcIjtcclxuICAgIHN0YXRpYyBJbmNvcnJlY3RWZXJzaW9uRm9ybWF0ID0gXCJJbmNvcnJlY3QgVmVyc2lvbiBGb3JtYXRcIjtcclxuICAgIHN0YXRpYyBXcm9uZ1ZlcnNpb25JblVwZ3JhZGVkSW5zdGFuY2UgPSBcIldyb25nIFZlcnNpb24gaW4gVXBncmFkZWQgSW5zdGFuY2VcIjtcclxufSIsIi8qKlxyXG4gKiBTb21lIHNpbXBsZSBjbGFzc2VzIHVzZWQgaW4gZGlmZmVyZW50IG1vZHVsZXMuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUd1aWQge1xyXG5cdC8vIEhlbHBlciBmb3IgZ3VpZCBnZW5lcmF0aW9uLlxyXG5cdHByaXZhdGUgc3RhdGljIGlzVmFsaWQoZ3VpZDogc3RyaW5nKSB7XHJcblx0XHR2YXIgZ3VpZFJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChcIl5beyhdP1swLTlBLUZhLWZdezh9Wy1dPyhbMC05QS1GYS1mXXs0fVstXT8pezN9WzAtOUEtRmEtZl17MTJ9Wyl9XT8kXCIpO1xyXG5cdFx0cmV0dXJuIGd1aWRSZWdleHAudGVzdChndWlkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIHM0KCkge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcblx0XHRcdC50b1N0cmluZygxNilcclxuXHRcdFx0LnN1YnN0cmluZygxKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcclxuXHRcdHZhciBuZXdTaW1wbGVHdWlkID0gXCJ7XCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgK1xyXG5cdFx0XHRTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwifVwiO1xyXG5cclxuXHRcdGlmIChTaW1wbGVHdWlkLmlzVmFsaWQobmV3U2ltcGxlR3VpZCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ld1NpbXBsZUd1aWQ7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaG91bGQgTmV2ZXIgSGFwcGVuISBUaGUgZ2VuZXJhdGVkIGd1aWQgaXMgbm90IHZhbGlkIVwiKVxyXG5cdH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJVmFsdWVPYmplY3R9IGZyb20gXCIuL0lWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVmFsdWVPYmplY3Q8VD5cclxuXHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdGltcGxlbWVudHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbiB7XHJcblx0XHQvLyBQZXIgb2duaSBwcm9wcmlldMOgIGRlbGwnSVRFTSB2ZXJpZmljbyBsJ3VndWFnbGlhbnphIGNvbiBsJ2lzdGFuemEgYXR0dWFsZVxyXG5cdFx0dmFyIGZvcmVpZ24gPSBKU09OLnN0cmluZ2lmeShpdGVtKTtcclxuXHRcdHZhciBsb2NhbCA9IEpTT04uc3RyaW5naWZ5KHRoaXMpO1xyXG5cclxuXHRcdHJldHVybiBmb3JlaWduID09PSBsb2NhbDtcclxuXHR9XHJcbn1cclxuLy8gfSIsIi8qKlxyXG4gKiBDb2xsZWN0aW9uIG9mIGdlbmVyYWwgYW5kIGNvbW1vbmx5IHVzZWQgVmFsdWVPYmplY3RzLiBcclxuICovXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdHMge1xyXG5cclxuaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgR3VpZCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxHdWlkPiBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxHdWlkPiB7XHJcblxyXG4gICAgcHVibGljIF9fdHlwZU5hbWUgPSBcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCI7XHJcbiAgICBwdWJsaWMgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBwcml2YXRlIGd1aWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihndWlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKGd1aWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkID0gZ3VpZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpOiBHdWlkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEd1aWQoU2ltcGxlR3VpZC5nZW5lcmF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYWx1ZU9iamVjdHMgdXNlZCBhcyBrZXkgTVVTVCBpbXBsZW1lbnQgYSB0b1N0cmluZyBtZXRob2QgdGhhdCByZXR1cm5zIHRoZSBrZXkgYXMgc3RyaW5nLlxyXG4gICAgcHVibGljIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmd1aWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlZ2lzdHJ5OiB7IFt0eXBlTmFtZTogc3RyaW5nXTogeyBbdHlwZVZlcnNpb246IHN0cmluZ106IG5ldyAoKSA9PiBJUGVyc2lzdGFibGUgfSB9ID0ge307XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsYXRlc3RWZXJzaW9uczogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge31cclxuICAgIHByaXZhdGUgc3RhdGljIGxpYnJhcnlSZWdpc3RlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbHdheXMgUmVnaXN0ZXIgTGlicmFyeSBWYWx1ZSBPYmplY3RzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RlclZhbHVlT2JqZWN0c0xpYnJhcnkoKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIHNUaGlzLnJlZ2lzdGVyVHlwZShcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCIsIFwidjFcIiwgPGFueT5HdWlkKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogbmV3ICgpID0+IElQZXJzaXN0YWJsZSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICBpZiAoIXR5cGVQcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5DYW5ub3RSZWdpc3RlclVuZGVmaW5lZCwgXCJ0eXBlUHJvdG90eXBlIHN1cHBsaWVkIGZvciBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIG51bGwgb3IgdW5kZWZpbmVkIVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc1RoaXMudmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gPSB0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSB8fCB7fTtcclxuICAgICAgICBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV1bdHlwZVZlcnNpb25dID0gdHlwZVByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgc1RoaXMudXBkYXRlTGF0ZXN0VmVyc2lvbnModHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgaWYgKCFzVGhpcy5saWJyYXJ5UmVnaXN0ZXJlZCkge1xyXG4gICAgICAgICAgICBzVGhpcy5saWJyYXJ5UmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNUaGlzLnJlZ2lzdGVyVmFsdWVPYmplY3RzTGlicmFyeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB1cGRhdGVMYXRlc3RWZXJzaW9ucyh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIGlmICghc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZWZlcmVuY2UgPSBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV07XHJcbiAgICAgICAgaWYgKHNUaGlzLmlzVmVyc2lvbkdyZWF0ZXIodHlwZVZlcnNpb24sIHJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGlzVmVyc2lvbkdyZWF0ZXIodlN1YmplY3Q6IHN0cmluZywgdlJlZmVyZW5jZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIHZhciB2UzogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlN1YmplY3QpO1xyXG4gICAgICAgIHZhciB2UjogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlJlZmVyZW5jZSk7XHJcbiAgICAgICAgcmV0dXJuIHZTID4gdlI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdFZlcnNpb25OdW1iZXIodHlwZVZlcnNpb246IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIHZhciB2ZXJzaW9uOiBzdHJpbmcgPSB0eXBlVmVyc2lvbi5yZXBsYWNlKFwidlwiLCBcIlwiKTtcclxuICAgICAgICB2YXIgYXNOdW1iZXIgPSBOdW1iZXIodmVyc2lvbik7XHJcbiAgICAgICAgcmV0dXJuIGFzTnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VHlwZUluc3RhbmNlPFQgZXh0ZW5kcyBJUGVyc2lzdGFibGU+KHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIGlmICghdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgdHlwZVZlcnNpb24gPSBzVGhpcy5nZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5vdFJlZ2lzdGVyZWQsIFwiVHlwZSBcIiArIHR5cGVOYW1lICsgXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIFR5cGVSZWdpc3RyeS5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIG9mIFR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9JbnN0YW50aWF0ZSA9IHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl07XHJcbiAgICAgICAgdmFyIHRvUmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0b1JldHVybiA9IDxUPihuZXcgKDxhbnk+dG9JbnN0YW50aWF0ZSkoKSk7XHJcbiAgICAgICAgICAgIC8vdG9SZXR1cm4uX190eXBlTmFtZSA9IHR5cGVOYW1lO1xyXG4gICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZVZlcnNpb24gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcnVlIGlmIHNwZWNpZmllZCB2ZXJzaW9uIGlzIHRoZSBsYXRlc3QgZm9yIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIHJldHVybiBzVGhpcy5nZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZSkgPT09IHR5cGVWZXJzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBubyB2ZXJzaW9uIHR5cGUgaXMgZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSB8fCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICBpZiAoIXZlcnNpb25SZS50ZXN0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAvLyBWZXJzaW9uIG11c3QgYmUgaW4gdGhlIGZvcm0gdk4gd2hlcmUgdiBpcyBhIGNvbnN0YW50IGFuZCBOIGlzIGFuIGludGVnZXIuXHJcbiAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICBpZiAoIXNUaGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgLy8gVE9ETyBUaHJvdyB0aGUgY29ycmVjdCBleGNlcHRpb247XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQsIFwiU3BlY2lmaWVkIHZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgMTtcclxuICAgICAgICB2YXIgbmV4dFZlcnNpb24gPSBcInZcIiArIHZlcnNpb247XHJcbiAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge1R5cGVSZWdpc3RyeX0gZnJvbSBcIi4vVHlwZVJlZ2lzdHJ5XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuLyoqXHJcbiAqIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeSBpcyBhbiBoZWxwZXIgY2xhc3MgdG8gY3JlYXRlIGFuZCByZWNvbnN0aXR1dGUgc3RhdGZldWwgb2JqZWN0cy5cclxuICogSXQgZ3VyYW50ZWVzIHRoYXQgYSBzdGF0ZnVsIG9iamVjdCBpcyBhbHdheXMgY3JlYXRlZCBvciByZWNvbnN0aXR1dGVkIHRvIGl0cyBsYXRlc3QgdmVyc2lvbi4gIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyB0eXBlUmVnaXN0cnk6IFR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBuZXcgSVBlcnNpc3RhYmxlIHR5cGUgd2l0aCB0aGUgRmFjdG9yeVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nLCB0eXBlUHJvdG90eXBlOiBuZXcgKCkgPT4gSVBlcnNpc3RhYmxlKSB7XHJcbiAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZSh0eXBlTmFtZSwgdHlwZVZlcnNpb24sIHR5cGVQcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuIElmIHR5cGVWZXJzaW9uIGlzIG5vdCBzdXBwbGllZCwgbGF0ZXN0IGF2YWlsYWJsZSB2ZXJzaW9uIGlzIHJldHVybmVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZyk6IFQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghRmFjdG9yeS50eXBlUmVnaXN0cnkpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlUmVnaXN0cnlOb3RTZXQsIFwiUGxlYXNlIGRlZmluZSBhIHR5cGUgcmVnaXN0cnkgYW5kIHNldCBpdCBvbiB0aGUgRmFjdG9yeSBjYWxsaW5nICdzZXRUeXBlUmVnaXN0cnknIG1ldGhvZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFR5cGVSZWdpc3RyeS5nZXRUeXBlSW5zdGFuY2U8VD4odHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiAodHlwZVZlcnNpb24pIHtcclxuICAgICAgICAvLyAgICAgdmFyIHR5cGVUb0luc3RhdGlhdGUgPSBGYWN0b3J5LmNvbXB1dGVGdWxseVF1YWxpZmllZFR5cGVOYW1lKHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0b1JldHVybiA9IDxUPmV2YWwoXCJuZXcgXCIgKyB0eXBlVG9JbnN0YXRpYXRlICsgXCIoKVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gVGhpcyBmYWlsdXJlIGlzIGV4cGVjdGVkIGlmIHdlIGFyZSBhc2tpbmcgZm9yIHRoZSBsYXRlc3QgdmVyc2lvbiBhdmFpbGFibGVcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRvUmV0dXJuLl9fdHlwZVZlcnNpb24gIT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAvLyAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAvLyAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZU5hbWUgKyBcIigpXCIpO1xyXG4gICAgICAgIC8vIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gb2JqZWN0IGluc3RhbmNlIGZyb20gaXRzIHN0YXRlLiBXaWxsIGFsd2F5cyByZXR1cm4gdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIG9mIHRoZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVPYmplY3RzRnJvbVN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICd1bmRlZmluZWQnXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICdudWxsJ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChGYWN0b3J5LmlzUGVyc2lzdGFibGVPYmplY3Qoc3RhdGUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBlcnNpc3RhYmxlOiBJUGVyc2lzdGFibGU7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyc2lzdGFibGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShzdGF0ZS5fX3R5cGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIHBlcnNpc3RhYmxlLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgd2FycmFudGllcyB0aGF0IGEgdHlwZSBpcyBhbHdheXMgcmV0dXJuZWQgYXQgaXRzIGxhdGVzdCB2ZXJzaW9uLlxyXG4gICAgICAgICAgICAgICAgdmFyIHVwZ3JhZGVkUGVyc2lzdGFibGUgPSBVcGdyYWRlci51cGdyYWRlKHBlcnNpc3RhYmxlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGdyYWRlZFBlcnNpc3RhYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIG5vdCBhIHBlcnNpc3RhYmxlT2JqZWN0IGNhbiBiZSBhbiBBcnJheSBvciBhbiBPYmplY3QgYW5kIG11c3QgYmUgcmVjb25zdGl0dXRlZFxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IGFueSA9IEFycmF5LmlzQXJyYXkoc3RhdGUpID8gW10gOiB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY3VycmVudEVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzRWxlbWVudCA9IHN0YXRlW2N1cnJlbnRFbGVtZW50XTtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuW2N1cnJlbnRFbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBcIlByaW1pdGl2ZVwiXCIgdHlwZXMgYXJlIHJldHVybmVkIGFzIHRoZXkgYXJlXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBcIklQZXJzaXN0YWJsZVwiIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNQZXJzaXN0YWJsZU9iamVjdChvYmplY3RUb1Rlc3Q6IGFueSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdFRvVGVzdCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBlcnNpc3RhYmxlID0gPElQZXJzaXN0YWJsZT5vYmplY3RUb1Rlc3Q7XHJcbiAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVOYW1lIHx8IHBlcnNpc3RhYmxlLl9fdHlwZU5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uIHx8IHBlcnNpc3RhYmxlLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgYSB0eXBlIGNhbiBiZSBpbnN0YXRpYXRlZCAoYXQgaXRzIGxhdGVzdCB2ZXJzaW9uKS4gXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGlzVHlwZUluc3RhbnRpYWJsZSh0eXBlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHRtcFR5cGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgXCJGdWxseSBRdWFsaWZpZWQgVHlwZU5hbWVcIiBvZiB0eXBlIFwidHlwZU5hbWVcIiBmb3IgdGhlIHN1cHBsaWVkIFwidmVyc2lvblwiLlxyXG4gICAgICogRlFUTiBpcyBjb21wdXRlZCBmcm9tIHR5cGVOYW1lIGFkZGluZyB0aGUgdmVyc2lvbiBzdHJpbmcgaW4gdGhlIHJpZ2h0IHBsYWNlLlxyXG4gICAgICogRXhhbXBsZVxyXG4gICAgICogdHlwZU5hbWU6IEFwcGxpY2F0aW9uLk1vZGVsLk9mZmVydGFcclxuICAgICAqIHZlcnNpb246IHYyXHJcbiAgICAgKiByZXR1cm46IEFwcGxpY2F0aW9uLk1vZGVsLnYyLk9mZmVydGFcclxuICAgICAqL1xyXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgY29tcHV0ZUZ1bGx5UXVhbGlmaWVkVHlwZU5hbWUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgdmFyIGZxdG5QYXJ0c0FycmF5ID0gdHlwZU5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gICAgIHZhciBjbGFzc05hbWUgPSBmcXRuUGFydHNBcnJheS5wb3AoKTtcclxuICAgIC8vICAgICBmcXRuUGFydHNBcnJheS5wdXNoKHR5cGVWZXJzaW9uKTtcclxuICAgIC8vICAgICBmcXRuUGFydHNBcnJheS5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAvLyAgICAgdmFyIG5ld0ZxdG4gPSBmcXRuUGFydHNBcnJheS5qb2luKFwiLlwiKTtcclxuICAgIC8vICAgICByZXR1cm4gbmV3RnF0bjtcclxuICAgIC8vIH07XHJcblxyXG59XHJcbi8vIH1cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBncmFkZXIgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGF1dG9tYXRlIHRoZSBcInVwZ3JhZGUgcHJvY2Vzc1wiIG9mIGFuIG9iamVjdCdzIHN0YXRlLlxyXG4gKiBUaGUgVXBncmFkZXIgaXMgZm91bmQgb24gdGhlc2UgcHJpbmNpcGxlczpcclxuICogICogVGhlIGxhdGVzdCB2ZXJzaW9uIEZRVE4gbXVzdCBtYXRjaCB0aGUgb25lIHNwZWNpZmllZCBieSB0aGUgcHJvcGVydHkgX190eXBlTmFtZSwgd2hpY2ggaXMgaW4gdGhlIGZvcm0gbmFtZXNwYWNlLm9iamVjdE5hbWUuXHJcbiAqICAqIE9sZGVyIHZlcnNpb25zIG9mIGEgUGVyc2lzdGFibGVPYmplY3QgTVVTVCBoYXZlIGEgRlFUTiBpbiB0aGUgZm9ybSBuYW1lc3BhY2UuPHZlcnNpb24+Lm9iamVjdE5hbWUuXHJcbiAqICAqIF9fdHlwZVZlcnNpb24gTVVTVCBiZSBzcGVjaWZpZWQgYXMgdjx2ZXJzaW9uTnVtYmVyPiB3aGVyZSB2ZXJzaW9uIGlzIGFuIGludGVnZXIuXHJcbiAqICAqIEFsbCBvYmplY3QncyB2ZXJzaW9ucyAoZXhjbHVkaW5nIHYxKSBNVVNUIHByb3ZpZGUgYW4gZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QgdGhhdCBrbm93cyBob3cgdG8gbW9kaWZ5IHN0YXRlIHRvIGdvIGZyb20gXHJcbiAqICAgIHZlcnNpb24gdjxuIC0gMT4gdG8gdjxuPiwgd2hlcmUgbiBpcyB0aGUgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGdldFVwZ3JhZGVkSW5zdGFuY2UgbWV0aG9kLiAgIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVwZ3JhZGVyIHtcclxuXHJcbiAgICAvLyBDb250YWlucyB0aGUgbGF0ZXN0IHZlcnNpb24gcG9zc2libGUgZm9yIGVhY2ggdHlwZS4gXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsYXRlc3RUeXBlVmVyc2lvbk1hcDogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAvLyBDb250YWlucyBmbGFncyB0byBkZXRlcm1pbmUgaWYgbGF0c3RUeXBlVmVyc2lvbk1hcCBmb3IgYSBzcGVjaWZpYyB0eXBlIGhhcyBiZWVuIGNhbGN1bGF0ZWRcclxuICAgIHByaXZhdGUgc3RhdGljIGlzVmVyc2lvbk1hcEJ1aWx0OiB7IFt0eXBlTmFtZTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB0bXBJbnN0YW5jZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgVXBncmFkZXIubGF0ZXN0VHlwZVZlcnNpb25NYXBbdHlwZU5hbWVdID0gdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYXRlc3QgcG9zc2libGUgdmVyc2lvbiBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIGlzIFwiICsgdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RJbnN0YXRpYWJsZSwgXCJUaGUgdHlwZSBcIiArIHR5cGVOYW1lICsgXCIgY2Fubm90IGJlIGluc3RhbnRpYXRlZCwgc28gaXQgaXMgaW1wb3NzaWJsZSB0byBpZGVudGlmeSB0aGUgbGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gTG9va3MgZm9yIHRoZSBsYXRlc3QgdmVyc2lvbiwgaWYgbm90IGFscmVhZHkgZG9uZS5cclxuICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICBVcGdyYWRlci5idWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gc3VwcGxpZWQgZG9lc24ndCBtYXRjaCB0aGUgbGF0ZXN0IHZlcnNpb24gaW4gdGhlIG1hcCwgdGhlIGluc3RhbmNlIG11c3QgYmUgdXBncmFkZWQuXHJcbiAgICAgICAgaWYgKFVwZ3JhZGVyLmxhdGVzdFR5cGVWZXJzaW9uTWFwW3R5cGVOYW1lXSAhPT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZ3JhZGUoaW5zdGFuY2VGcm9tOiBJUGVyc2lzdGFibGUpOiBJUGVyc2lzdGFibGUge1xyXG4gICAgICAgIC8vIElmIG9iamVjdCBkb2Vzbid0IG5lZWQgdG8gdXBncmFkZSwgdGhlbiB3ZSBhcmUgZG9uZSFcclxuICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzTGF0ZXN0VmVyc2lvbkZvclR5cGUoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIGluc3RhbmNlRnJvbS5fX3R5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VGcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV4dFZlcnNpb24gPSBVcGdyYWRlci5jb21wdXRlTmV4dFZlcnNpb24oaW5zdGFuY2VGcm9tLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgIHZhciB1cGdyYWRlckluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIG5leHRWZXJzaW9uKTtcclxuICAgICAgICB2YXIgdXBncmFkZWQgPSB1cGdyYWRlckluc3RhbmNlLmdldFVwZ3JhZGVkSW5zdGFuY2UoaW5zdGFuY2VGcm9tKTtcclxuICAgICAgICAvLyBWZXJpZmllcyB0aGF0IHZlcnNpb24gaXMgZWZmZWN0aXZlbHkgdXBncmFkZWRcclxuICAgICAgICBpZiAodXBncmFkZWQuX190eXBlVmVyc2lvbiAhPSBuZXh0VmVyc2lvbikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLldyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSwgXCJUaGUgZXhwZWN0ZWQgdmVyc2lvbiBvZiB0aGUgdXBncmFkZWQgaW5zdGFuY2Ugd2FzIFwiICsgbmV4dFZlcnNpb24gKyBcIiB3aGlsZSB3YXMgZm91bmQgdG8gYmUgXCIgKyB1cGdyYWRlckluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVXBncmFkZXIudXBncmFkZSh1cGdyYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlTmV4dFZlcnNpb24odHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSBOdW1iZXIodHlwZVZlcnNpb24uc3Vic3RyKDEpKTtcclxuICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgIHJldHVybiBuZXh0VmVyc2lvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZURhdGUgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiRGF0ZVwiO1xyXG4gICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgX19kYXRlQXNTdHJpbmc6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fX2RhdGVBc1N0cmluZyA9IGRhdGUudG9JU09TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLl9fZGF0ZUFzU3RyaW5nKTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZVJlZ0V4cCBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJSZWdFeHBcIjtcclxuICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgIF9fcmVndWxhckV4cHJlc3Npb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWdFeHA6IFJlZ0V4cCkge1xyXG4gICAgICAgIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiA9IHJlZ0V4cC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlZ0V4cCgpOiBSZWdFeHAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbik7XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdG91Y2hJbmRleCA9IDE7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUHJlcGFyZXMgdGhlIGlkIGdlbmVyYXRvciBmb3IgYSBuZXcgcnVuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRUb3VjaEluZGV4KCkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFRvdWNoO1xyXG4gICAgICAgIHNUaGlzLnRvdWNoSW5kZXggPSAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXROZXdJbmRleCgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIHJldHVybiBTaW1wbGVHdWlkLmdlbmVyYXRlKClcclxuICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICBzVGhpcy50b3VjaEluZGV4Kys7XHJcbiAgICAgICAgcmV0dXJuIChzVGhpcy50b3VjaEluZGV4KysgLSAxKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIGFkZHMgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IHRvIGFuIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHRvdWNoKG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVG91Y2hcclxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICB2YXIgbmV3SWQgPSBzVGhpcy5nZXROZXdJbmRleCgpO1xyXG4gICAgICAgICAgICBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkID0gbmV3SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVtb3ZlcyB0aGUgX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IGZyb20gYW4gb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdW50b3VjaChvYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICBpZiAoY2FzdGVkLl9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gfSIsImltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyBhbiBvYmplY3QgdG8gYSBKU09OIHN0cmluZywga2VlcGVpbmcgdHJhY2sgb2YgdGhlIGluc3RhbmNlcyBvZiB0aGUgb2JqZWN0cyBzZXJpYWxpemVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKHRvU2VyaWFsaXplOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciB0b1JldHVybjtcclxuICAgICAgICBUb3VjaC5yZXNldFRvdWNoSW5kZXgoKTtcclxuICAgICAgICB0b1NlcmlhbGl6ZSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRvUmV0dXJuID0gSlNPTi5zdHJpbmdpZnkodG9TZXJpYWxpemUsIFNlcmlhbGl6ZXIuY3VzdG9tU2VyaWFsaXplcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgU2VyaWFsaXplci5wb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbih0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgIFNlcmlhbGl6ZXIudW50b3VjaFNvdXJjZU9iamVjdCh0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByZXByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBEYXRlIG9iamVjdHMgd2l0aCBzb21ldGhpbmcgZGlmZmVyZW50Li4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdGYWtlRGF0ZSA9IG5ldyBTZXJpYWxpemFibGVEYXRlKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlRGF0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50IGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZVJlZ0V4cCA9IG5ldyBTZXJpYWxpemFibGVSZWdFeHAoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VSZWdFeHA7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gU2VyaWFsaXplci5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIHVudG91Y2hTb3VyY2VPYmplY3Qoc291cmNlT2JqZWN0OiBhbnkpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgIGlmIChUb3VjaC5oYXNCZWVuVG91Y2hlZChzb3VyY2VPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIFRvdWNoLnVudG91Y2goc291cmNlT2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKCB2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLnVudG91Y2hTb3VyY2VPYmplY3QoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBvc3Rwcm9jZXNzIHRoZSBvYmplY3QgdHJlZSB0byBiZSBzZXJpYWxpemVkIHRvIGZpbmQgYW5kIHJlcGxhY2UgRmFrZURhdGUgb2JqZWN0cyB3aXRoIERhdGVzIGFnYWluLi4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZURhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gKDxTZXJpYWxpemFibGVEYXRlPmN1cnJlbnQpLmdldERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50IGluc3RhbmNlb2YgU2VyaWFsaXphYmxlUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlUmVnRXhwPmN1cnJlbnQpLmdldFJlZ0V4cCgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc291cmNlT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXQncyBkdXR5IGlzIHRvIFwidG91Y2hcIiBldmVyeSBvYmplY3QgcHJvY2Vzc2UgdG8gYWRkIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eS5cclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5zdHJpbmdpZnlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tU2VyaWFsaXplcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKCFUb3VjaC5oYXNCZWVuVG91Y2hlZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIFRvdWNoLnRvdWNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59XHJcbi8vIH0iLCIvLyBuYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUlkZW50aXR5TWFwIHtcclxuXHJcbiAgICBwcml2YXRlIGlkVG9PYmplY3RNYXA6IHsgW2lkOiBzdHJpbmddOiBhbnkgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RyYWNrZWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChpZDogc3RyaW5nLCBvYmplY3Q6IGFueSk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXSA9IG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIHRoZSBpZHMgaW4gdGhlIG1hcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICB2YXIgdG9SZXR1cm46IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgdG9SZXR1cm4ucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiLyoqXHJcbiAqIEltcGxlbWVudHMgSlNPTiBzdHJpbmcgc2VyaWFsaXphdGlvbi4gSXQgZXh0ZW5kcyB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIEpTT04uc3RyaW5naWZ5IHRvIGFsbG93IHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbiBvZiBkYXRlIGFuZCByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0cywgYW5kIG9iamVjdCByZWZlcmVuY2UuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5pbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7U2ltcGxlSWRlbnRpdHlNYXB9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcFwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNlcmlhbGl6ZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGlzIG5lZWRlZCB0byB0cmFjayBvYmplY3QgaW5zdGFuY2VzIHRvIGFjaGlldmUgY29ycmVjdCByZWNvbnN0cnVjdGlvbiBvZiB0aGUgb2JqZWN0IHRyZWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGlkZW50aXR5TWFwOiBTaW1wbGVJZGVudGl0eU1hcDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXNlc2lhbGl6ZXMgYW4gb2JqZWN0IGZyb20gYSBKU09OIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZSh0b0Rlc2VyaWFsaXplOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIERlc2VyaWFsaXplci5pZGVudGl0eU1hcCA9IG5ldyBTaW1wbGVJZGVudGl0eU1hcCgpO1xyXG4gICAgICAgIHZhciB0b1JldHVybiA9IEpTT04ucGFyc2UodG9EZXNlcmlhbGl6ZSwgRGVzZXJpYWxpemVyLmN1c3RvbVJldml2ZXIpO1xyXG4gICAgICAgIERlc2VyaWFsaXplci5jbGVhbnVwKCk7XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYW5zIHRoZSByZWNvbnNpdHV0ZWQgaW5zdGFuY2VzIGZyb20gdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSxcclxuICAgICAqIGFuZCBlbXB0aWVzIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xlYW51cCgpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEZXNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcbiAgICAgICAgdmFyIHVudG91Y2ggPSBUb3VjaC51bnRvdWNoO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGlkTWFwLmdldElkcygpKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IGlkTWFwLmdldEJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgIHVudG91Y2goY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBsZWF2ZSB0aGUgaW5zdGFuY2VzIFwiZ2FyYmFnZWFibGVcIi4uLiBob3cgdG8gdGVzdCA/ICAgIFxyXG4gICAgICAgICAgICBpZE1hcC5kZWxldGVCeUlkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEl0IGhhbmRsZXMgRmFrZSogaW5zdGFuY2VzIHVzZXMgX19vYmplY3RJbnN0YW5jZUlkIHRvIHJlYnVpbGQgYSBjb3JyZWN0IG9iamVjdCB0cmVlLiBcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5wYXJzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21SZXZpdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gRGVzZXJpYWxpemVyO1xyXG4gICAgICAgIHZhciBpZE1hcCA9IHNUaGlzLmlkZW50aXR5TWFwO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5oYXNCZWVuVG91Y2hlZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpZE1hcC5pc1RyYWNrZWQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZE1hcC5nZXRCeUlkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZE1hcC5hZGQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGZvciB0aGUgcHJlc2VuY2Ugb2YgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICBpZiAoY2FzdGVkLl9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFuYWdlcyBSZWdFeHAgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEZha2VSZWdFeHBEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiUmVnRXhwXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IFJlZ0V4cCh2YWx1ZS5fX3JlZ3VsYXJFeHByZXNzaW9uIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hbmFnZXMgRGF0ZSBEZXNlcmlhbGl6YXRpb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgRmFrZURhdGVEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiRGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKCg8U2VyaWFsaXphYmxlRGF0ZT52YWx1ZSkuX19kYXRlQXNTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4vRmFjdG9yeVwiO1xyXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCBpbXBsZW1lbnRzIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgcHVibGljIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RhdGUoKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5hbWVOb3RTZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVWZXJzaW9uTm90U2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0b1JlY29uc3RpdHV0ZSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMpO1xyXG4gICAgICAgIHZhciByZWNvbnN0aXR1dGVkID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHRvUmVjb25zdGl0dXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlY29uc3RpdHV0ZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZTxUU3RhdGU+KHN0YXRlOiBUU3RhdGUpIHtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlN0YXRlSXNOb3RBbk9iamVjdCwgXCJzdGF0ZSBkZXZlIGVzc2VyZSB1biBvZ2dldHRvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlRWxlbWVudCA9IHN0YXRlW2VsZW1lbnRdO1xyXG4gICAgICAgICAgICB0aGlzW2VsZW1lbnRdID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKGN1cnJlbnRTdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIEpTT04uc3RyaW5naWZ5KCB0aGlzLmdldFN0YXRlKCkgKSApO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5leHBvcnQgaW50ZXJmYWNlIElEb21haW5FdmVudCBleHRlbmRzIElQZXJzaXN0YWJsZSwgSVR5cGVUcmFja2luZyB7XHJcblxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50SGFuZGxlciB7XHJcbiAgICAoZG9tYWluRXZlbnQ6IElEb21haW5FdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpc3BhdGNoZXIge1xyXG4gICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcik7XHJcbiAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpO1xyXG4gICAgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCk7XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtJRGlzcGF0Y2hlcn0gZnJvbSBcIi4vSURpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuZXhwb3J0IGNsYXNzIERvbWFpbkRpc3BhdGNoZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uOiBJRGlzcGF0Y2hlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbihkaXNwYXRjaGVyOiBJRGlzcGF0Y2hlcikge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uID0gZGlzcGF0Y2hlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SUVxdWF0YWJsZX0gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZVwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eTxULCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiBleHRlbmRzIElFcXVhdGFibGU8VD4sIElQZXJzaXN0YWJsZSB7XHJcblx0Z2V0S2V5KCk6IFRLZXk7XHJcblx0c2V0S2V5KGtleTogVEtleSk6IHZvaWQ7XHJcbn1cclxuLy8gfSIsImltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuL0lFbnRpdHlcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDbGFzc2VzIGFuZCBpbnRlcmZhY2VzIHRvIGltcGxlbWVudCBhbiBFbnRpdHksIGEgcGVyc2lzdGFibGUgb2JqZWN0LiBcclxuICovXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbnRpdHk8VCBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcblx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRpbXBsZW1lbnRzIElFbnRpdHk8VCwgVEtleT4ge1xyXG5cclxuXHRwcml2YXRlIGtleTogVEtleTtcclxuXHJcblx0cHJpdmF0ZSByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuXHRcdERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBnZXRLZXkoKTogVEtleSB7XHJcblx0XHRyZXR1cm4gdGhpcy5rZXk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHNldEtleShrZXk6IFRLZXkpOiB2b2lkIHtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKCFpdGVtKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpdGVtLmdldEtleSgpLmVxdWFscyh0aGlzLmdldEtleSgpKTtcclxuXHR9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkFnZ3JlZ2F0ZSB7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBZ2dyZWdhdGVSb290PFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4ge1xyXG5cclxuICAgICAgICBnZXRSZXZpc2lvbklkKCk6IG51bWJlclxyXG4gICAgICAgIGluY3JlbWVudFJldmlzaW9uSWQoKTtcclxuXHJcbiAgICAgICAgcGVyZmVjdGx5TWF0Y2goYW5vdGhlcjogSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuO1xyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4vSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgdGhlIEFnZ3JlZ2F0ZSBQYXR0ZXJuIGJ5IGRlZmluaW5nIGludGVyZmFjZXMgYW5kIGJhc2UgYmVoYXZpb3IgZm9yIGFuIEFnZ3JlZ2F0ZVJvb3QuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGJlaGF2aW9yIG9mIGFuIEFnZ3JlZ2F0ZVJvb3QsIHdoaWNoIGlzIGJhc2ljYWxseSBhbiBlbnRpdHkuLi5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWdncmVnYXRlUm9vdDxcclxuICAgIFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgID5cclxuICAgIGV4dGVuZHMgQmFzZUVudGl0eTxULCBUS2V5PlxyXG4gICAgaW1wbGVtZW50cyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgSUVudGl0eTxULCBUS2V5PlxyXG57XHJcbiAgICBwcml2YXRlIF9fcmV2aXNpb25JZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fcmV2aXNpb25JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVtZW50UmV2aXNpb25JZCgpIHtcclxuICAgICAgICB0aGlzLl9fcmV2aXNpb25JZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGFyZXMgYW4gYWdncmVnYXRlIHdpdGggYW5vdGhlci4gUmV0dXJucyB0cnVlIGlmIGFnZ3JlZ2F0ZSdzIGRhdGEgYXJlIGV4YWN0bHkgZXF1YWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwZXJmZWN0bHlNYXRjaChvdGhlcjogQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKCFvdGhlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGhpc09uZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgICB2YXIgdGhlT3RoZXIgPSBvdGhlci5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBkbyB0aGUgY29tcGFyaXNvbiBqdXN0IGxpa2UgdmFsdWUgb2JqZWN0cy4uLiBuYWl2ZSBidXQgZnVuY3Rpb25hbCBhdCB0aGlzIHRpbWUuXHJcbiAgICAgICAgdmFyIHRoaXNPbmVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXNPbmUpO1xyXG4gICAgICAgIHZhciB0aGVPdGhlckFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhlT3RoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc09uZUFzU3RyaW5nID09PSB0aGVPdGhlckFzU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBJblByb2Nlc3NEaXNwYXRjaGVyIHtcclxuICAgIHByaXZhdGUgZGVsZWdhdGVzUmVnaXN0cnk6IHsgW2V2ZW50VHlwZU5hbWU6IHN0cmluZ106IElFdmVudEhhbmRsZXJbXSB9ID0ge307XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnkgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZHMgYW4gaGFuZGxlIGlmIChhbmQgb25seSBpZikgdGhlIGhhbmRsZXIgaGFzIG5vdCBiZWVuIFwic3RhbXBlZFwiXHJcbiAgICAgICAgaWYgKCEoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgLy8gQWN0IG9ubHkgaWQgaGFuZGxlciBoYXMgYmVlbiByZWdpc3RlcmVkLlxyXG4gICAgICAgIGlmICgoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV1bZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICBpZiAoKDxhbnk+Y3VycmVudEVsZW1lbnQpLl9faGFuZGxlcklkID09PSAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0uc3BsaWNlKE51bWJlcihlbGVtZW50KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRXJyb3JzOiBFcnJvcltdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEVycm9ycy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuYnVpbGRFcnJvck1lc3NhZ2UoRXJyb3JzKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGUubmFtZSA9IFwiRGlzcGF0Y2hlciBFcnJvclwiO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZEVycm9yTWVzc2FnZShFcnJvcnM6IEVycm9yW10pOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgb2YgRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gZWxlbWVudC5uYW1lICsgXCI6XCIgKyBlbGVtZW50Lm1lc3NhZ2UgKyBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlS2V5VmFsdWVPYmplY3Q8VD5cclxuICAgIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcbiAgICBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVyaXZlZCBjbGFzc2VzIG11c3QgcmVpbXBsZW1lbnQgdGhpcyBtZXRob2QuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcbi8vIH0iLCJpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBLZXlOb3RTZXQgPSBcIktleSBub3Qgc2V0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEl0ZW1Ob3RGb3VuZCA9IFwiSXRlbSBOb3QgRm91bmRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JTYXZpbmdJdGVtID0gXCJFcnJvciBTYXZpbmcgSXRlbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFcnJvclJlYWRpbmdJdGVtID0gXCJFcnJvciBSZWFkaW5nIEl0ZW1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JEZWxldGluZ0l0ZW0gPSBcIkVycm9yIERlbGV0aW5nIEl0ZW1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uID0gXCJXcm9uZyB0eXBlIGZyb20gSW1wbGVtZW50YXRpb25cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgTWFuYWdlZFR5cGVOb3RTdXBwbGllZCA9IFwiUmVwb3NpdG9yeSBuZWVkcyB0byBrbm93IHdoYXQgdHlwZSBpdCBjYW4gbWFuYWdlXCI7XHJcbn0iLCIvKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeTxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUO1xyXG4gICAgc2F2ZShpdGVtOiBUKTogdm9pZDtcclxuICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQ7XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuL0lSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbmltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuLyoqXHJcbiAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVwb3NpdG9yeTxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGFuIFwic3RhdGVPYmplY3RcIiB0byB1c2UgZm9yIG9iamVjdCBcInJlY29uc3RydWN0aW9uXCIuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgdGhyb3cgXCJJdGVtTm90Rm91bmRcIiBpZiBubyBlbGVtZW50IG1hdGNoaW5nIHRoZSBpZCB3YXMgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmV0cmlldmVkID0gdGhpcy5nZXRCeUlkSW1wbGVtZW50YXRpb24oaWQpO1xyXG4gICAgICAgICAgICBpZiAocmV0cmlldmVkLl9fdHlwZU5hbWUgIT09IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZSBcIiArIHJldHJpZXZlZC5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHJldHJpZXZlZCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJzYXZlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLiBUaGUgdGVtcGxhdGUgbWV0aG9kIFwic2F2ZVwiIHdpbGwgbWFuYWdlIHRoZSByZXZpc2lvbklkIGxvZ2ljLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkO1xyXG5cclxuICAgIHNhdmUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXNJdFdhcyA9IHRoaXMuZ2V0QnlJZChpdGVtLmdldEtleSgpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZWN0ZWQgaWYgdGhlIGRvIG5vdCBleGlzdHMgaW4gdGhlIFJlcG8uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2goYXNJdFdhcykpIHtcclxuICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5hbGx5IHNhdmVzIGFnZ3JlZ2F0ZSBpbnRvIHRoZSByZXBvc2l0b3J5LlxyXG4gICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogdm9pZDtcclxuXHJcbiAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRlbGV0ZUltcGxlbWVudGF0aW9uKGlkKTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtCYXNlUmVwb3NpdG9yeX0gZnJvbSBcIi4vQmFzZVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW5NZW1vcnlSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgIGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8VCwgVEtleT5cclxuICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnk8VCwgVEtleT4ge1xyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IElQZXJzaXN0YWJsZSB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBtYW5hZ2VkVHlwZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1hbmFnZWRUeXBlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSkge1xyXG5cclxuICAgICAgICB2YXIga2V5ID0gaWQudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzLnN0b3JhZ2Vba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiA8VD50b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCIvKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbmltcG9ydCBJUHJvbWlzZSA9IFEuSVByb21pc2U7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcbiAgICBnZXRCeUlkKGlkOiBUS2V5KTogSVByb21pc2U8VD47XHJcbiAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT47XHJcbiAgICBkZWxldGUoaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT47XHJcbn0iLCJpbXBvcnQge0lSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5pbXBvcnQgSVByb21pc2UgPSBRLklQcm9taXNlO1xyXG5cclxuLyoqXHJcbiAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBtYW5hZ2VkVHlwZTogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRvIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYSBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz47XHJcblxyXG4gICAgZ2V0QnlJZChpZDogVEtleSk6IElQcm9taXNlPFQ+IHtcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSBRLmRlZmVyPFQ+KCk7XHJcbiAgICAgICAgdGhpcy5nZXRCeUlkSW1wbGVtZW50YXRpb24oaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICh2YWx1ZTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgIT0gdGhpcy5tYW5hZ2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZWQgXCIgKyB2YWx1ZS5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gPFQ+KEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0b1JldHVybik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJzYXZlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLiBUaGUgdGVtcGxhdGUgbWV0aG9kIFwic2F2ZVwiIHdpbGwgbWFuYWdlIHRoZSByZXZpc2lvbklkIGxvZ2ljLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgcHJpdmF0ZSBkb1NhdmUoaXRlbTogVCwgZGVmZXJyZWQ6IFEuRGVmZXJyZWQ8e30+KTogSVByb21pc2U8e30+IHtcclxuICAgICAgICB0aGlzLnNhdmVJbXBsZW1lbnRhdGlvbihpdGVtKS50aGVuKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclNhdmluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcjx7fT4oKTtcclxuICAgICAgICB0aGlzLmdldEJ5SWQoaXRlbS5nZXRLZXkoKSkudGhlbihcclxuICAgICAgICAgICAgKHJlYWRWYWx1ZTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGl0ZW0gYWxyZWFkeSBleGlzdCBzbyB3ZSBoYXZlIHRvIGNvbXBhcmUgaXQgd2l0aCB3aGF0IHdlIGFyZSBzYXZpbmcuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2gocmVhZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TYXZlKGl0ZW0sIGRlZmVycmVkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoYXQgaXMgaW4gdGhlIGRhdGFiYXNlIHBlcmZlY3RseSBtYXRjaCB3aGF0IHdlIGFyZSBzYXZpbmcsIHNvIG5vdGhpbmcgdG8gZG8hXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT0gRXJyb3JzLkl0ZW1Ob3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZWN0ZWQsIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgcmVwbywgc28gd2UgaGF2ZSB0byBhZGQgaXQhXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE90aGVyIGVycm9ycyBtdXN0IGJlIHRyZWF0ZWQgYXMgLi4uIFwiRXJyb3JzXCJcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclJlYWRpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJkZWxldGVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICBkZWxldGUoaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9IFEuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVJbXBsZW1lbnRhdGlvbihpZCkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4geyBkZWZlcnJlZC5yZXNvbHZlKCk7IH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JEZWxldGluZ0l0ZW0pIFxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBidWlsZCBhbiBlcnJvciBmcm9tIGEgcmV0dXJuIHZhbHVlIG9mIHRoZSBBc3luYyBJbXBsZW1lbnRhdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnVpbGRFcnJvcihlcnJvckZyb21DYWxsOiBhbnksIGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvcjogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgIHZhciByZWFzb246IEVycm9yO1xyXG4gICAgICAgIGlmIChlcnJvckZyb21DYWxsIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgcmVhc29uID0gZXJyb3JGcm9tQ2FsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShlcnJvcklmRXJyb3JGcm9tQ2FsbElzTm90RXJyb3IsIEpTT04uc3RyaW5naWZ5KGVycm9yRnJvbUNhbGwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlYXNvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfX25hbWVTcGFjZSA9IFwiREREVG9vbHMuVW5pdE9mV29ya1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmplY3RTYXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmplY3REZWxldGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3REZWxldGVkRXZlbnRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT2JqZWN0UmV0cmlldmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG59XHJcbi8vIH1cclxuIiwiXHJcbmltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbmV4cG9ydCBlbnVtIEl0ZW1TdGF0dXMge1xyXG4gICAgTmV3LFxyXG4gICAgTW9kaWZpZWQsXHJcbiAgICBTYXZlZCxcclxuICAgIERlbGV0ZWRcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGNsYXNzIHRvIHN0b3JlIGl0ZW0gc3RhdHVzIGluZm9cclxuICovXHJcbmNsYXNzIFRyYWNrZWRJdGVtPFxyXG4gICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgPiB7XHJcbiAgICAvLyBXaWxsIGNvbnRhaW4gYSBzZXJpYWxpemVkIHZlcnNpb24gb2YgdGhlIG9iamVjdCBhcyBpdCB3YXMgd2hlbiBpdCB3YXMgbG9hZGVkIGZyb20gdGhlIHJlcG9zaXRvcnkuXHJcblxyXG4gICAgcHJpdmF0ZSBhc0xvYWRlZDogSVBlcnNpc3RhYmxlIC8vIFdpbGwgY29udGFpbiB0aGUgc3RhdGUgb2YgdGhlIG9iamVjdCB3aGVuIGZpcnN0IGFkZGVkIG9yIHVwZGF0ZWRcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHN0YXR1czogSXRlbVN0YXR1cyxcclxuICAgICAgICBwcml2YXRlIGl0ZW06IFQsXHJcbiAgICAgICAgcHJpdmF0ZSBrZXk6IFRLZXlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYXNMb2FkZWQgPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc05ldygpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuTmV3O1xyXG4gICAgICAgIHRoaXMuYXNMb2FkZWQgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFya0FzU2F2ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLlNhdmVkO1xyXG4gICAgICAgIHRoaXMuYXNMb2FkZWQgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLk1vZGlmaWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXJrQXNEZWxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5EZWxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdGF0dXMoKTogSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEtleSgpOiBUS2V5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc0NoYW5nZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHZhciBjdXJyZW50U3RhdGVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgdmFyIGFzTG9hZGVkQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmFzTG9hZGVkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZUFzU3RyaW5nICE9PSBhc0xvYWRlZEFzU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGFuIGl0ZW0gaW4gXCJTYXZlZFwiIHN0YXR1cyBoYXMgYmVlbiBtb2RpZmllZCwgYW5kIGNoYW5nZXMgdGhlIHN0YXR1cyBhY2NvcmRpbmdseS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuU2F2ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtBc01vZGlmaWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlNYXBcclxuICAgIDxcclxuICAgIFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgID5cclxue1xyXG5cclxuICAgIHByaXZhdGUgaWRUb09iamVjdE1hcDogeyBbaWQ6IHN0cmluZ106IFRyYWNrZWRJdGVtPFQsIFRLZXk+IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXAgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBrZXkgaXMgYWxyZWFkeSBzdG9yZWQgaW4gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1RyYWNrZWQoa2V5OiBUS2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEJ5SWQoa2V5OiBUS2V5KTogVCB7XHJcbiAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddLmdldEl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIG9yIHJlcGxhY2VzIGFuIGl0ZW0gdG8gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKGtleTogVEtleSwgaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIG5ld0l0ZW0gPSBuZXcgVHJhY2tlZEl0ZW0oSXRlbVN0YXR1cy5OZXcsIGl0ZW0sIGtleSk7XHJcbiAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddID0gbmV3SXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmUoa2V5OiBUS2V5KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJZHMoKTogVEtleVtdIHtcclxuICAgICAgICB2YXIgdG9SZXR1cm46IFRLZXlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5pZFRvT2JqZWN0TWFwKSB7XHJcbiAgICAgICAgICAgIHRvUmV0dXJuLnB1c2godGhpcy5pZFRvT2JqZWN0TWFwW2VsZW1lbnRdLmdldEtleSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXJrQXNEZWxldGVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzRGVsZXRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXJrQXNTYXZlZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgIHRyYWNrZWRJdGVtLm1hcmtBc1NhdmVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc01vZGlmaWVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzTW9kaWZpZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbVN0YXR1cyhrZXk6IFRLZXkpOiBJdGVtU3RhdHVzIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cmFja2VkSXRlbS5nZXRTdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlcyB0aGUgY29ycmVjdCBzdGF0dXMgZm9yIGFuIGl0ZW0gaW4gXCJTYXZlZFwiIHN0YXR1cywgYXMgaXQgbWF5IGhhdmUgYmVlbiBtb2RpZmllZCBzaW5jZSBub3cgKGhlcmUgd2UgZG9uJ3QgaGF2ZSBwcm9wZXJ0eSB0cmFja2luZykuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVTYXZlZEl0ZW1TdGF0dXMoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgaXRlbS51cGRhdGVTYXZlZEl0ZW1TdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRyYWNrZWRJdGVtKGtleTogVEtleSk6IFRyYWNrZWRJdGVtPFQsIFRLZXk+IHtcclxuICAgICAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLmlkVG9PYmplY3RNYXBba2V5LnRvU3RyaW5nKCldO1xyXG4gICAgICAgIGlmICghdG9SZXR1cm4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgVW5pdE9mV29yay4gQSBVbml0T2ZXb3JrIGtlZXBzIHRyYWNrIG9mIGNoYW5nZXMgb24gdGhlIEFnZ3JlZ2F0ZXMgbG9hZGVkIGZyb20gdGhlIHVuZGVybHlpbmcgcmVwb3NpdG9yeSBhbmQgYWxsb3dzIHRvIHNhdmUgdGhlbSBhbGwgaW4gYSBzaW5nbGUgY2FsbC5cclxuICovXHJcblxyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuXHJcbi8qKlxyXG4gKiBTaW1wbGUgVW5pdE9mV29yayBmb3IgYSBzaW5nbGUgUmVwb3NpdG9yeS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVuaXRPZldvcms8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBSZXBvc2l0b3J5IG9yIGZyb20gdGhlIFVuaXRPZldvcmssIGdpdmVuIGl0cyBJZC5cclxuICAgICAqL1xyXG4gICAgZ2V0QnlJZChrZXk6IFRLZXkpOiBUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFya3MgYW4gaXRlbSBhcyBkZWxldGVkIGZyb20gdGhlIFVuaXRPZldvcmsgKGFuZCBmcm9tIHRoZSBSZXBvc2l0b3J5IHdoZW4gdGhlIFVvVyB3aWxsIGJlIHNhdmVkKVxyXG4gICAgICovXHJcbiAgICBkZWxldGVCeUlkKGtleTogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlcyBhbGwgdGhlIG1vZGlmaWVkIGl0ZW1zIGluIHRoZSBVbml0T2ZXb3JrLlxyXG4gICAgICovXHJcbiAgICBzYXZlQWxsKCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgdG8gcmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgVW5pdE9mV29ya1xyXG4gICAgICovXHJcbiAgICByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHRvIHVucmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgVW5pdE9mV29ya1xyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQ7XHJcblxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdERlbGV0ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3REZWxldGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0RGVsZXRlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gfVxyXG4iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFJldHJpZXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdFJldHJpZXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFJldHJpZXZlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG4vLyB9XHJcbiIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0U2F2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3RTYXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICApIHsgXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gfVxyXG4iLCJpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIFVuaXRPZldvcmtFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgSXRlbU1hcmtlZEFzRGVsZXRlZCA9IFwiVGhpcyBpdGVtIHdhcyBtYXJrZWQgYXMgZGVsZXRlZCBpbiB0aGlzIFVuaXRPZldvcmssIGFuZCBjYW5ub3QgYmUgcmV0cmlldmVkLlwiO1xyXG59XHJcblxyXG4vLyB9IiwiLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7SW5Qcm9jZXNzRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyXCI7XHJcbmltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge0lkZW50aXR5TWFwLCBJdGVtU3RhdHVzfSBmcm9tIFwiLi9JZGVudGl0eU1hcFwiO1xyXG5pbXBvcnQge09iamVjdERlbGV0ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbmltcG9ydCB7T2JqZWN0UmV0cmlldmVkRXZlbnR9IGZyb20gXCIuL09iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbmltcG9ydCB7T2JqZWN0U2F2ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG5pbXBvcnQge1VuaXRPZldvcmtFcnJvcnN9IGZyb20gXCIuL1VuaXRPZldvcmtFcnJvcnNcIjtcclxuXHJcblxyXG4vKipcclxuICogU2ltcGxlIFVuaXRPZldvcmsgZm9yIGEgc2luZ2xlIFJlcG9zaXRvcnkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVW5pdE9mV29yazxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICBwcml2YXRlIGlkTWFwOiBJZGVudGl0eU1hcDxULCBUS2V5PjtcclxuICAgIHByaXZhdGUgcmVwb3NpdG9yeTogSVJlcG9zaXRvcnk8VCwgVEtleT47XHJcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEluUHJvY2Vzc0Rpc3BhdGNoZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVwb3NpdG9yeTogSVJlcG9zaXRvcnk8VCwgVEtleT4pIHtcclxuICAgICAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuaWRNYXAgPSBuZXcgSWRlbnRpdHlNYXA8VCwgVEtleT4oKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgUmVwb3NpdG9yeSBvciBmcm9tIHRoZSBVbml0T2ZXb3JrLCBnaXZlbiBpdHMgSWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCeUlkKGtleTogVEtleSk6IFQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZE1hcC5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5nZXRJdGVtU3RhdHVzKGtleSkgPT09IEl0ZW1TdGF0dXMuRGVsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgVW5pdE9mV29ya0Vycm9ycy50aHJvdyhVbml0T2ZXb3JrRXJyb3JzLkl0ZW1NYXJrZWRBc0RlbGV0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0b1JldHVybiA9IHRoaXMucmVwb3NpdG9yeS5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgdGhpcy5pZE1hcC5hZGQoa2V5LCB0b1JldHVybik7XHJcbiAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuXHJcbiAgICAgICAgdmFyIHJldHJpZXZlZEV2ZW50ID0gbmV3IE9iamVjdFJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLl9fdHlwZU5hbWUsIHRvUmV0dXJuLl9fdHlwZVZlcnNpb24sIHRvUmV0dXJuLmdldEtleSgpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHRoaXMucmFpc2VFdmVudChyZXRyaWV2ZWRFdmVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcmtzIGFuIGl0ZW0gYXMgZGVsZXRlZCBmcm9tIHRoZSBVbml0T2ZXb3JrIChhbmQgZnJvbSB0aGUgUmVwb3NpdG9yeSB3aGVuIHRoZSBVb1cgd2lsbCBiZSBzYXZlZClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNEZWxldGVkQnlJZChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZXMgYWxsIHRoZSBtb2RpZmllZCBpdGVtcyBpbiB0aGUgVW5pdE9mV29yay5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNhdmVBbGwoKSB7XHJcbiAgICAgICAgdmFyIGtleXMgPSB0aGlzLmlkTWFwLmdldElkcygpO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBvZiBrZXlzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXkpO1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5pZE1hcC5nZXRJdGVtU3RhdHVzKGtleSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLkRlbGV0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRGVsZXRlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5Nb2RpZmllZDpcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5OZXc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTmV3T3JNb2RpZmllZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5TYXZlZDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc0RlbGV0ZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgdmFyIGRlbGV0ZWRFdmVudCA9IG5ldyBPYmplY3REZWxldGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGtleS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnJlcG9zaXRvcnkuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCeUlkKGtleSk7XHJcbiAgICAgICAgdGhpcy5yYWlzZUV2ZW50KGRlbGV0ZWRFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzTmV3T3JNb2RpZmllZEl0ZW0oa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICB0aGlzLnJlcG9zaXRvcnkuc2F2ZShpdGVtKTtcclxuICAgICAgICB0aGlzLmlkTWFwLm1hcmtBc1NhdmVkQnlJZChrZXkpO1xyXG4gICAgICAgIC8vIHJhaXNlcyBhbiBldmVudCBmb3Igd2hvbWV2ZXIgaXMgaW50ZXJlc3RlZFxyXG4gICAgICAgIHZhciBzYXZlZEV2ZW50ID0gbmV3IE9iamVjdFNhdmVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGtleS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnJhaXNlRXZlbnQoc2F2ZWRFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIG9iamVjdCBmcm9tIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbW92ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWRNYXAuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5yZW1vdmUoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25WT0xpYnJhcnkge1xyXG4gICAgXHJcbn0iXX0=