//function creating a function
function loggerFn(){
    return (str:string) => {
        console.log(str);        
    }
}

const logger = loggerFn();
logger("Israel Chidera");

//function creating a class
//also know as the function factory in TypeScript
//function ffloger 