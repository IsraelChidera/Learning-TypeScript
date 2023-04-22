"use strict";
//the above have a required property(name) 
//and [key:string]: string | number; which 
//allows any optional field/property
const ceesDog = {
    name: "Temmy",
    breed: "American bull dog",
    age: 2
};
function listenToObjects(obj, listeners) {
    throw "Needs to be implemented";
}
const lg = {
    name: "LG",
    age: 4
};
//calling the listenToObjects
listenToObjects(lg, {
    onNameChange: (v) => { },
    onAgeChange: (v) => { },
});
