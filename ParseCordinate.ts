//at compile time, this is seen as an object
interface Cordinate{
    x:number;
    y:number;
} 

//functions overloading
function ParseCordinates(obj:Cordinate):Cordinate;
function ParseCordinates(x:number, y:number):Cordinate;

//unknown is like an any type but a safe one
function ParseCordinates(arg1:unknown, arg2?:unknown):Cordinate{
    let coordinates : Cordinate = {
        x: 0,
        y: 0
    }

    if(typeof arg1 === 'object'){
        coordinates = {
            ...(arg1 as Cordinate)
        }
    }
    else{
        coordinates = {
            x:(arg1 as number),
            y:(arg2 as number)
        }
    }

    return coordinates;
}

console.log(ParseCordinates(10,20));
console.log(ParseCordinates({x:101, y:49}));
