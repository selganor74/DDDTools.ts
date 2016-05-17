var DDDTools;
(function (DDDTools) {
    var Utils;
    (function (Utils) {
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
        Utils.SimpleGuid = SimpleGuid;
    })(Utils = DDDTools.Utils || (DDDTools.Utils = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlR3VpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ERERUb29scy9VdGlscy9TaW1wbGVHdWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLElBQVUsUUFBUSxDQXlCakI7QUF6QkQsV0FBVSxRQUFRO0lBQUMsSUFBQSxLQUFLLENBeUJ2QjtJQXpCa0IsV0FBQSxLQUFLLEVBQUMsQ0FBQztRQUV6QjtZQUFBO1lBc0JBLENBQUM7WUFwQmUsa0JBQU8sR0FBdEIsVUFBdUIsSUFBWTtnQkFDbEMsSUFBSSxVQUFVLEdBQVcsSUFBSSxNQUFNLENBQUMsc0VBQXNFLENBQUMsQ0FBQztnQkFDNUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUVjLGFBQUUsR0FBakI7Z0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO3FCQUM5QyxRQUFRLENBQUMsRUFBRSxDQUFDO3FCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixDQUFDO1lBRWEsbUJBQVEsR0FBdEI7Z0JBQ0MsSUFBSSxhQUFhLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUc7b0JBQ2hILFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDO2dCQUVuRixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUE7WUFDekUsQ0FBQztZQUNGLGlCQUFDO1FBQUQsQ0FBQyxBQXRCRCxJQXNCQztRQXRCWSxnQkFBVSxhQXNCdEIsQ0FBQTtJQUNGLENBQUMsRUF6QmtCLEtBQUssR0FBTCxjQUFLLEtBQUwsY0FBSyxRQXlCdkI7QUFBRCxDQUFDLEVBekJTLFFBQVEsS0FBUixRQUFRLFFBeUJqQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTb21lIHNpbXBsZSBjbGFzc2VzIHVzZWQgaW4gZGlmZmVyZW50IG1vZHVsZXMuXHJcbiAqL1xyXG5uYW1lc3BhY2UgREREVG9vbHMuVXRpbHMge1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU2ltcGxlR3VpZCB7XHJcblx0XHQvLyBIZWxwZXIgZm9yIGd1aWQgZ2VuZXJhdGlvbi5cclxuXHRcdHByaXZhdGUgc3RhdGljIGlzVmFsaWQoZ3VpZDogc3RyaW5nKSB7XHJcblx0XHRcdHZhciBndWlkUmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKFwiXlt7KF0/WzAtOUEtRmEtZl17OH1bLV0/KFswLTlBLUZhLWZdezR9Wy1dPyl7M31bMC05QS1GYS1mXXsxMn1bKX1dPyRcIik7XHJcblx0XHRcdHJldHVybiBndWlkUmVnZXhwLnRlc3QoZ3VpZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJpdmF0ZSBzdGF0aWMgczQoKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG5cdFx0XHRcdC50b1N0cmluZygxNilcclxuXHRcdFx0XHQuc3Vic3RyaW5nKDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcclxuXHRcdFx0dmFyIG5ld1NpbXBsZUd1aWQgPSBcIntcIiArIFNpbXBsZUd1aWQuczQoKSArIFNpbXBsZUd1aWQuczQoKSArIFwiLVwiICsgU2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIi1cIiArXHJcblx0XHRcdFx0U2ltcGxlR3VpZC5zNCgpICsgXCItXCIgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBTaW1wbGVHdWlkLnM0KCkgKyBcIn1cIjtcclxuXHJcblx0XHRcdGlmIChTaW1wbGVHdWlkLmlzVmFsaWQobmV3U2ltcGxlR3VpZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3U2ltcGxlR3VpZDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaG91bGQgTmV2ZXIgSGFwcGVuISBUaGUgZ2VuZXJhdGVkIGd1aWQgaXMgbm90IHZhbGlkIVwiKVxyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==