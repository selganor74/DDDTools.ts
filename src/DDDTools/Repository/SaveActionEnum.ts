namespace DDDTools.Repository {

    /**
     * SaveAction will be passed to repositories saveImplementation so that client can take decisions on what to do when adding or replacing an item if needed.
     */
    export enum SaveActionEnum {
        Add,
        Update
    };

}