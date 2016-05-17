var DDDTools;
(function (DDDTools) {
    var Repository;
    (function (Repository) {
        var Events = (function () {
            function Events() {
            }
            Events.__nameSpace = "DDDTools.Repository";
            Events.ItemAddedEvent = Events.__nameSpace + ".ItemAddedEvent";
            Events.ItemUpdatedEvent = Events.__nameSpace + ".ItemUpdatedEvent";
            Events.ItemDeletedEvent = Events.__nameSpace + ".ItemDeletedEvent";
            Events.ItemRetrievedEvent = Events.__nameSpace + ".ItemRetrievedEvent";
            return Events;
        }());
        Repository.Events = Events;
    })(Repository = DDDTools.Repository || (DDDTools.Repository = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RERFRvb2xzL1JlcG9zaXRvcnkvRXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLElBQVUsUUFBUSxDQWFqQjtBQWJELFdBQVUsUUFBUTtJQUFDLElBQUEsVUFBVSxDQWE1QjtJQWJrQixXQUFBLFVBQVUsRUFBQyxDQUFDO1FBSzNCO1lBQUE7WUFNQSxDQUFDO1lBTGtCLGtCQUFXLEdBQUcscUJBQXFCLENBQUM7WUFDckMscUJBQWMsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO1lBQ3hELHVCQUFnQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUM7WUFDNUQsdUJBQWdCLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztZQUM1RCx5QkFBa0IsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO1lBQ2xGLGFBQUM7UUFBRCxDQUFDLEFBTkQsSUFNQztRQU5ZLGlCQUFNLFNBTWxCLENBQUE7SUFFTCxDQUFDLEVBYmtCLFVBQVUsR0FBVixtQkFBVSxLQUFWLG1CQUFVLFFBYTVCO0FBQUQsQ0FBQyxFQWJTLFFBQVEsS0FBUixRQUFRLFFBYWpCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5uYW1lc3BhY2UgREREVG9vbHMuUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHN0YXRpYyBjb250YWluZXIgb2YgZXZlbnQgXCJfX3R5cGVOYW1lXCJzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9fbmFtZVNwYWNlID0gXCJERERUb29scy5SZXBvc2l0b3J5XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtQWRkZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1BZGRlZEV2ZW50XCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBJdGVtVXBkYXRlZEV2ZW50ID0gRXZlbnRzLl9fbmFtZVNwYWNlICsgXCIuSXRlbVVwZGF0ZWRFdmVudFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSXRlbURlbGV0ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1EZWxldGVkRXZlbnRcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEl0ZW1SZXRyaWV2ZWRFdmVudCA9IEV2ZW50cy5fX25hbWVTcGFjZSArIFwiLkl0ZW1SZXRyaWV2ZWRFdmVudFwiO1xyXG4gICAgfVxyXG5cclxufSJdfQ==