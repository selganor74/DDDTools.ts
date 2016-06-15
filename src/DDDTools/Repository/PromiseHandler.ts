/// <reference path="../../../typings/browser.d.ts" />

namespace DDDTools.Repository {

    export var PromiseHandler: ng.IQService;
    export import IPromise = ng.IPromise;
    export import Deferred = ng.IDeferred;
 
    /**
     * This code forces DDDTools to use $q promises if angular is defined at the moment ddd-tools is loaded
     */
    if (typeof angular !== "undefined") {
        var $injector = angular.injector(['ng']);
        var $q = $injector.get("$q");
        
        PromiseHandler = $q;
    } else {
        if (Q) {
            // TODO This cast is effectively a risk! How to manage it correctly ? 
            PromiseHandler = <ng.IQService>(<any>Q);
        } 
    }

    // We didn't find a suitable PromiseHandler
    if (PromiseHandler == undefined) throw new Error("A Promise Handler must be defined, supported are angular's $q or kris kowal's Q. This means that Q or angular MUST be loaded before ddd-tools.js");

}