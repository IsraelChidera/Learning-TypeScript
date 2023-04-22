"use strict";
const loading = "loading";
const isLoading = (state) => state === loading;
//console.log(isLoading("dog"));
//instead of doing the above, you can use enums
//as seen below
var loadingState;
(function (loadingState) {
    loadingState["beforeHand"] = "beforeLoad";
    loadingState["loading"] = "loading";
    loadingState["loaded"] = "loaded";
})(loadingState || (loadingState = {}));
const isLoadings = (state) => state === loadingState.loading;
console.log(isLoadings(loadingState.loading));
//literal types
function rollDice(numOfRolls) {
    let pip = 0;
    for (let i = 0; i <= numOfRolls; i++) {
        pip += Math.floor(Math.random() * 5) + 1;
    }
    return pip;
}
rollDice(3);
