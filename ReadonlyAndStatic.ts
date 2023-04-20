// Readonly in Ts classes
class Doggy {
    constructor(public readonly name:string, public readonly age:number){}
}

// Static in Ts classes
class DogList {
    private doggies: Doggy[] = [];
    static instance: DogList = new DogList();

    private constructor(){}

    // public addDog(dog:Doggy){
    //    this.doggies.push(dog);
    // }
    static addDog(dog:Doggy){
        DogList.instance.doggies.push(dog);
    }

    getDogs(){
        return this.doggies;
    }
}

//accessing the static field
//won't be able to instantiate
DogList.instance;
//const dl = new DogList();

//const lgg = {name:"Gooki", age:5};
const gd = new Doggy("fray", 2);
//DogList.addDog(lgg);
DogList.addDog(gd);

console.log(DogList.instance.getDogs());


