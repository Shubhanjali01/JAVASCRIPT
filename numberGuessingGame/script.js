// // Generate random number from 1 to 100 
// // Math.random() -> [0, 1) 
// // 0* 100 == 0    and  .999 * 100 === 99.9 
// // 0 + 1 == 1     and  99.9 + 1 === 100.9 
// // Math.floor(1) === 1  and  Math.floor(100.9) === 100
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// 
 function checkGuess(){
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message')
    if(isNaN(guess)){
        message.textContent="Please enter a valid Number.";
        return;
    }
    if(guess < 1 || guess > 100){
        message.textContent = "Number out of range! Try Number between 1 and 100.";

    }else if(guess < randomNumber){
        message.textContent = "Too low! Try again.";
    }else if (guess > randomNumber){
        message.textContent = "Too high! Try again. ";

    }else{
        message.textContent = "Correct! You guessed it!";
    }

}

