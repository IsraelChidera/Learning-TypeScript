// function parameters
export function printToFile(text:string, callback:()=>void): void {
    console.log(text);
    callback();
}

// functions as parameters
export function arrayMutate(numbers:number[], mutate: (v:number) =>number):number[]{
    return numbers.map(mutate);
}
console.log(arrayMutate([1,2,3], (v:number) => v*10 ));

// function as types
//works like interface but unlike interface, uses the equal sign
//restructuring the above example
export type MutateTypeFn = (v:number)=> number;
export function MutateArray(numbers:number[], mutate: MutateTypeFn) : number[]{
    return numbers.map(mutate);
}

// returning functions(closure)
export type AdderFn = (val:number) => number;
export function Adder(number:number): AdderFn{
    return (value:number) => number + value;
}

var initialAdd = Adder(2);
console.log(initialAdd(55));
