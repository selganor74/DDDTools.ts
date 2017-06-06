
/// <reference path="./IPersistable.ts" />
/// <reference path="./Errors.ts" />
/// <reference path="./Factory.ts" />
/// <reference path="../Serialization/Serializer.ts" />
/// <reference path="../Serialization/Deserializer.ts" />

// import {IPersistable} from "./IPersistable";
// import {Errors} from "./Errors";
// import {Factory} from "./Factory";
// import {Serializer} from "../Serialization/Serializer";
// import {Deserializer} from "../Serialization/Deserializer";

namespace DDDTools.PersistableObject {

    import Serializer = Serialization.Serializer;
    import Deserializer = Serialization.Deserializer;

    export abstract class BasePersistableObject implements IPersistable {

        public __typeName: string = "";
        public __typeVersion: string = "";

        public getState(): any {
            if (this.__typeName === "") {
                Errors.throw(Errors.TypeNameNotSet);
            }

            if (this.__typeVersion === "") {
                Errors.throw(Errors.TypeVersionNotSet);
            }

            var toReconstitute = Serializer.serialize(this);
            var reconstituted = Deserializer.deserialize(toReconstitute);

            return reconstituted;
        }


        public setState<TState>(state: TState) {

            // console.log(JSON.stringify(state));

            if (typeof state !== "object") {
                Errors.throw(Errors.StateIsNotAnObject, "state deve essere un oggetto");
            }

            for (let element in state) {
                var currentStateElement = state[element];
                (<any>this)[element] = Factory.createObjectsFromState(currentStateElement);
            }

            // console.log( JSON.stringify( this.getState() ) );
        }
    }
}