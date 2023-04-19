type MyFlexibleDogInfo = {
    name:string;
    [key:string]: string | number;
}

//the above have a required property(name) 
//and [key:string]: string | number; which 
//allows any optional field/property

const ceesDog:MyFlexibleDogInfo = {
    name: "Temmy",
    breed: "American bull dog",
    age: 2
}

//the above is one way of doing it.
//another way is using the optionsflag(mapped types)
//as seen in the documentation
//mapped type 
interface DogInfo{
    name: string;
    age: number;
} 

type OptionsFlags<Type> = {
    [Property in keyof Type] : boolean;
}

type DogInfoOptions = OptionsFlags<DogInfo>;


