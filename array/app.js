// array  = a variable like structure that can hold more than 1 value
// 
// let fruits = ["apple","orange","banana","coconut"];
// 
// // fruits.push("coconut");
// // fruits.pop();
// // fruits.unshift("coconut");
// // fruits.shift("coconut");
// 
// 
// for(let i = 0;i<fruits.length ;i++){
//     console.log(fruits);
// }
// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mongo");
// console.log(index);


// 2D array = mult-dimensional array that stores a matrix of data in rows and columns 
// useful for games , spreadsheets , or representing images

const matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

matrix[0][1] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';

matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';

matrix[2][0] = 'X';
matrix[2][1] = 'O';
matrix[2][2] = 'X';

for (let row of matrix) {
    const rowString = row.join(' ');
    console.log(rowString);
}