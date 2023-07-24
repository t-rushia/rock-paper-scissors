let playerScore = 0;
let playerChoice = "";
let computerScore = 0;
let computerChoice = "";
let gameResults = document.querySelector("#gameresults-el");
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
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    gameResults.textContent = `You won this round ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    gameResults.textContent = `You won this round ${playerChoice} beats ${computerChoice}`;
  } else {
    gameResults.textContent = `You lost this round ${computerChoice} beats ${playerChoice}`;
  }
}
