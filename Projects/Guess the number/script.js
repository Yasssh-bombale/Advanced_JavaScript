const randomeNumber = parseInt(Math.random() * 100 + 1);

// ****  ----> selectors
const button = document.querySelector("#btn");
const userInput = document.querySelector(".input");
const prevGuess = document.querySelector(".guesses");
const totalGuess = document.querySelector(".totalGuesses");
const error = document.querySelector(".lowORhigh");
// *-------------------------------------

const p = document.createElement("p");
