define(["require", "exports", "./Errors", "./Upgrader"], function (require, exports, Errors_1, Upgrader_1) {
    "use strict";
    var Factory = (function () {
        function Factory() {
        }
        Factory.createTypeInstance = function (typeName, typeVersion) {
            var toReturn;
            if (typeVersion) {
                var typeToInstatiate = Factory.computeFullyQualifiedTypeName(typeName, typeVersion);
                try {
                    toReturn = eval("new " + typeToInstatiate + "()");
                    return toReturn;
                }
                catch (e) {
                }
                toReturn = Factory.createTypeInstance(typeName);
                if (toReturn.__typeVersion != typeVersion) {
                    Errors_1.Errors.throw(Errors_1.Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + typeVersion);
                }
                return toReturn;
            }
            try {
                toReturn = eval("new " + typeName + "()");
            }
            catch (e) {
                Errors_1.Errors.throw(Errors_1.Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
            }
            return toReturn;
        };
        Factory.createObjectsFromState = function (state) {
            if (state === undefined) {
                Errors_1.Errors.throw(Errors_1.Errors.UnableToInstantiateType, "state cannot be 'undefined'");
            }
            if (state === null) {
                Errors_1.Errors.throw(Errors_1.Errors.UnableToInstantiateType, "state cannot be 'null'");
            }
            if (typeof state === 'object') {
                if (Factory.isPersistableObject(state)) {
                    var persistable;
                    persistable = Factory.createTypeInstance(state.__typeName);
                    persistable.setState(state);
                    var upgradedPersistable = Upgrader_1.Upgrader.upgrade(persistable);
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
        Factory.isTypeInstantiable = function (fullyQualifiedTypeName) {
            try {
                var tmpType = Factory.createTypeInstance(fullyQualifiedTypeName);
            }
            catch (e) {
                return false;
            }
            return true;
        };
        Factory.computeFullyQualifiedTypeName = function (typeName, typeVersion) {
            var fqtnPartsArray = typeName.split(".");
            var className = fqtnPartsArray.pop();
            fqtnPartsArray.push(typeVersion);
            fqtnPartsArray.push(className);
            var newFqtn = fqtnPartsArray.join(".");
            return newFqtn;
        };
        ;
        return Factory;
    }());
    exports.Factory = Factory;
});
//# sourceMappingURL=Factory.js.map