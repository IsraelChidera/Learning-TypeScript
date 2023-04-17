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

