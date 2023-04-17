const loading ="loading";


const isLoading = (state:string) => state === loading;

//console.log(isLoading("dog"));

//instead of doing the above, you can use enums
//as seen below

enum loadingState {
    beforeHand = "beforeLoad",
    loading = "loading",
    loaded = "loaded"
}

const isLoadings = (state:loadingState) => state === loadingState.loading;

console.log(isLoadings(loadingState.loading));


//literal types
function rollDice(numOfRolls:1|2|3):number{
    let pip = 0;

    for(let i:number=0; i<=numOfRolls; i++){
        pip += Math.floor(Math.random()*5) + 1;
    }

    return pip;
}

rollDice(3);