



let choices = ["Rock", "Paper", "Scissors"];

let playerChoice = "";
let resultText = "";

console.log(playerChoice);
console.log(resultText.length);

let totalCount = 5;
let currentRound = 0;
let tieRoundCount = 0;
let playerWinCount = 0; 
let computerWinCount = 0; 

let playerChoiceElement = document.getElementById('playerChoice');
let computerChoiceElement = document.getElementById('computerChoice');
let resultTextElement =  document.getElementById('resultText');

let currentRoundElement = document.getElementById('currentRound').innerText = currentRound;
document.getElementById('playerWinCount').innerText = playerWinCount;
document.getElementById('computerWinCount').innerText = computerWinCount;
document.getElementById('tieRound').innerText = tieRoundCount;



const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const getPlayerChoice = (choice) => { 
    playerChoice = choice;
 

    setTimeout(() => {
        document.getElementById(`${choice}Button`).classList.toggle("opacity-50");
    }, 700)

    document.getElementById(`${choice}Button`).classList.toggle("opacity-50");

    triggerRound();
}


const playRound = (playerChoice, computerChoice) => { 

    if(!playerChoice) {
        console.log(alert("Player should choose first it's choice!"));
        return;
    }


    if((playerChoice == "Rock" && computerChoice == "Scissors") || (playerChoice == "Scissors" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Rock")) {
        resultText = "Player win!";
        
    } else if(playerChoice == computerChoice) {
        resultText = "Tie!";

    }  else {
        resultText = "Computer win!"
    }

    // Score board 
    displayResult(playerChoice, computerChoice);

}


const displayResult = (playerChoice, computerChoice) => {
    playerChoiceElement.innerText = `- Player's choice: ${playerChoice}`;
    computerChoiceElement.innerText = `- Computer's choice: ${computerChoice}`;
    resultTextElement.innerText = resultText;

    displayScore();
}


const displayScore = () => {
 
    if(totalCount == 0) {
        alert("Do you want to play one more round ?");
        resetGame();
        return;
    }

    switch(resultText) {
        case "Computer win!":
            totalCount--;
            currentRound++;
            computerWinCount++;
            break;    

        case "Player win!":
            totalCount--;
            currentRound++;
            playerWinCount++;
            break;

        case "Tie!":
            tieRoundCount++;
            currentRound++; 
            break;

        default:
            break;        
    }


    updateScore(currentRound, playerWinCount, computerWinCount, tieRoundCount);

}

function resetGame() {
    totalCount = 5;
    currentRound = 0;
    tieRoundCount = 0;
    playerWinCount = 0; 
    computerWinCount = 0;
 
    playerChoiceElement.innerText = ``;
    computerChoiceElement.innerText = ``;
    resultTextElement.innerText = ``;

    updateScore(currentRound, playerWinCount, computerWinCount, tieRoundCount);
    
}

function updateScore(currentRound, playerWinCount, computerWinCount, tieRoundCount) {
    currentRoundElement.innerText = currentRound;
    document.getElementById('playerWinCount').innerText = playerWinCount;
    document.getElementById('computerWinCount').innerText = computerWinCount;
    document.getElementById('tieRound').innerText = tieRoundCount;
}

function triggerRound() { 
    playRound(playerChoice, getComputerChoice());
}

 















