//optionals 
//optional params
function PrintIngredients(quantity:string, ingredients:string, desc?:string):string{
    return `${quantity} of ${ingredients}. ${desc ? `${desc}`: "" }`;
}

console.log(PrintIngredients("1 cup","flour"));
console.log(PrintIngredients("1 cup","flour", "Add water and roll"));


//optional field
interface User{
    name:string,
    info?:{
        email?:string
    }
}

//this is the hard way of going about this
function GetEmail(user:User):string{
    if(user.info){
        return user.info!.email!;
    }

    return "";
}

function GetEmailEasy(user:User):string{
    return user?.info?.email ?? "";
}

//optional callbacks
function AddWithCallback(x:number, y:number, callback?:()=>void ){
    console.log([x,y]);
    callback?.();
}