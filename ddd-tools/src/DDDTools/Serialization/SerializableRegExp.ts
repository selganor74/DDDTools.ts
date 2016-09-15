/// <reference path="../CommonInterfaces/ITypeTracking.ts" />

// import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

namespace DDDTools.Serialization {

    import ITypeTracking = CommonInterfaces.ITypeTracking;

    export class SerializableRegExp implements ITypeTracking {
        __typeName: string = "SerializableRegExp";
        __typeVersion: string = "v1";
        __regularExpression: string;
        __flags: string;

        constructor(regExp: RegExp) {
            this.splitRegExpAndFlags( regExp );
        }

        private splitRegExpAndFlags( regExp: RegExp ) {
            
            var reallyUnlikelyString = "°òàù°°òàù°°òàù°";
            
            // To get a correct regexp we must take away the leading "/" and the flags!
            var conditionedString = regExp.toString();
            
            // replaces the escaped slashes with something very improbable
            conditionedString = conditionedString.replace("\\/", reallyUnlikelyString);
            var parts = conditionedString.split("/");
            
            // parts[0] must always be the empty string;
            if (parts[0] !== "") throw new Error("splitRegExpAndFlags: This should never happen!");
            
            // We have to restore what 
            parts[1] = parts[1].replace(reallyUnlikelyString, "\\/");

            this.__regularExpression = parts[1];
            this.__flags = parts[2] || "";

            // console.log ("splitRegExp: " + regExp.toString() + " ... " + this.__regularExpression + " ... " + this.__flags );            
        }
        
        
        public static getRegExpFromRegExpAndFlags(regularExpression: string, flags: string) {
            var toReturn: RegExp;
            
            // console.log("getRegExp: " + this.__regularExpression + " ... " + this.__flags);
            
            if (flags) {
                toReturn = new RegExp(regularExpression, flags); 
            } else {
                toReturn = new RegExp(regularExpression);
            }
            return toReturn;
            
        }
        
        /**
         * Get back a Regular Expression from the SerializableRegExp instance
         */
        public getRegExp(): RegExp {
            return SerializableRegExp.getRegExpFromRegExpAndFlags(this.__regularExpression, this.__flags);
        }
    }
}