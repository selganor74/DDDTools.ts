/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="../Entity/IKeyValueObject.ts" />
/// <reference path="../Entity/BaseEntity.ts" />
/// <reference path="./IAggregateRoot.ts" />
/// <reference path="../Entity/IEntity.ts" />
/// <reference path="../Serialization/Serializer.ts" />

// import {IKeyValueObject} from "../Entity/IKeyValueObject";
// import {BaseEntity} from "../Entity/BaseEntity";
// import {IAggregateRoot} from "./IAggregateRoot";
// import {IEntity} from "../Entity/IEntity";

/**
 * Implements the Aggregate Pattern by defining interfaces and base behavior for an AggregateRoot.
 */
namespace DDDTools.Aggregate {

    import IKeyValueObject = Entity.IKeyValueObject;
    import BaseEntity = Entity.BaseEntity;
    import IEntity = Entity.IEntity;
    import Serializer = Serialization.Serializer;

    /**
     * Base behavior of an AggregateRoot, which is basically an entity...
     */
    export abstract class BaseAggregateRoot<
        T extends IAggregateRoot<T, TKey>,
        TKey extends IKeyValueObject<TKey>
        >
        extends BaseEntity<T, TKey>
        implements IAggregateRoot<T, TKey>, IEntity<T, TKey>
    {
        private __revisionId: number = 0;

        public getRevisionId(): number {
            return this.__revisionId;
        }

        public incrementRevisionId(concurrentObject?: IAggregateRoot<T, TKey>) {
            this.__revisionId++;
        }

        /**
         * Compares an aggregate with another. Returns true if aggregate's data are exactly equal.
         */
        public perfectlyMatch(other: BaseAggregateRoot<T, TKey>): boolean {

            if (!other) {
                return false;
            }

            var thisOne = this.getState();
            var theOther = other.getState();

            // do the comparison just like value objects... naive but functional at this time.
            var comparison = _.isEqual(thisOne, theOther);
            
            return comparison;
        }
    }
}