// Length [As it says to find the length]

// function getLength(str){
//     console.log("Original string is : ", str);
//     console.log("Length of string : ", str.length);
// }
// getLength("hwllo World");

// findIndexOf

// function findIndexOf(str, target){
//     console.log("Original string is : ", str);
//     console.log("Index : ", str.indexOf(target));
// }
// findIndexOf("Hello world", "world");

// lastIndexOf [same as last one but this finds from last]

// function findIndexOf(str, target){
//     console.log("Original string : ", str);
//     console.log("Last Index : ", str.lastIndexOf(target));
// }
// findIndexOf("Hello world world world", "world");\


// getSlice

// function getSlice(str, start, end){
//     console.log("Original string : ", str);
//     console.log("After slice : ", str.slice(start, end));
// }
// getSlice("Hwlloop World", 0, 5);
// shortest way to do it
// const value = "helloworld";
// let ans = value.slice(2, 5)
// let and = value.substr(2, 5)
// console.log(ans);
// console.log(and);


// function curIt(str, startIndex, endIndex){
//     let newStr = "";
//     for (let i=0; i< str.length; i++){
//         if(i >= startIndex && i < endIndex){
//             newStr = newStr = str[i];
//         }
//     }
//     return newStr;
// }

// const value = "helloworld"

// let ans2 = value.slice(2,5)
// console.log(ans2);
// console.log(cutIt(value, 2, 5));

// replaceString

// const str = "hello world";
// console.log(str.replace("world", "javascript"));

// Split [here whatever is inside the value.split that will divide stuff]

// const value = "hello world"
// const words = value.split(" ");
// console.log(words);

// trim

// const value = " 'he llo world'     "
// console.log(value.trim())

// toUpper and toLower

// const value = "hello WORLD"
// console.log(value.toLowerCase());
// console.log(value.toUpperCase());


// parseInt [cuts off excess to give only numbers]
// console.log(parseInt("42"));
// console.log(parseInt("-42"));
// console.log(parseInt("42px"));
// console.log(parseInt("3.14"));

// // parseFloat [ same as parseInt but this give numbers after decimal too]
// console.log(parseFloat("42"));
// console.log(parseFloat("-42"));
// console.log(parseFloat("42px"));
// console.log(parseFloat("3.14"));

// push, pop , shift, unshift

// const initialArray = [1, 2, 3];
// // initialArray.push();                   // [ 1, 2, 3 ]
// // initialArray.pop();                     // [ 1, 2 ]
// // initialArray.shift();                       // [ 2, 3 ]
// // initialArray.unshift(0);                    // [ 0, 1, 2, 3]
// console.log(initialArray)

//  Concat [to add two Arrays together]

// const initialArray = [1, 2, 3];
// const secondArray = [4, 5, 6];
// console.log(initialArray.concat(secondArray));

// Classes                                                  deek le bhai firse

// class Animal {
//     constructor(name, legCount, speaks){
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     }
//     static myType(){
//         console.log("Animal")
//     }
//     speak(){
//         console.log("hi there " + this.speaks);
//     }
// }

// console.log(Animal.myType())
// let dog = new Animal("dog", 4, "bhow bhow");    // creat object
// let cat = new Animal("cat", 4, "meow meow");
// cat.speak();    // call function on object

// Date 

// const currentDate = new Date();

// console.log(currentDate.getDate());              // current date
// console.log(currentDate.getFullYear());          // current Year

// function calculateSum () {
//     let a = 0;
//     for (let i=0; i<100000000; i++){
//         a = a + i
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum();

// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();

// console.log(afterTimeInMs - beforeTimeInMs)


//const users = '{"name": "bheem", "age":18, "gender: "male}'
// JSON.parse
// JSON.stringify
// const user = {
//     name: "bheem",
//     gender: "male",
// }
// user["name"]
// const finalString = JSON.stringify(user)
// console.log(finalString["name"])
