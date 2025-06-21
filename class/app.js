// // inheritance = allows a new class to inherit properties and methods from an existing class (parent-> child)
// // helps with code reusability
// 
// class Animal{
//     alive = true;
// 
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
// 
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// 
// class Rabbit extends Animal{
//     name = "rabbit";
// }
// 
// class Fish extends Animal{
//     name = "fish";
// }
// 
// class Hawk extends Animal{
//     name = "hawk";
// }
// 
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();
// 
// rabbit.alive = false;
// 
// console.log(rabbit.alive);
// console.log(fish.alive);
// console.log(hawk.alive);
// 
// rabbit.eat();
// rabbit.sleep();
// 
// hawk.eat();
// hawk.sleep();
// 
// fish.eat();
// fish.sleep();
// 
// 


//----------------------super keyword-------------
// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)  
// this = this object 
// super = the parent 
// 
// class Animal{
//    constructor(name,age){
//       this.name = name;
//     this.age = age;
//    }
// }
// class Rabbit extends Animal{
//    constructor(name,age, runSpeed){
//     super(name,age);
//    
//     this.runSpeed = runSpeed;
//    }
// }
// 
// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//        
//         this.swimSpeed = swimSpeed;
//     }
//     
// }
// 
// class Hawk extends Animal{
//     constructor(name,age,flySpeed){
//         super(name,age);
//    
//         this.flySpeed = flySpeed;
//     }
// 
// }
// 
// const rabbit = Rabbit("rabbit",1,25);
// const fish = Fish("fish",2,12);
// const hawk = Rabbit("hawk",3,45);


//------------------------------21 june -------------------------------
//getter = special method that makes a property Readable
//setter = special method that makes a property writable

// validate and modify a value when reading/writting a peroperty 
// class Rectangle{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
// 
//     }
//     set width(newWidth){
//         if(newWidth > 0 ){
//             this._width = newWidth;
//         }else{
//             console.error("Width must be a positive number");
//         }
//     }
// 
//     set height(newHeight){
//         if(newHeigth > 0 ){
//             this._height = newHeight;
//         }else{
//             console.error("Height must be a positive number");
//         }
//     }
// 
//     get width(){
//         return this._width.tofixed(1);
//     }
//     get height(){
//         return this._height.tofixed(1);
//     }
// 
//     get area(){
//         return (this._width * this._height).tofixed(1);
//     }
// }
// 
// const rectangle = new Rectangle(3,4);
// rectangle.width = -1000000;
// rectangle.height = "pizza";
// 
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);
// 


class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First Name must be non-empty string")
        }
    }
      set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last Name must be non-empty string")
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >=0){
            this._age = newAge;
        }else{
            console.error("Age must be non-empty string ");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get  lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Code","Bro",30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

