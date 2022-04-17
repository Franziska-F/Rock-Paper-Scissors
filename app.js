let userScore = 0;

let computerScore = 0;

const userScoreDisplay = document.querySelector("#user-score");

const computerScoreDisplay = document.querySelector("#computer-score");

const resultDisplay = document.querySelector(".result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getComputersChoice() {
  const rockPaperScissors = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomNumber];
}
function lose(user, computer) {
  computerScore++;
  computerScoreDisplay.innerHTML = computerScore;
  resultDisplay.innerHTML = `${computer} beats ${user}! Sally wins!`;
}
function win(user, computer) {
  userScore++;
  userScoreDisplay.innerHTML = userScore;
  resultDisplay.innerHTML = `${user} beats ${computer}! You win!`;
}
function draw(user, computer) {
  resultDisplay.innerHTML = `Draw!`;
}

function game(usersChoice) {
  const computersChoice = getComputersChoice();

  switch (usersChoice + computersChoice) {
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(usersChoice, computersChoice);
      break;
    case "RockScissors":
    case "PapeRock":
    case "ScissorsPaper":
      win(usersChoice, computersChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(usersChoice, computersChoice);
      break;
  }
}
function style() {
  document.querySelector("#rock").classList.add("background-choice");
  setTimeout(function () {
    document.querySelector("#rock").classList.remove("background-choice");
  }, 1000);
}

function main() {
  rock.addEventListener("click", function () {
    game("Rock");
    style();
  });
  paper.addEventListener("click", function () {
    game("Paper");
  });
  scissors.addEventListener("click", function () {
    game("Scissors");
  });
}

main();
