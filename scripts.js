// ~~~~~~~~ ROCK PAPER SCISSORS - PROGRAM START ~~~~~~~~

console.log(`Rock Paper Scissors game`);
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

// Log result and add a round to the counter, then restart
alert(playRound(playerSelection, computerSelection));


// ~~~~~~~~ FUNCTIONS ~~~~~~~~

// Generate a random number between 1 and 3
// to choose the computer's weapon
function getComputerChoice() {

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
    let playerSelection = prompt("Choose your weapon (Rock, Paper, Scissors): ");

    switch (playerSelection[0].toLowerCase()) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
    }
}

// Play a round & compare the players' weapon against the computer's
function playRound(playerSelection, computerSelection) {

    // string to print at the end
    let result;

    // if true, the player wins, if false, the computer wins
    let playerWins;

    // if playerSelection is equal to computerSelection,
    // the result is a tie, else compare:

    // playerSelection || computerSelection || winner
    // Rock            || Paper             || computer
    // Rock            || Scissors          || player

    // Paper           || Rock              || player
    // Paper           || Scissors          || computer

    // Scissors        || Rock              || computer
    // Scissors        || Paper             || player

    // compare
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            playerWins = false;
        } else if (computerSelection === "Scissors") {
            playerWins = true;
        }
    }

    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerWins = true;
        } else if (computerSelection === "Scissors") {
            playerWins = false;
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            playerWins = false;
        } else if (computerSelection === "Paper") {
            playerWins = true;
        }
    }

    // check for a tie first, if not, check for a winner
    
    if (playerSelection === computerSelection) {
    result = `It's a tie! ${playerSelection} ties with ${computerSelection}!`
    } else if (playerWins) {
        result = `Player wins! ${playerSelection} beats ${computerSelection}!`
    } else {
        result = `Computer wins! ${computerSelection} beats ${playerSelection}!`
    }

    // return a string that declares the winner
    // of the round like: "You lose! Paper beats Rock"
    return result;
}
