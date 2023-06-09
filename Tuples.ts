type ThreeDCoordinate = [x:number,y:number,z:number];

function add3dCordinate (c1:ThreeDCoordinate,c2:ThreeDCoordinate):ThreeDCoordinate{
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3dCordinate([1,2,3], [0,0,0]));

function simpleToStringState(initial:string):[() => string, (v:string) => void]{
    let str:string = initial;

    return [
        () => str,
        (v: string)=>{
            str = v;
        }
    ]
}

const [str1getter, str2setter] = simpleToStringState("Hello");
console.log(str1getter());
str2setter("Goodbye");
console.log(str1getter());

const ourTuple:[xd: number, yd: string] = [2,"3"];
console.log();
