define(["require", "exports", "./Errors", "../ValueObjects/Guid"], function (require, exports, Errors_1, Guid_1) {
    "use strict";
    var TypeRegistry = (function () {
        function TypeRegistry() {
            this.registry = {};
            this.latestVersions = {};
            this.registerLibraryValueObjects();
        }
        TypeRegistry.prototype.registerLibraryValueObjects = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZVJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL1BlcnNpc3RhYmxlT2JqZWN0L1R5cGVSZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQU1BO1FBS0k7WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUV6QixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUN2QyxDQUFDO1FBS08sa0RBQTJCLEdBQW5DO1lBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQU8sV0FBSSxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUdNLG1DQUFZLEdBQW5CLFVBQW9CLFFBQWdCLEVBQUUsV0FBbUIsRUFBRSxhQUEyQjtZQUNsRixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxhQUFhLENBQUM7WUFFckQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRU8sMkNBQW9CLEdBQTVCLFVBQTZCLFFBQWdCLEVBQUUsV0FBbUI7WUFDOUQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGNBQWMs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QUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRU0seUNBQWtCLEdBQXpCLFVBQTBCLFdBQW1CO1lBRXpDLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFOUMsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBRXRCLENBQUM7WUFDRCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksV0FBVyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFDaEMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBRUwsbUJBQUM7SUFBRCxDQUFDLEFBaEhELElBZ0hDO0lBaEhZLG9CQUFZLGVBZ0h4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuaW1wb3J0IHtHdWlkfSBmcm9tIFwiLi4vVmFsdWVPYmplY3RzL0d1aWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUeXBlUmVnaXN0cnkge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHJlZ2lzdHJ5OiB7IFt0eXBlTmFtZTogc3RyaW5nXTogeyBbdHlwZVZlcnNpb246IHN0cmluZ10gOiBJUGVyc2lzdGFibGUgfSB9O1xyXG4gICAgcHJpdmF0ZSBsYXRlc3RWZXJzaW9uczogeyBbdHlwZU5hbWU6IHN0cmluZ106IHN0cmluZyB9XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSB7fTtcclxuICAgICAgICB0aGlzLmxhdGVzdFZlcnNpb25zID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckxpYnJhcnlWYWx1ZU9iamVjdHMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBBbHdheXMgUmVnaXN0ZXIgTGlicmFyeSBWYWx1ZSBPYmplY3RzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyTGlicmFyeVZhbHVlT2JqZWN0cygpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZShcIkRERFRvb2xzLlZhbHVlT2JqZWN0cy5HdWlkXCIsIFwidjFcIiwgPGFueT5HdWlkKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RlclR5cGUodHlwZU5hbWU6IHN0cmluZywgdHlwZVZlcnNpb246IHN0cmluZywgdHlwZVByb3RvdHlwZTogSVBlcnNpc3RhYmxlKTogdm9pZCB7XHJcbiAgICAgICAgaWYoIXRoaXMudmVyc2lvbklzSW5Db3JyZWN0Rm9ybWF0KHR5cGVWZXJzaW9uKSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXSA9IHRoaXMucmVnaXN0cnlbdHlwZU5hbWVdIHx8IHt9O1xyXG4gICAgICAgIHRoaXMucmVnaXN0cnlbdHlwZU5hbWVdW3R5cGVWZXJzaW9uXSA9IHR5cGVQcm90b3R5cGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVMYXRlc3RWZXJzaW9ucyh0eXBlTmFtZSwgdHlwZVZlcnNpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxhdGVzdFZlcnNpb25zKHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZighdGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gPSB0eXBlVmVyc2lvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVmZXJlbmNlID0gdGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWZXJzaW9uR3JlYXRlcih0eXBlVmVyc2lvbixyZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGF0ZXN0VmVyc2lvbnNbdHlwZU5hbWVdID0gdHlwZVZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgcHJpdmF0ZSBpc1ZlcnNpb25HcmVhdGVyKHZTdWJqZWN0OiBzdHJpbmcsIHZSZWZlcmVuY2U6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciB2UzogbnVtYmVyID0gdGhpcy5leHRyYWN0VmVyc2lvbk51bWJlcih2U3ViamVjdCk7XHJcbiAgICAgICAgdmFyIHZSOiBudW1iZXIgPSB0aGlzLmV4dHJhY3RWZXJzaW9uTnVtYmVyKHZSZWZlcmVuY2UpO1xyXG4gICAgICAgIHJldHVybiB2UyA+IHZSO1xyXG4gICAgfSAgIFxyXG4gICAgIFxyXG4gICAgcHJpdmF0ZSBleHRyYWN0VmVyc2lvbk51bWJlcih0eXBlVmVyc2lvbjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgdmVyc2lvbjogc3RyaW5nID0gdHlwZVZlcnNpb24ucmVwbGFjZShcInZcIixcIlwiKTtcclxuICAgICAgICB2YXIgYXNOdW1iZXIgPSBOdW1iZXIodmVyc2lvbik7XHJcbiAgICAgICAgcmV0dXJuIGFzTnVtYmVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0VHlwZUluc3RhbmNlPFQgZXh0ZW5kcyBJUGVyc2lzdGFibGU+KHR5cGVOYW1lOiBzdHJpbmcsIHR5cGVWZXJzaW9uPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYoIXR5cGVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHR5cGVWZXJzaW9uID0gdGhpcy5nZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5yZWdpc3RyeVt0eXBlTmFtZV0pIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl0pIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5UeXBlTm90UmVnaXN0ZXJlZCwgXCJWZXJzaW9uIFwiICsgdHlwZVZlcnNpb24gKyBcIiBvZiBUeXBlIFwiICsgdHlwZU5hbWUgKyBcIiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgVHlwZVJlZ2lzdHJ5LlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRvSW5zdGFudGlhdGUgPSB0aGlzLnJlZ2lzdHJ5W3R5cGVOYW1lXVt0eXBlVmVyc2lvbl07XHJcbiAgICAgICAgdmFyIHRvUmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRvUmV0dXJuID0gPFQ+KG5ldyAoPGFueT50b0luc3RhbnRpYXRlKSgpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuVW5hYmxlVG9JbnN0YW50aWF0ZVR5cGUsIFwiVW5hYmxlIHRvIGNyZWF0ZSBpbnN0YW5jZSBvZiBcIiArIHR5cGVOYW1lICsgXCIgXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiBzcGVjaWZpZWQgdmVyc2lvbiBpcyB0aGUgbGF0ZXN0IGZvciB0eXBlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nLCB0eXBlVmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGF0ZXN0VmVyc2lvbkZvclR5cGUodHlwZU5hbWUpID09PSB0eXBlVmVyc2lvbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIHJldHVybiB1bmRlZmluZWQgaWYgdGhlIG5vIHZlcnNpb24gdHlwZSBpcyBkZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRMYXRlc3RWZXJzaW9uRm9yVHlwZSh0eXBlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXRlc3RWZXJzaW9uc1t0eXBlTmFtZV0gfHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbjogc3RyaW5nKSA6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uUmUudGVzdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wdXRlTmV4dFZlcnNpb24odHlwZVZlcnNpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gVmVyc2lvbiBtdXN0IGJlIGluIHRoZSBmb3JtIHZOIHdoZXJlIHYgaXMgYSBjb25zdGFudCBhbmQgTiBpcyBhbiBpbnRlZ2VyLlxyXG4gICAgICAgIHZhciB2ZXJzaW9uUmUgPSBuZXcgUmVnRXhwKFwiXnZbMC05XStcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZlcnNpb25Jc0luQ29ycmVjdEZvcm1hdCh0eXBlVmVyc2lvbikpIHtcclxuICAgICAgICAgICAgLy8gVE9ETyBUaHJvdyB0aGUgY29ycmVjdCBleGNlcHRpb247XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAvLyBFcnJvcnMudGhyb3coRXJyb3JzLkluY29ycmVjdFZlcnNpb25Gb3JtYXQsIFwiU3BlY2lmaWVkIHZlcnNpb24gXCIgKyB0eXBlVmVyc2lvbiArIFwiIGlzIGluIGluY29ycmVjdCBmb3JtYXQuIE11c3QgYmUgaW4gdGhlIGZvcm0gdjxuPiB3aGVyZSBuIGlzIGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmVyc2lvbiA9IE51bWJlcih0eXBlVmVyc2lvbi5zdWJzdHIoMSkpO1xyXG4gICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgMTtcclxuICAgICAgICB2YXIgbmV4dFZlcnNpb24gPSBcInZcIiArIHZlcnNpb247XHJcbiAgICAgICAgcmV0dXJuIG5leHRWZXJzaW9uO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59Il19