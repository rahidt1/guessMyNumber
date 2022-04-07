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
let secretNumber = Math.trunc(Math.random() * 20 + 1);
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
  // Guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = '📉 Guess is low !';
    } else {
      messageEl.textContent = '😟 Game over !';
      scoreEl.textContent = '0';
    }
  }
  // Guess is High
  else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = '📈 Guess is High !';
    } else {
      messageEl.textContent = '😟 Game over !';
      scoreEl.textContent = '0';
    }
  }
});

// Reset game
againEl.addEventListener('click', function () {
  messageEl.textContent = 'Start guessing...';
  guessEl.value = '';
  numberEl.style.width = '15rem';
  bodyEl.style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  numberEl.textContent = '?';
  score = 20;
  scoreEl.textContent = score;

  // console.log('Reset', secretNumber);
});
