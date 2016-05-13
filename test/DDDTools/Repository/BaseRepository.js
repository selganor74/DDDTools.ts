define(["require", "exports", "./Errors"], function (require, exports, Errors_1) {
    "use strict";
    var BaseRepository = (function () {
        function BaseRepository() {
        }
        BaseRepository.prototype.getById = function (id) {
            try {
                var toReturn = this.getByIdImplementation(id);
                return toReturn;
            }
            catch (e) {
                Errors_1.Errors.throw(Errors_1.Errors.ItemNotFound, e.message);
            }
        };
        BaseRepository.prototype.save = function (item) {
            try {
                var key = item.getKey().toString();
            }
            catch (e) {
                Errors_1.Errors.throw(Errors_1.Errors.KeyNotSet);
            }
            var asItWas = null;
            try {
                asItWas = this.getById(item.getKey());
            }
            catch (e) {
            }
            if (!item.perfectlyMatch(asItWas)) {
                item.incrementRevisionId();
            }
            this.saveImplementation(item);
        };
        BaseRepository.prototype.delete = function (id) {
            this.deleteImplementation(id);
        };
        return BaseRepository;
    }());
    exports.BaseRepository = BaseRepository;
});
//# sourceMappingURL=BaseRepository.js.map