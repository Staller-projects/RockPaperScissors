

let playerChoice = "";
let resultText = "";

let totalCount = 5;
let currentRound = 0;
let tieRoundCount = 0;
let playerWinCount = 0; 
let computerWinCount = 0; 

document.getElementById('currentRound').innerText = currentRound;
document.getElementById('playerWinCount').innerText = playerWinCount;
document.getElementById('computerWinCount').innerText = computerWinCount;
document.getElementById('tieRound').innerText = tieRoundCount;


const getComputerChoice = () => {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

const getPlayerChoice = (choice) => {
    console.log(choice);
    playerChoice = choice;

    triggerRound();
}


const playRound = (playerChoice, computerChoice) => {
    // console.log(playerChoice, computerChoice);

    if(!playerChoice) {
        console.log(alert("Player should choose first it's choice!"));
        return 1;
    }

    if(playerChoice == "Rock" && computerChoice == "Scissors") {
        resultText = "Player win!";

    } else if(playerChoice == "Rock" && computerChoice == "Paper") {
        resultText = "Computer win!";

    } else if(playerChoice == "Scissors" && computerChoice == "Rock") {
        resultText = "Computer win!";

    } else if(playerChoice == "Scissors" && computerChoice == "Paper") {
        resultText = "Player win!";

    } else if(playerChoice == "Paper" && computerChoice == "Rock") {
        resultText = "Player win!";

    } else if(playerChoice == "Paper" && computerChoice == "Scissors") {
        resultText = "Computer win!";

    } else if(playerChoice == "Rock" && computerChoice == "Rock") {
        resultText = "TIE!";

    } else if(playerChoice == "Scissors" && computerChoice == "Scissors") {
        resultText = "TIE!";

    } else if(playerChoice == "Paper" && computerChoice == "Paper") {
        resultText = "TIE!";

    }

    // Score board logic
    displayResult(playerChoice, computerChoice);

}


const displayResult = (playerChoice, computerChoice) => {
    document.getElementById('playerChoice').innerText = `- Player's choose: ${playerChoice}`;
    document.getElementById('computerChoice').innerText = `- Computer's choose: ${computerChoice}`;
    document.getElementById('resultText').innerText = resultText;

    displayScore();
}


const displayScore = () => {
 
    if(totalCount == 0) {
        alert("Do you want to play one more round ?");
        resetGame();
        return 0;
    }


    if(resultText == "Computer win!") {
        totalCount--;
        currentRound++;
        computerWinCount++; 
        
    } else if(resultText == "Player win!") {
        totalCount--;
        currentRound++;
        playerWinCount++; 

    } else if(resultText == "TIE!"){
        tieRoundCount++;
        currentRound++;
    } 

    updateScore(currentRound, playerWinCount, computerWinCount, tieRoundCount);

}

function resetGame() {
    totalCount = 5;
    currentRound = 0;
    tieRoundCount = 0;
    playerWinCount = 0; 
    computerWinCount = 0;

    document.getElementById('playerChoice').innerText = ``;
    document.getElementById('computerChoice').innerText = ``;
    document.getElementById('resultText').innerText = ``;

    updateScore(currentRound, playerWinCount, computerWinCount, tieRoundCount);
    
}

function updateScore(currentRound, playerWinCount, computerWinCount, tieRoundCount) {
    document.getElementById('currentRound').innerText = currentRound;
    document.getElementById('playerWinCount').innerText = playerWinCount;
    document.getElementById('computerWinCount').innerText = computerWinCount;
    document.getElementById('tieRound').innerText = tieRoundCount;
}

function triggerRound() {
    // console.log(getComputerChoice());
    playRound(playerChoice, getComputerChoice());
}

 















