// let isGameStarted = false;

const pageFrontScreen = document.querySelector('.page-front');
const pageBackScreen = document.querySelector('.page-back');
const playBtn = document.querySelector('.play');

playBtn.addEventListener('click', () => {
  pageFrontScreen.classList.add('fadeOut');
  pageBackScreen.classList.add('fadeIn');

  // isGameStarted = true;
  myChoices.classList.add('visible');
});

let playerScore = 0;
let computerScore = 0;
let round = 0;
let maxRounds = 3;
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const object1 = document.querySelector('.object1');
const object2 = document.querySelector('.object2');
const object3 = document.querySelector('.object3');
const myChoices = document.querySelector('.choices');
const clear = document.querySelector('.clear'); 
const playerPoint = document.querySelector('.player-result p')
const computerPoint = document.querySelector('.computer-result p')
const winner = document.querySelector('.winner');

  // Give color to icons after player choice and random computer choice
  
    const ourChoices = (object) => {
      object.classList.toggle("colors");
      drawRandomComputerOption();
    } 
    
   
  const items = [object1, object2, object3];

  const drawRandomComputerOption = () => {
      const randomValue = items[Math.floor(Math.random() * 3)];
      return randomValue.classList.toggle('computer-colors');
    }
 // function for computer picking random buttons
 const getComputerChoice = () => {
   const elements = ['rock', 'paper', 'scissors'];
   const randomElements = Math.floor(Math.random() * 3);
   drawRandomComputerOption();
   return elements[randomElements];
   
 }   


 compareResults = (text) => {
  updateScore()
  stopIncreasingPoints();
  drawRandomComputerOption();
  winner.innerText = text;
 }

 // Chceck for who is the winner
const checkForWinner = (playerSelection) => {
    console.log(playerSelection, getComputerChoice())
   // console.log('user choice => ' + playerSelection);
   if (playerSelection === 'rock' && getComputerChoice() === 'paper') {
    console.log('Player Win');
    playerScore++
    compareResults('Player wins');  
 } else if (playerSelection === 'rock' && getComputerChoice() === 'scissors') {
  console.log('Computer Won');
  computerScore++
  compareResults('Computer wins');
 } else if (playerSelection === 'paper' && getComputerChoice() === 'rock') {
  console.log('Player Win');
  playerScore++
  compareResults('Player wins'); 
 } else if (playerSelection === 'paper' && getComputerChoice() === 'scissors') {
  console.log('Computer Won');
  computerScore++
  compareResults('Computer wins');
 } else if (playerSelection === 'scissors' && getComputerChoice() === 'paper') {
  console.log('Player Win');
  playerScore++;
  compareResults('Player wins'); 
 } else if (playerSelection === 'scissors' && getComputerChoice() === 'rock') {
    console.log('Computer Won');
    computerScore++;
    compareResults('Computer wins');
 } else {
  console.log('It is a draw');
  playerScore++;
  computerScore++;
  compareResults('It\'s a draw');
 }

 setTimeout(() => clearPicks(), 3000);
}    

  
  // Clearing our picks with clear button
  
  function clearPicks() {
    object2.classList.remove('colors', 'computer-colors');
    object3.classList.remove('colors', 'computer-colors');
    object1.classList.remove('colors', 'computer-colors');
    updateScore()
  };
  
  // Function when cleared renaming title back to Make your Choice
  
  function backName () {
    winner.innerText = 'Make Your Choice';
  }
  
  // Updating Player or Computer choices
  
  const updateScore = () => {
    playerPoint.innerHTML = playerScore;
    computerPoint.innerHTML = computerScore;
  }

  // Winning a game function
   
   const stopIncreasingPoints = () => {
    round = round + 1;
    if (round >= maxRounds && playerScore > computerScore) {
      round = 0;
      playerScore = 0;
      computerScore = 0
      updateScore();
      alert("Player won the game");
    } else if (round >= maxRounds && computerScore > playerScore) {
      round = 0;
      playerScore = 0;
      computerScore = 0;
      updateScore();
      alert('Computer won the game');
    }
  }



  // Event Listeners
  rock.addEventListener('click', () => {
    ourChoices(object1);
    checkForWinner('rock');
  });
  
  paper.addEventListener('click', () => {
    ourChoices(object2)
    checkForWinner('paper');  
  }); 
  
  scissors.addEventListener('click', () => {
    ourChoices(object3);
    checkForWinner('scissors');
  });
  
  clear.addEventListener('click', () => {
    clearPicks();
    backName();
  });
  