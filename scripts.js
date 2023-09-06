// Variables to be used later

// Function returns rounwinner
let roundWinner = "";

// And the score for each is incremented
// in case they win
let playerScore = 0;
let computerScore = 0;

// Play game until BO5 is finished
let playing = true;

// ~~~~~~~~ ROCK PAPER SCISSORS - PROGRAM START ~~~~~~~~

while (playing) {

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

// Generate a random number between 1 and 3
// to choose the computer's weapon
function getComputerChoice() {

    // * 3 means up to 3, so [0, 1, 2]
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

// Prompt player to choose their weapon
// get first letter of their input and return the weapon string
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

// Play a round & compare the players' weapon against the computer's
function playRound() {

    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    // string to print at the end
    let roundWinner;

    // check for tie

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

    // could do a cool thing here, like "Scissor cuts paper!"

    // alert winner message
    if (roundWinner === "tie") {
        alert("It's a tie!");
    } else if (roundWinner === "player") {
        alert(`Player wins! ${playerSelection} beats ${computerSelection}!`)
    } else {
        alert(`Computer wins! ${computerSelection} beats ${playerSelection}!`)
    }
}
