
import {Errors} from "./Errors";
import {Factory} from "./Factory";
import {IPersistable} from "../PersistableObject/IPersistable";
// namespace DDDTools.PersistableObject {

/**
 * The Upgrader is an helper class to automate the "upgrade process" of an object's state.
 * The Upgrader is found on these principles:
 *  * The latest version FQTN must match the one specified by the property __typeName, which is in the form namespace.objectName.
 *  * Older versions of a PersistableObject MUST have a FQTN in the form namespace.<version>.objectName.
 *  * __typeVersion MUST be specified as v<versionNumber> where version is an integer.
 *  * All object's versions (excluding v1) MUST provide an getUpgradedInstance method that knows how to modify state to go from 
 *    version v<n - 1> to v<n>, where n is the version of the object containing the getUpgradedInstance method.   
 */
export class Upgrader {

    // Contains the latest version possible for each type. 
    private static latestTypeVersionMap: { [typeName: string]: string } = {};
    // Contains flags to determine if latstTypeVersionMap for a specific type has been calculated
    private static isVersionMapBuilt: { [typeName: string]: boolean } = {};

    private static buildVersionMapForType(typeName: string): void {
        if (Upgrader.isVersionMapBuilt[typeName]) {
            return;
        }
        try {
            var tmpInstance = Factory.createTypeInstance(typeName);
            Upgrader.latestTypeVersionMap[typeName] = tmpInstance.__typeVersion;
            // console.log("Latest possible version for " + typeName + " is " + tmpInstance.__typeVersion);
        } catch (e) {
            Errors.throw(Errors.TypeNotInstatiable, "The type " + typeName + " cannot be instantiated, so it is impossible to identify the latest possible version.");
        }
        Upgrader.isVersionMapBuilt[typeName] = true;
    }

    public static isLatestVersionForType(typeName: string, typeVersion: string): boolean {
        // Looks for the latest version, if not already done.
        if (!Upgrader.isVersionMapBuilt[typeName]) {
            Upgrader.buildVersionMapForType(typeName);
        }
        // If the version supplied doesn't match the latest version in the map, the instance must be upgraded.
        if (Upgrader.latestTypeVersionMap[typeName] !== typeVersion) {
            return true;
        }
        return false;
    }

    public static upgrade(instanceFrom: IPersistable): IPersistable {
        // If object doesn't need to upgrade, then we are done!
        if (!Upgrader.isLatestVersionForType(instanceFrom.__typeName, instanceFrom.__typeVersion)) {
            return instanceFrom;
        }
        var nextVersion = Upgrader.computeNextVersion(instanceFrom.__typeVersion);
        var upgraderInstance = Factory.createTypeInstance(instanceFrom.__typeName, nextVersion);
        var upgraded = upgraderInstance.getUpgradedInstance(instanceFrom);
        // Verifies that version is effectively upgraded
        if (upgraded.__typeVersion != nextVersion) {
            Errors.throw(Errors.WrongVersionInUpgradedInstance, "The expected version of the upgraded instance was " + nextVersion + " while was found to be " + upgraderInstance.__typeVersion);
        }
        return Upgrader.upgrade(upgraded);
    }

    public static computeNextVersion(typeVersion: string): string {
        // Version must be in the form vN where v is a constant and N is an integer.
        var versionRe = new RegExp("^v[0-9]+");
        if (!versionRe.test(typeVersion)) {
            Errors.throw(Errors.IncorrectVersionFormat, "Specified version " + typeVersion + " is in incorrect format. Must be in the form v<n> where n is an integer.");
        }
        var version = Number(typeVersion.substr(1));
        version = version + 1;
        var nextVersion = "v" + version;
        return nextVersion;
    }
}
// }