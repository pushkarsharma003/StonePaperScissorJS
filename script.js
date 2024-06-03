'use strict';
const selectionButton = document.querySelectorAll('.selection-btn');
const selectionButtonDiv = document.querySelector('.selection-btn-div');
const computerSelectionDiv = document.querySelector('.computer-selection-div');
const humanSelectionDiv = document.querySelector('.human-selection-div');
const compSelectImg = document.querySelector('.comp-select-img');
const humanSelectImg = document.querySelector('.human-select-img');
const compScoreText = document.querySelector('.comp-score');
const humanScoreText = document.querySelector('.human-score');
const startDiv = document.querySelector('.start-div');
const compScoreDiv = document.querySelector('.comp-score-div');
const humanScoreDiv = document.querySelector('.human-score-div');
const gameOverScreen = document.querySelector('.overlay');
const gameOverText = document.querySelector('.game-over-notify');
const resetGame = document.querySelector('.reset');

let compScore = 0;
let humanScore = 0;
const winScore = 10;
let winner = '';
function getRandom() {
  return Math.trunc(Math.random() * 3 + 1);
}
function startGame() {
  selectionButtonDiv.classList.remove('hidden');
  startDiv.classList.add('hidden');
  computerSelectionDiv.classList.remove('hidden');
  humanSelectionDiv.classList.remove('hidden');

  selectionButton.forEach((button) => {
    button.addEventListener('click', () => {
      let computerSelection = getRandom();
      let humanSelection = Number(button.getAttribute('value'));
      const setImg1_link = `images/${computerSelection}.jpeg`;
      const setImg2_link = `images/${humanSelection}.jpeg`;
      compSelectImg.setAttribute('src', setImg1_link);
      compSelectImg.setAttribute('alt', 'Selected');
      humanSelectImg.setAttribute('src', setImg2_link);
      humanSelectImg.setAttribute('alt', 'Selected');
      compScoreDiv.classList.remove('hidden');
      humanScoreDiv.classList.remove('hidden');

      switch (true) {
        case computerSelection === 1 && humanSelection === 2:
          humanScore++;
          console.log('humanScore updated!');
          break;
        case computerSelection === 2 && humanSelection === 1:
          compScore++;
          break;
        case computerSelection === 2 && humanSelection === 3:
          humanScore++;
          break;
        case computerSelection === 3 && humanSelection === 2:
          compScore++;
          break;
        case computerSelection === 1 && humanSelection === 3:
          compScore++;
          break;
        case computerSelection === 3 && humanSelection === 1:
          humanScore++;
          break;
        case computerSelection === humanSelection:
          break;
      }

      console.log(
        `computer score: ${compScore} | | player score: ${humanScore}`
      );

      compScoreText.textContent = compScore;
      humanScoreText.textContent = humanScore;

      if (compScore === winScore) {
        winner = 'Computer';
        setWinnerVisuals();
      } else if (humanScore === winScore) {
        winner = 'You';
        setWinnerVisuals();
      }
    });
  });
}

function setWinnerVisuals() {
  resetGame.addEventListener('click', () => {
    gameOverScreen.classList.add('hidden');
    compScore = 0;
    humanScore = 0;
    compScoreText.textContent = humanScore;
    humanScoreText.textContent = compScore;
    compSelectImg.setAttribute('src', '');
    humanSelectImg.setAttribute('src', '');
    compSelectImg.setAttribute('alt', 'Not Selected Yet');
    humanSelectImg.setAttribute('alt', 'Not Selected Yet');
  });
  gameOverScreen.classList.remove('hidden');
  gameOverText.textContent = ` ${
    winner === 'You' ? 'You win.' : 'You lost. Better luck next time.'
  }`;
}
