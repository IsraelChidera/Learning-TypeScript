"use strict";
// Readonly in Ts classes
class Doggy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Static in Ts classes
class DogList {
    constructor() {
        this.doggies = [];
    }
    // public addDog(dog:Doggy){
    //    this.doggies.push(dog);
    // }
    static addDog(dog) {
        DogList.instance.doggies.push(dog);
    }
    getDogs() {
        return this.doggies;
    }
}
DogList.instance = new DogList();
//accessing the static field
//won't be able to instantiate
DogList.instance;
//const dl = new DogList();
//const lgg = {name:"Gooki", age:5};
const gd = new Doggy("fray", 2);
//DogList.addDog(lgg);
DogList.addDog(gd);
console.log(DogList.instance.getDogs());
