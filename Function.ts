// Functions
// function with two parameter and export statement
function AddNumbers(a:number,b:number):number{
    return a + b;
}
export default AddNumbers;

// function with default parameter
export const AddString = (str1:string, str2:string="Don"):string => `${str1} ${str2}`;

// union types
export const Format = (title:string, param:string | number):string => `${title}..${param}`;

//void function
export const PrintFormat = (title:string, param:string|number):void => 
    console.log(Format(title, param));

// promise function
export const FetchData = (url: string):Promise<string> => {
    return Promise.resolve(`Data from ${url}`);
}

// rest parameters
export const Introduce = (salutation:string, ...names: string[]): string => {
    return `${salutation}, ${names.join(" ")}`
}

// playing around
export const GetName = (user:{firstName:string, lastName:string}):string => {
    return `Name is ${user?.firstName ?? "first"} ${user?.lastName ?? "last"} `;
}