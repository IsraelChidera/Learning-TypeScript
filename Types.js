"use strict";
//Learning types in TypeScript
//1. String
let username = "Israel";
//2. Boolean
let hasLoggedIn = true;
//3. Number
let number = 10;
//4. Regex
let myRegEx = /foo/;
//5. Array
//two ways. either the defined way or the generic way
const names = username.split("");
const values = [1, 2, 3];
const myCar = {
    Model: "Mercedes",
    Color: "Black"
};
//7. Object
const Person = {
    firstName: "Israel",
    lastName: "Chidera"
};
//8. Records
const ids = {
    10: "a",
    20: "b"
};
ids[30] = "c";
// If statements
if (ids[30] === "d") {
    //console.log("hmm");    
}
else {
    //console.log("ddd");    
}
// Loops
for (let i = 0; i < 10; i++) {
    //console.log(i);    
}
// Methods on array
const numberss = [1, 2, 3, 4];
const numbers = [1, 2, 3, 4];
numbers.forEach((e) => console.log(e));
numbers.map((e) => { console.log(e + 1); });
