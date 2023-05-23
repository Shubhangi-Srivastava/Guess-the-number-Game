'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let scoreCheck = Number(document.querySelector('.score').textContent);
let highScoreCheck = Number(document.querySelector('.highscore').textContent);

//display a particular message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//click of button "check" code
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum, typeof guessNum);

  //no input
  if (!guessNum) {
    displayMessage('⛔️No number added');
  } else if (guessNum < 1 || guessNum > 20) {
    //input should be between 1 and 20
    displayMessage('🚫Please select a number between 1 and 20');
  } else if (guessNum === randomNum) {
    //input is equal to random number
    document.querySelector('.number').textContent = randomNum;

    displayMessage('🎉 Correct Number!! Yayy!!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scoreCheck > highScoreCheck) {
      highScoreCheck = scoreCheck;
      document.querySelector('.highscore').textContent = highScoreCheck;
    }
    console.log(highScoreCheck);
  } else if (guessNum !== randomNum) {
    if (scoreCheck > 1) {
      displayMessage(guessNum > randomNum ? '📈Too High!' : '📉Too Low!');
      scoreCheck--;
      console.log(scoreCheck);
      document.querySelector('.score').textContent = scoreCheck;
    } else {
      displayMessage('💣 You lost!');
    }
  }
});

//Click of button "Again" code
document.querySelector('.again').addEventListener('click', function () {
  scoreCheck = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreCheck;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
