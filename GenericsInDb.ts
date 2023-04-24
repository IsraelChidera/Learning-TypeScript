//interface with a getter and a setter function w/ generics and its key
interface Databases<T, K>{
    get(id:K):T;
    set(id:K, value:T):void;
}

interface Persistables {
    saveToString():string;
    restoreBackToString(storedState: string): void;
}

type DbKeyType = string | number | symbol;

//the class implementing the interface
class InMemoryDatabases<T, K extends DbKeyType> implements Databases<T, K>{
    protected db: Record<K, T> = {} as Record<K,T>;
    get(id: K): T {
        return this.db[id];
    }

    set(id: K, value: T): void {
        this.db[id] = value;
    }    

}



//class extending another generic class w/ key 
class PersistableMemoryDbs<T, K extends DbKeyType> extends InMemoryDatabases<T, K> implements Persistables{
    
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreBackToString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}


//extending classes
const myDbToos = new PersistableMemoryDbs<number, number>();
myDbToos.set(45, 23);
console.log(myDbToos.saveToString());
console.log(myDbToos.get(45));

