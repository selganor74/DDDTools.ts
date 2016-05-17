"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasePersistableObject_1 = require("../PersistableObject/BasePersistableObject");
var Serializer_1 = require("../Serialization/Serializer");
var BaseValueObject = (function (_super) {
    __extends(BaseValueObject, _super);
    function BaseValueObject() {
        _super.call(this);
    }
    BaseValueObject.prototype.equals = function (item) {
        var foreign = Serializer_1.Serializer.serialize(item);
        var local = Serializer_1.Serializer.serialize(this);
        return foreign === local;
    };
    return BaseValueObject;
}(BasePersistableObject_1.BasePersistableObject));
exports.BaseValueObject = BaseValueObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVZhbHVlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0RERFRvb2xzL1ZhbHVlT2JqZWN0L0Jhc2VWYWx1ZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxzQ0FBb0MsNENBQTRDLENBQUMsQ0FBQTtBQUNqRiwyQkFBeUIsNkJBQTZCLENBQUMsQ0FBQTtBQUl2RDtJQUNTLG1DQUFxQjtJQUc3QjtRQUNDLGlCQUFPLENBQUM7SUFDVCxDQUFDO0lBRU0sZ0NBQU0sR0FBYixVQUFjLElBQU87UUFFcEIsSUFBSSxPQUFPLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FBQyxBQWZELENBQ1MsNkNBQXFCLEdBYzdCO0FBZnFCLHVCQUFlLGtCQWVwQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsdWVPYmplY3R9IGZyb20gXCIuL0lWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VQZXJzaXN0YWJsZU9iamVjdH0gZnJvbSBcIi4uL1BlcnNpc3RhYmxlT2JqZWN0L0Jhc2VQZXJzaXN0YWJsZU9iamVjdFwiO1xyXG5pbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5WYWx1ZU9iamVjdCB7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVZhbHVlT2JqZWN0PFQ+XHJcblx0ZXh0ZW5kcyBCYXNlUGVyc2lzdGFibGVPYmplY3RcclxuXHRpbXBsZW1lbnRzIElWYWx1ZU9iamVjdDxUPiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoaXRlbTogVCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gUGVyIG9nbmkgcHJvcHJpZXTDoCBkZWxsJ0lURU0gOnZlcmlmaWNvIGwndWd1YWdsaWFuemEgY29uIGwnaXN0YW56YSBhdHR1YWxlXHJcblx0XHR2YXIgZm9yZWlnbiA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGl0ZW0pO1xyXG5cdFx0dmFyIGxvY2FsID0gU2VyaWFsaXplci5zZXJpYWxpemUodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIGZvcmVpZ24gPT09IGxvY2FsO1xyXG5cdH1cclxufVxyXG4vLyB9Il19