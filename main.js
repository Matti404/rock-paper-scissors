const game = () => {
  let playerScore = 0;
  let ComputerScore = 0;


// Rozpoczęcie gry
const startGame = () => {
  const playBtn = document.querySelector('.play');
  const pageFrontScreen = document.querySelector('.page-front');
  const pageBackScreen = document.querySelector('.page-back');


  playBtn.addEventListener('click', () => {
    pageFrontScreen.classList.add('fadeOut');
    pageBackScreen.classList.add('fadeIn');
  });
};



//Is call all the iiner function
startGame();
};


const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const object1 = document.querySelector('.object1');
const object2 = document.querySelector('.object2');
const object3 = document.querySelector('.object3');
const options = document.querySelector('.objects');


const items = [object1, object2, object3];

const drawRandomOption = () => {
  let randomValue = items[Math.floor(Math.random() * items.length)];
  console.log(randomValue)
  randomValue.classList.add('computer-colors');
}

//start the game function
game();

// Dodanie koloru do ikon


  const retro = object1.onclick = function() {
    object1.classList.toggle("colors")
    drawRandomOption(); 
  }
  
  const retro2 = object2.onclick = function() {
    object2.classList.toggle("colors")
    drawRandomOption();
  }
  
  const retro3 = object3.onclick = function() {
    object3.classList.toggle("colors")
    drawRandomOption();
  } 


/* // Dodanie wyboru komputera


const pick = () => {
  const types = ["object1", "object2", "object3"];
  const computer_choice = types[Math.floor(Math.random() * (types.length))];
  object1.classList.toggle("computer-colors") = types[random];
  object2.classList.toggle("computer-colors") = types[random];
  object3.classList.toggle("computer-colors") = types[random];
}







addColorRock.addEventListener('click', () => {
  getReady();
  pick();
});

addColorPaper.addEventListener('click', () => {
  getReady();
  pick();
});

addColorScissors.addEventListener('click', () => {
  getReady();
  pick();
});


function getReady() {
  const types = ["object1", "object2", "object3"];
  const computer_choice = types[Math.floor(Math.random() * (types.length))];
  options.classList.toggle("computer-colors") = computer_choice;
}

addColorRock.addEventListener('click', () => object1.style.backgroundColor = '#c9302c' && getReady()) */

rock.addEventListener('click', retro);
paper.addEventListener('click', retro2);
scissors.addEventListener('click', retro3);