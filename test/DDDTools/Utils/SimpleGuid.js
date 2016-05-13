define(["require", "exports"], function (require, exports) {
    "use strict";
    var SimpleGuid = (function () {
        function SimpleGuid() {
        }
        SimpleGuid.isValid = function (guid) {
            var guidRegexp = new RegExp("^[{(]?[0-9A-Fa-f]{8}[-]?([0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$");
            return guidRegexp.test(guid);
        };
        SimpleGuid.s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        SimpleGuid.generate = function () {
            var newSimpleGuid = "{" + SimpleGuid.s4() + SimpleGuid.s4() + "-" + SimpleGuid.s4() + "-" + SimpleGuid.s4() + "-" +
                SimpleGuid.s4() + "-" + SimpleGuid.s4() + SimpleGuid.s4() + SimpleGuid.s4() + "}";
            if (SimpleGuid.isValid(newSimpleGuid)) {
                return newSimpleGuid;
            }
            throw new Error("Should Never Happen! The generated guid is not valid!");
        };
        return SimpleGuid;
    }());
    exports.SimpleGuid = SimpleGuid;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlR3VpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBS0E7UUFBQTtRQXNCQSxDQUFDO1FBcEJlLGtCQUFPLEdBQXRCLFVBQXVCLElBQVk7WUFDbEMsSUFBSSxVQUFVLEdBQVcsSUFBSSxNQUFNLENBQUMsc0VBQXNFLENBQUMsQ0FBQztZQUM1RyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBRWMsYUFBRSxHQUFqQjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDOUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQUVhLG1CQUFRLEdBQXRCO1lBQ0MsSUFBSSxhQUFhLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUc7Z0JBQ2hILFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBRW5GLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3RCLENBQUM7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUE7UUFDekUsQ0FBQztRQUNGLGlCQUFDO0lBQUQsQ0FBQyxBQXRCRCxJQXNCQztJQXRCWSxrQkFBVSxhQXNCdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTb21lIHNpbXBsZSBjbGFzc2VzIHVzZWQgaW4gZGlmZmVyZW50IG1vZHVsZXMuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUd1aWQge1xyXG5cdC8vIEhlbHBlciBmb3IgZ3VpZCBnZW5lcmF0aW9uLlxyXG5cdHByaXZhdGUgc3RhdGljIGlzVmFsaWQoZ3VpZDogc3RyaW5nKSB7XHJcblx0XHR2YXIgZ3VpZFJlZ2V4cDogUmVnRXhwID0gbmV3IFJlZ0V4cChcIl5beyhdP1swLTlBLUZhLWZdezh9Wy1dPyhbMC05QS1GYS1mXXs0fVstXT8pezN9WzAtOUEtRmEtZl17MTJ9Wyl9XT8kXCIpO1xyXG5cdFx0cmV0dXJuIGd1aWRSZWdleHAudGVzdChndWlkKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGljIHM0KCkge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcblx0XHRcdC50b1N0cmluZygxNilcclxuXHRcdFx0LnN1YnN0cmluZygxKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcclxuXHRcdHZhciBuZXdTaW1wbGVHdWlkID0gXCJ7XCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgK1xyXG5cdFx0XHRTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwifVwiO1xyXG5cclxuXHRcdGlmIChTaW1wbGVHdWlkLmlzVmFsaWQobmV3U2ltcGxlR3VpZCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ld1NpbXBsZUd1aWQ7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaG91bGQgTmV2ZXIgSGFwcGVuISBUaGUgZ2VuZXJhdGVkIGd1aWQgaXMgbm90IHZhbGlkIVwiKVxyXG5cdH1cclxufVxyXG4vLyB9Il19