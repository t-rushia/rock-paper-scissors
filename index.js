let playerChoice = "";
let computerChoice = "";
let rockChoice = document.querySelector("#rock-el");
let paperChoice = document.querySelector("#paper-el");
let scissorsChoice = document.querySelector("#scissors-el");
let playerScore = document.querySelector("#playerscore-el");
let computerScore = document.querySelector("#computerscore-el");
let gameResults = document.querySelector("#gameresults-el");

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

rockChoice.addEventListener("click", function () {
  playerChoice = "Rock";
  playRound();
  return playerChoice;
});

paperChoice.addEventListener("click", function () {
  playerChoice = "Paper";
  playRound();
  return playerChoice;
});

scissorsChoice.addEventListener("click", function () {
  playerChoice = "Scissors";
  playRound();
  return playerChoice;
});

function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "Win";
  } else if (playerChoice === computerChoice) {
    return "Tie";
  } else {
    return "Lose";
  }
}
