let playerScore = 0;
let computerScore = 0;


function computerPlay() {
   let array = [];
   array[0] = "rock";
   array[1] = "paper";
   array[2] = "scissors";
   
computerResult = array[Math.floor(Math.random()*array.length)];
return computerResult;
}



function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose rock, paper or scissors");
    computerSelection = computerPlay();
  
   if (playerSelection === computerSelection) {
      return "It's a tie!";
   } else if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore++;
      return "You've won! You picked rock, computer picked scissors!";
   } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      return "You've won! You picked paper, computer picked rock!";
   } else if (playerSelection == "scissors" && computerSelection == "paper") {
      playerScore++;
      return "You've won! You picked scissors, computer picked paper!";
   } else {
      computerScore++;
      return "Well you've lost, that is embarassing...";
   }
}


function game() {
   for (let i = 0; i < 8; i++) {
      console.log(playRound());
   }
   if (playerScore > computerScore) {
      console.log("You won the game of 8 rounds!");
   } else if (playerScore < computerScore) {
      console.log("You lost the game of 8 rounds");
   }
}



game();

















