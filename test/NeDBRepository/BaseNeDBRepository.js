define(["require", "exports"], function (require, exports) {
    "use strict";
    var DbItem = (function () {
        function DbItem(item) {
            this.key = item.getKey().toString();
            this.item = item;
        }
        return DbItem;
    }());
    var BaseNeDBRepository = (function () {
        function BaseNeDBRepository(options) {
            this.options = options;
            this.datastore = new Nedb(options);
        }
        BaseNeDBRepository.prototype.getById = function (id) {
            var toReturn;
            var done;
            var error;
            this.datastore.findOne({ key: id.toString() }, function (err, document) {
                error = err;
                toReturn = document.item;
                done = true;
            });
            while (done === undefined) { }
            ;
            if (error) {
            }
            return toReturn;
        };
        BaseNeDBRepository.prototype.save = function (item) {
            var done;
            var error;
            var toSave = new DbItem(item);
            this.datastore.insert(toSave, function (err, document) {
                error = err;
                done = true;
            });
            while (done === undefined) { }
            ;
            if (error) {
            }
        };
        BaseNeDBRepository.prototype.delete = function (id) {
            var done;
            var error;
            this.datastore.remove({ key: id.toString() }, function (err, n) {
                error = err;
                done = true;
            });
            while (done === undefined) { }
            ;
            if (error) {
            }
        };
        return BaseNeDBRepository;
    }());
    exports.BaseNeDBRepository = BaseNeDBRepository;
});
//# sourceMappingURL=BaseNeDBRepository.js.map