const diceImage = document.querySelector(".dice-image");
const scoreElement = document.querySelector(".score");
const resultElement = document.querySelector(".result");
const rollButton = document.querySelector(".roll-button");
const resetButton = document.querySelector(".reset-button");
const winningScoreInput = document.querySelector("#winning-score");

let score = 0;
let winningScore = 21;

function rollDice() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const diceImageSrc = `./images/dice${randomNum}.png`;
  diceImage.setAttribute("src", diceImageSrc);
  if (randomNum === 1) {
    score = 0;
    scoreElement.textContent = score;
    resultElement.textContent = "You Lose!";
    rollButton.disabled = true;
  } else {
    score += randomNum;
    scoreElement.textContent = score;
    if (score >= winningScore) {
      resultElement.textContent = "You Win!";
      rollButton.disabled = true;
    }
  }
}

function resetGame() {
  score = 0;
  scoreElement.textContent = score;
  resultElement.textContent = "";
  diceImage.setAttribute("src", "./images/opendice1.png");
  rollButton.disabled = false;
  winningScore = parseInt(winningScoreInput.value);
}

rollButton.addEventListener("click", rollDice);
resetButton.addEventListener("click", resetGame);
