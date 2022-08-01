'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').innerText = message;
};

//To select the button element
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').innerText = 'No number!';
    displayMessage('No number!');
    //When the player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').innerText = 'Correct Number ...';
    displayMessage('Correct Number ...');
    document.querySelector('.number').innerText = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerText = highscore;
    }

    //when guess is to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').innerText =
      //   guess > secretNumber ? 'To high!' : 'To low!';
      displayMessage(guess > secretNumber ? 'To high!' : 'To low!');
      score--;
      document.querySelector('.score').innerText = score;
    } else {
      displayMessage('You lost the game!');
      //document.querySelector('.message').innerText = 'You lost the game!';
      document.querySelector('.score').innerText = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').innerText = score;
  //document.querySelector('.message').innerText = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').innerText = '?';
  document.querySelector('.guess').value = '';
});
