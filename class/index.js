// destructuring = extract vaues from arrays and objects , then assign them to variables in a convenient way 
// [] = to perform array destructuring 
// {} = to perform object destructuring 

// ---------------------------Example 1 ------
// SWAP THE VALUE OF TWO VARIABLES 

// 
// function displayPerson({firstName,lastName,age,job = "unemployed"}){
// console.log('name: ${firstName} ${lastName}');
// console.log('job:${job}');
// console.log('job: ${job}');
// }
// 
// const person1 = {
//     firstName: "Code",
//     lastName: "Bro",
//     age : 30,
//     job: "fry cook",
// }
// const person2 = {
//     firstName: "Patrik",
//     lastName: "Star",
//     age : 34,
// }
// 
// const {firstName,lastName,age,job="unemployed"} = person1;
// 
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


//------------------------------nested object--
// nested objects = Objects inside of other objects. 
// Allows you to represent more complex data structures Child object is enclosed by a Parent object 

// person{ Address{}, ContactInfo{}}
// ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullName: "Code Bro",
//     age : 30,
//     isStudent : true,
//     hobbies:["karate","jellyfishing","cooking"],
//     address: {
//         street:"124 conch St.",
//         city:"Bikini Bottom",
//         country:"Int, Water"
//     }
// }
// for(const property in person.address){
//     console.log(person.address[property])
// }


//-----------------------------------

// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }
// class Address{
//     constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
// 
// const person1 = new Person("CodeBro",30,"124 Conch St.","Bikini Bottom","Int. Waters");
// const person2 = new Person("CodeBro",36,"124 Conch St.","Bikini Bottom","Int. Waters");
// const person3 = new Person("CodeBro",46,"124 Conch St.","Bikini Bottom","Int. Waters");
// console.log(person2.address.city);