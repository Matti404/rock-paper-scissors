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
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const object1 = document.querySelector('.object1');
const object2 = document.querySelector('.object2');
const object3 = document.querySelector('.object3');
const myChoices = document.querySelector('.choices');
const clear = document.querySelector('.clear'); 
const winner = document.querySelector('.winner');
const playerPoint = document.querySelector('.player-result p')
const computerPoint = document.querySelector('.computer-result p')
  
// Give color to icons after player choice and random computer choice
  
const ourChoices = (object) => {
    object.classList.toggle("colors");
      
  } 
    /*const items = [object1, object2, object3];

    const drawRandomComputerOption = () => {
        const randomValue = items[Math.floor(Math.random() * 3)];
        randomValue.classList.toggle('computer-colors');
        
      }  
   */
  
 // function for computer picking random buttons
 const getComputerChoice = () => {
    const elements = ['rock', 'paper', 'scissors'];
    const randomElements = Math.floor(Math.random() * 3);
    return elements[randomElements];
 }


 compareResults = (text) => {  
    winner.innerText = text;
    playerPoint.innerHTML = playerScore;
    computerPoint.innerHTML = computerScore;
}
 // Chceck for who is the winner

 /* const checkForWinner = (playerSelection) => {
   console.log(playerSelection, getComputerChoice())
 if ((playerSelection === 'rock' && getComputerChoice() === 'scissors')
      || (playerSelection === 'paper' && getComputerChoice() === 'rock') ||
     (playerSelection === 'scissors' && getComputerChoice() === 'paper')) {
      console.log('Player Win');
      compareResults('Player wins');
      stopIncreasingPlayerPoints();
       
} else if ((playerSelection === 'paper' && getComputerChoice() === 'scissors') || 
      (playerSelection === 'rock' && getComputerChoice() === 
      'paper') || (playerSelection === 'scissors' && getComputerChoice() === 'rock')) {
      console.log('Computer Won');
      compareResults('Computer wins');
      stopIncreasingComputerPoints();
  
} else {
      console.log('It is a draw'); 
      compareResults('It\'s a draw');
      stopIncreasingPlayerPoints()
      stopIncreasingComputerPoints(); 
          
}

setTimeout(() => clearPicks(), 2000);
}
*/

const checkForWinner = (playerSelection) => {

if (playerSelection === 'rock' && getComputerChoice() === 'scissors') {
    compareResults('Player wins');
    ourChoices(object1);
    object3.classList.toggle('computer-colors');
    console.log('Player Win');
    stopIncreasingPlayerPoints();
    resetGame();

} else if (playerSelection === 'paper' && getComputerChoice() === 'rock') { 
    compareResults('Player wins');
    ourChoices(object2)
    object1.classList.toggle('computer-colors');
    console.log('Player Win');
    stopIncreasingPlayerPoints();
    resetGame()

} else if (playerSelection === 'scissors' && getComputerChoice() === 'paper') {
    compareResults('Player wins');
    object2.classList.toggle('computer-colors');
    ourChoices(object3);
    console.log('Player Win');
    stopIncreasingPlayerPoints();
    resetGame();

} else if (getComputerChoice() === 'rock' && playerSelection === 'scissors') {
    compareResults('Computer wins');
    object1.classList.toggle('computer-colors');
    ourChoices(object3);
    console.log('Computer Win');
    stopIncreasingComputerPoints();
    resetGame();

} else if (getComputerChoice() === 'paper' && playerSelection === 'rock') {
    compareResults('Computer wins');
    object2.classList.toggle('computer-colors');
    ourChoices(object1);
    console.log('Computer Win'); 
    stopIncreasingComputerPoints();
    resetGame();

} else if (getComputerChoice() === 'scissors' && playerSelection === 'paper') { 
    compareResults('Computer wins');
    object3.classList.toggle('computer-colors');
    ourChoices(object2)
    console.log('Computer Win');
    stopIncreasingComputerPoints();
    resetGame();

} else {  
    compareResults('It\'s a draw');
    console.log('It is a draw');
    stopIncreasingPlayerPoints()
    stopIncreasingComputerPoints();
    resetGame()     
}
setTimeout(() => clearPicks(), 2000);

}

/*const resetScore = () => {
  if (playerScore == 3 || computerScore == 3) {
  const del = setTimeout(() => {
    playerScore === 0;
    computerScore === 0;
    clearTimeout(del)
  }, 3000)
}
}*/



 const stopIncreasingPlayerPoints = () => { 
    if (playerScore !== 3) {
        playerScore++;
    }
  }

const stopIncreasingComputerPoints = () => {
    if (computerScore !== 3) {
        computerScore++;
    }
  } 

// Make player points and computer points zero again

const resetGame = () => {
    setTimeout(() => {
        if (playerScore == 3 || computerScore == 3) {
          playerScore = 0;
          computerScore = 0;
        }
      }, 3000)
  }

  // Clearing colors of objects and winner text
  
  const clearPicks = () => {
      playerPoint.innerHTML = playerScore;
      computerPoint.innerHTML = computerScore;
      object2.classList.remove('colors', 'computer-colors');
      object3.classList.remove('colors', 'computer-colors');
      object1.classList.remove('colors', 'computer-colors');
      winner.innerText = 'Make your Choice';
  };


// Function when cleared renaming title back to Make your Choice
  
function backName () {
  winner.innerText = 'Make Your Choice';
}


  // Event Listeners
  rock.addEventListener('click', () => {
    getComputerChoice()
    checkForWinner('rock');
   
  });
  
  paper.addEventListener('click', () => {
    getComputerChoice()
    checkForWinner('paper');
    
  }); 
  
  scissors.addEventListener('click', () => {
    getComputerChoice()
    checkForWinner('scissors');
    
  });
  
  clear.addEventListener('click', () => {
    clearPicks();
    backName();
  });