//Learning types in TypeScript
//1. String
let username:string = "Israel";

//2. Boolean
let hasLoggedIn:boolean = true;

//3. Number
let number:number = 10;

//4. Regex
let myRegEx:RegExp = /foo/;

//5. Array
//two ways. either the defined way or the generic way
const names:string[] = username.split("");
const values:Array<number> = [1,2,3];

//6. Interface
interface Car {
    Model : string,
    Color : string
}

const myCar:Car = {
    Model : "Mercedes",
    Color: "Black"
}

//7. Object
const Person :{
    firstName: string;
    lastName: string;
} = {
    firstName : "Israel",
    lastName: "Chidera"
}

//8. Records
const ids: Record<number, string> = {
    10: "a",
    20: "b"
} 
ids[30] = "c";

// If statements
if(ids[30] === "d" ){
    //console.log("hmm");    
}else{
    //console.log("ddd");    
}

// Loops
for(let i:number=0; i<10; i++){
    //console.log(i);    
}

// Methods on array
const numberss:Array<number> = [1,2,3,4];
const numbers: number[] = [1,2,3,4];
numbers.forEach((e) => console.log(e));
numbers.map((e)=> {console.log(e+1)});