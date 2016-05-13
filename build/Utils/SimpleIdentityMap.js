define(["require", "exports"], function (require, exports) {
    "use strict";
    var SimpleIdentityMap = (function () {
        function SimpleIdentityMap() {
            this.idToObjectMap = {};
        }
        SimpleIdentityMap.prototype.isTracked = function (id) {
            if (this.idToObjectMap[id]) {
                return true;
            }
            return false;
        };
        SimpleIdentityMap.prototype.getById = function (id) {
            if (this.isTracked(id)) {
                return this.idToObjectMap[id];
            }
            return null;
        };
        SimpleIdentityMap.prototype.add = function (id, object) {
            this.idToObjectMap[id] = object;
        };
        SimpleIdentityMap.prototype.getIds = function () {
            var toReturn = [];
            for (var element in this.idToObjectMap) {
                toReturn.push(element);
            }
            return toReturn;
        };
        SimpleIdentityMap.prototype.deleteById = function (id) {
            delete this.idToObjectMap[id];
        };
        return SimpleIdentityMap;
    }());
    exports.SimpleIdentityMap = SimpleIdentityMap;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlSWRlbnRpdHlNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvREREVG9vbHMvVXRpbHMvU2ltcGxlSWRlbnRpdHlNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFQTtRQUlJO1lBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUVNLHFDQUFTLEdBQWhCLFVBQWlCLEVBQVU7WUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVNLG1DQUFPLEdBQWQsVUFBZSxFQUFVO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRU0sK0JBQUcsR0FBVixVQUFXLEVBQVUsRUFBRSxNQUFXO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLENBQUM7UUFLTSxrQ0FBTSxHQUFiO1lBQ0ksSUFBSSxRQUFRLEdBQWEsRUFBRSxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFFTSxzQ0FBVSxHQUFqQixVQUFrQixFQUFVO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQUFDLEFBeENELElBd0NDO0lBeENZLHlCQUFpQixvQkF3QzdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUlkZW50aXR5TWFwIHtcclxuXHJcbiAgICBwcml2YXRlIGlkVG9PYmplY3RNYXA6IHsgW2lkOiBzdHJpbmddOiBhbnkgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWRUb09iamVjdE1hcCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1RyYWNrZWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlkVG9PYmplY3RNYXBbaWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcmFja2VkKGlkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChpZDogc3RyaW5nLCBvYmplY3Q6IGFueSk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXSA9IG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYWxsIHRoZSBpZHMgaW4gdGhlIG1hcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0SWRzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICB2YXIgdG9SZXR1cm46IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiB0aGlzLmlkVG9PYmplY3RNYXApIHtcclxuICAgICAgICAgICAgdG9SZXR1cm4ucHVzaChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5pZFRvT2JqZWN0TWFwW2lkXTtcclxuICAgIH1cclxufVxyXG4vLyB9Il19