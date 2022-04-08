'use strict';

const bodyEl = document.querySelector('body');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const againEl = document.querySelector('.again');
const highscoreEl = document.querySelector('.highscore');

// Generate secret number
const randromNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = randromNumber();
// console.log('secret', secretNumber);

// Check guess
let score = 20;
let highScore = 0;
checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // No input
  if (!guess) {
    messageEl.textContent = '🚫 No Number';
  }
  // player Wins
  else if (guess === secretNumber) {
    messageEl.textContent = '😀 Correct Number';
    bodyEl.style.backgroundColor = 'teal';
    numberEl.style.width = '30rem';
    numberEl.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      highscoreEl.textContent = highScore;
    }
  }
  // Guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent =
        guess > secretNumber ? '📉 Guess is High !' : '📉 Guess is low !';
    } else {
      messageEl.textContent = '😟 Game over !';
      scoreEl.textContent = '0';
    }
  }
});

// Reset game
againEl.addEventListener('click', function () {
  secretNumber = randromNumber();
  score = 20;
  messageEl.textContent = 'Start guessing...';
  guessEl.value = '';
  numberEl.style.width = '15rem';
  bodyEl.style.backgroundColor = '#222';
  numberEl.textContent = '?';
  scoreEl.textContent = score;

  // console.log('Reset', secretNumber);
});
