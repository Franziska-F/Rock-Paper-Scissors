let userScore = 0;

let computerScore = 0;

const userScoreDisplay = document.querySelector("#user-score");

const computerScoreDisplay = document.querySelector("#computer-score");

const resultDisplay = document.querySelector(".result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getComputersChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rockPaperScissors[randomNumber];
}
function lose(user, computer) {
  computerScore++;
  computerScoreDisplay.innerHTML = computerScore;
  resultDisplay.innerHTML = `${computer} beats ${user}! Sally wins!`;
  document.getElementById(computer).classList.add("background-choice");
  setTimeout(function () {
    document.getElementById(computer).classList.remove("background-choice");
  }, 2000);
  document.getElementById(user).classList.add("user-background-choice");
  setTimeout(function () {
    document.getElementById(user).classList.remove("user-background-choice");
  }, 2000);
}

function win(user, computer) {
  userScore++;
  userScoreDisplay.innerHTML = userScore;
  resultDisplay.innerHTML = `${user} beats ${computer}! You win!`;
  document.getElementById(computer).classList.add("background-choice");
  setTimeout(function () {
    document.getElementById(computer).classList.remove("background-choice");
  }, 2000);
  document.getElementById(user).classList.add("user-background-choice");
  setTimeout(function () {
    document.getElementById(user).classList.remove("user-background-choice");
  }, 2000);
}

function draw(user, computer) {
  resultDisplay.innerHTML = `Draw!`;
  document.getElementById(computer).classList.add("background-choice");
  setTimeout(function () {
    document.getElementById(computer).classList.remove("background-choice");
  }, 2000);
  document.getElementById(user).classList.add("user-background-choice");
  setTimeout(function () {
    document.getElementById(user).classList.remove("user-background-choice");
  }, 2000);
}

function game(usersChoice) {
  const computersChoice = getComputersChoice();

  switch (usersChoice + computersChoice) {
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(usersChoice, computersChoice);
      break;
    case "rockscissors":
    case "paperock":
    case "scissorspaper":
      win(usersChoice, computersChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(usersChoice, computersChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });

  paper.addEventListener("click", function () {
    game("paper");
  });
  scissors.addEventListener("click", function () {
    game("scissors");
  });
}

main();
