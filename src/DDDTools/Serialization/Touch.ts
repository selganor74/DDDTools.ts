import {SimpleGuid} from "../Utils/SimpleGuid";
import {ITypeTracking} from "../CommonInterfaces/ITypeTracking";

// namespace DDDTools.Serialization {


export class Touch {
    /**
     * adds an __objectInstanceId property to an object
     */
    public static touch(object: any): void {
        if (typeof object === "object") {
            var newId = SimpleGuid.generate();
            object.__objectInstanceId = newId;
        }
    }

    /**
     * removes the __objectInstanceId property from an object
     */
    public static untouch(object: any): void {
        if (object.__objectInstanceId) {
            delete object.__objectInstanceId;
        }
    }

    /**
     * checks for the presence of an __objectInstanceId property
     */
    public static hasBeenTouched(object: any): boolean {
        var casted = <ITypeTracking>object;
        if (casted.__objectInstanceId) {
            return true;
        }
        return false;
    }

}

// }