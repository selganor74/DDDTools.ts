namespace DDDTools.Utils {

    export class SimpleIdentityMap {

        private idToObjectMap: { [id: string]: any }

        constructor() {
            this.idToObjectMap = {};
        }

        public isTracked(id: string): boolean {
            if (this.idToObjectMap[id]) {
                return true;
            }
            return false;
        }

        public getById(id: string): any {
            if (this.isTracked(id)) {
                return this.idToObjectMap[id];
            }
            return null;
        }

        public add(id: string, object: any): any {
            this.idToObjectMap[id] = object;
        }

        /**
         * Returns all the ids in the map
         */
        public getIds(): string[] {
            var toReturn: string[] = [];
            for (var element in this.idToObjectMap) {
                toReturn.push(element);
            }
            return toReturn;
        }

        public deleteById(id: string) {
            delete this.idToObjectMap[id];
        }
    }
}