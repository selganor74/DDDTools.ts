/**
 * Identifies a query to be executed against a Datastore
 */
export interface IQuery<T> {
    execute(): T[];
}