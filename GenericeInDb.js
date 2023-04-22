"use strict";
//the class implementing the interface
class InMemoryDatabases {
    constructor() {
        this.db = {};
    }
    get(id) {
        return this.db[id];
    }
    set(id, value) {
        this.db[id] = value;
    }
}
//class extending another generic class w/ key 
class PersistableMemoryDbs extends InMemoryDatabases {
    saveToString() {
        return JSON.stringify(this.db);
    }
    restoreBackToString(storedState) {
        this.db = JSON.parse(storedState);
    }
}
//extending classes
const myDbToos = new PersistableMemoryDbs();
myDbToos.set(45, 23);
console.log(myDbToos.saveToString());
console.log(myDbToos.get(45));
