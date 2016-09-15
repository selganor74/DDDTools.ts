namespace DDDTools.Query {
    /**
     * Identifies a query to be executed against a Datastore
     */
    export interface IQuery<T> {
        setQuery(queryObject: any);
        execute(): T[];
    }
}