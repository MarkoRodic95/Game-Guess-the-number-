"use strict";

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
let number = randomNumber();
let score = 20;
let highscore = 0;
const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);
const bodyBkgColor = (color) =>
  (document.querySelector("body").style.backgroundColor = color);
const lowerScore = () => score--;
const displayScore = (score) =>
  (document.querySelector(".score").textContent = score);
const displayRandomNumber = (number) =>
  (document.querySelector(".number").textContent = number);
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("There is no number to compare!");
  } else if (guess === number) {
    displayMessage("Right in the center!");
    bodyBkgColor("green");
    displayRandomNumber(number);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < number) {
    displayMessage("Too low!");
    bodyBkgColor("red");
    lowerScore();
    displayScore(score);
  } else if (guess > number) {
    displayMessage("Too high!");
    bodyBkgColor("red");
    lowerScore();
    displayScore(score);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = randomNumber();
  displayMessage("Start guessing...");
  bodyBkgColor("#222");
  displayScore(score);
  document.querySelector(".guess").value = "";
  displayRandomNumber("?");
});
