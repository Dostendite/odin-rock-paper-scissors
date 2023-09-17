const infoRoundWinner = document.querySelector(".info-round-winner");
const infoScore = document.querySelector(".info-score");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const buttonContainer = document.querySelector(".button-container");

let playerScore = 0;
let computerScore = 0;

infoScore.textContent = "Click any button above to play!";

rockButton.addEventListener("click", () => {
    clickPlay("rock");
});
paperButton.addEventListener("click", () => {
    clickPlay("paper");
});
scissorsButton.addEventListener("click", () => {
    clickPlay("scissors");
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function isGameOver() {
    return (playerScore === 5 || computerScore === 5);
}

function finishGame(winner) {
    if (winner === "player") {
        infoRoundWinner.textContent = "You win the game!";
    } else {
        infoRoundWinner.textContent = "The computer wins the game!";
    }
}

function clickPlay(playerChoice) {

    if (isGameOver()) {
        finishGame();
    } else {
        let roundWinner = playRound(playerChoice);
        announceRoundWinner(roundWinner);
        updateScore()
    } 
}

function updateScore() {
    infoScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function announceRoundWinner(roundInfo) {

    let playerChoice = roundInfo[0];
    let computerChoice = roundInfo[1];
    let roundWinner = roundInfo[2];

    playerChoice = capitalizeFirstLetter(playerChoice);
    computerChoice = capitalizeFirstLetter(computerChoice);

    if (roundWinner === "player") {
        infoRoundWinner.textContent = `You win! ${playerChoice}
        beats ${computerChoice}!`;
    } else if (roundWinner === "computer") {
        infoRoundWinner.textContent = `Computer wins! ${computerChoice}
        beats ${playerChoice}!`;
    } else {
        infoRoundWinner.textContent = `Both chose ${playerChoice},
        it's a tie!`;
    }
}

function getComputerChoice() {
    
    let randomNumber = ~~(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}

function playRound(playerChoice) {

    let computerChoice = getComputerChoice();
    let roundWinner = "";

    if (playerChoice === computerChoice) {
        roundWinner = "tie";
    }

    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
            roundWinner = "player";
            playerScore++;
        }
    
    if (computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "scissors" && playerChoice === "paper") {
            roundWinner = "computer";
            computerScore++;
        }
    
    const roundInfo = [playerChoice, computerChoice, roundWinner];

    return roundInfo;
}
