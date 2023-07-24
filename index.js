let playerScore = 0;
let playerTotalWins = 0;
let playerChoice = "";
let computerScore = 0;
let computerTotalWins = 0;
let computerChoice = "";
let totalPlayerWins = document.querySelector("#playertotalwins-el");
let totalComputerWins = document.querySelector("#computertotalwins-el");
let gameResults = document.querySelector("#gameresults-el");
let playerScoreTotal = document.querySelector("#playerscore-el");
let computerScoreTotal = document.querySelector("#computerscore-el");
const rockButton = document.querySelector("#rock-el");
const paperButton = document.querySelector("#paper-el");
const scissorsButton = document.querySelector("#scissors-el");

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
}

rockButton.addEventListener("click", function () {
  getComputerChoice();
  playerChoice = "rock";
  playRound(playerChoice, computerChoice);
});

paperButton.addEventListener("click", function () {
  getComputerChoice();
  playerChoice = "paper";
  playRound(playerChoice, computerChoice);
});

scissorsButton.addEventListener("click", function () {
  getComputerChoice();
  playerChoice = "scissors";
  playRound(playerChoice, computerChoice);
});

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameResults.textContent = "It's a tie.";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    gameResults.textContent = `You won this round ${playerChoice} beats ${computerChoice}`;
    playerScore++;
    playerScoreTotal.textContent = `Player: ${playerScore}`;
    checkWinner(playerScore, computerScore);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    gameResults.textContent = `You won this round ${playerChoice} beats ${computerChoice}`;
    playerScore++;
    playerScoreTotal.textContent = `Player: ${playerScore}`;
    checkWinner(playerScore, computerScore);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    gameResults.textContent = `You won this round ${playerChoice} beats ${computerChoice}`;
    playerScore++;
    playerScoreTotal.textContent = `Player: ${playerScore}`;
    checkWinner(playerScore, computerScore);
  } else {
    gameResults.textContent = `You lost this round ${computerChoice} beats ${playerChoice}`;
    computerScore++;
    computerScoreTotal.textContent = `Computer: ${computerScore}`;
    checkWinner(playerScore, computerScore);
  }
}

function checkWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    gameResults.textContent = "Congratulations you have won the game!";
    playerTotalWins++;
    endGame();
    if (playerTotalWins <= 1) {
      totalPlayerWins.textContent = `${playerTotalWins} time`;
    } else {
      totalPlayerWins.textContent = `${playerTotalWins} times`;
    }
  } else if (computerScore === 5) {
    gameResults.textContent = "Sorry you lose.";
    computerTotalWins++;
    endGame();
    if (computerTotalWins <= 1) {
      totalComputerWins.textContent = `${computerTotalWins} time`;
    } else {
      totalComputerWins.textContent = `${computerTotalWins} times`;
    }
  }
}

function endGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreTotal.textContent = `Player: ${playerScore}`;
  computerScoreTotal.textContent = `Computer: ${computerScore}`;
}
