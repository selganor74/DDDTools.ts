import {IPersistable} from "./IPersistable";
import {Errors} from "./Errors";
import {Factory} from "./Factory";
import {Serializer} from "../Serialization/Serializer";
import {Deserializer} from "../Serialization/Deserializer";

// namespace DDDTools.PersistableObject {
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

        for (var element in state) {
            var currentStateElement = state[element];
            this[element] = Factory.createObjectsFromState(currentStateElement);
        }

        // console.log( JSON.stringify( this.getState() ) );
    }
}
// }