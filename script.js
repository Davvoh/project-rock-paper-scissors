let playerScore = 0;
let computerScore = 0;
let playerScoreElement = document.getElementById("player-score");
let computerScoreElement = document.getElementById("computer-score");
let result = document.getElementById("result");
let playBtn = document.getElementById("play-again");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerHand = document.getElementById("player-hand");
let computerHand = document.getElementById("computer-hand");

rock.addEventListener('click', function() {
   playRound("rock")
});

paper.addEventListener('click', function() {
   playRound("paper")
});

scissors.addEventListener('click', function() {
   playRound("scissors")
});


function computerPlay() {
   let array = [];
   array[0] = "rock";
   array[1] = "paper";
   array[2] = "scissors";
   
computerResult = array[Math.floor(Math.random()*array.length)];
return computerResult;
};



function playRound(playerSelection) {
    computerSelection = computerPlay();

    showPlayedHand(playerHand, playerSelection);
    showPlayedHand(computerHand, computerSelection);
  
   if (playerSelection === computerSelection) {
      result.innerHTML = "It's a tie!";
   } else if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore++;
      result.innerHTML = "You've won! You picked rock, computer picked scissors!";
   } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      result.innerHTML = "You've won! You picked paper, computer picked rock!";
   } else if (playerSelection == "scissors" && computerSelection == "paper") {
      playerScore++;
      result.innerHTML = "You've won! You picked scissors, computer picked paper!";
   } else {
      computerScore++;
      result.innerHTML = "Well you've lost, how embarassing...";
   }
   
   playerScoreElement.innerHTML = "Score: " + playerScore;
   computerScoreElement.innerHTML = "Score: " + computerScore;  
   
   if(playerScore > 4) {
      result.innerHTML = "You win the game! AI's are no match for you!";
      hideButtons(); 
   }
   if(computerScore > 4) {
      result.innerHTML = "You lost the game! I would go again if i were you";
      hideButtons();
   }  
}

function showPlayedHand(player, hand) {
   let image;

   switch(hand) {
      case "rock":
         image = "images/rock.png"
         break;
      case "paper":
         image = "images/paper.png"
         break;
      case "scissors":
         image = "images/scissors.png"
         break;     
   }
   player.src = image;
}

function hideButtons() {
   rock.style.display = "none";
   paper.style.display = "none";
   scissors.style.display = "none";
   playBtn.style.display = "block";
}


















