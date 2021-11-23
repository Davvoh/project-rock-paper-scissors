function computerPlay() {
   let computerSelect= Math.floor(Math.random()*3);
   if (computerSelect===0) {
      computerSelect="paper";
      return computerSelect;
   }
   else if (computerSelect===1) {
      computerSelect="rock";
      return computerSelect;
   }
   else if (computerSelect===2) {
      computerSelect="scissors";
      return computerSelect;    
   }
}

function playerPlay() {
   let playerSelect= prompt("Pick Rock, Paper or Scissors", "");
   playerSelect= playerSelect.toLowerCase();
   return playerSelect;
}

function playRound() {
   let playerSelect = playerPlay();
   let computerSelect = computerPlay();
   let round = computerSelect+playerSelect;
     let result;
     alert("Player Selection: "+playerSelect);
     alert("Computer Selection: "+computerSelect);

     if (round==="paperrock") {
        result= "Computer wins!";
        return result;
     }
     else if (round==="paperpaper") {
        result= "It's a tie!";
        return result;
     }
     else if (round==="paperscissors") {
        result= "Player wins!";
        return result;
     }
     else if (round==="rockpaper") {
        result= "Player wins!";
        return result;
     }
     else if (round==="rockrock") {
        result= "It's a tie!";
        return result;
     }
     else if (round==="rockscissors") {
        result= "Computer Wins!";
        return result;
     }
     else if (round==="scissorsrock") {
        result= "Player Wins!";
        return result;
     }
     else if (round==="scissorpaper") {
        result= "Computer Wins!";
        return result;
     }
     else if (round==="scissorsscissors") {
        result= "It's a tie!";
        return result;
     }
}

function game() {
   let playerScore = 0;
   let computerScore = 0;
   for (let i = 0; i <5; i++) {
      let counter = playRound();
      alert(counter);
      if (counter=="Computer wins!") {
         computerScore = computerScore+1;
      }
      else if (counter=="Player Wins!") {
         playerScore = playerScore+1;
      }
   }
   if (playerScore < computerScore||computerScore > playerScore) {
      alert("Final Score! "+ "\nPlayer Score: "+playerScore+ "\nComputer Score: "+computerScore+"\nFinal Winner: Computer")
   }
   else if (playerScore > computerScore||computerScore < playerScore) {
      alert("Final Score! "+ "\nPlayer Score: "+playerScore+ "\nComputer Score: "+computerScore+"\nFinal Winner: Player")
   }
   else {
      alert("Final Score! "+ "\nPlayer Score: "+playerScore+ "\nComputer Score: "+computerScore+"\n Nobody Wins")
   }
}

game();