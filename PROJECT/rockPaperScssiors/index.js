// rock paper scissors game logic

const choices = ["rock", "papers", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT's A TIE!";
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "papers") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "papers":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";  
                break;
            case "scissors":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";   
                break;   
        }
    }

    playerDisplay.textContent = `Your Choice : ${playerChoice}`;
    computerDisplay.textContent = `Computer Choice : ${computerChoice}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("greenText","redText");
    
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

