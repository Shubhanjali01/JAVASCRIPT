// Date objects = objects that contains values that represent dates and times these date objects can be changed and formated 


const date = new Date(); //  "2025-01-02T12:00:00Z"         Thu Jan 02 2025 17:30:00 GMT+0530 (India Standard Time)


const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const  dayOfWeek= date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(2);
date.setSeconds(5);

console.log(date);


const date1 = new Date("2025-12-31");
const date2 = new Date("2024-12-30");


if(date1 > date2){
    console.log("Happy new year!");
}

