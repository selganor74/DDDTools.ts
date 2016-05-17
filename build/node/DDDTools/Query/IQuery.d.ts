declare namespace DDDTools.Query {
    interface IQuery<T> {
        execute(): T[];
    }
}
