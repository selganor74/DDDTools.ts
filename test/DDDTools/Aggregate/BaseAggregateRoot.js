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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFnZ3JlZ2F0ZVJvb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvREREVG9vbHMvQWdncmVnYXRlL0Jhc2VBZ2dyZWdhdGVSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFlQTtRQUlZLHFDQUFtQjtRQUovQjtZQUlZLDhCQUFtQjtZQUduQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQTRCckMsQ0FBQztRQTFCVSx5Q0FBYSxHQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFFTSwrQ0FBbUIsR0FBMUI7WUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUtNLDBDQUFjLEdBQXJCLFVBQXNCLEtBQWlDO1lBRW5ELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBR2hDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELE1BQU0sQ0FBQyxlQUFlLEtBQUssZ0JBQWdCLENBQUM7UUFDaEQsQ0FBQztRQUNMLHdCQUFDO0lBQUQsQ0FBQyxBQW5DRCxDQUlZLHVCQUFVLEdBK0JyQjtJQW5DcUIseUJBQWlCLG9CQW1DdEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9tYWluRGlzcGF0Y2hlcn0gZnJvbSBcIi4uL0RvbWFpbkV2ZW50cy9Eb21haW5EaXNwYXRjaGVyXCI7XHJcbmltcG9ydCB7SUV2ZW50SGFuZGxlcn0gZnJvbSAgXCIuLi9Eb21haW5FdmVudHMvSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQge0lLZXlWYWx1ZU9iamVjdH0gZnJvbSBcIi4uL0VudGl0eS9JS2V5VmFsdWVPYmplY3RcIjtcclxuaW1wb3J0IHtCYXNlRW50aXR5fSBmcm9tIFwiLi4vRW50aXR5L0Jhc2VFbnRpdHlcIjtcclxuaW1wb3J0IHtJRG9tYWluRXZlbnR9IGZyb20gXCIuLi9Eb21haW5FdmVudHMvSURvbWFpbkV2ZW50XCI7XHJcbmltcG9ydCB7SUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuL0lBZ2dyZWdhdGVSb290XCI7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyB0aGUgQWdncmVnYXRlIFBhdHRlcm4gYnkgZGVmaW5pbmcgaW50ZXJmYWNlcyBhbmQgYmFzZSBiZWhhdmlvciBmb3IgYW4gQWdncmVnYXRlUm9vdC5cclxuICovXHJcbi8vIG5hbWVzcGFjZSBERERUb29scy5BZ2dyZWdhdGUge1xyXG5cclxuLyoqXHJcbiAqIEJhc2UgYmVoYXZpb3Igb2YgYW4gQWdncmVnYXRlUm9vdCwgd2hpY2ggaXMgYmFzaWNhbGx5IGFuIGVudGl0eS4uLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VBZ2dyZWdhdGVSb290PFxyXG4gICAgVCBleHRlbmRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgVEtleSBleHRlbmRzIElLZXlWYWx1ZU9iamVjdDxUS2V5PlxyXG4gICAgPlxyXG4gICAgZXh0ZW5kcyBCYXNlRW50aXR5PFQsIFRLZXk+XHJcbiAgICBpbXBsZW1lbnRzIElBZ2dyZWdhdGVSb290PFQsIFRLZXk+XHJcbntcclxuICAgIHByaXZhdGUgX19yZXZpc2lvbklkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBnZXRSZXZpc2lvbklkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX19yZXZpc2lvbklkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmNyZW1lbnRSZXZpc2lvbklkKCkge1xyXG4gICAgICAgIHRoaXMuX19yZXZpc2lvbklkKys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wYXJlcyBhbiBhZ2dyZWdhdGUgd2l0aCBhbm90aGVyLiBSZXR1cm5zIHRydWUgaWYgYWdncmVnYXRlJ3MgZGF0YSBhcmUgZXhhY3RseSBlcXVhbC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBlcmZlY3RseU1hdGNoKG90aGVyOiBCYXNlQWdncmVnYXRlUm9vdDxULCBUS2V5Pik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoIW90aGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0aGlzT25lID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHZhciB0aGVPdGhlciA9IG90aGVyLmdldFN0YXRlKCk7XHJcblxyXG4gICAgICAgIC8vIGRvIHRoZSBjb21wYXJpc29uIGp1c3QgbGlrZSB2YWx1ZSBvYmplY3RzLi4uIG5haXZlIGJ1dCBmdW5jdGlvbmFsIGF0IHRoaXMgdGltZS5cclxuICAgICAgICB2YXIgdGhpc09uZUFzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGhpc09uZSk7XHJcbiAgICAgICAgdmFyIHRoZU90aGVyQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0aGVPdGhlcik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzT25lQXNTdHJpbmcgPT09IHRoZU90aGVyQXNTdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuLy8gfSJdfQ==