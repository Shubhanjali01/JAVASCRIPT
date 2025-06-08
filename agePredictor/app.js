const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

   if(age >=100){
    myResult.textContent = `you are TOO OLD to enter this site`;
}else if(age == 0){
        myResult.textContent = `You can't enter. You were just born.`;
}else if(age >= 18){
  myResult.textContent = `You are old enough to enter this site`;
}else if(age <0){
    myResult.textContent = `Your age can't be below 0`;
}else{

     myResult.textContent = `You must be 18+ to enter this site`;
}
}
