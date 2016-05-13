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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUluTWVtb3J5UmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ERERUb29scy9SZXBvc2l0b3J5L0Jhc2VJbk1lbW9yeVJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQVVBO1FBQ1ksMENBQXVCO1FBSy9CLGdDQUFvQixnQkFBd0I7WUFDeEMsaUJBQU8sQ0FBQztZQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtZQUV4QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRVMsc0RBQXFCLEdBQS9CLFVBQWdDLEVBQVE7WUFFcEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLFFBQVEsR0FBRyxpQkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xGLE1BQU0sQ0FBSSxRQUFRLENBQUM7WUFDdkIsQ0FBQztZQUVELGVBQU0sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFUyxtREFBa0IsR0FBNUIsVUFBNkIsSUFBTztZQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUVTLHFEQUFvQixHQUE5QixVQUErQixFQUFRO1lBQ25DLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxDQUFDO1FBQ0wsNkJBQUM7SUFBRCxDQUFDLEFBaENELENBQ1ksK0JBQWMsR0ErQnpCO0lBaENxQiw4QkFBc0IseUJBZ0MzQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvcnN9IGZyb20gXCIuL0Vycm9yc1wiO1xyXG5pbXBvcnQge0ZhY3RvcnkgYXMgUGVyc2lzdGFibGVPYmplY3RGYWN0b3J5fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvRmFjdG9yeVwiO1xyXG5pbXBvcnQge0lQZXJzaXN0YWJsZX0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0lQZXJzaXN0YWJsZVwiO1xyXG5pbXBvcnQge0Jhc2VSZXBvc2l0b3J5fSBmcm9tIFwiLi9CYXNlUmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQge0Jhc2VBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi4vQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290XCI7XHJcbmltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0lSZXBvc2l0b3J5fSBmcm9tIFwiLi4vUmVwb3NpdG9yeS9JUmVwb3NpdG9yeVwiO1xyXG5cclxuLy8gbmFtZXNwYWNlIERERFRvb2xzLlJlcG9zaXRvcnkge1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbk1lbW9yeVJlcG9zaXRvcnk8VCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+PlxyXG4gICAgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeTxULCBUS2V5PlxyXG4gICAgaW1wbGVtZW50cyBJUmVwb3NpdG9yeTxULCBUS2V5PiB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiB7IFtpZDogc3RyaW5nXTogSVBlcnNpc3RhYmxlIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFuYWdlZFR5cGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRCeUlkSW1wbGVtZW50YXRpb24oaWQ6IFRLZXkpIHtcclxuXHJcbiAgICAgICAgdmFyIGtleSA9IGlkLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICAgICAgICB2YXIgdG9SZXR1cm4gPSBQZXJzaXN0YWJsZU9iamVjdEZhY3RvcnkuY3JlYXRlT2JqZWN0c0Zyb21TdGF0ZSh0aGlzLnN0b3JhZ2Vba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiA8VD50b1JldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEVycm9ycy50aHJvdyhFcnJvcnMuSXRlbU5vdEZvdW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2F2ZUltcGxlbWVudGF0aW9uKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICB2YXIga2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gaXRlbS5nZXRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBkZWxldGVJbXBsZW1lbnRhdGlvbihpZDogVEtleSk6IHZvaWQge1xyXG4gICAgICAgIHZhciBrZXkgPSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iXX0=