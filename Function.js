"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetName = exports.Introduce = exports.FetchData = exports.PrintFormat = exports.Format = exports.AddString = void 0;
// Functions
// function with two parameter and export statement
function AddNumbers(a, b) {
    return a + b;
}
exports.default = AddNumbers;
// function with default parameter
const AddString = (str1, str2 = "Don") => `${str1} ${str2}`;
exports.AddString = AddString;
// union types
const Format = (title, param) => `${title}..${param}`;
exports.Format = Format;
//void function
const PrintFormat = (title, param) => console.log((0, exports.Format)(title, param));
exports.PrintFormat = PrintFormat;
// promise function
const FetchData = (url) => {
    return Promise.resolve(`Data from ${url}`);
};
exports.FetchData = FetchData;
// rest parameters
const Introduce = (salutation, ...names) => {
    return `${salutation}, ${names.join(" ")}`;
};
exports.Introduce = Introduce;
// playing around
const GetName = (user) => {
    var _a, _b;
    return `Name is ${(_a = user === null || user === void 0 ? void 0 : user.firstName) !== null && _a !== void 0 ? _a : "first"} ${(_b = user === null || user === void 0 ? void 0 : user.lastName) !== null && _b !== void 0 ? _b : "last"} `;
};
exports.GetName = GetName;
