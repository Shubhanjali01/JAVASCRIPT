// // forEach() = Method used to iterate over the elemets of an array and apply a specified function (callback) to each element 
// 
// // array.forEach(callback)
// 
// let fruits = ["apple","orange","banana","coconut"];
// 
// fruits.forEach(capitalize);
// fruits.forEach(display);
// 
// function upperCase(element,index,array){
//     array[index] = element.toUpperCase();
// }
// 
// function lowercase(element,index,array){
//     array[index] = element.toLowerCase();
// }
// 
// function capitalize(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// 
// function display(element){
//     console.log(element);
// }




/*      12-06-2025        */

//.map() = accepts a callback and applies that function to each element of an array , then return a array 

// const numbers = [1,2,3,4,5];
// 
// const squares =   numbers.map(square);
// const cubes = numbers.map(cube);
// 
// console.log(cubes);
// 
// function square(element){
//     return Math.pow(element,2);
// }
// 
// 
// const students = ["Spongebob","Patrick","Squidward","Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
// console.log(studentsUpper);
// 
// function upperCase(element){
//     return element.toUpperCase();
// }
// 
// function lowerCase(element){
//     return element.toLowerCase();
// }


// const dates = ["2024-01-10","2025-2-20","2026-3-30"];
// 
// const formattedDates = dates.map(formatDates);
// 
// console.log(formattedDates);
// 
// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }




//.filter() = creates a new array by filtering out elements 
// out elements

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter();
// let oddNums = numbers.filter();
// 
// console.log(evenNums);
// 
// function isEven(element){
//     return element % 2 === 0;
// }
// 
// function isOdd(element){
//     return element % 2 === 0;
// }


// const ages = [16,17,18,18,19,20,60];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);
// 
// console.log(adults);
// function isAdult(element){
//     return element >= 18;
// }
// 
// function isChild(element){
//     return element < 18;
// }

// const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];
// 
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);
// console.log(shortWords);
// 
// function getShortWords(element){
//     return element.length <= 6;
// }



// .reduce() = reduce the elements of an array to a single value

// const prices = [5,60,10,25,15,20];
// const total = prices.reduce();
// 
// console.log(`${total.toFixed(2)}`);
// 
// function sum(accumulator,element){
//     return accumulator + element;
// }
// 


const grades = [75,50,90,80,65,95];

const maximum = grades.reduce();
console.log(maximum);
console.log(minimum);
function getMax(accumulator,element){
    return Math.max(accumulator,element);
}

function getMin(accumulator,element){
    return Math.min(accumulator,element);
}

