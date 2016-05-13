define(["require", "exports", "./Errors", "../ValueObjects/Guid"], function (require, exports, Errors_1, Guid_1) {
    "use strict";
    var TypeRegistry = (function () {
        function TypeRegistry() {
            this.registry = {};
            this.latestVersions = {};
            this.registerValueObjectsLibrary();
        }
        TypeRegistry.prototype.registerValueObjectsLibrary = function () {
            this.registerType("DDDTools.ValueObjects.Guid", "v1", Guid_1.Guid);
        };
        TypeRegistry.prototype.registerType = function (typeName, typeVersion, typePrototype) {
            if (!this.versionIsInCorrectFormat(typeVersion)) {
                Errors_1.Errors.throw(Errors_1.Errors.IncorrectVersionFormat);
            }
            this.registry[typeName] = this.registry[typeName] || {};
            this.registry[typeName][typeVersion] = typePrototype;
            this.updateLatestVersions(typeName, typeVersion);
        };
        TypeRegistry.prototype.updateLatestVersions = function (typeName, typeVersion) {
            if (!this.latestVersions[typeName]) {
                this.latestVersions[typeName] = typeVersion;
                return;
            }
            var reference = this.latestVersions[typeName];
            if (this.isVersionGreater(typeVersion, reference)) {
                this.latestVersions[typeName] = typeVersion;
            }
        };
        TypeRegistry.prototype.isVersionGreater = function (vSubject, vReference) {
            var vS = this.extractVersionNumber(vSubject);
            var vR = this.extractVersionNumber(vReference);
            return vS > vR;
        };
        TypeRegistry.prototype.extractVersionNumber = function (typeVersion) {
            var version = typeVersion.replace("v", "");
            var asNumber = Number(version);
            return asNumber;
        };
        TypeRegistry.prototype.getTypeInstance = function (typeName, typeVersion) {
            if (!typeVersion) {
                typeVersion = this.getLatestVersionForType(typeName);
            }
            if (!this.registry[typeName]) {
                Errors_1.Errors.throw(Errors_1.Errors.TypeNotRegistered, "Type " + typeName + " does not exist in the TypeRegistry.");
            }
            if (!this.registry[typeName][typeVersion]) {
                Errors_1.Errors.throw(Errors_1.Errors.TypeNotRegistered, "Version " + typeVersion + " of Type " + typeName + " does not exist in the TypeRegistry.");
            }
            var toInstantiate = this.registry[typeName][typeVersion];
            var toReturn;
            try {
                toReturn = (new toInstantiate());
            }
            catch (e) {
                Errors_1.Errors.throw(Errors_1.Errors.UnableToInstantiateType, "Unable to create instance of " + typeName + " " + e.message);
            }
            return toReturn;
        };
        TypeRegistry.prototype.isLatestVersionForType = function (typeName, typeVersion) {
            return this.getLatestVersionForType(typeName) === typeVersion;
        };
        TypeRegistry.prototype.getLatestVersionForType = function (typeName) {
            return this.latestVersions[typeName] || undefined;
        };
        TypeRegistry.prototype.versionIsInCorrectFormat = function (typeVersion) {
            var versionRe = new RegExp("^v[0-9]+");
            if (!versionRe.test(typeVersion)) {
                return false;
            }
            return true;
        };
        TypeRegistry.prototype.computeNextVersion = function (typeVersion) {
            var versionRe = new RegExp("^v[0-9]+");
            if (!this.versionIsInCorrectFormat(typeVersion)) {
                throw new Error();
            }
            var version = Number(typeVersion.substr(1));
            version = version + 1;
            var nextVersion = "v" + version;
            return nextVersion;
        };
        return TypeRegistry;
    }());
    exports.TypeRegistry = TypeRegistry;
});
//# sourceMappingURL=TypeRegistry.js.map