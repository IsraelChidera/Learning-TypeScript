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
// mapped type 
interface DogInfo{
    name: string;  
    age: number;
} 

//this is a mapped type
type OptionsFlags<Type> = {
    [Property in keyof Type] : boolean;
}
type DogInfoOptions = OptionsFlags<DogInfo>;

//this is also a mapped type
type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]? : (newValue:Type[Property])=>void;
}
type DogInfoListeners = Listeners<DogInfo>;


function listenToObjects<T>(obj:T, listeners:Listeners<T>): void{
    throw "Needs to be implemented";
}

const lg:DogInfo = {
    name: "LG",
    age: 4
}

//calling the listenToObjects
listenToObjects(lg, {
    onNameChange: (v:string) => {},
    onAgeChange: (v:number) => {},
});
