// console.log(`hello`);
// 
// console.log(`Shubhanjali`);
// 
// console.log(`I like pizza!`);

// window.alert(`This is an alert!`);
// window.alert(`i like pizza`);

// this is an comment 

/*
This 
is a
 multiline
 comment */

// document.getElementById("myH1").textContent = `Hello World!`;

// document.getElementById("myP").textContent = `This paragraph is printed by javascript`;

// -------------variables---------------

// Variable = A container that stores a value .

// 1. declaration  let x;
// 2. assignment x = 100;

// let x = 345;
// let age = 24;
// let price = 10.99;
// let gpa = 2.1;

// console.log(`you are ${age} years old!`);
// console.log(`The price is $ ${price}`);
// console.log(`Your gpa is: ${gpa}`);

// let online = false;
// let forSale = true;
// let isStudent = true;
// let firstName = `Shubh`;

// console.log(typeof isStudent);


// let fullName = "Bro Code";
// let age = 24;
// let student = false;
// 
// document.getElementById(`p1`).textContent = `You name is : ${fullName}`;
// document.getElementById(`p2`).textContent = `You are ${age} years old`;
// document.getElementById(`p3`).textContent = `You are  a student : ${student}`;


// arithematics operators = oprands (values , variables , etc)
// operators (+ - * /)
// ex. 11 = x + 5;


// let students = 30;
// students = students /3;
// students ++;
// students --;
// console.log(students);


/*operator precedence 

1.prarenthesis
2. exponents
3. multiplication & division & modulp
4. addition &subtraction 

*/

// let result = 1 + 3 ** 4 + 6 / 7;
// console.log(result);






// how to accept user input 

// 1. EASY WAY  = window prompt 
// 2. PROFESSIONAL WAY = HTML textbox 



// 1. EASY WAY

// let username ;
// username = window.prompt(`What's your username`); 
// console.log(username);


// 2. PROFESSIONAL WAY

// let username;
// document.getElementById(`mySubmit`).onclick = function(){
// username = document.getElementById("myText").value;
// document.getElementById('myH1').textContent = `Hello ${username}`
// }


// const = a variable that can't be changed 

// let pi = 3.1459
// let radius ;
// let circumference;

// radius = window.prompt(`Enter the radius of circle`);
// radius = Number(radius);
// circumference = 2 * pi * radius;

// console.log(circumference);


// type conversion = change the datatype of a value to another (strings , numbers, booleans)

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


// const = a variable that can't be changed

// const pi = 3.14159;
// let radius;
// let circumference;
// 
// // circumference = 2 * pi * radius;
// 
// document.getElementById("mySubmit").onclick = function(){
//   radius = document.getElementById("myText").value ;
//   radius = Number(radius);
// circumference = 2 * pi * radius;
//   document.getElementById("myH3").textContent = "Result : " + circumference.toFixed(2) + "cm";
// }


// document.getElementById("mySubmit").onclick = function(){
//    const selectedLang = document.getElementById("id1").value ;
//     document.getElementById("result").textContent = "I love " + selectedLang;
// }

// Math = built-in object that provides a collection of properties and methods

// let x = 10;
// let y = 2;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,2);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);

// console.log(z);


// ternary operator  = a shortcut to if{} and else{} statements helps to assign a variable based on a condition 
// condition ? codeIfTrue : codeIfFalse;

// let age = 24;
// age >= 18 ? "You're an adult" : "Yor're  child";
// console.log(message);
//Switch statmets

// 
// let testScore = 92;
// let letterGrade;
// switch(true){
//     case testScore >= 90:
//     letterGrade = "A";
//     break;
// 
//     case testScore >=80:
//     letterGrade = "B";
//     break;
// 
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
// 
//     case testScore >=60:
//         letterGrade = "D"  
//         break; 
//     default:
//         letterGrade = "F";      
// }
// 
// console.log(letterGrade);

// let userName = " BroCode ";
// let result = userName.charAt(1);
// let result = userName.indexOf("o");
// let result = userName.lastIndexOf("o");
// let result = userName.length;
// let result = userName.trim();
// let result = userName.repeat(3);
// let result = userName.sith(" ");
// let result = userName.incltartsWith(" ");
// let result = userName.endsWudes("o");

// let phoneNum = "123-456-7890";
// // let result = phoneNum.replaceAll("-", " ");
// let result = phoneNum.padStart(15, "000");
// console.log(result);

// 
// const fullName = "Bro Code";
// let firstName = fullName.slice(0,3);
// let lastName = fullName.slice(4,8);
// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-4);

// const email = "Bro1@gmail.com";
// let username = email.slice(0,email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username);
// console.log(extension);

// let username = window.prompt("Enter your username: ")
// //  username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// // letter = letter.toLowerCase();
// 
// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;
// 
// console.log(username);




// = assigment operator 
// == comparison operator(compare if values are equal)
// === strict equality oprator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

// const PI = "3.14";
// if(PI=== "3.14"){
//     console.log("That is NOT Pi");
// }else{
//     console.log("That is Pi");
// }


// for loop = repeat some code a LIMITED amount of times

// 
// for (let i = 1; i <= 30; i++) {
//     if (i == 20) {
//         break;
//     } else {
//         console.log(i);
//     }
// }


// while loop = repeat some code WHILE some condition is ture;

// let username = "";
// if(username === ""){
//     console.log("You didn't enter your name");
// 
// }else{
//     console.log(`Hello $${username}`);
// }

// let username = "BroCode";
// while(username === "BroCode"){
//     console.log(`You didn't enter your name`);
// }
// 
// console.log(`Hello ${username}`)


//------------11 june 2025----------
// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)


/*
let fruits = ["apple","orange","banana"];
let vegetables = ["carrots","celery","potatoes"];
let  foods = [...fruits,...vegetables,"eggs","milk"];
console.log(foods);   */


// rest parameters = (...rest) allow a function work with a variable number of argumnets by bundling them intoan array
// 
// spread = expands an array into seperate elements 
// rest = bundles seperate elements into an array


// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//  return foods;
// }   
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushil";
// const food5 = "ramen";
// 
// // openFridge(food1,food2,food3,food4,food5);
// 
// const foods = getFood(food1,food2,food3,food4,food5);
// console.log(foods);

function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.","Spongebob","Squarepants","III");

console.log(fullName);
