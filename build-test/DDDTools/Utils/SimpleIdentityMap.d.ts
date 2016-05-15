export declare class SimpleIdentityMap {
    private idToObjectMap;
    constructor();
    isTracked(id: string): boolean;
    getById(id: string): any;
    add(id: string, object: any): any;
    getIds(): string[];
    deleteById(id: string): void;
}
