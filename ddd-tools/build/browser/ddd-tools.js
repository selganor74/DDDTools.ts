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
                    return DomainDispatcher.dispatch(event).finally(function () {
                        deferred.resolve(toReturn);
                    });
                }).catch(function (error) {
                    var reason = _this.buildError(error, Repository.Errors.ItemNotFound);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGRkLXRvb2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlYWRNb2RlbC9JUmVhZE1vZGVsQXN5bmMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUXVlcnkvSVF1ZXJ5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1F1ZXJ5L0lRdWVyeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1V0aWxzL1NpbXBsZUd1aWQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVSZWdFeHAudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemFibGVOdWxsLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NlcmlhbGl6YXRpb24vVG91Y2gudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9FcnJvcnMudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JS2V5VmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9WYWx1ZU9iamVjdHMvR3VpZC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9JU3RhdGVNYWNoaW5lLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0lEaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9CYXNlU3RhdGVNYWNoaW5lLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvVmFsdWVPYmplY3RzL01vbmV5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9JRW50aXR5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0VudGl0eS9CYXNlS2V5VmFsdWVPYmplY3QudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXIudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvRW50aXR5L0Jhc2VFbnRpdHkudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvU2F2ZUFjdGlvbkVudW0udHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JUmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXJyb3JzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1BZGRlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvSXRlbURlbGV0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1SZXRyaWV2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0l0ZW1VcGRhdGVkRXZlbnQudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvUmVwb3NpdG9yeS9JdGVtUmVwbGFjZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvQmFzZVJlcG9zaXRvcnlBc3luYy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0luTWVtb3J5UmVwb3NpdG9yeUFzeW5jLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1NhZ2EvSVNhZ2EudHMiLCIuLi8uLi9zcmMvREREVG9vbHMvU2FnYS9CYXNlU2FnYS50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0lVbml0T2ZXb3JrLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29ya0Vycm9ycy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0V2ZW50cy50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdERlbGV0ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL09iamVjdFJldHJpZXZlZEV2ZW50LnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvT2JqZWN0U2F2ZWRFdmVudC50cyIsIi4uLy4uL3NyYy9ERERUb29scy9Vbml0T2ZXb3JrL0lkZW50aXR5TWFwLnRzIiwiLi4vLi4vc3JjL0RERFRvb2xzL1VuaXRPZldvcmsvVW5pdE9mV29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztHQUVHO0FBQ0gsSUFBVSxRQUFRLENBY2pCO0FBZEQsV0FBVSxRQUFRO0lBQUMsSUFBQSxlQUFlLENBY2pDO0lBZGtCLFdBQUEsZUFBZSxFQUFDLENBQUM7UUFDaEM7WUFBQTtZQVlBLENBQUM7WUFWVSxnQkFBSyxHQUFaLFVBQWEsSUFBWSxFQUFFLE9BQWdCO2dCQUN2QyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxNQUFNLEdBQUcsQ0FBQztZQUNkLENBQUM7WUFFTSwyQkFBZ0IsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLE9BQWdCO2dCQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDO1lB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KlxyXG4gKiBNaW5pbWFsIEVycm9yIGhhbmRsaW5nIGJhc2UgYmVoYXZpb3JzIGZvciB0aGUgZG9tYWluIG1vZGVsLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkVycm9yTWFuYWdlbWVudCB7XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVycm9ycyB7XHJcblxyXG4gICAgICAgIHN0YXRpYyB0aHJvdyhuYW1lOiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGVyciA9IEJhc2VFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShuYW1lLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldEVycm9ySW5zdGFuY2UobmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKTogRXJyb3Ige1xyXG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UgfHwgbmFtZSk7XHJcbiAgICAgICAgICAgIGVyci5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlByb21pc2VzIHtcclxuXHJcbiAgICBleHBvcnQgdmFyIFByb21pc2VIYW5kbGVyOiBuZy5JUVNlcnZpY2U7XHJcbiAgICBleHBvcnQgaW1wb3J0IElQcm9taXNlID0gbmcuSVByb21pc2U7XHJcbiAgICBleHBvcnQgaW1wb3J0IERlZmVycmVkID0gbmcuSURlZmVycmVkO1xyXG4gXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgY29kZSBmb3JjZXMgREREVG9vbHMgdG8gdXNlICRxIHByb21pc2VzIGlmIGFuZ3VsYXIgaXMgZGVmaW5lZCBhdCB0aGUgbW9tZW50IGRkZC10b29scyBpcyBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgaWYgKHR5cGVvZiBhbmd1bGFyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgdmFyICRpbmplY3RvciA9IGFuZ3VsYXIuaW5qZWN0b3IoWyduZyddKTtcclxuICAgICAgICB2YXIgJHEgPSAkaW5qZWN0b3IuZ2V0KFwiJHFcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgUHJvbWlzZUhhbmRsZXIgPSAkcTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKFEpIHtcclxuICAgICAgICAgICAgLy8gVE9ETyBUaGlzIGNhc3QgaXMgZWZmZWN0aXZlbHkgYSByaXNrISBIb3cgdG8gbWFuYWdlIGl0IGNvcnJlY3RseSA/IFxyXG4gICAgICAgICAgICBQcm9taXNlSGFuZGxlciA9IDxuZy5JUVNlcnZpY2U+KDxhbnk+USk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAvLyBXZSBkaWRuJ3QgZmluZCBhIHN1aXRhYmxlIFByb21pc2VIYW5kbGVyXHJcbiAgICBpZiAoUHJvbWlzZUhhbmRsZXIgPT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoXCJBIFByb21pc2UgSGFuZGxlciBtdXN0IGJlIGRlZmluZWQsIHN1cHBvcnRlZCBhcmUgYW5ndWxhcidzICRxIG9yIGtyaXMga293YWwncyBRLiBUaGlzIG1lYW5zIHRoYXQgUSBvciBhbmd1bGFyIE1VU1QgYmUgbG9hZGVkIGJlZm9yZSBkZGQtdG9vbHMuanNcIik7XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZWFkTW9kZWwge1xyXG5cclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICAgIElkZW50aWZpZXMgYSByZWFkbW9kZWwgaW4gdGhlIHN5c3RlbS5cclxuICAgICAgICBBIFJlYWRtb2RlbCB3aWxsIGJlIHByb2JhYmx5IHBlcnNpc3RlZCB0byBzb21lIGtpbmQgb2YgZGF0YWJhc2UsXHJcbiAgICAgICAgZWl0aGVyIGluIG1lbW9yeSBvciBkaXNrIG9yIC4uLlxyXG4gICAgICAgIEl0IGlzIHNvbWVob3cgc2ltaWxhciB0byBhIHJlcG9zaXRvcnksIGJ1dCBpdCBjYW4gc3RvcmUgYW55IGtpbmQgb2Ygc3RhdHVzLFxyXG4gICAgICAgIG5vdCBuZWNlc3NhcmlseSBhbiBhZ2dyZWdhdGUgcm9vdC5cclxuICAgICAgICBPYmplY3RzIHN0b3JlZCBpbiB0aGUgUmVhZE1vZGVsIHdpbGwgcHJvYmFibHkgaGF2ZSBhbGwgcHVibGljIG1lbWJlcnMuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVJlYWRNb2RlbEFzeW5jPFQ+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgV2lsbCBpbnNlcnQgYSBuZXcgb2JqZWN0IGluIHRoZSByZWFkbW9kZWwuXHJcbiAgICAgICAgICAgIEl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5IGFscmVhZHkgZXhpc3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5zZXJ0KHZhbHVlOiBULCBrZXk6IHN0cmluZyk6IElQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgICAgV2lsbCB1cGRhdGUgYW4gZXhpc3Rpbmcgb25qZWN0IGluIHRoZSByZWFkbW9kZWxcclxuICAgICAgICAgICAgSXQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgb2JqZWN0IGRvZXNuJ3QgZXhpc3QuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdXBkYXRlKHZhbHVlOiBULCBrZXk6IHN0cmluZyk6IElQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICBXaWxsIGluc2VydCBvciB1cGRhdGUgYW4gb2JqZWN0IHdpdGggYSBzcGVjaWZpZWQga2V5XHJcbiAgICAgICAgKi9cclxuICAgICAgICBpbnNlcnRPclVwZGF0ZSh2YWx1ZTogVCwga2V5OiBzdHJpbmcpOiBJUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgV2lsbCBkZWxldGUgYW4gZWxlbWVudCBvZiB0aGUgUmVhZE1vZGVsIGNvbGxlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBkZWxldGVCeUtleShrZXk6IHN0cmluZyk6IElQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICBXaWxsIGRlbGV0ZSBhIHNldCBvZiBlbGVtZW50cyBvZiB0aGUgUmVhZE1vZGVsIGNvbGxlY3Rpb24gaWRlbnRpZmllZCBieSBhIHF1ZXJ5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlQnlRdWVyeShxdWVyeTogYW55KTogSVByb21pc2U8dm9pZD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgIFdpbGwgY2xlYXIgdGhlIGNvbGxlY3Rpb24gZGVsZXRpbmcgYWxsIG9mIHRoZSBjb250ZW50LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgY2xlYXIoKTogSVByb21pc2U8dm9pZD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgIEJ5IG5vdyB0aGUgcXVlcnkgb2JqZWN0IGlzIGxlZnQgdG8gdGhlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgc2VsZWN0KHF1ZXJ5OiBhbnkpOiBJUHJvbWlzZTxUW10+O1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlF1ZXJ5IHtcclxuICAgIC8qKlxyXG4gICAgICogSWRlbnRpZmllcyBhIHF1ZXJ5IHRvIGJlIGV4ZWN1dGVkIGFnYWluc3QgYSBEYXRhc3RvcmVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVlcnk8VD4ge1xyXG4gICAgICAgIHNldFF1ZXJ5KHF1ZXJ5T2JqZWN0OiBhbnkpO1xyXG4gICAgICAgIGV4ZWN1dGUoKTogVFtdO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5RdWVyeSB7XHJcbiAgICBcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIElkZW50aWZpZXMgYSBxdWVyeSB0byBiZSBleGVjdXRlZCBhZ2FpbnN0IGEgRGF0YXN0b3JlIGluIGFuIGFzeW5jIGZhc2hpb25cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVlcnlBc3luYzxUPiB7XHJcbiAgICAgICAgc2V0UXVlcnkocXVlcnlPYmplY3Q6IGFueSk7XHJcbiAgICAgICAgZXhlY3V0ZSgpOiBJUHJvbWlzZTxUW10+O1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFNvbWUgc2ltcGxlIGNsYXNzZXMgdXNlZCBpbiBkaWZmZXJlbnQgbW9kdWxlcy5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5VdGlscyB7XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBTaW1wbGVHdWlkIHtcclxuXHRcdC8vIEhlbHBlciBmb3IgZ3VpZCBnZW5lcmF0aW9uLlxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNWYWxpZChndWlkOiBzdHJpbmcpIHtcclxuXHRcdFx0dmFyIGd1aWRSZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJeW3soXT9bMC05QS1GYS1mXXs4fVstXT8oWzAtOUEtRmEtZl17NH1bLV0/KXszfVswLTlBLUZhLWZdezEyfVspfV0/JFwiKTtcclxuXHRcdFx0cmV0dXJuIGd1aWRSZWdleHAudGVzdChndWlkKTtcclxuXHRcdH1cclxuXHJcblx0XHRwcml2YXRlIHN0YXRpYyBzNCgpIHtcclxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcblx0XHRcdFx0LnRvU3RyaW5nKDE2KVxyXG5cdFx0XHRcdC5zdWJzdHJpbmcoMSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpOiBzdHJpbmcge1xyXG5cdFx0XHR2YXIgbmV3U2ltcGxlR3VpZCA9IFwie1wiICsgU2ltcGxlR3VpZC5zNCgpICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICtcclxuXHRcdFx0XHRTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwifVwiO1xyXG5cclxuXHRcdFx0aWYgKFNpbXBsZUd1aWQuaXNWYWxpZChuZXdTaW1wbGVHdWlkKSkge1xyXG5cdFx0XHRcdHJldHVybiBuZXdTaW1wbGVHdWlkO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNob3VsZCBOZXZlciBIYXBwZW4hIFRoZSBnZW5lcmF0ZWQgZ3VpZCBpcyBub3QgdmFsaWQhXCIpXHJcblx0XHR9XHJcblx0fVxyXG59IiwibmFtZXNwYWNlIERERFRvb2xzLlV0aWxzIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2ltcGxlSWRlbnRpdHlNYXAge1xyXG5cclxuICAgICAgICBwcml2YXRlIGlkVG9PYmplY3RNYXA6IHsgW2lkOiBzdHJpbmddOiBhbnkgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNUcmFja2VkKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRUb09iamVjdE1hcFtpZF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNrZWQoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhZGQoaWQ6IHN0cmluZywgb2JqZWN0OiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXBbaWRdID0gb2JqZWN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyBhbGwgdGhlIGlkcyBpbiB0aGUgbWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldElkcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRlbGV0ZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuQ29tbW9uSW50ZXJmYWNlcyB7XHJcblx0ZXhwb3J0IGludGVyZmFjZSBJRXF1YXRhYmxlPFQ+IHtcclxuXHRcdGVxdWFscyhpdGVtOiBUKTogYm9vbGVhbjtcclxuXHR9XHJcbn0iLCJcclxubmFtZXNwYWNlIERERFRvb2xzLkNvbW1vbkludGVyZmFjZXMge1xyXG4gICAgXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZztcclxuICAgICAgICBfX3R5cGVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgX19vYmplY3RJbnN0YW5jZUlkPzogc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVEYXRlIGltcGxlbWVudHMgSVR5cGVUcmFja2luZyB7XHJcbiAgICAgICAgX190eXBlTmFtZTogc3RyaW5nID0gXCJTZXJpYWxpemFibGVEYXRlXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbjogc3RyaW5nID0gXCJ2MVwiO1xyXG4gICAgICAgIF9fZGF0ZUFzU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGU6IERhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2RhdGVBc1N0cmluZyA9IGRhdGUudG9JU09TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0ZUZyb21TdHJpbmcoZGF0ZUFzU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVBc1N0cmluZyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXREYXRlKCk6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gU2VyaWFsaXphYmxlRGF0ZS5nZXREYXRlRnJvbVN0cmluZyh0aGlzLl9fZGF0ZUFzU3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNlcmlhbGl6YXRpb24ge1xyXG5cclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZXJpYWxpemFibGVSZWdFeHAgaW1wbGVtZW50cyBJVHlwZVRyYWNraW5nIHtcclxuICAgICAgICBfX3R5cGVOYW1lOiBzdHJpbmcgPSBcIlNlcmlhbGl6YWJsZVJlZ0V4cFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBfX3JlZ3VsYXJFeHByZXNzaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgX19mbGFnczogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihyZWdFeHA6IFJlZ0V4cCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGl0UmVnRXhwQW5kRmxhZ3MoIHJlZ0V4cCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzcGxpdFJlZ0V4cEFuZEZsYWdzKCByZWdFeHA6IFJlZ0V4cCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciByZWFsbHlVbmxpa2VseVN0cmluZyA9IFwiwrDDssOgw7nCsMKww7LDoMO5wrDCsMOyw6DDucKwXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUbyBnZXQgYSBjb3JyZWN0IHJlZ2V4cCB3ZSBtdXN0IHRha2UgYXdheSB0aGUgbGVhZGluZyBcIi9cIiBhbmQgdGhlIGZsYWdzIVxyXG4gICAgICAgICAgICB2YXIgY29uZGl0aW9uZWRTdHJpbmcgPSByZWdFeHAudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2VzIHRoZSBlc2NhcGVkIHNsYXNoZXMgd2l0aCBzb21ldGhpbmcgdmVyeSBpbXByb2JhYmxlXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbmVkU3RyaW5nID0gY29uZGl0aW9uZWRTdHJpbmcucmVwbGFjZShcIlxcXFwvXCIsIHJlYWxseVVubGlrZWx5U3RyaW5nKTtcclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gY29uZGl0aW9uZWRTdHJpbmcuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gcGFydHNbMF0gbXVzdCBhbHdheXMgYmUgdGhlIGVtcHR5IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKHBhcnRzWzBdICE9PSBcIlwiKSB0aHJvdyBuZXcgRXJyb3IoXCJzcGxpdFJlZ0V4cEFuZEZsYWdzOiBUaGlzIHNob3VsZCBuZXZlciBoYXBwZW4hXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZXN0b3JlIHdoYXQgXHJcbiAgICAgICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZShyZWFsbHlVbmxpa2VseVN0cmluZywgXCJcXFxcL1wiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiA9IHBhcnRzWzFdO1xyXG4gICAgICAgICAgICB0aGlzLl9fZmxhZ3MgPSBwYXJ0c1syXSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cgKFwic3BsaXRSZWdFeHA6IFwiICsgcmVnRXhwLnRvU3RyaW5nKCkgKyBcIiAuLi4gXCIgKyB0aGlzLl9fcmVndWxhckV4cHJlc3Npb24gKyBcIiAuLi4gXCIgKyB0aGlzLl9fZmxhZ3MgKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRSZWdFeHBGcm9tUmVnRXhwQW5kRmxhZ3MocmVndWxhckV4cHJlc3Npb246IHN0cmluZywgZmxhZ3M6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IFJlZ0V4cDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0UmVnRXhwOiBcIiArIHRoaXMuX19yZWd1bGFyRXhwcmVzc2lvbiArIFwiIC4uLiBcIiArIHRoaXMuX19mbGFncyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZmxhZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvbiwgZmxhZ3MpOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gbmV3IFJlZ0V4cChyZWd1bGFyRXhwcmVzc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogR2V0IGJhY2sgYSBSZWd1bGFyIEV4cHJlc3Npb24gZnJvbSB0aGUgU2VyaWFsaXphYmxlUmVnRXhwIGluc3RhbmNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldFJlZ0V4cCgpOiBSZWdFeHAge1xyXG4gICAgICAgICAgICByZXR1cm4gU2VyaWFsaXphYmxlUmVnRXhwLmdldFJlZ0V4cEZyb21SZWdFeHBBbmRGbGFncyh0aGlzLl9fcmVndWxhckV4cHJlc3Npb24sIHRoaXMuX19mbGFncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlTnVsbCBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiU2VyaWFsaXphYmxlTnVsbFwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9VdGlscy9TaW1wbGVHdWlkLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVG91Y2gge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB0b3VjaEluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJlcGFyZXMgdGhlIGlkIGdlbmVyYXRvciBmb3IgYSBuZXcgcnVuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZXNldFRvdWNoSW5kZXgoKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFRvdWNoO1xyXG4gICAgICAgICAgICBzVGhpcy50b3VjaEluZGV4ID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGdldE5ld0luZGV4KCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBTaW1wbGVHdWlkLmdlbmVyYXRlKClcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVG91Y2g7XHJcbiAgICAgICAgICAgIHNUaGlzLnRvdWNoSW5kZXgrKztcclxuICAgICAgICAgICAgcmV0dXJuIChzVGhpcy50b3VjaEluZGV4KysgLSAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogYWRkcyBhbiBfX29iamVjdEluc3RhbmNlSWQgcHJvcGVydHkgdG8gYW4gb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB0b3VjaChvYmplY3Q6IGFueSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUb3VjaFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld0lkID0gc1RoaXMuZ2V0TmV3SW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5fX29iamVjdEluc3RhbmNlSWQgPSBuZXdJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVtb3ZlcyB0aGUgX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5IGZyb20gYW4gb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB1bnRvdWNoKG9iamVjdDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QuX19vYmplY3RJbnN0YW5jZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0Ll9fb2JqZWN0SW5zdGFuY2VJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY2hlY2tzIGZvciB0aGUgcHJlc2VuY2Ugb2YgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBoYXNCZWVuVG91Y2hlZChvYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICB2YXIgY2FzdGVkID0gPElUeXBlVHJhY2tpbmc+b2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAoY2FzdGVkLl9fb2JqZWN0SW5zdGFuY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUd1aWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vU2VyaWFsaXphYmxlRGF0ZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZVJlZ0V4cC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RvdWNoLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7U2ltcGxlR3VpZH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUd1aWRcIjtcclxuLy8gaW1wb3J0IHtTaW1wbGVJZGVudGl0eU1hcH0gZnJvbSBcIi4uL1V0aWxzL1NpbXBsZUlkZW50aXR5TWFwXCI7XHJcbi8vIGltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6YWJsZURhdGV9IGZyb20gXCIuL1NlcmlhbGl6YWJsZURhdGVcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVSZWdFeHB9IGZyb20gXCIuL1NlcmlhbGl6YWJsZVJlZ0V4cFwiO1xyXG4vLyBpbXBvcnQge1RvdWNofSBmcm9tIFwiLi9Ub3VjaFwiO1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgSlNPTiBzdHJpbmcgc2VyaWFsaXphdGlvbi4gSXQgZXh0ZW5kcyB0aGUgZnVuY3Rpb25hbGl0aWVzIG9mIEpTT04uc3RyaW5naWZ5IHRvIGFsbG93IHNlcmlhbGl6YXRpb24gYW5kIGRlc2VyaWFsaXphdGlvbiBvZiBkYXRlIGFuZCByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0cywgYW5kIG9iamVjdCByZWZlcmVuY2UuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuU2VyaWFsaXphdGlvbiB7XHJcblxyXG4gICAgaW1wb3J0IFNpbXBsZUd1aWQgPSBVdGlscy5TaW1wbGVHdWlkO1xyXG4gICAgaW1wb3J0IFNpbXBsZUlkZW50aXR5TWFwID0gVXRpbHMuU2ltcGxlSWRlbnRpdHlNYXA7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIERlc2VyaWFsaXplciB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhpcyBpcyBuZWVkZWQgdG8gdHJhY2sgb2JqZWN0IGluc3RhbmNlcyB0byBhY2hpZXZlIGNvcnJlY3QgcmVjb25zdHJ1Y3Rpb24gb2YgdGhlIG9iamVjdCB0cmVlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlkZW50aXR5TWFwOiBTaW1wbGVJZGVudGl0eU1hcDtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlc2VyaWFsaXplcyBhbiBvYmplY3QgZnJvbSBhIEpTT04gc3RyaW5nLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemUodG9EZXNlcmlhbGl6ZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICAgICAgRGVzZXJpYWxpemVyLmlkZW50aXR5TWFwID0gbmV3IFNpbXBsZUlkZW50aXR5TWFwKCk7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybiA9IEpTT04ucGFyc2UodG9EZXNlcmlhbGl6ZSwgRGVzZXJpYWxpemVyLmN1c3RvbVJldml2ZXIpO1xyXG4gICAgICAgICAgICBEZXNlcmlhbGl6ZXIuY2xlYW51cCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXNlcmlhbGl6ZXMgYW4gb2JqZWN0IHByZXZpb3VzbHkgc2VyaWFsaXplZCB3aXRoIFwiU2VyaWFsaXplVG9PYmplY3RcIlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemVGcm9tT2JqZWN0KHRvRGVzZXJpYWxpemU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBzb3VyY2VBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRvRGVzZXJpYWxpemUpO1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBEZXNlcmlhbGl6ZXIuZGVzZXJpYWxpemUoc291cmNlQXNTdHJpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDbGVhbnMgdGhlIHJlY29uc2l0dXRlZCBpbnN0YW5jZXMgZnJvbSB0aGUgX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5LFxyXG4gICAgICAgICAqIGFuZCBlbXB0aWVzIHRoZSBJZGVudGl0eU1hcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBjbGVhbnVwKCkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBEZXNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIHZhciBpZE1hcCA9IHNUaGlzLmlkZW50aXR5TWFwO1xyXG4gICAgICAgICAgICB2YXIgdW50b3VjaCA9IFRvdWNoLnVudG91Y2g7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGlkTWFwLmdldElkcygpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSBpZE1hcC5nZXRCeUlkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdW50b3VjaChjdXJyZW50SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBsZWF2ZSB0aGUgaW5zdGFuY2VzIFwiZ2FyYmFnZWFibGVcIi4uLiBob3cgdG8gdGVzdCA/ICAgIFxyXG4gICAgICAgICAgICAgICAgaWRNYXAuZGVsZXRlQnlJZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSXQgaGFuZGxlcyBGYWtlKiBpbnN0YW5jZXMgdXNlcyBfX29iamVjdEluc3RhbmNlSWQgdG8gcmVidWlsZCBhIGNvcnJlY3Qgb2JqZWN0IHRyZWUuIFxyXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYnkgSlNPTi5wYXJzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGN1c3RvbVJldml2ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRGVzZXJpYWxpemVyO1xyXG4gICAgICAgICAgICB2YXIgaWRNYXAgPSBzVGhpcy5pZGVudGl0eU1hcDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzVGhpcy5oYXNCZWVuVG91Y2hlZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRNYXAuaXNUcmFja2VkKHZhbHVlLl9fb2JqZWN0SW5zdGFuY2VJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkTWFwLmdldEJ5SWQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc1RoaXMuRmFrZVJlZ0V4cERlc2VyaWFsaXplcih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gc1RoaXMuRmFrZURhdGVEZXNlcmlhbGl6ZXIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNUaGlzLkZha2VOdWxsRGVzZXJpYWxpemVyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE1hcC5hZGQodmFsdWUuX19vYmplY3RJbnN0YW5jZUlkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY2hlY2tzIGZvciB0aGUgcHJlc2VuY2Ugb2YgYW4gX19vYmplY3RJbnN0YW5jZUlkIHByb3BlcnR5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaGFzQmVlblRvdWNoZWQob2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGNhc3RlZCA9IDxJVHlwZVRyYWNraW5nPm9iamVjdDtcclxuICAgICAgICAgICAgaWYgKGNhc3RlZC5fX29iamVjdEluc3RhbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hbmFnZXMgUmVnRXhwIERlc2VyaWFsaXphdGlvblxyXG4gICAgICAgICAqIFRPRE86IEZpbmQgYSB3YXkgdG8gbW92ZSB0aGlzIHJlc3BvbnNpYmlsaXR5IHRvIHRoZSBTZXJpYWxpemFibGVSZWdFeHBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGYWtlUmVnRXhwRGVzZXJpYWxpemVyKHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgPT09IFwiU2VyaWFsaXphYmxlUmVnRXhwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFNlcmlhbGl6YWJsZVJlZ0V4cC5nZXRSZWdFeHBGcm9tUmVnRXhwQW5kRmxhZ3ModmFsdWUuX19yZWd1bGFyRXhwcmVzc2lvbiwgdmFsdWUuX19mbGFncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFuYWdlcyBEYXRlIERlc2VyaWFsaXphdGlvblxyXG4gICAgICAgICAqIFRPRE86IEZpbmQgYSB3YXkgdG8gbW92ZSB0aGlzIHJlc3BvbnNpYmlsaXR5IHRvIHRoZSBTZXJpYWxpemFibGVSZWdFeHBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGYWtlRGF0ZURlc2VyaWFsaXplcih2YWx1ZTogYW55KTogYW55IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lID09PSBcIlNlcmlhbGl6YWJsZURhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gU2VyaWFsaXphYmxlRGF0ZS5nZXREYXRlRnJvbVN0cmluZyh2YWx1ZS5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTWFuYWdlcyBOdWxsIERlc2VyaWFsaXphdGlvblxyXG4gICAgICAgICAqIFRPRE86IEZpbmQgYSB3YXkgdG8gbW92ZSB0aGlzIHJlc3BvbnNpYmlsaXR5IHRvIHRoZSBTZXJpYWxpemFibGVOdWxsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRmFrZU51bGxEZXNlcmlhbGl6ZXIodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuX190eXBlTmFtZSA9PT0gXCJTZXJpYWxpemFibGVOdWxsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NlcmlhbGl6YWJsZURhdGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVSZWdFeHAudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TZXJpYWxpemFibGVOdWxsLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVG91Y2gudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtTZXJpYWxpemFibGVEYXRlfSBmcm9tIFwiLi9TZXJpYWxpemFibGVEYXRlXCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXphYmxlUmVnRXhwfSBmcm9tIFwiLi9TZXJpYWxpemFibGVSZWdFeHBcIjtcclxuLy8gaW1wb3J0IHtUb3VjaH0gZnJvbSBcIi4vVG91Y2hcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXplciB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VyaWFsaXplcyBhbiBvYmplY3QgdG8gYSBKU09OIHN0cmluZywga2VlcGVpbmcgdHJhY2sgb2YgdGhlIGluc3RhbmNlcyBvZiB0aGUgb2JqZWN0cyBzZXJpYWxpemVkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemUodG9TZXJpYWxpemU6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciB0b1JldHVybjtcclxuICAgICAgICAgICAgVG91Y2gucmVzZXRUb3VjaEluZGV4KCk7XHJcbiAgICAgICAgICAgIFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24odG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICBTZXJpYWxpemVyLnRvdWNoU291cmNlT2JqZWN0KHRvU2VyaWFsaXplKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gSlNPTi5zdHJpbmdpZnkodG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgU2VyaWFsaXplci5wb3N0cHJvY2Vzc0ZvclNlcmlhbGl6YWJsZVN1YnN0aXR1dGlvbih0b1NlcmlhbGl6ZSk7XHJcbiAgICAgICAgICAgICAgICBTZXJpYWxpemVyLnVudG91Y2hTb3VyY2VPYmplY3QodG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlcmlhbGl6ZXMgYW4gb2JqZWN0IHRvIC4uLiBhIG5ldyBvYmplY3QuIFRoZSBzZXJpYWxpemVkIG9iamVjdCB3aWxsIGhhdmUgU2VyaWFsaXphYmxlIHZlcnNpb24gb2YgRGF0ZXMsIG51bGwgYW5kIFJlZ0V4cCB2YWx1ZSwgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgdHlwZXMuXHJcbiAgICAgICAgICogVGhlIHNlcmlhbGl6ZWQgb2JqZWN0IHdpbGwgaGF2ZSBvbmx5IGRhdGEgYW5kIG5vIG1ldGhvZHMgZm9yIG5vbiBuYXRpdmUgb2JqZWN0cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZVRvT2JqZWN0KHRvU2VyaWFsaXplOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBTZXJpYWxpemVyO1xyXG4gICAgICAgICAgICB2YXIgc291cmNlQXNTdHJpbmcgPSBzVGhpcy5zZXJpYWxpemUodG9TZXJpYWxpemUpO1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBKU09OLnBhcnNlKHNvdXJjZUFzU3RyaW5nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFByZXByb2Nlc3MgdGhlIG9iamVjdCB0cmVlIHRvIGJlIHNlcmlhbGl6ZWQgdG8gZmluZCBhbmQgcmVwbGFjZSBEYXRlLCBudWxsLCBSZWdFeHAsIC4uLiBvYmplY3RzIHdpdGggc29tZXRoaW5nIGRpZmZlcmVudC4uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZURhdGUgPSBuZXcgU2VyaWFsaXphYmxlRGF0ZShjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VEYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RmFrZU51bGwgPSBuZXcgU2VyaWFsaXphYmxlTnVsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gbmV3RmFrZU51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdGYWtlUmVnRXhwID0gbmV3IFNlcmlhbGl6YWJsZVJlZ0V4cChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG5ld0Zha2VSZWdFeHA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucHJlcHJvY2Vzc0ZvclNlcmlhbGl6YWJsZXNTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZU9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHRvdWNoU291cmNlT2JqZWN0KHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc291cmNlT2JqZWN0ID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIVRvdWNoLmhhc0JlZW5Ub3VjaGVkKHNvdXJjZU9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIFRvdWNoLnRvdWNoKHNvdXJjZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBzb3VyY2VPYmplY3RbaWR4XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShjdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNUaGlzLnRvdWNoU291cmNlT2JqZWN0KGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzb3VyY2VPYmplY3RbaWR4XSA9IHNUaGlzLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB1bnRvdWNoU291cmNlT2JqZWN0KHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFNlcmlhbGl6ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc291cmNlT2JqZWN0ID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoVG91Y2guaGFzQmVlblRvdWNoZWQoc291cmNlT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgVG91Y2gudW50b3VjaChzb3VyY2VPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzVGhpcy51bnRvdWNoU291cmNlT2JqZWN0KGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzb3VyY2VPYmplY3RbaWR4XSA9IHNUaGlzLnByZXByb2Nlc3NGb3JTZXJpYWxpemFibGVzU3Vic3RpdHV0aW9uKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQb3N0cHJvY2VzcyB0aGUgb2JqZWN0IHRyZWUgdG8gYmUgc2VyaWFsaXplZCB0byBmaW5kIGFuZCByZXBsYWNlIFNlcmlhbGl6YWJsZURhdGUvUmVnRXhwIG9iamVjdHMgd2l0aCBPcmlnaW5hbCB0eXBlcyBhZ2Fpbi4uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHBvc3Rwcm9jZXNzRm9yU2VyaWFsaXphYmxlU3Vic3RpdHV0aW9uKHNvdXJjZU9iamVjdDogYW55KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gc291cmNlT2JqZWN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZURhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9ICg8U2VyaWFsaXphYmxlRGF0ZT5jdXJyZW50KS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZU51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCBpbnN0YW5jZW9mIFNlcmlhbGl6YWJsZVJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZU9iamVjdFtpZHhdID0gKDxTZXJpYWxpemFibGVSZWdFeHA+Y3VycmVudCkuZ2V0UmVnRXhwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VPYmplY3RbaWR4XSA9IFNlcmlhbGl6ZXIucG9zdHByb2Nlc3NGb3JTZXJpYWxpemFibGVTdWJzdGl0dXRpb24oY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZU9iamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG4vKipcclxuICogRGVmaW5lcyBkZWZhdWx0IGJlaGF2aW9yIGFuZCBpbnRlcmZhY2VzIGZvciBhIFBlcnNpc3RhYmxlIE9iamVjdCwgYW4gb2JqZWN0IHRoYXQgaGFzIGEgc3RhdGUgdGhhdCB3aWxsIHByb2JhYmx5IGJlIHBlcnNpc3RlZC4gSXQgZ2l2ZXMgc3VwcG9ydCB0byBcInVwZ3JhZGVcIiBwZXJzaXN0ZWQgb2JqZWN0cy5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblx0XHJcblx0aW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSVBlcnNpc3RhYmxlIGV4dGVuZHMgSVR5cGVUcmFja2luZyB7XHJcblx0XHRnZXRVcGdyYWRlZEluc3RhbmNlPyhmcm9tSW5zdGFuY2U6IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZTtcclxuXHRcdGdldFN0YXRlKCk6IElUeXBlVHJhY2tpbmc7XHJcblx0XHRzZXRTdGF0ZShzdGF0ZTogSVR5cGVUcmFja2luZyk7XHJcblx0fVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuLy8gaW1wb3J0IHtCYXNlRXJyb3JzfSBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VtZW50L0Jhc2VFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcbiAgICBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiAgICBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuXHJcbiAgICAgICAgLy8gVGhyb3duIGJ5IHBlcnNpc3RhYmxlIG9iamVjdHNcclxuICAgICAgICBzdGF0aWMgU3RhdGVJc05vdEFuT2JqZWN0ID0gXCJTdGF0ZSBpcyBub3QgYW4gT2JqZWN0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVOYW1lTm90U2V0ID0gXCJUeXBlTmFtZSBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFR5cGVWZXJzaW9uTm90U2V0ID0gXCJUeXBlVmVyc2lvbiBub3Qgc2V0XCI7XHJcbiAgICAgICAgc3RhdGljIFVuYWJsZVRvSW5zdGFudGlhdGVUeXBlID0gXCJVbmFibGUgdG8gSW5zdGFudGlhdGUgVHlwZVwiO1xyXG4gICAgICAgIHN0YXRpYyBUeXBlUmVnaXN0cnlOb3RTZXQgPSBcIlR5cGVSZWdpc3RyeSBub3Qgc2V0XCI7XHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgRmFjdG9yeS9UeXBlUmVnaXN0cnlcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdFJlZ2lzdGVyZWQgPSBcIlR5cGUgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGUgVHlwZVJlZ2lzdHJ5XCI7XHJcbiAgICAgICAgc3RhdGljIENhbm5vdFJlZ2lzdGVyVW5kZWZpbmVkID0gXCJ0eXBlUHJvdG90eXBlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFwiXHJcblxyXG4gICAgICAgIC8vIFRocm93biBieSB0aGUgVXBncmFkZXJcclxuICAgICAgICBzdGF0aWMgVHlwZU5vdEluc3RhdGlhYmxlID0gXCJUeXBlIGlzIG5vdCBpbnN0YW50aWFibGVcIjtcclxuICAgICAgICBzdGF0aWMgVXBncmFkZVBhdGhOb3RGb3VuZCA9IFwiVXBncmFkZSBQYXRoIG5vdCBGb3VuZFwiO1xyXG4gICAgICAgIHN0YXRpYyBJbmNvcnJlY3RWZXJzaW9uRm9ybWF0ID0gXCJJbmNvcnJlY3QgVmVyc2lvbiBGb3JtYXRcIjtcclxuICAgICAgICBzdGF0aWMgV3JvbmdWZXJzaW9uSW5VcGdyYWRlZEluc3RhbmNlID0gXCJXcm9uZyBWZXJzaW9uIGluIFVwZ3JhZGVkIEluc3RhbmNlXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSUVxdWF0YWJsZS50c1wiIC8+XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgVmFsdWVPYmplY3QgcGF0dGVybi5cclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IElQZXJzaXN0YWJsZSA9IFBlcnNpc3RhYmxlT2JqZWN0LklQZXJzaXN0YWJsZTtcclxuICAgIGltcG9ydCBJRXF1YXRhYmxlID0gQ29tbW9uSW50ZXJmYWNlcy5JRXF1YXRhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSUVxdWF0YWJsZTxUPiwgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvSVZhbHVlT2JqZWN0XCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcbiAgICBpbXBvcnQgSVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuSVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUtleVZhbHVlT2JqZWN0PFQ+IGV4dGVuZHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuICAgICAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9EZXNlcmlhbGl6ZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7RmFjdG9yeX0gZnJvbSBcIi4vRmFjdG9yeVwiO1xyXG4vLyBpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuLy8gaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0IHtcclxuXHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBEZXNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLkRlc2VyaWFsaXplcjtcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVBlcnNpc3RhYmxlT2JqZWN0IGltcGxlbWVudHMgSVBlcnNpc3RhYmxlIHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgcHVibGljIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRTdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fX3R5cGVOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOYW1lTm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX190eXBlVmVyc2lvbiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlVmVyc2lvbk5vdFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0b1JlY29uc3RpdHV0ZSA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcmVjb25zdGl0dXRlZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh0b1JlY29uc3RpdHV0ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVjb25zdGl0dXRlZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0U3RhdGU8VFN0YXRlPihzdGF0ZTogVFN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5TdGF0ZUlzTm90QW5PYmplY3QsIFwic3RhdGUgZGV2ZSBlc3NlcmUgdW4gb2dnZXR0b1wiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZUVsZW1lbnQgPSBzdGF0ZVtlbGVtZW50XTtcclxuICAgICAgICAgICAgICAgIHRoaXNbZWxlbWVudF0gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUoY3VycmVudFN0YXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSggdGhpcy5nZXRTdGF0ZSgpICkgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7U2VyaWFsaXplcn0gZnJvbSBcIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlZhbHVlT2JqZWN0IHtcclxuXHJcblx0aW1wb3J0IEJhc2VQZXJzaXN0YWJsZU9iamVjdCA9IFBlcnNpc3RhYmxlT2JqZWN0LkJhc2VQZXJzaXN0YWJsZU9iamVjdDtcclxuXHRpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuXHJcblx0ZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG5cdFx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRcdGltcGxlbWVudHMgSVZhbHVlT2JqZWN0PFQ+IHtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdFx0Ly8gUGVyIG9nbmkgcHJvcHJpZXTDoCBkZWxsJ0lURU0gOnZlcmlmaWNvIGwndWd1YWdsaWFuemEgY29uIGwnaXN0YW56YSBhdHR1YWxlIFx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gXy5pc0VxdWFsKGl0ZW0sIHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRmluZHMgdGhpcyB2YWx1ZSBvYmplY3QgaW4gYW4gYXJyYXkuIFdpbGwgcmV0dXJuIGFuIGFycmF5IG9mIGluZGV4ZXMgbWF0Y2hpbmcgdGhlIHNlYXJjaGVkIG9iamVjdC5cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIGZpbmRJbkFycmF5KGNvbGxlY3Rpb246IFRbXSk6IHN0cmluZ1tdIHtcclxuXHRcdFx0dmFyIHRvUmV0dXJuOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGVsZW1lbnQgaW4gY29sbGVjdGlvbil7XHJcblx0XHRcdFx0aWYgKHRoaXMuZXF1YWxzKGNvbGxlY3Rpb25bZWxlbWVudF0pKSB7XHJcblx0XHRcdFx0XHR0b1JldHVybi5wdXNoKGVsZW1lbnQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0b1JldHVybjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUd1aWQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBDb2xsZWN0aW9uIG9mIGdlbmVyYWwgYW5kIGNvbW1vbmx5IHVzZWQgVmFsdWVPYmplY3RzLiBcclxuICovXHJcbm5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdHMge1xyXG5cclxuICAgIGltcG9ydCBTaW1wbGVHdWlkID0gVXRpbHMuU2ltcGxlR3VpZDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgR3VpZCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxHdWlkPiBpbXBsZW1lbnRzIElLZXlWYWx1ZU9iamVjdDxHdWlkPiB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVOYW1lID0gXCJERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZFwiO1xyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBwcml2YXRlIGd1aWQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZ3VpZD86IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGd1aWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZCA9IGd1aWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZCA9IFNpbXBsZUd1aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZSgpOiBHdWlkIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBHdWlkKFNpbXBsZUd1aWQuZ2VuZXJhdGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBWYWx1ZU9iamVjdHMgdXNlZCBhcyBrZXkgTVVTVCBpbXBsZW1lbnQgYSB0b1N0cmluZyBtZXRob2QgdGhhdCByZXR1cm5zIHRoZSBrZXkgYXMgc3RyaW5nLlxyXG4gICAgICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3VpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FcnJvcnMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3RzL0d1aWQudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuL0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbi8vIGltcG9ydCB7VHlwZVJlZ2lzdHJ5fSBmcm9tIFwiLi9UeXBlUmVnaXN0cnlcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgaW1wb3J0IEd1aWQgPSBERERUb29scy5WYWx1ZU9iamVjdHMuR3VpZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlcnNpc3RhYmxlT2JqZWN0RmFjdG9yeSBpcyBhbiBoZWxwZXIgY2xhc3MgdG8gY3JlYXRlIGFuZCByZWNvbnN0aXR1dGUgc3RhdGZldWwgb2JqZWN0cy5cclxuICAgICAqIEl0IGd1cmFudGVlcyB0aGF0IGEgc3RhdGZ1bCBvYmplY3QgaXMgYWx3YXlzIGNyZWF0ZWQgb3IgcmVjb25zdGl0dXRlZCB0byBpdHMgbGF0ZXN0IHZlcnNpb24uICBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB0eXBlUmVnaXN0cnk6IFR5cGVSZWdpc3RyeTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0ZXJzIGEgbmV3IElQZXJzaXN0YWJsZSB0eXBlIHdpdGggdGhlIEZhY3RvcnlcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nLCB0eXBlUHJvdG90eXBlOiBuZXcgKC4uLmFyZ3MpID0+IElQZXJzaXN0YWJsZSkge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBGYWN0b3J5O1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnR5cGVSZWdpc3RyeSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMudHlwZVJlZ2lzdHJ5ID0gbmV3IFR5cGVSZWdpc3RyeSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVHlwZVJlZ2lzdHJ5LnJlZ2lzdGVyVHlwZSh0eXBlTmFtZSwgdHlwZVZlcnNpb24sIHR5cGVQcm90b3R5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuIElmIHR5cGVWZXJzaW9uIGlzIG5vdCBzdXBwbGllZCwgbGF0ZXN0IGF2YWlsYWJsZSB2ZXJzaW9uIGlzIHJldHVybmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlVHlwZUluc3RhbmNlPFQgZXh0ZW5kcyBJUGVyc2lzdGFibGU+KHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uPzogc3RyaW5nKTogVCB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUZhY3RvcnkudHlwZVJlZ2lzdHJ5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZVZlcnNpb25NZXNzYWdlID0gdHlwZVZlcnNpb24gPyBcIiB2ZXJzaW9uICdcIiArIHR5cGVWZXJzaW9uICsgXCInXCIgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlUmVnaXN0cnlOb3RTZXQsIFwiUGxlYXNlIHJlZ2lzdGVyIGF0IGxlYXN0IGEgdHlwZSB3aXRoIHRoZSBGYWN0b3J5IGZvciB0aGUgdHlwZSAnXCIgKyB0eXBlTmFtZSArIFwiJ1wiICsgdHlwZVZlcnNpb25NZXNzYWdlICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBUeXBlUmVnaXN0cnkuZ2V0VHlwZUluc3RhbmNlPFQ+KHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAodHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciB0eXBlVG9JbnN0YXRpYXRlID0gRmFjdG9yeS5jb21wdXRlRnVsbHlRdWFsaWZpZWRUeXBlTmFtZSh0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICAvLyAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0b1JldHVybiA9IDxUPmV2YWwoXCJuZXcgXCIgKyB0eXBlVG9JbnN0YXRpYXRlICsgXCIoKVwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIC8vICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gVGhpcyBmYWlsdXJlIGlzIGV4cGVjdGVkIGlmIHdlIGFyZSBhc2tpbmcgZm9yIHRoZSBsYXRlc3QgdmVyc2lvbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIHRvUmV0dXJuID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2U8VD4odHlwZU5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRvUmV0dXJuLl9fdHlwZVZlcnNpb24gIT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyB0cnkge1xyXG4gICAgICAgICAgICAvLyAgICAgdG9SZXR1cm4gPSA8VD5ldmFsKFwibmV3IFwiICsgdHlwZU5hbWUgKyBcIigpXCIpO1xyXG4gICAgICAgICAgICAvLyB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlVuYWJsZVRvSW5zdGFudGlhdGVUeXBlLCBcIlVuYWJsZSB0byBjcmVhdGUgaW5zdGFuY2Ugb2YgXCIgKyB0eXBlTmFtZSArIFwiIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGFuIG9iamVjdCBpbnN0YW5jZSBmcm9tIGl0cyBzdGF0ZS4gV2lsbCBhbHdheXMgcmV0dXJuIHRoZSBsYXRlc3QgdmVyc2lvbiBwb3NzaWJsZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGVPYmplY3RzRnJvbVN0YXRlKHN0YXRlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXJyb3JzLnRocm93KEVycm9ycy5VbmFibGVUb0luc3RhbnRpYXRlVHlwZSwgXCJzdGF0ZSBjYW5ub3QgYmUgJ3VuZGVmaW5lZCdcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwic3RhdGUgY2Fubm90IGJlICdudWxsJ1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBNYW5hZ2VzIHRoZSBcInNwZWNpYWxcIiB0eXBlcyBEYXRlIGFuZCBSZWdFeHAuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgc3RhdGUgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChGYWN0b3J5LmlzUGVyc2lzdGFibGVPYmplY3Qoc3RhdGUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJzaXN0YWJsZTogSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0YWJsZSA9IEZhY3RvcnkuY3JlYXRlVHlwZUluc3RhbmNlKHN0YXRlLl9fdHlwZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RhYmxlLnNldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdhcnJhbnRpZXMgdGhhdCBhIHR5cGUgaXMgYWx3YXlzIHJldHVybmVkIGF0IGl0cyBsYXRlc3QgdmVyc2lvbi5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXBncmFkZWRQZXJzaXN0YWJsZSA9IFVwZ3JhZGVyLnVwZ3JhZGUocGVyc2lzdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGdyYWRlZFBlcnNpc3RhYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgaXMgbm90IGEgcGVyc2lzdGFibGVPYmplY3QgY2FuIGJlIGFuIEFycmF5IG9yIGFuIE9iamVjdCBhbmQgbXVzdCBiZSByZWNvbnN0aXR1dGVkXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IGFueSA9IEFycmF5LmlzQXJyYXkoc3RhdGUpID8gW10gOiB7fTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRFbGVtZW50IGluIHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNFbGVtZW50ID0gc3RhdGVbY3VycmVudEVsZW1lbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuW2N1cnJlbnRFbGVtZW50XSA9IEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gXCJQcmltaXRpdmVcIlwiIHR5cGVzIGFyZSByZXR1cm5lZCBhcyB0aGV5IGFyZVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3MgaWYgYW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFwiSVBlcnNpc3RhYmxlXCIgaW50ZXJmYWNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzUGVyc2lzdGFibGVPYmplY3Qob2JqZWN0VG9UZXN0OiBhbnkpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0VG9UZXN0ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGVyc2lzdGFibGUgPSA8SVBlcnNpc3RhYmxlPm9iamVjdFRvVGVzdDtcclxuICAgICAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVOYW1lIHx8IHBlcnNpc3RhYmxlLl9fdHlwZU5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFwZXJzaXN0YWJsZS5fX3R5cGVWZXJzaW9uIHx8IHBlcnNpc3RhYmxlLl9fdHlwZVZlcnNpb24gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3MgaWYgYSB0eXBlIGNhbiBiZSBpbnN0YXRpYXRlZCAoYXQgaXRzIGxhdGVzdCB2ZXJzaW9uKS4gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaXNUeXBlSW5zdGFudGlhYmxlKHR5cGVOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciB0bXBUeXBlID0gRmFjdG9yeS5jcmVhdGVUeXBlSW5zdGFuY2UodHlwZU5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIFVwZ3JhZGVyIGlzIGFuIGhlbHBlciBjbGFzcyB0byBhdXRvbWF0ZSB0aGUgXCJ1cGdyYWRlIHByb2Nlc3NcIiBvZiBhbiBvYmplY3QncyBzdGF0ZS5cclxuICAgICAqIFRoZSBVcGdyYWRlciBpcyBmb3VuZCBvbiB0aGVzZSBwcmluY2lwbGVzOlxyXG4gICAgICogICogVGhlIGxhdGVzdCB2ZXJzaW9uIEZRVE4gbXVzdCBtYXRjaCB0aGUgb25lIHNwZWNpZmllZCBieSB0aGUgcHJvcGVydHkgX190eXBlTmFtZSwgd2hpY2ggaXMgaW4gdGhlIGZvcm0gbmFtZXNwYWNlLm9iamVjdE5hbWUuXHJcbiAgICAgKiAgKiBPbGRlciB2ZXJzaW9ucyBvZiBhIFBlcnNpc3RhYmxlT2JqZWN0IE1VU1QgaGF2ZSBhIEZRVE4gaW4gdGhlIGZvcm0gbmFtZXNwYWNlLjx2ZXJzaW9uPi5vYmplY3ROYW1lLlxyXG4gICAgICogICogX190eXBlVmVyc2lvbiBNVVNUIGJlIHNwZWNpZmllZCBhcyB2PHZlcnNpb25OdW1iZXI+IHdoZXJlIHZlcnNpb24gaXMgYW4gaW50ZWdlci5cclxuICAgICAqICAqIEFsbCBvYmplY3QncyB2ZXJzaW9ucyAoZXhjbHVkaW5nIHYxKSBNVVNUIHByb3ZpZGUgYW4gZ2V0VXBncmFkZWRJbnN0YW5jZSBtZXRob2QgdGhhdCBrbm93cyBob3cgdG8gbW9kaWZ5IHN0YXRlIHRvIGdvIGZyb20gXHJcbiAgICAgKiAgICB2ZXJzaW9uIHY8biAtIDE+IHRvIHY8bj4sIHdoZXJlIG4gaXMgdGhlIHZlcnNpb24gb2YgdGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBnZXRVcGdyYWRlZEluc3RhbmNlIG1ldGhvZC4gICBcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIFVwZ3JhZGVyIHtcclxuXHJcbiAgICAgICAgLy8gQ29udGFpbnMgdGhlIGxhdGVzdCB2ZXJzaW9uIHBvc3NpYmxlIGZvciBlYWNoIHR5cGUuIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxhdGVzdFR5cGVWZXJzaW9uTWFwOiB7IFt0eXBlTmFtZTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAvLyBDb250YWlucyBmbGFncyB0byBkZXRlcm1pbmUgaWYgbGF0c3RUeXBlVmVyc2lvbk1hcCBmb3IgYSBzcGVjaWZpYyB0eXBlIGhhcyBiZWVuIGNhbGN1bGF0ZWRcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpc1ZlcnNpb25NYXBCdWlsdDogeyBbdHlwZU5hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBidWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKFVwZ3JhZGVyLmlzVmVyc2lvbk1hcEJ1aWx0W3R5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wSW5zdGFuY2UgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBVcGdyYWRlci5sYXRlc3RUeXBlVmVyc2lvbk1hcFt0eXBlTmFtZV0gPSB0bXBJbnN0YW5jZS5fX3R5cGVWZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMYXRlc3QgcG9zc2libGUgdmVyc2lvbiBmb3IgXCIgKyB0eXBlTmFtZSArIFwiIGlzIFwiICsgdG1wSW5zdGFuY2UuX190eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5vdEluc3RhdGlhYmxlLCBcIlRoZSB0eXBlIFwiICsgdHlwZU5hbWUgKyBcIiBjYW5ub3QgYmUgaW5zdGFudGlhdGVkLCBzbyBpdCBpcyBpbXBvc3NpYmxlIHRvIGlkZW50aWZ5IHRoZSBsYXRlc3QgcG9zc2libGUgdmVyc2lvbi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIC8vIExvb2tzIGZvciB0aGUgbGF0ZXN0IHZlcnNpb24sIGlmIG5vdCBhbHJlYWR5IGRvbmUuXHJcbiAgICAgICAgICAgIGlmICghVXBncmFkZXIuaXNWZXJzaW9uTWFwQnVpbHRbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBVcGdyYWRlci5idWlsZFZlcnNpb25NYXBGb3JUeXBlKHR5cGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgdmVyc2lvbiBzdXBwbGllZCBkb2Vzbid0IG1hdGNoIHRoZSBsYXRlc3QgdmVyc2lvbiBpbiB0aGUgbWFwLCB0aGUgaW5zdGFuY2UgbXVzdCBiZSB1cGdyYWRlZC5cclxuICAgICAgICAgICAgaWYgKFVwZ3JhZGVyLmxhdGVzdFR5cGVWZXJzaW9uTWFwW3R5cGVOYW1lXSAhPT0gdHlwZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdXBncmFkZShpbnN0YW5jZUZyb206IElQZXJzaXN0YWJsZSk6IElQZXJzaXN0YWJsZSB7XHJcbiAgICAgICAgICAgIC8vIElmIG9iamVjdCBkb2Vzbid0IG5lZWQgdG8gdXBncmFkZSwgdGhlbiB3ZSBhcmUgZG9uZSFcclxuICAgICAgICAgICAgaWYgKCFVcGdyYWRlci5pc0xhdGVzdFZlcnNpb25Gb3JUeXBlKGluc3RhbmNlRnJvbS5fX3R5cGVOYW1lLCBpbnN0YW5jZUZyb20uX190eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZUZyb207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gVXBncmFkZXIuY29tcHV0ZU5leHRWZXJzaW9uKGluc3RhbmNlRnJvbS5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgdmFyIHVwZ3JhZGVySW5zdGFuY2UgPSBGYWN0b3J5LmNyZWF0ZVR5cGVJbnN0YW5jZShpbnN0YW5jZUZyb20uX190eXBlTmFtZSwgbmV4dFZlcnNpb24pO1xyXG4gICAgICAgICAgICB2YXIgdXBncmFkZWQgPSB1cGdyYWRlckluc3RhbmNlLmdldFVwZ3JhZGVkSW5zdGFuY2UoaW5zdGFuY2VGcm9tKTtcclxuICAgICAgICAgICAgLy8gVmVyaWZpZXMgdGhhdCB2ZXJzaW9uIGlzIGVmZmVjdGl2ZWx5IHVwZ3JhZGVkXHJcbiAgICAgICAgICAgIGlmICh1cGdyYWRlZC5fX3R5cGVWZXJzaW9uICE9IG5leHRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLldyb25nVmVyc2lvbkluVXBncmFkZWRJbnN0YW5jZSwgXCJUaGUgZXhwZWN0ZWQgdmVyc2lvbiBvZiB0aGUgdXBncmFkZWQgaW5zdGFuY2Ugd2FzIFwiICsgbmV4dFZlcnNpb24gKyBcIiB3aGlsZSB3YXMgZm91bmQgdG8gYmUgXCIgKyB1cGdyYWRlckluc3RhbmNlLl9fdHlwZVZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBVcGdyYWRlci51cGdyYWRlKHVwZ3JhZGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZU5leHRWZXJzaW9uKHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICAvLyBWZXJzaW9uIG11c3QgYmUgaW4gdGhlIGZvcm0gdk4gd2hlcmUgdiBpcyBhIGNvbnN0YW50IGFuZCBOIGlzIGFuIGludGVnZXIuXHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgICAgIGlmICghdmVyc2lvblJlLnRlc3QodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQsIFwiU3BlY2lmaWVkIHZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gTnVtYmVyKHR5cGVWZXJzaW9uLnN1YnN0cigxKSk7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgMTtcclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dFZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGFzcyBUeXBlUmVnaXN0cnkge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyByZWdpc3RyeTogeyBbdHlwZU5hbWU6IHN0cmluZ106IHsgW3R5cGVWZXJzaW9uOiBzdHJpbmddOiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBJUGVyc2lzdGFibGUgfSB9ID0ge307XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbGF0ZXN0VmVyc2lvbnM6IHsgW3R5cGVOYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY29tbW9uVHlwZXNSZWdpc3RlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJUeXBlKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcsIHR5cGVQcm90b3R5cGU6IG5ldyAoLi4uYXJnczogYW55W10pID0+IElQZXJzaXN0YWJsZSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIGlmICghdHlwZVByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5DYW5ub3RSZWdpc3RlclVuZGVmaW5lZCwgXCJ0eXBlUHJvdG90eXBlIHN1cHBsaWVkIGZvciBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIG51bGwgb3IgdW5kZWZpbmVkIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFzVGhpcy52ZXJzaW9uSXNJbkNvcnJlY3RGb3JtYXQodHlwZVZlcnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNUaGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSA9IHRoaXMucmVnaXN0cnlbdHlwZU5hbWVdIHx8IHt9O1xyXG4gICAgICAgICAgICBzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV1bdHlwZVZlcnNpb25dID0gdHlwZVByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgICAgIHNUaGlzLnVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lLCB0eXBlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVycyB0aGUgdHlwZXMgaW4gVmFsdWVPYmplY3RzIG9uIGZpcnN0IHVzZS4uLiBcclxuICAgICAgICAgICAgLy8gVE9ETyBmaW5kIGEgd2F5IHRvIGRlbGVnYXRlIHR5cGUgcmVnaXN0cmF0aW9uIHRvIHRoZSBPYmplY3RzIGluIHRoZSBjb2xsZWN0aW9uLCBbdmlhIHBzZXVkbyByZWZsZWN0aW9uID9dXCJcclxuICAgICAgICAgICAgaWYgKCFzVGhpcy5jb21tb25UeXBlc1JlZ2lzdGVyZWQpIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmNvbW1vblR5cGVzUmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBUeXBlUmVnaXN0cnkucmVnaXN0ZXJUeXBlKFwiREREVG9vbHMuVmFsdWVPYmplY3RzLkd1aWRcIiwgXCJ2MVwiLCBHdWlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlTGF0ZXN0VmVyc2lvbnModHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIGlmICghc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVmZXJlbmNlID0gc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoc1RoaXMuaXNWZXJzaW9uR3JlYXRlcih0eXBlVmVyc2lvbiwgcmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGlzVmVyc2lvbkdyZWF0ZXIodlN1YmplY3Q6IHN0cmluZywgdlJlZmVyZW5jZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZTOiBudW1iZXIgPSBzVGhpcy5leHRyYWN0VmVyc2lvbk51bWJlcih2U3ViamVjdCk7XHJcbiAgICAgICAgICAgIHZhciB2UjogbnVtYmVyID0gc1RoaXMuZXh0cmFjdFZlcnNpb25OdW1iZXIodlJlZmVyZW5jZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2UyA+IHZSO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZXh0cmFjdFZlcnNpb25OdW1iZXIodHlwZVZlcnNpb246IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgdmFyIHZlcnNpb246IHN0cmluZyA9IHR5cGVWZXJzaW9uLnJlcGxhY2UoXCJ2XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB2YXIgYXNOdW1iZXIgPSBOdW1iZXIodmVyc2lvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhc051bWJlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0VHlwZUluc3RhbmNlPFQgZXh0ZW5kcyBJUGVyc2lzdGFibGU+KHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgaWYgKCF0eXBlVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdHlwZVZlcnNpb24gPSBzVGhpcy5nZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVHlwZU5vdFJlZ2lzdGVyZWQsIFwiVHlwZSBcIiArIHR5cGVOYW1lICsgXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIFR5cGVSZWdpc3RyeS5cIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFzVGhpcy5yZWdpc3RyeVt0eXBlTmFtZV1bdHlwZVZlcnNpb25dKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLlR5cGVOb3RSZWdpc3RlcmVkLCBcIlZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIG9mIFR5cGUgXCIgKyB0eXBlTmFtZSArIFwiIGRvZXMgbm90IGV4aXN0IGluIHRoZSBUeXBlUmVnaXN0cnkuXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB0b0luc3RhbnRpYXRlID0gc1RoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXTtcclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gPFQ+KG5ldyAoPGFueT50b0luc3RhbnRpYXRlKSgpKTtcclxuICAgICAgICAgICAgICAgIC8vdG9SZXR1cm4uX190eXBlTmFtZSA9IHR5cGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgLy90b1JldHVybi5fX3R5cGVWZXJzaW9uID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgaWYgc3BlY2lmaWVkIHZlcnNpb24gaXMgdGhlIGxhdGVzdCBmb3IgdHlwZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGlzTGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgc1RoaXMgPSBUeXBlUmVnaXN0cnk7XHJcbiAgICAgICAgICAgIHJldHVybiBzVGhpcy5nZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZSkgPT09IHR5cGVWZXJzaW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoZSBubyB2ZXJzaW9uIHR5cGUgaXMgZGVmaW5lZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzVGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gVHlwZVJlZ2lzdHJ5O1xyXG4gICAgICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXZlcnNpb25SZS50ZXN0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjb21wdXRlTmV4dFZlcnNpb24odHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IFR5cGVSZWdpc3RyeTtcclxuICAgICAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgICAgICB2YXIgdmVyc2lvblJlID0gbmV3IFJlZ0V4cChcIl52WzAtOV0rXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXNUaGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gVGhyb3cgdGhlIGNvcnJlY3QgZXhjZXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQsIFwiU3BlY2lmaWVkIHZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gTnVtYmVyKHR5cGVWZXJzaW9uLnN1YnN0cigxKSk7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgMTtcclxuICAgICAgICAgICAgdmFyIG5leHRWZXJzaW9uID0gXCJ2XCIgKyB2ZXJzaW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dFZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5TdGF0ZU1hY2hpbmUge1xyXG4gICAgXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTdGF0ZU1hY2hpbmU8XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZW51bSBvciBzdHJpbmcgbGl0ZXJhbCByZXByZXNlbnRpbmcgdGhlIHBvc3NpYmxlIHN0YXR1c2VzIG9mIHRoZSBtYWNoaW5lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgVFN0YXR1c2VzLCBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBlbnVtIG9yIHN0cmluZyBsaXRlcmFsIHJlcHJlc2VudGluZyB0aGUgcG9zc2libGUgZXZlbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgVEV2ZW50c1xyXG4gICAgPiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgaXNFdmVudFZhbGlkIHJldHVybnMgZmFsc2UsIG90aGVyd2lzZSBpdCB3aWxsIGFkdmFuY2UgdGhlIG1hY2hpbmUgdG8gdGhlIG5leHQgc3RhdHVzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb2Nlc3NFdmVudChldmVudDogVEV2ZW50cyk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZXZlbnQgaXMgdmFsaWQgZm9yIHRoZSBjdXJyZW50IHN0YXR1cy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpc0V2ZW50VmFsaWRGb3JDdXJyZW50U3RhdHVzKGV2ZW50OiBURXZlbnRzKTogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG1hY2hpbmVcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRDdXJyZW50U3RhdHVzKCk6IFRTdGF0dXNlcztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgc3RhdHVzIG9mIHRoZSBtYWNoaW5lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0UHJldmlvdXNTdGF0dXMoKTogVFN0YXR1c2VzO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuRG9tYWluRXZlbnRzIHtcclxuXHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSb2xlIGludGVyZmFjZSB0byBpZGVudGlmeSBhIERvbWFpbiBFdmVudFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElEb21haW5FdmVudCBleHRlbmRzIElQZXJzaXN0YWJsZSwgSVR5cGVUcmFja2luZyB7XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9ybSBvZiBhbiBFdmVudCBIYW5kbGVyLlxyXG4gICAgICogV2hlbiBhc3luY3Jvbm91cyBwcm9jZXNzaW5nIG9jY291ciB3aXRoaW4gYW4gSGFuZGxlciwgaXQgaXMgZ29vZCBwcmFjdGljZSB0byByZXR1cm4gYSBwcm9taXNlLCBzbyB0aGUgZGlzcGF0Y2hlciAoYW5kIHRoZSBldmVudCByYWlzZXIpXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50SGFuZGxlciB7XHJcbiAgICAgICAgKGRvbWFpbkV2ZW50OiBJRG9tYWluRXZlbnQpOiBJUHJvbWlzZTxhbnk+IHwgdm9pZDtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Eb21haW5FdmVudHMge1xyXG5cclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSURpc3BhdGNoZXIge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZWdpc3RlciBhbiBoYW5kbGVyIGZvciBhbiBldmVudCB0eXBlLlxyXG4gICAgICAgICAqIHRoZSBzY29wZSBwYXJhbWV0ZXIgaXMgdGhlIGNvbnRleHQgKHRoaXMpIGluIHdoaWNoIHRoZSBoYW5kbGVyIHdpbGwgYmUgZXhlY3V0ZWRcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyLCBzY29wZT86IGFueSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHVucmVnaXN0ZXIgYSBwcmV2aW91bHN5IHJlZ2lzdGVyZWQgaGFuZGxlciBmb3IgYW4gZXZlbnQgdHlwZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBkaXNwYXRjaGVzIGFuIGV2ZW50IHRvIHRoZSByZWdpc3RlcmVkIGhhbmRsZXJzLlxyXG4gICAgICAgICAqIGl0IHdpbGwgcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiBhbGwgcHJvbWlzZXMgd2lsbCBiZSByZXNvbHZlZCwgYW5kIHJlamVjdGVkIGlmIGFueSB3aWxsIGJlIHJlamVjdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRpc3BhdGNoKGV2ZW50OiBJRG9tYWluRXZlbnQpOiBJUHJvbWlzZTxhbnk+O1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIklTdGF0ZU1hY2hpbmUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRGlzcGF0Y2hlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TdGF0ZU1hY2hpbmUge1xyXG5cclxuICAgIGltcG9ydCBCYXNlUGVyc2lzdGFibGVPYmplY3QgPSBERERUb29scy5QZXJzaXN0YWJsZU9iamVjdC5CYXNlUGVyc2lzdGFibGVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gREREVG9vbHMuRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IERERFRvb2xzLlByb21pc2VzLklQcm9taXNlO1xyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gREREVG9vbHMuUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IERERFRvb2xzLlBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEhhbmRsZXJSZXN1bHQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIG9rVG9DaGFuZ2U/OiBib29sZWFuLFxyXG4gICAgICAgICAgICBwdWJsaWMgcmVhc29uPzogc3RyaW5nXHJcbiAgICAgICAgKSB7IH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU3RhdGVNYWNoaW5lRXZlbnQ8VFN0YXR1c2VzLCBURXZlbnRzPiBleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IFwiU3RhdGVNYWNoaW5lRXZlbnRcIjtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBjdXJyZW50U3RhdHVzOiBUU3RhdHVzZXM7XHJcbiAgICAgICAgcHJldmlvdXNTdGF0dXM6IFRTdGF0dXNlcztcclxuICAgICAgICBkZXN0aW5hdGlvblN0YXR1czogVFN0YXR1c2VzO1xyXG4gICAgICAgIHByb2Nlc3NpbmdFdmVudDogVEV2ZW50cztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBFdmVudEhhbmRsZXI8VFN0YXR1c2VzLCBURXZlbnRzPiA9IChldmVudDogU3RhdGVNYWNoaW5lRXZlbnQ8VFN0YXR1c2VzLCBURXZlbnRzPikgPT4gSVByb21pc2U8SGFuZGxlclJlc3VsdD47XHJcblxyXG4gICAgZXhwb3J0IGVudW0gS2luZHNPZkV2ZW50SGFuZGxlciB7XHJcbiAgICAgICAgYmVmb3JlRW50ZXJTdGF0dXMsXHJcbiAgICAgICAgYWZ0ZXJFbnRlclN0YXR1cyxcclxuICAgICAgICBiZWZvcmVFeGl0U3RhdHVzLFxyXG4gICAgICAgIGFmdGVyRXhpdFN0YXR1cyxcclxuICAgICAgICBvblN1Y2Nlc3NmdWxFdmVudFByb2Nlc3NlZFxyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJVG91Y2hhYmxlRXZlbnRIYW5kbGVyIHtcclxuICAgICAgICBfX19oYW5kbGVzRXZlbnQ6IEtpbmRzT2ZFdmVudEhhbmRsZXJbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSGFuZGxlckNvbGxlY3Rpb248VFN0YXR1c2VzLCBURXZlbnRzPiBleHRlbmRzIEJhc2VQZXJzaXN0YWJsZU9iamVjdCB7XHJcblxyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBcIkhhbmRsZXJDb2xsZWN0aW9uXCI7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYW5kbGVyczogRXZlbnRIYW5kbGVyPFRTdGF0dXNlcywgVEV2ZW50cz5bXSA9IFtdO1xyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJIYW5kbGVyKGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUU3RhdHVzZXMsIFRFdmVudHM+LCBldmVudFR5cGU6IEtpbmRzT2ZFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0FscmVhZHlCZWVuUmVnaXN0ZXJlZChoYW5kbGVyLCBldmVudFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoSGFuZGxlcihoYW5kbGVyLCBldmVudFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcnVuSGFuZGxlcnMoZXZlbnQ6IFN0YXRlTWFjaGluZUV2ZW50PFRTdGF0dXNlcywgVEV2ZW50cz4pOiBJUHJvbWlzZTxIYW5kbGVyUmVzdWx0PiB7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlczogSVByb21pc2U8YW55PltdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlOiBJUHJvbWlzZTxhbnk+ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBuZXcgSGFuZGxlclJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5va1RvQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnJlYXNvbiA9IEpTT04uc3RyaW5naWZ5KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlSGFuZGxlci5yZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci5hbGwocHJvbWlzZXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1JldHVybiA9IG5ldyBIYW5kbGVyUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuLm9rVG9DaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuLnJlYXNvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgb2YgcmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXAub2tUb0NoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9SZXR1cm4ub2tUb0NoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9SZXR1cm4ucmVhc29uICs9IHAucmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQWxyZWFkeUJlZW5SZWdpc3RlcmVkKGhhbmRsZXI6IEV2ZW50SGFuZGxlcjxUU3RhdHVzZXMsIFRFdmVudHM+LCBldmVudFR5cGU6IEtpbmRzT2ZFdmVudEhhbmRsZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhc1RvdWNoYWJsZTogSVRvdWNoYWJsZUV2ZW50SGFuZGxlciA9IDxJVG91Y2hhYmxlRXZlbnRIYW5kbGVyPig8YW55PmhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFscmVhZHlSZWdpc3RlcmVkRm9yVGhpc0V2ZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gYXNUb3VjaGFibGUuX19faGFuZGxlc0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnRbaWR4XTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWRGb3JUaGlzRXZlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWxyZWFkeVJlZ2lzdGVyZWRGb3JUaGlzRXZlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHRvdWNoSGFuZGxlcihoYW5kbGVyOiBFdmVudEhhbmRsZXI8VFN0YXR1c2VzLCBURXZlbnRzPiwgZXZlbnRUeXBlOiBLaW5kc09mRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBhc1RvdWNoYWJsZTogSVRvdWNoYWJsZUV2ZW50SGFuZGxlciA9IDxJVG91Y2hhYmxlRXZlbnRIYW5kbGVyPig8YW55PmhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGFzVG91Y2hhYmxlLl9fX2hhbmRsZXNFdmVudCA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0FscmVhZHlCZWVuUmVnaXN0ZXJlZChoYW5kbGVyLCBldmVudFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBhc1RvdWNoYWJsZS5fX19oYW5kbGVzRXZlbnQucHVzaChldmVudFR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uPFRTdGF0dXNlcywgVEV2ZW50cz4gPSB7IFtldmVudDogc3RyaW5nXTogeyBbZnJvbVN0YXR1czogc3RyaW5nXTogVFN0YXR1c2VzIH0gfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGVhc2UsIHJlbWVtYmVyIHRvIHNldCBfX3R5cGVOYW1lIGFuZCBfX3R5cGVWZXJzaW9uIGluIHlvdXIgZGVyaXZlZCB0eXBlcyAhXHJcbiAgICAgKiBfX3R5cGVOYW1lIGFuZCBfX3R5cGVWZXJzaW9uIHNob3VsZCBiZSBzZXQgb24gdGhlIGNvbnN0cnVjdG9yIHRvbywgYnV0IHRoaXMgbWVhbiBjaGFuZ2luZyBhIGxvdCBvZiB0aGluZ3MuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBCYXNlU3RhdGVNYWNoaW5lPFRTdGF0dXNlcywgVEV2ZW50cz4gZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3QgaW1wbGVtZW50cyBJU3RhdGVNYWNoaW5lPFRTdGF0dXNlcywgVEV2ZW50cz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIGN1cnJlbnRTdGF0dXM6IFRTdGF0dXNlcyA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBwcmV2aW91c1N0YXR1czogVFN0YXR1c2VzID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIGJlZm9yZUVudGVyU3RhdHVzSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICBwcml2YXRlIGFmdGVyRW50ZXJTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgIHByaXZhdGUgYmVmb3JlRXhpdFN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgcHJpdmF0ZSBhZnRlckV4aXRTdGF0dXNIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG4gICAgICAgIHByaXZhdGUgb25TdWNjZXNzZnVsRXZlbnRQcm9jZXNzZWRIYW5kbGVycyA9IG5ldyBIYW5kbGVyQ29sbGVjdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdHVzOiBUU3RhdHVzZXMsXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uPzogU3RhdGVNYWNoaW5lRGVmaW5pdGlvbjxUU3RhdHVzZXMsIFRFdmVudHM+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlTWFjaGluZURlZmluaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbWQgPSBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkuZ2V0U3RhdGVNYWNoaW5lKHRoaXMuX190eXBlTmFtZSwgdGhpcy5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChzbWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlTWFjaGluZURlZmluaXRpb24gPSBzbWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXR1cyA9IGluaXRpYWxTdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBUaGUgY29tcG9uZW50cyByZWdpc3RyYXRpb24gc2hvdWxkIGJlIGtlcHQgc29tZXdoZXJlIGVsc2UuLi4gb3IgbWFrZSB0aGUgY29tcG9uZW50J3MgdHlwZSByZWdpc3RyYXRpb24gaW4gdGhlIGNvbnN0cnVjdG9yIGJlY29tZSBhIHJ1bGUuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBGYWN0b3J5LnJlZ2lzdGVyVHlwZShcIkhhbmRsZXJDb2xsZWN0aW9uXCIsIFwidjFcIiwgSGFuZGxlckNvbGxlY3Rpb24pO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSB0eXBlIGhhcyBhbHJlYWR5IHJlZ2lzdGVyZWQsIHNvIG5vdGhpbmcgdG8gZG8uXHJcbiAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogT3ZlcnJpZGVzIHRoZSBQZXJzaXN0YWJsZU9iamVjdCdzIHNldFN0YXRlIHRvIGF2b2lkIHJlc3RvcmluZyBhIGNvbGxlY3Rpb24gb2YgXCJmYWtlIGhhbmRsZXJzXCInXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICAgICAgc3VwZXIuc2V0U3RhdGUoc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWxsb3dzIHRvIHVzZSB0aGUgc3RhdGUgbWFjaGluZXMgZGVmaW5pdGlvbiBwdXQgb24gdGhlIHJlZ2lzdHJ5LlxyXG4gICAgICAgICAgICAvLyBEb2luZyB0aGlzIHdheSBpdCBpcyBwb3NzaWJsZSB0byBjaGFuZ2UgYSBzdGF0ZSBtYWNoaW5lIHdpdGhvdXQgaGF2aW5nIHRvIFxyXG4gICAgICAgICAgICAvLyBTZXR1cCBhbiB1cGdyYWRlIHByb2Nlc3MuIFRcclxuICAgICAgICAgICAgLy8gQXQgdGhpcyBtb21lbnQgdGhlIHJlZ2lzdHJ5ZGVmaW5pdGlvbiBpcyBvcHRpb25hbCwgc28gdGhpcyB2ZXJzaW9uIG9mIHRoZSBcclxuICAgICAgICAgICAgLy8gc3RhdGUgbWFjaGluZSBpcyBmdWxseSBjb21wYXRpYmxlIHdpdGggdGhlIHByZXZpb3VzIHZlcnNpb24uXHJcbiAgICAgICAgICAgIHZhciBzbWQgPSBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkuZ2V0U3RhdGVNYWNoaW5lKHRoaXMuX190eXBlTmFtZSwgdGhpcy5fX3R5cGVWZXJzaW9uKTtcclxuICAgICAgICAgICAgaWYgKHNtZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU1hY2hpbmVEZWZpbml0aW9uID0gc21kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHJlaW5pdGlhbGl6ZSB0aGUgaGFuZGxlcnMgY29sbGVjdGlvbi4gYXMgaWYgdGhleSB3ZXJlIFxyXG4gICAgICAgICAgICB0aGlzLm9uU3VjY2Vzc2Z1bEV2ZW50UHJvY2Vzc2VkSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5iZWZvcmVFbnRlclN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJFbnRlclN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlRXhpdFN0YXR1c0hhbmRsZXJzID0gbmV3IEhhbmRsZXJDb2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJFeGl0U3RhdHVzSGFuZGxlcnMgPSBuZXcgSGFuZGxlckNvbGxlY3Rpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoaGFuZGxlcjogRXZlbnRIYW5kbGVyPFRTdGF0dXNlcywgVEV2ZW50cz4sIGtpbmRPZkhhbmRsZXI6IEtpbmRzT2ZFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChraW5kT2ZIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFbnRlclN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWZ0ZXJFbnRlclN0YXR1c0hhbmRsZXJzLnJlZ2lzdGVySGFuZGxlcihoYW5kbGVyLCBraW5kT2ZIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgS2luZHNPZkV2ZW50SGFuZGxlci5iZWZvcmVFbnRlclN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlRW50ZXJTdGF0dXNIYW5kbGVycy5yZWdpc3RlckhhbmRsZXIoaGFuZGxlciwga2luZE9mSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtpbmRzT2ZFdmVudEhhbmRsZXIuYWZ0ZXJFeGl0U3RhdHVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlckV4aXRTdGF0dXNIYW5kbGVycy5yZWdpc3RlckhhbmRsZXIoaGFuZGxlciwga2luZE9mSGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEtpbmRzT2ZFdmVudEhhbmRsZXIuYmVmb3JlRXhpdFN0YXR1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlRXhpdFN0YXR1c0hhbmRsZXJzLnJlZ2lzdGVySGFuZGxlcihoYW5kbGVyLCBraW5kT2ZIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBTdGF0ZSBNYWNoaW5lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEN1cnJlbnRTdGF0dXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBHZXRzIHRoZSBwcmV2aW91cyBzdGF0dXMgb2YgdGhlIE1hY2hpbmVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0UHJldmlvdXNTdGF0dXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzU3RhdHVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGVsbHMgaWYgYW4gZXZlbnQgaXMgYWxsb3dlZCB0byBiZSBwcm9jZXNzZWQgaW4gdGhlIGN1cnJlbnQgc3RhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaXNFdmVudFZhbGlkRm9yQ3VycmVudFN0YXR1cyhldmVudDogVEV2ZW50cyk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVNYWNoaW5lRGVmaW5pdGlvbls8YW55PmV2ZW50XVs8YW55PnRoaXMuY3VycmVudFN0YXR1c10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdpbGwgY2F1c2UgdGhlIHN0YXRlIG1hY2hpbmUgdG8gYWR2YW5jZSB0byB0aGUgbmV4dCBzdGF0dXMuLi4gb3IgdGhyb3cgYW4gZXhjZXB0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcm9jZXNzRXZlbnQoZXZlbnQ6IFRFdmVudHMpOiBJUHJvbWlzZTxIYW5kbGVyUmVzdWx0PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0V2ZW50VmFsaWRGb3JDdXJyZW50U3RhdHVzKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBIYW5kbGVyUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm9rVG9DaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5yZWFzb24gPSBcIkV2ZW50ICdcIiArIGV2ZW50ICsgXCInIG5vdCB2YWxpZCBpbiBzdGF0dXMgXCIgKyB0aGlzLmN1cnJlbnRTdGF0dXMgKyBcIi4gSWYgdGhpcyBpcyBub3QgZXhwZWN0ZWQsIHBsZWFzZSwgY2hlY2sgdGhlIHN0YXRlIG1hY2hpbmUgZGVmaW5pdGlvbjogXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlTWFjaGluZURlZmluaXRpb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbihyZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbmV4dFN0YXR1cyA9IHRoaXMuc3RhdGVNYWNoaW5lRGVmaW5pdGlvbls8YW55PmV2ZW50XVs8YW55PnRoaXMuY3VycmVudFN0YXR1c107XHJcblxyXG4gICAgICAgICAgICB2YXIgc21FdmVudCA9IG5ldyBTdGF0ZU1hY2hpbmVFdmVudDxUU3RhdHVzZXMsIFRFdmVudHM+KCk7XHJcblxyXG4gICAgICAgICAgICBzbUV2ZW50LmN1cnJlbnRTdGF0dXMgPSB0aGlzLmN1cnJlbnRTdGF0dXM7XHJcbiAgICAgICAgICAgIHNtRXZlbnQuZGVzdGluYXRpb25TdGF0dXMgPSBuZXh0U3RhdHVzO1xyXG4gICAgICAgICAgICBzbUV2ZW50LnByZXZpb3VzU3RhdHVzID0gdGhpcy5wcmV2aW91c1N0YXR1cztcclxuICAgICAgICAgICAgc21FdmVudC5wcm9jZXNzaW5nRXZlbnQgPSBldmVudDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZm9yZUV4aXRTdGF0dXNIYW5kbGVycy5ydW5IYW5kbGVycyhzbUV2ZW50KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lm9rVG9DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IG5ldyBIYW5kbGVyUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMub2tUb0NoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucmVhc29uID0gXCJTdGF0ZSBDaGFuZ2UgaW50ZXJydXB0ZWQgYnkgYmVmb3JlRXhpdFN0YXR1c0hhbmRsZXIocykgd2l0aCByZWFzb246IFwiICsgcmVzdWx0LnJlYXNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIucmVqZWN0KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZm9yZUVudGVyU3RhdHVzSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lm9rVG9DaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IG5ldyBIYW5kbGVyUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMub2tUb0NoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucmVhc29uID0gXCJTdGF0ZSBDaGFuZ2UgaW50ZXJydXB0ZWQgYnkgYmVmb3JlRW50ZXJTdGF0dXNIYW5kbGVyKHMpIHdpdGggcmVhc29uOiBcIiArIHJlc3VsdC5yZWFzb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VIYW5kbGVyLnJlamVjdChyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0YXR1cyA9IHRoaXMuY3VycmVudFN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0dXMgPSBuZXh0U3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZnRlckV4aXRTdGF0dXNIYW5kbGVycy5ydW5IYW5kbGVycyhzbUV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFmdGVyRW50ZXJTdGF0dXNIYW5kbGVycy5ydW5IYW5kbGVycyhzbUV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9uU3VjY2Vzc2Z1bEV2ZW50UHJvY2Vzc2VkSGFuZGxlcnMucnVuSGFuZGxlcnMoc21FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uOiBIYW5kbGVyUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU29tZSBIYW5kbGVyIGRlY2lkZWQgbm90IHRvIGFsbG93IHRoZSBzdGF0ZSBjaGFuZ2UsIHNvIHdlIHNpbXBseSByZXR1cm4gd2h5IVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkJhc2VTdGF0ZU1hY2hpbmUudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlN0YXRlTWFjaGluZSB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFN0YXRlTWFjaGluZURlZmluaXRpb25SZWdpc3RyeSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHN0YXRlTWFjaGluZURlZmluaXRpb25SZWdpc3RyeTogeyBbdHlwZUFuZFZlcnNpb246IHN0cmluZ106IFN0YXRlTWFjaGluZURlZmluaXRpb248YW55LCBhbnk+IH0gPSB7fTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRUeXBlQW5kVmVyc2lvblN0cmluZyh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZSArIFwiLVwiICsgdHlwZVZlcnNpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyU3RhdGVNYWNoaW5lPFRTdGF0dXNlcywgVEV2ZW50cz4oXHJcbiAgICAgICAgICAgIHN0YXRlTWFjaGluZVR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgc3RhdGVNYWNoaW5lVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgICAgICBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uOiBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uPFRTdGF0dXNlcywgVEV2ZW50cz5cclxuICAgICAgICApOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHR5cGVOYW1lQW5kVmVyc2lvbiA9IFN0YXRlTWFjaGluZURlZmluaXRpb25SZWdpc3RyeS5idWlsZFR5cGVBbmRWZXJzaW9uU3RyaW5nKHN0YXRlTWFjaGluZVR5cGUsIHN0YXRlTWFjaGluZVZlcnNpb24pO1xyXG4gICAgICAgICAgICBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkuc3RhdGVNYWNoaW5lRGVmaW5pdGlvblJlZ2lzdHJ5W3R5cGVOYW1lQW5kVmVyc2lvbl0gPSBzdGF0ZU1hY2hpbmVEZWZpbml0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRTdGF0ZU1hY2hpbmU8VFN0YXR1c2VzLCBURXZlbnRzPihzdGF0ZU1hY2hpbmVUeXBlOiBzdHJpbmcsIHN0YXRlTWFjaGluZVZlcnNpb246IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgdHlwZU5hbWVBbmRWZXJzaW9uID0gU3RhdGVNYWNoaW5lRGVmaW5pdGlvblJlZ2lzdHJ5LmJ1aWxkVHlwZUFuZFZlcnNpb25TdHJpbmcoc3RhdGVNYWNoaW5lVHlwZSwgc3RhdGVNYWNoaW5lVmVyc2lvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBTdGF0ZU1hY2hpbmVEZWZpbml0aW9uUmVnaXN0cnkuc3RhdGVNYWNoaW5lRGVmaW5pdGlvblJlZ2lzdHJ5W3R5cGVOYW1lQW5kVmVyc2lvbl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vKipcclxuICogQ29sbGVjdGlvbiBvZiBnZW5lcmFsIGFuZCBjb21tb25seSB1c2VkIFZhbHVlT2JqZWN0cy4gXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3RzIHtcclxuXHJcbiAgICBpbXBvcnQgSVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuSVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc2ltcGxlIHZhbHVlIG9iamVjdCB0byBtYW5hZ2UgbW9uZXkuXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBNb25leSBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxNb25leT4gaW1wbGVtZW50cyBJVmFsdWVPYmplY3Q8TW9uZXk+IHtcclxuXHJcbiAgICAgICAgcHVibGljIF9fdHlwZU5hbWUgPSBcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5Nb25leVwiO1xyXG4gICAgICAgIHB1YmxpYyBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG5cclxuICAgICAgICBwcml2YXRlIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgYW1vdW50RXVybzogbnVtYmVyO1xyXG4gICAgICAgIHByaXZhdGUgZXhjaGFuZ2U6IG51bWJlcjtcclxuICAgICAgICBwcml2YXRlIGN1cnJlbmN5OiBDdXJyZW5jeTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gYW1vdW50ICAgIGFtb3VudCBpbiB0aGUgY3VycmVuY3kgc3BlY2lmaWVkIGJ5IGN1cnJlbmN5XHJcbiAgICAgICAgICogQHBhcmFtIGN1cnJlbmN5ICBjdXJyZW5jeSBvZiB0aGUgYW1vdW50IHNwZWNpZmllZCAoaWYgbm90IHN1cHBsaWVkIHdpbGwgYmUgQ3VycmVuY2llcy5FVVJPKVxyXG4gICAgICAgICAqIEBwYXJhbSBleGNoYW5nZSAgbXVsdGlwbGllciBleGNoYW5nZSB0byBhcHBseS4gVGhpcyBpcyBhbHdheXMgdGhlIOKCrC9jdXJyZW5jeSBhbW91bnQgPT0+IDEgKiB7Y3VycmVuY3l9ID0ge2V4Y2hhbmdlfSAqIOKCrCBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgYW1vdW50PzogbnVtYmVyIHwgTW9uZXksXHJcbiAgICAgICAgICAgIGN1cnJlbmN5PzogQ3VycmVuY3ksXHJcbiAgICAgICAgICAgIGV4Y2hhbmdlPzogbnVtYmVyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYW1vdW50ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEV4Y2hhbmdlIGlzIDFcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2UgPSBleGNoYW5nZSB8fCAxLjAwMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5IHx8IG5ldyBDdXJyZW5jeShcIkVVUlwiLCBcIuKCrFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFtb3VudEV1cm8gPSB0aGlzLmFtb3VudCAqIGV4Y2hhbmdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYW1vdW50IGluc3RhbmNlb2YgTW9uZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50LmFtb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVuY3kgPSBhbW91bnQuY3VycmVuY3k7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlID0gYW1vdW50LmV4Y2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbW91bnRFdXJvID0gYW1vdW50LmFtb3VudEV1cm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb3B5KCk6IE1vbmV5IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leSh0aGlzLmFtb3VudCwgdGhpcy5jdXJyZW5jeSwgdGhpcy5leGNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QW1vdW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbW91bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0QW1vdW50RXVybygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50RXVybztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRDdXJyZW5jeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVuY3k7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2hhbmdlQW1vdW50KG5ld0Ftb3VudDogbnVtYmVyKTogTW9uZXkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbmV5KG5ld0Ftb3VudCwgdGhpcy5jdXJyZW5jeSwgdGhpcy5leGNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2hhbmdlRXhjaGFuZ2UobmV3RXhjaGFuZ2U6IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vbmV5KHRoaXMuYW1vdW50LCB0aGlzLmN1cnJlbmN5LCBuZXdFeGNoYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2hhbmdlQ3VycmVuY3kobmV3Q3VycmVuY3k6IEN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9uZXkodGhpcy5hbW91bnQsIG5ld0N1cnJlbmN5LCB0aGlzLmV4Y2hhbmdlKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGx1cyh0b0FkZDogTW9uZXkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudEV1cm8gPSB0aGlzLmdldEFtb3VudEV1cm8oKSArIHRvQWRkLmdldEFtb3VudEV1cm8oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leShuZXdBbW91bnRFdXJvKS5jaGFuZ2VFeGNoYW5nZSh0aGlzLmV4Y2hhbmdlKS5jaGFuZ2VDdXJyZW5jeSh0aGlzLmN1cnJlbmN5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtaW51cyh0b1N1YnN0cmFjdDogTW9uZXkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudEV1cm8gPSB0aGlzLmdldEFtb3VudEV1cm8oKSAtIHRvU3Vic3RyYWN0LmdldEFtb3VudEV1cm8oKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb25leShuZXdBbW91bnRFdXJvKS5jaGFuZ2VFeGNoYW5nZSh0aGlzLmV4Y2hhbmdlKS5jaGFuZ2VDdXJyZW5jeSh0aGlzLmN1cnJlbmN5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5KG11bHRpcGxpZXI6IG51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgbmV3QW1vdW50ID0gdGhpcy5nZXRBbW91bnQoKSAqIG11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZUFtb3VudChuZXdBbW91bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRpdmlkZUJ5KGRpdmlzb3I6IG51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgbmV3QW1vdW50ID0gdGhpcy5nZXRBbW91bnQoKSAvIGRpdmlzb3I7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZUFtb3VudChuZXdBbW91bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHBlcmNlbnQwXzEwMCBQZXJjZW50IHRvIGFwcGx5IGluIDEwMHRoICggMSBtZWFucyAxJSApLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGV4YW1wbGUgdmFyIGN1cnJlbnRBbW91bnQgPSBuZXcgTW9uZXkoIDEwMDAuMCApXHJcbiAgICAgICAgICogICAgICAgICAgdmFyIHdpdGhQZXJjZW50QXBwbGllZCA9IGN1cnJlbnRBbW91bnQuaW5jcmVtZW50QnlQZXJjZW50KCA1MCUgKTsgeyA9PT4gMTUwMCB9ICBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgaW5jcmVtZW50QnlQZXJjZW50KHBlcmNlbnQwXzEwMDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdBbW91bnQgPSB0aGlzLmdldEFtb3VudCgpICogKCAxICsgcGVyY2VudDBfMTAwLyAxMDAuMCApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcGVyY2VudDBfMTAwIFBlcmNlbnQgdG8gYXBwbHkgaW4gMTAwdGggKCAxIG1lYW5zIDElICkuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAZXhhbXBsZSB2YXIgY3VycmVudEFtb3VudCA9IG5ldyBNb25leSggMTAwMC4wIClcclxuICAgICAgICAgKiAgICAgICAgICB2YXIgd2l0aFBlcmNlbnRBcHBsaWVkID0gY3VycmVudEFtb3VudC5kZWNyZW1lbnRQZXJjZW50KCA1MCUgKTsgeyA9PT4gNTAwIH0gIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnRCeVBlcmNlbnQocGVyY2VudDBfMTAwOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0Ftb3VudCA9IHRoaXMuZ2V0QW1vdW50KCkgKiAoMSAtIHBlcmNlbnQwXzEwMCAvIDEwMC4wKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5MDU1L2hvdy1jYW4taS1mb3JtYXQtbnVtYmVycy1hcy1tb25leS1pbi1qYXZhc2NyaXB0XHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtYXROdW1iZXIoXHJcbiAgICAgICAgICAgIGRlY2ltYWxzOiBudW1iZXIgPSAyLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3I6IHN0cmluZyA9IFwiLlwiLFxyXG4gICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPSBcIixcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aE9mV2hvbGVQYXJ0ID0gMztcclxuICAgICAgICAgICAgdmFyIHJlID0gJ1xcXFxkKD89KFxcXFxkeycgKyAobGVuZ3RoT2ZXaG9sZVBhcnQgfHwgMykgKyAnfSkrJyArIChkZWNpbWFscyA+IDAgPyAnXFxcXEQnIDogJyQnKSArICcpJyxcclxuICAgICAgICAgICAgICAgIG51bSA9IHRoaXMuYW1vdW50LnRvRml4ZWQoTWF0aC5tYXgoMCwgfn5kZWNpbWFscykpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChkZWNpbWFsU2VwYXJhdG9yID8gbnVtLnJlcGxhY2UoJy4nLCBkZWNpbWFsU2VwYXJhdG9yKSA6IG51bSkucmVwbGFjZShuZXcgUmVnRXhwKHJlLCAnZycpLCAnJCYnICsgKHRob3VzYW5kc1NlcGFyYXRvciB8fCAnLCcpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgdG9TdHJpbmcoXHJcbiAgICAgICAgICAgIGRlY2ltYWxzOiBudW1iZXIgPSAyLFxyXG4gICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3I6IHN0cmluZyA9IFwiLlwiLFxyXG4gICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yOiBzdHJpbmcgPSBcIixcIixcclxuICAgICAgICAgICAgc2hvd0N1cnJlbmN5OiBib29sZWFuID0gZmFsc2VcclxuICAgICAgICApIDogc3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKHNob3dDdXJyZW5jeSA/IHRoaXMuY3VycmVuY3kuc3ltYm9sICsgXCIgXCIgOiBcIlwiICkgKyB0aGlzLmZvcm1hdE51bWJlcihkZWNpbWFscywgdGhvdXNhbmRzU2VwYXJhdG9yLCBkZWNpbWFsU2VwYXJhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHN5bWJvbDogc3RyaW5nKSB7IH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVuY2llcyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFVVJPID0gbmV3IEN1cnJlbmN5KFwiRVVSXCIsIFwi4oKsXCIpO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRE9MTEFSID0gbmV3IEN1cnJlbmN5KFwiVVNEXCIsIFwiJFwiKTtcclxuICAgICAgICAvKiBBZGQgaGVyZSB3aGF0ZXZlciBuZXcgZXhjaGFuZ2UgeW91IG1heSBuZWVkICovXHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JRXF1YXRhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lFcXVhdGFibGV9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lFcXVhdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuL0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkVudGl0eSB7XHJcblxyXG5cdGltcG9ydCBJRXF1YXRhYmxlID0gQ29tbW9uSW50ZXJmYWNlcy5JRXF1YXRhYmxlO1xyXG5cdGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcblxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eTxULCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PiBleHRlbmRzIElFcXVhdGFibGU8VD4sIElQZXJzaXN0YWJsZSB7XHJcblx0XHRnZXRLZXkoKTogVEtleTtcclxuXHRcdHNldEtleShrZXk6IFRLZXkpOiB2b2lkO1xyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JS2V5VmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5FbnRpdHkge1xyXG5cclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG5cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlS2V5VmFsdWVPYmplY3Q8VD5cclxuICAgICAgICBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG4gICAgICAgIGltcGxlbWVudHMgSUtleVZhbHVlT2JqZWN0PFQ+LCBJUGVyc2lzdGFibGUge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERlcml2ZWQgY2xhc3NlcyBtdXN0IHJlaW1wbGVtZW50IHRoaXMgbWV0aG9kLiBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1Byb21pc2VzL1Byb21pc2VIYW5kbGVyLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lEaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUV2ZW50SGFuZGxlci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4vSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SURpc3BhdGNoZXJ9IGZyb20gXCIuL0lEaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUHJvbWlzZXMuSVByb21pc2U7XHJcbiAgICBpbXBvcnQgUHJvbWlzZUhhbmRsZXIgPSBQcm9taXNlcy5Qcm9taXNlSGFuZGxlcjtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRG9tYWluRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uOiBJRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzZXREaXNwYXRjaGVySW1wbGVtZW50YXRpb24oZGlzcGF0Y2hlcjogSURpc3BhdGNoZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uID0gZGlzcGF0Y2hlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgaGFuZGxlcjogSUV2ZW50SGFuZGxlciwgc2NvcGU/OiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIHNUaGlzID0gRG9tYWluRGlzcGF0Y2hlcjtcclxuICAgICAgICAgICAgaWYgKHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc1RoaXMuZGlzcGF0Y2hlckltcGxlbWVudGF0aW9uLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyLCBzY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNUaGlzLmRpc3BhdGNoZXJJbXBsZW1lbnRhdGlvbi51bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaChldmVudDogSURvbWFpbkV2ZW50KTogSVByb21pc2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciBzVGhpcyA9IERvbWFpbkRpc3BhdGNoZXI7XHJcbiAgICAgICAgICAgIGlmIChzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzVGhpcy5kaXNwYXRjaGVySW1wbGVtZW50YXRpb24uZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBkaXNwYXRjaGVySW1wbGVtZW50YXRpb24gaXMgbm90IHNldCwgd2Ugc2hvdWxkIHJldHVybiBhIGZha2UgcHJvbWlzZSwgdG8gYWxsb3cgY2xpZW50cyB0byBhbHdheXMgd3JpdGUgdGhlaXIgaGFuZGxlcnMhXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIud2hlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtEb21haW5EaXNwYXRjaGVyfSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXJcIjtcclxuLy8gaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi9JRW50aXR5XCI7XHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JS2V5VmFsdWVPYmplY3RcIjtcclxuXHJcblxyXG4vKipcclxuICogQ2xhc3NlcyBhbmQgaW50ZXJmYWNlcyB0byBpbXBsZW1lbnQgYW4gRW50aXR5LCBhIHBlcnNpc3RhYmxlIG9iamVjdC4gXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuRW50aXR5IHtcclxuXHJcblx0aW1wb3J0IEJhc2VQZXJzaXN0YWJsZU9iamVjdCA9IFBlcnNpc3RhYmxlT2JqZWN0LkJhc2VQZXJzaXN0YWJsZU9iamVjdDtcclxuXHRpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuXHRpbXBvcnQgRG9tYWluRGlzcGF0Y2hlciA9IERvbWFpbkV2ZW50cy5Eb21haW5EaXNwYXRjaGVyO1xyXG5cclxuXHRleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUVudGl0eTxUIGV4dGVuZHMgSUVudGl0eTxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuXHRcdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0XHRpbXBsZW1lbnRzIElFbnRpdHk8VCwgVEtleT4ge1xyXG5cclxuXHRcdHByaXZhdGUga2V5OiBUS2V5O1xyXG5cclxuXHRcdHByb3RlY3RlZCByYWlzZUV2ZW50KGV2ZW50OiBJRG9tYWluRXZlbnQpIHtcclxuXHRcdFx0RG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBnZXRLZXkoKTogVEtleSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmtleTtcclxuXHRcdH07XHJcblxyXG5cdFx0cHVibGljIHNldEtleShrZXk6IFRLZXkpOiB2b2lkIHtcclxuXHRcdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0XHRpZiAoIWl0ZW0pIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGl0ZW0uZ2V0S2V5KCkuZXF1YWxzKHRoaXMuZ2V0S2V5KCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JRW50aXR5LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0lFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvSUVudGl0eVwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkFnZ3JlZ2F0ZSB7XHJcblxyXG4gICAgICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgICAgIGltcG9ydCBJRW50aXR5ID0gRW50aXR5LklFbnRpdHk7XHJcblxyXG4gICAgICAgIGV4cG9ydCBpbnRlcmZhY2UgSUFnZ3JlZ2F0ZVJvb3Q8VCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kcyBJRW50aXR5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRSZXZpc2lvbklkKCk6IG51bWJlclxyXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50UmV2aXNpb25JZCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAgICAgICAgIHBlcmZlY3RseU1hdGNoKGFub3RoZXI6IElBZ2dyZWdhdGVSb290PFQsIFRLZXk+KTogYm9vbGVhbjtcclxuICAgICAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvQmFzZUVudGl0eS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0VudGl0eS9JRW50aXR5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vU2VyaWFsaXplci50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuLy8gaW1wb3J0IHtJQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4vSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0lFbnRpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRzIHRoZSBBZ2dyZWdhdGUgUGF0dGVybiBieSBkZWZpbmluZyBpbnRlcmZhY2VzIGFuZCBiYXNlIGJlaGF2aW9yIGZvciBhbiBBZ2dyZWdhdGVSb290LlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLkFnZ3JlZ2F0ZSB7XHJcblxyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgQmFzZUVudGl0eSA9IEVudGl0eS5CYXNlRW50aXR5O1xyXG4gICAgaW1wb3J0IElFbnRpdHkgPSBFbnRpdHkuSUVudGl0eTtcclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBiZWhhdmlvciBvZiBhbiBBZ2dyZWdhdGVSb290LCB3aGljaCBpcyBiYXNpY2FsbHkgYW4gZW50aXR5Li4uXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWdncmVnYXRlUm9vdDxcclxuICAgICAgICBUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sXHJcbiAgICAgICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgICAgID5cclxuICAgICAgICBleHRlbmRzIEJhc2VFbnRpdHk8VCwgVEtleT5cclxuICAgICAgICBpbXBsZW1lbnRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBJRW50aXR5PFQsIFRLZXk+XHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfX3JldmlzaW9uSWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRSZXZpc2lvbklkKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fcmV2aXNpb25JZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnRSZXZpc2lvbklkKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9fcmV2aXNpb25JZCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGFyZXMgYW4gYWdncmVnYXRlIHdpdGggYW5vdGhlci4gUmV0dXJucyB0cnVlIGlmIGFnZ3JlZ2F0ZSdzIGRhdGEgYXJlIGV4YWN0bHkgZXF1YWwuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBlcmZlY3RseU1hdGNoKG90aGVyOiBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvdGhlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc09uZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgdmFyIHRoZU90aGVyID0gb3RoZXIuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRvIHRoZSBjb21wYXJpc29uIGp1c3QgbGlrZSB2YWx1ZSBvYmplY3RzLi4uIG5haXZlIGJ1dCBmdW5jdGlvbmFsIGF0IHRoaXMgdGltZS5cclxuICAgICAgICAgICAgdmFyIGNvbXBhcmlzb24gPSBfLmlzRXF1YWwodGhpc09uZSwgdGhlT3RoZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBSZXBvc2l0b3J5IHRvIHBlcnNpc3QgQWdncmVnYXRlcy4gQ29udGFpbnMgYSByZWZlcmVuY2UgaW4gbWVtb3J5IHJlcG9zaXRvcnkuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeTxUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSByZXBvc2l0b3J5IGdpdmVuIGl0cyBpZC4gSXQgZ2l2ZXMgYmFjayBhIGZ1bGx5IHJjb25zdGl0dXRlZCBBZ2dyZWdhdGUgUm9vdCwgc28gdGhhdCAgd2lsbCBiZSBwb3NzaWJsZSB0byBjYWxsIGFueSBwdWJsaWMgbWV0aG9kLlxyXG4gICAgICAgICAqIGZpcmVzIEl0ZW1SZXRyaWV2ZWQgZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogVDtcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTYXZlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IHZvaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVwbGFjZXMgYW4gaXRlbS4gSnVzdCBsaWtlIHNhdmUsIGJ1dCBpdCBkb2Vzbid0IGluY3JlbWVudCB0aGUgcmV2aXNpb25JZCBhbmQga2VlcCB0aGUgb25lIHN0b3JlZCBpbiB0aGUgQWdncmVnYXRlUm9vdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlcGxhY2UoaXRlbTogVCk6IHZvaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGVsZXRlcyBhbiBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQ7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlQWN0aW9uIHdpbGwgYmUgcGFzc2VkIHRvIHJlcG9zaXRvcmllcycgc2F2ZUltcGxlbWVudGF0aW9uIHNvIHRoYXQgY2xpZW50IGNhbiB0YWtlIGRlY2lzaW9ucyBvbiB3aGF0IHRvIGRvIHdoZW4gYWRkaW5nIG9yIHJlcGxhY2luZyBhbiBpdGVtIGlmIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGVudW0gU2F2ZUFjdGlvbkVudW0ge1xyXG4gICAgICAgIEFkZCxcclxuICAgICAgICBVcGRhdGVcclxuICAgIH07XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8qKlxyXG4gKiBJbnRlcmZhY2VzIGFuZCBjbGFzc2VzIHRvIGltcGxlbWVudCBhIFJlcG9zaXRvcnkgdG8gcGVyc2lzdCBBZ2dyZWdhdGVzLiBDb250YWlucyBhIHJlZmVyZW5jZSBpbiBtZW1vcnkgcmVwb3NpdG9yeS5cclxuICovXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLklBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgaW1wb3J0IElQcm9taXNlID0gUHJvbWlzZXMuSVByb21pc2U7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUmVwb3NpdG9yeUFzeW5jPFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSByZXBvc2l0b3J5IGdpdmVuIGl0cyBpZC4gSXQgZ2l2ZXMgYmFjayBhIGZ1bGx5IHJjb25zdGl0dXRlZCBBZ2dyZWdhdGUgUm9vdCwgc28gdGhhdCAgd2lsbCBiZSBwb3NzaWJsZSB0byBjYWxsIGFueSBwdWJsaWMgbWV0aG9kLlxyXG4gICAgICAgICAqIGZpcmVzIEl0ZW1SZXRyaWV2ZWQgZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCeUlkKGlkOiBUS2V5KTogSVByb21pc2U8VD47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXBsYWNlcyBhbiBpdGVtLiBKdXN0IGxpa2Ugc2F2ZSwgYnV0IGl0IGRvZXNuJ3QgaW5jcmVtZW50IHRoZSByZXZpc2lvbklkIGFuZCBrZWVwIHRoZSBvbmUgc3RvcmVkIGluIHRoZSBBZ2dyZWdhdGVSb290XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZWxldGVzIGFuIGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVsZXRlKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcbiBcclxuICAgIGltcG9ydCBCYXNlRXJyb3JzID0gRXJyb3JNYW5hZ2VtZW50LkJhc2VFcnJvcnM7XHJcbiBcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvcnMgZXh0ZW5kcyBCYXNlRXJyb3JzIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEtleU5vdFNldCA9IFwiS2V5IG5vdCBzZXRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1Ob3RGb3VuZCA9IFwiSXRlbSBOb3QgRm91bmRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yU2F2aW5nSXRlbSA9IFwiRXJyb3IgU2F2aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVycm9yUmVhZGluZ0l0ZW0gPSBcIkVycm9yIFJlYWRpbmcgSXRlbVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRXJyb3JEZWxldGluZ0l0ZW0gPSBcIkVycm9yIERlbGV0aW5nIEl0ZW1cIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFdyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiA9IFwiV3JvbmcgdHlwZSBmcm9tIEltcGxlbWVudGF0aW9uXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBNYW5hZ2VkVHlwZU5vdFN1cHBsaWVkID0gXCJSZXBvc2l0b3J5IG5lZWRzIHRvIGtub3cgd2hhdCB0eXBlIGl0IGNhbiBtYW5hZ2VcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEludmFsaWRLZXkgPSBcIkludmFsaWQgS2V5XCI7XHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgc3RhdGljIGNvbnRhaW5lciBvZiBldmVudCBcIl9fdHlwZU5hbWVcInNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEV2ZW50cyB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19uYW1lU3BhY2UgPSBcIkRERFRvb2xzLlJlcG9zaXRvcnlcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1BZGRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbUFkZGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1VcGRhdGVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtRGVsZXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVJlcGxhY2VkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5JdGVtUmVwbGFjZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbVJldHJpZXZlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVJldHJpZXZlZEV2ZW50XCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcG9zaXRvcnlFdmVudDxURXZlbnQsVEFnZ3JlZ2F0ZT4gZXh0ZW5kcyBCYXNlVmFsdWVPYmplY3Q8VEV2ZW50PiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIGFnZ3JlZ2F0ZSBpbnN0YW5jZSBhZnRlciB0aGUgYWN0aW9uIGhhcyBiZWVuIHBlcmZvcm1lZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHB1YmxpYyBpdGVtOiBUQWdncmVnYXRlLFxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogVGhlIElkIG9mIHRoZSByZXBvc2l0b3J5IHBlcmZvcm1pbmcgdGhlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHVibGljIHJlcG9zaXRvcnlJZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1BZGRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtQWRkZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbUFkZGVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtRGVsZXRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtRGVsZXRlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtRGVsZXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9FdmVudHMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9CYXNlUmVwb3NpdG9yeUV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgSURvbWFpbkV2ZW50ID0gRG9tYWluRXZlbnRzLklEb21haW5FdmVudDtcclxuICAgIGltcG9ydCBCYXNlVmFsdWVPYmplY3QgPSBWYWx1ZU9iamVjdC5CYXNlVmFsdWVPYmplY3Q7XHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbVJldHJpZXZlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtUmV0cmlldmVkRXZlbnQ8VEFnZ3JlZ2F0ZT4sIFRBZ2dyZWdhdGU+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLkl0ZW1SZXRyaWV2ZWRFdmVudDtcclxuICAgICAgICBfX3R5cGVWZXJzaW9uID0gXCJ2MVwiO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5RXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbi8vIGltcG9ydCB7SVR5cGVUcmFja2luZ30gZnJvbSBcIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZ1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBJdGVtVXBkYXRlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtVXBkYXRlZEV2ZW50PFRBZ2dyZWdhdGU+LCBUQWdncmVnYXRlPiBpbXBsZW1lbnRzIElEb21haW5FdmVudCB7XHJcbiAgICAgICAgX190eXBlTmFtZSA9IEV2ZW50cy5JdGVtVXBkYXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcbiAgICB9XHJcblxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbi8vIGltcG9ydCB7QmFzZVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHNcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEl0ZW1SZXBsYWNlZEV2ZW50PFRBZ2dyZWdhdGU+IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlFdmVudDxJdGVtUmVwbGFjZWRFdmVudDxUQWdncmVnYXRlPiwgVEFnZ3JlZ2F0ZT4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuSXRlbVJlcGxhY2VkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuICAgIH1cclxuXHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JUmVwb3NpdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1NhdmVBY3Rpb25FbnVtLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1SZXRyaWV2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1BZGRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSXRlbVVwZGF0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1EZWxldGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0RvbWFpbkRpc3BhdGNoZXIudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4vSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhcHR1cmVzIGNvbW1vbiBiZWhhdmlvciBvZiByZXBvc2l0b3J5LCB1c2luZyB0aGVUZW1wbGF0ZSBNZXRob2QgUGF0dGVybi5cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5PFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj5cclxuICAgICAgICBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgc3RyaW5nIHRvIGRpbmV0aWZ5IHRoZSByZXBvc2l0b3J5LiBVc2VmdWwgaW4gc2NlbmFyaW9zIHdoZXJlIHRoZSBzYW1lIEFnZ3JlZ2F0ZVJvb3QgbWlnaHQgYmUgc2F2ZWQgaW4gZGlmZmVyZW50IGxvY2F0aW9ucy4gXHJcbiAgICAgICAgICAgICAqIEV2ZW50cyBtdXN0IGRpc2Nlcm4gd2hhdCBsb2NhdGlvbiB0aGUgaXRlbSB3YXMgc2F2ZWQvcmV0cmlldmVkL2RlbGV0ZSB0by9mcm9tL2Zyb20uIEl0IGRlZmF1bHRzIHRvIHRoZSBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeUlkPzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5NYW5hZ2VkVHlwZU5vdFN1cHBsaWVkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXBvc2l0b3J5SWQpIHRoaXMucmVwb3NpdG9yeUlkID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgZnVuY3Rpb25hbGl0eSB0byBhY2Nlc3MgdG8gdGhlIHJlcG9zaXRvcnkgYW5kIGdldCBhbiBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aHJvdyBcIkl0ZW1Ob3RGb3VuZFwiIGlmIG5vIGVsZW1lbnQgbWF0Y2hpbmcgdGhlIGlkIHdhcyBmb3VuZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVR5cGVUcmFja2luZztcclxuXHJcbiAgICAgICAgZ2V0QnlJZChpZDogVEtleSk6IFQge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJldHJpZXZlZCA9IHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXRyaWV2ZWQuX190eXBlTmFtZSAhPT0gdGhpcy5tYW5hZ2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuV3JvbmdUeXBlRnJvbUltcGxlbWVudGF0aW9uLCBcIkV4cGVjdGluZyBcIiArIHRoaXMubWFuYWdlZFR5cGUgKyBcIiBidXQgb2J0YWluZSBcIiArIHJldHJpZXZlZC5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9SZXR1cm46IFQgPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUocmV0cmlldmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50PFQ+KHRvUmV0dXJuLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICBEb21haW5EaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwic2F2ZVwiIGZ1bmN0aW9uYWxpdHkgaW4geW91ciBpbXBsZW1lbnRhdGlvbi4gVGhlIHRlbXBsYXRlIG1ldGhvZCBcInNhdmVcIiB3aWxsIG1hbmFnZSB0aGUgcmV2aXNpb25JZCBsb2dpYy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogdm9pZDtcclxuXHJcbiAgICAgICAgc2F2ZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdvcmtzIGp1c3QgbGlrZSBzYXZlLCBidXQgaXQgbmV2ZXIgaW5jcmVtZW50cyBSZXZpc2lvbklkLCBpdCB0cnVzdHMgdGhlIG9uZSBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGFnZ3JlZ2F0ZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZXBsYWNlKGl0ZW06IFQpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXZlT3JSZXBsYWNlKGl0ZW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzYXZlT3JSZXBsYWNlKGl0ZW06IFQsIHJlcGxhY2VPbmx5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuS2V5Tm90U2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtVXBkYXRlZEV2ZW50PFQ+IHwgSXRlbUFkZGVkRXZlbnQ8VD47XHJcbiAgICAgICAgICAgIHZhciBhc0l0V2FzOiBUID0gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHNob3VsZEluY3JlbWVudFJldmlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtO1xyXG5cclxuICAgICAgICAgICAgc2F2ZUFjdGlvbiA9IFNhdmVBY3Rpb25FbnVtLlVwZGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGl0ZW0uZ2V0S2V5KCkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGV4cGVjdGVkIGlmIHRoZSBkbyBub3QgZXhpc3RzIGluIHRoZSBSZXBvLlxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgSXRlbUFkZGVkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUFjdGlvbiA9IFNhdmVBY3Rpb25FbnVtLkFkZDtcclxuICAgICAgICAgICAgICAgIHNob3VsZEluY3JlbWVudFJldmlzaW9uID0gZmFsc2U7IC8vIGJlY2F1c2UgdGhlIGl0ZW0gd2FzIG5vdCBpbiB0aGUgcmVwbyFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU2F2ZSBvY2N1ciBvbmx5IGlmIHN0b3JlZCBpdGVtIGFuZCBzYXZlZCBpdGVtIGFyZSBkaWZmZXJlbnQgc29tZWhvdy5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLnBlcmZlY3RseU1hdGNoKGFzSXRXYXMpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2VPbmx5ICYmIHNob3VsZEluY3JlbWVudFJldmlzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmNyZW1lbnRSZXZpc2lvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVJlcGxhY2VkRXZlbnQoaXRlbSwgdGhpcy5yZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCBuZXcgSXRlbVVwZGF0ZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmluYWxseSBzYXZlcyBhZ2dyZWdhdGUgaW50byB0aGUgcmVwb3NpdG9yeS5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0sIHNhdmVBY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIFwiZGVsZXRlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIGRlbGV0ZShpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgYXNJdFdhczogVCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhc0l0V2FzID0gdGhpcy5nZXRCeUlkKGlkKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaXRlbSBub3QgZm91bmQsIHNvIG5vdGhpbmcgdG8gZGVsZXRlIVxyXG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvciAmJiBlLm5hbWUgPT09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkVycm9yRGVsZXRpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGFzSXRXYXMsIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSW1wbGVtZW50YXRpb24oaWQpO1xyXG5cclxuICAgICAgICAgICAgRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Qcm9taXNlcy9Qcm9taXNlSGFuZGxlci50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9TYXZlQWN0aW9uRW51bS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtUmV0cmlldmVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtQWRkZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0l0ZW1VcGRhdGVkRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JdGVtRGVsZXRlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyLnRzXCIgLz5cclxuXHJcblxyXG4vLyBpbXBvcnQge0lSZXBvc2l0b3J5QXN5bmN9IGZyb20gXCIuL0lSZXBvc2l0b3J5QXN5bmNcIjtcclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJVHlwZVRyYWNraW5nfSBmcm9tIFwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nXCI7XHJcbi8vIGltcG9ydCB7SXRlbVJldHJpZXZlZEV2ZW50fSBmcm9tIFwiLi9JdGVtUmV0cmlldmVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtQWRkZWRFdmVudH0gZnJvbSBcIi4vSXRlbUFkZGVkRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtJdGVtVXBkYXRlZEV2ZW50fSBmcm9tIFwiLi9JdGVtVXBkYXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7SXRlbURlbGV0ZWRFdmVudH0gZnJvbSBcIi4vSXRlbURlbGV0ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge0RvbWFpbkRpc3BhdGNoZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvRG9tYWluRGlzcGF0Y2hlclwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgQmFzZUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuQmFzZUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBJVHlwZVRyYWNraW5nID0gQ29tbW9uSW50ZXJmYWNlcy5JVHlwZVRyYWNraW5nO1xyXG4gICAgaW1wb3J0IERvbWFpbkRpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuRG9tYWluRGlzcGF0Y2hlcjtcclxuXHJcbiAgICBpbXBvcnQgUHJvbWlzZUhhbmRsZXIgPSBQcm9taXNlcy5Qcm9taXNlSGFuZGxlcjtcclxuICAgIGltcG9ydCBJUHJvbWlzZSA9IFByb21pc2VzLklQcm9taXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FwdHVyZXMgY29tbW9uIGJlaGF2aW9yIG9mIHJlcG9zaXRvcnksIHVzaW5nIHRoZVRlbXBsYXRlIE1ldGhvZCBQYXR0ZXJuLlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJlcG9zaXRvcnlBc3luYzxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdHlwZSBtYW5hZ2VkIGJ5IHRoaXMgcmVwb3NpdG9yeS4gV2lsbCBiZSBjb21wYXJlZCB3aXRoIHRoZSBfX3R5cGVOYW1lIHByb3BlcnR5IG9mIHRoZSBvYmplY3RzIHJldHJpZXZlZC5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEEgc3RyaW5nIHRvIGRpbmV0aWZ5IHRoZSByZXBvc2l0b3J5LiBVc2VmdWwgaW4gc2NlbmFyaW9zIHdoZXJlIHRoZSBzYW1lIEFnZ3JlZ2F0ZVJvb3QgbWlnaHQgYmUgc2F2ZWQgaW4gZGlmZmVyZW50IGxvY2F0aW9ucy4gXHJcbiAgICAgICAgICAgICAqIEV2ZW50cyBtdXN0IGRpc2Nlcm4gd2hhdCBsb2NhdGlvbiB0aGUgaXRlbSB3YXMgc2F2ZWQvcmV0cmlldmVkL2RlbGV0ZSB0by9mcm9tL2Zyb20uIEl0IGRlZmF1bHRzIHRvIHRoZSBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByaXZhdGUgcmVwb3NpdG9yeUlkPzogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIiB8fCBtYW5hZ2VkVHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuTWFuYWdlZFR5cGVOb3RTdXBwbGllZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghcmVwb3NpdG9yeUlkKSB0aGlzLnJlcG9zaXRvcnlJZCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYSBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTxJVHlwZVRyYWNraW5nPjtcclxuXHJcblxyXG4gICAgICAgIGdldEJ5SWQoaWQ6IFRLZXkpOiBJUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyPFQ+KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCwgXCJpZCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHZhbHVlOiBUKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLl9fdHlwZU5hbWUgIT0gdGhpcy5tYW5hZ2VkVHlwZSAmJiAhKHRoaXMubWFuYWdlZFR5cGUgPT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmVkIFwiICsgdmFsdWUuX190eXBlTmFtZSArIFwiIGZyb20gZGF0YWJhc2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gPFQ+KEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgSXRlbVJldHJpZXZlZEV2ZW50KHRvUmV0dXJuLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpLmZpbmFsbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodG9SZXR1cm4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJzYXZlXCIgZnVuY3Rpb25hbGl0eSBpbiB5b3VyIGltcGxlbWVudGF0aW9uLiBUaGUgdGVtcGxhdGUgbWV0aG9kIFwic2F2ZVwiIHdpbGwgbWFuYWdlIHRoZSByZXZpc2lvbklkIGxvZ2ljLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCwgc2F2ZUFjdGlvbjogU2F2ZUFjdGlvbkVudW0pOiBJUHJvbWlzZTx7fT47XHJcblxyXG4gICAgICAgIHByaXZhdGUgZG9TYXZlKGl0ZW06IFQsIHNhdmVBY3Rpb246IFNhdmVBY3Rpb25FbnVtKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXIoKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0IHRoYXQgd2lsbCBiZSBzYXZlZDtcclxuICAgICAgICAgICAgdGhpcy5zYXZlSW1wbGVtZW50YXRpb24oaXRlbSwgc2F2ZUFjdGlvbikudGhlbihcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclNhdmluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhdmVPclJlcGxhY2UoaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVwbGFjZShpdGVtOiBUKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZU9yUmVwbGFjZShpdGVtLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2F2ZU9yUmVwbGFjZShpdGVtOiBULCByZXBsYWNlT25seTogYm9vbGVhbiA9IGZhbHNlKTogSVByb21pc2U8e30+IHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gUHJvbWlzZUhhbmRsZXIuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgICAgIHZhciBldmVudDogSXRlbVVwZGF0ZWRFdmVudDxUPiB8IEl0ZW1BZGRlZEV2ZW50PFQ+O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpdGVtLmdldEtleSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZUhhbmRsZXIucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QnlJZChpdGVtLmdldEtleSgpKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKHJlYWRWYWx1ZTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpdGVtIGFscmVhZHkgZXhpc3Qgc28gd2UgaGF2ZSB0byBjb21wYXJlIGl0IHdpdGggd2hhdCB3ZSBhcmUgc2F2aW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnBlcmZlY3RseU1hdGNoKHJlYWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hhdCBpcyBpbiB0aGUgZGF0YWJhc2UgcGVyZmVjdGx5IG1hdGNoZXMgd2hhdCB3ZSBhcmUgc2F2aW5nLCBzbyBub3RoaW5nIHRvIGRvIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudCByZXZpc2lvbiBvbmx5IGlmIHdlIGFyZSBub3QgcmVwbGFjaW5nIGFuIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcGxhY2VPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IG5ldyBJdGVtVXBkYXRlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYWNlT25seSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IG5ldyBJdGVtUmVwbGFjZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kb1NhdmUoaXRlbSwgU2F2ZUFjdGlvbkVudW0uVXBkYXRlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLmJ1aWxkRXJyb3IoZXJyb3IsIEVycm9ycy5FcnJvclJlYWRpbmdJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09IEVycm9ycy5JdGVtTm90Rm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlY3RlZCwgdGhlIGl0ZW0gaXMgbm90IGluIHRoZSByZXBvLCBzbyB3ZSBoYXZlIHRvIGFkZCBpdCFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TYXZlKGl0ZW0sIFNhdmVBY3Rpb25FbnVtLkFkZCkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IG5ldyBJdGVtQWRkZWRFdmVudChpdGVtLCB0aGlzLnJlcG9zaXRvcnlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERvbWFpbkRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yUmVhZGluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyIGVycm9ycyBtdXN0IGJlIHRyZWF0ZWQgYXMgLi4uIFwiRXJyb3JzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuYnVpbGRFcnJvcihlcnJvciwgRXJyb3JzLkVycm9yUmVhZGluZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJkZWxldGVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8e30+O1xyXG5cclxuICAgICAgICBkZWxldGUoaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcjx7fT4oKTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50OiBJdGVtRGVsZXRlZEV2ZW50PFQ+O1xyXG4gICAgICAgICAgICB0aGlzLmdldEJ5SWQoaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBJdGVtRGVsZXRlZEV2ZW50KGl0ZW0sIHRoaXMucmVwb3NpdG9yeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUltcGxlbWVudGF0aW9uKGlkKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRG9tYWluRGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gdGhpcy5idWlsZEVycm9yKGVycm9yLCBFcnJvcnMuRXJyb3JEZWxldGluZ0l0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVhc29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gRXJyb3JzLkl0ZW1Ob3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGJ1aWxkIGFuIGVycm9yIGZyb20gYSByZXR1cm4gdmFsdWUgb2YgdGhlIEFzeW5jIEltcGxlbWVudGF0aW9ucy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGJ1aWxkRXJyb3IoZXJyb3JGcm9tQ2FsbDogYW55LCBlcnJvcklmRXJyb3JGcm9tQ2FsbElzTm90RXJyb3I6IHN0cmluZyk6IEVycm9yIHtcclxuICAgICAgICAgICAgdmFyIHJlYXNvbjogRXJyb3I7XHJcbiAgICAgICAgICAgIGlmIChlcnJvckZyb21DYWxsIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9IGVycm9yRnJvbUNhbGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShlcnJvcklmRXJyb3JGcm9tQ2FsbElzTm90RXJyb3IsIEpTT04uc3RyaW5naWZ5KGVycm9yRnJvbUNhbGwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVhc29uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Vycm9ycy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9QZXJzaXN0YWJsZU9iamVjdC9GYWN0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0Jhc2VSZXBvc2l0b3J5LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG4vLyBpbXBvcnQge0ZhY3RvcnkgYXMgRmFjdG9yeX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnlcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuLy8gaW1wb3J0IHtCYXNlUmVwb3NpdG9yeX0gZnJvbSBcIi4vQmFzZVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgRmFjdG9yeSA9IFBlcnNpc3RhYmxlT2JqZWN0LkZhY3Rvcnk7XHJcbiAgICBpbXBvcnQgSVBlcnNpc3RhYmxlID0gUGVyc2lzdGFibGVPYmplY3QuSVBlcnNpc3RhYmxlO1xyXG4gICAgaW1wb3J0IEJhc2VBZ2dyZWdhdGVSb290ID0gQWdncmVnYXRlLkJhc2VBZ2dyZWdhdGVSb290O1xyXG4gICAgaW1wb3J0IElLZXlWYWx1ZU9iamVjdCA9IEVudGl0eS5JS2V5VmFsdWVPYmplY3Q7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluTWVtb3J5UmVwb3NpdG9yeTxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+XHJcbiAgICAgICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxULCBUS2V5PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnk8VCwgVEtleT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IHsgW2lkOiBzdHJpbmddOiBJUGVyc2lzdGFibGUgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IobWFuYWdlZFR5cGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIobWFuYWdlZFR5cGVOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KSB7XHJcblxyXG4gICAgICAgICAgICB2YXIga2V5ID0gaWQudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gRmFjdG9yeS5jcmVhdGVPYmplY3RzRnJvbVN0YXRlKHRoaXMuc3RvcmFnZVtrZXldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8VD50b1JldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtLmdldEtleSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGRlbGV0ZUltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUHJvbWlzZXMvUHJvbWlzZUhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uSW50ZXJmYWNlcy9JVHlwZVRyYWNraW5nLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXJyb3JzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0ZhY3RvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZVJlcG9zaXRvcnlBc3luYy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1NlcmlhbGl6YXRpb24vRGVzZXJpYWxpemVyLnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5SZXBvc2l0b3J5IHtcclxuXHJcbiAgICBpbXBvcnQgQmFzZVJlcG9zaXRvcnlBc3luYyA9IFJlcG9zaXRvcnkuQmFzZVJlcG9zaXRvcnlBc3luYztcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElUeXBlVHJhY2tpbmcgPSBDb21tb25JbnRlcmZhY2VzLklUeXBlVHJhY2tpbmc7XHJcblxyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICBpbXBvcnQgU2VyaWFsaXplciA9IFNlcmlhbGl6YXRpb24uU2VyaWFsaXplcjtcclxuICAgIGltcG9ydCBEZXNlcmlhbGl6ZXIgPSBTZXJpYWxpemF0aW9uLkRlc2VyaWFsaXplcjtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5NZW1vcnlSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgICAgIGV4dGVuZHMgQmFzZVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PlxyXG4gICAgICAgIGltcGxlbWVudHMgSVJlcG9zaXRvcnlBc3luYzxULCBUS2V5PlxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZTogeyBbaWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IobWFuYWdlZFR5cGU6IHN0cmluZywgcmVwb3NpdG9yeUlkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKG1hbmFnZWRUeXBlLCByZXBvc2l0b3J5SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRCeUlkU3luYyhpZDogVEtleSkge1xyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkludmFsaWRLZXksIFwiaWQgY2Fubm90IGJlIG51bGwgbm9yIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5JdGVtTm90Rm91bmQpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRvUmV0dXJuID0gRGVzZXJpYWxpemVyLmRlc2VyaWFsaXplKHRoaXMuc3RvcmFnZVtpZC50b1N0cmluZygpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTxJVHlwZVRyYWNraW5nPiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZ2V0QnlJZFN5bmMoaWQpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2F2ZVN5bmMoaXRlbTogVCk6IHt9IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmdldEtleSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLktleU5vdFNldCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2l0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKV0gPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShpdGVtKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5FcnJvclNhdmluZ0l0ZW0sIEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2VIYW5kbGVyLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3luYyhpdGVtKTtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoe30pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZGVsZXRlU3luYyhpZDogVEtleSk6IHt9IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0b3JhZ2VbaWQudG9TdHJpbmcoKV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAocmVhc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBQcm9taXNlSGFuZGxlci5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU3luYyhpZClcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoe30pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1V0aWxzL1NpbXBsZUd1aWQudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuLy8gaW1wb3J0IHtTaW1wbGVHdWlkfSBmcm9tIFwiLi4vVXRpbHMvU2ltcGxlR3VpZFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLkRvbWFpbkV2ZW50cyB7XHJcblxyXG4gICAgaW1wb3J0IFNpbXBsZUd1aWQgPSBVdGlscy5TaW1wbGVHdWlkO1xyXG4gICAgaW1wb3J0IFByb21pc2VIYW5kbGVyID0gUHJvbWlzZXMuUHJvbWlzZUhhbmRsZXI7XHJcbiAgICBpbXBvcnQgSVByb21pc2UgPSBQcm9taXNlcy5JUHJvbWlzZTtcclxuXHJcbiAgICB0eXBlIEhhbmRsZXJBbmRTY29wZUNvbnRhaW5lciA9IHsgaGFuZGxlcjogSUV2ZW50SGFuZGxlciwgb3JpZ2luYWxTY29wZTogYW55IH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5Qcm9jZXNzRGlzcGF0Y2hlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBkZWxlZ2F0ZXNSZWdpc3RyeTogeyBbZXZlbnRUeXBlTmFtZTogc3RyaW5nXTogeyBbaGFuZGxlcklkOiBzdHJpbmddOiBIYW5kbGVyQW5kU2NvcGVDb250YWluZXIgfSB9ID0ge307XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogdGhlIHNjb3BlIHBhcmFtZXRlciBjYW4gYmUgcGFzc2VkIGluIHRvIHdhcnJhbnR5IHRoYXQgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgaW4gdGhlIG9yaWdpbmFsIGNvbnRleHQgW3RoaXNdISEhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IElFdmVudEhhbmRsZXIsIHNjb3BlPzogYW55KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaGFuZGxlcklkOiBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICAvLyBcIlN0YW1wc1wiIHRoZSBoYW5kbGVyIGlmIG5vdCBhbHJlYWR5IFwic3RhbXBlZFwiXHJcbiAgICAgICAgICAgIGlmICghKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQpIHtcclxuICAgICAgICAgICAgICAgICg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkID0gU2ltcGxlR3VpZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVySWQgPSAoPGFueT5oYW5kbGVyKS5fX2hhbmRsZXJJZDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXVtoYW5kbGVySWRdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50VHlwZU5hbWVdW2hhbmRsZXJJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNjb3BlOiBzY29wZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdW5yZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIEFjdCBvbmx5IGlkIGhhbmRsZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZC5cclxuICAgICAgICAgICAgaWYgKCg8YW55PmhhbmRsZXIpLl9faGFuZGxlcklkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlcklkID0gKDxhbnk+aGFuZGxlcikuX19oYW5kbGVySWQ7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudFR5cGVOYW1lXVtoYW5kbGVySWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZGlzcGF0Y2goZXZlbnQ6IElEb21haW5FdmVudCk6IElQcm9taXNlPGFueT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci53aGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVycm9yczogRXJyb3JbXSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZUFycmF5OiBJUHJvbWlzZTxhbnk+W10gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmRlbGVnYXRlc1JlZ2lzdHJ5W2V2ZW50Ll9fdHlwZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gdGhpcy5kZWxlZ2F0ZXNSZWdpc3RyeVtldmVudC5fX3R5cGVOYW1lXVtlbGVtZW50XS5oYW5kbGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY29wZSA9IHRoaXMuZGVsZWdhdGVzUmVnaXN0cnlbZXZlbnQuX190eXBlTmFtZV1bZWxlbWVudF0ub3JpZ2luYWxTY29wZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsdWU6IGFueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBoYW5kbGVyLmNhbGwoc2NvcGUsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBnZXQgYSBwcm9taXNlLCB3ZSBhZGQgaXQgdG8gdGhlIGxpc3Qgb2YgcHJvbWlzZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBUHJvbWlzZShyZXR1cm5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9ICg8SVByb21pc2U8YW55Pj5yZXR1cm5WYWx1ZSkuY2F0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZUFycmF5LnB1c2gocHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhlIHByb21pc2UgcmV0dXJuZWQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIGFsbCBvZiB0aGUgcHJvbWlzZXMgaW4gdGhlIGFycmF5IHdpbGwgYmUgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlSGFuZGxlci5hbGwocHJvbWlzZUFycmF5KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmJ1aWxkRXJyb3JNZXNzYWdlKGVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLm5hbWUgPSBcIkVycm9ycyB3aGlsZSBwcm9jZXNzaW5nIGV2ZW50IFwiICsgZXZlbnQuX190eXBlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGlzQVByb21pc2UodmFsdWVUb1Rlc3Q6IGFueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKCB2YWx1ZVRvVGVzdC50aGVuICYmIHR5cGVvZiB2YWx1ZVRvVGVzdC50aGVuID09PSAnZnVuY3Rpb24nKSAmJiAodmFsdWVUb1Rlc3QuY2F0Y2ggJiYgdHlwZW9mIHZhbHVlVG9UZXN0LmNhdGNoID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBidWlsZEVycm9yTWVzc2FnZShFcnJvcnM6IEVycm9yW10pOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgZWxlbWVudCBvZiBFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgKz0gZWxlbWVudC5uYW1lICsgXCI6XCIgKyBlbGVtZW50Lm1lc3NhZ2UgKyBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBERERUb29scy5TYWdhIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTYWdhIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBzZXR1cCB0aGUgc2FnYSdzIGV2ZW50IGhhbmRsZXJzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXJ0KCk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRlcmVnaXN0ZXJzIGFsbCBvZiB0aGUgZXZlbnQgaGFuZGxlcnMgcmVnaXN0ZXJlZCBieSB0aGUgc2FnYVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0b3AoKTogdm9pZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogcmVjb3ZlcnMgYWxsIHRoZSBcInN0aWxsIHJ1bm5pbmcgc2FnYXNcIlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlY292ZXIoKTogdm9pZDtcclxuICAgIH1cclxufSAiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQWdncmVnYXRlL0lBZ2dyZWdhdGVSb290LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5QXN5bmMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcblxyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlNhZ2Ege1xyXG5cclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGltcG9ydCBJUmVwb3NpdG9yeUFzeW5jID0gUmVwb3NpdG9yeS5JUmVwb3NpdG9yeUFzeW5jO1xyXG5cclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlU2FnYTxcclxuICAgICAgICBUIGV4dGVuZHMgSUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVFN0YXR1c2VzIG11c3QgYmUgYW4gZW51bSBvciBhIHN0cmluZyBsaXRlcmFsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgVFN0YXR1c2VzLCBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBURXZlbnRzIG11c3QgYmUgYW4gZW51bSBvciBhIHN0cmluZyBsaXRlcmFsXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgVEV2ZW50c1xyXG4gICAgPiBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsVEtleT4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5QXN5bmM8VCwgVEtleT4sXHJcbiAgICAgICAgICAgIHByaXZhdGUgaW5pdGlhbFN0YXR1czogVFN0YXR1c2VzLFxyXG4gICAgICAgICAgICBwcml2YXRlIGZpbmFsU3RhdHVzZXM6IFRTdGF0dXNlc1tdXHJcblxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IG11c3Qgb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBoYW5kbGUgZXZlbnRzIGFuZCBzYWdhIHN0YXR1c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCB0cmlnZ2VyRXZlbnQoZXZlbnQ6IFRFdmVudHMpOiB2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgcmVnaXN0ZXJFdmVudHMoKTogdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IHVucmVnaXN0ZXJFdmVudHMoKTogdm9pZDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RvcCgpIHtcclxuICAgICAgICAgICAgdGhpcy51bnJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9JQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlcyBhbmQgY2xhc3NlcyB0byBpbXBsZW1lbnQgYSBVbml0T2ZXb3JrLiBBIFVuaXRPZldvcmsga2VlcHMgdHJhY2sgb2YgY2hhbmdlcyBvbiB0aGUgQWdncmVnYXRlcyBsb2FkZWQgZnJvbSB0aGUgdW5kZXJseWluZyByZXBvc2l0b3J5IGFuZCBhbGxvd3MgdG8gc2F2ZSB0aGVtIGFsbCBpbiBhIHNpbmdsZSBjYWxsLlxyXG4gKi9cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5JQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElFdmVudEhhbmRsZXIgPSBEb21haW5FdmVudHMuSUV2ZW50SGFuZGxlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElVbml0T2ZXb3JrPFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PiwgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5Pj4ge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXRyaWV2ZXMgYW4gaXRlbSBmcm9tIHRoZSBSZXBvc2l0b3J5IG9yIGZyb20gdGhlIFVuaXRPZldvcmssIGdpdmVuIGl0cyBJZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCeUlkKGtleTogVEtleSk6IFQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcmtzIGFuIGl0ZW0gYXMgZGVsZXRlZCBmcm9tIHRoZSBVbml0T2ZXb3JrIChhbmQgZnJvbSB0aGUgUmVwb3NpdG9yeSB3aGVuIHRoZSBVb1cgd2lsbCBiZSBzYXZlZClcclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWxldGVCeUlkKGtleTogVEtleSk6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNhdmVzIGFsbCB0aGUgbW9kaWZpZWQgaXRlbXMgaW4gdGhlIFVuaXRPZldvcmsuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2F2ZUFsbCgpOiB2b2lkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbGxvd3MgdG8gcmVnaXN0ZXIgYW4gaGFuZGxlciBmb3IgZXZlbnRzIGdlbmVyYXRlZCBieSB0aGUgVW5pdE9mV29ya1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsbG93cyB0byB1bnJlZ2lzdGVyIGFuIGhhbmRsZXIgZm9yIGV2ZW50cyBnZW5lcmF0ZWQgYnkgdGhlIFVuaXRPZldvcmtcclxuICAgICAgICAgKi9cclxuICAgICAgICB1bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lOiBzdHJpbmcsIGV2ZW50SGFuZGxlcjogSUV2ZW50SGFuZGxlcik6IHZvaWQ7XHJcblxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7QmFzZUVycm9yc30gZnJvbSBcIi4uL0Vycm9yTWFuYWdlbWVudC9CYXNlRXJyb3JzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IEJhc2VFcnJvcnMgPSBFcnJvck1hbmFnZW1lbnQuQmFzZUVycm9ycztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVW5pdE9mV29ya0Vycm9ycyBleHRlbmRzIEJhc2VFcnJvcnMge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbU1hcmtlZEFzRGVsZXRlZCA9IFwiVGhpcyBpdGVtIHdhcyBtYXJrZWQgYXMgZGVsZXRlZCBpbiB0aGlzIFVuaXRPZldvcmssIGFuZCBjYW5ub3QgYmUgcmV0cmlldmVkLlwiO1xyXG4gICAgfVxyXG5cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBzdGF0aWMgY29udGFpbmVyIG9mIGV2ZW50IFwiX190eXBlTmFtZVwic1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRXZlbnRzIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfX25hbWVTcGFjZSA9IFwiREREVG9vbHMuVW5pdE9mV29ya1wiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT2JqZWN0U2F2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdFNhdmVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE9iamVjdERlbGV0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLk9iamVjdERlbGV0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT2JqZWN0UmV0cmlldmVkRXZlbnQgPSBFdmVudHMuX19uYW1lU3BhY2UgKyBcIi5PYmplY3RSZXRyaWV2ZWRFdmVudFwiO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0V2ZW50cy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lEb21haW5FdmVudH0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnRcIjtcclxuLy8gaW1wb3J0IHtCYXNlVmFsdWVPYmplY3R9IGZyb20gXCIuLi9WYWx1ZU9iamVjdC9CYXNlVmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtFdmVudHN9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxubmFtZXNwYWNlIERERFRvb2xzLlVuaXRPZldvcmsge1xyXG5cclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IEJhc2VWYWx1ZU9iamVjdCA9IFZhbHVlT2JqZWN0LkJhc2VWYWx1ZU9iamVjdDtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgT2JqZWN0RGVsZXRlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdERlbGV0ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0RGVsZXRlZEV2ZW50O1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb24gPSBcInYxXCI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHR5cGVWZXJzaW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpZDogc3RyaW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBPYmplY3RSZXRyaWV2ZWRFdmVudCBleHRlbmRzIEJhc2VWYWx1ZU9iamVjdDxPYmplY3RSZXRyaWV2ZWRFdmVudD4gaW1wbGVtZW50cyBJRG9tYWluRXZlbnQge1xyXG4gICAgICAgIF9fdHlwZU5hbWUgPSBFdmVudHMuT2JqZWN0UmV0cmlldmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vVmFsdWVPYmplY3QvQmFzZVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vRXZlbnRzLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0Jhc2VWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdFwiO1xyXG4vLyBpbXBvcnQge0V2ZW50c30gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuVW5pdE9mV29yayB7XHJcblxyXG4gICAgaW1wb3J0IElEb21haW5FdmVudCA9IERvbWFpbkV2ZW50cy5JRG9tYWluRXZlbnQ7XHJcbiAgICBpbXBvcnQgQmFzZVZhbHVlT2JqZWN0ID0gVmFsdWVPYmplY3QuQmFzZVZhbHVlT2JqZWN0O1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBPYmplY3RTYXZlZEV2ZW50IGV4dGVuZHMgQmFzZVZhbHVlT2JqZWN0PE9iamVjdFNhdmVkRXZlbnQ+IGltcGxlbWVudHMgSURvbWFpbkV2ZW50IHtcclxuICAgICAgICBfX3R5cGVOYW1lID0gRXZlbnRzLk9iamVjdFNhdmVkRXZlbnQ7XHJcbiAgICAgICAgX190eXBlVmVyc2lvbiA9IFwidjFcIjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyB0eXBlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgdHlwZVZlcnNpb246IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIGlkOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3QudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlLnRzXCIgLz5cclxuXHJcbi8vIGltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvSUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbi8vIGltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuLy8gaW1wb3J0IHtJUGVyc2lzdGFibGV9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9JUGVyc2lzdGFibGVcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuXHJcbiAgICBpbXBvcnQgSUFnZ3JlZ2F0ZVJvb3QgPSBBZ2dyZWdhdGUuSUFnZ3JlZ2F0ZVJvb3Q7XHJcbiAgICBpbXBvcnQgSUtleVZhbHVlT2JqZWN0ID0gRW50aXR5LklLZXlWYWx1ZU9iamVjdDtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJUGVyc2lzdGFibGUgPSBQZXJzaXN0YWJsZU9iamVjdC5JUGVyc2lzdGFibGU7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gSXRlbVN0YXR1cyB7XHJcbiAgICAgICAgTmV3LFxyXG4gICAgICAgIE1vZGlmaWVkLFxyXG4gICAgICAgIFNhdmVkLFxyXG4gICAgICAgIERlbGV0ZWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsIGNsYXNzIHRvIHN0b3JlIGl0ZW0gc3RhdHVzIGluZm9cclxuICAgICAqL1xyXG4gICAgY2xhc3MgVHJhY2tlZEl0ZW08XHJcbiAgICAgICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgICAgICA+IHtcclxuICAgICAgICAvLyBXaWxsIGNvbnRhaW4gYSBzZXJpYWxpemVkIHZlcnNpb24gb2YgdGhlIG9iamVjdCBhcyBpdCB3YXMgd2hlbiBpdCB3YXMgbG9hZGVkIGZyb20gdGhlIHJlcG9zaXRvcnkuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYXNMb2FkZWQ6IElQZXJzaXN0YWJsZSAvLyBXaWxsIGNvbnRhaW4gdGhlIHN0YXRlIG9mIHRoZSBvYmplY3Qgd2hlbiBmaXJzdCBhZGRlZCBvciB1cGRhdGVkXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlIHN0YXR1czogSXRlbVN0YXR1cyxcclxuICAgICAgICAgICAgcHJpdmF0ZSBpdGVtOiBULFxyXG4gICAgICAgICAgICBwcml2YXRlIGtleTogVEtleVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmFzTG9hZGVkID0gaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc05ldygpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLk5ldztcclxuICAgICAgICAgICAgdGhpcy5hc0xvYWRlZCA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc1NhdmVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IEl0ZW1TdGF0dXMuU2F2ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYXNMb2FkZWQgPSB0aGlzLml0ZW0uZ2V0U3RhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNNb2RpZmllZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBJdGVtU3RhdHVzLk1vZGlmaWVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG1hcmtBc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gSXRlbVN0YXR1cy5EZWxldGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldFN0YXR1cygpOiBJdGVtU3RhdHVzIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldEl0ZW0oKTogVCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0S2V5KCk6IFRLZXkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaGFzQ2hhbmdlZCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHRoaXMuaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShjdXJyZW50U3RhdGUpO1xyXG4gICAgICAgICAgICB2YXIgYXNMb2FkZWRBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuYXNMb2FkZWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZUFzU3RyaW5nICE9PSBhc0xvYWRlZEFzU3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2hlY2tzIGlmIGFuIGl0ZW0gaW4gXCJTYXZlZFwiIHN0YXR1cyBoYXMgYmVlbiBtb2RpZmllZCwgYW5kIGNoYW5nZXMgdGhlIHN0YXR1cyBhY2NvcmRpbmdseS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlU2F2ZWRJdGVtU3RhdHVzKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IEl0ZW1TdGF0dXMuU2F2ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya0FzTW9kaWZpZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIElkZW50aXR5TWFwXHJcbiAgICAgICAgPFxyXG4gICAgICAgIFQgZXh0ZW5kcyBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPlxyXG4gICAge1xyXG5cclxuICAgICAgICBwcml2YXRlIGlkVG9PYmplY3RNYXA6IHsgW2lkOiBzdHJpbmddOiBUcmFja2VkSXRlbTxULCBUS2V5PiB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlkVG9PYmplY3RNYXAgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiBrZXkgaXMgYWxyZWFkeSBzdG9yZWQgaW4gdGhlIElkZW50aXR5TWFwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGlzVHJhY2tlZChrZXk6IFRLZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRUb09iamVjdE1hcFtpZEFzU3RyaW5nXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0cmlldmVzIGFuIGl0ZW0gZnJvbSB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldEJ5SWQoa2V5OiBUS2V5KTogVCB7XHJcbiAgICAgICAgICAgIHZhciBpZEFzU3RyaW5nID0ga2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkQXNTdHJpbmddLmdldEl0ZW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZHMgb3IgcmVwbGFjZXMgYW4gaXRlbSB0byB0aGUgSWRlbnRpdHlNYXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGFkZChrZXk6IFRLZXksIGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdmFyIGlkQXNTdHJpbmcgPSBrZXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIG5ld0l0ZW0gPSBuZXcgVHJhY2tlZEl0ZW0oSXRlbVN0YXR1cy5OZXcsIGl0ZW0sIGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRUb09iamVjdE1hcFtpZEFzU3RyaW5nXSA9IG5ld0l0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb21wbGV0ZWx5IHJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZW1vdmUoa2V5OiBUS2V5KTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVHJhY2tlZChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2tleS50b1N0cmluZygpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldElkcygpOiBUS2V5W10ge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm46IFRLZXlbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBlbGVtZW50IGluIHRoaXMuaWRUb09iamVjdE1hcCkge1xyXG4gICAgICAgICAgICAgICAgdG9SZXR1cm4ucHVzaCh0aGlzLmlkVG9PYmplY3RNYXBbZWxlbWVudF0uZ2V0S2V5KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBtYXJrQXNEZWxldGVkQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYWNrZWRJdGVtID0gdGhpcy5nZXRUcmFja2VkSXRlbShrZXkpO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5tYXJrQXNEZWxldGVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzU2F2ZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHRyYWNrZWRJdGVtLm1hcmtBc1NhdmVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbWFya0FzTW9kaWZpZWRCeUlkKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgdHJhY2tlZEl0ZW0gPSB0aGlzLmdldFRyYWNrZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHRyYWNrZWRJdGVtLm1hcmtBc01vZGlmaWVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0SXRlbVN0YXR1cyhrZXk6IFRLZXkpOiBJdGVtU3RhdHVzIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFja2VkSXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFja2VkSXRlbS5nZXRTdGF0dXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBjb3JyZWN0IHN0YXR1cyBmb3IgYW4gaXRlbSBpbiBcIlNhdmVkXCIgc3RhdHVzLCBhcyBpdCBtYXkgaGF2ZSBiZWVuIG1vZGlmaWVkIHNpbmNlIG5vdyAoaGVyZSB3ZSBkb24ndCBoYXZlIHByb3BlcnR5IHRyYWNraW5nKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlU2F2ZWRJdGVtU3RhdHVzKGtleTogVEtleSkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0VHJhY2tlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgaXRlbS51cGRhdGVTYXZlZEl0ZW1TdGF0dXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0VHJhY2tlZEl0ZW0oa2V5OiBUS2V5KTogVHJhY2tlZEl0ZW08VCwgVEtleT4ge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLmlkVG9PYmplY3RNYXBba2V5LnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgICBpZiAoIXRvUmV0dXJuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9FbnRpdHkvSUtleVZhbHVlT2JqZWN0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnkudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RvbWFpbkV2ZW50cy9JRG9tYWluRXZlbnQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRG9tYWluRXZlbnRzL0lFdmVudEhhbmRsZXIudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JZGVudGl0eU1hcC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL09iamVjdERlbGV0ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL09iamVjdFJldHJpZXZlZEV2ZW50LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vT2JqZWN0U2F2ZWRFdmVudC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1VuaXRPZldvcmtFcnJvcnMudHNcIiAvPlxyXG5cclxuLy8gaW1wb3J0IHtCYXNlQWdncmVnYXRlUm9vdH0gZnJvbSBcIi4uL0FnZ3JlZ2F0ZS9CYXNlQWdncmVnYXRlUm9vdFwiO1xyXG4vLyBpbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuLy8gaW1wb3J0IHtJUmVwb3NpdG9yeX0gZnJvbSBcIi4uL1JlcG9zaXRvcnkvSVJlcG9zaXRvcnlcIjtcclxuLy8gaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tIFwiLi4vU2VyaWFsaXphdGlvbi9TZXJpYWxpemVyXCI7XHJcbi8vIGltcG9ydCB7SW5Qcm9jZXNzRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9JblByb2Nlc3NEaXNwYXRjaGVyXCI7XHJcbi8vIGltcG9ydCB7SURvbWFpbkV2ZW50fSBmcm9tIFwiLi4vRG9tYWluRXZlbnRzL0lEb21haW5FdmVudFwiO1xyXG4vLyBpbXBvcnQge0lFdmVudEhhbmRsZXJ9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG4vLyBpbXBvcnQge0lkZW50aXR5TWFwLCBJdGVtU3RhdHVzfSBmcm9tIFwiLi9JZGVudGl0eU1hcFwiO1xyXG4vLyBpbXBvcnQge09iamVjdERlbGV0ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0RGVsZXRlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0UmV0cmlldmVkRXZlbnR9IGZyb20gXCIuL09iamVjdFJldHJpZXZlZEV2ZW50XCI7XHJcbi8vIGltcG9ydCB7T2JqZWN0U2F2ZWRFdmVudH0gZnJvbSBcIi4vT2JqZWN0U2F2ZWRFdmVudFwiO1xyXG4vLyBpbXBvcnQge1VuaXRPZldvcmtFcnJvcnN9IGZyb20gXCIuL1VuaXRPZldvcmtFcnJvcnNcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5Vbml0T2ZXb3JrIHtcclxuICAgIGltcG9ydCBCYXNlQWdncmVnYXRlUm9vdCA9IEFnZ3JlZ2F0ZS5CYXNlQWdncmVnYXRlUm9vdDtcclxuICAgIGltcG9ydCBJS2V5VmFsdWVPYmplY3QgPSBFbnRpdHkuSUtleVZhbHVlT2JqZWN0O1xyXG4gICAgaW1wb3J0IElSZXBvc2l0b3J5ID0gUmVwb3NpdG9yeS5JUmVwb3NpdG9yeTtcclxuICAgIGltcG9ydCBTZXJpYWxpemVyID0gU2VyaWFsaXphdGlvbi5TZXJpYWxpemVyO1xyXG4gICAgaW1wb3J0IEluUHJvY2Vzc0Rpc3BhdGNoZXIgPSBEb21haW5FdmVudHMuSW5Qcm9jZXNzRGlzcGF0Y2hlcjtcclxuICAgIGltcG9ydCBJRG9tYWluRXZlbnQgPSBEb21haW5FdmVudHMuSURvbWFpbkV2ZW50O1xyXG4gICAgaW1wb3J0IElFdmVudEhhbmRsZXIgPSBEb21haW5FdmVudHMuSUV2ZW50SGFuZGxlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbXBsZSBVbml0T2ZXb3JrIGZvciBhIHNpbmdsZSBSZXBvc2l0b3J5LlxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgVW5pdE9mV29yazxUIGV4dGVuZHMgQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4sIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT4+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpZE1hcDogSWRlbnRpdHlNYXA8VCwgVEtleT47XHJcbiAgICAgICAgcHJpdmF0ZSByZXBvc2l0b3J5OiBJUmVwb3NpdG9yeTxULCBUS2V5PjtcclxuICAgICAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEluUHJvY2Vzc0Rpc3BhdGNoZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnk6IElSZXBvc2l0b3J5PFQsIFRLZXk+KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XHJcbiAgICAgICAgICAgIHRoaXMuaWRNYXAgPSBuZXcgSWRlbnRpdHlNYXA8VCwgVEtleT4oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbmV3IEluUHJvY2Vzc0Rpc3BhdGNoZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHJpZXZlcyBhbiBpdGVtIGZyb20gdGhlIFJlcG9zaXRvcnkgb3IgZnJvbSB0aGUgVW5pdE9mV29yaywgZ2l2ZW4gaXRzIElkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXRCeUlkKGtleTogVEtleSk6IFQge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlkTWFwLmdldEl0ZW1TdGF0dXMoa2V5KSA9PT0gSXRlbVN0YXR1cy5EZWxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVW5pdE9mV29ya0Vycm9ycy50aHJvdyhVbml0T2ZXb3JrRXJyb3JzLkl0ZW1NYXJrZWRBc0RlbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWRNYXAuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLnJlcG9zaXRvcnkuZ2V0QnlJZChrZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLmFkZChrZXksIHRvUmV0dXJuKTtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNTYXZlZEJ5SWQoa2V5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXRyaWV2ZWRFdmVudCA9IG5ldyBPYmplY3RSZXRyaWV2ZWRFdmVudCh0b1JldHVybi5fX3R5cGVOYW1lLCB0b1JldHVybi5fX3R5cGVWZXJzaW9uLCB0b1JldHVybi5nZXRLZXkoKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KHJldHJpZXZlZEV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1hcmtzIGFuIGl0ZW0gYXMgZGVsZXRlZCBmcm9tIHRoZSBVbml0T2ZXb3JrIChhbmQgZnJvbSB0aGUgUmVwb3NpdG9yeSB3aGVuIHRoZSBVb1cgd2lsbCBiZSBzYXZlZClcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGVsZXRlQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5pZE1hcC5tYXJrQXNEZWxldGVkQnlJZChrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2F2ZXMgYWxsIHRoZSBtb2RpZmllZCBpdGVtcyBpbiB0aGUgVW5pdE9mV29yay5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2F2ZUFsbCgpIHtcclxuICAgICAgICAgICAgdmFyIGtleXMgPSB0aGlzLmlkTWFwLmdldElkcygpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgb2Yga2V5cykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWRNYXAudXBkYXRlU2F2ZWRJdGVtU3RhdHVzKGtleSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5pZE1hcC5nZXRJdGVtU3RhdHVzKGtleSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEl0ZW1TdGF0dXMuRGVsZXRlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRGVsZXRlZEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBJdGVtU3RhdHVzLk1vZGlmaWVkOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5OZXc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc05ld09yTW9kaWZpZWRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgSXRlbVN0YXR1cy5TYXZlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoZXZlbnRUeXBlTmFtZTogc3RyaW5nLCBldmVudEhhbmRsZXI6IElFdmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHVucmVnaXN0ZXJIYW5kbGVyKGV2ZW50VHlwZU5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBJRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci51bnJlZ2lzdGVySGFuZGxlcihldmVudFR5cGVOYW1lLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwcm9jZXNzRGVsZXRlZEl0ZW0oa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHZhciBkZWxldGVkRXZlbnQgPSBuZXcgT2JqZWN0RGVsZXRlZEV2ZW50KGl0ZW0uX190eXBlTmFtZSwgaXRlbS5fX3R5cGVWZXJzaW9uLCBrZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yeS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChkZWxldGVkRXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwcm9jZXNzTmV3T3JNb2RpZmllZEl0ZW0oa2V5OiBUS2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pZE1hcC5nZXRCeUlkKGtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yeS5zYXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmlkTWFwLm1hcmtBc1NhdmVkQnlJZChrZXkpO1xyXG4gICAgICAgICAgICAvLyByYWlzZXMgYW4gZXZlbnQgZm9yIHdob21ldmVyIGlzIGludGVyZXN0ZWRcclxuICAgICAgICAgICAgdmFyIHNhdmVkRXZlbnQgPSBuZXcgT2JqZWN0U2F2ZWRFdmVudChpdGVtLl9fdHlwZU5hbWUsIGl0ZW0uX190eXBlVmVyc2lvbiwga2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlRXZlbnQoc2F2ZWRFdmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJhaXNlRXZlbnQoZXZlbnQ6IElEb21haW5FdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29tcGxldGVseSByZW1vdmVzIGFuIG9iamVjdCBmcm9tIHRoZSBJZGVudGl0eU1hcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgcmVtb3ZlQnlJZChrZXk6IFRLZXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaWRNYXAuaXNUcmFja2VkKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWRNYXAucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19