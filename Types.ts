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
//here the interface is defining a field
interface Car {
    Model : string;
    Color : string;
}

//here the interface is defining a method
interface CarFn{
    topSpeed(speed:number):number;
    printDetails(name:string):void;
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


// Type aliases
//Below are types for fields
type CarName = string;
type CarModel = string;

//Below is a type for object-like
type CarType = {
    name: CarName,
    model: CarModel
}

const carName: CarName = "Lexus";
const carType: CarType = {
    name: "LExus",
    model: "LXE300"
}

console.log(carType.name);

//Interfaces are similar to type aliases, except they 
//only apply to object types.

interface Rectangle {    
    width: number,
    length:number
}

const areaOfRectangle: Rectangle = {
    width: 0,
    length: 0    
}
 
//Extending an interface means you are creating a new interface 
//with the same properties as the original, plus something new.
interface ColouredRectangle extends Rectangle {
    color: string
}

const coloredRect: ColouredRectangle = {
    color: "",
    width: 0,
    length: 0
} 

//a class
//with a field, constructor and a getter and a setter function
class Animal{
    private name: string;

    public constructor(name:string){
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }

    public setName(value: string){
        this.name = value;
    }
}

const animal =  new Animal("Elephant");
console.log(animal.getName());
console.log(animal.setName("Joe"));
console.log(animal.getName());
//A class implements an interface
//and extends another class

// Generics
