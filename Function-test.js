"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Function_1 = __importStar(require("./Function"));
const MoreFunction_1 = require("./MoreFunction");
console.log((0, Function_1.default)(4, 2));
console.log((0, Function_1.AddString)("John", "Doe"));
console.log((0, Function_1.AddString)("Joel"));
console.log((0, Function_1.Format)("api", "piece"));
console.log((0, Function_1.Format)("api", 5));
(0, Function_1.PrintFormat)("api", 6);
console.log((0, Function_1.FetchData)("www.facebook.vom/api"));
console.log((0, Function_1.Introduce)("Hi", "John", "Ken", "Joe"));
console.log((0, Function_1.GetName)({ firstName: "Israel", lastName: "Chidera" }));
function PrintHelloWorld() {
    console.log("Hello World");
}
console.log((0, MoreFunction_1.printToFile)("Israel", PrintHelloWorld));
