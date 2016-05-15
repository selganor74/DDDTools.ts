define(["require", "exports", "./Errors"], function (require, exports, Errors_1) {
    "use strict";
    var NeDBDatabaseFactory = (function () {
        function NeDBDatabaseFactory() {
        }
        NeDBDatabaseFactory.registerDatabase = function (dbname, database) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered(dbname)) {
                Errors_1.Errors.throw(Errors_1.Errors.DatabaseAlreadyRegistered, "Database " + database + " has already been registered");
            }
            sThis.datastoreRegistry[dbname] = database;
        };
        NeDBDatabaseFactory.isDatabaseRegistered = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.datastoreRegistry[dbname]) {
                return true;
            }
            return false;
        };
        NeDBDatabaseFactory.getDatabase = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (!sThis.isDatabaseRegistered(dbname)) {
                Errors_1.Errors.throw(Errors_1.Errors.DatabaseNotRegistered, "Database " + dbname + " does not exist in the Factory");
            }
            return sThis.datastoreRegistry[dbname];
        };
        NeDBDatabaseFactory.unregisterDatabase = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered) {
                delete sThis.datastoreRegistry[dbname];
            }
        };
        NeDBDatabaseFactory.getAndRegisterPersistentDb = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered(dbname)) {
                Errors_1.Errors.throw(Errors_1.Errors.DatabaseAlreadyRegistered, "Database " + dbname + " is already registered");
            }
            var ds = new Nedb({ filename: dbname, autoload: true });
            sThis.registerDatabase(dbname, ds);
            return sThis.getDatabase(dbname);
        };
        NeDBDatabaseFactory.getAndRegisterInMemoryDb = function (dbname) {
            var sThis = NeDBDatabaseFactory;
            if (sThis.isDatabaseRegistered(dbname)) {
                Errors_1.Errors.throw(Errors_1.Errors.DatabaseAlreadyRegistered, "Database " + dbname + " is already registered");
            }
            var ds = new Nedb({ inMemoryOnly: true });
            sThis.registerDatabase(dbname, ds);
            return sThis.getDatabase(dbname);
        };
        NeDBDatabaseFactory.datastoreRegistry = {};
        return NeDBDatabaseFactory;
    }());
    exports.NeDBDatabaseFactory = NeDBDatabaseFactory;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmVEQkRhdGFiYXNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9OZURCUmVwb3NpdG9yeS9OZURCRGF0YWJhc2VGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBU0E7UUFBQTtRQTREQSxDQUFDO1FBeERpQixvQ0FBZ0IsR0FBOUIsVUFBZ0MsTUFBYyxFQUFFLFFBQXVCO1lBQ25FLElBQUksS0FBSyxHQUFHLG1CQUFtQixDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLHlCQUF5QixFQUFFLFdBQVcsR0FBRyxRQUFRLEdBQUcsOEJBQThCLENBQUMsQ0FBQztZQUM1RyxDQUFDO1lBQ0QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMvQyxDQUFDO1FBRWEsd0NBQW9CLEdBQWxDLFVBQW9DLE1BQWM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsbUJBQW1CLENBQUM7WUFDaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRWEsK0JBQVcsR0FBekIsVUFBMEIsTUFBYztZQUNwQyxJQUFJLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztZQUNoQyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLHFCQUFxQixFQUFFLFdBQVcsR0FBRyxNQUFNLEdBQUcsZ0NBQWdDLENBQUMsQ0FBQztZQUN4RyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRWEsc0NBQWtCLEdBQWhDLFVBQWlDLE1BQWM7WUFDM0MsSUFBSSxLQUFLLEdBQUcsbUJBQW1CLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsQ0FBQztRQUNMLENBQUM7UUFLYSw4Q0FBMEIsR0FBeEMsVUFBeUMsTUFBYztZQUNuRCxJQUFJLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxlQUFNLENBQUMsS0FBSyxDQUFDLGVBQU0sQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLEdBQUcsTUFBTSxHQUFHLHdCQUF3QixDQUFDLENBQUM7WUFDcEcsQ0FBQztZQUNELElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFLYSw0Q0FBd0IsR0FBdEMsVUFBdUMsTUFBYztZQUNqRCxJQUFJLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxlQUFNLENBQUMsS0FBSyxDQUFDLGVBQU0sQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLEdBQUcsTUFBTSxHQUFHLHdCQUF3QixDQUFDLENBQUM7WUFDcEcsQ0FBQztZQUNELElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDeEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBekRjLHFDQUFpQixHQUFvQyxFQUFFLENBQUM7UUEwRDNFLDBCQUFDO0lBQUQsQ0FBQyxBQTVERCxJQTREQztJQTVEWSwyQkFBbUIsc0JBNEQvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5lREJEYXRhU3RvcmUgPSByZXF1aXJlKFwibmVkYlwiKTtcclxuXHJcbmltcG9ydCB7RXJyb3JzfSBmcm9tIFwiLi9FcnJvcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIE5lZGI6IHR5cGVvZiBOZURCRGF0YVN0b3JlO1xyXG5cclxuLyoqXHJcbiAqIEFjdCBhcyBhIEZhY3RvcnkgYW5kIFJlZ2lzdHJ5IGZvciBhbGwgdGhlIE5lREJzIHVzZWQgYnkgdGhlIGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5lREJEYXRhYmFzZUZhY3Rvcnkge1xyXG4gXHJcbiAgICBwcml2YXRlIHN0YXRpYyBkYXRhc3RvcmVSZWdpc3RyeTogeyBbaWQ6IHN0cmluZ106IE5lREJEYXRhU3RvcmUgfSA9IHt9O1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRGF0YWJhc2UoIGRibmFtZTogc3RyaW5nLCBkYXRhYmFzZTogTmVEQkRhdGFTdG9yZSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IE5lREJEYXRhYmFzZUZhY3Rvcnk7XHJcbiAgICAgICAgaWYgKHNUaGlzLmlzRGF0YWJhc2VSZWdpc3RlcmVkKGRibmFtZSkpIHtcclxuICAgICAgICAgICAgRXJyb3JzLnRocm93KEVycm9ycy5EYXRhYmFzZUFscmVhZHlSZWdpc3RlcmVkLCBcIkRhdGFiYXNlIFwiICsgZGF0YWJhc2UgKyBcIiBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWRcIik7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNUaGlzLmRhdGFzdG9yZVJlZ2lzdHJ5W2RibmFtZV0gPSBkYXRhYmFzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBpc0RhdGFiYXNlUmVnaXN0ZXJlZCggZGJuYW1lOiBzdHJpbmcgKSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gTmVEQkRhdGFiYXNlRmFjdG9yeTtcclxuICAgICAgICBpZihzVGhpcy5kYXRhc3RvcmVSZWdpc3RyeVtkYm5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0YWJhc2UoZGJuYW1lOiBzdHJpbmcpOiBOZURCRGF0YVN0b3JlIHtcclxuICAgICAgICB2YXIgc1RoaXMgPSBOZURCRGF0YWJhc2VGYWN0b3J5O1xyXG4gICAgICAgIGlmKCFzVGhpcy5pc0RhdGFiYXNlUmVnaXN0ZXJlZChkYm5hbWUpKSB7XHJcbiAgICAgICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuRGF0YWJhc2VOb3RSZWdpc3RlcmVkLCBcIkRhdGFiYXNlIFwiICsgZGJuYW1lICsgXCIgZG9lcyBub3QgZXhpc3QgaW4gdGhlIEZhY3RvcnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzVGhpcy5kYXRhc3RvcmVSZWdpc3RyeVtkYm5hbWVdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHVucmVnaXN0ZXJEYXRhYmFzZShkYm5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHZhciBzVGhpcyA9IE5lREJEYXRhYmFzZUZhY3Rvcnk7XHJcbiAgICAgICAgaWYgKHNUaGlzLmlzRGF0YWJhc2VSZWdpc3RlcmVkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzVGhpcy5kYXRhc3RvcmVSZWdpc3RyeVtkYm5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgdG8gcmVnaXN0ZXIgYW5kIG9idGFpbiBhIHBlcnNpc3RlbnQgZGF0YXN0b3JlIGluc3RhbmNlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFuZFJlZ2lzdGVyUGVyc2lzdGVudERiKGRibmFtZTogc3RyaW5nKTogTmVEQkRhdGFTdG9yZSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gTmVEQkRhdGFiYXNlRmFjdG9yeTtcclxuICAgICAgICBpZiAoc1RoaXMuaXNEYXRhYmFzZVJlZ2lzdGVyZWQoZGJuYW1lKSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkRhdGFiYXNlQWxyZWFkeVJlZ2lzdGVyZWQsIFwiRGF0YWJhc2UgXCIgKyBkYm5hbWUgKyBcIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkcyA9IG5ldyBOZWRiKHtmaWxlbmFtZTogZGJuYW1lLCBhdXRvbG9hZDogdHJ1ZX0pO1xyXG4gICAgICAgIHNUaGlzLnJlZ2lzdGVyRGF0YWJhc2UoZGJuYW1lLCBkcyk7XHJcbiAgICAgICAgcmV0dXJuIHNUaGlzLmdldERhdGFiYXNlKGRibmFtZSk7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciB0byByZWdpc3RlciBhbmQgb2J0YWluIGEgZGF0YXN0b3JlIGluc3RhbmNlIGZvciBpbiBNZW1vcnkgU3RvcmFnZSBPbmx5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QW5kUmVnaXN0ZXJJbk1lbW9yeURiKGRibmFtZTogc3RyaW5nKTogTmVEQkRhdGFTdG9yZSB7XHJcbiAgICAgICAgdmFyIHNUaGlzID0gTmVEQkRhdGFiYXNlRmFjdG9yeTtcclxuICAgICAgICBpZiAoc1RoaXMuaXNEYXRhYmFzZVJlZ2lzdGVyZWQoZGJuYW1lKSkge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkRhdGFiYXNlQWxyZWFkeVJlZ2lzdGVyZWQsIFwiRGF0YWJhc2UgXCIgKyBkYm5hbWUgKyBcIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkcyA9IG5ldyBOZWRiKHtpbk1lbW9yeU9ubHk6IHRydWV9KTtcclxuICAgICAgICBzVGhpcy5yZWdpc3RlckRhdGFiYXNlKGRibmFtZSwgZHMpO1xyXG4gICAgICAgIHJldHVybiBzVGhpcy5nZXREYXRhYmFzZShkYm5hbWUpO1xyXG4gICAgfSBcclxufSJdfQ==