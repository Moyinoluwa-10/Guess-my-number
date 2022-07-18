// GAME FUNCTIONALITY

'use strict';
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}


// GENERATING RANDOM NUMBER TO BE COMPARED
let secretNumber = Math.ceil(Math.random() * 20);


// FUNCTIONALITY OF CHECK BUTTON

// Defining Variables
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');

check.addEventListener('click', () => {
  
  let guessValue = Number(guess.value);
  
  // When there is no input.
  // If no number is inputted, guess will be false. so 'not-guess'(!guess) will be true, therefore the condition will hold
  
  if (!guessValue) {
    displayMessage('No number ⛔');
  
    // When player wins
  
  } else if (guessValue === secretNumber) {

    displayMessage('Correct Number 🎉 ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = guess.offsetWidth + 'px';
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // scenario where the current highscore gets added to the previous score
    // highScore += score;
    // document.querySelector('.highscore').textContent = highScore;
    
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      
      if (guessValue > secretNumber) {
        displayMessage('Too high!');
      } else {
        displayMessage('Too Low!');
      }
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      displayMessage('You lost the game! 😟');
      document.querySelector('.score').textContent = 0;
    }
  }

});


// FUNCTIONALITY OF AGAIN BUTTON

const again = document.querySelector('.again');

again.addEventListener('click', () => {

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  let guess = document.querySelector('.guess');
  guess.value = '';
  secretNumber = Math.ceil(Math.random() * 20);

});

