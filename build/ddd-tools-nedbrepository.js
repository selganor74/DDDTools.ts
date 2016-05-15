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
define("DDDTools/Repository/Events", ["require", "exports"], function (require, exports) {
    "use strict";
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
    exports.Events = Events;
});
define("DDDTools/Repository/ItemRetrievedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_2, Events_1) {
    "use strict";
    var ItemRetrievedEvent = (function (_super) {
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
    }(BaseValueObject_2.BaseValueObject));
    exports.ItemRetrievedEvent = ItemRetrievedEvent;
});
define("DDDTools/Repository/ItemAddedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_3, Events_2) {
    "use strict";
    var ItemAddedEvent = (function (_super) {
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
    }(BaseValueObject_3.BaseValueObject));
    exports.ItemAddedEvent = ItemAddedEvent;
});
define("DDDTools/Repository/ItemUpdatedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_4, Events_3) {
    "use strict";
    var ItemUpdatedEvent = (function (_super) {
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
    }(BaseValueObject_4.BaseValueObject));
    exports.ItemUpdatedEvent = ItemUpdatedEvent;
});
define("DDDTools/Repository/ItemDeletedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_5, Events_4) {
    "use strict";
    var ItemDeletedEvent = (function (_super) {
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
    }(BaseValueObject_5.BaseValueObject));
    exports.ItemDeletedEvent = ItemDeletedEvent;
});
define("DDDTools/Repository/BaseRepositoryAsync", ["require", "exports", "DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Repository/ItemRetrievedEvent", "DDDTools/Repository/ItemAddedEvent", "DDDTools/Repository/ItemUpdatedEvent", "DDDTools/Repository/ItemDeletedEvent", "DDDTools/DomainEvents/DomainDispatcher"], function (require, exports, Errors_4, Factory_2, ItemRetrievedEvent_1, ItemAddedEvent_1, ItemUpdatedEvent_1, ItemDeletedEvent_1, DomainDispatcher_2) {
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
                var event = new ItemRetrievedEvent_1.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), value);
                DomainDispatcher_2.DomainDispatcher.dispatch(event);
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
            var event;
            this.getById(item.getKey()).then(function (readValue) {
                if (!item.perfectlyMatch(readValue)) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    event = event || new ItemUpdatedEvent_1.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                    DomainDispatcher_2.DomainDispatcher.dispatch(event);
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
                    event = event || new ItemAddedEvent_1.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                    DomainDispatcher_2.DomainDispatcher.dispatch(event);
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
            var event;
            this.getById(id).then(function (item) {
                var event = new ItemDeletedEvent_1.ItemDeletedEvent(item.__typeName, item.__typeVersion, id.toString(), item.getState());
                _this.deleteImplementation(id).then(function () {
                    deferred.resolve();
                    DomainDispatcher_2.DomainDispatcher.dispatch(event);
                }, function (error) {
                    var reason = _this.buildError(error, Errors_4.Errors.ErrorDeletingItem);
                    deferred.reject(reason);
                });
            }, function (error) {
                if (error instanceof Error && error.name === Errors_4.Errors.ItemNotFound) {
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
        function BaseNeDBRepositoryAsync(managedType, nedbDatastore) {
            _super.call(this, managedType);
            this.datastore = nedbDatastore;
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
define("NeDBRepository/Errors", ["require", "exports", "DDDTools/ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_3) {
    "use strict";
    var Errors = (function (_super) {
        __extends(Errors, _super);
        function Errors() {
            _super.apply(this, arguments);
        }
        Errors.DatabaseAlreadyRegistered = "Database already registered with the Factory";
        Errors.DatabaseNotRegistered = "Database is not registered with the Factory";
        return Errors;
    }(BaseErrors_3.BaseErrors));
    exports.Errors = Errors;
});
define("NeDBRepository/NeDBDatabaseFactory", ["require", "exports", "NeDBRepository/Errors"], function (require, exports, Errors_6) {
    "use strict";
    var NeDBDatabaseFactory = (function () {
        function NeDBDatabaseFactory() {
        }
        NeDBDatabaseFactory.registerDatabase = function (dbname, database) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered(dbname)) {
                Errors_6.Errors.throw(Errors_6.Errors.DatabaseAlreadyRegistered, "Database " + database + " has already been registered");
            }
            sThis.datastoreRegistry[dbname] = database;
        };
        NeDBDatabaseFactory.isDatabaseRegistered = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.datastoreRegistry[dbname]) {
                return true;
            }
            return false;
        };
        NeDBDatabaseFactory.getDatabase = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (!sThis.isDatabaseRegistered(dbname)) {
                Errors_6.Errors.throw(Errors_6.Errors.DatabaseNotRegistered, "Database " + dbname + " does not exist in the Factory");
            }
            return sThis.datastoreRegistry[dbname];
        };
        NeDBDatabaseFactory.unregisterDatabase = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered) {
                delete sThis.datastoreRegistry[dbname];
            }
        };
        NeDBDatabaseFactory.getAndRegisterPersistentDb = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered(dbname)) {
                Errors_6.Errors.throw(Errors_6.Errors.DatabaseAlreadyRegistered, "Database " + dbname + " is already registered");
            }
            var ds = new Nedb({ filename: dbname, autoload: true });
            sThis.registerDatabase(dbname, ds);
            return sThis.getDatabase(dbname);
        };
        NeDBDatabaseFactory.getAndRegisterInMemoryDb = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered(dbname)) {
                Errors_6.Errors.throw(Errors_6.Errors.DatabaseAlreadyRegistered, "Database " + dbname + " is already registered");
            }
            var ds = new Nedb({ inMemoryOnly: true });
            sThis.registerDatabase(dbname, ds);
            return sThis.getDatabase(dbname);
        };
        NeDBDatabaseFactory.datastoreRegistry = {};
        return NeDBDatabaseFactory;
    }());
    exports.NeDBDatabaseFactory = NeDBDatabaseFactory;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLW5lZGJyZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyIsIi4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnkudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9Ub3VjaC50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbVJldHJpZXZlZEV2ZW50LnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbUFkZGVkRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtVXBkYXRlZEV2ZW50LnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbURlbGV0ZWRFdmVudC50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi9zcmMvTmVEQlJlcG9zaXRvcnkvQmFzZU5lREJSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi9zcmMvTmVEQlJlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vc3JjL05lREJSZXBvc2l0b3J5L05lREJEYXRhYmFzZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJS0dBO1FBQUE7UUFZQSxDQUFDO1FBVlUsZ0JBQUssR0FBWixVQUFhLElBQVksRUFBRSxPQUFnQjtZQUN2QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELE1BQU0sR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQUVNLDJCQUFnQixHQUF2QixVQUF3QixJQUFZLEVBQUUsT0FBZ0I7WUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQUFDLEFBWkQsSUFZQztJQVpxQixrQkFBVSxhQVkvQixDQUFBOzs7O0lDYkQ7UUFBNEIsMEJBQVU7UUFBdEM7WUFBNEIsOEJBQVU7UUFrQnRDLENBQUM7UUFmVSx5QkFBa0IsR0FBRyx3QkFBd0IsQ0FBQztRQUM5QyxxQkFBYyxHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLHdCQUFpQixHQUFHLHFCQUFxQixDQUFDO1FBQzFDLDhCQUF1QixHQUFHLDRCQUE0QixDQUFDO1FBQ3ZELHlCQUFrQixHQUFHLHNCQUFzQixDQUFDO1FBRzVDLHdCQUFpQixHQUFHLG9EQUFvRCxDQUFDO1FBQ3pFLDhCQUF1QixHQUFHLDJDQUEyQyxDQUFBO1FBR3JFLHlCQUFrQixHQUFHLDBCQUEwQixDQUFDO1FBQ2hELDBCQUFtQixHQUFHLHdCQUF3QixDQUFDO1FBQy9DLDZCQUFzQixHQUFHLDBCQUEwQixDQUFDO1FBQ3BELHFDQUE4QixHQUFHLG9DQUFvQyxDQUFDO1FBQ2pGLGFBQUM7SUFBRCxDQUFDLEFBbEJELENBQTRCLHVCQUFV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