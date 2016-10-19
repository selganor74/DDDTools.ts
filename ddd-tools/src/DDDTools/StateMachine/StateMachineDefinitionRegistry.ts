/// <reference path="BaseStateMachine.ts" />

namespace DDDTools.StateMachine {

    export class StateMachineDefinitionRegistry {

        private static stateMachineDefinitionRegistry: { [typeAndVersion: string]: StateMachineDefinition<any, any> } = {};

        private static buildTypeAndVersionString(typeName: string, typeVersion: string) {
            return typeName + "-" + typeVersion;
        }

        public static registerStateMachine<TStatuses, TEvents>(
            stateMachineType: string,
            stateMachineVersion: string,
            stateMachineDefinition: StateMachineDefinition<TStatuses, TEvents>
        ): void {
            var typeNameAndVersion = StateMachineDefinitionRegistry.buildTypeAndVersionString(stateMachineType, stateMachineVersion);
            StateMachineDefinitionRegistry.stateMachineDefinitionRegistry[typeNameAndVersion] = stateMachineDefinition;
        }

        public static getStateMachine<TStatuses, TEvents>(stateMachineType: string, stateMachineVersion: string) {
            var typeNameAndVersion = StateMachineDefinitionRegistry.buildTypeAndVersionString(stateMachineType, stateMachineVersion);
            return StateMachineDefinitionRegistry.stateMachineDefinitionRegistry[typeNameAndVersion];
        }
    }
}