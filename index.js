let playerChoice = "";
let computerChoice = "";
const rockChoice = document.querySelector("#rock-el");
const paperChoice = document.querySelector("#paper-el");
const scissorsChoice = document.querySelector("#scissors-el");
let playerScore = document.querySelector("#playerscore-el");
let computerScore = document.querySelector("#computerscore-el");
let gameResults = document.querySelector("#gameresults-el");

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

getComputerChoice();
console.log(computerChoice);
