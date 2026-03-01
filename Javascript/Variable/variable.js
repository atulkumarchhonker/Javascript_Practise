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

// Output:undefined  

//🔹 Basic Level Questions

// What is a variable in JavaScript?

// How do you declare a variable in JavaScript?

// What is the difference between var, let, and const?

// Can we redeclare a variable declared with let?

// Can we reassign a variable declared with const?

// What is variable initialization?

// What happens if you use a variable without declaring it?


// 🔹 Scope-Based Questions (Very Important)

// What is scope in JavaScript?

// What is the difference between global scope and local scope?

// What is block scope?

// Is var block-scoped? Why?

// Why is let and const preferred over var?

//🔹 Hoisting Questions (Most Asked 🔥)

// What is hoisting?

// Are var, let, and const hoisted?

// What is Temporal Dead Zone (TDZ)?


//🔹 Advanced Level Questions

// What is the difference between declaration and definition?

// Can const object properties be changed? Why?

// What happens when you declare a variable without var, let, or const?

// How does JavaScript handle variable shadowing?

// What is the difference between primitive and reference type variables?
// Const accountId = 145678,
// let accountEmail = "atul@yopmail.com"
// var accountPassword = "Jewar"

// console.log("accountEmail")s

accountEmail = "atul@yopmail.com"
accountPassword = "atul@123"
accountCity = "Noida"

console.table([accountEmail, accountCity, accountPassword])
