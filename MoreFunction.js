"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adder = exports.MutateArray = exports.arrayMutate = exports.printToFile = void 0;
// function parameters
function printToFile(text, callback) {
    console.log(text);
    callback();
}
exports.printToFile = printToFile;
// functions as parameters
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
console.log(arrayMutate([1, 2, 3], (v) => v * 10));
function MutateArray(numbers, mutate) {
    return numbers.map(mutate);
}
exports.MutateArray = MutateArray;
function Adder(number) {
    return (value) => number + value;
}
exports.Adder = Adder;
var initialAdd = Adder(2);
console.log(initialAdd(55));
