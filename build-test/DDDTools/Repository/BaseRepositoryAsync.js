define(["require", "exports", "./Errors", "../PersistableObject/Factory"], function (require, exports, Errors_1, Factory_1) {
    "use strict";
    var BaseRepositoryAsync = (function () {
        function BaseRepositoryAsync(managedType) {
            this.managedType = managedType;
            if (managedType === "") {
                Errors_1.Errors.throw(Errors_1.Errors.ManagedTypeNotSupplied);
            }
        }
        BaseRepositoryAsync.prototype.getById = function (id) {
            var _this = this;
            var deferred = Q.defer();
            this.getByIdImplementation(id).then(function (value) {
                if (value.__typeName != _this.managedType) {
                    var reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.WrongTypeFromImplementation, "Expecting " + _this.managedType + " but obtaine " + value.__typeName + " from database.");
                    deferred.reject(reason);
                    return;
                }
                var toReturn = (Factory_1.Factory.createObjectsFromState(value));
                deferred.resolve(toReturn);
            }, function (error) {
                var reason;
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ItemNotFound, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.doSave = function (item, deferred) {
            this.saveImplementation(item).then(function () {
                deferred.resolve();
            }, function (error) {
                var reason;
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ErrorSavingItem, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.save = function (item) {
            var _this = this;
            var deferred = Q.defer();
            this.getById(item.getKey()).then(function (readValue) {
                if (!item.perfectlyMatch(readValue)) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    return;
                }
                else {
                    deferred.resolve();
                }
            }, function (error) {
                var reason;
                if (error instanceof Error && error.name == Errors_1.Errors.ItemNotFound) {
                    item.incrementRevisionId();
                    _this.doSave(item, deferred);
                    return;
                }
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ErrorReadingItem, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        BaseRepositoryAsync.prototype.delete = function (id) {
            var deferred = Q.defer();
            this.deleteImplementation(id).then(function () { deferred.resolve(); }, function (error) {
                var reason;
                if (error instanceof Error) {
                    reason = error;
                }
                else {
                    reason = Errors_1.Errors.getErrorInstance(Errors_1.Errors.ErrorDeletingItem, JSON.stringify(error));
                }
                deferred.reject(reason);
            });
            return deferred.promise;
        };
        return BaseRepositoryAsync;
    }());
    exports.BaseRepositoryAsync = BaseRepositoryAsync;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJlcG9zaXRvcnlBc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VSZXBvc2l0b3J5QXN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFhQTtRQUdJLDZCQUlZLFdBQW1CO1lBQW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1lBRTNCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixlQUFNLENBQUMsS0FBSyxDQUFDLGVBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2hELENBQUM7UUFDTCxDQUFDO1FBT0QscUNBQU8sR0FBUCxVQUFRLEVBQVE7WUFBaEIsaUJBc0JDO1lBckJHLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUssQ0FBQztZQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFDLEtBQVE7Z0JBQ0wsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxNQUFNLEdBQUcsZUFBTSxDQUFDLGdCQUFnQixDQUFDLGVBQU0sQ0FBQywyQkFBMkIsRUFBRSxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNuSyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFJLFFBQVEsR0FBUyxDQUFDLGlCQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQ0QsVUFBQyxLQUFV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Q0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQU9ELG9DQUFNLEdBQU4sVUFBTyxFQUFRO1lBQ1gsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzlCLGNBQVEsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM3QixVQUFDLEtBQVU7Z0JBQ1AsSUFBSSxNQUFhLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sR0FBRyxlQUFNLENBQUMsZ0JBQWdCLENBQUMsZUFBTSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdEYsQ0FBQztnQkFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FDSixDQUFDO1lBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FBQyxBQTFIRCxJQTBIQztJQTFIcUIsMkJBQW1CLHNCQTBIeEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVJlcG9zaXRvcnlBc3luY30gZnJvbSBcIi4vSVJlcG9zaXRvcnlBc3luY1wiO1xyXG5pbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7SVBlcnNpc3RhYmxlfSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvSVBlcnNpc3RhYmxlXCI7XHJcbmltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbmltcG9ydCBJUHJvbWlzZSA9IFEuSVByb21pc2U7XHJcblxyXG4vKipcclxuICogQ2FwdHVyZXMgY29tbW9uIGJlaGF2aW9yIG9mIHJlcG9zaXRvcnksIHVzaW5nIHRoZVRlbXBsYXRlIE1ldGhvZCBQYXR0ZXJuLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZXBvc2l0b3J5QXN5bmM8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeUFzeW5jPFQsIFRLZXk+IHtcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG1hbmFnZWQgYnkgdGhpcyByZXBvc2l0b3J5LiBXaWxsIGJlIGNvbXBhcmVkIHdpdGggdGhlIF9fdHlwZU5hbWUgcHJvcGVydHkgb2YgdGhlIG9iamVjdHMgcmV0cmlldmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgbWFuYWdlZFR5cGU6IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgIGlmIChtYW5hZ2VkVHlwZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLk1hbmFnZWRUeXBlTm90U3VwcGxpZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBZb3UgTVVTVCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwcm92aWRlIGZ1bmN0aW9uYWxpdHkgdG8gYWNjZXNzIHRvIHRoZSByZXBvc2l0b3J5IGFuZCBnZXQgYSBcInN0YXRlT2JqZWN0XCIgdG8gdXNlIGZvciBvYmplY3QgXCJyZWNvbnN0cnVjdGlvblwiLlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QnlJZEltcGxlbWVudGF0aW9uKGlkOiBUS2V5KTogSVByb21pc2U8SVR5cGVUcmFja2luZz47XHJcblxyXG4gICAgZ2V0QnlJZChpZDogVEtleSk6IElQcm9taXNlPFQ+IHtcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSBRLmRlZmVyPFQ+KCk7XHJcbiAgICAgICAgdGhpcy5nZXRCeUlkSW1wbGVtZW50YXRpb24oaWQpLnRoZW4oXHJcbiAgICAgICAgICAgICh2YWx1ZTogVCkgPT4geyBcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5fX3R5cGVOYW1lICE9IHRoaXMubWFuYWdlZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhc29uID0gRXJyb3JzLmdldEVycm9ySW5zdGFuY2UoRXJyb3JzLldyb25nVHlwZUZyb21JbXBsZW1lbnRhdGlvbiwgXCJFeHBlY3RpbmcgXCIgKyB0aGlzLm1hbmFnZWRUeXBlICsgXCIgYnV0IG9idGFpbmUgXCIgKyB2YWx1ZS5fX3R5cGVOYW1lICsgXCIgZnJvbSBkYXRhYmFzZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvUmV0dXJuOiBUID0gPFQ+KEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0b1JldHVybik7IFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbjogRXJyb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuSXRlbU5vdEZvdW5kLCBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogWW91IE1VU1Qgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBcInNhdmVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uIFRoZSB0ZW1wbGF0ZSBtZXRob2QgXCJzYXZlXCIgd2lsbCBtYW5hZ2UgdGhlIHJldmlzaW9uSWQgbG9naWMuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzYXZlSW1wbGVtZW50YXRpb24oaXRlbTogVCk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICBwcml2YXRlIGRvU2F2ZShpdGVtOiBULCBkZWZlcnJlZDogUS5EZWZlcnJlZDx7fT4pOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIHRoaXMuc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW0pLnRoZW4oXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbjogRXJyb3I7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuRXJyb3JTYXZpbmdJdGVtLCBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoaXRlbTogVCk6IElQcm9taXNlPHt9PiB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcjx7fT4oKTtcclxuICAgICAgICB0aGlzLmdldEJ5SWQoaXRlbS5nZXRLZXkoKSkudGhlbihcclxuICAgICAgICAgICAgKHJlYWRWYWx1ZTogVCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGl0ZW0gYWxyZWFkeSBleGlzdCBzbyB3ZSBoYXZlIHRvIGNvbXBhcmUgaXQgd2l0aCB3aGF0IHdlIGFyZSBzYXZpbmcuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0ucGVyZmVjdGx5TWF0Y2gocmVhZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5jcmVtZW50UmV2aXNpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TYXZlKGl0ZW0sIGRlZmVycmVkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdoYXQgaXMgaW4gdGhlIGRhdGFiYXNlIHBlcmZlY3RseSBtYXRjaCB3aGF0IHdlIGFyZSBzYXZpbmcsIHNvIG5vdGhpbmcgdG8gZG8hXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYXNvbjogRXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PSBFcnJvcnMuSXRlbU5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBleHBlY3RlZCwgdGhlIGl0ZW0gaXMgbm90IGluIHRoZSByZXBvLCBzbyB3ZSBoYXZlIHRvIGFkZCBpdCFcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmluY3JlbWVudFJldmlzaW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU2F2ZShpdGVtLCBkZWZlcnJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gT3RoZXIgZXJyb3JzIG11c3QgYmUgdHJlYXRlZCBhcyBcIkVycm9yc1wiXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWFzb24gPSBFcnJvcnMuZ2V0RXJyb3JJbnN0YW5jZShFcnJvcnMuRXJyb3JSZWFkaW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFlvdSBNVVNUIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgXCJkZWxldGVcIiBmdW5jdGlvbmFsaXR5IGluIHlvdXIgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IElQcm9taXNlPHt9PjtcclxuXHJcbiAgICBkZWxldGUoaWQ6IFRLZXkpOiBJUHJvbWlzZTx7fT4ge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9IFEuZGVmZXI8e30+KCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVJbXBsZW1lbnRhdGlvbihpZCkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4geyBkZWZlcnJlZC5yZXNvbHZlKCk7IH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhc29uOiBFcnJvcjtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9IEVycm9ycy5nZXRFcnJvckluc3RhbmNlKEVycm9ycy5FcnJvckRlbGV0aW5nSXRlbSwgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWFzb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxufSJdfQ==