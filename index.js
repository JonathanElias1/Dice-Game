//variables for game stats
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let player1turns = 0;
let player2turns = 0;
let player1lastScore = 0;
let player2lastScore = 0;
let currentRoll = 0;

function winner() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

//variables used to store references to DOM nodes
const player1Dice = document.getElementById(`player1Dice`);
const player2Dice = document.getElementById(`player2Dice`);
const player1Scoreboard = document.getElementById(`player1Scoreboard`);
const player2Scoreboard = document.getElementById(`player2Scoreboard`);
const message = document.getElementById(`message`);
const rollBtn = document.getElementById(`rollBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const doubleBtn = document.getElementById(`doubleBtn`);

rollBtn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  //this makes the current roll = to the dice value
  currentRoll = randomNumber;
  //find out which players turn it is
  if (player1Turn) {
    //if statement checking if its not zero because then
    //you want the last score checker to start
    if (player1Score != 0) {
      player1lastScore = player1Score;
    }
    player1Score = player1Score + randomNumber;
    player1Scoreboard.textContent = player1Score;
    message.textContent = `Player 2 Turn`;
    player1Dice.textContent = randomNumber;
    //if player 1 rolls the shadow can be removed
    //with active if not then u add it to player 2
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    player1turns++;
    doubleBtn.classList.remove("active");
  } else {
    if (player2Score != 0) {
      player2lastScore = player2Score;
    }
    player2Score = player2Score + randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    message.textContent = `Player 1 Turn`;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player2turns++;
    doubleBtn.classList.remove("active");
  }
  if (player1Score >= 20) {
    //message.textContent = `Player 1 Wins!`;
    fairGame();
    //winner();
  } else if (player2Score >= 20) {
    message.textContent = `Player 2 Wins!`;
    winner();
  }
  player1Turn = !player1Turn;
});

function doubleornothing() {
  //check if their current score is incremented by 5 or 6
  //by using their last score
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  currentRoll = randomNumber;
  //find out which players turn it is
  if (player1Turn) {
    if (randomNumber == 5 || randomNumber == 6) {
      currentRoll *= 2;
    } else {
      currentRoll = -6;
    }

    player1Score = player1Score + currentRoll;
    player1Scoreboard.textContent = player1Score;
    message.textContent = `Player 2 Turn`;
    player1Dice.textContent = randomNumber;
    //if player 1 rolls the shadow can be removed
    //with active if not then u add it to player 2
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    player1turns++;
    doubleBtn.classList.remove("active");
  } else {
    //start of player 2 logic
    if (randomNumber == 5 || randomNumber == 6) {
      currentRoll *= 2;
    } else {
      currentRoll = -6;
    }
    player2Score = player2Score + currentRoll;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    message.textContent = `Player 1 Turn`;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player2turns++;
    doubleBtn.classList.remove("active");
  }
  if (player1Score >= 20) {
    //message.textContent = `Player 1 Wins!`;
    fairGame();
    //winner();
  } else if (player2Score >= 20) {
    message.textContent = `Player 2 Wins!`;
    winner();
  }
  player1Turn = !player1Turn;
}

doubleBtn.addEventListener("click", function () {
  doubleornothing();
  doubleBtn.classList.add("active");
});

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  message.textContent = `Player 1 Turn`;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = `--`;
  player2Dice.textContent = `--`;
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  player1turns = 0;
  player2turns = 0;
  doubleBtn.classList.remove("active");
}

function fairGame() {
  // this is implied in parent function --->if(player1Score >= 20)
  if (player1turns > player2turns) {
    message.textContent = `Player 2 has one more chance to roll higher`;
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
  }
  if (player1turns === player2turns && player1Score > player2Score) {
    console.log(`player 1 wins`);
    message.textContent = `Player 1 wins in ${player1turns} turns`;
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
  }
  // player 2 score>player 1 after fair rolls
  else if (player1turns === player2turns && player1Score < player2Score) {
    message.textContent = `Player 2 wins in ${player2turns} turns`;
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
    console.log(`player 2's last roll made them win`);
  }
  //TIE after fair rolls
  else if (player1turns === player2turns && player1Score === player2Score) {
    message.textContent = `It's a tie`;
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
    console.log(`it's a tie`);
  }
}

//to swtich from player to player you can either do
/* 

if (player1Turn){
    player1Turn = false
} else { 
        player1Turn = true
}

BUT instead of doing this you can just do
player1Turn = !player1Turn which is the same thing because
the ! before the variable makes it the opposite of that 
variable so if !player1Turn is true than player1Turn= false
and if !player1Turn is false then player1Turn = true
*/

//Pseudocode FOR FAIR GAME
//for each turn for player 1 make a count variable that ++
//if the count variable .contains more turns than player 2
//invoke player 2 turn
//where if player 2 score is greater than player 1 player 2 wins
//and if player 2 score is less than player 1 player wins
//and if they tie, return its a tie
//if the count variable contains less turns than player 2
//invoke player 1 wins
//if the count variable is equal to player 2
//invoke player 1 wins
//do this same thing for player 2 so everyone has equal amount of turns

//double or nothing pseudocode
//if double or nothing buttons click invoke shadow
//create a do while function where
//next player turn starts
//while a function that checks if its 5 or 6 is happening
//if its not a 5 or 6 give them negative 6
//if it is, give them multiply their result by 2
