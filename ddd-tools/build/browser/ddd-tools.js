var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Minimal Error handling base behaviors for the domain model.
 */
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
/// <reference path="../../../typings/browser.d.ts" />
var DDDTools;
(function (DDDTools) {
    var Promises;
    (function (Promises) {
        /**
         * This code forces DDDTools to use $q promises if angular is defined at the moment ddd-tools is loaded
         */
        if (typeof angular !== "undefined") {
            var $injector = angular.injector(['ng']);
            var $q = $injector.get("$q");
            Promises.PromiseHandler = $q;
        }
        else {
            if (Q) {
                // TODO This cast is effectively a risk! How to manage it correctly ? 
                Promises.PromiseHandler = Q;
            }
        }
        // We didn't find a suitable PromiseHandler
        if (Promises.PromiseHandler == undefined)
            throw new Error("A Promise Handler must be defined, supported are angular's $q or kris kowal's Q. This means that Q or angular MUST be loaded before ddd-tools.js");
    })(Promises = DDDTools.Promises || (DDDTools.Promises = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../Promises/PromiseHandler.ts" />
/// <reference path="../../../typings/browser.d.ts" />
/**
 * Some simple classes used in different modules.
 */
var DDDTools;
(function (DDDTools) {
    var Utils;
    (function (Utils) {
        var SimpleGuid = (function () {
            function SimpleGuid() {
            }
            // Helper for guid generation.
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
            /**
             * Returns all the ids in the map
             */
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
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
                // To get a correct regexp we must take away the leading "/" and the flags!
                var conditionedString = regExp.toString();
                // replaces the escaped slashes with something very improbable
                conditionedString = conditionedString.replace("\\/", reallyUnlikelyString);
                var parts = conditionedString.split("/");
                // parts[0] must always be the empty string;
                if (parts[0] !== "")
                    throw new Error("splitRegExpAndFlags: This should never happen!");
                // We have to restore what 
                parts[1] = parts[1].replace(reallyUnlikelyString, "\\/");
                this.__regularExpression = parts[1];
                this.__flags = parts[2] || "";
                // console.log ("splitRegExp: " + regExp.toString() + " ... " + this.__regularExpression + " ... " + this.__flags );            
            };
            SerializableRegExp.getRegExpFromRegExpAndFlags = function (regularExpression, flags) {
                var toReturn;
                // console.log("getRegExp: " + this.__regularExpression + " ... " + this.__flags);
                if (flags) {
                    toReturn = new RegExp(regularExpression, flags);
                }
                else {
                    toReturn = new RegExp(regularExpression);
                }
                return toReturn;
            };
            /**
             * Get back a Regular Expression from the SerializableRegExp instance
             */
            SerializableRegExp.prototype.getRegExp = function () {
                return SerializableRegExp.getRegExpFromRegExpAndFlags(this.__regularExpression, this.__flags);
            };
            return SerializableRegExp;
        }());
        Serialization.SerializableRegExp = SerializableRegExp;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var Touch = (function () {
            function Touch() {
            }
            /**
             * Prepares the id generator for a new run
             */
            Touch.resetTouchIndex = function () {
                var sThis = Touch;
                sThis.touchIndex = 1;
            };
            Touch.getNewIndex = function () {
                // return SimpleGuid.generate()
                var sThis = Touch;
                sThis.touchIndex++;
                return (sThis.touchIndex++ - 1).toString();
            };
            /**
             * adds an __objectInstanceId property to an object
             */
            Touch.touch = function (object) {
                var sThis = Touch;
                if (typeof object === "object") {
                    var newId = sThis.getNewIndex();
                    object.__objectInstanceId = newId;
                }
            };
            /**
             * removes the __objectInstanceId property from an object
             */
            Touch.untouch = function (object) {
                if (object.__objectInstanceId) {
                    delete object.__objectInstanceId;
                }
            };
            /**
             * checks for the presence of an __objectInstanceId property
             */
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
/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../Utils/SimpleIdentityMap.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./SerializableDate.ts" />
/// <reference path="./SerializableRegExp.ts" />
/// <reference path="./Touch.ts" />
// import {SimpleGuid} from "../Utils/SimpleGuid";
// import {SimpleIdentityMap} from "../Utils/SimpleIdentityMap";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
// import {SerializableDate} from "./SerializableDate";
// import {SerializableRegExp} from "./SerializableRegExp";
// import {Touch} from "./Touch";
/**
 * Implements JSON string serialization. It extends the functionalities of JSON.stringify to allow serialization and deserialization of date and regular expression objects, and object reference.
 */
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var SimpleIdentityMap = DDDTools.Utils.SimpleIdentityMap;
        var Deserializer = (function () {
            function Deserializer() {
            }
            /**
             * Deserializes an object from a JSON string.
             */
            Deserializer.deserialize = function (toDeserialize) {
                Deserializer.identityMap = new SimpleIdentityMap();
                var toReturn = JSON.parse(toDeserialize, Deserializer.customReviver);
                Deserializer.cleanup();
                return toReturn;
            };
            /**
             * Deserializes an object previously serialized with "SerializeToObject"
             */
            Deserializer.deserializeFromObject = function (toDeserialize) {
                var sourceAsString = JSON.stringify(toDeserialize);
                var toReturn = Deserializer.deserialize(sourceAsString);
                return toReturn;
            };
            /**
             * Cleans the reconsituted instances from the __objectInstanceId property,
             * and empties the IdentityMap.
             */
            Deserializer.cleanup = function () {
                var sThis = Deserializer;
                var idMap = sThis.identityMap;
                var untouch = Serialization.Touch.untouch;
                for (var _i = 0, _a = idMap.getIds(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    var currentItem = idMap.getById(item);
                    untouch(currentItem);
                    // This should leave the instances "garbageable"... how to test ?    
                    idMap.deleteById(item);
                }
            };
            /**
             * It handles Fake* instances uses __objectInstanceId to rebuild a correct object tree.
             * This function will be called by JSON.parse
             */
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
            /**
             * checks for the presence of an __objectInstanceId property
             */
            Deserializer.hasBeenTouched = function (object) {
                var casted = object;
                if (casted.__objectInstanceId) {
                    return true;
                }
                return false;
            };
            /**
             * Manages RegExp Deserialization
             * TODO: Find a way to move this responsibility to the SerializableRegExp
             */
            Deserializer.FakeRegExpDeserializer = function (value) {
                if (value.__typeName) {
                    if (value.__typeName === "SerializableRegExp") {
                        value = Serialization.SerializableRegExp.getRegExpFromRegExpAndFlags(value.__regularExpression, value.__flags);
                    }
                }
                return value;
            };
            /**
             * Manages Date Deserialization
             * TODO: Find a way to move this responsibility to the SerializableRegExp
             */
            Deserializer.FakeDateDeserializer = function (value) {
                if (value.__typeName) {
                    if (value.__typeName === "SerializableDate") {
                        value = Serialization.SerializableDate.getDateFromString(value.__dateAsString);
                    }
                }
                return value;
            };
            /**
             * Manages Null Deserialization
             * TODO: Find a way to move this responsibility to the SerializableNull
             */
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
/// <reference path="./SerializableDate.ts" />
/// <reference path="./SerializableRegExp.ts" />
/// <reference path="./SerializableNull.ts" />
/// <reference path="./Touch.ts" />
// import {SerializableDate} from "./SerializableDate";
// import {SerializableRegExp} from "./SerializableRegExp";
// import {Touch} from "./Touch";
var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        var Serializer = (function () {
            function Serializer() {
            }
            /**
             * Serializes an object to a JSON string, keepeing track of the instances of the objects serialized
             */
            Serializer.serialize = function (toSerialize) {
                var toReturn;
                Serialization.Touch.resetTouchIndex();
                Serializer.preprocessForSerializablesSubstitution(toSerialize);
                Serializer.touchSourceObject(toSerialize);
                try {
                    toReturn = JSON.stringify(toSerialize);
                }
                finally {
                    Serializer.postprocessForSerializableSubstitution(toSerialize);
                    Serializer.untouchSourceObject(toSerialize);
                }
                return toReturn;
            };
            /**
             * Serializes an object to ... a new object. The serialized object will have Serializable version of Dates, null and RegExp value, instead of the original types.
             * The serialized object will have only data and no methods for non native objects.
             */
            Serializer.serializeToObject = function (toSerialize) {
                var sThis = Serializer;
                var sourceAsString = sThis.serialize(toSerialize);
                var toReturn = JSON.parse(sourceAsString);
                return toReturn;
            };
            /**
             * Preprocess the object tree to be serialized to find and replace Date, null, RegExp, ... objects with something different...
             */
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
            Serializer.touchSourceObject = function (sourceObject) {
                var sThis = Serializer;
                if (sourceObject === null)
                    return;
                if (!Serialization.Touch.hasBeenTouched(sourceObject)) {
                    Serialization.Touch.touch(sourceObject);
                }
                for (var idx in sourceObject) {
                    var current = sourceObject[idx];
                    if (typeof current === 'object' || Array.isArray(current)) {
                        sThis.touchSourceObject(current);
                        sourceObject[idx] = current;
                        // sourceObject[idx] = sThis.preprocessForSerializablesSubstitution(current);
                        continue;
                    }
                }
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
                        sourceObject[idx] = current;
                        // sourceObject[idx] = sThis.preprocessForSerializablesSubstitution(current);
                        continue;
                    }
                }
            };
            /**
             * Postprocess the object tree to be serialized to find and replace SerializableDate/RegExp objects with Original types again...
             */
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
            return Serializer;
        }());
        Serialization.Serializer = Serializer;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="../ErrorManagement/BaseErrors.ts" />
// import {BaseErrors} from "../ErrorManagement/BaseErrors";
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
            // Thrown by persistable objects
            Errors.StateIsNotAnObject = "State is not an Object";
            Errors.TypeNameNotSet = "TypeName not set";
            Errors.TypeVersionNotSet = "TypeVersion not set";
            Errors.UnableToInstantiateType = "Unable to Instantiate Type";
            Errors.TypeRegistryNotSet = "TypeRegistry not set";
            // Thrown by the Factory/TypeRegistry
            Errors.TypeNotRegistered = "Type has not been registered with the TypeRegistry";
            Errors.CannotRegisterUndefined = "typePrototype cannot be null or undefined";
            // Thrown by the Upgrader
            Errors.TypeNotInstatiable = "Type is not instantiable";
            Errors.UpgradePathNotFound = "Upgrade Path not Found";
            Errors.IncorrectVersionFormat = "Incorrect Version Format";
            Errors.WrongVersionInUpgradedInstance = "Wrong Version in Upgraded Instance";
            return Errors;
        }(BaseErrors));
        PersistableObject.Errors = Errors;
    })(PersistableObject = DDDTools.PersistableObject || (DDDTools.PersistableObject = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../CommonInterfaces/IEquatable.ts" />
/// <reference path="../ValueObject/IValueObject.ts" />
/// <reference path="./IPersistable.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="./Factory.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="../Serialization/Deserializer.ts" />
// import {IPersistable} from "./IPersistable";
// import {Errors} from "./Errors";
// import {Factory} from "./Factory";
// import {Serializer} from "../Serialization/Serializer";
// import {Deserializer} from "../Serialization/Deserializer";
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
                // console.log(JSON.stringify(state));
                if (typeof state !== "object") {
                    PersistableObject.Errors.throw(PersistableObject.Errors.StateIsNotAnObject, "state deve essere un oggetto");
                }
                for (var element in state) {
                    var currentStateElement = state[element];
                    this[element] = PersistableObject.Factory.createObjectsFromState(currentStateElement);
                }
                // console.log( JSON.stringify( this.getState() ) );
            };
            return BasePersistableObject;
        }());
        PersistableObject.BasePersistableObject = BasePersistableObject;
    })(PersistableObject = DDDTools.PersistableObject || (DDDTools.PersistableObject = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../PersistableObject/BasePersistableObject.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="./IValueObject.ts" />
// import {IValueObject} from "./IValueObject";
// import {BasePersistableObject} from "../PersistableObject/BasePersistableObject";
// import {Serializer} from "../Serialization/Serializer";
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
                // Per ogni proprietà dell'ITEM :verifico l'uguaglianza con l'istanza attuale 			
                return _.isEqual(item, this);
            };
            /**
             * Finds this value object in an array. Will return an array of indexes matching the searched object.
             */
            BaseValueObject.prototype.findInArray = function (collection) {
                var toReturn = [];
                for (var element in collection) {
                    if (this.equals(collection[element])) {
                        toReturn.push(element);
                    }
                }
                return toReturn;
            };
            return BaseValueObject;
        }(BasePersistableObject));
        ValueObject.BaseValueObject = BaseValueObject;
    })(ValueObject = DDDTools.ValueObject || (DDDTools.ValueObject = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../Utils/SimpleGuid.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
// import {SimpleGuid} from "../Utils/SimpleGuid";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
/**
 * Collection of general and commonly used ValueObjects.
 */
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
            // ValueObjects used as key MUST implement a toString method that returns the key as string.
            Guid.prototype.toString = function () {
                return this.guid;
            };
            return Guid;
        }(BaseValueObject));
        ValueObjects.Guid = Guid;
    })(ValueObjects = DDDTools.ValueObjects || (DDDTools.ValueObjects = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="./IPersistable.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../ValueObjects/Guid.ts" />
// import {IPersistable} from "./IPersistable";
// import {Errors} from "./Errors";
// import {TypeRegistry} from "./TypeRegistry";
var DDDTools;
(function (DDDTools) {
    var PersistableObject;
    (function (PersistableObject) {
        var Guid = DDDTools.ValueObjects.Guid;
        /**
         * PersistableObjectFactory is an helper class to create and reconstitute statfeul objects.
         * It gurantees that a statful object is always created or reconstituted to its latest version.
         */
        var Factory = (function () {
            function Factory() {
            }
            /**
             * Registers a new IPersistable type with the Factory
             */
            Factory.registerType = function (typeName, typeVersion, typePrototype) {
                var sThis = Factory;
                if (!sThis.typeRegistry) {
                    sThis.typeRegistry = new TypeRegistry();
                }
                TypeRegistry.registerType(typeName, typeVersion, typePrototype);
            };
            /**
             * Creates an instance of the specified type. If typeVersion is not supplied, latest available version is returned.
             */
            Factory.createTypeInstance = function (typeName, typeVersion) {
                if (!Factory.typeRegistry) {
                    var typeVersionMessage = typeVersion ? " version '" + typeVersion + "'" : "";
                    PersistableObject.Errors.throw(PersistableObject.Errors.TypeRegistryNotSet, "Please register at least a type with the Factory for the type '" + typeName + "'" + typeVersionMessage);
                }
                return TypeRegistry.getTypeInstance(typeName, typeVersion);
                // if (typeVersion) {
                //     var typeToInstatiate = Factory.computeFullyQualifiedTypeName(typeName, typeVersion);
                //     try {
                //         toReturn = <T>eval("new " + typeToInstatiate + "()");
                //         return toReturn;
                //     } catch (e) {
                //         // This failure is expected if we are asking for the latest version available
                //     }
                //     toReturn = Factory.createTypeInstance<T>(typeName);
                //     if (toReturn.__typeVersion != typeVersion) {
                //         Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + typeVersion);
                //     }
                //     return toReturn;
                // }
                // try {
                //     toReturn = <T>eval("new " + typeName + "()");
                // } catch (e) {
                //     Errors.throw(Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
                // }
                // return toReturn;
            };
            /**
             * Creates an object instance from its state. Will always return the latest version possible of the object
             */
            Factory.createObjectsFromState = function (state) {
                if (state === undefined) {
                    // Errors.throw(Errors.UnableToInstantiateType, "state cannot be 'undefined'");
                    return undefined;
                }
                if (state === null) {
                    // Errors.throw(Errors.UnableToInstantiateType, "state cannot be 'null'");
                    return null;
                }
                // Manages the "special" types Date and RegExp.
                if (state instanceof Date || state instanceof RegExp) {
                    return state;
                }
                if (typeof state === 'object') {
                    if (Factory.isPersistableObject(state)) {
                        var persistable;
                        persistable = Factory.createTypeInstance(state.__typeName);
                        persistable.setState(state);
                        // This warranties that a type is always returned at its latest version.
                        var upgradedPersistable = Upgrader.upgrade(persistable);
                        return upgradedPersistable;
                    }
                    // If it is not a persistableObject can be an Array or an Object and must be reconstituted
                    var toReturn = Array.isArray(state) ? [] : {};
                    for (var currentElement in state) {
                        var thisElement = state[currentElement];
                        toReturn[currentElement] = Factory.createObjectsFromState(thisElement);
                    }
                    return toReturn;
                }
                // "Primitive"" types are returned as they are
                return state;
            };
            /**
             * Checks if an object implements the "IPersistable" interface.
             */
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
            /**
             * Checks if a type can be instatiated (at its latest version).
             */
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
        /**
         * The Upgrader is an helper class to automate the "upgrade process" of an object's state.
         * The Upgrader is found on these principles:
         *  * The latest version FQTN must match the one specified by the property __typeName, which is in the form namespace.objectName.
         *  * Older versions of a PersistableObject MUST have a FQTN in the form namespace.<version>.objectName.
         *  * __typeVersion MUST be specified as v<versionNumber> where version is an integer.
         *  * All object's versions (excluding v1) MUST provide an getUpgradedInstance method that knows how to modify state to go from
         *    version v<n - 1> to v<n>, where n is the version of the object containing the getUpgradedInstance method.
         */
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
                // Looks for the latest version, if not already done.
                if (!Upgrader.isVersionMapBuilt[typeName]) {
                    Upgrader.buildVersionMapForType(typeName);
                }
                // If the version supplied doesn't match the latest version in the map, the instance must be upgraded.
                if (Upgrader.latestTypeVersionMap[typeName] !== typeVersion) {
                    return true;
                }
                return false;
            };
            Upgrader.upgrade = function (instanceFrom) {
                // If object doesn't need to upgrade, then we are done!
                if (!Upgrader.isLatestVersionForType(instanceFrom.__typeName, instanceFrom.__typeVersion)) {
                    return instanceFrom;
                }
                var nextVersion = Upgrader.computeNextVersion(instanceFrom.__typeVersion);
                var upgraderInstance = Factory.createTypeInstance(instanceFrom.__typeName, nextVersion);
                var upgraded = upgraderInstance.getUpgradedInstance(instanceFrom);
                // Verifies that version is effectively upgraded
                if (upgraded.__typeVersion != nextVersion) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.WrongVersionInUpgradedInstance, "The expected version of the upgraded instance was " + nextVersion + " while was found to be " + upgraderInstance.__typeVersion);
                }
                return Upgrader.upgrade(upgraded);
            };
            Upgrader.computeNextVersion = function (typeVersion) {
                // Version must be in the form vN where v is a constant and N is an integer.
                var versionRe = new RegExp("^v[0-9]+");
                if (!versionRe.test(typeVersion)) {
                    PersistableObject.Errors.throw(PersistableObject.Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
                }
                var version = Number(typeVersion.substr(1));
                version = version + 1;
                var nextVersion = "v" + version;
                return nextVersion;
            };
            // Contains the latest version possible for each type. 
            Upgrader.latestTypeVersionMap = {};
            // Contains flags to determine if latstTypeVersionMap for a specific type has been calculated
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
                // Registers the types in ValueObjects on first use... 
                // TODO find a way to delegate type registration to the Objects in the collection, [via pseudo reflection ?]"
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
            /**
             * True if specified version is the latest for type.
             */
            TypeRegistry.isLatestVersionForType = function (typeName, typeVersion) {
                var sThis = TypeRegistry;
                return sThis.getLatestVersionForType(typeName) === typeVersion;
            };
            /**
             * Will return undefined if the no version type is defined
             */
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
                // Version must be in the form vN where v is a constant and N is an integer.
                var versionRe = new RegExp("^v[0-9]+");
                if (!sThis.versionIsInCorrectFormat(typeVersion)) {
                    // TODO Throw the correct exception;
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
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IEventHandler.ts" />
/// <reference path="IStateMachine.ts" />
/// <reference path="../PersistableObject/BasePersistableObject.ts" />
/// <reference path="../Promises/PromiseHandler.ts" />
/// <reference path="../DomainEvents/IDispatcher.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />
var DDDTools;
(function (DDDTools) {
    var StateMachine;
    (function (StateMachine) {
        var BasePersistableObject = DDDTools.PersistableObject.BasePersistableObject;
        var PromiseHandler = DDDTools.Promises.PromiseHandler;
        var Factory = DDDTools.PersistableObject.Factory;
        var HandlerResult = (function () {
            function HandlerResult(okToChange, reason) {
                this.okToChange = okToChange;
                this.reason = reason;
            }
            return HandlerResult;
        }());
        StateMachine.HandlerResult = HandlerResult;
        var StateMachineEvent = (function (_super) {
            __extends(StateMachineEvent, _super);
            function StateMachineEvent() {
                _super.apply(this, arguments);
                this.__typeName = "StateMachineEvent";
                this.__typeVersion = "v1";
            }
            return StateMachineEvent;
        }(BasePersistableObject));
        StateMachine.StateMachineEvent = StateMachineEvent;
        (function (KindsOfEventHandler) {
            KindsOfEventHandler[KindsOfEventHandler["beforeEnterStatus"] = 0] = "beforeEnterStatus";
            KindsOfEventHandler[KindsOfEventHandler["afterEnterStatus"] = 1] = "afterEnterStatus";
            KindsOfEventHandler[KindsOfEventHandler["beforeExitStatus"] = 2] = "beforeExitStatus";
            KindsOfEventHandler[KindsOfEventHandler["afterExitStatus"] = 3] = "afterExitStatus";
            KindsOfEventHandler[KindsOfEventHandler["onSuccessfulEventProcessed"] = 4] = "onSuccessfulEventProcessed";
        })(StateMachine.KindsOfEventHandler || (StateMachine.KindsOfEventHandler = {}));
        var KindsOfEventHandler = StateMachine.KindsOfEventHandler;
        var HandlerCollection = (function (_super) {
            __extends(HandlerCollection, _super);
            function HandlerCollection() {
                _super.apply(this, arguments);
                this.__typeName = "HandlerCollection";
                this.__typeVersion = "v1";
                this.handlers = [];
            }
            HandlerCollection.prototype.registerHandler = function (handler, eventType) {
                if (!this.hasAlreadyBeenRegistered(handler, eventType)) {
                    this.touchHandler(handler, eventType);
                    this.handlers.push(handler);
                }
            };
            HandlerCollection.prototype.runHandlers = function (event) {
                var promises = [];
                for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
                    var handler = _a[_i];
                    var promise = null;
                    try {
                        promise = handler(event);
                    }
                    catch (e) {
                        var res = new HandlerResult();
                        res.okToChange = false;
                        res.reason = JSON.stringify(e);
                        promise = PromiseHandler.resolve(res);
                    }
                    promises.push(promise);
                }
                return PromiseHandler.all(promises)
                    .then(function (results) {
                    var toReturn = new HandlerResult;
                    toReturn.okToChange = true;
                    toReturn.reason = "";
                    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                        var p = results_1[_i];
                        if (!p.okToChange) {
                            toReturn.okToChange = false;
                            toReturn.reason += p.reason;
                        }
                    }
                    return toReturn;
                });
            };
            HandlerCollection.prototype.hasAlreadyBeenRegistered = function (handler, eventType) {
                var asTouchable = handler;
                if (!asTouchable.___handlesEvent) {
                    return false;
                }
                var alreadyRegisteredForThisEvent = false;
                for (var idx in asTouchable.___handlesEvent) {
                    var currentElement = asTouchable.___handlesEvent[idx];
                    if (currentElement === eventType) {
                        alreadyRegisteredForThisEvent = true;
                        break;
                    }
                }
                return alreadyRegisteredForThisEvent;
            };
            HandlerCollection.prototype.touchHandler = function (handler, eventType) {
                var asTouchable = handler;
                if (!asTouchable.___handlesEvent) {
                    asTouchable.___handlesEvent = [];
                }
                if (!this.hasAlreadyBeenRegistered(handler, eventType)) {
                    asTouchable.___handlesEvent.push(eventType);
                }
            };
            return HandlerCollection;
        }(BasePersistableObject));
        StateMachine.HandlerCollection = HandlerCollection;
        /**
         * Please, remember to set __typeName and __typeVersion in your derived types !
         * __typeName and __typeVersion should be set on the constructor too, but this mean changing a lot of things.
         */
        var BaseStateMachine = (function (_super) {
            __extends(BaseStateMachine, _super);
            function BaseStateMachine(initialStatus, stateMachineDefinition) {
                _super.call(this);
                this.stateMachineDefinition = stateMachineDefinition;
                this.currentStatus = null;
                this.previousStatus = null;
                this.beforeEnterStatusHandlers = new HandlerCollection();
                this.afterEnterStatusHandlers = new HandlerCollection();
                this.beforeExitStatusHandlers = new HandlerCollection();
                this.afterExitStatusHandlers = new HandlerCollection();
                this.onSuccessfulEventProcessedHandlers = new HandlerCollection();
                if (!stateMachineDefinition) {
                    var smd = StateMachine.StateMachineDefinitionRegistry.getStateMachine(this.__typeName, this.__typeVersion);
                    if (smd) {
                        this.stateMachineDefinition = smd;
                    }
                }
                this.currentStatus = initialStatus;
                // TODO: The components registration should be kept somewhere else... or make the component's type registration in the constructor become a rule.
                try {
                    Factory.registerType("HandlerCollection", "v1", HandlerCollection);
                }
                catch (e) {
                }
            }
            /**
             * Overrides the PersistableObject's setState to avoid restoring a collection of "fake handlers"'
             */
            BaseStateMachine.prototype.setState = function (state) {
                _super.prototype.setState.call(this, state);
                // Allows to use the state machines definition put on the registry.
                // Doing this way it is possible to change a state machine without having to 
                // Setup an upgrade process. T
                // At this moment the registrydefinition is optional, so this version of the 
                // state machine is fully compatible with the previous version.
                var smd = StateMachine.StateMachineDefinitionRegistry.getStateMachine(this.__typeName, this.__typeVersion);
                if (smd) {
                    this.stateMachineDefinition = smd;
                }
                // We need to reinitialize the handlers collection. as if they were 
                this.onSuccessfulEventProcessedHandlers = new HandlerCollection();
                this.beforeEnterStatusHandlers = new HandlerCollection();
                this.afterEnterStatusHandlers = new HandlerCollection();
                this.beforeExitStatusHandlers = new HandlerCollection();
                this.afterExitStatusHandlers = new HandlerCollection();
            };
            BaseStateMachine.prototype.registerHandler = function (handler, kindOfHandler) {
                switch (kindOfHandler) {
                    case KindsOfEventHandler.afterEnterStatus: {
                        this.afterEnterStatusHandlers.registerHandler(handler, kindOfHandler);
                        break;
                    }
                    case KindsOfEventHandler.beforeEnterStatus: {
                        this.beforeEnterStatusHandlers.registerHandler(handler, kindOfHandler);
                        break;
                    }
                    case KindsOfEventHandler.afterExitStatus: {
                        this.afterExitStatusHandlers.registerHandler(handler, kindOfHandler);
                        break;
                    }
                    case KindsOfEventHandler.beforeExitStatus: {
                        this.beforeExitStatusHandlers.registerHandler(handler, kindOfHandler);
                        break;
                    }
                }
            };
            /**
             * Gets the current status of the State Machine
             */
            BaseStateMachine.prototype.getCurrentStatus = function () {
                return this.currentStatus;
            };
            /**
             * Gets the previous status of the Machine
             */
            BaseStateMachine.prototype.getPreviousStatus = function () {
                return this.previousStatus;
            };
            /**
             * Tells if an event is allowed to be processed in the current state
             */
            BaseStateMachine.prototype.isEventValidForCurrentStatus = function (event) {
                if (this.stateMachineDefinition[event][this.currentStatus]) {
                    return true;
                }
                return false;
            };
            /**
             * Will cause the state machine to advance to the next status... or throw an exception.
             */
            BaseStateMachine.prototype.processEvent = function (event) {
                var _this = this;
                if (!this.isEventValidForCurrentStatus(event)) {
                    var result = new HandlerResult;
                    result.okToChange = false;
                    result.reason = "Event '" + event + "' not valid in status " + this.currentStatus + ". If this is not expected, please, check the state machine definition: " + JSON.stringify(this.stateMachineDefinition);
                    return PromiseHandler.when(result);
                }
                var nextStatus = this.stateMachineDefinition[event][this.currentStatus];
                var smEvent = new StateMachineEvent();
                smEvent.currentStatus = this.currentStatus;
                smEvent.destinationStatus = nextStatus;
                smEvent.previousStatus = this.previousStatus;
                smEvent.processingEvent = event;
                return this.beforeExitStatusHandlers.runHandlers(smEvent)
                    .then(function (result) {
                    if (!result.okToChange) {
                        var res = new HandlerResult;
                        res.okToChange = false;
                        res.reason = "State Change interrupted by beforeExitStatusHandler(s) with reason: " + result.reason;
                        return PromiseHandler.reject(result);
                    }
                    return _this.beforeEnterStatusHandlers.runHandlers(smEvent);
                })
                    .then(function (result) {
                    if (!result.okToChange) {
                        var res = new HandlerResult;
                        res.okToChange = false;
                        res.reason = "State Change interrupted by beforeEnterStatusHandler(s) with reason: " + result.reason;
                        return PromiseHandler.reject(result);
                    }
                    _this.previousStatus = _this.currentStatus;
                    _this.currentStatus = nextStatus;
                    return _this.afterExitStatusHandlers.runHandlers(smEvent);
                }).then(function () {
                    return _this.afterEnterStatusHandlers.runHandlers(smEvent);
                }).then(function () {
                    return _this.onSuccessfulEventProcessedHandlers.runHandlers(smEvent);
                }).catch(function (reason) {
                    // Some Handler decided not to allow the state change, so we simply return why!
                    return PromiseHandler.when(reason);
                });
            };
            return BaseStateMachine;
        }(BasePersistableObject));
        StateMachine.BaseStateMachine = BaseStateMachine;
    })(StateMachine = DDDTools.StateMachine || (DDDTools.StateMachine = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="BaseStateMachine.ts" />
var DDDTools;
(function (DDDTools) {
    var StateMachine;
    (function (StateMachine) {
        var StateMachineDefinitionRegistry = (function () {
            function StateMachineDefinitionRegistry() {
            }
            StateMachineDefinitionRegistry.buildTypeAndVersionString = function (typeName, typeVersion) {
                return typeName + "-" + typeVersion;
            };
            StateMachineDefinitionRegistry.registerStateMachine = function (stateMachineType, stateMachineVersion, stateMachineDefinition) {
                var typeNameAndVersion = StateMachineDefinitionRegistry.buildTypeAndVersionString(stateMachineType, stateMachineVersion);
                StateMachineDefinitionRegistry.stateMachineDefinitionRegistry[typeNameAndVersion] = stateMachineDefinition;
            };
            StateMachineDefinitionRegistry.getStateMachine = function (stateMachineType, stateMachineVersion) {
                var typeNameAndVersion = StateMachineDefinitionRegistry.buildTypeAndVersionString(stateMachineType, stateMachineVersion);
                return StateMachineDefinitionRegistry.stateMachineDefinitionRegistry[typeNameAndVersion];
            };
            StateMachineDefinitionRegistry.stateMachineDefinitionRegistry = {};
            return StateMachineDefinitionRegistry;
        }());
        StateMachine.StateMachineDefinitionRegistry = StateMachineDefinitionRegistry;
    })(StateMachine = DDDTools.StateMachine || (DDDTools.StateMachine = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../ValueObject/BaseValueObject.ts" />
/**
 * Collection of general and commonly used ValueObjects.
 */
var DDDTools;
(function (DDDTools) {
    var ValueObjects;
    (function (ValueObjects) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        /**
         * A simple value object to manage money.
         */
        var Money = (function (_super) {
            __extends(Money, _super);
            /**
             *
             * @param amount    amount in the currency specified by currency
             * @param currency  currency of the amount specified (if not supplied will be Currencies.EURO)
             * @param exchange  multiplier exchange to apply. This is always the €/currency amount ==> 1 * {currency} = {exchange} * €
             */
            function Money(amount, currency, exchange) {
                _super.call(this);
                this.__typeName = "DDDTools.ValueObjects.Money";
                this.__typeVersion = "v1";
                if (typeof amount === "number") {
                    this.amount = amount;
                    // Default Exchange is 1
                    this.exchange = exchange || 1.0000;
                    this.currency = currency || new Currency("EUR", "€");
                    this.amountEuro = this.amount * exchange;
                }
                if (amount instanceof Money) {
                    this.amount = amount.amount;
                    this.currency = amount.currency;
                    this.exchange = amount.exchange;
                    this.amountEuro = amount.amountEuro;
                }
            }
            Money.prototype.copy = function () {
                return new Money(this.amount, this.currency, this.exchange);
            };
            Money.prototype.getAmount = function () {
                return this.amount;
            };
            Money.prototype.getAmountEuro = function () {
                return this.amountEuro;
            };
            Money.prototype.getCurrency = function () {
                return this.currency;
            };
            Money.prototype.changeAmount = function (newAmount) {
                return new Money(newAmount, this.currency, this.exchange);
            };
            Money.prototype.changeExchange = function (newExchange) {
                return new Money(this.amount, this.currency, newExchange);
            };
            Money.prototype.changeCurrency = function (newCurrency) {
                return new Money(this.amount, newCurrency, this.exchange);
            };
            Money.prototype.plus = function (toAdd) {
                var newAmountEuro = this.getAmountEuro() + toAdd.getAmountEuro();
                return new Money(newAmountEuro).changeExchange(this.exchange).changeCurrency(this.currency);
            };
            Money.prototype.minus = function (toSubstract) {
                var newAmountEuro = this.getAmountEuro() - toSubstract.getAmountEuro();
                return new Money(newAmountEuro).changeExchange(this.exchange).changeCurrency(this.currency);
            };
            Money.prototype.multiplyBy = function (multiplier) {
                var newAmount = this.getAmount() * multiplier;
                return this.changeAmount(newAmount);
            };
            Money.prototype.divideBy = function (divisor) {
                var newAmount = this.getAmount() / divisor;
                return this.changeAmount(newAmount);
            };
            /**
             *
             * @param percent0_100 Percent to apply in 100th ( 1 means 1% ).
             *
             * @example var currentAmount = new Money( 1000.0 )
             *          var withPercentApplied = currentAmount.incrementByPercent( 50% ); { ==> 1500 }
             */
            Money.prototype.incrementByPercent = function (percent0_100) {
                var newAmount = this.getAmount() * (1 + percent0_100 / 100.0);
            };
            /**
             *
             * @param percent0_100 Percent to apply in 100th ( 1 means 1% ).
             *
             * @example var currentAmount = new Money( 1000.0 )
             *          var withPercentApplied = currentAmount.decrementPercent( 50% ); { ==> 500 }
             */
            Money.prototype.decrementByPercent = function (percent0_100) {
                var newAmount = this.getAmount() * (1 - percent0_100 / 100.0);
            };
            // See http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
            Money.prototype.formatNumber = function (decimals, thousandsSeparator, decimalSeparator) {
                if (decimals === void 0) { decimals = 2; }
                if (thousandsSeparator === void 0) { thousandsSeparator = "."; }
                if (decimalSeparator === void 0) { decimalSeparator = ","; }
                var lengthOfWholePart = 3;
                var re = '\\d(?=(\\d{' + (lengthOfWholePart || 3) + '})+' + (decimals > 0 ? '\\D' : '$') + ')', num = this.amount.toFixed(Math.max(0, ~~decimals));
                return (decimalSeparator ? num.replace('.', decimalSeparator) : num).replace(new RegExp(re, 'g'), '$&' + (thousandsSeparator || ','));
            };
            ;
            Money.prototype.toString = function (decimals, thousandsSeparator, decimalSeparator, showCurrency) {
                if (decimals === void 0) { decimals = 2; }
                if (thousandsSeparator === void 0) { thousandsSeparator = "."; }
                if (decimalSeparator === void 0) { decimalSeparator = ","; }
                if (showCurrency === void 0) { showCurrency = false; }
                return (showCurrency ? this.currency.symbol + " " : "") + this.formatNumber(decimals, thousandsSeparator, decimalSeparator);
            };
            return Money;
        }(BaseValueObject));
        ValueObjects.Money = Money;
        var Currency = (function () {
            function Currency(name, symbol) {
                this.name = name;
                this.symbol = symbol;
            }
            return Currency;
        }());
        ValueObjects.Currency = Currency;
        var Currencies = (function () {
            function Currencies() {
            }
            Currencies.EURO = new Currency("EUR", "€");
            Currencies.DOLLAR = new Currency("USD", "$");
            return Currencies;
        }());
        ValueObjects.Currencies = Currencies;
    })(ValueObjects = DDDTools.ValueObjects || (DDDTools.ValueObjects = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../CommonInterfaces/IEquatable.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="./IKeyValueObject.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./IKeyValueObject.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {IKeyValueObject} from "./IKeyValueObject";
// import {IPersistable} from "../PersistableObject/IPersistable";
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
/// <reference path="../Promises/PromiseHandler.ts" />
/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IDispatcher.ts" />
/// <reference path="./IEventHandler.ts" />
// import {IDomainEvent} from "./IDomainEvent";
// import {IDispatcher} from "./IDispatcher";
// import {IEventHandler} from "./IEventHandler";
var DDDTools;
(function (DDDTools) {
    var DomainEvents;
    (function (DomainEvents) {
        var PromiseHandler = DDDTools.Promises.PromiseHandler;
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
                    return sThis.dispatcherImplementation.dispatch(event);
                }
                else {
                    // If a dispatcherImplementation is not set, we should return a fake promise, to allow clients to always write their handlers!
                    return PromiseHandler.when();
                }
            };
            return DomainDispatcher;
        }());
        DomainEvents.DomainDispatcher = DomainDispatcher;
    })(DomainEvents = DDDTools.DomainEvents || (DDDTools.DomainEvents = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../PersistableObject/BasePersistableObject.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />
/// <reference path="./IEntity.ts" />
/// <reference path="./IKeyValueObject.ts" />
// import {BasePersistableObject} from "../PersistableObject/BasePersistableObject";
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {DomainDispatcher} from "../DomainEvents/DomainDispatcher";
// import {IEntity} from "./IEntity";
// import {IKeyValueObject} from "./IKeyValueObject";
/**
 * Classes and interfaces to implement an Entity, a persistable object.
 */
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
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Entity/IEntity.ts" />
/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Entity/BaseEntity.ts" />
/// <reference path="./IAggregateRoot.ts" />
/// <reference path="../Entity/IEntity.ts" />
/// <reference path="../Serialization/Serializer.ts" />
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {BaseEntity} from "../Entity/BaseEntity";
// import {IAggregateRoot} from "./IAggregateRoot";
// import {IEntity} from "../Entity/IEntity";
/**
 * Implements the Aggregate Pattern by defining interfaces and base behavior for an AggregateRoot.
 */
var DDDTools;
(function (DDDTools) {
    var Aggregate;
    (function (Aggregate) {
        var BaseEntity = DDDTools.Entity.BaseEntity;
        /**
         * Base behavior of an AggregateRoot, which is basically an entity...
         */
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
            /**
             * Compares an aggregate with another. Returns true if aggregate's data are exactly equal.
             */
            BaseAggregateRoot.prototype.perfectlyMatch = function (other) {
                if (!other) {
                    return false;
                }
                var thisOne = this.getState();
                var theOther = other.getState();
                // do the comparison just like value objects... naive but functional at this time.
                var comparison = _.isEqual(thisOne, theOther);
                return comparison;
            };
            return BaseAggregateRoot;
        }(BaseEntity));
        Aggregate.BaseAggregateRoot = BaseAggregateRoot;
    })(Aggregate = DDDTools.Aggregate || (DDDTools.Aggregate = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        /**
         * SaveAction will be passed to repositories' saveImplementation so that client can take decisions on what to do when adding or replacing an item if needed.
         */
        (function (SaveActionEnum) {
            SaveActionEnum[SaveActionEnum["Add"] = 0] = "Add";
            SaveActionEnum[SaveActionEnum["Update"] = 1] = "Update";
        })(Repository.SaveActionEnum || (Repository.SaveActionEnum = {}));
        var SaveActionEnum = Repository.SaveActionEnum;
        ;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../ErrorManagement/BaseErrors.ts" />
// import {BaseErrors} from "../ErrorManagement/BaseErrors";
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
        /**
         * A static container of event "__typeName"s
         */
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseValueObject = DDDTools.ValueObject.BaseValueObject;
        var BaseRepositoryEvent = (function (_super) {
            __extends(BaseRepositoryEvent, _super);
            function BaseRepositoryEvent(
                /**
                 * The aggregate instance after the action has been performed.
                 */
                item, 
                /**
                 * The Id of the repository performing the operation
                 */
                repositoryId) {
                _super.call(this);
                this.item = item;
                this.repositoryId = repositoryId;
            }
            return BaseRepositoryEvent;
        }(BaseValueObject));
        Repository.BaseRepositoryEvent = BaseRepositoryEvent;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="./BaseRepositoryEvent.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="./BaseRepositoryEvent.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="./BaseRepositoryEvent.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="./BaseRepositoryEvent.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
/// <reference path="./BaseRepositoryEvent.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
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
/// <reference path="./IRepository.ts" />
/// <reference path="./SaveActionEnum.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./ItemRetrievedEvent.ts" />
/// <reference path="./ItemAddedEvent.ts" />
/// <reference path="./ItemUpdatedEvent.ts" />
/// <reference path="./ItemDeletedEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />
// import {IRepository} from "./IRepository";
// import {Errors} from "./Errors";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {Factory as Factory} from "../PersistableObject/Factory";
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
// import {ItemRetrievedEvent} from "./ItemRetrievedEvent";
// import {ItemAddedEvent} from "./ItemAddedEvent";
// import {ItemUpdatedEvent} from "./ItemUpdatedEvent";
// import {ItemDeletedEvent} from "./ItemDeletedEvent";
// import {DomainDispatcher} from "../DomainEvents/DomainDispatcher";
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Factory = DDDTools.PersistableObject.Factory;
        var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
        /**
         * Captures common behavior of repository, using theTemplate Method Pattern.
         */
        var BaseRepository = (function () {
            function BaseRepository(
                /**
                 * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
                 */
                managedType, 
                /**
                 * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations.
                 * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
                 */
                repositoryId) {
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
            /**
             * Works just like save, but it never increments RevisionId, it trusts the one already present in the aggregate.
             */
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
                    // This is expected if the do not exists in the Repo.
                    event = new Repository.ItemAddedEvent(item, this.repositoryId);
                    saveAction = Repository.SaveActionEnum.Add;
                    shouldIncrementRevision = false; // because the item was not in the repo!
                }
                // Save occur only if stored item and saved item are different somehow.
                if (!item.perfectlyMatch(asItWas)) {
                    if (!replaceOnly && shouldIncrementRevision) {
                        item.incrementRevisionId();
                        event = event || new Repository.ItemReplacedEvent(item, this.repositoryId);
                    }
                    event = event || new Repository.ItemUpdatedEvent(item, this.repositoryId);
                    // finally saves aggregate into the repository.
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
                    // item not found, so nothing to delete!
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
/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../Promises/PromiseHandler.ts" />
/// <reference path="./IRepositoryAsync.ts" />
/// <reference path="./SaveActionEnum.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./ItemRetrievedEvent.ts" />
/// <reference path="./ItemAddedEvent.ts" />
/// <reference path="./ItemUpdatedEvent.ts" />
/// <reference path="./ItemDeletedEvent.ts" />
/// <reference path="../DomainEvents/DomainDispatcher.ts" />
// import {IRepositoryAsync} from "./IRepositoryAsync";
// import {Errors} from "./Errors";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {Factory as Factory} from "../PersistableObject/Factory";
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";
// import {ItemRetrievedEvent} from "./ItemRetrievedEvent";
// import {ItemAddedEvent} from "./ItemAddedEvent";
// import {ItemUpdatedEvent} from "./ItemUpdatedEvent";
// import {ItemDeletedEvent} from "./ItemDeletedEvent";
// import {DomainDispatcher} from "../DomainEvents/DomainDispatcher";
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Factory = DDDTools.PersistableObject.Factory;
        var DomainDispatcher = DDDTools.DomainEvents.DomainDispatcher;
        var PromiseHandler = DDDTools.Promises.PromiseHandler;
        /**
         * Captures common behavior of repository, using theTemplate Method Pattern.
         */
        var BaseRepositoryAsync = (function () {
            function BaseRepositoryAsync(
                /**
                 * The string representing the type managed by this repository. Will be compared with the __typeName property of the objects retrieved.
                 */
                managedType, 
                /**
                 * A string to dinetify the repository. Useful in scenarios where the same AggregateRoot might be saved in different locations.
                 * Events must discern what location the item was saved/retrieved/delete to/from/from. It defaults to the empty string
                 */
                repositoryId) {
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
                var deferred = PromiseHandler.defer();
                if (!id) {
                    deferred.reject(Repository.Errors.getErrorInstance(Repository.Errors.KeyNotSet, "id cannot be null or undefined"));
                    return deferred.promise;
                }
                this.getByIdImplementation(id).then(function (value) {
                    if (value.__typeName != _this.managedType && !(_this.managedType == undefined)) {
                        var reason = Repository.Errors.getErrorInstance(Repository.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtained " + value.__typeName + " from database.");
                        console.log("getById: " + reason);
                        deferred.reject(reason);
                        return;
                    }
                    try {
                        var toReturn = (Factory.createObjectsFromState(value));
                    }
                    catch (e) {
                        console.log("getById: " + JSON.stringify(e));
                        deferred.reject(e);
                        return;
                    }
                    var event = new Repository.ItemRetrievedEvent(toReturn, _this.repositoryId);
                    return DomainDispatcher.dispatch(event).finally(function () {
                        deferred.resolve(toReturn);
                    });
                }).catch(function (error) {
                    var reason = _this.buildError(error, Repository.Errors.ItemNotFound);
                    console.log("getById: " + reason);
                    deferred.reject(reason);
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.doSave = function (item, saveAction) {
                var _this = this;
                var deferred = PromiseHandler.defer();
                // Creates a new instance of the object that will be saved;
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
                var deferred = PromiseHandler.defer();
                var event;
                if (!item.getKey()) {
                    var reason = Repository.Errors.getErrorInstance(Repository.Errors.KeyNotSet);
                    return PromiseHandler.reject(reason);
                }
                this.getById(item.getKey()).then(function (readValue) {
                    // the item already exist so we have to compare it with what we are saving.
                    if (item.perfectlyMatch(readValue)) {
                        // What is in the database perfectly matches what we are saving, so nothing to do!
                        deferred.resolve();
                        return;
                    }
                    // Increment revision only if we are not replacing an item
                    if (!replaceOnly) {
                        item.incrementRevisionId();
                        event = event || new Repository.ItemUpdatedEvent(item, _this.repositoryId);
                    }
                    if (replaceOnly) {
                        event = event || new Repository.ItemReplacedEvent(item, _this.repositoryId);
                    }
                    return _this.doSave(item, Repository.SaveActionEnum.Update).then(function () {
                        return DomainDispatcher.dispatch(event).then(function () {
                            deferred.resolve();
                        });
                    }).catch(function (error) {
                        var reason = _this.buildError(error, Repository.Errors.ErrorReadingItem);
                        deferred.reject(reason);
                    });
                }, function (error) {
                    if (error instanceof Error && error.name == Repository.Errors.ItemNotFound) {
                        // This is expected, the item is not in the repo, so we have to add it!
                        _this.doSave(item, Repository.SaveActionEnum.Add).then(function () {
                            event = event || new Repository.ItemAddedEvent(item, _this.repositoryId);
                            return DomainDispatcher.dispatch(event).then(function () {
                                deferred.resolve();
                            });
                        }, function (error) {
                            var reason = _this.buildError(error, Repository.Errors.ErrorReadingItem);
                            deferred.reject(reason);
                        });
                    }
                    else {
                        // Other errors must be treated as ... "Errors"
                        var reason = _this.buildError(error, Repository.Errors.ErrorReadingItem);
                        deferred.reject(reason);
                    }
                });
                return deferred.promise;
            };
            BaseRepositoryAsync.prototype.delete = function (id) {
                var _this = this;
                var deferred = PromiseHandler.defer();
                var event;
                this.getById(id).then(function (item) {
                    var event = new Repository.ItemDeletedEvent(item, _this.repositoryId);
                    _this.deleteImplementation(id).then(function () {
                        return DomainDispatcher.dispatch(event).then(function () {
                            deferred.resolve();
                        });
                    }, function (error) {
                        var reason = _this.buildError(error, Repository.Errors.ErrorDeletingItem);
                        deferred.reject(reason);
                    });
                }, function (error) {
                    if (error instanceof Error && error.name === Repository.Errors.ItemNotFound) {
                        deferred.resolve();
                        return;
                    }
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            /**
             * Helper method to build an error from a return value of the Async Implementations.
             */
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
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="./BaseRepository.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepository.ts" />
// import {Errors} from "./Errors";
// import {Factory as Factory} from "../PersistableObject/Factory";
// import {IPersistable} from "../PersistableObject/IPersistable";
// import {BaseRepository} from "./BaseRepository";
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {IRepository} from "../Repository/IRepository";
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
/// <reference path="../Promises/PromiseHandler.ts" />
/// <reference path="../CommonInterfaces/ITypeTracking.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="../PersistableObject/Factory.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
/// <reference path="./BaseRepositoryAsync.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepositoryAsync.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="../Serialization/Deserializer.ts" />
var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var BaseRepositoryAsync = Repository.BaseRepositoryAsync;
        var PromiseHandler = DDDTools.Promises.PromiseHandler;
        var Serializer = DDDTools.Serialization.Serializer;
        var Deserializer = DDDTools.Serialization.Deserializer;
        var InMemoryRepositoryAsync = (function (_super) {
            __extends(InMemoryRepositoryAsync, _super);
            function InMemoryRepositoryAsync(managedType, repositoryId) {
                _super.call(this, managedType, repositoryId);
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
                var deferred = PromiseHandler.defer();
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
                var deferred = PromiseHandler.defer();
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
                var deferred = PromiseHandler.defer();
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
/// <reference path="./IDomainEvent.ts" />
/// <reference path="./IEventHandler.ts" />
/// <reference path="../Utils/SimpleGuid.ts" />
// import {IDomainEvent} from "./IDomainEvent";
// import {IEventHandler} from "./IEventHandler";
// import {SimpleGuid} from "../Utils/SimpleGuid";
var DDDTools;
(function (DDDTools) {
    var DomainEvents;
    (function (DomainEvents) {
        var SimpleGuid = DDDTools.Utils.SimpleGuid;
        var PromiseHandler = DDDTools.Promises.PromiseHandler;
        var InProcessDispatcher = (function () {
            function InProcessDispatcher() {
                this.delegatesRegistry = {};
            }
            InProcessDispatcher.prototype.clear = function () {
                this.delegatesRegistry = {};
            };
            /**
             * the scope parameter can be passed in to warranty that callback will be called in the original context [this]!!!
             */
            InProcessDispatcher.prototype.registerHandler = function (eventTypeName, handler, scope) {
                if (!this.delegatesRegistry[eventTypeName]) {
                    this.delegatesRegistry[eventTypeName] = {};
                }
                var handlerId;
                // "Stamps" the handler if not already "stamped"
                if (!handler.__handlerId) {
                    handler.__handlerId = SimpleGuid.generate();
                }
                handlerId = handler.__handlerId;
                if (!this.delegatesRegistry[eventTypeName][handlerId]) {
                    this.delegatesRegistry[eventTypeName][handlerId] = {
                        handler: handler,
                        originalScope: scope
                    };
                }
            };
            InProcessDispatcher.prototype.unregisterHandler = function (eventTypeName, handler) {
                // Act only id handler has been registered.
                if (handler.__handlerId) {
                    var handlerId = handler.__handlerId;
                    delete this.delegatesRegistry[eventTypeName][handlerId];
                }
            };
            InProcessDispatcher.prototype.dispatch = function (event) {
                var _this = this;
                if (!this.delegatesRegistry[event.__typeName]) {
                    return PromiseHandler.when();
                }
                var errors = [];
                var promiseArray = [];
                for (var element in this.delegatesRegistry[event.__typeName]) {
                    try {
                        var handler = this.delegatesRegistry[event.__typeName][element].handler;
                        var scope = this.delegatesRegistry[event.__typeName][element].originalScope;
                        var returnValue;
                        if (scope) {
                            returnValue = handler.call(scope, event);
                        }
                        else {
                            returnValue = handler(event);
                        }
                        // if we get a promise, we add it to the list of promises
                        if (returnValue) {
                            if (this.isAPromise(returnValue)) {
                                var promise;
                                promise = returnValue.catch(function (error) {
                                    errors.push(error);
                                });
                                promiseArray.push(promise);
                            }
                        }
                    }
                    catch (e) {
                        errors.push(e);
                    }
                }
                // the promise returned will be resolved when all of the promises in the array will be resolved.
                return PromiseHandler.all(promiseArray).then(function () {
                    if (errors.length != 0) {
                        var message = _this.buildErrorMessage(errors);
                        var e = new Error(message);
                        e.name = "Errors while processing event " + event.__typeName;
                        console.log(e);
                        console.log(event);
                    }
                }, function (error) {
                    console.log(error);
                });
            };
            InProcessDispatcher.prototype.isAPromise = function (valueToTest) {
                return (valueToTest.then && typeof valueToTest.then === 'function') && (valueToTest.catch && typeof valueToTest.catch === 'function');
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
/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Repository/IRepositoryAsync.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
var DDDTools;
(function (DDDTools) {
    var Saga;
    (function (Saga) {
        var BaseAggregateRoot = DDDTools.Aggregate.BaseAggregateRoot;
        var BaseSaga = (function (_super) {
            __extends(BaseSaga, _super);
            function BaseSaga(repository, initialStatus, finalStatuses) {
                _super.call(this);
                this.repository = repository;
                this.initialStatus = initialStatus;
                this.finalStatuses = finalStatuses;
            }
            BaseSaga.prototype.start = function () {
                this.registerEvents();
            };
            BaseSaga.prototype.stop = function () {
                this.unregisterEvents();
            };
            return BaseSaga;
        }(BaseAggregateRoot));
        Saga.BaseSaga = BaseSaga;
    })(Saga = DDDTools.Saga || (DDDTools.Saga = {}));
})(DDDTools || (DDDTools = {}));
/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../DomainEvents/IEventHandler.ts" />
/// <reference path="../ErrorManagement/BaseErrors.ts" />
// import {BaseErrors} from "../ErrorManagement/BaseErrors";
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork) {
        /**
         * A static container of event "__typeName"s
         */
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
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
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./Events.ts" />
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {Events} from "./Events";
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
/// <reference path="../Aggregate/IAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />
// import {IAggregateRoot} from "../Aggregate/IAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IPersistable} from "../PersistableObject/IPersistable";
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
        /**
         * Internal class to store item status info
         */
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
            /**
             * Checks if an item in "Saved" status has been modified, and changes the status accordingly.
             */
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
            /**
             * Returns true if key is already stored in the IdentityMap
             */
            IdentityMap.prototype.isTracked = function (key) {
                var idAsString = key.toString();
                if (this.idToObjectMap[idAsString]) {
                    return true;
                }
                return false;
            };
            /**
             * Retrieves an item from the IdentityMap.
             */
            IdentityMap.prototype.getById = function (key) {
                var idAsString = key.toString();
                if (this.isTracked(key)) {
                    return this.idToObjectMap[idAsString].getItem();
                }
                return null;
            };
            /**
             * Adds or replaces an item to the IdentityMap.
             */
            IdentityMap.prototype.add = function (key, item) {
                var idAsString = key.toString();
                var newItem = new TrackedItem(ItemStatus.New, item, key);
                this.idToObjectMap[idAsString] = newItem;
            };
            /**
             * Completely removes an item from the IdentityMap
             */
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
            /**
             * Computes the correct status for an item in "Saved" status, as it may have been modified since now (here we don't have property tracking).
             */
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
/// <reference path="../Aggregate/BaseAggregateRoot.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Repository/IRepository.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="../DomainEvents/InProcessDispatcher.ts" />
/// <reference path="../DomainEvents/IDomainEvent.ts" />
/// <reference path="../DomainEvents/IEventHandler.ts" />
/// <reference path="./IdentityMap.ts" />
/// <reference path="./ObjectDeletedEvent.ts" />
/// <reference path="./ObjectRetrievedEvent.ts" />
/// <reference path="./ObjectSavedEvent.ts" />
/// <reference path="./UnitOfWorkErrors.ts" />
// import {BaseAggregateRoot} from "../Aggregate/BaseAggregateRoot";
// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {IRepository} from "../Repository/IRepository";
// import {Serializer} from "../Serialization/Serializer";
// import {InProcessDispatcher} from "../DomainEvents/InProcessDispatcher";
// import {IDomainEvent} from "../DomainEvents/IDomainEvent";
// import {IEventHandler} from "../DomainEvents/IEventHandler";
// import {IdentityMap, ItemStatus} from "./IdentityMap";
// import {ObjectDeletedEvent} from "./ObjectDeletedEvent";
// import {ObjectRetrievedEvent} from "./ObjectRetrievedEvent";
// import {ObjectSavedEvent} from "./ObjectSavedEvent";
// import {UnitOfWorkErrors} from "./UnitOfWorkErrors";
var DDDTools;
(function (DDDTools) {
    var UnitOfWork;
    (function (UnitOfWork_1) {
        var InProcessDispatcher = DDDTools.DomainEvents.InProcessDispatcher;
        /**
         * Simple UnitOfWork for a single Repository.
         */
        var UnitOfWork = (function () {
            function UnitOfWork(repository) {
                this.repository = repository;
                this.idMap = new UnitOfWork_1.IdentityMap();
                this.dispatcher = new InProcessDispatcher();
            }
            /**
             * Retrieves an item from the Repository or from the UnitOfWork, given its Id.
             */
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
            /**
             * Marks an item as deleted from the UnitOfWork (and from the Repository when the UoW will be saved)
             */
            UnitOfWork.prototype.deleteById = function (key) {
                this.idMap.markAsDeletedById(key);
            };
            /**
             * Saves all the modified items in the UnitOfWork.
             */
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
                // raises an event for whomever is interested
                var savedEvent = new UnitOfWork_1.ObjectSavedEvent(item.__typeName, item.__typeVersion, key.toString());
                this.raiseEvent(savedEvent);
            };
            UnitOfWork.prototype.raiseEvent = function (event) {
                this.dispatcher.dispatch(event);
            };
            /**
             * Completely removes an object from the IdentityMap
             */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlYWRNb2RlbC9JUmVhZE1vZGVsQXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUXVlcnkvSVF1ZXJ5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzL1NpbXBsZUd1aWQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVOdWxsLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vVG91Y2gudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9JU3RhdGVNYWNoaW5lLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9CYXNlU3RhdGVNYWNoaW5lLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3RzL01vbmV5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlS2V5VmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvU2F2ZUFjdGlvbkVudW0udHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1BZGRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbURlbGV0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1SZXRyaWV2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1VcGRhdGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtUmVwbGFjZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NhZ2EvSVNhZ2EudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2FnYS9CYXNlU2FnYS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0lVbml0T2ZXb3JrLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9ycy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdERlbGV0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0U2F2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0lkZW50aXR5TWFwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztHQUVHO0FBQ0gsSUFBVSxRQUFRLENBY2pCO0FBZEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxlQUFlLENBY2pDO0lBZGtCLFdBQUEsZUFBZSxFQUFDLENBQUM7UUFDaEM7WUFBQTtZQVlBLENBQUM7WUFWVSxnQkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE9BQWdCO2dCQUN2QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLEdBQUcsQ0FBQztZQUNkLENBQUM7WUFFTSwyQkFBZ0IsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLE9BQWdCO2dCQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDO1lB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QUM7WUFDTCxDQUFDO1lBQ0wsaUJBQUM7UUFBRCxDQUFDLEFBdEdELElBc0dDO1FBdEdZLHVCQUFVLGFBc0d0QixDQUFBO0lBQ0wsQ0FBQyxFQW5Ia0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFtSDVCO0FBQUQsQ0FBQyxFQW5IUyxRQUFRLEtBQVIsUUFBUSxRQW1IakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTWluaW1hbCBFcnJvciBoYW5kbGluZyBiYXNlIGJlaGF2aW9ycyBmb3IgdGhlIGRvbWFpbiBtb2RlbC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5FcnJvck1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgICAgICBzdGF0aWMgdGhyb3cobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBCYXNlRXJyb3JzLmdldEVycm9ySW5zdGFuY2UobmFtZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXRFcnJvckluc3RhbmNlKG5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IEVycm9yIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihtZXNzYWdlIHx8IG5hbWUpO1xyXG4gICAgICAgICAgICBlcnIubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Qcm9taXNlcyB7XHJcblxyXG4gICAgZXhwb3J0IHZhciBQcm9taXNlSGFuZGxlcjogbmcuSVFTZXJ2aWNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBJUHJvbWlzZSA9IG5nLklQcm9taXNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBEZWZlcnJlZCA9IG5nLklEZWZlcnJlZDtcclxuIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNvZGUgZm9yY2VzIERERFRvb2xzIHRvIHVzZSAkcSBwcm9taXNlcyBpZiBhbmd1bGFyIGlzIGRlZmluZWQgYXQgdGhlIG1vbWVudCBkZGQtdG9vbHMgaXMgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGlmICh0eXBlb2YgYW5ndWxhciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHZhciAkaW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnXSk7XHJcbiAgICAgICAgdmFyICRxID0gJGluamVjdG9yLmdldChcIiRxXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFByb21pc2VIYW5kbGVyID0gJHE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChRKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhpcyBjYXN0IGlzIGVmZmVjdGl2ZWx5IGEgcmlzayEgSG93IHRvIG1hbmFnZSBpdCBjb3JyZWN0bHkgPyBcclxuICAgICAgICAgICAgUHJvbWlzZUhhbmRsZXIgPSA8bmcuSVFTZXJ2aWNlPig8YW55PlEpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgZGlkbid0IGZpbmQgYSBzdWl0YWJsZSBQcm9taXNlSGFuZGxlclxyXG4gICAgaWYgKFByb21pc2VIYW5kbGVyID09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiQSBQcm9taXNlIEhhbmRsZXIgbXVzdCBiZSBkZWZpbmVkLCBzdXBwb3J0ZWQgYXJlIGFuZ3VsYXIncyAkcSBvciBrcmlzIGtvd2FsJ3MgUS4gVGhpcyBtZWFucyB0aGF0IFEgb3IgYW5ndWxhciBNVVNUIGJlIGxvYWRlZCBiZWZvcmUgZGRkLXRvb2xzLmpzXCIpO1xyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVhZE1vZGVsIHtcclxuXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAgICBJZGVudGlmaWVzIGEgcmVhZG1vZGVsIGluIHRoZSBzeXN0ZW0uXHJcbiAgICAgICAgQSBSZWFkbW9kZWwgd2lsbCBiZSBwcm9iYWJseSBwZXJzaXN0ZWQgdG8gc29tZSBraW5kIG9mIGRhdGFiYXNlLFxyXG4gICAgICAgIGVpdGhlciBpbiBtZW1vcnkgb3IgZGlzayBvciAuLi5cclxuICAgICAgICBJdCBpcyBzb21laG93IHNpbWlsYXIgdG8gYSByZXBvc2l0b3J5LCBidXQgaXQgY2FuIHN0b3JlIGFueSBraW5kIG9mIHN0YXR1cyxcclxuICAgICAgICBub3QgbmVjZXNzYXJpbHkgYW4gYWdncmVnYXRlIHJvb3QuXHJcbiAgICAgICAgT2JqZWN0cyBzdG9yZWQgaW4gdGhlIFJlYWRNb2RlbCB3aWxsIHByb2JhYmx5IGhhdmUgYWxsIHB1YmxpYyBtZW1iZXJzLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSZWFkTW9kZWxBc3luYzxUPiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIFdpbGwgaW5zZXJ0IGEgbmV3IG9iamVjdCBpbiB0aGUgcmVhZG1vZGVsLlxyXG4gICAgICAgICAgICBJdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleSBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluc2VydCh2YWx1ZTogVCwga2V5OiBzdHJpbmcpOiBJUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIFdpbGwgdXBkYXRlIGFuIGV4aXN0aW5nIG9uamVjdCBpbiB0aGUgcmVhZG1vZGVsXHJcbiAgICAgICAgICAgIEl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIG9iamVjdCBkb2Vzbid0IGV4aXN0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZSh2YWx1ZTogVCwga2V5OiBzdHJpbmcpOiBJUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgV2lsbCBpbnNlcnQgb3IgdXBkYXRlIGFuIG9iamVjdCB3aXRoIGEgc3BlY2lmaWVkIGtleVxyXG4gICAgICAgICovXHJcbiAgICAgICAgaW5zZXJ0T3JVcGRhdGUodmFsdWU6IFQsIGtleTogc3RyaW5nKTogSVByb21pc2U8dm9pZD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgIFdpbGwgZGVsZXRlIGFuIGVsZW1lbnQgb2YgdGhlIFJlYWRNb2RlbCBjb2xsZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlQnlLZXkoa2V5OiBzdHJpbmcpOiBJUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgV2lsbCBkZWxldGUgYSBzZXQgb2YgZWxlbWVudHMgb2YgdGhlIFJlYWRNb2RlbCBjb2xsZWN0aW9uIGlkZW50aWZpZWQgYnkgYSBxdWVyeS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZUJ5UXVlcnkocXVlcnk6IGFueSk6IElQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICBXaWxsIGNsZWFyIHRoZSBjb2xsZWN0aW9uIGRlbGV0aW5nIGFsbCBvZiB0aGUgY29udGVudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGNsZWFyKCk6IElQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICBCeSBub3cgdGhlIHF1ZXJ5IG9iamVjdCBpcyBsZWZ0IHRvIHRoZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIHNlbGVjdChxdWVyeTogYW55KTogSVByb21pc2U8VFtdPjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5RdWVyeSB7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgYSBxdWVyeSB0byBiZSBleGVjdXRlZCBhZ2FpbnN0IGEgRGF0YXN0b3JlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5PFQ+IHtcclxuICAgICAgICBzZXRRdWVyeShxdWVyeU9iamVjdDogYW55KTtcclxuICAgICAgICBleGVjdXRlKCk6IFRbXTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUXVlcnkge1xyXG4gICAgXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIGEgcXVlcnkgdG8gYmUgZXhlY3V0ZWQgYWdhaW5zdCBhIERhdGFzdG9yZSBpbiBhbiBhc3luYyBmYXNoaW9uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5QXN5bmM8VD4ge1xyXG4gICAgICAgIHNldFF1ZXJ5KHF1ZXJ5T2JqZWN0OiBhbnkpO1xyXG4gICAgICAgIGV4ZWN1dGUoKTogSVByb21pc2U8VFtdPjtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBTb21lIHNpbXBsZSBjbGFzc2VzIHVzZWQgaW4gZGlmZmVyZW50IG1vZHVsZXMuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU2ltcGxlR3VpZCB7XHJcblx0XHQvLyBIZWxwZXIgZm9yIGd1aWQgZ2VuZXJhdGlvbi5cclxuXHRcdHByaXZhdGUgc3RhdGljIGlzVmFsaWQoZ3VpZDogc3RyaW5nKSB7XHJcblx0XHRcdHZhciBndWlkUmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXlt7KF0/WzAtOUEtRmEtZl17OH1bLV0/KFswLTlBLUZhLWZdezR9Wy1dPyl7M31bMC05QS1GYS1mXXsxMn1bKX1dPyRcIik7XHJcblx0XHRcdHJldHVybiBndWlkUmVnZXhwLnRlc3QoZ3VpZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgczQoKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG5cdFx0XHRcdC50b1N0cmluZygxNilcclxuXHRcdFx0XHQuc3Vic3RyaW5nKDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcclxuXHRcdFx0dmFyIG5ld1NpbXBsZUd1aWQgPSBcIntcIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArXHJcblx0XHRcdFx0U2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIn1cIjtcclxuXHJcblx0XHRcdGlmIChTaW1wbGVHdWlkLmlzVmFsaWQobmV3U2ltcGxlR3VpZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3U2ltcGxlR3VpZDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaG91bGQgTmV2ZXIgSGFwcGVuISBUaGUgZ2VuZXJhdGVkIGd1aWQgaXMgbm90IHZhbGlkIVwiKVxyXG5cdFx0fVxyXG5cdH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5VdGlscyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpbXBsZUlkZW50aXR5TWFwIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogYW55IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzVHJhY2tlZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChpZDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIG9iamVjdDogYW55KTogYW55IHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXSA9IG9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgYWxsIHRoZSBpZHMgaW4gdGhlIG1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRJZHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5pZFRvT2JqZWN0TWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybi5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkZWxldGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLkNvbW1vbkludGVyZmFjZXMge1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUVxdWF0YWJsZTxUPiB7XHJcblx0XHRlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW47XHJcblx0fVxyXG59IiwiXHJcbm5hbWVzcGFjZSBERERUb29scy5Db21tb25JbnRlcmZhY2VzIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIF9fb2JqZWN0SW5zdGFuY2VJZD86IHN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlRGF0ZSBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBfX2RhdGVBc1N0cmluZzogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19kYXRlQXNTdHJpbmcgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldERhdGVGcm9tU3RyaW5nKGRhdGVBc1N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlQXNTdHJpbmcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0RGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZURhdGUuZ2V0RGF0ZUZyb21TdHJpbmcodGhpcy5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlUmVnRXhwIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJTZXJpYWxpemFibGVSZWdFeHBcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgX19yZWd1bGFyRXhwcmVzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIF9fZmxhZ3M6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocmVnRXhwOiBSZWdFeHApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGxpdFJlZ0V4cEFuZEZsYWdzKCByZWdFeHAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3BsaXRSZWdFeHBBbmRGbGFncyggcmVnRXhwOiBSZWdFeHAgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcmVhbGx5VW5saWtlbHlTdHJpbmcgPSBcIsKww7LDoMO5wrDCsMOyw6DDucKwwrDDssOgw7nCsFwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG8gZ2V0IGEgY29ycmVjdCByZWdleHAgd2UgbXVzdCB0YWtlIGF3YXkgdGhlIGxlYWRpbmcgXCIvXCIgYW5kIHRoZSBmbGFncyFcclxuICAgICAgICAgICAgdmFyIGNvbmRpdGlvbmVkU3RyaW5nID0gcmVnRXhwLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyByZXBsYWNlcyB0aGUgZXNjYXBlZCBzbGFzaGVzIHdpdGggc29tZXRoaW5nIHZlcnkgaW1wcm9iYWJsZVxyXG4gICAgICAgICAgICBjb25kaXRpb25lZFN0cmluZyA9IGNvbmRpdGlvbmVkU3RyaW5nLnJlcGxhY2UoXCJcXFxcL1wiLCByZWFsbHlVbmxpa2VseVN0cmluZyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGNvbmRpdGlvbmVkU3RyaW5nLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHBhcnRzWzBdIG11c3QgYWx3YXlzIGJlIHRoZSBlbXB0eSBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gXCJcIikgdGhyb3cgbmV3IEVycm9yKFwic3BsaXRSZWdFeHBBbmRGbGFnczogVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuIVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVzdG9yZSB3aGF0IFxyXG4gICAgICAgICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UocmVhbGx5VW5saWtlbHlTdHJpbmcsIFwiXFxcXC9cIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gPSBwYXJ0c1sxXTtcclxuICAgICAgICAgICAgdGhpcy5fX2ZsYWdzID0gcGFydHNbMl0gfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChcInNwbGl0UmVnRXhwOiBcIiArIHJlZ0V4cC50b1N0cmluZygpICsgXCIgLi4uIFwiICsgdGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uICsgXCIgLi4uIFwiICsgdGhpcy5fX2ZsYWdzICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHJlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmcsIGZsYWdzOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBSZWdFeHA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldFJlZ0V4cDogXCIgKyB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gKyBcIiAuLi4gXCIgKyB0aGlzLl9fZmxhZ3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGZsYWdzKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb24sIGZsYWdzKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBiYWNrIGEgUmVndWxhciBFeHByZXNzaW9uIGZyb20gdGhlIFNlcmlhbGl6YWJsZVJlZ0V4cCBpbnN0YW5jZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRSZWdFeHAoKTogUmVnRXhwIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZVJlZ0V4cC5nZXRSZWdFeHBGcm9tUmVnRXhwQW5kRmxhZ3ModGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uLCB0aGlzLl9fZmxhZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZU51bGwgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlNlcmlhbGl6YWJsZU51bGxcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdG91Y2hJbmRleCA9IDE7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXBhcmVzIHRoZSBpZCBnZW5lcmF0b3IgZm9yIGEgbmV3IHJ1blxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRUb3VjaEluZGV4KCkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICAgICAgc1RoaXMudG91Y2hJbmRleCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBnZXROZXdJbmRleCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpXHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFRvdWNoO1xyXG4gICAgICAgICAgICBzVGhpcy50b3VjaEluZGV4Kys7XHJcbiAgICAgICAgICAgIHJldHVybiAoc1RoaXMudG91Y2hJbmRleCsrIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFkZHMgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IHRvIGFuIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVG91Y2hcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdJZCA9IHNUaGlzLmdldE5ld0luZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkID0gbmV3SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlbW92ZXMgdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSBmcm9tIGFuIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdW50b3VjaChvYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaGFzQmVlblRvdWNoZWQob2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGNhc3RlZC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZURhdGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVSZWdFeHAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Ub3VjaC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbi8vIGltcG9ydCB7U2ltcGxlSWRlbnRpdHlNYXB9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcFwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuLy8gaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIEpTT04gc3RyaW5nIHNlcmlhbGl6YXRpb24uIEl0IGV4dGVuZHMgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBKU09OLnN0cmluZ2lmeSB0byBhbGxvdyBzZXJpYWxpemF0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gb2YgZGF0ZSBhbmQgcmVndWxhciBleHByZXNzaW9uIG9iamVjdHMsIGFuZCBvYmplY3QgcmVmZXJlbmNlLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBTaW1wbGVHdWlkID0gVXRpbHMuU2ltcGxlR3VpZDtcclxuICAgIGltcG9ydCBTaW1wbGVJZGVudGl0eU1hcCA9IFV0aWxzLlNpbXBsZUlkZW50aXR5TWFwO1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBEZXNlcmlhbGl6ZXIge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgaXMgbmVlZGVkIHRvIHRyYWNrIG9iamVjdCBpbnN0YW5jZXMgdG8gYWNoaWV2ZSBjb3JyZWN0IHJlY29uc3RydWN0aW9uIG9mIHRoZSBvYmplY3QgdHJlZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpZGVudGl0eU1hcDogU2ltcGxlSWRlbnRpdHlNYXA7XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXNlcmlhbGl6ZXMgYW4gb2JqZWN0IGZyb20gYSBKU09OIHN0cmluZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKHRvRGVzZXJpYWxpemU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgICAgIERlc2VyaWFsaXplci5pZGVudGl0eU1hcCA9IG5ldyBTaW1wbGVJZGVudGl0eU1hcCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBKU09OLnBhcnNlKHRvRGVzZXJpYWxpemUsIERlc2VyaWFsaXplci5jdXN0b21SZXZpdmVyKTtcclxuICAgICAgICAgICAgRGVzZXJpYWxpemVyLmNsZWFudXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzZXJpYWxpemVzIGFuIG9iamVjdCBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgd2l0aCBcIlNlcmlhbGl6ZVRvT2JqZWN0XCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplRnJvbU9iamVjdCh0b0Rlc2VyaWFsaXplOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICB2YXIgc291cmNlQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0b0Rlc2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHNvdXJjZUFzU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2xlYW5zIHRoZSByZWNvbnNpdHV0ZWQgaW5zdGFuY2VzIGZyb20gdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSxcclxuICAgICAgICAgKiBhbmQgZW1wdGllcyB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY2xlYW51cCgpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRGVzZXJpYWxpemVyO1xyXG4gICAgICAgICAgICB2YXIgaWRNYXAgPSBzVGhpcy5pZGVudGl0eU1hcDtcclxuICAgICAgICAgICAgdmFyIHVudG91Y2ggPSBUb3VjaC51bnRvdWNoO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBpZE1hcC5nZXRJZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gaWRNYXAuZ2V0QnlJZChpdGVtKTtcclxuICAgICAgICAgICAgICAgIHVudG91Y2goY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgbGVhdmUgdGhlIGluc3RhbmNlcyBcImdhcmJhZ2VhYmxlXCIuLi4gaG93IHRvIHRlc3QgPyAgICBcclxuICAgICAgICAgICAgICAgIGlkTWFwLmRlbGV0ZUJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEl0IGhhbmRsZXMgRmFrZSogaW5zdGFuY2VzIHVzZXMgX19vYmplY3RJbnN0YW5jZUlkIHRvIHJlYnVpbGQgYSBjb3JyZWN0IG9iamVjdCB0cmVlLiBcclxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJ5IEpTT04ucGFyc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21SZXZpdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERlc2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc1RoaXMuaGFzQmVlblRvdWNoZWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkTWFwLmlzVHJhY2tlZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZE1hcC5nZXRCeUlkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VSZWdFeHBEZXNlcmlhbGl6ZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlTnVsbERlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXAuYWRkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgICAgIGlmIChjYXN0ZWQuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5hZ2VzIFJlZ0V4cCBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlUmVnRXhwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRmFrZVJlZ0V4cERlc2VyaWFsaXplcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlNlcmlhbGl6YWJsZVJlZ0V4cFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBTZXJpYWxpemFibGVSZWdFeHAuZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHZhbHVlLl9fcmVndWxhckV4cHJlc3Npb24sIHZhbHVlLl9fZmxhZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgRGF0ZSBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlUmVnRXhwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRmFrZURhdGVEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSA9PT0gXCJTZXJpYWxpemFibGVEYXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFNlcmlhbGl6YWJsZURhdGUuZ2V0RGF0ZUZyb21TdHJpbmcodmFsdWUuX19kYXRlQXNTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgTnVsbCBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlTnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZha2VOdWxsRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiU2VyaWFsaXphYmxlTnVsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVEYXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlUmVnRXhwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlTnVsbC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RvdWNoLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbi8vIGltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6ZXIge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlcmlhbGl6ZXMgYW4gb2JqZWN0IHRvIGEgSlNPTiBzdHJpbmcsIGtlZXBlaW5nIHRyYWNrIG9mIHRoZSBpbnN0YW5jZXMgb2YgdGhlIG9iamVjdHMgc2VyaWFsaXplZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKHRvU2VyaWFsaXplOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm47XHJcbiAgICAgICAgICAgIFRvdWNoLnJlc2V0VG91Y2hJbmRleCgpO1xyXG4gICAgICAgICAgICBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgU2VyaWFsaXplci50b3VjaFNvdXJjZU9iamVjdCh0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IEpTT04uc3RyaW5naWZ5KHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICAgICAgU2VyaWFsaXplci51bnRvdWNoU291cmNlT2JqZWN0KHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXJpYWxpemVzIGFuIG9iamVjdCB0byAuLi4gYSBuZXcgb2JqZWN0LiBUaGUgc2VyaWFsaXplZCBvYmplY3Qgd2lsbCBoYXZlIFNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIERhdGVzLCBudWxsIGFuZCBSZWdFeHAgdmFsdWUsIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIHR5cGVzLlxyXG4gICAgICAgICAqIFRoZSBzZXJpYWxpemVkIG9iamVjdCB3aWxsIGhhdmUgb25seSBkYXRhIGFuZCBubyBtZXRob2RzIGZvciBub24gbmF0aXZlIG9iamVjdHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVUb09iamVjdCh0b1NlcmlhbGl6ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gU2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIHNvdXJjZUFzU3RyaW5nID0gc1RoaXMuc2VyaWFsaXplKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gSlNPTi5wYXJzZShzb3VyY2VBc1N0cmluZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmVwcm9jZXNzIHRoZSBvYmplY3QgdHJlZSB0byBiZSBzZXJpYWxpemVkIHRvIGZpbmQgYW5kIHJlcGxhY2UgRGF0ZSwgbnVsbCwgUmVnRXhwLCAuLi4gb2JqZWN0cyB3aXRoIHNvbWV0aGluZyBkaWZmZXJlbnQuLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VEYXRlID0gbmV3IFNlcmlhbGl6YWJsZURhdGUoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VOdWxsID0gbmV3IFNlcmlhbGl6YWJsZU51bGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VOdWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZVJlZ0V4cCA9IG5ldyBTZXJpYWxpemFibGVSZWdFeHAoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlUmVnRXhwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB0b3VjaFNvdXJjZU9iamVjdChzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNvdXJjZU9iamVjdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFUb3VjaC5oYXNCZWVuVG91Y2hlZChzb3VyY2VPYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBUb3VjaC50b3VjaChzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzVGhpcy50b3VjaFNvdXJjZU9iamVjdChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc291cmNlT2JqZWN0W2lkeF0gPSBzVGhpcy5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdW50b3VjaFNvdXJjZU9iamVjdChzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNvdXJjZU9iamVjdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKFRvdWNoLmhhc0JlZW5Ub3VjaGVkKHNvdXJjZU9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIFRvdWNoLnVudG91Y2goc291cmNlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc1RoaXMudW50b3VjaFNvdXJjZU9iamVjdChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc291cmNlT2JqZWN0W2lkeF0gPSBzVGhpcy5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUG9zdHByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBTZXJpYWxpemFibGVEYXRlL1JlZ0V4cCBvYmplY3RzIHdpdGggT3JpZ2luYWwgdHlwZXMgYWdhaW4uLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSAoPFNlcmlhbGl6YWJsZURhdGU+Y3VycmVudCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVOdWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlUmVnRXhwPmN1cnJlbnQpLmdldFJlZ0V4cCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuLyoqXHJcbiAqIERlZmluZXMgZGVmYXVsdCBiZWhhdmlvciBhbmQgaW50ZXJmYWNlcyBmb3IgYSBQZXJzaXN0YWJsZSBPYmplY3QsIGFuIG9iamVjdCB0aGF0IGhhcyBhIHN0YXRlIHRoYXQgd2lsbCBwcm9iYWJseSBiZSBwZXJzaXN0ZWQuIEl0IGdpdmVzIHN1cHBvcnQgdG8gXCJ1cGdyYWRlXCIgcGVyc2lzdGVkIG9iamVjdHMuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cdFxyXG5cdGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIElQZXJzaXN0YWJsZSBleHRlbmRzIElUeXBlVHJhY2tpbmcge1xyXG5cdFx0Z2V0VXBncmFkZWRJbnN0YW5jZT8oZnJvbUluc3RhbmNlOiBJUGVyc2lzdGFibGUpOiBJUGVyc2lzdGFibGU7XHJcblx0XHRnZXRTdGF0ZSgpOiBJVHlwZVRyYWNraW5nO1xyXG5cdFx0c2V0U3RhdGUoc3RhdGU6IElUeXBlVHJhY2tpbmcpO1xyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50c1wiIC8+XHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG4gICAgXHJcbiAgICBpbXBvcnQgQmFzZUVycm9ycyA9IEVycm9yTWFuYWdlbWVudC5CYXNlRXJyb3JzO1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSBwZXJzaXN0YWJsZSBvYmplY3RzXHJcbiAgICAgICAgc3RhdGljIFN0YXRlSXNOb3RBbk9iamVjdCA9IFwiU3RhdGUgaXMgbm90IGFuIE9iamVjdFwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlTmFtZU5vdFNldCA9IFwiVHlwZU5hbWUgbm90IHNldFwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlVmVyc2lvbk5vdFNldCA9IFwiVHlwZVZlcnNpb24gbm90IHNldFwiO1xyXG4gICAgICAgIHN0YXRpYyBVbmFibGVUb0luc3RhbnRpYXRlVHlwZSA9IFwiVW5hYmxlIHRvIEluc3RhbnRpYXRlIFR5cGVcIjtcclxuICAgICAgICBzdGF0aWMgVHlwZVJlZ2lzdHJ5Tm90U2V0ID0gXCJUeXBlUmVnaXN0cnkgbm90IHNldFwiO1xyXG5cclxuICAgICAgICAvLyBUaHJvd24gYnkgdGhlIEZhY3RvcnkvVHlwZVJlZ2lzdHJ5XHJcbiAgICAgICAgc3RhdGljIFR5cGVOb3RSZWdpc3RlcmVkID0gXCJUeXBlIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhlIFR5cGVSZWdpc3RyeVwiO1xyXG4gICAgICAgIHN0YXRpYyBDYW5ub3RSZWdpc3RlclVuZGVmaW5lZCA9IFwidHlwZVByb3RvdHlwZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIlxyXG5cclxuICAgICAgICAvLyBUaHJvd24gYnkgdGhlIFVwZ3JhZGVyXHJcbiAgICAgICAgc3RhdGljIFR5cGVOb3RJbnN0YXRpYWJsZSA9IFwiVHlwZSBpcyBub3QgaW5zdGFudGlhYmxlXCI7XHJcbiAgICAgICAgc3RhdGljIFVwZ3JhZGVQYXRoTm90Rm91bmQgPSBcIlVwZ3JhZGUgUGF0aCBub3QgRm91bmRcIjtcclxuICAgICAgICBzdGF0aWMgSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCA9IFwiSW5jb3JyZWN0IFZlcnNpb24gRm9ybWF0XCI7XHJcbiAgICAgICAgc3RhdGljIFdyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSA9IFwiV3JvbmcgVmVyc2lvbiBpbiBVcGdyYWRlZCBJbnN0YW5jZVwiO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGUudHNcIiAvPlxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFZhbHVlT2JqZWN0IHBhdHRlcm4uXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgSUVxdWF0YWJsZSA9IENvbW1vbkludGVyZmFjZXMuSUVxdWF0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElWYWx1ZU9iamVjdDxUPiBleHRlbmRzIElFcXVhdGFibGU8VD4sIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG4gICAgaW1wb3J0IElWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LklWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElLZXlWYWx1ZU9iamVjdDxUPiBleHRlbmRzIElWYWx1ZU9iamVjdDxUPiB7XHJcbiAgICAgICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuL0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbi8vIGltcG9ydCB7RGVzZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgRGVzZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCBpbXBsZW1lbnRzIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0U3RhdGUoKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX190eXBlTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTmFtZU5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZVZlcnNpb25Ob3RTZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9SZWNvbnN0aXR1dGUgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZSh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHJlY29uc3RpdHV0ZWQgPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodG9SZWNvbnN0aXR1dGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlY29uc3RpdHV0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHNldFN0YXRlPFRTdGF0ZT4oc3RhdGU6IFRTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuU3RhdGVJc05vdEFuT2JqZWN0LCBcInN0YXRlIGRldmUgZXNzZXJlIHVuIG9nZ2V0dG9cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGVFbGVtZW50ID0gc3RhdGVbZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICB0aGlzW2VsZW1lbnRdID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKGN1cnJlbnRTdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZ2V0U3RhdGUoKSApICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JVmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVmFsdWVPYmplY3R9IGZyb20gXCIuL0lWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG5cdGltcG9ydCBCYXNlUGVyc2lzdGFibGVPYmplY3QgPSBQZXJzaXN0YWJsZU9iamVjdC5CYXNlUGVyc2lzdGFibGVPYmplY3Q7XHJcblx0aW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcblxyXG5cdGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVmFsdWVPYmplY3Q8VD5cclxuXHRcdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0XHRpbXBsZW1lbnRzIElWYWx1ZU9iamVjdDxUPiB7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdHN1cGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbiB7XHJcblx0XHRcdC8vIFBlciBvZ25pIHByb3ByaWV0w6AgZGVsbCdJVEVNIDp2ZXJpZmljbyBsJ3VndWFnbGlhbnphIGNvbiBsJ2lzdGFuemEgYXR0dWFsZSBcdFx0XHRcclxuXHRcdFx0cmV0dXJuIF8uaXNFcXVhbChpdGVtLCB0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEZpbmRzIHRoaXMgdmFsdWUgb2JqZWN0IGluIGFuIGFycmF5LiBXaWxsIHJldHVybiBhbiBhcnJheSBvZiBpbmRleGVzIG1hdGNoaW5nIHRoZSBzZWFyY2hlZCBvYmplY3QuXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyBmaW5kSW5BcnJheShjb2xsZWN0aW9uOiBUW10pOiBzdHJpbmdbXSB7XHJcblx0XHRcdHZhciB0b1JldHVybjogc3RyaW5nW10gPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBlbGVtZW50IGluIGNvbGxlY3Rpb24pe1xyXG5cdFx0XHRcdGlmICh0aGlzLmVxdWFscyhjb2xsZWN0aW9uW2VsZW1lbnRdKSkge1xyXG5cdFx0XHRcdFx0dG9SZXR1cm4ucHVzaChlbGVtZW50KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdG9SZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiBnZW5lcmFsIGFuZCBjb21tb25seSB1c2VkIFZhbHVlT2JqZWN0cy4gXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3RzIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEd1aWQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8R3VpZD4gaW1wbGVtZW50cyBJS2V5VmFsdWVPYmplY3Q8R3VpZD4ge1xyXG5cclxuICAgICAgICBwdWJsaWMgX190eXBlTmFtZSA9IFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIjtcclxuICAgICAgICBwdWJsaWMgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBndWlkOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGd1aWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChndWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWQgPSBndWlkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogR3VpZCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3VpZChTaW1wbGVHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVmFsdWVPYmplY3RzIHVzZWQgYXMga2V5IE1VU1QgaW1wbGVtZW50IGEgdG9TdHJpbmcgbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUga2V5IGFzIHN0cmluZy5cclxuICAgICAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmd1aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge1R5cGVSZWdpc3RyeX0gZnJvbSBcIi4vVHlwZVJlZ2lzdHJ5XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnkgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGNyZWF0ZSBhbmQgcmVjb25zdGl0dXRlIHN0YXRmZXVsIG9iamVjdHMuXHJcbiAgICAgKiBJdCBndXJhbnRlZXMgdGhhdCBhIHN0YXRmdWwgb2JqZWN0IGlzIGFsd2F5cyBjcmVhdGVkIG9yIHJlY29uc3RpdHV0ZWQgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uLiAgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdHlwZVJlZ2lzdHJ5OiBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdGVycyBhIG5ldyBJUGVyc2lzdGFibGUgdHlwZSB3aXRoIHRoZSBGYWN0b3J5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogbmV3ICguLi5hcmdzKSA9PiBJUGVyc2lzdGFibGUpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRmFjdG9yeTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy50eXBlUmVnaXN0cnkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLnR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RlclR5cGUodHlwZU5hbWUsIHR5cGVWZXJzaW9uLCB0eXBlUHJvdG90eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCB0eXBlLiBJZiB0eXBlVmVyc2lvbiBpcyBub3Qgc3VwcGxpZWQsIGxhdGVzdCBhdmFpbGFibGUgdmVyc2lvbiBpcyByZXR1cm5lZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZyk6IFQge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGYWN0b3J5LnR5cGVSZWdpc3RyeSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGVWZXJzaW9uTWVzc2FnZSA9IHR5cGVWZXJzaW9uID8gXCIgdmVyc2lvbiAnXCIgKyB0eXBlVmVyc2lvbiArIFwiJ1wiIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZVJlZ2lzdHJ5Tm90U2V0LCBcIlBsZWFzZSByZWdpc3RlciBhdCBsZWFzdCBhIHR5cGUgd2l0aCB0aGUgRmFjdG9yeSBmb3IgdGhlIHR5cGUgJ1wiICsgdHlwZU5hbWUgKyBcIidcIiArIHR5cGVWZXJzaW9uTWVzc2FnZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gVHlwZVJlZ2lzdHJ5LmdldFR5cGVJbnN0YW5jZTxUPih0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgdHlwZVRvSW5zdGF0aWF0ZSA9IEZhY3RvcnkuY29tcHV0ZUZ1bGx5UXVhbGlmaWVkVHlwZU5hbWUodHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZVRvSW5zdGF0aWF0ZSArIFwiKClcIik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIFRoaXMgZmFpbHVyZSBpcyBleHBlY3RlZCBpZiB3ZSBhcmUgYXNraW5nIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0b1JldHVybi5fX3R5cGVWZXJzaW9uICE9IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgIHRvUmV0dXJuID0gPFQ+ZXZhbChcIm5ldyBcIiArIHR5cGVOYW1lICsgXCIoKVwiKTtcclxuICAgICAgICAgICAgLy8gfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgaW5zdGFuY2UgZnJvbSBpdHMgc3RhdGUuIFdpbGwgYWx3YXlzIHJldHVybiB0aGUgbGF0ZXN0IHZlcnNpb24gcG9zc2libGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShzdGF0ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICd1bmRlZmluZWQnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcInN0YXRlIGNhbm5vdCBiZSAnbnVsbCdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTWFuYWdlcyB0aGUgXCJzcGVjaWFsXCIgdHlwZXMgRGF0ZSBhbmQgUmVnRXhwLlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHN0YXRlIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRmFjdG9yeS5pc1BlcnNpc3RhYmxlT2JqZWN0KHN0YXRlKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGVyc2lzdGFibGU6IElQZXJzaXN0YWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGFibGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShzdGF0ZS5fX3R5cGVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0YWJsZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3YXJyYW50aWVzIHRoYXQgYSB0eXBlIGlzIGFsd2F5cyByZXR1cm5lZCBhdCBpdHMgbGF0ZXN0IHZlcnNpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZ3JhZGVkUGVyc2lzdGFibGUgPSBVcGdyYWRlci51cGdyYWRlKHBlcnNpc3RhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBncmFkZWRQZXJzaXN0YWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IGlzIG5vdCBhIHBlcnNpc3RhYmxlT2JqZWN0IGNhbiBiZSBhbiBBcnJheSBvciBhbiBPYmplY3QgYW5kIG11c3QgYmUgcmVjb25zdGl0dXRlZFxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBhbnkgPSBBcnJheS5pc0FycmF5KHN0YXRlKSA/IFtdIDoge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjdXJyZW50RWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGlzRWxlbWVudCA9IHN0YXRlW2N1cnJlbnRFbGVtZW50XTtcclxuICAgICAgICAgICAgICAgICAgICB0b1JldHVybltjdXJyZW50RWxlbWVudF0gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpc0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFwiUHJpbWl0aXZlXCJcIiB0eXBlcyBhcmUgcmV0dXJuZWQgYXMgdGhleSBhcmVcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBcIklQZXJzaXN0YWJsZVwiIGludGVyZmFjZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1BlcnNpc3RhYmxlT2JqZWN0KG9iamVjdFRvVGVzdDogYW55KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFRvVGVzdCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBlcnNpc3RhYmxlID0gPElQZXJzaXN0YWJsZT5vYmplY3RUb1Rlc3Q7XHJcbiAgICAgICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlTmFtZSB8fCBwZXJzaXN0YWJsZS5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlVmVyc2lvbiB8fCBwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGEgdHlwZSBjYW4gYmUgaW5zdGF0aWF0ZWQgKGF0IGl0cyBsYXRlc3QgdmVyc2lvbikuIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzVHlwZUluc3RhbnRpYWJsZSh0eXBlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wVHlwZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBVcGdyYWRlciBpcyBhbiBoZWxwZXIgY2xhc3MgdG8gYXV0b21hdGUgdGhlIFwidXBncmFkZSBwcm9jZXNzXCIgb2YgYW4gb2JqZWN0J3Mgc3RhdGUuXHJcbiAgICAgKiBUaGUgVXBncmFkZXIgaXMgZm91bmQgb24gdGhlc2UgcHJpbmNpcGxlczpcclxuICAgICAqICAqIFRoZSBsYXRlc3QgdmVyc2lvbiBGUVROIG11c3QgbWF0Y2ggdGhlIG9uZSBzcGVjaWZpZWQgYnkgdGhlIHByb3BlcnR5IF9fdHlwZU5hbWUsIHdoaWNoIGlzIGluIHRoZSBmb3JtIG5hbWVzcGFjZS5vYmplY3ROYW1lLlxyXG4gICAgICogICogT2xkZXIgdmVyc2lvbnMgb2YgYSBQZXJzaXN0YWJsZU9iamVjdCBNVVNUIGhhdmUgYSBGUVROIGluIHRoZSBmb3JtIG5hbWVzcGFjZS48dmVyc2lvbj4ub2JqZWN0TmFtZS5cclxuICAgICAqICAqIF9fdHlwZVZlcnNpb24gTVVTVCBiZSBzcGVjaWZpZWQgYXMgdjx2ZXJzaW9uTnVtYmVyPiB3aGVyZSB2ZXJzaW9uIGlzIGFuIGludGVnZXIuXHJcbiAgICAgKiAgKiBBbGwgb2JqZWN0J3MgdmVyc2lvbnMgKGV4Y2x1ZGluZyB2MSkgTVVTVCBwcm92aWRlIGFuIGdldFVwZ3JhZGVkSW5zdGFuY2UgbWV0aG9kIHRoYXQga25vd3MgaG93IHRvIG1vZGlmeSBzdGF0ZSB0byBnbyBmcm9tIFxyXG4gICAgICogICAgdmVyc2lvbiB2PG4gLSAxPiB0byB2PG4+LCB3aGVyZSBuIGlzIHRoZSB2ZXJzaW9uIG9mIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QuICAgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBVcGdyYWRlciB7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5zIHRoZSBsYXRlc3QgdmVyc2lvbiBwb3NzaWJsZSBmb3IgZWFjaCB0eXBlLiBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsYXRlc3RUeXBlVmVyc2lvbk1hcDogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgLy8gQ29udGFpbnMgZmxhZ3MgdG8gZGV0ZXJtaW5lIGlmIGxhdHN0VHlwZVZlcnNpb25NYXAgZm9yIGEgc3BlY2lmaWMgdHlwZSBoYXMgYmVlbiBjYWxjdWxhdGVkXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNWZXJzaW9uTWFwQnVpbHQ6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmIChVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcEluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgVXBncmFkZXIubGF0ZXN0VHlwZVZlcnNpb25NYXBbdHlwZU5hbWVdID0gdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24gZm9yIFwiICsgdHlwZU5hbWUgKyBcIiBpcyBcIiArIHRtcEluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RJbnN0YXRpYWJsZSwgXCJUaGUgdHlwZSBcIiArIHR5cGVOYW1lICsgXCIgY2Fubm90IGJlIGluc3RhbnRpYXRlZCwgc28gaXQgaXMgaW1wb3NzaWJsZSB0byBpZGVudGlmeSB0aGUgbGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAvLyBMb29rcyBmb3IgdGhlIGxhdGVzdCB2ZXJzaW9uLCBpZiBub3QgYWxyZWFkeSBkb25lLlxyXG4gICAgICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgVXBncmFkZXIuYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gc3VwcGxpZWQgZG9lc24ndCBtYXRjaCB0aGUgbGF0ZXN0IHZlcnNpb24gaW4gdGhlIG1hcCwgdGhlIGluc3RhbmNlIG11c3QgYmUgdXBncmFkZWQuXHJcbiAgICAgICAgICAgIGlmIChVcGdyYWRlci5sYXRlc3RUeXBlVmVyc2lvbk1hcFt0eXBlTmFtZV0gIT09IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVwZ3JhZGUoaW5zdGFuY2VGcm9tOiBJUGVyc2lzdGFibGUpOiBJUGVyc2lzdGFibGUge1xyXG4gICAgICAgICAgICAvLyBJZiBvYmplY3QgZG9lc24ndCBuZWVkIHRvIHVwZ3JhZGUsIHRoZW4gd2UgYXJlIGRvbmUhXHJcbiAgICAgICAgICAgIGlmICghVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZShpbnN0YW5jZUZyb20uX190eXBlTmFtZSwgaW5zdGFuY2VGcm9tLl9fdHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VGcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFVwZ3JhZGVyLmNvbXB1dGVOZXh0VmVyc2lvbihpbnN0YW5jZUZyb20uX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIHZhciB1cGdyYWRlckluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIG5leHRWZXJzaW9uKTtcclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gdXBncmFkZXJJbnN0YW5jZS5nZXRVcGdyYWRlZEluc3RhbmNlKGluc3RhbmNlRnJvbSk7XHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWVzIHRoYXQgdmVyc2lvbiBpcyBlZmZlY3RpdmVseSB1cGdyYWRlZFxyXG4gICAgICAgICAgICBpZiAodXBncmFkZWQuX190eXBlVmVyc2lvbiAhPSBuZXh0VmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5Xcm9uZ1ZlcnNpb25JblVwZ3JhZGVkSW5zdGFuY2UsIFwiVGhlIGV4cGVjdGVkIHZlcnNpb24gb2YgdGhlIHVwZ3JhZGVkIGluc3RhbmNlIHdhcyBcIiArIG5leHRWZXJzaW9uICsgXCIgd2hpbGUgd2FzIGZvdW5kIHRvIGJlIFwiICsgdXBncmFkZXJJbnN0YW5jZS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gVXBncmFkZXIudXBncmFkZSh1cGdyYWRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOZXh0VmVyc2lvbih0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXZlcnNpb25SZS50ZXN0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0cnk6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiB7IFt0eXBlVmVyc2lvbjogc3RyaW5nXTogbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gSVBlcnNpc3RhYmxlIH0gfSA9IHt9O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxhdGVzdFZlcnNpb25zOiB7IFt0eXBlTmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGNvbW1vblR5cGVzUmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nLCB0eXBlUHJvdG90eXBlOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBJUGVyc2lzdGFibGUpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVQcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQsIFwidHlwZVByb3RvdHlwZSBzdXBwbGllZCBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBudWxsIG9yIHVuZGVmaW5lZCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMudmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gPSB0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSB8fCB7fTtcclxuICAgICAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSA9IHR5cGVQcm90b3R5cGU7XHJcblxyXG4gICAgICAgICAgICBzVGhpcy51cGRhdGVMYXRlc3RWZXJzaW9ucyh0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RlcnMgdGhlIHR5cGVzIGluIFZhbHVlT2JqZWN0cyBvbiBmaXJzdCB1c2UuLi4gXHJcbiAgICAgICAgICAgIC8vIFRPRE8gZmluZCBhIHdheSB0byBkZWxlZ2F0ZSB0eXBlIHJlZ2lzdHJhdGlvbiB0byB0aGUgT2JqZWN0cyBpbiB0aGUgY29sbGVjdGlvbiwgW3ZpYSBwc2V1ZG8gcmVmbGVjdGlvbiA/XVwiXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMuY29tbW9uVHlwZXNSZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5jb21tb25UeXBlc1JlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZShcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCIsIFwidjFcIiwgR3VpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZSA9IHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmlzVmVyc2lvbkdyZWF0ZXIodHlwZVZlcnNpb24sIHJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25HcmVhdGVyKHZTdWJqZWN0OiBzdHJpbmcsIHZSZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2UzogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlN1YmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgdlI6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZSZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdlMgPiB2UjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RWZXJzaW9uTnVtYmVyKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uOiBzdHJpbmcgPSB0eXBlVmVyc2lvbi5yZXBsYWNlKFwidlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgdmFyIGFzTnVtYmVyID0gTnVtYmVyKHZlcnNpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXNOdW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldFR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIGlmICghdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIHR5cGVWZXJzaW9uID0gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJWZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBvZiBUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9JbnN0YW50aWF0ZSA9IHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl07XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IDxUPihuZXcgKDxhbnk+dG9JbnN0YW50aWF0ZSkoKSk7XHJcbiAgICAgICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZU5hbWUgPSB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgIC8vdG9SZXR1cm4uX190eXBlVmVyc2lvbiA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIGlmIHNwZWNpZmllZCB2ZXJzaW9uIGlzIHRoZSBsYXRlc3QgZm9yIHR5cGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpID09PSB0eXBlVmVyc2lvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgbm8gdmVyc2lvbiB0eXBlIGlzIGRlZmluZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldExhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIC8vIFZlcnNpb24gbXVzdCBiZSBpbiB0aGUgZm9ybSB2TiB3aGVyZSB2IGlzIGEgY29uc3RhbnQgYW5kIE4gaXMgYW4gaW50ZWdlci5cclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy52ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFRocm93IHRoZSBjb3JyZWN0IGV4Y2VwdGlvbjtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuU3RhdGVNYWNoaW5lIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU3RhdGVNYWNoaW5lPFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGVudW0gb3Igc3RyaW5nIGxpdGVyYWwgcmVwcmVzZW50aW5nIHRoZSBwb3NzaWJsZSBzdGF0dXNlcyBvZiB0aGUgbWFjaGluZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFRTdGF0dXNlcywgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZW51bSBvciBzdHJpbmcgbGl0ZXJhbCByZXByZXNlbnRpbmcgdGhlIHBvc3NpYmxlIGV2ZW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFRFdmVudHNcclxuICAgID4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGlzRXZlbnRWYWxpZCByZXR1cm5zIGZhbHNlLCBvdGhlcndpc2UgaXQgd2lsbCBhZHZhbmNlIHRoZSBtYWNoaW5lIHRvIHRoZSBuZXh0IHN0YXR1cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm9jZXNzRXZlbnQoZXZlbnQ6IFRFdmVudHMpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGV2ZW50IGlzIHZhbGlkIGZvciB0aGUgY3VycmVudCBzdGF0dXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNFdmVudFZhbGlkRm9yQ3VycmVudFN0YXR1cyhldmVudDogVEV2ZW50cyk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtYWNoaW5lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0Q3VycmVudFN0YXR1cygpOiBUU3RhdHVzZXM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHByZXZpb3VzIHN0YXR1cyBvZiB0aGUgbWFjaGluZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFByZXZpb3VzU3RhdHVzKCk6IFRTdGF0dXNlcztcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUm9sZSBpbnRlcmZhY2UgdG8gaWRlbnRpZnkgYSBEb21haW4gRXZlbnRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRG9tYWluRXZlbnQgZXh0ZW5kcyBJUGVyc2lzdGFibGUsIElUeXBlVHJhY2tpbmcge1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcm0gb2YgYW4gRXZlbnQgSGFuZGxlci5cclxuICAgICAqIFdoZW4gYXN5bmNyb25vdXMgcHJvY2Vzc2luZyBvY2NvdXIgd2l0aGluIGFuIEhhbmRsZXIsIGl0IGlzIGdvb2QgcHJhY3RpY2UgdG8gcmV0dXJuIGEgcHJvbWlzZSwgc28gdGhlIGRpc3BhdGNoZXIgKGFuZCB0aGUgZXZlbnQgcmFpc2VyKVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElFdmVudEhhbmRsZXIge1xyXG4gICAgICAgIChkb21haW5FdmVudDogSURvbWFpbkV2ZW50KTogSVByb21pc2U8YW55PiB8IHZvaWQ7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEaXNwYXRjaGVyIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgYW4gZXZlbnQgdHlwZS5cclxuICAgICAgICAgKiB0aGUgc2NvcGUgcGFyYW1ldGVyIGlzIHRoZSBjb250ZXh0ICh0aGlzKSBpbiB3aGljaCB0aGUgaGFuZGxlciB3aWxsIGJlIGV4ZWN1dGVkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlciwgc2NvcGU/OiBhbnkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB1bnJlZ2lzdGVyIGEgcHJldmlvdWxzeSByZWdpc3RlcmVkIGhhbmRsZXIgZm9yIGFuIGV2ZW50IHR5cGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGlzcGF0Y2hlcyBhbiBldmVudCB0byB0aGUgcmVnaXN0ZXJlZCBoYW5kbGVycy5cclxuICAgICAgICAgKiBpdCB3aWxsIHJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gYWxsIHByb21pc2VzIHdpbGwgYmUgcmVzb2x2ZWQsIGFuZCByZWplY3RlZCBpZiBhbnkgd2lsbCBiZSByZWplY3RlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KTogSVByb21pc2U8YW55PjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJU3RhdGVNYWNoaW5lLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURpc3BhdGNoZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU3RhdGVNYWNoaW5lIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVBlcnNpc3RhYmxlT2JqZWN0ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuQmFzZVBlcnNpc3RhYmxlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBERERUb29scy5Qcm9taXNlcy5JUHJvbWlzZTtcclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IERERFRvb2xzLlByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBIYW5kbGVyUmVzdWx0IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyBva1RvQ2hhbmdlPzogYm9vbGVhbixcclxuICAgICAgICAgICAgcHVibGljIHJlYXNvbj86IHN0cmluZ1xyXG4gICAgICAgICkgeyB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXRlTWFjaGluZUV2ZW50PFRTdGF0dXNlcywgVEV2ZW50cz4gZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3QgaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIlN0YXRlTWFjaGluZUV2ZW50XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY3VycmVudFN0YXR1czogVFN0YXR1c2VzO1xyXG4gICAgICAgIHByZXZpb3VzU3RhdHVzOiBUU3RhdHVzZXM7XHJcbiAgICAgICAgZGVzdGluYXRpb25TdGF0dXM6IFRTdGF0dXNlcztcclxuICAgICAgICBwcm9jZXNzaW5nRXZlbnQ6IFRFdmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgRXZlbnRIYW5kbGVyPFRTdGF0dXNlcywgVEV2ZW50cz4gPSAoZXZlbnQ6IFN0YXRlTWFjaGluZUV2ZW50PFRTdGF0dXNlcywgVEV2ZW50cz4pID0+IElQcm9taXNlPEhhbmRsZXJSZXN1bHQ+O1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIEtpbmRzT2ZFdmVudEhhbmRsZXIge1xyXG4gICAgICAgIGJlZm9yZUVudGVyU3RhdHVzLFxyXG4gICAgICAgIGFmdGVyRW50ZXJTdGF0dXMsXHJcbiAgICAgICAgYmVmb3JlRXhpdFN0YXR1cyxcclxuICAgICAgICBhZnRlckV4aXRTdGF0dXMsXHJcbiAgICAgICAgb25TdWNjZXNzZnVsRXZlbnRQcm9jZXNzZWRcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSVRvdWNoYWJsZUV2ZW50SGFuZGxlciB7XHJcbiAgICAgICAgX19faGFuZGxlc0V2ZW50OiBLaW5kc09mRXZlbnRIYW5kbGVyW107XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEhhbmRsZXJDb2xsZWN0aW9uPFRTdGF0dXNlcywgVEV2ZW50cz4gZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuICAgICAgICBfX3R5cGVOYW1lID0gXCJIYW5kbGVyQ29sbGVjdGlvblwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFuZGxlcnM6IEV2ZW50SGFuZGxlcjxUU3RhdHVzZXMsIFRFdmVudHM+W10gPSBbXTtcclxuXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihoYW5kbGVyOiBFdmVudEhhbmRsZXI8VFN0YXR1c2VzLCBURXZlbnRzPiwgZXZlbnRUeXBlOiBLaW5kc09mRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNBbHJlYWR5QmVlblJlZ2lzdGVyZWQoaGFuZGxlciwgZXZlbnRUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaEhhbmRsZXIoaGFuZGxlciwgZXZlbnRUeXBlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJ1bkhhbmRsZXJzKGV2ZW50OiBTdGF0ZU1hY2hpbmVFdmVudDxUU3RhdHVzZXMsIFRFdmVudHM+KTogSVByb21pc2U8SGFuZGxlclJlc3VsdD4ge1xyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZXM6IElQcm9taXNlPGFueT5bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaGFuZGxlciBvZiB0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTogSVByb21pc2U8YW55PiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBoYW5kbGVyKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0gbmV3IEhhbmRsZXJSZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMub2tUb0NoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5yZWFzb24gPSBKU09OLnN0cmluZ2lmeShlKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZUhhbmRsZXIucmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIuYWxsKHByb21pc2VzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBuZXcgSGFuZGxlclJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB0b1JldHVybi5va1RvQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b1JldHVybi5yZWFzb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwLm9rVG9DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuLm9rVG9DaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuLnJlYXNvbiArPSBwLnJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGhhc0FscmVhZHlCZWVuUmVnaXN0ZXJlZChoYW5kbGVyOiBFdmVudEhhbmRsZXI8VFN0YXR1c2VzLCBURXZlbnRzPiwgZXZlbnRUeXBlOiBLaW5kc09mRXZlbnRIYW5kbGVyKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXNUb3VjaGFibGU6IElUb3VjaGFibGVFdmVudEhhbmRsZXIgPSA8SVRvdWNoYWJsZUV2ZW50SGFuZGxlcj4oPGFueT5oYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYXNUb3VjaGFibGUuX19faGFuZGxlc0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBhbHJlYWR5UmVnaXN0ZXJlZEZvclRoaXNFdmVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGFzVG91Y2hhYmxlLl9fX2hhbmRsZXNFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gYXNUb3VjaGFibGUuX19faGFuZGxlc0V2ZW50W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlSZWdpc3RlcmVkRm9yVGhpc0V2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFscmVhZHlSZWdpc3RlcmVkRm9yVGhpc0V2ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB0b3VjaEhhbmRsZXIoaGFuZGxlcjogRXZlbnRIYW5kbGVyPFRTdGF0dXNlcywgVEV2ZW50cz4sIGV2ZW50VHlwZTogS2luZHNPZkV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB2YXIgYXNUb3VjaGFibGU6IElUb3VjaGFibGVFdmVudEhhbmRsZXIgPSA8SVRvdWNoYWJsZUV2ZW50SGFuZGxlcj4oPGFueT5oYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYXNUb3VjaGFibGUuX19faGFuZGxlc0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnQgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNBbHJlYWR5QmVlblJlZ2lzdGVyZWQoaGFuZGxlciwgZXZlbnRUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgYXNUb3VjaGFibGUuX19faGFuZGxlc0V2ZW50LnB1c2goZXZlbnRUeXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgU3RhdGVNYWNoaW5lRGVmaW5pdGlvbjxUU3RhdHVzZXMsIFRFdmVudHM+ID0geyBbZXZlbnQ6IHN0cmluZ106IHsgW2Zyb21TdGF0dXM6IHN0cmluZ106IFRTdGF0dXNlcyB9IH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGxlYXNlLCByZW1lbWJlciB0byBzZXQgX190eXBlTmFtZSBhbmQgX190eXBlVmVyc2lvbiBpbiB5b3VyIGRlcml2ZWQgdHlwZXMgIVxyXG4gICAgICogX190eXBlTmFtZSBhbmQgX190eXBlVmVyc2lvbiBzaG91bGQgYmUgc2V0IG9uIHRoZSBjb25zdHJ1Y3RvciB0b28sIGJ1dCB0aGlzIG1lYW4gY2hhbmdpbmcgYSBsb3Qgb2YgdGhpbmdzLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgQmFzZVN0YXRlTWFjaGluZTxUU3RhdHVzZXMsIFRFdmVudHM+IGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0IGltcGxlbWVudHMgSVN0YXRlTWFjaGluZTxUU3RhdHVzZXMsIFRFdmVudHM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW50U3RhdHVzOiBUU3RhdHVzZXMgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgcHJldmlvdXNTdGF0dXM6IFRTdGF0dXNlcyA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBiZWZvcmVFbnRlclN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgcHJpdmF0ZSBhZnRlckVudGVyU3RhdHVzSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICBwcml2YXRlIGJlZm9yZUV4aXRTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgIHByaXZhdGUgYWZ0ZXJFeGl0U3RhdHVzSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICBwcml2YXRlIG9uU3VjY2Vzc2Z1bEV2ZW50UHJvY2Vzc2VkSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbFN0YXR1czogVFN0YXR1c2VzLFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbj86IFN0YXRlTWFjaGluZURlZmluaXRpb248VFN0YXR1c2VzLCBURXZlbnRzPlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZU1hY2hpbmVEZWZpbml0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc21kID0gU3RhdGVNYWNoaW5lRGVmaW5pdGlvblJlZ2lzdHJ5LmdldFN0YXRlTWFjaGluZSh0aGlzLl9fdHlwZU5hbWUsIHRoaXMuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc21kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU1hY2hpbmVEZWZpbml0aW9uID0gc21kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0dXMgPSBpbml0aWFsU3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgLy8gVE9ETzogVGhlIGNvbXBvbmVudHMgcmVnaXN0cmF0aW9uIHNob3VsZCBiZSBrZXB0IHNvbWV3aGVyZSBlbHNlLi4uIG9yIG1ha2UgdGhlIGNvbXBvbmVudCdzIHR5cGUgcmVnaXN0cmF0aW9uIGluIHRoZSBjb25zdHJ1Y3RvciBiZWNvbWUgYSBydWxlLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgRmFjdG9yeS5yZWdpc3RlclR5cGUoXCJIYW5kbGVyQ29sbGVjdGlvblwiLCBcInYxXCIsIEhhbmRsZXJDb2xsZWN0aW9uKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgdHlwZSBoYXMgYWxyZWFkeSByZWdpc3RlcmVkLCBzbyBub3RoaW5nIHRvIGRvLlxyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE92ZXJyaWRlcyB0aGUgUGVyc2lzdGFibGVPYmplY3QncyBzZXRTdGF0ZSB0byBhdm9pZCByZXN0b3JpbmcgYSBjb2xsZWN0aW9uIG9mIFwiZmFrZSBoYW5kbGVyc1wiJ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnNldFN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFsbG93cyB0byB1c2UgdGhlIHN0YXRlIG1hY2hpbmVzIGRlZmluaXRpb24gcHV0IG9uIHRoZSByZWdpc3RyeS5cclxuICAgICAgICAgICAgLy8gRG9pbmcgdGhpcyB3YXkgaXQgaXMgcG9zc2libGUgdG8gY2hhbmdlIGEgc3RhdGUgbWFjaGluZSB3aXRob3V0IGhhdmluZyB0byBcclxuICAgICAgICAgICAgLy8gU2V0dXAgYW4gdXBncmFkZSBwcm9jZXNzLiBUXHJcbiAgICAgICAgICAgIC8vIEF0IHRoaXMgbW9tZW50IHRoZSByZWdpc3RyeWRlZmluaXRpb24gaXMgb3B0aW9uYWwsIHNvIHRoaXMgdmVyc2lvbiBvZiB0aGUgXHJcbiAgICAgICAgICAgIC8vIHN0YXRlIG1hY2hpbmUgaXMgZnVsbHkgY29tcGF0aWJsZSB3aXRoIHRoZSBwcmV2aW91cyB2ZXJzaW9uLlxyXG4gICAgICAgICAgICB2YXIgc21kID0gU3RhdGVNYWNoaW5lRGVmaW5pdGlvblJlZ2lzdHJ5LmdldFN0YXRlTWFjaGluZSh0aGlzLl9fdHlwZU5hbWUsIHRoaXMuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmIChzbWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVNYWNoaW5lRGVmaW5pdGlvbiA9IHNtZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byByZWluaXRpYWxpemUgdGhlIGhhbmRsZXJzIGNvbGxlY3Rpb24uIGFzIGlmIHRoZXkgd2VyZSBcclxuICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3NmdWxFdmVudFByb2Nlc3NlZEhhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlRW50ZXJTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyRW50ZXJTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUV4aXRTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyRXhpdFN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUU3RhdHVzZXMsIFRFdmVudHM+LCBraW5kT2ZIYW5kbGVyOiBLaW5kc09mRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2luZE9mSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRW50ZXJTdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyRW50ZXJTdGF0dXNIYW5kbGVycy5yZWdpc3RlckhhbmRsZXIoaGFuZGxlciwga2luZE9mSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRW50ZXJTdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZUVudGVyU3RhdHVzSGFuZGxlcnMucmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXIsIGtpbmRPZkhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRXhpdFN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJFeGl0U3RhdHVzSGFuZGxlcnMucmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXIsIGtpbmRPZkhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBLaW5kc09mRXZlbnRIYW5kbGVyLmJlZm9yZUV4aXRTdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZUV4aXRTdGF0dXNIYW5kbGVycy5yZWdpc3RlckhhbmRsZXIoaGFuZGxlciwga2luZE9mSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgU3RhdGUgTWFjaGluZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRDdXJyZW50U3RhdHVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdHVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgcHJldmlvdXMgc3RhdHVzIG9mIHRoZSBNYWNoaW5lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFByZXZpb3VzU3RhdHVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91c1N0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlbGxzIGlmIGFuIGV2ZW50IGlzIGFsbG93ZWQgdG8gYmUgcHJvY2Vzc2VkIGluIHRoZSBjdXJyZW50IHN0YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXZlbnRWYWxpZEZvckN1cnJlbnRTdGF0dXMoZXZlbnQ6IFRFdmVudHMpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlTWFjaGluZURlZmluaXRpb25bPGFueT5ldmVudF1bPGFueT50aGlzLmN1cnJlbnRTdGF0dXNdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaWxsIGNhdXNlIHRoZSBzdGF0ZSBtYWNoaW5lIHRvIGFkdmFuY2UgdG8gdGhlIG5leHQgc3RhdHVzLi4uIG9yIHRocm93IGFuIGV4Y2VwdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJvY2Vzc0V2ZW50KGV2ZW50OiBURXZlbnRzKTogSVByb21pc2U8SGFuZGxlclJlc3VsdD4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNFdmVudFZhbGlkRm9yQ3VycmVudFN0YXR1cyhldmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgSGFuZGxlclJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5va1RvQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucmVhc29uID0gXCJFdmVudCAnXCIgKyBldmVudCArIFwiJyBub3QgdmFsaWQgaW4gc3RhdHVzIFwiICsgdGhpcy5jdXJyZW50U3RhdHVzICsgXCIuIElmIHRoaXMgaXMgbm90IGV4cGVjdGVkLCBwbGVhc2UsIGNoZWNrIHRoZSBzdGF0ZSBtYWNoaW5lIGRlZmluaXRpb246IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZU1hY2hpbmVEZWZpbml0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4ocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG5leHRTdGF0dXMgPSB0aGlzLnN0YXRlTWFjaGluZURlZmluaXRpb25bPGFueT5ldmVudF1bPGFueT50aGlzLmN1cnJlbnRTdGF0dXNdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNtRXZlbnQgPSBuZXcgU3RhdGVNYWNoaW5lRXZlbnQ8VFN0YXR1c2VzLCBURXZlbnRzPigpO1xyXG5cclxuICAgICAgICAgICAgc21FdmVudC5jdXJyZW50U3RhdHVzID0gdGhpcy5jdXJyZW50U3RhdHVzO1xyXG4gICAgICAgICAgICBzbUV2ZW50LmRlc3RpbmF0aW9uU3RhdHVzID0gbmV4dFN0YXR1cztcclxuICAgICAgICAgICAgc21FdmVudC5wcmV2aW91c1N0YXR1cyA9IHRoaXMucHJldmlvdXNTdGF0dXM7XHJcbiAgICAgICAgICAgIHNtRXZlbnQucHJvY2Vzc2luZ0V2ZW50ID0gZXZlbnQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVFeGl0U3RhdHVzSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5va1RvQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBuZXcgSGFuZGxlclJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLm9rVG9DaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnJlYXNvbiA9IFwiU3RhdGUgQ2hhbmdlIGludGVycnVwdGVkIGJ5IGJlZm9yZUV4aXRTdGF0dXNIYW5kbGVyKHMpIHdpdGggcmVhc29uOiBcIiArIHJlc3VsdC5yZWFzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLnJlamVjdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVFbnRlclN0YXR1c0hhbmRsZXJzLnJ1bkhhbmRsZXJzKHNtRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5va1RvQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBuZXcgSGFuZGxlclJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLm9rVG9DaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnJlYXNvbiA9IFwiU3RhdGUgQ2hhbmdlIGludGVycnVwdGVkIGJ5IGJlZm9yZUVudGVyU3RhdHVzSGFuZGxlcihzKSB3aXRoIHJlYXNvbjogXCIgKyByZXN1bHQucmVhc29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci5yZWplY3QocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0dXMgPSB0aGlzLmN1cnJlbnRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdHVzID0gbmV4dFN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWZ0ZXJFeGl0U3RhdHVzSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZnRlckVudGVyU3RhdHVzSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblN1Y2Nlc3NmdWxFdmVudFByb2Nlc3NlZEhhbmRsZXJzLnJ1bkhhbmRsZXJzKHNtRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbjogSGFuZGxlclJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgSGFuZGxlciBkZWNpZGVkIG5vdCB0byBhbGxvdyB0aGUgc3RhdGUgY2hhbmdlLCBzbyB3ZSBzaW1wbHkgcmV0dXJuIHdoeSFcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJCYXNlU3RhdGVNYWNoaW5lLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TdGF0ZU1hY2hpbmUge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnk6IHsgW3R5cGVBbmRWZXJzaW9uOiBzdHJpbmddOiBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uPGFueSwgYW55PiB9ID0ge307XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkVHlwZUFuZFZlcnNpb25TdHJpbmcodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZU5hbWUgKyBcIi1cIiArIHR5cGVWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWdpc3RlclN0YXRlTWFjaGluZTxUU3RhdHVzZXMsIFRFdmVudHM+KFxyXG4gICAgICAgICAgICBzdGF0ZU1hY2hpbmVUeXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHN0YXRlTWFjaGluZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbjogU3RhdGVNYWNoaW5lRGVmaW5pdGlvbjxUU3RhdHVzZXMsIFRFdmVudHM+XHJcbiAgICAgICAgKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlTmFtZUFuZFZlcnNpb24gPSBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkuYnVpbGRUeXBlQW5kVmVyc2lvblN0cmluZyhzdGF0ZU1hY2hpbmVUeXBlLCBzdGF0ZU1hY2hpbmVWZXJzaW9uKTtcclxuICAgICAgICAgICAgU3RhdGVNYWNoaW5lRGVmaW5pdGlvblJlZ2lzdHJ5LnN0YXRlTWFjaGluZURlZmluaXRpb25SZWdpc3RyeVt0eXBlTmFtZUFuZFZlcnNpb25dID0gc3RhdGVNYWNoaW5lRGVmaW5pdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3RhdGVNYWNoaW5lPFRTdGF0dXNlcywgVEV2ZW50cz4oc3RhdGVNYWNoaW5lVHlwZTogc3RyaW5nLCBzdGF0ZU1hY2hpbmVWZXJzaW9uOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGVOYW1lQW5kVmVyc2lvbiA9IFN0YXRlTWFjaGluZURlZmluaXRpb25SZWdpc3RyeS5idWlsZFR5cGVBbmRWZXJzaW9uU3RyaW5nKHN0YXRlTWFjaGluZVR5cGUsIHN0YXRlTWFjaGluZVZlcnNpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gU3RhdGVNYWNoaW5lRGVmaW5pdGlvblJlZ2lzdHJ5LnN0YXRlTWFjaGluZURlZmluaXRpb25SZWdpc3RyeVt0eXBlTmFtZUFuZFZlcnNpb25dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLyoqXHJcbiAqIENvbGxlY3Rpb24gb2YgZ2VuZXJhbCBhbmQgY29tbW9ubHkgdXNlZCBWYWx1ZU9iamVjdHMuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0cyB7XHJcblxyXG4gICAgaW1wb3J0IElWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LklWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHNpbXBsZSB2YWx1ZSBvYmplY3QgdG8gbWFuYWdlIG1vbmV5LlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgTW9uZXkgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8TW9uZXk+IGltcGxlbWVudHMgSVZhbHVlT2JqZWN0PE1vbmV5PiB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVOYW1lID0gXCJERERUb29scy5WYWx1ZU9iamVjdHMuTW9uZXlcIjtcclxuICAgICAgICBwdWJsaWMgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIGFtb3VudEV1cm86IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIGV4Y2hhbmdlOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBjdXJyZW5jeTogQ3VycmVuY3k7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGFtb3VudCAgICBhbW91bnQgaW4gdGhlIGN1cnJlbmN5IHNwZWNpZmllZCBieSBjdXJyZW5jeVxyXG4gICAgICAgICAqIEBwYXJhbSBjdXJyZW5jeSAgY3VycmVuY3kgb2YgdGhlIGFtb3VudCBzcGVjaWZpZWQgKGlmIG5vdCBzdXBwbGllZCB3aWxsIGJlIEN1cnJlbmNpZXMuRVVSTylcclxuICAgICAgICAgKiBAcGFyYW0gZXhjaGFuZ2UgIG11bHRpcGxpZXIgZXhjaGFuZ2UgdG8gYXBwbHkuIFRoaXMgaXMgYWx3YXlzIHRoZSDigqwvY3VycmVuY3kgYW1vdW50ID09PiAxICoge2N1cnJlbmN5fSA9IHtleGNoYW5nZX0gKiDigqwgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIGFtb3VudD86IG51bWJlciB8IE1vbmV5LFxyXG4gICAgICAgICAgICBjdXJyZW5jeT86IEN1cnJlbmN5LFxyXG4gICAgICAgICAgICBleGNoYW5nZT86IG51bWJlclxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFtb3VudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBFeGNoYW5nZSBpcyAxXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlID0gZXhjaGFuZ2UgfHwgMS4wMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeSB8fCBuZXcgQ3VycmVuY3koXCJFVVJcIiwgXCLigqxcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbW91bnRFdXJvID0gdGhpcy5hbW91bnQgKiBleGNoYW5nZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFtb3VudCBpbnN0YW5jZW9mIE1vbmV5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbmN5ID0gYW1vdW50LmN1cnJlbmN5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZSA9IGFtb3VudC5leGNoYW5nZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW1vdW50RXVybyA9IGFtb3VudC5hbW91bnRFdXJvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY29weSgpOiBNb25leSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9uZXkodGhpcy5hbW91bnQsIHRoaXMuY3VycmVuY3ksIHRoaXMuZXhjaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEFtb3VudCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEFtb3VudEV1cm8oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFtb3VudEV1cm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0Q3VycmVuY3koKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbmN5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5nZUFtb3VudChuZXdBbW91bnQ6IG51bWJlcik6IE1vbmV5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leShuZXdBbW91bnQsIHRoaXMuY3VycmVuY3ksIHRoaXMuZXhjaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5nZUV4Y2hhbmdlKG5ld0V4Y2hhbmdlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leSh0aGlzLmFtb3VudCwgdGhpcy5jdXJyZW5jeSwgbmV3RXhjaGFuZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5nZUN1cnJlbmN5KG5ld0N1cnJlbmN5OiBDdXJyZW5jeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbmV5KHRoaXMuYW1vdW50LCBuZXdDdXJyZW5jeSwgdGhpcy5leGNoYW5nZSk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHBsdXModG9BZGQ6IE1vbmV5KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdBbW91bnRFdXJvID0gdGhpcy5nZXRBbW91bnRFdXJvKCkgKyB0b0FkZC5nZXRBbW91bnRFdXJvKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9uZXkobmV3QW1vdW50RXVybykuY2hhbmdlRXhjaGFuZ2UodGhpcy5leGNoYW5nZSkuY2hhbmdlQ3VycmVuY3kodGhpcy5jdXJyZW5jeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWludXModG9TdWJzdHJhY3Q6IE1vbmV5KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdBbW91bnRFdXJvID0gdGhpcy5nZXRBbW91bnRFdXJvKCkgLSB0b1N1YnN0cmFjdC5nZXRBbW91bnRFdXJvKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9uZXkobmV3QW1vdW50RXVybykuY2hhbmdlRXhjaGFuZ2UodGhpcy5leGNoYW5nZSkuY2hhbmdlQ3VycmVuY3kodGhpcy5jdXJyZW5jeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbXVsdGlwbHlCeShtdWx0aXBsaWVyOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudCA9IHRoaXMuZ2V0QW1vdW50KCkgKiBtdWx0aXBsaWVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VBbW91bnQobmV3QW1vdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkaXZpZGVCeShkaXZpc29yOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudCA9IHRoaXMuZ2V0QW1vdW50KCkgLyBkaXZpc29yO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VBbW91bnQobmV3QW1vdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBwZXJjZW50MF8xMDAgUGVyY2VudCB0byBhcHBseSBpbiAxMDB0aCAoIDEgbWVhbnMgMSUgKS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBleGFtcGxlIHZhciBjdXJyZW50QW1vdW50ID0gbmV3IE1vbmV5KCAxMDAwLjAgKVxyXG4gICAgICAgICAqICAgICAgICAgIHZhciB3aXRoUGVyY2VudEFwcGxpZWQgPSBjdXJyZW50QW1vdW50LmluY3JlbWVudEJ5UGVyY2VudCggNTAlICk7IHsgPT0+IDE1MDAgfSAgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluY3JlbWVudEJ5UGVyY2VudChwZXJjZW50MF8xMDA6IG51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgbmV3QW1vdW50ID0gdGhpcy5nZXRBbW91bnQoKSAqICggMSArIHBlcmNlbnQwXzEwMC8gMTAwLjAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHBlcmNlbnQwXzEwMCBQZXJjZW50IHRvIGFwcGx5IGluIDEwMHRoICggMSBtZWFucyAxJSApLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGV4YW1wbGUgdmFyIGN1cnJlbnRBbW91bnQgPSBuZXcgTW9uZXkoIDEwMDAuMCApXHJcbiAgICAgICAgICogICAgICAgICAgdmFyIHdpdGhQZXJjZW50QXBwbGllZCA9IGN1cnJlbnRBbW91bnQuZGVjcmVtZW50UGVyY2VudCggNTAlICk7IHsgPT0+IDUwMCB9ICBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGVjcmVtZW50QnlQZXJjZW50KHBlcmNlbnQwXzEwMDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdBbW91bnQgPSB0aGlzLmdldEFtb3VudCgpICogKDEgLSBwZXJjZW50MF8xMDAgLyAxMDAuMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0OTA1NS9ob3ctY2FuLWktZm9ybWF0LW51bWJlcnMtYXMtbW9uZXktaW4tamF2YXNjcmlwdFxyXG4gICAgICAgIHByaXZhdGUgZm9ybWF0TnVtYmVyKFxyXG4gICAgICAgICAgICBkZWNpbWFsczogbnVtYmVyID0gMixcclxuICAgICAgICAgICAgdGhvdXNhbmRzU2VwYXJhdG9yOiBzdHJpbmcgPSBcIi5cIixcclxuICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID0gXCIsXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGhPZldob2xlUGFydCA9IDM7XHJcbiAgICAgICAgICAgIHZhciByZSA9ICdcXFxcZCg/PShcXFxcZHsnICsgKGxlbmd0aE9mV2hvbGVQYXJ0IHx8IDMpICsgJ30pKycgKyAoZGVjaW1hbHMgPiAwID8gJ1xcXFxEJyA6ICckJykgKyAnKScsXHJcbiAgICAgICAgICAgICAgICBudW0gPSB0aGlzLmFtb3VudC50b0ZpeGVkKE1hdGgubWF4KDAsIH5+ZGVjaW1hbHMpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoZGVjaW1hbFNlcGFyYXRvciA/IG51bS5yZXBsYWNlKCcuJywgZGVjaW1hbFNlcGFyYXRvcikgOiBudW0pLnJlcGxhY2UobmV3IFJlZ0V4cChyZSwgJ2cnKSwgJyQmJyArICh0aG91c2FuZHNTZXBhcmF0b3IgfHwgJywnKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIHRvU3RyaW5nKFxyXG4gICAgICAgICAgICBkZWNpbWFsczogbnVtYmVyID0gMixcclxuICAgICAgICAgICAgdGhvdXNhbmRzU2VwYXJhdG9yOiBzdHJpbmcgPSBcIi5cIixcclxuICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID0gXCIsXCIsXHJcbiAgICAgICAgICAgIHNob3dDdXJyZW5jeTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICAgICAgKSA6IHN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChzaG93Q3VycmVuY3kgPyB0aGlzLmN1cnJlbmN5LnN5bWJvbCArIFwiIFwiIDogXCJcIiApICsgdGhpcy5mb3JtYXROdW1iZXIoZGVjaW1hbHMsIHRob3VzYW5kc1NlcGFyYXRvciwgZGVjaW1hbFNlcGFyYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBzeW1ib2w6IHN0cmluZykgeyB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEN1cnJlbmNpZXMge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRVVSTyA9IG5ldyBDdXJyZW5jeShcIkVVUlwiLCBcIuKCrFwiKTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIERPTExBUiA9IG5ldyBDdXJyZW5jeShcIlVTRFwiLCBcIiRcIik7XHJcbiAgICAgICAgLyogQWRkIGhlcmUgd2hhdGV2ZXIgbmV3IGV4Y2hhbmdlIHlvdSBtYXkgbmVlZCAqL1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRXF1YXRhYmxlfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlXCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuXHRpbXBvcnQgSUVxdWF0YWJsZSA9IENvbW1vbkludGVyZmFjZXMuSUVxdWF0YWJsZTtcclxuXHRpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIElFbnRpdHk8VCwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4gZXh0ZW5kcyBJRXF1YXRhYmxlPFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cdFx0Z2V0S2V5KCk6IFRLZXk7XHJcblx0XHRzZXRLZXkoa2V5OiBUS2V5KTogdm9pZDtcclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUtleVZhbHVlT2JqZWN0PFQ+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VD5cclxuICAgICAgICBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXJpdmVkIGNsYXNzZXMgbXVzdCByZWltcGxlbWVudCB0aGlzIG1ldGhvZC4gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lEaXNwYXRjaGVyfSBmcm9tIFwiLi9JRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIERvbWFpbkRpc3BhdGNoZXIge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbjogSURpc3BhdGNoZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2V0RGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKGRpc3BhdGNoZXI6IElEaXNwYXRjaGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbiA9IGRpc3BhdGNoZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIsIHNjb3BlPzogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbi5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgaGFuZGxlciwgc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24udW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEb21haW5EaXNwYXRjaGVyO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGEgZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uIGlzIG5vdCBzZXQsIHdlIHNob3VsZCByZXR1cm4gYSBmYWtlIHByb21pc2UsIHRvIGFsbG93IGNsaWVudHMgdG8gYWx3YXlzIHdyaXRlIHRoZWlyIGhhbmRsZXJzIVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4vSUVudGl0eVwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIENsYXNzZXMgYW5kIGludGVyZmFjZXMgdG8gaW1wbGVtZW50IGFuIEVudGl0eSwgYSBwZXJzaXN0YWJsZSBvYmplY3QuIFxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5cdGltcG9ydCBCYXNlUGVyc2lzdGFibGVPYmplY3QgPSBQZXJzaXN0YWJsZU9iamVjdC5CYXNlUGVyc2lzdGFibGVPYmplY3Q7XHJcblx0aW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcblx0aW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFbnRpdHk8VCBleHRlbmRzIElFbnRpdHk8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcblx0XHRleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdFxyXG5cdFx0aW1wbGVtZW50cyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcblx0XHRwcml2YXRlIGtleTogVEtleTtcclxuXHJcblx0XHRwcm90ZWN0ZWQgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcblx0XHRcdERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5rZXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBzZXRLZXkoa2V5OiBUS2V5KTogdm9pZCB7XHJcblx0XHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0fTtcclxuXHJcblx0XHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdFx0aWYgKCFpdGVtKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBpdGVtLmdldEtleSgpLmVxdWFscyh0aGlzLmdldEtleSgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUVudGl0eS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0lFbnRpdHlcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5BZ2dyZWdhdGUge1xyXG5cclxuICAgICAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgICAgICBpbXBvcnQgSUVudGl0eSA9IEVudGl0eS5JRW50aXR5O1xyXG5cclxuICAgICAgICBleHBvcnQgaW50ZXJmYWNlIElBZ2dyZWdhdGVSb290PFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICAgICAgICAgIGV4dGVuZHMgSUVudGl0eTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXJcclxuICAgICAgICAgICAgICAgIGluY3JlbWVudFJldmlzaW9uSWQoKTogdm9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBwZXJmZWN0bHlNYXRjaChhbm90aGVyOiBJQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW47XHJcbiAgICAgICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0Jhc2VFbnRpdHkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9CYXNlRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUVudGl0eX0gZnJvbSBcIi4uL0VudGl0eS9JRW50aXR5XCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyB0aGUgQWdncmVnYXRlIFBhdHRlcm4gYnkgZGVmaW5pbmcgaW50ZXJmYWNlcyBhbmQgYmFzZSBiZWhhdmlvciBmb3IgYW4gQWdncmVnYXRlUm9vdC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5BZ2dyZWdhdGUge1xyXG5cclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VFbnRpdHkgPSBFbnRpdHkuQmFzZUVudGl0eTtcclxuICAgIGltcG9ydCBJRW50aXR5ID0gRW50aXR5LklFbnRpdHk7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgYmVoYXZpb3Igb2YgYW4gQWdncmVnYXRlUm9vdCwgd2hpY2ggaXMgYmFzaWNhbGx5IGFuIGVudGl0eS4uLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUFnZ3JlZ2F0ZVJvb3Q8XHJcbiAgICAgICAgVCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgICAgICA+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlRW50aXR5PFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgSUVudGl0eTxULCBUS2V5PlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgX19yZXZpc2lvbklkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JldmlzaW9uSWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW5jcmVtZW50UmV2aXNpb25JZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX3JldmlzaW9uSWQrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBhcmVzIGFuIGFnZ3JlZ2F0ZSB3aXRoIGFub3RoZXIuIFJldHVybnMgdHJ1ZSBpZiBhZ2dyZWdhdGUncyBkYXRhIGFyZSBleGFjdGx5IGVxdWFsLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwZXJmZWN0bHlNYXRjaChvdGhlcjogQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghb3RoZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNPbmUgPSB0aGlzLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHZhciB0aGVPdGhlciA9IG90aGVyLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkbyB0aGUgY29tcGFyaXNvbiBqdXN0IGxpa2UgdmFsdWUgb2JqZWN0cy4uLiBuYWl2ZSBidXQgZnVuY3Rpb25hbCBhdCB0aGlzIHRpbWUuXHJcbiAgICAgICAgICAgIHZhciBjb21wYXJpc29uID0gXy5pc0VxdWFsKHRoaXNPbmUsIHRoZU90aGVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgUmVwb3NpdG9yeSB0byBwZXJzaXN0IEFnZ3JlZ2F0ZXMuIENvbnRhaW5zIGEgcmVmZXJlbmNlIGluIG1lbW9yeSByZXBvc2l0b3J5LlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVJlcG9zaXRvcnk8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgcmVwb3NpdG9yeSBnaXZlbiBpdHMgaWQuIEl0IGdpdmVzIGJhY2sgYSBmdWxseSByY29uc3RpdHV0ZWQgQWdncmVnYXRlIFJvb3QsIHNvIHRoYXQgIHdpbGwgYmUgcG9zc2libGUgdG8gY2FsbCBhbnkgcHVibGljIG1ldGhvZC5cclxuICAgICAgICAgKiBmaXJlcyBJdGVtUmV0cmlldmVkIGV2ZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IFQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlcGxhY2VzIGFuIGl0ZW0uIEp1c3QgbGlrZSBzYXZlLCBidXQgaXQgZG9lc24ndCBpbmNyZW1lbnQgdGhlIHJldmlzaW9uSWQgYW5kIGtlZXAgdGhlIG9uZSBzdG9yZWQgaW4gdGhlIEFnZ3JlZ2F0ZVJvb3RcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpOiB2b2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlbGV0ZXMgYW4gaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2F2ZUFjdGlvbiB3aWxsIGJlIHBhc3NlZCB0byByZXBvc2l0b3JpZXMnIHNhdmVJbXBsZW1lbnRhdGlvbiBzbyB0aGF0IGNsaWVudCBjYW4gdGFrZSBkZWNpc2lvbnMgb24gd2hhdCB0byBkbyB3aGVuIGFkZGluZyBvciByZXBsYWNpbmcgYW4gaXRlbSBpZiBuZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBlbnVtIFNhdmVBY3Rpb25FbnVtIHtcclxuICAgICAgICBBZGQsXHJcbiAgICAgICAgVXBkYXRlXHJcbiAgICB9O1xyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgcmVwb3NpdG9yeSBnaXZlbiBpdHMgaWQuIEl0IGdpdmVzIGJhY2sgYSBmdWxseSByY29uc3RpdHV0ZWQgQWdncmVnYXRlIFJvb3QsIHNvIHRoYXQgIHdpbGwgYmUgcG9zc2libGUgdG8gY2FsbCBhbnkgcHVibGljIG1ldGhvZC5cclxuICAgICAgICAgKiBmaXJlcyBJdGVtUmV0cmlldmVkIGV2ZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IElQcm9taXNlPFQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVwbGFjZXMgYW4gaXRlbS4gSnVzdCBsaWtlIHNhdmUsIGJ1dCBpdCBkb2Vzbid0IGluY3JlbWVudCB0aGUgcmV2aXNpb25JZCBhbmQga2VlcCB0aGUgb25lIHN0b3JlZCBpbiB0aGUgQWdncmVnYXRlUm9vdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlcGxhY2UoaXRlbTogVCk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVsZXRlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG4gXHJcbiAgICBpbXBvcnQgQmFzZUVycm9ycyA9IEVycm9yTWFuYWdlbWVudC5CYXNlRXJyb3JzO1xyXG4gXHJcbiAgICBleHBvcnQgY2xhc3MgRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBLZXlOb3RTZXQgPSBcIktleSBub3Qgc2V0XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtTm90Rm91bmQgPSBcIkl0ZW0gTm90IEZvdW5kXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFcnJvclNhdmluZ0l0ZW0gPSBcIkVycm9yIFNhdmluZyBJdGVtXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFcnJvclJlYWRpbmdJdGVtID0gXCJFcnJvciBSZWFkaW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yRGVsZXRpbmdJdGVtID0gXCJFcnJvciBEZWxldGluZyBJdGVtXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBXcm9uZ1R5cGVGcm9tSW1wbGVtZW50YXRpb24gPSBcIldyb25nIHR5cGUgZnJvbSBJbXBsZW1lbnRhdGlvblwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTWFuYWdlZFR5cGVOb3RTdXBwbGllZCA9IFwiUmVwb3NpdG9yeSBuZWVkcyB0byBrbm93IHdoYXQgdHlwZSBpdCBjYW4gbWFuYWdlXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJbnZhbGlkS2V5ID0gXCJJbnZhbGlkIEtleVwiO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0YXRpYyBjb250YWluZXIgb2YgZXZlbnQgXCJfX3R5cGVOYW1lXCJzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9fbmFtZVNwYWNlID0gXCJERERUb29scy5SZXBvc2l0b3J5XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtQWRkZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1BZGRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtVXBkYXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbURlbGV0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1EZWxldGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1SZXBsYWNlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVJlcGxhY2VkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1SZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1SZXRyaWV2ZWRFdmVudFwiO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8VEV2ZW50LFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PFRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZSBhZ2dyZWdhdGUgaW5zdGFuY2UgYWZ0ZXIgdGhlIGFjdGlvbiBoYXMgYmVlbiBwZXJmb3JtZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwdWJsaWMgaXRlbTogVEFnZ3JlZ2F0ZSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFRoZSBJZCBvZiB0aGUgcmVwb3NpdG9yeSBwZXJmb3JtaW5nIHRoZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyByZXBvc2l0b3J5SWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtQWRkZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbUFkZGVkRXZlbnQ8VEFnZ3JlZ2F0ZT4sIFRBZ2dyZWdhdGU+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1BZGRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbURlbGV0ZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbURlbGV0ZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbURlbGV0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1SZXRyaWV2ZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbVJldHJpZXZlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtUmV0cmlldmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbVVwZGF0ZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbVVwZGF0ZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVVwZGF0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtUmVwbGFjZWRFdmVudDxUQWdncmVnYXRlPiBleHRlbmRzIEJhc2VSZXBvc2l0b3J5RXZlbnQ8SXRlbVJlcGxhY2VkRXZlbnQ8VEFnZ3JlZ2F0ZT4sIFRBZ2dyZWdhdGU+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1SZXBsYWNlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TYXZlQWN0aW9uRW51bS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtUmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtQWRkZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1VcGRhdGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtRGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuL0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vLyBpbXBvcnQge0l0ZW1SZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbUFkZGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1BZGRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbVVwZGF0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0l0ZW1EZWxldGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1EZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBQZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYXB0dXJlcyBjb21tb24gYmVoYXZpb3Igb2YgcmVwb3NpdG9yeSwgdXNpbmcgdGhlVGVtcGxhdGUgTWV0aG9kIFBhdHRlcm4uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVwb3NpdG9yeTxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIHN0cmluZyB0byBkaW5ldGlmeSB0aGUgcmVwb3NpdG9yeS4gVXNlZnVsIGluIHNjZW5hcmlvcyB3aGVyZSB0aGUgc2FtZSBBZ2dyZWdhdGVSb290IG1pZ2h0IGJlIHNhdmVkIGluIGRpZmZlcmVudCBsb2NhdGlvbnMuIFxyXG4gICAgICAgICAgICAgKiBFdmVudHMgbXVzdCBkaXNjZXJuIHdoYXQgbG9jYXRpb24gdGhlIGl0ZW0gd2FzIHNhdmVkL3JldHJpZXZlZC9kZWxldGUgdG8vZnJvbS9mcm9tLiBJdCBkZWZhdWx0cyB0byB0aGUgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnlJZD86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuTWFuYWdlZFR5cGVOb3RTdXBwbGllZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcmVwb3NpdG9yeUlkKSB0aGlzLnJlcG9zaXRvcnlJZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRvIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYW4gXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgdGhyb3cgXCJJdGVtTm90Rm91bmRcIiBpZiBubyBlbGVtZW50IG1hdGNoaW5nIHRoZSBpZCB3YXMgZm91bmQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBUIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXRyaWV2ZWQgPSB0aGlzLmdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0cmlldmVkLl9fdHlwZU5hbWUgIT09IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmUgXCIgKyByZXRyaWV2ZWQuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHJldHJpZXZlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1SZXRyaWV2ZWRFdmVudDxUPih0b1JldHVybiwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCwgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcInNhdmVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uIFRoZSB0ZW1wbGF0ZSBtZXRob2QgXCJzYXZlXCIgd2lsbCBtYW5hZ2UgdGhlIHJldmlzaW9uSWQgbG9naWMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBULCBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXb3JrcyBqdXN0IGxpa2Ugc2F2ZSwgYnV0IGl0IG5ldmVyIGluY3JlbWVudHMgUmV2aXNpb25JZCwgaXQgdHJ1c3RzIHRoZSBvbmUgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBhZ2dyZWdhdGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2F2ZU9yUmVwbGFjZShpdGVtOiBULCByZXBsYWNlT25seTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudDogSXRlbVVwZGF0ZWRFdmVudDxUPiB8IEl0ZW1BZGRlZEV2ZW50PFQ+O1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBzaG91bGRJbmNyZW1lbnRSZXZpc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bTtcclxuXHJcbiAgICAgICAgICAgIHNhdmVBY3Rpb24gPSBTYXZlQWN0aW9uRW51bS5VcGRhdGU7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXNJdFdhcyA9IHRoaXMuZ2V0QnlJZChpdGVtLmdldEtleSgpKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlY3RlZCBpZiB0aGUgZG8gbm90IGV4aXN0cyBpbiB0aGUgUmVwby5cclxuICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IEl0ZW1BZGRlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgIHNhdmVBY3Rpb24gPSBTYXZlQWN0aW9uRW51bS5BZGQ7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRJbmNyZW1lbnRSZXZpc2lvbiA9IGZhbHNlOyAvLyBiZWNhdXNlIHRoZSBpdGVtIHdhcyBub3QgaW4gdGhlIHJlcG8hXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFNhdmUgb2NjdXIgb25seSBpZiBzdG9yZWQgaXRlbSBhbmQgc2F2ZWQgaXRlbSBhcmUgZGlmZmVyZW50IHNvbWVob3cuXHJcbiAgICAgICAgICAgIGlmICghaXRlbS5wZXJmZWN0bHlNYXRjaChhc0l0V2FzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXBsYWNlT25seSAmJiBzaG91bGRJbmNyZW1lbnRSZXZpc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1SZXBsYWNlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZpbmFsbHkgc2F2ZXMgYWdncmVnYXRlIGludG8gdGhlIHJlcG9zaXRvcnkuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVJbXBsZW1lbnRhdGlvbihpdGVtLCBzYXZlQWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkO1xyXG5cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGFzSXRXYXM6IFQgPSBudWxsO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXNJdFdhcyA9IHRoaXMuZ2V0QnlJZChpZCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGl0ZW0gbm90IGZvdW5kLCBzbyBub3RoaW5nIHRvIGRlbGV0ZSFcclxuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IgJiYgZS5uYW1lID09PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbURlbGV0ZWRFdmVudChhc0l0V2FzLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUltcGxlbWVudGF0aW9uKGlkKTtcclxuXHJcbiAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUHJvbWlzZXMvUHJvbWlzZUhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2F2ZUFjdGlvbkVudW0udHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbVJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbUFkZGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtVXBkYXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbURlbGV0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlci50c1wiIC8+XHJcblxyXG5cclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeUFzeW5jfSBmcm9tIFwiLi9JUmVwb3NpdG9yeUFzeW5jXCI7XHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vLyBpbXBvcnQge0l0ZW1SZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbUFkZGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1BZGRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbVVwZGF0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0l0ZW1EZWxldGVkRXZlbnR9IGZyb20gXCIuL0l0ZW1EZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBQZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuICAgIGltcG9ydCBEb21haW5EaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkRvbWFpbkRpc3BhdGNoZXI7XHJcblxyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHR5cGUgbWFuYWdlZCBieSB0aGlzIHJlcG9zaXRvcnkuIFdpbGwgYmUgY29tcGFyZWQgd2l0aCB0aGUgX190eXBlTmFtZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0cyByZXRyaWV2ZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIG1hbmFnZWRUeXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBBIHN0cmluZyB0byBkaW5ldGlmeSB0aGUgcmVwb3NpdG9yeS4gVXNlZnVsIGluIHNjZW5hcmlvcyB3aGVyZSB0aGUgc2FtZSBBZ2dyZWdhdGVSb290IG1pZ2h0IGJlIHNhdmVkIGluIGRpZmZlcmVudCBsb2NhdGlvbnMuIFxyXG4gICAgICAgICAgICAgKiBFdmVudHMgbXVzdCBkaXNjZXJuIHdoYXQgbG9jYXRpb24gdGhlIGl0ZW0gd2FzIHNhdmVkL3JldHJpZXZlZC9kZWxldGUgdG8vZnJvbS9mcm9tLiBJdCBkZWZhdWx0cyB0byB0aGUgZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnlJZD86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAobWFuYWdlZFR5cGUgPT09IFwiXCIgfHwgbWFuYWdlZFR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLk1hbmFnZWRUeXBlTm90U3VwcGxpZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlcG9zaXRvcnlJZCkgdGhpcy5yZXBvc2l0b3J5SWQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBmdW5jdGlvbmFsaXR5IHRvIGFjY2VzcyB0aGUgcmVwb3NpdG9yeSBhbmQgZ2V0IGEgXCJzdGF0ZU9iamVjdFwiIHRvIHVzZSBmb3Igb2JqZWN0IFwicmVjb25zdHJ1Y3Rpb25cIi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz47XHJcblxyXG5cclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogSVByb21pc2U8VD4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcjxUPigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5LZXlOb3RTZXQsIFwiaWQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkXCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZCkudGhlbihcclxuICAgICAgICAgICAgICAgICh2YWx1ZTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lICE9IHRoaXMubWFuYWdlZFR5cGUgJiYgISh0aGlzLm1hbmFnZWRUeXBlID09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5Xcm9uZ1R5cGVGcm9tSW1wbGVtZW50YXRpb24sIFwiRXhwZWN0aW5nIFwiICsgdGhpcy5tYW5hZ2VkVHlwZSArIFwiIGJ1dCBvYnRhaW5lZCBcIiArIHZhbHVlLl9fdHlwZU5hbWUgKyBcIiBmcm9tIGRhdGFiYXNlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRCeUlkOiBcIiArIHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSA8VD4oRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEJ5SWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtUmV0cmlldmVkRXZlbnQodG9SZXR1cm4sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCkuZmluYWxseShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0b1JldHVybik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QnlJZDogXCIgKyByZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcInNhdmVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uIFRoZSB0ZW1wbGF0ZSBtZXRob2QgXCJzYXZlXCIgd2lsbCBtYW5hZ2UgdGhlIHJldmlzaW9uSWQgbG9naWMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBULCBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bSk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBkb1NhdmUoaXRlbTogVCwgc2F2ZUFjdGlvbjogU2F2ZUFjdGlvbkVudW0pOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIHNhdmVkO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVJbXBsZW1lbnRhdGlvbihpdGVtLCBzYXZlQWN0aW9uKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yU2F2aW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlT3JSZXBsYWNlKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlT3JSZXBsYWNlKGl0ZW06IFQsIHJlcGxhY2VPbmx5OiBib29sZWFuID0gZmFsc2UpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcjx7fT4oKTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50PFQ+IHwgSXRlbUFkZGVkRXZlbnQ8VD47XHJcblxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZ2V0S2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVhZFZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGl0ZW0gYWxyZWFkeSBleGlzdCBzbyB3ZSBoYXZlIHRvIGNvbXBhcmUgaXQgd2l0aCB3aGF0IHdlIGFyZSBzYXZpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGVyZmVjdGx5TWF0Y2gocmVhZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGF0IGlzIGluIHRoZSBkYXRhYmFzZSBwZXJmZWN0bHkgbWF0Y2hlcyB3aGF0IHdlIGFyZSBzYXZpbmcsIHNvIG5vdGhpbmcgdG8gZG8hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50IHJldmlzaW9uIG9ubHkgaWYgd2UgYXJlIG5vdCByZXBsYWNpbmcgYW4gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVwbGFjZU9ubHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1VcGRhdGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1SZXBsYWNlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRvU2F2ZShpdGVtLCBTYXZlQWN0aW9uRW51bS5VcGRhdGUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yUmVhZGluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT0gRXJyb3JzLkl0ZW1Ob3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkLCB0aGUgaXRlbSBpcyBub3QgaW4gdGhlIHJlcG8sIHNvIHdlIGhhdmUgdG8gYWRkIGl0IVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NhdmUoaXRlbSwgU2F2ZUFjdGlvbkVudW0uQWRkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgbmV3IEl0ZW1BZGRlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3JzIG11c3QgYmUgdHJlYXRlZCBhcyAuLi4gXCJFcnJvcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcImRlbGV0ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPHt9PigpO1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1EZWxldGVkRXZlbnQ8VD47XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZChpZCkudGhlbihcclxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1EZWxldGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gYnVpbGQgYW4gZXJyb3IgZnJvbSBhIHJldHVybiB2YWx1ZSBvZiB0aGUgQXN5bmMgSW1wbGVtZW50YXRpb25zLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgYnVpbGRFcnJvcihlcnJvckZyb21DYWxsOiBhbnksIGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvcjogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgICAgICB2YXIgcmVhc29uOiBFcnJvcjtcclxuICAgICAgICAgICAgaWYgKGVycm9yRnJvbUNhbGwgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID0gZXJyb3JGcm9tQ2FsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKGVycm9ySWZFcnJvckZyb21DYWxsSXNOb3RFcnJvciwgSlNPTi5zdHJpbmdpZnkoZXJyb3JGcm9tQ2FsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWFzb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VSZXBvc2l0b3J5fSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBGYWN0b3J5ID0gUGVyc2lzdGFibGVPYmplY3QuRmFjdG9yeTtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5NZW1vcnlSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIEJhc2VSZXBvc2l0b3J5PFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IElQZXJzaXN0YWJsZSB9O1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihtYW5hZ2VkVHlwZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihtYW5hZ2VkVHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpcy5zdG9yYWdlW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUPnRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlBc3luYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBCYXNlUmVwb3NpdG9yeUFzeW5jID0gUmVwb3NpdG9yeS5CYXNlUmVwb3NpdG9yeUFzeW5jO1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBpbXBvcnQgUHJvbWlzZUhhbmRsZXIgPSBQcm9taXNlcy5Qcm9taXNlSGFuZGxlcjtcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IERlc2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uRGVzZXJpYWxpemVyO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJbk1lbW9yeVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiB7IFtpZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdHJ1Y3RvcihtYW5hZ2VkVHlwZTogc3RyaW5nLCByZXBvc2l0b3J5SWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIobWFuYWdlZFR5cGUsIHJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEJ5SWRTeW5jKGlkOiBUS2V5KSB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSW52YWxpZEtleSwgXCJpZCBjYW5ub3QgYmUgbnVsbCBub3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPElUeXBlVHJhY2tpbmc+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRCeUlkU3luYyhpZCk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlU3luYyhpdGVtOiBUKToge30ge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZ2V0S2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JhZ2VbaXRlbS5nZXRLZXkoKS50b1N0cmluZygpXSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkVycm9yU2F2aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTeW5jKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBkZWxldGVTeW5jKGlkOiBUS2V5KToge30ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTeW5jKGlkKVxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcbiAgICBpbXBvcnQgUHJvbWlzZUhhbmRsZXIgPSBQcm9taXNlcy5Qcm9taXNlSGFuZGxlcjtcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIHR5cGUgSGFuZGxlckFuZFNjb3BlQ29udGFpbmVyID0geyBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyLCBvcmlnaW5hbFNjb3BlOiBhbnkgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJblByb2Nlc3NEaXNwYXRjaGVyIHtcclxuICAgICAgICBwcml2YXRlIGRlbGVnYXRlc1JlZ2lzdHJ5OiB7IFtldmVudFR5cGVOYW1lOiBzdHJpbmddOiB7IFtoYW5kbGVySWQ6IHN0cmluZ106IEhhbmRsZXJBbmRTY29wZUNvbnRhaW5lciB9IH0gPSB7fTtcclxuXHJcbiAgICAgICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5ID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0aGUgc2NvcGUgcGFyYW1ldGVyIGNhbiBiZSBwYXNzZWQgaW4gdG8gd2FycmFudHkgdGhhdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBpbiB0aGUgb3JpZ2luYWwgY29udGV4dCBbdGhpc10hISFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlciwgc2NvcGU/OiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVySWQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgIC8vIFwiU3RhbXBzXCIgdGhlIGhhbmRsZXIgaWYgbm90IGFscmVhZHkgXCJzdGFtcGVkXCJcclxuICAgICAgICAgICAgaWYgKCEoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhbmRsZXJJZCA9ICg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdW2hhbmRsZXJJZF0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV1baGFuZGxlcklkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU2NvcGU6IHNjb3BlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gQWN0IG9ubHkgaWQgaGFuZGxlciBoYXMgYmVlbiByZWdpc3RlcmVkLlxyXG4gICAgICAgICAgICBpZiAoKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVySWQgPSAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZDtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdW2hhbmRsZXJJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZXJyb3JzOiBFcnJvcltdID0gW107XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlQXJyYXk6IElQcm9taXNlPGFueT5bXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdW2VsZW1lbnRdLmhhbmRsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXVtlbGVtZW50XS5vcmlnaW5hbFNjb3BlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZTogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGhhbmRsZXIuY2FsbChzY29wZSwgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gaGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGdldCBhIHByb21pc2UsIHdlIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBwcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0FQcm9taXNlKHJldHVyblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gKDxJUHJvbWlzZTxhbnk+PnJldHVyblZhbHVlKS5jYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlQXJyYXkucHVzaChwcm9taXNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGUgcHJvbWlzZSByZXR1cm5lZCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gYWxsIG9mIHRoZSBwcm9taXNlcyBpbiB0aGUgYXJyYXkgd2lsbCBiZSByZXNvbHZlZC5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLmFsbChwcm9taXNlQXJyYXkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMuYnVpbGRFcnJvck1lc3NhZ2UoZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubmFtZSA9IFwiRXJyb3JzIHdoaWxlIHByb2Nlc3NpbmcgZXZlbnQgXCIgKyBldmVudC5fX3R5cGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaXNBUHJvbWlzZSh2YWx1ZVRvVGVzdDogYW55KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoIHZhbHVlVG9UZXN0LnRoZW4gJiYgdHlwZW9mIHZhbHVlVG9UZXN0LnRoZW4gPT09ICdmdW5jdGlvbicpICYmICh2YWx1ZVRvVGVzdC5jYXRjaCAmJiB0eXBlb2YgdmFsdWVUb1Rlc3QuY2F0Y2ggPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJ1aWxkRXJyb3JNZXNzYWdlKEVycm9yczogRXJyb3JbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IG9mIEVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSArPSBlbGVtZW50Lm5hbWUgKyBcIjpcIiArIGVsZW1lbnQubWVzc2FnZSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlNhZ2Ege1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNhZ2Ege1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNldHVwIHRoZSBzYWdhJ3MgZXZlbnQgaGFuZGxlcnMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhcnQoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGVyZWdpc3RlcnMgYWxsIG9mIHRoZSBldmVudCBoYW5kbGVycyByZWdpc3RlcmVkIGJ5IHRoZSBzYWdhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RvcCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZWNvdmVycyBhbGwgdGhlIFwic3RpbGwgcnVubmluZyBzYWdhc1wiXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVjb3ZlcigpOiB2b2lkO1xyXG4gICAgfVxyXG59ICIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlBc3luYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2FnYSB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgaW1wb3J0IElSZXBvc2l0b3J5QXN5bmMgPSBSZXBvc2l0b3J5LklSZXBvc2l0b3J5QXN5bmM7XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTYWdhPFxyXG4gICAgICAgIFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PixcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUU3RhdHVzZXMgbXVzdCBiZSBhbiBlbnVtIG9yIGEgc3RyaW5nIGxpdGVyYWxcclxuICAgICAgICAgKi9cclxuICAgICAgICBUU3RhdHVzZXMsIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRFdmVudHMgbXVzdCBiZSBhbiBlbnVtIG9yIGEgc3RyaW5nIGxpdGVyYWxcclxuICAgICAgICAgKi9cclxuICAgICAgICBURXZlbnRzXHJcbiAgICA+IGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCxUS2V5PiB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeTogSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PixcclxuICAgICAgICAgICAgcHJpdmF0ZSBpbml0aWFsU3RhdHVzOiBUU3RhdHVzZXMsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZmluYWxTdGF0dXNlczogVFN0YXR1c2VzW11cclxuXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgbXVzdCBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBldmVudHMgYW5kIHNhZ2Egc3RhdHVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHRyaWdnZXJFdmVudChldmVudDogVEV2ZW50cyk6IHZvaWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCByZWdpc3RlckV2ZW50cygpOiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgdW5yZWdpc3RlckV2ZW50cygpOiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgICAgICAgICB0aGlzLnVucmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFVuaXRPZldvcmsuIEEgVW5pdE9mV29yayBrZWVwcyB0cmFjayBvZiBjaGFuZ2VzIG9uIHRoZSBBZ2dyZWdhdGVzIGxvYWRlZCBmcm9tIHRoZSB1bmRlcmx5aW5nIHJlcG9zaXRvcnkgYW5kIGFsbG93cyB0byBzYXZlIHRoZW0gYWxsIGluIGEgc2luZ2xlIGNhbGwuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSUV2ZW50SGFuZGxlciA9IERvbWFpbkV2ZW50cy5JRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2ltcGxlIFVuaXRPZldvcmsgZm9yIGEgc2luZ2xlIFJlcG9zaXRvcnkuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVVuaXRPZldvcms8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEJ5SWQoa2V5OiBUS2V5KTogVDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFya3MgYW4gaXRlbSBhcyBkZWxldGVkIGZyb20gdGhlIFVuaXRPZldvcmsgKGFuZCBmcm9tIHRoZSBSZXBvc2l0b3J5IHdoZW4gdGhlIFVvVyB3aWxsIGJlIHNhdmVkKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYWxsIHRoZSBtb2RpZmllZCBpdGVtcyBpbiB0aGUgVW5pdE9mV29yay5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzYXZlQWxsKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsbG93cyB0byByZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWxsb3dzIHRvIHVucmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgVW5pdE9mV29ya1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTogdm9pZDtcclxuXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUVycm9ycyA9IEVycm9yTWFuYWdlbWVudC5CYXNlRXJyb3JzO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBVbml0T2ZXb3JrRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtTWFya2VkQXNEZWxldGVkID0gXCJUaGlzIGl0ZW0gd2FzIG1hcmtlZCBhcyBkZWxldGVkIGluIHRoaXMgVW5pdE9mV29yaywgYW5kIGNhbm5vdCBiZSByZXRyaWV2ZWQuXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0YXRpYyBjb250YWluZXIgb2YgZXZlbnQgXCJfX3R5cGVOYW1lXCJzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9fbmFtZVNwYWNlID0gXCJERERUb29scy5Vbml0T2ZXb3JrXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmplY3RTYXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT2JqZWN0RGVsZXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmplY3RSZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBPYmplY3REZWxldGVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0RGVsZXRlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3REZWxldGVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9iamVjdFJldHJpZXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdFJldHJpZXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3RSZXRyaWV2ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9iamVjdFNhdmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0U2F2ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0U2F2ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgZW51bSBJdGVtU3RhdHVzIHtcclxuICAgICAgICBOZXcsXHJcbiAgICAgICAgTW9kaWZpZWQsXHJcbiAgICAgICAgU2F2ZWQsXHJcbiAgICAgICAgRGVsZXRlZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwgY2xhc3MgdG8gc3RvcmUgaXRlbSBzdGF0dXMgaW5mb1xyXG4gICAgICovXHJcbiAgICBjbGFzcyBUcmFja2VkSXRlbTxcclxuICAgICAgICBUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID4ge1xyXG4gICAgICAgIC8vIFdpbGwgY29udGFpbiBhIHNlcmlhbGl6ZWQgdmVyc2lvbiBvZiB0aGUgb2JqZWN0IGFzIGl0IHdhcyB3aGVuIGl0IHdhcyBsb2FkZWQgZnJvbSB0aGUgcmVwb3NpdG9yeS5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBhc0xvYWRlZDogSVBlcnNpc3RhYmxlIC8vIFdpbGwgY29udGFpbiB0aGUgc3RhdGUgb2YgdGhlIG9iamVjdCB3aGVuIGZpcnN0IGFkZGVkIG9yIHVwZGF0ZWRcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHByaXZhdGUgc3RhdHVzOiBJdGVtU3RhdHVzLFxyXG4gICAgICAgICAgICBwcml2YXRlIGl0ZW06IFQsXHJcbiAgICAgICAgICAgIHByaXZhdGUga2V5OiBUS2V5XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNMb2FkZWQgPSBpdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzTmV3KCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuTmV3O1xyXG4gICAgICAgICAgICB0aGlzLmFzTG9hZGVkID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzU2F2ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5TYXZlZDtcclxuICAgICAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc01vZGlmaWVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuTW9kaWZpZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzRGVsZXRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLkRlbGV0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0U3RhdHVzKCk6IEl0ZW1TdGF0dXMge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0SXRlbSgpOiBUIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRLZXkoKTogVEtleSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBoYXNDaGFuZ2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgIHZhciBhc0xvYWRlZEFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhpcy5hc0xvYWRlZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlQXNTdHJpbmcgIT09IGFzTG9hZGVkQXNTdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3MgaWYgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzIGhhcyBiZWVuIG1vZGlmaWVkLCBhbmQgY2hhbmdlcyB0aGUgc3RhdHVzIGFjY29yZGluZ2x5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVTYXZlZEl0ZW1TdGF0dXMoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gSXRlbVN0YXR1cy5TYXZlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrQXNNb2RpZmllZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSWRlbnRpdHlNYXBcclxuICAgICAgICA8XHJcbiAgICAgICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgICAgICA+XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaWRUb09iamVjdE1hcDogeyBbaWQ6IHN0cmluZ106IFRyYWNrZWRJdGVtPFQsIFRLZXk+IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0cnVlIGlmIGtleSBpcyBhbHJlYWR5IHN0b3JlZCBpbiB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNUcmFja2VkKGtleTogVEtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuICAgICAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10uZ2V0SXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWRkcyBvciByZXBsYWNlcyBhbiBpdGVtIHRvIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWRkKGtleTogVEtleSwgaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgbmV3SXRlbSA9IG5ldyBUcmFja2VkSXRlbShJdGVtU3RhdHVzLk5ldywgaXRlbSwga2V5KTtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddID0gbmV3SXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbW92ZShrZXk6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmlkVG9PYmplY3RNYXBba2V5LnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0SWRzKCk6IFRLZXlbXSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjogVEtleVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5pZFRvT2JqZWN0TWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybi5wdXNoKHRoaXMuaWRUb09iamVjdE1hcFtlbGVtZW50XS5nZXRLZXkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc0RlbGV0ZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHRyYWNrZWRJdGVtLm1hcmtBc0RlbGV0ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNTYXZlZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzU2F2ZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNNb2RpZmllZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzTW9kaWZpZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJdGVtU3RhdHVzKGtleTogVEtleSk6IEl0ZW1TdGF0dXMge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYWNrZWRJdGVtLmdldFN0YXR1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcHV0ZXMgdGhlIGNvcnJlY3Qgc3RhdHVzIGZvciBhbiBpdGVtIGluIFwiU2F2ZWRcIiBzdGF0dXMsIGFzIGl0IG1heSBoYXZlIGJlZW4gbW9kaWZpZWQgc2luY2Ugbm93IChoZXJlIHdlIGRvbid0IGhhdmUgcHJvcGVydHkgdHJhY2tpbmcpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVTYXZlZEl0ZW1TdGF0dXMoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICBpdGVtLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRUcmFja2VkSXRlbShrZXk6IFRLZXkpOiBUcmFja2VkSXRlbTxULCBUS2V5PiB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIGlmICghdG9SZXR1cm4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lkZW50aXR5TWFwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vT2JqZWN0RGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vT2JqZWN0UmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3RTYXZlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVW5pdE9mV29ya0Vycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuLy8gaW1wb3J0IHtJblByb2Nlc3NEaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0luUHJvY2Vzc0Rpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7SWRlbnRpdHlNYXAsIEl0ZW1TdGF0dXN9IGZyb20gXCIuL0lkZW50aXR5TWFwXCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0RGVsZXRlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3REZWxldGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtPYmplY3RSZXRyaWV2ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtPYmplY3RTYXZlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3RTYXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7VW5pdE9mV29ya0Vycm9yc30gZnJvbSBcIi4vVW5pdE9mV29ya0Vycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVJlcG9zaXRvcnkgPSBSZXBvc2l0b3J5LklSZXBvc2l0b3J5O1xyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgSW5Qcm9jZXNzRGlzcGF0Y2hlciA9IERvbWFpbkV2ZW50cy5JblByb2Nlc3NEaXNwYXRjaGVyO1xyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgSUV2ZW50SGFuZGxlciA9IERvbWFpbkV2ZW50cy5JRXZlbnRIYW5kbGVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2ltcGxlIFVuaXRPZldvcmsgZm9yIGEgc2luZ2xlIFJlcG9zaXRvcnkuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBVbml0T2ZXb3JrPFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIGlkTWFwOiBJZGVudGl0eU1hcDxULCBUS2V5PjtcclxuICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+O1xyXG4gICAgICAgIHByaXZhdGUgZGlzcGF0Y2hlcjogSW5Qcm9jZXNzRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocmVwb3NpdG9yeTogSVJlcG9zaXRvcnk8VCwgVEtleT4pIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcCA9IG5ldyBJZGVudGl0eU1hcDxULCBUS2V5PigpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBuZXcgSW5Qcm9jZXNzRGlzcGF0Y2hlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgUmVwb3NpdG9yeSBvciBmcm9tIHRoZSBVbml0T2ZXb3JrLCBnaXZlbiBpdHMgSWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEJ5SWQoa2V5OiBUS2V5KTogVCB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpID09PSBJdGVtU3RhdHVzLkRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBVbml0T2ZXb3JrRXJyb3JzLnRocm93KFVuaXRPZldvcmtFcnJvcnMuSXRlbU1hcmtlZEFzRGVsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IHRoaXMucmVwb3NpdG9yeS5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAuYWRkKGtleSwgdG9SZXR1cm4pO1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLm1hcmtBc1NhdmVkQnlJZChrZXkpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldHJpZXZlZEV2ZW50ID0gbmV3IE9iamVjdFJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLl9fdHlwZU5hbWUsIHRvUmV0dXJuLl9fdHlwZVZlcnNpb24sIHRvUmV0dXJuLmdldEtleSgpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlRXZlbnQocmV0cmlldmVkRXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFya3MgYW4gaXRlbSBhcyBkZWxldGVkIGZyb20gdGhlIFVuaXRPZldvcmsgKGFuZCBmcm9tIHRoZSBSZXBvc2l0b3J5IHdoZW4gdGhlIFVvVyB3aWxsIGJlIHNhdmVkKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWxldGVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLm1hcmtBc0RlbGV0ZWRCeUlkKGtleSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbGwgdGhlIG1vZGlmaWVkIGl0ZW1zIGluIHRoZSBVbml0T2ZXb3JrLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzYXZlQWxsKCkge1xyXG4gICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMuaWRNYXAuZ2V0SWRzKCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBvZiBrZXlzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZE1hcC51cGRhdGVTYXZlZEl0ZW1TdGF0dXMoa2V5KTtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmlkTWFwLmdldEl0ZW1TdGF0dXMoa2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5EZWxldGVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NEZWxldGVkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTW9kaWZpZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLk5ldzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTmV3T3JNb2RpZmllZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLlNhdmVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLnVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHByb2Nlc3NEZWxldGVkSXRlbShrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdmFyIGRlbGV0ZWRFdmVudCA9IG5ldyBPYmplY3REZWxldGVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGtleS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3J5LmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KGRlbGV0ZWRFdmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHByb2Nlc3NOZXdPck1vZGlmaWVkSXRlbShrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3J5LnNhdmUoaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzU2F2ZWRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIC8vIHJhaXNlcyBhbiBldmVudCBmb3Igd2hvbWV2ZXIgaXMgaW50ZXJlc3RlZFxyXG4gICAgICAgICAgICB2YXIgc2F2ZWRFdmVudCA9IG5ldyBPYmplY3RTYXZlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChzYXZlZEV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmFpc2VFdmVudChldmVudDogSURvbWFpbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wbGV0ZWx5IHJlbW92ZXMgYW4gb2JqZWN0IGZyb20gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSByZW1vdmVCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZE1hcC5yZW1vdmUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=