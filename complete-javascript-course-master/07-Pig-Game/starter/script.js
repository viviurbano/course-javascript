'use strict';
//duas formas de selecionar um elemento por meio do ID
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`${dice}`);

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    currentScore += dice;
  }
});
