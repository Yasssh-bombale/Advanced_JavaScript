let randomeNumber = parseInt(Math.random() * 100 + 1);

// ****  ----> selectors
const button = document.querySelector("#btn");
const userInput = document.querySelector(".input");
const prevGuess = document.querySelector(".guesses");
const totalGuess = document.querySelector(".totalGuesses");
const error = document.querySelector(".lowORhigh");
const resultPara = document.querySelector(".resultPara");
// *-------------------------------------

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter valid number`);
  } else if (guess < 1) {
    alert(`enter number more than 1`);
  } else if (guess > 100) {
    alert(`enter number less than 100`);
  } else {
    previousGuess.push(guess);
    if (numGuess >= 10) {
      displayPrevGuess(guess);
      displayMeassage(`Game Over Random number was :${randomeNumber}`);
      endGame();
    } else {
      displayPrevGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomeNumber) {
    displayMeassage(`You guessed it right you won !`);
    endGame();
  } else if (guess < randomeNumber) {
    displayMeassage(`Guess is Too Low`);
  } else if (guess > randomeNumber) {
    displayMeassage(`Guess is Too High`);
  }
}
function displayPrevGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess},`;
  numGuess++;
  totalGuess.innerHTML = `${11 - numGuess}`;
}
function displayMeassage(message) {
  error.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.setAttribute("disabled", "");
  button.setAttribute("disabled", "");
  playGame = false;
  p.classList.add("button");
  p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
  resultPara.appendChild(p);
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", (e) => {
    randomeNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute("disabled");
    button.removeAttribute("disabled");
    previousGuess = [];
    prevGuess.innerHTML = "";
    error.innerHTML = "";
    numGuess = 1;
    totalGuess.innerHTML = `${11 - numGuess}`;
    resultPara.removeChild(p);
    playGame = true;
  });
}
