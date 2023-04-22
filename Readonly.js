"use strict";
function makeCat(name, breed) {
    return {
        name,
        breed
    };
}
const usul = makeCat("Usul", "tabby");
//another way of make immutables is through tuple, a readonly tuple
function makeCordinates(x, y, z) {
    return [x, y, z];
}
const c1 = makeCordinates(10, 20, 30);
