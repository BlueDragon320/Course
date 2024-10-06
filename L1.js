// Variable these values can be changed, it can be declared throughtout the function. 

// var a = 1;
// a = 2;
// console.log(a);

// Constant cannot be changed once its assigned a value, it throws an error if done.

// const a = 1;
// a = 10;     
// console.log(a);

// Let is also a variable which is avaliable only inside the block where it's defined.

// let a = 1;
// a = 6;
// console.log(a);

// Strings

// let firstName = "Bheem";
// let age = "22";
// let isMarried = true;

// console.log("This persons name is " + firstName + " and their age is " + age);

// If Else

// let firstName = "Bheem";
// let age = 22;
// let isMarried = true;

// if (isMarried == true){
//     console.log(firstName + " is married");
// }
// else {
//     console.log(firstName + " isn't married");

// }

// Loops

// let answer = 0;

// for ( let i=0; i<=100; i++){
//     answer = answer + i;
// }
// console.log(answer);

// Arrays

// const personArray = ["Bheem", "Raju", "Kalia"];
// console.log(personArray[0]);

// const ages = [21, 22, 23, 24, 25, 26];
// for (let i=0; i< ages.length; i++) { 
//     if (ages[i] % 2 == 0)
//     console.log(ages[i]); 
// }

// const personArray = ["Bheem", "Raju", "Kalia", "Chutki"];
// const genderArray = ["male", "male", "male", "female"];

// for (let i=0; i<personArray.length; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// Objects 

// const users1 = {
//     firstName: "Bheem",
//     age: "22",
// }
// console.log(users1["age"]);

// const allusers = [{
//     firstName: "Bheem",
//     age: 18,
// },{
//     firstName: "Raju",
//     age: 12,
// },{
//     firstName: "Kalia",
//     age: 22,
// },{
//     firstName: "Chutki",
//     age: 18,
// }]

// for (let i=0 ;i<allusers.length; i++){
//     if (allusers[i]["age"] == "18"){
//         console.log(allusers[i]["firstName"])
//     }
// }

// Function 

// function sum(a, b){
//     const sumValue = a+b;
//     return sumValue;
// }

// const value = sum(6, 3)
// console.log(value);

// Functions

// function calculateArithmetic(a, b, type){
//     if (type=="sum"){
//         const value = sum(a, b);
//         return value;
//     }
//     if (type == "minus"){
//         const value = sub(a, b);
//         return value;
//     }
// }

// function sum(a, b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// const value = calculateArithmetic(1, 2, "minus");
// console.log(value);

// setTimeout

// function greet(){
//     console.log("Hello world");
// }
// setTimeout(greet, 1 * 2000)

// setInterval

// function greet(){
//     console.log("Hello world");
// }
// setInterval(greet, 1 * 1000);

