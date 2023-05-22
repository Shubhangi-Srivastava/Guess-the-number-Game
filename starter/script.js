'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!! 🎉';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 15;
const randomNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = randomNum;
const backColor = (document.querySelector('body').style.backgroundColor =
  '#222');
const body = document.querySelector('body');
const condition = true;
let scoreCheck = Number(document.querySelector('.score').textContent);
let highScoreCheck = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum, typeof guessNum);

  if (!guessNum) {
    document.querySelector('.message').textContent = '⛔️No number added';
  } else if (guessNum < 1 || guessNum > 20) {
    document.querySelector('.message').textContent =
      '🚫Please select a number between 1 and 20';
  } else if (guessNum === randomNum) {
    document.querySelector('.message').textContent =
      '🎉 Correct Number!! Yayy!!';
    if (condition) {
      document.querySelector('body').style.backgroundColor = 'green';
    }
    document.querySelector('.highscore').textContent = scoreCheck;
    console.log(highScoreCheck);
  } else if (guessNum < randomNum) {
    document.querySelector('.message').textContent = '📉Too Low!';
    scoreCheck--;
    console.log(scoreCheck);
    document.querySelector('.score').textContent = scoreCheck;
  } else if (guessNum > randomNum) {
    document.querySelector('.message').textContent = '📈Too High!';
    scoreCheck--;
    console.log(scoreCheck);
    document.querySelector('.score').textContent = scoreCheck;
  }
});
