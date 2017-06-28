/// <reference path="../../../build/browser/ddd-tools.d.ts" />

declare var bigObject2: any;

namespace CdC.Tests.Serialization {

    import Serializer = DDDTools.Serialization.Serializer;
    import Deserializer = DDDTools.Serialization.Deserializer;

    import SerializableDate = DDDTools.Serialization.SerializableDate;
    import SerializableNull = DDDTools.Serialization.SerializableNull;
    import SerializableRegExp = DDDTools.Serialization.SerializableRegExp;
    import Assets = Test.Assets;

    //#region theories de noantri
    // Simple dataprovider took from http://blog.jphpsf.com/2012/08/30/drying-up-your-javascript-jasmine-tests
    // Maybe some time we should move to https://www.npmjs.com/package/jasmine-theories
    function using(name, values, func) {
        for (var i = 0, count = values.length; i < count; i++) {
            if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
                values[i] = [values[i]];
            }
            func.apply(this, values[i]);
            // (<any>jasmine).currentEnv_.currentSpec.description += ' (with "' + name + '" using ' + values[i].join(', ') + ')';
        }
    }
    //#endregion theories de noantri

    describe("Serialization - Performance", () => {

        var localObject = bigObject2;

        using("big objects", [{ obj: Test.Assets.bigObject1, iterations: 100 }, { obj: localObject, iterations: 10 }], (objectDef: {obj: any, iterations: number}) => {
            it("Measure time and size overhead in serialization.", () => {

                let bigObject = objectDef.obj;
                let numOfIterations = objectDef.iterations;

                let jsonString = JSON.stringify(bigObject, null, 0);

                let serializedString = Serializer.serialize(bigObject);

                let jsonStringSize = jsonString.length;
                let serializedStringSize = serializedString.length;

                let sizeOverhead = serializedStringSize - jsonStringSize;
                let sizeOverheadPercent = Math.round((sizeOverhead / jsonStringSize) * 100.);

                let avgTimeToDeserialize: number = 0;
                let avgTimeToSerialize: number = 0;
                let avgRoundtripTime: number = 0;

                let avgJsonSerializeTime: number = 0;
                let avgJsonDeserializeTime: number = 0;
                let avgJsonRoundtripTime: number = 0;

                for (let idx = 1; idx <= numOfIterations; idx++) {

                    let now = performance.now();
                    serializedString = Serializer.serialize(bigObject);
                    let done = performance.now();

                    let timeToSerialize = Math.round((done - now) * 100.) / 100.;

                    now = performance.now();
                    let deserializedObject = Deserializer.deserialize(serializedString);
                    done = performance.now();

                    let timeToDeserialize = Math.round((done - now) * 100.) / 100.;

                    now = performance.now();
                    serializedString = JSON.stringify(bigObject, null, 0);
                    done = performance.now();

                    let jsonSerializeTime = done - now;

                    now = performance.now();
                    deserializedObject = JSON.parse(serializedString);
                    done = performance.now();

                    let jsonDeserializeTime = done - now;

                    let deserializationToSerializationRatioPercent = Math.round((timeToDeserialize / timeToSerialize) * 100.);
                    let deserializationToSerializationRatio = Math.round((timeToDeserialize / timeToSerialize) * 100.) / 100.;

                    avgJsonSerializeTime += (jsonSerializeTime - avgJsonSerializeTime) / idx;
                    avgJsonDeserializeTime += (jsonDeserializeTime - avgJsonDeserializeTime) / idx;

                    avgTimeToSerialize += (timeToSerialize - avgTimeToSerialize) / idx;
                    avgTimeToDeserialize += (timeToDeserialize - avgTimeToDeserialize) / idx;
                }

                avgJsonRoundtripTime = avgJsonSerializeTime + avgJsonDeserializeTime;
                avgRoundtripTime = avgTimeToSerialize + avgTimeToDeserialize;

                let avgDeserializationToSerializationRatioPercent = Math.round((avgTimeToDeserialize / avgTimeToSerialize) * 100);
                let avgDeserializationToSerializationRatio = Math.round((avgTimeToDeserialize / avgTimeToSerialize) * 100) / 100.;

                let avgJsonDeserializationToSerializationRatio = Math.round((avgJsonDeserializeTime / avgJsonSerializeTime) * 100.) / 100.;

                console.log("bigObject stringify size: " + jsonStringSize);
                console.log("serialized string size: " + serializedStringSize);
                console.log("size Overhead: " + sizeOverhead);
                console.log("size Overhead Percent: " + sizeOverheadPercent + " %");

                console.log("Average Time to serialize: " + (Math.round(avgTimeToSerialize * 100.) / 100.) + " ms");
                console.log("Average Time to deserialize: " + (Math.round(avgTimeToDeserialize * 100.) / 100.) + " ms");
                console.log("Average Time to roundtrip: " + (Math.round(avgRoundtripTime * 100.) / 100.) + " ms");
                console.log("Average Deserialization to Serialization Percent: " + avgDeserializationToSerializationRatioPercent + " %");
                console.log("Average Serialization to Deserialization Ratio: 1:" + avgDeserializationToSerializationRatio);

                console.log("Average pure JSON.stringify time: " + (Math.round(avgJsonSerializeTime * 100.) / 100.) + " ms");
                console.log("Average pure JSON.parse time: " + (Math.round(avgJsonDeserializeTime * 100.) / 100.) + " ms");
                console.log("Average pure JSON.parse/JSON.stringify roundtrip time: " + (Math.round(avgJsonRoundtripTime * 100.) / 100.) + " ms");
                console.log("Average pure JSON parse/stringify Ratio: 1:" + avgJsonDeserializationToSerializationRatio);

                console.log("Serialization overhead over pure JSON.stringify percent: " + Math.round(avgTimeToSerialize / avgJsonSerializeTime * 100) + " %");
                console.log("Deserialization overhead over pure JSON.parse percent: " + Math.round(avgTimeToDeserialize / avgJsonDeserializeTime * 100) + " %");
                console.log("Roundtrip overhead over pure JOSN.stringify/JSON.parse percent: " + Math.round(avgRoundtripTime / avgJsonRoundtripTime * 100) + " %");

                console.log("NOTE: average calculated over " + numOfIterations + " Serialization/Deserialization cycles");

                expect(true).toBeTruthy();
            });
        });
    });

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

        it("Two serializations of the same object must exactly match", () => {
            pending("This test is no longer valid if using GUIDS as __objectReferenceId");

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

        it("Serialization + Deserialization must recreate the very same starting object, excluding undefined values", () => {
            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                aNullValue: null,
                aDate: new Date(),
                aRegexp: /abc/i,
                anUndefinedValue: undefined
            }

            var step1 = Serializer.serialize(anObject);
            // console.log("step1: " + step1);
            var step2 = Deserializer.deserialize(step1);

            delete anObject.anUndefinedValue;
            expect(anObject).toEqual(step2);
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

            var anArrayDefinedExternally = [0, 1, 2, 3];

            var anObject = {
                property1: "A Property",
                property2: "Another Property",
                anArray: ["1", "3", { property1: "Echo" }],
                anArrayContainingAParticularInstance: [instanceOfAnObject],
                anArrayContainingTheSameParticularInstance: [instanceOfAnObject],
                anArrayInstance: anArrayDefinedExternally,
                anotherArrayInstance: anArrayDefinedExternally,
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
            expect((<any>deserialized).instance1 === (<any>deserialized).instance2).toBeTruthy("serializeToObject + deserializeFromObject do not preserve object structure and instances.");
            expect((<any>deserialized).anArrayContainingAParticularInstance[0] === (<any>deserialized).anArrayContainingTheSameParticularInstance[0]).toBeTruthy("serializeToObject + deserializeFromObject do not preserve object structure and instances in arrays.");
            expect((<any>deserialized).anArrayInstance === (<any>deserialized).anotherArrayInstance).toBeTruthy("serializeToObject + deserializeFromObject do not preserve arrays instances.");

        });
    });
}