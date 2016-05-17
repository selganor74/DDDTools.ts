"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasePersistableObject_1 = require("../PersistableObject/BasePersistableObject");
var BaseValueObject = (function (_super) {
    __extends(BaseValueObject, _super);
    function BaseValueObject() {
        _super.call(this);
    }
    BaseValueObject.prototype.equals = function (item) {
        var foreign = JSON.stringify(item);
        var local = JSON.stringify(this);
        return foreign === local;
    };
    return BaseValueObject;
}(BasePersistableObject_1.BasePersistableObject));
exports.BaseValueObject = BaseValueObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVZhbHVlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxzQ0FBb0MsNENBQTRDLENBQUMsQ0FBQTtBQUlqRjtJQUNTLG1DQUFxQjtJQUc3QjtRQUNDLGlCQUFPLENBQUM7SUFDVCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLElBQU87UUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFmRCxDQUNTLDZDQUFxQixHQWM3QjtBQWZxQix1QkFBZSxrQkFlcEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVZhbHVlT2JqZWN0fSBmcm9tIFwiLi9JVmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlUGVyc2lzdGFibGVPYmplY3R9IGZyb20gXCIuLi9QZXJzaXN0YWJsZU9iamVjdC9CYXNlUGVyc2lzdGFibGVPYmplY3RcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcblx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRpbXBsZW1lbnRzIElWYWx1ZU9iamVjdDxUPiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gUGVyIG9nbmkgcHJvcHJpZXTDoCBkZWxsJ0lURU0gdmVyaWZpY28gbCd1Z3VhZ2xpYW56YSBjb24gbCdpc3RhbnphIGF0dHVhbGVcclxuXHRcdHZhciBmb3JlaWduID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XHJcblx0XHR2YXIgbG9jYWwgPSBKU09OLnN0cmluZ2lmeSh0aGlzKTtcclxuXHJcblx0XHRyZXR1cm4gZm9yZWlnbiA9PT0gbG9jYWw7XHJcblx0fVxyXG59XHJcbi8vIH0iXX0=