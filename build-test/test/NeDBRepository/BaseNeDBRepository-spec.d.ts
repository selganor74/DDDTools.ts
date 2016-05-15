/// <reference path="../../../typings/browser.d.ts" />
import { Guid } from "../../DDDTools/ValueObjects/Guid";
import { BaseAggregateRoot } from "../../DDDTools/Aggregate/BaseAggregateRoot";
export declare class TestKey extends Guid {
    constructor();
}
export declare class TestAggregate extends BaseAggregateRoot<TestAggregate, TestKey> {
    constructor();
}
