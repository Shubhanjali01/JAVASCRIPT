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

class Animal{
   constructor(name,age){
      this.name = name;
    this.age = age;
   }
}
class Rabbit extends Animal{
   constructor(name,age, runSpeed){
    super(name,age);
   
    this.runSpeed = runSpeed;
   }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
       
        this.swimSpeed = swimSpeed;
    }
    
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
   
        this.flySpeed = flySpeed;
    }

}

const rabbit = Rabbit("rabbit",1,25);
const fish = Fish("fish",2,12);
const hawk = Rabbit("hawk",3,45);
