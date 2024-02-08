

let playerChoice = "";
let resultText = "";

let totalCount = 5;
let currentRound = 0;
let tieRoundCount = 0;
let playerWinCount = 0; 
let computerWinCount = 0;

let choice = {
    "Rock": {
        "Rock": 'Tie',
        "Paper": 'Computer Win',
        "Scissors": 'Player Win'
    },
    "Paper": {
        "Rock": 'Player Win',
        "Paper": 'Tie',
        "Scissors": 'Compute Win' 
    },
    "Scissors": {
        "Rock": 'Computer Win',
        "Paper": 'Player Win',
        "Scissors": 'Tie'
    }
};

document.getElementById('currentRound').innerText = currentRound;
document.getElementById('playerWinCount').innerText = playerWinCount;
document.getElementById('computerWinCount').innerText = computerWinCount;
document.getElementById('tieRound').innerText = tieRoundCount;


const getComputerChoice = () => {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

const getPlayerChoice = (playerChoose) => { 
    playerChoice = playerChoose;

    triggerRound();
}


const playRound = (playerChoice, computerChoice) => { 

    if(!playerChoice) {
        console.log(alert("Player should choose first it's choice!"));
        return 1;
    }
   
    resultText = choice[playerChoice][computerChoice];


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


    if(resultText == "Computer Win") {
        totalCount--;
        currentRound++;
        computerWinCount++; 
        
    } else if(resultText == "Player Win") {
        totalCount--;
        currentRound++;
        playerWinCount++; 

    } else if(resultText == "Tie"){
        tieRoundCount++;
        currentRound++;
    } 

    updateScore(currentRound, playerWinCount, computerWinCount, tieRoundCount);

}

const resetGame = () => {
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

const updateScore = (currentRound, playerWinCount, computerWinCount, tieRoundCount) => {
    document.getElementById('currentRound').innerText = currentRound;
    document.getElementById('playerWinCount').innerText = playerWinCount;
    document.getElementById('computerWinCount').innerText = computerWinCount;
    document.getElementById('tieRound').innerText = tieRoundCount;
}

const triggerRound = () => {
    // console.log(getComputerChoice());
    playRound(playerChoice, getComputerChoice());
}

 















