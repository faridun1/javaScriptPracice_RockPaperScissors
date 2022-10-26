// RPS
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'ROCK';
      case 1:
        return 'PAPER';
      case 2:
        return 'SCISSORS';
    }
  }
playerScore = 0;
computerScore = 0;

function playRound() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
        const computerSelection = getComputerChoice();
        if (playerSelection == computerSelection) {
            //return ("Draw! You both chose same");
            continue;
        }
        else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
        (playerSelection == "SCISSORS" && computerSelection == "PAPER") || 
        (playerSelection == "PAPER" && computerSelection == "ROCK")) {
            //return ("You Win! " + playerSelection + " beats " + computerSelection);
            playerScore ++;
        }
        else{
            //return ("You Lose. " + computerSelection + " beats " + playerSelection);
            computerScore++;
        }
        console.log("Computer " + computerSelection);
        console.log("Player " + playerSelection)
    }
    if (playerScore == computerScore) {
        return ("Draw")
    }
    else if (playerScore > computerScore) {
        return ("You win by score of " + playerScore + " to " + computerScore);
    }
    else {
        return ("You lose by score of " + computerScore + " to " + playerScore);
    }
}
let playerSelection;
let computerSelection;
console.log("player" + playerSelection)
console.log(playRound(playerSelection, computerSelection))