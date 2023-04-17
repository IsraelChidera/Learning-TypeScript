import AddNumbers,{AddString, Format, PrintFormat, FetchData, Introduce, GetName} from "./Function";
import {printToFile} from "./MoreFunction";
console.log(AddNumbers(4,2));
console.log(AddString("John", "Doe"));
console.log(AddString("Joel"));
console.log(Format("api","piece"));
console.log(Format("api",5));
PrintFormat("api", 6);
console.log(FetchData("www.facebook.vom/api"));
console.log(Introduce("Hi", "John", "Ken", "Joe"));
console.log(GetName({firstName:"Israel", lastName:"Chidera"}));

function PrintHelloWorld(){
    console.log("Hello World");    
}

console.log(printToFile("Israel", PrintHelloWorld));


