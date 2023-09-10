const buttons = document.querySelectorAll("button");
const infoRoundWinner = document.querySelector(".info-round-winner")
const infoScore = document.querySelector(".info-score")



// rock paper scissors - by 210

// Keep track of scores to declare BO5 winner


// ~~~~~~~~~~ LOGIC ~~~~~~~~~~

let playerScore = 0;
let computerScore = 0;

infoScore.textContent = "Player: | Computer:";

// let gameRunning = true;

// while (gameRunning) {}

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        let roundWinner = playRound(button.id)

        announceRoundWinner(roundWinner);
        updateScore();
    });

});

// ~~~~~~~~ FUNCTIONS ~~~~~~~~

function updateScore() {
    infoScore.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function announceRoundWinner(roundInfo) {

    // unpack return values

    let playerChoice = roundInfo[0];
    let computerChoice = roundInfo[1];
    let roundWinner = roundInfo[2];

    if (roundWinner = "player") {
        infoRoundWinner.textContent = `Player wins! ${playerChoice}
        beats ${computerChoice}!`;
    } else if (roundWinner = "computer") {
        infoRoundWinner.textContent = `Computer wins! ${computerChoice}
        beats ${playerChoice}!`;
    } else {
        infoRoundWinner.textContent = `Both chose ${playerChoice},
        it's a tie!`;
    }
}

function getcomputerChoice() {
    
    // Math.random() * n yields a random number up to n-1
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

    let computerChoice = getcomputerChoice();
    let roundWinner = ""

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

    // pack return values to display them onscreen
    return roundInfo;
}
