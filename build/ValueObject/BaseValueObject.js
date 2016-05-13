var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../PersistableObject/BasePersistableObject"], function (require, exports, BasePersistableObject_1) {
    "use strict";
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVZhbHVlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBS0E7UUFDUyxtQ0FBcUI7UUFHN0I7WUFDQyxpQkFBTyxDQUFDO1FBQ1QsQ0FBQztRQUVNLGdDQUFNLEdBQWIsVUFBYyxJQUFPO1lBRXBCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQ0Ysc0JBQUM7SUFBRCxDQUFDLEFBZkQsQ0FDUyw2Q0FBcUIsR0FjN0I7SUFmcUIsdUJBQWUsa0JBZXBDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWx1ZU9iamVjdH0gZnJvbSBcIi4vSVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7QmFzZVBlcnNpc3RhYmxlT2JqZWN0fSBmcm9tIFwiLi4vUGVyc2lzdGFibGVPYmplY3QvQmFzZVBlcnNpc3RhYmxlT2JqZWN0XCI7XHJcblxyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVmFsdWVPYmplY3Qge1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VWYWx1ZU9iamVjdDxUPlxyXG5cdGV4dGVuZHMgQmFzZVBlcnNpc3RhYmxlT2JqZWN0XHJcblx0aW1wbGVtZW50cyBJVmFsdWVPYmplY3Q8VD4ge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZXF1YWxzKGl0ZW06IFQpOiBib29sZWFuIHtcclxuXHRcdC8vIFBlciBvZ25pIHByb3ByaWV0w6AgZGVsbCdJVEVNIHZlcmlmaWNvIGwndWd1YWdsaWFuemEgY29uIGwnaXN0YW56YSBhdHR1YWxlXHJcblx0XHR2YXIgZm9yZWlnbiA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xyXG5cdFx0dmFyIGxvY2FsID0gSlNPTi5zdHJpbmdpZnkodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIGZvcmVpZ24gPT09IGxvY2FsO1xyXG5cdH1cclxufVxyXG4vLyB9Il19