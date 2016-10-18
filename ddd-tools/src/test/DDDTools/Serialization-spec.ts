/// <reference path="../../../build/browser/ddd-tools.d.ts" />

namespace CdC.Tests.Serialization {
 
    import Serializer = DDDTools.Serialization.Serializer;
    import Deserializer = DDDTools.Serialization.Deserializer;

    import SerializableDate = DDDTools.Serialization.SerializableDate;
    import SerializableNull = DDDTools.Serialization.SerializableNull;
    import SerializableRegExp = DDDTools.Serialization.SerializableRegExp;
    describe("Serialization", () => {

        it("should be able to serialize/deserialize every type of object", () => {
            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                aDate: new Date(),
                aRegExp: new RegExp("^123"),
                aNullValue: null,
                anUndefinedValue: undefined
            }

            var serialized = Serializer.serialize(anObject);
            var deserialized = Deserializer.deserialize(serialized);

            expect(anObject.property1).toEqual(deserialized.property1);
            expect(anObject.property2).toEqual(deserialized.property2);
            for (var e in anObject.anArray) {
                expect(anObject.anArray[e]).toEqual(deserialized.anArray[e]);
            }
            expect(deserialized.aDate instanceof Date).toBeTruthy("aDate is not a date");
            expect(anObject.aDate).toEqual(deserialized.aDate, "aDate is not the same aDate it was before serialization");
            expect(deserialized.aRegExp instanceof RegExp).toBeTruthy("aRegExp is not an instance of RegExp");
            expect(anObject.aRegExp).toEqual(deserialized.aRegExp, "aRegExp is not the same aRegExp it was before serialization");
            expect(deserialized.aNullValue).toBeNull("aNullValue is not null");
            expect(deserialized.anUndefinedValue).toBeUndefined("anUndefinedValue is not undefined");
        });

        it("Two serializations of the same object must be exactly match", () => {
            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                aNullValue: null,
                aDate: new Date(),
                aRegexp: /abc/i,
                anUndefinedValue: undefined
            }

            var serialized1 = Serializer.serialize(anObject);
            var serialized2 = Serializer.serialize(anObject);

            expect(serialized1).toEqual(serialized2);
        });

        it("Serialization + Deserialization must recreate the very same starting object", () => {
            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                aNullValue: null,
                aDate: new Date(),
                aRegexp: /abc/i,
                anUndefinedValue: undefined
            }

            var serialized1 = Serializer.serialize(anObject);
            var step1 = Serializer.serialize(anObject);
            // console.log("step1: " + step1);
            var step2 = Deserializer.deserialize(step1);
            // console.log("step2: " + step2.aRegexp.toString() );
            var serialized2 = Serializer.serialize(step2);

            expect(serialized1).toEqual(serialized2);
        });

        it("serializeToObject must correctly manage Dates and Null and RegExp", () => {

            var instanceOfAnObject = {
                a: 1,
                b: "Ciao"
            }

            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                aNullValue: null,
                aDate: new Date(),
                aRegExp: /abc/i,
                anUndefinedValue: undefined,
                instance1: instanceOfAnObject,
                instance2: instanceOfAnObject
            }

            var serialized = Serializer.serializeToObject(anObject);

            expect(serialized === anObject).toBeFalsy("serializeToObject must not return the original object!");
            expect(serialized.aDate.__typeName).toEqual("SerializableDate", "serializeToObject must Return Serializable version of Date");
            expect(serialized.aRegExp.__typeName).toEqual("SerializableRegExp", "serializeToObject must Return Serializable version of RegExp");
            expect(serialized.aNullValue.__typeName).toEqual("SerializableNull", "serializeToObject must Return Serializable version of Null");
            expect(typeof serialized.aRegExp.__objectInstanceId).toEqual("string", "__objectInstanceId must be set to a string value");
            expect(serialized.instance1.__objectInstanceId).toEqual(serialized.instance2.__objectInstanceId, "instance1 and instance2 must be bound to the same original instance");
        });

        it("deserializeFromObject must correctly manage Dates and Null and RegExp", () => {

            var instanceOfAnObject = {
                a: 1,
                b: "Ciao"
            }

            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                aNullValue: null,
                aDate: new Date(),
                aRegExp: /abc/i,
                // anUndefinedValue: undefined,
                instance1: instanceOfAnObject,
                instance2: instanceOfAnObject
            }

            var serialized = Serializer.serializeToObject(anObject);
            var deserialized = Deserializer.deserializeFromObject(serialized);

            expect(deserialized).toEqual(anObject, "serializeToObject + deserializeFromObject must return the original object!");
        });
    });
}