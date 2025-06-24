// sort() == method used to sort elements of an array inplace
// sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + number + symbols) as strings

// let numbers = [1,2,3,4,53, 33,67,23,90,10];
// // numbers.sort();// it takes these numbers as string that's why these kind of result we can see 1 and 10,2 [1, 10, 2, 23, 3, 33, 4, 53, 67, 90]
// 
// // we have to add some custom code inside the sort() method
// numbers.sort((a,b) => a-b);// you can see now array get sort in increasing order [1, 2, 3, 4, 10, 23, 33, 53, 67, 90]
// 
// // if you want array should be sorted in dreasing order do something like this 
// numbers.sort((a,b)=>(b-a)); // now array sorted in decreasing order [90, 67, 53, 33, 23, 10, 4, 3, 2, 1]
// console.log(numbers)
// 


const people = [{name : "Spongebob",age:30,gpa:3.0},
    {name : "patrick",age:37,gpa:1.5},
    {name : "Squidward",age:51,gpa:2.5},
    {name : "Sandy",age:27,gpa:4.0}
]


people.sort((a,b)=>a.age - b.age);
// people.sort((a,b)=>a.name - b.name); for this we have to add some method inside to sort the string like name here
people.sort((a,b)=>b.name.localeCompare(a.name));
console.log(people);