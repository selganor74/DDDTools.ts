var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Errors", "../PersistableObject/Factory", "./BaseRepository"], function (require, exports, Errors_1, Factory_1, BaseRepository_1) {
    "use strict";
    var BaseInMemoryRepository = (function (_super) {
        __extends(BaseInMemoryRepository, _super);
        function BaseInMemoryRepository(_managedTypeName) {
            _super.call(this);
            this._managedTypeName = _managedTypeName;
            this.storage = {};
        }
        BaseInMemoryRepository.prototype.getByIdImplementation = function (id) {
            var key = id.toString();
            if (this.storage[key]) {
                var toReturn = Factory_1.Factory.createObjectsFromState(this.storage[key]);
                return toReturn;
            }
            Errors_1.Errors.throw(Errors_1.Errors.ItemNotFound);
        };
        BaseInMemoryRepository.prototype.saveImplementation = function (item) {
            var key = item.getKey().toString();
            this.storage[key] = item.getState();
        };
        BaseInMemoryRepository.prototype.deleteImplementation = function (id) {
            var key = id.toString();
            this.storage[key] = undefined;
        };
        return BaseInMemoryRepository;
    }(BaseRepository_1.BaseRepository));
    exports.BaseInMemoryRepository = BaseInMemoryRepository;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUluTWVtb3J5UmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQVVBO1FBQ1ksMENBQXVCO1FBSy9CLGdDQUFvQixnQkFBd0I7WUFDeEMsaUJBQU8sQ0FBQztZQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtZQUV4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRVMsc0RBQXFCLEdBQS9CLFVBQWdDLEVBQVE7WUFFcEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLFFBQVEsR0FBRyxpQkFBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakUsTUFBTSxDQUFJLFFBQVEsQ0FBQztZQUN2QixDQUFDO1lBRUQsZUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVTLG1EQUFrQixHQUE1QixVQUE2QixJQUFPO1lBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBRVMscURBQW9CLEdBQTlCLFVBQStCLEVBQVE7WUFDbkMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLENBQUM7UUFDTCw2QkFBQztJQUFELENBQUMsQUFoQ0QsQ0FDWSwrQkFBYyxHQStCekI7SUFoQ3FCLDhCQUFzQix5QkFnQzNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vycm9yc30gZnJvbSBcIi4vRXJyb3JzXCI7XHJcbmltcG9ydCB7RmFjdG9yeSBhcyBGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0Jhc2VSZXBvc2l0b3J5fSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbk1lbW9yeVJlcG9zaXRvcnk8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxULCBUS2V5PlxyXG4gICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiB7IFtpZDogc3RyaW5nXTogSVBlcnNpc3RhYmxlIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFuYWdlZFR5cGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpIHtcclxuXHJcbiAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBGYWN0b3J5LmNyZWF0ZU9iamVjdHNGcm9tU3RhdGUodGhpcy5zdG9yYWdlW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gPFQ+dG9SZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFcnJvcnMudGhyb3coRXJyb3JzLkl0ZW1Ob3RGb3VuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNhdmVJbXBsZW1lbnRhdGlvbihpdGVtOiBUKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGtleSA9IGl0ZW0uZ2V0S2V5KCkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IGl0ZW0uZ2V0U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGVsZXRlSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpOiB2b2lkIHtcclxuICAgICAgICB2YXIga2V5ID0gaWQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2Vba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG4vLyB9Il19