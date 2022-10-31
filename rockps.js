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

function playRound(a) {
    //for (let i = 0; i < 5; i++) {
        //const  playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
        let playerSelection = a;
        let computerSelection = getComputerChoice();
        // if (playerSelection == computerSelection) {
        //     //return ("Draw! You both chose same");
        //     continue;
        // }
        if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || 
        (playerSelection == "SCISSORS" && computerSelection == "PAPER") || 
        (playerSelection == "PAPER" && computerSelection == "ROCK")) {
            //return ("You Win! " + playerSelection + " beats " + computerSelection);
            playerScore ++;
        }
        else if (((playerSelection == "SCISSORS" && computerSelection == "ROCK") || 
        (playerSelection == "PAPER" && computerSelection == "SCISSORS") || 
        (playerSelection == "ROCK" && computerSelection == "PAPER"))) {
            //return ("You Lose. " + computerSelection + " beats " + playerSelection);
            computerScore++;
        }
        console.log("Computer choice " + computerSelection);
        resultsComputer.textContent = ("Comp Score: " + computerScore + " Computer choice " + computerSelection);
        console.log("Your choice " + playerSelection);
        resultsPlayer.textContent = ("Your Score: " + playerScore + " Your choice " + playerSelection);
        console.log(resultsPlayer);
    //}
    if (playerScore == 5) {
        alert("You win")
    }
    else if (computerScore == 5) {
        alert("Computer wins");
    }
}
let playerSelection;
let computerSelection;
//console.log("player" + playerSelection)
//console.log(playRound(playerSelection, computerSelection))

// to show results on html
const resultsContainer = document.createElement('div');
const resultsComputer = document.createElement('p');
const resultsPlayer = document.createElement('p');
const gameResults = document.createElement('p');
resultsContainer.appendChild(resultsComputer);
resultsContainer.appendChild(resultsPlayer);
resultsContainer.appendChild(gameResults);
document.body.appendChild(resultsContainer);


const buttons = document.querySelectorAll(".playerChoice");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.value);
    });
});

