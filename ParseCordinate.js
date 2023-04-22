"use strict";
//unknown is like an any type but a safe one
function ParseCordinates(arg1, arg2) {
    let coordinates = {
        x: 0,
        y: 0
    };
    if (typeof arg1 === 'object') {
        coordinates = Object.assign({}, arg1);
    }
    else {
        coordinates = {
            x: arg1,
            y: arg2
        };
    }
    return coordinates;
}
console.log(ParseCordinates(10, 20));
console.log(ParseCordinates({ x: 101, y: 49 }));
