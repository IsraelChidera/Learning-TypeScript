"use strict";
//optionals 
//optional params
function PrintIngredients(quantity, ingredients, desc) {
    return `${quantity} of ${ingredients}. ${desc ? `${desc}` : ""}`;
}
console.log(PrintIngredients("1 cup", "flour"));
console.log(PrintIngredients("1 cup", "flour", "Add water and roll"));
//this is the hard way of going about this
function GetEmail(user) {
    if (user.info) {
        return user.info.email;
    }
    return "";
}
function GetEmailEasy(user) {
    var _a, _b;
    return (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
}
//optional callbacks
function AddWithCallback(x, y, callback) {
    console.log([x, y]);
    callback === null || callback === void 0 ? void 0 : callback();
}
