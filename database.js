"use strict";
//the class implementing the interface
class InMemoryDatabase {
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
//class extending another class
class PersistableMemoryDb extends InMemoryDatabase {
    saveToString() {
        return JSON.stringify(this.db);
    }
    restoreBackToString(storedState) {
        this.db = JSON.parse(storedState);
    }
}
//interface implementing
const myDb = new InMemoryDatabase();
myDb.set("foo", "bar");
console.log(myDb.get("foo"));
//extending classes
const myDbToo = new PersistableMemoryDb();
myDbToo.set("foo", "bar");
console.log(myDbToo.saveToString());
console.log(myDbToo.get("foo"));
