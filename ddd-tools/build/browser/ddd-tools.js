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
            KindsOfEventHandler[KindsOfEventHandler["onSuccesfulEventProcessed"] = 4] = "onSuccesfulEventProcessed";
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
                this.onSuccesfulEventProcessedHandlers = new HandlerCollection();
                this.currentStatus = initialStatus;
                // TODO: The components registration should be kept somewhere else... or make the component's type registration in the constructor become a rule.
                try {
                    Factory.registerType("HandlerCollection", "v1", HandlerCollection);
                }
                catch (e) {
                }
            }
            /**
             * Overrides the PersistableObject's setState to avoid restoring collection of "fake handlers"'
             */
            BaseStateMachine.prototype.setState = function (state) {
                _super.prototype.setState.call(this, state);
                // We need to reinitialize the handlers collection. as if they were 
                this.beforeEnterStatusHandlers = new HandlerCollection();
                this.afterEnterStatusHandlers = new HandlerCollection();
                this.beforeExitStatusHandlers = new HandlerCollection();
                this.afterExitStatusHandlers = new HandlerCollection();
                this.onSuccesfulEventProcessedHandlers = new HandlerCollection();
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
                    return _this.onSuccesfulEventProcessedHandlers.runHandlers(smEvent);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlYWRNb2RlbC9JUmVhZE1vZGVsQXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUXVlcnkvSVF1ZXJ5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzL1NpbXBsZUd1aWQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVOdWxsLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vVG91Y2gudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9JU3RhdGVNYWNoaW5lLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9CYXNlU3RhdGVNYWNoaW5lLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0cy9Nb25leS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvSUVudGl0eS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9FbnRpdHkvQmFzZUtleVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L1NhdmVBY3Rpb25FbnVtLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Vycm9ycy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0V2ZW50cy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5RXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtQWRkZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1EZWxldGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtUmV0cmlldmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtVXBkYXRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbVJlcGxhY2VkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9CYXNlUmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5QXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9Jbk1lbW9yeVJlcG9zaXRvcnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9Jbk1lbW9yeVJlcG9zaXRvcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TYWdhL0lTYWdhLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NhZ2EvQmFzZVNhZ2EudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9JVW5pdE9mV29yay50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmtFcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9FdmVudHMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3REZWxldGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9PYmplY3RSZXRyaWV2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFNhdmVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVW5pdE9mV29yay9JZGVudGl0eU1hcC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL1VuaXRPZldvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7R0FFRztBQUNILElBQVUsUUFBUSxDQWNqQjtBQWRELFdBQVUsUUFBUTtJQUFDLElBQUEsZUFBZSxDQWNqQztJQWRrQixXQUFBLGVBQWUsRUFBQyxDQUFDO1FBQ2hDO1lBQUE7WUFZQSxDQUFDO1lBVlUsZ0JBQUssR0FBWixVQUFhLElBQVksRUFBRSxPQUFnQjtnQkFDdkMsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDckQsTUFBTSxHQUFHLENBQUM7WUFDZCxDQUFDO1lBRU0sMkJBQWdCLEdBQXZCLFVBQXdCLElBQVksRUFBRSxPQUFnQjtnQkFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNmLENBQUM7WUFDTCxpQkFBQztRQUFELENBQUMsQUFaRCxJQVlDO1FBWnFCLDBCQUFVLGFBWS9CLENBQUE7SUFDTCxD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QztnQkFDaEMsNkNBQTZDO2dCQUM3QyxJQUFJLFVBQVUsR0FBRyxJQUFJLDZCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDM0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBRU8sK0JBQVUsR0FBbEIsVUFBbUIsS0FBbUI7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFFRDs7ZUFFRztZQUNLLCtCQUFVLEdBQWxCLFVBQW1CLEdBQVM7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDTCxDQUFDO1lBQ0wsaUJBQUM7UUFBRCxDQUFDLEFBdEdELElBc0dDO1FBdEdZLHVCQUFVLGFBc0d0QixDQUFBO0lBQ0wsQ0FBQyxFQW5Ia0IsVUFBVSxHQUFWLG1CQUFVLEtBQVYsbUJBQVUsUUFtSDVCO0FBQUQsQ0FBQyxFQW5IUyxRQUFRLEtBQVIsUUFBUSxRQW1IakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTWluaW1hbCBFcnJvciBoYW5kbGluZyBiYXNlIGJlaGF2aW9ycyBmb3IgdGhlIGRvbWFpbiBtb2RlbC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5FcnJvck1hbmFnZW1lbnQge1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFcnJvcnMge1xyXG5cclxuICAgICAgICBzdGF0aWMgdGhyb3cobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnIgPSBCYXNlRXJyb3JzLmdldEVycm9ySW5zdGFuY2UobmFtZSwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXRFcnJvckluc3RhbmNlKG5hbWU6IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyk6IEVycm9yIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihtZXNzYWdlIHx8IG5hbWUpO1xyXG4gICAgICAgICAgICBlcnIubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Qcm9taXNlcyB7XHJcblxyXG4gICAgZXhwb3J0IHZhciBQcm9taXNlSGFuZGxlcjogbmcuSVFTZXJ2aWNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBJUHJvbWlzZSA9IG5nLklQcm9taXNlO1xyXG4gICAgZXhwb3J0IGltcG9ydCBEZWZlcnJlZCA9IG5nLklEZWZlcnJlZDtcclxuIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNvZGUgZm9yY2VzIERERFRvb2xzIHRvIHVzZSAkcSBwcm9taXNlcyBpZiBhbmd1bGFyIGlzIGRlZmluZWQgYXQgdGhlIG1vbWVudCBkZGQtdG9vbHMgaXMgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIGlmICh0eXBlb2YgYW5ndWxhciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHZhciAkaW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnXSk7XHJcbiAgICAgICAgdmFyICRxID0gJGluamVjdG9yLmdldChcIiRxXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFByb21pc2VIYW5kbGVyID0gJHE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChRKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gVGhpcyBjYXN0IGlzIGVmZmVjdGl2ZWx5IGEgcmlzayEgSG93IHRvIG1hbmFnZSBpdCBjb3JyZWN0bHkgPyBcclxuICAgICAgICAgICAgUHJvbWlzZUhhbmRsZXIgPSA8bmcuSVFTZXJ2aWNlPig8YW55PlEpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgZGlkbid0IGZpbmQgYSBzdWl0YWJsZSBQcm9taXNlSGFuZGxlclxyXG4gICAgaWYgKFByb21pc2VIYW5kbGVyID09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiQSBQcm9taXNlIEhhbmRsZXIgbXVzdCBiZSBkZWZpbmVkLCBzdXBwb3J0ZWQgYXJlIGFuZ3VsYXIncyAkcSBvciBrcmlzIGtvd2FsJ3MgUS4gVGhpcyBtZWFucyB0aGF0IFEgb3IgYW5ndWxhciBNVVNUIGJlIGxvYWRlZCBiZWZvcmUgZGRkLXRvb2xzLmpzXCIpO1xyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVhZE1vZGVsIHtcclxuXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAgICBJZGVudGlmaWVzIGEgcmVhZG1vZGVsIGluIHRoZSBzeXN0ZW0uXHJcbiAgICAgICAgQSBSZWFkbW9kZWwgd2lsbCBiZSBwcm9iYWJseSBwZXJzaXN0ZWQgdG8gc29tZSBraW5kIG9mIGRhdGFiYXNlLFxyXG4gICAgICAgIGVpdGhlciBpbiBtZW1vcnkgb3IgZGlzayBvciAuLi5cclxuICAgICAgICBJdCBpcyBzb21laG93IHNpbWlsYXIgdG8gYSByZXBvc2l0b3J5LCBidXQgaXQgY2FuIHN0b3JlIGFueSBraW5kIG9mIHN0YXR1cyxcclxuICAgICAgICBub3QgbmVjZXNzYXJpbHkgYW4gYWdncmVnYXRlIHJvb3QuXHJcbiAgICAgICAgT2JqZWN0cyBzdG9yZWQgaW4gdGhlIFJlYWRNb2RlbCB3aWxsIHByb2JhYmx5IGhhdmUgYWxsIHB1YmxpYyBtZW1iZXJzLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSZWFkTW9kZWxBc3luYzxUPiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIFdpbGwgaW5zZXJ0IGEgbmV3IG9iamVjdCBpbiB0aGUgcmVhZG1vZGVsLlxyXG4gICAgICAgICAgICBJdCB3aWxsIHRocm93IGFuIGVycm9yIGlmIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleSBhbHJlYWR5IGV4aXN0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGluc2VydCh2YWx1ZTogVCwga2V5OiBzdHJpbmcpOiBJUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAgIFdpbGwgdXBkYXRlIGFuIGV4aXN0aW5nIG9uamVjdCBpbiB0aGUgcmVhZG1vZGVsXHJcbiAgICAgICAgICAgIEl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlIG9iamVjdCBkb2Vzbid0IGV4aXN0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVwZGF0ZSh2YWx1ZTogVCwga2V5OiBzdHJpbmcpOiBJUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgV2lsbCBpbnNlcnQgb3IgdXBkYXRlIGFuIG9iamVjdCB3aXRoIGEgc3BlY2lmaWVkIGtleVxyXG4gICAgICAgICovXHJcbiAgICAgICAgaW5zZXJ0T3JVcGRhdGUodmFsdWU6IFQsIGtleTogc3RyaW5nKTogSVByb21pc2U8dm9pZD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgIFdpbGwgZGVsZXRlIGFuIGVsZW1lbnQgb2YgdGhlIFJlYWRNb2RlbCBjb2xsZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlQnlLZXkoa2V5OiBzdHJpbmcpOiBJUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgV2lsbCBkZWxldGUgYSBzZXQgb2YgZWxlbWVudHMgb2YgdGhlIFJlYWRNb2RlbCBjb2xsZWN0aW9uIGlkZW50aWZpZWQgYnkgYSBxdWVyeS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZUJ5UXVlcnkocXVlcnk6IGFueSk6IElQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICBXaWxsIGNsZWFyIHRoZSBjb2xsZWN0aW9uIGRlbGV0aW5nIGFsbCBvZiB0aGUgY29udGVudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGNsZWFyKCk6IElQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICBCeSBub3cgdGhlIHF1ZXJ5IG9iamVjdCBpcyBsZWZ0IHRvIHRoZSBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIHNlbGVjdChxdWVyeTogYW55KTogSVByb21pc2U8VFtdPjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5RdWVyeSB7XHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgYSBxdWVyeSB0byBiZSBleGVjdXRlZCBhZ2FpbnN0IGEgRGF0YXN0b3JlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5PFQ+IHtcclxuICAgICAgICBzZXRRdWVyeShxdWVyeU9iamVjdDogYW55KTtcclxuICAgICAgICBleGVjdXRlKCk6IFRbXTtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUXVlcnkge1xyXG4gICAgXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBJZGVudGlmaWVzIGEgcXVlcnkgdG8gYmUgZXhlY3V0ZWQgYWdhaW5zdCBhIERhdGFzdG9yZSBpbiBhbiBhc3luYyBmYXNoaW9uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5QXN5bmM8VD4ge1xyXG4gICAgICAgIHNldFF1ZXJ5KHF1ZXJ5T2JqZWN0OiBhbnkpO1xyXG4gICAgICAgIGV4ZWN1dGUoKTogSVByb21pc2U8VFtdPjtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBTb21lIHNpbXBsZSBjbGFzc2VzIHVzZWQgaW4gZGlmZmVyZW50IG1vZHVsZXMuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU2ltcGxlR3VpZCB7XHJcblx0XHQvLyBIZWxwZXIgZm9yIGd1aWQgZ2VuZXJhdGlvbi5cclxuXHRcdHByaXZhdGUgc3RhdGljIGlzVmFsaWQoZ3VpZDogc3RyaW5nKSB7XHJcblx0XHRcdHZhciBndWlkUmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXlt7KF0/WzAtOUEtRmEtZl17OH1bLV0/KFswLTlBLUZhLWZdezR9Wy1dPyl7M31bMC05QS1GYS1mXXsxMn1bKX1dPyRcIik7XHJcblx0XHRcdHJldHVybiBndWlkUmVnZXhwLnRlc3QoZ3VpZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgczQoKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG5cdFx0XHRcdC50b1N0cmluZygxNilcclxuXHRcdFx0XHQuc3Vic3RyaW5nKDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcclxuXHRcdFx0dmFyIG5ld1NpbXBsZUd1aWQgPSBcIntcIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArXHJcblx0XHRcdFx0U2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIn1cIjtcclxuXHJcblx0XHRcdGlmIChTaW1wbGVHdWlkLmlzVmFsaWQobmV3U2ltcGxlR3VpZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3U2ltcGxlR3VpZDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaG91bGQgTmV2ZXIgSGFwcGVuISBUaGUgZ2VuZXJhdGVkIGd1aWQgaXMgbm90IHZhbGlkIVwiKVxyXG5cdFx0fVxyXG5cdH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5VdGlscyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpbXBsZUlkZW50aXR5TWFwIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogYW55IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGlzVHJhY2tlZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChpZDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkKGlkOiBzdHJpbmcsIG9iamVjdDogYW55KTogYW55IHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXSA9IG9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgYWxsIHRoZSBpZHMgaW4gdGhlIG1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRJZHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5pZFRvT2JqZWN0TWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybi5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkZWxldGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtpZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLkNvbW1vbkludGVyZmFjZXMge1xyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUVxdWF0YWJsZTxUPiB7XHJcblx0XHRlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW47XHJcblx0fVxyXG59IiwiXHJcbm5hbWVzcGFjZSBERERUb29scy5Db21tb25JbnRlcmZhY2VzIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIF9fb2JqZWN0SW5zdGFuY2VJZD86IHN0cmluZztcclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlRGF0ZSBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBfX2RhdGVBc1N0cmluZzogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19kYXRlQXNTdHJpbmcgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldERhdGVGcm9tU3RyaW5nKGRhdGVBc1N0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlQXNTdHJpbmcpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0RGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZURhdGUuZ2V0RGF0ZUZyb21TdHJpbmcodGhpcy5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlUmVnRXhwIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJTZXJpYWxpemFibGVSZWdFeHBcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgX19yZWd1bGFyRXhwcmVzc2lvbjogc3RyaW5nO1xyXG4gICAgICAgIF9fZmxhZ3M6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocmVnRXhwOiBSZWdFeHApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGxpdFJlZ0V4cEFuZEZsYWdzKCByZWdFeHAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3BsaXRSZWdFeHBBbmRGbGFncyggcmVnRXhwOiBSZWdFeHAgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcmVhbGx5VW5saWtlbHlTdHJpbmcgPSBcIsKww7LDoMO5wrDCsMOyw6DDucKwwrDDssOgw7nCsFwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG8gZ2V0IGEgY29ycmVjdCByZWdleHAgd2UgbXVzdCB0YWtlIGF3YXkgdGhlIGxlYWRpbmcgXCIvXCIgYW5kIHRoZSBmbGFncyFcclxuICAgICAgICAgICAgdmFyIGNvbmRpdGlvbmVkU3RyaW5nID0gcmVnRXhwLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyByZXBsYWNlcyB0aGUgZXNjYXBlZCBzbGFzaGVzIHdpdGggc29tZXRoaW5nIHZlcnkgaW1wcm9iYWJsZVxyXG4gICAgICAgICAgICBjb25kaXRpb25lZFN0cmluZyA9IGNvbmRpdGlvbmVkU3RyaW5nLnJlcGxhY2UoXCJcXFxcL1wiLCByZWFsbHlVbmxpa2VseVN0cmluZyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGNvbmRpdGlvbmVkU3RyaW5nLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHBhcnRzWzBdIG11c3QgYWx3YXlzIGJlIHRoZSBlbXB0eSBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gXCJcIikgdGhyb3cgbmV3IEVycm9yKFwic3BsaXRSZWdFeHBBbmRGbGFnczogVGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuIVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVzdG9yZSB3aGF0IFxyXG4gICAgICAgICAgICBwYXJ0c1sxXSA9IHBhcnRzWzFdLnJlcGxhY2UocmVhbGx5VW5saWtlbHlTdHJpbmcsIFwiXFxcXC9cIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gPSBwYXJ0c1sxXTtcclxuICAgICAgICAgICAgdGhpcy5fX2ZsYWdzID0gcGFydHNbMl0gfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nIChcInNwbGl0UmVnRXhwOiBcIiArIHJlZ0V4cC50b1N0cmluZygpICsgXCIgLi4uIFwiICsgdGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uICsgXCIgLi4uIFwiICsgdGhpcy5fX2ZsYWdzICk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHJlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmcsIGZsYWdzOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBSZWdFeHA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldFJlZ0V4cDogXCIgKyB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gKyBcIiAuLi4gXCIgKyB0aGlzLl9fZmxhZ3MpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGZsYWdzKSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb24sIGZsYWdzKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IG5ldyBSZWdFeHAocmVndWxhckV4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCBiYWNrIGEgUmVndWxhciBFeHByZXNzaW9uIGZyb20gdGhlIFNlcmlhbGl6YWJsZVJlZ0V4cCBpbnN0YW5jZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRSZWdFeHAoKTogUmVnRXhwIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZVJlZ0V4cC5nZXRSZWdFeHBGcm9tUmVnRXhwQW5kRmxhZ3ModGhpcy5fX3JlZ3VsYXJFeHByZXNzaW9uLCB0aGlzLl9fZmxhZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6YWJsZU51bGwgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlNlcmlhbGl6YWJsZU51bGxcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcInYxXCI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlR3VpZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRvdWNoIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdG91Y2hJbmRleCA9IDE7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXBhcmVzIHRoZSBpZCBnZW5lcmF0b3IgZm9yIGEgbmV3IHJ1blxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVzZXRUb3VjaEluZGV4KCkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaDtcclxuICAgICAgICAgICAgc1RoaXMudG91Y2hJbmRleCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBnZXROZXdJbmRleCgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpXHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFRvdWNoO1xyXG4gICAgICAgICAgICBzVGhpcy50b3VjaEluZGV4Kys7XHJcbiAgICAgICAgICAgIHJldHVybiAoc1RoaXMudG91Y2hJbmRleCsrIC0gMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFkZHMgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IHRvIGFuIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdG91Y2gob2JqZWN0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVG91Y2hcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdJZCA9IHNUaGlzLmdldE5ld0luZGV4KCk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkID0gbmV3SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlbW92ZXMgdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSBmcm9tIGFuIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdW50b3VjaChvYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaGFzQmVlblRvdWNoZWQob2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGNhc3RlZC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZURhdGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVSZWdFeHAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Ub3VjaC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge1NpbXBsZUd1aWR9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVHdWlkXCI7XHJcbi8vIGltcG9ydCB7U2ltcGxlSWRlbnRpdHlNYXB9IGZyb20gXCIuLi9VdGlscy9TaW1wbGVJZGVudGl0eU1hcFwiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuLy8gaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIEpTT04gc3RyaW5nIHNlcmlhbGl6YXRpb24uIEl0IGV4dGVuZHMgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBKU09OLnN0cmluZ2lmeSB0byBhbGxvdyBzZXJpYWxpemF0aW9uIGFuZCBkZXNlcmlhbGl6YXRpb24gb2YgZGF0ZSBhbmQgcmVndWxhciBleHByZXNzaW9uIG9iamVjdHMsIGFuZCBvYmplY3QgcmVmZXJlbmNlLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBTaW1wbGVHdWlkID0gVXRpbHMuU2ltcGxlR3VpZDtcclxuICAgIGltcG9ydCBTaW1wbGVJZGVudGl0eU1hcCA9IFV0aWxzLlNpbXBsZUlkZW50aXR5TWFwO1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBEZXNlcmlhbGl6ZXIge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgaXMgbmVlZGVkIHRvIHRyYWNrIG9iamVjdCBpbnN0YW5jZXMgdG8gYWNoaWV2ZSBjb3JyZWN0IHJlY29uc3RydWN0aW9uIG9mIHRoZSBvYmplY3QgdHJlZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpZGVudGl0eU1hcDogU2ltcGxlSWRlbnRpdHlNYXA7XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXNlcmlhbGl6ZXMgYW4gb2JqZWN0IGZyb20gYSBKU09OIHN0cmluZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplKHRvRGVzZXJpYWxpemU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgICAgIERlc2VyaWFsaXplci5pZGVudGl0eU1hcCA9IG5ldyBTaW1wbGVJZGVudGl0eU1hcCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBKU09OLnBhcnNlKHRvRGVzZXJpYWxpemUsIERlc2VyaWFsaXplci5jdXN0b21SZXZpdmVyKTtcclxuICAgICAgICAgICAgRGVzZXJpYWxpemVyLmNsZWFudXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVzZXJpYWxpemVzIGFuIG9iamVjdCBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgd2l0aCBcIlNlcmlhbGl6ZVRvT2JqZWN0XCJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplRnJvbU9iamVjdCh0b0Rlc2VyaWFsaXplOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICB2YXIgc291cmNlQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0b0Rlc2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHNvdXJjZUFzU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2xlYW5zIHRoZSByZWNvbnNpdHV0ZWQgaW5zdGFuY2VzIGZyb20gdGhlIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eSxcclxuICAgICAgICAgKiBhbmQgZW1wdGllcyB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY2xlYW51cCgpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRGVzZXJpYWxpemVyO1xyXG4gICAgICAgICAgICB2YXIgaWRNYXAgPSBzVGhpcy5pZGVudGl0eU1hcDtcclxuICAgICAgICAgICAgdmFyIHVudG91Y2ggPSBUb3VjaC51bnRvdWNoO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBpZE1hcC5nZXRJZHMoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gaWRNYXAuZ2V0QnlJZChpdGVtKTtcclxuICAgICAgICAgICAgICAgIHVudG91Y2goY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgbGVhdmUgdGhlIGluc3RhbmNlcyBcImdhcmJhZ2VhYmxlXCIuLi4gaG93IHRvIHRlc3QgPyAgICBcclxuICAgICAgICAgICAgICAgIGlkTWFwLmRlbGV0ZUJ5SWQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEl0IGhhbmRsZXMgRmFrZSogaW5zdGFuY2VzIHVzZXMgX19vYmplY3RJbnN0YW5jZUlkIHRvIHJlYnVpbGQgYSBjb3JyZWN0IG9iamVjdCB0cmVlLiBcclxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJ5IEpTT04ucGFyc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjdXN0b21SZXZpdmVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERlc2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIGlkTWFwID0gc1RoaXMuaWRlbnRpdHlNYXA7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc1RoaXMuaGFzQmVlblRvdWNoZWQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkTWFwLmlzVHJhY2tlZCh2YWx1ZS5fX29iamVjdEluc3RhbmNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZE1hcC5nZXRCeUlkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VSZWdFeHBEZXNlcmlhbGl6ZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VEYXRlRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBzVGhpcy5GYWtlTnVsbERlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXAuYWRkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrcyBmb3IgdGhlIHByZXNlbmNlIG9mIGFuIF9fb2JqZWN0SW5zdGFuY2VJZCBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGhhc0JlZW5Ub3VjaGVkKG9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjYXN0ZWQgPSA8SVR5cGVUcmFja2luZz5vYmplY3Q7XHJcbiAgICAgICAgICAgIGlmIChjYXN0ZWQuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5hZ2VzIFJlZ0V4cCBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlUmVnRXhwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRmFrZVJlZ0V4cERlc2VyaWFsaXplcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlNlcmlhbGl6YWJsZVJlZ0V4cFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBTZXJpYWxpemFibGVSZWdFeHAuZ2V0UmVnRXhwRnJvbVJlZ0V4cEFuZEZsYWdzKHZhbHVlLl9fcmVndWxhckV4cHJlc3Npb24sIHZhbHVlLl9fZmxhZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgRGF0ZSBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlUmVnRXhwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRmFrZURhdGVEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSA9PT0gXCJTZXJpYWxpemFibGVEYXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFNlcmlhbGl6YWJsZURhdGUuZ2V0RGF0ZUZyb21TdHJpbmcodmFsdWUuX19kYXRlQXNTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgTnVsbCBEZXNlcmlhbGl6YXRpb25cclxuICAgICAgICAgKiBUT0RPOiBGaW5kIGEgd2F5IHRvIG1vdmUgdGhpcyByZXNwb25zaWJpbGl0eSB0byB0aGUgU2VyaWFsaXphYmxlTnVsbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZha2VOdWxsRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiU2VyaWFsaXphYmxlTnVsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVEYXRlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlUmVnRXhwLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlTnVsbC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RvdWNoLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlRGF0ZX0gZnJvbSBcIi4vU2VyaWFsaXphYmxlRGF0ZVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZVJlZ0V4cH0gZnJvbSBcIi4vU2VyaWFsaXphYmxlUmVnRXhwXCI7XHJcbi8vIGltcG9ydCB7VG91Y2h9IGZyb20gXCIuL1RvdWNoXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlcmlhbGl6ZXIge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlcmlhbGl6ZXMgYW4gb2JqZWN0IHRvIGEgSlNPTiBzdHJpbmcsIGtlZXBlaW5nIHRyYWNrIG9mIHRoZSBpbnN0YW5jZXMgb2YgdGhlIG9iamVjdHMgc2VyaWFsaXplZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplKHRvU2VyaWFsaXplOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm47XHJcbiAgICAgICAgICAgIFRvdWNoLnJlc2V0VG91Y2hJbmRleCgpO1xyXG4gICAgICAgICAgICBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgU2VyaWFsaXplci50b3VjaFNvdXJjZU9iamVjdCh0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IEpTT04uc3RyaW5naWZ5KHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICAgICAgU2VyaWFsaXplci51bnRvdWNoU291cmNlT2JqZWN0KHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZXJpYWxpemVzIGFuIG9iamVjdCB0byAuLi4gYSBuZXcgb2JqZWN0LiBUaGUgc2VyaWFsaXplZCBvYmplY3Qgd2lsbCBoYXZlIFNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIERhdGVzLCBudWxsIGFuZCBSZWdFeHAgdmFsdWUsIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIHR5cGVzLlxyXG4gICAgICAgICAqIFRoZSBzZXJpYWxpemVkIG9iamVjdCB3aWxsIGhhdmUgb25seSBkYXRhIGFuZCBubyBtZXRob2RzIGZvciBub24gbmF0aXZlIG9iamVjdHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVUb09iamVjdCh0b1NlcmlhbGl6ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gU2VyaWFsaXplcjtcclxuICAgICAgICAgICAgdmFyIHNvdXJjZUFzU3RyaW5nID0gc1RoaXMuc2VyaWFsaXplKHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gSlNPTi5wYXJzZShzb3VyY2VBc1N0cmluZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcmVwcm9jZXNzIHRoZSBvYmplY3QgdHJlZSB0byBiZSBzZXJpYWxpemVkIHRvIGZpbmQgYW5kIHJlcGxhY2UgRGF0ZSwgbnVsbCwgUmVnRXhwLCAuLi4gb2JqZWN0cyB3aXRoIHNvbWV0aGluZyBkaWZmZXJlbnQuLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VEYXRlID0gbmV3IFNlcmlhbGl6YWJsZURhdGUoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlRGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0Zha2VOdWxsID0gbmV3IFNlcmlhbGl6YWJsZU51bGwoKTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VOdWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZVJlZ0V4cCA9IG5ldyBTZXJpYWxpemFibGVSZWdFeHAoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBuZXdGYWtlUmVnRXhwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB0b3VjaFNvdXJjZU9iamVjdChzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNvdXJjZU9iamVjdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFUb3VjaC5oYXNCZWVuVG91Y2hlZChzb3VyY2VPYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBUb3VjaC50b3VjaChzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzVGhpcy50b3VjaFNvdXJjZU9iamVjdChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc291cmNlT2JqZWN0W2lkeF0gPSBzVGhpcy5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdW50b3VjaFNvdXJjZU9iamVjdChzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNvdXJjZU9iamVjdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKFRvdWNoLmhhc0JlZW5Ub3VjaGVkKHNvdXJjZU9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIFRvdWNoLnVudG91Y2goc291cmNlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc1RoaXMudW50b3VjaFNvdXJjZU9iamVjdChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc291cmNlT2JqZWN0W2lkeF0gPSBzVGhpcy5wcmVwcm9jZXNzRm9yU2VyaWFsaXphYmxlc1N1YnN0aXR1dGlvbihjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUG9zdHByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBTZXJpYWxpemFibGVEYXRlL1JlZ0V4cCBvYmplY3RzIHdpdGggT3JpZ2luYWwgdHlwZXMgYWdhaW4uLi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbihzb3VyY2VPYmplY3Q6IGFueSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHNvdXJjZU9iamVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSAoPFNlcmlhbGl6YWJsZURhdGU+Y3VycmVudCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVOdWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTZXJpYWxpemFibGVSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlUmVnRXhwPmN1cnJlbnQpLmdldFJlZ0V4cCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlT2JqZWN0W2lkeF0gPSBTZXJpYWxpemVyLnBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2VPYmplY3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuLyoqXHJcbiAqIERlZmluZXMgZGVmYXVsdCBiZWhhdmlvciBhbmQgaW50ZXJmYWNlcyBmb3IgYSBQZXJzaXN0YWJsZSBPYmplY3QsIGFuIG9iamVjdCB0aGF0IGhhcyBhIHN0YXRlIHRoYXQgd2lsbCBwcm9iYWJseSBiZSBwZXJzaXN0ZWQuIEl0IGdpdmVzIHN1cHBvcnQgdG8gXCJ1cGdyYWRlXCIgcGVyc2lzdGVkIG9iamVjdHMuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cdFxyXG5cdGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIElQZXJzaXN0YWJsZSBleHRlbmRzIElUeXBlVHJhY2tpbmcge1xyXG5cdFx0Z2V0VXBncmFkZWRJbnN0YW5jZT8oZnJvbUluc3RhbmNlOiBJUGVyc2lzdGFibGUpOiBJUGVyc2lzdGFibGU7XHJcblx0XHRnZXRTdGF0ZSgpOiBJVHlwZVRyYWNraW5nO1xyXG5cdFx0c2V0U3RhdGUoc3RhdGU6IElUeXBlVHJhY2tpbmcpO1xyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50c1wiIC8+XHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG4gICAgXHJcbiAgICBpbXBvcnQgQmFzZUVycm9ycyA9IEVycm9yTWFuYWdlbWVudC5CYXNlRXJyb3JzO1xyXG4gICAgXHJcbiAgICBleHBvcnQgY2xhc3MgRXJyb3JzIGV4dGVuZHMgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSBwZXJzaXN0YWJsZSBvYmplY3RzXHJcbiAgICAgICAgc3RhdGljIFN0YXRlSXNOb3RBbk9iamVjdCA9IFwiU3RhdGUgaXMgbm90IGFuIE9iamVjdFwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlTmFtZU5vdFNldCA9IFwiVHlwZU5hbWUgbm90IHNldFwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlVmVyc2lvbk5vdFNldCA9IFwiVHlwZVZlcnNpb24gbm90IHNldFwiO1xyXG4gICAgICAgIHN0YXRpYyBVbmFibGVUb0luc3RhbnRpYXRlVHlwZSA9IFwiVW5hYmxlIHRvIEluc3RhbnRpYXRlIFR5cGVcIjtcclxuICAgICAgICBzdGF0aWMgVHlwZVJlZ2lzdHJ5Tm90U2V0ID0gXCJUeXBlUmVnaXN0cnkgbm90IHNldFwiO1xyXG5cclxuICAgICAgICAvLyBUaHJvd24gYnkgdGhlIEZhY3RvcnkvVHlwZVJlZ2lzdHJ5XHJcbiAgICAgICAgc3RhdGljIFR5cGVOb3RSZWdpc3RlcmVkID0gXCJUeXBlIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhlIFR5cGVSZWdpc3RyeVwiO1xyXG4gICAgICAgIHN0YXRpYyBDYW5ub3RSZWdpc3RlclVuZGVmaW5lZCA9IFwidHlwZVByb3RvdHlwZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIlxyXG5cclxuICAgICAgICAvLyBUaHJvd24gYnkgdGhlIFVwZ3JhZGVyXHJcbiAgICAgICAgc3RhdGljIFR5cGVOb3RJbnN0YXRpYWJsZSA9IFwiVHlwZSBpcyBub3QgaW5zdGFudGlhYmxlXCI7XHJcbiAgICAgICAgc3RhdGljIFVwZ3JhZGVQYXRoTm90Rm91bmQgPSBcIlVwZ3JhZGUgUGF0aCBub3QgRm91bmRcIjtcclxuICAgICAgICBzdGF0aWMgSW5jb3JyZWN0VmVyc2lvbkZvcm1hdCA9IFwiSW5jb3JyZWN0IFZlcnNpb24gRm9ybWF0XCI7XHJcbiAgICAgICAgc3RhdGljIFdyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSA9IFwiV3JvbmcgVmVyc2lvbiBpbiBVcGdyYWRlZCBJbnN0YW5jZVwiO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGUudHNcIiAvPlxyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFZhbHVlT2JqZWN0IHBhdHRlcm4uXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgSUVxdWF0YWJsZSA9IENvbW1vbkludGVyZmFjZXMuSUVxdWF0YWJsZTtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElWYWx1ZU9iamVjdDxUPiBleHRlbmRzIElFcXVhdGFibGU8VD4sIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0lWYWx1ZU9iamVjdFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG4gICAgaW1wb3J0IElWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LklWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElLZXlWYWx1ZU9iamVjdDxUPiBleHRlbmRzIElWYWx1ZU9iamVjdDxUPiB7XHJcbiAgICAgICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0ZhY3Rvcnl9IGZyb20gXCIuL0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbi8vIGltcG9ydCB7RGVzZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgRGVzZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCBpbXBsZW1lbnRzIElQZXJzaXN0YWJsZSB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0U3RhdGUoKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX190eXBlTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTmFtZU5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZVZlcnNpb25Ob3RTZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9SZWNvbnN0aXR1dGUgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZSh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHJlY29uc3RpdHV0ZWQgPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUodG9SZWNvbnN0aXR1dGUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlY29uc3RpdHV0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHNldFN0YXRlPFRTdGF0ZT4oc3RhdGU6IFRTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuU3RhdGVJc05vdEFuT2JqZWN0LCBcInN0YXRlIGRldmUgZXNzZXJlIHVuIG9nZ2V0dG9cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGVFbGVtZW50ID0gc3RhdGVbZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICB0aGlzW2VsZW1lbnRdID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKGN1cnJlbnRTdGF0ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggSlNPTi5zdHJpbmdpZnkoIHRoaXMuZ2V0U3RhdGUoKSApICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JVmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJVmFsdWVPYmplY3R9IGZyb20gXCIuL0lWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG5cdGltcG9ydCBCYXNlUGVyc2lzdGFibGVPYmplY3QgPSBQZXJzaXN0YWJsZU9iamVjdC5CYXNlUGVyc2lzdGFibGVPYmplY3Q7XHJcblx0aW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcblxyXG5cdGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVmFsdWVPYmplY3Q8VD5cclxuXHRcdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0XHRpbXBsZW1lbnRzIElWYWx1ZU9iamVjdDxUPiB7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdHN1cGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbiB7XHJcblx0XHRcdC8vIFBlciBvZ25pIHByb3ByaWV0w6AgZGVsbCdJVEVNIDp2ZXJpZmljbyBsJ3VndWFnbGlhbnphIGNvbiBsJ2lzdGFuemEgYXR0dWFsZSBcdFx0XHRcclxuXHRcdFx0cmV0dXJuIF8uaXNFcXVhbChpdGVtLCB0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEZpbmRzIHRoaXMgdmFsdWUgb2JqZWN0IGluIGFuIGFycmF5LiBXaWxsIHJldHVybiBhbiBhcnJheSBvZiBpbmRleGVzIG1hdGNoaW5nIHRoZSBzZWFyY2hlZCBvYmplY3QuXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyBmaW5kSW5BcnJheShjb2xsZWN0aW9uOiBUW10pOiBzdHJpbmdbXSB7XHJcblx0XHRcdHZhciB0b1JldHVybjogc3RyaW5nW10gPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBlbGVtZW50IGluIGNvbGxlY3Rpb24pe1xyXG5cdFx0XHRcdGlmICh0aGlzLmVxdWFscyhjb2xsZWN0aW9uW2VsZW1lbnRdKSkge1xyXG5cdFx0XHRcdFx0dG9SZXR1cm4ucHVzaChlbGVtZW50KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdG9SZXR1cm47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiBnZW5lcmFsIGFuZCBjb21tb25seSB1c2VkIFZhbHVlT2JqZWN0cy4gXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3RzIHtcclxuXHJcbiAgICBpbXBvcnQgU2ltcGxlR3VpZCA9IFV0aWxzLlNpbXBsZUd1aWQ7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEd1aWQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8R3VpZD4gaW1wbGVtZW50cyBJS2V5VmFsdWVPYmplY3Q8R3VpZD4ge1xyXG5cclxuICAgICAgICBwdWJsaWMgX190eXBlTmFtZSA9IFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIjtcclxuICAgICAgICBwdWJsaWMgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBndWlkOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGd1aWQ/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChndWlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWQgPSBndWlkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWQgPSBTaW1wbGVHdWlkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogR3VpZCB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3VpZChTaW1wbGVHdWlkLmdlbmVyYXRlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVmFsdWVPYmplY3RzIHVzZWQgYXMga2V5IE1VU1QgaW1wbGVtZW50IGEgdG9TdHJpbmcgbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUga2V5IGFzIHN0cmluZy5cclxuICAgICAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmd1aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0cy9HdWlkLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge1R5cGVSZWdpc3RyeX0gZnJvbSBcIi4vVHlwZVJlZ2lzdHJ5XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3Qge1xyXG5cclxuICAgIGltcG9ydCBHdWlkID0gREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnkgaXMgYW4gaGVscGVyIGNsYXNzIHRvIGNyZWF0ZSBhbmQgcmVjb25zdGl0dXRlIHN0YXRmZXVsIG9iamVjdHMuXHJcbiAgICAgKiBJdCBndXJhbnRlZXMgdGhhdCBhIHN0YXRmdWwgb2JqZWN0IGlzIGFsd2F5cyBjcmVhdGVkIG9yIHJlY29uc3RpdHV0ZWQgdG8gaXRzIGxhdGVzdCB2ZXJzaW9uLiAgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdHlwZVJlZ2lzdHJ5OiBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZ2lzdGVycyBhIG5ldyBJUGVyc2lzdGFibGUgdHlwZSB3aXRoIHRoZSBGYWN0b3J5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogbmV3ICguLi5hcmdzKSA9PiBJUGVyc2lzdGFibGUpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRmFjdG9yeTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy50eXBlUmVnaXN0cnkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLnR5cGVSZWdpc3RyeSA9IG5ldyBUeXBlUmVnaXN0cnkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFR5cGVSZWdpc3RyeS5yZWdpc3RlclR5cGUodHlwZU5hbWUsIHR5cGVWZXJzaW9uLCB0eXBlUHJvdG90eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHNwZWNpZmllZCB0eXBlLiBJZiB0eXBlVmVyc2lvbiBpcyBub3Qgc3VwcGxpZWQsIGxhdGVzdCBhdmFpbGFibGUgdmVyc2lvbiBpcyByZXR1cm5lZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZyk6IFQge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGYWN0b3J5LnR5cGVSZWdpc3RyeSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGVWZXJzaW9uTWVzc2FnZSA9IHR5cGVWZXJzaW9uID8gXCIgdmVyc2lvbiAnXCIgKyB0eXBlVmVyc2lvbiArIFwiJ1wiIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZVJlZ2lzdHJ5Tm90U2V0LCBcIlBsZWFzZSByZWdpc3RlciBhdCBsZWFzdCBhIHR5cGUgd2l0aCB0aGUgRmFjdG9yeSBmb3IgdGhlIHR5cGUgJ1wiICsgdHlwZU5hbWUgKyBcIidcIiArIHR5cGVWZXJzaW9uTWVzc2FnZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gVHlwZVJlZ2lzdHJ5LmdldFR5cGVJbnN0YW5jZTxUPih0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgdHlwZVRvSW5zdGF0aWF0ZSA9IEZhY3RvcnkuY29tcHV0ZUZ1bGx5UXVhbGlmaWVkVHlwZU5hbWUodHlwZU5hbWUsIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZVRvSW5zdGF0aWF0ZSArIFwiKClcIik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIFRoaXMgZmFpbHVyZSBpcyBleHBlY3RlZCBpZiB3ZSBhcmUgYXNraW5nIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmICh0b1JldHVybi5fX3R5cGVWZXJzaW9uICE9IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIHR5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgIHRvUmV0dXJuID0gPFQ+ZXZhbChcIm5ldyBcIiArIHR5cGVOYW1lICsgXCIoKVwiKTtcclxuICAgICAgICAgICAgLy8gfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJVbmFibGUgdG8gY3JlYXRlIGluc3RhbmNlIG9mIFwiICsgdHlwZU5hbWUgKyBcIiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBvYmplY3QgaW5zdGFuY2UgZnJvbSBpdHMgc3RhdGUuIFdpbGwgYWx3YXlzIHJldHVybiB0aGUgbGF0ZXN0IHZlcnNpb24gcG9zc2libGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZShzdGF0ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICd1bmRlZmluZWQnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcInN0YXRlIGNhbm5vdCBiZSAnbnVsbCdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTWFuYWdlcyB0aGUgXCJzcGVjaWFsXCIgdHlwZXMgRGF0ZSBhbmQgUmVnRXhwLlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBEYXRlIHx8IHN0YXRlIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoRmFjdG9yeS5pc1BlcnNpc3RhYmxlT2JqZWN0KHN0YXRlKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGVyc2lzdGFibGU6IElQZXJzaXN0YWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGFibGUgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShzdGF0ZS5fX3R5cGVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0YWJsZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3YXJyYW50aWVzIHRoYXQgYSB0eXBlIGlzIGFsd2F5cyByZXR1cm5lZCBhdCBpdHMgbGF0ZXN0IHZlcnNpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZ3JhZGVkUGVyc2lzdGFibGUgPSBVcGdyYWRlci51cGdyYWRlKHBlcnNpc3RhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBncmFkZWRQZXJzaXN0YWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIElmIGl0IGlzIG5vdCBhIHBlcnNpc3RhYmxlT2JqZWN0IGNhbiBiZSBhbiBBcnJheSBvciBhbiBPYmplY3QgYW5kIG11c3QgYmUgcmVjb25zdGl0dXRlZFxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBhbnkgPSBBcnJheS5pc0FycmF5KHN0YXRlKSA/IFtdIDoge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjdXJyZW50RWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aGlzRWxlbWVudCA9IHN0YXRlW2N1cnJlbnRFbGVtZW50XTtcclxuICAgICAgICAgICAgICAgICAgICB0b1JldHVybltjdXJyZW50RWxlbWVudF0gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpc0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFwiUHJpbWl0aXZlXCJcIiB0eXBlcyBhcmUgcmV0dXJuZWQgYXMgdGhleSBhcmVcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGFuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBcIklQZXJzaXN0YWJsZVwiIGludGVyZmFjZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1BlcnNpc3RhYmxlT2JqZWN0KG9iamVjdFRvVGVzdDogYW55KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdFRvVGVzdCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBlcnNpc3RhYmxlID0gPElQZXJzaXN0YWJsZT5vYmplY3RUb1Rlc3Q7XHJcbiAgICAgICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlTmFtZSB8fCBwZXJzaXN0YWJsZS5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcGVyc2lzdGFibGUuX190eXBlVmVyc2lvbiB8fCBwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGEgdHlwZSBjYW4gYmUgaW5zdGF0aWF0ZWQgKGF0IGl0cyBsYXRlc3QgdmVyc2lvbikuIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzVHlwZUluc3RhbnRpYWJsZSh0eXBlTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wVHlwZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBVcGdyYWRlciBpcyBhbiBoZWxwZXIgY2xhc3MgdG8gYXV0b21hdGUgdGhlIFwidXBncmFkZSBwcm9jZXNzXCIgb2YgYW4gb2JqZWN0J3Mgc3RhdGUuXHJcbiAgICAgKiBUaGUgVXBncmFkZXIgaXMgZm91bmQgb24gdGhlc2UgcHJpbmNpcGxlczpcclxuICAgICAqICAqIFRoZSBsYXRlc3QgdmVyc2lvbiBGUVROIG11c3QgbWF0Y2ggdGhlIG9uZSBzcGVjaWZpZWQgYnkgdGhlIHByb3BlcnR5IF9fdHlwZU5hbWUsIHdoaWNoIGlzIGluIHRoZSBmb3JtIG5hbWVzcGFjZS5vYmplY3ROYW1lLlxyXG4gICAgICogICogT2xkZXIgdmVyc2lvbnMgb2YgYSBQZXJzaXN0YWJsZU9iamVjdCBNVVNUIGhhdmUgYSBGUVROIGluIHRoZSBmb3JtIG5hbWVzcGFjZS48dmVyc2lvbj4ub2JqZWN0TmFtZS5cclxuICAgICAqICAqIF9fdHlwZVZlcnNpb24gTVVTVCBiZSBzcGVjaWZpZWQgYXMgdjx2ZXJzaW9uTnVtYmVyPiB3aGVyZSB2ZXJzaW9uIGlzIGFuIGludGVnZXIuXHJcbiAgICAgKiAgKiBBbGwgb2JqZWN0J3MgdmVyc2lvbnMgKGV4Y2x1ZGluZyB2MSkgTVVTVCBwcm92aWRlIGFuIGdldFVwZ3JhZGVkSW5zdGFuY2UgbWV0aG9kIHRoYXQga25vd3MgaG93IHRvIG1vZGlmeSBzdGF0ZSB0byBnbyBmcm9tIFxyXG4gICAgICogICAgdmVyc2lvbiB2PG4gLSAxPiB0byB2PG4+LCB3aGVyZSBuIGlzIHRoZSB2ZXJzaW9uIG9mIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QuICAgXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBVcGdyYWRlciB7XHJcblxyXG4gICAgICAgIC8vIENvbnRhaW5zIHRoZSBsYXRlc3QgdmVyc2lvbiBwb3NzaWJsZSBmb3IgZWFjaCB0eXBlLiBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsYXRlc3RUeXBlVmVyc2lvbk1hcDogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgLy8gQ29udGFpbnMgZmxhZ3MgdG8gZGV0ZXJtaW5lIGlmIGxhdHN0VHlwZVZlcnNpb25NYXAgZm9yIGEgc3BlY2lmaWMgdHlwZSBoYXMgYmVlbiBjYWxjdWxhdGVkXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNWZXJzaW9uTWFwQnVpbHQ6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmIChVcGdyYWRlci5pc1ZlcnNpb25NYXBCdWlsdFt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRtcEluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgVXBncmFkZXIubGF0ZXN0VHlwZVZlcnNpb25NYXBbdHlwZU5hbWVdID0gdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24gZm9yIFwiICsgdHlwZU5hbWUgKyBcIiBpcyBcIiArIHRtcEluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RJbnN0YXRpYWJsZSwgXCJUaGUgdHlwZSBcIiArIHR5cGVOYW1lICsgXCIgY2Fubm90IGJlIGluc3RhbnRpYXRlZCwgc28gaXQgaXMgaW1wb3NzaWJsZSB0byBpZGVudGlmeSB0aGUgbGF0ZXN0IHBvc3NpYmxlIHZlcnNpb24uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAvLyBMb29rcyBmb3IgdGhlIGxhdGVzdCB2ZXJzaW9uLCBpZiBub3QgYWxyZWFkeSBkb25lLlxyXG4gICAgICAgICAgICBpZiAoIVVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgVXBncmFkZXIuYnVpbGRWZXJzaW9uTWFwRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gc3VwcGxpZWQgZG9lc24ndCBtYXRjaCB0aGUgbGF0ZXN0IHZlcnNpb24gaW4gdGhlIG1hcCwgdGhlIGluc3RhbmNlIG11c3QgYmUgdXBncmFkZWQuXHJcbiAgICAgICAgICAgIGlmIChVcGdyYWRlci5sYXRlc3RUeXBlVmVyc2lvbk1hcFt0eXBlTmFtZV0gIT09IHR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVwZ3JhZGUoaW5zdGFuY2VGcm9tOiBJUGVyc2lzdGFibGUpOiBJUGVyc2lzdGFibGUge1xyXG4gICAgICAgICAgICAvLyBJZiBvYmplY3QgZG9lc24ndCBuZWVkIHRvIHVwZ3JhZGUsIHRoZW4gd2UgYXJlIGRvbmUhXHJcbiAgICAgICAgICAgIGlmICghVXBncmFkZXIuaXNMYXRlc3RWZXJzaW9uRm9yVHlwZShpbnN0YW5jZUZyb20uX190eXBlTmFtZSwgaW5zdGFuY2VGcm9tLl9fdHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VGcm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFVwZ3JhZGVyLmNvbXB1dGVOZXh0VmVyc2lvbihpbnN0YW5jZUZyb20uX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIHZhciB1cGdyYWRlckluc3RhbmNlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UoaW5zdGFuY2VGcm9tLl9fdHlwZU5hbWUsIG5leHRWZXJzaW9uKTtcclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVkID0gdXBncmFkZXJJbnN0YW5jZS5nZXRVcGdyYWRlZEluc3RhbmNlKGluc3RhbmNlRnJvbSk7XHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWVzIHRoYXQgdmVyc2lvbiBpcyBlZmZlY3RpdmVseSB1cGdyYWRlZFxyXG4gICAgICAgICAgICBpZiAodXBncmFkZWQuX190eXBlVmVyc2lvbiAhPSBuZXh0VmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5Xcm9uZ1ZlcnNpb25JblVwZ3JhZGVkSW5zdGFuY2UsIFwiVGhlIGV4cGVjdGVkIHZlcnNpb24gb2YgdGhlIHVwZ3JhZGVkIGluc3RhbmNlIHdhcyBcIiArIG5leHRWZXJzaW9uICsgXCIgd2hpbGUgd2FzIGZvdW5kIHRvIGJlIFwiICsgdXBncmFkZXJJbnN0YW5jZS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gVXBncmFkZXIudXBncmFkZSh1cGdyYWRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVOZXh0VmVyc2lvbih0eXBlVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXZlcnNpb25SZS50ZXN0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0cnk6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiB7IFt0eXBlVmVyc2lvbjogc3RyaW5nXTogbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gSVBlcnNpc3RhYmxlIH0gfSA9IHt9O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxhdGVzdFZlcnNpb25zOiB7IFt0eXBlTmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGNvbW1vblR5cGVzUmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nLCB0eXBlUHJvdG90eXBlOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBJUGVyc2lzdGFibGUpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXR5cGVQcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuQ2Fubm90UmVnaXN0ZXJVbmRlZmluZWQsIFwidHlwZVByb3RvdHlwZSBzdXBwbGllZCBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBudWxsIG9yIHVuZGVmaW5lZCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMudmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0gPSB0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSB8fCB7fTtcclxuICAgICAgICAgICAgc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSA9IHR5cGVQcm90b3R5cGU7XHJcblxyXG4gICAgICAgICAgICBzVGhpcy51cGRhdGVMYXRlc3RWZXJzaW9ucyh0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICAvLyBSZWdpc3RlcnMgdGhlIHR5cGVzIGluIFZhbHVlT2JqZWN0cyBvbiBmaXJzdCB1c2UuLi4gXHJcbiAgICAgICAgICAgIC8vIFRPRE8gZmluZCBhIHdheSB0byBkZWxlZ2F0ZSB0eXBlIHJlZ2lzdHJhdGlvbiB0byB0aGUgT2JqZWN0cyBpbiB0aGUgY29sbGVjdGlvbiwgW3ZpYSBwc2V1ZG8gcmVmbGVjdGlvbiA/XVwiXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMuY29tbW9uVHlwZXNSZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5jb21tb25UeXBlc1JlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZShcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCIsIFwidjFcIiwgR3VpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZSA9IHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmlzVmVyc2lvbkdyZWF0ZXIodHlwZVZlcnNpb24sIHJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmxhdGVzdFZlcnNpb25zW3R5cGVOYW1lXSA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25HcmVhdGVyKHZTdWJqZWN0OiBzdHJpbmcsIHZSZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2UzogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlN1YmplY3QpO1xyXG4gICAgICAgICAgICB2YXIgdlI6IG51bWJlciA9IHNUaGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZSZWZlcmVuY2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdlMgPiB2UjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGV4dHJhY3RWZXJzaW9uTnVtYmVyKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uOiBzdHJpbmcgPSB0eXBlVmVyc2lvbi5yZXBsYWNlKFwidlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgdmFyIGFzTnVtYmVyID0gTnVtYmVyKHZlcnNpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYXNOdW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldFR5cGVJbnN0YW5jZTxUIGV4dGVuZHMgSVBlcnNpc3RhYmxlPih0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbj86IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIGlmICghdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIHR5cGVWZXJzaW9uID0gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJWZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBvZiBUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9JbnN0YW50aWF0ZSA9IHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl07XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0b1JldHVybiA9IDxUPihuZXcgKDxhbnk+dG9JbnN0YW50aWF0ZSkoKSk7XHJcbiAgICAgICAgICAgICAgICAvL3RvUmV0dXJuLl9fdHlwZU5hbWUgPSB0eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgIC8vdG9SZXR1cm4uX190eXBlVmVyc2lvbiA9IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIGlmIHNwZWNpZmllZCB2ZXJzaW9uIGlzIHRoZSBsYXRlc3QgZm9yIHR5cGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpc0xhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpID09PSB0eXBlVmVyc2lvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGUgbm8gdmVyc2lvbiB0eXBlIGlzIGRlZmluZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldExhdGVzdFZlcnNpb25Gb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIC8vIFZlcnNpb24gbXVzdCBiZSBpbiB0aGUgZm9ybSB2TiB3aGVyZSB2IGlzIGEgY29uc3RhbnQgYW5kIE4gaXMgYW4gaW50ZWdlci5cclxuICAgICAgICAgICAgdmFyIHZlcnNpb25SZSA9IG5ldyBSZWdFeHAoXCJedlswLTldK1wiKTtcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy52ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFRocm93IHRoZSBjb3JyZWN0IGV4Y2VwdGlvbjtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5JbmNvcnJlY3RWZXJzaW9uRm9ybWF0LCBcIlNwZWNpZmllZCB2ZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBpcyBpbiBpbmNvcnJlY3QgZm9ybWF0LiBNdXN0IGJlIGluIHRoZSBmb3JtIHY8bj4gd2hlcmUgbiBpcyBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiArIDE7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmVyc2lvbiA9IFwidlwiICsgdmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuU3RhdGVNYWNoaW5lIHtcclxuICAgIFxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU3RhdGVNYWNoaW5lPFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGVudW0gb3Igc3RyaW5nIGxpdGVyYWwgcmVwcmVzZW50aW5nIHRoZSBwb3NzaWJsZSBzdGF0dXNlcyBvZiB0aGUgbWFjaGluZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFRTdGF0dXNlcywgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZW51bSBvciBzdHJpbmcgbGl0ZXJhbCByZXByZXNlbnRpbmcgdGhlIHBvc3NpYmxlIGV2ZW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFRFdmVudHNcclxuICAgID4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGlzRXZlbnRWYWxpZCByZXR1cm5zIGZhbHNlLCBvdGhlcndpc2UgaXQgd2lsbCBhZHZhbmNlIHRoZSBtYWNoaW5lIHRvIHRoZSBuZXh0IHN0YXR1cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm9jZXNzRXZlbnQoZXZlbnQ6IFRFdmVudHMpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGV2ZW50IGlzIHZhbGlkIGZvciB0aGUgY3VycmVudCBzdGF0dXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNFdmVudFZhbGlkRm9yQ3VycmVudFN0YXR1cyhldmVudDogVEV2ZW50cyk6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtYWNoaW5lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0Q3VycmVudFN0YXR1cygpOiBUU3RhdHVzZXM7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHByZXZpb3VzIHN0YXR1cyBvZiB0aGUgbWFjaGluZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFByZXZpb3VzU3RhdHVzKCk6IFRTdGF0dXNlcztcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUm9sZSBpbnRlcmZhY2UgdG8gaWRlbnRpZnkgYSBEb21haW4gRXZlbnRcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRG9tYWluRXZlbnQgZXh0ZW5kcyBJUGVyc2lzdGFibGUsIElUeXBlVHJhY2tpbmcge1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcm0gb2YgYW4gRXZlbnQgSGFuZGxlci5cclxuICAgICAqIFdoZW4gYXN5bmNyb25vdXMgcHJvY2Vzc2luZyBvY2NvdXIgd2l0aGluIGFuIEhhbmRsZXIsIGl0IGlzIGdvb2QgcHJhY3RpY2UgdG8gcmV0dXJuIGEgcHJvbWlzZSwgc28gdGhlIGRpc3BhdGNoZXIgKGFuZCB0aGUgZXZlbnQgcmFpc2VyKVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElFdmVudEhhbmRsZXIge1xyXG4gICAgICAgIChkb21haW5FdmVudDogSURvbWFpbkV2ZW50KTogSVByb21pc2U8YW55PiB8IHZvaWQ7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEaXNwYXRjaGVyIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgYW4gZXZlbnQgdHlwZS5cclxuICAgICAgICAgKiB0aGUgc2NvcGUgcGFyYW1ldGVyIGlzIHRoZSBjb250ZXh0ICh0aGlzKSBpbiB3aGljaCB0aGUgaGFuZGxlciB3aWxsIGJlIGV4ZWN1dGVkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlciwgc2NvcGU/OiBhbnkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB1bnJlZ2lzdGVyIGEgcHJldmlvdWxzeSByZWdpc3RlcmVkIGhhbmRsZXIgZm9yIGFuIGV2ZW50IHR5cGUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZGlzcGF0Y2hlcyBhbiBldmVudCB0byB0aGUgcmVnaXN0ZXJlZCBoYW5kbGVycy5cclxuICAgICAgICAgKiBpdCB3aWxsIHJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHdoZW4gYWxsIHByb21pc2VzIHdpbGwgYmUgcmVzb2x2ZWQsIGFuZCByZWplY3RlZCBpZiBhbnkgd2lsbCBiZSByZWplY3RlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KTogSVByb21pc2U8YW55PjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJU3RhdGVNYWNoaW5lLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURpc3BhdGNoZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuU3RhdGVNYWNoaW5lIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVBlcnNpc3RhYmxlT2JqZWN0ID0gREREVG9vbHMuUGVyc2lzdGFibGVPYmplY3QuQmFzZVBlcnNpc3RhYmxlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERERFRvb2xzLkRvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBERERUb29scy5Qcm9taXNlcy5JUHJvbWlzZTtcclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IERERFRvb2xzLlByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBIYW5kbGVyUmVzdWx0IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyBva1RvQ2hhbmdlPzogYm9vbGVhbixcclxuICAgICAgICAgICAgcHVibGljIHJlYXNvbj86IHN0cmluZ1xyXG4gICAgICAgICkgeyB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXRlTWFjaGluZUV2ZW50PFRTdGF0dXNlcywgVEV2ZW50cz4gZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3QgaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIlN0YXRlTWFjaGluZUV2ZW50XCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY3VycmVudFN0YXR1czogVFN0YXR1c2VzO1xyXG4gICAgICAgIHByZXZpb3VzU3RhdHVzOiBUU3RhdHVzZXM7XHJcbiAgICAgICAgZGVzdGluYXRpb25TdGF0dXM6IFRTdGF0dXNlcztcclxuICAgICAgICBwcm9jZXNzaW5nRXZlbnQ6IFRFdmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IHR5cGUgRXZlbnRIYW5kbGVyPFRTdGF0dXNlcywgVEV2ZW50cz4gPSAoZXZlbnQ6IFN0YXRlTWFjaGluZUV2ZW50PFRTdGF0dXNlcywgVEV2ZW50cz4pID0+IElQcm9taXNlPEhhbmRsZXJSZXN1bHQ+O1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIEtpbmRzT2ZFdmVudEhhbmRsZXIge1xyXG4gICAgICAgIGJlZm9yZUVudGVyU3RhdHVzLFxyXG4gICAgICAgIGFmdGVyRW50ZXJTdGF0dXMsXHJcbiAgICAgICAgYmVmb3JlRXhpdFN0YXR1cyxcclxuICAgICAgICBhZnRlckV4aXRTdGF0dXMsXHJcbiAgICAgICAgb25TdWNjZXNmdWxFdmVudFByb2Nlc3NlZFxyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJVG91Y2hhYmxlRXZlbnRIYW5kbGVyIHtcclxuICAgICAgICBfX19oYW5kbGVzRXZlbnQ6IEtpbmRzT2ZFdmVudEhhbmRsZXJbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSGFuZGxlckNvbGxlY3Rpb248VFN0YXR1c2VzLCBURXZlbnRzPiBleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkhhbmRsZXJDb2xsZWN0aW9uXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYW5kbGVyczogRXZlbnRIYW5kbGVyPFRTdGF0dXNlcywgVEV2ZW50cz5bXSA9IFtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUU3RhdHVzZXMsIFRFdmVudHM+LCBldmVudFR5cGU6IEtpbmRzT2ZFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0FscmVhZHlCZWVuUmVnaXN0ZXJlZChoYW5kbGVyLCBldmVudFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoSGFuZGxlcihoYW5kbGVyLCBldmVudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcnVuSGFuZGxlcnMoZXZlbnQ6IFN0YXRlTWFjaGluZUV2ZW50PFRTdGF0dXNlcywgVEV2ZW50cz4pOiBJUHJvbWlzZTxIYW5kbGVyUmVzdWx0PiB7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlczogSVByb21pc2U8YW55PltdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlOiBJUHJvbWlzZTxhbnk+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBuZXcgSGFuZGxlclJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5va1RvQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnJlYXNvbiA9IEpTT04uc3RyaW5naWZ5KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlSGFuZGxlci5yZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci5hbGwocHJvbWlzZXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1JldHVybiA9IG5ldyBIYW5kbGVyUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuLm9rVG9DaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuLnJlYXNvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgb2YgcmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXAub2tUb0NoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9SZXR1cm4ub2tUb0NoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9SZXR1cm4ucmVhc29uICs9IHAucmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQWxyZWFkeUJlZW5SZWdpc3RlcmVkKGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUU3RhdHVzZXMsIFRFdmVudHM+LCBldmVudFR5cGU6IEtpbmRzT2ZFdmVudEhhbmRsZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhc1RvdWNoYWJsZTogSVRvdWNoYWJsZUV2ZW50SGFuZGxlciA9IDxJVG91Y2hhYmxlRXZlbnRIYW5kbGVyPig8YW55PmhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFscmVhZHlSZWdpc3RlcmVkRm9yVGhpc0V2ZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gYXNUb3VjaGFibGUuX19faGFuZGxlc0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnRbaWR4XTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWRGb3JUaGlzRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWxyZWFkeVJlZ2lzdGVyZWRGb3JUaGlzRXZlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRvdWNoSGFuZGxlcihoYW5kbGVyOiBFdmVudEhhbmRsZXI8VFN0YXR1c2VzLCBURXZlbnRzPiwgZXZlbnRUeXBlOiBLaW5kc09mRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBhc1RvdWNoYWJsZTogSVRvdWNoYWJsZUV2ZW50SGFuZGxlciA9IDxJVG91Y2hhYmxlRXZlbnRIYW5kbGVyPig8YW55PmhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGFzVG91Y2hhYmxlLl9fX2hhbmRsZXNFdmVudCA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0FscmVhZHlCZWVuUmVnaXN0ZXJlZChoYW5kbGVyLCBldmVudFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnQucHVzaChldmVudFR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBsZWFzZSwgcmVtZW1iZXIgdG8gc2V0IF9fdHlwZU5hbWUgYW5kIF9fdHlwZVZlcnNpb24gaW4geW91ciBkZXJpdmVkIHR5cGVzICFcclxuICAgICAqIF9fdHlwZU5hbWUgYW5kIF9fdHlwZVZlcnNpb24gc2hvdWxkIGJlIHNldCBvbiB0aGUgY29uc3RydWN0b3IgdG9vLCBidXQgdGhpcyBtZWFuIGNoYW5naW5nIGEgbG90IG9mIHRoaW5ncy5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEJhc2VTdGF0ZU1hY2hpbmU8VFN0YXR1c2VzLCBURXZlbnRzPiBleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCBpbXBsZW1lbnRzIElTdGF0ZU1hY2hpbmU8VFN0YXR1c2VzLCBURXZlbnRzPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY3VycmVudFN0YXR1czogVFN0YXR1c2VzID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIHByZXZpb3VzU3RhdHVzOiBUU3RhdHVzZXMgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgYmVmb3JlRW50ZXJTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgIHByaXZhdGUgYWZ0ZXJFbnRlclN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgcHJpdmF0ZSBiZWZvcmVFeGl0U3RhdHVzSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICBwcml2YXRlIGFmdGVyRXhpdFN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgcHJpdmF0ZSBvblN1Y2Nlc2Z1bEV2ZW50UHJvY2Vzc2VkSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdGlhbFN0YXR1czogVFN0YXR1c2VzLFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgc3RhdGVNYWNoaW5lRGVmaW5pdGlvbjogeyBbZXZlbnQ6IHN0cmluZ106IHsgW2Zyb21TdGF0dXM6IHN0cmluZ106IFRTdGF0dXNlcyB9IH1cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdHVzID0gaW5pdGlhbFN0YXR1cztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFRoZSBjb21wb25lbnRzIHJlZ2lzdHJhdGlvbiBzaG91bGQgYmUga2VwdCBzb21ld2hlcmUgZWxzZS4uLiBvciBtYWtlIHRoZSBjb21wb25lbnQncyB0eXBlIHJlZ2lzdHJhdGlvbiBpbiB0aGUgY29uc3RydWN0b3IgYmVjb21lIGEgcnVsZS5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIEZhY3RvcnkucmVnaXN0ZXJUeXBlKFwiSGFuZGxlckNvbGxlY3Rpb25cIiwgXCJ2MVwiLCBIYW5kbGVyQ29sbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHR5cGUgYXMgYWxyZWFkeSByZWdpc3RlcmVkLCBzbyBub3RoaW5nIHRvIGRvLlxyXG4gICAgICAgICAgICB9ICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE92ZXJyaWRlcyB0aGUgUGVyc2lzdGFibGVPYmplY3QncyBzZXRTdGF0ZSB0byBhdm9pZCByZXN0b3JpbmcgY29sbGVjdGlvbiBvZiBcImZha2UgaGFuZGxlcnNcIidcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IGFueSkge1xyXG4gICAgICAgICAgICBzdXBlci5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gcmVpbml0aWFsaXplIHRoZSBoYW5kbGVycyBjb2xsZWN0aW9uLiBhcyBpZiB0aGV5IHdlcmUgXHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlRW50ZXJTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyRW50ZXJTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUV4aXRTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFmdGVyRXhpdFN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25TdWNjZXNmdWxFdmVudFByb2Nlc3NlZEhhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUU3RhdHVzZXMsIFRFdmVudHM+LCBraW5kT2ZIYW5kbGVyOiBLaW5kc09mRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoa2luZE9mSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRW50ZXJTdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyRW50ZXJTdGF0dXNIYW5kbGVycy5yZWdpc3RlckhhbmRsZXIoaGFuZGxlciwga2luZE9mSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRW50ZXJTdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZUVudGVyU3RhdHVzSGFuZGxlcnMucmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXIsIGtpbmRPZkhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBLaW5kc09mRXZlbnRIYW5kbGVyLmFmdGVyRXhpdFN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJFeGl0U3RhdHVzSGFuZGxlcnMucmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXIsIGtpbmRPZkhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBLaW5kc09mRXZlbnRIYW5kbGVyLmJlZm9yZUV4aXRTdGF0dXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZUV4aXRTdGF0dXNIYW5kbGVycy5yZWdpc3RlckhhbmRsZXIoaGFuZGxlciwga2luZE9mSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgU3RhdGUgTWFjaGluZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRDdXJyZW50U3RhdHVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdHVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0cyB0aGUgcHJldmlvdXMgc3RhdHVzIG9mIHRoZSBNYWNoaW5lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFByZXZpb3VzU3RhdHVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2aW91c1N0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlbGxzIGlmIGFuIGV2ZW50IGlzIGFsbG93ZWQgdG8gYmUgcHJvY2Vzc2VkIGluIHRoZSBjdXJyZW50IHN0YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzRXZlbnRWYWxpZEZvckN1cnJlbnRTdGF0dXMoZXZlbnQ6IFRFdmVudHMpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlTWFjaGluZURlZmluaXRpb25bPGFueT5ldmVudF1bPGFueT50aGlzLmN1cnJlbnRTdGF0dXNdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaWxsIGNhdXNlIHRoZSBzdGF0ZSBtYWNoaW5lIHRvIGFkdmFuY2UgdG8gdGhlIG5leHQgc3RhdHVzLi4uIG9yIHRocm93IGFuIGV4Y2VwdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcHJvY2Vzc0V2ZW50KGV2ZW50OiBURXZlbnRzKTogSVByb21pc2U8SGFuZGxlclJlc3VsdD4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNFdmVudFZhbGlkRm9yQ3VycmVudFN0YXR1cyhldmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXcgSGFuZGxlclJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5va1RvQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucmVhc29uID0gXCJFdmVudCAnXCIgKyBldmVudCArIFwiJyBub3QgdmFsaWQgaW4gc3RhdHVzIFwiICsgdGhpcy5jdXJyZW50U3RhdHVzICsgXCIuIElmIHRoaXMgaXMgbm90IGV4cGVjdGVkLCBwbGVhc2UsIGNoZWNrIHRoZSBzdGF0ZSBtYWNoaW5lIGRlZmluaXRpb246IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZU1hY2hpbmVEZWZpbml0aW9uKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLndoZW4ocmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG5leHRTdGF0dXMgPSB0aGlzLnN0YXRlTWFjaGluZURlZmluaXRpb25bPGFueT5ldmVudF1bPGFueT50aGlzLmN1cnJlbnRTdGF0dXNdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNtRXZlbnQgPSBuZXcgU3RhdGVNYWNoaW5lRXZlbnQ8VFN0YXR1c2VzLCBURXZlbnRzPigpO1xyXG5cclxuICAgICAgICAgICAgc21FdmVudC5jdXJyZW50U3RhdHVzID0gdGhpcy5jdXJyZW50U3RhdHVzO1xyXG4gICAgICAgICAgICBzbUV2ZW50LmRlc3RpbmF0aW9uU3RhdHVzID0gbmV4dFN0YXR1cztcclxuICAgICAgICAgICAgc21FdmVudC5wcmV2aW91c1N0YXR1cyA9IHRoaXMucHJldmlvdXNTdGF0dXM7XHJcbiAgICAgICAgICAgIHNtRXZlbnQucHJvY2Vzc2luZ0V2ZW50ID0gZXZlbnQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVFeGl0U3RhdHVzSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5va1RvQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBuZXcgSGFuZGxlclJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLm9rVG9DaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnJlYXNvbiA9IFwiU3RhdGUgQ2hhbmdlIGludGVycnVwdGVkIGJ5IGJlZm9yZUV4aXRTdGF0dXNIYW5kbGVyKHMpIHdpdGggcmVhc29uOiBcIiArIHJlc3VsdC5yZWFzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLnJlamVjdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVFbnRlclN0YXR1c0hhbmRsZXJzLnJ1bkhhbmRsZXJzKHNtRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5va1RvQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBuZXcgSGFuZGxlclJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLm9rVG9DaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnJlYXNvbiA9IFwiU3RhdGUgQ2hhbmdlIGludGVycnVwdGVkIGJ5IGJlZm9yZUVudGVyU3RhdHVzSGFuZGxlcihzKSB3aXRoIHJlYXNvbjogXCIgKyByZXN1bHQucmVhc29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci5yZWplY3QocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGF0dXMgPSB0aGlzLmN1cnJlbnRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdHVzID0gbmV4dFN0YXR1cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWZ0ZXJFeGl0U3RhdHVzSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZnRlckVudGVyU3RhdHVzSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblN1Y2Nlc2Z1bEV2ZW50UHJvY2Vzc2VkSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uOiBIYW5kbGVyUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU29tZSBIYW5kbGVyIGRlY2lkZWQgbm90IHRvIGFsbG93IHRoZSBzdGF0ZSBjaGFuZ2UsIHNvIHdlIHNpbXBseSByZXR1cm4gd2h5IVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiBnZW5lcmFsIGFuZCBjb21tb25seSB1c2VkIFZhbHVlT2JqZWN0cy4gXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3RzIHtcclxuXHJcbiAgICBpbXBvcnQgSVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuSVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc2ltcGxlIHZhbHVlIG9iamVjdCB0byBtYW5hZ2UgbW9uZXkuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBNb25leSBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxNb25leT4gaW1wbGVtZW50cyBJVmFsdWVPYmplY3Q8TW9uZXk+IHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWUgPSBcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5Nb25leVwiO1xyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBwcml2YXRlIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgYW1vdW50RXVybzogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgZXhjaGFuZ2U6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIGN1cnJlbmN5OiBDdXJyZW5jeTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYW1vdW50ICAgIGFtb3VudCBpbiB0aGUgY3VycmVuY3kgc3BlY2lmaWVkIGJ5IGN1cnJlbmN5XHJcbiAgICAgICAgICogQHBhcmFtIGN1cnJlbmN5ICBjdXJyZW5jeSBvZiB0aGUgYW1vdW50IHNwZWNpZmllZCAoaWYgbm90IHN1cHBsaWVkIHdpbGwgYmUgQ3VycmVuY2llcy5FVVJPKVxyXG4gICAgICAgICAqIEBwYXJhbSBleGNoYW5nZSAgbXVsdGlwbGllciBleGNoYW5nZSB0byBhcHBseS4gVGhpcyBpcyBhbHdheXMgdGhlIOKCrC9jdXJyZW5jeSBhbW91bnQgPT0+IDEgKiB7Y3VycmVuY3l9ID0ge2V4Y2hhbmdlfSAqIOKCrCBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgYW1vdW50PzogbnVtYmVyIHwgTW9uZXksXHJcbiAgICAgICAgICAgIGN1cnJlbmN5PzogQ3VycmVuY3ksXHJcbiAgICAgICAgICAgIGV4Y2hhbmdlPzogbnVtYmVyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEV4Y2hhbmdlIGlzIDFcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2UgPSBleGNoYW5nZSB8fCAxLjAwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5IHx8IG5ldyBDdXJyZW5jeShcIkVVUlwiLCBcIuKCrFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3VudEV1cm8gPSB0aGlzLmFtb3VudCAqIGV4Y2hhbmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYW1vdW50IGluc3RhbmNlb2YgTW9uZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50LmFtb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVuY3kgPSBhbW91bnQuY3VycmVuY3k7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlID0gYW1vdW50LmV4Y2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbW91bnRFdXJvID0gYW1vdW50LmFtb3VudEV1cm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb3B5KCk6IE1vbmV5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leSh0aGlzLmFtb3VudCwgdGhpcy5jdXJyZW5jeSwgdGhpcy5leGNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QW1vdW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbW91bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QW1vdW50RXVybygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50RXVybztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRDdXJyZW5jeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVuY3k7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2hhbmdlQW1vdW50KG5ld0Ftb3VudDogbnVtYmVyKTogTW9uZXkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbmV5KG5ld0Ftb3VudCwgdGhpcy5jdXJyZW5jeSwgdGhpcy5leGNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2hhbmdlRXhjaGFuZ2UobmV3RXhjaGFuZ2U6IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbmV5KHRoaXMuYW1vdW50LCB0aGlzLmN1cnJlbmN5LCBuZXdFeGNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2hhbmdlQ3VycmVuY3kobmV3Q3VycmVuY3k6IEN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9uZXkodGhpcy5hbW91bnQsIG5ld0N1cnJlbmN5LCB0aGlzLmV4Y2hhbmdlKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGx1cyh0b0FkZDogTW9uZXkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudEV1cm8gPSB0aGlzLmdldEFtb3VudEV1cm8oKSArIHRvQWRkLmdldEFtb3VudEV1cm8oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leShuZXdBbW91bnRFdXJvKS5jaGFuZ2VFeGNoYW5nZSh0aGlzLmV4Y2hhbmdlKS5jaGFuZ2VDdXJyZW5jeSh0aGlzLmN1cnJlbmN5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtaW51cyh0b1N1YnN0cmFjdDogTW9uZXkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudEV1cm8gPSB0aGlzLmdldEFtb3VudEV1cm8oKSAtIHRvU3Vic3RyYWN0LmdldEFtb3VudEV1cm8oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leShuZXdBbW91bnRFdXJvKS5jaGFuZ2VFeGNoYW5nZSh0aGlzLmV4Y2hhbmdlKS5jaGFuZ2VDdXJyZW5jeSh0aGlzLmN1cnJlbmN5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5KG11bHRpcGxpZXI6IG51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgbmV3QW1vdW50ID0gdGhpcy5nZXRBbW91bnQoKSAqIG11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZUFtb3VudChuZXdBbW91bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRpdmlkZUJ5KGRpdmlzb3I6IG51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgbmV3QW1vdW50ID0gdGhpcy5nZXRBbW91bnQoKSAvIGRpdmlzb3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZUFtb3VudChuZXdBbW91bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHBlcmNlbnQwXzEwMCBQZXJjZW50IHRvIGFwcGx5IGluIDEwMHRoICggMSBtZWFucyAxJSApLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGV4YW1wbGUgdmFyIGN1cnJlbnRBbW91bnQgPSBuZXcgTW9uZXkoIDEwMDAuMCApXHJcbiAgICAgICAgICogICAgICAgICAgdmFyIHdpdGhQZXJjZW50QXBwbGllZCA9IGN1cnJlbnRBbW91bnQuaW5jcmVtZW50QnlQZXJjZW50KCA1MCUgKTsgeyA9PT4gMTUwMCB9ICBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5jcmVtZW50QnlQZXJjZW50KHBlcmNlbnQwXzEwMDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdBbW91bnQgPSB0aGlzLmdldEFtb3VudCgpICogKCAxICsgcGVyY2VudDBfMTAwLyAxMDAuMCApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcGVyY2VudDBfMTAwIFBlcmNlbnQgdG8gYXBwbHkgaW4gMTAwdGggKCAxIG1lYW5zIDElICkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAZXhhbXBsZSB2YXIgY3VycmVudEFtb3VudCA9IG5ldyBNb25leSggMTAwMC4wIClcclxuICAgICAgICAgKiAgICAgICAgICB2YXIgd2l0aFBlcmNlbnRBcHBsaWVkID0gY3VycmVudEFtb3VudC5kZWNyZW1lbnRQZXJjZW50KCA1MCUgKTsgeyA9PT4gNTAwIH0gIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnRCeVBlcmNlbnQocGVyY2VudDBfMTAwOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudCA9IHRoaXMuZ2V0QW1vdW50KCkgKiAoMSAtIHBlcmNlbnQwXzEwMCAvIDEwMC4wKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5MDU1L2hvdy1jYW4taS1mb3JtYXQtbnVtYmVycy1hcy1tb25leS1pbi1qYXZhc2NyaXB0XHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtYXROdW1iZXIoXHJcbiAgICAgICAgICAgIGRlY2ltYWxzOiBudW1iZXIgPSAyLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3I6IHN0cmluZyA9IFwiLlwiLFxyXG4gICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPSBcIixcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aE9mV2hvbGVQYXJ0ID0gMztcclxuICAgICAgICAgICAgdmFyIHJlID0gJ1xcXFxkKD89KFxcXFxkeycgKyAobGVuZ3RoT2ZXaG9sZVBhcnQgfHwgMykgKyAnfSkrJyArIChkZWNpbWFscyA+IDAgPyAnXFxcXEQnIDogJyQnKSArICcpJyxcclxuICAgICAgICAgICAgICAgIG51bSA9IHRoaXMuYW1vdW50LnRvRml4ZWQoTWF0aC5tYXgoMCwgfn5kZWNpbWFscykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChkZWNpbWFsU2VwYXJhdG9yID8gbnVtLnJlcGxhY2UoJy4nLCBkZWNpbWFsU2VwYXJhdG9yKSA6IG51bSkucmVwbGFjZShuZXcgUmVnRXhwKHJlLCAnZycpLCAnJCYnICsgKHRob3VzYW5kc1NlcGFyYXRvciB8fCAnLCcpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgdG9TdHJpbmcoXHJcbiAgICAgICAgICAgIGRlY2ltYWxzOiBudW1iZXIgPSAyLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3I6IHN0cmluZyA9IFwiLlwiLFxyXG4gICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPSBcIixcIixcclxuICAgICAgICAgICAgc2hvd0N1cnJlbmN5OiBib29sZWFuID0gZmFsc2VcclxuICAgICAgICApIDogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHNob3dDdXJyZW5jeSA/IHRoaXMuY3VycmVuY3kuc3ltYm9sICsgXCIgXCIgOiBcIlwiICkgKyB0aGlzLmZvcm1hdE51bWJlcihkZWNpbWFscywgdGhvdXNhbmRzU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHN5bWJvbDogc3RyaW5nKSB7IH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVuY2llcyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFVVJPID0gbmV3IEN1cnJlbmN5KFwiRVVSXCIsIFwi4oKsXCIpO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRE9MTEFSID0gbmV3IEN1cnJlbmN5KFwiVVNEXCIsIFwiJFwiKTtcclxuICAgICAgICAvKiBBZGQgaGVyZSB3aGF0ZXZlciBuZXcgZXhjaGFuZ2UgeW91IG1heSBuZWVkICovXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lFcXVhdGFibGV9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5cdGltcG9ydCBJRXF1YXRhYmxlID0gQ29tbW9uSW50ZXJmYWNlcy5JRXF1YXRhYmxlO1xyXG5cdGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eTxULCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiBleHRlbmRzIElFcXVhdGFibGU8VD4sIElQZXJzaXN0YWJsZSB7XHJcblx0XHRnZXRLZXkoKTogVEtleTtcclxuXHRcdHNldEtleShrZXk6IFRLZXkpOiB2b2lkO1xyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlS2V5VmFsdWVPYmplY3Q8VD5cclxuICAgICAgICBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG4gICAgICAgIGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlcml2ZWQgY2xhc3NlcyBtdXN0IHJlaW1wbGVtZW50IHRoaXMgbWV0aG9kLiBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SURpc3BhdGNoZXJ9IGZyb20gXCIuL0lEaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUHJvbWlzZXMuSVByb21pc2U7XHJcbiAgICBpbXBvcnQgUHJvbWlzZUhhbmRsZXIgPSBQcm9taXNlcy5Qcm9taXNlSGFuZGxlcjtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRG9tYWluRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uOiBJRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24oZGlzcGF0Y2hlcjogSURpc3BhdGNoZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uID0gZGlzcGF0Y2hlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlciwgc2NvcGU/OiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyLCBzY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbi51bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24uZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBkaXNwYXRjaGVySW1wbGVtZW50YXRpb24gaXMgbm90IHNldCwgd2Ugc2hvdWxkIHJldHVybiBhIGZha2UgcHJvbWlzZSwgdG8gYWxsb3cgY2xpZW50cyB0byBhbHdheXMgd3JpdGUgdGhlaXIgaGFuZGxlcnMhXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi9JRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcblxyXG4vKipcclxuICogQ2xhc3NlcyBhbmQgaW50ZXJmYWNlcyB0byBpbXBsZW1lbnQgYW4gRW50aXR5LCBhIHBlcnNpc3RhYmxlIG9iamVjdC4gXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcblx0aW1wb3J0IEJhc2VQZXJzaXN0YWJsZU9iamVjdCA9IFBlcnNpc3RhYmxlT2JqZWN0LkJhc2VQZXJzaXN0YWJsZU9iamVjdDtcclxuXHRpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuXHRpbXBvcnQgRG9tYWluRGlzcGF0Y2hlciA9IERvbWFpbkV2ZW50cy5Eb21haW5EaXNwYXRjaGVyO1xyXG5cclxuXHRleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVudGl0eTxUIGV4dGVuZHMgSUVudGl0eTxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuXHRcdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0XHRpbXBsZW1lbnRzIElFbnRpdHk8VCwgVEtleT4ge1xyXG5cclxuXHRcdHByaXZhdGUga2V5OiBUS2V5O1xyXG5cclxuXHRcdHByb3RlY3RlZCByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuXHRcdFx0RG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBnZXRLZXkoKTogVEtleSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmtleTtcclxuXHRcdH07XHJcblxyXG5cdFx0cHVibGljIHNldEtleShrZXk6IFRLZXkpOiB2b2lkIHtcclxuXHRcdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0XHRpZiAoIWl0ZW0pIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGl0ZW0uZ2V0S2V5KCkuZXF1YWxzKHRoaXMuZ2V0S2V5KCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JRW50aXR5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkFnZ3JlZ2F0ZSB7XHJcblxyXG4gICAgICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgICAgIGltcG9ydCBJRW50aXR5ID0gRW50aXR5LklFbnRpdHk7XHJcblxyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFnZ3JlZ2F0ZVJvb3Q8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kcyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRSZXZpc2lvbklkKCk6IG51bWJlclxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50UmV2aXNpb25JZCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgICAgIHBlcmZlY3RseU1hdGNoKGFub3RoZXI6IElBZ2dyZWdhdGVSb290PFQsIFRLZXk+KTogYm9vbGVhbjtcclxuICAgICAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JRW50aXR5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4vSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0lFbnRpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIHRoZSBBZ2dyZWdhdGUgUGF0dGVybiBieSBkZWZpbmluZyBpbnRlcmZhY2VzIGFuZCBiYXNlIGJlaGF2aW9yIGZvciBhbiBBZ2dyZWdhdGVSb290LlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkFnZ3JlZ2F0ZSB7XHJcblxyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IEVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IElFbnRpdHkgPSBFbnRpdHkuSUVudGl0eTtcclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBiZWhhdmlvciBvZiBhbiBBZ2dyZWdhdGVSb290LCB3aGljaCBpcyBiYXNpY2FsbHkgYW4gZW50aXR5Li4uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWdncmVnYXRlUm9vdDxcclxuICAgICAgICBUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID5cclxuICAgICAgICBleHRlbmRzIEJhc2VFbnRpdHk8VCwgVEtleT5cclxuICAgICAgICBpbXBsZW1lbnRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBJRW50aXR5PFQsIFRLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfX3JldmlzaW9uSWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRSZXZpc2lvbklkKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fcmV2aXNpb25JZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnRSZXZpc2lvbklkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV2aXNpb25JZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGFyZXMgYW4gYWdncmVnYXRlIHdpdGggYW5vdGhlci4gUmV0dXJucyB0cnVlIGlmIGFnZ3JlZ2F0ZSdzIGRhdGEgYXJlIGV4YWN0bHkgZXF1YWwuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBlcmZlY3RseU1hdGNoKG90aGVyOiBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvdGhlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc09uZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgdmFyIHRoZU90aGVyID0gb3RoZXIuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvIHRoZSBjb21wYXJpc29uIGp1c3QgbGlrZSB2YWx1ZSBvYmplY3RzLi4uIG5haXZlIGJ1dCBmdW5jdGlvbmFsIGF0IHRoaXMgdGltZS5cclxuICAgICAgICAgICAgdmFyIGNvbXBhcmlzb24gPSBfLmlzRXF1YWwodGhpc09uZSwgdGhlT3RoZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeTxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSByZXBvc2l0b3J5IGdpdmVuIGl0cyBpZC4gSXQgZ2l2ZXMgYmFjayBhIGZ1bGx5IHJjb25zdGl0dXRlZCBBZ2dyZWdhdGUgUm9vdCwgc28gdGhhdCAgd2lsbCBiZSBwb3NzaWJsZSB0byBjYWxsIGFueSBwdWJsaWMgbWV0aG9kLlxyXG4gICAgICAgICAqIGZpcmVzIEl0ZW1SZXRyaWV2ZWQgZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogVDtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IHZvaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVwbGFjZXMgYW4gaXRlbS4gSnVzdCBsaWtlIHNhdmUsIGJ1dCBpdCBkb2Vzbid0IGluY3JlbWVudCB0aGUgcmV2aXNpb25JZCBhbmQga2VlcCB0aGUgb25lIHN0b3JlZCBpbiB0aGUgQWdncmVnYXRlUm9vdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlcGxhY2UoaXRlbTogVCk6IHZvaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVsZXRlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQ7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlQWN0aW9uIHdpbGwgYmUgcGFzc2VkIHRvIHJlcG9zaXRvcmllcycgc2F2ZUltcGxlbWVudGF0aW9uIHNvIHRoYXQgY2xpZW50IGNhbiB0YWtlIGRlY2lzaW9ucyBvbiB3aGF0IHRvIGRvIHdoZW4gYWRkaW5nIG9yIHJlcGxhY2luZyBhbiBpdGVtIGlmIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGVudW0gU2F2ZUFjdGlvbkVudW0ge1xyXG4gICAgICAgIEFkZCxcclxuICAgICAgICBVcGRhdGVcclxuICAgIH07XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFJlcG9zaXRvcnkgdG8gcGVyc2lzdCBBZ2dyZWdhdGVzLiBDb250YWlucyBhIHJlZmVyZW5jZSBpbiBtZW1vcnkgcmVwb3NpdG9yeS5cclxuICovXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUHJvbWlzZXMuSVByb21pc2U7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSByZXBvc2l0b3J5IGdpdmVuIGl0cyBpZC4gSXQgZ2l2ZXMgYmFjayBhIGZ1bGx5IHJjb25zdGl0dXRlZCBBZ2dyZWdhdGUgUm9vdCwgc28gdGhhdCAgd2lsbCBiZSBwb3NzaWJsZSB0byBjYWxsIGFueSBwdWJsaWMgbWV0aG9kLlxyXG4gICAgICAgICAqIGZpcmVzIEl0ZW1SZXRyaWV2ZWQgZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogSVByb21pc2U8VD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXBsYWNlcyBhbiBpdGVtLiBKdXN0IGxpa2Ugc2F2ZSwgYnV0IGl0IGRvZXNuJ3QgaW5jcmVtZW50IHRoZSByZXZpc2lvbklkIGFuZCBrZWVwIHRoZSBvbmUgc3RvcmVkIGluIHRoZSBBZ2dyZWdhdGVSb290XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWxldGVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcbiBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEtleU5vdFNldCA9IFwiS2V5IG5vdCBzZXRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1Ob3RGb3VuZCA9IFwiSXRlbSBOb3QgRm91bmRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yU2F2aW5nSXRlbSA9IFwiRXJyb3IgU2F2aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yUmVhZGluZ0l0ZW0gPSBcIkVycm9yIFJlYWRpbmcgSXRlbVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JEZWxldGluZ0l0ZW0gPSBcIkVycm9yIERlbGV0aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFdyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiA9IFwiV3JvbmcgdHlwZSBmcm9tIEltcGxlbWVudGF0aW9uXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBNYW5hZ2VkVHlwZU5vdFN1cHBsaWVkID0gXCJSZXBvc2l0b3J5IG5lZWRzIHRvIGtub3cgd2hhdCB0eXBlIGl0IGNhbiBtYW5hZ2VcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEludmFsaWRLZXkgPSBcIkludmFsaWQgS2V5XCI7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RhdGljIGNvbnRhaW5lciBvZiBldmVudCBcIl9fdHlwZU5hbWVcInNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlJlcG9zaXRvcnlcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1BZGRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbUFkZGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1VcGRhdGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtRGVsZXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVJlcGxhY2VkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtUmVwbGFjZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVJldHJpZXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcG9zaXRvcnlFdmVudDxURXZlbnQsVEFnZ3JlZ2F0ZT4gZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIGFnZ3JlZ2F0ZSBpbnN0YW5jZSBhZnRlciB0aGUgYWN0aW9uIGhhcyBiZWVuIHBlcmZvcm1lZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBpdGVtOiBUQWdncmVnYXRlLFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIElkIG9mIHRoZSByZXBvc2l0b3J5IHBlcmZvcm1pbmcgdGhlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVibGljIHJlcG9zaXRvcnlJZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1BZGRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtQWRkZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbUFkZGVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtRGVsZXRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtRGVsZXRlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtRGVsZXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbVJldHJpZXZlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtUmV0cmlldmVkRXZlbnQ8VEFnZ3JlZ2F0ZT4sIFRBZ2dyZWdhdGU+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1SZXRyaWV2ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtVXBkYXRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtVXBkYXRlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtVXBkYXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1SZXBsYWNlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtUmVwbGFjZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVJlcGxhY2VkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NhdmVBY3Rpb25FbnVtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1SZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1BZGRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbVVwZGF0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1EZWxldGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4vSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgc3RyaW5nIHRvIGRpbmV0aWZ5IHRoZSByZXBvc2l0b3J5LiBVc2VmdWwgaW4gc2NlbmFyaW9zIHdoZXJlIHRoZSBzYW1lIEFnZ3JlZ2F0ZVJvb3QgbWlnaHQgYmUgc2F2ZWQgaW4gZGlmZmVyZW50IGxvY2F0aW9ucy4gXHJcbiAgICAgICAgICAgICAqIEV2ZW50cyBtdXN0IGRpc2Nlcm4gd2hhdCBsb2NhdGlvbiB0aGUgaXRlbSB3YXMgc2F2ZWQvcmV0cmlldmVkL2RlbGV0ZSB0by9mcm9tL2Zyb20uIEl0IGRlZmF1bHRzIHRvIHRoZSBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeUlkPzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXBvc2l0b3J5SWQpIHRoaXMucmVwb3NpdG9yeUlkID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgZnVuY3Rpb25hbGl0eSB0byBhY2Nlc3MgdG8gdGhlIHJlcG9zaXRvcnkgYW5kIGdldCBhbiBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aHJvdyBcIkl0ZW1Ob3RGb3VuZFwiIGlmIG5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGlkIHdhcyBmb3VuZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVR5cGVUcmFja2luZztcclxuXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IFQge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJldHJpZXZlZCA9IHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXRyaWV2ZWQuX190eXBlTmFtZSAhPT0gdGhpcy5tYW5hZ2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZSBcIiArIHJldHJpZXZlZC5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUocmV0cmlldmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50PFQ+KHRvUmV0dXJuLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogdm9pZDtcclxuXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdvcmtzIGp1c3QgbGlrZSBzYXZlLCBidXQgaXQgbmV2ZXIgaW5jcmVtZW50cyBSZXZpc2lvbklkLCBpdCB0cnVzdHMgdGhlIG9uZSBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGFnZ3JlZ2F0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlT3JSZXBsYWNlKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlT3JSZXBsYWNlKGl0ZW06IFQsIHJlcGxhY2VPbmx5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50PFQ+IHwgSXRlbUFkZGVkRXZlbnQ8VD47XHJcbiAgICAgICAgICAgIHZhciBhc0l0V2FzOiBUID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHNob3VsZEluY3JlbWVudFJldmlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtO1xyXG5cclxuICAgICAgICAgICAgc2F2ZUFjdGlvbiA9IFNhdmVBY3Rpb25FbnVtLlVwZGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkIGlmIHRoZSBkbyBub3QgZXhpc3RzIGluIHRoZSBSZXBvLlxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFjdGlvbiA9IFNhdmVBY3Rpb25FbnVtLkFkZDtcclxuICAgICAgICAgICAgICAgIHNob3VsZEluY3JlbWVudFJldmlzaW9uID0gZmFsc2U7IC8vIGJlY2F1c2UgdGhlIGl0ZW0gd2FzIG5vdCBpbiB0aGUgcmVwbyFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2F2ZSBvY2N1ciBvbmx5IGlmIHN0b3JlZCBpdGVtIGFuZCBzYXZlZCBpdGVtIGFyZSBkaWZmZXJlbnQgc29tZWhvdy5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLnBlcmZlY3RseU1hdGNoKGFzSXRXYXMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2VPbmx5ICYmIHNob3VsZEluY3JlbWVudFJldmlzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVJlcGxhY2VkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVVwZGF0ZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmluYWxseSBzYXZlcyBhZ2dyZWdhdGUgaW50byB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0sIHNhdmVBY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGlkKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaXRlbSBub3QgZm91bmQsIHNvIG5vdGhpbmcgdG8gZGVsZXRlIVxyXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGFzSXRXYXMsIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TYXZlQWN0aW9uRW51bS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtUmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtQWRkZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1VcGRhdGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtRGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuXHJcblxyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICBpbXBvcnQgUHJvbWlzZUhhbmRsZXIgPSBQcm9taXNlcy5Qcm9taXNlSGFuZGxlcjtcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FwdHVyZXMgY29tbW9uIGJlaGF2aW9yIG9mIHJlcG9zaXRvcnksIHVzaW5nIHRoZVRlbXBsYXRlIE1ldGhvZCBQYXR0ZXJuLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgc3RyaW5nIHRvIGRpbmV0aWZ5IHRoZSByZXBvc2l0b3J5LiBVc2VmdWwgaW4gc2NlbmFyaW9zIHdoZXJlIHRoZSBzYW1lIEFnZ3JlZ2F0ZVJvb3QgbWlnaHQgYmUgc2F2ZWQgaW4gZGlmZmVyZW50IGxvY2F0aW9ucy4gXHJcbiAgICAgICAgICAgICAqIEV2ZW50cyBtdXN0IGRpc2Nlcm4gd2hhdCBsb2NhdGlvbiB0aGUgaXRlbSB3YXMgc2F2ZWQvcmV0cmlldmVkL2RlbGV0ZSB0by9mcm9tL2Zyb20uIEl0IGRlZmF1bHRzIHRvIHRoZSBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeUlkPzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIiB8fCBtYW5hZ2VkVHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuTWFuYWdlZFR5cGVOb3RTdXBwbGllZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcmVwb3NpdG9yeUlkKSB0aGlzLnJlcG9zaXRvcnlJZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYSBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTxJVHlwZVRyYWNraW5nPjtcclxuXHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPFQ+KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCwgXCJpZCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgIT0gdGhpcy5tYW5hZ2VkVHlwZSAmJiAhKHRoaXMubWFuYWdlZFR5cGUgPT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmVkIFwiICsgdmFsdWUuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEJ5SWQ6IFwiICsgcmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b1JldHVybjogVCA9IDxUPihGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QnlJZDogXCIgKyBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEl0ZW1SZXRyaWV2ZWRFdmVudCh0b1JldHVybiwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KS5maW5hbGx5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHRvUmV0dXJuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRCeUlkOiBcIiArIHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICBwcml2YXRlIGRvU2F2ZShpdGVtOiBULCBzYXZlQWN0aW9uOiBTYXZlQWN0aW9uRW51bSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgc2F2ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0sIHNhdmVBY3Rpb24pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JTYXZpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzYXZlKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zYXZlT3JSZXBsYWNlKGl0ZW0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcGxhY2UoaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNhdmVPclJlcGxhY2UoaXRlbTogVCwgcmVwbGFjZU9ubHk6IGJvb2xlYW4gPSBmYWxzZSk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPHt9PigpO1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQ6IEl0ZW1VcGRhdGVkRXZlbnQ8VD4gfCBJdGVtQWRkZWRFdmVudDxUPjtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXRlbS5nZXRLZXkoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5LZXlOb3RTZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWQoaXRlbS5nZXRLZXkoKSkudGhlbihcclxuICAgICAgICAgICAgICAgIChyZWFkVmFsdWU6IFQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaXRlbSBhbHJlYWR5IGV4aXN0IHNvIHdlIGhhdmUgdG8gY29tcGFyZSBpdCB3aXRoIHdoYXQgd2UgYXJlIHNhdmluZy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wZXJmZWN0bHlNYXRjaChyZWFkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoYXQgaXMgaW4gdGhlIGRhdGFiYXNlIHBlcmZlY3RseSBtYXRjaGVzIHdoYXQgd2UgYXJlIHNhdmluZywgc28gbm90aGluZyB0byBkbyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgcmV2aXNpb24gb25seSBpZiB3ZSBhcmUgbm90IHJlcGxhY2luZyBhbiBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXBsYWNlT25seSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluY3JlbWVudFJldmlzaW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVVwZGF0ZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGFjZU9ubHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVJlcGxhY2VkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9TYXZlKGl0ZW0sIFNhdmVBY3Rpb25FbnVtLlVwZGF0ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgZXhwZWN0ZWQsIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgcmVwbywgc28gd2UgaGF2ZSB0byBhZGQgaXQhXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU2F2ZShpdGVtLCBTYXZlQWN0aW9uRW51bS5BZGQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclJlYWRpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlciBlcnJvcnMgbXVzdCBiZSB0cmVhdGVkIGFzIC4uLiBcIkVycm9yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclJlYWRpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICAgICAgZGVsZXRlKGlkOiBUS2V5KTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgICAgIHZhciBldmVudDogSXRlbURlbGV0ZWRFdmVudDxUPjtcclxuICAgICAgICAgICAgdGhpcy5nZXRCeUlkKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbURlbGV0ZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVJbXBsZW1lbnRhdGlvbihpZCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB0byBidWlsZCBhbiBlcnJvciBmcm9tIGEgcmV0dXJuIHZhbHVlIG9mIHRoZSBBc3luYyBJbXBsZW1lbnRhdGlvbnMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZEVycm9yKGVycm9yRnJvbUNhbGw6IGFueSwgZXJyb3JJZkVycm9yRnJvbUNhbGxJc05vdEVycm9yOiBzdHJpbmcpOiBFcnJvciB7XHJcbiAgICAgICAgICAgIHZhciByZWFzb246IEVycm9yO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JGcm9tQ2FsbCBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZWFzb24gPSBlcnJvckZyb21DYWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoZXJyb3JJZkVycm9yRnJvbUNhbGxJc05vdEVycm9yLCBKU09OLnN0cmluZ2lmeShlcnJvckZyb21DYWxsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlYXNvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuLy8gaW1wb3J0IHtGYWN0b3J5IGFzIEZhY3Rvcnl9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7QmFzZVJlcG9zaXRvcnl9IGZyb20gXCIuL0Jhc2VSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IEZhY3RvcnkgPSBQZXJzaXN0YWJsZU9iamVjdC5GYWN0b3J5O1xyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJbk1lbW9yeVJlcG9zaXRvcnk8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGV4dGVuZHMgQmFzZVJlcG9zaXRvcnk8VCwgVEtleT5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiB7IFtpZDogc3RyaW5nXTogSVBlcnNpc3RhYmxlIH07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG1hbmFnZWRUeXBlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG1hbmFnZWRUeXBlTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ5SWRJbXBsZW1lbnRhdGlvbihpZDogVEtleSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b1JldHVybiA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzLnN0b3JhZ2Vba2V5XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFQ+dG9SZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IGl0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gaWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplci50c1wiIC8+XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VSZXBvc2l0b3J5QXN5bmMgPSBSZXBvc2l0b3J5LkJhc2VSZXBvc2l0b3J5QXN5bmM7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IFByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUHJvbWlzZXMuSVByb21pc2U7XHJcblxyXG4gICAgaW1wb3J0IFNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLlNlcmlhbGl6ZXI7XHJcbiAgICBpbXBvcnQgRGVzZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5EZXNlcmlhbGl6ZXI7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluTWVtb3J5UmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBleHRlbmRzIEJhc2VSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IHsgW2lkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKG1hbmFnZWRUeXBlOiBzdHJpbmcsIHJlcG9zaXRvcnlJZD86IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihtYW5hZ2VkVHlwZSwgcmVwb3NpdG9yeUlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0QnlJZFN5bmMoaWQ6IFRLZXkpIHtcclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5JbnZhbGlkS2V5LCBcImlkIGNhbm5vdCBiZSBudWxsIG5vciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmdldEJ5SWRTeW5jKGlkKTtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHNhdmVTeW5jKGl0ZW06IFQpOiB7fSB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5nZXRLZXkoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5LZXlOb3RTZXQpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtpdGVtLmdldEtleSgpLnRvU3RyaW5nKCldID0gU2VyaWFsaXplci5zZXJpYWxpemUoaXRlbSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuRXJyb3JTYXZpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN5bmMoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHt9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGRlbGV0ZVN5bmMoaWQ6IFRLZXkpOiB7fSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zdG9yYWdlW2lkLnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN5bmMoaWQpXHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHt9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbi8vIGltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBTaW1wbGVHdWlkID0gVXRpbHMuU2ltcGxlR3VpZDtcclxuICAgIGltcG9ydCBQcm9taXNlSGFuZGxlciA9IFByb21pc2VzLlByb21pc2VIYW5kbGVyO1xyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUHJvbWlzZXMuSVByb21pc2U7XHJcblxyXG4gICAgdHlwZSBIYW5kbGVyQW5kU2NvcGVDb250YWluZXIgPSB7IGhhbmRsZXI6IElFdmVudEhhbmRsZXIsIG9yaWdpbmFsU2NvcGU6IGFueSB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluUHJvY2Vzc0Rpc3BhdGNoZXIge1xyXG4gICAgICAgIHByaXZhdGUgZGVsZWdhdGVzUmVnaXN0cnk6IHsgW2V2ZW50VHlwZU5hbWU6IHN0cmluZ106IHsgW2hhbmRsZXJJZDogc3RyaW5nXTogSGFuZGxlckFuZFNjb3BlQ29udGFpbmVyIH0gfSA9IHt9O1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnkgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHRoZSBzY29wZSBwYXJhbWV0ZXIgY2FuIGJlIHBhc3NlZCBpbiB0byB3YXJyYW50eSB0aGF0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGluIHRoZSBvcmlnaW5hbCBjb250ZXh0IFt0aGlzXSEhIVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyLCBzY29wZT86IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGhhbmRsZXJJZDogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgLy8gXCJTdGFtcHNcIiB0aGUgaGFuZGxlciBpZiBub3QgYWxyZWFkeSBcInN0YW1wZWRcIlxyXG4gICAgICAgICAgICBpZiAoISg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFuZGxlcklkID0gKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV1baGFuZGxlcklkXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXVtoYW5kbGVySWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTY29wZTogc2NvcGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBBY3Qgb25seSBpZCBoYW5kbGVyIGhhcyBiZWVuIHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIGlmICgoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJJZCA9ICg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnRUeXBlTmFtZV1baGFuZGxlcklkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpOiBJUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlcnJvcnM6IEVycm9yW10gPSBbXTtcclxuICAgICAgICAgICAgdmFyIHByb21pc2VBcnJheTogSVByb21pc2U8YW55PltdID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV1bZWxlbWVudF0uaGFuZGxlcjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdW2VsZW1lbnRdLm9yaWdpbmFsU2NvcGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlOiBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gaGFuZGxlci5jYWxsKHNjb3BlLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBoYW5kbGVyKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgZ2V0IGEgcHJvbWlzZSwgd2UgYWRkIGl0IHRvIHRoZSBsaXN0IG9mIHByb21pc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQVByb21pc2UocmV0dXJuVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSAoPElQcm9taXNlPGFueT4+cmV0dXJuVmFsdWUpLmNhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VBcnJheS5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHJldHVybmVkIHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiBhbGwgb2YgdGhlIHByb21pc2VzIGluIHRoZSBhcnJheSB3aWxsIGJlIHJlc29sdmVkLlxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIuYWxsKHByb21pc2VBcnJheSkudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5idWlsZEVycm9yTWVzc2FnZShlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5uYW1lID0gXCJFcnJvcnMgd2hpbGUgcHJvY2Vzc2luZyBldmVudCBcIiArIGV2ZW50Ll9fdHlwZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpc0FQcm9taXNlKHZhbHVlVG9UZXN0OiBhbnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICggdmFsdWVUb1Rlc3QudGhlbiAmJiB0eXBlb2YgdmFsdWVUb1Rlc3QudGhlbiA9PT0gJ2Z1bmN0aW9uJykgJiYgKHZhbHVlVG9UZXN0LmNhdGNoICYmIHR5cGVvZiB2YWx1ZVRvVGVzdC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYnVpbGRFcnJvck1lc3NhZ2UoRXJyb3JzOiBFcnJvcltdKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2U6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGVsZW1lbnQgb2YgRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGVsZW1lbnQubmFtZSArIFwiOlwiICsgZWxlbWVudC5tZXNzYWdlICsgXCJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuU2FnYSB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU2FnYSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogc2V0dXAgdGhlIHNhZ2EncyBldmVudCBoYW5kbGVycy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGFydCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkZXJlZ2lzdGVycyBhbGwgb2YgdGhlIGV2ZW50IGhhbmRsZXJzIHJlZ2lzdGVyZWQgYnkgdGhlIHNhZ2FcclxuICAgICAgICAgKi9cclxuICAgICAgICBzdG9wKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHJlY292ZXJzIGFsbCB0aGUgXCJzdGlsbCBydW5uaW5nIHNhZ2FzXCJcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWNvdmVyKCk6IHZvaWQ7XHJcbiAgICB9XHJcbn0gIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TYWdhIHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBpbXBvcnQgSVJlcG9zaXRvcnlBc3luYyA9IFJlcG9zaXRvcnkuSVJlcG9zaXRvcnlBc3luYztcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVNhZ2E8XHJcbiAgICAgICAgVCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRTdGF0dXNlcyBtdXN0IGJlIGFuIGVudW0gb3IgYSBzdHJpbmcgbGl0ZXJhbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFRTdGF0dXNlcywgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVEV2ZW50cyBtdXN0IGJlIGFuIGVudW0gb3IgYSBzdHJpbmcgbGl0ZXJhbFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFRFdmVudHNcclxuICAgID4gZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULFRLZXk+IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSByZXBvc2l0b3J5OiBJUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+LFxyXG4gICAgICAgICAgICBwcml2YXRlIGluaXRpYWxTdGF0dXM6IFRTdGF0dXNlcyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBmaW5hbFN0YXR1c2VzOiBUU3RhdHVzZXNbXVxyXG5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBtdXN0IG92ZXJyaWRlIHRoaXMgZnVuY3Rpb24gdG8gaGFuZGxlIGV2ZW50cyBhbmQgc2FnYSBzdGF0dXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgdHJpZ2dlckV2ZW50KGV2ZW50OiBURXZlbnRzKTogdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCB1bnJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0b3AoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlckV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZXMgYW5kIGNsYXNzZXMgdG8gaW1wbGVtZW50IGEgVW5pdE9mV29yay4gQSBVbml0T2ZXb3JrIGtlZXBzIHRyYWNrIG9mIGNoYW5nZXMgb24gdGhlIEFnZ3JlZ2F0ZXMgbG9hZGVkIGZyb20gdGhlIHVuZGVybHlpbmcgcmVwb3NpdG9yeSBhbmQgYWxsb3dzIHRvIHNhdmUgdGhlbSBhbGwgaW4gYSBzaW5nbGUgY2FsbC5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgVW5pdE9mV29yayBmb3IgYSBzaW5nbGUgUmVwb3NpdG9yeS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVW5pdE9mV29yazxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgUmVwb3NpdG9yeSBvciBmcm9tIHRoZSBVbml0T2ZXb3JrLCBnaXZlbiBpdHMgSWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QnlJZChrZXk6IFRLZXkpOiBUO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlQnlJZChrZXk6IFRLZXkpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbGwgdGhlIG1vZGlmaWVkIGl0ZW1zIGluIHRoZSBVbml0T2ZXb3JrLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmVBbGwoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQWxsb3dzIHRvIHJlZ2lzdGVyIGFuIGhhbmRsZXIgZm9yIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIFVuaXRPZldvcmtcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbGxvd3MgdG8gdW5yZWdpc3RlciBhbiBoYW5kbGVyIGZvciBldmVudHMgZ2VuZXJhdGVkIGJ5IHRoZSBVbml0T2ZXb3JrXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpOiB2b2lkO1xyXG5cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9ycy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VFcnJvcnN9IGZyb20gXCIuLi9FcnJvck1hbmFnZW1lbnQvQmFzZUVycm9yc1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFVuaXRPZldvcmtFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1NYXJrZWRBc0RlbGV0ZWQgPSBcIlRoaXMgaXRlbSB3YXMgbWFya2VkIGFzIGRlbGV0ZWQgaW4gdGhpcyBVbml0T2ZXb3JrLCBhbmQgY2Fubm90IGJlIHJldHJpZXZlZC5cIjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RhdGljIGNvbnRhaW5lciBvZiBldmVudCBcIl9fdHlwZU5hbWVcInNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlVuaXRPZldvcmtcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdFNhdmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RTYXZlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBPYmplY3REZWxldGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3REZWxldGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdFJldHJpZXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuT2JqZWN0UmV0cmlldmVkRXZlbnRcIjtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE9iamVjdERlbGV0ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3REZWxldGVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdERlbGV0ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIHR5cGVOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0UmV0cmlldmVkRXZlbnQgZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8T2JqZWN0UmV0cmlldmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFJldHJpZXZlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0U2F2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3RTYXZlZEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5PYmplY3RTYXZlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBlbnVtIEl0ZW1TdGF0dXMge1xyXG4gICAgICAgIE5ldyxcclxuICAgICAgICBNb2RpZmllZCxcclxuICAgICAgICBTYXZlZCxcclxuICAgICAgICBEZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjbGFzcyB0byBzdG9yZSBpdGVtIHN0YXR1cyBpbmZvXHJcbiAgICAgKi9cclxuICAgIGNsYXNzIFRyYWNrZWRJdGVtPFxyXG4gICAgICAgIFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPiB7XHJcbiAgICAgICAgLy8gV2lsbCBjb250YWluIGEgc2VyaWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBvYmplY3QgYXMgaXQgd2FzIHdoZW4gaXQgd2FzIGxvYWRlZCBmcm9tIHRoZSByZXBvc2l0b3J5LlxyXG5cclxuICAgICAgICBwcml2YXRlIGFzTG9hZGVkOiBJUGVyc2lzdGFibGUgLy8gV2lsbCBjb250YWluIHRoZSBzdGF0ZSBvZiB0aGUgb2JqZWN0IHdoZW4gZmlyc3QgYWRkZWQgb3IgdXBkYXRlZFxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHJpdmF0ZSBzdGF0dXM6IEl0ZW1TdGF0dXMsXHJcbiAgICAgICAgICAgIHByaXZhdGUgaXRlbTogVCxcclxuICAgICAgICAgICAgcHJpdmF0ZSBrZXk6IFRLZXlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5hc0xvYWRlZCA9IGl0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNOZXcoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5OZXc7XHJcbiAgICAgICAgICAgIHRoaXMuYXNMb2FkZWQgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNTYXZlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLlNhdmVkO1xyXG4gICAgICAgICAgICB0aGlzLmFzTG9hZGVkID0gdGhpcy5pdGVtLmdldFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5Nb2RpZmllZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNEZWxldGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuRGVsZXRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0dXMoKTogSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJdGVtKCk6IFQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEtleSgpOiBUS2V5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGhhc0NoYW5nZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudFN0YXRlKTtcclxuICAgICAgICAgICAgdmFyIGFzTG9hZGVkQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmFzTG9hZGVkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGVBc1N0cmluZyAhPT0gYXNMb2FkZWRBc1N0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiBhbiBpdGVtIGluIFwiU2F2ZWRcIiBzdGF0dXMgaGFzIGJlZW4gbW9kaWZpZWQsIGFuZCBjaGFuZ2VzIHRoZSBzdGF0dXMgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBJdGVtU3RhdHVzLlNhdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtBc01vZGlmaWVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJZGVudGl0eU1hcFxyXG4gICAgICAgIDxcclxuICAgICAgICBUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID5cclxuICAgIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZFRvT2JqZWN0TWFwOiB7IFtpZDogc3RyaW5nXTogVHJhY2tlZEl0ZW08VCwgVEtleT4gfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRydWUgaWYga2V5IGlzIGFscmVhZHkgc3RvcmVkIGluIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBpc1RyYWNrZWQoa2V5OiBUS2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRCeUlkKGtleTogVEtleSk6IFQge1xyXG4gICAgICAgICAgICB2YXIgaWRBc1N0cmluZyA9IGtleS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRUb09iamVjdE1hcFtpZEFzU3RyaW5nXS5nZXRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIG9yIHJlcGxhY2VzIGFuIGl0ZW0gdG8gdGhlIElkZW50aXR5TWFwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhZGQoa2V5OiBUS2V5LCBpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdJdGVtID0gbmV3IFRyYWNrZWRJdGVtKEl0ZW1TdGF0dXMuTmV3LCBpdGVtLCBrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXBbaWRBc1N0cmluZ10gPSBuZXdJdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIGl0ZW0gZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlKGtleTogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuaWRUb09iamVjdE1hcFtrZXkudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJZHMoKTogVEtleVtdIHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUS2V5W10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2godGhpcy5pZFRvT2JqZWN0TWFwW2VsZW1lbnRdLmdldEtleSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzRGVsZXRlZEJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubWFya0FzRGVsZXRlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc1NhdmVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNTYXZlZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc01vZGlmaWVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNNb2RpZmllZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEl0ZW1TdGF0dXMoa2V5OiBUS2V5KTogSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhY2tlZEl0ZW0uZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wdXRlcyB0aGUgY29ycmVjdCBzdGF0dXMgZm9yIGFuIGl0ZW0gaW4gXCJTYXZlZFwiIHN0YXR1cywgYXMgaXQgbWF5IGhhdmUgYmVlbiBtb2RpZmllZCBzaW5jZSBub3cgKGhlcmUgd2UgZG9uJ3QgaGF2ZSBwcm9wZXJ0eSB0cmFja2luZykuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIGl0ZW0udXBkYXRlU2F2ZWRJdGVtU3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFRyYWNrZWRJdGVtKGtleTogVEtleSk6IFRyYWNrZWRJdGVtPFQsIFRLZXk+IHtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gdGhpcy5pZFRvT2JqZWN0TWFwW2tleS50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgaWYgKCF0b1JldHVybikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSWRlbnRpdHlNYXAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3REZWxldGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9PYmplY3RSZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL09iamVjdFNhdmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Vbml0T2ZXb3JrRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG4vLyBpbXBvcnQge0luUHJvY2Vzc0Rpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSW5Qcm9jZXNzRGlzcGF0Y2hlclwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJRXZlbnRIYW5kbGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtJZGVudGl0eU1hcCwgSXRlbVN0YXR1c30gZnJvbSBcIi4vSWRlbnRpdHlNYXBcIjtcclxuLy8gaW1wb3J0IHtPYmplY3REZWxldGVkRXZlbnR9IGZyb20gXCIuL09iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge09iamVjdFNhdmVkRXZlbnR9IGZyb20gXCIuL09iamVjdFNhdmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtVbml0T2ZXb3JrRXJyb3JzfSBmcm9tIFwiLi9Vbml0T2ZXb3JrRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJUmVwb3NpdG9yeSA9IFJlcG9zaXRvcnkuSVJlcG9zaXRvcnk7XHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBJblByb2Nlc3NEaXNwYXRjaGVyID0gRG9tYWluRXZlbnRzLkluUHJvY2Vzc0Rpc3BhdGNoZXI7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBJRXZlbnRIYW5kbGVyID0gRG9tYWluRXZlbnRzLklFdmVudEhhbmRsZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgVW5pdE9mV29yayBmb3IgYSBzaW5nbGUgUmVwb3NpdG9yeS5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFVuaXRPZldvcms8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaWRNYXA6IElkZW50aXR5TWFwPFQsIFRLZXk+O1xyXG4gICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeTogSVJlcG9zaXRvcnk8VCwgVEtleT47XHJcbiAgICAgICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBJblByb2Nlc3NEaXNwYXRjaGVyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihyZXBvc2l0b3J5OiBJUmVwb3NpdG9yeTxULCBUS2V5Pikge1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwID0gbmV3IElkZW50aXR5TWFwPFQsIFRLZXk+KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBJblByb2Nlc3NEaXNwYXRjaGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBSZXBvc2l0b3J5IG9yIGZyb20gdGhlIFVuaXRPZldvcmssIGdpdmVuIGl0cyBJZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0QnlJZChrZXk6IFRLZXkpOiBUIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZE1hcC5nZXRJdGVtU3RhdHVzKGtleSkgPT09IEl0ZW1TdGF0dXMuRGVsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRPZldvcmtFcnJvcnMudGhyb3coVW5pdE9mV29ya0Vycm9ycy5JdGVtTWFya2VkQXNEZWxldGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlkTWFwLmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gdGhpcy5yZXBvc2l0b3J5LmdldEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5hZGQoa2V5LCB0b1JldHVybik7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzU2F2ZWRCeUlkKGtleSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0cmlldmVkRXZlbnQgPSBuZXcgT2JqZWN0UmV0cmlldmVkRXZlbnQodG9SZXR1cm4uX190eXBlTmFtZSwgdG9SZXR1cm4uX190eXBlVmVyc2lvbiwgdG9SZXR1cm4uZ2V0S2V5KCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChyZXRyaWV2ZWRFdmVudCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYXJrcyBhbiBpdGVtIGFzIGRlbGV0ZWQgZnJvbSB0aGUgVW5pdE9mV29yayAoYW5kIGZyb20gdGhlIFJlcG9zaXRvcnkgd2hlbiB0aGUgVW9XIHdpbGwgYmUgc2F2ZWQpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlbGV0ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAubWFya0FzRGVsZXRlZEJ5SWQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNhdmVBbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5pZE1hcC5nZXRJZHMoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IG9mIGtleXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTWFwLnVwZGF0ZVNhdmVkSXRlbVN0YXR1cyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuaWRNYXAuZ2V0SXRlbVN0YXR1cyhrZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLkRlbGV0ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0RlbGV0ZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5Nb2RpZmllZDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuTmV3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NOZXdPck1vZGlmaWVkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuU2F2ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIudW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcHJvY2Vzc0RlbGV0ZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB2YXIgZGVsZXRlZEV2ZW50ID0gbmV3IE9iamVjdERlbGV0ZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwga2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlRXZlbnQoZGVsZXRlZEV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgcHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcnkuc2F2ZShpdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuICAgICAgICAgICAgLy8gcmFpc2VzIGFuIGV2ZW50IGZvciB3aG9tZXZlciBpcyBpbnRlcmVzdGVkXHJcbiAgICAgICAgICAgIHZhciBzYXZlZEV2ZW50ID0gbmV3IE9iamVjdFNhdmVkRXZlbnQoaXRlbS5fX3R5cGVOYW1lLCBpdGVtLl9fdHlwZVZlcnNpb24sIGtleS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KHNhdmVkRXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXBsZXRlbHkgcmVtb3ZlcyBhbiBvYmplY3QgZnJvbSB0aGUgSWRlbnRpdHlNYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHJlbW92ZUJ5SWQoa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkTWFwLnJlbW92ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==