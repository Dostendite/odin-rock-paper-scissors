// Rock Paper Scissors

function getRandomNumber() {
    // get random number (1, 2, 3)

    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    let randomNumber = getRandomNumber();

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice () {
    const playerSelection = prompt("Choose your weapon (Rock, Paper, Scissors): ");

    // can add error handling later
    if (playerSelection[0].toLowerCase() === "r") {
        return "Rock";
    } else if (playerSelection[0].toLowerCase() === "p") {
        return "Paper";
    } else  if (playerSelection[0].toLowerCase() === "s") {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    // play rps round

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


// ~~~~~~~~ PROGRAM START ~~~~~~~~

let roundsPlayed = 1;

// can improve this logic too
while (roundsPlayed < 6) {

    // Play five rounds

    console.log(`Round number ${roundsPlayed}`);
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    // Log result and add a round to the counter, then restart
    console.log(playRound(playerSelection, computerSelection));
    roundsPlayed++;
}
