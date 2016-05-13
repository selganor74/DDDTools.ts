var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "../Entity/BaseEntity"], function (require, exports, BaseEntity_1) {
    "use strict";
    var BaseAggregateRoot = (function (_super) {
        __extends(BaseAggregateRoot, _super);
        function BaseAggregateRoot() {
            _super.apply(this, arguments);
            this.__revisionId = 0;
        }
        BaseAggregateRoot.prototype.getRevisionId = function () {
            return this.__revisionId;
        };
        BaseAggregateRoot.prototype.incrementRevisionId = function () {
            this.__revisionId++;
        };
        BaseAggregateRoot.prototype.perfectlyMatch = function (other) {
            if (!other) {
                return false;
            }
            var thisOne = this.getState();
            var theOther = other.getState();
            var thisOneAsString = JSON.stringify(thisOne);
            var theOtherAsString = JSON.stringify(theOther);
            return thisOneAsString === theOtherAsString;
        };
        return BaseAggregateRoot;
    }(BaseEntity_1.BaseEntity));
    exports.BaseAggregateRoot = BaseAggregateRoot;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFnZ3JlZ2F0ZVJvb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFZQTtRQUlZLHFDQUFtQjtRQUovQjtZQUlZLDhCQUFtQjtZQUduQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQTRCckMsQ0FBQztRQTFCVSx5Q0FBYSxHQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFFTSwrQ0FBbUIsR0FBMUI7WUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUtNLDBDQUFjLEdBQXJCLFVBQXNCLEtBQWlDO1lBRW5ELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBR2hDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELE1BQU0sQ0FBQyxlQUFlLEtBQUssZ0JBQWdCLENBQUM7UUFDaEQsQ0FBQztRQUNMLHdCQUFDO0lBQUQsQ0FBQyxBQW5DRCxDQUlZLHVCQUFVLEdBK0JyQjtJQW5DcUIseUJBQWlCLG9CQW1DdEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUtleVZhbHVlT2JqZWN0fSBmcm9tIFwiLi4vRW50aXR5L0lLZXlWYWx1ZU9iamVjdFwiO1xyXG5pbXBvcnQge0Jhc2VFbnRpdHl9IGZyb20gXCIuLi9FbnRpdHkvQmFzZUVudGl0eVwiO1xyXG5pbXBvcnQge0lBZ2dyZWdhdGVSb290fSBmcm9tIFwiLi9JQWdncmVnYXRlUm9vdFwiO1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudHMgdGhlIEFnZ3JlZ2F0ZSBQYXR0ZXJuIGJ5IGRlZmluaW5nIGludGVyZmFjZXMgYW5kIGJhc2UgYmVoYXZpb3IgZm9yIGFuIEFnZ3JlZ2F0ZVJvb3QuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuQWdncmVnYXRlIHtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGJlaGF2aW9yIG9mIGFuIEFnZ3JlZ2F0ZVJvb3QsIHdoaWNoIGlzIGJhc2ljYWxseSBhbiBlbnRpdHkuLi5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQWdncmVnYXRlUm9vdDxcclxuICAgIFQgZXh0ZW5kcyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PixcclxuICAgIFRLZXkgZXh0ZW5kcyBJS2V5VmFsdWVPYmplY3Q8VEtleT5cclxuICAgID5cclxuICAgIGV4dGVuZHMgQmFzZUVudGl0eTxULCBUS2V5PlxyXG4gICAgaW1wbGVtZW50cyBJQWdncmVnYXRlUm9vdDxULCBUS2V5PlxyXG57XHJcbiAgICBwcml2YXRlIF9fcmV2aXNpb25JZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZ2V0UmV2aXNpb25JZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9fcmV2aXNpb25JZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVtZW50UmV2aXNpb25JZCgpIHtcclxuICAgICAgICB0aGlzLl9fcmV2aXNpb25JZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGFyZXMgYW4gYWdncmVnYXRlIHdpdGggYW5vdGhlci4gUmV0dXJucyB0cnVlIGlmIGFnZ3JlZ2F0ZSdzIGRhdGEgYXJlIGV4YWN0bHkgZXF1YWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwZXJmZWN0bHlNYXRjaChvdGhlcjogQmFzZUFnZ3JlZ2F0ZVJvb3Q8VCwgVEtleT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKCFvdGhlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdGhpc09uZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgICB2YXIgdGhlT3RoZXIgPSBvdGhlci5nZXRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBkbyB0aGUgY29tcGFyaXNvbiBqdXN0IGxpa2UgdmFsdWUgb2JqZWN0cy4uLiBuYWl2ZSBidXQgZnVuY3Rpb25hbCBhdCB0aGlzIHRpbWUuXHJcbiAgICAgICAgdmFyIHRoaXNPbmVBc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXNPbmUpO1xyXG4gICAgICAgIHZhciB0aGVPdGhlckFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhlT3RoZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc09uZUFzU3RyaW5nID09PSB0aGVPdGhlckFzU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbi8vIH0iXX0=