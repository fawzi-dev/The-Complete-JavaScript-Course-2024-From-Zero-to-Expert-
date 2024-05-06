'use strict';


// Selecting elementss
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');





// Scores
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function () {

  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;

    // Check for rolled dice
    if (dice !== 1) {

      // Add dice score to the player current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else {
      switchPlayer();
    }
  }

});


btnHold.addEventListener('click', function () {


  if (playing) {

    // Keeping the score for each users on hold
    scores[activePlayer] += currentScore;

    // Displaying the current score
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    // Any user who has 20 or more points wins the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {

      // switching the active 
      switchPlayer();
    }
  }



});


btnNewGame.addEventListener('click', function () {

  // Resetting scores and current values
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //Hiding the dice
  diceEl.classList.add('hidden');

  // Resetting active player
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');


  // Resetting displayed scores
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;


  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  //
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');

});
