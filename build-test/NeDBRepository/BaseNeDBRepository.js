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
            if (error) {
            }
            return toReturn;
        };
        BaseNeDBRepository.prototype.sleepUntil = function (whatToWait) {
            var delay = 10000000;
            if (whatToWait == undefined) {
                for (var i; i = 0; i++) { }
                this.sleepUntil(whatToWait);
            }
        };
        BaseNeDBRepository.prototype.save = function (item) {
            var done;
            var error;
            var toSave = new DbItem(item);
            this.datastore.insert(toSave, function (err, document) {
                error = err;
                done = true;
            });
            this.sleepUntil(done);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU5lREJSZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL05lREJSZXBvc2l0b3J5L0Jhc2VOZURCUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQWNJO1FBT1EsZ0JBQWEsSUFBTztZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0wsYUFBQztJQUFELENBQUMsQUFYTCxJQVdLO0lBRUw7UUFRUSw0QkFDWSxPQUErQjtZQUEvQixZQUFPLEdBQVAsT0FBTyxDQUF3QjtZQUV2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFTSxvQ0FBTyxHQUFkLFVBQWUsRUFBTztZQUNsQixJQUFJLFFBQVcsQ0FBQztZQUNoQixJQUFJLElBQUksQ0FBQztZQUNULElBQUksS0FBSyxDQUFDO1lBRVYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQWlCLEVBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLFVBQVMsR0FBRyxFQUFFLFFBQVE7Z0JBQy9FLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ1osUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRVosQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQztRQUVPLHVDQUFVLEdBQWxCLFVBQW1CLFVBQVU7WUFDekIsSUFBSSxLQUFLLEdBQVcsUUFBUSxDQUFDO1lBQzdCLEVBQUUsQ0FBQSxDQUFFLFVBQVUsSUFBSSxTQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDO1FBRU0saUNBQUksR0FBWCxVQUFZLElBQU87WUFDZixJQUFJLElBQUksQ0FBQztZQUNULElBQUksS0FBSyxDQUFDO1lBRVYsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQVUsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQWtCLE1BQU0sRUFBRSxVQUFTLEdBQUcsRUFBRSxRQUFRO2dCQUNqRSxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNaLElBQUksR0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVaLENBQUM7UUFDTCxDQUFDO1FBRU0sbUNBQU0sR0FBYixVQUFjLEVBQVE7WUFDbEIsSUFBSSxJQUFJLENBQUM7WUFDVCxJQUFJLEtBQUssQ0FBQztZQUVWLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxFQUFFLFVBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZELEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ1osSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDLENBQUEsQ0FBQztZQUFBLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVaLENBQUM7UUFDTCxDQUFDO1FBQ0wseUJBQUM7SUFBRCxDQUFDLEFBckVMLElBcUVLO0lBckVpQiwwQkFBa0IscUJBcUVuQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBOZURCRGF0YVN0b3JlID0gcmVxdWlyZSggXCJuZWRiXCIgKTtcclxuXHJcbmltcG9ydCB7QmFzZUFnZ3JlZ2F0ZVJvb3R9IGZyb20gXCIuLi9ERERUb29scy9BZ2dyZWdhdGUvQmFzZUFnZ3JlZ2F0ZVJvb3RcIjtcclxuaW1wb3J0IHtJS2V5VmFsdWVPYmplY3R9IGZyb20gXCIuLi9ERERUb29scy9FbnRpdHkvSUtleVZhbHVlT2JqZWN0XCI7XHJcbmltcG9ydCB7SVJlcG9zaXRvcnl9IGZyb20gXCIuLi9ERERUb29scy9SZXBvc2l0b3J5L0lSZXBvc2l0b3J5XCI7XHJcblxyXG4vKipcclxuICogUmVwb3NpdG9yeSBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIE5lREIgZGF0YWJhc2UuXHJcbiAqL1xyXG4vLyBuYW1lc3BhY2UgUmVwb3NpdG9yeS5OZURCSW1wbGVtZW50YXRpb24ge1xyXG4gICAgZGVjbGFyZSB2YXIgTmVkYiA6IHR5cGVvZiBOZURCRGF0YVN0b3JlO1xyXG4gICAgXHJcbiAgICBjbGFzcyBEYkl0ZW08XHJcbiAgICAgICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LCBcclxuICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPiB7XHJcbiAgICAgICAgICAgIGtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICBpdGVtOiBUO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3RydWN0b3IoIGl0ZW06IFQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5ID0gaXRlbS5nZXRLZXkoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VOZURCUmVwb3NpdG9yeVxyXG4gICAgICAgIDxcclxuICAgICAgICAgICAgVCBleHRlbmRzIEJhc2VBZ2dyZWdhdGVSb290PFQsIFRLZXk+LFxyXG4gICAgICAgICAgICBUS2V5IGV4dGVuZHMgSUtleVZhbHVlT2JqZWN0PFRLZXk+XHJcbiAgICAgICAgPiBpbXBsZW1lbnRzIElSZXBvc2l0b3J5PFQsIFRLZXk+IHsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJpdmF0ZSBkYXRhc3RvcmU6IE5lREJEYXRhU3RvcmU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgb3B0aW9ucz86IE5lREIuRGF0YVN0b3JlT3B0aW9uc1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXN0b3JlID0gbmV3IE5lZGIob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBnZXRCeUlkKGlkOlRLZXkpOiBUIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b1JldHVybjogVDtcclxuICAgICAgICAgICAgICAgIHZhciBkb25lO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzdG9yZS5maW5kT25lPERiSXRlbTxULFRLZXk+Pih7a2V5OiBpZC50b1N0cmluZygpfSwgZnVuY3Rpb24oZXJyLCBkb2N1bWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvUmV0dXJuID0gZG9jdW1lbnQuaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTsgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBDcmVhdGUgRXhjZXB0aW9uIEhlcmUuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9SZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByaXZhdGUgc2xlZXBVbnRpbCh3aGF0VG9XYWl0KSB7IFxyXG4gICAgICAgICAgICAgICAgdmFyIGRlbGF5OiBudW1iZXIgPSAxMDAwMDAwMDtcclxuICAgICAgICAgICAgICAgIGlmKCB3aGF0VG9XYWl0ID09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk7IGk9MDsgaSsrKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xlZXBVbnRpbCh3aGF0VG9XYWl0KTsgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHB1YmxpYyBzYXZlKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgICAgICAgICAgICAgIHZhciBkb25lO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b1NhdmUgPSBuZXcgRGJJdGVtPFQsIFRLZXk+KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhc3RvcmUuaW5zZXJ0PERiSXRlbTxULCBUS2V5Pj4odG9TYXZlLCBmdW5jdGlvbihlcnIsIGRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xlZXBVbnRpbChkb25lKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gQ3JlYXRlIEV4Y2VwdGlvbiBIZXJlLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwdWJsaWMgZGVsZXRlKGlkOiBUS2V5KTogdm9pZCB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9uZTtcclxuICAgICAgICAgICAgICAgIHZhciBlcnJvcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhc3RvcmUucmVtb3ZlKHtrZXk6IGlkLnRvU3RyaW5nKCl9LCBmdW5jdGlvbihlcnIsIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcclxuICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChkb25lID09PSB1bmRlZmluZWQpIHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBDcmVhdGUgRXhjZXB0aW9uIEhlcmUuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbi8vIH0iXX0=