//interface with a getter and a setter function
interface Database{
    get(id:string):string;
    set(id:string, value:string):void;
}

interface Persistable {
    saveToString():string;
    restoreBackToString(storedState: string): void;
}

//the class implementing the interface
class InMemoryDatabase implements Database{
    protected db: Record<string, string> = {};
    get(id: string): string {
        return this.db[id];
    }

    set(id: string, value: string): void {
        this.db[id] = value;
    }    

}

//class extending another class
class PersistableMemoryDb extends InMemoryDatabase implements Persistable{
    
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreBackToString(storedState: string): void {
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

