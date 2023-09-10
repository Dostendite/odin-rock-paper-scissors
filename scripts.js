const buttons = document.querySelectorAll("button");
const infoRoundWinner = document.querySelector(".info-round-winner")
const infoScore = document.querySelector(".info-score")

infoRoundWinner.textContent = "X beats Y!";
infoScore.textContent = "Player 2 - 0 Computer";

// Rock Paper Scissors - by 210

// Keep track of scores to declare BO5 winner
// let playerScore = 0;
// let computerScore = 0;
// let gameRunning = true;
// while gameRunning;

// ~~~~~~~~~~ LOGIC ~~~~~~~~~~

buttons.forEach((button) => {
    // for each button, run the playRound
    // function passing in the button id
    // as a string argument

    playRound(button.id);
})

// ~~~~~~~~ FUNCTIONS ~~~~~~~~

function announceRoundWinner(roundWinner) {
    if (roundWinner === "tie") {
        infoRoundWinner.textContent = "It's a tie!"
    }
}
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

function playRound(playerChoice) {

    const computerSelection = getComputerChoice();
    let roundWinner;

    if (playerChoice === computerSelection) {
        roundWinner = "tie";
    }

    // check for cases where the player wins
    if (playerChoice === "Rock" && computerSelection === "Scissors" ||
        playerChoice === "Paper" && computerSelection === "Rock" ||
        playerChoice === "Scissors" && computerSelection === "Paper") {
            // playerScore++;
            roundWinner = "player"
        }
    
    // check for cases where the computer wins
    if (computerSelection === "Rock" && playerChoice === "Scissors" ||
        computerSelection === "Paper" && playerChoice === "Rock" ||
        computerSelection === "Scissors" && playerChoice === "Paper") {
            // computerScore++;
            roundWinner = "computer"
        }

    return roundWinner;

    // could do a cool thing here, like "Scissor cuts paper!" and so on
    if (roundWinner === "tie") {
        alert("It's a tie!");
    } else if (roundWinner === "player") {
        alert(`Player wins! ${playerChoice} beats ${computerSelection}!`)
    } else {
        alert(`Computer wins! ${computerSelection} beats ${playerChoice}!`)
    }
}
