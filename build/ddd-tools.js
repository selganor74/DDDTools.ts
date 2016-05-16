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
define("DDDTools/DomainEvents/InProcessDispatcher", ["require", "exports", "DDDTools/Utils/SimpleGuid"], function (require, exports, SimpleGuid_2) {
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
define("DDDTools/Entity/BaseKeyValueObject", ["require", "exports", "DDDTools/ValueObject/BaseValueObject"], function (require, exports, BaseValueObject_2) {
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
define("DDDTools/Query/IQuery", ["require", "exports"], function (require, exports) {
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
define("DDDTools/Repository/IRepository", ["require", "exports"], function (require, exports) {
    "use strict";
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
define("DDDTools/Repository/ItemRetrievedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_3, Events_1) {
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
    }(BaseValueObject_3.BaseValueObject));
    exports.ItemRetrievedEvent = ItemRetrievedEvent;
});
define("DDDTools/Repository/ItemAddedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_4, Events_2) {
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
    }(BaseValueObject_4.BaseValueObject));
    exports.ItemAddedEvent = ItemAddedEvent;
});
define("DDDTools/Repository/ItemUpdatedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_5, Events_3) {
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
    }(BaseValueObject_5.BaseValueObject));
    exports.ItemUpdatedEvent = ItemUpdatedEvent;
});
define("DDDTools/Repository/ItemDeletedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/Repository/Events"], function (require, exports, BaseValueObject_6, Events_4) {
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
    }(BaseValueObject_6.BaseValueObject));
    exports.ItemDeletedEvent = ItemDeletedEvent;
});
define("DDDTools/Repository/BaseRepository", ["require", "exports", "DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Repository/ItemRetrievedEvent", "DDDTools/Repository/ItemAddedEvent", "DDDTools/Repository/ItemUpdatedEvent", "DDDTools/Repository/ItemDeletedEvent", "DDDTools/DomainEvents/DomainDispatcher"], function (require, exports, Errors_5, Factory_2, ItemRetrievedEvent_1, ItemAddedEvent_1, ItemUpdatedEvent_1, ItemDeletedEvent_1, DomainDispatcher_2) {
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
                var event = new ItemRetrievedEvent_1.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), retrieved);
                DomainDispatcher_2.DomainDispatcher.dispatch(event);
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
                DomainDispatcher_2.DomainDispatcher.dispatch(event);
            }
        };
        BaseRepository.prototype.delete = function (id) {
            var asItWas = null;
            try {
                asItWas = this.getById(id);
            }
            catch (e) {
                if (e instanceof Error && e.name === Errors_5.Errors.ItemNotFound) {
                    return;
                }
                Errors_5.Errors.throw(Errors_5.Errors.ErrorDeletingItem, JSON.stringify(e));
            }
            var event = new ItemDeletedEvent_1.ItemDeletedEvent(asItWas.__typeName, asItWas.__typeVersion, id.toString(), asItWas.getState());
            this.deleteImplementation(id);
            DomainDispatcher_2.DomainDispatcher.dispatch(event);
        };
        return BaseRepository;
    }());
    exports.BaseRepository = BaseRepository;
});
define("DDDTools/Repository/BaseInMemoryRepository", ["require", "exports", "DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Repository/BaseRepository"], function (require, exports, Errors_6, Factory_3, BaseRepository_1) {
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
define("DDDTools/Repository/IRepositoryAsync", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/Repository/BaseRepositoryAsync", ["require", "exports", "DDDTools/Repository/Errors", "DDDTools/PersistableObject/Factory", "DDDTools/Repository/ItemRetrievedEvent", "DDDTools/Repository/ItemAddedEvent", "DDDTools/Repository/ItemUpdatedEvent", "DDDTools/Repository/ItemDeletedEvent", "DDDTools/DomainEvents/DomainDispatcher"], function (require, exports, Errors_7, Factory_4, ItemRetrievedEvent_2, ItemAddedEvent_2, ItemUpdatedEvent_2, ItemDeletedEvent_2, DomainDispatcher_3) {
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
                var event = new ItemRetrievedEvent_2.ItemRetrievedEvent(toReturn.__typeName, toReturn.__typeVersion, toReturn.getKey().toString(), value);
                DomainDispatcher_3.DomainDispatcher.dispatch(event);
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
            var event;
            this.getById(item.getKey()).then(function (readValue) {
                if (!item.perfectlyMatch(readValue)) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    event = event || new ItemUpdatedEvent_2.ItemUpdatedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                    DomainDispatcher_3.DomainDispatcher.dispatch(event);
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
                    event = event || new ItemAddedEvent_2.ItemAddedEvent(item.__typeName, item.__typeVersion, item.getKey().toString(), item.getState());
                    DomainDispatcher_3.DomainDispatcher.dispatch(event);
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
            var event;
            this.getById(id).then(function (item) {
                var event = new ItemDeletedEvent_2.ItemDeletedEvent(item.__typeName, item.__typeVersion, id.toString(), item.getState());
                _this.deleteImplementation(id).then(function () {
                    deferred.resolve();
                    DomainDispatcher_3.DomainDispatcher.dispatch(event);
                }, function (error) {
                    var reason = _this.buildError(error, Errors_7.Errors.ErrorDeletingItem);
                    deferred.reject(reason);
                });
            }, function (error) {
                if (error instanceof Error && error.name === Errors_7.Errors.ItemNotFound) {
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
                reason = Errors_7.Errors.getErrorInstance(errorIfErrorFromCallIsNotError, JSON.stringify(errorFromCall));
            }
            return reason;
        };
        return BaseRepositoryAsync;
    }());
    exports.BaseRepositoryAsync = BaseRepositoryAsync;
});
define("DDDTools/UnitOfWork/Events", ["require", "exports"], function (require, exports) {
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
define("DDDTools/UnitOfWork/IdentityMap", ["require", "exports"], function (require, exports) {
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
define("DDDTools/UnitOfWork/IUnitOfWork", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("DDDTools/UnitOfWork/ObjectDeletedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/UnitOfWork/Events"], function (require, exports, BaseValueObject_7, Events_5) {
    "use strict";
    var ObjectDeletedEvent = (function (_super) {
        __extends(ObjectDeletedEvent, _super);
        function ObjectDeletedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_5.Events.ObjectDeletedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectDeletedEvent;
    }(BaseValueObject_7.BaseValueObject));
    exports.ObjectDeletedEvent = ObjectDeletedEvent;
});
define("DDDTools/UnitOfWork/ObjectRetrievedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/UnitOfWork/Events"], function (require, exports, BaseValueObject_8, Events_6) {
    "use strict";
    var ObjectRetrievedEvent = (function (_super) {
        __extends(ObjectRetrievedEvent, _super);
        function ObjectRetrievedEvent(typeName, typeVersion, id) {
            _super.call(this);
            this.typeName = typeName;
            this.typeVersion = typeVersion;
            this.id = id;
            this.__typeName = Events_6.Events.ObjectRetrievedEvent;
            this.__typeVersion = "v1";
        }
        return ObjectRetrievedEvent;
    }(BaseValueObject_8.BaseValueObject));
    exports.ObjectRetrievedEvent = ObjectRetrievedEvent;
});
define("DDDTools/UnitOfWork/ObjectSavedEvent", ["require", "exports", "DDDTools/ValueObject/BaseValueObject", "DDDTools/UnitOfWork/Events"], function (require, exports, BaseValueObject_9, Events_7) {
    "use strict";
    var ObjectSavedEvent = (function (_super) {
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
    }(BaseValueObject_9.BaseValueObject));
    exports.ObjectSavedEvent = ObjectSavedEvent;
});
define("DDDTools/UnitOfWork/UnitOfWorkErrors", ["require", "exports", "DDDTools/ErrorManagement/BaseErrors"], function (require, exports, BaseErrors_3) {
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
define("DDDTools/UnitOfWork/UnitOfWork", ["require", "exports", "DDDTools/DomainEvents/InProcessDispatcher", "DDDTools/UnitOfWork/IdentityMap", "DDDTools/UnitOfWork/ObjectDeletedEvent", "DDDTools/UnitOfWork/ObjectRetrievedEvent", "DDDTools/UnitOfWork/ObjectSavedEvent", "DDDTools/UnitOfWork/UnitOfWorkErrors"], function (require, exports, InProcessDispatcher_1, IdentityMap_1, ObjectDeletedEvent_1, ObjectRetrievedEvent_1, ObjectSavedEvent_1, UnitOfWorkErrors_1) {
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
define("DDDTools/ValueObjects/CommonVOLibrary", ["require", "exports"], function (require, exports) {
    "use strict";
    var CommonVOLibrary = (function () {
        function CommonVOLibrary() {
        }
        return CommonVOLibrary;
    }());
    exports.CommonVOLibrary = CommonVOLibrary;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHMiLCIuLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0Vycm9ycy50cyIsIi4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIiwiLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9UeXBlUmVnaXN0cnkudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9Ub3VjaC50cyIsIi4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHMiLCIuLi9zcmMvREREVG9vbHMvRW50aXR5L0Jhc2VLZXlWYWx1ZU9iamVjdC50cyIsIi4uL3NyYy9ERERUb29scy9RdWVyeS9JUXVlcnkudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9FcnJvcnMudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0V2ZW50cy50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1SZXRyaWV2ZWRFdmVudC50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1BZGRlZEV2ZW50LnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbVVwZGF0ZWRFdmVudC50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1EZWxldGVkRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9CYXNlUmVwb3NpdG9yeS50cyIsIi4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnkudHMiLCIuLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlBc3luYy50cyIsIi4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50cyIsIi4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0lkZW50aXR5TWFwLnRzIiwiLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvSVVuaXRPZldvcmsudHMiLCIuLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudC50cyIsIi4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHMiLCIuLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9Vbml0T2ZXb3JrRXJyb3JzLnRzIiwiLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29yay50cyIsIi4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvQ29tbW9uVk9MaWJyYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUtHQTtRQUFBO1FBWUEsQ0FBQztRQVZVLGdCQUFLLEdBQVosVUFBYSxJQUFZLEVBQUUsT0FBZ0I7WUFDdkMsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNyRCxNQUFNLEdBQUcsQ0FBQztRQUNkLENBQUM7UUFFTSwyQkFBZ0IsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLE9BQWdCO1lBQ2xELElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxJ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LENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWhDLElBQUksVUFBVSxHQUFHLElBQUksbUNBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVPLCtCQUFVLEdBQWxCLFVBQW1CLEtBQW1CO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFLTywrQkFBVSxHQUFsQixVQUFtQixHQUFTO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNMLENBQUM7UUFDTCxpQkFBQztJQUFELENBQUMsQUF0R0QsSUFzR0M7SUF0R1ksa0JBQVUsYUFzR3RCLENBQUE7Ozs7SUN0SEQ7UUFBQTtRQUVBLENBQUM7UUFBRCxzQkFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRlksdUJBQWUsa0JBRTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYW1lc3BhY2UgREREVG9vbHMuQ29tbW9uSW50ZXJmYWNlcyB7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVR5cGVUcmFja2luZyB7XHJcbiAgICBfX3R5cGVOYW1lOiBzdHJpbmc7XHJcbiAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBfX29iamVjdEluc3RhbmNlSWQ/OiBzdHJpbmc7XHJcbn1cclxuLy8gfSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZGVmYXVsdCBiZWhhdmlvciBhbmQgaW50ZXJmYWNlcyBmb3IgYSBQZXJzaXN0YWJsZSBPYmplY3QsIGFuIG9iamVjdCB0aGF0IGhhcyBhIHN0YXRlIHRoYXQgd2lsbCBwcm9iYWJseSBiZSBwZXJzaXN0ZWQuIEl0IGdpdmVzIHN1cHBvcnQgdG8gXCJ1cGdyYWRlXCIgcGVyc2lzdGVkIG9iamVjdHMuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQZXJzaXN0YWJsZSBleHRlbmRzIElUeXBlVHJhY2tpbmcge1xyXG5cdGdldFVwZ3JhZGVkSW5zdGFuY2U/KGZyb21JbnN0YW5jZTogSVBlcnNpc3RhYmxlKTogSVBlcnNpc3RhYmxlO1xyXG5cdGdldFN0YXRlKCk6IElUeXBlVHJhY2tpbmc7XHJcblx0c2V0U3RhdGUoc3RhdGU6IElUeXBlVHJhY2tpbmcpO1xyXG59XHJcbi8vIH0iLCIvLyBuYW1lc3BhY2UgREREVG9vbHMuQ29tbW9uSW50ZXJmYWNlcyB7XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJRXF1YXRhYmxlPFQ+IHtcclxuXHRcdGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbjtcclxuXHR9XHJcbi8vIH0iLCIvKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFZhbHVlT2JqZWN0IHBhdHRlcm4uXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3Qge1xyXG5cclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtJRXF1YXRhYmxlfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZU9iamVjdDxUPiBleHRlbmRzIElFcXVhdGFibGU8VD4sIElQZXJzaXN0YWJsZSB7XHJcblxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdFwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG4vLyAgICBpbXBvcnQgSVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuSVZhbHVlT2JqZWN0O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJS2V5VmFsdWVPYmplY3Q8VD4gZXh0ZW5kcyBJVmFsdWVPYmplY3Q8VD4ge1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcbi8vIH0iLCIvKipcclxuICogTWluaW1hbCBFcnJvciBoYW5kbGluZyBiYXNlIGJlaGF2aW9ycyBmb3IgdGhlIGRvbWFpbiBtb2RlbC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICBzdGF0aWMgdGhyb3cobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGVyciA9IEJhc2VFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShuYW1lLCBtZXNzYWdlKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEVycm9ySW5zdGFuY2UobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSB8fCBuYW1lKTtcclxuICAgICAgICBlcnIubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgLy8gVGhyb3duIGJ5IHBlcnNpc3RhYmxlIG9iamVjdHNcclxuICAgIHN0YXRpYyBTdGF0ZUlzTm90QW5PYmplY3QgPSBcIlN0YXRlIGlzIG5vdCBhbiBPYmplY3RcIjtcclxuICAgIHN0YXRpYyBUeXBlTmFtZU5vdFNldCA9IFwiVHlwZU5hbWUgbm90IHNldFwiO1xyXG4gICAgc3RhdGljIFR5cGVWZXJzaW9uTm90U2V0ID0gXCJUeXBlVmVyc2lvbiBub3Qgc2V0XCI7XHJcbiAgICBzdGF0aWMgVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUgPSBcIlVuYWJsZSB0byBJbnN0YW50aWF0ZSBUeXBlXCI7XHJcbiAgICBzdGF0aWMgVHlwZVJlZ2lzdHJ5Tm90U2V0ID0gXCJUeXBlUmVnaXN0cnkgbm90IHNldFwiO1xyXG5cclxuICAgIC8vIFRocm93biBieSB0aGUgRmFjdG9yeS9UeXBlUmVnaXN0cnlcclxuICAgIHN0YXRpYyBUeXBlTm90UmVnaXN0ZXJlZCA9IFwiVHlwZSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB3aXRoIHRoZSBUeXBlUmVnaXN0cnlcIjtcclxuICAgIHN0YXRpYyBDYW5ub3RSZWdpc3RlclVuZGVmaW5lZCA9IFwidHlwZVByb3RvdHlwZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIlxyXG4gICAgXHJcbiAgICAvLyBUaHJvd24gYnkgdGhlIFVwZ3JhZGVyXHJcbiAgICBzdGF0aWMgVHlwZU5vdEluc3RhdGlhYmxlID0gXCJUeXBlIGlzIG5vdCBpbnN0YW50aWFibGVcIjtcclxuICAgIHN0YXRpYyBVcGdyYWRlUGF0aE5vdEZvdW5kID0gXCJVcGdyYWRlIFBhdGggbm90IEZvdW5kXCI7XHJcbiAgICBzdGF0aWMgSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCA9IFwiSW5jb3JyZWN0IFZlcnNpb24gRm9ybWF0XCI7XHJcbiAgICBzdGF0aWMgV3JvbmdWZXJzaW9uSW5VcGdyYWRlZEluc3RhbmNlID0gXCJXcm9uZyBWZXJzaW9uIGluIFVwZ3JhZGVkIEluc3RhbmNlXCI7XHJcbn0iLCIvKipcclxuICogU29tZSBzaW1wbGUgY2xhc3NlcyB1c2VkIGluIGRpZmZlcmVudCBtb2R1bGVzLlxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlV0aWxzIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWlkIHtcclxuXHQvLyBIZWxwZXIgZm9yIGd1aWQgZ2VuZXJhdGlvbi5cclxuXHRwcml2YXRlIHN0YXRpYyBpc1ZhbGlkKGd1aWQ6IHN0cmluZykge1xyXG5cdFx0dmFyIGd1aWRSZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeW3soXT9bMC05QS1GYS1mXXs4fVstXT8oWzAtOUEtRmEtZl17NH1bLV0/KXszfVswLTlBLUZhLWZdezEyfVspfV0/JFwiKTtcclxuXHRcdHJldHVybiBndWlkUmVnZXhwLnRlc3QoZ3VpZCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXRpYyBzNCgpIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG5cdFx0XHQudG9TdHJpbmcoMTYpXHJcblx0XHRcdC5zdWJzdHJpbmcoMSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdlbmVyYXRlKCk6IHN0cmluZyB7XHJcblx0XHR2YXIgbmV3U2ltcGxlR3VpZCA9IFwie1wiICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICtcclxuXHRcdFx0U2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIn1cIjtcclxuXHJcblx0XHRpZiAoU2ltcGxlR3VpZC5pc1ZhbGlkKG5ld1NpbXBsZUd1aWQpKSB7XHJcblx0XHRcdHJldHVybiBuZXdTaW1wbGVHdWlkO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiU2hvdWxkIE5ldmVyIEhhcHBlbiEgVGhlIGdlbmVyYXRlZCBndWlkIGlzIG5vdCB2YWxpZCFcIilcclxuXHR9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcblx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRpbXBsZW1lbnRzIElWYWx1ZU9iamVjdDxUPiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gUGVyIG9nbmkgcHJvcHJpZXTDoCBkZWxsJ0lURU0gdmVyaWZpY28gbCd1Z3VhZ2xpYW56YSBjb24gbCdpc3RhbnphIGF0dHVhbGVcclxuXHRcdHZhciBmb3JlaWduID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XHJcblx0XHR2YXIgbG9jYWwgPSBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuXHJcblx0XHRyZXR1cm4gZm9yZWlnbiA9PT0gbG9jYWw7XHJcblx0fVxyXG59XHJcbi8vIH0iLCIvKipcclxuICogQ29sbGVjdGlvbiBvZiBnZW5lcmFsIGFuZCBjb21tb25seSB1c2VkIFZhbHVlT2JqZWN0cy4gXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3RzIHtcclxuXHJcbmltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEd1aWQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8R3VpZD4gaW1wbGVtZW50cyBJS2V5VmFsdWVPYmplY3Q8R3VpZD4ge1xyXG5cclxuICAgIHB1YmxpYyBfX3R5cGVOYW1lID0gXCJERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZFwiO1xyXG4gICAgcHVibGljIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBndWlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ3VpZD86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIGlmIChndWlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZCA9IGd1aWRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogR3VpZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHdWlkKFNpbXBsZUd1aWQuZ2VuZXJhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsdWVPYmplY3RzIHVzZWQgYXMga2V5IE1VU1QgaW1wbGVtZW50IGEgdG9TdHJpbmcgbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUga2V5IGFzIHN0cmluZy5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ndWlkO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7R3VpZH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0cy9HdWlkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RyeTogeyBbdHlwZU5hbWU6IHN0cmluZ106IHsgW3R5cGVWZXJzaW9uOiBzdHJpbmddOiBuZXcgKCkgPT4gSVBlcnNpc3RhYmxlIH0gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGF0ZXN0VmVyc2lvbnM6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaWJyYXJ5UmVnaXN0ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWx3YXlzIFJlZ2lzdGVyIExpYnJhcnkgVmFsdWUgT2JqZWN0cy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0ZXJWYWx1ZU9iamVjdHNMaWJyYXJ5KCkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICBzVGhpcy5yZWdpc3RlclR5cGUoXCJERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZFwiLCBcInYxXCIsIDxhbnk+R3VpZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcsIHR5cGVQcm90b3R5cGU6IG5ldyAoKSA9PiBJUGVyc2lzdGFibGUpOiB2b2lkIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgaWYgKCF0eXBlUHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQsIFwidHlwZVByb3RvdHlwZSBzdXBwbGllZCBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBudWxsIG9yIHVuZGVmaW5lZCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNUaGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdID0gdGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gfHwge307XHJcbiAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSA9IHR5cGVQcm90b3R5cGU7XHJcblxyXG4gICAgICAgIHNUaGlzLnVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgIGlmICghc1RoaXMubGlicmFyeVJlZ2lzdGVyZWQpIHtcclxuICAgICAgICAgICAgc1RoaXMubGlicmFyeVJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzVGhpcy5yZWdpc3RlclZhbHVlT2JqZWN0c0xpYnJhcnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlTGF0ZXN0VmVyc2lvbnModHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICBpZiAoIXNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVmZXJlbmNlID0gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdO1xyXG4gICAgICAgIGlmIChzVGhpcy5pc1ZlcnNpb25HcmVhdGVyKHR5cGVWZXJzaW9uLCByZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25HcmVhdGVyKHZTdWJqZWN0OiBzdHJpbmcsIHZSZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICB2YXIgdlM6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZTdWJqZWN0KTtcclxuICAgICAgICB2YXIgdlI6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZSZWZlcmVuY2UpO1xyXG4gICAgICAgIHJldHVybiB2UyA+IHZSO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RWZXJzaW9uTnVtYmVyKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICB2YXIgdmVyc2lvbjogc3RyaW5nID0gdHlwZVZlcnNpb24ucmVwbGFjZShcInZcIiwgXCJcIik7XHJcbiAgICAgICAgdmFyIGFzTnVtYmVyID0gTnVtYmVyKHZlcnNpb24pO1xyXG4gICAgICAgIHJldHVybiBhc051bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICBpZiAoIXR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHR5cGVWZXJzaW9uID0gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl0pIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJWZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBvZiBUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRvSW5zdGFudGlhdGUgPSBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV1bdHlwZVZlcnNpb25dO1xyXG4gICAgICAgIHZhciB0b1JldHVybjtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdG9SZXR1cm4gPSA8VD4obmV3ICg8YW55PnRvSW5zdGFudGlhdGUpKCkpO1xyXG4gICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZU5hbWUgPSB0eXBlTmFtZTtcclxuICAgICAgICAgICAgLy90b1JldHVybi5fX3R5cGVWZXJzaW9uID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiBzcGVjaWZpZWQgdmVyc2lvbiBpcyB0aGUgbGF0ZXN0IGZvciB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICByZXR1cm4gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpID09PSB0eXBlVmVyc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgbm8gdmVyc2lvbiB0eXBlIGlzIGRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgIHJldHVybiBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gfHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOZXh0VmVyc2lvbih0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCFzVGhpcy52ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhyb3cgdGhlIGNvcnJlY3QgZXhjZXB0aW9uO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSBOdW1iZXIodHlwZVZlcnNpb24uc3Vic3RyKDEpKTtcclxuICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgIHJldHVybiBuZXh0VmVyc2lvbjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHtUeXBlUmVnaXN0cnl9IGZyb20gXCIuL1R5cGVSZWdpc3RyeVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbi8qKlxyXG4gKiBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnkgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGNyZWF0ZSBhbmQgcmVjb25zdGl0dXRlIHN0YXRmZXVsIG9iamVjdHMuXHJcbiAqIEl0IGd1cmFudGVlcyB0aGF0IGEgc3RhdGZ1bCBvYmplY3QgaXMgYWx3YXlzIGNyZWF0ZWQgb3IgcmVjb25zdGl0dXRlZCB0byBpdHMgbGF0ZXN0IHZlcnNpb24uICBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHlwZVJlZ2lzdHJ5OiBUeXBlUmVnaXN0cnkgPSBuZXcgVHlwZVJlZ2lzdHJ5KCk7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXJzIGEgbmV3IElQZXJzaXN0YWJsZSB0eXBlIHdpdGggdGhlIEZhY3RvcnlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogbmV3ICgpID0+IElQZXJzaXN0YWJsZSkge1xyXG4gICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RlclR5cGUodHlwZU5hbWUsIHR5cGVWZXJzaW9uLCB0eXBlUHJvdG90eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCB0eXBlLiBJZiB0eXBlVmVyc2lvbiBpcyBub3Qgc3VwcGxpZWQsIGxhdGVzdCBhdmFpbGFibGUgdmVyc2lvbiBpcyByZXR1cm5lZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVUeXBlSW5zdGFuY2U8VCBleHRlbmRzIElQZXJzaXN0YWJsZT4odHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb24/OiBzdHJpbmcpOiBUIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIUZhY3RvcnkudHlwZVJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZVJlZ2lzdHJ5Tm90U2V0LCBcIlBsZWFzZSBkZWZpbmUgYSB0eXBlIHJlZ2lzdHJ5IGFuZCBzZXQgaXQgb24gdGhlIEZhY3RvcnkgY2FsbGluZyAnc2V0VHlwZVJlZ2lzdHJ5JyBtZXRob2QuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBUeXBlUmVnaXN0cnkuZ2V0VHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgKHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciB0eXBlVG9JbnN0YXRpYXRlID0gRmFjdG9yeS5jb21wdXRlRnVsbHlRdWFsaWZpZWRUeXBlTmFtZSh0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgIC8vICAgICAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZVRvSW5zdGF0aWF0ZSArIFwiKClcIik7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIFRoaXMgZmFpbHVyZSBpcyBleHBlY3RlZCBpZiB3ZSBhcmUgYXNraW5nIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZTxUPih0eXBlTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0b1JldHVybi5fX3R5cGVWZXJzaW9uICE9IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRyeSB7XHJcbiAgICAgICAgLy8gICAgIHRvUmV0dXJuID0gPFQ+ZXZhbChcIm5ldyBcIiArIHR5cGVOYW1lICsgXCIoKVwiKTtcclxuICAgICAgICAvLyB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBpbnN0YW5jZSBmcm9tIGl0cyBzdGF0ZS4gV2lsbCBhbHdheXMgcmV0dXJuIHRoZSBsYXRlc3QgdmVyc2lvbiBwb3NzaWJsZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShzdGF0ZTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcInN0YXRlIGNhbm5vdCBiZSAndW5kZWZpbmVkJ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcInN0YXRlIGNhbm5vdCBiZSAnbnVsbCdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAoRmFjdG9yeS5pc1BlcnNpc3RhYmxlT2JqZWN0KHN0YXRlKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwZXJzaXN0YWJsZTogSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgIHBlcnNpc3RhYmxlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2Uoc3RhdGUuX190eXBlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBwZXJzaXN0YWJsZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHdhcnJhbnRpZXMgdGhhdCBhIHR5cGUgaXMgYWx3YXlzIHJldHVybmVkIGF0IGl0cyBsYXRlc3QgdmVyc2lvbi5cclxuICAgICAgICAgICAgICAgIHZhciB1cGdyYWRlZFBlcnNpc3RhYmxlID0gVXBncmFkZXIudXBncmFkZShwZXJzaXN0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBncmFkZWRQZXJzaXN0YWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiBpdCBpcyBub3QgYSBwZXJzaXN0YWJsZU9iamVjdCBjYW4gYmUgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGFuZCBtdXN0IGJlIHJlY29uc3RpdHV0ZWRcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBhbnkgPSBBcnJheS5pc0FycmF5KHN0YXRlKSA/IFtdIDoge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRFbGVtZW50IGluIHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0VsZW1lbnQgPSBzdGF0ZVtjdXJyZW50RWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybltjdXJyZW50RWxlbWVudF0gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpc0VsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gXCJQcmltaXRpdmVcIlwiIHR5cGVzIGFyZSByZXR1cm5lZCBhcyB0aGV5IGFyZVxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiBhbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgXCJJUGVyc2lzdGFibGVcIiBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGlzUGVyc2lzdGFibGVPYmplY3Qob2JqZWN0VG9UZXN0OiBhbnkpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3RUb1Rlc3QgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwZXJzaXN0YWJsZSA9IDxJUGVyc2lzdGFibGU+b2JqZWN0VG9UZXN0O1xyXG4gICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlTmFtZSB8fCBwZXJzaXN0YWJsZS5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlVmVyc2lvbiB8fCBwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGEgdHlwZSBjYW4gYmUgaW5zdGF0aWF0ZWQgKGF0IGl0cyBsYXRlc3QgdmVyc2lvbikuIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc1R5cGVJbnN0YW50aWFibGUodHlwZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB0bXBUeXBlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UodHlwZU5hbWUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFwiRnVsbHkgUXVhbGlmaWVkIFR5cGVOYW1lXCIgb2YgdHlwZSBcInR5cGVOYW1lXCIgZm9yIHRoZSBzdXBwbGllZCBcInZlcnNpb25cIi5cclxuICAgICAqIEZRVE4gaXMgY29tcHV0ZWQgZnJvbSB0eXBlTmFtZSBhZGRpbmcgdGhlIHZlcnNpb24gc3RyaW5nIGluIHRoZSByaWdodCBwbGFjZS5cclxuICAgICAqIEV4YW1wbGVcclxuICAgICAqIHR5cGVOYW1lOiBBcHBsaWNhdGlvbi5Nb2RlbC5PZmZlcnRhXHJcbiAgICAgKiB2ZXJzaW9uOiB2MlxyXG4gICAgICogcmV0dXJuOiBBcHBsaWNhdGlvbi5Nb2RlbC52Mi5PZmZlcnRhXHJcbiAgICAgKi9cclxuICAgIC8vIHByaXZhdGUgc3RhdGljIGNvbXB1dGVGdWxseVF1YWxpZmllZFR5cGVOYW1lKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gICAgIHZhciBmcXRuUGFydHNBcnJheSA9IHR5cGVOYW1lLnNwbGl0KFwiLlwiKTtcclxuICAgIC8vICAgICB2YXIgY2xhc3NOYW1lID0gZnF0blBhcnRzQXJyYXkucG9wKCk7XHJcbiAgICAvLyAgICAgZnF0blBhcnRzQXJyYXkucHVzaCh0eXBlVmVyc2lvbik7XHJcbiAgICAvLyAgICAgZnF0blBhcnRzQXJyYXkucHVzaChjbGFzc05hbWUpO1xyXG4gICAgLy8gICAgIHZhciBuZXdGcXRuID0gZnF0blBhcnRzQXJyYXkuam9pbihcIi5cIik7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ld0ZxdG47XHJcbiAgICAvLyB9O1xyXG5cclxufVxyXG4vLyB9XHJcblxyXG4vKipcclxuICogVGhlIFVwZ3JhZGVyIGlzIGFuIGhlbHBlciBjbGFzcyB0byBhdXRvbWF0ZSB0aGUgXCJ1cGdyYWRlIHByb2Nlc3NcIiBvZiBhbiBvYmplY3QncyBzdGF0ZS5cclxuICogVGhlIFVwZ3JhZGVyIGlzIGZvdW5kIG9uIHRoZXNlIHByaW5jaXBsZXM6XHJcbiAqICAqIFRoZSBsYXRlc3QgdmVyc2lvbiBGUVROIG11c3QgbWF0Y2ggdGhlIG9uZSBzcGVjaWZpZWQgYnkgdGhlIHByb3BlcnR5IF9fdHlwZU5hbWUsIHdoaWNoIGlzIGluIHRoZSBmb3JtIG5hbWVzcGFjZS5vYmplY3ROYW1lLlxyXG4gKiAgKiBPbGRlciB2ZXJzaW9ucyBvZiBhIFBlcnNpc3RhYmxlT2JqZWN0IE1VU1QgaGF2ZSBhIEZRVE4gaW4gdGhlIGZvcm0gbmFtZXNwYWNlLjx2ZXJzaW9uPi5vYmplY3ROYW1lLlxyXG4gKiAgKiBfX3R5cGVWZXJzaW9uIE1VU1QgYmUgc3BlY2lmaWVkIGFzIHY8dmVyc2lvbk51bWJlcj4gd2hlcmUgdmVyc2lvbiBpcyBhbiBpbnRlZ2VyLlxyXG4gKiAgKiBBbGwgb2JqZWN0J3MgdmVyc2lvbnMgKGV4Y2x1ZGluZyB2MSkgTVVTVCBwcm92aWRlIGFuIGdldFVwZ3JhZGVkSW5zdGFuY2UgbWV0aG9kIHRoYXQga25vd3MgaG93IHRvIG1vZGlmeSBzdGF0ZSB0byBnbyBmcm9tIFxyXG4gKiAgICB2ZXJzaW9uIHY8biAtIDE+IHRvIHY8bj4sIHdoZXJlIG4gaXMgdGhlIHZlcnNpb24gb2YgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBnZXRVcGdyYWRlZEluc3RhbmNlIG1ldGhvZC4gICBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVcGdyYWRlciB7XHJcblxyXG4gICAgLy8gQ29udGFpbnMgdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIGZvciBlYWNoIHR5cGUuIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGF0ZXN0VHlwZVZlcnNpb25NYXA6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgLy8gQ29udGFpbnMgZmxhZ3MgdG8gZGV0ZXJtaW5lIGlmIGxhdHN0VHlwZVZlcnNpb25NYXAgZm9yIGEgc3BlY2lmaWMgdHlwZSBoYXMgYmVlbiBjYWxjdWxhdGVkXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25NYXBCdWlsdDogeyBbdHlwZU5hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkVmVyc2lvbk1hcEZvclR5cGUodHlwZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgdG1wSW5zdGFuY2UgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIFVwZ3JhZGVyLmxhdGVzdFR5cGVWZXJzaW9uTWFwW3R5cGVOYW1lXSA9IHRtcEluc3RhbmNlLl9fdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24gZm9yIFwiICsgdHlwZU5hbWUgKyBcIiBpcyBcIiArIHRtcEluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90SW5zdGF0aWFibGUsIFwiVGhlIHR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQsIHNvIGl0IGlzIGltcG9zc2libGUgdG8gaWRlbnRpZnkgdGhlIGxhdGVzdCBwb3NzaWJsZSB2ZXJzaW9uLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIExvb2tzIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24sIGlmIG5vdCBhbHJlYWR5IGRvbmUuXHJcbiAgICAgICAgaWYgKCFVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgVXBncmFkZXIuYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHRoZSB2ZXJzaW9uIHN1cHBsaWVkIGRvZXNuJ3QgbWF0Y2ggdGhlIGxhdGVzdCB2ZXJzaW9uIGluIHRoZSBtYXAsIHRoZSBpbnN0YW5jZSBtdXN0IGJlIHVwZ3JhZGVkLlxyXG4gICAgICAgIGlmIChVcGdyYWRlci5sYXRlc3RUeXBlVmVyc2lvbk1hcFt0eXBlTmFtZV0gIT09IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB1cGdyYWRlKGluc3RhbmNlRnJvbTogSVBlcnNpc3RhYmxlKTogSVBlcnNpc3RhYmxlIHtcclxuICAgICAgICAvLyBJZiBvYmplY3QgZG9lc24ndCBuZWVkIHRvIHVwZ3JhZGUsIHRoZW4gd2UgYXJlIGRvbmUhXHJcbiAgICAgICAgaWYgKCFVcGdyYWRlci5pc0xhdGVzdFZlcnNpb25Gb3JUeXBlKGluc3RhbmNlRnJvbS5fX3R5cGVOYW1lLCBpbnN0YW5jZUZyb20uX190eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlRnJvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKGluc3RhbmNlRnJvbS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICB2YXIgdXBncmFkZXJJbnN0YW5jZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKGluc3RhbmNlRnJvbS5fX3R5cGVOYW1lLCBuZXh0VmVyc2lvbik7XHJcbiAgICAgICAgdmFyIHVwZ3JhZGVkID0gdXBncmFkZXJJbnN0YW5jZS5nZXRVcGdyYWRlZEluc3RhbmNlKGluc3RhbmNlRnJvbSk7XHJcbiAgICAgICAgLy8gVmVyaWZpZXMgdGhhdCB2ZXJzaW9uIGlzIGVmZmVjdGl2ZWx5IHVwZ3JhZGVkXHJcbiAgICAgICAgaWYgKHVwZ3JhZGVkLl9fdHlwZVZlcnNpb24gIT0gbmV4dFZlcnNpb24pIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5Xcm9uZ1ZlcnNpb25JblVwZ3JhZGVkSW5zdGFuY2UsIFwiVGhlIGV4cGVjdGVkIHZlcnNpb24gb2YgdGhlIHVwZ3JhZGVkIGluc3RhbmNlIHdhcyBcIiArIG5leHRWZXJzaW9uICsgXCIgd2hpbGUgd2FzIGZvdW5kIHRvIGJlIFwiICsgdXBncmFkZXJJbnN0YW5jZS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFVwZ3JhZGVyLnVwZ3JhZGUodXBncmFkZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFZlcnNpb24gbXVzdCBiZSBpbiB0aGUgZm9ybSB2TiB3aGVyZSB2IGlzIGEgY29uc3RhbnQgYW5kIE4gaXMgYW4gaW50ZWdlci5cclxuICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgIGlmICghdmVyc2lvblJlLnRlc3QodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCwgXCJTcGVjaWZpZWQgdmVyc2lvbiBcIiArIHR5cGVWZXJzaW9uICsgXCIgaXMgaW4gaW5jb3JyZWN0IGZvcm1hdC4gTXVzdCBiZSBpbiB0aGUgZm9ybSB2PG4+IHdoZXJlIG4gaXMgYW4gaW50ZWdlci5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2ZXJzaW9uID0gTnVtYmVyKHR5cGVWZXJzaW9uLnN1YnN0cigxKSk7XHJcbiAgICAgICAgdmVyc2lvbiA9IHZlcnNpb24gKyAxO1xyXG4gICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICByZXR1cm4gbmV4dFZlcnNpb247XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVEYXRlIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIkRhdGVcIjtcclxuICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgIF9fZGF0ZUFzU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX19kYXRlQXNTdHJpbmcgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVSZWdFeHAgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiUmVnRXhwXCI7XHJcbiAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICBfX3JlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVnRXhwOiBSZWdFeHApIHtcclxuICAgICAgICB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gPSByZWdFeHAudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWdFeHAoKTogUmVnRXhwIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh0aGlzLl9fcmVndWxhckV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3VjaCB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIHRvdWNoSW5kZXggPSAxO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFByZXBhcmVzIHRoZSBpZCBnZW5lcmF0b3IgZm9yIGEgbmV3IHJ1blxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc2V0VG91Y2hJbmRleCgpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICBzVGhpcy50b3VjaEluZGV4ID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0TmV3SW5kZXgoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyByZXR1cm4gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpXHJcbiAgICAgICAgdmFyIHNUaGlzID0gVG91Y2g7XHJcbiAgICAgICAgc1RoaXMudG91Y2hJbmRleCsrO1xyXG4gICAgICAgIHJldHVybiAoc1RoaXMudG91Y2hJbmRleCsrIC0gMSkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRzIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSB0byBhbiBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0b3VjaChvYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IFRvdWNoXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0lkID0gc1RoaXMuZ2V0TmV3SW5kZXgoKTtcclxuICAgICAgICAgICAgb2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCA9IG5ld0lkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZXMgdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSBmcm9tIGFuIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHVudG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAob2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICBkZWxldGUgb2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBoYXNCZWVuVG91Y2hlZChvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgaWYgKGNhc3RlZC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIH0iLCJpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG5pbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbmltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VyaWFsaXplciB7XHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgYW4gb2JqZWN0IHRvIGEgSlNPTiBzdHJpbmcsIGtlZXBlaW5nIHRyYWNrIG9mIHRoZSBpbnN0YW5jZXMgb2YgdGhlIG9iamVjdHMgc2VyaWFsaXplZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZSh0b1NlcmlhbGl6ZTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgdG9SZXR1cm47XHJcbiAgICAgICAgVG91Y2gucmVzZXRUb3VjaEluZGV4KCk7XHJcbiAgICAgICAgdG9TZXJpYWxpemUgPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0b1JldHVybiA9IEpTT04uc3RyaW5naWZ5KHRvU2VyaWFsaXplLCBTZXJpYWxpemVyLmN1c3RvbVNlcmlhbGl6ZXIpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICBTZXJpYWxpemVyLnVudG91Y2hTb3VyY2VPYmplY3QodG9TZXJpYWxpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmVwcm9jZXNzIHRoZSBvYmplY3QgdHJlZSB0byBiZSBzZXJpYWxpemVkIHRvIGZpbmQgYW5kIHJlcGxhY2UgRGF0ZSBvYmplY3RzIHdpdGggc29tZXRoaW5nIGRpZmZlcmVudC4uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzb3VyY2VPYmplY3RbaWR4XTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZURhdGUgPSBuZXcgU2VyaWFsaXphYmxlRGF0ZShjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gbmV3RmFrZURhdGU7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VSZWdFeHAgPSBuZXcgU2VyaWFsaXphYmxlUmVnRXhwKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlUmVnRXhwO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc291cmNlT2JqZWN0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyB1bnRvdWNoU291cmNlT2JqZWN0KHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gU2VyaWFsaXplcjtcclxuICAgICAgICBpZiAoVG91Y2guaGFzQmVlblRvdWNoZWQoc291cmNlT2JqZWN0KSkge1xyXG4gICAgICAgICAgICBUb3VjaC51bnRvdWNoKHNvdXJjZU9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciggdmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzb3VyY2VPYmplY3RbaWR4XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy51bnRvdWNoU291cmNlT2JqZWN0KGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3N0cHJvY2VzcyB0aGUgb2JqZWN0IHRyZWUgdG8gYmUgc2VyaWFsaXplZCB0byBmaW5kIGFuZCByZXBsYWNlIEZha2VEYXRlIG9iamVjdHMgd2l0aCBEYXRlcyBhZ2Fpbi4uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzb3VyY2VPYmplY3RbaWR4XTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlRGF0ZT5jdXJyZW50KS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZVJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSAoPFNlcmlhbGl6YWJsZVJlZ0V4cD5jdXJyZW50KS5nZXRSZWdFeHAoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShjdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZU9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEl0J3MgZHV0eSBpcyB0byBcInRvdWNoXCIgZXZlcnkgb2JqZWN0IHByb2Nlc3NlIHRvIGFkZCBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkuXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJ5IEpTT04uc3RyaW5naWZ5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGN1c3RvbVNlcmlhbGl6ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghVG91Y2guaGFzQmVlblRvdWNoZWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBUb3VjaC50b3VjaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG4vLyB9IiwiLy8gbmFtZXNwYWNlIERERFRvb2xzLlV0aWxzIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVJZGVudGl0eU1hcCB7XHJcblxyXG4gICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogYW55IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXAgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNUcmFja2VkKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pZFRvT2JqZWN0TWFwW2lkXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgb2JqZWN0OiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHRoaXMuaWRUb09iamVjdE1hcFtpZF0gPSBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgaWRzIGluIHRoZSBtYXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldElkcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgdmFyIHRvUmV0dXJuOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5pZFRvT2JqZWN0TWFwKSB7XHJcbiAgICAgICAgICAgIHRvUmV0dXJuLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlQnlJZChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsIi8qKlxyXG4gKiBJbXBsZW1lbnRzIEpTT04gc3RyaW5nIHNlcmlhbGl6YXRpb24uIEl0IGV4dGVuZHMgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBKU09OLnN0cmluZ2lmeSB0byBhbGxvdyBzZXJpYWxpemF0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gb2YgZGF0ZSBhbmQgcmVndWxhciBleHByZXNzaW9uIG9iamVjdHMsIGFuZCBvYmplY3QgcmVmZXJlbmNlLlxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG5pbXBvcnQge1NpbXBsZUlkZW50aXR5TWFwfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXBcIjtcclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbmltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG5pbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbmltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVzZXJpYWxpemVyIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyBuZWVkZWQgdG8gdHJhY2sgb2JqZWN0IGluc3RhbmNlcyB0byBhY2hpZXZlIGNvcnJlY3QgcmVjb25zdHJ1Y3Rpb24gb2YgdGhlIG9iamVjdCB0cmVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpZGVudGl0eU1hcDogU2ltcGxlSWRlbnRpdHlNYXA7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzZXNpYWxpemVzIGFuIG9iamVjdCBmcm9tIGEgSlNPTiBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUodG9EZXNlcmlhbGl6ZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBEZXNlcmlhbGl6ZXIuaWRlbnRpdHlNYXAgPSBuZXcgU2ltcGxlSWRlbnRpdHlNYXAoKTtcclxuICAgICAgICB2YXIgdG9SZXR1cm4gPSBKU09OLnBhcnNlKHRvRGVzZXJpYWxpemUsIERlc2VyaWFsaXplci5jdXN0b21SZXZpdmVyKTtcclxuICAgICAgICBEZXNlcmlhbGl6ZXIuY2xlYW51cCgpO1xyXG4gICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFucyB0aGUgcmVjb25zaXR1dGVkIGluc3RhbmNlcyBmcm9tIHRoZSBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHksXHJcbiAgICAgKiBhbmQgZW1wdGllcyB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGNsZWFudXAoKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gRGVzZXJpYWxpemVyO1xyXG4gICAgICAgIHZhciBpZE1hcCA9IHNUaGlzLmlkZW50aXR5TWFwO1xyXG4gICAgICAgIHZhciB1bnRvdWNoID0gVG91Y2gudW50b3VjaDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBpZE1hcC5nZXRJZHMoKSkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSBpZE1hcC5nZXRCeUlkKGl0ZW0pO1xyXG4gICAgICAgICAgICB1bnRvdWNoKGN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgbGVhdmUgdGhlIGluc3RhbmNlcyBcImdhcmJhZ2VhYmxlXCIuLi4gaG93IHRvIHRlc3QgPyAgICBcclxuICAgICAgICAgICAgaWRNYXAuZGVsZXRlQnlJZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJdCBoYW5kbGVzIEZha2UqIGluc3RhbmNlcyB1c2VzIF9fb2JqZWN0SW5zdGFuY2VJZCB0byByZWJ1aWxkIGEgY29ycmVjdCBvYmplY3QgdHJlZS4gXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJ5IEpTT04ucGFyc2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VzdG9tUmV2aXZlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IERlc2VyaWFsaXplcjtcclxuICAgICAgICB2YXIgaWRNYXAgPSBzVGhpcy5pZGVudGl0eU1hcDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuaGFzQmVlblRvdWNoZWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRNYXAuaXNUcmFja2VkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWRNYXAuZ2V0QnlJZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc1RoaXMuRmFrZVJlZ0V4cERlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlRGF0ZURlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRNYXAuYWRkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBoYXNCZWVuVG91Y2hlZChvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgaWYgKGNhc3RlZC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hbmFnZXMgUmVnRXhwIERlc2VyaWFsaXphdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBGYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlJlZ0V4cFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBSZWdFeHAodmFsdWUuX19yZWd1bGFyRXhwcmVzc2lvbiB8fCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYW5hZ2VzIERhdGUgRGVzZXJpYWxpemF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIEZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIkRhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSgoPFNlcmlhbGl6YWJsZURhdGU+dmFsdWUpLl9fZGF0ZUFzU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuL0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbmltcG9ydCB7RGVzZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXJcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUGVyc2lzdGFibGVPYmplY3QgaW1wbGVtZW50cyBJUGVyc2lzdGFibGUge1xyXG5cclxuICAgIHB1YmxpYyBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGdldFN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX190eXBlTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOYW1lTm90U2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlVmVyc2lvbk5vdFNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9SZWNvbnN0aXR1dGUgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZSh0aGlzKTtcclxuICAgICAgICB2YXIgcmVjb25zdGl0dXRlZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh0b1JlY29uc3RpdHV0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWNvbnN0aXR1dGVkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGU8VFN0YXRlPihzdGF0ZTogVFN0YXRlKSB7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5TdGF0ZUlzTm90QW5PYmplY3QsIFwic3RhdGUgZGV2ZSBlc3NlcmUgdW4gb2dnZXR0b1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUVsZW1lbnQgPSBzdGF0ZVtlbGVtZW50XTtcclxuICAgICAgICAgICAgdGhpc1tlbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShjdXJyZW50U3RhdGVFbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggdGhpcy5nZXRTdGF0ZSgpICkgKTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuZXhwb3J0IGludGVyZmFjZSBJRG9tYWluRXZlbnQgZXh0ZW5kcyBJUGVyc2lzdGFibGUsIElUeXBlVHJhY2tpbmcge1xyXG5cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFdmVudEhhbmRsZXIge1xyXG4gICAgKGRvbWFpbkV2ZW50OiBJRG9tYWluRXZlbnQpOiB2b2lkO1xyXG59XHJcblxyXG4vLyB9IiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5leHBvcnQgaW50ZXJmYWNlIElEaXNwYXRjaGVyIHtcclxuICAgIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpO1xyXG4gICAgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTtcclxuICAgIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpO1xyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SURpc3BhdGNoZXJ9IGZyb20gXCIuL0lEaXNwYXRjaGVyXCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcbmV4cG9ydCBjbGFzcyBEb21haW5EaXNwYXRjaGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbjogSURpc3BhdGNoZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24oZGlzcGF0Y2hlcjogSURpc3BhdGNoZXIpIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbiA9IGRpc3BhdGNoZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbi5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbi51bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbi5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lFcXVhdGFibGV9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGVcIjtcclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbnRpdHk8VCwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4gZXh0ZW5kcyBJRXF1YXRhYmxlPFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cdGdldEtleSgpOiBUS2V5O1xyXG5cdHNldEtleShrZXk6IFRLZXkpOiB2b2lkO1xyXG59XHJcbi8vIH0iLCJpbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG5pbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi9JRW50aXR5XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcblxyXG4vKipcclxuICogQ2xhc3NlcyBhbmQgaW50ZXJmYWNlcyB0byBpbXBsZW1lbnQgYW4gRW50aXR5LCBhIHBlcnNpc3RhYmxlIG9iamVjdC4gXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRW50aXR5PFQgZXh0ZW5kcyBJRW50aXR5PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG5cdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0aW1wbGVtZW50cyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcblx0cHJpdmF0ZSBrZXk6IFRLZXk7XHJcblx0XHJcblx0cHJpdmF0ZSByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuXHRcdERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBnZXRLZXkoKTogVEtleSB7XHJcblx0XHRyZXR1cm4gdGhpcy5rZXk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHNldEtleShrZXk6IFRLZXkpOiB2b2lkIHtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKCFpdGVtKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpdGVtLmdldEtleSgpLmVxdWFscyh0aGlzLmdldEtleSgpKTtcclxuXHR9XHJcbn1cclxuLy8gfSIsImltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLkFnZ3JlZ2F0ZSB7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBZ2dyZWdhdGVSb290PFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4ge1xyXG5cclxuICAgICAgICBnZXRSZXZpc2lvbklkKCk6IG51bWJlclxyXG4gICAgICAgIGluY3JlbWVudFJldmlzaW9uSWQoKTogdm9pZDtcclxuXHJcbiAgICAgICAgcGVyZmVjdGx5TWF0Y2goYW5vdGhlcjogSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuO1xyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4vSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgdGhlIEFnZ3JlZ2F0ZSBQYXR0ZXJuIGJ5IGRlZmluaW5nIGludGVyZmFjZXMgYW5kIGJhc2UgYmVoYXZpb3IgZm9yIGFuIEFnZ3JlZ2F0ZVJvb3QuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGJlaGF2aW9yIG9mIGFuIEFnZ3JlZ2F0ZVJvb3QsIHdoaWNoIGlzIGJhc2ljYWxseSBhbiBlbnRpdHkuLi5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWdncmVnYXRlUm9vdDxcclxuICAgIFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgID5cclxuICAgIGV4dGVuZHMgQmFzZUVudGl0eTxULCBUS2V5PlxyXG4gICAgaW1wbGVtZW50cyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgSUVudGl0eTxULCBUS2V5PlxyXG57XHJcbiAgICBwcml2YXRlIF9fcmV2aXNpb25JZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fcmV2aXNpb25JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVtZW50UmV2aXNpb25JZCgpIHtcclxuICAgICAgICB0aGlzLl9fcmV2aXNpb25JZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGFyZXMgYW4gYWdncmVnYXRlIHdpdGggYW5vdGhlci4gUmV0dXJucyB0cnVlIGlmIGFnZ3JlZ2F0ZSdzIGRhdGEgYXJlIGV4YWN0bHkgZXF1YWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwZXJmZWN0bHlNYXRjaChvdGhlcjogQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKCFvdGhlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGhpc09uZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgICB2YXIgdGhlT3RoZXIgPSBvdGhlci5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBkbyB0aGUgY29tcGFyaXNvbiBqdXN0IGxpa2UgdmFsdWUgb2JqZWN0cy4uLiBuYWl2ZSBidXQgZnVuY3Rpb25hbCBhdCB0aGlzIHRpbWUuXHJcbiAgICAgICAgdmFyIHRoaXNPbmVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXNPbmUpO1xyXG4gICAgICAgIHZhciB0aGVPdGhlckFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhlT3RoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc09uZUFzU3RyaW5nID09PSB0aGVPdGhlckFzU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBJblByb2Nlc3NEaXNwYXRjaGVyIHtcclxuICAgIHByaXZhdGUgZGVsZWdhdGVzUmVnaXN0cnk6IHsgW2V2ZW50VHlwZU5hbWU6IHN0cmluZ106IElFdmVudEhhbmRsZXJbXSB9ID0ge307XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnkgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZHMgYW4gaGFuZGxlIGlmIChhbmQgb25seSBpZikgdGhlIGhhbmRsZXIgaGFzIG5vdCBiZWVuIFwic3RhbXBlZFwiXHJcbiAgICAgICAgaWYgKCEoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgLy8gQWN0IG9ubHkgaWQgaGFuZGxlciBoYXMgYmVlbiByZWdpc3RlcmVkLlxyXG4gICAgICAgIGlmICgoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV1bZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICBpZiAoKDxhbnk+Y3VycmVudEVsZW1lbnQpLl9faGFuZGxlcklkID09PSAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0uc3BsaWNlKE51bWJlcihlbGVtZW50KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRXJyb3JzOiBFcnJvcltdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEVycm9ycy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuYnVpbGRFcnJvck1lc3NhZ2UoRXJyb3JzKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGUubmFtZSA9IFwiRGlzcGF0Y2hlciBFcnJvclwiO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZEVycm9yTWVzc2FnZShFcnJvcnM6IEVycm9yW10pOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgb2YgRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gZWxlbWVudC5uYW1lICsgXCI6XCIgKyBlbGVtZW50Lm1lc3NhZ2UgKyBcIlxcblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlS2V5VmFsdWVPYmplY3Q8VD5cclxuICAgIGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcbiAgICBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVyaXZlZCBjbGFzc2VzIG11c3QgcmVpbXBsZW1lbnQgdGhpcyBtZXRob2QuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcbi8vIH0iLCIvKipcclxuICogSWRlbnRpZmllcyBhIHF1ZXJ5IHRvIGJlIGV4ZWN1dGVkIGFnYWluc3QgYSBEYXRhc3RvcmVcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5PFQ+IHtcclxuICAgIGV4ZWN1dGUoKTogVFtdO1xyXG59IiwiaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgS2V5Tm90U2V0ID0gXCJLZXkgbm90IHNldFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtTm90Rm91bmQgPSBcIkl0ZW0gTm90IEZvdW5kXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yU2F2aW5nSXRlbSA9IFwiRXJyb3IgU2F2aW5nIEl0ZW1cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JSZWFkaW5nSXRlbSA9IFwiRXJyb3IgUmVhZGluZyBJdGVtXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVycm9yRGVsZXRpbmdJdGVtID0gXCJFcnJvciBEZWxldGluZyBJdGVtXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiA9IFwiV3JvbmcgdHlwZSBmcm9tIEltcGxlbWVudGF0aW9uXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE1hbmFnZWRUeXBlTm90U3VwcGxpZWQgPSBcIlJlcG9zaXRvcnkgbmVlZHMgdG8ga25vdyB3aGF0IHR5cGUgaXQgY2FuIG1hbmFnZVwiO1xyXG59IiwiLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgUmVwb3NpdG9yeSB0byBwZXJzaXN0IEFnZ3JlZ2F0ZXMuIENvbnRhaW5zIGEgcmVmZXJlbmNlIGluIG1lbW9yeSByZXBvc2l0b3J5LlxyXG4gKi9cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlcG9zaXRvcnk8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcbiAgICBnZXRCeUlkKGlkOiBUS2V5KTogVDtcclxuICAgIHNhdmUoaXRlbTogVCk6IHZvaWQ7XHJcbiAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkO1xyXG59XHJcbi8vIH0iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlJlcG9zaXRvcnlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSXRlbUFkZGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtQWRkZWRFdmVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtVXBkYXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtRGVsZXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtUmV0cmlldmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxufVxyXG4vLyB9XHJcbiIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1SZXRyaWV2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxJdGVtUmV0cmlldmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVJldHJpZXZlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgb2JqZWN0U3RhdGU6IElUeXBlVHJhY2tpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIH1cclxuIiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbUFkZGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbUFkZGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbUFkZGVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBvYmplY3RTdGF0ZTogSVR5cGVUcmFja2luZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gfVxyXG4iLCJpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtVXBkYXRlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PEl0ZW1VcGRhdGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVVwZGF0ZWRFdmVudDtcclxuICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIG9iamVjdFN0YXRlOiBJVHlwZVRyYWNraW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyB9XHJcbiIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbmltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1EZWxldGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8SXRlbURlbGV0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtRGVsZXRlZEV2ZW50O1xyXG4gICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgb2JqZWN0U3RhdGU6IElUeXBlVHJhY2tpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIH1cclxuIiwiaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4vSVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbmltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbmltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG5pbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuLyoqXHJcbiAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVwb3NpdG9yeTxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGFuIFwic3RhdGVPYmplY3RcIiB0byB1c2UgZm9yIG9iamVjdCBcInJlY29uc3RydWN0aW9uXCIuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgdGhyb3cgXCJJdGVtTm90Rm91bmRcIiBpZiBubyBlbGVtZW50IG1hdGNoaW5nIHRoZSBpZCB3YXMgZm91bmQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmV0cmlldmVkID0gdGhpcy5nZXRCeUlkSW1wbGVtZW50YXRpb24oaWQpO1xyXG4gICAgICAgICAgICBpZiAocmV0cmlldmVkLl9fdHlwZU5hbWUgIT09IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZSBcIiArIHJldHJpZXZlZC5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHJldHJpZXZlZCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLl9fdHlwZU5hbWUsIHRvUmV0dXJuLl9fdHlwZVZlcnNpb24sIHRvUmV0dXJuLmdldEtleSgpLnRvU3RyaW5nKCksIHJldHJpZXZlZCk7XHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JdGVtTm90Rm91bmQsIGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcInNhdmVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uIFRoZSB0ZW1wbGF0ZSBtZXRob2QgXCJzYXZlXCIgd2lsbCBtYW5hZ2UgdGhlIHJldmlzaW9uSWQgbG9naWMuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCk6IHZvaWQ7XHJcblxyXG4gICAgc2F2ZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBldmVudDogSXRlbVVwZGF0ZWRFdmVudCB8IEl0ZW1BZGRlZEV2ZW50O1xyXG4gICAgICAgIHZhciBhc0l0V2FzOiBUID0gbnVsbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlY3RlZCBpZiB0aGUgZG8gbm90IGV4aXN0cyBpbiB0aGUgUmVwby5cclxuICAgICAgICAgICAgZXZlbnQgPSBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSxpdGVtLmdldFN0YXRlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpdGVtLnBlcmZlY3RseU1hdGNoKGFzSXRXYXMpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IG5ldyBJdGVtVXBkYXRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCksaXRlbS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmFsbHkgc2F2ZXMgYWdncmVnYXRlIGludG8gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgdGhpcy5zYXZlSW1wbGVtZW50YXRpb24oaXRlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZXZlbnQpIHtcclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogdm9pZDtcclxuXHJcbiAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXNJdFdhcyA9IHRoaXMuZ2V0QnlJZChpZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBpdGVtIG5vdCBmb3VuZCwgc28gbm90aGluZyB0byBkZWxldGUhXHJcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IgJiYgZS5uYW1lID09PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1EZWxldGVkRXZlbnQoYXNJdFdhcy5fX3R5cGVOYW1lLCBhc0l0V2FzLl9fdHlwZVZlcnNpb24sIGlkLnRvU3RyaW5nKCksIGFzSXRXYXMuZ2V0U3RhdGUoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpO1xyXG5cclxuICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgIH1cclxufVxyXG4vLyB9IiwiaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuaW1wb3J0IHtCYXNlUmVwb3NpdG9yeX0gZnJvbSBcIi4vQmFzZVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW5NZW1vcnlSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgIGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8VCwgVEtleT5cclxuICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnk8VCwgVEtleT4ge1xyXG5cclxuICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IElQZXJzaXN0YWJsZSB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBtYW5hZ2VkVHlwZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1hbmFnZWRUeXBlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSkge1xyXG5cclxuICAgICAgICB2YXIga2V5ID0gaWQudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzLnN0b3JhZ2Vba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiA8VD50b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCIvKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbmltcG9ydCBJUHJvbWlzZSA9IFEuSVByb21pc2U7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcbiAgICBnZXRCeUlkKGlkOiBUS2V5KTogSVByb21pc2U8VD47XHJcbiAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT47XHJcbiAgICBkZWxldGUoaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT47XHJcbn0iLCJpbXBvcnQge0lSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbmltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbmltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG5pbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxuaW1wb3J0IElQcm9taXNlID0gUS5JUHJvbWlzZTtcclxuXHJcbi8qKlxyXG4gKiBDYXB0dXJlcyBjb21tb24gYmVoYXZpb3Igb2YgcmVwb3NpdG9yeSwgdXNpbmcgdGhlVGVtcGxhdGUgTWV0aG9kIFBhdHRlcm4uXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG1hbmFnZWQgYnkgdGhpcyByZXBvc2l0b3J5LiBXaWxsIGJlIGNvbXBhcmVkIHdpdGggdGhlIF9fdHlwZU5hbWUgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgcmV0cmlldmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKG1hbmFnZWRUeXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuTWFuYWdlZFR5cGVOb3RTdXBwbGllZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0byB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGEgXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPElUeXBlVHJhY2tpbmc+O1xyXG5cclxuICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcjxUPigpO1xyXG4gICAgICAgIHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAodmFsdWU6IFQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lICE9IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmVkIFwiICsgdmFsdWUuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0b1JldHVybjogVCA9IDxUPihGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLl9fdHlwZU5hbWUsIHRvUmV0dXJuLl9fdHlwZVZlcnNpb24sIHRvUmV0dXJuLmdldEtleSgpLnRvU3RyaW5nKCksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodG9SZXR1cm4pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgIHByaXZhdGUgZG9TYXZlKGl0ZW06IFQsIGRlZmVycmVkOiBRLkRlZmVycmVkPHt9Pik6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgdGhpcy5zYXZlSW1wbGVtZW50YXRpb24oaXRlbSkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JTYXZpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9IFEuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50IHwgSXRlbUFkZGVkRXZlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0QnlJZChpdGVtLmdldEtleSgpKS50aGVuKFxyXG4gICAgICAgICAgICAocmVhZFZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0IHNvIHdlIGhhdmUgdG8gY29tcGFyZSBpdCB3aXRoIHdoYXQgd2UgYXJlIHNhdmluZy5cclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5wZXJmZWN0bHlNYXRjaChyZWFkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoYXQgaXMgaW4gdGhlIGRhdGFiYXNlIHBlcmZlY3RseSBtYXRjaCB3aGF0IHdlIGFyZSBzYXZpbmcsIHNvIG5vdGhpbmcgdG8gZG8hXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT0gRXJyb3JzLkl0ZW1Ob3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZWN0ZWQsIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgcmVwbywgc28gd2UgaGF2ZSB0byBhZGQgaXQhXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TYXZlKGl0ZW0sIGRlZmVycmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKSwgaXRlbS5nZXRTdGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3JzIG11c3QgYmUgdHJlYXRlZCBhcyAuLi4gXCJFcnJvcnNcIlxyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yUmVhZGluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG5cclxuICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcjx7fT4oKTtcclxuICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1EZWxldGVkRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5nZXRCeUlkKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1EZWxldGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGlkLnRvU3RyaW5nKCksIGl0ZW0uZ2V0U3RhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGJ1aWxkIGFuIGVycm9yIGZyb20gYSByZXR1cm4gdmFsdWUgb2YgdGhlIEFzeW5jIEltcGxlbWVudGF0aW9ucy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidWlsZEVycm9yKGVycm9yRnJvbUNhbGw6IGFueSwgZXJyb3JJZkVycm9yRnJvbUNhbGxJc05vdEVycm9yOiBzdHJpbmcpOiBFcnJvciB7XHJcbiAgICAgICAgdmFyIHJlYXNvbjogRXJyb3I7XHJcbiAgICAgICAgaWYgKGVycm9yRnJvbUNhbGwgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICByZWFzb24gPSBlcnJvckZyb21DYWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvciwgSlNPTi5zdHJpbmdpZnkoZXJyb3JGcm9tQ2FsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVhc29uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9fbmFtZVNwYWNlID0gXCJERERUb29scy5Vbml0T2ZXb3JrXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9iamVjdFNhdmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RTYXZlZEV2ZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9iamVjdERlbGV0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmplY3RSZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbn1cclxuLy8gfVxyXG4iLCJcclxuaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuZXhwb3J0IGVudW0gSXRlbVN0YXR1cyB7XHJcbiAgICBOZXcsXHJcbiAgICBNb2RpZmllZCxcclxuICAgIFNhdmVkLFxyXG4gICAgRGVsZXRlZFxyXG59XHJcblxyXG4vKipcclxuICogSW50ZXJuYWwgY2xhc3MgdG8gc3RvcmUgaXRlbSBzdGF0dXMgaW5mb1xyXG4gKi9cclxuY2xhc3MgVHJhY2tlZEl0ZW08XHJcbiAgICBUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICA+IHtcclxuICAgIC8vIFdpbGwgY29udGFpbiBhIHNlcmlhbGl6ZWQgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IGFzIGl0IHdhcyB3aGVuIGl0IHdhcyBsb2FkZWQgZnJvbSB0aGUgcmVwb3NpdG9yeS5cclxuXHJcbiAgICBwcml2YXRlIGFzTG9hZGVkOiBJUGVyc2lzdGFibGUgLy8gV2lsbCBjb250YWluIHRoZSBzdGF0ZSBvZiB0aGUgb2JqZWN0IHdoZW4gZmlyc3QgYWRkZWQgb3IgdXBkYXRlZFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RhdHVzOiBJdGVtU3RhdHVzLFxyXG4gICAgICAgIHByaXZhdGUgaXRlbTogVCxcclxuICAgICAgICBwcml2YXRlIGtleTogVEtleVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5hc0xvYWRlZCA9IGl0ZW0uZ2V0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFya0FzTmV3KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5OZXc7XHJcbiAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXJrQXNTYXZlZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuU2F2ZWQ7XHJcbiAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXJrQXNNb2RpZmllZCgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuTW9kaWZpZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLkRlbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXR1cygpOiBJdGVtU3RhdHVzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzQ2hhbmdlZCgpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFN0YXRlKTtcclxuICAgICAgICB2YXIgYXNMb2FkZWRBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuYXNMb2FkZWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlQXNTdHJpbmcgIT09IGFzTG9hZGVkQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzIGhhcyBiZWVuIG1vZGlmaWVkLCBhbmQgY2hhbmdlcyB0aGUgc3RhdHVzIGFjY29yZGluZ2x5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlU2F2ZWRJdGVtU3RhdHVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gSXRlbVN0YXR1cy5TYXZlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya0FzTW9kaWZpZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eU1hcFxyXG4gICAgPFxyXG4gICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgPlxyXG57XHJcblxyXG4gICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogVHJhY2tlZEl0ZW08VCwgVEtleT4gfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGtleSBpcyBhbHJlYWR5IHN0b3JlZCBpbiB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzVHJhY2tlZChrZXk6IFRLZXkpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10uZ2V0SXRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgb3IgcmVwbGFjZXMgYW4gaXRlbSB0byB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoa2V5OiBUS2V5LCBpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgbmV3SXRlbSA9IG5ldyBUcmFja2VkSXRlbShJdGVtU3RhdHVzLk5ldywgaXRlbSwga2V5KTtcclxuICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10gPSBuZXdJdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZShrZXk6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2tleS50b1N0cmluZygpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldElkcygpOiBUS2V5W10ge1xyXG4gICAgICAgIHZhciB0b1JldHVybjogVEtleVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aGlzLmlkVG9PYmplY3RNYXBbZWxlbWVudF0uZ2V0S2V5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc0RlbGV0ZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNEZWxldGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1hcmtBc1NhdmVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzU2F2ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNNb2RpZmllZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtU3RhdHVzKGtleTogVEtleSk6IEl0ZW1TdGF0dXMge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRyYWNrZWRJdGVtLmdldFN0YXR1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXB1dGVzIHRoZSBjb3JyZWN0IHN0YXR1cyBmb3IgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzLCBhcyBpdCBtYXkgaGF2ZSBiZWVuIG1vZGlmaWVkIHNpbmNlIG5vdyAoaGVyZSB3ZSBkb24ndCBoYXZlIHByb3BlcnR5IHRyYWNraW5nKS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICBpdGVtLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VHJhY2tlZEl0ZW0oa2V5OiBUS2V5KTogVHJhY2tlZEl0ZW08VCwgVEtleT4ge1xyXG4gICAgICAgIHZhciB0b1JldHVybiA9IHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgaWYgKCF0b1JldHVybikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iLCIvKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBVbml0T2ZXb3JrLiBBIFVuaXRPZldvcmsga2VlcHMgdHJhY2sgb2YgY2hhbmdlcyBvbiB0aGUgQWdncmVnYXRlcyBsb2FkZWQgZnJvbSB0aGUgdW5kZXJseWluZyByZXBvc2l0b3J5IGFuZCBhbGxvd3MgdG8gc2F2ZSB0aGVtIGFsbCBpbiBhIHNpbmdsZSBjYWxsLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVW5pdE9mV29yazxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICovXHJcbiAgICBnZXRCeUlkKGtleTogVEtleSk6IFQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgKi9cclxuICAgIHNhdmVBbGwoKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB0byByZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgdG8gdW5yZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTogdm9pZDtcclxuXHJcbn1cclxuLy8gfSIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0RGVsZXRlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdERlbGV0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3REZWxldGVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyB9XHJcbiIsImltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5pbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0UmV0cmlldmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0UmV0cmlldmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0UmV0cmlldmVkRXZlbnQ7XHJcbiAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcbi8vIH1cclxuIiwiaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RTYXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdFNhdmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0U2F2ZWRFdmVudDtcclxuICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICkgeyBcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyB9XHJcbiIsImltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5pdE9mV29ya0Vycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgcHVibGljIHN0YXRpYyBJdGVtTWFya2VkQXNEZWxldGVkID0gXCJUaGlzIGl0ZW0gd2FzIG1hcmtlZCBhcyBkZWxldGVkIGluIHRoaXMgVW5pdE9mV29yaywgYW5kIGNhbm5vdCBiZSByZXRyaWV2ZWQuXCI7XHJcbn1cclxuXHJcbi8vIH0iLCIvLyBuYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7SWRlbnRpdHlNYXAsIEl0ZW1TdGF0dXN9IGZyb20gXCIuL0lkZW50aXR5TWFwXCI7XHJcbmltcG9ydCB7T2JqZWN0RGVsZXRlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3REZWxldGVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3RSZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuaW1wb3J0IHtPYmplY3RTYXZlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3RTYXZlZEV2ZW50XCI7XHJcbmltcG9ydCB7VW5pdE9mV29ya0Vycm9yc30gZnJvbSBcIi4vVW5pdE9mV29ya0Vycm9yc1wiO1xyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVuaXRPZldvcms8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgcHJpdmF0ZSBpZE1hcDogSWRlbnRpdHlNYXA8VCwgVEtleT47XHJcbiAgICBwcml2YXRlIHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+O1xyXG4gICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBJblByb2Nlc3NEaXNwYXRjaGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+KSB7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLmlkTWFwID0gbmV3IElkZW50aXR5TWFwPFQsIFRLZXk+KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaWRNYXAuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpID09PSBJdGVtU3RhdHVzLkRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgIFVuaXRPZldvcmtFcnJvcnMudGhyb3coVW5pdE9mV29ya0Vycm9ycy5JdGVtTWFya2VkQXNEZWxldGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLnJlcG9zaXRvcnkuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgIHRoaXMuaWRNYXAuYWRkKGtleSwgdG9SZXR1cm4pO1xyXG4gICAgICAgIHRoaXMuaWRNYXAubWFya0FzU2F2ZWRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgIHZhciByZXRyaWV2ZWRFdmVudCA9IG5ldyBPYmplY3RSZXRyaWV2ZWRFdmVudCh0b1JldHVybi5fX3R5cGVOYW1lLCB0b1JldHVybi5fX3R5cGVWZXJzaW9uLCB0b1JldHVybi5nZXRLZXkoKS50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnJhaXNlRXZlbnQocmV0cmlldmVkRXZlbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIHRoaXMuaWRNYXAubWFya0FzRGVsZXRlZEJ5SWQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzYXZlQWxsKCkge1xyXG4gICAgICAgIHZhciBrZXlzID0gdGhpcy5pZE1hcC5nZXRJZHMoKTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgb2Yga2V5cykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pZE1hcC51cGRhdGVTYXZlZEl0ZW1TdGF0dXMoa2V5KTtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5EZWxldGVkOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0RlbGV0ZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTW9kaWZpZWQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTmV3OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuU2F2ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByb2Nlc3NEZWxldGVkSXRlbShrZXk6IFRLZXkpIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgIHZhciBkZWxldGVkRXZlbnQgPSBuZXcgT2JqZWN0RGVsZXRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5LmRlbGV0ZShrZXkpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQnlJZChrZXkpO1xyXG4gICAgICAgIHRoaXMucmFpc2VFdmVudChkZWxldGVkRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5LnNhdmUoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuICAgICAgICAvLyByYWlzZXMgYW4gZXZlbnQgZm9yIHdob21ldmVyIGlzIGludGVyZXN0ZWRcclxuICAgICAgICB2YXIgc2F2ZWRFdmVudCA9IG5ldyBPYmplY3RTYXZlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy5yYWlzZUV2ZW50KHNhdmVkRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBvYmplY3QgZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW1vdmVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIH1cclxuIiwiaW1wb3J0IHtGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vblZPTGlicmFyeSB7XHJcbiAgICBcclxufSJdfQ==