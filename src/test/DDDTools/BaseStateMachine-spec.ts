/// <reference path="../../../typings/browser.d.ts"/>

// import {BaseEntity} from "../../DDDTools/Entity/BaseEntity";
// import {Guid} from "../../DDDTools/ValueObjects/Guid";
// import {Factory as PersistableObjectFactory, Upgrader} from "../../DDDTools/PersistableObject/Factory";

namespace CdC.Tests.BaseStateMachine {

    import BaseStateMachine = DDDTools.StateMachine.BaseStateMachine;
    import StateMachineEvent = DDDTools.StateMachine.StateMachineEvent;
    import KindsOfEventHandler = DDDTools.StateMachine.KindsOfEventHandler;
    import HandlerResult = DDDTools.StateMachine.HandlerResult;
    import PromiseHandler = DDDTools.Promises.PromiseHandler;

    import IDomainEvent = DDDTools.DomainEvents.IDomainEvent;

    type States = "State_A" | "State_B" | "State_C";
    type Events = "From_A_to_B" | "From_B_to_C";
    type StateMachineDef = {[event: string]: {[fromStatus: string]: States}};
    
    var stateMachineDefinition: StateMachineDef = {
        "From_A_to_B": {
            "State_A": "State_B"
        },
        "From_B_to_C": {
            "State_B": "State_C"
        }
    }

    class aStateMachine extends BaseStateMachine<States, Events> {
        __typeName = "aStateMachine";
        __typeVersion = "v1";
    }

    describe("BaseStateMachine", () => {

        var sut: aStateMachine;

        beforeEach(() => {
            sut = new aStateMachine("State_A", stateMachineDefinition);
        });

        it("Must be possible to instantiate the state machine", () => {
            var asm = new aStateMachine("State_A", stateMachineDefinition);
            expect(asm instanceof aStateMachine).toBeTruthy("The created object is not an 'aStateMachine'");
        });

        it("Must be possibile to process event From_A_to_B when in the State_A status", (done) => {
            sut.processEvent("From_A_to_B").then((result) => {
                expect(result.okToChange).toBeTruthy("The change should be allowed!");
                expect(sut.getCurrentStatus()).toEqual("State_B", "The State machine is not in State_B");
                expect(sut.getPreviousStatus()).toEqual("State_A", "The State machine previous status is not State_A");
                done();
            });
        });

        it("Must NOT be possibile to process event From_B_to_C when in the State_A status", (done) => {
            sut.processEvent("From_B_to_C").then((result) => {
                expect(result.okToChange).toBeFalsy("The change should NOT be allowed!");
                //console.log(result.reason);
                done();
            });
        });

        it("Must NOT be possibile to process event From_A_to_B when in the State_A status, if a beforeExit handler says it should not be done", (done) => {
            
            sut.registerHandler((event: IDomainEvent)=>{return PromiseHandler.when(new HandlerResult(false, "No, you can't!"))}, KindsOfEventHandler.beforeExitStatus)
            
            sut.processEvent("From_A_to_B").then((result) => {
                expect(result.okToChange).toBeFalsy("The change should NOT be allowed!");
                //console.log(result.reason);
                done();
            });
        });

        it("Must NOT be possibile to process event From_A_to_B when in the State_A status, if a beforeEnter handler says it should not be done", (done) => {
            
            sut.registerHandler((event: IDomainEvent)=>{return PromiseHandler.when(new HandlerResult(false, "No, you can't!"))}, KindsOfEventHandler.beforeEnterStatus)
            
            sut.processEvent("From_A_to_B").then((result) => {
                expect(result.okToChange).toBeFalsy("The change should NOT be allowed!");
                //console.log(result.reason);
                done();
            });
        });


        it("Must be possibile to process event From_A_to_B when in the State_A status, if a afterExit handler returns okToChange = false", (done) => {
            
            sut.registerHandler((event: IDomainEvent)=>{return PromiseHandler.when(new HandlerResult(false, "No, you can't!"))}, KindsOfEventHandler.afterExitStatus)
            
            sut.processEvent("From_A_to_B").then((result) => {
                expect(result.okToChange).toBeTruthy("The change should be allowed anyhow!");
                expect(sut.getCurrentStatus()).toBe("State_B");
                //console.log(result.reason);
                done();
            });
        });

        it("Must be possibile to process event From_A_to_B when in the State_A status, if a afterEnter handler returns okToChange = false", (done) => {
            
            sut.registerHandler((event: IDomainEvent)=>{return PromiseHandler.when(new HandlerResult(false, "No, you can't!"))}, KindsOfEventHandler.afterEnterStatus)
            
            sut.processEvent("From_A_to_B").then((result) => {
                expect(result.okToChange).toBeTruthy("The change should be allowed anyhow!");
                expect(sut.getCurrentStatus()).toBe("State_B");
                //console.log(result.reason);
                done();
            });
        });

        it("The order in which handler are called must be correct!", (done) => {
            var counter = 1;

            sut.registerHandler((event: IDomainEvent)=>{
                expect(counter).toBe(1, "beforeExitHandler must be the first called");
                counter++;
                return PromiseHandler.when(new HandlerResult(true, ""))
            }, KindsOfEventHandler.beforeExitStatus);

            sut.registerHandler((event: IDomainEvent)=>{
                expect(counter).toBe(2, "beforeEnterHandler must be the second called");
                counter++;
                return PromiseHandler.when(new HandlerResult(true, ""))
            }, KindsOfEventHandler.beforeEnterStatus);

            sut.registerHandler((event: IDomainEvent)=>{
                expect(counter).toBe(3, "afterExitHandler must be the third called");
                counter++;
                return PromiseHandler.when(new HandlerResult(true, ""))
            }, KindsOfEventHandler.afterExitStatus);
            
            sut.registerHandler((event: IDomainEvent)=>{
                expect(counter).toBe(4, "afterEnterHandler must be the fourth called");
                counter++;
                return PromiseHandler.when(new HandlerResult(true, ""))
            }, KindsOfEventHandler.afterEnterStatus);

            sut.registerHandler((event: IDomainEvent)=>{
                expect(counter).toBe(5, "onSuccesfulEventProcessed must be the fifth called");
                counter++;
                return PromiseHandler.when(new HandlerResult(true, ""))
            }, KindsOfEventHandler.onSuccesfulEventProcessed);

            sut.processEvent("From_A_to_B").then((result) => {
                done();
            });

        });
    });

}