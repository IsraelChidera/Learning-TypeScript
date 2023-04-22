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
function fflogerfn(){
    return class ffloggerclass{
        private strs: string = "";

        completeLog(str:string):string{
            return `Start: ${this.strs} ${str}`;
        }
    }
}

const res = fflogerfn();
const log = new res();
console.log(log.completeLog("Foo"));