define(["require", "exports", "./Errors", "../ValueObjects/Guid"], function (require, exports, Errors_1, Guid_1) {
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
//# sourceMappingURL=TypeRegistry.js.map