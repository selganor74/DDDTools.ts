/// <reference path="StatefulObject/IStateful.ts" />
/// <reference path="StatefulObject/StatefulObjectErrors.ts" />
/// <reference path="StatefulObject/StatefulObjectFactory.ts" />

namespace DDDTools {

    import IStateful = StatefulObject.IStateful;
    import Errors = StatefulObject.StatefulObjectErrors;
    import StatefulObjectFactory = StatefulObject.StatefulObjectFactory;
    export abstract class BaseStatefulObject implements IStateful {

        public __typeName: string = "";
        public __typeVersion: string = "";

        public getTypeName(): string {
            return this.__typeName;
        };


        public getState(): any {
            if (this.__typeName === "") {
                Errors.Throw(Errors.TypeNameNotSet, "La property __typeName non è impostata!");
            }

            if (this.__typeVersion === "") {
                Errors.Throw(Errors.TypeVersionNotSet, "La property __typeVersion non è impostata!");
            }

            var toReconstitute = JSON.stringify(this);
            var reconstituted = JSON.parse(toReconstitute);

            return reconstituted;
        }

        public setState(state: any) {

            // console.log(JSON.stringify(state));

            if (typeof state !== "object") {
                Errors.Throw(Errors.StateIsNotAnObject, "state deve essere un oggetto");
            }

            for (var element in state) {
                var currentStateElement = state[element];
                this[element] = StatefulObjectFactory.createObjectsFromState(currentStateElement);
            }

            // console.log( JSON.stringify( this.getState() ) );
        }
    }
}