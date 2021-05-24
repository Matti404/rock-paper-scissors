// let isGameStarted = false;

const pageFrontScreen = document.querySelector('.page-front');
const pageBackScreen = document.querySelector('.page-back');
const playBtn = document.querySelector('.play');
const myChoices = document.querySelector('.choices');

playBtn.addEventListener('click', () => {
    pageFrontScreen.classList.add('fadeOut');
    pageBackScreen.classList.add('fadeIn');

  // isGameStarted = true;

    myChoices.classList.add('visible');
});

let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const object1 = document.querySelector('.object1');
const object2 = document.querySelector('.object2');
const object3 = document.querySelector('.object3');
const clear = document.querySelector('.clear'); 
const winner = document.querySelector('.winner');
const playerPoint = document.querySelector('.player-result p');
const computerPoint = document.querySelector('.computer-result p');
const ring = document.querySelector('.lds-ring');

const items = [object1, object2, object3];

// Give color to icons after player choice and random computer choice
  
const ourChoice = (object) => {
    object.classList.toggle("colors");   
}

const computerChoice = (computerObject) => {
    computerObject.classList.toggle("computer-colors");   
}

const drawChoice = (drawObject) => {
    drawObject.classList.toggle('draw-colors');
}  
  
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
     

const getResult = (object, computerObject, text, score) => {
    score = score + 1;
    ourChoice(object);
    computerChoice(computerObject);
    compareResults(text);
}

const drawResult = (object, compObject, text) => {
    drawChoice(object);
    computerChoice(compObject);
    compareResults(text);
}

let game = true;

const checkForWinner = (playerSelection) => {
  if (game) {
    if (playerSelection === 'rock' && getComputerChoice() === 'scissors') {
      
        getResult(object1, object3, 'Player Wins', playerScore++);

    } else if (playerSelection === 'paper' && getComputerChoice() === 'rock') { 
      
        getResult(object2, object1, 'Player Wins', playerScore++)

    } else if (playerSelection === 'scissors' && getComputerChoice() === 'paper') {
    
        getResult(object3, object2, 'Player Wins', playerScore++);

    } else if (getComputerChoice() === 'rock' && playerSelection === 'scissors') {
      
        getResult(object3, object1, 'Computer Wins', computerScore++);
        
    } else if (getComputerChoice() === 'paper' && playerSelection === 'rock') {
      
        getResult(object1, object2, 'Computer Wins', computerScore++);
        
    } else if (getComputerChoice() === 'scissors' && playerSelection === 'paper') {
      
        getResult(object2, object3, 'Computer Wins', computerScore++);
        
    } else if (playerSelection === 'rock' && getComputerChoice() === 'rock') { 
            drawResult(object1, object1, 'It\'s a draw');
            computerScore++
            playerScore++
    } else if (playerSelection === 'paper' && getComputerChoice() === 'paper') {    
            drawResult(object2, object2, 'It\'s a draw');
            computerScore++
            playerScore++
    } else { 
            drawResult(object3, object3, 'It\'s a draw');
            computerScore++
            playerScore++
    }
    setTimeout(() => clearPicks(), 2000);
}

  if (playerScore == 5) {
        game = false;
        alert('Player has won the game');
        showLoader();
        resetGame();
    
  } else if (computerScore == 5) {
        alert('Computer has won the game');
        game = false;
        showLoader();
        resetGame();
    
  } else if (playerScore == 5 && computerScore == 5) {
        alert('It\'s a draw');
        game = false;
        showLoader();
        resetGame();
}

}

 function showLoader() {
    setTimeout(() => {
      ring.style.display = 'block';
    }, 2000)
 }

 function resetGame() {
    setTimeout(() => {
      ring.style.display = 'none';
      window.location.reload();
    }, 4000)
       
 }

  // Clearing colors of objects and winner text
  
const clearPicks = () => {
      playerPoint.innerHTML = playerScore;
      computerPoint.innerHTML = computerScore;
      object2.classList.remove('colors', 'computer-colors', 'draw-colors');
      object3.classList.remove('colors', 'computer-colors', 'draw-colors');
      object1.classList.remove('colors', 'computer-colors', 'draw-colors');
      winner.innerText = 'Make Your Choice';
};


// Function when cleared- renaming title back to "Make your Choice"
  
function backName () {
    winner.innerText = 'Make Your Choice';
}


// Event Listeners

rock.addEventListener('click', () => {
      getComputerChoice();
      checkForWinner('rock');
});
  
paper.addEventListener('click', () => {
      getComputerChoice();
      checkForWinner('paper');
}); 
  
scissors.addEventListener('click', () => {
      getComputerChoice();
      checkForWinner('scissors');   
});
  
clear.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      clearPicks();
      backName();
});
