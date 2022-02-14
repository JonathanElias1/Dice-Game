//variables for game stats
let player1Score = 0;
let player2Score = 0;
player1Turn = true;

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

//click event listener for roll dice
rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  //find out which players turn it is
  if (player1Turn) {
    player1Score = player1Score + randomNumber;
    player1Scoreboard.textContent = player1Score;
    message.textContent = `Player 2 Turn`;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    //if player 1 rolls the shadow can be removed
    //with active if not then u add it to player 2
  } else {
    player2Score = player2Score + randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    message.textContent = `Player 1 Turn`;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
  }
  if (player1Score >= 20) {
    message.textContent = `Player 1 Wins!`;
    winner();
  } else if (player2Score >= 20) {
    message.textContent = `Player 2 Wins!`;
    winner();
  }
  player1Turn = !player1Turn;
});

// function doubleornothing() {
//   if ((player1Turn = true)) {
//     player1Score = player1Score * 2;
//     player1Dice.textContent = player1Score;
//     player1Scoreboard.textContent = player1Score;
//   } else {
//     console.log(`no`);
//   }
// }

// doubleBtn.addEventListener("click", function () {
//   doubleornothing();
//   doubleBtn.classList.add("active");
// });

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

// 1. Display the dice number instead of logging it out
// 2. Use the 'active' class to show which player's turn it is
// Hint: use the .classList.remove() and classList.add() methods
// 3. Update the "message" DOM node so that it */
