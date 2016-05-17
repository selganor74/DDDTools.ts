var DDDTools;
(function (DDDTools) {
    var Serialization;
    (function (Serialization) {
        class SerializableDate {
            constructor(date) {
                this.__typeName = "Date";
                this.__typeVersion = "v1";
                this.__dateAsString = date.toISOString();
            }
            getDate() {
                return new Date(this.__dateAsString);
            }
        }
        Serialization.SerializableDate = SerializableDate;
    })(Serialization = DDDTools.Serialization || (DDDTools.Serialization = {}));
})(DDDTools || (DDDTools = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphYmxlRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6YWJsZURhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsSUFBVSxRQUFRLENBaUJqQjtBQWpCRCxXQUFVLFFBQVE7SUFBQyxJQUFBLGFBQWEsQ0FpQi9CO0lBakJrQixXQUFBLGFBQWEsRUFBQyxDQUFDO1FBSTlCO1lBS0ksWUFBWSxJQUFVO2dCQUp0QixlQUFVLEdBQVcsTUFBTSxDQUFDO2dCQUM1QixrQkFBYSxHQUFXLElBQUksQ0FBQztnQkFJekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0MsQ0FBQztZQUVELE9BQU87Z0JBQ0gsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQztRQVpZLDhCQUFnQixtQkFZNUIsQ0FBQTtJQUNMLENBQUMsRUFqQmtCLGFBQWEsR0FBYixzQkFBYSxLQUFiLHNCQUFhLFFBaUIvQjtBQUFELENBQUMsRUFqQlMsUUFBUSxLQUFSLFFBQVEsUUFpQmpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0NvbW1vbkludGVyZmFjZXMvSVR5cGVUcmFja2luZy50c1wiIC8+XHJcblxyXG4vLyBpbXBvcnQge0lUeXBlVHJhY2tpbmd9IGZyb20gXCIuLi9Db21tb25JbnRlcmZhY2VzL0lUeXBlVHJhY2tpbmdcIjtcclxuXHJcbm5hbWVzcGFjZSBERERUb29scy5TZXJpYWxpemF0aW9uIHtcclxuXHJcbiAgICBpbXBvcnQgSVR5cGVUcmFja2luZyA9IENvbW1vbkludGVyZmFjZXMuSVR5cGVUcmFja2luZztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VyaWFsaXphYmxlRGF0ZSBpbXBsZW1lbnRzIElUeXBlVHJhY2tpbmcge1xyXG4gICAgICAgIF9fdHlwZU5hbWU6IHN0cmluZyA9IFwiRGF0ZVwiO1xyXG4gICAgICAgIF9fdHlwZVZlcnNpb246IHN0cmluZyA9IFwidjFcIjtcclxuICAgICAgICBfX2RhdGVBc1N0cmluZzogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19kYXRlQXNTdHJpbmcgPSBkYXRlLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXREYXRlKCk6IERhdGUge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5fX2RhdGVBc1N0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19