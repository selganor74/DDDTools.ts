/// <reference path="../ValueObject/BaseValueObject.ts" />
/// <reference path="./IKeyValueObject.ts" />
/// <reference path="../PersistableObject/IPersistable.ts" />

// import {BaseValueObject} from "../ValueObject/BaseValueObject";
// import {IKeyValueObject} from "./IKeyValueObject";
// import {IPersistable} from "../PersistableObject/IPersistable";

namespace DDDTools.Entity {

    import BaseValueObject = ValueObject.BaseValueObject;
    import IPersistable = PersistableObject.IPersistable;

    export abstract class BaseKeyValueObject<T>
        extends BaseValueObject<T>
        implements IKeyValueObject<T>, IPersistable {

        constructor() {
            super();
        }

        /**
         * Derived classes must reimplement this method. 
         */
        public abstract toString(): string;
    }
}