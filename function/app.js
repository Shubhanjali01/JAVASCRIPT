// function : a section of reusable code.
//declare code once, use it wherever you want.
// call the function to execute the code.

// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }
// function devide(x, y) {
//     return x / y;
// }
// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }
// console.log(add(23, 4));
// console.log(subtract(23, 4));
// console.log(multiply(23, 4));
// console.log(devide(23, 4));
// console.log(isEven(24));

// variable scope = where a variable is recognized and accessible (local vs global)
let x = 3;
function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let x = 2;
    console.log(x);
}