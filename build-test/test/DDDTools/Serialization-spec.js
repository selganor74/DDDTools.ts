define(["require", "exports", "../../DDDTools/Serialization/Serializer", "../../DDDTools/Serialization/Deserializer"], function (require, exports, Serializer_1, Deserializer_1) {
    "use strict";
    describe("Serialization", function () {
        it("should be able to serialize/deserialize every type of object", function () {
            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                aDate: new Date(),
                aRegExp: new RegExp("^123")
            };
            var serialized = Serializer_1.Serializer.serialize(anObject);
            var deserialized = Deserializer_1.Deserializer.deserialize(serialized);
            expect(anObject.property1).toEqual(deserialized.property1);
            expect(anObject.property2).toEqual(deserialized.property2);
            for (var e in anObject.anArray) {
                expect(anObject.anArray[e]).toEqual(deserialized.anArray[e]);
            }
            expect(anObject.aDate).toEqual(deserialized.aDate);
            expect(anObject.aRegExp).toEqual(deserialized.aRegExp);
        });
        it("Two serializations of the same object must be exactly match", function () {
            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }]
            };
            var serialized1 = Serializer_1.Serializer.serialize(anObject);
            var serialized2 = Serializer_1.Serializer.serialize(anObject);
            expect(serialized1).toEqual(serialized2);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphdGlvbi1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvREREVG9vbHMvU2VyaWFsaXphdGlvbi1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBR0EsUUFBUSxDQUFDLGVBQWUsRUFBQztRQUVyQixFQUFFLENBQUMsOERBQThELEVBQUM7WUFDOUQsSUFBSSxRQUFRLEdBQUc7Z0JBQ1gsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLFNBQVMsRUFBRSxrQkFBa0I7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0JBQ3RDLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDakIsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUM5QixDQUFBO1lBRUQsSUFBSSxVQUFVLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsSUFBSSxZQUFZLEdBQUcsMkJBQVksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFeEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1lBQzlELElBQUksUUFBUSxHQUFHO2dCQUNYLFNBQVMsRUFBRSxZQUFZO2dCQUN2QixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxDQUFDO2FBQ3pDLENBQUE7WUFFRCxJQUFJLFdBQVcsR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxJQUFJLFdBQVcsR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVqRCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NlcmlhbGl6ZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9TZXJpYWxpemF0aW9uL1NlcmlhbGl6ZXJcIjtcclxuaW1wb3J0IHtEZXNlcmlhbGl6ZXJ9IGZyb20gXCIuLi8uLi9ERERUb29scy9TZXJpYWxpemF0aW9uL0Rlc2VyaWFsaXplclwiO1xyXG5cclxuZGVzY3JpYmUoXCJTZXJpYWxpemF0aW9uXCIsKCkgPT4ge1xyXG4gICAgXHJcbiAgICBpdChcInNob3VsZCBiZSBhYmxlIHRvIHNlcmlhbGl6ZS9kZXNlcmlhbGl6ZSBldmVyeSB0eXBlIG9mIG9iamVjdFwiLCgpID0+IHtcclxuICAgICAgICB2YXIgYW5PYmplY3QgPSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5MTogXCJBIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnR5MjogXCJBbm90aGVyIFByb3BlcnR5XCIsXHJcbiAgICAgICAgICAgIGFuQXJyYXk6IFtcIjFcIixcIjNcIix7cHJvcGVydHkxOiBcIkVjaG9cIn1dLFxyXG4gICAgICAgICAgICBhRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgYVJlZ0V4cDogbmV3IFJlZ0V4cChcIl4xMjNcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBTZXJpYWxpemVyLnNlcmlhbGl6ZShhbk9iamVjdCk7XHJcbiAgICAgICAgdmFyIGRlc2VyaWFsaXplZCA9IERlc2VyaWFsaXplci5kZXNlcmlhbGl6ZShzZXJpYWxpemVkKTtcclxuICAgICAgICBcclxuICAgICAgICBleHBlY3QoYW5PYmplY3QucHJvcGVydHkxKS50b0VxdWFsKGRlc2VyaWFsaXplZC5wcm9wZXJ0eTEpO1xyXG4gICAgICAgIGV4cGVjdChhbk9iamVjdC5wcm9wZXJ0eTIpLnRvRXF1YWwoZGVzZXJpYWxpemVkLnByb3BlcnR5Mik7XHJcbiAgICAgICAgZm9yKHZhciBlIGluIGFuT2JqZWN0LmFuQXJyYXkpIHtcclxuICAgICAgICAgICAgZXhwZWN0KGFuT2JqZWN0LmFuQXJyYXlbZV0pLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFuQXJyYXlbZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBlY3QoYW5PYmplY3QuYURhdGUpLnRvRXF1YWwoZGVzZXJpYWxpemVkLmFEYXRlKTtcclxuICAgICAgICBleHBlY3QoYW5PYmplY3QuYVJlZ0V4cCkudG9FcXVhbChkZXNlcmlhbGl6ZWQuYVJlZ0V4cCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoXCJUd28gc2VyaWFsaXphdGlvbnMgb2YgdGhlIHNhbWUgb2JqZWN0IG11c3QgYmUgZXhhY3RseSBtYXRjaFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGFuT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTE6IFwiQSBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTI6IFwiQW5vdGhlciBQcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBhbkFycmF5OiBbXCIxXCIsXCIzXCIse3Byb3BlcnR5MTogXCJFY2hvXCJ9XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQxID0gU2VyaWFsaXplci5zZXJpYWxpemUoYW5PYmplY3QpO1xyXG4gICAgICAgIHZhciBzZXJpYWxpemVkMiA9IFNlcmlhbGl6ZXIuc2VyaWFsaXplKGFuT2JqZWN0KTtcclxuXHJcbiAgICAgICAgZXhwZWN0KHNlcmlhbGl6ZWQxKS50b0VxdWFsKHNlcmlhbGl6ZWQyKTtcclxuICAgIH0pO1xyXG59KTsiXX0=