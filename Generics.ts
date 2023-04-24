function simpleState<T>(initial:T):[() => T, (v:T) => void]{
    let val:T = initial;

    return [
        () => val,
        (v: T)=>{
            val = v;
        }
    ]
}

const [strGetter, strSetter] = simpleState(10);
console.log(strGetter());
strSetter(62);
console.log(strGetter());

//overriding inferred generic types
const [str2Getter, str2Setter] = simpleState<string | null>(null);
console.log(str2Getter());
str2Setter("str");
console.log(str2Getter());

//ranker example
interface Rank<RankItem>{
    item: RankItem;
    rank: number;
}



//A very basic generics
// a generic function
function CreatePair<T,S>(v1:S, v2:T): [S,T]{
    return [v1,v2];
}


console.log(CreatePair<string, number>(5, "Hello"));


// a generalized basic generic class
class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString()); // myNumber: 10