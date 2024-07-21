const infoRoundWinner = document.querySelector(".info-round-winner");
const infoScore = document.querySelector(".info-score");
const buttons = document.querySelectorAll("button");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const buttonContainer = document.querySelector(".button-container");
const restartButton = document.querySelector("#restart-button")

rockButton.addEventListener("click", () => clickPlay("rock"));
paperButton.addEventListener("click", () => clickPlay("paper"));
scissorsButton.addEventListener("click", () => clickPlay("scissors"));
restartButton.addEventListener("click", () => restartGame())

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function clickPlay(playerChoice) {
    if (isGameOver()) {
        finishGame();
        return;
    }

    roundInfo = playRound(playerChoice);
    announceRoundWinner(roundInfo);
    updateScore();

    if (isGameOver()) {
        finishGame();
        return;
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

function finishGame() {
    if (roundWinner === "player") {
        infoRoundWinner.textContent = "You win the game!"
        infoScore.textContent = ""
        restartButton.style.display = "initial"
    } else {
        infoRoundWinner.textContent = "The computer wins the game!";
        infoScore.textContent = ""
        restartButton.style.display = "initial"
    }
    
}

function updateScore() {
    infoScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function announceRoundWinner(roundInfo) {
    let playerChoice = roundInfo[0];
    let computerChoice = roundInfo[1];

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
    
    return [playerChoice, computerChoice];
}

function restartGame() {
    playerScore = 0
    computerScore = 0
    roundWinner = ""
    infoScore.textContent = "Click any button above to play!"
    infoRoundWinner.textContent = ""
    restartButton.style.display = "none"
}