/// <reference path="../../DDDTools/Serialization/Serializer.ts" />
/// <reference path="../../DDDTools/Serialization/Deserializer.ts" />

// import {Serializer} from "../../DDDTools/Serialization/Serializer";
// import {Deserializer} from "../../DDDTools/Serialization/Deserializer";

import Serializer = DDDTools.Serialization.Serializer;
import Deserializer = DDDTools.Serialization.Deserializer;

describe("Serialization",() => {
    
    it("should be able to serialize/deserialize every type of object",() => {
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1","3",{property1: "Echo"}],
            aDate: new Date(),
            aRegExp: new RegExp("^123")
        }
        
        var serialized = Serializer.serialize(anObject);
        var deserialized = Deserializer.deserialize(serialized);
        
        expect(anObject.property1).toEqual(deserialized.property1);
        expect(anObject.property2).toEqual(deserialized.property2);
        for(var e in anObject.anArray) {
            expect(anObject.anArray[e]).toEqual(deserialized.anArray[e]);
        }
        expect(anObject.aDate).toEqual(deserialized.aDate);
        expect(anObject.aRegExp).toEqual(deserialized.aRegExp);
    });
    
    it("Two serializations of the same object must be exactly match", () => {
        var anObject = {
            property1: "A Property",
            property2: "Another Property",
            anArray: ["1","3",{property1: "Echo"}]
        }

        var serialized1 = Serializer.serialize(anObject);
        var serialized2 = Serializer.serialize(anObject);

        expect(serialized1).toEqual(serialized2);
    });
});