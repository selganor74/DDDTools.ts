define(["require", "exports", "./Errors", "./Factory"], function (require, exports, Errors_1, Factory_1) {
    "use strict";
    var Upgrader = (function () {
        function Upgrader() {
        }
        Upgrader.buildVersionMapForType = function (typeName) {
            if (Upgrader.isVersionMapBuilt[typeName]) {
                return;
            }
            try {
                var tmpInstance = Factory_1.Factory.createTypeInstance(typeName);
                Upgrader.latestTypeVersionMap[typeName] = tmpInstance.__typeVersion;
            }
            catch (e) {
                Errors_1.Errors.throw(Errors_1.Errors.TypeNotInstatiable, "The type " + typeName + " cannot be instantiated, so it is impossible to identify the latest possible version.");
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
            var upgraderInstance = Factory_1.Factory.createTypeInstance(instanceFrom.__typeName, nextVersion);
            var upgraded = upgraderInstance.getUpgradedInstance(instanceFrom);
            if (upgraded.__typeVersion != nextVersion) {
                Errors_1.Errors.throw(Errors_1.Errors.WrongVersionInUpgradedInstance, "The expected version of the upgraded instance was " + nextVersion + " while was found to be " + upgraderInstance.__typeVersion);
            }
            return Upgrader.upgrade(upgraded);
        };
        Upgrader.computeNextVersion = function (typeVersion) {
            var versionRe = new RegExp("^v[0-9]+");
            if (!versionRe.test(typeVersion)) {
                Errors_1.Errors.throw(Errors_1.Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
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
//# sourceMappingURL=Upgrader.js.map