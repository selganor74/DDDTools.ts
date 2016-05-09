/// <reference path="IStateful.ts" />
/// <reference path="StatefulObjectErrors.ts" />
/// <reference path="StatefulObjectFactory.ts" />
/// <reference path="../Serialization/Deserializer.ts" />
/// <reference path="../Serialization/Serializer.ts" />

namespace DDDTools.StatefulObject {

    import IStateful = StatefulObject.IStateful;
    import Errors = StatefulObject.StatefulObjectErrors;
    import StatefulObjectFactory = StatefulObject.StatefulObjectFactory;
    import Serializer = Serialization.Serializer;
    import Deserializer = Serialization.Deserializer;
    
    export abstract class BaseStatefulObject implements IStateful {

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


        public setState(state: any) {

            // console.log(JSON.stringify(state));

            if (typeof state !== "object") {
                Errors.throw(Errors.StateIsNotAnObject, "state deve essere un oggetto");
            }

            for (var element in state) {
                var currentStateElement = state[element];
                this[element] = StatefulObjectFactory.createObjectsFromState(currentStateElement);
            }

            // console.log( JSON.stringify( this.getState() ) );
        }
    }
}