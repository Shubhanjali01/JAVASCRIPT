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


document.getElementById("mySubmit").onclick = function(){
   const selectedLang = document.getElementById("id1").value ;
    document.getElementById("result").textContent = "I love " + selectedLang;
}
