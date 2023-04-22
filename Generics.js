"use strict";
function simpleState(initial) {
    let val = initial;
    return [
        () => val,
        (v) => {
            val = v;
        }
    ];
}
const [strGetter, strSetter] = simpleState(10);
console.log(strGetter());
strSetter(62);
console.log(strGetter());
//overriding inferred generic types
const [str2Getter, str2Setter] = simpleState(null);
console.log(str2Getter());
str2Setter("str");
console.log(str2Getter());
