'use strict';

// console.log(displayMessage();)

// displayMessage(); = '🥳 Correct Number ';


// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 23;


// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;



let score = 20;
let highscore = 0;

document.querySelector('.highscore').textContent = highscore;


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {


  const guess = Number(document.querySelector('.guess').value);


  if (!guess) {


    displayMessage('⛔ No number!');
  }
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#2cab5b';
    score++;
    document.querySelector('.score').textContent = score;


    if (score > highscore) {

      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? displayMessage('📈 Too High') : displayMessage('📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;

    }
    document.body.style.backgroundColor = '#eb4034';
  }

});



document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
});