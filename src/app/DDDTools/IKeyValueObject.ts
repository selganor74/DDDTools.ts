/// <reference path="IValueObject.ts" />

namespace DDDTools {
    export interface IKeyValueObject<T> extends IValueObject<T> {
        toString(): string;
    }
}