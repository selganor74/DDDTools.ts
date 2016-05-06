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
            BaseErrors.Throw = function (name, message) {
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
    var StatefulObject;
    (function (StatefulObject) {
        var BaseErrors = DDDTools.ErrorManagement.BaseErrors;
        var StatefulObjectErrors = (function (_super) {
            __extends(StatefulObjectErrors, _super);
            function StatefulObjectErrors() {
                _super.apply(this, arguments);
            }
            StatefulObjectErrors.StateIsNotAnObject = "State is not an Object";
            StatefulObjectErrors.TypeNameNotSet = "TypeName not set";
            StatefulObjectErrors.TypeVersionNotSet = "TypeVersion not set";
            StatefulObjectErrors.UnableToInstantiateType = "Unable to Instantiate Type";
            return StatefulObjectErrors;
        }(BaseErrors));
        StatefulObject.StatefulObjectErrors = StatefulObjectErrors;
    })(StatefulObject = DDDTools.StatefulObject || (DDDTools.StatefulObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var StatefulObject;
    (function (StatefulObject) {
        var BaseErrors = DDDTools.ErrorManagement.BaseErrors;
        var UpgraderErrors = (function (_super) {
            __extends(UpgraderErrors, _super);
            function UpgraderErrors() {
                _super.apply(this, arguments);
            }
            UpgraderErrors.TypeNotInstatiable = "Type in not instantiable";
            UpgraderErrors.UpgradePathNotFound = "Upgrade Path not Found";
            UpgraderErrors.IncorrectVersionFormat = "Incorrect Version Format";
            UpgraderErrors.WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
            return UpgraderErrors;
        }(BaseErrors));
        StatefulObject.UpgraderErrors = UpgraderErrors;
    })(StatefulObject = DDDTools.StatefulObject || (DDDTools.StatefulObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var StatefulObject;
    (function (StatefulObject) {
        var Errors = StatefulObject.UpgraderErrors;
        var StatefulObjectUpgrader = (function () {
            function StatefulObjectUpgrader() {
            }
            StatefulObjectUpgrader.buildVersionMapForType = function (typeName) {
                if (StatefulObjectUpgrader.isVersionMapBuilt[typeName]) {
                    return;
                }
                try {
                    var tmpInstance = StatefulObject.StatefulObjectFactory.createTypeInstance(typeName);
                    StatefulObjectUpgrader.latestTypeVersionMap[typeName] = tmpInstance.__typeVersion;
                }
                catch (e) {
                    Errors.Throw(Errors.TypeNotInstatiable, "The type " + typeName + " cannot be instantiated, so it is impossible to identify the latest possible version.");
                }
                StatefulObjectUpgrader.isVersionMapBuilt[typeName] = true;
            };
            StatefulObjectUpgrader.isLatestVersionForType = function (typeName, typeVersion) {
                if (!StatefulObjectUpgrader.isVersionMapBuilt[typeName]) {
                    StatefulObjectUpgrader.buildVersionMapForType(typeName);
                }
                if (StatefulObjectUpgrader.latestTypeVersionMap[typeName] !== typeVersion) {
                    return true;
                }
                return false;
            };
            StatefulObjectUpgrader.upgrade = function (instanceFrom) {
                if (!StatefulObjectUpgrader.isLatestVersionForType(instanceFrom.__typeName, instanceFrom.__typeVersion)) {
                    return instanceFrom;
                }
                var nextVersion = StatefulObjectUpgrader.computeNextVersion(instanceFrom.__typeVersion);
                var upgraderInstance = StatefulObject.StatefulObjectFactory.createTypeInstance(instanceFrom.__typeName, nextVersion);
                var upgraded = upgraderInstance.getUpgradedInstance(instanceFrom);
                if (upgraded.__typeVersion != nextVersion) {
                    Errors.Throw(Errors.WrongVersionInUpgradedInstance, "The expected version of the upgraded instance was " + nextVersion + " while was found to be " + upgraderInstance.__typeVersion);
                }
                return StatefulObjectUpgrader.upgrade(upgraded);
            };
            StatefulObjectUpgrader.computeNextVersion = function (typeVersion) {
                var versionRe = new RegExp("^v[0-9]+");
                if (!versionRe.test(typeVersion)) {
                    Errors.Throw(Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
                }
                var version = Number(typeVersion.substr(1));
                version = version + 1;
                var nextVersion = "v" + version;
                return nextVersion;
            };
            StatefulObjectUpgrader.latestTypeVersionMap = {};
            StatefulObjectUpgrader.isVersionMapBuilt = {};
            return StatefulObjectUpgrader;
        }());
        StatefulObject.StatefulObjectUpgrader = StatefulObjectUpgrader;
    })(StatefulObject = DDDTools.StatefulObject || (DDDTools.StatefulObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var StatefulObject;
    (function (StatefulObject) {
        var Errors = DDDTools.StatefulObject.StatefulObjectErrors;
        var StatefulObjectFactory = (function () {
            function StatefulObjectFactory() {
            }
            StatefulObjectFactory.createTypeInstance = function (typeName, typeVersion) {
                var toReturn;
                if (typeVersion) {
                    var typeToInstatiate = StatefulObjectFactory.computeFullyQualifiedTypeName(typeName, typeVersion);
                    try {
                        toReturn = eval("new " + typeToInstatiate + "()");
                        return toReturn;
                    }
                    catch (e) {
                    }
                    toReturn = StatefulObjectFactory.createTypeInstance(typeName);
                    if (toReturn.__typeVersion != typeVersion) {
                        Errors.Throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + typeVersion);
                    }
                    return toReturn;
                }
                try {
                    toReturn = eval("new " + typeName + "()");
                }
                catch (e) {
                    Errors.Throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
                }
                return toReturn;
            };
            StatefulObjectFactory.createObjectsFromState = function (state) {
                if (state === undefined) {
                    Errors.Throw(Errors.UnableToInstantiateType, "state cannot be 'undefined'");
                }
                if (state === null) {
                    Errors.Throw(Errors.UnableToInstantiateType, "state cannot be 'null'");
                }
                if (typeof state === 'object') {
                    if (StatefulObjectFactory.isStatefulObject(state)) {
                        var stateful;
                        stateful = StatefulObjectFactory.createTypeInstance(state.__typeName);
                        stateful.setState(state);
                        var upgradedStateful = StatefulObject.StatefulObjectUpgrader.upgrade(stateful);
                        return upgradedStateful;
                    }
                    var toReturn = Array.isArray(state) ? [] : {};
                    for (var currentElement in state) {
                        var thisElement = state[currentElement];
                        toReturn[currentElement] = StatefulObjectFactory.createObjectsFromState(thisElement);
                    }
                    return toReturn;
                }
                return state;
            };
            StatefulObjectFactory.isStatefulObject = function (objectToTest) {
                if (typeof objectToTest !== 'object') {
                    return false;
                }
                var stateful = objectToTest;
                if (!stateful.__typeName || stateful.__typeName === "") {
                    return false;
                }
                if (!stateful.__typeVersion || stateful.__typeVersion === "") {
                    return false;
                }
                return true;
            };
            StatefulObjectFactory.isTypeInstantiable = function (fullyQualifiedTypeName) {
                try {
                    var tmpType = StatefulObjectFactory.createTypeInstance(fullyQualifiedTypeName);
                }
                catch (e) {
                    return false;
                }
                return true;
            };
            StatefulObjectFactory.computeFullyQualifiedTypeName = function (typeName, typeVersion) {
                var fqtnPartsArray = typeName.split(".");
                var className = fqtnPartsArray.pop();
                fqtnPartsArray.push(typeVersion);
                fqtnPartsArray.push(className);
                var newFqtn = fqtnPartsArray.join(".");
                return newFqtn;
            };
            ;
            return StatefulObjectFactory;
        }());
        StatefulObject.StatefulObjectFactory = StatefulObjectFactory;
    })(StatefulObject = DDDTools.StatefulObject || (DDDTools.StatefulObject = {}));
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
        var SimpleGuid = DDDTools.Utils.SimpleGuid;
        var Touch = (function () {
            function Touch() {
            }
            Touch.touch = function (object) {
                if (typeof object === "object") {
                    var newId = SimpleGuid.generate();
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
                toSerialize = Serializer.preprocessForFakeSubstitution(toSerialize);
                try {
                    toReturn = JSON.stringify(toSerialize, Serializer.customSerializer);
                }
                finally {
                    Serializer.postprocessForFakeSubstitution(toSerialize);
                }
                return toReturn;
            };
            Serializer.preprocessForFakeSubstitution = function (sourceObject) {
                for (var idx in sourceObject) {
                    var current = sourceObject[idx];
                    if (current instanceof Date) {
                        var newFakeDate = new Serialization.FakeDate(current);
                        sourceObject[idx] = newFakeDate;
                        continue;
                    }
                    if (current instanceof RegExp) {
                        var newFakeRegExp = new Serialization.FakeRegExp(current);
                        sourceObject[idx] = newFakeRegExp;
                        continue;
                    }
                    if (typeof current === 'object' || Array.isArray(current)) {
                        sourceObject[idx] = Serializer.preprocessForFakeSubstitution(current);
                        continue;
                    }
                }
                return sourceObject;
            };
            Serializer.postprocessForFakeSubstitution = function (sourceObject) {
                for (var idx in sourceObject) {
                    var current = sourceObject[idx];
                    if (current instanceof Serialization.FakeDate) {
                        sourceObject[idx] = current.getDate();
                        continue;
                    }
                    if (current instanceof Serialization.FakeRegExp) {
                        sourceObject[idx] = current.getRegExp();
                        continue;
                    }
                    if (typeof current === 'object' || Array.isArray(current)) {
                        sourceObject[idx] = Serializer.postprocessForFakeSubstitution(current);
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
    var StatefulObject;
    (function (StatefulObject) {
        var Errors = StatefulObject.StatefulObjectErrors;
        var StatefulObjectFactory = StatefulObject.StatefulObjectFactory;
        var Serializer = DDDTools.Serialization.Serializer;
        var Deserializer = DDDTools.Serialization.Deserializer;
        var BaseStatefulObject = (function () {
            function BaseStatefulObject() {
                this.__typeName = "";
                this.__typeVersion = "";
            }
            BaseStatefulObject.prototype.getState = function () {
                if (this.__typeName === "") {
                    Errors.Throw(Errors.TypeNameNotSet);
                }
                if (this.__typeVersion === "") {
                    Errors.Throw(Errors.TypeVersionNotSet);
                }
                var toReconstitute = Serializer.serialize(this);
                var reconstituted = Deserializer.deserialize(toReconstitute);
                return reconstituted;
            };
            BaseStatefulObject.prototype.setState = function (state) {
                if (typeof state !== "object") {
                    Errors.Throw(Errors.StateIsNotAnObject, "state deve essere un oggetto");
                }
                for (var element in state) {
                    var currentStateElement = state[element];
                    this[element] = StatefulObjectFactory.createObjectsFromState(currentStateElement);
                }
            };
            return BaseStatefulObject;
        }());
        StatefulObject.BaseStatefulObject = BaseStatefulObject;
    })(StatefulObject = DDDTools.StatefulObject || (DDDTools.StatefulObject = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Entity;
    (function (Entity) {
        var BaseStatefulObject = DDDTools.StatefulObject.BaseStatefulObject;
        var BaseEntity = (function (_super) {
            __extends(BaseEntity, _super);
            function BaseEntity() {
                _super.apply(this, arguments);
            }
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
        }(BaseStatefulObject));
        Entity.BaseEntity = BaseEntity;
    })(Entity = DDDTools.Entity || (DDDTools.Entity = {}));
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
    var Aggregate;
    (function (Aggregate) {
        var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
        var BaseEntity = DDDTools.Entity.BaseEntity;
        var BaseAggregateRoot = (function (_super) {
            __extends(BaseAggregateRoot, _super);
            function BaseAggregateRoot() {
                _super.apply(this, arguments);
            }
            BaseAggregateRoot.prototype.raiseEvent = function (event) {
                DomainDispatcher.dispatch(event);
            };
            ;
            return BaseAggregateRoot;
        }(BaseEntity));
        Aggregate.BaseAggregateRoot = BaseAggregateRoot;
    })(Aggregate = DDDTools.Aggregate || (DDDTools.Aggregate = {}));
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
                    throw e;
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
    var ValueObject;
    (function (ValueObject) {
        var BaseStatefulObject = DDDTools.StatefulObject.BaseStatefulObject;
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
        }(BaseStatefulObject));
        ValueObject.BaseValueObject = BaseValueObject;
    })(ValueObject = DDDTools.ValueObject || (DDDTools.ValueObject = {}));
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
            BaseKeyValueObject.prototype.toString = function () {
                var state = this.getState();
                return JSON.stringify(state);
            };
            return BaseKeyValueObject;
        }(BaseValueObject));
        Entity.BaseKeyValueObject = BaseKeyValueObject;
    })(Entity = DDDTools.Entity || (DDDTools.Entity = {}));
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
    var Locking;
    (function (Locking) {
        var Guid = DDDTools.ValueObjects.Guid;
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var SimpleLock = (function (_super) {
            __extends(SimpleLock, _super);
            function SimpleLock(keyCreatedWith) {
                _super.call(this);
                this.keyCreatedWith = keyCreatedWith;
                this.__typeName = "DDDTools.Locking.SimpleLock";
            }
            SimpleLock.prototype.canBeUnlockedByKey = function (key) {
                return this.keyCreatedWith.equals(key);
            };
            SimpleLock.prototype.isLockedByTheSameKey = function (otherLock) {
                return this.keyCreatedWith.equals(otherLock.keyCreatedWith);
            };
            return SimpleLock;
        }(BaseValueObject));
        Locking.SimpleLock = SimpleLock;
        var SimpleLockKey = (function (_super) {
            __extends(SimpleLockKey, _super);
            function SimpleLockKey(key) {
                _super.call(this);
                this.__typeName = "DDDTools.Locking.SimpleLockKey";
                this.key = key || Guid.generate();
            }
            SimpleLockKey.prototype.toString = function () {
                return this.key.toString();
            };
            return SimpleLockKey;
        }(BaseValueObject));
        Locking.SimpleLockKey = SimpleLockKey;
        var InMemoryEntityLockManager = (function () {
            function InMemoryEntityLockManager(item, clientKey) {
                this.item = item;
                this.clientKey = clientKey;
            }
            InMemoryEntityLockManager.prototype.getKeyAsString = function () {
                var key = this.item.getKey();
                var keyAsString = JSON.stringify(key);
                return keyAsString;
            };
            InMemoryEntityLockManager.prototype.getLock = function () {
                var keyAsString = this.getKeyAsString();
                return InMemoryEntityLockManager.keyring[keyAsString] || null;
            };
            InMemoryEntityLockManager.prototype.hasLock = function () {
                var keyAsString = this.getKeyAsString();
                if (InMemoryEntityLockManager.keyring[keyAsString]) {
                    return true;
                }
                return false;
            };
            ;
            InMemoryEntityLockManager.prototype.lock = function (locker) {
                var currentLock = this.getLock();
                if (currentLock != null) {
                    if (currentLock.isLockedByTheSameKey(locker)) {
                        return;
                    }
                    else {
                        Locking.LockingErrors.Throw(Locking.LockingErrors.EntityLockedBySomeoneElse);
                    }
                }
                var keyAsString = this.getKeyAsString();
                InMemoryEntityLockManager.keyring[keyAsString] = locker;
            };
            ;
            InMemoryEntityLockManager.prototype.releaseLock = function () {
                if (!this.hasLock()) {
                    return;
                }
                var keyAsString = this.getKeyAsString();
                InMemoryEntityLockManager.keyring[keyAsString] = undefined;
            };
            ;
            InMemoryEntityLockManager.keyring = {};
            return InMemoryEntityLockManager;
        }());
        Locking.InMemoryEntityLockManager = InMemoryEntityLockManager;
    })(Locking = DDDTools.Locking || (DDDTools.Locking = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Locking;
    (function (Locking) {
        var BaseErrors = DDDTools.ErrorManagement.BaseErrors;
        var LockingErrors = (function (_super) {
            __extends(LockingErrors, _super);
            function LockingErrors() {
                _super.apply(this, arguments);
            }
            LockingErrors.EntityLockedBySomeoneElse = "Entity is Locked by someone else";
            return LockingErrors;
        }(BaseErrors));
        Locking.LockingErrors = LockingErrors;
    })(Locking = DDDTools.Locking || (DDDTools.Locking = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseErrors = DDDTools.ErrorManagement.BaseErrors;
        var RepositoryErrors = (function (_super) {
            __extends(RepositoryErrors, _super);
            function RepositoryErrors() {
                _super.apply(this, arguments);
            }
            RepositoryErrors.KeyNotSet = "Key not set";
            RepositoryErrors.ItemNotFound = "Item Not Found";
            return RepositoryErrors;
        }(BaseErrors));
        Repository.RepositoryErrors = RepositoryErrors;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Errors = Repository.RepositoryErrors;
        var StatefulObjectFactory = DDDTools.StatefulObject.StatefulObjectFactory;
        var BaseInMemoryRepository = (function () {
            function BaseInMemoryRepository(_managedTypeName) {
                this._managedTypeName = _managedTypeName;
                this.storage = {};
            }
            BaseInMemoryRepository.prototype.getById = function (id) {
                var key = id.toString();
                if (this.storage[key]) {
                    var toReturn = StatefulObjectFactory.createObjectsFromState(this.storage[key]);
                    return toReturn;
                }
                Errors.Throw(Errors.ItemNotFound);
            };
            BaseInMemoryRepository.prototype.save = function (item) {
                try {
                    var key = item.getKey().toString();
                }
                catch (e) {
                    Errors.Throw(Errors.KeyNotSet);
                }
                this.storage[key] = item.getState();
            };
            BaseInMemoryRepository.prototype.delete = function (id) {
                var key = id.toString();
                this.storage[key] = undefined;
            };
            return BaseInMemoryRepository;
        }());
        Repository.BaseInMemoryRepository = BaseInMemoryRepository;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var FakeDate = (function () {
            function FakeDate(date) {
                this.__typeName = "Date";
                this.__typeVersion = "v1";
                this.__dateAsString = date.toISOString();
            }
            FakeDate.prototype.getDate = function () {
                return new Date(this.__dateAsString);
            };
            return FakeDate;
        }());
        Serialization.FakeDate = FakeDate;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var FakeRegExp = (function () {
            function FakeRegExp(regExp) {
                this.__typeName = "RegExp";
                this.__typeVersion = "v1";
                this.__regularExpression = regExp.toString();
            }
            FakeRegExp.prototype.getRegExp = function () {
                return new RegExp(this.__regularExpression);
            };
            return FakeRegExp;
        }());
        Serialization.FakeRegExp = FakeRegExp;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var Guid = DDDTools.ValueObjects.Guid;
        var BaseEntity = DDDTools.Entity.BaseEntity;
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
        var RepoErrors = DDDTools.Repository.RepositoryErrors;
        var BaseInMemoryRepository = DDDTools.Repository.BaseInMemoryRepository;
        var Key = (function (_super) {
            __extends(Key, _super);
            function Key() {
                _super.call(this);
                this.__typeName = "CdC.Tests.Key";
                this.__typeVersion = "v1";
                this.id = Guid.generate();
            }
            Key.prototype.toString = function () {
                return this.id.toString();
            };
            return Key;
        }(BaseValueObject));
        Tests.Key = Key;
        var ChildEntity = (function (_super) {
            __extends(ChildEntity, _super);
            function ChildEntity() {
                _super.call(this);
                this.arrayOfKeys = [];
                this.__typeName = "CdC.Tests.ChildEntity";
                this.__typeVersion = "v1";
            }
            return ChildEntity;
        }(BaseEntity));
        Tests.ChildEntity = ChildEntity;
        var TestEntity = (function (_super) {
            __extends(TestEntity, _super);
            function TestEntity() {
                _super.call(this);
                this.arrayOfEntities = [];
                this.anonymousObject = {};
                this.anObjectReference = {};
                this.anotherObjectReference = {};
                this.__typeName = "CdC.Tests.TestEntity";
                this.__typeVersion = "v1";
            }
            return TestEntity;
        }(BaseAggregateRoot));
        Tests.TestEntity = TestEntity;
        var TestRepository = (function (_super) {
            __extends(TestRepository, _super);
            function TestRepository() {
                _super.call(this, TestRepository.managedTypeName);
            }
            TestRepository.managedTypeName = "CdC.Tests.TestEntity";
            return TestRepository;
        }(BaseInMemoryRepository));
        describe("BaseInMemoryRepository", function () {
            it("Deve essere possibile istanziare il Repository", function () {
                var repo = new TestRepository();
                expect(repo instanceof TestRepository).toEqual(true);
            });
            it("Se si salva una entity senza chiave impostata, il repository deve restituire un errore KeyNotSet", function () {
                var repo = new TestRepository();
                var item = new TestEntity();
                try {
                    repo.save(item);
                    expect(false).toBeTruthy();
                }
                catch (e) {
                    expect(e.name).toEqual(RepoErrors.KeyNotSet);
                }
            });
            it("Deve essere possibile salvare una entity con la chiave impostata", function () {
                var repo = new TestRepository();
                var item = new TestEntity();
                try {
                    repo.save(item);
                    expect(false).toBeTruthy();
                }
                catch (e) {
                    expect(e.name).toEqual(RepoErrors.KeyNotSet);
                }
            });
            it("Se si richiede un item non presente nel repository, viene lanciato errore ItemNotFound", function () {
                var repo = new TestRepository();
                var item = new TestEntity();
                var key = new Key();
                var key2 = new Key();
                item.setKey(key);
                repo.save(item);
                expect(function () { repo.getById(key2); }).toThrow(new Error(RepoErrors.ItemNotFound));
            });
            it("Gli array devono essere ricostituiti correttamente", function () {
                var repo = new TestRepository();
                var numberOfElementsToAdd = 10;
                var item = new TestEntity();
                var key = new Key();
                item.setKey(key);
                for (var i = 0; i < numberOfElementsToAdd; i++) {
                    var child = new ChildEntity();
                    child.setKey(new Key());
                    item.arrayOfEntities.push(child);
                    for (var q = 0; q < numberOfElementsToAdd; q++) {
                        child.arrayOfKeys.push(new Key());
                    }
                }
                try {
                    repo.save(item);
                    var reloaded = repo.getById(key);
                }
                catch (e) {
                    expect(false).toBeTruthy("Eccezione nel salvataggio o nel recupero dell'item. " + e.message);
                }
                expect(reloaded instanceof TestEntity).toBeTruthy("L'oggetto ricostituito non è un'istanza dell'oggetto originale.");
                expect(Array.isArray(reloaded.arrayOfEntities)).toBeTruthy("La property arrayOfEntities non è un Array");
                expect(reloaded.arrayOfEntities.length).toEqual(numberOfElementsToAdd, "La property arrayOfEntities non contiene " + numberOfElementsToAdd + " elementi");
                for (var t = 0; t < numberOfElementsToAdd; t++) {
                    var ce = reloaded.arrayOfEntities[t];
                    expect(Array.isArray(ce.arrayOfKeys)).toBeTruthy("La property arrayOfKeys non è un Array");
                    expect(ce.arrayOfKeys.length).toEqual(numberOfElementsToAdd, "La property arrayOfKeys non contiene " + numberOfElementsToAdd + " elementi");
                }
            });
            it("Gli oggetti anonimi devono essere ricostituiti correttamente.", function () {
                var repo = new TestRepository();
                var numberOfElementsToAdd = 10;
                var item = new TestEntity();
                var key = new Key();
                item.setKey(key);
                var anotherEntity = new TestEntity();
                anotherEntity.setKey(new Key());
                item.anonymousObject.anotherEntity = anotherEntity;
                item.anonymousObject.aNumberType = 42;
                try {
                    repo.save(item);
                    var reloaded = repo.getById(key);
                }
                catch (e) {
                    expect(false).toBeTruthy("Eccezione nel salvataggio o nel recupero dell'item. " + e.message);
                }
                expect(reloaded.anonymousObject.anotherEntity instanceof TestEntity).toBeTruthy("L'oggetto ricostituito non è un'istanza dell'oggetto originale.");
                expect(reloaded.anonymousObject.aNumberType).toEqual(42, "La property aNumberType non è stata ricostituita correttamente.");
            });
            it("Riferimenti alla stessa istanza devono essere ricostituiti correttamente", function () {
                var repo = new TestRepository();
                var numberOfElementsToAdd = 10;
                var item = new TestEntity();
                var key = new Key();
                item.setKey(key);
                var anObjectReferencedInMoreThanOneProperty = {
                    aProperty: "A test value",
                    aCompositeProperty: {
                        aProperty: "Another test value"
                    }
                };
                item.anObjectReference = anObjectReferencedInMoreThanOneProperty;
                item.anotherObjectReference = anObjectReferencedInMoreThanOneProperty;
                expect(item.anObjectReference).toEqual(item.anotherObjectReference);
                try {
                    repo.save(item);
                    var reloaded = repo.getById(key);
                }
                catch (e) {
                    expect(false).toBeTruthy("Eccezione nel salvataggio o nel recupero dell'item. " + e.message);
                }
                expect(reloaded.anObjectReference).toEqual(reloaded.anotherObjectReference);
            });
        });
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var BaseStatefulObject;
        (function (BaseStatefulObject) {
            var v2;
            (function (v2) {
                var BaseEntity = DDDTools.Entity.BaseEntity;
                var A3StepUpgradableItem = (function (_super) {
                    __extends(A3StepUpgradableItem, _super);
                    function A3StepUpgradableItem() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BaseStatefulObject.A3StepUpgradableItem";
                        this.__typeVersion = "v2";
                    }
                    A3StepUpgradableItem.prototype.getUpgradedInstance = function (fromInstance) {
                        var state = fromInstance.getState();
                        state.aNewProperty = "upgrader was here";
                        state.__typeVersion = "v2";
                        this.setState(state);
                        return this;
                    };
                    return A3StepUpgradableItem;
                }(BaseEntity));
                v2.A3StepUpgradableItem = A3StepUpgradableItem;
            })(v2 = BaseStatefulObject.v2 || (BaseStatefulObject.v2 = {}));
        })(BaseStatefulObject = Tests.BaseStatefulObject || (Tests.BaseStatefulObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var BaseStatefulObject;
        (function (BaseStatefulObject) {
            var v1;
            (function (v1) {
                var BaseEntity = DDDTools.Entity.BaseEntity;
                var TestEntity = (function (_super) {
                    __extends(TestEntity, _super);
                    function TestEntity() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BaseStatefulObject.TestEntity";
                        this.__typeVersion = "v1";
                    }
                    return TestEntity;
                }(BaseEntity));
                v1.TestEntity = TestEntity;
                var A3StepUpgradableItem = (function (_super) {
                    __extends(A3StepUpgradableItem, _super);
                    function A3StepUpgradableItem() {
                        _super.apply(this, arguments);
                        this.__typeName = "CdC.Tests.BaseStatefulObject.A3StepUpgradableItem";
                        this.__typeVersion = "v1";
                    }
                    return A3StepUpgradableItem;
                }(BaseEntity));
                v1.A3StepUpgradableItem = A3StepUpgradableItem;
            })(v1 = BaseStatefulObject.v1 || (BaseStatefulObject.v1 = {}));
        })(BaseStatefulObject = Tests.BaseStatefulObject || (Tests.BaseStatefulObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var BaseStatefulObject;
        (function (BaseStatefulObject) {
            var BaseEntity = DDDTools.Entity.BaseEntity;
            var StatefulObjectUpgrader = DDDTools.StatefulObject.StatefulObjectUpgrader;
            var Errors = DDDTools.StatefulObject.UpgraderErrors;
            var A3StepUpgradableItem = (function (_super) {
                __extends(A3StepUpgradableItem, _super);
                function A3StepUpgradableItem() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BaseStatefulObject.A3StepUpgradableItem";
                    this.__typeVersion = "v3";
                }
                A3StepUpgradableItem.prototype.getUpgradedInstance = function (fromInstance) {
                    var state = fromInstance.getState();
                    state.aNewNewProperty = "upgrader was here";
                    state.__typeVersion = "v3";
                    this.setState(state);
                    return this;
                };
                return A3StepUpgradableItem;
            }(BaseEntity));
            BaseStatefulObject.A3StepUpgradableItem = A3StepUpgradableItem;
            var TestEntity = (function (_super) {
                __extends(TestEntity, _super);
                function TestEntity() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BaseStatefulObject.TestEntity";
                    this.__typeVersion = "v2";
                }
                TestEntity.prototype.getUpgradedInstance = function (fromInstance) {
                    var state = fromInstance.getState();
                    state.aNewProperty = "upgrader was here";
                    state.__typeVersion = "v2";
                    this.setState(state);
                    return this;
                };
                return TestEntity;
            }(BaseEntity));
            BaseStatefulObject.TestEntity = TestEntity;
            var TestEntityNonUpgradable = (function (_super) {
                __extends(TestEntityNonUpgradable, _super);
                function TestEntityNonUpgradable() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BaseStatefulObject.TestEntityNonUpgradable";
                    this.__typeVersion = "v1";
                }
                return TestEntityNonUpgradable;
            }(BaseEntity));
            BaseStatefulObject.TestEntityNonUpgradable = TestEntityNonUpgradable;
            var AClassWithManyTypes = (function (_super) {
                __extends(AClassWithManyTypes, _super);
                function AClassWithManyTypes() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.BaseStatefulObject.AClassWithManyTypes";
                    this.__typeVersion = "v1";
                }
                return AClassWithManyTypes;
            }(BaseEntity));
            BaseStatefulObject.AClassWithManyTypes = AClassWithManyTypes;
            describe("BaseStatefulObjectUpgrader", function () {
                it("computeNextVersion deve restituire il valore corretto della versione successiva", function () {
                    var computed = StatefulObjectUpgrader.computeNextVersion("v1");
                    expect(computed).toEqual("v2");
                });
                it("computeNextVersion deve restituire un errore se la versione non è corretta.", function () {
                    var expectedError = new Error(Errors.IncorrectVersionFormat);
                    expectedError.message = "Specified version m15 is in incorrect format. Must be in the form v<n> where n is an integer.";
                    expect(function () { var computed = StatefulObjectUpgrader.computeNextVersion("m15"); }).toThrow(expectedError);
                });
                it("isLatestVersionForType deve restituire false per gli oggetti che non hanno versioni oltre alla prima", function () {
                    var te = new TestEntityNonUpgradable();
                    var needsUpgrade = StatefulObjectUpgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);
                    expect(needsUpgrade).toBeFalsy("isLatestVersionForType should have returned false!");
                });
                it("isLatestVersionForType deve restituire true per gli oggetti che hanno versioni oltre alla prima", function () {
                    var te = new CdC.Tests.BaseStatefulObject.v1.TestEntity();
                    var needsUpgrade = StatefulObjectUpgrader.isLatestVersionForType(te.__typeName, te.__typeVersion);
                    expect(needsUpgrade).toBeTruthy("isLatestVersionForType should have returned true!");
                });
                it("upgrade must be able to upgrade a StatefulObject to its latest version [2 steps]", function () {
                    var te = new CdC.Tests.BaseStatefulObject.v1.TestEntity();
                    expect(te.__typeVersion).toEqual("v1");
                    var upgraded = StatefulObjectUpgrader.upgrade(te);
                    expect(upgraded.__typeVersion).toEqual("v2");
                    expect(upgraded.aNewProperty).toEqual("upgrader was here");
                });
                it("upgrade must be able to upgrade a StatefulObject to its latest version [3 steps]", function () {
                    var te = new CdC.Tests.BaseStatefulObject.v1.A3StepUpgradableItem();
                    expect(te.__typeVersion).toEqual("v1");
                    var upgraded = StatefulObjectUpgrader.upgrade(te);
                    expect(upgraded.__typeVersion).toEqual("v3");
                    expect(upgraded.aNewProperty).toEqual("upgrader was here");
                    expect(upgraded.aNewNewProperty).toEqual("upgrader was here");
                });
                it("getState must be able to copy RegExp types", function () {
                    var te = new CdC.Tests.BaseStatefulObject.AClassWithManyTypes();
                    var testRegExp = "/^v[0-9]+";
                    var testString = "v123";
                    te.aRegExp = new RegExp(testRegExp);
                    var regExpResult = te.aRegExp.test(testString);
                    var state = te.getState();
                    expect(state.aRegExp instanceof RegExp).toBeTruthy("aRegExp is not a RegExp instance");
                    expect(state.aRegExp.test("v123")).toEqual(regExpResult, "aRegExp non si comporta come la RegularExpression originale");
                });
                it("getState must be able to copy Date types", function () {
                    var te = new CdC.Tests.BaseStatefulObject.AClassWithManyTypes();
                    var testDate = new Date();
                    te.aDate = testDate;
                    var state = te.getState();
                    expect(state.aDate instanceof Date).toBeTruthy("aDate is not a Date instance");
                    expect(state.aDate.toString()).toEqual(testDate.toString(), "aDate non è stata ripristinata come Date");
                });
            });
        })(BaseStatefulObject = Tests.BaseStatefulObject || (Tests.BaseStatefulObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var BaseValueObject;
        (function (BaseValueObject) {
            var DDD = DDDTools;
            var TestValueObject = (function (_super) {
                __extends(TestValueObject, _super);
                function TestValueObject(via, numero, citta, cap) {
                    _super.call(this);
                    this.via = via;
                    this.numero = numero;
                    this.citta = citta;
                    this.cap = cap;
                    this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject";
                    this.__typeVersion = "v1";
                }
                return TestValueObject;
            }(DDD.ValueObject.BaseValueObject));
            var TestValueObject_Array = (function (_super) {
                __extends(TestValueObject_Array, _super);
                function TestValueObject_Array(arrayOfSomething) {
                    _super.call(this);
                    this.arrayOfSomething = arrayOfSomething;
                    this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
                    this.__typeVersion = "v1";
                }
                return TestValueObject_Array;
            }(DDD.ValueObject.BaseValueObject));
            var TestValueObject_Object = (function (_super) {
                __extends(TestValueObject_Object, _super);
                function TestValueObject_Object(someObject) {
                    _super.call(this);
                    this.someObject = someObject;
                    this.__typeName = "CdC.Tests.BaseValueObject.TestValueObject_Array";
                    this.__typeVersion = "v1";
                }
                return TestValueObject_Object;
            }(DDD.ValueObject.BaseValueObject));
            describe("BaseValueObject", function () {
                it("Il criterio di uguaglianza tra ValueObjects e sul 'contenuto' dell'oggetto. - Tipi base", function () {
                    var vo1 = new TestValueObject("via F.Mestica", 3, "Apiro", "62021");
                    var vo2 = new TestValueObject("via F.Mestica", 3, "Apiro", "62021");
                    var vo3 = new TestValueObject("via del campo", 69, "Genova", "xxxxx");
                    expect(vo1.equals(vo2)).toBeTruthy("vo1 non risulta uguale a vo2, quando lo è");
                    expect(vo1.equals(vo3)).toBeFalsy("vo1 risulta essere uguale a vo3, quando non lo è");
                });
                it("Il criterio di uguaglianza tra ValueObjects e sul 'contenuto' dell'oggetto. - Array", function () {
                    var vo1 = new TestValueObject_Array([{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]);
                    var vo2 = new TestValueObject_Array([{ p1: 3, p2: 42 }, { p1: 6, p3: 96 }]);
                    var vo3 = new TestValueObject_Array([{ p1: 6, p3: 96 }, { p1: 3, p2: 42 }]);
                    expect(vo1.equals(vo2)).toBeTruthy("vo1 non risulta uguale a vo2, quando lo è");
                    expect(vo1.equals(vo3)).toBeFalsy("vo1 risulta essere uguale a vo3, quando non lo è");
                });
                it("Il criterio di uguaglianza tra ValueObjects e sul 'contenuto' dell'oggetto. - Object", function () {
                    var vo1 = new TestValueObject_Object({ p1: 3, p2: 42 });
                    var vo2 = new TestValueObject_Object({ p1: 3, p2: 42 });
                    var vo3 = new TestValueObject_Object({ p1: 6, p3: 96 });
                    expect(vo1.equals(vo2)).toBeTruthy("vo1 non risulta uguale a vo2, quando lo è");
                    expect(vo1.equals(vo3)).toBeFalsy("vo1 risulta essere uguale a vo3, quando non lo è");
                });
            });
        })(BaseValueObject = Tests.BaseValueObject || (Tests.BaseValueObject = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var InMemoryItemLocker;
        (function (InMemoryItemLocker) {
            var DDD = DDDTools;
            var Locking = DDDTools.Locking;
            var Guid = DDDTools.ValueObjects.Guid;
            var LockingErrors = Locking.LockingErrors;
            var BaseValueObject = DDD.ValueObject.BaseValueObject;
            var BaseEntity = DDD.Entity.BaseEntity;
            var Key = (function (_super) {
                __extends(Key, _super);
                function Key() {
                    _super.call(this);
                    this.__typeName = "CdC.Tests.InMemoryItemLocker.Key";
                    this.__typeVersion = "v1";
                    this.id = Guid.generate();
                }
                return Key;
            }(BaseValueObject));
            InMemoryItemLocker.Key = Key;
            var LockKey = (function (_super) {
                __extends(LockKey, _super);
                function LockKey() {
                    _super.call(this);
                    this.__typeName = "CdC.Tests.InMemoryItemLocker.LockKey";
                    this.__typeVersion = "v1";
                    this.id = Guid.generate();
                }
                return LockKey;
            }(BaseValueObject));
            var Lock = (function (_super) {
                __extends(Lock, _super);
                function Lock(key) {
                    _super.call(this);
                    this.key = key;
                    this.__typeName = "CdC.Tests.InMemoryItemLocker.Lock";
                    this.__typeVersion = "v1";
                }
                Lock.prototype.canBeUnlockedByKey = function (key) {
                    return this.key.equals(key);
                };
                Lock.prototype.isLockedByTheSameKey = function (otherLock) {
                    return this.key.equals(otherLock.key);
                };
                return Lock;
            }(BaseValueObject));
            var TestEntity = (function (_super) {
                __extends(TestEntity, _super);
                function TestEntity() {
                    _super.call(this);
                    this.__typeName = "CdC.Tests.InMemoryItemLocker.TestEntity";
                    this.__typeVersion = "v1";
                    this.arrayOfEntities = [];
                    this.anonymousObject = {};
                    this.anObjectReference = {};
                    this.anotherObjectReference = {};
                }
                return TestEntity;
            }(BaseEntity));
            var TestLockManager = (function (_super) {
                __extends(TestLockManager, _super);
                function TestLockManager() {
                    _super.apply(this, arguments);
                }
                return TestLockManager;
            }(Locking.InMemoryEntityLockManager));
            describe("InMemoryItemLocker", function () {
                it("Deve essere possibile gestire una Entity nel suo lock manager.", function () {
                    var item = new TestEntity();
                    var lockKey = new LockKey();
                    var lockManager = new TestLockManager(item, lockKey);
                    var lock = lockManager.getLock();
                    expect(lock).toBeNull("Il getLock deve restituire null se un lock non è stato ancora assegnato.");
                    lock = new Lock(lockKey);
                    lockManager.lock(new Lock(lockKey));
                    var newLock = lockManager.getLock();
                    expect(lock.equals(newLock)).toBeTruthy("Il lock restituito non è quello impostato.");
                    var anotherLockKey = new LockKey();
                    var anotherLockManager = new TestLockManager(item, anotherLockKey);
                    var anotherLock = new Lock(anotherLockKey);
                    expect(function () { anotherLockManager.lock(anotherLock); }).toThrow(new Error(LockingErrors.EntityLockedBySomeoneElse));
                });
            });
        })(InMemoryItemLocker = Tests.InMemoryItemLocker || (Tests.InMemoryItemLocker = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
var CdC;
(function (CdC) {
    var Tests;
    (function (Tests) {
        var Dispatcher;
        (function (Dispatcher) {
            var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
            var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
            var InProcessDispatcher = DDDTools.DomainEvents.InProcessDispatcher;
            var aDomainEvent = (function (_super) {
                __extends(aDomainEvent, _super);
                function aDomainEvent() {
                    _super.apply(this, arguments);
                    this.__typeName = "CdC.Tests.Dispatcher.aDomainEvent";
                    this.__typeVersion = "v1";
                }
                return aDomainEvent;
            }(BaseValueObject));
            describe("InProcessDispatcher", function () {
                it("Multiple registration of the same eventhandler, must be treated as one.", function () {
                    var eventHandler;
                    var counter = 0;
                    eventHandler = function (event) {
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(1);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                });
                it("After deregistering an handler, dispatch must not call it anymore", function () {
                    var eventHandler;
                    var counter = 0;
                    eventHandler = function (event) {
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(1);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    counter = 0;
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(0);
                });
                it("All handlers will be called by dispatch, even if handlers throw.", function () {
                    var eventHandler;
                    var aThrowingHandler;
                    var counter = 0;
                    aThrowingHandler = function (event) {
                        throw new Error("Error thrown by the handler");
                    };
                    eventHandler = function (event) {
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    try {
                        DomainDispatcher.dispatch(event);
                    }
                    catch (e) {
                        expect(e.message).toEqual("Error:Error thrown by the handler\n");
                    }
                    expect(counter).toEqual(1);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", aThrowingHandler);
                });
                it("Handlers must be called in the same order they are registered.", function () {
                    var eventHandler;
                    var secondEventHandler;
                    var counter = 0;
                    eventHandler = function (event) {
                        expect(counter).toEqual(0);
                        counter++;
                    };
                    secondEventHandler = function (event) {
                        expect(counter).toEqual(1);
                        counter++;
                    };
                    var event = new aDomainEvent;
                    DomainDispatcher.setDispatcherImplementation(new InProcessDispatcher());
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.registerHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);
                    DomainDispatcher.dispatch(event);
                    expect(counter).toEqual(2);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", eventHandler);
                    DomainDispatcher.unregisterHandler("CdC.Tests.Dispatcher.aDomainEvent", secondEventHandler);
                });
            });
        })(Dispatcher = Tests.Dispatcher || (Tests.Dispatcher = {}));
    })(Tests = CdC.Tests || (CdC.Tests = {}));
})(CdC || (CdC = {}));
//# sourceMappingURL=app.js.map