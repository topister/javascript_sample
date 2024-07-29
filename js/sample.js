// let point = 6;
// if (point >= 10){
//     console.log("High");
// }else if(point > 5 | point < 10){
//     console.log("Medium");
// }else{
//     console.log("Low");
// }

// let num = 1;
// let myname = "Topister";
// while(num <= 10){
//     console.log(num + 1);
//     num++;
// }


// let num = 1;
// while (num < 10){
//     if(num == 3){
//         console.log(num);
//         break;
//     }
//     console.log(num);
//     num++;
// }

// Javascript functions
// function greeting(name){
//     console.log("Hello " + name);
// }

// greeting("Topister");

// function counting(){
//     for(let number = 0; number < 10; number++){
//         if(number == 3){
//             // debugger;
//             console.log(number);
//             return;
//         }
//         console.log(number);
        
//     }
// }

// counting();

// function clickAlert(){
//     alert("Hello");
// }

// sayHello();
// function sayHello(){
//     console.log("Hello friend");
// }


// let myName = "Topister";
// let age = 20;
// console.log(myName + " is " + age + " old");

// let text = `
// My name is Topister
// And I love coding
// So mucchhhhhh!
// `
// console.log(text);

// let age = 50;
// console.log(`Topister is ${age} old!`);

// let { name, age } = person;
// console.log(person)

// do...while loop
// let num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num < 5);

// for loop
// for(let num = 1; num < 10; num++){
//     console.log(num);
// }

// for...of: you can use this to loop through the elements of an arrray
// const myArray = [1, 2, 3, 4, 5, 6];
// for(const num of myArray){
//     console.log(num);
// }


// Various function definitions and calls

// 1. Function declaration statements
// function functionName(){
//     // do something
// }
// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add(5, 6));

// 2. Function literals
// A function literal function(){ }is a definition method that uses. Unlike a function declaration statement, the function name is not defined, so it is often defined by putting it in a variable.
// sumLet's define a function with a function literal and assign it to a variable.

// const sub = function(a, b){
//     return a - b;
// }

// console.log(sub(1, 2));

// Function constructor
// Since functions are objects, they have constructors. You
// can define them as follows, but you rarely define functions using the Function constructor.
// const total = new Function("x, y", "return x + y");
// console.log(total(10, 20));

// Arrow Function Expressions
// Arrow function expressions are new function expressions introduced in ECMAScript 6. They are defined using =>
// instead of the keyword function. Let's define a function using an arrow function expression.
// When defining a function using an arrow function, you must assign it to a variable first

// const sum = (a,b) => {
//     return a + b;
// }

// console.log(sum(10, 5));

// const double = x => {
//     return x * 2;
// }

// console.log(double(2));

//  What is an immediate function?
// After defining a function, you can call it to actually run it.
// An immediate function is a function that can be executed immediately after it is defined.
// (function(a, b){
//     console.log(a + b)
// })(10, 3);

// Function and Block Scope
// Function and Block Scope
// In the previous textbooks , we learned about scope when we studied letand . The scope that is valid within is called block scope, and functions are also block scope. Variables declared within a function cannot be accessed from outside the function

