// Rock Paper Scissors - by 210

// Keep track of scores to declare BO5 winner
let playerScore = 0;
let computerScore = 0;
let gameRunning = true;

// ~~~~~~~~~~ LOGIC ~~~~~~~~~~

while (gameRunning) {

    playRound();

    if (playerScore === 3) {
        alert("You win, thanks for playing!");
        break;
    } else if (computerScore === 3) {
        alert("The computer wins, thanks for playing!");
        break;
    }
}

// ~~~~~~~~ FUNCTIONS ~~~~~~~~

function getComputerChoice() {
    
    // Math.random() * n yields a random number up to n-1
    let randomNumber = ~~(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

}

function getPlayerChoice () {
    let selection = prompt("Choose your weapon (Rock, Paper, Scissors): ");

    switch (selection[0].toLowerCase()) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
    }
}

function playRound() {

    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    let roundWinner;

    if (playerSelection === computerSelection) {
        roundWinner = "tie";
    }

    // check for cases where the player wins
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++;
            roundWinner = "player"
        }
    
    // check for cases where the computer wins
    if (computerSelection === "Rock" && playerSelection === "Scissors" ||
        computerSelection === "Paper" && playerSelection === "Rock" ||
        computerSelection === "Scissors" && playerSelection === "Paper") {
            computerScore++;
            roundWinner = "computer"
        }

    // could do a cool thing here, like "Scissor cuts paper!" and so on
    if (roundWinner === "tie") {
        alert("It's a tie!");
    } else if (roundWinner === "player") {
        alert(`Player wins! ${playerSelection} beats ${computerSelection}!`)
    } else {
        alert(`Computer wins! ${computerSelection} beats ${playerSelection}!`)
    }
}
