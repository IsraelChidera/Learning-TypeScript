interface Cat{
    name: string,
    breed: string
}

type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string):ReadonlyCat{
    return {
        name,
        breed
    }
}

const usul = makeCat("Usul", "tabby");

//another way of make immutables is through tuple, a readonly tuple
function makeCordinates (x:number,y:number,z:number):readonly [number, number, number] {
    return [x,y,z]
}

const c1 = makeCordinates(10,20,30);




