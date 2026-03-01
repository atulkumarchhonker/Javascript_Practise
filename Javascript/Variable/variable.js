// 1.what is variable 
// ans- In JavaScript, a variable is a container used to store data values.

// Why Do We Need Variables?
// ans-Store user input,Store numbers, text, arrays, objects,Perform calculations

// 2️- How to Declare Variables in JavaScript
// ans-JavaScript has 3 ways to declare variables
// 1st var (Old way – Not Recommended)
// var age = 21;

// 2nd-let (Modern – Recommended)
// let city = "Delhi";

// 3rd-const (Constant – Cannot be changed)
// const country = "India";

// 4-| Feature             | var   | let   | const |
// | ------------------- | ----- | ----- | ----- |
// | Can reassign value? | ✅ Yes | ✅ Yes | ❌ No  |
// | Block scope?        | ❌ No  | ✅ Yes | ✅ Yes |
// | Hoisted?            | ✅ Yes | ✅ Yes | ✅ Yes |
// | Recommended?        | ❌ No  | ✅ Yes | ✅ Yes |

// 5-Types of Values Variables Can Store
// JavaScript variables can store different data types:
// let name = "Atul";        // String
// let age = 22;             // Number
// let isStudent = true;     // Boolean
// let marks = [90, 80];     // Array
// let person = {name:"Atul"}; // Object

// 5-Scope of Variables
// Global Scope
// Accessible everywhere.
// let name = "Atul";
// function greet() {
//  console.log(name);
// }

// 6-Block Scope
// Accessible only inside { }
// {
//  let age = 22;
// }
// console.log(age); // Error
// let and const are block-scoped.
// var is function-scoped.

// 7-Hoisting in JavaScript
// Hoisting means JavaScript moves variable declarations to the top.
// console.log(x);
// var x = 10;
